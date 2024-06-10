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
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _input, _audioContext, _debugInterval, _resumeOnGesture, _handleAudioContextRunning, handleAudioContextRunning_fn, _debugLog, debugLog_fn, _audioBuffer, _audioRingBuffer, _inputBuffer, _inputBufferView, _inputQueue, _tryToSendInput, tryToSendInput_fn, _tryToSendInputLater, tryToSendInputLater_fn, _acquireInputLock, acquireInputLock_fn, _releaseInputLock, releaseInputLock_fn, _commandSender, _config, _screenBuffer, _screenBufferView, _videoModeBuffer, _videoModeBufferView, _lastBlitRect, _config2, _lastBlitData, _lastBlitRect2, _actions, _filesBuffer, _filesBufferView, _updateBuffer, updateBuffer_fn, _commandSender2, _receiveBuffer, _receiveRingBuffer, _commandSender3, _delegate, _macAddress, _ethernetProvider, _interval, _peersByMacAddress, _ping, _data, _clipboardBuffer, _clipboardBufferView, _updateBuffer2, updateBuffer_fn2, _commandSender4, _delegate2, _pointerDown, _pointerDownStartTime, _pointerDownX, _pointerDownY, _previousMoveTime, _pointerDownIsMove, _dragTimeout, _pointerDownIsDrag, _config3, _delegate3, _worker, _workerTerminated, _screenCanvasContext, _screenImageData, _video, _input2, _audio, _files, _ethernet, _clipboard, _serviceWorker, _serviceWorkerReady, _gotFirstBlit, _ethernetPinger, _downKeyCodes, _mouseX, _mouseY, _trackpadController, _requestedPointerLock, _startWorker, startWorker_fn, _handleCDROMs, handleCDROMs_fn, _useMouseDeltas, useMouseDeltas_fn, _trackpadMode, trackpadMode_fn, _handlePointerMove, _handlePointerDown, _handlePointerLockChange, _handlePointerUp, _handleTouchStart, _handleKeyDown, _handleKeyUp, _getAdbKeyCode, getAdbKeyCode_fn, _getAdbKeyModifiers, getAdbKeyModifiers_fn, _handleBeforeUnload, _handleWorkerMessage, _handleVisibilityChange, _drawScreen, drawScreen_fn, _clearScreen, clearScreen_fn, _initServiceWorker, initServiceWorker_fn, _handleEmulatorStopped, handleEmulatorStopped_fn;
import { u as updateInputBufferWithEvents, L as LockStates, I as InputBufferAddresses, c as commonjsGlobal, g as getDefaultExportFromCjs, i as increment, e as ethernetMacAddressFromString, E as ETHERNET_PONG_PACKET_LENGTH, a as ETHERNET_PONG_HEADER, b as ethernetMacAddressToString, d as ETHERNET_PING_PAYLOAD_LENGTH, f as ETHERNET_PING_HEADER, h as ETHERNET_PING_PACKET_LENGTH, j as emulatorUsesPlaceholderDisks, k as emulatorNeedsMouseDeltas, l as emulatorCpuId, m as emulatorModelId, n as EMULATOR_REMOVABLE_DISK_COUNT, P as POWER_MACINTOSH_G3_BEIGE, o as POWER_MACINTOSH_6100, p as POWER_MACINTOSH_7500, r as reactExports, q as classNames, s as jsxRuntimeExports, t as systemCDROMCompare, B as Button, v as Input, D as Dialog, w as cdromLibrary, x as getCDROMInfo, C as Checkbox, y as emulatorSupportsMouseDeltas, z as emulatorSupportsSpeedSetting, S as Select, A as EMULATOR_SPEEDS, F as generateChunkUrl, G as usePersistentState, H as canSaveDisks, J as incrementError, K as incrementMulti, M as ScreenFrame, N as viewTransitionNameForDisk, O as emulatorSupportsDownloadsFolder, Q as SAVED_HD, R as isDiskImageFile, T as INFINITE_HD_NEXT, U as INFINITE_HD_MFS, V as INFINITE_HD6, W as INFINITE_HD } from "./index-f7FP7bHR.js";
const MinivMac128KWasmPath = "/minivmac-128K--drHPBu3.wasm";
const MinivMac512KeWasmPath = "/minivmac-512Ke-BxAX5jJt.wasm";
const MinivMacIIWasmPath = "/minivmac-II-DI-P0fVc.wasm";
const MinivMacPlusWasmPath = "/minivmac-Plus-BUAVpPQO.wasm";
const MinivMacSEWasmPath = "/minivmac-SE-DzZrhYuI.wasm";
const BasiliskIIWasmPath = "/BasiliskII-DCcDx7pJ.wasm";
const SheepShaverWasmPath = "/SheepShaver-CQPBdQGu.wasm";
const DingusPPCWasmPath = "/dingusppc-B4zv9JHu.wasm";
const PreviousWasmPath = "/previous-BsuC0hUV.wasm";
function getEmulatorWasmPath(def) {
  const { emulatorType, emulatorSubtype } = def;
  switch (emulatorType) {
    case "BasiliskII":
      return BasiliskIIWasmPath;
    case "SheepShaver":
      return SheepShaverWasmPath;
    case "Mini vMac":
      return {
        "128K": MinivMac128KWasmPath,
        "512Ke": MinivMac512KeWasmPath,
        "Plus": MinivMacPlusWasmPath,
        "SE": MinivMacSEWasmPath,
        "II": MinivMacIIWasmPath
      }[emulatorSubtype];
    case "DingusPPC":
      return DingusPPCWasmPath;
    case "Previous":
      return PreviousWasmPath;
  }
}
function WorkerWrapper(options) {
  return new Worker(
    "/emulator-worker-CwDFazQm.js",
    {
      type: "module",
      name: options == null ? void 0 : options.name
    }
  );
}
const serviceWorkerPath = "/emulator-service-worker-C7EBWab6.js";
const audioWorkletPath = "/emulator-audio-worklet-CrdSeJE0.js";
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
class EmulatorAudio {
  constructor(input) {
    __privateAdd(this, _handleAudioContextRunning);
    __privateAdd(this, _debugLog);
    __privateAdd(this, _input, void 0);
    __privateAdd(this, _audioContext, void 0);
    __privateAdd(this, _debugInterval, void 0);
    __publicField(this, "emulatorPlaybackNode");
    __privateAdd(this, _resumeOnGesture, () => {
      var _a, _b;
      (_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.resume();
      (_b = __privateGet(this, _audioContext)) == null ? void 0 : _b.addEventListener(
        "statechange",
        () => {
          var _a2;
          if (((_a2 = __privateGet(this, _audioContext)) == null ? void 0 : _a2.state) === "running") {
            window.setTimeout(
              () => __privateMethod(this, _handleAudioContextRunning, handleAudioContextRunning_fn).call(this),
              250
            );
          }
        },
        { once: true }
      );
    });
    __privateSet(this, _input, input);
  }
  async init(sampleRate, sampleSize, channels, debug) {
    if (typeof AudioContext === "undefined") {
      console.warn("AudioContext not supported");
      return;
    }
    let verb = "Initializing";
    if (__privateGet(this, _audioContext)) {
      verb = "Re-initializing";
      this.stop();
      this.resetAudioBuffer();
    }
    console.log(
      `${verb} audio (sampleRate=${sampleRate}, sampleSize=${sampleSize}, channels=${channels})`
    );
    __privateSet(this, _audioContext, new AudioContext({
      latencyHint: "interactive",
      sampleRate
    }));
    if (!__privateGet(this, _audioContext).audioWorklet || typeof AudioWorkletNode === "undefined") {
      console.warn("AudioWorklet not supported");
      return;
    }
    await __privateGet(this, _audioContext).audioWorklet.addModule(audioWorkletPath);
    this.emulatorPlaybackNode = new AudioWorkletNode(
      __privateGet(this, _audioContext),
      "emulator-playback-processor",
      {
        numberOfInputs: 0,
        numberOfOutputs: 1,
        outputChannelCount: [channels],
        channelCount: channels,
        processorOptions: {
          sampleSize,
          debug,
          config: this.workerConfig()
        }
      }
    );
    this.emulatorPlaybackNode.connect(__privateGet(this, _audioContext).destination);
    if (__privateGet(this, _audioContext).state === "suspended") {
      window.addEventListener("mousedown", __privateGet(this, _resumeOnGesture), {
        once: true
      });
      window.addEventListener("touchstart", __privateGet(this, _resumeOnGesture), {
        once: true
      });
    } else {
      __privateMethod(this, _handleAudioContextRunning, handleAudioContextRunning_fn).call(this);
    }
    if (debug) {
      __privateSet(this, _debugInterval, window.setInterval(
        () => __privateMethod(this, _debugLog, debugLog_fn).call(this, sampleRate, sampleSize, channels),
        100
      ));
    }
  }
  stop() {
    var _a;
    (_a = __privateGet(this, _audioContext)) == null ? void 0 : _a.close();
    window.removeEventListener("mousedown", __privateGet(this, _resumeOnGesture));
    window.removeEventListener("touchstart", __privateGet(this, _resumeOnGesture));
    if (__privateGet(this, _debugInterval)) {
      window.clearInterval(__privateGet(this, _debugInterval));
    }
  }
}
_input = new WeakMap();
_audioContext = new WeakMap();
_debugInterval = new WeakMap();
_resumeOnGesture = new WeakMap();
_handleAudioContextRunning = new WeakSet();
handleAudioContextRunning_fn = function() {
  this.resetAudioBuffer();
  __privateGet(this, _input).handleInput({ type: "audio-context-running" });
};
_debugLog = new WeakSet();
debugLog_fn = function(sampleRate, sampleSize, channels) {
  const bufferByteLength = this.currentAudioBufferByteLength();
  if (bufferByteLength === 0) {
    return;
  }
  const bufferSampleLength = bufferByteLength / (sampleSize >> 3) / channels;
  const bufferMsLength = bufferSampleLength / sampleRate * 1e3;
  console.log(
    "audio buffer:",
    (bufferByteLength / AUDIO_BUFFER_SIZE * 100).toFixed(1) + "% full - ",
    bufferByteLength,
    "bytes - ",
    bufferSampleLength,
    "samples - ",
    bufferMsLength.toFixed(1),
    "ms"
  );
};
const AUDIO_BUFFER_SIZE = 2 * 22050;
class SharedMemoryEmulatorAudio extends EmulatorAudio {
  constructor() {
    super(...arguments);
    __privateAdd(this, _audioBuffer, new SharedArrayBuffer(AUDIO_BUFFER_SIZE));
    __privateAdd(this, _audioRingBuffer, new RingBuffer(__privateGet(this, _audioBuffer), Uint8Array));
  }
  workerConfig() {
    return {
      type: "shared-memory",
      audioBuffer: __privateGet(this, _audioBuffer)
    };
  }
  resetAudioBuffer() {
    const buffer = new Uint8Array(__privateGet(this, _audioRingBuffer).available_read());
    __privateGet(this, _audioRingBuffer).pop(buffer);
  }
  currentAudioBufferByteLength() {
    return __privateGet(this, _audioRingBuffer).available_read();
  }
}
_audioBuffer = new WeakMap();
_audioRingBuffer = new WeakMap();
class FallbackEmulatorAudio extends EmulatorAudio {
  workerConfig() {
    return { type: "fallback" };
  }
  handleData(data) {
    var _a;
    (_a = this.emulatorPlaybackNode) == null ? void 0 : _a.port.postMessage({ type: "data", data });
  }
  resetAudioBuffer() {
    var _a;
    (_a = this.emulatorPlaybackNode) == null ? void 0 : _a.port.postMessage({ type: "reset" });
  }
  currentAudioBufferByteLength() {
    return 0;
  }
}
const INPUT_BUFFER_SIZE = 100;
class SharedMemoryEmulatorInput {
  constructor() {
    __privateAdd(this, _tryToSendInput);
    __privateAdd(this, _tryToSendInputLater);
    __privateAdd(this, _acquireInputLock);
    __privateAdd(this, _releaseInputLock);
    __privateAdd(this, _inputBuffer, new SharedArrayBuffer(INPUT_BUFFER_SIZE * 4));
    __privateAdd(this, _inputBufferView, new Int32Array(__privateGet(this, _inputBuffer)));
    __privateAdd(this, _inputQueue, []);
  }
  workerConfig() {
    return {
      type: "shared-memory",
      inputBuffer: __privateGet(this, _inputBuffer),
      inputBufferSize: INPUT_BUFFER_SIZE
    };
  }
  handleInput(inputEvent) {
    __privateGet(this, _inputQueue).push(inputEvent);
    __privateMethod(this, _tryToSendInput, tryToSendInput_fn).call(this);
  }
}
_inputBuffer = new WeakMap();
_inputBufferView = new WeakMap();
_inputQueue = new WeakMap();
_tryToSendInput = new WeakSet();
tryToSendInput_fn = function() {
  if (!__privateGet(this, _inputQueue).length) {
    return;
  }
  if (!__privateMethod(this, _acquireInputLock, acquireInputLock_fn).call(this)) {
    __privateMethod(this, _tryToSendInputLater, tryToSendInputLater_fn).call(this);
    return;
  }
  __privateSet(this, _inputQueue, updateInputBufferWithEvents(
    __privateGet(this, _inputQueue),
    __privateGet(this, _inputBufferView)
  ));
  __privateMethod(this, _releaseInputLock, releaseInputLock_fn).call(this);
  if (__privateGet(this, _inputQueue).length) {
    __privateMethod(this, _tryToSendInputLater, tryToSendInputLater_fn).call(this);
  }
};
_tryToSendInputLater = new WeakSet();
tryToSendInputLater_fn = function() {
  window.setTimeout(() => __privateMethod(this, _tryToSendInput, tryToSendInput_fn).call(this), 0);
};
_acquireInputLock = new WeakSet();
acquireInputLock_fn = function() {
  return acquireLock(
    __privateGet(this, _inputBufferView),
    InputBufferAddresses.globalLockAddr
  );
};
_releaseInputLock = new WeakSet();
releaseInputLock_fn = function() {
  releaseLock(__privateGet(this, _inputBufferView), InputBufferAddresses.globalLockAddr);
};
function acquireLock(bufferView, lockIndex) {
  const res = Atomics.compareExchange(
    bufferView,
    lockIndex,
    LockStates.READY_FOR_UI_THREAD,
    LockStates.UI_THREAD_LOCK
  );
  if (res === LockStates.READY_FOR_UI_THREAD) {
    return true;
  }
  return false;
}
function releaseLock(bufferView, lockIndex) {
  Atomics.store(bufferView, lockIndex, LockStates.READY_FOR_EMUL_THREAD);
  Atomics.notify(bufferView, lockIndex);
}
class FallbackEmulatorInput {
  constructor(commandSender) {
    __privateAdd(this, _commandSender, void 0);
    __privateSet(this, _commandSender, commandSender);
  }
  workerConfig() {
    return { type: "fallback", inputBufferSize: INPUT_BUFFER_SIZE };
  }
  handleInput(inputEvent) {
    __privateGet(this, _commandSender).call(this, { type: "input", event: inputEvent });
  }
}
_commandSender = new WeakMap();
const VIDEO_MODE_BUFFER_SIZE = 10;
class SharedMemoryEmulatorVideo {
  constructor(config) {
    __privateAdd(this, _config, void 0);
    __privateAdd(this, _screenBuffer, void 0);
    __privateAdd(this, _screenBufferView, void 0);
    __privateAdd(this, _videoModeBuffer, new SharedArrayBuffer(VIDEO_MODE_BUFFER_SIZE * 4));
    __privateAdd(this, _videoModeBufferView, new Int32Array(__privateGet(this, _videoModeBuffer)));
    __privateAdd(this, _lastBlitRect, void 0);
    __privateSet(this, _config, config);
    const screenBufferSize = config.screenWidth * config.screenHeight * 4;
    __privateSet(this, _screenBuffer, new SharedArrayBuffer(screenBufferSize));
    __privateSet(this, _screenBufferView, new Uint8Array(__privateGet(this, _screenBuffer)));
  }
  workerConfig() {
    return {
      type: "shared-memory",
      screenBuffer: __privateGet(this, _screenBuffer),
      screenBufferSize: __privateGet(this, _screenBuffer).byteLength,
      videoModeBuffer: __privateGet(this, _videoModeBuffer),
      videoModeBufferSize: VIDEO_MODE_BUFFER_SIZE,
      screenWidth: __privateGet(this, _config).screenWidth,
      screenHeight: __privateGet(this, _config).screenHeight
    };
  }
  blit(blitData) {
    const { rect } = blitData;
    if (!rect) {
      return;
    }
    if (!__privateGet(this, _lastBlitRect)) {
      __privateSet(this, _lastBlitRect, rect);
    } else {
      unionBlitRect(__privateGet(this, _lastBlitRect), rect);
    }
  }
  imageData() {
    const bufferSize = __privateGet(this, _videoModeBufferView)[0];
    return __privateGet(this, _screenBufferView).subarray(0, bufferSize);
  }
  consumeBlitRect() {
    const rect = __privateGet(this, _lastBlitRect);
    __privateSet(this, _lastBlitRect, void 0);
    return rect;
  }
}
_config = new WeakMap();
_screenBuffer = new WeakMap();
_screenBufferView = new WeakMap();
_videoModeBuffer = new WeakMap();
_videoModeBufferView = new WeakMap();
_lastBlitRect = new WeakMap();
class FallbackEmulatorVideo {
  constructor(config) {
    __privateAdd(this, _config2, void 0);
    __privateAdd(this, _lastBlitData, void 0);
    __privateAdd(this, _lastBlitRect2, void 0);
    __privateSet(this, _config2, config);
  }
  workerConfig() {
    return { type: "fallback" };
  }
  blit(blitData) {
    if (blitData.type !== "fallback") {
      return;
    }
    __privateSet(this, _lastBlitData, blitData);
    const { rect } = blitData;
    if (!rect) {
      return;
    }
    if (!__privateGet(this, _lastBlitRect2)) {
      __privateSet(this, _lastBlitRect2, rect);
    } else {
      unionBlitRect(__privateGet(this, _lastBlitRect2), rect);
    }
  }
  imageData() {
    var _a;
    return (_a = __privateGet(this, _lastBlitData)) == null ? void 0 : _a.data;
  }
  consumeBlitRect() {
    const rect = __privateGet(this, _lastBlitRect2);
    __privateSet(this, _lastBlitRect2, void 0);
    return rect;
  }
}
_config2 = new WeakMap();
_lastBlitData = new WeakMap();
_lastBlitRect2 = new WeakMap();
function unionBlitRect(lastRect, rect) {
  lastRect.top = Math.min(lastRect.top, rect.top);
  lastRect.left = Math.min(lastRect.left, rect.left);
  lastRect.bottom = Math.max(lastRect.bottom, rect.bottom);
  lastRect.right = Math.max(lastRect.right, rect.right);
}
const FILES_BUFFER_SIZE = 1024 * 1024;
class SharedMemoryEmulatorFiles {
  constructor() {
    __privateAdd(this, _updateBuffer);
    __privateAdd(this, _actions, { uploads: [], cdroms: [] });
    __privateAdd(this, _filesBuffer, new SharedArrayBuffer(FILES_BUFFER_SIZE));
    __privateAdd(this, _filesBufferView, new Uint8Array(__privateGet(this, _filesBuffer)));
    __privateMethod(this, _updateBuffer, updateBuffer_fn).call(this);
  }
  workerConfig() {
    return {
      type: "shared-memory",
      filesBuffer: __privateGet(this, _filesBuffer),
      filesBufferSize: FILES_BUFFER_SIZE
    };
  }
  uploadFile(uploads) {
    this.uploadFiles([uploads]);
  }
  uploadFiles(uploads) {
    __privateGet(this, _actions).uploads.push(...uploads);
    __privateMethod(this, _updateBuffer, updateBuffer_fn).call(this);
  }
  loadCDROM(cdrom) {
    __privateGet(this, _actions).cdroms.push(cdrom);
    __privateMethod(this, _updateBuffer, updateBuffer_fn).call(this);
  }
}
_actions = new WeakMap();
_filesBuffer = new WeakMap();
_filesBufferView = new WeakMap();
_updateBuffer = new WeakSet();
updateBuffer_fn = function() {
  const actionsString = JSON.stringify(__privateGet(this, _actions));
  __privateSet(this, _actions, { uploads: [], cdroms: [] });
  const actionsBytes = new TextEncoder().encode(actionsString);
  if (actionsBytes.length > FILES_BUFFER_SIZE) {
    console.warn("Files actions is too large, dropping");
    return;
  }
  __privateGet(this, _filesBufferView).set(actionsBytes);
  __privateGet(this, _filesBufferView).set([0], actionsBytes.length);
};
class FallbackEmulatorFiles {
  constructor(commandSender) {
    __privateAdd(this, _commandSender2, void 0);
    __privateSet(this, _commandSender2, commandSender);
  }
  workerConfig() {
    return { type: "fallback" };
  }
  uploadFile(upload) {
    __privateGet(this, _commandSender2).call(this, {
      type: "upload_file",
      upload
    });
  }
  uploadFiles(uploads) {
    for (const upload of uploads) {
      this.uploadFile(upload);
    }
  }
  loadCDROM(cdrom) {
    __privateGet(this, _commandSender2).call(this, {
      type: "load_cdrom",
      cdrom
    });
  }
}
_commandSender2 = new WeakMap();
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var jszip_min = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(module, exports) {
  !function(e) {
    module.exports = e();
  }(function() {
    return function s(a, o, h) {
      function u(r, e2) {
        if (!o[r]) {
          if (!a[r]) {
            var t = "function" == typeof commonjsRequire && commonjsRequire;
            if (!e2 && t)
              return t(r, true);
            if (l)
              return l(r, true);
            var n = new Error("Cannot find module '" + r + "'");
            throw n.code = "MODULE_NOT_FOUND", n;
          }
          var i = o[r] = { exports: {} };
          a[r][0].call(i.exports, function(e3) {
            var t2 = a[r][1][e3];
            return u(t2 || e3);
          }, i, i.exports, s, a, o, h);
        }
        return o[r].exports;
      }
      for (var l = "function" == typeof commonjsRequire && commonjsRequire, e = 0; e < h.length; e++)
        u(h[e]);
      return u;
    }({ 1: [function(e, t, r) {
      var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      r.encode = function(e2) {
        for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; )
          f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
        return h.join("");
      }, r.decode = function(e2) {
        var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
        if (e2.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; )
          t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
        return l;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
      var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
      function o(e2, t2, r2, n2, i2) {
        this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
      }
      o.prototype = { getContentWorker: function() {
        var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
        return e2.on("end", function() {
          if (this.streamInfo.data_length !== t2.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), e2;
      }, getCompressedWorker: function() {
        return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, o.createWorkerFrom = function(e2, t2, r2) {
        return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
      }, t.exports = o;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
      var n = e("./stream/GenericWorker");
      r.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, r.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
      var n = e("./utils");
      var o = function() {
        for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
          e2 = r2;
          for (var n2 = 0; n2 < 8; n2++)
            e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
          t2[r2] = e2;
        }
        return t2;
      }();
      t.exports = function(e2, t2) {
        return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? function(e3, t3, r2, n2) {
          var i = o, s = n2 + r2;
          e3 ^= -1;
          for (var a = n2; a < s; a++)
            e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
          return -1 ^ e3;
        }(0 | t2, e2, e2.length, 0) : function(e3, t3, r2, n2) {
          var i = o, s = n2 + r2;
          e3 ^= -1;
          for (var a = n2; a < s; a++)
            e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
          return -1 ^ e3;
        }(0 | t2, e2, e2.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, t, r) {
      r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
    }, {}], 6: [function(e, t, r) {
      var n = null;
      n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(e, t, r) {
      var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
      function h(e2, t2) {
        a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
      }
      r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
        this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
      }, h.prototype.flush = function() {
        a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
      }, h.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this._pako = null;
      }, h.prototype._createPako = function() {
        this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
        var t2 = this;
        this._pako.onData = function(e2) {
          t2.push({ data: e2, meta: t2.meta });
        };
      }, r.compressWorker = function(e2) {
        return new h("Deflate", e2);
      }, r.uncompressWorker = function() {
        return new h("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
      function A(e2, t2) {
        var r2, n2 = "";
        for (r2 = 0; r2 < t2; r2++)
          n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
        return n2;
      }
      function n(e2, t2, r2, n2, i2, s2) {
        var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
        var S = 0;
        t2 && (S |= 8), l || !_ && !g || (S |= 2048);
        var z = 0, C = 0;
        w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= function(e3, t3) {
          var r3 = e3;
          return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
        }(h.unixPermissions, w)) : (C = 20, z |= function(e3) {
          return 63 & (e3 || 0);
        }(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
        var E = "";
        return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
      }
      var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
      function s(e2, t2, r2, n2) {
        i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      I.inherits(s, i), s.prototype.push = function(e2) {
        var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
        this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
      }, s.prototype.openedSource = function(e2) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
        var t2 = this.streamFiles && !e2.file.dir;
        if (t2) {
          var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: r2.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = true;
      }, s.prototype.closedSource = function(e2) {
        this.accumulate = false;
        var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(r2.dirRecord), t2)
          this.push({ data: function(e3) {
            return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
          }(e2), meta: { percent: 100 } });
        else
          for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, s.prototype.flush = function() {
        for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++)
          this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
        var r2 = this.bytesWritten - e2, n2 = function(e3, t3, r3, n3, i2) {
          var s2 = I.transformTo("string", i2(n3));
          return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
        }(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
        this.push({ data: n2, meta: { percent: 100 } });
      }, s.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, s.prototype.registerPrevious = function(e2) {
        this._sources.push(e2);
        var t2 = this;
        return e2.on("data", function(e3) {
          t2.processChunk(e3);
        }), e2.on("end", function() {
          t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
        }), e2.on("error", function(e3) {
          t2.error(e3);
        }), this;
      }, s.prototype.resume = function() {
        return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
      }, s.prototype.error = function(e2) {
        var t2 = this._sources;
        if (!i.prototype.error.call(this, e2))
          return false;
        for (var r2 = 0; r2 < t2.length; r2++)
          try {
            t2[r2].error(e2);
          } catch (e3) {
          }
        return true;
      }, s.prototype.lock = function() {
        i.prototype.lock.call(this);
        for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++)
          e2[t2].lock();
      }, t.exports = s;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
      var u = e("../compressions"), n = e("./ZipFileWorker");
      r.generateWorker = function(e2, a, t2) {
        var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
        try {
          e2.forEach(function(e3, t3) {
            h++;
            var r2 = function(e4, t4) {
              var r3 = e4 || t4, n3 = u[r3];
              if (!n3)
                throw new Error(r3 + " is not a valid compression method !");
              return n3;
            }(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
            t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
          }), o.entriesCount = h;
        } catch (e3) {
          o.error(e3);
        }
        return o;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
      function n() {
        if (!(this instanceof n))
          return new n();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var e2 = new n();
          for (var t2 in this)
            "function" != typeof this[t2] && (e2[t2] = this[t2]);
          return e2;
        };
      }
      (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
        return new n().loadAsync(e2, t2);
      }, n.external = e("./external"), t.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
      var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
      function f(n2) {
        return new i.Promise(function(e2, t2) {
          var r2 = n2.decompressed.getContentWorker().pipe(new a());
          r2.on("error", function(e3) {
            t2(e3);
          }).on("end", function() {
            r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
          }).resume();
        });
      }
      t.exports = function(e2, o) {
        var h = this;
        return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
          var t2 = new s(o);
          return t2.load(e3), t2;
        }).then(function(e3) {
          var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
          if (o.checkCRC32)
            for (var n2 = 0; n2 < r2.length; n2++)
              t2.push(f(r2[n2]));
          return i.Promise.all(t2);
        }).then(function(e3) {
          for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
            var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
            h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
          }
          return t2.zipComment.length && (h.comment = t2.zipComment), h;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
      var n = e("../utils"), i = e("../stream/GenericWorker");
      function s(e2, t2) {
        i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
      }
      n.inherits(s, i), s.prototype._bindStream = function(e2) {
        var t2 = this;
        (this._stream = e2).pause(), e2.on("data", function(e3) {
          t2.push({ data: e3, meta: { percent: 0 } });
        }).on("error", function(e3) {
          t2.isPaused ? this.generatedError = e3 : t2.error(e3);
        }).on("end", function() {
          t2.isPaused ? t2._upstreamEnded = true : t2.end();
        });
      }, s.prototype.pause = function() {
        return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
      }, s.prototype.resume = function() {
        return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
      }, t.exports = s;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
      var i = e("readable-stream").Readable;
      function n(e2, t2, r2) {
        i.call(this, t2), this._helper = e2;
        var n2 = this;
        e2.on("data", function(e3, t3) {
          n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
        }).on("error", function(e3) {
          n2.emit("error", e3);
        }).on("end", function() {
          n2.push(null);
        });
      }
      e("../utils").inherits(n, i), n.prototype._read = function() {
        this._helper.resume();
      }, t.exports = n;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
      t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(e2, t2);
        if ("number" == typeof e2)
          throw new Error('The "data" argument must not be a number');
        return new Buffer(e2, t2);
      }, allocBuffer: function(e2) {
        if (Buffer.alloc)
          return Buffer.alloc(e2);
        var t2 = new Buffer(e2);
        return t2.fill(0), t2;
      }, isBuffer: function(e2) {
        return Buffer.isBuffer(e2);
      }, isStream: function(e2) {
        return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
      } };
    }, {}], 15: [function(e, t, r) {
      function s(e2, t2, r2) {
        var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
        s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
        var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
        r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
        var o2 = null;
        o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
        var h2 = new d(e2, o2, s2);
        this.files[e2] = h2;
      }
      var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
        "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
        var t2 = e2.lastIndexOf("/");
        return 0 < t2 ? e2.substring(0, t2) : "";
      }, g = function(e2) {
        return "/" !== e2.slice(-1) && (e2 += "/"), e2;
      }, b = function(e2, t2) {
        return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
      };
      function h(e2) {
        return "[object RegExp]" === Object.prototype.toString.call(e2);
      }
      var n = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(e2) {
        var t2, r2, n2;
        for (t2 in this.files)
          n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
      }, filter: function(r2) {
        var n2 = [];
        return this.forEach(function(e2, t2) {
          r2(e2, t2) && n2.push(t2);
        }), n2;
      }, file: function(e2, t2, r2) {
        if (1 !== arguments.length)
          return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
        if (h(e2)) {
          var n2 = e2;
          return this.filter(function(e3, t3) {
            return !t3.dir && n2.test(e3);
          });
        }
        var i2 = this.files[this.root + e2];
        return i2 && !i2.dir ? i2 : null;
      }, folder: function(r2) {
        if (!r2)
          return this;
        if (h(r2))
          return this.filter(function(e3, t3) {
            return t3.dir && r2.test(e3);
          });
        var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
        return n2.root = t2.name, n2;
      }, remove: function(r2) {
        r2 = this.root + r2;
        var e2 = this.files[r2];
        if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir)
          delete this.files[r2];
        else
          for (var t2 = this.filter(function(e3, t3) {
            return t3.name.slice(0, r2.length) === r2;
          }), n2 = 0; n2 < t2.length; n2++)
            delete this.files[t2[n2].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(e2) {
        var t2, r2 = {};
        try {
          if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type)
            throw new Error("No output type specified.");
          u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
          var n2 = r2.comment || this.comment || "";
          t2 = o.generateWorker(this, r2, n2);
        } catch (e3) {
          (t2 = new l("error")).error(e3);
        }
        return new a(t2, r2.type || "string", r2.mimeType);
      }, generateAsync: function(e2, t2) {
        return this.generateInternalStream(e2).accumulate(t2);
      }, generateNodeStream: function(e2, t2) {
        return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
      } };
      t.exports = n;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
      t.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, t, r) {
      var n = e("./DataReader");
      function i(e2) {
        n.call(this, e2);
        for (var t2 = 0; t2 < this.data.length; t2++)
          e2[t2] = 255 & e2[t2];
      }
      e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
        return this.data[this.zero + e2];
      }, i.prototype.lastIndexOfSignature = function(e2) {
        for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s)
          if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2)
            return s - this.zero;
        return -1;
      }, i.prototype.readAndCheckSignature = function(e2) {
        var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
        return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
      }, i.prototype.readData = function(e2) {
        if (this.checkOffset(e2), 0 === e2)
          return [];
        var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
        return this.index += e2, t2;
      }, t.exports = i;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
      var n = e("../utils");
      function i(e2) {
        this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
      }
      i.prototype = { checkOffset: function(e2) {
        this.checkIndex(this.index + e2);
      }, checkIndex: function(e2) {
        if (this.length < this.zero + e2 || e2 < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
      }, setIndex: function(e2) {
        this.checkIndex(e2), this.index = e2;
      }, skip: function(e2) {
        this.setIndex(this.index + e2);
      }, byteAt: function() {
      }, readInt: function(e2) {
        var t2, r2 = 0;
        for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--)
          r2 = (r2 << 8) + this.byteAt(t2);
        return this.index += e2, r2;
      }, readString: function(e2) {
        return n.transformTo("string", this.readData(e2));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var e2 = this.readInt(4);
        return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
      } }, t.exports = i;
    }, { "../utils": 32 }], 19: [function(e, t, r) {
      var n = e("./Uint8ArrayReader");
      function i(e2) {
        n.call(this, e2);
      }
      e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
        this.checkOffset(e2);
        var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
        return this.index += e2, t2;
      }, t.exports = i;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
      var n = e("./DataReader");
      function i(e2) {
        n.call(this, e2);
      }
      e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
        return this.data.charCodeAt(this.zero + e2);
      }, i.prototype.lastIndexOfSignature = function(e2) {
        return this.data.lastIndexOf(e2) - this.zero;
      }, i.prototype.readAndCheckSignature = function(e2) {
        return e2 === this.readData(4);
      }, i.prototype.readData = function(e2) {
        this.checkOffset(e2);
        var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
        return this.index += e2, t2;
      }, t.exports = i;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
      var n = e("./ArrayReader");
      function i(e2) {
        n.call(this, e2);
      }
      e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
        if (this.checkOffset(e2), 0 === e2)
          return new Uint8Array(0);
        var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
        return this.index += e2, t2;
      }, t.exports = i;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
      var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
      t.exports = function(e2) {
        var t2 = n.getTypeOf(e2);
        return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
      r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, t, r) {
      var n = e("./GenericWorker"), i = e("../utils");
      function s(e2) {
        n.call(this, "ConvertWorker to " + e2), this.destType = e2;
      }
      i.inherits(s, n), s.prototype.processChunk = function(e2) {
        this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
      }, t.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
      var n = e("./GenericWorker"), i = e("../crc32");
      function s() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
        this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
      }, t.exports = s;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
      var n = e("../utils"), i = e("./GenericWorker");
      function s(e2) {
        i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
      }
      n.inherits(s, i), s.prototype.processChunk = function(e2) {
        if (e2) {
          var t2 = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = t2 + e2.data.length;
        }
        i.prototype.processChunk.call(this, e2);
      }, t.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
      var n = e("../utils"), i = e("./GenericWorker");
      function s(e2) {
        i.call(this, "DataWorker");
        var t2 = this;
        this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
          t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
        }, function(e3) {
          t2.error(e3);
        });
      }
      n.inherits(s, i), s.prototype.cleanUp = function() {
        i.prototype.cleanUp.call(this), this.data = null;
      }, s.prototype.resume = function() {
        return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
      }, s.prototype._tickAndRepeat = function() {
        this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
      }, s.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return false;
        var e2 = null, t2 = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            e2 = this.data.substring(this.index, t2);
            break;
          case "uint8array":
            e2 = this.data.subarray(this.index, t2);
            break;
          case "array":
          case "nodebuffer":
            e2 = this.data.slice(this.index, t2);
        }
        return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, t.exports = s;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
      function n(e2) {
        this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      n.prototype = { push: function(e2) {
        this.emit("data", e2);
      }, end: function() {
        if (this.isFinished)
          return false;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = true;
        } catch (e2) {
          this.emit("error", e2);
        }
        return true;
      }, error: function(e2) {
        return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
      }, on: function(e2, t2) {
        return this._listeners[e2].push(t2), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(e2, t2) {
        if (this._listeners[e2])
          for (var r2 = 0; r2 < this._listeners[e2].length; r2++)
            this._listeners[e2][r2].call(this, t2);
      }, pipe: function(e2) {
        return e2.registerPrevious(this);
      }, registerPrevious: function(e2) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
        var t2 = this;
        return e2.on("data", function(e3) {
          t2.processChunk(e3);
        }), e2.on("end", function() {
          t2.end();
        }), e2.on("error", function(e3) {
          t2.error(e3);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return false;
        var e2 = this.isPaused = false;
        return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
      }, flush: function() {
      }, processChunk: function(e2) {
        this.push(e2);
      }, withStreamInfo: function(e2, t2) {
        return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var e2 in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = true, this.previous && this.previous.lock();
      }, toString: function() {
        var e2 = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + e2 : e2;
      } }, t.exports = n;
    }, {}], 29: [function(e, t, r) {
      var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
      if (n.nodestream)
        try {
          o = e("../nodejs/NodejsStreamOutputAdapter");
        } catch (e2) {
        }
      function l(e2, o2) {
        return new a.Promise(function(t2, r2) {
          var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
          e2.on("data", function(e3, t3) {
            n2.push(e3), o2 && o2(t3);
          }).on("error", function(e3) {
            n2 = [], r2(e3);
          }).on("end", function() {
            try {
              var e3 = function(e4, t3, r3) {
                switch (e4) {
                  case "blob":
                    return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                  case "base64":
                    return u.encode(t3);
                  default:
                    return h.transformTo(e4, t3);
                }
              }(s2, function(e4, t3) {
                var r3, n3 = 0, i3 = null, s3 = 0;
                for (r3 = 0; r3 < t3.length; r3++)
                  s3 += t3[r3].length;
                switch (e4) {
                  case "string":
                    return t3.join("");
                  case "array":
                    return Array.prototype.concat.apply([], t3);
                  case "uint8array":
                    for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++)
                      i3.set(t3[r3], n3), n3 += t3[r3].length;
                    return i3;
                  case "nodebuffer":
                    return Buffer.concat(t3);
                  default:
                    throw new Error("concat : unsupported type '" + e4 + "'");
                }
              }(i2, n2), a2);
              t2(e3);
            } catch (e4) {
              r2(e4);
            }
            n2 = [];
          }).resume();
        });
      }
      function f(e2, t2, r2) {
        var n2 = t2;
        switch (t2) {
          case "blob":
          case "arraybuffer":
            n2 = "uint8array";
            break;
          case "base64":
            n2 = "string";
        }
        try {
          this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
        } catch (e3) {
          this._worker = new s("error"), this._worker.error(e3);
        }
      }
      f.prototype = { accumulate: function(e2) {
        return l(this, e2);
      }, on: function(e2, t2) {
        var r2 = this;
        return "data" === e2 ? this._worker.on(e2, function(e3) {
          t2.call(r2, e3.data, e3.meta);
        }) : this._worker.on(e2, function() {
          h.delay(t2, arguments, r2);
        }), this;
      }, resume: function() {
        return h.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(e2) {
        if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType)
          throw new Error(this._outputType + " is not supported by this method");
        return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
      } }, t.exports = f;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
      if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer)
        r.blob = false;
      else {
        var n = new ArrayBuffer(0);
        try {
          r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
        } catch (e2) {
          try {
            var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
          } catch (e3) {
            r.blob = false;
          }
        }
      }
      try {
        r.nodestream = !!e("readable-stream").Readable;
      } catch (e2) {
        r.nodestream = false;
      }
    }, { "readable-stream": 16 }], 31: [function(e, t, s) {
      for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++)
        u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
      u[254] = u[254] = 1;
      function a() {
        n.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function l() {
        n.call(this, "utf-8 encode");
      }
      s.utf8encode = function(e2) {
        return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : function(e3) {
          var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
          for (i2 = 0; i2 < a2; i2++)
            55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
          for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++)
            55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
          return t2;
        }(e2);
      }, s.utf8decode = function(e2) {
        return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : function(e3) {
          var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
          for (t2 = r2 = 0; t2 < s2; )
            if ((n2 = e3[t2++]) < 128)
              a2[r2++] = n2;
            else if (4 < (i2 = u[n2]))
              a2[r2++] = 65533, t2 += i2 - 1;
            else {
              for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; )
                n2 = n2 << 6 | 63 & e3[t2++], i2--;
              1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
            }
          return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
        }(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
      }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
        var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
        if (this.leftOver && this.leftOver.length) {
          if (h.uint8array) {
            var r2 = t2;
            (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
          } else
            t2 = this.leftOver.concat(t2);
          this.leftOver = null;
        }
        var n2 = function(e3, t3) {
          var r3;
          for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); )
            r3--;
          return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
        }(t2), i2 = t2;
        n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
      }, a.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
        this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
      }, s.Utf8EncodeWorker = l;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
      var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
      function n(e2) {
        return e2;
      }
      function l(e2, t2) {
        for (var r2 = 0; r2 < e2.length; ++r2)
          t2[r2] = 255 & e2.charCodeAt(r2);
        return t2;
      }
      e("setimmediate"), a.newBlob = function(t2, r2) {
        a.checkSupport("blob");
        try {
          return new Blob([t2], { type: r2 });
        } catch (e2) {
          try {
            var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return n2.append(t2), n2.getBlob(r2);
          } catch (e3) {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var i = { stringifyByChunk: function(e2, t2, r2) {
        var n2 = [], i2 = 0, s2 = e2.length;
        if (s2 <= r2)
          return String.fromCharCode.apply(null, e2);
        for (; i2 < s2; )
          "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
        return n2.join("");
      }, stringifyByChar: function(e2) {
        for (var t2 = "", r2 = 0; r2 < e2.length; r2++)
          t2 += String.fromCharCode(e2[r2]);
        return t2;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
        } catch (e2) {
          return false;
        }
      }(), nodebuffer: function() {
        try {
          return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
        } catch (e2) {
          return false;
        }
      }() } };
      function s(e2) {
        var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
        if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2)
          for (; 1 < t2; )
            try {
              return i.stringifyByChunk(e2, r2, t2);
            } catch (e3) {
              t2 = Math.floor(t2 / 2);
            }
        return i.stringifyByChar(e2);
      }
      function f(e2, t2) {
        for (var r2 = 0; r2 < e2.length; r2++)
          t2[r2] = e2[r2];
        return t2;
      }
      a.applyFromCharCode = s;
      var c = {};
      c.string = { string: n, array: function(e2) {
        return l(e2, new Array(e2.length));
      }, arraybuffer: function(e2) {
        return c.string.uint8array(e2).buffer;
      }, uint8array: function(e2) {
        return l(e2, new Uint8Array(e2.length));
      }, nodebuffer: function(e2) {
        return l(e2, r.allocBuffer(e2.length));
      } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
        return new Uint8Array(e2).buffer;
      }, uint8array: function(e2) {
        return new Uint8Array(e2);
      }, nodebuffer: function(e2) {
        return r.newBufferFrom(e2);
      } }, c.arraybuffer = { string: function(e2) {
        return s(new Uint8Array(e2));
      }, array: function(e2) {
        return f(new Uint8Array(e2), new Array(e2.byteLength));
      }, arraybuffer: n, uint8array: function(e2) {
        return new Uint8Array(e2);
      }, nodebuffer: function(e2) {
        return r.newBufferFrom(new Uint8Array(e2));
      } }, c.uint8array = { string: s, array: function(e2) {
        return f(e2, new Array(e2.length));
      }, arraybuffer: function(e2) {
        return e2.buffer;
      }, uint8array: n, nodebuffer: function(e2) {
        return r.newBufferFrom(e2);
      } }, c.nodebuffer = { string: s, array: function(e2) {
        return f(e2, new Array(e2.length));
      }, arraybuffer: function(e2) {
        return c.nodebuffer.uint8array(e2).buffer;
      }, uint8array: function(e2) {
        return f(e2, new Uint8Array(e2.length));
      }, nodebuffer: n }, a.transformTo = function(e2, t2) {
        if (t2 = t2 || "", !e2)
          return t2;
        a.checkSupport(e2);
        var r2 = a.getTypeOf(t2);
        return c[r2][e2](t2);
      }, a.resolve = function(e2) {
        for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
          var i2 = t2[n2];
          "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
        }
        return r2.join("/");
      }, a.getTypeOf = function(e2) {
        return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, a.checkSupport = function(e2) {
        if (!o[e2.toLowerCase()])
          throw new Error(e2 + " is not supported by this platform");
      }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
        var t2, r2, n2 = "";
        for (r2 = 0; r2 < (e2 || "").length; r2++)
          n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
        return n2;
      }, a.delay = function(e2, t2, r2) {
        setImmediate(function() {
          e2.apply(r2 || null, t2 || []);
        });
      }, a.inherits = function(e2, t2) {
        function r2() {
        }
        r2.prototype = t2.prototype, e2.prototype = new r2();
      }, a.extend = function() {
        var e2, t2, r2 = {};
        for (e2 = 0; e2 < arguments.length; e2++)
          for (t2 in arguments[e2])
            Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
        return r2;
      }, a.prepareContent = function(r2, e2, n2, i2, s2) {
        return u.Promise.resolve(e2).then(function(n3) {
          return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
            var e3 = new FileReader();
            e3.onload = function(e4) {
              t2(e4.target.result);
            }, e3.onerror = function(e4) {
              r3(e4.target.error);
            }, e3.readAsArrayBuffer(n3);
          }) : n3;
        }).then(function(e3) {
          var t2 = a.getTypeOf(e3);
          return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = function(e4) {
            return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
          }(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
      var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
      function h(e2) {
        this.files = [], this.loadOptions = e2;
      }
      h.prototype = { checkSignature: function(e2) {
        if (!this.reader.readAndCheckSignature(e2)) {
          this.reader.index -= 4;
          var t2 = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
        }
      }, isSignature: function(e2, t2) {
        var r2 = this.reader.index;
        this.reader.setIndex(e2);
        var n2 = this.reader.readString(4) === t2;
        return this.reader.setIndex(r2), n2;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
        this.zipComment = this.loadOptions.decodeFileName(r2);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; )
          e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var e2, t2;
        for (e2 = 0; e2 < this.files.length; e2++)
          t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
      }, readCentralDir: function() {
        var e2;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); )
          (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
        if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
        if (e2 < 0)
          throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
        this.reader.setIndex(e2);
        var t2 = e2;
        if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
          if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var r2 = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
        var n2 = t2 - r2;
        if (0 < n2)
          this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
        else if (n2 < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
      }, prepareReader: function(e2) {
        this.reader = n(e2);
      }, load: function(e2) {
        this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, t.exports = h;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
      var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
      function l(e2, t2) {
        this.options = e2, this.loadOptions = t2;
      }
      l.prototype = { isEncrypted: function() {
        return 1 == (1 & this.bitFlag);
      }, useUTF8: function() {
        return 2048 == (2048 & this.bitFlag);
      }, readLocalPart: function(e2) {
        var t2, r2;
        if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if (null === (t2 = function(e3) {
          for (var t3 in h)
            if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3)
              return h[t3];
          return null;
        }(this.compressionMethod)))
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
      }, readCentralPart: function(e2) {
        this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
        var t2 = e2.readInt(2);
        if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var e2 = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var e2 = n(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
        }
      }, readExtraFields: function(e2) {
        var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; )
          t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
        e2.setIndex(i2);
      }, handleUTF8: function() {
        var e2 = u.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
        else {
          var t2 = this.findExtraFieldUnicodePath();
          if (null !== t2)
            this.fileNameStr = t2;
          else {
            var r2 = s.transformTo(e2, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(r2);
          }
          var n2 = this.findExtraFieldUnicodeComment();
          if (null !== n2)
            this.fileCommentStr = n2;
          else {
            var i2 = s.transformTo(e2, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(i2);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var e2 = this.extraFields[28789];
        if (e2) {
          var t2 = n(e2.value);
          return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var e2 = this.extraFields[25461];
        if (e2) {
          var t2 = n(e2.value);
          return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
        }
        return null;
      } }, t.exports = l;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
      function n(e2, t2, r2) {
        this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
      }
      var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
      n.prototype = { internalStream: function(e2) {
        var t2 = null, r2 = "string";
        try {
          if (!e2)
            throw new Error("No output type specified.");
          var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
          "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
          var i2 = !this._dataBinary;
          i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
        } catch (e3) {
          (t2 = new h("error")).error(e3);
        }
        return new s(t2, r2, "");
      }, async: function(e2, t2) {
        return this.internalStream(e2).accumulate(t2);
      }, nodeStream: function(e2, t2) {
        return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
      }, _compressWorker: function(e2, t2) {
        if (this._data instanceof o && this._data.compression.magic === e2.magic)
          return this._data.getCompressedWorker();
        var r2 = this._decompressWorker();
        return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
      }, _decompressWorker: function() {
        return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
      } };
      for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, f = 0; f < u.length; f++)
        n.prototype[u[f]] = l;
      t.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
      (function(t2) {
        var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
        if (e2) {
          var i = 0, s = new e2(u), a = t2.document.createTextNode("");
          s.observe(a, { characterData: true }), r = function() {
            a.data = i = ++i % 2;
          };
        } else if (t2.setImmediate || void 0 === t2.MessageChannel)
          r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
            var e3 = t2.document.createElement("script");
            e3.onreadystatechange = function() {
              u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
            }, t2.document.documentElement.appendChild(e3);
          } : function() {
            setTimeout(u, 0);
          };
        else {
          var o = new t2.MessageChannel();
          o.port1.onmessage = u, r = function() {
            o.port2.postMessage(0);
          };
        }
        var h = [];
        function u() {
          var e3, t3;
          n = true;
          for (var r2 = h.length; r2; ) {
            for (t3 = h, h = [], e3 = -1; ++e3 < r2; )
              t3[e3]();
            r2 = h.length;
          }
          n = false;
        }
        l.exports = function(e3) {
          1 !== h.push(e3) || n || r();
        };
      }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}], 37: [function(e, t, r) {
      var i = e("immediate");
      function u() {
      }
      var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
      function o(e2) {
        if ("function" != typeof e2)
          throw new TypeError("resolver must be a function");
        this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
      }
      function h(e2, t2, r2) {
        this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
      }
      function f(t2, r2, n2) {
        i(function() {
          var e2;
          try {
            e2 = r2(n2);
          } catch (e3) {
            return l.reject(t2, e3);
          }
          e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
        });
      }
      function c(e2) {
        var t2 = e2 && e2.then;
        if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2)
          return function() {
            t2.apply(e2, arguments);
          };
      }
      function d(t2, e2) {
        var r2 = false;
        function n2(e3) {
          r2 || (r2 = true, l.reject(t2, e3));
        }
        function i2(e3) {
          r2 || (r2 = true, l.resolve(t2, e3));
        }
        var s2 = p(function() {
          e2(i2, n2);
        });
        "error" === s2.status && n2(s2.value);
      }
      function p(e2, t2) {
        var r2 = {};
        try {
          r2.value = e2(t2), r2.status = "success";
        } catch (e3) {
          r2.status = "error", r2.value = e3;
        }
        return r2;
      }
      (t.exports = o).prototype.finally = function(t2) {
        if ("function" != typeof t2)
          return this;
        var r2 = this.constructor;
        return this.then(function(e2) {
          return r2.resolve(t2()).then(function() {
            return e2;
          });
        }, function(e2) {
          return r2.resolve(t2()).then(function() {
            throw e2;
          });
        });
      }, o.prototype.catch = function(e2) {
        return this.then(null, e2);
      }, o.prototype.then = function(e2, t2) {
        if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s)
          return this;
        var r2 = new this.constructor(u);
        this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
        return r2;
      }, h.prototype.callFulfilled = function(e2) {
        l.resolve(this.promise, e2);
      }, h.prototype.otherCallFulfilled = function(e2) {
        f(this.promise, this.onFulfilled, e2);
      }, h.prototype.callRejected = function(e2) {
        l.reject(this.promise, e2);
      }, h.prototype.otherCallRejected = function(e2) {
        f(this.promise, this.onRejected, e2);
      }, l.resolve = function(e2, t2) {
        var r2 = p(c, t2);
        if ("error" === r2.status)
          return l.reject(e2, r2.value);
        var n2 = r2.value;
        if (n2)
          d(e2, n2);
        else {
          e2.state = a, e2.outcome = t2;
          for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; )
            e2.queue[i2].callFulfilled(t2);
        }
        return e2;
      }, l.reject = function(e2, t2) {
        e2.state = s, e2.outcome = t2;
        for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; )
          e2.queue[r2].callRejected(t2);
        return e2;
      }, o.resolve = function(e2) {
        if (e2 instanceof this)
          return e2;
        return l.resolve(new this(u), e2);
      }, o.reject = function(e2) {
        var t2 = new this(u);
        return l.reject(t2, e2);
      }, o.all = function(e2) {
        var r2 = this;
        if ("[object Array]" !== Object.prototype.toString.call(e2))
          return this.reject(new TypeError("must be an array"));
        var n2 = e2.length, i2 = false;
        if (!n2)
          return this.resolve([]);
        var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
        for (; ++t2 < n2; )
          h2(e2[t2], t2);
        return o2;
        function h2(e3, t3) {
          r2.resolve(e3).then(function(e4) {
            s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
          }, function(e4) {
            i2 || (i2 = true, l.reject(o2, e4));
          });
        }
      }, o.race = function(e2) {
        var t2 = this;
        if ("[object Array]" !== Object.prototype.toString.call(e2))
          return this.reject(new TypeError("must be an array"));
        var r2 = e2.length, n2 = false;
        if (!r2)
          return this.resolve([]);
        var i2 = -1, s2 = new this(u);
        for (; ++i2 < r2; )
          a2 = e2[i2], t2.resolve(a2).then(function(e3) {
            n2 || (n2 = true, l.resolve(s2, e3));
          }, function(e3) {
            n2 || (n2 = true, l.reject(s2, e3));
          });
        var a2;
        return s2;
      };
    }, { immediate: 36 }], 38: [function(e, t, r) {
      var n = {};
      (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
      var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
      function p(e2) {
        if (!(this instanceof p))
          return new p(e2);
        this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
        var t2 = this.options;
        t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
        var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
        if (r2 !== l)
          throw new Error(i[r2]);
        if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
          var n2;
          if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l)
            throw new Error(i[r2]);
          this._dict_set = true;
        }
      }
      function n(e2, t2) {
        var r2 = new p(t2);
        if (r2.push(e2, true), r2.err)
          throw r2.msg || i[r2.err];
        return r2.result;
      }
      p.prototype.push = function(e2, t2) {
        var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
        if (this.ended)
          return false;
        n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
        do {
          if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l)
            return this.onEnd(r2), !(this.ended = true);
          0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
        } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
        return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
      }, p.prototype.onData = function(e2) {
        this.chunks.push(e2);
      }, p.prototype.onEnd = function(e2) {
        e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
      }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
        return (t2 = t2 || {}).raw = true, n(e2, t2);
      }, r.gzip = function(e2, t2) {
        return (t2 = t2 || {}).gzip = true, n(e2, t2);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
      var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
      function a(e2) {
        if (!(this instanceof a))
          return new a(e2);
        this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
        var t2 = this.options;
        t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
        var r2 = c.inflateInit2(this.strm, t2.windowBits);
        if (r2 !== m.Z_OK)
          throw new Error(n[r2]);
        this.header = new s(), c.inflateGetHeader(this.strm, this.header);
      }
      function o(e2, t2) {
        var r2 = new a(t2);
        if (r2.push(e2, true), r2.err)
          throw r2.msg || n[r2.err];
        return r2.result;
      }
      a.prototype.push = function(e2, t2) {
        var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
        if (this.ended)
          return false;
        n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
        do {
          if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK)
            return this.onEnd(r2), !(this.ended = true);
          h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
        } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
        return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
      }, a.prototype.onData = function(e2) {
        this.chunks.push(e2);
      }, a.prototype.onEnd = function(e2) {
        e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
      }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
        return (t2 = t2 || {}).raw = true, o(e2, t2);
      }, r.ungzip = o;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
      var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
      r.assign = function(e2) {
        for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
          var r2 = t2.shift();
          if (r2) {
            if ("object" != typeof r2)
              throw new TypeError(r2 + "must be non-object");
            for (var n2 in r2)
              r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
          }
        }
        return e2;
      }, r.shrinkBuf = function(e2, t2) {
        return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
      };
      var i = { arraySet: function(e2, t2, r2, n2, i2) {
        if (t2.subarray && e2.subarray)
          e2.set(t2.subarray(r2, r2 + n2), i2);
        else
          for (var s2 = 0; s2 < n2; s2++)
            e2[i2 + s2] = t2[r2 + s2];
      }, flattenChunks: function(e2) {
        var t2, r2, n2, i2, s2, a;
        for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++)
          n2 += e2[t2].length;
        for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++)
          s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
        return a;
      } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
        for (var s2 = 0; s2 < n2; s2++)
          e2[i2 + s2] = t2[r2 + s2];
      }, flattenChunks: function(e2) {
        return [].concat.apply([], e2);
      } };
      r.setTyped = function(e2) {
        e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
      }, r.setTyped(n);
    }, {}], 42: [function(e, t, r) {
      var h = e("./common"), i = true, s = true;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch (e2) {
        i = false;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (e2) {
        s = false;
      }
      for (var u = new h.Buf8(256), n = 0; n < 256; n++)
        u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
      function l(e2, t2) {
        if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i))
          return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
        for (var r2 = "", n2 = 0; n2 < t2; n2++)
          r2 += String.fromCharCode(e2[n2]);
        return r2;
      }
      u[254] = u[254] = 1, r.string2buf = function(e2) {
        var t2, r2, n2, i2, s2, a = e2.length, o = 0;
        for (i2 = 0; i2 < a; i2++)
          55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
        for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++)
          55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
        return t2;
      }, r.buf2binstring = function(e2) {
        return l(e2, e2.length);
      }, r.binstring2buf = function(e2) {
        for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++)
          t2[r2] = e2.charCodeAt(r2);
        return t2;
      }, r.buf2string = function(e2, t2) {
        var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
        for (r2 = n2 = 0; r2 < a; )
          if ((i2 = e2[r2++]) < 128)
            o[n2++] = i2;
          else if (4 < (s2 = u[i2]))
            o[n2++] = 65533, r2 += s2 - 1;
          else {
            for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; )
              i2 = i2 << 6 | 63 & e2[r2++], s2--;
            1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
          }
        return l(o, n2);
      }, r.utf8border = function(e2, t2) {
        var r2;
        for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); )
          r2--;
        return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
      };
    }, { "./common": 41 }], 43: [function(e, t, r) {
      t.exports = function(e2, t2, r2, n) {
        for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
          for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; )
            ;
          i %= 65521, s %= 65521;
        }
        return i | s << 16 | 0;
      };
    }, {}], 44: [function(e, t, r) {
      t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, t, r) {
      var o = function() {
        for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
          e2 = r2;
          for (var n = 0; n < 8; n++)
            e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
          t2[r2] = e2;
        }
        return t2;
      }();
      t.exports = function(e2, t2, r2, n) {
        var i = o, s = n + r2;
        e2 ^= -1;
        for (var a = n; a < s; a++)
          e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
        return -1 ^ e2;
      };
    }, {}], 46: [function(e, t, r) {
      var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
      function R(e2, t2) {
        return e2.msg = n[t2], t2;
      }
      function T(e2) {
        return (e2 << 1) - (4 < e2 ? 9 : 0);
      }
      function D(e2) {
        for (var t2 = e2.length; 0 <= --t2; )
          e2[t2] = 0;
      }
      function F(e2) {
        var t2 = e2.state, r2 = t2.pending;
        r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
      }
      function N(e2, t2) {
        u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
      }
      function U(e2, t2) {
        e2.pending_buf[e2.pending++] = t2;
      }
      function P(e2, t2) {
        e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
      }
      function L(e2, t2) {
        var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
        e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
        do {
          if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
            s2 += 2, r2++;
            do {
            } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
            if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
              if (e2.match_start = t2, o2 <= (a2 = n2))
                break;
              d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
            }
          }
        } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
        return a2 <= e2.lookahead ? a2 : e2.lookahead;
      }
      function j(e2) {
        var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
        do {
          if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
            for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; )
              ;
            for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; )
              ;
            i2 += f2;
          }
          if (0 === e2.strm.avail_in)
            break;
          if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x)
            for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); )
              ;
        } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
      }
      function Z(e2, t2) {
        for (var r2, n2; ; ) {
          if (e2.lookahead < z) {
            if (j(e2), e2.lookahead < z && t2 === l)
              return A;
            if (0 === e2.lookahead)
              break;
          }
          if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x)
            if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
              for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; )
                ;
              e2.strstart++;
            } else
              e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
          else
            n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
          if (n2 && (N(e2, false), 0 === e2.strm.avail_out))
            return A;
        }
        return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
      }
      function W(e2, t2) {
        for (var r2, n2, i2; ; ) {
          if (e2.lookahead < z) {
            if (j(e2), e2.lookahead < z && t2 === l)
              return A;
            if (0 === e2.lookahead)
              break;
          }
          if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
            for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; )
              ;
            if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out))
              return A;
          } else if (e2.match_available) {
            if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out)
              return A;
          } else
            e2.match_available = 1, e2.strstart++, e2.lookahead--;
        }
        return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
      }
      function M(e2, t2, r2, n2, i2) {
        this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
      }
      function H() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function G(e2) {
        var t2;
        return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
      }
      function K(e2) {
        var t2 = G(e2);
        return t2 === m && function(e3) {
          e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
        }(e2.state), t2;
      }
      function Y(e2, t2, r2, n2, i2, s2) {
        if (!e2)
          return _;
        var a2 = 1;
        if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2)
          return R(e2, _);
        8 === n2 && (n2 = 9);
        var o2 = new H();
        return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
      }
      h = [new M(0, 0, 0, 0, function(e2, t2) {
        var r2 = 65535;
        for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
          if (e2.lookahead <= 1) {
            if (j(e2), 0 === e2.lookahead && t2 === l)
              return A;
            if (0 === e2.lookahead)
              break;
          }
          e2.strstart += e2.lookahead, e2.lookahead = 0;
          var n2 = e2.block_start + r2;
          if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out))
            return A;
          if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out))
            return A;
        }
        return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
      }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
        return Y(e2, t2, v, 15, 8, 0);
      }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
        return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
      }, r.deflate = function(e2, t2) {
        var r2, n2, i2, s2;
        if (!e2 || !e2.state || 5 < t2 || t2 < 0)
          return e2 ? R(e2, _) : _;
        if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f)
          return R(e2, 0 === e2.avail_out ? -5 : _);
        if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C)
          if (2 === n2.wrap)
            e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
          else {
            var a2 = v + (n2.w_bits - 8 << 4) << 8;
            a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
          }
        if (69 === n2.status)
          if (n2.gzhead.extra) {
            for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); )
              U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
          } else
            n2.status = 73;
        if (73 === n2.status)
          if (n2.gzhead.name) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
          } else
            n2.status = 91;
        if (91 === n2.status)
          if (n2.gzhead.comment) {
            i2 = n2.pending;
            do {
              if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                s2 = 1;
                break;
              }
              s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
            } while (0 !== s2);
            n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
          } else
            n2.status = 103;
        if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
          if (F(e2), 0 === e2.avail_out)
            return n2.last_flush = -1, m;
        } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f)
          return R(e2, -5);
        if (666 === n2.status && 0 !== e2.avail_in)
          return R(e2, -5);
        if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
          var o2 = 2 === n2.strategy ? function(e3, t3) {
            for (var r3; ; ) {
              if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                if (t3 === l)
                  return A;
                break;
              }
              if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out))
                return A;
            }
            return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
          }(n2, t2) : 3 === n2.strategy ? function(e3, t3) {
            for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
              if (e3.lookahead <= S) {
                if (j(e3), e3.lookahead <= S && t3 === l)
                  return A;
                if (0 === e3.lookahead)
                  break;
              }
              if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                s3 = e3.strstart + S;
                do {
                } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
              }
              if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out))
                return A;
            }
            return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
          }(n2, t2) : h[n2.level].func(n2, t2);
          if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O)
            return 0 === e2.avail_out && (n2.last_flush = -1), m;
          if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out))
            return n2.last_flush = -1, m;
        }
        return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
      }, r.deflateEnd = function(e2) {
        var t2;
        return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
      }, r.deflateSetDictionary = function(e2, t2) {
        var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
        if (!e2 || !e2.state)
          return _;
        if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead)
          return _;
        for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
          for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; )
            ;
          r2.strstart = n2, r2.lookahead = x - 1, j(r2);
        }
        return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
      }, r.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
      t.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
      };
    }, {}], 48: [function(e, t, r) {
      t.exports = function(e2, t2) {
        var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
        r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
        e:
          do {
            p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
            t:
              for (; ; ) {
                if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255))
                  C[s++] = 65535 & v;
                else {
                  if (!(16 & y)) {
                    if (0 == (64 & y)) {
                      v = m[(65535 & v) + (d & (1 << y) - 1)];
                      continue t;
                    }
                    if (32 & y) {
                      r2.mode = 12;
                      break e;
                    }
                    e2.msg = "invalid literal/length code", r2.mode = 30;
                    break e;
                  }
                  w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                  r:
                    for (; ; ) {
                      if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                        if (0 == (64 & y)) {
                          v = _[(65535 & v) + (d & (1 << y) - 1)];
                          continue r;
                        }
                        e2.msg = "invalid distance code", r2.mode = 30;
                        break e;
                      }
                      if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                        e2.msg = "invalid distance too far back", r2.mode = 30;
                        break e;
                      }
                      if (d >>>= y, p -= y, (y = s - a) < k) {
                        if (l < (y = k - y) && r2.sane) {
                          e2.msg = "invalid distance too far back", r2.mode = 30;
                          break e;
                        }
                        if (S = c, (x = 0) === f) {
                          if (x += u - y, y < w) {
                            for (w -= y; C[s++] = c[x++], --y; )
                              ;
                            x = s - k, S = C;
                          }
                        } else if (f < y) {
                          if (x += u + f - y, (y -= f) < w) {
                            for (w -= y; C[s++] = c[x++], --y; )
                              ;
                            if (x = 0, f < w) {
                              for (w -= y = f; C[s++] = c[x++], --y; )
                                ;
                              x = s - k, S = C;
                            }
                          }
                        } else if (x += f - y, y < w) {
                          for (w -= y; C[s++] = c[x++], --y; )
                            ;
                          x = s - k, S = C;
                        }
                        for (; 2 < w; )
                          C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                        w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                      } else {
                        for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); )
                          ;
                        w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (n < i && s < o);
        n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
      };
    }, {}], 49: [function(e, t, r) {
      var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
      function L(e2) {
        return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
      }
      function s() {
        this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function a(e2) {
        var t2;
        return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
      }
      function o(e2) {
        var t2;
        return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
      }
      function h(e2, t2) {
        var r2, n2;
        return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
      }
      function u(e2, t2) {
        var r2, n2;
        return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
      }
      var l, f, c = true;
      function j(e2) {
        if (c) {
          var t2;
          for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; )
            e2.lens[t2++] = 8;
          for (; t2 < 256; )
            e2.lens[t2++] = 9;
          for (; t2 < 280; )
            e2.lens[t2++] = 7;
          for (; t2 < 288; )
            e2.lens[t2++] = 8;
          for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; )
            e2.lens[t2++] = 5;
          T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
        }
        e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
      }
      function Z(e2, t2, r2, n2) {
        var i2, s2 = e2.state;
        return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
      }
      r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
        return u(e2, 15);
      }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
        var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in)
          return U;
        12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
        e:
          for (; ; )
            switch (r2.mode) {
              case P:
                if (0 === r2.wrap) {
                  r2.mode = 13;
                  break;
                }
                for (; l2 < 16; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (2 & r2.wrap && 35615 === u2) {
                  E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                  break;
                }
                if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                  e2.msg = "incorrect header check", r2.mode = 30;
                  break;
                }
                if (8 != (15 & u2)) {
                  e2.msg = "unknown compression method", r2.mode = 30;
                  break;
                }
                if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits)
                  r2.wbits = k;
                else if (k > r2.wbits) {
                  e2.msg = "invalid window size", r2.mode = 30;
                  break;
                }
                r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
                break;
              case 2:
                for (; l2 < 16; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (r2.flags = u2, 8 != (255 & r2.flags)) {
                  e2.msg = "unknown compression method", r2.mode = 30;
                  break;
                }
                if (57344 & r2.flags) {
                  e2.msg = "unknown header flags set", r2.mode = 30;
                  break;
                }
                r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
              case 3:
                for (; l2 < 32; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
              case 4:
                for (; l2 < 16; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
              case 5:
                if (1024 & r2.flags) {
                  for (; l2 < 16; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
                } else
                  r2.head && (r2.head.extra = null);
                r2.mode = 6;
              case 6:
                if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length))
                  break e;
                r2.length = 0, r2.mode = 7;
              case 7:
                if (2048 & r2.flags) {
                  if (0 === o2)
                    break e;
                  for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; )
                    ;
                  if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k)
                    break e;
                } else
                  r2.head && (r2.head.name = null);
                r2.length = 0, r2.mode = 8;
              case 8:
                if (4096 & r2.flags) {
                  if (0 === o2)
                    break e;
                  for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; )
                    ;
                  if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k)
                    break e;
                } else
                  r2.head && (r2.head.comment = null);
                r2.mode = 9;
              case 9:
                if (512 & r2.flags) {
                  for (; l2 < 16; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (u2 !== (65535 & r2.check)) {
                    e2.msg = "header crc mismatch", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
                break;
              case 10:
                for (; l2 < 32; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
              case 11:
                if (0 === r2.havedict)
                  return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
                e2.adler = r2.check = 1, r2.mode = 12;
              case 12:
                if (5 === t2 || 6 === t2)
                  break e;
              case 13:
                if (r2.last) {
                  u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                  break;
                }
                for (; l2 < 3; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                  case 0:
                    r2.mode = 14;
                    break;
                  case 1:
                    if (j(r2), r2.mode = 20, 6 !== t2)
                      break;
                    u2 >>>= 2, l2 -= 2;
                    break e;
                  case 2:
                    r2.mode = 17;
                    break;
                  case 3:
                    e2.msg = "invalid block type", r2.mode = 30;
                }
                u2 >>>= 2, l2 -= 2;
                break;
              case 14:
                for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                  e2.msg = "invalid stored block lengths", r2.mode = 30;
                  break;
                }
                if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2)
                  break e;
              case 15:
                r2.mode = 16;
              case 16:
                if (d = r2.length) {
                  if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d)
                    break e;
                  I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                  break;
                }
                r2.mode = 12;
                break;
              case 17:
                for (; l2 < 14; ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                  e2.msg = "too many length or distance symbols", r2.mode = 30;
                  break;
                }
                r2.have = 0, r2.mode = 18;
              case 18:
                for (; r2.have < r2.ncode; ) {
                  for (; l2 < 3; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
                }
                for (; r2.have < 19; )
                  r2.lens[A[r2.have++]] = 0;
                if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                  e2.msg = "invalid code lengths set", r2.mode = 30;
                  break;
                }
                r2.have = 0, r2.mode = 19;
              case 19:
                for (; r2.have < r2.nlen + r2.ndist; ) {
                  for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (b < 16)
                    u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                  else {
                    if (16 === b) {
                      for (z = _ + 2; l2 < z; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                        e2.msg = "invalid bit length repeat", r2.mode = 30;
                        break;
                      }
                      k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                    } else if (17 === b) {
                      for (z = _ + 3; l2 < z; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                    } else {
                      for (z = _ + 7; l2 < z; ) {
                        if (0 === o2)
                          break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                    }
                    if (r2.have + d > r2.nlen + r2.ndist) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    for (; d--; )
                      r2.lens[r2.have++] = k;
                  }
                }
                if (30 === r2.mode)
                  break;
                if (0 === r2.lens[256]) {
                  e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                  break;
                }
                if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                  e2.msg = "invalid literal/lengths set", r2.mode = 30;
                  break;
                }
                if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                  e2.msg = "invalid distances set", r2.mode = 30;
                  break;
                }
                if (r2.mode = 20, 6 === t2)
                  break e;
              case 20:
                r2.mode = 21;
              case 21:
                if (6 <= o2 && 258 <= h2) {
                  e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                  break;
                }
                for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (g && 0 == (240 & g)) {
                  for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  u2 >>>= v, l2 -= v, r2.back += v;
                }
                if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                  r2.mode = 26;
                  break;
                }
                if (32 & g) {
                  r2.back = -1, r2.mode = 12;
                  break;
                }
                if (64 & g) {
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break;
                }
                r2.extra = 15 & g, r2.mode = 22;
              case 22:
                if (r2.extra) {
                  for (z = r2.extra; l2 < z; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                }
                r2.was = r2.length, r2.mode = 23;
              case 23:
                for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2)
                    break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (0 == (240 & g)) {
                  for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  u2 >>>= v, l2 -= v, r2.back += v;
                }
                if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                  e2.msg = "invalid distance code", r2.mode = 30;
                  break;
                }
                r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
              case 24:
                if (r2.extra) {
                  for (z = r2.extra; l2 < z; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                }
                if (r2.offset > r2.dmax) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                r2.mode = 25;
              case 25:
                if (0 === h2)
                  break e;
                if (d = c2 - h2, r2.offset > d) {
                  if ((d = r2.offset - d) > r2.whave && r2.sane) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break;
                  }
                  p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
                } else
                  m = i2, p = a2 - r2.offset, d = r2.length;
                for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; )
                  ;
                0 === r2.length && (r2.mode = 21);
                break;
              case 26:
                if (0 === h2)
                  break e;
                i2[a2++] = r2.length, h2--, r2.mode = 21;
                break;
              case 27:
                if (r2.wrap) {
                  for (; l2 < 32; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 |= n2[s2++] << l2, l2 += 8;
                  }
                  if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                    e2.msg = "incorrect data check", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.mode = 28;
              case 28:
                if (r2.wrap && r2.flags) {
                  for (; l2 < 32; ) {
                    if (0 === o2)
                      break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (u2 !== (4294967295 & r2.total)) {
                    e2.msg = "incorrect length check", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.mode = 29;
              case 29:
                x = 1;
                break e;
              case 30:
                x = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return U;
            }
        return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
      }, r.inflateEnd = function(e2) {
        if (!e2 || !e2.state)
          return U;
        var t2 = e2.state;
        return t2.window && (t2.window = null), e2.state = null, N;
      }, r.inflateGetHeader = function(e2, t2) {
        var r2;
        return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
      }, r.inflateSetDictionary = function(e2, t2) {
        var r2, n2 = t2.length;
        return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
      }, r.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
      var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      t.exports = function(e2, t2, r2, n, i, s, a, o) {
        var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
        for (b = 0; b <= 15; b++)
          O[b] = 0;
        for (v = 0; v < n; v++)
          O[t2[r2 + v]]++;
        for (k = g, w = 15; 1 <= w && 0 === O[w]; w--)
          ;
        if (w < k && (k = w), 0 === w)
          return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
        for (y = 1; y < w && 0 === O[y]; y++)
          ;
        for (k < y && (k = y), b = z = 1; b <= 15; b++)
          if (z <<= 1, (z -= O[b]) < 0)
            return -1;
        if (0 < z && (0 === e2 || 1 !== w))
          return -1;
        for (B[1] = 0, b = 1; b < 15; b++)
          B[b + 1] = B[b] + O[b];
        for (v = 0; v < n; v++)
          0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
        if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C)
          return 1;
        for (; ; ) {
          for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; )
            ;
          for (h = 1 << b - 1; E & h; )
            h >>= 1;
          if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
            if (b === w)
              break;
            b = t2[r2 + a[v]];
          }
          if (k < b && (E & f) !== l) {
            for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); )
              x++, z <<= 1;
            if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C)
              return 1;
            i[l = E & f] = k << 24 | x << 16 | c - s | 0;
          }
        }
        return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, t, r) {
      t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, t, r) {
      var i = e("../utils/common"), o = 0, h = 1;
      function n(e2) {
        for (var t2 = e2.length; 0 <= --t2; )
          e2[t2] = 0;
      }
      var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
      n(z);
      var C = new Array(2 * f);
      n(C);
      var E = new Array(512);
      n(E);
      var A = new Array(256);
      n(A);
      var I = new Array(a);
      n(I);
      var O, B, R, T = new Array(f);
      function D(e2, t2, r2, n2, i2) {
        this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
      }
      function F(e2, t2) {
        this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
      }
      function N(e2) {
        return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
      }
      function U(e2, t2) {
        e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
      }
      function P(e2, t2, r2) {
        e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
      }
      function L(e2, t2, r2) {
        P(e2, r2[2 * t2], r2[2 * t2 + 1]);
      }
      function j(e2, t2) {
        for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; )
          ;
        return r2 >>> 1;
      }
      function Z(e2, t2, r2) {
        var n2, i2, s2 = new Array(g + 1), a2 = 0;
        for (n2 = 1; n2 <= g; n2++)
          s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
        for (i2 = 0; i2 <= t2; i2++) {
          var o2 = e2[2 * i2 + 1];
          0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
        }
      }
      function W(e2) {
        var t2;
        for (t2 = 0; t2 < l; t2++)
          e2.dyn_ltree[2 * t2] = 0;
        for (t2 = 0; t2 < f; t2++)
          e2.dyn_dtree[2 * t2] = 0;
        for (t2 = 0; t2 < c; t2++)
          e2.bl_tree[2 * t2] = 0;
        e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
      }
      function M(e2) {
        8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
      }
      function H(e2, t2, r2, n2) {
        var i2 = 2 * t2, s2 = 2 * r2;
        return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
      }
      function G(e2, t2, r2) {
        for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); )
          e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
        e2.heap[r2] = n2;
      }
      function K(e2, t2, r2) {
        var n2, i2, s2, a2, o2 = 0;
        if (0 !== e2.last_lit)
          for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; )
            ;
        L(e2, m, t2);
      }
      function Y(e2, t2) {
        var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
        for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++)
          0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
        for (; e2.heap_len < 2; )
          s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
        for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--)
          G(e2, s2, r2);
        for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; )
          ;
        e2.heap[--e2.heap_max] = e2.heap[1], function(e3, t3) {
          var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
          for (s3 = 0; s3 <= g; s3++)
            e3.bl_count[s3] = 0;
          for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++)
            p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
          if (0 !== m2) {
            do {
              for (s3 = p2 - 1; 0 === e3.bl_count[s3]; )
                s3--;
              e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
            } while (0 < m2);
            for (s3 = p2; 0 !== s3; s3--)
              for (n3 = e3.bl_count[s3]; 0 !== n3; )
                u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
          }
        }(e2, t2), Z(s2, u2, e2.bl_count);
      }
      function X(e2, t2, r2) {
        var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
        for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++)
          i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
      }
      function V(e2, t2, r2) {
        var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
        for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++)
          if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
            if (o2 < u2)
              for (; L(e2, i2, e2.bl_tree), 0 != --o2; )
                ;
            else
              0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
            s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
          }
      }
      n(T);
      var q = false;
      function J(e2, t2, r2, n2) {
        P(e2, (s << 1) + (n2 ? 1 : 0), 3), function(e3, t3, r3, n3) {
          M(e3), U(e3, r3), U(e3, ~r3), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
        }(e2, t2, r2);
      }
      r._tr_init = function(e2) {
        q || (function() {
          var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
          for (n2 = r2 = 0; n2 < a - 1; n2++)
            for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++)
              A[r2++] = n2;
          for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++)
            for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++)
              E[i2++] = n2;
          for (i2 >>= 7; n2 < f; n2++)
            for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++)
              E[256 + i2++] = n2;
          for (t2 = 0; t2 <= g; t2++)
            s2[t2] = 0;
          for (e3 = 0; e3 <= 143; )
            z[2 * e3 + 1] = 8, e3++, s2[8]++;
          for (; e3 <= 255; )
            z[2 * e3 + 1] = 9, e3++, s2[9]++;
          for (; e3 <= 279; )
            z[2 * e3 + 1] = 7, e3++, s2[7]++;
          for (; e3 <= 287; )
            z[2 * e3 + 1] = 8, e3++, s2[8]++;
          for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++)
            C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
          O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
        }(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
      }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
        var i2, s2, a2 = 0;
        0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = function(e3) {
          var t3, r3 = 4093624447;
          for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1)
            if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3])
              return o;
          if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26])
            return h;
          for (t3 = 32; t3 < u; t3++)
            if (0 !== e3.dyn_ltree[2 * t3])
              return h;
          return o;
        }(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = function(e3) {
          var t3;
          for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--)
            ;
          return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
        }(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), function(e3, t3, r3, n3) {
          var i3;
          for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++)
            P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
          V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
        }(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
      }, r._tr_tally = function(e2, t2, r2) {
        return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
      }, r._tr_align = function(e2) {
        P(e2, 2, 3), L(e2, m, z), function(e3) {
          16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
        }(e2);
      };
    }, { "../utils/common": 41 }], 53: [function(e, t, r) {
      t.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, t, r) {
      (function(e2) {
        !function(r2, n) {
          if (!r2.setImmediate) {
            var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
            e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
              process.nextTick(function() {
                c(e4);
              });
            } : function() {
              if (r2.postMessage && !r2.importScripts) {
                var e4 = true, t3 = r2.onmessage;
                return r2.onmessage = function() {
                  e4 = false;
                }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
              }
            }() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
              r2.postMessage(a + e4, "*");
            }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
              c(e4.data);
            }, function(e4) {
              t2.port2.postMessage(e4);
            }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
              var t3 = l.createElement("script");
              t3.onreadystatechange = function() {
                c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
              }, s.appendChild(t3);
            }) : function(e4) {
              setTimeout(c, 0, e4);
            }, e3.setImmediate = function(e4) {
              "function" != typeof e4 && (e4 = new Function("" + e4));
              for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++)
                t3[r3] = arguments[r3 + 1];
              var n2 = { callback: e4, args: t3 };
              return h[o] = n2, i(o), o++;
            }, e3.clearImmediate = f;
          }
          function f(e4) {
            delete h[e4];
          }
          function c(e4) {
            if (u)
              setTimeout(c, 0, e4);
            else {
              var t3 = h[e4];
              if (t3) {
                u = true;
                try {
                  !function(e5) {
                    var t4 = e5.callback, r3 = e5.args;
                    switch (r3.length) {
                      case 0:
                        t4();
                        break;
                      case 1:
                        t4(r3[0]);
                        break;
                      case 2:
                        t4(r3[0], r3[1]);
                        break;
                      case 3:
                        t4(r3[0], r3[1], r3[2]);
                        break;
                      default:
                        t4.apply(n, r3);
                    }
                  }(t3);
                } finally {
                  f(e4), u = false;
                }
              }
            }
          }
          function d(e4) {
            e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
          }
        }("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
      }).call(this, "undefined" != typeof commonjsGlobal ? commonjsGlobal : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(jszip_min);
var jszip_minExports = jszip_min.exports;
const JSZip = /* @__PURE__ */ getDefaultExportFromCjs(jszip_minExports);
var FileSaver_min = { exports: {} };
(function(module, exports) {
  (function(a, b) {
    b();
  })(commonjsGlobal, function() {
    function b(a2, b2) {
      return "undefined" == typeof b2 ? b2 = { autoBom: false } : "object" != typeof b2 && (console.warn("Deprecated: Expected third argument to be a object"), b2 = { autoBom: !b2 }), b2.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a2.type) ? new Blob(["\uFEFF", a2], { type: a2.type }) : a2;
    }
    function c(a2, b2, c2) {
      var d2 = new XMLHttpRequest();
      d2.open("GET", a2), d2.responseType = "blob", d2.onload = function() {
        g(d2.response, b2, c2);
      }, d2.onerror = function() {
        console.error("could not download file");
      }, d2.send();
    }
    function d(a2) {
      var b2 = new XMLHttpRequest();
      b2.open("HEAD", a2, false);
      try {
        b2.send();
      } catch (a3) {
      }
      return 200 <= b2.status && 299 >= b2.status;
    }
    function e(a2) {
      try {
        a2.dispatchEvent(new MouseEvent("click"));
      } catch (c2) {
        var b2 = document.createEvent("MouseEvents");
        b2.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null), a2.dispatchEvent(b2);
      }
    }
    var f = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof commonjsGlobal && commonjsGlobal.global === commonjsGlobal ? commonjsGlobal : void 0, a = f.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), g = f.saveAs || ("object" != typeof window || window !== f ? function() {
    } : "download" in HTMLAnchorElement.prototype && !a ? function(b2, g2, h) {
      var i = f.URL || f.webkitURL, j = document.createElement("a");
      g2 = g2 || b2.name || "download", j.download = g2, j.rel = "noopener", "string" == typeof b2 ? (j.href = b2, j.origin === location.origin ? e(j) : d(j.href) ? c(b2, g2, h) : e(j, j.target = "_blank")) : (j.href = i.createObjectURL(b2), setTimeout(function() {
        i.revokeObjectURL(j.href);
      }, 4e4), setTimeout(function() {
        e(j);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f2, g2, h) {
      if (g2 = g2 || f2.name || "download", "string" != typeof f2)
        navigator.msSaveOrOpenBlob(b(f2, h), g2);
      else if (d(f2))
        c(f2, g2, h);
      else {
        var i = document.createElement("a");
        i.href = f2, i.target = "_blank", setTimeout(function() {
          e(i);
        });
      }
    } : function(b2, d2, e2, g2) {
      if (g2 = g2 || open("", "_blank"), g2 && (g2.document.title = g2.document.body.innerText = "downloading..."), "string" == typeof b2)
        return c(b2, d2, e2);
      var h = "application/octet-stream" === b2.type, i = /constructor/i.test(f.HTMLElement) || f.safari, j = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((j || h && i || a) && "undefined" != typeof FileReader) {
        var k = new FileReader();
        k.onloadend = function() {
          var a2 = k.result;
          a2 = j ? a2 : a2.replace(/^data:[^;]*;/, "data:attachment/file;"), g2 ? g2.location.href = a2 : location = a2, g2 = null;
        }, k.readAsDataURL(b2);
      } else {
        var l = f.URL || f.webkitURL, m = l.createObjectURL(b2);
        g2 ? g2.location = m : location.href = m, g2 = null, setTimeout(function() {
          l.revokeObjectURL(m);
        }, 4e4);
      }
    });
    f.saveAs = g.saveAs = g, module.exports = g;
  });
})(FileSaver_min);
var FileSaver_minExports = FileSaver_min.exports;
function fixArchiveFinderInfo(buffer) {
  const fInfoView = new DataView(buffer);
  const x = fInfoView.getInt16(
    10
    /* fdLocation */
  );
  const y = fInfoView.getInt16(10 + 2);
  if (x === 0 && y === 0) {
    let flags = fInfoView.getInt16(
      8
      /* fdFlags */
    );
    flags &= ~256;
    fInfoView.setInt16(8, flags);
  }
}
async function uploadsFromFile(file) {
  return await uploadsFromDirectoryExtractionFile(file) ?? await uploadsFromMacOSArchive(file);
}
async function uploadsFromDirectoryExtractionFile(file) {
  if (!file.name.endsWith(".zip")) {
    return void 0;
  }
  const zip = await JSZip.loadAsync(file);
  if (!Object.keys(zip.files).some(
    (name) => name.startsWith(".finf") || name.startsWith(".rsrc")
  )) {
    return void 0;
  }
  const parentName = file.name.slice(0, -4);
  const files = Object.values(zip.files).filter(
    // Directories are implicitly created, and the parent-level finder
    // information is not worth the special-casing in path handling for
    // now.
    (f) => !f.dir && f.name !== "DInfo"
  );
  const fileBlobs = await Promise.all(files.map((f) => f.async("blob")));
  return files.map((f, i) => {
    const blob = fileBlobs[i];
    const url = URL.createObjectURL(blob);
    return {
      name: parentName + "/" + f.name,
      url,
      size: blob.size
    };
  });
}
async function uploadsFromMacOSArchive(file) {
  if (!file.name.endsWith(".zip")) {
    return void 0;
  }
  const zip = await JSZip.loadAsync(file);
  const appleDoubleFiles = Object.values(zip.files).filter(
    (f) => !f.dir && f.name.startsWith("__MACOSX")
  );
  if (!appleDoubleFiles.length) {
    return void 0;
  }
  const parentName = file.name.slice(0, -4);
  const files = Object.values(zip.files).filter(
    (f) => !f.dir && !f.name.startsWith("__MACOSX")
  );
  const prefix = files.every((f) => f.name.startsWith(parentName)) ? "" : parentName + "/";
  const fileBlobs = await Promise.all(files.map((f) => f.async("blob")));
  const uploads = files.map((f, i) => {
    const blob = fileBlobs[i];
    const url = URL.createObjectURL(blob);
    return {
      name: prefix + f.name,
      url,
      size: blob.size
    };
  });
  const appleDoubleBuffers = await Promise.all(
    appleDoubleFiles.map((f) => f.async("arraybuffer"))
  );
  for (let i = 0; i < appleDoubleFiles.length; i++) {
    const file2 = appleDoubleFiles[i];
    const buffer = appleDoubleBuffers[i];
    const path = file2.name.split("/");
    path.shift();
    let name = path.pop();
    if (name.startsWith("._")) {
      name = name.substring(2);
    }
    const { resourceFork, metadata } = parseAppleDouble(buffer, name);
    if (resourceFork) {
      const url = URL.createObjectURL(resourceFork);
      uploads.push({
        name: prefix + [...path, ".rsrc", name].join("/"),
        url,
        size: resourceFork.size
      });
    }
    if (metadata) {
      const url = URL.createObjectURL(metadata);
      uploads.push({
        name: prefix + [...path, ".finf", name].join("/"),
        url,
        size: metadata.size
      });
    }
  }
  return uploads;
}
function parseAppleDouble(buffer, name) {
  const data = new DataView(buffer);
  const magic = data.getUint32(0);
  if (magic !== 333319) {
    throw new Error(`Invalid AppleDouble magic ${magic.toString(16)}`);
  }
  const version = data.getUint32(4);
  if (version !== 131072) {
    throw new Error(`Invalid AppleDouble version ${version.toString(16)}`);
  }
  const entryCount = data.getUint16(24);
  let cursor = 26;
  let resourceFork;
  let metadata;
  for (let i = 0; i < entryCount; i++) {
    const entryID = data.getUint32(cursor);
    const offset = data.getUint32(cursor + 4);
    const length = data.getUint32(cursor + 8);
    switch (entryID) {
      case 2:
        resourceFork = new Blob([
          buffer.slice(offset, offset + length)
        ]);
        break;
      case 9: {
        const metadataBuffer = buffer.slice(offset, offset + length);
        fixArchiveFinderInfo(metadataBuffer);
        metadata = new Blob([metadataBuffer]);
        break;
      }
      default:
        console.log(
          `Ignoring unexpected entry ID ${entryID} found in ${name}`
        );
    }
    cursor += 12;
  }
  return { resourceFork, metadata };
}
async function handleDirectoryExtraction(extraction) {
  const zip = new JSZip();
  function addToZip(path, zip2, entries) {
    for (const entry of entries) {
      if (Array.isArray(entry.contents)) {
        addToZip(
          path + "/" + entry.name,
          zip2.folder(entry.name),
          entry.contents
        );
      } else {
        const { contents } = entry;
        zip2.file(entry.name, contents);
      }
    }
  }
  addToZip("", zip, extraction.contents);
  const zipBlob = await zip.generateAsync({
    compression: "DEFLATE",
    compressionOptions: { level: 9 },
    type: "blob"
  });
  const zipName = extraction.name + ".zip";
  FileSaver_minExports.saveAs(zipBlob, zipName);
  increment("emulator_extractions");
}
const JS_CODE_TO_ADB_KEYCODE = {
  // Keys on an ANSI-standard US keyboard.
  "KeyA": 0,
  // VK_ANSI_A
  "KeyS": 1,
  // VK_ANSI_S
  "KeyD": 2,
  // VK_ANSI_D
  "KeyF": 3,
  // VK_ANSI_F
  "KeyH": 4,
  // VK_ANSI_H
  "KeyG": 5,
  // VK_ANSI_G
  "KeyZ": 6,
  // VK_ANSI_Z
  "KeyX": 7,
  // VK_ANSI_X
  "KeyC": 8,
  // VK_ANSI_C
  "KeyV": 9,
  // VK_ANSI_V
  "KeyB": 11,
  // VK_ANSI_B
  "KeyQ": 12,
  // VK_ANSI_Q
  "KeyW": 13,
  // VK_ANSI_W
  "KeyE": 14,
  // VK_ANSI_E
  "KeyR": 15,
  // VK_ANSI_R
  "KeyY": 16,
  // VK_ANSI_Y
  "KeyT": 17,
  // VK_ANSI_T
  "Digit1": 18,
  // VK_ANSI_1
  "Digit2": 19,
  // VK_ANSI_2
  "Digit3": 20,
  // VK_ANSI_3
  "Digit4": 21,
  // VK_ANSI_4
  "Digit6": 22,
  // VK_ANSI_6
  "Digit5": 23,
  // VK_ANSI_5
  "Equal": 24,
  // kVK_ANSI_Equal
  "Digit9": 25,
  // VK_ANSI_9
  "Digit7": 26,
  // VK_ANSI_7
  "Minus": 27,
  // kVK_ANSI_Minus
  "Digit8": 28,
  // VK_ANSI_8
  "Digit0": 29,
  // VK_ANSI_0
  "BracketRight": 30,
  // kVK_ANSI_RightBracket
  "KeyO": 31,
  // VK_ANSI_O
  "KeyU": 32,
  // VK_ANSI_U
  "BracketLeft": 33,
  // kVK_ANSI_LeftBracket
  "KeyI": 34,
  // VK_ANSI_I
  "KeyP": 35,
  // VK_ANSI_P
  "KeyL": 37,
  // VK_ANSI_L
  "KeyJ": 38,
  // VK_ANSI_J
  "Quote": 39,
  // kVK_ANSI_Quote
  "KeyK": 40,
  // VK_ANSI_K
  "Semicolon": 41,
  // kVK_ANSI_Semicolon
  "Backslash": 42,
  // kVK_ANSI_Backslash
  "Comma": 43,
  // kVK_ANSI_Comma
  "Slash": 44,
  // kVK_ANSI_Slash
  "KeyN": 45,
  // VK_ANSI_N
  "KeyM": 46,
  // VK_ANSI_M
  "Period": 47,
  // kVK_ANSI_Period
  "Backquote": 50,
  // kVK_ANSI_Grave
  "NumpadDecimal": 65,
  // kVK_ANSI_KeypadDecimal
  "NumpadMultiply": 67,
  // kVK_ANSI_KeypadMultiply
  "NumpadAdd": 69,
  // kVK_ANSI_KeypadPlus
  "NumLock": 71,
  // kVK_ANSI_KeypadClear
  "NumpadDivide": 75,
  // kVK_ANSI_KeypadDivide
  "NumpadEnter": 76,
  // kVK_ANSI_KeypadEnter
  "NumpadMinus": 78,
  // kVK_ANSI_KeypadMinus
  "NumpadEqual": 81,
  // kVK_ANSI_KeypadEquals
  "Numpad0": 82,
  // kVK_ANSI_Keypad0
  "Numpad1": 83,
  // kVK_ANSI_Keypad1
  "Numpad2": 84,
  // kVK_ANSI_Keypad2
  "Numpad3": 85,
  // kVK_ANSI_Keypad3
  "Numpad4": 86,
  // kVK_ANSI_Keypad4
  "Numpad5": 87,
  // kVK_ANSI_Keypad5
  "Numpad6": 88,
  // kVK_ANSI_Keypad6
  "Numpad7": 89,
  // kVK_ANSI_Keypad7
  "Numpad8": 91,
  // kVK_ANSI_Keypad8
  "Numpad9": 92,
  // kVK_ANSI_Keypad9
  "Enter": 36,
  // kVK_Return
  "Tab": 48,
  // kVK_Tab
  "Space": 49,
  // kVK_Space
  "Backspace": 51,
  // kVK_Delete
  "Escape": 53,
  // kVK_Escape
  "MetaLeft": 55,
  // kVK_Command
  "OSLeft": 55,
  // kVK_Command
  "ShiftLeft": 56,
  // kVK_Shift
  "CapsLock": 57,
  // kVK_CapsLock
  "AltLeft": 58,
  // kVK_Option
  "ControlLeft": 54,
  "MetaRight": 55,
  "OSRight": 55,
  "ShiftRight": 123,
  "AltRight": 124,
  "ControlRight": 125,
  "Fn": 114,
  "F17": 64,
  // kVK_F17
  "AudioVolumeUp": 72,
  // kVK_VolumeUp
  "AudioVolumeDown": 73,
  // kVK_VolumeDown
  "AudioVolumeMute": 74,
  // kVK_Mute
  "F18": 79,
  // kVK_F18
  "F19": 80,
  // kVK_F19
  "F20": 90,
  // kVK_F20
  "F5": 96,
  // kVK_F5
  "F6": 97,
  // kVK_F6
  "F7": 98,
  // kVK_F7
  "F3": 99,
  // kVK_F3
  "F8": 100,
  // kVK_F8
  "F9": 101,
  // kVK_F9
  "F11": 103,
  // kVK_F11
  "F13": 105,
  // kVK_F13
  "F16": 106,
  // kVK_F16
  "F14": 107,
  // kVK_F14
  "F10": 109,
  // kVK_F10
  "F12": 111,
  // kVK_F12
  "F15": 113,
  // kVK_F15
  "Help": 114,
  // kVK_Help
  "Home": 115,
  // kVK_Home
  "PageUp": 116,
  // kVK_PageUp
  "Delete": 117,
  // kVK_ForwardDelete
  "F4": 118,
  // kVK_F4
  "End": 119,
  // kVK_End
  "F2": 120,
  // kVK_F2
  "PageDown": 121,
  // kVK_PageDown
  "F1": 122,
  // kVK_F1
  "ArrowLeft": 59,
  "ArrowRight": 60,
  "ArrowDown": 61,
  "ArrowUp": 62
};
const JS_CODE_TO_MINI_VMAC_KEYCODE = {
  "ArrowLeft": 123,
  // MKC_Left
  "ArrowRight": 124,
  // MKC_Right
  "ArrowDown": 125,
  // MKC_Down
  "ArrowUp": 126,
  // MKC_Up
  "ShiftRight": 56,
  // MKC_Shift -- no right shift key,
  "AltRight": 58,
  // MKC_Option -- no right option key,
  // Control is not on the Mac Plus keyboard, but Mini vMac does have a keycode
  // for it.
  "ControlLeft": 59,
  // MKC_Control
  "ControlRight": 59
  // MKC_Control
};
const JS_CODE_TO_NEXT_KEYCODE = {
  "KeyA": 57,
  // NEXTKEY_A
  "KeyS": 58,
  // NEXTKEY_S
  "KeyD": 59,
  // NEXTKEY_D
  "KeyF": 60,
  // NEXTKEY_F
  "KeyH": 64,
  // NEXTKEY_H
  "KeyG": 61,
  // NEXTKEY_G
  "KeyZ": 49,
  // NEXTKEY_Z
  "KeyX": 50,
  // NEXTKEY_X
  "KeyC": 51,
  // NEXTKEY_C
  "KeyV": 52,
  // NEXTKEY_V
  "KeyB": 53,
  // NEXTKEY_B
  "KeyQ": 66,
  // NEXTKEY_Q
  "KeyW": 67,
  // NEXTKEY_W
  "KeyE": 68,
  // NEXTKEY_E
  "KeyR": 69,
  // NEXTKEY_R
  "KeyY": 71,
  // NEXTKEY_Y
  "KeyT": 72,
  // NEXTKEY_T
  "Digit1": 74,
  // NEXTKEY_1
  "Digit2": 75,
  // NEXTKEY_2
  "Digit3": 76,
  // NEXTKEY_3
  "Digit4": 77,
  // NEXTKEY_4
  "Digit6": 79,
  // NEXTKEY_6
  "Digit5": 80,
  // NEXTKEY_5
  "Equal": 28,
  // NEXTKEY_EQUALS
  "Digit9": 31,
  // NEXTKEY_9
  "Digit7": 78,
  // // NEXTKEY_7
  "Minus": 29,
  // NEXTKEY_MINUS
  "Digit8": 30,
  // NEXTKEY_8
  "Digit0": 32,
  // NEXTKEY_0
  "BracketRight": 4,
  // NEXTKEY_CLOSEBRACKET
  "KeyO": 7,
  // NEXTKEY_o
  "KeyU": 70,
  // NEXTKEY_0
  "BracketLeft": 5,
  // NEXTKEY_OPENBRACKET
  "KeyI": 6,
  // NEXTKEY_I
  "KeyP": 8,
  // NEXTKEY_P
  "KeyL": 45,
  // NEXTKEY_L
  "KeyJ": 63,
  // NEXTKEY_J
  "Quote": 43,
  // NEXTKEY_QUOTE
  "KeyK": 62,
  // NEXTKEY_K
  "Semicolon": 44,
  // NEXTKEY_SEMICOLON
  "Backslash": 3,
  // NEXTKEY_BACKSLASH
  "Comma": 46,
  // NEXTKEY_COMMA
  "Slash": 48,
  // NEXTKEY_SLASH
  "KeyN": 55,
  // NEXTKEY_N
  "KeyM": 54,
  // NEXTKEY_M
  "Period": 47,
  // NEXTKEY_PERIOD
  "Backquote": 38,
  // NEXTKEY_BACKQUOTE
  "NumpadDecimal": 12,
  // NEXTKEY_KEYPAD_PERIOD
  "NumpadMultiply": 37,
  // NEXTKEY_KEYPAD_MULTIPLY
  "NumpadAdd": 21,
  // NEXTKEY_KEYPAD_PLUS
  "NumLock": 38,
  // NEXTKEY_BACKQUOTE
  "NumpadDivide": 40,
  // NEXTKEY_KEYPAD_DIVIDE
  "NumpadEnter": 13,
  // NEXTKEY_KEYPAD_ENTER
  "NumpadMinus": 36,
  // NEXTKEY_KEYPAD_MINUS
  "NumpadEqual": 39,
  // NEXTKEY_KEYPAD_EQUALS
  "Numpad0": 11,
  // NEXTKEY_KEYPAD_0
  "Numpad1": 17,
  // NEXTKEY_KEYPAD_1
  "Numpad2": 23,
  // NEXTKEY_KEYPAD_2
  "Numpad3": 20,
  // NEXTKEY_KEYPAD_3
  "Numpad4": 18,
  // NEXTKEY_KEYPAD_4
  "Numpad5": 24,
  // NEXTKEY_KEYPAD_5
  "Numpad6": 19,
  // NEXTKEY_KEYPAD_6
  "Numpad7": 33,
  // NEXTKEY_KEYPAD_7
  "Numpad8": 34,
  // NEXTKEY_KEYPAD_8
  "Numpad9": 35,
  // NEXTKEY_KEYPAD_9
  "Enter": 42,
  // NEXTKEY_RETURN
  "Tab": 0,
  // NEXTKEY_TAB
  "Space": 56,
  // NEXTKEY_SPACE
  "Backspace": 27,
  // NEXTKEY_DELETE
  "Escape": 73,
  // NEXTKEY_ESC
  "AudioVolumeUp": 26,
  // NEXTKEY_VOLUME_UP
  "AudioVolumeDown": 2,
  // NEXTKEY_VOLUME_DOWN
  "F5": 2,
  // NEXTKEY_VOLUME_DOWN
  "F6": 26,
  // NEXTKEY_VOLUME_UP
  "F10": 88,
  // NEXTKEY_POWER
  "Home": 26,
  // NEXTKEY_VOLUME_UP
  "PageUp": 25,
  // NEXTKEY_BRIGHTNESS_UP
  "Delete": 88,
  // NEXTKEY_POWER
  "F2": 25,
  // NEXTKEY_BRIGHTNESS_UP,
  "PageDown": 1,
  // NEXTKEY_BRGHTNESS_DOWN
  "F1": 1,
  // NEXTKEY_BRGHTNESS_DOWN
  "ArrowLeft": 9,
  // NEXTKEY_LEFT_ARROW
  "ArrowRight": 16,
  // NEXTKEY_RIGHT_ARROW
  "ArrowDown": 15,
  // NEXTKEY_DOWN_ARROW
  "ArrowUp": 22,
  // NEXTKEY_UP_ARROW
  "End": 2,
  // NEXTKEY_VOLUME_DOWN
  // Modifiers are sent as separate flags
  "MetaLeft": 0,
  "OSLeft": 0,
  "ShiftLeft": 0,
  "CapsLock": 0,
  "AltLeft": 0,
  "ControlLeft": 0,
  "MetaRight": 0,
  "OSRight": 0,
  "ShiftRight": 0,
  "AltRight": 0,
  "ControlRight": 0,
  "Fn": 0,
  // Unmapped keys (NEXTKEY_NONE)
  "F3": 0,
  "F4": 0,
  "F7": 0,
  "F8": 0,
  "F9": 0,
  "F11": 0,
  "F12": 0,
  "F13": 0,
  "F15": 0,
  "F16": 0,
  "F14": 0,
  "F17": 0,
  "F18": 0,
  "F19": 0,
  "F20": 0,
  "AudioVolumeMute": 0,
  "Help": 0
};
const RECEIVE_BUFFER_SIZE = 1522 * 10;
class SharedMemoryEmulatorEthernet {
  constructor() {
    __privateAdd(this, _receiveBuffer, new SharedArrayBuffer(RECEIVE_BUFFER_SIZE));
    __privateAdd(this, _receiveRingBuffer, new RingBuffer(__privateGet(this, _receiveBuffer), Uint8Array));
  }
  workerConfig() {
    return {
      type: "shared-memory",
      receiveBuffer: __privateGet(this, _receiveBuffer)
    };
  }
  receive(packet) {
    const packetHeader = new Uint8Array(2);
    new DataView(packetHeader.buffer).setUint16(0, packet.byteLength);
    __privateGet(this, _receiveRingBuffer).push(packetHeader);
    __privateGet(this, _receiveRingBuffer).push(packet);
  }
}
_receiveBuffer = new WeakMap();
_receiveRingBuffer = new WeakMap();
class FallbackEmulatorEthernet {
  constructor(commandSender) {
    __privateAdd(this, _commandSender3, void 0);
    __privateSet(this, _commandSender3, commandSender);
  }
  workerConfig() {
    return { type: "fallback" };
  }
  receive(packet) {
    __privateGet(this, _commandSender3).call(this, {
      type: "ethernet_receive",
      packetArray: Array.from(packet)
    });
  }
}
_commandSender3 = new WeakMap();
function handleEthernetWrite(destination, packet) {
  {
    return void 0;
  }
}
class EthernetPinger {
  constructor(delegate) {
    __privateAdd(this, _delegate, void 0);
    __privateAdd(this, _macAddress, void 0);
    __privateAdd(this, _ethernetProvider, void 0);
    __privateAdd(this, _interval, void 0);
    __privateAdd(this, _peersByMacAddress, /* @__PURE__ */ new Map());
    __privateAdd(this, _ping, () => {
      if (!__privateGet(this, _macAddress) || !__privateGet(this, _ethernetProvider)) {
        return;
      }
      const packet = new Uint8Array(ETHERNET_PING_PACKET_LENGTH);
      const packetView = new DataView(packet.buffer, packet.byteOffset);
      packet.set(PING_DESTINATION_ADDRESS, 0);
      packet.set(__privateGet(this, _macAddress), 6);
      packetView.setUint16(12, ETHERNET_PING_PAYLOAD_LENGTH);
      packet.set(ETHERNET_PING_HEADER, 14);
      packetView.setUint32(
        14 + ETHERNET_PING_HEADER.length,
        performance.now()
      );
      __privateGet(this, _ethernetProvider).send("*", packet);
    });
    __privateSet(this, _delegate, delegate);
  }
  start(macAddress, ethernetProvider) {
    __privateSet(this, _macAddress, ethernetMacAddressFromString(macAddress));
    __privateSet(this, _ethernetProvider, ethernetProvider);
    __privateSet(this, _interval, window.setInterval(
      __privateGet(this, _ping),
      location.host.startsWith("localhost") ? 500 : 5e3
    ));
  }
  stop() {
    if (__privateGet(this, _interval) !== void 0) {
      window.clearInterval(__privateGet(this, _interval));
      __privateSet(this, _interval, void 0);
    }
  }
  peers() {
    return Array.from(__privateGet(this, _peersByMacAddress).values());
  }
  handlePongPacket(packet) {
    if (packet.byteLength !== ETHERNET_PONG_PACKET_LENGTH) {
      return false;
    }
    for (let i = 0; i < ETHERNET_PONG_HEADER.length; i++) {
      if (packet[14 + i] !== ETHERNET_PONG_HEADER[i]) {
        return false;
      }
    }
    const peerMacAddress = ethernetMacAddressToString(
      packet.subarray(6, 12)
    );
    const packetView = new DataView(packet.buffer, packet.byteOffset);
    const sendTime = packetView.getUint32(14 + ETHERNET_PONG_HEADER.length);
    const rtt = performance.now() - sendTime;
    __privateGet(this, _peersByMacAddress).set(peerMacAddress, {
      macAddress: peerMacAddress,
      rttMs: rtt,
      lastPingTimeMs: Date.now()
    });
    __privateGet(this, _delegate).ethernetPingerDidUpdatePeers(this);
    return true;
  }
}
_delegate = new WeakMap();
_macAddress = new WeakMap();
_ethernetProvider = new WeakMap();
_interval = new WeakMap();
_peersByMacAddress = new WeakMap();
_ping = new WeakMap();
const PING_DESTINATION_ADDRESS = [255, 255, 255, 255, 255, 255];
const CLIPBOARD_BUFFER_SIZE = 10240;
class SharedMemoryEmulatorClipboard {
  constructor() {
    __privateAdd(this, _updateBuffer2);
    __privateAdd(this, _data, {});
    __privateAdd(this, _clipboardBuffer, new SharedArrayBuffer(CLIPBOARD_BUFFER_SIZE));
    __privateAdd(this, _clipboardBufferView, new Uint8Array(__privateGet(this, _clipboardBuffer)));
    __privateMethod(this, _updateBuffer2, updateBuffer_fn2).call(this);
  }
  workerConfig() {
    return {
      type: "shared-memory",
      clipboardBuffer: __privateGet(this, _clipboardBuffer),
      clipboardBufferSize: CLIPBOARD_BUFFER_SIZE
    };
  }
  setClipboardText(text) {
    __privateSet(this, _data, { text });
    __privateMethod(this, _updateBuffer2, updateBuffer_fn2).call(this);
  }
}
_data = new WeakMap();
_clipboardBuffer = new WeakMap();
_clipboardBufferView = new WeakMap();
_updateBuffer2 = new WeakSet();
updateBuffer_fn2 = function() {
  const dataString = JSON.stringify(__privateGet(this, _data));
  const dataBytes = new TextEncoder().encode(dataString);
  if (dataBytes.length > CLIPBOARD_BUFFER_SIZE) {
    console.warn("Clipboard is too large, dropping");
    __privateSet(this, _data, {});
    return;
  }
  __privateGet(this, _clipboardBufferView).set(dataBytes);
  __privateGet(this, _clipboardBufferView).set([0], dataBytes.length);
};
class FallbackEmulatorClipboard {
  constructor(commandSender) {
    __privateAdd(this, _commandSender4, void 0);
    __privateSet(this, _commandSender4, commandSender);
  }
  workerConfig() {
    return { type: "fallback" };
  }
  setClipboardText(text) {
    __privateGet(this, _commandSender4).call(this, {
      type: "set_clipboard_data",
      data: { text }
    });
  }
}
_commandSender4 = new WeakMap();
const deviceImageHeaderPath$1 = "/Device%20Image%20Header%20(All%20Drivers)-Bzrqc_Oa.hda";
async function fetchCDROM(cdrom, onProgress) {
  const response = await fetch(cdrom.srcUrl);
  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `Could not fetch CD-ROM, status=${response.status}, body=${body}`
    );
  }
  if (!response.body) {
    throw new Error("Could not fetch CD-ROM, no response body");
  }
  onProgress(0);
  const reader = response.body.getReader();
  let loaded = 0;
  const stream = new ReadableStream({
    async start(controller) {
      for (; ; ) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        loaded += value.length;
        onProgress(loaded / cdrom.fileSize);
        controller.enqueue(value);
      }
      controller.close();
    }
  });
  const blob = await new Response(stream).blob();
  onProgress(1);
  const blobURL = URL.createObjectURL(blob);
  return {
    ...cdrom,
    srcUrl: blobURL
  };
}
class EmulatorTrackpadController {
  constructor(delegate) {
    __privateAdd(this, _delegate2, void 0);
    __privateAdd(this, _pointerDown, false);
    __privateAdd(this, _pointerDownStartTime, 0);
    __privateAdd(this, _pointerDownX, 0);
    __privateAdd(this, _pointerDownY, 0);
    __privateAdd(this, _previousMoveTime, 0);
    __privateAdd(this, _pointerDownIsMove, false);
    __privateAdd(this, _dragTimeout, 0);
    __privateAdd(this, _pointerDownIsDrag, false);
    __privateSet(this, _delegate2, delegate);
  }
  handlePointerDown(event) {
    if (event.target && "setPointerCapture" in event.target) {
      event.target.setPointerCapture(event.pointerId);
    }
    __privateSet(this, _pointerDown, true);
    __privateSet(this, _pointerDownIsMove, false);
    __privateSet(this, _pointerDownStartTime, event.timeStamp);
    __privateSet(this, _pointerDownX, event.clientX);
    __privateSet(this, _pointerDownY, event.clientY);
  }
  handlePointerUp(event) {
    __privateSet(this, _pointerDown, false);
    if (__privateGet(this, _pointerDownIsDrag)) {
      if (!__privateGet(this, _pointerDownIsMove)) {
        __privateSet(this, _pointerDownIsDrag, false);
        __privateGet(this, _delegate2).trackpadButtonUp(0);
      }
    } else if (!__privateGet(this, _pointerDownIsMove)) {
      const pointerDownTime = event.timeStamp - __privateGet(this, _pointerDownStartTime);
      if (pointerDownTime < MOVE_TIME_THRESHOLD) {
        if (__privateGet(this, _dragTimeout)) {
          window.clearTimeout(__privateGet(this, _dragTimeout));
          __privateSet(this, _dragTimeout, 0);
          __privateGet(this, _delegate2).trackpadButtonUp(0);
          window.setTimeout(
            () => __privateGet(this, _delegate2).trackpadButtonDown(0),
            33
          );
          window.setTimeout(
            () => __privateGet(this, _delegate2).trackpadButtonUp(0),
            66
          );
        } else {
          __privateGet(this, _delegate2).trackpadButtonDown(0);
          __privateSet(this, _dragTimeout, window.setTimeout(() => {
            __privateGet(this, _delegate2).trackpadButtonUp(0);
            __privateSet(this, _dragTimeout, 0);
          }, DRAG_TIME_THRESHOLD));
        }
      }
    }
    __privateSet(this, _pointerDownIsMove, false);
  }
  handlePointerMove(event) {
    if (!__privateGet(this, _pointerDown)) {
      return;
    }
    const deltaX = event.clientX - __privateGet(this, _pointerDownX);
    const deltaY = event.clientY - __privateGet(this, _pointerDownY);
    if (!__privateGet(this, _pointerDownIsMove) && deltaX * deltaX + deltaY * deltaY < MOVE_DISTANCE_THRESHOLD_SQ) {
      return;
    }
    if (!__privateGet(this, _pointerDownIsDrag) && __privateGet(this, _dragTimeout)) {
      __privateSet(this, _pointerDownIsDrag, true);
      window.clearTimeout(__privateGet(this, _dragTimeout));
      __privateSet(this, _dragTimeout, 0);
    }
    if (__privateGet(this, _pointerDownIsMove)) {
      __privateGet(this, _delegate2).trackpadDidMove(
        ...accelerate(
          event.movementX,
          event.movementY,
          event.timeStamp - __privateGet(this, _previousMoveTime)
        )
      );
    } else {
      __privateSet(this, _pointerDownIsMove, true);
    }
    __privateSet(this, _previousMoveTime, event.timeStamp);
  }
}
_delegate2 = new WeakMap();
_pointerDown = new WeakMap();
_pointerDownStartTime = new WeakMap();
_pointerDownX = new WeakMap();
_pointerDownY = new WeakMap();
_previousMoveTime = new WeakMap();
_pointerDownIsMove = new WeakMap();
_dragTimeout = new WeakMap();
_pointerDownIsDrag = new WeakMap();
const MOVE_DISTANCE_THRESHOLD_SQ = 20 * 20;
const MOVE_TIME_THRESHOLD = 200;
const DRAG_TIME_THRESHOLD = 300;
function accelerate(deltaX, deltaY, deltaMs) {
  const deviceSpeed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) / deltaMs;
  if (deviceSpeed <= 0.5) {
    return [deltaX, deltaY];
  }
  if (deviceSpeed <= 1) {
    return [deltaX * 2, deltaY * 2];
  }
  const cursorSpeed = Math.pow(deviceSpeed, 2);
  const multiplier = cursorSpeed / deviceSpeed;
  return [deltaX * multiplier, deltaY * multiplier];
}
class Emulator {
  constructor(config, delegate) {
    __privateAdd(this, _startWorker);
    __privateAdd(this, _handleCDROMs);
    __privateAdd(this, _useMouseDeltas);
    __privateAdd(this, _trackpadMode);
    __privateAdd(this, _getAdbKeyCode);
    __privateAdd(this, _getAdbKeyModifiers);
    __privateAdd(this, _drawScreen);
    __privateAdd(this, _clearScreen);
    __privateAdd(this, _initServiceWorker);
    __privateAdd(this, _handleEmulatorStopped);
    __privateAdd(this, _config3, void 0);
    __privateAdd(this, _delegate3, void 0);
    __privateAdd(this, _worker, void 0);
    __privateAdd(this, _workerTerminated, false);
    __privateAdd(this, _screenCanvasContext, void 0);
    __privateAdd(this, _screenImageData, void 0);
    __privateAdd(this, _video, void 0);
    __privateAdd(this, _input2, void 0);
    __privateAdd(this, _audio, void 0);
    __privateAdd(this, _files, void 0);
    __privateAdd(this, _ethernet, void 0);
    __privateAdd(this, _clipboard, void 0);
    __privateAdd(this, _serviceWorker, void 0);
    __privateAdd(this, _serviceWorkerReady, void 0);
    __privateAdd(this, _gotFirstBlit, false);
    __privateAdd(this, _ethernetPinger, void 0);
    // Keep track of which keys are down so we can synthesize key up events in
    // some edge cases.
    __privateAdd(this, _downKeyCodes, /* @__PURE__ */ new Set());
    __privateAdd(this, _mouseX, 0);
    __privateAdd(this, _mouseY, 0);
    __privateAdd(this, _trackpadController, void 0);
    __privateAdd(this, _requestedPointerLock, false);
    __privateAdd(this, _handlePointerMove, (event) => {
      if (__privateMethod(this, _trackpadMode, trackpadMode_fn).call(this)) {
        __privateGet(this, _trackpadController).handlePointerMove(event);
      } else {
        __privateSet(this, _mouseX, event.offsetX);
        __privateSet(this, _mouseY, event.offsetY);
        __privateGet(this, _input2).handleInput({
          type: "mousemove",
          x: event.offsetX,
          y: event.offsetY,
          deltaX: event.movementX,
          deltaY: event.movementY
        });
      }
    });
    __privateAdd(this, _handlePointerDown, (event) => {
      if (__privateMethod(this, _trackpadMode, trackpadMode_fn).call(this)) {
        __privateGet(this, _trackpadController).handlePointerDown(event);
        return;
      }
      __privateSet(this, _mouseX, event.offsetX);
      __privateSet(this, _mouseY, event.offsetY);
      const handleMouseDown = () => {
        __privateGet(this, _input2).handleInput({
          type: "mousedown",
          button: event.button
        });
      };
      if (HAS_HOVER_EVENTS) {
        handleMouseDown();
      } else {
        __privateGet(this, _input2).handleInput({
          type: "mousemove",
          x: event.offsetX,
          y: event.offsetY,
          deltaX: event.movementX,
          deltaY: event.movementY
        });
        setTimeout(handleMouseDown, 16);
      }
      if (__privateMethod(this, _useMouseDeltas, useMouseDeltas_fn).call(this) && !__privateGet(this, _requestedPointerLock)) {
        __privateGet(this, _config3).screenCanvas.requestPointerLock({
          unadjustedMovement: false
        });
        __privateSet(this, _requestedPointerLock, true);
      }
    });
    __privateAdd(this, _handlePointerLockChange, (event) => {
      if (!document.pointerLockElement) {
        __privateSet(this, _requestedPointerLock, false);
      }
    });
    __privateAdd(this, _handlePointerUp, (event) => {
      if (__privateMethod(this, _trackpadMode, trackpadMode_fn).call(this)) {
        __privateGet(this, _trackpadController).handlePointerUp(event);
      } else {
        __privateGet(this, _input2).handleInput({ type: "mouseup", button: event.button });
      }
    });
    __privateAdd(this, _handleTouchStart, (event) => {
      event.preventDefault();
    });
    __privateAdd(this, _handleKeyDown, (event) => {
      const { target, code } = event;
      if (target instanceof HTMLInputElement && !target.classList.contains("Mac-Keyboard-Input")) {
        return;
      }
      event.preventDefault();
      const adbKeyCode = __privateMethod(this, _getAdbKeyCode, getAdbKeyCode_fn).call(this, code);
      if (adbKeyCode !== void 0) {
        __privateGet(this, _downKeyCodes).add(code);
        if (code === "KeyV" && event.metaKey) {
          navigator.clipboard.readText().then(
            (text) => __privateGet(this, _clipboard).setClipboardText(text),
            (error) => console.error("Could not read clipboard", error)
          );
        }
        __privateGet(this, _input2).handleInput({
          type: "keydown",
          keyCode: adbKeyCode,
          modifiers: __privateMethod(this, _getAdbKeyModifiers, getAdbKeyModifiers_fn).call(this, event)
        });
      } else {
        console.warn(`Unhandled key: ${code}`);
      }
    });
    __privateAdd(this, _handleKeyUp, (event) => {
      const { code } = event;
      const handleKeyUp = (code2) => {
        __privateGet(this, _downKeyCodes).delete(code2);
        const adbKeyCode = __privateMethod(this, _getAdbKeyCode, getAdbKeyCode_fn).call(this, code2);
        if (adbKeyCode !== void 0) {
          __privateGet(this, _input2).handleInput({
            type: "keyup",
            keyCode: adbKeyCode,
            modifiers: __privateMethod(this, _getAdbKeyModifiers, getAdbKeyModifiers_fn).call(this, event)
          });
        }
      };
      handleKeyUp(code);
      if (code.startsWith("Meta") && navigator.platform.startsWith("Mac")) {
        for (const otherKeyCode of __privateGet(this, _downKeyCodes)) {
          if (!otherKeyCode.startsWith("Meta") && !otherKeyCode.startsWith("Control") && !otherKeyCode.startsWith("Alt") && !otherKeyCode.startsWith("Shift")) {
            handleKeyUp(otherKeyCode);
          }
        }
      }
    });
    __privateAdd(this, _handleBeforeUnload, () => {
      this.stop();
    });
    __privateAdd(this, _handleWorkerMessage, (e) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      if (e.data.type === "emulator_ready") {
        (_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorDidFinishLoading) == null ? void 0 : _b.call(_a, this);
      } else if (e.data.type === "emulator_video_open") {
        console.log(
          `Initializing video (${e.data.width}x${e.data.height})`
        );
        const { width, height } = e.data;
        __privateSet(this, _screenImageData, __privateGet(this, _screenCanvasContext).createImageData(
          width,
          height
        ));
        (_d = (_c = __privateGet(this, _delegate3)) == null ? void 0 : _c.emulatorDidChangeScreenSize) == null ? void 0 : _d.call(_c, width, height);
      } else if (e.data.type === "emulator_audio_open") {
        const { sampleRate, sampleSize, channels } = e.data;
        __privateGet(this, _audio).init(
          sampleRate,
          sampleSize,
          channels,
          __privateGet(this, _config3).debugAudio ?? false
        );
      } else if (e.data.type === "emulator_blit") {
        if (!__privateGet(this, _gotFirstBlit)) {
          __privateSet(this, _gotFirstBlit, true);
          console.timeEnd("Emulator first blit");
        }
        const blitData = e.data.data;
        __privateGet(this, _video).blit(blitData);
        __privateMethod(this, _drawScreen, drawScreen_fn).call(this);
      } else if (e.data.type === "emulator_audio") {
        if (__privateGet(this, _audio) instanceof FallbackEmulatorAudio) {
          __privateGet(this, _audio).handleData(e.data.data);
        }
      } else if (e.data.type === "emulator_extract_directory") {
        handleDirectoryExtraction(e.data.extraction);
      } else if (e.data.type === "emulator_quiescent") {
        console.timeEnd("Emulator quiescent");
      } else if (e.data.type === "emulator_stopped") {
        __privateMethod(this, _handleEmulatorStopped, handleEmulatorStopped_fn).call(this, e.data.isExit);
      } else if (e.data.type === "emulator_ethernet_init") {
        const { ethernetProvider } = __privateGet(this, _config3);
        if (ethernetProvider) {
          ethernetProvider.init(e.data.macAddress);
          __privateGet(this, _ethernetPinger).start(e.data.macAddress, ethernetProvider);
        }
      } else if (e.data.type === "emulator_ethernet_write") {
        const { destination, packet } = e.data;
        const localResponse = handleEthernetWrite();
        if (localResponse) {
          __privateGet(this, _ethernet).receive(localResponse);
        } else {
          (_e = __privateGet(this, _config3).ethernetProvider) == null ? void 0 : _e.send(destination, packet);
        }
      } else if (e.data.type === "emulator_set_clipboard_text") {
        const { text } = e.data;
        navigator.clipboard.writeText(text).then(
          () => {
          },
          (error) => {
            console.error("Could not set clipboard text:", error);
          }
        );
      } else if (e.data.type === "emulator_did_run_out_memory") {
        (_g = (_f = __privateGet(this, _delegate3)) == null ? void 0 : _f.emulatorDidRunOutOfMemory) == null ? void 0 : _g.call(_f, this);
      } else if (e.data.type === "emulator_did_have_error") {
        (_i = (_h = __privateGet(this, _delegate3)) == null ? void 0 : _h.emulatorDidHaveError) == null ? void 0 : _i.call(
          _h,
          this,
          e.data.error,
          e.data.errorRaw ?? e.data.error
        );
      } else if (e.data.type === "emulator_will_load_chunk") {
        (_k = (_j = __privateGet(this, _delegate3)) == null ? void 0 : _j.emulatorDidStartToLoadDiskChunk) == null ? void 0 : _k.call(_j, this);
      } else if (e.data.type === "emulator_did_load_chunk") {
        (_m = (_l = __privateGet(this, _delegate3)) == null ? void 0 : _l.emulatorDidFinishLoadingDiskChunk) == null ? void 0 : _m.call(_l, this);
      } else {
        console.warn("Unexpected postMessage event", e);
      }
    });
    __privateAdd(this, _handleVisibilityChange, () => {
      __privateMethod(this, _drawScreen, drawScreen_fn).call(this);
    });
    var _a;
    console.time("Emulator first blit");
    console.time("Emulator quiescent");
    __privateSet(this, _config3, config);
    __privateSet(this, _delegate3, delegate);
    __privateSet(this, _worker, new WorkerWrapper());
    const {
      useSharedMemory,
      screenCanvas: canvas,
      screenWidth,
      screenHeight
    } = __privateGet(this, _config3);
    __privateMethod(this, _initServiceWorker, initServiceWorker_fn).call(this);
    let fallbackCommandSender;
    if (!useSharedMemory) {
      fallbackCommandSender = async (command) => {
        const serviceWorkerAvailable = await __privateGet(this, _serviceWorkerReady);
        if (serviceWorkerAvailable) {
          __privateGet(this, _serviceWorker).postMessage({
            type: "worker-command",
            command
          });
        } else {
          console.error(
            "Service worker is not available, cannot send command",
            command
          );
        }
      };
    }
    __privateSet(this, _screenCanvasContext, canvas.getContext("2d", {
      desynchronized: true
    }));
    __privateSet(this, _screenImageData, __privateGet(this, _screenCanvasContext).createImageData(
      screenWidth,
      screenHeight
    ));
    __privateSet(this, _video, useSharedMemory ? new SharedMemoryEmulatorVideo(config) : new FallbackEmulatorVideo(config));
    __privateSet(this, _input2, useSharedMemory ? new SharedMemoryEmulatorInput() : new FallbackEmulatorInput(fallbackCommandSender));
    __privateSet(this, _audio, useSharedMemory ? new SharedMemoryEmulatorAudio(__privateGet(this, _input2)) : new FallbackEmulatorAudio(__privateGet(this, _input2)));
    __privateSet(this, _files, useSharedMemory ? new SharedMemoryEmulatorFiles() : new FallbackEmulatorFiles(fallbackCommandSender));
    __privateSet(this, _ethernet, useSharedMemory ? new SharedMemoryEmulatorEthernet() : new FallbackEmulatorEthernet(fallbackCommandSender));
    (_a = config.ethernetProvider) == null ? void 0 : _a.setDelegate({
      receive: (packet) => {
        if (__privateGet(this, _ethernetPinger).handlePongPacket(packet)) {
          return;
        }
        __privateGet(this, _ethernet).receive(packet);
        __privateGet(this, _input2).handleInput({ type: "ethernet-interrupt" });
      }
    });
    __privateSet(this, _ethernetPinger, new EthernetPinger({
      ethernetPingerDidUpdatePeers: (pinger) => {
        var _a2, _b;
        (_b = (_a2 = __privateGet(this, _delegate3)) == null ? void 0 : _a2.emulatorEthernetPeersDidChange) == null ? void 0 : _b.call(
          _a2,
          this,
          pinger.peers()
        );
      }
    }));
    __privateSet(this, _clipboard, useSharedMemory ? new SharedMemoryEmulatorClipboard() : new FallbackEmulatorClipboard(fallbackCommandSender));
    __privateSet(this, _trackpadController, new EmulatorTrackpadController({
      trackpadDidMove: (deltaX, deltaY) => {
        __privateGet(this, _input2).handleInput({
          type: "mousemove",
          // Also send the absolute position, for emulators that don't
          // support deltas.
          x: __privateGet(this, _mouseX),
          y: __privateGet(this, _mouseY),
          deltaX,
          deltaY
        });
        __privateSet(this, _mouseX, __privateGet(this, _mouseX) + deltaX);
        __privateSet(this, _mouseY, __privateGet(this, _mouseY) + deltaY);
      },
      trackpadButtonDown: (button) => {
        __privateGet(this, _input2).handleInput({ type: "mousedown", button });
      },
      trackpadButtonUp: (button) => {
        __privateGet(this, _input2).handleInput({ type: "mouseup", button });
      }
    }));
  }
  async start() {
    const { screenCanvas: canvas } = __privateGet(this, _config3);
    canvas.addEventListener("pointermove", __privateGet(this, _handlePointerMove));
    canvas.addEventListener("pointerdown", __privateGet(this, _handlePointerDown));
    canvas.addEventListener("pointerup", __privateGet(this, _handlePointerUp));
    canvas.addEventListener("touchstart", __privateGet(this, _handleTouchStart));
    window.addEventListener("keydown", __privateGet(this, _handleKeyDown));
    window.addEventListener("keyup", __privateGet(this, _handleKeyUp));
    window.addEventListener("beforeunload", __privateGet(this, _handleBeforeUnload));
    document.addEventListener(
      "visibilitychange",
      __privateGet(this, _handleVisibilityChange)
    );
    document.addEventListener(
      "pointerlockchange",
      __privateGet(this, _handlePointerLockChange)
    );
    await __privateMethod(this, _startWorker, startWorker_fn).call(this);
  }
  refreshSettings() {
    var _a, _b;
    const settings = (_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorSettings) == null ? void 0 : _b.call(_a, this);
    const speed = settings == null ? void 0 : settings.speed;
    if (speed !== void 0) {
      __privateGet(this, _input2).handleInput({ type: "set-speed", speed });
    }
    const useMouseDeltas = __privateMethod(this, _trackpadMode, trackpadMode_fn).call(this) || (settings == null ? void 0 : settings.useMouseDeltas);
    if (useMouseDeltas !== void 0) {
      __privateGet(this, _input2).handleInput({
        type: "set-use-mouse-deltas",
        useMouseDeltas
      });
    }
  }
  stop() {
    const { screenCanvas: canvas } = __privateGet(this, _config3);
    canvas.removeEventListener("pointermove", __privateGet(this, _handlePointerMove));
    canvas.removeEventListener("pointerdown", __privateGet(this, _handlePointerDown));
    canvas.removeEventListener("pointerup", __privateGet(this, _handlePointerUp));
    canvas.removeEventListener("touchstart", __privateGet(this, _handleTouchStart));
    window.removeEventListener("keydown", __privateGet(this, _handleKeyDown));
    window.removeEventListener("keyup", __privateGet(this, _handleKeyUp));
    window.removeEventListener("beforeunload", __privateGet(this, _handleBeforeUnload));
    document.removeEventListener(
      "visibilitychange",
      __privateGet(this, _handleVisibilityChange)
    );
    document.addEventListener(
      "pointerlockchange",
      __privateGet(this, _handlePointerLockChange)
    );
    __privateGet(this, _input2).handleInput({ type: "stop" });
    __privateGet(this, _ethernetPinger).stop();
    __privateGet(this, _audio).stop();
  }
  restart(whileStopped) {
    __privateGet(this, _audio).stop();
    __privateGet(this, _input2).handleInput({ type: "stop" });
    return new Promise((resolve) => {
      const interval = setInterval(() => {
        if (__privateGet(this, _workerTerminated)) {
          __privateMethod(this, _clearScreen, clearScreen_fn).call(this);
          clearInterval(interval);
          const start = () => {
            __privateMethod(this, _startWorker, startWorker_fn).call(this);
            __privateGet(this, _input2).handleInput({ type: "start" });
            resolve();
          };
          if (whileStopped) {
            whileStopped().then(start);
          } else {
            start();
          }
        }
      }, 100);
    });
  }
  async uploadFiles(files, names = []) {
    const remainingFiles = [];
    const remainingNames = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uploads = await uploadsFromFile(file);
      if (uploads) {
        __privateGet(this, _files).uploadFiles(uploads);
        continue;
      }
      remainingFiles.push(file);
      remainingNames.push(names[i]);
    }
    if (!remainingFiles.length) {
      return;
    }
    __privateGet(this, _files).uploadFiles(
      remainingFiles.map((file, i) => ({
        name: remainingNames[i] ?? file.name,
        // Full paths are handled by worker
        url: URL.createObjectURL(file),
        size: file.size
      }))
    );
  }
  async loadCDROM(cdrom) {
    const cdroms = await __privateMethod(this, _handleCDROMs, handleCDROMs_fn).call(this, [cdrom]);
    __privateGet(this, _files).loadCDROM(cdroms[0]);
  }
}
_config3 = new WeakMap();
_delegate3 = new WeakMap();
_worker = new WeakMap();
_workerTerminated = new WeakMap();
_screenCanvasContext = new WeakMap();
_screenImageData = new WeakMap();
_video = new WeakMap();
_input2 = new WeakMap();
_audio = new WeakMap();
_files = new WeakMap();
_ethernet = new WeakMap();
_clipboard = new WeakMap();
_serviceWorker = new WeakMap();
_serviceWorkerReady = new WeakMap();
_gotFirstBlit = new WeakMap();
_ethernetPinger = new WeakMap();
_downKeyCodes = new WeakMap();
_mouseX = new WeakMap();
_mouseY = new WeakMap();
_trackpadController = new WeakMap();
_requestedPointerLock = new WeakMap();
_startWorker = new WeakSet();
startWorker_fn = async function() {
  if (__privateGet(this, _workerTerminated)) {
    __privateSet(this, _worker, new WorkerWrapper());
  }
  __privateGet(this, _worker).addEventListener("message", __privateGet(this, _handleWorkerMessage));
  const emulatorWasmPath = getEmulatorWasmPath(__privateGet(this, _config3).machine);
  const [wasm, rom, basePrefs, deviceImageHeader] = await load(
    [
      emulatorWasmPath,
      __privateGet(this, _config3).machine.romPath,
      __privateGet(this, _config3).machine.prefsPath,
      deviceImageHeaderPath$1
    ],
    (total, left) => {
      var _a, _b;
      (_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorDidMakeLoadingProgress) == null ? void 0 : _b.call(
        _a,
        this,
        total,
        left
      );
    }
  );
  const romPathPieces = __privateGet(this, _config3).machine.romPath.split("/");
  const romFileName = romPathPieces[romPathPieces.length - 1];
  const disks = await loadDisks(__privateGet(this, _config3).disks);
  const delayedDisks = __privateGet(this, _config3).delayedDisks ? await loadDisks(__privateGet(this, _config3).delayedDisks) : void 0;
  const autoloadFiles = {};
  let args = [];
  let configDebugStr;
  const { emulatorType } = __privateGet(this, _config3).machine;
  if (emulatorType === "DingusPPC") {
    args = configToDingusPPCArgs(__privateGet(this, _config3), { disks, romFileName });
    configDebugStr = args.join(" ");
  } else if (emulatorType === "Previous") {
    const config2 = configToPreviousConfig(__privateGet(this, _config3), {
      baseConfig: basePrefs,
      disks,
      romFileName
    });
    autoloadFiles["previous.cfg"] = new TextEncoder().encode(
      config2
    ).buffer;
    for (const disk of [
      ...disks,
      ...delayedDisks ?? [],
      ...__privateGet(this, _config3).cdroms,
      ...__privateGet(this, _config3).diskFiles
    ]) {
      autoloadFiles[disk.name] = new ArrayBuffer(0);
    }
    configDebugStr = config2;
  } else {
    const prefs = configToEmulatorPrefs(__privateGet(this, _config3), {
      basePrefs,
      disks,
      romFileName
    });
    args = ["--config", "prefs"];
    autoloadFiles["prefs"] = new TextEncoder().encode(prefs).buffer;
    configDebugStr = prefs;
  }
  console.groupCollapsed(
    "%cGenerated emulator config",
    "font-weight: normal"
  );
  console.log(configDebugStr);
  console.groupEnd();
  const dateOffset = __privateGet(this, _config3).customDate ? __privateGet(this, _config3).customDate.getTime() - Date.now() : 0;
  const config = {
    ...{
      emulatorType: __privateGet(this, _config3).machine.emulatorType,
      emulatorSubtype: __privateGet(this, _config3).machine.emulatorSubtype
    },
    wasm,
    disks,
    delayedDisks,
    diskFiles: __privateGet(this, _config3).diskFiles,
    deviceImageHeader,
    cdroms: await __privateMethod(this, _handleCDROMs, handleCDROMs_fn).call(this, __privateGet(this, _config3).cdroms),
    usePlaceholderDisks: emulatorUsesPlaceholderDisks(emulatorType),
    autoloadFiles: {
      [romFileName]: rom,
      ...autoloadFiles
    },
    arguments: args,
    video: __privateGet(this, _video).workerConfig(),
    input: __privateGet(this, _input2).workerConfig(),
    audio: __privateGet(this, _audio).workerConfig(),
    files: __privateGet(this, _files).workerConfig(),
    ethernet: __privateGet(this, _ethernet).workerConfig(),
    clipboard: __privateGet(this, _clipboard).workerConfig(),
    dateOffset
  };
  const serviceWorkerAvailable = await __privateGet(this, _serviceWorkerReady);
  if (serviceWorkerAvailable) {
    for (const spec of config.disks.concat(config.delayedDisks ?? [])) {
      __privateGet(this, _serviceWorker).postMessage({
        type: "init-disk-cache",
        spec
      });
    }
  } else {
    console.warn(
      "Could not initialize service worker, things will be slower"
    );
  }
  __privateGet(this, _worker).postMessage({ type: "start", config }, [
    wasm,
    rom,
    deviceImageHeader,
    ...Object.values(autoloadFiles)
  ]);
};
_handleCDROMs = new WeakSet();
handleCDROMs_fn = async function(cdroms) {
  const result = [];
  for (const cdrom of cdroms) {
    if (cdrom.fetchClientSide) {
      result.push(
        await fetchCDROM(cdrom, (loadedFraction) => {
          var _a, _b;
          (_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorDidMakeCDROMLoadingProgress) == null ? void 0 : _b.call(
            _a,
            this,
            cdrom,
            loadedFraction
          );
        })
      );
    } else {
      result.push(cdrom);
    }
  }
  return result;
};
_useMouseDeltas = new WeakSet();
useMouseDeltas_fn = function() {
  var _a, _b;
  return emulatorNeedsMouseDeltas(__privateGet(this, _config3).machine.emulatorType) || ((_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorSettings) == null ? void 0 : _b.call(_a, this).useMouseDeltas) === true;
};
_trackpadMode = new WeakSet();
trackpadMode_fn = function() {
  var _a, _b;
  if (__privateMethod(this, _useMouseDeltas, useMouseDeltas_fn).call(this) && !HAS_HOVER_EVENTS) {
    return true;
  }
  return ((_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorSettings) == null ? void 0 : _b.call(_a, this).trackpadMode) ?? __privateGet(this, _config3).debugTrackpad ?? false;
};
_handlePointerMove = new WeakMap();
_handlePointerDown = new WeakMap();
_handlePointerLockChange = new WeakMap();
_handlePointerUp = new WeakMap();
_handleTouchStart = new WeakMap();
_handleKeyDown = new WeakMap();
_handleKeyUp = new WeakMap();
_getAdbKeyCode = new WeakSet();
getAdbKeyCode_fn = function(code) {
  var _a, _b;
  if ((_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorSettings) == null ? void 0 : _b.call(_a, this).swapControlAndCommand) {
    if (code.startsWith("Control")) {
      code = "Meta" + code.slice("Control".length);
    } else if (code.startsWith("Meta")) {
      code = "Control" + code.slice("Meta".length);
    }
  }
  if (__privateGet(this, _config3).machine.emulatorType === "Previous") {
    return JS_CODE_TO_NEXT_KEYCODE[code];
  }
  if (__privateGet(this, _config3).machine.emulatorType === "Mini vMac") {
    const keyCode = JS_CODE_TO_MINI_VMAC_KEYCODE[code];
    if (keyCode !== void 0) {
      return keyCode;
    }
  }
  return JS_CODE_TO_ADB_KEYCODE[code];
};
_getAdbKeyModifiers = new WeakSet();
getAdbKeyModifiers_fn = function(event) {
  var _a, _b;
  if (__privateGet(this, _config3).machine.emulatorType !== "Previous") {
    return void 0;
  }
  let modifiers = 0;
  if (event.altKey) {
    modifiers |= 32;
  }
  if (event.shiftKey) {
    modifiers |= 2;
  }
  if ((_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorSettings) == null ? void 0 : _b.call(_a, this).swapControlAndCommand) {
    if (event.ctrlKey) {
      modifiers |= 8;
    }
    if (event.metaKey) {
      modifiers |= 1;
    }
  } else {
    if (event.ctrlKey) {
      modifiers |= 1;
    }
    if (event.metaKey) {
      modifiers |= 8;
    }
  }
  return modifiers;
};
_handleBeforeUnload = new WeakMap();
_handleWorkerMessage = new WeakMap();
_handleVisibilityChange = new WeakMap();
_drawScreen = new WeakSet();
drawScreen_fn = function() {
  if (document.hidden) {
    return;
  }
  const imageData = __privateGet(this, _video).imageData();
  if (!imageData) {
    return;
  }
  __privateGet(this, _screenImageData).data.set(imageData);
  const dirtyRect = __privateGet(this, _video).consumeBlitRect();
  if (dirtyRect) {
    __privateGet(this, _screenCanvasContext).putImageData(
      __privateGet(this, _screenImageData),
      0,
      0,
      dirtyRect.left,
      dirtyRect.top,
      dirtyRect.right - dirtyRect.left,
      dirtyRect.bottom - dirtyRect.top
    );
  } else {
    __privateGet(this, _screenCanvasContext).putImageData(__privateGet(this, _screenImageData), 0, 0);
  }
};
_clearScreen = new WeakSet();
clearScreen_fn = function() {
  __privateGet(this, _screenCanvasContext).clearRect(
    0,
    0,
    __privateGet(this, _config3).screenCanvas.width,
    __privateGet(this, _config3).screenCanvas.height
  );
};
_initServiceWorker = new WeakSet();
initServiceWorker_fn = function() {
  if (!("serviceWorker" in navigator)) {
    console.warn("Service workers not available");
    return;
  }
  const workerType = "classic";
  __privateSet(this, _serviceWorkerReady, new Promise((resolve, reject) => {
    navigator.serviceWorker.register(serviceWorkerPath, { scope: "/", type: workerType }).then((registration) => {
      const init = (serviceWorker) => {
        __privateSet(this, _serviceWorker, serviceWorker);
        serviceWorker.addEventListener(
          "statechange",
          handleStateChange
        );
      };
      const handleStateChange = (event) => {
        const { state } = __privateGet(this, _serviceWorker);
        console.log(
          `Service worker stage changed to "${state}"`
        );
        if (state === "activated") {
          resolve(true);
        }
      };
      console.log("Service worker registered");
      if (registration.installing) {
        console.log("Service worker installing");
        init(registration.installing);
      } else if (registration.waiting) {
        console.log("Service worker installed, waiting");
        init(registration.waiting);
      } else if (registration.active) {
        console.log("Service worker active");
        init(registration.active);
        resolve(true);
      }
    }).catch((err) => {
      console.error("Service worker error", err);
      resolve(false);
    });
  }));
};
_handleEmulatorStopped = new WeakSet();
handleEmulatorStopped_fn = async function(isExit) {
  var _a, _b;
  __privateGet(this, _worker).removeEventListener("message", __privateGet(this, _handleWorkerMessage));
  __privateGet(this, _worker).terminate();
  __privateSet(this, _workerTerminated, true);
  if (isExit) {
    (_b = (_a = __privateGet(this, _delegate3)) == null ? void 0 : _a.emulatorDidExit) == null ? void 0 : _b.call(_a, this);
  }
};
async function load(paths, progress) {
  let left = paths.length;
  progress(paths.length, left);
  const arrayBuffers = [];
  await Promise.all(
    paths.map(async (path, i) => {
      const response = await fetch(path);
      arrayBuffers[i] = await response.arrayBuffer();
      progress(paths.length, --left);
    })
  );
  return arrayBuffers;
}
async function loadDisks(disks) {
  const diskSpecs = await Promise.all(
    disks.map((d) => d.generatedSpec().then((i) => i.default))
  );
  return disks.map((d, i) => ({
    ...diskSpecs[i],
    baseUrl: "/Disk",
    prefetchChunks: d.prefetchChunks,
    persistent: d.persistent,
    isFloppy: d.isFloppy
  }));
}
function configToEmulatorPrefs(config, {
  basePrefs,
  romFileName,
  disks
}) {
  const { machine } = config;
  let prefsStr = new TextDecoder().decode(basePrefs);
  prefsStr += `rom ${romFileName}
`;
  const cpuId = emulatorCpuId(machine.emulatorType, machine.cpu);
  if (cpuId !== void 0) {
    prefsStr += `cpu ${cpuId}
`;
  }
  const modelId = emulatorModelId(machine.emulatorType, machine.gestaltID);
  if (modelId !== void 0) {
    prefsStr += `modelid ${modelId}
`;
  }
  const ramSizeString = config.ramSize ?? machine.ramSizes[0];
  let ramSize = parseInt(ramSizeString);
  if (ramSizeString.endsWith("M")) {
    ramSize *= 1024 * 1024;
  } else if (ramSizeString.endsWith("K")) {
    ramSize *= 1024;
  }
  prefsStr += `ramsize ${ramSize}
`;
  prefsStr += `screen win/${config.screenWidth}/${config.screenHeight}
`;
  for (const spec of disks) {
    prefsStr += `disk ${spec.name}
`;
  }
  for (const cdrom of config.cdroms) {
    prefsStr += `disk *${cdrom.name}
`;
  }
  for (const diskFile of config.diskFiles) {
    if (diskFile.isCDROM) {
      prefsStr += `cdrom ${diskFile.name}
`;
    } else {
      prefsStr += `disk ${diskFile.name}
`;
    }
  }
  if (emulatorUsesPlaceholderDisks(machine.emulatorType)) {
    for (let i = 0; i < EMULATOR_REMOVABLE_DISK_COUNT; i++) {
      prefsStr += `disk */placeholder/${i}
`;
    }
  }
  if (config.ethernetProvider) {
    prefsStr += "appletalk true\n";
  }
  prefsStr += `jsfrequentreadinput ${config.useSharedMemory}
`;
  return prefsStr;
}
function configToDingusPPCArgs(config, {
  romFileName,
  disks
}) {
  const args = ["--realtime", "--bootrom", romFileName];
  if (config.debugLog) {
    args.push(
      "--log-to-stderr",
      "--log-no-uptime",
      "--log-to-stderr-verbose"
    );
  }
  const floppies = [];
  const hardDisks = [];
  const cdroms = [];
  for (const spec of disks) {
    if (spec.isFloppy) {
      floppies.push(spec.name);
    } else {
      hardDisks.push(spec.name);
    }
  }
  for (const spec of config.cdroms) {
    cdroms.push(spec.name);
  }
  for (const diskFile of config.diskFiles) {
    if (diskFile.isCDROM) {
      cdroms.push(diskFile.name);
    } else {
      hardDisks.push(diskFile.name);
    }
  }
  if (floppies.length > 0) {
    args.push("--fdd_img", floppies[0]);
    args.push("--fdd_wr_prot=1");
  }
  if (hardDisks.length > 0) {
    if (config.machine.gestaltID !== POWER_MACINTOSH_G3_BEIGE.gestaltID) {
      args.push("--hdd_img", hardDisks.join(":"));
    } else {
      args.push("--hdd_img", hardDisks[0]);
    }
  }
  if (cdroms.length > 0) {
    args.push("--cdr_img", cdroms[0]);
  }
  const ramSize = config.ramSize ?? config.machine.ramSizes[0];
  switch (config.machine.gestaltID) {
    case POWER_MACINTOSH_6100.gestaltID: {
      const simmSize = Math.floor((parseInt(ramSize) - 8) / 2).toString();
      args.push("--rambank1_size", simmSize);
      args.push("--rambank2_size", simmSize);
      break;
    }
    default:
      args.push("--rambank1_size", ramSize.slice(0, -1));
      break;
  }
  switch (config.machine.gestaltID) {
    case POWER_MACINTOSH_7500.gestaltID:
      args.push("--machine", "pm7500");
      break;
  }
  return args;
}
function configToPreviousConfig(config, {
  baseConfig,
  romFileName,
  disks
}) {
  const floppyStrs = [];
  const diskStrs = [];
  function addDisk(strs, name, isCDROM, isInserted = true) {
    const i = strs.length;
    strs.push(`
szImageName${i} = ${name}
nDeviceType${i} = ${isCDROM ? 2 : 1}
bDiskInserted${i} = ${isInserted ? "TRUE" : "FALSE"}
bWriteProtected${i} = ${isCDROM ? "TRUE" : "FALSE"}
`);
  }
  for (const disk of disks) {
    addDisk(disk.isFloppy ? floppyStrs : diskStrs, disk.name, false);
  }
  for (const diskFile of config.diskFiles) {
    addDisk(diskStrs, diskFile.name, diskFile.isCDROM);
  }
  for (const spec of config.cdroms) {
    const isCDROM = diskStrs.length > 0;
    addDisk(diskStrs, spec.name, isCDROM);
  }
  addDisk(diskStrs, "/", true, false);
  let bootDevice = 1;
  if (config.cdroms.length + config.disks.length + config.diskFiles.length === 0) {
    bootDevice = 0;
  } else if (disks.length === 1 && disks[0].isFloppy) {
    bootDevice = 4;
  }
  const { machine } = config;
  const turbo = machine.emulatorSubtype === "NeXTstation Turbo Color";
  const replacements = {
    "MACHINE_TYPE": machine.gestaltID,
    "ROM_PATH": romFileName,
    "FLOPPIES": floppyStrs.join("\n"),
    "DISKS": diskStrs.join("\n"),
    "DEBUG_LOG": config.debugLog ?? false,
    "BOOT_DEVICE": bootDevice,
    "TURBO": turbo,
    "COLOR": turbo,
    "CPU_LEVEL": machine.cpu === "68040" ? 4 : 3,
    "CPU_FREQ": (
      // Technically the Turbo only had a 33 MHz 68040, but simulate it being
      // upgraded with a Nitro card to get a bit more pep.
      turbo ? 40 : 25
    ),
    "FPU_TYPE": machine.cpu === "68040" ? "68040" : "68882",
    "DSP_TYPE": 2,
    // DSP_TYPE_EMU
    "DSP_MEMORY_EXPANSION": machine.emulatorSubtype !== "NeXT Computer",
    "SCSI_CHIP": machine.emulatorSubtype !== "NeXT Computer",
    "RTC_CHIP": turbo,
    "NBIC": machine.emulatorSubtype === "NeXT Computer" || machine.emulatorSubtype === "NeXTcube"
  };
  const ramSize = config.ramSize ?? config.machine.ramSizes[0];
  const RAM_BANKS = {
    "128M": [32, 32, 32, 32],
    "64M": turbo ? [32, 32, 0, 0] : [16, 16, 16, 16],
    "32M": turbo ? [8, 8, 8, 8] : [16, 16, 0, 0],
    "16M": turbo ? [8, 8, 0, 0] : [16, 0, 0, 0]
  };
  const ramBankSizes = ramSize in RAM_BANKS ? RAM_BANKS[ramSize] : RAM_BANKS["128M"];
  ramBankSizes.forEach(
    (size, i) => replacements[`RAM_BANK_SIZE${i}`] = size
  );
  let configStr = new TextDecoder().decode(baseConfig);
  for (const [key, value] of Object.entries(replacements)) {
    const replacement = typeof value === "boolean" ? value ? "TRUE" : "FALSE" : value.toString();
    configStr = configStr.replaceAll(`{${key}}`, replacement);
  }
  return configStr;
}
const HAS_HOVER_EVENTS = "matchMedia" in window && window.matchMedia("(hover: hover)").matches;
function useDevicePixelRatio() {
  const dpr = window.devicePixelRatio;
  const [currentDpr, setCurrentDpr] = reactExports.useState(dpr);
  reactExports.useEffect(() => {
    const updateDpr = () => setCurrentDpr(window.devicePixelRatio);
    const mediaMatcher = window.matchMedia(
      `screen and (resolution: ${currentDpr}dppx)`
    );
    if (mediaMatcher.addEventListener) {
      mediaMatcher.addEventListener("change", updateDpr);
    } else {
      mediaMatcher.addListener(updateDpr);
    }
    return () => {
      if (mediaMatcher.removeEventListener) {
        mediaMatcher.removeEventListener("change", updateDpr);
      } else {
        mediaMatcher.removeListener(updateDpr);
      }
    };
  }, [currentDpr]);
  return currentDpr;
}
const defaultCDROMImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAALVBMVEUAAAD//////9rz8/Oy///n5+fa2v/a2trNzc2zs///h9qlpaWzhrRmZmazAIeaWgbrAAAAAXRSTlMAQObYZgAAARNJREFUeNqN09GOgzAMRNFCOrYpTf//c9ee9QgQK22Th0rcUwce8jiv2etxW12j11+G1fHBKzfNtWeGmb1bGGLMa19hyE7hBgws89SxooQmsLfQ/ykMFLDsFOpPtGB3TcCYDSABCrPuMdUljMJH1dwowRMkBies6gIbJKKWswOwBOy+gebWKWYgBU3Wfc59gVfdahPkL2iy18jdw7bePaF36LOin2jC6H2AoWcEvvUO/z2iJ9zeAY5ln9Xv78A6sMCjFuz0FSUcwLmveJZhJ8jKPgwvvLGWoBFQR/aPRG19VtbuFAaJ7AXUYdX9fYgEFMt1ggS7BLupUwS7hLrOMHWJEThOSBHql6snwav37eX99/r/ACfaFe9X9xynAAAAAElFTkSuQmCC";
const defaultCDROMNeXTImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAIc0lEQVR42sVXPYscuRbVX6hhwWAmMMKwgWETBWYyB0rmBygyL9lA2QQDy7tph9pkgs5usImZSJlZaHgocGKGCeoHGJqKBhaDGf2F++4tVbe6pqvc5Q/ekzk+o5qu6XPu0VWp1M8apFQTKZoPqw/27uEOHx4esG3bKJD53d0dyu9jjGZ03wdliRSq/9doqXWfP39O28fH3HUdtV1L9/e3ebNZMdaFGbf365xSotQm2mzu87v/vEuIrVutVppI6f+5cOIKP9JjZtUsmIWuLnMATQKAhoJvmBWBV+SFgedBoAnQEEZPMSJtbjc5xhuMzpmfqa9RxHgyJ6LmgR4w50zb7SYn9ITBEIIR4cyaudmZEOzF+0G8R81sCISROVrCCAykm5uI9Xt/8iAiyxUX5XmzvswJLEUWEqE3UE14zTxOAJ4kUMUbCjuOjgG0Xq8zLyv7E5Wr5uGB+qrfr1c5BUcJHItnA2AJj03UBPwogZH4AjuIZ06WQnIEjBACXd9co1LU/GjVG0Z8fNzm7epqLz6x+D6BAQiDibqMTvSAlspX8YxjE0CcRKTvNbGilf5C1H359LFrg6eWxQsfJlCXkR31wskeGMTDTnR0VXzL4ltPIECg3//9e7dSK/091Y8ivgPfC+92JsAdmziRAJxKYBAfWleZDYTOEwRP3vvIkpYnIWtelk0XgAaIiQGux0QvLO+BmsC48smL8IJOAD08eHLXDheZICLLyLRe9QYyQ6pfkmDAQRLjZVQbebIHdG+g7j6WuS6fJ5VnhmqC2TtHb1Zv7Mmm7bfKv953GQOLD1RT8KMkJIECW5MQA/M9UA3grvL2eO3vRGeonAMBG3r79m3+6nNCHlKyzxMGosAGECgL1yQYNYn0NAkwIxO1B06v/Vr5wjiIxxz27IIjd+Fwrvpa9vrH9TpTQJIECtck8nFPfLUXxj3A8wnxUMVPVl7+IaFwP7fOkpyfJs82Xz596kS0CBamgfMukemeqCYkAb6GCMyhMDLHwiGW382s+ePKU2DGypICeLq4uMDJtf+4vs2dCIVqYpxEXVYdjpOIyEYwUOzFRuZpYAwMnF7zOcxUvrJno69fvx73Qtu27nH7mDtggQXVBISayCiJMPQDUEIBssDAiMsgRhIMlQfCLkxWPuQdkEC4C2ScIWOM2xvoz/ObTe48EptgCBcTJxIpKSAeCYQQyHtPzruePQDh02RSJGzxScWxih0YujG74OnZb7+l4ZSsmq2cda7WbCBQD6icoXIem2GEXnyK1QAGJG00NaqhZ89UeqFeBPVChefqefz111878EAYx4bFRK14rXQRXeGFWzaQgF6+fJmVjEjR9G9SPowhwgeeSqb0QxyJD3xNNSL8WVKr6besy8tL8GLi0ECKIvy44kV0RVtZiuSUM0reYbe897dOhAMVZrFlXkzMJJMOlw4iac3iFYs/Ma6urgDZbDxMLuGTSgtD4T1gz2JAOWWUvHB/+vipSyKYkfyIx6m4aiYFBtYqOu+p4eovPXT9+def3eFuFRKOKuzar7P2ls7Pz1E93D3gx/fvu9ayICcJFK7zQw517pHiQQJGm37Nq4Xjb/w7Pmn8Ii4FZtizq8yobHYG2n/aeH+7yWkQGB1QYvHT84oI40ZsdEN9wy4cm+0GUmpHfSDibAsDh8IJJlkSeP78eVT/tMWAiIwWaDH7kYGyfF6oxQa2my20XTXAKOJiWMTGiQEV+x74yKdPERWLuMqmzrHMK/vxQ8tYUyJdOOTg2HXd2ACLMxHGnMZsC9ceuIt3fQ/0Ys2hSCCvrTTlHjJHDYQGRtdLD+jDa1GVQaoOqlxgrZV7+5+NMWQQeow+M57vzWlr6YUkvvqwsimmWlkDjLAXeThkHjSQa1wRHmr1ZO7kpePNGzsl9vAaD58p780LCzQCNd6Wn2MxUzjItWJwmDdGCuaMijGazf0mRxEu0JUnDTRioHzJwTIqc0S6kpeOsYEomDJlrKkGBmjnejYBSKMfGKqBAU1J3MhtzWazyevLVUYdKAziw4wBYAOggLTS4yVkTRWmDd3EGyzzctoVkjOXcNd2Y+PCwfc/NwGER6nock14Pz87O8v7Z867d+/SLZ+Fgq7iQzNtQMR75Qs3wIZx4qSJFLEc1trUkuw2ucskTZtSOvq8CGo8kAJPDQDDkxYOzKHyDo2z4yc+IjpGLxwG8TCTgIiGJpDXgYDh+x1JhHwfHCJpCIPwYkIJh8HMnmFnpiwfo5wahnv1SvmJhptdQrrR45gbQwhFkDVGrp2ENZZcQDKAIujk5xvr+gbX3o+XjxhgRFowylYapo052Upt3wtL/5aBSA0b1s6f/rxhk9pQM/G8oQWjCtU4aSDYRN/6tyzEb75nODDqWQPW2bqbKHOcgJlL4NiAMW52SWgPZOH4HnWwBJtxMuX6uUI1GhNirl5fZSi70PIEXDt5vbyBZoKQyYeWPLTkQiIHiWyIk/doCIzJQsl/zUkDALLLzBgwOH3dp8nr5c0zE2BHELpiIlQTU/cYwDkDAnXSwPX1NYKfMxAXJ+AcTi4f4wNZG8TETAKzu1NcYkDQ/OuPP9KkARtnEmgXN6Q2rjfhQjuTQCQdBhPWlHfsunQWGVArtdKTlf5KAs4G2UqX7iizCZhdAsbQL+qXropfaqCOb0rAWSRt7PSDy+OxgdkEqviFS2i5gWBnmtW3jK4AOkLI0ry7XUg+szgB2evP1TlOavtRA9a5aQPQMrqCkXgG89Q9fjoBhnHMzfcaiAeRuaOqXVzgdAIdORdmH1xGu0UJvFKjc1lcamBx4832hv/2o4TW5uQ9SwxEhvtRAy/PXualYs7OVD5TKg8HSc+IC77b1SaeNkEnUf+AG12XOalGlZcMWoDDfd0NoCdY9BD7L6RksZBVcSCPAAAAAElFTkSuQmCC";
function MacCDROMs({
  onRun,
  appearance,
  platform
}) {
  const [expanded, setExpanded] = reactExports.useState(false);
  const toggleExpanded = () => setExpanded((value) => !value);
  const className = classNames("Mac-CDROMs", `Mac-CDROMs-${appearance}`, {
    "Mac-CDROMs-Expanded": expanded
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Mac-CDROMs-Title", onClick: toggleExpanded, children: "CD-ROMs" }),
    expanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MacCDROMsContents,
      {
        onRun: (cdrom) => {
          setExpanded(false);
          onRun(cdrom);
        },
        appearance,
        platform
      }
    )
  ] });
}
function MacCDROMsContents({
  onRun,
  appearance,
  platform = "Macintosh"
}) {
  const [search, setSearch] = reactExports.useState("");
  const cdroms = cdromLibrary;
  const folderPaths = Array.from(Object.keys(cdroms)).sort();
  const cdromsByCategory = {};
  let lastCategory;
  for (const folderPath of folderPaths) {
    if (search && !folderPath.toLowerCase().includes(search.toLowerCase())) {
      continue;
    }
    const cdrom = cdroms[folderPath];
    const { platform: cdromPlatform = "Macintosh" } = cdrom;
    if (cdromPlatform !== platform) {
      continue;
    }
    const category = folderPath.substring(
      0,
      folderPath.length - cdrom.name.length - 1
    );
    if (category !== lastCategory) {
      cdromsByCategory[category] = [];
      lastCategory = category;
    }
    cdromsByCategory[category].push(cdrom);
  }
  const sortedCategories = Object.keys(cdromsByCategory).sort((a, b) => {
    if (a === b) {
      return 0;
    }
    if (a.startsWith(b)) {
      return 1;
    }
    if (b.startsWith(a)) {
      return -1;
    }
    return a.localeCompare(b);
  });
  const sortedCdromsByCategory = Object.fromEntries(
    sortedCategories.map((category) => [category, cdromsByCategory[category]])
  );
  for (const [category, cdroms2] of Object.entries(sortedCdromsByCategory)) {
    cdroms2.sort(
      (a, b) => a.name.localeCompare(b.name, void 0, { numeric: true })
    );
    if (category === "System Software") {
      cdroms2.sort(systemCDROMCompare);
    }
  }
  const [customCDROMVisible, setCustomCDROMVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-CDROMs-Contents", children: [
    customCDROMVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MacCustomCDROM,
      {
        onRun,
        onDone: () => setCustomCDROMVisible(false),
        appearance
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-CDROMs-Header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Mac-CDROMs-Instructions", children: "Load CD-ROM images into the emulated Mac to access software that is too large to pre-install on Infinite HD." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          appearance,
          onClick: () => setCustomCDROMVisible(true),
          children: "Load from URL…"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          appearance,
          type: "search",
          placeholder: "Filter…",
          value: search,
          onChange: (e) => setSearch(e.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Mac-CDROMs-List", children: Object.entries(sortedCdromsByCategory).map(
      ([category, cdroms2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-CDROMs-Category", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: category }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Mac-CDROMs-Category-Contents", children: cdroms2.map((cdrom) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          MacCDROM,
          {
            cdrom,
            onRun: () => {
              onRun(cdrom);
            }
          },
          cdrom.name
        )) })
      ] }, category)
    ) })
  ] });
}
function MacCustomCDROM({
  onRun,
  onDone,
  appearance
}) {
  var _a;
  const inputRef = reactExports.useRef(null);
  const [url, setUrl] = reactExports.useState("");
  const handleLoad = async () => {
    try {
      const cdrom = await getCDROMInfo(url);
      history.replaceState(
        {},
        "",
        location.pathname + "?cdrom_url=" + encodeURIComponent(url)
      );
      onRun(cdrom);
      onDone();
    } catch (err) {
      alert("Could not load CD-ROM: " + err.message);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      title: "Run Custom CD-ROM…",
      onDone: handleLoad,
      doneLabel: "Run",
      doneEnabled: url !== "" && ((_a = inputRef.current) == null ? void 0 : _a.validity.valid),
      onCancel: onDone,
      appearance,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Infinite Mac supports loading of CD-ROM images from URLs. Be aware of the following caveats:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "The CD-ROM image must be a raw .iso, .img, .toast or .bin file (i.e. not compressed, or a .dmg)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Only a subset of sites are supported (currently archive.org, macintoshgarden.org and macintoshrepository.org). If there is another site that you wish to be supported, please contact the maintainer. Be aware that the HTTP server that serves the image has to support",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests", children: "range requests" }),
            " ",
            "so that the image can be streamed in."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            appearance,
            className: "Mac-Custom-CDROM-URL",
            type: "url",
            value: url,
            placeholder: "URL",
            size: 40,
            onChange: (e) => setUrl(e.target.value),
            onKeyDown: (e) => {
              var _a2;
              if (e.key === "Enter" && ((_a2 = inputRef.current) == null ? void 0 : _a2.validity.valid)) {
                handleLoad();
              }
            },
            ref: inputRef
          }
        ) })
      ]
    }
  );
}
function MacCDROM({ cdrom, onRun }) {
  const {
    name,
    coverImageHash,
    coverImageSize,
    coverImageType = "round"
  } = cdrom;
  let coverClassName, coverImageUrl, coverImageWidth, coverImageHeight;
  if (coverImageHash && coverImageSize) {
    coverImageUrl = `/Covers/${coverImageHash}.jpeg`;
    [coverImageWidth, coverImageHeight] = coverImageSize;
    coverClassName = classNames("Mac-CDROM-Cover", {
      "Mac-CDROM-Cover-Round": coverImageType === "round"
    });
  } else {
    const isNext = cdrom.platform === "NeXT";
    coverImageUrl = isNext ? defaultCDROMNeXTImage : defaultCDROMImage;
    coverImageWidth = isNext ? 48 : 32;
    coverImageHeight = isNext ? 48 : 32;
    coverClassName = classNames("Mac-CDROM-Cover", "Default");
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-CDROM", onClick: onRun, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        className: coverClassName,
        src: coverImageUrl,
        width: coverImageWidth,
        height: coverImageHeight,
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Mac-CDROM-Name", children: name })
  ] });
}
function MacSettings({
  emulatorType,
  emulatorSettings,
  appearance,
  setEmulatorSettings,
  onStorageReset,
  onStorageExport,
  onStorageImport,
  onSaveImage,
  hasSavedHD,
  onDone
}) {
  const [storagePersistenceStatus, setStoragePersistenceStatus] = reactExports.useState("unknown");
  const storagePersistenceStatusLabel = {
    "unknown": "Unknown",
    "persistent": "Persistent",
    "transient": "Transient",
    "error": /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#ff9999" }, children: "error" })
  }[storagePersistenceStatus];
  const handlePersistencePromise = reactExports.useCallback((p) => {
    p.then(
      (persistent) => setStoragePersistenceStatus(persistent ? "persistent" : "transient")
    ).catch((e) => {
      console.error("Could not use storage persistence API", e);
      setStoragePersistenceStatus("error");
    });
  }, []);
  reactExports.useEffect(() => {
    handlePersistencePromise(navigator.storage.persisted());
  }, [handlePersistencePromise]);
  const handleRequestPersistence = reactExports.useCallback(() => {
    handlePersistencePromise(navigator.storage.persist());
  }, [handlePersistencePromise]);
  const [storageResetVisible, setStorageResetVisible] = reactExports.useState(false);
  const [storageExportVisible, setStorageExportVisible] = reactExports.useState(false);
  const [storageImportVisible, setStorageImportVisible] = reactExports.useState(false);
  const [saveImageVisible, setSaveImageVisible] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { title: "Settings", onDone, appearance, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          appearance,
          checked: emulatorSettings.swapControlAndCommand,
          onChange: () => setEmulatorSettings({
            ...emulatorSettings,
            swapControlAndCommand: !emulatorSettings.swapControlAndCommand
          })
        }
      ),
      "Swap Control and Command Keys",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Dialog-Description", children: "Makes it easier to use shortcuts like Command-W, Command-Q or Command-Shift-3 (which are otherwise handled by the host browser or OS)." })
    ] }),
    emulatorSupportsMouseDeltas(emulatorType) && !emulatorSettings.trackpadMode && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Checkbox,
        {
          appearance,
          checked: emulatorSettings.useMouseDeltas,
          onChange: () => setEmulatorSettings({
            ...emulatorSettings,
            useMouseDeltas: !emulatorSettings.useMouseDeltas
          })
        }
      ),
      "Use relative mouse movements",
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Dialog-Description", children: "Send relative mouse movements to the emulator instead of absolute positions. This can help with compatibility of games such as Apeiron." })
    ] }),
    emulatorSupportsSpeedSetting(emulatorType) && /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
      "Speed:",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          appearance,
          value: emulatorSettings.speed,
          onChange: (event) => setEmulatorSettings({
            ...emulatorSettings,
            speed: parseInt(
              event.target.value
            )
          }),
          children: Array.from(
            EMULATOR_SPEEDS.entries(),
            ([speed, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: speed, children: label }, `speed-${speed}`)
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Dialog-Description", children: "Very old software may be timing dependent and thus only work at 1x speeds." })
    ] }),
    hasSavedHD && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Saved HD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "MacSettings-Row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "MacSettings-Row-Label", children: "Contents:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            appearance,
            onClick: () => setStorageExportVisible(true),
            children: "Export…"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StorageConfirmDialog,
          {
            appearance,
            visible: storageExportVisible,
            setVisible: setStorageExportVisible,
            title: "Export Disk",
            body: "Exporting the contents of Saved HD requires that the Mac be shut down. The export will take a little while to generate, and will be downloaded as a .infinitemacdisk file. Are you sure you want to export?",
            onAccept: () => {
              onStorageExport();
              onDone();
            }
          }
        ),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            appearance,
            onClick: () => setStorageImportVisible(true),
            children: "Import…"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StorageConfirmDialog,
          {
            appearance,
            visible: storageImportVisible,
            setVisible: setStorageImportVisible,
            title: "Import Disk",
            body: "Importing a previously exported .infinitemacdisk file HD will overwrite the existing Saved HD contents and requires that the Mac be shut down. Are you sure you want to import?",
            onAccept: () => {
              onStorageImport();
              onDone();
            }
          }
        ),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            appearance,
            onClick: () => setStorageResetVisible(true),
            children: "Reset"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StorageConfirmDialog,
          {
            appearance,
            visible: storageResetVisible,
            setVisible: setStorageResetVisible,
            title: "Reset Disk",
            body: "Are you sure you want to reset the contents of Saved HD? The contents be removed and the Mac will be restarted.",
            onAccept: () => {
              onStorageReset();
              onDone();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Dialog-Description", children: "The contents of Saved HD as persisted across page loads and between emulator instances in this browser. You can import/export it to have backups and to move it from one browser to another." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "MacSettings-Row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "MacSettings-Row-Label" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            appearance,
            onClick: () => setSaveImageVisible(true),
            children: "Save Disk Image…"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          StorageConfirmDialog,
          {
            appearance,
            visible: saveImageVisible,
            setVisible: setSaveImageVisible,
            title: "Save Image",
            body: "Saving a disk image requires that the Mac be shut down. It will take a little while to generate, and will be downloaded as a .dsk or .hda file. Generate the disk image now?",
            onAccept: () => {
              onSaveImage();
              onDone();
            },
            otherLabel: "Save Device Image (.hda)",
            onOther: () => {
              onSaveImage(true);
              onDone();
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Dialog-Description", children: [
          "You can also save the contents of Saved HD as a",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".dsk" }),
          " or ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: ".hda" }),
          " file that can be loaded into other emulators."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "MacSettings-Row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "MacSettings-Row-Label", children: "Persistence:" }),
        storagePersistenceStatusLabel,
        storagePersistenceStatus !== "persistent" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              appearance,
              onClick: handleRequestPersistence,
              children: "Request Persistence"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Dialog-Description", children: [
          "Ensures that the browser will try to keep the Saved HD data even when running low on disk space (",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://web.dev/persistent-storage/",
              target: "_blank",
              children: "more info"
            }
          ),
          ")."
        ] })
      ] })
    ] })
  ] });
}
function StorageConfirmDialog({
  visible,
  setVisible,
  title,
  body,
  onAccept,
  onOther,
  otherLabel,
  appearance
}) {
  if (!visible) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      title,
      onDone: () => {
        setVisible(false);
        onAccept();
      },
      doneLabel: title,
      onOther,
      otherLabel,
      onCancel: () => setVisible(false),
      appearance,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxWidth: 400 }, children: body })
    }
  );
}
function dataFileName(spec) {
  return spec.name + ".data";
}
function dirtyChunksFileName(spec) {
  return spec.name + ".dirtychunks";
}
const deviceImageHeaderPath = "/Device%20Image%20Header%20(Apple%20SCSI%204.3%20Driver)-DqP3lu84.hda";
const BLOCK_SIZE = 512;
const APPLE_SCSI_43_DRIVER_PARTITION_INDEX = 2;
const APPLE_SCSI_43_DRIVER_PARTITION_OFFSET = (APPLE_SCSI_43_DRIVER_PARTITION_INDEX + 1) * BLOCK_SIZE;
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
  const partitionOffset = APPLE_SCSI_43_DRIVER_PARTITION_OFFSET;
  const hfsBlocks = hfsPartitionSize / BLOCK_SIZE;
  headerView.setInt32(partitionOffset + 12, hfsBlocks);
  headerView.setInt32(partitionOffset + 84, hfsBlocks);
  return header;
}
async function resetDiskSaver(disk) {
  const spec = (await disk.generatedSpec()).default;
  const opfsRoot = await navigator.storage.getDirectory();
  try {
    opfsRoot.removeEntry(dirtyChunksFileName(spec));
  } catch (err) {
    if (err instanceof DOMException && err.name === "NotFoundError") {
      return;
    }
    console.warn("Could not remove dirty chunks file", err);
  }
}
async function exportDiskSaver(disk) {
  const spec = (await disk.generatedSpec()).default;
  const opfsRoot = await navigator.storage.getDirectory();
  const dirtyChunksName = dirtyChunksFileName(spec);
  const dirtyChunksHandle = await opfsRoot.getFileHandle(dirtyChunksName, {
    create: true
  });
  const dataName = dataFileName(spec);
  const dataHandle = await opfsRoot.getFileHandle(dataName, { create: true });
  const zip = new JSZip();
  await zip.file(dirtyChunksName, dirtyChunksHandle.getFile());
  await zip.file(dataName, dataHandle.getFile());
  const zipBlob = await zip.generateAsync({
    compression: "DEFLATE",
    compressionOptions: { level: 1 },
    type: "blob"
  });
  FileSaver_minExports.saveAs(zipBlob, spec.name + ".infinitemacdisk");
}
async function importDiskSaver(disk) {
  const importFile = await pickDiskSaverFile();
  const spec = (await disk.generatedSpec()).default;
  const dirtyChunksName = dirtyChunksFileName(spec);
  const dataName = dataFileName(spec);
  const zip = await JSZip.loadAsync(importFile);
  const dirtyChunksZipFile = zip.file(dirtyChunksName);
  if (!dirtyChunksZipFile) {
    throw new Error("Could not find dirty chunks file in import");
  }
  const dataZipFile = zip.file(dataName);
  if (!dataZipFile) {
    throw new Error("Could not find data file in import");
  }
  const opfsRoot = await navigator.storage.getDirectory();
  const dirtyChunksHandle = await opfsRoot.getFileHandle(dirtyChunksName, {
    create: true
  });
  const dirtyChunksWritable = await dirtyChunksHandle.createWritable();
  await dirtyChunksWritable.write(await dirtyChunksZipFile.async("blob"));
  await dirtyChunksWritable.close();
  const dataHandle = await opfsRoot.getFileHandle(dataName, { create: true });
  const dataWritable = await dataHandle.createWritable();
  await dataWritable.write(await dataZipFile.async("blob"));
  await dataWritable.close();
}
function pickDiskSaverFile() {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".infinitemacdisk";
    input.onchange = () => {
      if (input.files) {
        resolve(input.files[0]);
      }
      input.remove();
    };
    input.click();
  });
}
async function saveDiskSaverImage(disk, deviceImage) {
  const spec = (await disk.generatedSpec()).default;
  const opfsRoot = await navigator.storage.getDirectory();
  const dirtyChunksName = dirtyChunksFileName(spec);
  const dirtyChunksHandle = await opfsRoot.getFileHandle(dirtyChunksName, {
    create: true
  });
  const dirtyChunksFile = await dirtyChunksHandle.getFile();
  const dirtyChunksArray = new Uint8Array(
    await dirtyChunksFile.arrayBuffer()
  );
  const dataName = dataFileName(spec);
  const dataHandle = await opfsRoot.getFileHandle(dataName, { create: true });
  const dataFile = await dataHandle.getFile();
  const dataArray = new Uint8Array(await dataFile.arrayBuffer());
  const image = new Uint8Array(spec.totalSize);
  image.set(dataArray);
  const chunkedSpec = {
    ...spec,
    baseUrl: "/Disk"
  };
  for (let chunkIndex = 0; chunkIndex < spec.chunks.length; chunkIndex++) {
    const chunkHash = spec.chunks[chunkIndex];
    if (!chunkHash) {
      continue;
    }
    const chunkByte = chunkIndex >> 3;
    const chunkBit = 1 << (chunkIndex & 7);
    if (dirtyChunksArray[chunkByte] & chunkBit) {
      continue;
    }
    const chunkUrl = generateChunkUrl(chunkedSpec, chunkIndex);
    const chunk = await (await fetch(chunkUrl)).arrayBuffer();
    image.set(new Uint8Array(chunk), chunkIndex * spec.chunkSize);
  }
  if (deviceImage) {
    const baseDeviceImageHeader = await (await fetch(deviceImageHeaderPath)).arrayBuffer();
    const deviceImageHeader = generateDeviceImageHeader(
      baseDeviceImageHeader,
      spec.totalSize
    );
    FileSaver_minExports.saveAs(new Blob([deviceImageHeader, image]), spec.name + ".hda");
    return;
  }
  FileSaver_minExports.saveAs(new Blob([image]), spec.name + ".dsk");
}
function Mac({
  disks,
  includeInfiniteHD,
  includeSavedHD,
  diskFiles,
  cdroms,
  initialErrorText,
  machine,
  ramSize,
  screenSize: screenSizeProp,
  ethernetProvider,
  customDate,
  debugFallback,
  debugAudio,
  debugPaused,
  debugLog,
  debugTrackpad,
  onDone
}) {
  var _a;
  const screenRef = reactExports.useRef(null);
  const [emulatorLoaded, setEmulatorLoaded] = reactExports.useState(false);
  const [scale, setScale] = reactExports.useState(void 0);
  const [fullscreen, setFullscreen] = reactExports.useState(false);
  const [emulatorLoadingProgress, setEmulatorLoadingProgress] = reactExports.useState([
    0,
    0
  ]);
  const [emulatorCDROMLoadingProgress, setEmulatorCDROMLoadingProgress] = reactExports.useState(1);
  const [emulatorLoadingDiskChunk, setEmulatorLoadingDiskChunk] = reactExports.useState(false);
  const [emulatorErrorText, setEmulatorErrorText] = reactExports.useState(initialErrorText);
  const [ethernetPeers, setEthernetPeers] = reactExports.useState([]);
  const finishLoadingDiskChunkTimeoutRef = reactExports.useRef(0);
  const emulatorRef = reactExports.useRef();
  const ethernetProviderRef = reactExports.useRef();
  const onEmulatorSettingsChange = reactExports.useCallback(() => {
    var _a2;
    (_a2 = emulatorRef.current) == null ? void 0 : _a2.refreshSettings();
  }, []);
  const [emulatorSettings, setEmulatorSettings] = usePersistentState(
    DEFAULT_EMULATOR_SETTINGS,
    "emulator-settings",
    onEmulatorSettingsChange
  );
  const emulatorSettingsRef = reactExports.useRef(emulatorSettings);
  emulatorSettingsRef.current = emulatorSettings;
  const initialScreenSize = machine.fixedScreenSize ?? (typeof screenSizeProp === "object" ? screenSizeProp : SCREEN_SIZES[screenSizeProp]);
  const { width: initialScreenWidth, height: initialScreenHeight } = initialScreenSize;
  const [screenSize, setScreenSize] = reactExports.useState(initialScreenSize);
  const { width: screenWidth, height: screenHeight } = screenSize;
  const hasSavedHD = includeSavedHD && canSaveDisks();
  reactExports.useEffect(() => {
    var _a2, _b, _c;
    const emulatorDisks = [...disks];
    const delayedDisks = [];
    if (includeInfiniteHD) {
      let infiniteHd;
      if (machine.platform === "NeXT") {
        infiniteHd = INFINITE_HD_NEXT;
      } else if (((_a2 = disks[0]) == null ? void 0 : _a2.infiniteHdSubset) === "mfs" || machine.mfsOnly) {
        infiniteHd = INFINITE_HD_MFS;
      } else if (((_b = disks[0]) == null ? void 0 : _b.infiniteHdSubset) === "system6") {
        infiniteHd = INFINITE_HD6;
      } else {
        infiniteHd = INFINITE_HD;
      }
      if ((_c = disks[0]) == null ? void 0 : _c.delayAdditionalDiskMount) {
        delayedDisks.push(infiniteHd);
      } else {
        emulatorDisks.push(infiniteHd);
      }
    }
    if (hasSavedHD) {
      emulatorDisks.push(SAVED_HD);
    }
    const useSharedMemory = typeof SharedArrayBuffer !== "undefined" && !debugFallback;
    const emulator = new Emulator(
      {
        machine,
        ramSize,
        useSharedMemory,
        screenWidth: initialScreenWidth,
        screenHeight: initialScreenHeight,
        screenCanvas: screenRef.current,
        disks: emulatorDisks,
        diskFiles: diskFiles.map((df) => ({
          name: df.file.name,
          url: URL.createObjectURL(df.file),
          size: df.file.size,
          isCDROM: df.treatAsCDROM
        })),
        delayedDisks,
        cdroms,
        ethernetProvider,
        customDate,
        debugAudio,
        debugLog,
        debugTrackpad
      },
      {
        emulatorDidExit(emulator2) {
          onDone();
        },
        emulatorDidChangeScreenSize(width, height) {
          setScreenSize({ width, height });
        },
        emulatorDidFinishLoading(emulator2) {
          setEmulatorLoaded(true);
          emulator2.refreshSettings();
        },
        emulatorDidMakeLoadingProgress(emulator2, total, left) {
          setEmulatorLoadingProgress([total, left]);
        },
        emulatorDidStartToLoadDiskChunk(emulator2) {
          setEmulatorLoadingDiskChunk(true);
          clearTimeout(finishLoadingDiskChunkTimeoutRef.current);
        },
        emulatorDidFinishLoadingDiskChunk(emulator2) {
          window.clearTimeout(
            finishLoadingDiskChunkTimeoutRef.current
          );
          finishLoadingDiskChunkTimeoutRef.current = window.setTimeout(() => {
            setEmulatorLoadingDiskChunk(false);
          }, 200);
        },
        emulatorEthernetPeersDidChange(emulator2, peers) {
          if (ethernetProvider) {
            setEthernetPeers(peers);
          }
        },
        emulatorDidRunOutOfMemory(emulator2) {
          increment("emulator_error:out_of_memory");
          setEmulatorErrorText(
            "The emulator ran out of memory.\n\nIf you are running it in a mobile app's in-app browser, try switching to the native browser (Safari or Chrome) on your device."
          );
        },
        emulatorDidHaveError(emulator2, error, errorRaw) {
          if (error.includes("load") && error.includes("/CD-ROM")) {
            incrementError(
              "emulator_error:cdrom_chunk_load",
              errorRaw
            );
          } else if (error.includes("saved disk")) {
            if (error.includes("missing the necessary APIs")) {
              incrementError(
                "emulator_error:saved_disk_unsupported",
                errorRaw
              );
            } else {
              incrementError(
                "emulator_error:saved_disk",
                errorRaw
              );
            }
          } else {
            incrementError("emulator_error:other", errorRaw);
          }
          setEmulatorErrorText(
            `The emulator encountered an error:

${error}`
          );
        },
        emulatorSettings(emulator2) {
          return emulatorSettingsRef.current;
        },
        emulatorDidMakeCDROMLoadingProgress(emulator2, cdrom, loadedFraction) {
          setEmulatorCDROMLoadingProgress(loadedFraction);
        }
      }
    );
    emulatorRef.current = emulator;
    ethernetProviderRef.current = ethernetProvider;
    if (!debugPaused) {
      emulator.start();
    }
    const startVarz = {
      "emulator_starts": 1,
      "emulator_ethernet": ethernetProvider ? 1 : 0,
      [`emulator_type:${machine.emulatorType}`]: 1,
      "emulator_shared_memory": useSharedMemory ? 1 : 0
    };
    if (disks.length === 1) {
      const disk = disks[0];
      startVarz[`emulator_disk:${disk.displayName}${disk.displaySubtitle ? "-" + disk.displaySubtitle : ""}`] = 1;
    }
    incrementMulti(startVarz);
    return () => {
      var _a3;
      emulator.stop();
      emulatorRef.current = void 0;
      (_a3 = ethernetProvider == null ? void 0 : ethernetProvider.close) == null ? void 0 : _a3.call(ethernetProvider);
    };
  }, [
    disks,
    diskFiles,
    includeInfiniteHD,
    cdroms,
    machine,
    ethernetProvider,
    initialScreenWidth,
    initialScreenHeight,
    customDate,
    debugFallback,
    debugAudio,
    debugPaused,
    debugLog,
    debugTrackpad,
    hasSavedHD,
    ramSize,
    onDone
  ]);
  const { appearance = "Classic" } = disks[0] ?? {};
  const handleFullScreenClick = () => {
    var _a2, _b, _c, _d;
    ((_b = (_a2 = document.body).requestFullscreen) == null ? void 0 : _b.call(_a2)) || ((_d = (_c = document.body).webkitRequestFullscreen) == null ? void 0 : _d.call(_c));
  };
  const handleFullScreenChange = reactExports.useCallback(() => {
    var _a2, _b;
    const isFullScreen = Boolean(
      document.fullscreenElement ?? document.webkitFullscreenElement
    );
    setFullscreen(isFullScreen);
    if (isFullScreen) {
      (_b = (_a2 = navigator.keyboard) == null ? void 0 : _a2.lock) == null ? void 0 : _b.call(_a2);
    }
    document.body.classList.toggle("fullscreen", isFullScreen);
    if (isFullScreen && screenSizeProp !== "fullscreen") {
      const heightScale = window.screen.availHeight / screenRef.current.height;
      const widthScale = window.screen.availWidth / screenRef.current.width;
      setScale(Math.min(heightScale, widthScale));
    } else {
      setScale(void 0);
    }
  }, [screenSizeProp]);
  reactExports.useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener(
      "webkitfullscreenchange",
      handleFullScreenChange
    );
    return () => {
      document.removeEventListener(
        "fullscreenchange",
        handleFullScreenChange
      );
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullScreenChange
      );
    };
  }, [handleFullScreenChange]);
  const [settingsVisible, setSettingsVisible] = reactExports.useState(false);
  const handleSettingsClick = () => {
    setSettingsVisible(true);
  };
  const keyboardInputRef = reactExports.useRef(null);
  const handleKeyboardClick = () => {
    const input = keyboardInputRef.current;
    if (!input) {
      return;
    }
    input.style.visibility = "visible";
    input.focus();
  };
  const handleStartClick = () => {
    var _a2;
    (_a2 = emulatorRef.current) == null ? void 0 : _a2.start();
  };
  let progress;
  if (!emulatorLoaded) {
    const [total, left] = emulatorLoadingProgress;
    if (total === 0 && left === 0 && debugPaused) {
      progress = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Mac-Loading", children: "Waiting for manual start…" });
    } else {
      progress = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-Loading", children: [
        "Loading data files…",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "Mac-Loading-Fraction", children: [
          "(",
          total - left,
          "/",
          total,
          ")"
        ] })
      ] });
    }
  }
  if (emulatorCDROMLoadingProgress < 1) {
    progress = /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: classNames("Mac-Loading", {
          "Mac-Loading-Non-Modal": emulatorLoaded
        }),
        children: [
          "Loading CD-ROM…",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "Mac-Loading-Fraction", children: [
            (emulatorCDROMLoadingProgress * 100).toFixed(0),
            "%"
          ] })
        ]
      }
    );
  }
  function handleDragStart(event) {
    event.preventDefault();
  }
  const [dragCount, setDragCount] = reactExports.useState(0);
  function handleDragOver(event) {
    event.preventDefault();
  }
  function handleDragEnter(event) {
    setDragCount((value) => value + 1);
  }
  function handleDragLeave(event) {
    setDragCount((value) => value - 1);
  }
  function handleDrop(event) {
    var _a2;
    event.preventDefault();
    setDragCount(0);
    const emulator = emulatorRef.current;
    if (!emulator) {
      return;
    }
    const files = [];
    if (event.dataTransfer.items) {
      for (const item of event.dataTransfer.items) {
        const entry = (_a2 = item.webkitGetAsEntry) == null ? void 0 : _a2.call(item);
        if (entry == null ? void 0 : entry.isDirectory) {
          uploadDirectory(
            emulator,
            entry
          );
          return;
        }
        if (item.kind === "file") {
          files.push(item.getAsFile());
        } else if (item.kind === "string" && item.type === "text/uri-list") {
          item.getAsString(async (url) => {
            var _a3;
            try {
              const cdrom = await getCDROMInfo(url);
              increment("emulator_cdrom:drag");
              (_a3 = emulatorRef.current) == null ? void 0 : _a3.loadCDROM(cdrom);
            } catch (e) {
              console.log("error fetching cdrom", e);
              return;
            }
          });
        }
      }
    } else if (event.dataTransfer.files) {
      for (const file of event.dataTransfer.files) {
        files.push(file);
      }
    }
    uploadFiles(emulator, files);
  }
  function handleLoadFileClick() {
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = true;
    input.onchange = () => {
      setDragCount(1);
      if (input.files && emulatorRef.current) {
        uploadFiles(emulatorRef.current, Array.from(input.files));
      }
      input.remove();
      setTimeout(() => setDragCount(0), 500);
    };
    input.click();
  }
  function loadCDROM(cdrom) {
    var _a2;
    incrementMulti({
      "emulator_cdroms": 1,
      [`emulator_cdrom:${cdrom.name}`]: 1
    });
    (_a2 = emulatorRef.current) == null ? void 0 : _a2.loadCDROM(cdrom);
  }
  const availableSpace = window.innerWidth - screenWidth;
  let bezelSize = "Large";
  if (availableSpace < SMALL_BEZEL_THRESHOLD) {
    bezelSize = "Small";
  } else if (availableSpace < MEDIUM_BEZEL_THRESHOLD) {
    bezelSize = "Medium";
  }
  const controls = [
    {
      label: "‹ Home",
      handler: onDone,
      alwaysVisible: true
    },
    { label: "Load File", handler: handleLoadFileClick },
    { label: "Full Screen", handler: handleFullScreenClick },
    { label: "Settings", handler: handleSettingsClick }
  ];
  if (USING_TOUCH_INPUT) {
    controls.push({ label: "Keyboard", handler: handleKeyboardClick });
    const alwaysUsingTrackpadMode = emulatorNeedsMouseDeltas(machine.emulatorType) || emulatorSettings.useMouseDeltas;
    controls.push({
      label: "Trackpad",
      handler: () => {
        setEmulatorSettings({
          ...emulatorSettings,
          trackpadMode: !emulatorSettings.trackpadMode
        });
      },
      selected: alwaysUsingTrackpadMode || emulatorSettings.trackpadMode
    });
  }
  if (debugPaused && !emulatorLoaded) {
    controls.splice(1, 0, {
      label: "Start",
      handler: handleStartClick,
      alwaysVisible: true
    });
  }
  const devicePixelRatio = useDevicePixelRatio();
  const screenClassName = classNames("Mac-Screen", {
    "Mac-Screen-Smooth-Scaling": screenSizeProp === "auto" && (fullscreen || devicePixelRatio !== Math.floor(devicePixelRatio))
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      ScreenFrame,
      {
        className: "Mac",
        bezelStyle: machine.bezelStyle,
        viewTransitionName: disks.length ? viewTransitionNameForDisk(disks[0]) : void 0,
        bezelSize,
        width: screenWidth,
        height: screenHeight,
        scale,
        fullscreen: fullscreen || // These screen sizes always want fullscreen-like bezels
        screenSizeProp === "fullscreen" || screenSizeProp === "window",
        led: !emulatorLoaded && !debugPaused || emulatorLoadingDiskChunk ? "Loading" : "On",
        onDragStart: handleDragStart,
        onDragOver: handleDragOver,
        onDragEnter: handleDragEnter,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        controls,
        screen: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "canvas",
            {
              className: screenClassName,
              ref: screenRef,
              width: screenWidth,
              height: screenHeight,
              onContextMenu: (e) => e.preventDefault()
            }
          ),
          USING_TOUCH_INPUT && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              className: "Mac-Keyboard-Input",
              ref: keyboardInputRef
            }
          )
        ] }),
        children: [
          progress,
          dragCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: classNames(
                "Mac-Overlay",
                "Mac-Drag-Overlay",
                {
                  "Mac-Drag-Overlay-Downloads": emulatorSupportsDownloadsFolder(
                    machine.emulatorType
                  )
                }
              )
            }
          ),
          ethernetProviderRef.current && /* @__PURE__ */ jsxRuntimeExports.jsx(
            MacEthernetStatus,
            {
              provider: ethernetProviderRef.current,
              peers: ethernetPeers
            }
          ),
          settingsVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
            MacSettings,
            {
              emulatorType: machine.emulatorType,
              emulatorSettings,
              appearance,
              setEmulatorSettings,
              hasSavedHD,
              onStorageReset: () => {
                var _a2;
                increment("emulator_disk_saver_reset");
                (_a2 = emulatorRef.current) == null ? void 0 : _a2.restart(
                  () => resetDiskSaver(SAVED_HD)
                );
              },
              onStorageExport: () => {
                var _a2;
                (_a2 = emulatorRef.current) == null ? void 0 : _a2.restart(
                  () => exportDiskSaver(SAVED_HD)
                );
                increment("emulator_disk_saver_export");
              },
              onStorageImport: () => {
                var _a2;
                (_a2 = emulatorRef.current) == null ? void 0 : _a2.restart(
                  () => importDiskSaver(SAVED_HD)
                );
                increment("emulator_disk_saver_import");
              },
              onSaveImage: (deviceImage) => {
                var _a2;
                (_a2 = emulatorRef.current) == null ? void 0 : _a2.restart(
                  () => saveDiskSaverImage(SAVED_HD, deviceImage)
                );
                increment("emulator_disk_saver_save_image");
              },
              onDone: () => setSettingsVisible(false)
            }
          ),
          emulatorErrorText && /* @__PURE__ */ jsxRuntimeExports.jsx(
            MacError,
            {
              appearance,
              text: emulatorErrorText,
              onDone: () => setEmulatorErrorText("")
            }
          )
        ]
      }
    ),
    !fullscreen && ((_a = disks[0]) == null ? void 0 : _a.infiniteHdSubset) !== "mfs" && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MacCDROMs,
      {
        onRun: loadCDROM,
        appearance,
        platform: machine.platform
      }
    )
  ] });
}
function uploadDirectory(emulator, directoryEntry) {
  let inProgressCount = 1;
  const files = [];
  const names = [];
  const handleFile = (file, path) => {
    files.push(file);
    names.push(path.join("/"));
    checkDone();
  };
  const checkDone = () => {
    inProgressCount--;
    if (inProgressCount === 0) {
      uploadFiles(emulator, files, names);
    }
  };
  const readDirectory = (directoryEntry2, path) => {
    const directoryReader = directoryEntry2.createReader();
    directoryReader.readEntries((entries) => {
      inProgressCount--;
      entries.forEach((entry) => {
        inProgressCount++;
        if (entry.isDirectory) {
          readDirectory(entry, [
            ...path,
            entry.name
          ]);
          return;
        }
        const fileEntry = entry;
        fileEntry.file((file) => handleFile(file, [...path, entry.name]));
        inProgressCount++;
        directoryEntry2.getFile(
          `${entry.name}/..namedfork/rsrc`,
          {},
          (resourceEntry) => resourceEntry.file(
            (resourceFile) => (
              // Assume that the emulator is using the
              // Basilisk II/SheepShaver ExtFS convention of a
              // parallel .rsrc directory for resource forks.
              handleFile(resourceFile, [
                ...path,
                ".rsrc",
                entry.name
              ])
            ),
            checkDone
            // Ignore errors, not all files have resource forks
          ),
          checkDone
          // Ignore errors, not all files have resource forks
        );
      });
    });
  };
  readDirectory(directoryEntry, [directoryEntry.name]);
}
function uploadFiles(emulator, files, names = []) {
  let fileCount = 0;
  let diskImageCount = 0;
  for (const file of files) {
    if (isDiskImageFile(file.name)) {
      diskImageCount++;
    } else {
      fileCount++;
    }
  }
  const resourceForkCount = names.filter(
    (name) => name.includes("/.rsrc/")
  ).length;
  emulator.uploadFiles(files, names);
  incrementMulti({
    "emulator_uploads": files.length,
    "emulator_uploads:files": fileCount,
    "emulator_uploads:disks": diskImageCount,
    "emulator_uploads:resource_forks": resourceForkCount
  });
}
const SMALL_BEZEL_THRESHOLD = 80;
const MEDIUM_BEZEL_THRESHOLD = 168;
const SCREEN_SIZES = {
  "auto": (() => {
    const availableWidth = window.innerWidth - MEDIUM_BEZEL_THRESHOLD;
    const availableHeight = window.innerHeight - MEDIUM_BEZEL_THRESHOLD;
    for (const [width, height] of [
      [1600, 1200],
      [1280, 1024],
      [1152, 870],
      [1024, 768],
      [800, 600],
      [640, 480]
    ]) {
      if (width <= availableWidth && height <= availableHeight) {
        return { width, height };
      }
    }
    return { width: 640, height: 480 };
  })(),
  "window": { width: window.innerWidth, height: window.innerHeight },
  "fullscreen": {
    width: window.screen.width,
    height: window.screen.availHeight
  }
};
const USING_TOUCH_INPUT = "matchMedia" in window && !window.matchMedia("(hover: hover)").matches;
const DEFAULT_EMULATOR_SETTINGS = {
  swapControlAndCommand: false,
  speed: -2,
  useMouseDeltas: false,
  trackpadMode: false
};
function MacEthernetStatus({
  provider,
  peers
}) {
  let text = `Ethernet: ${provider.description()}`;
  const activePeerCount = peers.filter(
    (peer) => Date.now() - peer.lastPingTimeMs < 6e4
  ).length;
  if (activePeerCount) {
    text += ` (${activePeerCount} peer${activePeerCount === 1 ? "" : "s"})`;
  }
  const [expanded, setExpanded] = reactExports.useState(
    Boolean(new URLSearchParams(location.search).get("ethernet_status"))
  );
  let details;
  if (expanded) {
    let peerDetails;
    if (peers.length) {
      peerDetails = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-Ethernet-Status-Peers", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Peers:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: peers.map((peer) => {
          const ageMs = Date.now() - peer.lastPingTimeMs;
          let ageStr;
          if (ageMs > 3e4) {
            ageStr = ` ${(ageMs / 1e3).toFixed(0)}s ago`;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            peer.macAddress,
            " (RTT:",
            " ",
            peer.rttMs.toFixed(0),
            "ms",
            ageStr,
            ")"
          ] }, peer.macAddress);
        }) })
      ] });
    }
    details = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Mac-Ethernet-Status-Details", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "MAC Address:" }),
      " ",
      provider.macAddress(),
      peerDetails
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "Mac-Ethernet-Status",
      onClick: () => setExpanded(!expanded),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ScreenFrame-Bezel-Text", children: text }),
        details
      ]
    }
  );
}
function MacError({
  appearance,
  text,
  onDone
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Dialog,
    {
      appearance,
      title: "Emulator Error",
      onDone,
      doneLabel: "Bummer",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { whiteSpace: "pre-line" }, children: text })
    }
  );
}
function RunDefMac({ runDef, onDone }) {
  const [cdroms, setCDROMs] = reactExports.useState(
    runDef.cdromURLs.length ? void 0 : []
  );
  const [cdromErrorText, setCDROMErrorText] = reactExports.useState(
    void 0
  );
  reactExports.useEffect(() => {
    if (runDef.cdromURLs.length) {
      Promise.all(runDef.cdromURLs.map(getCDROMInfo)).then(setCDROMs).catch((error) => {
        setCDROMErrorText(`Could not load the CD-ROM: ${error}`);
        setCDROMs([]);
      });
    }
  }, [runDef.cdromURLs]);
  runDef.disks.forEach((disk) => disk.generatedSpec());
  return cdroms ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Mac,
    {
      disks: runDef.disks,
      includeInfiniteHD: runDef.includeInfiniteHD,
      includeSavedHD: runDef.includeSavedHD,
      diskFiles: runDef.diskFiles,
      cdroms,
      initialErrorText: cdromErrorText,
      machine: runDef.machine,
      ramSize: runDef.ramSize,
      screenSize: runDef.screenSize,
      ethernetProvider: runDef.ethernetProvider,
      customDate: runDef.customDate,
      debugFallback: runDef.debugFallback,
      debugAudio: runDef.debugAudio,
      debugPaused: runDef.debugPaused,
      debugLog: runDef.debugLog,
      debugTrackpad: runDef.debugTrackpad,
      onDone
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { color: "#aaa" }, children: "Loading CD-ROM Metadata…" });
}
export {
  RunDefMac as default
};
