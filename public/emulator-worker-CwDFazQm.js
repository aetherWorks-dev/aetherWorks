var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _audioRingBuffer, _sender, _inputBufferView, _fallbackEndpoint, _inputBuffer, _inputQueue, _screenBufferView, _videoModeBufferView, _blitSender, _blitSender2, _filesBufferView, _fallbackEndpoint2, _spec, _delegate, _loadedChunks, _forEachChunkInRange, forEachChunkInRange_fn, _loadChunk, loadChunk_fn, _receiveRingBuffer, _fallbackEndpoint3, _packets, _clipboardBufferView, _clipboardData, clipboardData_fn, _fallbackEndpoint4, _data, _clipboardData2, clipboardData_fn2, _disks, _openedDisks, _pendingDiskNames, _lastDiskWriteTime, _diskIdCounter, _removableDisks, _useRemovableDisks, _emscriptenModule, _disk, _upload, _spec2, _delegate2, _dataHandle, _dirtyChunksHandle, _dirtyChunks, _chunksToRead, _chunksToReadCount, _disk2, _deviceHeader, _emscriptenModule2, _video, _input, _audio, _files, _ethernet, _clipboard, _videoOpenTime, _lastBlitFrameId, _nextExpectedBlitTime, _lastIdleWaitFrameId, _markedQuiescent, _handledStop, _delayedDiskSpecs, _diskSavers, _ethernetMacAddress, _abortError, _idleWait, idleWait_fn, _sleep, sleep_fn, _markQuiescent, markQuiescent_fn, _periodicTasks, periodicTasks_fn, _handleFileRequests, handleFileRequests_fn, _handleFileUpload, handleFileUpload_fn, _handleStop, handleStop_fn, _closeDiskSavers, closeDiskSavers_fn, _commandQueue, _consumeCommands, consumeCommands_fn, _fetchCommands, fetchCommands_fn, _fetchSync, fetchSync_fn;
const InputBufferAddresses = {
  globalLockAddr: 0,
  mousePositionFlagAddr: 1,
  mousePositionXAddr: 2,
  mousePositionYAddr: 3,
  mouseButtonStateAddr: 4,
  mouseButton2StateAddr: 16,
  mouseDeltaXAddr: 13,
  mouseDeltaYAddr: 14,
  keyEventFlagAddr: 5,
  keyCodeAddr: 6,
  keyStateAddr: 7,
  keyModifiersAddr: 15,
  stopFlagAddr: 8,
  ethernetInterruptFlagAddr: 9,
  audioContextRunningFlagAddr: 10,
  speedFlagAddr: 11,
  speedAddr: 12,
  useMouseDeltasFlagAddr: 17,
  useMouseDeltasAddr: 18
};
var LockStates = /* @__PURE__ */ ((LockStates2) => {
  LockStates2[LockStates2["READY_FOR_UI_THREAD"] = 0] = "READY_FOR_UI_THREAD";
  LockStates2[LockStates2["UI_THREAD_LOCK"] = 1] = "UI_THREAD_LOCK";
  LockStates2[LockStates2["READY_FOR_EMUL_THREAD"] = 2] = "READY_FOR_EMUL_THREAD";
  LockStates2[LockStates2["EMUL_THREAD_LOCK"] = 3] = "EMUL_THREAD_LOCK";
  return LockStates2;
})(LockStates || {});
function generateChunkUrl(spec, chunk) {
  return `${spec.baseUrl}/${spec.chunks[chunk]}.chunk#${chunk}`;
}
function updateInputBufferWithEvents(inputEvents, inputBufferView) {
  let hasMousePosition = false;
  let mousePositionX = 0;
  let mousePositionY = 0;
  let mouseDeltaX = 0;
  let mouseDeltaY = 0;
  let mouseButtonState = -1;
  let mouseButton2State = -1;
  let hasKeyEvent = false;
  let keyCode = -1;
  let keyState = -1;
  let keyModifiers = 0;
  let hasStop = false;
  let hasStart = false;
  let hasEthernetInterrupt = false;
  let hasAudioContextRunning = false;
  const remainingEvents = [];
  for (const inputEvent of inputEvents) {
    switch (inputEvent.type) {
      case "mousemove":
        if (hasMousePosition) {
          break;
        }
        hasMousePosition = true;
        mousePositionX = inputEvent.x;
        mousePositionY = inputEvent.y;
        mouseDeltaX = inputEvent.deltaX;
        mouseDeltaY = inputEvent.deltaY;
        break;
      case "mousedown":
      case "mouseup":
        if (inputEvent.button === 2) {
          mouseButton2State = inputEvent.type === "mousedown" ? 1 : 0;
        } else {
          mouseButtonState = inputEvent.type === "mousedown" ? 1 : 0;
        }
        break;
      case "keydown":
      case "keyup":
        if (hasKeyEvent) {
          remainingEvents.push(inputEvent);
          break;
        }
        hasKeyEvent = true;
        keyState = inputEvent.type === "keydown" ? 1 : 0;
        keyCode = inputEvent.keyCode;
        keyModifiers = inputEvent.modifiers ?? 0;
        break;
      case "stop":
        hasStop = true;
        break;
      case "start":
        hasStart = true;
        break;
      case "ethernet-interrupt":
        hasEthernetInterrupt = true;
        break;
      case "audio-context-running":
        hasAudioContextRunning = true;
        break;
      case "set-speed":
        inputBufferView[InputBufferAddresses.speedFlagAddr] = 1;
        inputBufferView[InputBufferAddresses.speedAddr] = inputEvent.speed;
        break;
      case "set-use-mouse-deltas":
        inputBufferView[InputBufferAddresses.useMouseDeltasFlagAddr] = 1;
        inputBufferView[InputBufferAddresses.useMouseDeltasAddr] = inputEvent.useMouseDeltas ? 1 : 0;
    }
  }
  if (hasMousePosition) {
    inputBufferView[InputBufferAddresses.mousePositionFlagAddr] = 1;
    inputBufferView[InputBufferAddresses.mousePositionXAddr] = mousePositionX;
    inputBufferView[InputBufferAddresses.mousePositionYAddr] = mousePositionY;
    inputBufferView[InputBufferAddresses.mouseDeltaXAddr] = mouseDeltaX;
    inputBufferView[InputBufferAddresses.mouseDeltaYAddr] = mouseDeltaY;
  }
  inputBufferView[InputBufferAddresses.mouseButtonStateAddr] = mouseButtonState;
  inputBufferView[InputBufferAddresses.mouseButton2StateAddr] = mouseButton2State;
  if (hasKeyEvent) {
    inputBufferView[InputBufferAddresses.keyEventFlagAddr] = 1;
    inputBufferView[InputBufferAddresses.keyCodeAddr] = keyCode;
    inputBufferView[InputBufferAddresses.keyStateAddr] = keyState;
    inputBufferView[InputBufferAddresses.keyModifiersAddr] = keyModifiers;
  }
  if (hasStop) {
    inputBufferView[InputBufferAddresses.stopFlagAddr] = 1;
  }
  if (hasStart) {
    inputBufferView[InputBufferAddresses.stopFlagAddr] = 0;
  }
  inputBufferView[InputBufferAddresses.ethernetInterruptFlagAddr] = hasEthernetInterrupt ? 1 : 0;
  if (hasAudioContextRunning) {
    inputBufferView[InputBufferAddresses.audioContextRunningFlagAddr] = 1;
  }
  return remainingEvents;
}
const diskImageExtensions = [
  ".iso",
  ".hda",
  ".dsk",
  ".img",
  ".image",
  ".toast",
  ".cdr",
  ".smi"
];
function isDiskImageFile(name) {
  name = name.toLowerCase();
  return diskImageExtensions.some((ext) => name.endsWith(ext));
}
function ethernetMacAddressToString(mac) {
  return Array.from(mac).map((b) => b.toString(16).padStart(2, "0")).join(":");
}
function ethernetMacAddressFromString(mac) {
  return new Uint8Array(mac.split(":").map((s) => parseInt(s, 16)));
}
const ETHERNET_PING_HEADER = [112, 105, 110, 103, 80, 73, 78, 71];
const ETHERNET_PING_PAYLOAD_LENGTH = ETHERNET_PING_HEADER.length + 4;
const ETHERNET_PING_PACKET_LENGTH = 6 + 6 + 2 + ETHERNET_PING_PAYLOAD_LENGTH;
const ETHERNET_PONG_HEADER = [112, 105, 110, 103, 80, 79, 78, 71, 33];
const ETHERNET_PONG_PAYLOAD_LENGTH = ETHERNET_PONG_HEADER.length + 4;
const ETHERNET_PONG_PACKET_LENGTH = 6 + 6 + 2 + ETHERNET_PONG_PAYLOAD_LENGTH;
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
class SharedMemoryEmulatorWorkerAudio {
  constructor(config) {
    __privateAdd(this, _audioRingBuffer, void 0);
    __privateSet(this, _audioRingBuffer, new RingBuffer(config.audioBuffer, Uint8Array));
  }
  audioBufferSize() {
    return __privateGet(this, _audioRingBuffer).available_read();
  }
  enqueueAudio(newAudio) {
    const availableWrite = __privateGet(this, _audioRingBuffer).available_write();
    if (availableWrite < newAudio.byteLength) {
      console.warn(
        `Audio buffer cannot fit new audio (${newAudio.byteLength} bytes), only ${availableWrite} bytes available.`
      );
      return;
    }
    __privateGet(this, _audioRingBuffer).push(newAudio);
  }
}
_audioRingBuffer = new WeakMap();
class FallbackEmulatorWorkerAudio {
  constructor(config, sender) {
    __privateAdd(this, _sender, void 0);
    __privateSet(this, _sender, sender);
  }
  audioBufferSize() {
    return 0;
  }
  enqueueAudio(newAudio) {
    __privateGet(this, _sender).call(this, new Uint8Array(newAudio));
    return newAudio.length;
  }
}
_sender = new WeakMap();
class SharedMemoryEmulatorWorkerInput {
  constructor(config) {
    __privateAdd(this, _inputBufferView, void 0);
    __privateSet(this, _inputBufferView, new Int32Array(
      config.inputBuffer,
      0,
      config.inputBufferSize
    ));
  }
  idleWait(timeout) {
    const waitResult = Atomics.wait(
      __privateGet(this, _inputBufferView),
      InputBufferAddresses.globalLockAddr,
      LockStates.READY_FOR_UI_THREAD,
      timeout
    );
    const hadInput = waitResult === "ok";
    return hadInput;
  }
  acquireInputLock() {
    return tryToAcquireCyclicalLock(
      __privateGet(this, _inputBufferView),
      InputBufferAddresses.globalLockAddr
    );
  }
  releaseInputLock() {
    resetInputBuffer(__privateGet(this, _inputBufferView));
    releaseCyclicalLock(
      __privateGet(this, _inputBufferView),
      InputBufferAddresses.globalLockAddr
    );
  }
  getInputValue(addr) {
    return __privateGet(this, _inputBufferView)[addr];
  }
}
_inputBufferView = new WeakMap();
function tryToAcquireCyclicalLock(bufferView, lockIndex) {
  const res = Atomics.compareExchange(
    bufferView,
    lockIndex,
    LockStates.READY_FOR_EMUL_THREAD,
    LockStates.EMUL_THREAD_LOCK
  );
  if (res === LockStates.READY_FOR_EMUL_THREAD) {
    return 1;
  }
  return 0;
}
function releaseCyclicalLock(bufferView, lockIndex) {
  Atomics.store(bufferView, lockIndex, LockStates.READY_FOR_UI_THREAD);
}
class FallbackEmulatorWorkerInput {
  constructor(config, fallbackEndpoint) {
    __privateAdd(this, _fallbackEndpoint, void 0);
    __privateAdd(this, _inputBuffer, void 0);
    __privateAdd(this, _inputQueue, []);
    __privateSet(this, _fallbackEndpoint, fallbackEndpoint);
    __privateSet(this, _inputBuffer, new Int32Array(config.inputBufferSize));
  }
  idleWait(timeout) {
    __privateGet(this, _fallbackEndpoint).idleWait(timeout);
    return false;
  }
  acquireInputLock() {
    __privateSet(this, _inputQueue, __privateGet(this, _inputQueue).concat(
      __privateGet(this, _fallbackEndpoint).consumeInputEvents()
    ));
    __privateSet(this, _inputQueue, updateInputBufferWithEvents(
      __privateGet(this, _inputQueue),
      __privateGet(this, _inputBuffer)
    ));
    return 1;
  }
  releaseInputLock() {
    resetInputBuffer(__privateGet(this, _inputBuffer));
  }
  getInputValue(addr) {
    return __privateGet(this, _inputBuffer)[addr];
  }
}
_fallbackEndpoint = new WeakMap();
_inputBuffer = new WeakMap();
_inputQueue = new WeakMap();
function resetInputBuffer(inputBuffer) {
  inputBuffer[InputBufferAddresses.mousePositionFlagAddr] = 0;
  inputBuffer[InputBufferAddresses.mousePositionXAddr] = 0;
  inputBuffer[InputBufferAddresses.mousePositionYAddr] = 0;
  inputBuffer[InputBufferAddresses.mouseButtonStateAddr] = 0;
  inputBuffer[InputBufferAddresses.keyEventFlagAddr] = 0;
  inputBuffer[InputBufferAddresses.keyCodeAddr] = 0;
  inputBuffer[InputBufferAddresses.keyStateAddr] = 0;
  inputBuffer[InputBufferAddresses.speedFlagAddr] = 0;
  inputBuffer[InputBufferAddresses.speedAddr] = 0;
}
class SharedMemoryEmulatorWorkerVideo {
  constructor(config, blitSender) {
    __privateAdd(this, _screenBufferView, void 0);
    __privateAdd(this, _videoModeBufferView, void 0);
    __privateAdd(this, _blitSender, void 0);
    __privateSet(this, _screenBufferView, new Uint8Array(
      config.screenBuffer,
      0,
      config.screenBufferSize
    ));
    __privateSet(this, _videoModeBufferView, new Int32Array(
      config.videoModeBuffer,
      0,
      config.videoModeBufferSize
    ));
    __privateSet(this, _blitSender, blitSender);
  }
  blit(data, rect) {
    __privateGet(this, _videoModeBufferView)[0] = data.length;
    __privateGet(this, _screenBufferView).set(data);
    __privateGet(this, _blitSender).call(this, { type: "shared-memory", rect });
  }
}
_screenBufferView = new WeakMap();
_videoModeBufferView = new WeakMap();
_blitSender = new WeakMap();
class FallbackEmulatorWorkerVideo {
  constructor(config, blitSender) {
    __privateAdd(this, _blitSender2, void 0);
    __privateSet(this, _blitSender2, blitSender);
  }
  blit(data, rect) {
    data = new Uint8Array(data);
    __privateGet(this, _blitSender2).call(this, {
      type: "fallback",
      data,
      rect
    }, [data.buffer]);
  }
}
_blitSender2 = new WeakMap();
class SharedMemoryEmulatorWorkerFiles {
  constructor(config) {
    __privateAdd(this, _filesBufferView, void 0);
    __privateSet(this, _filesBufferView, new Uint8Array(
      config.filesBuffer,
      0,
      config.filesBufferSize
    ));
  }
  consumeRequests() {
    const endOfString = __privateGet(this, _filesBufferView).indexOf(0);
    if (endOfString === -1) {
      console.warn("Could not find null terminator.");
      return { uploads: [], cdroms: [] };
    }
    const actionsString = new TextDecoder().decode(
      // TextDecoder does not like shared buffers, and we need to truncate
      // anyway.
      __privateGet(this, _filesBufferView).slice(0, endOfString)
    );
    const actions = JSON.parse(actionsString);
    if ((!actions.uploads || actions.uploads.length === 0) && (!actions.cdroms || actions.cdroms.length === 0)) {
      return { uploads: [], cdroms: [] };
    }
    const uploads = Array.from(actions.uploads);
    const cdroms = Array.from(actions.cdroms);
    actions.uploads = [];
    actions.cdroms = [];
    const actionsBytes = new TextEncoder().encode(JSON.stringify(actions));
    __privateGet(this, _filesBufferView).set(actionsBytes);
    __privateGet(this, _filesBufferView).set([0], actionsBytes.length);
    return { uploads, cdroms };
  }
}
_filesBufferView = new WeakMap();
class FallbackEmulatorWorkerFiles {
  constructor(config, fallbackEndpoint) {
    __privateAdd(this, _fallbackEndpoint2, void 0);
    __privateSet(this, _fallbackEndpoint2, fallbackEndpoint);
  }
  consumeRequests() {
    const uploads = __privateGet(this, _fallbackEndpoint2).consumeFileUploads();
    const cdroms = __privateGet(this, _fallbackEndpoint2).consumeCDROMs();
    return { uploads, cdroms };
  }
}
_fallbackEndpoint2 = new WeakMap();
function getUploadData(upload, range) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "arraybuffer";
  xhr.open("GET", upload.url, false);
  let expectedSize = upload.size;
  if (range) {
    const [start, end] = range;
    expectedSize = end - start;
    xhr.setRequestHeader("Range", `bytes=${start}-${end - 1}`);
  }
  xhr.send();
  const data = new Uint8Array(xhr.response);
  if (data.byteLength !== expectedSize) {
    console.warn(
      `Lazy file from URL ${upload.url} was expected to have size ${expectedSize} but instead had ${data.byteLength}`
    );
  }
  return data;
}
function createLazyFile(parent, name, url, size, canRead, canWrite) {
  const contents = new Uint8Array(size);
  const file = FS.createDataFile(
    parent,
    name,
    contents,
    canRead,
    canWrite,
    // Set canOwn so that MEMFS uses `contents` directly, and we can mutate
    // it later when loading the contents on demand.
    true
  );
  const defaultStreamOps = file.stream_ops;
  file.stream_ops = {
    ...defaultStreamOps,
    read(...args) {
      const data = getUploadData({ name, size, url });
      contents.set(data);
      file.stream_ops.read = defaultStreamOps.read;
      file.stream_ops = defaultStreamOps;
      return defaultStreamOps.read.apply(this, args);
    }
  };
  return file;
}
function initializeExtractor() {
  FS.mkdir(EXTRACTOR_DIRECTORY);
}
function handleExtractionRequests() {
  const SEEN_CUTOFF_TIME = Date.now() - 2e3;
  for (const childName of FS.readdir(EXTRACTOR_DIRECTORY)) {
    if (childName.startsWith(".")) {
      continue;
    }
    const childPath = EXTRACTOR_DIRECTORY + "/" + childName;
    if (extractedPaths.has(childPath)) {
      continue;
    }
    const seenTime = seenTimes.get(childPath);
    if (seenTime === void 0) {
      seenTimes.set(childPath, Date.now());
      continue;
    } else if (seenTime >= SEEN_CUTOFF_TIME) {
      continue;
    }
    const { object: fsObject } = FS.analyzePath(childPath);
    if (FS.isDir(fsObject.mode)) {
      extractedPaths.add(childPath);
      extractDirectory(childPath);
    } else if (FS.isFile(fsObject.mode)) {
      extractedPaths.add(childPath);
      extractFile(childPath);
    }
  }
}
const EXTRACTOR_DIRECTORY = "/Shared/Uploads";
const seenTimes = /* @__PURE__ */ new Map();
const extractedPaths = /* @__PURE__ */ new Set();
function prepareDirectoryExtraction(dirPath) {
  const { name: dirName, parentPath: dirParentPath } = FS.analyzePath(dirPath);
  const arrayBuffers = [];
  const extraction = {
    name: dirName,
    contents: []
  };
  function extract(dirPath2, entries) {
    for (const childName of FS.readdir(dirPath2)) {
      if (childName === "." || childName === "..") {
        continue;
      }
      const childPath = dirPath2 + "/" + childName;
      const { object: fsObject } = FS.analyzePath(childPath);
      if (FS.isDir(fsObject.mode)) {
        const dirEntry = {
          name: childName,
          contents: []
        };
        entries.push(dirEntry);
        extract(childPath, dirEntry.contents);
      } else {
        const fileContents = FS.readFile(childPath, {
          encoding: "binary"
        });
        entries.push({
          name: childName,
          contents: fileContents
        });
        arrayBuffers.push(fileContents.buffer);
      }
    }
  }
  extract(dirPath, extraction.contents);
  const dInfoPath = `${dirParentPath}/.finf/${dirName}`;
  const { exists: dInfoExists } = FS.analyzePath(dInfoPath);
  if (dInfoExists) {
    extraction.contents.push({
      name: "DInfo",
      contents: FS.readFile(dInfoPath, {
        encoding: "binary"
      })
    });
  }
  return [extraction, arrayBuffers];
}
function extractDirectory(dirPath) {
  const [extraction, arrayBuffers] = prepareDirectoryExtraction(dirPath);
  self.postMessage(
    { type: "emulator_extract_directory", extraction },
    arrayBuffers
  );
}
function extractFile(filePath) {
  const { name: fileName, parentPath: fileParentPath } = FS.analyzePath(filePath);
  const arrayBuffers = [];
  const extraction = {
    name: fileName,
    contents: []
  };
  function extract(filePath2, entries) {
    const fileContents = FS.readFile(filePath2, {
      encoding: "binary"
    });
    entries.push({
      name: fileName,
      contents: fileContents
    });
    arrayBuffers.push(fileContents.buffer);
  }
  extract(filePath, extraction.contents);
  function extractParentDir(dirName) {
    const dirPath = `${fileParentPath}/${dirName}/${fileName}`;
    if (FS.analyzePath(dirPath).exists) {
      const dirEntry = {
        name: dirName,
        contents: []
      };
      extraction.contents.push(dirEntry);
      extract(dirPath, dirEntry.contents);
    }
  }
  extractParentDir(".rsrc");
  extractParentDir(".finf");
  self.postMessage(
    { type: "emulator_extract_directory", extraction },
    arrayBuffers
  );
}
class EmulatorWorkerChunkedDisk {
  constructor(spec, delegate) {
    __privateAdd(this, _forEachChunkInRange);
    __privateAdd(this, _loadChunk);
    __privateAdd(this, _spec, void 0);
    __privateAdd(this, _delegate, void 0);
    __privateAdd(this, _loadedChunks, /* @__PURE__ */ new Map());
    __privateSet(this, _spec, spec);
    __privateSet(this, _delegate, delegate);
  }
  get name() {
    return __privateGet(this, _spec).name;
  }
  get size() {
    return __privateGet(this, _spec).totalSize;
  }
  read(buffer, offset, length) {
    let readSize = 0;
    __privateMethod(this, _forEachChunkInRange, forEachChunkInRange_fn).call(this, offset, length, (chunk, chunkStart, chunkEnd, chunkIndex) => {
      var _a, _b;
      const chunkOffset = offset - chunkStart;
      const chunkLength = Math.min(chunkEnd - offset, length);
      (_b = (_a = __privateGet(this, _delegate)).willReadChunk) == null ? void 0 : _b.call(
        _a,
        chunk,
        chunkIndex,
        chunkOffset,
        chunkLength
      );
      buffer.set(
        chunk.subarray(chunkOffset, chunkOffset + chunkLength),
        readSize
      );
      offset += chunkLength;
      length -= chunkLength;
      readSize += chunkLength;
    });
    return readSize;
  }
  write(buffer, offset, length) {
    let writeSize = 0;
    __privateMethod(this, _forEachChunkInRange, forEachChunkInRange_fn).call(this, offset, length, (chunk, chunkStart, chunkEnd, chunkIndex) => {
      var _a, _b;
      const chunkOffset = offset - chunkStart;
      const chunkLength = Math.min(chunkEnd - offset, length);
      chunk.set(
        buffer.subarray(writeSize, writeSize + chunkLength),
        chunkOffset
      );
      (_b = (_a = __privateGet(this, _delegate)).didWriteChunk) == null ? void 0 : _b.call(
        _a,
        chunk,
        chunkIndex,
        chunkOffset,
        chunkLength
      );
      offset += chunkLength;
      length -= chunkLength;
      writeSize += chunkLength;
    });
    return writeSize;
  }
  doChunkRequest(spec, chunkIndex) {
    const chunkUrl = generateChunkUrl(spec, chunkIndex);
    const xhr = new XMLHttpRequest();
    xhr.responseType = "arraybuffer";
    xhr.open("GET", chunkUrl, false);
    try {
      xhr.send();
    } catch (e) {
      return { error: `Error: ${e}`, chunkUrl };
    }
    if (xhr.status !== 200) {
      return {
        error: `HTTP status ${xhr.status}: (${xhr.statusText}`,
        chunkUrl
      };
    }
    const chunk = new Uint8Array(xhr.response);
    return { chunk };
  }
  validate() {
    const spec = __privateGet(this, _spec);
    const prefetchedChunks = new Set(spec.prefetchChunks);
    const needsPrefetch = [];
    const extraPrefetch = [];
    for (const chunk of __privateGet(this, _loadedChunks).keys()) {
      if (!prefetchedChunks.has(chunk)) {
        needsPrefetch.push(chunk);
      }
    }
    for (const chunk of prefetchedChunks) {
      if (!__privateGet(this, _loadedChunks).has(chunk)) {
        extraPrefetch.push(chunk);
      }
    }
    const numberCompare = (a, b) => a - b;
    if (extraPrefetch.length || needsPrefetch.length) {
      const prefix = `Chunked file "${spec.name}" (mounted at "${spec.baseUrl}")`;
      if (extraPrefetch.length) {
        console.warn(
          `${prefix} had unnecessary chunks prefetched:`,
          extraPrefetch.sort(numberCompare)
        );
      }
      if (needsPrefetch.length) {
        console.warn(
          `${prefix} needs more chunks prefetched:`,
          needsPrefetch.sort(numberCompare)
        );
      }
      console.warn(
        `${prefix} complete set of ideal prefetch chunks: ${JSON.stringify(
          Array.from(__privateGet(this, _loadedChunks).keys()).sort(numberCompare)
        )}`
      );
    }
  }
}
_spec = new WeakMap();
_delegate = new WeakMap();
_loadedChunks = new WeakMap();
_forEachChunkInRange = new WeakSet();
forEachChunkInRange_fn = function(offset, length, callback) {
  const { chunkSize } = __privateGet(this, _spec);
  const startChunk = Math.floor(offset / chunkSize);
  const endChunk = Math.floor((offset + length - 1) / chunkSize);
  for (let chunkIndex = startChunk; chunkIndex <= endChunk; chunkIndex++) {
    let chunk = __privateGet(this, _loadedChunks).get(chunkIndex);
    if (!chunk) {
      chunk = __privateMethod(this, _loadChunk, loadChunk_fn).call(this, chunkIndex);
      __privateGet(this, _loadedChunks).set(chunkIndex, chunk);
    }
    if (!__privateGet(this, _loadedChunks).has(chunkIndex)) {
      __privateMethod(this, _loadChunk, loadChunk_fn).call(this, chunkIndex);
    }
    callback(
      chunk,
      chunkIndex * chunkSize,
      (chunkIndex + 1) * chunkSize,
      chunkIndex
    );
  }
};
_loadChunk = new WeakSet();
loadChunk_fn = function(chunkIndex) {
  const { chunkSize } = __privateGet(this, _spec);
  const chunkStart = chunkIndex * chunkSize;
  if (chunkStart >= this.size) {
    return new Uint8Array(chunkSize);
  }
  const chunkSignature = __privateGet(this, _spec).chunks[chunkIndex];
  if (!chunkSignature) {
    return new Uint8Array(chunkSize);
  }
  __privateGet(this, _delegate).willLoadChunk(chunkIndex);
  const result = this.doChunkRequest(__privateGet(this, _spec), chunkIndex);
  __privateGet(this, _delegate).didLoadChunk(chunkIndex);
  if ("error" in result) {
    __privateGet(this, _delegate).didFailToLoadChunk(
      chunkIndex,
      result.chunkUrl,
      result.error
    );
    return new Uint8Array(chunkSize);
  }
  let { chunk } = result;
  if (chunk.length < chunkSize) {
    const newChunk = new Uint8Array(chunkSize);
    newChunk.set(chunk);
    chunk = newChunk;
  }
  return chunk;
};
class SharedMemoryEmulatorWorkerEthernet {
  constructor(config) {
    __privateAdd(this, _receiveRingBuffer, void 0);
    __privateSet(this, _receiveRingBuffer, new RingBuffer(
      config.receiveBuffer,
      Uint8Array
    ));
  }
  read(packet) {
    if (__privateGet(this, _receiveRingBuffer).empty()) {
      return 0;
    }
    const packetHeader = new Uint8Array(2);
    __privateGet(this, _receiveRingBuffer).pop(packetHeader);
    const packetLength = new DataView(packetHeader.buffer).getUint16(0);
    const readPacket = new Uint8Array(packetLength);
    __privateGet(this, _receiveRingBuffer).pop(readPacket);
    packet.set(readPacket);
    return packetLength;
  }
}
_receiveRingBuffer = new WeakMap();
class FallbackEmulatorWorkerEthernet {
  constructor(config, fallbackEndpoint) {
    __privateAdd(this, _fallbackEndpoint3, void 0);
    __privateAdd(this, _packets, []);
    __privateSet(this, _fallbackEndpoint3, fallbackEndpoint);
  }
  read(packet) {
    for (const packet2 of __privateGet(this, _fallbackEndpoint3).consumeEthernetReceives()) {
      __privateGet(this, _packets).push(packet2);
    }
    if (!__privateGet(this, _packets).length) {
      return 0;
    }
    const readPacket = __privateGet(this, _packets).shift();
    packet.set(readPacket);
    return readPacket == null ? void 0 : readPacket.byteLength;
  }
}
_fallbackEndpoint3 = new WeakMap();
_packets = new WeakMap();
function sendEthernetPacket(destination, packet) {
  postMessage(
    {
      type: "emulator_ethernet_write",
      destination,
      packet
    },
    [packet.buffer]
  );
}
function handlePingPacket(packet, length, ourMacAddress) {
  if (length !== ETHERNET_PING_PACKET_LENGTH) {
    return false;
  }
  for (let i = 0; i < ETHERNET_PING_HEADER.length; i++) {
    if (packet[14 + i] !== ETHERNET_PING_HEADER[i]) {
      return false;
    }
  }
  const packetView = new DataView(packet.buffer, packet.byteOffset);
  const senderMacAddress = packet.subarray(6, 12);
  const sendTime = packetView.getUint32(14 + ETHERNET_PING_HEADER.length);
  const pongPacket = new Uint8Array(ETHERNET_PONG_PACKET_LENGTH);
  const pongPacketView = new DataView(pongPacket.buffer);
  pongPacket.set(senderMacAddress, 0);
  pongPacket.set(ourMacAddress, 6);
  pongPacketView.setUint16(12, ETHERNET_PONG_PAYLOAD_LENGTH);
  pongPacket.set(ETHERNET_PONG_HEADER, 14);
  pongPacketView.setUint32(14 + ETHERNET_PONG_HEADER.length, sendTime);
  sendEthernetPacket(
    ethernetMacAddressToString(senderMacAddress),
    pongPacket
  );
  return true;
}
class SharedMemoryEmulatorWorkerClipboard {
  constructor(config) {
    __privateAdd(this, _clipboardData);
    __privateAdd(this, _clipboardBufferView, void 0);
    __privateSet(this, _clipboardBufferView, new Uint8Array(
      config.clipboardBuffer,
      0,
      config.clipboardBufferSize
    ));
  }
  clipboardText() {
    const clipboardData = __privateMethod(this, _clipboardData, clipboardData_fn).call(this);
    return clipboardData == null ? void 0 : clipboardData.text;
  }
}
_clipboardBufferView = new WeakMap();
_clipboardData = new WeakSet();
clipboardData_fn = function() {
  const endOfString = __privateGet(this, _clipboardBufferView).indexOf(0);
  if (endOfString === -1) {
    console.warn("Could not find null terminator.");
    return void 0;
  }
  const dataString = new TextDecoder().decode(
    // TextDecoder does not like shared buffers, and we need to truncate
    // anyway.
    __privateGet(this, _clipboardBufferView).slice(0, endOfString)
  );
  return JSON.parse(dataString);
};
class FallbackEmulatorWorkerClipboard {
  constructor(config, fallbackEndpoint) {
    __privateAdd(this, _clipboardData2);
    __privateAdd(this, _fallbackEndpoint4, void 0);
    __privateAdd(this, _data, void 0);
    __privateSet(this, _fallbackEndpoint4, fallbackEndpoint);
  }
  clipboardText() {
    const clipboardData = __privateMethod(this, _clipboardData2, clipboardData_fn2).call(this);
    return clipboardData == null ? void 0 : clipboardData.text;
  }
}
_fallbackEndpoint4 = new WeakMap();
_data = new WeakMap();
_clipboardData2 = new WeakSet();
clipboardData_fn2 = function() {
  __privateSet(this, _data, __privateGet(this, _fallbackEndpoint4).consumeSetClipboardData() ?? __privateGet(this, _data));
  return __privateGet(this, _data);
};
const EMULATOR_REMOVABLE_DISK_COUNT = 7;
function emulatorNeedsDeviceImage(type) {
  return type === "DingusPPC";
}
class EmulatorWorkerDisksApi {
  constructor(disks, useRemovableDisks, emscriptenModule) {
    __privateAdd(this, _disks, void 0);
    __privateAdd(this, _openedDisks, /* @__PURE__ */ new Map());
    __privateAdd(this, _pendingDiskNames, []);
    __privateAdd(this, _lastDiskWriteTime, 0);
    __privateAdd(this, _diskIdCounter, 0);
    __privateAdd(this, _removableDisks, []);
    __privateAdd(this, _useRemovableDisks, void 0);
    __privateAdd(this, _emscriptenModule, void 0);
    __privateSet(this, _disks, disks);
    __privateSet(this, _useRemovableDisks, useRemovableDisks);
    __privateSet(this, _emscriptenModule, emscriptenModule);
    if (useRemovableDisks) {
      for (let i = 0; i < EMULATOR_REMOVABLE_DISK_COUNT; i++) {
        __privateGet(this, _removableDisks).push(new EmulatorRemovableDisk());
      }
    }
  }
  isMediaPresent(diskId) {
    const disk = __privateGet(this, _openedDisks).get(diskId);
    if (!disk) {
      throw new Error(`Disk not found: ${diskId}`);
    }
    if (!(disk instanceof EmulatorRemovableDisk)) {
      return true;
    }
    return disk.hasDisk();
  }
  isFixedDisk(diskId) {
    const disk = __privateGet(this, _openedDisks).get(diskId);
    if (!disk) {
      throw new Error(`Disk not found: ${diskId}`);
    }
    return !(disk instanceof EmulatorRemovableDisk);
  }
  eject(diskId) {
    const disk = __privateGet(this, _openedDisks).get(diskId);
    if (!disk) {
      throw new Error(`Disk not found: ${diskId}`);
    }
    if (!(disk instanceof EmulatorRemovableDisk)) {
      console.warn("Cannot eject non-removable disk");
      return;
    }
    disk.eject();
  }
  addDisk(disk) {
    if (__privateGet(this, _useRemovableDisks)) {
      const removableDisk = __privateGet(this, _removableDisks).find(
        (cd) => !cd.hasDisk()
      );
      if (removableDisk) {
        removableDisk.insert(disk);
        return;
      } else {
        console.warn(
          "No empty removable disk drive found, discarding disk"
        );
      }
      return;
    }
    __privateGet(this, _disks).push(disk);
    __privateGet(this, _pendingDiskNames).push(disk.name);
  }
  open(name) {
    const diskId = __privateWrapper(this, _diskIdCounter)._++;
    let disk;
    if (name.startsWith("/placeholder/")) {
      const index = parseInt(name.slice("/placeholder/".length));
      disk = __privateGet(this, _removableDisks)[index];
    } else {
      disk = __privateGet(this, _disks).find((d) => d.name === name);
    }
    if (!disk) {
      console.warn(`Disk not found: ${name}`);
      return -1;
    }
    __privateGet(this, _openedDisks).set(diskId, disk);
    return diskId;
  }
  close(diskId) {
    const disk = __privateGet(this, _openedDisks).get(diskId);
    if (!disk) {
      throw new Error(`Disk not found: ${diskId}`);
    }
    __privateGet(this, _openedDisks).delete(diskId);
    if (disk instanceof EmulatorRemovableDisk) {
      disk.eject();
    }
  }
  read(diskId, bufPtr, offset, length) {
    const disk = __privateGet(this, _openedDisks).get(diskId);
    if (!disk) {
      throw new Error(`Disk not found: ${diskId}`);
    }
    const buffer = __privateGet(this, _emscriptenModule).HEAPU8.subarray(
      bufPtr,
      bufPtr + length
    );
    return disk.read(buffer, offset, length);
  }
  write(diskId, bufPtr, offset, length) {
    const disk = __privateGet(this, _openedDisks).get(diskId);
    if (!disk) {
      throw new Error(`Disk not found: ${diskId}`);
    }
    __privateSet(this, _lastDiskWriteTime, performance.now());
    const buffer = __privateGet(this, _emscriptenModule).HEAPU8.subarray(
      bufPtr,
      bufPtr + length
    );
    return disk.write(buffer, offset, length);
  }
  size(diskIdOrName) {
    const disk = typeof diskIdOrName === "string" ? __privateGet(this, _disks).find((d) => d.name === diskIdOrName) : __privateGet(this, _openedDisks).get(diskIdOrName);
    if (!disk) {
      throw new Error(`Disk not found: ${diskIdOrName}`);
    }
    return disk.size;
  }
  validate() {
    var _a;
    for (const disk of __privateGet(this, _disks)) {
      (_a = disk.validate) == null ? void 0 : _a.call(disk);
    }
  }
  isDoneWithDiskWrites() {
    return __privateGet(this, _lastDiskWriteTime) !== 0 && performance.now() - __privateGet(this, _lastDiskWriteTime) > 1e3;
  }
  consumeDiskName() {
    return __privateGet(this, _pendingDiskNames).shift();
  }
}
_disks = new WeakMap();
_openedDisks = new WeakMap();
_pendingDiskNames = new WeakMap();
_lastDiskWriteTime = new WeakMap();
_diskIdCounter = new WeakMap();
_removableDisks = new WeakMap();
_useRemovableDisks = new WeakMap();
_emscriptenModule = new WeakMap();
class EmulatorRemovableDisk {
  constructor() {
    __privateAdd(this, _disk, void 0);
  }
  get name() {
    if (!__privateGet(this, _disk)) {
      console.warn("Removable disk drive is empty, cannot get name");
      return "";
    }
    return __privateGet(this, _disk).name;
  }
  get size() {
    if (!__privateGet(this, _disk)) {
      console.warn("Removable disk drive is empty, cannot get size");
      return 0;
    }
    return __privateGet(this, _disk).size;
  }
  insert(disk) {
    if (__privateGet(this, _disk)) {
      console.warn("Removable drive was not empty");
      return;
    }
    __privateSet(this, _disk, disk);
  }
  eject() {
    if (!__privateGet(this, _disk)) {
      console.warn("Removable drive is empty, cannot eject");
      return;
    }
    __privateSet(this, _disk, void 0);
  }
  hasDisk() {
    return __privateGet(this, _disk) !== void 0;
  }
  read(buffer, offset, length) {
    if (!__privateGet(this, _disk)) {
      console.warn("Removable disk drive is empty, cannot read");
      return 0;
    }
    return __privateGet(this, _disk).read(buffer, offset, length);
  }
  write(buffer, offset, length) {
    if (!__privateGet(this, _disk)) {
      console.warn("Removable disk drive is empty, cannot write");
      return 0;
    }
    return __privateGet(this, _disk).write(buffer, offset, length);
  }
  validate() {
    var _a, _b;
    if (!__privateGet(this, _disk)) {
      console.warn("Removable disk drive is empty, cannot validate");
      return;
    }
    return (_b = (_a = __privateGet(this, _disk)).validate) == null ? void 0 : _b.call(_a);
  }
}
_disk = new WeakMap();
class EmulatorWorkerUploadDisk extends EmulatorWorkerChunkedDisk {
  constructor(upload, delegate) {
    super(generateUploadChunkedSpec(upload), delegate);
    __privateAdd(this, _upload, void 0);
    __privateSet(this, _upload, upload);
  }
  doChunkRequest(spec, chunkIndex) {
    const range = getUploadChunkRange(spec, chunkIndex);
    try {
      const chunk = getUploadData(__privateGet(this, _upload), range);
      return { chunk };
    } catch (e) {
      return {
        error: `Error: ${e}`,
        chunkUrl: `upload-${spec.name}-chunk-${range.join("-")}`
      };
    }
  }
}
_upload = new WeakMap();
function generateUploadChunkedSpec(upload) {
  const totalSize = upload.size;
  const chunkSize = navigator.userAgent.includes("Firefox") ? totalSize : 128 * 1024;
  let chunkStart = 0;
  const chunks = [];
  while (chunkStart < upload.size) {
    const chunkEnd = Math.min(chunkStart + chunkSize, upload.size);
    chunks.push(`${chunkStart}-${chunkEnd}`);
    chunkStart = chunkEnd;
  }
  return {
    name: upload.name,
    baseUrl: `/Upload-Disk/${upload.name}`,
    totalSize,
    chunks,
    chunkSize,
    prefetchChunks: [0]
  };
}
function getUploadChunkRange(spec, chunkIndex) {
  const [startStr, endStr] = spec.chunks[chunkIndex].split("-");
  return [parseInt(startStr, 10), parseInt(endStr, 10)];
}
const CHUNK_SIZE = 128 * 1024;
function createEmulatorWorkerCDROMDisk(cdrom, delegate) {
  if (cdrom.srcUrl.startsWith("blob:")) {
    return new EmulatorWorkerUploadDisk(
      {
        name: cdrom.name,
        size: cdrom.fileSize,
        url: cdrom.srcUrl
      },
      delegate
    );
  }
  const { name } = cdrom;
  let chunkStart = 0;
  const chunks = [];
  let totalSize = cdrom.fileSize;
  if (cdrom.mode === "MODE1/2352") {
    totalSize = totalSize / 2352 * 2048;
  }
  while (chunkStart < totalSize) {
    const chunkEnd = Math.min(chunkStart + CHUNK_SIZE, totalSize);
    chunks.push(`${chunkStart}-${chunkEnd}`);
    chunkStart = chunkEnd;
  }
  let encodedUrl = cdrom.srcUrl;
  if (cdrom.mode) {
    encodedUrl += `#${cdrom.mode}`;
  }
  const spec = {
    name,
    baseUrl: `/CD-ROM/${btoa(encodedUrl)}`,
    totalSize,
    chunks,
    chunkSize: CHUNK_SIZE,
    prefetchChunks: [0]
  };
  return new EmulatorWorkerChunkedDisk(spec, delegate);
}
var MinivMac128KJsPath = "/minivmac-128K-C3dyS157.js";
var MinivMac512KeJsPath = "/minivmac-512Ke-BA_UTQfx.js";
var MinivMacIIJsPath = "/minivmac-II-Dv1rnHNf.js";
var MinivMacPlusJsPath = "/minivmac-Plus-CooDC8XL.js";
var MinivMacSEJsPath = "/minivmac-SE-BxcmS2DQ.js";
var BasiliskIIJsPath = "/BasiliskII-C3lW52K4.js";
var SheepShaverJsPath = "/SheepShaver-CtXtfpm7.js";
var DingusPPCJsPath = "/dingusppc-Fc0huUl8.js";
var PreviousJsPath = "/previous-C91V5e89.js";
function importEmulator(def2) {
  switch (def2.emulatorType) {
    case "BasiliskII":
      return import("./BasiliskII-CPXnpgts.js");
    case "SheepShaver":
      return import("./SheepShaver-CxKEH4Bd.js");
    case "Mini vMac":
      return {
        "128K": import("./minivmac-128K-gaHyhd4c.js"),
        "512Ke": import("./minivmac-512Ke-fv37yyk4.js"),
        "Plus": import("./minivmac-Plus-BTOdJ5nG.js"),
        "SE": import("./minivmac-SE-W1RO80Dz.js"),
        "II": import("./minivmac-II-0aZ6Mgnt.js")
      }[def2.emulatorSubtype];
    case "DingusPPC":
      return import("./dingusppc-DP_aZXCK.js");
    case "Previous":
      return import("./previous-DwdcSOwG.js");
  }
}
async function importEmulatorFallback(def) {
  const jsPath = getEmulatorJsPath(def);
  const response = await fetch(jsPath);
  const js = await response.text();
  const adjustedJs = js.replace(/export default emulator;$/, "").replaceAll("import.meta.url", `"${jsPath}"`);
  if (adjustedJs === js) {
    throw new Error(`Could not find default export in ${jsPath}`);
  }
  eval(adjustedJs);
  const module = eval("emulator");
  if (!module) {
    throw new Error(`Could not find module object in ${jsPath}`);
  }
  return {
    default: module
  };
}
function getEmulatorJsPath(def2) {
  switch (def2.emulatorType) {
    case "BasiliskII":
      return BasiliskIIJsPath;
    case "SheepShaver":
      return SheepShaverJsPath;
    case "Mini vMac":
      return {
        "128K": MinivMac128KJsPath,
        "512Ke": MinivMac512KeJsPath,
        "Plus": MinivMacPlusJsPath,
        "SE": MinivMacSEJsPath,
        "II": MinivMacIIJsPath
      }[def2.emulatorSubtype];
    case "DingusPPC":
      return DingusPPCJsPath;
    case "Previous":
      return PreviousJsPath;
  }
}
function dataFileName(spec) {
  return spec.name + ".data";
}
function dirtyChunksFileName(spec) {
  return spec.name + ".dirtychunks";
}
class EmulatorWorkerDiskSaver {
  constructor(spec, delegate) {
    __privateAdd(this, _spec2, void 0);
    __privateAdd(this, _delegate2, void 0);
    __privateAdd(this, _dataHandle, void 0);
    __privateAdd(this, _dirtyChunksHandle, void 0);
    __privateAdd(this, _dirtyChunks, void 0);
    __privateAdd(this, _chunksToRead, void 0);
    __privateAdd(this, _chunksToReadCount, void 0);
    __privateSet(this, _spec2, spec);
    __privateSet(this, _delegate2, delegate);
    const chunkByteCount = spec.chunks.length >> 3;
    __privateSet(this, _dirtyChunks, new Uint8Array(chunkByteCount));
    __privateSet(this, _chunksToRead, new Uint8Array(chunkByteCount));
    __privateSet(this, _chunksToReadCount, 0);
  }
  get name() {
    return __privateGet(this, _spec2).name;
  }
  async init(opfsRoot) {
    const dataHandle = await opfsRoot.getFileHandle(
      dataFileName(__privateGet(this, _spec2)),
      { create: true }
    );
    __privateSet(this, _dataHandle, await dataHandle.createSyncAccessHandle());
    const dirtyChunksHandle = await opfsRoot.getFileHandle(
      dirtyChunksFileName(__privateGet(this, _spec2)),
      { create: true }
    );
    __privateSet(this, _dirtyChunksHandle, await dirtyChunksHandle.createSyncAccessHandle());
    __privateGet(this, _dirtyChunksHandle).read(__privateGet(this, _dirtyChunks), { at: 0 });
    __privateGet(this, _dirtyChunksHandle).read(__privateGet(this, _chunksToRead), { at: 0 });
    const chunkByteCount = __privateGet(this, _spec2).chunks.length >> 3;
    for (let i = 0; i < chunkByteCount; i++) {
      const chunkByte = __privateGet(this, _chunksToRead)[i];
      if (chunkByte === 0) {
        continue;
      }
      for (let j = 0; j < 8; j++) {
        const chunkBit = 1 << j;
        if (chunkByte & chunkBit) {
          __privateWrapper(this, _chunksToReadCount)._++;
        }
      }
    }
    console.log(
      `Loaded saved disk ${__privateGet(this, _spec2).name} with ${__privateGet(this, _chunksToReadCount)} dirty chunks`
    );
  }
  close() {
    var _a, _b;
    (_a = __privateGet(this, _dataHandle)) == null ? void 0 : _a.close();
    (_b = __privateGet(this, _dirtyChunksHandle)) == null ? void 0 : _b.close();
  }
  willReadChunk(chunk, chunkIndex) {
    if (!__privateGet(this, _dataHandle) || !__privateGet(this, _chunksToReadCount)) {
      return;
    }
    const chunkByteIndex = chunkIndex >> 3;
    let chunkByte = __privateGet(this, _chunksToRead)[chunkByteIndex];
    if (!chunkByte) {
      return;
    }
    const chunkBit = 1 << (chunkIndex & 7);
    if (chunkByte & chunkBit) {
      __privateGet(this, _dataHandle).read(chunk, {
        at: chunkIndex * __privateGet(this, _spec2).chunkSize
      });
      chunkByte &= ~chunkBit;
      __privateGet(this, _chunksToRead)[chunkByteIndex] = chunkByte;
      __privateWrapper(this, _chunksToReadCount)._--;
    }
  }
  didWriteChunk(chunk, chunkIndex) {
    if (!__privateGet(this, _dataHandle) || !__privateGet(this, _dirtyChunksHandle)) {
      return;
    }
    const chunkByteIndex = chunkIndex >> 3;
    let chunkByte = __privateGet(this, _dirtyChunks)[chunkByteIndex];
    const chunkBit = 1 << (chunkIndex & 7);
    if (!(chunkByte & chunkBit)) {
      chunkByte |= chunkBit;
      __privateGet(this, _dirtyChunks)[chunkByteIndex] = chunkByte;
      __privateGet(this, _dirtyChunksHandle).write(
        __privateGet(this, _dirtyChunks).slice(chunkByteIndex, chunkByteIndex + 1),
        { at: chunkByteIndex }
      );
    }
    __privateGet(this, _dataHandle).write(chunk, {
      at: chunkIndex * __privateGet(this, _spec2).chunkSize
    });
  }
  willLoadChunk(chunkIndex) {
    __privateGet(this, _delegate2).willLoadChunk(chunkIndex);
  }
  didLoadChunk(chunkIndex) {
    __privateGet(this, _delegate2).didLoadChunk(chunkIndex);
  }
  didFailToLoadChunk(chunkIndex, chunkUrl, error) {
    __privateGet(this, _delegate2).didFailToLoadChunk(chunkIndex, chunkUrl, error);
  }
}
_spec2 = new WeakMap();
_delegate2 = new WeakMap();
_dataHandle = new WeakMap();
_dirtyChunksHandle = new WeakMap();
_dirtyChunks = new WeakMap();
_chunksToRead = new WeakMap();
_chunksToReadCount = new WeakMap();
async function initDiskSavers(savers) {
  if (!savers.length) {
    return;
  }
  let opfsRoot;
  try {
    opfsRoot = await navigator.storage.getDirectory();
  } catch (err) {
    console.warn("Could not get origin storage", err);
    return [
      `Could not open open the directory for saved disks (this browser may be missing the necessary APIs). Saved disks will be mounted, but they will be empty and changes to them will not be saved.`,
      String(err)
    ];
  }
  for (const saver of savers) {
    try {
      await saver.init(opfsRoot);
    } catch (err) {
      console.warn("Could not init disk saver", err);
      const reason = String(err).includes("TypeError") ? "this browser may be missing the necessary APIs" : "it may be open in another tab";
      return [
        `Could not open saved disk “${saver.name}” (${reason}). It will be mounted, but it will be empty and changes to it will not be saved.`,
        String(err)
      ];
    }
  }
}
const BLOCK_SIZE = 512;
const ALL_DRIVERS_HFS_PARTITION_INDEX = 8;
const ALL_DRIVERS_HFS_PARTITION_OFFSET = (ALL_DRIVERS_HFS_PARTITION_INDEX + 1) * BLOCK_SIZE;
function generateDeviceImageHeader(baseHeader, hfsPartitionSize, isAllDrivers) {
  const headerSize = baseHeader.byteLength;
  if (headerSize !== 933888) {
    console.warn(
      "Expected base header to be 0xE4000 bytes, got 0x" + headerSize.toString(16) + " bytes, results may be unpredictable"
    );
  }
  const header = baseHeader.slice(0);
  const headerView = new DataView(header);
  const totalSize = hfsPartitionSize + headerSize;
  const totalBlocks = totalSize / BLOCK_SIZE;
  headerView.setInt32(4, totalBlocks);
  const partitionOffset = ALL_DRIVERS_HFS_PARTITION_OFFSET;
  const hfsBlocks = hfsPartitionSize / BLOCK_SIZE;
  headerView.setInt32(partitionOffset + 12, hfsBlocks);
  headerView.setInt32(partitionOffset + 84, hfsBlocks);
  return header;
}
class EmulatorWorkerDeviceImageDisk {
  constructor(disk, baseDeviceHeader) {
    __privateAdd(this, _disk2, void 0);
    __privateAdd(this, _deviceHeader, void 0);
    __privateSet(this, _disk2, disk);
    __privateSet(this, _deviceHeader, generateDeviceImageHeader(
      baseDeviceHeader,
      disk.size
    ));
  }
  get name() {
    return __privateGet(this, _disk2).name;
  }
  get size() {
    return __privateGet(this, _disk2).size + __privateGet(this, _deviceHeader).byteLength;
  }
  read(buffer, offset, length) {
    if (offset < __privateGet(this, _deviceHeader).byteLength) {
      if (offset + length > __privateGet(this, _deviceHeader).byteLength) {
        throw new Error(
          "Cannot read from both device header and disk in one op"
        );
      }
      buffer.set(new Uint8Array(__privateGet(this, _deviceHeader), offset, length));
      return length;
    }
    const diskOffset = offset - __privateGet(this, _deviceHeader).byteLength;
    return __privateGet(this, _disk2).read(buffer, diskOffset, length);
  }
  write(buffer, offset, length) {
    if (offset < __privateGet(this, _deviceHeader).byteLength) {
      if (offset + length > __privateGet(this, _deviceHeader).byteLength) {
        throw new Error(
          "Cannot write to both device header and disk in one op"
        );
      }
      new Uint8Array(__privateGet(this, _deviceHeader), offset).set(
        buffer.subarray(0, length)
      );
      return length;
    }
    const diskOffset = offset - __privateGet(this, _deviceHeader).byteLength;
    return __privateGet(this, _disk2).write(buffer, diskOffset, length);
  }
  validate() {
    var _a, _b;
    (_b = (_a = __privateGet(this, _disk2)).validate) == null ? void 0 : _b.call(_a);
  }
}
_disk2 = new WeakMap();
_deviceHeader = new WeakMap();
addEventListener("message", async (event) => {
  const { data } = event;
  const { type } = data;
  if (type === "start") {
    await startEmulator(data.config);
  }
});
addEventListener("unhandledrejection", (event) => {
  const reasonString = event.reason.toString();
  if (reasonString.toLowerCase().includes("out of memory")) {
    postMessage({ type: "emulator_did_run_out_memory" });
  } else {
    postMessage({ type: "emulator_did_have_error", error: reasonString });
  }
});
class EmulatorWorkerApi {
  constructor(config, emscriptenModule) {
    __privateAdd(this, _idleWait);
    __privateAdd(this, _sleep);
    __privateAdd(this, _markQuiescent);
    __privateAdd(this, _periodicTasks);
    __privateAdd(this, _handleFileRequests);
    __privateAdd(this, _handleFileUpload);
    __privateAdd(this, _handleStop);
    __privateAdd(this, _closeDiskSavers);
    __publicField(this, "InputBufferAddresses", InputBufferAddresses);
    __privateAdd(this, _emscriptenModule2, void 0);
    __privateAdd(this, _video, void 0);
    __privateAdd(this, _input, void 0);
    __privateAdd(this, _audio, void 0);
    __privateAdd(this, _files, void 0);
    __privateAdd(this, _ethernet, void 0);
    __privateAdd(this, _clipboard, void 0);
    __privateAdd(this, _videoOpenTime, 0);
    __privateAdd(this, _lastBlitFrameId, 0);
    __privateAdd(this, _nextExpectedBlitTime, 0);
    __privateAdd(this, _lastIdleWaitFrameId, 0);
    __privateAdd(this, _markedQuiescent, false);
    __privateAdd(this, _handledStop, false);
    __publicField(this, "disks");
    __privateAdd(this, _delayedDiskSpecs, void 0);
    __privateAdd(this, _diskSavers, []);
    __privateAdd(this, _ethernetMacAddress, void 0);
    __privateAdd(this, _abortError, void 0);
    __privateSet(this, _emscriptenModule2, emscriptenModule);
    const {
      video: videoConfig,
      input: inputConfig,
      audio: audioConfig,
      files: filesConfig,
      ethernet: ethernetConfig,
      clipboard: clipboardConfig,
      disks,
      delayedDisks,
      diskFiles,
      cdroms
    } = config;
    const blitSender = (data, transfer = []) => postMessage({ type: "emulator_blit", data }, transfer);
    const audioSender = (data) => postMessage({ type: "emulator_audio", data }, [data.buffer]);
    let fallbackEndpoint;
    function getFallbackEndpoint() {
      if (!fallbackEndpoint) {
        fallbackEndpoint = new EmulatorFallbackEndpoint();
      }
      return fallbackEndpoint;
    }
    __privateSet(this, _video, videoConfig.type === "shared-memory" ? new SharedMemoryEmulatorWorkerVideo(videoConfig, blitSender) : new FallbackEmulatorWorkerVideo(videoConfig, blitSender));
    __privateSet(this, _input, inputConfig.type === "shared-memory" ? new SharedMemoryEmulatorWorkerInput(inputConfig) : new FallbackEmulatorWorkerInput(
      inputConfig,
      getFallbackEndpoint()
    ));
    __privateSet(this, _audio, audioConfig.type === "shared-memory" ? new SharedMemoryEmulatorWorkerAudio(audioConfig) : new FallbackEmulatorWorkerAudio(audioConfig, audioSender));
    __privateSet(this, _files, filesConfig.type === "shared-memory" ? new SharedMemoryEmulatorWorkerFiles(filesConfig) : new FallbackEmulatorWorkerFiles(
      filesConfig,
      getFallbackEndpoint()
    ));
    __privateSet(this, _ethernet, ethernetConfig.type === "shared-memory" ? new SharedMemoryEmulatorWorkerEthernet(ethernetConfig) : new FallbackEmulatorWorkerEthernet(
      ethernetConfig,
      getFallbackEndpoint()
    ));
    __privateSet(this, _clipboard, clipboardConfig.type === "shared-memory" ? new SharedMemoryEmulatorWorkerClipboard(clipboardConfig) : new FallbackEmulatorWorkerClipboard(
      clipboardConfig,
      getFallbackEndpoint()
    ));
    const needsDeviceImage = emulatorNeedsDeviceImage(config.emulatorType);
    this.disks = new EmulatorWorkerDisksApi(
      [
        ...disks.map((spec) => {
          let disk;
          if (spec.persistent) {
            const saver = new EmulatorWorkerDiskSaver(spec, this);
            __privateGet(this, _diskSavers).push(saver);
            disk = new EmulatorWorkerChunkedDisk(spec, saver);
          } else {
            disk = new EmulatorWorkerChunkedDisk(spec, this);
          }
          if (needsDeviceImage && !spec.isFloppy) {
            return new EmulatorWorkerDeviceImageDisk(
              disk,
              config.deviceImageHeader
            );
          }
          return disk;
        }),
        ...diskFiles.map((spec) => {
          const disk = new EmulatorWorkerUploadDisk(spec, this);
          if (needsDeviceImage && !spec.isCDROM) {
            return new EmulatorWorkerDeviceImageDisk(
              disk,
              config.deviceImageHeader
            );
          }
          return disk;
        }),
        ...cdroms.map(
          (spec) => createEmulatorWorkerCDROMDisk(spec, this)
        )
      ],
      config.usePlaceholderDisks,
      __privateGet(this, _emscriptenModule2)
    );
    __privateSet(this, _delayedDiskSpecs, delayedDisks);
  }
  setAbortError(error) {
    __privateSet(this, _abortError, error);
  }
  emulatorDidHaveError(status, toThrow) {
    if (toThrow) {
      console.error(toThrow);
    }
    let error = toThrow ? toThrow.message || toThrow.toString() : `Exit status ${status}`;
    if (__privateGet(this, _abortError) && error.toLowerCase().includes("aborted")) {
      error = __privateGet(this, _abortError);
      __privateSet(this, _abortError, void 0);
    }
    postMessage({ type: "emulator_did_have_error", error });
  }
  exit() {
    __privateMethod(this, _handleStop, handleStop_fn).call(this, true);
  }
  didOpenVideo(width, height) {
    postMessage({ type: "emulator_video_open", width, height });
    __privateSet(this, _videoOpenTime, performance.now());
  }
  blit(bufPtr, bufSize, rect) {
    __privateWrapper(this, _lastBlitFrameId)._++;
    if (bufPtr) {
      const data = __privateGet(this, _emscriptenModule2).HEAPU8.subarray(
        bufPtr,
        bufPtr + bufSize
      );
      __privateGet(this, _video).blit(data, rect);
    }
    __privateSet(this, _nextExpectedBlitTime, performance.now() + 16);
  }
  didOpenAudio(sampleRate, sampleSize, channels) {
    postMessage({
      type: "emulator_audio_open",
      sampleRate,
      sampleSize,
      channels
    });
  }
  audioBufferSize() {
    return __privateGet(this, _audio).audioBufferSize();
  }
  enqueueAudio(bufPtr, nbytes) {
    if (!this.getInputValue(
      InputBufferAddresses.audioContextRunningFlagAddr
    )) {
      return;
    }
    const newAudio = __privateGet(this, _emscriptenModule2).HEAPU8.slice(
      bufPtr,
      bufPtr + nbytes
    );
    __privateGet(this, _audio).enqueueAudio(newAudio);
  }
  idleWait() {
    try {
      return __privateMethod(this, _idleWait, idleWait_fn).call(this);
    } catch (err) {
      console.error("Error during idlewait", err);
      return false;
    }
  }
  /**
   * Variant of idleWait that is called called more frequently (and with an
   * expected waiting time) by Mini vMac.
   */
  sleep(timeSeconds) {
    try {
      __privateMethod(this, _sleep, sleep_fn).call(this, timeSeconds);
    } catch (err) {
      console.error("Error during sleep", err);
    }
  }
  acquireInputLock() {
    return __privateGet(this, _input).acquireInputLock();
  }
  releaseInputLock() {
    __privateGet(this, _input).releaseInputLock();
  }
  getInputValue(addr) {
    return __privateGet(this, _input).getInputValue(addr);
  }
  etherSeed() {
    const seed = new Uint32Array(1);
    crypto.getRandomValues(seed);
    return seed[0];
  }
  etherInit(macAddress) {
    __privateSet(this, _ethernetMacAddress, ethernetMacAddressFromString(macAddress));
    postMessage({ type: "emulator_ethernet_init", macAddress });
  }
  etherWrite(destination, packetPtr, packetLength) {
    const packet = __privateGet(this, _emscriptenModule2).HEAPU8.slice(
      packetPtr,
      packetPtr + packetLength
    );
    sendEthernetPacket(destination, packet);
  }
  etherRead(packetPtr, packetMaxLength) {
    const packet = new Uint8Array(
      __privateGet(this, _emscriptenModule2).HEAPU8.buffer,
      __privateGet(this, _emscriptenModule2).HEAPU8.byteOffset + packetPtr,
      packetMaxLength
    );
    const length = __privateGet(this, _ethernet).read(packet);
    if (length && __privateGet(this, _ethernetMacAddress) && handlePingPacket(packet, length, __privateGet(this, _ethernetMacAddress))) {
      return 0;
    }
    return length;
  }
  setClipboardText(text) {
    postMessage({ type: "emulator_set_clipboard_text", text });
  }
  getClipboardText() {
    return __privateGet(this, _clipboard).clipboardText();
  }
  // EmulatorWorkerChunkedDiskDelegate implementation
  willLoadChunk(chunkIndex) {
    postMessage({ type: "emulator_will_load_chunk", chunkIndex });
  }
  didLoadChunk(chunkIndex) {
    postMessage({ type: "emulator_did_load_chunk", chunkIndex });
  }
  didFailToLoadChunk(chunkIndex, chunkUrl, error) {
    postMessage({
      type: "emulator_did_have_error",
      error: `Could not load disk chunk ${chunkUrl}: ${error})`
    });
  }
  async initDiskSavers() {
    const errorTuple = await initDiskSavers(__privateGet(this, _diskSavers));
    if (errorTuple) {
      const [error, errorRaw] = errorTuple;
      postMessage({ type: "emulator_did_have_error", error, errorRaw });
    }
  }
}
_emscriptenModule2 = new WeakMap();
_video = new WeakMap();
_input = new WeakMap();
_audio = new WeakMap();
_files = new WeakMap();
_ethernet = new WeakMap();
_clipboard = new WeakMap();
_videoOpenTime = new WeakMap();
_lastBlitFrameId = new WeakMap();
_nextExpectedBlitTime = new WeakMap();
_lastIdleWaitFrameId = new WeakMap();
_markedQuiescent = new WeakMap();
_handledStop = new WeakMap();
_delayedDiskSpecs = new WeakMap();
_diskSavers = new WeakMap();
_ethernetMacAddress = new WeakMap();
_abortError = new WeakMap();
_idleWait = new WeakSet();
idleWait_fn = function() {
  __privateMethod(this, _markQuiescent, markQuiescent_fn).call(this);
  if (__privateGet(this, _lastIdleWaitFrameId) === __privateGet(this, _lastBlitFrameId)) {
    return false;
  }
  __privateSet(this, _lastIdleWaitFrameId, __privateGet(this, _lastBlitFrameId));
  const idleWaitTime = __privateGet(this, _nextExpectedBlitTime) - performance.now() - 2;
  const hadInput = idleWaitTime > 0 ? __privateGet(this, _input).idleWait(idleWaitTime) : false;
  __privateMethod(this, _periodicTasks, periodicTasks_fn).call(this);
  return hadInput;
};
_sleep = new WeakSet();
sleep_fn = function(timeSeconds) {
  if (timeSeconds) {
    __privateGet(this, _input).idleWait(timeSeconds * 1e3);
  }
  if (__privateGet(this, _lastIdleWaitFrameId) !== __privateGet(this, _lastBlitFrameId)) {
    __privateSet(this, _lastIdleWaitFrameId, __privateGet(this, _lastBlitFrameId));
    __privateMethod(this, _periodicTasks, periodicTasks_fn).call(this);
    if (this.disks.isDoneWithDiskWrites()) {
      __privateMethod(this, _markQuiescent, markQuiescent_fn).call(this);
    }
    if (__privateGet(this, _videoOpenTime) !== 0 && performance.now() - __privateGet(this, _videoOpenTime) > 1e4) {
      __privateMethod(this, _markQuiescent, markQuiescent_fn).call(this);
    }
  }
};
_markQuiescent = new WeakSet();
markQuiescent_fn = function() {
  if (!__privateGet(this, _markedQuiescent)) {
    __privateSet(this, _markedQuiescent, true);
    postMessage({ type: "emulator_quiescent" });
    this.disks.validate();
    if (__privateGet(this, _delayedDiskSpecs)) {
      for (const spec of __privateGet(this, _delayedDiskSpecs)) {
        console.log("Mounting delayed disk", spec.name);
        this.disks.addDisk(
          new EmulatorWorkerChunkedDisk(spec, this)
        );
      }
      __privateSet(this, _delayedDiskSpecs, void 0);
    }
  }
};
_periodicTasks = new WeakSet();
periodicTasks_fn = function() {
  __privateMethod(this, _handleFileRequests, handleFileRequests_fn).call(this);
  handleExtractionRequests();
  if (this.getInputValue(InputBufferAddresses.stopFlagAddr)) {
    __privateMethod(this, _handleStop, handleStop_fn).call(this);
  }
};
_handleFileRequests = new WeakSet();
handleFileRequests_fn = function() {
  const { uploads, cdroms } = __privateGet(this, _files).consumeRequests();
  for (const upload of uploads) {
    const isDiskImage = isDiskImageFile(upload.name);
    if (isDiskImage) {
      this.disks.addDisk(new EmulatorWorkerUploadDisk(upload, this));
    } else {
      __privateMethod(this, _handleFileUpload, handleFileUpload_fn).call(this, upload);
    }
  }
  for (const cdrom of cdroms) {
    this.disks.addDisk(createEmulatorWorkerCDROMDisk(cdrom, this));
  }
};
_handleFileUpload = new WeakSet();
handleFileUpload_fn = function(upload) {
  let parent = "/Shared/Downloads/";
  let name = upload.name;
  const pathPieces = upload.name.split("/");
  if (pathPieces.length > 1) {
    for (let i = 0; i < pathPieces.length - 1; i++) {
      const dir = parent + pathPieces.slice(0, i + 1).join("/");
      if (!FS.analyzePath(dir).exists) {
        FS.mkdir(dir);
      }
    }
    parent += pathPieces.slice(0, pathPieces.length - 1).join("/");
    name = pathPieces[pathPieces.length - 1];
  }
  createLazyFile(parent, name, upload.url, upload.size, true, true);
};
_handleStop = new WeakSet();
handleStop_fn = function(isExit = false) {
  if (__privateGet(this, _handledStop)) {
    return;
  }
  __privateMethod(this, _closeDiskSavers, closeDiskSavers_fn).call(this);
  __privateSet(this, _handledStop, true);
  postMessage({ type: "emulator_stopped", isExit });
};
_closeDiskSavers = new WeakSet();
closeDiskSavers_fn = function() {
  for (const saver of __privateGet(this, _diskSavers)) {
    saver.close();
  }
};
class EmulatorFallbackEndpoint {
  constructor() {
    __privateAdd(this, _consumeCommands);
    __privateAdd(this, _fetchCommands);
    __privateAdd(this, _fetchSync);
    __privateAdd(this, _commandQueue, []);
  }
  idleWait(timeout) {
    __privateMethod(this, _fetchSync, fetchSync_fn).call(this, `./worker-idlewait?timeout=${timeout}&t=${Date.now()}`);
  }
  consumeInputEvents() {
    return __privateMethod(this, _consumeCommands, consumeCommands_fn).call(this, (c) => c.type === "input", (c) => c.event);
  }
  consumeFileUploads() {
    return __privateMethod(this, _consumeCommands, consumeCommands_fn).call(this, (c) => c.type === "upload_file", (c) => c.upload);
  }
  consumeCDROMs() {
    return __privateMethod(this, _consumeCommands, consumeCommands_fn).call(this, (c) => c.type === "load_cdrom", (c) => c.cdrom);
  }
  consumeEthernetReceives() {
    return __privateMethod(this, _consumeCommands, consumeCommands_fn).call(this, (c) => c.type === "ethernet_receive", (c) => new Uint8Array(c.packetArray));
  }
  consumeSetClipboardData() {
    const datas = __privateMethod(this, _consumeCommands, consumeCommands_fn).call(this, (c) => c.type === "set_clipboard_data", (c) => c.data);
    return datas[datas.length - 1];
  }
}
_commandQueue = new WeakMap();
_consumeCommands = new WeakSet();
consumeCommands_fn = function(filter, extractor) {
  __privateMethod(this, _fetchCommands, fetchCommands_fn).call(this);
  const remainingCommands = [];
  const result = [];
  for (const command of __privateGet(this, _commandQueue)) {
    if (filter(command)) {
      result.push(extractor(command));
    } else {
      remainingCommands.push(command);
    }
  }
  __privateSet(this, _commandQueue, remainingCommands);
  return result;
};
_fetchCommands = new WeakSet();
fetchCommands_fn = function() {
  const commands = __privateMethod(this, _fetchSync, fetchSync_fn).call(this, `./worker-commands?t=${Date.now()}`);
  if (commands) {
    __privateSet(this, _commandQueue, __privateGet(this, _commandQueue).concat(commands));
  }
};
_fetchSync = new WeakSet();
fetchSync_fn = function(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);
  if (xhr.status !== 200) {
    console.warn(
      "Could not do fetchSync",
      url,
      xhr.status,
      xhr.statusText
    );
    return void 0;
  }
  try {
    return JSON.parse(xhr.responseText);
  } catch (err) {
    console.warn("Could not parse JSON", err, xhr.responseText);
  }
};
async function startEmulator(config) {
  const moduleOverrides = {
    arguments: config.arguments,
    instantiateWasm(imports, successCallback) {
      const wasmImports = imports;
      const { dateOffset } = config;
      if (dateOffset) {
        for (const moduleImports of Object.values(wasmImports)) {
          const dateFn = moduleImports["emscripten_date_now"];
          if (dateFn) {
            moduleImports["emscripten_date_now"] = () => {
              return Date.now() + dateOffset;
            };
          }
        }
      }
      WebAssembly.instantiateStreaming(
        new Response(config.wasm, {
          headers: { "Content-Type": "application/wasm" }
        }),
        wasmImports
      ).then((output) => successCallback(output.instance));
      return [];
    },
    preRun: [
      function() {
        globalThis["FS"] = moduleOverrides.FS;
        FS.mkdir("/Shared");
        FS.mkdir("/Shared/Downloads");
        initializeExtractor();
        for (const [name, buffer] of Object.entries(
          config.autoloadFiles
        )) {
          const path = name.split("/");
          const fileName = path[path.length - 1];
          const parentPath = [];
          let parent = "/";
          for (const dir of path.slice(0, path.length - 1)) {
            parentPath.push(dir);
            parent = "/" + parentPath.join("/");
            if (!FS.analyzePath(parent).exists) {
              FS.mkdir(parent);
            }
          }
          FS.createDataFile(
            parent,
            fileName,
            new Uint8Array(buffer),
            true,
            true,
            true
          );
        }
      }
    ],
    onRuntimeInitialized() {
      postMessage({ type: "emulator_ready" });
    },
    print(...args) {
      if ((navigator.userAgent.includes("Chrome") || navigator.userAgent.includes("Safari")) && args.length === 1 && typeof args[0] === "string") {
        console.groupCollapsed(`%c${args[0]}`, "font-weight:normal");
        console.trace();
        console.groupEnd();
      } else {
        console.log(...args);
      }
    },
    printErr: console.warn.bind(console),
    quit(status, toThrow) {
      var _a, _b;
      console.log("Emulator quit with status", status);
      if (status === 0) {
        (_a = moduleOverrides.workerApi) == null ? void 0 : _a.exit();
      } else {
        (_b = moduleOverrides.workerApi) == null ? void 0 : _b.emulatorDidHaveError(
          status,
          toThrow
        );
      }
    }
  };
  async function runEmulatorModule(emulatorModule) {
    const emscriptenModule = moduleOverrides;
    const workerApi = new EmulatorWorkerApi(config, emscriptenModule);
    moduleOverrides.workerApi = workerApi;
    await workerApi.initDiskSavers();
    const globalScope = globalThis;
    globalScope.workerApi = workerApi;
    emulatorModule.default(emscriptenModule);
  }
  try {
    runEmulatorModule(await importEmulator(config));
  } catch (error) {
    console.log("Could not import emulator, will try fallback mode", error);
    try {
      runEmulatorModule(await importEmulatorFallback(config));
    } catch (error2) {
      postMessage({ type: "emulator_did_have_error", error: error2 });
    }
  }
}
var __viteBrowserExternal = /* @__PURE__ */ Object.freeze({
  __proto__: null
});
export {
  __viteBrowserExternal as _
};
