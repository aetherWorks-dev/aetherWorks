var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _audioRingBuffer, _datas, _options, _audioDataProvider, _currentAudioData, _currentAudioDataView, _currentAudioDataOffset, _silenceWarningLogTime, _errorLogTime, _generateSample, generateSample_fn, _logCurrentAudioData, logCurrentAudioData_fn;
class RingBuffer {
  /** Allocate the SharedArrayBuffer for a RingBuffer, based on the type and
   * capacity required
   * @param {number} capacity The number of elements the ring buffer will be
   * able to hold.
   * @param {TypedArray} type A typed array constructor, the type that this ring
   * buffer will hold.
   * @return {SharedArrayBuffer} A SharedArrayBuffer of the right size.
   * @static
   */
  static getStorageForCapacity(capacity, type) {
    if (!type.BYTES_PER_ELEMENT) {
      throw "Pass in a ArrayBuffer subclass";
    }
    var bytes = 8 + (capacity + 1) * type.BYTES_PER_ELEMENT;
    return new SharedArrayBuffer(bytes);
  }
  /**
   * @constructor
   * @param {SharedArrayBuffer} sab A SharedArrayBuffer obtained by calling
   * {@link RingBuffer.getStorageFromCapacity}.
   * @param {TypedArray} type A typed array constructor, the type that this ring
   * buffer will hold.
   */
  constructor(sab, type) {
    if (!ArrayBuffer.__proto__.isPrototypeOf(type) && type.BYTES_PER_ELEMENT !== void 0) {
      throw "Pass a concrete typed array class as second argument";
    }
    this._type = type;
    this._capacity = (sab.byteLength - 8) / type.BYTES_PER_ELEMENT;
    this.buf = sab;
    this.write_ptr = new Uint32Array(this.buf, 0, 1);
    this.read_ptr = new Uint32Array(this.buf, 4, 1);
    this.storage = new type(this.buf, 8, this._capacity);
  }
  /**
   * @return the type of the underlying ArrayBuffer for this RingBuffer. This
   * allows implementing crude type checking.
   */
  type() {
    return this._type.name;
  }
  /**
   * Push elements to the ring buffer.
   * @param {TypedArray} elements A typed array of the same type as passed in the ctor, to be written to the queue.
   * @param {Number} length If passed, the maximum number of elements to push.
   * If not passed, all elements in the input array are pushed.
   * @return the number of elements written to the queue.
   */
  push(elements, length) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    if ((wr + 1) % this._storage_capacity() == rd) {
      return 0;
    }
    var len = length != void 0 ? length : elements.length;
    let to_write = Math.min(this._available_write(rd, wr), len);
    let first_part = Math.min(this._storage_capacity() - wr, to_write);
    let second_part = to_write - first_part;
    this._copy(elements, 0, this.storage, wr, first_part);
    this._copy(elements, first_part, this.storage, 0, second_part);
    Atomics.store(
      this.write_ptr,
      0,
      (wr + to_write) % this._storage_capacity()
    );
    return to_write;
  }
  /**
   * Write bytes to the ring buffer using callbacks. This create wrapper
   * objects and can GC, so it's best to no use this variant from a real-time
   * thread such as an AudioWorklerProcessor `process` method.
   * The callback is passed two typed arrays of the same type, to be filled.
   * This allows skipping copies if the API that produces the data writes is
   * passed arrays to write to, such as `AudioData.copyTo`.
   * @param {number} amount The maximum number of elements to write to the ring
   * buffer. If amount is more than the number of slots available for writing,
    * then the number of slots available for writing will be made available: no
    * overwriting of elements can happen.
    * @param {Function} cb A callback with two parameters, that are two typed
    * array of the correct type, in which the data need to be copied. It is
    * necessary to write exactly the number of elements determined by the size
    * of the two typed arrays.
    * @return The number of elements written to the queue.
   */
  writeCallback(amount, cb) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    if ((wr + 1) % this._storage_capacity() == rd) {
      return 0;
    }
    let to_write = Math.min(this._available_write(rd, wr), amount);
    let first_part = Math.min(this._storage_capacity() - wr, to_write);
    let second_part = to_write - first_part;
    var first_part_buf = new this._type(this.storage.buffer, 8 + wr * 4, first_part);
    var second_part_buf = new this._type(this.storage.buffer, 8 + 0, second_part);
    cb(first_part_buf, second_part_buf);
    Atomics.store(
      this.write_ptr,
      0,
      (wr + to_write) % this._storage_capacity()
    );
    return to_write;
  }
  /**
   * Read up to `elements.length` elements from the ring buffer. `elements` is a typed
   * array of the same type as passed in the ctor.
   * Returns the number of elements read from the queue, they are placed at the
   * beginning of the array passed as parameter.
   * @param {TypedArray} elements An array in which the elements read from the
   * queue will be written, starting at the beginning of the array.
   * @param {Number} length If passed, the maximum number of elements to pop. If
   * not passed, up to elements.length are popped.
   * @return The number of elements read from the queue.
   */
  pop(elements, length) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    if (wr == rd) {
      return 0;
    }
    var len = length != void 0 ? length : elements.length;
    let to_read = Math.min(this._available_read(rd, wr), len);
    let first_part = Math.min(this._storage_capacity() - rd, to_read);
    let second_part = to_read - first_part;
    this._copy(this.storage, rd, elements, 0, first_part);
    this._copy(this.storage, 0, elements, first_part, second_part);
    Atomics.store(this.read_ptr, 0, (rd + to_read) % this._storage_capacity());
    return to_read;
  }
  /**
   * @return True if the ring buffer is empty false otherwise. This can be late
   * on the reader side: it can return true even if something has just been
   * pushed.
   */
  empty() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return wr == rd;
  }
  /**
   * @return True if the ring buffer is full, false otherwise. This can be late
   * on the write side: it can return true when something has just been popped.
   */
  full() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return (wr + 1) % this._storage_capacity() == rd;
  }
  /**
   * @return The usable capacity for the ring buffer: the number of elements
   * that can be stored.
   */
  capacity() {
    return this._capacity - 1;
  }
  /**
   * @return The number of elements available for reading. This can be late, and
   * report less elements that is actually in the queue, when something has just
   * been enqueued.
   */
  available_read() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return this._available_read(rd, wr);
  }
  /**
   * @return The number of elements available for writing. This can be late, and
   * report less elements that is actually available for writing, when something
   * has just been dequeued.
   */
  available_write() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return this._available_write(rd, wr);
  }
  // private methods //
  /**
   * @return Number of elements available for reading, given a read and write
   * pointer.
   * @private
   */
  _available_read(rd, wr) {
    return (wr + this._storage_capacity() - rd) % this._storage_capacity();
  }
  /**
   * @return Number of elements available from writing, given a read and write
   * pointer.
   * @private
   */
  _available_write(rd, wr) {
    return this.capacity() - this._available_read(rd, wr);
  }
  /**
   * @return The size of the storage for elements not accounting the space for
   * the index, counting the empty slot.
   * @private
   */
  _storage_capacity() {
    return this._capacity;
  }
  /**
   * Copy `size` elements from `input`, starting at offset `offset_input`, to
   * `output`, starting at offset `offset_output`.
   * @param {TypedArray} input The array to copy from
   * @param {Number} offset_input The index at which to start the copy
   * @param {TypedArray} output The array to copy to
   * @param {Number} offset_output The index at which to start copying the elements to
   * @param {Number} size The number of elements to copy
   * @private
   */
  _copy(input, offset_input, output, offset_output, size) {
    for (var i = 0; i < size; i++) {
      output[offset_output + i] = input[offset_input + i];
    }
  }
}
const READ_CHUNK_SIZE = 384 * 2 * 2;
class SharedMemoryEmulatorAudioDataProvider {
  constructor(config) {
    __privateAdd(this, _audioRingBuffer, void 0);
    __privateSet(this, _audioRingBuffer, new RingBuffer(config.audioBuffer, Uint8Array));
  }
  audioData() {
    if (__privateGet(this, _audioRingBuffer).empty()) {
      return void 0;
    }
    const audioDataLength = __privateGet(this, _audioRingBuffer).available_read();
    const audioData = new Uint8Array(
      Math.min(audioDataLength, READ_CHUNK_SIZE)
    );
    __privateGet(this, _audioRingBuffer).pop(audioData);
    return audioData;
  }
}
_audioRingBuffer = new WeakMap();
class FallbackEmulatorAudioDataProvider {
  constructor(processor) {
    __privateAdd(this, _datas, []);
    processor.port.onmessage = (e) => {
      if (e.data.type === "data") {
        __privateGet(this, _datas).push(e.data.data);
      } else if (e.data.type === "reset") {
        __privateSet(this, _datas, []);
      }
    };
  }
  audioData() {
    return __privateGet(this, _datas).shift();
  }
}
_datas = new WeakMap();
class EmulatorPlaybackProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    __privateAdd(this, _generateSample);
    __privateAdd(this, _logCurrentAudioData);
    __privateAdd(this, _options, void 0);
    __privateAdd(this, _audioDataProvider, void 0);
    __privateAdd(this, _currentAudioData, void 0);
    __privateAdd(this, _currentAudioDataView, void 0);
    __privateAdd(this, _currentAudioDataOffset, 0);
    __privateAdd(this, _silenceWarningLogTime, -1);
    __privateAdd(this, _errorLogTime, -1);
    __privateSet(this, _options, options.processorOptions);
    const { config } = __privateGet(this, _options);
    if (config.type === "shared-memory") {
      __privateSet(this, _audioDataProvider, new SharedMemoryEmulatorAudioDataProvider(
        config
      ));
    } else {
      __privateSet(this, _audioDataProvider, new FallbackEmulatorAudioDataProvider(
        this
      ));
    }
  }
  process(inputs, outputs, parameters) {
    var _a;
    const output = outputs[0];
    const sampleCount = output[0].length;
    for (let i = 0; i < sampleCount; i++) {
      for (const channel of output) {
        try {
          channel[i] = __privateMethod(this, _generateSample, generateSample_fn).call(this);
        } catch (e) {
          if (currentTime - __privateGet(this, _errorLogTime) > 1) {
            console.error(
              `Could not generate sample (size=${(_a = __privateGet(this, _currentAudioData)) == null ? void 0 : _a.byteLength} offset=${__privateGet(this, _currentAudioDataOffset)})`,
              e
            );
            __privateSet(this, _errorLogTime, currentTime);
          }
          channel[i] = 0;
        }
      }
    }
    return true;
  }
}
_options = new WeakMap();
_audioDataProvider = new WeakMap();
_currentAudioData = new WeakMap();
_currentAudioDataView = new WeakMap();
_currentAudioDataOffset = new WeakMap();
_silenceWarningLogTime = new WeakMap();
_errorLogTime = new WeakMap();
_generateSample = new WeakSet();
generateSample_fn = function() {
  if (!__privateGet(this, _currentAudioData) || __privateGet(this, _currentAudioData).byteLength === __privateGet(this, _currentAudioDataOffset)) {
    __privateSet(this, _currentAudioData, __privateGet(this, _audioDataProvider).audioData());
    __privateSet(this, _currentAudioDataOffset, 0);
    if (__privateGet(this, _currentAudioData)) {
      __privateSet(this, _currentAudioDataView, new DataView(
        __privateGet(this, _currentAudioData).buffer,
        __privateGet(this, _currentAudioData).byteOffset
      ));
      if (__privateGet(this, _options).debug && false) {
        __privateMethod(this, _logCurrentAudioData, logCurrentAudioData_fn).call(this);
      }
    }
  }
  if (!__privateGet(this, _currentAudioData) || !__privateGet(this, _currentAudioDataView) || __privateGet(this, _currentAudioData).byteLength === __privateGet(this, _currentAudioDataOffset)) {
    if (__privateGet(this, _options).debug && currentTime - __privateGet(this, _silenceWarningLogTime) > 1) {
      console.warn("No audio data, generating silence");
      __privateSet(this, _silenceWarningLogTime, currentTime);
    }
    return 0;
  }
  switch (__privateGet(this, _options).sampleSize) {
    case 16: {
      const sample16 = __privateGet(this, _currentAudioDataView).getInt16(
        __privateGet(this, _currentAudioDataOffset)
      );
      __privateSet(this, _currentAudioDataOffset, __privateGet(this, _currentAudioDataOffset) + 2);
      return sample16 / 32768;
    }
    case 8: {
      const sample8 = __privateGet(this, _currentAudioDataView).getInt8(
        __privateGet(this, _currentAudioDataOffset)
      );
      __privateSet(this, _currentAudioDataOffset, __privateGet(this, _currentAudioDataOffset) + 1);
      return sample8 / 128;
    }
    default:
      throw new Error(
        `Unsupported sample size: ${__privateGet(this, _options).sampleSize}`
      );
  }
};
_logCurrentAudioData = new WeakSet();
logCurrentAudioData_fn = function() {
  if (!__privateGet(this, _currentAudioData) || !__privateGet(this, _currentAudioDataView)) {
    return;
  }
  const v = [];
  let repeat = 1;
  const sampleSize = __privateGet(this, _options).sampleSize >> 3;
  for (let i = 0; i < __privateGet(this, _currentAudioData).byteLength; i += sampleSize) {
    const sample = (sampleSize === 2 ? __privateGet(this, _currentAudioDataView).getUint16(i) : __privateGet(this, _currentAudioDataView).getUint8(i)).toString(16);
    if (v.length > 0 && v[v.length - 1] === sample) {
      repeat++;
      continue;
    }
    if (repeat > 1) {
      v[v.length - 1] += `•${repeat}`;
    }
    repeat = 1;
    v.push(sample);
  }
  if (v.length === 1 && v[0] === "0") {
    return;
  }
  if (repeat > 1) {
    v[v.length - 1] += `•${repeat}`;
  }
  console.log("Got audio data: " + v.join(" "));
};
registerProcessor("emulator-playback-processor", EmulatorPlaybackProcessor);
