const __vite__fileDeps=["RunDefMac-B1h_7upi.js","RunDefMac-DTQZcgiA.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
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
var _zoneName, _macAddress, _webSocket, _delegate, _state, _bufferedMessages, _reconnectTimeout, _connect, connect_fn, _reconnect, reconnect_fn, _send, send_fn, _handleOpen, _handleClose, _handleError, _handleMessage, _broadcastChannel, _macAddress2, _delegate2, _handleMessage2;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b)
    for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b)
      J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$1:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2)
    throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b)
      J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b))
          a[d] = b, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback)
        k2(t2);
      else if (b.startTime <= a)
        k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else
        break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b = h(t2);
        null !== b && K2(H2, b.startTime - a);
      }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++)
    da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b;
      case 4:
        return false === b;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta$1(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1])
    qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      La = b && b[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b)
      if (b = function() {
        throw Error();
      }, Object.defineProperty(b.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b);
      } else {
        try {
          b.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
      case Ha:
        b = a._payload;
        a = a._init;
        try {
          return Qa(a(b));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b)
        return b.displayName || b.name || null;
      if ("string" === typeof b)
        return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta$1(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value))
      return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++)
      b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b)
        throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b)
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children)
        throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style)
      throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib)
    return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b];
  a:
    switch (b) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b)
      return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b)
      throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b)
      return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b)
    for (a = a.entanglements, b &= d; 0 < b; )
      c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc(h, b);
    } else
      k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++)
    b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e)
      hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b = Vb(a), null === b)
      a = null;
    else if (c = b.tag, 13 === c) {
      a = Wb(b);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b.stateNode.current.memoizedState.isDehydrated)
        return 3 === b.tag ? b.stateNode.containerInfo : null;
      a = null;
    } else
      b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b)
      return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b))
    return a;
}
function ve(a, b) {
  if ("change" === a)
    return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b) {
  if ("click" === a)
    return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a)
    return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b)
    return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b)
        return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b.contentWindow;
    else
      break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c)
        c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++)
      a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b = We[a], c;
  for (c in b)
    if (b.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b)
      break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b)
        break;
      if ("/$" === b)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b)
          return a;
        b--;
      } else
        "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b)
    return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b))
      throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a))
          throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a))
      throw Hg(), Error(p(418));
    for (; b; )
      Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b = Mg.current;
  E(Mg);
  a._currentValue = b;
}
function Sg(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, Xg(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, Xg(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return Zg(a, c);
}
function eh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else
      e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function gh(a, b, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = dh(a, f2, e);
  null !== b && (mh(b, a, e, d), eh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = dh(a, e, d);
  null !== b && (mh(b, a, d, c), eh(b, a, d));
} };
function oh(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = nh;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function qh(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && nh.enqueueReplaceState(b, b.state, null);
}
function rh(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2)
        return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        b2 === jh && (b2 = e.refs = {});
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function th(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function uh(a) {
  var b = a._init;
  return b(a._payload);
}
function vh(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; )
      null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = wh(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a)
      return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag)
      return b2 = xh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b2.type))
      return d2 = e(b2, c2.props), d2.ref = sh(a2, b2, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation)
      return b2 = zh(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag)
      return b2 = Ah(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2)
      return b2 = xh("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = yh(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = sh(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = zh(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2))
        return b2 = Ah(b2, a2.mode, c2, null), b2.return = a2, b2;
      th(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      th(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p(174));
  return a;
}
function Ih(a, b) {
  G(Gh, b);
  G(Fh, a);
  G(Eh, Dh);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(Eh);
  G(Eh, b);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b = Hh(Eh.current);
  var c = lb(b, a.type);
  b !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128))
        return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b) {
  if (null === b)
    return false;
  for (var c = 0; c < b.length && c < a.length; c++)
    if (!He(a[c], b[c]))
      return false;
  return true;
}
function Xh(a, b, c, d, e, f2) {
  Rh = f2;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b)
    throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b = null === P ? N.memoizedState : P.next;
  if (null !== b)
    P = b, O = a;
  else {
    if (null === a)
      throw Error(p(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function fi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (Ug = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function gi(a) {
  var b = di(), c = b.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (Ug = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b) {
  var c = N, d = di(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b, e);
  }
  return e;
}
function ni(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function mi(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  oi(b) && pi(a);
}
function ki(a, b, c) {
  return c(function() {
    oi(b) && pi(a);
  });
}
function oi(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b = Zg(a, 1);
  null !== b && mh(b, a, 1, -1);
}
function qi(a) {
  var b = ci();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b.memoizedState, a];
}
function li(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = N.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b, c, void 0, void 0 === d ? null : d);
}
function ui(a, b, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b, c, f2, d);
}
function vi(a, b) {
  return ti(8390656, 8, a, b);
}
function ji(a, b) {
  return ui(2048, 8, a, b);
}
function wi(a, b) {
  return ui(4, 2, a, b);
}
function xi(a, b) {
  return ui(4, 4, a, b);
}
function yi(a, b) {
  if ("function" === typeof b)
    return a = a(), b(a), function() {
      b(null);
    };
  if (null !== b && void 0 !== b)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function zi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b, a), c);
}
function Ai() {
}
function Bi(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  c.memoizedState = [a, b];
  return a;
}
function Ci(a, b) {
  var c = di();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Wh(b, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function Di(a, b, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b;
}
function Ei(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, c);
  else if (c = Yg(a, b, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b, d);
  }
}
function ri(a, b, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2))
      try {
        var g = b.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b.interleaved;
          null === k2 ? (e.next = e, Xg(b)) : (e.next = k2.next, k2.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b, d));
  }
}
function Hi(a) {
  var b = a.alternate;
  return a === N || null !== b && b === N;
}
function Ii(a, b) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Ji(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b) {
  ci().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ti(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ti(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = ci();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = ci();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = ci();
  a = { current: a };
  return b.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Uh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else
    c = Vh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b = di();
    return Di(b, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b = di().memoizedState;
    return [a, b];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b = di();
  return null === O ? b.memoizedState = a : Di(b, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b = di().memoizedState;
  return [a, b];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Li(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Mi(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b);
  };
  return c;
}
function Ri(a, b, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else
    e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b, c), b.then(a, a));
}
function Vi(a) {
  do {
    var b;
    if (b = 13 === a.tag)
      b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ch(-1, 1), b.tag = 2, dh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b, c, d) {
  b.child = null === a ? Ch(b, null, c, d) : Bh(b, a.child, c, d);
}
function Zi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  Tg(b, e);
  d = Xh(a, b, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Yi(a, b, d, e);
  return b.child;
}
function aj(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b.tag = 15, b.type = f2, cj(a, b, f2, d, e);
    a = yh(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref)
      return $i(a, b, e);
  }
  b.flags |= 1;
  a = wh(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function cj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref)
      if (Ug = false, b.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b.lanes = a.lanes, $i(a, b, e);
  }
  return dj(a, b, c, d, e);
}
function ej(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b.mode & 1))
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(fj, gj), gj |= a, null;
      b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b, e, c);
  return b.child;
}
function hj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b.flags |= 512, b.flags |= 2097152;
}
function dj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  Tg(b, e);
  c = Xh(a, b, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, $i(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Yi(a, b, c, e);
  return b.child;
}
function ij(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else
    f2 = false;
  Tg(b, e);
  if (null === b.stateNode)
    jj(a, b), ph(b, c, d), rh(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b, g, d, l2);
    $g = false;
    var r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b, c, m2, d), k2 = b.memoizedState), (h = $g || oh(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    bh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Lg(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b, g, d, k2);
    $g = false;
    r2 = b.memoizedState;
    g.state = r2;
    gh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b, c, y2, d), n2 = b.memoizedState), (l2 = $g || oh(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return kj(a, b, c, d, f2, e);
}
function kj(a, b, c, d, e, f2) {
  hj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g)
    return e && dg(b, c, false), $i(a, b, f2);
  d = b.stateNode;
  Xi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Bh(b, a.child, null, f2), b.child = Bh(b, null, h, f2)) : Yi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function lj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  Ih(a, b.containerInfo);
}
function mj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Yi(a, b, c, d);
  return b.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b, c) {
  var d = b.pendingProps, e = M.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = oj(c), b.memoizedState = nj, a) : rj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function rj(a, b) {
  b = qj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function tj(a, b, c, d) {
  null !== d && Jg(d);
  Bh(b, a.child, null, c);
  a = rj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function sj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256)
      return b.flags &= -257, d = Li(Error(p(422))), tj(a, b, g, d);
    if (null !== b.memoizedState)
      return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Bh(b, a.child, null, g);
    b.child.memoizedState = oj(g);
    b.memoizedState = nj;
    return f2;
  }
  if (0 === (b.mode & 1))
    return tj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Li(f2, d, void 0);
    return tj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b, g, d);
  }
  if ("$?" === e.data)
    return b.flags |= 128, b.child = a.child, b = vj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = rj(b, d.children);
  b.flags |= 4096;
  return b;
}
function wj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  Sg(a.return, b, c);
}
function xj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b);
          else if (19 === a.tag)
            wj(a, c, b);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b.mode & 1))
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        xj(b, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b, true, c, null, f2);
        break;
      case "together":
        xj(b, false, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function jj(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function $i(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  hh |= b.lanes;
  if (0 === (c & b.childLanes))
    return null;
  if (null !== a && b.child !== a.child)
    throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = wh(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function zj(a, b, c) {
  switch (b.tag) {
    case 3:
      lj(b);
      Ig();
      break;
    case 5:
      Kh(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      Ih(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes))
          return pj(a, b, c);
        G(M, M.current & 1);
        a = $i(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b.lanes = 0, ej(a, b, c);
  }
  return $i(a, b, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2)
      b.flags |= 4;
  }
};
Dj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Ej(a, b) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b; )
          null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Fj(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b);
      S(b);
      return null;
    case 5:
      Lh(b);
      var e = Hh(Gh.current);
      c = b.type;
      if (null !== a && null != b.stateNode)
        Cj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode)
            throw Error(p(166));
          S(b);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          Aj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta$1(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode)
        Dj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode)
          throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(M);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128))
          Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b;
          } else
            Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128))
        return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return Jh(), Bj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return Rg(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(M);
      f2 = b.memoizedState;
      if (null === f2)
        return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b.updateQueue = d, b.flags |= 4);
                b.subtreeFlags = 0;
                d = c;
                for (c = b.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b.flags |= 128, d = true, Ej(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (gj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Jj(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Lh(b), null;
    case 13:
      E(M);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate)
          throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b, d);
      }
    else
      c.current = null;
}
function Nj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Oj = false;
function Pj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; )
    if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a)
      a.return = b, V = a;
    else
      for (; null !== V; ) {
        b = V;
        try {
          var n2 = b.alternate;
          if (0 !== (b.flags & 1024))
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Lg(b.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b, b.return, F2);
        }
        a = b.sibling;
        if (null !== a) {
          a.return = b.return;
          V = a;
          break;
        }
        V = b.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Sj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Tj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Tj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b, c), a = a.sibling; null !== a; )
      Wj(a, b, c), a = a.sibling;
}
function Xj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b, c), a = a.sibling; null !== a; )
      Xj(a, b, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b, c) {
  for (c = c.child; null !== c; )
    ak(a, b, c), c = c.sibling;
}
function ak(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b, g) : 0 !== (f2 & 4) && Nj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b, c);
      break;
    case 1:
      if (!U && (Mj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b, h);
        }
      Zj(a, b, c);
      break;
    case 21:
      Zj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b, c), U = d) : Zj(a, b, c);
      break;
    default:
      Zj(a, b, c);
  }
}
function bk(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b.forEach(function(b2) {
      var d = ck.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function dk(a, b) {
  var c = b.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b, l2);
      }
    }
  if (b.subtreeFlags & 12854)
    for (b = b.child; null !== b; )
      ek(b, a), b = b.sibling;
}
function ek(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta$1(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b, a);
      fk(a);
      break;
    case 13:
      dk(b, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b, a), U = l2) : dk(b, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function ik(a, b, c) {
  V = a;
  jk(a);
}
function jk(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772))
          switch (b.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b.elementType === b.type ? c.memoizedProps : Lg(b.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b.updateQueue;
              null !== f2 && ih(b, f2, d);
              break;
            case 3:
              var g = b.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b.child)
                  switch (b.child.tag) {
                    case 5:
                      c = b.child.stateNode;
                      break;
                    case 1:
                      c = b.child.stateNode;
                  }
                ih(b, g, c);
              }
              break;
            case 5:
              var h = b.stateNode;
              if (null === c && b.flags & 4) {
                c = h;
                var k2 = b.memoizedProps;
                switch (b.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b.memoizedState) {
                var l2 = b.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b.flags & 512 && Sj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Rj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Sj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk$1 = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Hk(a, b) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b)
    b = Jk(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b)
      vk = null, Hj = B() + 500, Lk(a, b);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b = 0 : (R = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Ok(a, e)));
    if (1 === b)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b = Jk(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Ok(a, f2))), 1 === b))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b = gk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b) {
  var c = tk$1;
  a.current.memoizedState.isDehydrated && (Lk(a, b).flags |= 256);
  a = Jk(a, b);
  2 !== a && (b = uk, uk = c, null !== b && Gj(b));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c)
      c.return = b, b = c;
    else {
      if (b === a)
        break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a)
          return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Dk(a, b) {
  b &= ~sk;
  b &= ~rk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b = uc(a, 0);
  if (0 === (b & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b), Ek(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk$1 = null;
  if (null !== Wg) {
    for (b = 0; b < Wg.length; b++)
      if (c = Wg[b], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h, f2, b);
            y2.mode & 1 && Ti(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Ti(f2, l2, b);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h, f2, b);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk$1 ? tk$1 = [f2] : tk$1.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Oi(f2, k2, b);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Ri(f2, h, b);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b)
    vk = null, Lk(a, b);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b ? Tk(a) : Y = b;
  ok.current = null;
}
function Tk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Fj(c, b, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Qk(a, b, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b)
    for (d = a.onRecoverableError, c = 0; c < b.length; c++)
      e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b;
    }
  }
  return false;
}
function Yk(a, b, c) {
  b = Ki(c, b);
  b = Oi(a, b, 1);
  a = dh(a, b, 1);
  b = L();
  null !== a && (Ac(a, 1, b), Ek(a, b));
}
function W(a, b, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b; ) {
      if (3 === b.tag) {
        Yk(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b, a, 1);
          b = dh(b, a, 1);
          a = L();
          null !== b && (Ac(b, 1, a), Ek(b, a));
          break;
        }
      }
      b = b.return;
    }
}
function Ui(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b);
}
function Zk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b);
  null !== a && (Ac(a, b, c), Ek(a, c));
}
function vj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Zk(a, c);
}
function ck(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Zk(a, c);
}
var Wk;
Wk = function(a, b, c) {
  if (null !== a)
    if (a.memoizedProps !== b.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b.flags & 128))
        return Ug = false, zj(a, b, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      jj(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      Tg(b, c);
      e = Xh(null, b, d, a, e, c);
      var f2 = bi();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b), e.updater = nh, b.stateNode = e, e._reactInternals = b, rh(b, d, a, c), b = kj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Yi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        jj(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b = dj(null, b, d, a, c);
            break a;
          case 1:
            b = ij(null, b, d, a, c);
            break a;
          case 11:
            b = Zi(null, b, d, a, c);
            break a;
          case 14:
            b = aj(null, b, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), dj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), ij(a, b, d, e, c);
    case 3:
      a: {
        lj(b);
        if (null === a)
          throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        bh(a, b);
        gh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
            e = Ki(Error(p(423)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b);
            b = mj(a, b, d, c, e);
            break a;
          } else
            for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Ch(b, null, d, c), b.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = $i(a, b, c);
            break a;
          }
          Yi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Kh(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), hj(a, b), Yi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return pj(a, b, c);
    case 4:
      return Ih(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Bh(b, null, d, c) : Yi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), Zi(a, b, d, e, c);
    case 7:
      return Yi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Yi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b = $i(a, b, c);
              break a;
            }
          } else
            for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, Tg(b, c), e = Vg(e), d = d(e), b.flags |= 1, Yi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Lg(d, b.pendingProps), e = Lg(d.type, e), aj(a, b, d, e, c);
    case 15:
      return cj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Lg(d, e), jj(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, Tg(b, c), ph(b, d, e), rh(b, d, e, c), kj(null, b, d, true, a, c);
    case 19:
      return yj(a, b, c);
    case 22:
      return ej(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Gk(a, b) {
  return ac(a, b);
}
function al(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new al(a, b, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Ah(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function qj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function zh(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function bl(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b, c, d, e, f2, g, h, k2) {
  a = new bl(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b);
  }
  return b;
}
function fl(a, b, c, d, e, f2, g, h, k2) {
  a = cl(c, d, true, a, e, f2, g, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b, c, d) {
  var e = b.current, f2 = L(), g = lh(e);
  c = el(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = ch(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = dh(e, b, g);
  null !== a && (mh(a, e, g, f2), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function jl(a, b) {
  il(a, b);
  (a = a.alternate) && il(a, b);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b)
    throw Error(p(409));
  gl(a, b, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b, k2, c, d);
  });
  return k2;
}
function sl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b, g, a, e);
  } else
    g = rl(c, b, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Ek(b, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b2 = Zg(a, 1);
        if (null !== b2) {
          var c2 = L();
          mh(b2, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = Zg(a, 134217728);
    if (null !== b) {
      var c = L();
      mh(b, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = lh(a), c = Zg(a, b);
    if (null !== c) {
      var d = L();
      mh(c, a, b, d);
    }
    jl(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b))
    throw Error(p(200));
  return dl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!ol(a))
    throw Error(p(299));
  var c = false, d = "", e = ll;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!ol(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = fl(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!pl(b))
    throw Error(p(200));
  return sl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!pl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return sl(a, b, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const mac128KRomPath = "/Mac-128K-CvkdPHoT.rom";
const macPlusRomPath = "/Mac-Plus-buQ3PSnn.rom";
const macSERomPath = "/Mac-SE-Db9_SaDQ.rom";
const macIIRomPath = "/Mac-II-BBpSM4I1.rom";
const macIIfxRomPath = "/Mac-IIfx-DkfB9wqh.rom";
const quadra650RomPath = "/Quadra-650-CNvK5ofg.rom";
const newWorldRomPath = "/New-World-YOv_wisM.rom";
const powerMacintosh6100RomPath = "/Power-Macintosh-6100-B9dwfl0t.rom";
const powerMacintosh7500RomPath = "/Power-Macintosh-7500-9PVphsGw.rom";
const powerMacintosh9500RomPath = "/Power-Macintosh-9500-CJJLq4rv.rom";
const powerMacintoshG3RomPath = "/Power-Macintosh-G3-Dc37gZUZ.rom";
const nextRev10V41RomPath = "/NeXT-Rev_1.0_v41-C859YJzx.rom";
const nextRev25V66RomPath = "/NeXT-Rev_2.5_v66-CG-Rh615.rom";
const nextRev33V74RomPath = "/NeXT-Rev_3.3_v74-BIS8cw7p.rom";
const basiliskPrefsPath = "data:text/plain;base64,ZXh0ZnMgL1NoYXJlZC8Kc2VyaWFsYQpzZXJpYWxiCmV0aGVyIGpzCmJvb3Rkcml2ZSAwCmJvb3Rkcml2ZXIgMApmcmFtZXNraXAgMApmcHUgdHJ1ZQpub2Nkcm9tIGZhbHNlCm5vc291bmQgZmFsc2UKbm9jbGlwY29udmVyc2lvbiBmYWxzZQpub2d1aSB0cnVlCmppdCBmYWxzZQpqaXRmcHUgZmFsc2UKaml0ZGVidWcgZmFsc2UKaml0Y2FjaGVzaXplIDgxOTIKaml0bGF6eWZsdXNoIHRydWUKaml0aW5saW5lIHRydWUKa2V5Ym9hcmR0eXBlIDUKa2V5Y29kZXMgZmFsc2UKbW91c2V3aGVlbG1vZGUgMQptb3VzZXdoZWVsbGluZXMgMwppZGxld2FpdCB0cnVlCg==";
const sheepShaverPrefsPath = "data:text/plain;base64,ZXh0ZnMgL1NoYXJlZC8Kd2luZG93bW9kZXMgMApzY3JlZW5tb2RlcyAwCnNlcmlhbGEKc2VyaWFsYgpib290ZHJpdmUgMApib290ZHJpdmVyIDAKZnJhbWVza2lwIDAKZ2Z4YWNjZWwgZmFsc2UKbm9jZHJvbSBmYWxzZQpub25ldCBmYWxzZQpub3NvdW5kIGZhbHNlCm5vZ3VpIGZhbHNlCm5vY2xpcGNvbnZlcnNpb24gZmFsc2UKaWdub3Jlc2VndiB0cnVlCmlnbm9yZWlsbGVnYWwgZmFsc2UKaml0IGZhbHNlCmppdDY4ayBmYWxzZQprZXlib2FyZHR5cGUgNQpoYXJkY3Vyc29yIGZhbHNlCmhvdGtleSAwCnNjYWxlX25lYXJlc3QgZmFsc2UKc2NhbGVfaW50ZWdlciBmYWxzZQpjcHVjbG9jayAwCnllYXJvZnMgMApkYXlvZnMgMAptYWdfcmF0ZSAwCnN3YXBfb3B0X2NtZCBmYWxzZQpzb3VuZF9idWZmZXIgMApuYW1lX2VuY29kaW5nIDAKa2V5Y29kZXMgZmFsc2UKbW91c2V3aGVlbG1vZGUgMQptb3VzZXdoZWVsbGluZXMgMwppZGxld2FpdCB0cnVlCg==";
const emptyPrefsPath = "data:text/plain;base64,";
const previousConfigPath = "data:text/plain;base64,W0xvZ10Kc0xvZ0ZpbGVOYW1lID0gc3RkZXJyCnNUcmFjZUZpbGVOYW1lID0gc3RkZXJyCm5UZXh0TG9nTGV2ZWwgPSA1Cm5BbGVydERsZ0xvZ0xldmVsID0gMQpiQ29uZmlybVF1aXQgPSBGQUxTRQpiQ29uc29sZVdpbmRvdyA9IEZBTFNFCgpbQ29uZmlnRGlhbG9nXQpiU2hvd0NvbmZpZ0RpYWxvZ0F0U3RhcnR1cCA9IEZBTFNFCgpbRGVidWdnZXJdCm5OdW1iZXJCYXNlID0gMTAKblN5bWJvbExpbmVzID0gLTEKbk1lbWR1bXBMaW5lcyA9IC0xCm5EaXNhc21MaW5lcyA9IC0xCm5CYWNrdHJhY2VMaW5lcyA9IDAKbkV4Y2VwdGlvbkRlYnVnTWFzayA9IDUxNQpuRGlzYXNtT3B0aW9ucyA9IDcKYkRpc2FzbVVBRSA9IFRSVUUKCltTY3JlZW5dCm5Nb25pdG9yVHlwZSA9IDEKbk1vbml0b3JOdW0gPSAwCmJGdWxsU2NyZWVuID0gRkFMU0UKYlNob3dTdGF0dXNiYXIgPSBGQUxTRQpiU2hvd0RyaXZlTGVkID0gRkFMU0UKCltLZXlib2FyZF0KYlN3YXBDbWRBbHQgPSBGQUxTRQpuS2V5bWFwVHlwZSA9IDEKc3pNYXBwaW5nRmlsZU5hbWUgPQoKW1Nob3J0Y3V0c1dpdGhNb2RpZmllcnNdCmtPcHRpb25zID0gTwprRnVsbFNjcmVlbiA9IEYKa01vdXNlTW9kZSA9IE0Ka0NvbGRSZXNldCA9IEMKa0N1cnNvckVtdSA9IEoKa1NjcmVlbnNob3QgPSBHCmtSZWNvcmQgPSBSCmtTb3VuZCA9IFMKa1BhdXNlID0gUAprRGVidWdnZXJNNjhLID0gRAprRGVidWdnZXJJODYwID0gSQprUXVpdCA9IFEKa0RpbWVuc2lvbiA9IE4Ka1N0YXR1c2JhciA9IEIKCltTaG9ydGN1dHNXaXRob3V0TW9kaWZpZXJzXQprT3B0aW9ucyA9IEYxMgprRnVsbFNjcmVlbiA9IEYxMQprTW91c2VNb2RlID0Ka0NvbGRSZXNldCA9CmtDdXJzb3JFbXUgPQprU2NyZWVuc2hvdCA9CmtSZWNvcmQgPQprU291bmQgPQprUGF1c2UgPQprRGVidWdnZXJNNjhLID0Ka0RlYnVnZ2VySTg2MCA9CmtRdWl0ID0Ka0RpbWVuc2lvbiA9CmtTdGF0dXNiYXIgPQoKW01vdXNlXQpiRW5hYmxlQXV0b0dyYWIgPSBUUlVFCmJFbmFibGVNYXBUb0tleSA9IEZBTFNFCmZMaW5TcGVlZE5vcm1hbCA9IDEKZkxpblNwZWVkTG9ja2VkID0gMQpmRXhwU3BlZWROb3JtYWwgPSAxCmZFeHBTcGVlZExvY2tlZCA9IDEKCltTb3VuZF0KYkVuYWJsZU1pY3JvcGhvbmUgPSBUUlVFCmJFbmFibGVTb3VuZCA9IFRSVUUKCltNZW1vcnldCm5NZW1vcnlCYW5rU2l6ZTAgPSB7UkFNX0JBTktfU0laRTB9Cm5NZW1vcnlCYW5rU2l6ZTEgPSB7UkFNX0JBTktfU0laRTF9Cm5NZW1vcnlCYW5rU2l6ZTIgPSB7UkFNX0JBTktfU0laRTJ9Cm5NZW1vcnlCYW5rU2l6ZTMgPSB7UkFNX0JBTktfU0laRTN9Cm5NZW1vcnlTcGVlZCA9IDEKCltCb290XQpuQm9vdERldmljZSA9IHtCT09UX0RFVklDRX0KYkVuYWJsZURSQU1UZXN0ID0gRkFMU0UKYkVuYWJsZVBvdCA9IFRSVUUKYkVuYWJsZVNvdW5kVGVzdCA9IHtERUJVR19MT0d9CmJFbmFibGVTQ1NJVGVzdCA9IHtERUJVR19MT0d9CmJMb29wUG90ID0gRkFMU0UKYlZlcmJvc2UgPSB7REVCVUdfTE9HfQpiRXh0ZW5kZWRQb3QgPSBmYWxzZQpiVmlzaWJsZSA9IHtERUJVR19MT0d9CgpbSGFyZERpc2tdCntESVNLU30KCltNYWduZXRvT3B0aWNhbF0Kc3pJbWFnZU5hbWUwID0gLwpiRHJpdmVDb25uZWN0ZWQwID0gRkFMU0UKYkRpc2tJbnNlcnRlZDAgPSBGQUxTRQpiV3JpdGVQcm90ZWN0ZWQwID0gRkFMU0UKc3pJbWFnZU5hbWUxID0gLwpiRHJpdmVDb25uZWN0ZWQxID0gRkFMU0UKYkRpc2tJbnNlcnRlZDEgPSBGQUxTRQpiV3JpdGVQcm90ZWN0ZWQxID0gRkFMU0UKCltGbG9wcHldCntGTE9QUElFU30KCltFdGhlcm5ldF0KYkV0aGVybmV0Q29ubmVjdGVkID0gRkFMU0UKYlR3aXN0ZWRQYWlyID0gRkFMU0UKbkhvc3RJbnRlcmZhY2UgPSAwCnN6SW50ZXJmYWNlTmFtZSA9CnN6TkZTcm9vdCA9IC9TaGFyZWQvCmJOZXR3b3JrVGltZSA9IEZBTFNFCgpbUk9NXQpzelJvbTAzMEZpbGVOYW1lID0ge1JPTV9QQVRIfQpzelJvbTA0MEZpbGVOYW1lID0ge1JPTV9QQVRIfQpzelJvbVR1cmJvRmlsZU5hbWUgPSB7Uk9NX1BBVEh9CmJVc2VDdXN0b21NYWMgPSBGQUxTRQpuUm9tQ3VzdG9tTWFjMCA9IDAKblJvbUN1c3RvbU1hYzEgPSAwCm5Sb21DdXN0b21NYWMyID0gMTUKblJvbUN1c3RvbU1hYzMgPSAwCm5Sb21DdXN0b21NYWM0ID0gMApuUm9tQ3VzdG9tTWFjNSA9IDAKCltQcmludGVyXQpiUHJpbnRlckNvbm5lY3RlZCA9IEZBTFNFCm5QYXBlclNpemUgPSAwCnN6UHJpbnRUb0ZpbGVOYW1lID0gL1NoYXJlZC8KCltTeXN0ZW1dCm5NYWNoaW5lVHlwZSA9IHtNQUNISU5FX1RZUEV9CmJDb2xvciA9IHtDT0xPUn0KYlR1cmJvID0ge1RVUkJPfQpiTkJJQyA9IHtOQklDfQpuU0NTSSA9IHtTQ1NJX0NISVB9Cm5SVEMgPSB7UlRDX0NISVB9Cm5DcHVMZXZlbCA9IHtDUFVfTEVWRUx9Cm5DcHVGcmVxID0ge0NQVV9GUkVRfQpiQ29tcGF0aWJsZUNwdSA9IFRSVUUKYlJlYWx0aW1lID0gRkFMU0UKbkRTUFR5cGUgPSB7RFNQX1RZUEV9CmJEU1BNZW1vcnlFeHBhbnNpb24gPSB7RFNQX01FTU9SWV9FWFBBTlNJT059Cm5fRlBVVHlwZSA9IHtGUFVfVFlQRX0KYkNvbXBhdGlibGVGUFUgPSBUUlVFCmJNTVUgPSBUUlVFCgpbRGltZW5zaW9uXQpiSTg2MFRocmVhZCA9IFRSVUUKYk1haW5EaXNwbGF5ID0gRkFMU0UKbk1haW5EaXNwbGF5ID0gMApiRW5hYmxlZDAgPSBGQUxTRQpuTWVtb3J5QmFua1NpemUwMCA9IDQKbk1lbW9yeUJhbmtTaXplMDEgPSA0Cm5NZW1vcnlCYW5rU2l6ZTAyID0gNApuTWVtb3J5QmFua1NpemUwMyA9IDQKc3pSb21GaWxlTmFtZTAgPSAvCmJFbmFibGVkMSA9IEZBTFNFCm5NZW1vcnlCYW5rU2l6ZTEwID0gNApuTWVtb3J5QmFua1NpemUxMSA9IDQKbk1lbW9yeUJhbmtTaXplMTIgPSA0Cm5NZW1vcnlCYW5rU2l6ZTEzID0gNApzelJvbUZpbGVOYW1lMSA9IC8KYkVuYWJsZWQyID0gRkFMU0UKbk1lbW9yeUJhbmtTaXplMjAgPSA0Cm5NZW1vcnlCYW5rU2l6ZTIxID0gNApuTWVtb3J5QmFua1NpemUyMiA9IDQKbk1lbW9yeUJhbmtTaXplMjMgPSA0CnN6Um9tRmlsZU5hbWUyID0gLwo=";
const MAC_128K = {
  name: "Mac 128K",
  cpu: "68000",
  romPath: mac128KRomPath,
  gestaltID: 1,
  emulatorType: "Mini vMac",
  emulatorSubtype: "128K",
  prefsPath: emptyPrefsPath,
  fixedScreenSize: { width: 512, height: 342 },
  bezelStyle: "Beige",
  mfsOnly: true,
  ramSizes: ["128K"]
};
const MAC_512KE = {
  name: "Mac 512Ke",
  cpu: "68000",
  romPath: macPlusRomPath,
  gestaltID: 3,
  emulatorType: "Mini vMac",
  emulatorSubtype: "512Ke",
  prefsPath: emptyPrefsPath,
  fixedScreenSize: { width: 512, height: 342 },
  bezelStyle: "Beige",
  ramSizes: ["512K"]
};
const MAC_PLUS = {
  name: "Mac Plus",
  cpu: "68000",
  romPath: macPlusRomPath,
  gestaltID: 4,
  emulatorType: "Mini vMac",
  emulatorSubtype: "Plus",
  prefsPath: emptyPrefsPath,
  fixedScreenSize: { width: 512, height: 342 },
  bezelStyle: "Beige",
  ramSizes: ["4M"]
};
const MAC_SE = {
  name: "Mac SE",
  cpu: "68000",
  romPath: macSERomPath,
  gestaltID: 5,
  emulatorType: "Mini vMac",
  emulatorSubtype: "SE",
  prefsPath: emptyPrefsPath,
  fixedScreenSize: { width: 512, height: 342 },
  bezelStyle: "Platinum",
  ramSizes: ["4M"]
};
const MAC_II = {
  name: "Mac II",
  cpu: "68020",
  romPath: macIIRomPath,
  gestaltID: 6,
  emulatorType: "Mini vMac",
  emulatorSubtype: "II",
  prefsPath: emptyPrefsPath,
  fixedScreenSize: { width: 640, height: 480 },
  bezelStyle: "Platinum",
  ramSizes: ["8M"]
};
const MAC_IIFX = {
  name: "Mac IIfx",
  cpu: "68030",
  romPath: macIIfxRomPath,
  gestaltID: 13,
  emulatorType: "BasiliskII",
  prefsPath: basiliskPrefsPath,
  bezelStyle: "Platinum",
  ramSizes: ["128M", "64M", "32M", "16M", "8M", "4M"]
};
const QUADRA_650 = {
  name: "Quadra 650",
  cpu: "68040",
  romPath: quadra650RomPath,
  gestaltID: 36,
  emulatorType: "BasiliskII",
  prefsPath: basiliskPrefsPath,
  bezelStyle: "Platinum",
  ramSizes: ["128M", "64M", "32M", "16M", "8M", "4M"]
};
const POWER_MACINTOSH_6100 = {
  name: "Power Macintosh 6100",
  cpu: "601",
  romPath: powerMacintosh6100RomPath,
  gestaltID: 67,
  emulatorType: "DingusPPC",
  prefsPath: emptyPrefsPath,
  fixedScreenSize: { width: 640, height: 480 },
  bezelStyle: "Platinum",
  // The 6100 has 8MB of RAM soldered to the motherboard, these are sizes with
  // with pairs of 64, 32, 16, 8, 4, and 2MB and 0MB SIMMs installed.
  ramSizes: ["136M", "72M", "40M", "24M", "12M", "8M"]
};
const POWER_MACINTOSH_9500 = {
  name: "Power Macintosh 9500",
  cpu: "604",
  romPath: powerMacintosh9500RomPath,
  gestaltID: 67,
  emulatorType: "SheepShaver",
  prefsPath: sheepShaverPrefsPath,
  bezelStyle: "Platinum",
  ramSizes: ["256M", "128M", "64M", "32M", "16M"]
};
const POWER_MACINTOSH_7500 = {
  name: "Power Macintosh 7500",
  cpu: "601",
  romPath: powerMacintosh7500RomPath,
  gestaltID: 68,
  emulatorType: "DingusPPC",
  prefsPath: emptyPrefsPath,
  bezelStyle: "Platinum",
  fixedScreenSize: { width: 640, height: 480 },
  ramSizes: ["16M", "32M", "64M", "128M", "256M"]
};
const POWER_MACINTOSH_G3_BEIGE = {
  name: "Power Macintosh G3 (Beige)",
  cpu: "G3",
  romPath: powerMacintoshG3RomPath,
  gestaltID: 510,
  emulatorType: "DingusPPC",
  prefsPath: emptyPrefsPath,
  bezelStyle: "Platinum",
  fixedScreenSize: { width: 1024, height: 768 },
  ramSizes: ["256M", "128M", "64M", "32M"]
};
const POWER_MACINTOSH_G3_BW = {
  name: "Power Macintosh G3 (Blue & White)",
  cpu: "G3",
  romPath: newWorldRomPath,
  gestaltID: 406,
  emulatorType: "SheepShaver",
  prefsPath: sheepShaverPrefsPath,
  bezelStyle: "Pinstripes",
  ramSizes: ["256M", "128M", "64M"]
};
const NEXT_COMPUTER = {
  name: "NeXT Computer",
  cpu: "68030",
  romPath: nextRev10V41RomPath,
  gestaltID: 0,
  // NEXT_CUBE030
  emulatorType: "Previous",
  emulatorSubtype: "NeXT Computer",
  prefsPath: previousConfigPath,
  fixedScreenSize: { width: 1120, height: 832 },
  bezelStyle: "NeXT",
  ramSizes: ["64M", "32M", "16M"],
  platform: "NeXT"
};
const NEXT_CUBE = {
  name: "NeXTcube",
  cpu: "68040",
  romPath: nextRev25V66RomPath,
  gestaltID: 1,
  // NEXT_CUBE040
  emulatorType: "Previous",
  emulatorSubtype: "NeXTcube",
  prefsPath: previousConfigPath,
  fixedScreenSize: { width: 1120, height: 832 },
  bezelStyle: "NeXT",
  ramSizes: ["64M", "32M", "16M"],
  platform: "NeXT"
};
const NEXT_STATION = {
  name: "NeXTstation",
  cpu: "68040",
  romPath: nextRev25V66RomPath,
  gestaltID: 2,
  // NEXT_STATION
  emulatorType: "Previous",
  emulatorSubtype: "NeXTstation",
  prefsPath: previousConfigPath,
  fixedScreenSize: { width: 1120, height: 832 },
  bezelStyle: "NeXT",
  ramSizes: ["32M", "16M"],
  platform: "NeXT"
};
const NEXT_STATION_TURBO_COLOR = {
  name: "NeXTstation Turbo Color",
  cpu: "68040",
  romPath: nextRev33V74RomPath,
  gestaltID: 2,
  // NEXT_STATION
  emulatorType: "Previous",
  emulatorSubtype: "NeXTstation Turbo Color",
  prefsPath: previousConfigPath,
  fixedScreenSize: { width: 1120, height: 832 },
  bezelStyle: "NeXT",
  ramSizes: ["128M", "64M", "32M", "16M"],
  platform: "NeXT"
};
const ALL_MACHINES = [
  MAC_128K,
  MAC_512KE,
  MAC_PLUS,
  MAC_SE,
  MAC_II,
  MAC_IIFX,
  QUADRA_650,
  POWER_MACINTOSH_6100,
  POWER_MACINTOSH_7500,
  POWER_MACINTOSH_9500,
  POWER_MACINTOSH_G3_BEIGE,
  POWER_MACINTOSH_G3_BW,
  NEXT_COMPUTER,
  NEXT_CUBE,
  NEXT_STATION,
  NEXT_STATION_TURBO_COLOR
];
const MACHINES_BY_NAME = Object.fromEntries(
  ALL_MACHINES.map((machine) => [machine.name, machine])
);
function isExperimentalMachine(machine) {
  return machine.emulatorType === "DingusPPC";
}
function isPlaceholderDiskDef(disk) {
  return "type" in disk && disk.type === "placeholder";
}
function isSystemDiskDef(disk) {
  return !isPlaceholderDiskDef(disk);
}
const SYSTEM_1_0_ORIGINAL = {
  displayName: "System 1.0 (System Disk)",
  description: "Initial system software release, shipped with the Mac 128K.",
  releaseDate: [1984, 1, 24],
  prefetchChunks: [0, 1],
  machines: [MAC_128K],
  infiniteHdSubset: "mfs",
  delayAdditionalDiskMount: true,
  generatedSpec: () => __vitePreload(() => import("./System 1.0 (Original).dsk-CUoLTnOr.js"), true ? [] : void 0),
  isFloppy: true
};
const SYSTEM_7_1_2_DISK_TOOLS = {
  displayName: "System 7.1.2 Disk Tools",
  description: "Disk Tools startup disk from the floppy disk version of System 7.1.2.",
  releaseDate: [1994, 3, 14],
  prefetchChunks: [0],
  machines: [POWER_MACINTOSH_6100],
  generatedSpec: () => __vitePreload(() => import("./System 7.1.2 Disk Tools FD.dsk-D3A8vPka.js"), true ? [] : void 0),
  isFloppy: true
};
const SYSTEM_7_5_DISK_TOOLS = {
  displayName: "System 7.5 Disk Tools",
  description: "Disk Tools startup disk from the floppy disk version of System 7.5.",
  releaseDate: [1994, 9, 12],
  prefetchChunks: [0],
  machines: [POWER_MACINTOSH_6100],
  generatedSpec: () => __vitePreload(() => import("./System 7.5 Disk Tools FD.dsk-DNt256Gl.js"), true ? [] : void 0),
  isFloppy: true
};
const SYSTEM_7_5_3 = {
  displayName: "System 7.5.3",
  description: "Brought Open Transport and other improvements released with the PCI Power Mac-only 7.5.2 release to a broader set of Macs.",
  releaseDate: [1996, 3, 11],
  prefetchChunks: [
    0,
    3,
    6,
    7,
    8,
    9,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    79,
    80,
    88,
    89,
    90,
    92,
    93,
    94,
    96,
    98,
    99,
    100,
    102,
    103,
    104,
    106,
    107,
    108,
    109,
    110,
    111,
    113,
    114,
    116,
    117,
    166
  ],
  machines: [QUADRA_650, MAC_PLUS, MAC_SE, MAC_II, MAC_IIFX],
  appleTalkSupported: true,
  generatedSpec: () => __vitePreload(() => import("./System 7.5.3 HD.dsk-DrFv9Z7E.js"), true ? [] : void 0),
  notable: true
};
const MAC_OS_8_1_DISK_TOOLS_68K = {
  displayName: "Mac OS 8.1 Disk Tools (68K)",
  description: "Disk Tools startup disk from the floppy disk version of Mac OS 8.1.",
  releaseDate: [1998, 1, 19],
  prefetchChunks: [0],
  machines: [QUADRA_650],
  generatedSpec: () => __vitePreload(() => import("./Mac OS 8.1 Disk Tools 68K FD.dsk-6vYo8J9J.js"), true ? [] : void 0),
  isFloppy: true
};
const MAC_OS_8_1_DISK_TOOLS_PPC = {
  displayName: "Mac OS 8.1 Disk Tools (PPC)",
  description: "Disk Tools startup disk from the floppy disk version of Mac OS 8.1.",
  releaseDate: [1998, 1, 19],
  prefetchChunks: [0],
  machines: [POWER_MACINTOSH_9500],
  generatedSpec: () => __vitePreload(() => import("./Mac OS 8.1 Disk Tools PPC FD.dsk-DR9cGM6i.js"), true ? [] : void 0),
  isFloppy: true
};
const ALL_DISKS = [
  SYSTEM_7_5_3
];
const FLOPPY_DISKS = [
  SYSTEM_1_0_ORIGINAL,
  SYSTEM_7_1_2_DISK_TOOLS,
  SYSTEM_7_5_DISK_TOOLS,
  MAC_OS_8_1_DISK_TOOLS_68K,
  MAC_OS_8_1_DISK_TOOLS_PPC
];
const SYSTEM_DISKS_BY_NAME = Object.fromEntries(
  ALL_DISKS.filter(isSystemDiskDef).map((disk) => [
    systemDiskName(disk),
    disk
  ])
);
const FLOPPY_DISKS_BY_NAME = Object.fromEntries(FLOPPY_DISKS.map((disk) => [systemDiskName(disk), disk]));
function systemDiskName(disk) {
  return disk.displayName + (disk.displaySubtitle ? " - " + disk.displaySubtitle : "");
}
const NOTABLE_DISKS = [];
const NEXT_DISKS = [];
const DISKS_BY_YEAR = {};
const NOTABLE_DISKS_BY_YEAR = {};
const NEXT_DISKS_BY_YEAR = {};
ALL_DISKS.forEach((disk) => {
  const [year] = disk.releaseDate;
  if (!DISKS_BY_YEAR[year]) {
    DISKS_BY_YEAR[year] = [];
  }
  DISKS_BY_YEAR[year].push(disk);
  if ("notable" in disk && disk.notable) {
    NOTABLE_DISKS.push(disk);
    if (!NOTABLE_DISKS_BY_YEAR[year]) {
      NOTABLE_DISKS_BY_YEAR[year] = [];
    }
    NOTABLE_DISKS_BY_YEAR[year].push(disk);
  }
  if (disk.machines.some((m2) => m2.platform === "NeXT")) {
    NEXT_DISKS.push(disk);
    if (!NEXT_DISKS_BY_YEAR[year]) {
      NEXT_DISKS_BY_YEAR[year] = [];
    }
    NEXT_DISKS_BY_YEAR[year].push(disk);
  }
});
const INFINITE_HD = {
  prefetchChunks: [0, 3692, 3696, 3697, 3698],
  generatedSpec: () => __vitePreload(() => import("./Infinite HD.dsk-D7UBbMTP.js"), true ? [] : void 0)
};
const INFINITE_HD6 = {
  prefetchChunks: [0, 2271, 2274, 2275],
  generatedSpec: () => __vitePreload(() => import("./Infinite HD6.dsk-41BfCYvR.js"), true ? [] : void 0)
};
const INFINITE_HD_MFS = {
  prefetchChunks: [0, 1, 2],
  generatedSpec: () => __vitePreload(() => import("./Infinite HD (MFS).dsk-RI0po1Ts.js"), true ? [] : void 0)
};
const INFINITE_HD_NEXT = {
  prefetchChunks: [0, 1, 2],
  generatedSpec: () => __vitePreload(() => import("./Infinite HD (NeXT).dsk-qHSA1hjg.js"), true ? [] : void 0)
};
const SAVED_HD = {
  prefetchChunks: [0],
  generatedSpec: () => __vitePreload(() => import("./Saved HD.dsk-DstXKdcX.js"), true ? [] : void 0),
  persistent: true
};
const SvgAppleLogoColor = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve", width: 857.52942, height: 1e3, overflow: "visible", viewBox: "0 0 857.52942 999.99992", ...props }, /* @__PURE__ */ reactExports.createElement("g", { fillRule: "evenodd", clipRule: "evenodd", transform: "translate(3e-8 -.00025013) scale(.85753)" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#61bb46", stroke: "#61bb46", strokeMiterlimit: 2.61310005, strokeWidth: 6.28089046, d: "M54.232461 423.0098c.348572-.57566.718141-1.14287 1.087711-1.69954C115.05402 328.95469 209.27966 274.90015 297.88826 274.90015c90.22756 0 146.94605 49.66861 221.52778 49.66861 72.36642 0 116.44394-49.74031 220.75925-49.74031 78.81501 0 162.37771 43.09815 221.89737 117.62109-16.45637 9.05021-31.30215 19.32551-44.57099 30.6193l-863.269209-.0589z" }), /* @__PURE__ */ reactExports.createElement("path", { fill: "#61bb46", stroke: "#61bb46", strokeMiterlimit: 2.61310005, strokeWidth: 6.28089046, d: "M661.04954 191.61588c37.86412-48.83359 66.66537-117.78556 56.22711-188.28314-61.90716 4.26153-134.31558 43.84038-176.60824 95.36246-38.37648 46.8051-70.05869 116.22095-57.7243 183.65049 67.5872 2.11073 137.50311-38.41488 178.10543-90.72981z" }), /* @__PURE__ */ reactExports.createElement("path", { fill: "#fdb827", d: "M51.151054 421.64891C25.42683 462.11947 7.6276563 520.12542 2.9042342 571.00351l834.5498858-.0215c9.02332-55.66242 39.02667-108.84145 86.58225-149.27157l-872.885316-.0615h.04925z" }), /* @__PURE__ */ reactExports.createElement("path", { fill: "#f5821f", stroke: "#f5821f", strokeMiterlimit: 2.61310005, strokeWidth: 6.28089046, d: "M10.482518 719.0309c-8.1095407-51.96489-9.4219338-102.06365-4.3277482-148.02531l828.0487802-.0213c-8.09905 49.84363-1.30189 101.71362 19.18405 148.07802l-842.905082-.0317z" }), /* @__PURE__ */ reactExports.createElement("path", { fill: "#e03a3e", stroke: "#e03a3e", strokeMiterlimit: 2.61310005, strokeWidth: 6.28089046, d: "M50.950428 867.04567c-19.55361-49.72976-32.942121-99.67671-40.46791-148.01477l842.905082.0317c26.09457 59.07939 74.38644 109.27093 142.38522 135.06361-2.02003 4.51035-3.96868 8.82458-5.84383 12.98278l-938.978562-.0632z" }), /* @__PURE__ */ reactExports.createElement("path", { fill: "#963d97", stroke: "#963d97", strokeMiterlimit: 2.61310005, strokeWidth: 6.28089046, d: "M989.9269 867.10682c-23.34591 51.54106-36.8793 78.29106-69.18727 127.67077-4.34665 6.63161-8.83819 13.41511-13.51452 20.26181l-778.04344.072c-2.4925-3.7281-4.9619-7.454-7.3935-11.1504-29.088937-44.49017-52.638522-90.61629-70.837742-136.91744l938.976472.0632z" }), /* @__PURE__ */ reactExports.createElement("path", { fill: "#009ddc", stroke: "#009ddc", strokeMiterlimit: 2.61310005, strokeWidth: 6.28089046, d: "M907.22511 1015.0394c-47.59473 70.0126-111.49253 147.0574-189.02664 147.7891-75.65684.6895-95.06557-49.4409-197.70942-48.8758-102.64386.5757-124.07261 49.7509-199.72945 49.0403-80.88753-.7507-143.69762-76.4165-191.57793-147.8819l778.04344-.072z" })));
const SvgAppleLogoGrey = (props) => /* @__PURE__ */ reactExports.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 842.32007, height: 1000.0001, viewBox: "0 0 857.52942 999.99992", ...props }, /* @__PURE__ */ reactExports.createElement("g", { fillRule: "evenodd", clipRule: "evenodd", transform: "translate(3e-8 -.00025013)" }, /* @__PURE__ */ reactExports.createElement("path", { fill: "#5a6672", d: "M824.66636 779.30363c-15.12299 34.93724-33.02368 67.09674-53.7638 96.66374-28.27076 40.3074-51.4182 68.2078-69.25717 83.7012-27.65347 25.4313-57.2822 38.4556-89.00964 39.1963-22.77708 0-50.24539-6.4813-82.21973-19.629-32.07926-13.0861-61.55985-19.5673-88.51583-19.5673-28.27075 0-58.59083 6.4812-91.02193 19.5673-32.48053 13.1477-58.64639 19.9994-78.65196 20.6784-30.42501 1.29623-60.75123-12.0985-91.02193-40.2457-19.32039-16.8514-43.48632-45.7394-72.43607-86.6641-31.060778-43.7024-56.597041-94.37983-76.602609-152.15586C10.740416 658.44309 0 598.01283 0 539.50845c0-67.01648 14.481044-124.8172 43.486336-173.25401C66.28194 327.34823 96.60818 296.6578 134.5638 274.1276c37.95566-22.53016 78.96676-34.01129 123.1321-34.74585 24.16591 0 55.85633 7.47508 95.23784 22.166 39.27042 14.74029 64.48571 22.21538 75.54091 22.21538 8.26518 0 36.27668-8.7405 83.7629-26.16587 44.90607-16.16001 82.80614-22.85118 113.85458-20.21546 84.13326 6.78992 147.34122 39.95559 189.37699 99.70686-75.24463 45.59122-112.46573 109.4473-111.72502 191.36456.67899 63.8067 23.82643 116.90384 69.31888 159.06309 20.61664 19.56727 43.64066 34.69027 69.2571 45.4307-5.55531 16.11062-11.41933 31.54225-17.65372 46.35662zM631.70926 20.0057c0 50.01141-18.27108 96.70693-54.6897 139.92782-43.94932 51.38118-97.10817 81.07162-154.75459 76.38659-.73454-5.99983-1.16045-12.31444-1.16045-18.95003 0-48.01091 20.9006-99.39207 58.01678-141.40314 18.53027-21.27094 42.09746-38.95744 70.67685-53.0663C578.3158 9.00229 605.2903 1.31621 630.65988 0c.74076 6.68575 1.04938 13.37191 1.04938 20.00505z" })));
const SvgNeXtLogo = (props) => /* @__PURE__ */ reactExports.createElement("svg", { viewBox: "0 0 179.06 218.4", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ reactExports.createElement("g", { transform: "matrix(1.3333 0 0 -1.3333 -13.135 231.2)" }, /* @__PURE__ */ reactExports.createElement("path", { d: "m17.444 130.65 82.617 42.749 44.087-80.458-82.708-42.66-43.996 80.369" }), /* @__PURE__ */ reactExports.createElement("path", { d: "m16.984 127.05 43.066-78.748-11.3-36.541-38.898 71.011 7.132 44.278" }), /* @__PURE__ */ reactExports.createElement("path", { d: "m127.85 49.649-77.43-40.05 11.947 38.701 80.488 41.489-15.004-40.141" }), /* @__PURE__ */ reactExports.createElement("path", { d: "m52.732 143.79 4.4457 2.249 19.081-34.829-41.215 10.172 12.965-23.671-5.0008-2.5211-18.71 34.111 41.957-10.352-13.523 24.841", fill: "#f14729" }), /* @__PURE__ */ reactExports.createElement("path", { d: "m118.68 127.86-34.733-17.822 2.2227-4.139 15.188 7.83 16.209-29.519 4.54 2.3383-16.209 29.52 15.005 7.741-2.223 4.051", fill: "#e1038c" }), /* @__PURE__ */ reactExports.createElement("path", { d: "m61.904 58.289 5.0008-1.3485 6.7602 22.23 23.527-6.5715 1.3875 4.8594-23.524 6.5715 6.4828 21.6-5.0008 1.349-6.4828-21.6-23.064 6.4797-1.4816-4.859 23.155-6.4801-6.7602-22.23", fill: "#17ae65" }), /* @__PURE__ */ reactExports.createElement("path", { d: "m90.994 146.34-16.958-8.762c-1.7593 5.76 1.2961 13.86 7.5953 17.191 6.2965 3.149 14.541 1.44 18.707-3.6l-9.3449-4.829 1.2305-4.592 15.468 7.999c-5.087 9.914-18.005 14.112-28.101 8.891-9.7242-5.04-13.892-17.73-8.6141-27.359 5.2809-9.63 18.063-13.771 28.156-8.64 7.873 4.05 11.764 12.148 10.931 20.071l-5.186-0.451c0.924-6.121-2.04-12.42-7.9677-15.481-7.1293-3.689-17.134-0.358-20.93 6.569l16.243 8.401-1.2305 4.592", fill: "#fde012" })));
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames2() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg)
          continue;
        var argType = typeof arg;
        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames2.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === "object") {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(" ");
    }
    if (module.exports) {
      classNames2.default = classNames2;
      module.exports = classNames2;
    } else {
      window.classNames = classNames2;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
const classNames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
function ScreenFrame(props) {
  const {
    className,
    bezelStyle,
    bezelSize = "Large",
    width,
    height,
    scale,
    fullscreen,
    led = "None",
    controls = [],
    screen,
    children,
    viewTransitionName,
    ...divProps
  } = props;
  const screenFrameClassName = classNames(
    "ScreenFrame",
    `ScreenFrame-Bezel-${bezelStyle}`,
    `ScreenFrame-Bezel-${bezelSize}`,
    className,
    {
      "ScreenFrame-CenterLogo": bezelStyle === "NeXT" || bezelStyle === "Pinstripes",
      "ScreenFrame-Fullscreen": fullscreen
    }
  );
  const ledClassName = classNames("ScreenFrame-Led", {
    "ScreenFrame-Led-Loading": led === "Loading"
  });
  const Logo = bezelStyle === "NeXT" ? SvgNeXtLogo : bezelStyle === "Pinstripes" ? SvgAppleLogoGrey : SvgAppleLogoColor;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: screenFrameClassName,
      style: {
        width: `calc(${width}px + 2 * var(--screen-underscan))`,
        height: `calc(${height}px + 2 * var(--screen-underscan))`,
        transform: scale === void 0 ? void 0 : `scale(${scale})`,
        viewTransitionName
      },
      ...divProps,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ScreenFrame-Controls-Container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ScreenFrame-Logo", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "Background" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { className: "Foreground" })
          ] }),
          controls.map(
            ({ label, handler, alwaysVisible, selected }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: classNames(
                  "ScreenFrame-Control ScreenFrame-Bezel-Text",
                  {
                    "ScreenFrame-Control-Selected": selected
                  }
                ),
                style: {
                  visibility: alwaysVisible ? "visible" : void 0
                },
                onClick: handler,
                children: label
              },
              label
            )
          )
        ] }),
        led !== "None" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: ledClassName }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "ScreenFrame-ScreenContainer",
            style: {
              width,
              height
            },
            children: screen
          }
        ),
        children
      ]
    }
  );
}
function appearanceSystemFont(appearance) {
  return `AppearanceSystemFont-${appearance}`;
}
function Button({
  appearance,
  className,
  children,
  ...buttonProps
}) {
  const buttonClassName = classNames(
    "Button",
    `Button-${appearance}`,
    appearanceSystemFont(appearance),
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: buttonClassName, ...buttonProps, children });
}
function Dialog({
  title,
  children,
  onDone,
  doneLabel = "Done",
  doneEnabled = true,
  onOther,
  otherLabel,
  onCancel,
  appearance = "Classic",
  className
}) {
  const dialog = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Dialog-Backdrop", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: classNames(
        "Dialog",
        `Dialog-${appearance}`,
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: appearanceSystemFont(appearance), children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Dialog-Content", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { children: [
          onCancel && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "Dialog-Normal-Button",
              appearance,
              onClick: (e) => {
                e.preventDefault();
                onCancel();
              },
              children: "Cancel"
            }
          ),
          onOther && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "Dialog-Normal-Button",
              appearance,
              onClick: (e) => {
                e.preventDefault();
                onOther(e);
              },
              children: otherLabel
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              disabled: !doneEnabled,
              appearance,
              onClick: (e) => {
                e.preventDefault();
                onDone(e);
              },
              children: doneLabel
            }
          )
        ] })
      ]
    }
  ) });
  return ReactDOM.createPortal(dialog, dialogRootNode);
}
const dialogRootNode = document.getElementById("dialog-root");
async function increment(name, delta = 1) {
  return incrementMulti({ [name]: delta });
}
async function incrementMulti(changes) {
  return fetch("/varz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(changes)
  });
}
async function incrementError(name, message) {
  return fetch("/errorz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, message })
  });
}
function Donate({ onDone }) {
  reactExports.useEffect(() => {
    increment("donate_shown");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { title: "Donate", onDone, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "While working on the project is its own reward (and I have a full-time job), there are hosting costs associated with the infrastructure that it needs (mostly domain name registrations and web hosting)." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Donations to support the project can be done via",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sponsors/mihaip", children: "GitHub Sponsors" }),
      " ",
      "or",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.paypal.com/donate/?hosted_button_id=394METCPT6PYN", children: "PayPal" }),
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Thanks!",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://blog.persistent.info/#about-me", children: "Mihai" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "P.S. Infinite Mac owes a big debt to the archiving work done by the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://macintoshgarden.org/", children: "Macintosh Garden" }),
      " ",
      "and the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://archive.org", children: "Internet Archive" }),
      ". You may also want to consider supporting those sites too via",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.patreon.com/macintoshgarden", children: "Macintosh Garden's Patreon" }),
      " ",
      "and",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://archive.org/donate", children: "donating to the Internet Archive" }),
      "."
    ] })
  ] });
}
function About({ onDone }) {
  const email = [
    109,
    105,
    104,
    97,
    105,
    64,
    112,
    101,
    114,
    115,
    105,
    115,
    116,
    101,
    110,
    116,
    46,
    105,
    110,
    102,
    111
  ].map((c) => String.fromCharCode(c)).join("");
  const [donateVisible, setDonateVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    increment("about_shown");
  }, []);
  const aboutContainerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const aboutContainerDom = aboutContainerRef.current;
    console.log(aboutContainerDom);
    if (!aboutContainerDom) {
      return;
    }
    for (const headings of aboutContainerDom.querySelectorAll("h2")) {
      headings.classList.add(appearanceSystemFont("Classic"));
    }
    const emailLink = aboutContainerDom.querySelector(".email");
    if (emailLink) {
      emailLink.href = `mailto:${email}`;
    }
    const donateLink = aboutContainerDom.querySelector(".donate");
    if (donateLink) {
      const showDonate = () => setDonateVisible(true);
      donateLink.addEventListener("click", showDonate);
      return () => donateLink.removeEventListener("click", showDonate);
    }
  });
  if (donateVisible) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Donate, { onDone });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { title: "About", onDone, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref: aboutContainerRef,
      dangerouslySetInnerHTML: { __html: aboutHTML }
    }
  ) });
}
const aboutHTML = document.getElementById("about").innerHTML;
function useWindowWidth() {
  const [width, setWidth] = reactExports.useState(window.innerWidth);
  reactExports.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
const changelogText = '# CHANGELOG\n\n2024-03-25: Added all major NeXTSTEP releases. See https://blog.persistent.info/2024/03/infinite-mac-nextstep.html for more details.\n\n2024-02-19: Added option to use relative mouse movement in Basilisk II and SheepShaver-based machines, which improves compatibility with some games.\n\n2024-01-25: Custom instances now support overriding the current date.\n\n2023-12-13: Experimental support for the Power Macintosh 6100 and G3 (Beige) machines. See https://blog.persistent.info/2023/12/dingusppc.html for more details.\n\n2023-12-09: Custom instances now support custom screen sizes.\n\n2023-09-09: Added the Saved HD as a way to persist data. Its contents can also be imported and exported.\n\n2023-08-13: Custom instances now support overriding the RAM size of the emulated machine.\n\n2023-07-20: Added the option to create custom instances with arbitrary system disks and URL-based disk images: https://infinitemac.org/run.\n\n2023-06-19: Added a CD-ROM library, with a few dozen CDs that can be browsed and mounted, and the ability to mount arbitrary CD-ROM images from archive.org and similar sites.\n\n2023-06-03: Filtering of system software releases (all vs. just notable ones).\n\n2023-05-06: Improved the speed of dissolve animations in HyperCard stacks.\n\n2023-04-19: Disk images can now be mounted without restarting the Mac.\n\n2023-03-28: A new home at https://infinitemac.org, with a library of all classic System Software releases.\n\n2023-02-09: Improved audio playback reliability, especially on Mac OS 9.\n\n2023-01-22: Initial System 6 support is now available, see https://system6.app.\n\n2022-12-27: Sound now works under Mac OS 8 and Mac OS 9.\n\n2022-12-24: Thousands of colors mode is now supported.\n\n2022-11-15: Improved FPU compatibility (affected PCalc and scrollbars in Mac OS 8).\n\n2022-10-30: PowerPC emulation (and thus Mac OS 9) is now available, see https://macos9.app.\n\n2022-10-02: Added setting to allow the control and command keys to be swapped.\n\n2022-09-17: Audio is less laggy.\n\n2022-09-07: Stickies are now generated as part of the image building process (and include this changelog).\n\n2022-08-20: Monitor resolution is now dynamic based on the initial window size (ranging from 1600x1200 to 640x480) and can be changed from the Control Strip.\n\n2022-08-09: "Uploaded" .zip files and folders can be dragged back into the emulator window, where they will be reconstituted with metadata and resource forks.\n\n2022-08-07: Text clipboard syncing support - copy from your browser and paste into the emulator, and vice-versa.\n\n2022-07-26: AppleTalk networking support! See https://blog.persistent.info/2022/07/infinite-mac-networking.html for more details.\n\n2022-04-17: Added KanjiTalk 7.5.3 boot image (hosted at kanjitalk7.app).\n\n2022-04-09: Added support for dragging in and mounting CD-ROM images.\n\n2022-03-31: Initial launch! See https://blog.persistent.info/2022/03/blog-post.html.\n';
const encodedTlds = "aaa1rp3barth4b0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0faromeo7ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4vianca6w0s2x0a2z0ure5ba0by2idu3namex3narepublic11d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2ntley5rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re2s2c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y0eats7k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0cast4mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking0channel11l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dabur3d1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t0isalat7u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0at2delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d0network8tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntdoor4ier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0ardian6cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5gtv3iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0eles2s3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6logistics9properties14fh2g1h1i0a1ds2m1nder2le4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3ncaster5ia3d0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4de2k2psy3ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0cys3drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7serati6ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic3tual5v1w1x1y1z2na0b1goya4me2tura4vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rthwesternmutual14on4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9dnavy5lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3ssagens7y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cher3ks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0a1b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp2w2ell3ia1ksha5oes2p0ping5uji3w0time7i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ffany5ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0channel7ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lkswagen7vo3te1ing3o2yage5u0elos6wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4finity6ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2";
const encodedUtlds = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5تصالات6رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2";
const assign = (target, properties) => {
  for (const key in properties) {
    target[key] = properties[key];
  }
  return target;
};
const numeric = "numeric";
const ascii = "ascii";
const alpha = "alpha";
const asciinumeric = "asciinumeric";
const alphanumeric = "alphanumeric";
const domain = "domain";
const emoji = "emoji";
const scheme = "scheme";
const slashscheme = "slashscheme";
const whitespace = "whitespace";
function registerGroup(name, groups) {
  if (!(name in groups)) {
    groups[name] = [];
  }
  return groups[name];
}
function addToGroups(t2, flags, groups) {
  if (flags[numeric]) {
    flags[asciinumeric] = true;
    flags[alphanumeric] = true;
  }
  if (flags[ascii]) {
    flags[asciinumeric] = true;
    flags[alpha] = true;
  }
  if (flags[asciinumeric]) {
    flags[alphanumeric] = true;
  }
  if (flags[alpha]) {
    flags[alphanumeric] = true;
  }
  if (flags[alphanumeric]) {
    flags[domain] = true;
  }
  if (flags[emoji]) {
    flags[domain] = true;
  }
  for (const k2 in flags) {
    const group = registerGroup(k2, groups);
    if (group.indexOf(t2) < 0) {
      group.push(t2);
    }
  }
}
function flagsForToken(t2, groups) {
  const result = {};
  for (const c in groups) {
    if (groups[c].indexOf(t2) >= 0) {
      result[c] = true;
    }
  }
  return result;
}
function State(token) {
  if (token === void 0) {
    token = null;
  }
  this.j = {};
  this.jr = [];
  this.jd = null;
  this.t = token;
}
State.groups = {};
State.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(input) {
    const state = this;
    const nextState = state.j[input];
    if (nextState) {
      return nextState;
    }
    for (let i = 0; i < state.jr.length; i++) {
      const regex = state.jr[i][0];
      const nextState2 = state.jr[i][1];
      if (nextState2 && regex.test(input)) {
        return nextState2;
      }
    }
    return state.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(input, exactOnly) {
    if (exactOnly === void 0) {
      exactOnly = false;
    }
    return exactOnly ? input in this.j : !!this.go(input);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(inputs, next, flags, groups) {
    for (let i = 0; i < inputs.length; i++) {
      this.tt(inputs[i], next, flags, groups);
    }
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(regexp, next, flags, groups) {
    groups = groups || State.groups;
    let nextState;
    if (next && next.j) {
      nextState = next;
    } else {
      nextState = new State(next);
      if (flags && groups) {
        addToGroups(next, flags, groups);
      }
    }
    this.jr.push([regexp, nextState]);
    return nextState;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(input, next, flags, groups) {
    let state = this;
    const len = input.length;
    if (!len) {
      return state;
    }
    for (let i = 0; i < len - 1; i++) {
      state = state.tt(input[i]);
    }
    return state.tt(input[len - 1], next, flags, groups);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(input, next, flags, groups) {
    groups = groups || State.groups;
    const state = this;
    if (next && next.j) {
      state.j[input] = next;
      return next;
    }
    const t2 = next;
    let nextState, templateState = state.go(input);
    if (templateState) {
      nextState = new State();
      assign(nextState.j, templateState.j);
      nextState.jr.push.apply(nextState.jr, templateState.jr);
      nextState.jd = templateState.jd;
      nextState.t = templateState.t;
    } else {
      nextState = new State();
    }
    if (t2) {
      if (groups) {
        if (nextState.t && typeof nextState.t === "string") {
          const allFlags = assign(flagsForToken(nextState.t, groups), flags);
          addToGroups(t2, allFlags, groups);
        } else if (flags) {
          addToGroups(t2, flags, groups);
        }
      }
      nextState.t = t2;
    }
    state.j[input] = nextState;
    return nextState;
  }
};
const ta = (state, input, next, flags, groups) => state.ta(input, next, flags, groups);
const tr = (state, regexp, next, flags, groups) => state.tr(regexp, next, flags, groups);
const ts = (state, input, next, flags, groups) => state.ts(input, next, flags, groups);
const tt = (state, input, next, flags, groups) => state.tt(input, next, flags, groups);
const WORD = "WORD";
const UWORD = "UWORD";
const LOCALHOST = "LOCALHOST";
const TLD = "TLD";
const UTLD = "UTLD";
const SCHEME = "SCHEME";
const SLASH_SCHEME = "SLASH_SCHEME";
const NUM = "NUM";
const WS = "WS";
const NL$1 = "NL";
const OPENBRACE = "OPENBRACE";
const OPENBRACKET = "OPENBRACKET";
const OPENANGLEBRACKET = "OPENANGLEBRACKET";
const OPENPAREN = "OPENPAREN";
const CLOSEBRACE = "CLOSEBRACE";
const CLOSEBRACKET = "CLOSEBRACKET";
const CLOSEANGLEBRACKET = "CLOSEANGLEBRACKET";
const CLOSEPAREN = "CLOSEPAREN";
const AMPERSAND = "AMPERSAND";
const APOSTROPHE = "APOSTROPHE";
const ASTERISK = "ASTERISK";
const AT = "AT";
const BACKSLASH = "BACKSLASH";
const BACKTICK = "BACKTICK";
const CARET = "CARET";
const COLON = "COLON";
const COMMA = "COMMA";
const DOLLAR = "DOLLAR";
const DOT = "DOT";
const EQUALS = "EQUALS";
const EXCLAMATION = "EXCLAMATION";
const HYPHEN = "HYPHEN";
const PERCENT = "PERCENT";
const PIPE = "PIPE";
const PLUS = "PLUS";
const POUND = "POUND";
const QUERY = "QUERY";
const QUOTE = "QUOTE";
const SEMI = "SEMI";
const SLASH = "SLASH";
const TILDE = "TILDE";
const UNDERSCORE = "UNDERSCORE";
const EMOJI$1 = "EMOJI";
const SYM = "SYM";
var tk = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  WORD,
  UWORD,
  LOCALHOST,
  TLD,
  UTLD,
  SCHEME,
  SLASH_SCHEME,
  NUM,
  WS,
  NL: NL$1,
  OPENBRACE,
  OPENBRACKET,
  OPENANGLEBRACKET,
  OPENPAREN,
  CLOSEBRACE,
  CLOSEBRACKET,
  CLOSEANGLEBRACKET,
  CLOSEPAREN,
  AMPERSAND,
  APOSTROPHE,
  ASTERISK,
  AT,
  BACKSLASH,
  BACKTICK,
  CARET,
  COLON,
  COMMA,
  DOLLAR,
  DOT,
  EQUALS,
  EXCLAMATION,
  HYPHEN,
  PERCENT,
  PIPE,
  PLUS,
  POUND,
  QUERY,
  QUOTE,
  SEMI,
  SLASH,
  TILDE,
  UNDERSCORE,
  EMOJI: EMOJI$1,
  SYM
});
const ASCII_LETTER = /[a-z]/;
const LETTER = new RegExp("\\p{L}", "u");
const EMOJI = new RegExp("\\p{Emoji}", "u");
const DIGIT = /\d/;
const SPACE = /\s/;
const NL = "\n";
const EMOJI_VARIATION = "️";
const EMOJI_JOINER = "‍";
let tlds = null, utlds = null;
function init$2(customSchemes) {
  if (customSchemes === void 0) {
    customSchemes = [];
  }
  const groups = {};
  State.groups = groups;
  const Start = new State();
  if (tlds == null) {
    tlds = decodeTlds(encodedTlds);
  }
  if (utlds == null) {
    utlds = decodeTlds(encodedUtlds);
  }
  tt(Start, "'", APOSTROPHE);
  tt(Start, "{", OPENBRACE);
  tt(Start, "[", OPENBRACKET);
  tt(Start, "<", OPENANGLEBRACKET);
  tt(Start, "(", OPENPAREN);
  tt(Start, "}", CLOSEBRACE);
  tt(Start, "]", CLOSEBRACKET);
  tt(Start, ">", CLOSEANGLEBRACKET);
  tt(Start, ")", CLOSEPAREN);
  tt(Start, "&", AMPERSAND);
  tt(Start, "*", ASTERISK);
  tt(Start, "@", AT);
  tt(Start, "`", BACKTICK);
  tt(Start, "^", CARET);
  tt(Start, ":", COLON);
  tt(Start, ",", COMMA);
  tt(Start, "$", DOLLAR);
  tt(Start, ".", DOT);
  tt(Start, "=", EQUALS);
  tt(Start, "!", EXCLAMATION);
  tt(Start, "-", HYPHEN);
  tt(Start, "%", PERCENT);
  tt(Start, "|", PIPE);
  tt(Start, "+", PLUS);
  tt(Start, "#", POUND);
  tt(Start, "?", QUERY);
  tt(Start, '"', QUOTE);
  tt(Start, "/", SLASH);
  tt(Start, ";", SEMI);
  tt(Start, "~", TILDE);
  tt(Start, "_", UNDERSCORE);
  tt(Start, "\\", BACKSLASH);
  const Num = tr(Start, DIGIT, NUM, {
    [numeric]: true
  });
  tr(Num, DIGIT, Num);
  const Word = tr(Start, ASCII_LETTER, WORD, {
    [ascii]: true
  });
  tr(Word, ASCII_LETTER, Word);
  const UWord = tr(Start, LETTER, UWORD, {
    [alpha]: true
  });
  tr(UWord, ASCII_LETTER);
  tr(UWord, LETTER, UWord);
  const Ws = tr(Start, SPACE, WS, {
    [whitespace]: true
  });
  tt(Start, NL, NL$1, {
    [whitespace]: true
  });
  tt(Ws, NL);
  tr(Ws, SPACE, Ws);
  const Emoji = tr(Start, EMOJI, EMOJI$1, {
    [emoji]: true
  });
  tr(Emoji, EMOJI, Emoji);
  tt(Emoji, EMOJI_VARIATION, Emoji);
  const EmojiJoiner = tt(Emoji, EMOJI_JOINER);
  tr(EmojiJoiner, EMOJI, Emoji);
  const wordjr = [[ASCII_LETTER, Word]];
  const uwordjr = [[ASCII_LETTER, null], [LETTER, UWord]];
  for (let i = 0; i < tlds.length; i++) {
    fastts(Start, tlds[i], TLD, WORD, wordjr);
  }
  for (let i = 0; i < utlds.length; i++) {
    fastts(Start, utlds[i], UTLD, UWORD, uwordjr);
  }
  addToGroups(TLD, {
    tld: true,
    ascii: true
  }, groups);
  addToGroups(UTLD, {
    utld: true,
    alpha: true
  }, groups);
  fastts(Start, "file", SCHEME, WORD, wordjr);
  fastts(Start, "mailto", SCHEME, WORD, wordjr);
  fastts(Start, "http", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "https", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "ftp", SLASH_SCHEME, WORD, wordjr);
  fastts(Start, "ftps", SLASH_SCHEME, WORD, wordjr);
  addToGroups(SCHEME, {
    scheme: true,
    ascii: true
  }, groups);
  addToGroups(SLASH_SCHEME, {
    slashscheme: true,
    ascii: true
  }, groups);
  customSchemes = customSchemes.sort((a, b) => a[0] > b[0] ? 1 : -1);
  for (let i = 0; i < customSchemes.length; i++) {
    const sch = customSchemes[i][0];
    const optionalSlashSlash = customSchemes[i][1];
    const flags = optionalSlashSlash ? {
      [scheme]: true
    } : {
      [slashscheme]: true
    };
    if (sch.indexOf("-") >= 0) {
      flags[domain] = true;
    } else if (!ASCII_LETTER.test(sch)) {
      flags[numeric] = true;
    } else if (DIGIT.test(sch)) {
      flags[asciinumeric] = true;
    } else {
      flags[ascii] = true;
    }
    ts(Start, sch, sch, flags);
  }
  ts(Start, "localhost", LOCALHOST, {
    ascii: true
  });
  Start.jd = new State(SYM);
  return {
    start: Start,
    tokens: assign({
      groups
    }, tk)
  };
}
function run$1(start, str) {
  const iterable = stringToArray(str.replace(/[A-Z]/g, (c) => c.toLowerCase()));
  const charCount = iterable.length;
  const tokens = [];
  let cursor = 0;
  let charCursor = 0;
  while (charCursor < charCount) {
    let state = start;
    let nextState = null;
    let tokenLength = 0;
    let latestAccepting = null;
    let sinceAccepts = -1;
    let charsSinceAccepts = -1;
    while (charCursor < charCount && (nextState = state.go(iterable[charCursor]))) {
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        charsSinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts += iterable[charCursor].length;
        charsSinceAccepts++;
      }
      tokenLength += iterable[charCursor].length;
      cursor += iterable[charCursor].length;
      charCursor++;
    }
    cursor -= sinceAccepts;
    charCursor -= charsSinceAccepts;
    tokenLength -= sinceAccepts;
    tokens.push({
      t: latestAccepting.t,
      // token type/name
      v: str.slice(cursor - tokenLength, cursor),
      // string value
      s: cursor - tokenLength,
      // start index
      e: cursor
      // end index (excluding)
    });
  }
  return tokens;
}
function stringToArray(str) {
  const result = [];
  const len = str.length;
  let index = 0;
  while (index < len) {
    let first = str.charCodeAt(index);
    let second;
    let char = first < 55296 || first > 56319 || index + 1 === len || (second = str.charCodeAt(index + 1)) < 56320 || second > 57343 ? str[index] : str.slice(index, index + 2);
    result.push(char);
    index += char.length;
  }
  return result;
}
function fastts(state, input, t2, defaultt, jr) {
  let next;
  const len = input.length;
  for (let i = 0; i < len - 1; i++) {
    const char = input[i];
    if (state.j[char]) {
      next = state.j[char];
    } else {
      next = new State(defaultt);
      next.jr = jr.slice();
      state.j[char] = next;
    }
    state = next;
  }
  next = new State(t2);
  next.jr = jr.slice();
  state.j[input[len - 1]] = next;
  return next;
}
function decodeTlds(encoded) {
  const words = [];
  const stack = [];
  let i = 0;
  let digits = "0123456789";
  while (i < encoded.length) {
    let popDigitCount = 0;
    while (digits.indexOf(encoded[i + popDigitCount]) >= 0) {
      popDigitCount++;
    }
    if (popDigitCount > 0) {
      words.push(stack.join(""));
      for (let popCount = parseInt(encoded.substring(i, i + popDigitCount), 10); popCount > 0; popCount--) {
        stack.pop();
      }
      i += popDigitCount;
    } else {
      stack.push(encoded[i]);
      i++;
    }
  }
  return words;
}
const defaults = {
  defaultProtocol: "http",
  events: null,
  format: noop,
  formatHref: noop,
  nl2br: false,
  tagName: "a",
  target: null,
  rel: null,
  validate: true,
  truncate: Infinity,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Options(opts, defaultRender) {
  if (defaultRender === void 0) {
    defaultRender = null;
  }
  let o = assign({}, defaults);
  if (opts) {
    o = assign(o, opts instanceof Options ? opts.o : opts);
  }
  const ignoredTags = o.ignoreTags;
  const uppercaseIgnoredTags = [];
  for (let i = 0; i < ignoredTags.length; i++) {
    uppercaseIgnoredTags.push(ignoredTags[i].toUpperCase());
  }
  this.o = o;
  if (defaultRender) {
    this.defaultRender = defaultRender;
  }
  this.ignoreTags = uppercaseIgnoredTags;
}
Options.prototype = {
  o: defaults,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(ir) {
    return ir;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(token) {
    return this.get("validate", token.toString(), token);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(key, operator, token) {
    const isCallable = operator != null;
    let option = this.o[key];
    if (!option) {
      return option;
    }
    if (typeof option === "object") {
      option = token.t in option ? option[token.t] : defaults[key];
      if (typeof option === "function" && isCallable) {
        option = option(operator, token);
      }
    } else if (typeof option === "function" && isCallable) {
      option = option(operator, token.t, token);
    }
    return option;
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(key, operator, token) {
    let obj = this.o[key];
    if (typeof obj === "function" && operator != null) {
      obj = obj(operator, token.t, token);
    }
    return obj;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(token) {
    const ir = token.render(this);
    const renderFn = this.get("render", null, token) || this.defaultRender;
    return renderFn(ir, token.t, token);
  }
};
function noop(val) {
  return val;
}
var options = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaults,
  Options,
  assign
});
function MultiToken(value, tokens) {
  this.t = "token";
  this.v = value;
  this.tk = tokens;
}
MultiToken.prototype = {
  isLink: false,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
  */
  toHref(scheme2) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(options2) {
    const val = this.toString();
    const truncate = options2.get("truncate", val, this);
    const formatted = options2.get("format", val, this);
    return truncate && formatted.length > truncate ? formatted.substring(0, truncate) + "…" : formatted;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(options2) {
    return options2.get("formatHref", this.toHref(options2.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(protocol) {
    if (protocol === void 0) {
      protocol = defaults.defaultProtocol;
    }
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(protocol),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(options2) {
    return {
      type: this.t,
      value: this.toFormattedString(options2),
      isLink: this.isLink,
      href: this.toFormattedHref(options2),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(options2) {
    return options2.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(options2) {
    const token = this;
    const href = this.toHref(options2.get("defaultProtocol"));
    const formattedHref = options2.get("formatHref", href, this);
    const tagName = options2.get("tagName", href, token);
    const content = this.toFormattedString(options2);
    const attributes = {};
    const className = options2.get("className", href, token);
    const target = options2.get("target", href, token);
    const rel = options2.get("rel", href, token);
    const attrs = options2.getObj("attributes", href, token);
    const eventListeners = options2.getObj("events", href, token);
    attributes.href = formattedHref;
    if (className) {
      attributes.class = className;
    }
    if (target) {
      attributes.target = target;
    }
    if (rel) {
      attributes.rel = rel;
    }
    if (attrs) {
      assign(attributes, attrs);
    }
    return {
      tagName,
      attributes,
      content,
      eventListeners
    };
  }
};
function createTokenClass(type, props) {
  class Token extends MultiToken {
    constructor(value, tokens) {
      super(value, tokens);
      this.t = type;
    }
  }
  for (const p2 in props) {
    Token.prototype[p2] = props[p2];
  }
  Token.t = type;
  return Token;
}
const Email = createTokenClass("email", {
  isLink: true,
  toHref() {
    return "mailto:" + this.toString();
  }
});
const Text = createTokenClass("text");
const Nl = createTokenClass("nl");
const Url = createTokenClass("url", {
  isLink: true,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(scheme2) {
    if (scheme2 === void 0) {
      scheme2 = defaults.defaultProtocol;
    }
    return this.hasProtocol() ? this.v : `${scheme2}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const tokens = this.tk;
    return tokens.length >= 2 && tokens[0].t !== LOCALHOST && tokens[1].t === COLON;
  }
});
const makeState = (arg) => new State(arg);
function init$1(_ref) {
  let {
    groups
  } = _ref;
  const qsAccepting = groups.domain.concat([AMPERSAND, ASTERISK, AT, BACKSLASH, BACKTICK, CARET, DOLLAR, EQUALS, HYPHEN, NUM, PERCENT, PIPE, PLUS, POUND, SLASH, SYM, TILDE, UNDERSCORE]);
  const qsNonAccepting = [APOSTROPHE, CLOSEANGLEBRACKET, CLOSEBRACE, CLOSEBRACKET, CLOSEPAREN, COLON, COMMA, DOT, EXCLAMATION, OPENANGLEBRACKET, OPENBRACE, OPENBRACKET, OPENPAREN, QUERY, QUOTE, SEMI];
  const localpartAccepting = [AMPERSAND, APOSTROPHE, ASTERISK, BACKSLASH, BACKTICK, CARET, CLOSEBRACE, DOLLAR, EQUALS, HYPHEN, OPENBRACE, PERCENT, PIPE, PLUS, POUND, QUERY, SLASH, SYM, TILDE, UNDERSCORE];
  const Start = makeState();
  const Localpart = tt(Start, TILDE);
  ta(Localpart, localpartAccepting, Localpart);
  ta(Localpart, groups.domain, Localpart);
  const Domain = makeState(), Scheme = makeState(), SlashScheme = makeState();
  ta(Start, groups.domain, Domain);
  ta(Start, groups.scheme, Scheme);
  ta(Start, groups.slashscheme, SlashScheme);
  ta(Domain, localpartAccepting, Localpart);
  ta(Domain, groups.domain, Domain);
  const LocalpartAt = tt(Domain, AT);
  tt(Localpart, AT, LocalpartAt);
  tt(Scheme, AT, LocalpartAt);
  tt(SlashScheme, AT, LocalpartAt);
  const LocalpartDot = tt(Localpart, DOT);
  ta(LocalpartDot, localpartAccepting, Localpart);
  ta(LocalpartDot, groups.domain, Localpart);
  const EmailDomain = makeState();
  ta(LocalpartAt, groups.domain, EmailDomain);
  ta(EmailDomain, groups.domain, EmailDomain);
  const EmailDomainDot = tt(EmailDomain, DOT);
  ta(EmailDomainDot, groups.domain, EmailDomain);
  const Email$1 = makeState(Email);
  ta(EmailDomainDot, groups.tld, Email$1);
  ta(EmailDomainDot, groups.utld, Email$1);
  tt(LocalpartAt, LOCALHOST, Email$1);
  const EmailDomainHyphen = tt(EmailDomain, HYPHEN);
  ta(EmailDomainHyphen, groups.domain, EmailDomain);
  ta(Email$1, groups.domain, EmailDomain);
  tt(Email$1, DOT, EmailDomainDot);
  tt(Email$1, HYPHEN, EmailDomainHyphen);
  const EmailColon = tt(Email$1, COLON);
  ta(EmailColon, groups.numeric, Email);
  const DomainHyphen = tt(Domain, HYPHEN);
  const DomainDot = tt(Domain, DOT);
  ta(DomainHyphen, groups.domain, Domain);
  ta(DomainDot, localpartAccepting, Localpart);
  ta(DomainDot, groups.domain, Domain);
  const DomainDotTld = makeState(Url);
  ta(DomainDot, groups.tld, DomainDotTld);
  ta(DomainDot, groups.utld, DomainDotTld);
  ta(DomainDotTld, groups.domain, Domain);
  ta(DomainDotTld, localpartAccepting, Localpart);
  tt(DomainDotTld, DOT, DomainDot);
  tt(DomainDotTld, HYPHEN, DomainHyphen);
  tt(DomainDotTld, AT, LocalpartAt);
  const DomainDotTldColon = tt(DomainDotTld, COLON);
  const DomainDotTldColonPort = makeState(Url);
  ta(DomainDotTldColon, groups.numeric, DomainDotTldColonPort);
  const Url$1 = makeState(Url);
  const UrlNonaccept = makeState();
  ta(Url$1, qsAccepting, Url$1);
  ta(Url$1, qsNonAccepting, UrlNonaccept);
  ta(UrlNonaccept, qsAccepting, Url$1);
  ta(UrlNonaccept, qsNonAccepting, UrlNonaccept);
  tt(DomainDotTld, SLASH, Url$1);
  tt(DomainDotTldColonPort, SLASH, Url$1);
  const SchemeColon = tt(Scheme, COLON);
  const SlashSchemeColon = tt(SlashScheme, COLON);
  const SlashSchemeColonSlash = tt(SlashSchemeColon, SLASH);
  const UriPrefix = tt(SlashSchemeColonSlash, SLASH);
  ta(Scheme, groups.domain, Domain);
  tt(Scheme, DOT, DomainDot);
  tt(Scheme, HYPHEN, DomainHyphen);
  ta(SlashScheme, groups.domain, Domain);
  tt(SlashScheme, DOT, DomainDot);
  tt(SlashScheme, HYPHEN, DomainHyphen);
  ta(SchemeColon, groups.domain, Url$1);
  tt(SchemeColon, SLASH, Url$1);
  ta(UriPrefix, groups.domain, Url$1);
  ta(UriPrefix, qsAccepting, Url$1);
  tt(UriPrefix, SLASH, Url$1);
  const UrlOpenbrace = tt(Url$1, OPENBRACE);
  const UrlOpenbracket = tt(Url$1, OPENBRACKET);
  const UrlOpenanglebracket = tt(Url$1, OPENANGLEBRACKET);
  const UrlOpenparen = tt(Url$1, OPENPAREN);
  tt(UrlNonaccept, OPENBRACE, UrlOpenbrace);
  tt(UrlNonaccept, OPENBRACKET, UrlOpenbracket);
  tt(UrlNonaccept, OPENANGLEBRACKET, UrlOpenanglebracket);
  tt(UrlNonaccept, OPENPAREN, UrlOpenparen);
  tt(UrlOpenbrace, CLOSEBRACE, Url$1);
  tt(UrlOpenbracket, CLOSEBRACKET, Url$1);
  tt(UrlOpenanglebracket, CLOSEANGLEBRACKET, Url$1);
  tt(UrlOpenparen, CLOSEPAREN, Url$1);
  tt(UrlOpenbrace, CLOSEBRACE, Url$1);
  const UrlOpenbraceQ = makeState(Url);
  const UrlOpenbracketQ = makeState(Url);
  const UrlOpenanglebracketQ = makeState(Url);
  const UrlOpenparenQ = makeState(Url);
  ta(UrlOpenbrace, qsAccepting, UrlOpenbraceQ);
  ta(UrlOpenbracket, qsAccepting, UrlOpenbracketQ);
  ta(UrlOpenanglebracket, qsAccepting, UrlOpenanglebracketQ);
  ta(UrlOpenparen, qsAccepting, UrlOpenparenQ);
  const UrlOpenbraceSyms = makeState();
  const UrlOpenbracketSyms = makeState();
  const UrlOpenanglebracketSyms = makeState();
  const UrlOpenparenSyms = makeState();
  ta(UrlOpenbrace, qsNonAccepting);
  ta(UrlOpenbracket, qsNonAccepting);
  ta(UrlOpenanglebracket, qsNonAccepting);
  ta(UrlOpenparen, qsNonAccepting);
  ta(UrlOpenbraceQ, qsAccepting, UrlOpenbraceQ);
  ta(UrlOpenbracketQ, qsAccepting, UrlOpenbracketQ);
  ta(UrlOpenanglebracketQ, qsAccepting, UrlOpenanglebracketQ);
  ta(UrlOpenparenQ, qsAccepting, UrlOpenparenQ);
  ta(UrlOpenbraceQ, qsNonAccepting, UrlOpenbraceQ);
  ta(UrlOpenbracketQ, qsNonAccepting, UrlOpenbracketQ);
  ta(UrlOpenanglebracketQ, qsNonAccepting, UrlOpenanglebracketQ);
  ta(UrlOpenparenQ, qsNonAccepting, UrlOpenparenQ);
  ta(UrlOpenbraceSyms, qsAccepting, UrlOpenbraceSyms);
  ta(UrlOpenbracketSyms, qsAccepting, UrlOpenbracketQ);
  ta(UrlOpenanglebracketSyms, qsAccepting, UrlOpenanglebracketQ);
  ta(UrlOpenparenSyms, qsAccepting, UrlOpenparenQ);
  ta(UrlOpenbraceSyms, qsNonAccepting, UrlOpenbraceSyms);
  ta(UrlOpenbracketSyms, qsNonAccepting, UrlOpenbracketSyms);
  ta(UrlOpenanglebracketSyms, qsNonAccepting, UrlOpenanglebracketSyms);
  ta(UrlOpenparenSyms, qsNonAccepting, UrlOpenparenSyms);
  tt(UrlOpenbracketQ, CLOSEBRACKET, Url$1);
  tt(UrlOpenanglebracketQ, CLOSEANGLEBRACKET, Url$1);
  tt(UrlOpenparenQ, CLOSEPAREN, Url$1);
  tt(UrlOpenbraceQ, CLOSEBRACE, Url$1);
  tt(UrlOpenbracketSyms, CLOSEBRACKET, Url$1);
  tt(UrlOpenanglebracketSyms, CLOSEANGLEBRACKET, Url$1);
  tt(UrlOpenparenSyms, CLOSEPAREN, Url$1);
  tt(UrlOpenbraceSyms, CLOSEPAREN, Url$1);
  tt(Start, LOCALHOST, DomainDotTld);
  tt(Start, NL$1, Nl);
  return {
    start: Start,
    tokens: tk
  };
}
function run(start, input, tokens) {
  let len = tokens.length;
  let cursor = 0;
  let multis = [];
  let textTokens = [];
  while (cursor < len) {
    let state = start;
    let secondState = null;
    let nextState = null;
    let multiLength = 0;
    let latestAccepting = null;
    let sinceAccepts = -1;
    while (cursor < len && !(secondState = state.go(tokens[cursor].t))) {
      textTokens.push(tokens[cursor++]);
    }
    while (cursor < len && (nextState = secondState || state.go(tokens[cursor].t))) {
      secondState = null;
      state = nextState;
      if (state.accepts()) {
        sinceAccepts = 0;
        latestAccepting = state;
      } else if (sinceAccepts >= 0) {
        sinceAccepts++;
      }
      cursor++;
      multiLength++;
    }
    if (sinceAccepts < 0) {
      cursor -= multiLength;
      if (cursor < len) {
        textTokens.push(tokens[cursor]);
        cursor++;
      }
    } else {
      if (textTokens.length > 0) {
        multis.push(initMultiToken(Text, input, textTokens));
        textTokens = [];
      }
      cursor -= sinceAccepts;
      multiLength -= sinceAccepts;
      const Multi = latestAccepting.t;
      const subtokens = tokens.slice(cursor - multiLength, cursor);
      multis.push(initMultiToken(Multi, input, subtokens));
    }
  }
  if (textTokens.length > 0) {
    multis.push(initMultiToken(Text, input, textTokens));
  }
  return multis;
}
function initMultiToken(Multi, input, tokens) {
  const startIdx = tokens[0].s;
  const endIdx = tokens[tokens.length - 1].e;
  const value = input.slice(startIdx, endIdx);
  return new Multi(value, tokens);
}
const INIT = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: false
};
function init() {
  INIT.scanner = init$2(INIT.customSchemes);
  for (let i = 0; i < INIT.tokenQueue.length; i++) {
    INIT.tokenQueue[i][1]({
      scanner: INIT.scanner
    });
  }
  INIT.parser = init$1(INIT.scanner.tokens);
  for (let i = 0; i < INIT.pluginQueue.length; i++) {
    INIT.pluginQueue[i][1]({
      scanner: INIT.scanner,
      parser: INIT.parser
    });
  }
  INIT.initialized = true;
}
function tokenize(str) {
  if (!INIT.initialized) {
    init();
  }
  return run(INIT.parser.start, str, run$1(INIT.scanner.start, str));
}
function stringToElements(str, opts, meta) {
  const tokens = tokenize(str);
  const elements = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.t === "nl" && opts.get("nl2br")) {
      const key = `__linkify-el-${meta.elementId++}`;
      elements.push(reactExports.createElement("br", {
        key
      }));
    } else if (!token.isLink || !opts.check(token)) {
      elements.push(token.toString());
    } else {
      let rendered = opts.render(token);
      if (!("key" in rendered.props)) {
        const key = `__linkify-el-${meta.elementId++}`;
        const props = options.assign({
          key
        }, rendered.props);
        rendered = reactExports.cloneElement(rendered, props);
      }
      elements.push(rendered);
    }
  }
  return elements;
}
function linkifyReactElement(element, opts, meta) {
  if (reactExports.Children.count(element.props.children) === 0) {
    return element;
  }
  const children = [];
  reactExports.Children.forEach(element.props.children, (child) => {
    if (typeof child === "string") {
      children.push.apply(children, stringToElements(child, opts, meta));
    } else if (reactExports.isValidElement(child)) {
      if (typeof child.type === "string" && opts.ignoreTags.indexOf(child.type.toUpperCase()) >= 0) {
        children.push(child);
      } else {
        children.push(linkifyReactElement(child, opts, meta));
      }
    } else {
      children.push(child);
    }
  });
  const key = `__linkify-el-${meta.elementId++}`;
  const newProps = options.assign({
    key
  }, element.props);
  return reactExports.cloneElement(element, newProps, children);
}
const Linkify = (props) => {
  let linkId = 0;
  const defaultLinkRender = (_ref) => {
    let {
      tagName,
      attributes,
      content
    } = _ref;
    attributes.key = `__linkify-lnk-${linkId++}`;
    if (attributes.class) {
      attributes.className = attributes.class;
      delete attributes.class;
    }
    return reactExports.createElement(tagName, attributes, content);
  };
  const newProps = {
    key: "__linkify-wrapper"
  };
  for (const prop in props) {
    if (prop !== "options" && prop !== "as" && prop !== "tagName" && prop !== "children") {
      newProps[prop] = props[prop];
    }
  }
  const opts = new Options(props.options, defaultLinkRender);
  const as = props.as || props.tagName || reactExports.Fragment || "span";
  const children = props.children;
  const element = reactExports.createElement(as, newProps, children);
  return linkifyReactElement(element, opts, {
    elementId: 0
  });
};
const changelogLines = changelogText.split("\n").filter((l2) => l2 && !l2.startsWith("#"));
function Changelog({ onDone }) {
  reactExports.useEffect(() => {
    increment("changelog_shown");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { title: "Changelog", onDone, children: changelogLines.map((l2) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkify, { children: l2 }) }, l2)) });
}
const Input = reactExports.forwardRef(function Input2({ appearance, className, ...inputProps }, ref) {
  const inputClassName = classNames(
    "Input",
    `Input-${appearance}`,
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: inputClassName, ref, ...inputProps });
});
function Select({
  appearance,
  className,
  children,
  ...selectProps
}) {
  const selectClassName = classNames(
    "Select",
    `Select-${appearance}`,
    appearanceSystemFont(appearance),
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("select", { className: selectClassName, ...selectProps, children });
}
function Checkbox({
  appearance,
  className,
  children,
  ...inputProps
}) {
  const selectClassName = classNames(
    "Checkbox",
    `Checkbox-${appearance}`,
    className
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: selectClassName, ...inputProps });
}
const EMULATOR_REMOVABLE_DISK_COUNT = 7;
function emulatorUsesPlaceholderDisks(type) {
  return type === "BasiliskII" || type === "SheepShaver";
}
function emulatorSupportsSpeedSetting(type) {
  return type === "Mini vMac";
}
function emulatorSupportsMouseDeltas(type) {
  return type === "BasiliskII" || type === "SheepShaver";
}
function emulatorNeedsMouseDeltas(type) {
  return type === "DingusPPC" || type === "Previous";
}
function emulatorSupportsAppleTalk(type) {
  return type === "BasiliskII" || type === "SheepShaver";
}
function emulatorSupportsDownloadsFolder(type) {
  return type === "BasiliskII" || type === "SheepShaver";
}
function emulatorCpuId(type, cpu) {
  if (type !== "BasiliskII") {
    return void 0;
  }
  switch (cpu) {
    case "68020":
      return 2;
    case "68030":
      return 3;
    case "68040":
      return 4;
    default:
      return void 0;
  }
}
function emulatorModelId(type, gestaltID) {
  if (type !== "BasiliskII") {
    return void 0;
  }
  return gestaltID - 6;
}
const EMULATOR_SPEEDS = /* @__PURE__ */ new Map([
  [-2, "Default"],
  [0, "1x"],
  [1, "2x"],
  [2, "4x"],
  [3, "8x"],
  [4, "16x"],
  [5, "32x"],
  [-1, "All Out"]
]);
class CloudflareWorkerEthernetProvider {
  constructor(zoneName) {
    __privateAdd(this, _connect);
    __privateAdd(this, _reconnect);
    __privateAdd(this, _send);
    __privateAdd(this, _zoneName, void 0);
    __privateAdd(this, _macAddress, void 0);
    __privateAdd(this, _webSocket, void 0);
    __privateAdd(this, _delegate, void 0);
    __privateAdd(this, _state, "opening");
    __privateAdd(this, _bufferedMessages, []);
    __privateAdd(this, _reconnectTimeout, void 0);
    __privateAdd(this, _handleOpen, (event) => {
      __privateSet(this, _state, "opened");
      const bufferedMessages = __privateGet(this, _bufferedMessages);
      __privateSet(this, _bufferedMessages, []);
      for (const message of bufferedMessages) {
        __privateGet(this, _webSocket).send(message);
      }
      if (__privateGet(this, _macAddress)) {
        this.init(__privateGet(this, _macAddress));
      }
    });
    __privateAdd(this, _handleClose, (event) => {
      if (__privateGet(this, _state) === "closed") {
        return;
      }
      __privateMethod(this, _reconnect, reconnect_fn).call(this);
    });
    __privateAdd(this, _handleError, (event) => {
      console.error("WebSocket error", event);
      __privateMethod(this, _reconnect, reconnect_fn).call(this);
    });
    __privateAdd(this, _handleMessage, (event) => {
      var _a;
      const data = JSON.parse(event.data);
      const { type } = data;
      switch (type) {
        case "receive": {
          const { packetArray } = data;
          const packet = new Uint8Array(packetArray);
          (_a = __privateGet(this, _delegate)) == null ? void 0 : _a.receive(packet);
          break;
        }
      }
    });
    __privateSet(this, _zoneName, zoneName);
    __privateSet(this, _webSocket, __privateMethod(this, _connect, connect_fn).call(this));
  }
  description() {
    return `Zone ${__privateGet(this, _zoneName)}`;
  }
  zoneName() {
    return __privateGet(this, _zoneName);
  }
  macAddress() {
    return __privateGet(this, _macAddress);
  }
  init(macAddress) {
    __privateSet(this, _macAddress, macAddress);
    __privateMethod(this, _send, send_fn).call(this, { type: "init", macAddress });
  }
  close() {
    __privateSet(this, _state, "closed");
    __privateMethod(this, _send, send_fn).call(this, { type: "close" });
    __privateGet(this, _webSocket).close();
  }
  send(destination, packet) {
    __privateMethod(this, _send, send_fn).call(this, {
      type: "send",
      destination,
      packetArray: Array.from(packet)
    });
  }
  setDelegate(delegate) {
    __privateSet(this, _delegate, delegate);
  }
}
_zoneName = new WeakMap();
_macAddress = new WeakMap();
_webSocket = new WeakMap();
_delegate = new WeakMap();
_state = new WeakMap();
_bufferedMessages = new WeakMap();
_reconnectTimeout = new WeakMap();
_connect = new WeakSet();
connect_fn = function() {
  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  const origin = `${protocol}//${location.host}`;
  const webSocket = new WebSocket(
    `${origin}/zone/${__privateGet(this, _zoneName)}/websocket`
  );
  webSocket.addEventListener("open", __privateGet(this, _handleOpen));
  webSocket.addEventListener("close", __privateGet(this, _handleClose));
  webSocket.addEventListener("error", __privateGet(this, _handleError));
  webSocket.addEventListener("message", __privateGet(this, _handleMessage));
  return webSocket;
};
_reconnect = new WeakSet();
reconnect_fn = function() {
  const webSocket = __privateGet(this, _webSocket);
  webSocket.removeEventListener("open", __privateGet(this, _handleOpen));
  webSocket.removeEventListener("close", __privateGet(this, _handleClose));
  webSocket.removeEventListener("error", __privateGet(this, _handleError));
  webSocket.removeEventListener("message", __privateGet(this, _handleMessage));
  __privateSet(this, _state, "opening");
  if (__privateGet(this, _reconnectTimeout)) {
    window.clearTimeout(__privateGet(this, _reconnectTimeout));
  }
  __privateSet(this, _reconnectTimeout, window.setTimeout(() => {
    __privateSet(this, _webSocket, __privateMethod(this, _connect, connect_fn).call(this));
  }, 1e3));
};
_send = new WeakSet();
send_fn = function(message) {
  message = JSON.stringify(message);
  if (__privateGet(this, _state) === "opened") {
    __privateGet(this, _webSocket).send(message);
  } else {
    __privateGet(this, _bufferedMessages).push(message);
  }
};
_handleOpen = new WeakMap();
_handleClose = new WeakMap();
_handleError = new WeakMap();
_handleMessage = new WeakMap();
const encodedJs = "Y29uc3Qgc3VwcG9ydGVkID0gdHlwZW9mIEZpbGVTeXN0ZW1GaWxlSGFuZGxlLnByb3RvdHlwZS5jcmVhdGVTeW5jQWNjZXNzSGFuZGxlID09PSAiZnVuY3Rpb24iICYmIHR5cGVvZiBGaWxlU3lzdGVtU3luY0FjY2Vzc0hhbmRsZSA9PT0gImZ1bmN0aW9uIjsKcG9zdE1lc3NhZ2Uoc3VwcG9ydGVkKTsK";
const decodeBase64 = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
const blob = typeof window !== "undefined" && window.Blob && new Blob(["URL.revokeObjectURL(import.meta.url);", decodeBase64(encodedJs)], { type: "text/javascript;charset=utf-8" });
function WorkerWrapper(options2) {
  let objURL;
  try {
    objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
    if (!objURL)
      throw "";
    const worker2 = new Worker(objURL, {
      type: "module",
      name: options2 == null ? void 0 : options2.name
    });
    worker2.addEventListener("error", () => {
      (window.URL || window.webkitURL).revokeObjectURL(objURL);
    });
    return worker2;
  } catch (e) {
    return new Worker(
      "data:text/javascript;base64," + encodedJs,
      {
        type: "module",
        name: options2 == null ? void 0 : options2.name
      }
    );
  }
}
function canSaveDisks() {
  var _a;
  if (!((_a = navigator.storage) == null ? void 0 : _a.getDirectory)) {
    return false;
  }
  if (typeof FileSystemFileHandle !== "function") {
    return false;
  }
  if (workerSyncFileSupport !== "unknown") {
    return workerSyncFileSupport === "supported";
  }
  function update(support) {
    if (workerSyncFileSupport === "unsupported") {
      return;
    }
    workerSyncFileSupport = support;
    localStorage["workerSyncFileSupport"] = support;
  }
  if (!worker) {
    worker = new WorkerWrapper();
    worker.addEventListener("message", (e) => {
      update(e.data ? "supported" : "unsupported");
      worker == null ? void 0 : worker.terminate();
    });
  }
  navigator.storage.getDirectory().catch(() => update("unsupported"));
  return true;
}
let workerSyncFileSupport = localStorage["workerSyncFileSupport"] ?? "unknown";
let worker;
const cdromsManifest = {
  "Games/Lode Runner": {
    name: "Lode Runner",
    srcUrl: "https://archive.org/download/Lode_Runner_The_Legend_Returns_Mac/LodeRunnerCD.iso",
    fileSize: 44539904,
    coverImageHash: "9a04d6c7cda3f2b75bef1ef3f0676462e2e858f5b32e48028b0a7c512dbe7e51",
    coverImageSize: [
      407,
      512
    ],
    coverImageType: "square"
  },
  "Games/DOOM II": {
    name: "DOOM II",
    srcUrl: "https://archive.org/download/DOOMIIForMac/DOOM.bin",
    fileSize: 783458256,
    coverImageHash: "77d043af823e8e9a55285be3372da9a024f5362c5f85507e7fcb967b8db97355",
    coverImageSize: [
      512,
      507
    ],
    coverImageType: "square",
    mode: "MODE1/2352"
  },
  "Games/The 7th Guest": {
    name: "The 7th Guest",
    srcUrl: "https://archive.org/download/the-7th-guest-1996-macintosh-cd-rom/The%207th%20Guest.iso",
    fileSize: 666796032,
    coverImageHash: "192bc1fb5676b6974501ae633f0cd8d812f03e5ad791995533a227550213bda6",
    coverImageSize: [
      453,
      512
    ],
    coverImageType: "square"
  },
  "Games/Riven (Disc 5)": {
    name: "Riven (Disc 5)",
    srcUrl: "https://archive.org/download/riven-the-sequel-to-myst_202302/Riven5.iso",
    fileSize: 664952832,
    coverImageHash: "de389e7a473f8819eedde044d8a92ec9ddf2718e710d7c3d29de434dc1793a02",
    coverImageSize: [
      512,
      499
    ]
  },
  "Games/Dark Forces": {
    name: "Dark Forces",
    srcUrl: "https://archive.org/download/dark-forces/Dark%20Forces.iso",
    fileSize: 264630272,
    coverImageHash: "9502adbd8c8a61fe331aad08a565740dfcd67a102dfcfd7d50acda969130e0ac",
    coverImageSize: [
      512,
      480
    ]
  },
  "Games/The Manhole": {
    name: "The Manhole",
    srcUrl: "https://archive.org/download/TheManholeMacintosh/TheManhole.img",
    fileSize: 5242880,
    coverImageHash: "af6483a77a57263a9b0a6adb19d2037269e6ab0ea6fb1184a72737d76a3335f2",
    coverImageSize: [
      512,
      510
    ]
  },
  "Games/Star Wars: TIE Fighter": {
    name: "Star Wars: TIE Fighter",
    srcUrl: "https://archive.org/download/tiefighter-mac/TIEFighterMac.iso",
    fileSize: 660901888,
    coverImageHash: "23a694b8eab4199a7060218dd4c5d7e5fa5bc02a91bc24f6ebf26bab4ef1f116",
    coverImageSize: [
      400,
      512
    ],
    coverImageType: "square"
  },
  "Games/The Daedalus Encounter (Disc 1)": {
    name: "The Daedalus Encounter (Disc 1)",
    srcUrl: "https://archive.org/download/TheDaedalusEncounterMacCD/the%20daedalus%20encounter%20disc1.iso",
    fileSize: 656457728,
    coverImageHash: "c4c992fdd8dc64d2d16043097c55ca4b4edfd5571bf9085a883515696039d0fb",
    coverImageSize: [
      511,
      512
    ]
  },
  "Games/Myth: The Fallen Lords": {
    name: "Myth: The Fallen Lords",
    srcUrl: "https://archive.org/download/Myth_The_Fallen_Lords_Bungie_1997/Myth%20-%20The%20Fallen%20Lords%20%28Bungie%29%281997%29.ISO",
    fileSize: 538191872,
    coverImageHash: "27a35e193fa10c6f9c90a0cb9d351da4afc077d59033c1fdece5b2bda2819aea",
    coverImageSize: [
      511,
      512
    ]
  },
  "Games/Riven (Making Of)": {
    name: "Riven (Making Of)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/games/MO_RIVEN.iso",
    fileSize: 262760448,
    coverImageHash: "de389e7a473f8819eedde044d8a92ec9ddf2718e710d7c3d29de434dc1793a02",
    coverImageSize: [
      512,
      499
    ]
  },
  "Games/You Don't Know Jack": {
    name: "You Don't Know Jack",
    srcUrl: "https://archive.org/download/ydkj-101-d/YDKJ101D.ISO",
    fileSize: 682291200,
    coverImageHash: "cf9785b7da70eb88afe16414917734e02c75886a3b7fa259415862cf0db780f4",
    coverImageSize: [
      512,
      511
    ]
  },
  "Games/Riven (Disc 4)": {
    name: "Riven (Disc 4)",
    srcUrl: "https://archive.org/download/riven-the-sequel-to-myst_202302/Riven4.iso",
    fileSize: 549541888,
    coverImageHash: "de389e7a473f8819eedde044d8a92ec9ddf2718e710d7c3d29de434dc1793a02",
    coverImageSize: [
      512,
      499
    ]
  },
  "Games/Riven (Disc 2)": {
    name: "Riven (Disc 2)",
    srcUrl: "https://archive.org/download/riven-the-sequel-to-myst_202302/Riven2.iso",
    fileSize: 661841920,
    coverImageHash: "de389e7a473f8819eedde044d8a92ec9ddf2718e710d7c3d29de434dc1793a02",
    coverImageSize: [
      512,
      499
    ]
  },
  "Games/The Daedalus Encounter (Disc 2)": {
    name: "The Daedalus Encounter (Disc 2)",
    srcUrl: "https://archive.org/download/TheDaedalusEncounterMacCD/the%20daedalus%20encounter%20disc2.iso",
    fileSize: 659701760,
    coverImageHash: "013199910ccb7c47440384ad1506f27f651a3f7dbc8a4745a549e08c7510a6b1",
    coverImageSize: [
      512,
      512
    ]
  },
  "Games/You Don't Know Jack XL": {
    name: "You Don't Know Jack XL",
    srcUrl: "https://archive.org/download/you-don-t-know-jack-xl-x-tra-large-v-1.0-win-mac-sierra-on-line-inc.-1996/YOU%20DON%27T%20KNOW%20JACK%20-%20XL%20%28X-tra%20Large%29%20v1.0%20WIN-MAC%20%28Sierra%20On-Line%2C%20Inc.%29%281996%29.iso",
    fileSize: 502597632,
    coverImageHash: "300418135008dd9967e06d947f2bc6316484799825e66dcd869615a88c34ade3",
    coverImageSize: [
      512,
      512
    ]
  },
  "Games/Warcraft III: Reign of Chaos": {
    name: "Warcraft III: Reign of Chaos",
    srcUrl: "https://archive.org/download/Warcraft_3_Reign_of_Chaos_-_Win98-Mac_BlizzardENG/WarcraftIIIReignOfChaos-WinMac.bin",
    fileSize: 808568208,
    coverImageHash: "920b3a56251c8edec45bfd60250b7062bd7c9730ec2ea9311a9c4c897bd5fcb2",
    coverImageSize: [
      507,
      512
    ],
    mode: "MODE1/2352"
  },
  "Games/The Daedalus Encounter (Disc 3)": {
    name: "The Daedalus Encounter (Disc 3)",
    srcUrl: "https://archive.org/download/TheDaedalusEncounterMacCD/the%20daedalus%20encounter%20disc3.iso",
    fileSize: 677199872,
    coverImageHash: "a6d2c5d3e642515db6b43834598a99c0c009c0d4b94f88963fc7cb28ba234f32",
    coverImageSize: [
      511,
      512
    ]
  },
  "Games/Riven (Disc 3)": {
    name: "Riven (Disc 3)",
    srcUrl: "https://archive.org/download/riven-the-sequel-to-myst_202302/Riven3.iso",
    fileSize: 667238400,
    coverImageHash: "de389e7a473f8819eedde044d8a92ec9ddf2718e710d7c3d29de434dc1793a02",
    coverImageSize: [
      512,
      499
    ]
  },
  "Games/Star Wars: X-Wing": {
    name: "Star Wars: X-Wing",
    srcUrl: "https://archive.org/download/XWing_201904/X-Wing.iso",
    fileSize: 665579008,
    coverImageHash: "481ef734d8e39d6d4ac83b0293cdac62ea64736209678821ebc90a780f4f3f86",
    coverImageSize: [
      372,
      480
    ],
    coverImageType: "square"
  },
  "Games/Riven (Disc 1)": {
    name: "Riven (Disc 1)",
    srcUrl: "https://archive.org/download/riven-the-sequel-to-myst_202302/RIVEN1.ISO",
    fileSize: 597465088,
    coverImageHash: "de389e7a473f8819eedde044d8a92ec9ddf2718e710d7c3d29de434dc1793a02",
    coverImageSize: [
      512,
      499
    ]
  },
  "Games/The Journeyman Project": {
    name: "The Journeyman Project",
    srcUrl: "https://archive.org/download/journeyman_1.0/Journeyman.bin",
    fileSize: 607293456,
    coverImageHash: "b2eb2e01a0fb3cdf1b15bd98fef97d6efc9cc6da8ac4e29216fac1ca93b9fbee",
    coverImageSize: [
      512,
      512
    ],
    mode: "MODE1/2352"
  },
  "Games/Iron Helix": {
    name: "Iron Helix",
    srcUrl: "https://archive.org/download/IronHelix/Iron%20Helix.iso",
    fileSize: 563197952,
    coverImageHash: "32255a9c4bce6ad25b6ba958853e361ba45312358236babf8074e1051373b2fb",
    coverImageSize: [
      492,
      512
    ]
  },
  "Games/Quake": {
    name: "Quake",
    srcUrl: "https://archive.org/download/QuakeMacintosh/Quake%20%28Track%2001%29.bin",
    fileSize: 36902880,
    coverImageHash: "b9ba40394babe99432fd1d4b9f4cbd7c5191d7ddd81436f348953bf273f32c3f",
    coverImageSize: [
      379,
      444
    ],
    coverImageType: "square",
    mode: "MODE1/2352"
  },
  "Games/Myst": {
    name: "Myst",
    srcUrl: "https://archive.org/download/myst_20210621/Myst.toast",
    fileSize: 549173248,
    coverImageHash: "25e8de8531b86be75344df0f9baf1992b1bd324942fc5de15e15ff33e2446fbb",
    coverImageSize: [
      451,
      512
    ],
    coverImageType: "square"
  },
  "Games/SimTower": {
    name: "SimTower",
    srcUrl: "https://archive.org/download/SimTowerMacOS/SIMTOWER.bin",
    fileSize: 503694912,
    coverImageHash: "2e8550cc30643b29efd9f83c17a97f305405ddeba1a608f437b658117ca03c37",
    coverImageSize: [
      512,
      509
    ],
    coverImageType: "square",
    mode: "MODE1/2352"
  },
  "Compilations/Peanuts-1": {
    name: "Peanuts-1",
    srcUrl: "https://archive.org/download/PeanutsNeXTISO/Peanuts-1.iso",
    fileSize: 676612096,
    coverImageHash: "8686ea735a9440b95ced15c963e34405f0d8edfb022c71ea15ee8349ec66e71e",
    coverImageSize: [
      507,
      512
    ],
    platform: "NeXT"
  },
  "Compilations/NeXT Education Sampler": {
    name: "NeXT Education Sampler",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/NeXT%20Education%20Sampler%201992%20NeXTSTEP/NeXT-education-sampler-92.iso",
    fileSize: 676143104,
    platform: "NeXT"
  },
  "Compilations/Macworld Gaming Megapac": {
    name: "Macworld Gaming Megapac",
    srcUrl: "https://archive.org/download/Gaming_Megapac_Macworld_B01A/Gaming%20Megapac%20%28Macworld%29%28B01A%29.iso",
    fileSize: 218853376,
    coverImageHash: "ce8137f8865de12a214028a226d0fe18e1895f9d51999eb45726b65959c50acf",
    coverImageSize: [
      509,
      512
    ]
  },
  "Compilations/The Whacked Mac Archives": {
    name: "The Whacked Mac Archives",
    srcUrl: "https://archive.org/download/WhackedMacCD/WhackedMacCD.iso",
    fileSize: 89896960,
    coverImageHash: "4fc59a2ced72726eabef1b8eea03e77ac6676ca6297cd4b3a8f867e42efaa1ae",
    coverImageSize: [
      512,
      504
    ]
  },
  "Compilations/The Macintosh Demo Games CD (1992)": {
    name: "The Macintosh Demo Games CD (1992)",
    srcUrl: "https://archive.org/download/mac-demo-games/MacDemoGames.img",
    fileSize: 167772160,
    coverImageHash: "2f527974d9c8b62f1f974a4b59934ea0bb0b0e8cc3c50916f9d2b3dfbe44a28b",
    coverImageSize: [
      504,
      512
    ]
  },
  "Compilations/MacMania 3 (1996)": {
    name: "MacMania 3 (1996)",
    srcUrl: "https://archive.org/download/mac-mania-2/MacMania%203.toast",
    fileSize: 665337856,
    coverImageHash: "48718f1fce9e40751cd25dd770dd04598bad3c588791a08e7d3262e3fad49528",
    coverImageSize: [
      512,
      493
    ]
  },
  "Compilations/Power Computing: The Disc II": {
    name: "Power Computing: The Disc II",
    srcUrl: "https://archive.org/download/Power_Computing_The_Disc_2_This_Disc_Bytes/Power%20Computing%20-%20The%20Disc%202%20-%20This%20Disc%20Bytes.ISO",
    fileSize: 558958592,
    coverImageHash: "676e28b64ee5b021417993e02437922b2a44a2fcd4a771dee3edbd0e0ce0988c",
    coverImageSize: [
      509,
      512
    ]
  },
  "Compilations/Apple Color Graphics Sampler": {
    name: "Apple Color Graphics Sampler",
    srcUrl: "https://archive.org/download/AppleColorGraphicsSampler/Apple%20Color%20Graphics%20Sampler.iso",
    fileSize: 524595200,
    coverImageHash: "a23fec36d25402422f08d0e0bb1e7149f6f40efe71b32ec8426340e0dd9de715",
    coverImageSize: [
      512,
      434
    ],
    coverImageType: "square"
  },
  "Compilations/Power Computing: The Disc": {
    name: "Power Computing: The Disc",
    srcUrl: "https://archive.org/download/PowerComputing_The_Disc_MacWorld_1995/PowerComputing%20%28The%20Disc%29%28MacWorld%201995%29.ISO",
    fileSize: 525447168,
    coverImageHash: "ce408b626adaae77789fa806d34b7003bacd621770294fe177e14bc0fc91817b",
    coverImageSize: [
      508,
      512
    ]
  },
  "Compilations/MacMania 2 (1995)": {
    name: "MacMania 2 (1995)",
    srcUrl: "https://archive.org/download/mac-mania-2/MacMania%202.toast",
    fileSize: 681865216,
    coverImageHash: "7fc12ff34ec32f17a7d7c9c9c660e6bc6724d3eaffac82cb508be4e384169f81",
    coverImageSize: [
      512,
      495
    ]
  },
  "Compilations/BMUG PD-ROM (1992)": {
    name: "BMUG PD-ROM (1992)",
    srcUrl: "https://archive.org/download/PD-ROM_A/PD-ROM%20A.iso",
    fileSize: 449992704,
    coverImageHash: "964e6f31e9001109195fa17975b7d14308a5c12d98740579c9a19159d504cfff",
    coverImageSize: [
      502,
      512
    ]
  },
  "Compilations/Peanuts-4": {
    name: "Peanuts-4",
    srcUrl: "https://archive.org/download/PeanutsNeXTISO/Peanuts-4.iso",
    fileSize: 679792640,
    coverImageHash: "e27c7f83e31595e6f51b1c9f555b0a6740275498e9963e525a93c08649367f12",
    coverImageSize: [
      502,
      512
    ],
    platform: "NeXT"
  },
  "Compilations/BMUG PD-ROM (1993)": {
    name: "BMUG PD-ROM (1993)",
    srcUrl: "https://archive.org/download/BMUG_PD-ROM_Version_BV3_CDRM1097900/BMUG%20PD-ROM%20Version%20BV3%20%28CDRM1097900%29.iso",
    fileSize: 665761792,
    coverImageHash: "f39d46d9e06e476c228f63d66191b12183d3fa58b3e1be2598d04dba72831918",
    coverImageSize: [
      510,
      512
    ]
  },
  "Compilations/Nebula One": {
    name: "Nebula One",
    srcUrl: "https://archive.org/download/nebulaapps/Nebula%20One.iso",
    fileSize: 675627164,
    platform: "NeXT"
  },
  "Compilations/MacMania 4 (1996)": {
    name: "MacMania 4 (1996)",
    srcUrl: "https://archive.org/download/mac-mania-2/MacMania%204.toast",
    fileSize: 667353088,
    coverImageHash: "b0f43a782a33e6b496a9a2ab942cfd3cdfa54981dc068b6728b95b621fb641cc",
    coverImageSize: [
      512,
      487
    ]
  },
  "Compilations/BMUG PD-ROM (1995)": {
    name: "BMUG PD-ROM (1995)",
    srcUrl: "https://archive.org/download/cdrom-bmug-pdrom-f95/PD-ROM%20F95.toast",
    fileSize: 696627200,
    coverImageHash: "c4e300b39c65c007ea22a7b52be7fd99626209cedbb619f9a3741324c79513b8",
    coverImageSize: [
      372,
      278
    ],
    coverImageType: "square"
  },
  "Compilations/Nebula Two": {
    name: "Nebula Two",
    srcUrl: "https://archive.org/download/nebulaapps/Nebula%20Two.iso",
    fileSize: 634208412,
    platform: "NeXT"
  },
  "Compilations/Peanuts-3": {
    name: "Peanuts-3",
    srcUrl: "https://archive.org/download/PeanutsNeXTISO/Peanuts-3.iso",
    fileSize: 679757824,
    coverImageHash: "d17dd25ea5cbbe713be8dac6f742aa5f11268f542c49c69c85a5e3ed6627f1fd",
    coverImageSize: [
      512,
      509
    ],
    platform: "NeXT"
  },
  "Compilations/The Macintosh Demo Applications CD (1992)": {
    name: "The Macintosh Demo Applications CD (1992)",
    srcUrl: "https://archive.org/download/apple-macintosh-demo-applications-cd-1.0-1992/Apple-MacintoshDemoApplicationsCD-1.0-1992.iso",
    fileSize: 666132480,
    coverImageHash: "ea0130d477326e793fcce1ed31943a2c5b993f40482757a6ddcf7772c8cda2d6",
    coverImageSize: [
      512,
      511
    ]
  },
  "Compilations/MacMania 1 (1995)": {
    name: "MacMania 1 (1995)",
    srcUrl: "https://archive.org/download/mac-mania-2/MacMania%201.toast",
    fileSize: 680083456,
    coverImageHash: "855a88bc420071b9580a464df83d26fd766ba631e6d09bf2eeb0aedcfcafd7f7",
    coverImageSize: [
      512,
      487
    ]
  },
  "Compilations/BMUG PD-ROM (1996)": {
    name: "BMUG PD-ROM (1996)",
    srcUrl: "https://archive.org/download/BMUGFall96PDROM/BMUG%20Fall%2796%20PD-ROM.iso",
    fileSize: 663343104,
    coverImageHash: "e29471a9b2a055e2a4779f30987fb3dd85aeed48f42825e18acc3890ab165b2c",
    coverImageSize: [
      511,
      512
    ]
  },
  "Compilations/NeXT Third-Party Products": {
    name: "NeXT Third-Party Products",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/NeXT%203rd%20Party%20Products%201993%20NeXTSTEP/NEXT_3rd_party_products_93.iso",
    fileSize: 302764032,
    platform: "NeXT"
  },
  "Compilations/Peanuts-Update": {
    name: "Peanuts-Update",
    srcUrl: "https://archive.org/download/PeanutsNeXTISO/Peanuts-Update.iso",
    fileSize: 680777728,
    coverImageHash: "c5f1eea3549c0de656facc187b256a577c1c779384662eeee95c617ddbc46c0a",
    coverImageSize: [
      508,
      512
    ],
    platform: "NeXT"
  },
  "Compilations/Peanuts-2": {
    name: "Peanuts-2",
    srcUrl: "https://archive.org/download/PeanutsNeXTISO/Peanuts-2.iso",
    fileSize: 680097792,
    coverImageHash: "1d0eb4be96fd22f169c7fe23ad350540c8b35aa731d6d0c540b38117b7ea9eb8",
    coverImageSize: [
      509,
      512
    ],
    platform: "NeXT"
  },
  "Compilations/Jobstep": {
    name: "Jobstep",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/Jobstep%20NeXTSTEP/Jobstep.iso",
    fileSize: 325345280,
    platform: "NeXT"
  },
  "Compilations/MacMania 5 (1997)": {
    name: "MacMania 5 (1997)",
    srcUrl: "https://archive.org/download/mac-mania-2/MacMania%205.toast",
    fileSize: 488904704,
    coverImageHash: "7d6638feb40763c99a43db7b6880c914970432ea073818d3af40d6b717c27716",
    coverImageSize: [
      512,
      491
    ]
  },
  "Compilations/PANICDISC": {
    name: "PANICDISC",
    srcUrl: "https://archive.org/download/PanicDiscPANIC.COM/PanicDisc%20%28PANIC.COM%29.bin",
    fileSize: 133174944,
    coverImageHash: "cb7c6533d4f236af163878ec47863c7e4b20b72a88ecd05110c8b0b5de695a78",
    coverImageSize: [
      512,
      508
    ],
    mode: "MODE1/2352"
  },
  "Compilations/MacMania 6 (1997)": {
    name: "MacMania 6 (1997)",
    srcUrl: "https://archive.org/download/mac-mania-2/MacMania%206.toast",
    fileSize: 629211136,
    coverImageHash: "7d5e2900ee91cbed2efdbb8ce1ba8574da97e30b89e1d8da676ff7584c609b25",
    coverImageSize: [
      512,
      487
    ]
  },
  "Compilations/BMUG PD-ROM (1990 - Volume 2)": {
    name: "BMUG PD-ROM (1990 - Volume 2)",
    srcUrl: "https://archive.org/download/cdrom-bmug-pdrom-v2/BMUG_PDROM_V2_1990.cdr",
    fileSize: 619993088,
    coverImageHash: "30524dd791be540edf5cbd4bf714b58e5616fd3f08d9148b3e927fcef9d83ace",
    coverImageSize: [
      512,
      361
    ],
    coverImageType: "square"
  },
  "Compilations/The Macintosh Demo Applications CD (1993)": {
    name: "The Macintosh Demo Applications CD (1993)",
    srcUrl: "https://archive.org/download/The_Macintosh_Demo_Applications_CD_Business_Productivity_Apple_Computer_1993/The%20Macintosh%20Demo%20Applications%20CD%20-%20Business%20Productivity%20%28Apple%20Computer%29%281993%29.iso",
    fileSize: 665774080,
    coverImageHash: "9fb2029d7fa4879a6821d8636791495bb11c989b2a6df0e3d98863ad8ef32edf",
    coverImageSize: [
      510,
      512
    ]
  },
  "Compilations/Big Green CD": {
    name: "Big Green CD",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/Big%20Green%20CD%20NeXTSTEP/BigGreenCd.iso",
    fileSize: 567361536,
    platform: "NeXT"
  },
  "Compilations/BMUG PD-ROM (1988 - Volume 1)": {
    name: "BMUG PD-ROM (1988 - Volume 1)",
    srcUrl: "https://archive.org/download/pd-rom-volume-i-macintosh-software-from-bmug-1988/PD%20ROM%20Volume%20I%20-%20Macintosh%20Software%20from%20BMUG%20%281988%29.iso",
    fileSize: 323551232,
    coverImageHash: "576a6f99ae3ac459ad07e88f61edc7eaac4822b138ad7ca153079ffb151f2375",
    coverImageSize: [
      512,
      459
    ],
    coverImageType: "square"
  },
  "Magazines/Inside Mac Games - Volume 5, Issue 1 (1997)": {
    name: "Inside Mac Games - Volume 5, Issue 1 (1997)",
    srcUrl: "https://archive.org/download/IMG44Vol51/IMG%2044%20Vol%205-1.iso",
    fileSize: 669163520,
    coverImageHash: "ce8be0b9c97b78baeace88c7b396cfc47ae4e0f4cea0b4fabaff9af834afada4",
    coverImageSize: [
      419,
      510
    ],
    coverImageType: "square"
  },
  "Magazines/MacAddict 006 (1997)": {
    name: "MacAddict 006 (1997)",
    srcUrl: "https://archive.org/download/Mac_Addict_-_The_Disc_February_1997/Mac%20Addict%20-%20The%20Disc%20%28February%201997%29.iso",
    fileSize: 659036160,
    coverImageHash: "09731d23bca16cc006f6c20da4ff924682a64d1f07f57dc22798089d258a6e91",
    coverImageSize: [
      499,
      512
    ]
  },
  "Magazines/MacAddict 001 (1996)": {
    name: "MacAddict 001 (1996)",
    srcUrl: "https://archive.org/download/macaddict_thedisc001/MacAddict%20the%20Disc%2001%20Premiere%20%28Imagine%20Publishing%2C%20Inc.%29%28August%201996%29.iso",
    fileSize: 635648e3,
    coverImageHash: "9ec21722784b4c638fffa401eb88b4e635fb97c3cdd17422e47c39f2298bbd7e",
    coverImageSize: [
      512,
      512
    ]
  },
  "Magazines/MacAddict 016 (1997)": {
    name: "MacAddict 016 (1997)",
    srcUrl: "https://archive.org/download/macaddict-cd-016/MacAddict_016_1997_12.iso",
    fileSize: 647444480,
    coverImageHash: "b8f8465afec76a04ab8ee1c8904841a2bf9d371e0a1bf12cdae7271873cacdbf",
    coverImageSize: [
      505,
      512
    ]
  },
  "Magazines/Inside Mac Games - Volume 6, Issue 3 (1998)": {
    name: "Inside Mac Games - Volume 6, Issue 3 (1998)",
    srcUrl: "https://archive.org/download/IMG54Vol63/IMG%2054%20Vol%206-3.iso",
    fileSize: 673867776,
    coverImageHash: "74538f4c2e15a819881dac38035e2d29a55bd898fd69c4cccd44e1b601be3ca9",
    coverImageSize: [
      430,
      511
    ],
    coverImageType: "square"
  },
  "Magazines/Inside Mac Games - Volume 3, Issue 3 (1995)": {
    name: "Inside Mac Games - Volume 3, Issue 3 (1995)",
    srcUrl: "https://archive.org/download/IMG25March1995/Img25March1995.iso",
    fileSize: 603244544,
    coverImageHash: "1dd9e672b766d6b631d681ecd3849699294bdc99be0246921ab45dfe3d9c5599",
    coverImageSize: [
      420,
      511
    ],
    coverImageType: "square"
  },
  "Magazines/Inside Mac Games - Volume 7, Issue 7 (1999)": {
    name: "Inside Mac Games - Volume 7, Issue 7 (1999)",
    srcUrl: "https://archive.org/download/IMGVol77/IMG%20Vol%207-7.iso",
    fileSize: 686477312,
    coverImageHash: "cd0ce12fe3344658e44462f2a49909b9b7245aa6954ce12fc3e935402474fd51",
    coverImageSize: [
      417,
      512
    ],
    coverImageType: "square"
  },
  "Magazines/Inside Mac Games - Volume 4, Issue 8 (1996)": {
    name: "Inside Mac Games - Volume 4, Issue 8 (1996)",
    srcUrl: "https://archive.org/download/IMG39Aug1996/IMG%2039%20Aug%201996.iso",
    fileSize: 680781824,
    coverImageHash: "17a4b2c95e5ef5a70dbd371fcb8ab1703651a4a124323ed4d218aeb5905fd3d6",
    coverImageSize: [
      420,
      510
    ],
    coverImageType: "square"
  },
  "Publishing/Adobe InDesign 2": {
    name: "Adobe InDesign 2",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Adobe_InDesign_2.cdr",
    fileSize: 548405248,
    coverImageHash: "1e75e93a1dab9ec93a2f57d96ad919d9ee04594a1648776cb8a6953c64157f57",
    coverImageSize: [
      180,
      207
    ],
    coverImageType: "square"
  },
  "Publishing/FrameMaker 3.2": {
    name: "FrameMaker 3.2",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/Frame%203.2%20NeXTSTEP/Frame.iso",
    fileSize: 27398144,
    platform: "NeXT"
  },
  "Publishing/Adobe PageMaker 6.5": {
    name: "Adobe PageMaker 6.5",
    srcUrl: "https://archive.org/download/Adobe_Pagemaker_6.5_CD-ROM_Macintosh_9009281_July_1997/Adobe%20Pagemaker%206.5%20CD-ROM%20%28Macintosh%29%289009281%29%28July%201997%29.bin",
    fileSize: 563212272,
    coverImageHash: "b7df064cf1d49143b90c216543a96cdaec77c6fc582bdef1a967552564045813",
    coverImageSize: [
      376,
      382
    ],
    mode: "MODE1/2352"
  },
  "Publishing/OneVision": {
    name: "OneVision",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/OneVision%203.03%20NeXTSTEP/OneVision3.03.iso",
    fileSize: 639514624,
    platform: "NeXT"
  },
  "Developer/MacTech CD-ROM Volumes 1-17": {
    name: "MacTech CD-ROM Volumes 1-17",
    srcUrl: "https://archive.org/download/mac-tech-cd-v-1-17/MacTech_CD_v1-17.toast",
    fileSize: 634019840,
    coverImageHash: "b5455fa9621b25a4b4cb2b62920bc9d963fb9cccbcbead3836d7d6f6e788886d",
    coverImageSize: [
      204,
      200
    ],
    coverImageType: "square"
  },
  "Developer/CodeWarrior Professional 1 - Tools": {
    name: "CodeWarrior Professional 1 - Tools",
    srcUrl: "https://archive.org/download/code-warrior-pr-1-mac-os-reference/CodeWarrior%20Professional%20Release%201/CodeWarrior-PR1_MacOS_Tools.iso",
    fileSize: 322273280,
    coverImageHash: "d00d1217a01a3e9dab8a6b80e03f4e44bbb6014e2db88a199aa496a1f93eef44",
    coverImageSize: [
      511,
      512
    ]
  },
  "Developer/MacHack 2000": {
    name: "MacHack 2000",
    srcUrl: "https://archive.org/download/MacHack2000/MacHack%202000.toast",
    fileSize: 343316480,
    coverImageHash: "0215a7021eece4b9fe85a661bc5d0377712f6f9e230dce5eead5c7a6b80c359b",
    coverImageSize: [
      512,
      500
    ]
  },
  "Developer/Executor": {
    name: "Executor",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/Executor%20v2.0%20NeXTSTEP/executorv2.0.iso",
    fileSize: 314062848,
    platform: "NeXT"
  },
  "Developer/Cub'X-Window": {
    name: "Cub'X-Window",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/Cub%27X-Window%20NeXTSTEP/CUBXWINDOW.iso",
    fileSize: 456396800,
    platform: "NeXT"
  },
  "Developer/CodeWarrior Professional 4 - Tools": {
    name: "CodeWarrior Professional 4 - Tools",
    srcUrl: "https://archive.org/download/cwpro4/CW4MACTOOLS.ISO",
    fileSize: 670488576,
    coverImageHash: "2553294723edc33ff8b754b1221655edcaefb84958f2c680db6635978cf9e300",
    coverImageSize: [
      490,
      512
    ]
  },
  "Developer/MacHack 1994": {
    name: "MacHack 1994",
    srcUrl: "https://archive.org/download/MacHack1994/MacHack%201994.toast",
    fileSize: 666431488
  },
  "Developer/CodeWarrior Professional 4 - Reference": {
    name: "CodeWarrior Professional 4 - Reference",
    srcUrl: "https://archive.org/download/cwpro4/CW_PRO4_REF.ISO",
    fileSize: 677894144,
    coverImageHash: "085e59f63d8b8fccab5fe15dfb28cab22c6f04b478da78489e24373440fd35eb",
    coverImageSize: [
      512,
      507
    ]
  },
  "Developer/MacHack 1995": {
    name: "MacHack 1995",
    srcUrl: "https://archive.org/download/MacHack1995/MacHack%201995.toast",
    fileSize: 645736448
  },
  "Developer/MacHack 2003": {
    name: "MacHack 2003",
    srcUrl: "https://archive.org/download/MacHack2003/MacHack%202003v2.toast",
    fileSize: 643774464
  },
  "Developer/MacHack 1998": {
    name: "MacHack 1998",
    srcUrl: "https://archive.org/download/MacHack1998/MacHack%201998.toast",
    fileSize: 111087616
  },
  "Developer/MacHack 2001": {
    name: "MacHack 2001",
    srcUrl: "https://archive.org/download/MacHack2001/MacHack%202001.toast",
    fileSize: 675432448
  },
  "Developer/MacHack 1993": {
    name: "MacHack 1993",
    srcUrl: "https://archive.org/download/MacHack1993/MacHack%201993.toast",
    fileSize: 359319552
  },
  "Developer/MacHack Historical Archives (1818-1999)": {
    name: "MacHack Historical Archives (1818-1999)",
    srcUrl: "https://archive.org/download/machack-historical-archives-1818-1999/MacHack_Historical_Archives_-_1818-1999.iso",
    fileSize: 570155008,
    coverImageHash: "e3a236e8dd2f1fa3c6e24c15fab958cb22ce8bb681302d259e3503e040711d36",
    coverImageSize: [
      512,
      503
    ]
  },
  "Developer/MacHack 1996": {
    name: "MacHack 1996",
    srcUrl: "https://archive.org/download/MacHack1996/MacHack%201996.toast",
    fileSize: 663420928
  },
  "Developer/MacHack 1999": {
    name: "MacHack 1999",
    srcUrl: "https://archive.org/download/MacHack1999/MacHack%201999.toast",
    fileSize: 154759168
  },
  "Developer/MacHack 1997": {
    name: "MacHack 1997",
    srcUrl: "https://archive.org/download/MacHack1997/MacHack%201997.toast",
    fileSize: 640518144
  },
  "Developer/CodeWarrior Professional 1 - Reference": {
    name: "CodeWarrior Professional 1 - Reference",
    srcUrl: "https://archive.org/download/code-warrior-pr-1-mac-os-reference/CodeWarrior%20Professional%20Release%201/CodeWarrior-PR1_MacOS_Reference.iso",
    fileSize: 577802240,
    coverImageHash: "0afd87a1709aaa3fcf111a65f01b23c488f2522ac7d4fb69a92d833ffdf4b36e",
    coverImageSize: [
      512,
      512
    ]
  },
  "Developer/Apple Developer CDs/1990-07 - Discy Business": {
    name: "1990-07 - Discy Business",
    srcUrl: "https://archive.org/download/AppleDeveloperCDSeriesVolumeIVDiscyBusiness/Apple_Developer_CD_Series_Volume_IV_Discy_Business.cdr",
    fileSize: 668506112,
    coverImageHash: "f3938b4f9cb2c80cbabbc0849c7cd1d805045010084f10768d5483949726cd54",
    coverImageSize: [
      353,
      343
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/1993-04 - System Software Edition": {
    name: "1993-04 - System Software Edition",
    srcUrl: "https://archive.org/download/appledevelopercdseries_199304_systemsoftwareedition/Apple%20Developer%20CD%20Series%2C%201993-04%20-%20System%20Software%20Edition%20%28DEV4-93%29%28Apple%20Computer%2C%20Inc.%29%28April%201993%29.iso",
    fileSize: 669122560,
    coverImageHash: "69708283cf5939b4c30258fde195cb845839e0ecddbcc6bce94dafb1730f6055",
    coverImageSize: [
      512,
      456
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/Inside Macintosh": {
    name: "Inside Macintosh",
    srcUrl: "https://archive.org/download/Inside_Macintosh_CD-ROM_1995/Inside%20Macintosh%20CD-ROM_1995%20%28CD%29.toast",
    fileSize: 674471936,
    coverImageHash: "0f9a4e8daa076eecbee7085c9b61436729f6fef9bbe4d2eabe458b18130f50af",
    coverImageSize: [
      512,
      512
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/1993-01 - The Postman Always Clicks Twice": {
    name: "1993-01 - The Postman Always Clicks Twice",
    srcUrl: "https://archive.org/download/appledevelopercdseries_199301_thepostmanalwaysclickstwice/Apple%20Developer%20CD%20Series%2C%201993-01%20-%20The%20Postman%20Always%20Clicks%20Twice%20%28POSTMAN%29%28Apple%20Computer%2C%20Inc.%29%28January%201993%29.iso",
    fileSize: 668815360,
    coverImageHash: "da30e591653a5cb1754f797c7b907c26a0717c17c918fee1fbf7273a6e8f9b42",
    coverImageSize: [
      512,
      456
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/1993-03 - Other People's Memory": {
    name: "1993-03 - Other People's Memory",
    srcUrl: "https://archive.org/download/appledevelopercdseries_199303_otherpeoplesmemory/Apple%20Developer%20CD%20Series%2C%201993-03%20-%20Other%20People%27s%20Memory%20%28MEMORY%2001%29%28Apple%20Computer%2C%20Inc.%29%28March%201993%29.iso",
    fileSize: 669081600,
    coverImageHash: "32d0ceb790f56daf0a419c268082cd08acf64870bc67c58fc150c53abe16ea88",
    coverImageSize: [
      512,
      456
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/1996-12 - develop Bookmark CD": {
    name: "1996-12 - develop Bookmark CD",
    srcUrl: "https://archive.org/download/AppleDevelopBookmarkCDIssue28/BookmarkCD28.iso",
    fileSize: 662063104,
    coverImageHash: "6a9be2de811a9bbc4acdb685d4b8082c9e7881254bb1e8523617cdea3e4b4afe",
    coverImageSize: [
      509,
      512
    ]
  },
  "Developer/Apple Developer CDs/1991-05 - WWDC Presentations": {
    name: "1991-05 - WWDC Presentations",
    srcUrl: "https://archive.org/download/wwdc_1991/WWDC.iso",
    fileSize: 60614656,
    coverImageHash: "902961b081ac617b65821d2ad56d1be47253ed97b153bc618b4310c54862c402",
    coverImageSize: [
      512,
      336
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/1999-05 - WWDC Presentations": {
    name: "1999-05 - WWDC Presentations",
    srcUrl: "https://archive.org/download/apple-wwdc-99-presentations-cd/WWDC99-CD.ISO",
    fileSize: 292982784,
    coverImageHash: "ce7df47cae5c4a821c8c5e1b197133e85d2286217abd4b08df45d9e515760c35",
    coverImageSize: [
      508,
      512
    ]
  },
  "Developer/Apple Developer CDs/1993-02 - New Hack City": {
    name: "1993-02 - New Hack City",
    srcUrl: "https://archive.org/download/appledevelopercdseries_199302_newhackcity/Apple%20Developer%20CD%20Series%2C%201993-02%20-%20New%20Hack%20City%20%28NEWHACK%29%28Apple%20Computer%2C%20Inc.%29%28February%201993%29.iso",
    fileSize: 668815360,
    coverImageHash: "d003bcbbe1ac98077ab08fc8beea8b3e405df21c94b47c05fe739efb8d064e38",
    coverImageSize: [
      512,
      456
    ],
    coverImageType: "square"
  },
  "Developer/Apple Developer CDs/1996-02 - Tool Chest": {
    name: "1996-02 - Tool Chest",
    srcUrl: "https://archive.org/download/Apple_Developer_CD_Series_Tool_Chest_February_1996_Apple_Computer_1996/Apple%20Developer%20CD%20Series%20Tool%20Chest%20February%201996%20%28Apple%20Computer%29%281996%29.iso",
    fileSize: 630599680,
    coverImageHash: "41d91efa008cdef961f8fe9d7e7baffe16ee96f8f345f9df3eaf1d331023b90a",
    coverImageSize: [
      507,
      512
    ]
  },
  "System Software/Mac OS X 10.0": {
    name: "Mac OS X 10.0",
    srcUrl: "https://archive.org/download/osx_100_4k78_install/osx_100_4k78_install.iso",
    fileSize: 592859136,
    coverImageHash: "6d80185179045147f87618808f575be53243b77614f302ee7ec5e682803f62a6",
    coverImageSize: [
      511,
      512
    ]
  },
  "System Software/Mac OS 8.5": {
    name: "Mac OS 8.5",
    srcUrl: "https://archive.org/download/691-2157-AZUMac_OS_8.5_CD/691-2157-A%2CZU%2CMac%20OS%208.5%20%28CD%29.iso ",
    fileSize: 678912e3,
    coverImageHash: "5216ab723d4cee56cb4f5bcc48aae4eef47aa5ab1940f72e23b6628004151f68",
    coverImageSize: [
      512,
      512
    ]
  },
  "System Software/NeXTSTEP 3.2 (Developer)": {
    name: "NeXTSTEP 3.2 (Developer)",
    srcUrl: "https://archive.org/download/NeXTSTEPDeveloper32/NeXTSTEP%20Developer%203.2.iso",
    fileSize: 201801728,
    coverImageHash: "f81fa161933d357cd64c225d9f4f6d5fd74a195a57433ae79be2e063b846b83f",
    coverImageSize: [
      512,
      458
    ],
    coverImageType: "square",
    platform: "NeXT"
  },
  "System Software/Mac OS 9.0": {
    name: "Mac OS 9.0",
    srcUrl: "https://archive.org/download/mac-os-904/MacOS_904.toast",
    fileSize: 655980544,
    coverImageHash: "7395fe8f126a72e44249bbcafaf6f2b5f0bf5672200e535202e1cd92c8fa25c2",
    coverImageSize: [
      512,
      510
    ]
  },
  "System Software/Mac OS X 10.3 (Disk 3)": {
    name: "Mac OS X 10.3 (Disk 3)",
    srcUrl: "https://archive.org/download/mac-os-x-panther-10.3/Apple%20Mac%20OS%20X%2010.3.0%20-%20Disk%203.iso",
    fileSize: 679043072,
    coverImageHash: "afa1e2d78a761227671a20e49cb4a39c66dda363ccc150db5337b80d39c9d9cd",
    coverImageSize: [
      512,
      508
    ]
  },
  "System Software/Mac OS X 10.2 (Disk 1)": {
    name: "Mac OS X 10.2 (Disk 1)",
    srcUrl: "https://archive.org/download/apple-mac-os-x-10.2.0-build-6c115/disk1.iso",
    fileSize: 655364096,
    coverImageHash: "90885c6c613c1e25de7fde90539d1ea049bd80ecd8fb560f571dcb0acd8566a1",
    coverImageSize: [
      507,
      512
    ]
  },
  "System Software/Mac OS X 10.1": {
    name: "Mac OS X 10.1",
    srcUrl: "https://archive.org/download/mac-ox-x-10.1-internal-edition/Mac%20OS%20X%2010.1%20Puma%20Internal%20Edition.iso",
    fileSize: 671703040,
    coverImageHash: "345db5d118b39163e463171c68e316b3cb7fc499a81f68133ab2d826849ea684",
    coverImageSize: [
      512,
      507
    ]
  },
  "System Software/Mac OS 9.2.2": {
    name: "Mac OS 9.2.2",
    srcUrl: "https://archive.org/download/apple-mac-os-9.2.2/Apple%20MacOS%209.2.2.iso",
    fileSize: 724755456,
    coverImageHash: "d7cfe50dc2c781c38513aa9fe8206a8d965b6b64aa0a9a94879fb8b423564ffa",
    coverImageSize: [
      511,
      512
    ]
  },
  "System Software/Mac OS X Server 1.2": {
    name: "Mac OS X Server 1.2",
    srcUrl: "https://archive.org/download/mac-os-x-server-1.2/Mac%20OS%20X%20Server%201.2.iso",
    fileSize: 681920512,
    coverImageHash: "e6e8fc5a013ca05c467d233c36c75fa8eca28a7f366be521c11f989fc30f2cd0",
    coverImageSize: [
      512,
      491
    ]
  },
  "System Software/NeXTSTEP 3.1 (Developer)": {
    name: "NeXTSTEP 3.1 (Developer)",
    srcUrl: "https://archive.org/download/NeXTSTEPDeveloper31/NeXTSTEP%20Developer%203.1.iso",
    fileSize: 181133312,
    coverImageHash: "f81fa161933d357cd64c225d9f4f6d5fd74a195a57433ae79be2e063b846b83f",
    coverImageSize: [
      512,
      458
    ],
    coverImageType: "square",
    platform: "NeXT"
  },
  "System Software/Mac OS 9.1": {
    name: "Mac OS 9.1",
    srcUrl: "https://archive.org/download/mac-os-9.1/Mac%20OS%209.1.toast",
    fileSize: 671698944,
    coverImageHash: "47e557a51f9a1c6b023aab4265c26bf2c657546e32945f0a96b442ebcf0ea719",
    coverImageSize: [
      512,
      509
    ]
  },
  "System Software/System 7.5.3": {
    name: "System 7.5.3",
    srcUrl: "https://archive.org/download/96073-016AUMacintosh_System_7.5_Version_7.5.3_1996_CD/96073-016A%2CU%2CMacintosh%20System%207.5%20Version%207.5.3_1996%20%28CD%29.toast",
    fileSize: 267694080,
    coverImageHash: "d9c9f1a5f39d557ea784bb2d96c2f3e88574d8ae951c1ffd7bd9148b3da421ab",
    coverImageSize: [
      512,
      442
    ],
    coverImageType: "square"
  },
  "System Software/Mac OS X 10.2 (Disk 2)": {
    name: "Mac OS X 10.2 (Disk 2)",
    srcUrl: "https://archive.org/download/apple-mac-os-x-10.2.0-build-6c115/disk2.iso",
    fileSize: 365465600,
    coverImageHash: "33237a604f6fd3ed52e3dd80d11d483fa513ccc6f4ab4732691378b0c1eaef27",
    coverImageSize: [
      504,
      512
    ]
  },
  "System Software/Rhapsody DR2": {
    name: "Rhapsody DR2",
    srcUrl: "https://archive.org/download/rhapsody_dr2_ppc/rhapsody_dr2_ppc.iso",
    fileSize: 678135808,
    coverImageHash: "7a53e15220822652e31f34153fcbc3eb92ea520b1fcb0675a6166c08ac54f563",
    coverImageSize: [
      512,
      498
    ]
  },
  "System Software/Mac OS X 10.4": {
    name: "Mac OS X 10.4",
    srcUrl: "https://archive.org/download/mac-os-x-10.4-tiger-retail-dvd/Mac%20OS%20X%2010.4%20Tiger%20Retail%20DVD.iso",
    fileSize: 2832531456,
    coverImageHash: "50b17793db23efd5d0ec34df1d71d43695a5a4eae8a30de61eb3253d59779e41",
    coverImageSize: [
      511,
      512
    ]
  },
  "System Software/NeXTSTEP 3.3 (Developer)": {
    name: "NeXTSTEP 3.3 (Developer)",
    srcUrl: "https://archive.org/download/NeXTSTEP33CISC/NeXTSTEP_3.3_Developer.iso",
    fileSize: 403111936,
    coverImageHash: "d7fc92a535d6553efb25c885cd3b07e309e4d1cbd8ca85688d84a48d9f1753a9",
    coverImageSize: [
      512,
      457
    ],
    coverImageType: "square",
    platform: "NeXT"
  },
  "System Software/Mac OS 7.6": {
    name: "Mac OS 7.6",
    srcUrl: "https://archive.org/download/96073-086AUMac_OS_7.6_1997_CD/96073-086A%2CU%2CMac%20OS%207.6_1997%20%28CD%29.toast",
    fileSize: 262447104,
    coverImageHash: "684b569510bc2cfa1d3667bd74c092f6ec9434b7a145cefb912d923405761418",
    coverImageSize: [
      512,
      509
    ]
  },
  "System Software/Mac OS X Server 1.0 (Developer)": {
    name: "Mac OS X Server 1.0 (Developer)",
    srcUrl: "https://archive.org/download/mac-os-x-server-1.0/Mac%20OS%20X%20Server%201.0%20Developer.iso",
    fileSize: 411133952,
    coverImageHash: "33bf221bcbab530dfd1e42ce1efec6616e7895c473d7ed55417c590a50ce86b6",
    coverImageSize: [
      248,
      247
    ]
  },
  "System Software/Mac OS X Server 1.0": {
    name: "Mac OS X Server 1.0",
    srcUrl: "https://archive.org/download/mac-os-x-server-1.0/Mac%20OS%20X%20Server%201.0.iso",
    fileSize: 678135808,
    coverImageHash: "33bf221bcbab530dfd1e42ce1efec6616e7895c473d7ed55417c590a50ce86b6",
    coverImageSize: [
      248,
      247
    ]
  },
  "System Software/NeXTSTEP 3.3": {
    name: "NeXTSTEP 3.3",
    srcUrl: "https://archive.org/download/NeXTSTEP33CISC/NeXTSTEP_3.3_User_%28i386_m68k%29.iso",
    fileSize: 373768192,
    coverImageHash: "d7fc92a535d6553efb25c885cd3b07e309e4d1cbd8ca85688d84a48d9f1753a9",
    coverImageSize: [
      512,
      457
    ],
    coverImageType: "square",
    platform: "NeXT"
  },
  "System Software/Rhapsody DR1": {
    name: "Rhapsody DR1",
    srcUrl: "https://archive.org/download/rhapsody_dr1_ppc/rhapsody_dr1_ppc.iso",
    fileSize: 680462336,
    coverImageHash: "b9e2a74f10ed4806a2bb91d4a0027d3522a1c05dab7cfe67cc00d2508e19652b",
    coverImageSize: [
      511,
      512
    ]
  },
  "System Software/System 7.1.2": {
    name: "System 7.1.2",
    srcUrl: "https://archive.org/download/PowerMac_System_Disc_MacOS_7.1.2/PowerMac_System_Disc_MacOS_7.1.2.iso",
    fileSize: 541503488,
    coverImageHash: "2db60519df4c63b0e75b2adc08e4df2702c93c19598ae30e6b9d7281555f38bc",
    coverImageSize: [
      510,
      512
    ]
  },
  "System Software/Mac OS X 10.3 (Disk 2)": {
    name: "Mac OS X 10.3 (Disk 2)",
    srcUrl: "https://archive.org/download/mac-os-x-panther-10.3/Apple%20Mac%20OS%20X%2010.3.0%20-%20Disk%202.iso",
    fileSize: 676868096,
    coverImageHash: "128f0d15c209432393636ac1a052bbd813b3b2aad13920476d7f68ad5709722b",
    coverImageSize: [
      512,
      508
    ]
  },
  "System Software/Mac OS 8.1": {
    name: "Mac OS 8.1",
    srcUrl: "https://archive.org/download/MacOS_8_Version_8.1_691-1912-A_Apple_Computer_Inc._1998/MacOS%208%20%28Version%208.1%29%28691-1912-A%29%28Apple%20Computer%2C%20Inc.%29%281998%29.iso",
    fileSize: 420235264,
    coverImageHash: "69e05a664a23cdfbfe2acc4ec6704011c7e402b732bf4185d09be363f89e14c8",
    coverImageSize: [
      512,
      510
    ]
  },
  "System Software/NeXTSTEP 3.0": {
    name: "NeXTSTEP 3.0",
    srcUrl: "https://archive.org/download/NEXTSTEP30/nextstep-3.0.iso",
    fileSize: 691292160,
    coverImageHash: "5be9dcd3f4ae9a005c68565b3696b8855183f7e434bb9211fda8c3b1c54198b0",
    coverImageSize: [
      478,
      480
    ],
    platform: "NeXT"
  },
  "System Software/OpenDarwin 6.6.2": {
    name: "OpenDarwin 6.6.2",
    srcUrl: "https://archive.org/download/opendarwin-6.6.2/opendarwin-6.6.2_ppc.cdr",
    fileSize: 681574400,
    coverImageHash: "e4bfc2da06a57c074a27f8b632c8264674efa56b24e8c3c1ad83d9c639d9c368",
    coverImageSize: [
      512,
      512
    ],
    coverImageType: "square"
  },
  "System Software/Mac OS 8.0": {
    name: "Mac OS 8.0",
    srcUrl: "https://archive.org/download/macos8/macos8.iso",
    fileSize: 346646528,
    coverImageHash: "f50caccd9b148dd4e42dca06d42e630591a09a7fb0561421bf0e0b2add3b036c",
    coverImageSize: [
      512,
      509
    ]
  },
  "System Software/Mac OS X 10.3 (Disk 1)": {
    name: "Mac OS X 10.3 (Disk 1)",
    srcUrl: "https://archive.org/download/mac-os-x-panther-10.3/Apple%20Mac%20OS%20X%2010.3.0%20-%20Disk%201.iso",
    fileSize: 679043072,
    coverImageHash: "a94fb458ec8cb7b5cbe71bb7ca75966ada81de1c7394d07a42fe8bd0c077cc3d",
    coverImageSize: [
      512,
      508
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 1)": {
    name: "Mac OS Anthology (Disc 1)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_00_Disk_01_0.iso",
    fileSize: 4262428672,
    coverImageHash: "b13b2ffd261a10fd8b2d42c59606e8f9bbf198d3ddcc657c07283add3ca54d67",
    coverImageSize: [
      512,
      511
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 10)": {
    name: "Mac OS Anthology (Disc 10)",
    srcUrl: "https://archive.org/download/MacOSAnthology2000Disk4/Mac_OS_Anthology_2000_Disk_10.iso",
    fileSize: 593477632,
    coverImageHash: "03a1ef3465928f05c69177dccd72df8a9ac7a70b12273605d613e533aaf80a76",
    coverImageSize: [
      510,
      512
    ]
  },
  "System Software/Compilations/Apple Legacy Recovery CD": {
    name: "Apple Legacy Recovery CD",
    srcUrl: "https://archive.org/download/AppleLegacyRecoveryOct1999/Apple%20Legacy%20Recovery%20Oct%201999.iso",
    fileSize: 679405568,
    coverImageHash: "806b67ae08e46647f22b65c1430e3826bf1856ef21704752775140623323e967",
    coverImageSize: [
      512,
      442
    ],
    coverImageType: "square"
  },
  "System Software/Compilations/Apple System Recovery CD": {
    name: "Apple System Recovery CD",
    srcUrl: "https://archive.org/download/AppleSystemRecoverySept2000/Apple%20System%20Recovery%20Sept%202000.toast",
    fileSize: 621389824,
    coverImageHash: "806b67ae08e46647f22b65c1430e3826bf1856ef21704752775140623323e967",
    coverImageSize: [
      512,
      442
    ],
    coverImageType: "square"
  },
  "System Software/Compilations/Mac OS Anthology (Disc 4)": {
    name: "Mac OS Anthology (Disc 4)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_00_Disk_04.iso",
    fileSize: 4582932480,
    coverImageHash: "1b19d3ad32c0640b41648466286b126bf3b3cd0a18b698ed678eca3ec32c0a7d",
    coverImageSize: [
      508,
      512
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 9)": {
    name: "Mac OS Anthology (Disc 9)",
    srcUrl: "https://archive.org/download/MacOSAnthology2000Disk4/Mac_OS_Anthology_2000_Disk_9.iso",
    fileSize: 247398400,
    coverImageHash: "b4a2de328c37aa0b64afb4c9cc6b6768451cf835e90f6c59ac75b4a897a5d7a1",
    coverImageSize: [
      508,
      512
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 3)": {
    name: "Mac OS Anthology (Disc 3)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_00_Disk_03.iso",
    fileSize: 4330029056,
    coverImageHash: "6771abfe166a7b61afab4cc5b18adce8906c3b61d0ab3664dfdb6772151b7226",
    coverImageSize: [
      512,
      512
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 7)": {
    name: "Mac OS Anthology (Disc 7)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_01_Disk_07.iso",
    fileSize: 3734077440,
    coverImageHash: "63b4707bc6b30e89c9bda32b2233b0582aca930a6a0c269b7c7c9a53496c9344",
    coverImageSize: [
      512,
      511
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 8)": {
    name: "Mac OS Anthology (Disc 8)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_01_Disk_08_0.iso",
    fileSize: 3237216256,
    coverImageHash: "6d937ad1dfd705125d202a4c309c84c35ddbcc221d57f44ed312e504ea84a515",
    coverImageSize: [
      508,
      512
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 6)": {
    name: "Mac OS Anthology (Disc 6)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_00_Disk_06.iso",
    fileSize: 2695790592,
    coverImageHash: "cfe596ffcbc60ad85e03f8da4263cfe6e0668679ee42d697a791a43ce99837a3",
    coverImageSize: [
      510,
      512
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 2)": {
    name: "Mac OS Anthology (Disc 2)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_00_Disk_02.iso",
    fileSize: 4411883520,
    coverImageHash: "93e627d08e9324ea8faa08e9ba1c3eb7477ec8b08dedb02442bfef7988b78a0e",
    coverImageSize: [
      506,
      512
    ]
  },
  "System Software/Compilations/Mac OS Anthology (Disc 5)": {
    name: "Mac OS Anthology (Disc 5)",
    srcUrl: "https://macintoshgarden.org/sites/macintoshgarden.org/files/apps/Mac_OS_Anthology_00_Disk_05.iso",
    fileSize: 4168712192,
    coverImageHash: "f49ea4f9fea7f72165d99e28e08d053ad80af156e8ee004ef7510f2962cb24cc",
    coverImageSize: [
      508,
      512
    ]
  },
  "Reference/Microsoft Bookshelf 98": {
    name: "Microsoft Bookshelf 98",
    srcUrl: "https://archive.org/download/ms-office98-mac-set02/Office98_Disc04.iso",
    fileSize: 677191680,
    coverImageHash: "ad30bb04c370ea4ef78010dd926f360e7714e127b3093cd853f69b782effcdc3",
    coverImageSize: [
      507,
      512
    ]
  },
  "Reference/Grolier Multimedia Encyclopedia (1995)": {
    name: "Grolier Multimedia Encyclopedia (1995)",
    srcUrl: "https://archive.org/download/The_1995_Grolier_Multimedia_Encyclopedia_Version_7.02_Grolier_Mac_1995/The%201995%20Grolier%20Multimedia%20Encyclopedia%20Version%207.02%20%28Grolier%29%28Mac%29%281995%29.iso",
    fileSize: 678506496,
    coverImageHash: "be408c1c624cb9db3e4777ee51fc77d667791d0c01f9b0fff29591bc56f55a35",
    coverImageSize: [
      510,
      512
    ]
  },
  "Reference/Microsoft Encarta 98 (Disk 1)": {
    name: "Microsoft Encarta 98 (Disk 1)",
    srcUrl: "https://archive.org/download/ms-office98-mac-set02/Office98_Disc01.iso",
    fileSize: 681248768,
    coverImageHash: "74ead3ec0f585a08096291cb7ec4787b247d44ce076d6e6c8944351ac98f0a4f",
    coverImageSize: [
      512,
      506
    ]
  },
  "Reference/Apple Media Toolkit": {
    name: "Apple Media Toolkit",
    srcUrl: "https://archive.org/download/apple-media-kit-cd-rom-archive/Apple%20Media%20Kit%20-May%201994.iso",
    fileSize: 711995392,
    coverImageHash: "c0108a1d63614b1f05baeea6854e703dd47192cedc91bd04778b94fa1ef4b1b2",
    coverImageSize: [
      512,
      451
    ],
    coverImageType: "square"
  },
  "Reference/Microsoft Encarta 98 (Disk 2)": {
    name: "Microsoft Encarta 98 (Disk 2)",
    srcUrl: "https://archive.org/download/ms-office98-mac-set02/Office98_Disc02.iso",
    fileSize: 679356416,
    coverImageHash: "4610ff5945438aa6115a593d124c9e93d301e32a61d4861b86be822af51b0e9d",
    coverImageSize: [
      504,
      512
    ]
  },
  "Multimedia/Voyager Presents": {
    name: "Voyager Presents",
    srcUrl: "https://archive.org/download/voyager-presents/Voyager%20Presents%20%281995%29%28Voyager%20Company%29%5BPC-Mac%5D.iso",
    fileSize: 615909376,
    coverImageHash: "a3408d13dfa994e88a90f561475db98c85590e10fcd157d5f050a22cb8bb072b",
    coverImageSize: [
      170,
      154
    ],
    coverImageType: "square"
  },
  "Multimedia/Understanding McLuhan": {
    name: "Understanding McLuhan",
    srcUrl: "https://archive.org/download/understanding-mcluhan/Understanding%20McLuhan%20%281996%29%28Voyager%29%5BMac-PC%5D.iso",
    fileSize: 679495680,
    coverImageHash: "d98171cc1cb4814fc274b7ab70e589b7fb2300477dc4e84520b943225c2396a7",
    coverImageSize: [
      339,
      500
    ],
    coverImageType: "square"
  },
  "Multimedia/Laurie Anderson's Puppet Motel": {
    name: "Laurie Anderson's Puppet Motel",
    srcUrl: "https://archive.org/download/Puppet_Motel_Laurie_Anderson_Voyager_CDRM1296500_1995/Puppet%20Motel%20-%20Laurie%20Anderson%20%28Voyager%29%28CDRM1296500%29%281995%29.iso",
    fileSize: 667203584,
    coverImageHash: "c71864ca145ab7d335dd1d3fc6cd7f444acf8e7b553b34446378ef78abd133de",
    coverImageSize: [
      509,
      512
    ]
  },
  "Multimedia/Just Grandma and Me": {
    name: "Just Grandma and Me",
    srcUrl: "https://archive.org/download/GRANDMALB97/GRANDMA.ISO",
    fileSize: 84670464,
    coverImageHash: "132cfc319068adabdeb061b462aafdbcd9ee58ae70b01e6be57808a00c7d1e04",
    coverImageSize: [
      500,
      499
    ],
    coverImageType: "square"
  },
  "Multimedia/Xplora1: Peter Gabriel's Secret World": {
    name: "Xplora1: Peter Gabriel's Secret World",
    srcUrl: "https://archive.org/download/Xplora1_Peter_Gabriels_Secret_World_Peter_Gabriel_Ltd_1995/Xplora1%20-%20Peter%20Gabriel%27s%20Secret%20World%20%28Peter%20Gabriel%20Ltd%29%281995%29.iso",
    fileSize: 666374144,
    coverImageHash: "cd821b2c41ac90019193975ae5fab0df6a48b62c93331971e6dde68d467543e8",
    coverImageSize: [
      512,
      511
    ]
  },
  "Multimedia/Peter Gabriel: EVE": {
    name: "Peter Gabriel: EVE",
    srcUrl: "https://archive.org/download/Peter_Gabriel_EVE_The_Music_and_Art_Adventure_Peter_Gabriel_1996/Peter%20Gabriel%20-%20EVE%20-%20The%20Music%20and%20Art%20Adventure%20%28Peter%20Gabriel%29%20%281996%29.ISO",
    fileSize: 483915776,
    coverImageHash: "9352c56110fbd2293115f80a568e21236d27d0991045d0189ca3092b9b23d8ed",
    coverImageSize: [
      506,
      512
    ]
  },
  "Multimedia/NEXTIME": {
    name: "NEXTIME",
    srcUrl: "https://archive.org/download/NeXTArchive/NeXT/NeXTSTEP%20Applications/NeXTIME%20NeXTSTEP/NEXTIME.iso",
    fileSize: 201797632,
    platform: "NeXT"
  },
  "Multimedia/The Residents: Freak Show": {
    name: "The Residents: Freak Show",
    srcUrl: "https://archive.org/download/the-residents-freak-show/The%20Residents%20Freak%20Show.iso",
    fileSize: 670072832,
    coverImageHash: "aaf989153a5303d4327cfbe5997e742681dda4bb79d0ddae99eb1082d6112402",
    coverImageSize: [
      509,
      512
    ]
  },
  "Multimedia/For All Mankind": {
    name: "For All Mankind",
    srcUrl: "https://archive.org/download/fam-cd_202401/FAM_CD.ISO",
    fileSize: 680257536,
    coverImageHash: "a629ad61dc1dd6b01dc95ceeaa5a77d4ab5f0c0ee4bd0b80fd839c1f4fe9def5",
    coverImageSize: [
      358,
      512
    ],
    coverImageType: "square"
  }
};
const cdromLibrary = cdromsManifest;
const systemCDROMs = Object.entries(cdromLibrary).filter(
  ([path, entry]) => path.startsWith("System Software/") && !path.startsWith("System Software/Compilations/")
).map(([path, entry]) => entry).sort((a, b) => a.name.localeCompare(b.name, void 0, { numeric: true })).sort(systemCDROMCompare);
function systemCDROMEra(cdrom) {
  const { name } = cdrom;
  if (name.includes("Rhapsody")) {
    return 2;
  } else if (name.includes("Mac OS X Server")) {
    return 3;
  } else if (name.includes("Mac OS X") || name.includes("OpenDarwin")) {
    return 4;
  } else if (name.includes("NeXT")) {
    return 1;
  } else {
    return 0;
  }
}
function systemCDROMCompare(a, b) {
  const aEra = systemCDROMEra(a);
  const bEra = systemCDROMEra(b);
  if (aEra !== bEra) {
    return aEra - bEra;
  }
  const aVersion = /\d+\.\d+/.exec(a.name);
  const bVersion = /\d+\.\d+/.exec(b.name);
  if (!aVersion || !bVersion) {
    return 0;
  }
  return parseFloat(aVersion[0]) - parseFloat(bVersion[0]);
}
async function getCDROMInfo(url) {
  const libraryCDROM = Object.values(cdromLibrary).find(
    (cdrom) => cdrom.srcUrl === url
  );
  if (libraryCDROM) {
    return libraryCDROM;
  }
  if (isCompressedCDROMURL(url)) {
    return fetchCompressedCDROMInfo(url);
  }
  return fetchCDROMInfo(url);
}
async function fetchCDROMInfo(cdromURL) {
  const response = await fetch(`/CD-ROM/${btoa(cdromURL)}`, {
    method: "PUT"
  });
  if (!response.ok) {
    const error = await response.text();
    incrementError("emulator_error:cdrom_url", error);
    throw new Error(error);
  }
  const cdrom = await response.json();
  increment("emulator_cdrom:custom_url");
  return cdrom;
}
function isCompressedCDROMURL(srcUrl) {
  const { host, pathname } = new URL(srcUrl);
  const path = pathname.toLowerCase();
  return host.endsWith("archive.org") && (path.endsWith(".7z") || path.endsWith(".zip"));
}
async function fetchCompressedCDROMInfo(srcUrl) {
  var _a, _b;
  const cacheKey = `compressed_cdrom:${srcUrl}`;
  if (cacheKey in localStorage) {
    return JSON.parse(localStorage[cacheKey]);
  }
  const contentsResponse = await fetch(`${srcUrl}/`, {
    signal: AbortSignal.timeout(2e3)
  });
  if (!contentsResponse.ok) {
    throw new Error(
      `Compressed CD-ROM contents request failed: ${contentsResponse.status} (${contentsResponse.statusText})`
    );
  }
  const contentsBody = await contentsResponse.text();
  const contentsDOM = new DOMParser().parseFromString(
    contentsBody,
    "text/html"
  );
  const cells = contentsDOM.querySelectorAll(".archext tr td");
  if (cells.length < 4) {
    throw new Error(
      `Compressed CD-ROM contents request failed: no contents found`
    );
  }
  const fileNameCell = cells[0];
  const fileName = ((_a = fileNameCell.textContent) == null ? void 0 : _a.trim()) ?? "";
  if (!fileName) {
    throw new Error(
      `Compressed CD-ROM contents request failed: no filename`
    );
  }
  const downloadUrl = contentsResponse.url + `&file=${encodeURIComponent(fileName)}`;
  const fileSizeCell = cells[3];
  const fileSizeStr = ((_b = fileSizeCell.textContent) == null ? void 0 : _b.trim()) ?? "";
  const fileSize = parseInt(fileSizeStr);
  if (isNaN(fileSize)) {
    throw new Error(
      `Compressed CD-ROM contents request failed: invalid size (${fileSizeStr})`
    );
  }
  const cdrom = {
    // The name is not that important, but try to use the filename from the
    // URL if possible.
    name: new URL(srcUrl).pathname.split("/").pop() ?? "Untitled",
    srcUrl: downloadUrl,
    fileSize,
    // Cover images are not shown for on-demand CD-ROMs, so leave them
    // blank.
    coverImageHash: "",
    coverImageSize: [0, 0],
    fetchClientSide: true
  };
  localStorage[cacheKey] = JSON.stringify(cdrom);
  return cdrom;
}
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
function toDateString(date) {
  const pad = (n2) => n2.toString().padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`;
}
function fromDateString(dateString) {
  const dateValue = Date.parse(dateString);
  if (isNaN(dateValue)) {
    return void 0;
  }
  const now = /* @__PURE__ */ new Date();
  const timeZoneOffset = now.getTimezoneOffset() * 60 * 1e3;
  const timeOffset = now.getTime() - new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return new Date(dateValue + timeZoneOffset + timeOffset);
}
const ALL_DISKS_BY_NAME = {
  ...SYSTEM_DISKS_BY_NAME,
  ...FLOPPY_DISKS_BY_NAME
};
function Custom({
  initialRunDef,
  defaultDisk = ALL_DISKS_BY_NAME["System 7.1"],
  onRun,
  onDone
}) {
  reactExports.useEffect(() => {
    increment("custom_shown");
  }, []);
  const [runDef, setRunDef] = reactExports.useState(
    initialRunDef ? initialRunDef.isCustom ? initialRunDef : { ...initialRunDef, isCustom: true } : {
      machine: defaultDisk.machines[0] ?? QUADRA_650,
      ramSize: void 0,
      screenSize: "auto",
      disks: [defaultDisk],
      cdromURLs: [],
      includeInfiniteHD: true,
      includeSavedHD: canSaveDisks(),
      isCustom: true,
      diskFiles: []
    }
  );
  const appleTalkSupported = runDef.disks.length > 0 && runDef.disks[0].appleTalkSupported === true && emulatorSupportsAppleTalk(runDef.machine.emulatorType);
  const [appleTalkEnabled, setAppleTalkEnabled] = reactExports.useState(false);
  const [appleTalkZoneName, setAppleTalkZoneName] = reactExports.useState("");
  const [customDateEnabled, setCustomDateEnabled] = reactExports.useState(
    runDef.customDate !== void 0
  );
  const handleAddDiskFile = reactExports.useCallback(
    (i, onDiskFileAdded) => {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = diskImageExtensions.join(",");
      input.onchange = () => {
        var _a;
        if ((_a = input.files) == null ? void 0 : _a.length) {
          const file = input.files[0];
          setRunDef((runDef2) => ({
            ...runDef2,
            diskFiles: [
              ...runDef2.diskFiles.slice(0, i + 1),
              {
                file,
                treatAsCDROM: file.name.endsWith(".iso") || file.name.endsWith(".toast") || file.name.endsWith(".cdr")
              },
              ...runDef2.diskFiles.slice(i + 1)
            ]
          }));
          onDiskFileAdded == null ? void 0 : onDiskFileAdded();
        }
        input.remove();
      };
      input.click();
    },
    []
  );
  const handleRun = reactExports.useCallback(
    (event) => {
      event.preventDefault();
      onDone();
      increment("custom_run");
      const inNewWindow = event.button === 2 || event.metaKey || event.ctrlKey;
      if (appleTalkSupported && appleTalkEnabled && appleTalkZoneName) {
        runDef.ethernetProvider = new CloudflareWorkerEthernetProvider(
          appleTalkZoneName
        );
      }
      onRun(runDef, inNewWindow);
    },
    [
      appleTalkEnabled,
      appleTalkSupported,
      appleTalkZoneName,
      onDone,
      onRun,
      runDef
    ]
  );
  const canRun = (
    // Need a disk
    (runDef.disks.length > 0 || runDef.diskFiles.length > 0 || runDef.cdromURLs.length > 0 || runDef.includeSavedHD) && // Need AppleTalk to be configured if enabled.
    (!appleTalkSupported || !appleTalkEnabled || appleTalkZoneName !== "")
  );
  const { appearance = "Classic" } = runDef.disks[0] ?? {};
  const macMachines = [];
  const nextMachines = [];
  const experimentalMachines = [];
  for (const machine of ALL_MACHINES) {
    if (isExperimentalMachine(machine)) {
      experimentalMachines.push(machine);
    } else if (machine.platform === "NeXT") {
      nextMachines.push(machine);
    } else {
      macMachines.push(machine);
    }
  }
  const machineOptions = (machines) => machines.map((m2) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: m2.name, children: m2.name }, m2.name));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Dialog,
    {
      title: "Run A Custom Configuration",
      onDone: handleRun,
      doneLabel: "Run",
      doneEnabled: canRun,
      onCancel: onDone,
      appearance,
      className: "Custom-Dialog",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Build your own configuration by selecting a machine and disks." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "Custom-Dialog-Row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Machine:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Select,
            {
              appearance,
              value: runDef.machine.name,
              onChange: (e) => {
                const machine = MACHINES_BY_NAME[e.target.value];
                const update = { machine };
                if (runDef.ramSize && !machine.ramSizes.includes(runDef.ramSize)) {
                  update.ramSize = machine.ramSizes[0];
                }
                setRunDef({ ...runDef, ...update });
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Macs" }),
                machineOptions(macMachines),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Experimental" }),
                machineOptions(experimentalMachines),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "NeXT" }),
                machineOptions(nextMachines)
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Description Dialog-Description", children: [
            "Emulator: ",
            runDef.machine.emulatorType
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "Custom-Dialog-Row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "RAM:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Select,
            {
              appearance,
              value: runDef.ramSize ?? runDef.machine.ramSizes[0],
              onChange: (e) => setRunDef({
                ...runDef,
                ramSize: e.target.value
              }),
              children: runDef.machine.ramSizes.map((ramSize) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: ramSize, children: [
                ramSize,
                "B"
              ] }, ramSize))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Description Dialog-Description", children: "Not all operating systems versions can run with a reduced amount of RAM." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "Custom-Dialog-Row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Screen Size:" }),
          runDef.machine.fixedScreenSize ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            runDef.machine.fixedScreenSize.width,
            " x",
            " ",
            runDef.machine.fixedScreenSize.height
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            ScreenSizePicker,
            {
              appearance,
              value: runDef.screenSize,
              onChange: (screenSize) => setRunDef({ ...runDef, screenSize })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Description Dialog-Description", children: "Not all machines support custom screen sizes, some sizes may result in crashes." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Row", children: [
          runDef.disks.map((disk, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            DiskOption,
            {
              disk,
              onChange: (disk2) => setRunDef({
                ...runDef,
                disks: [
                  ...runDef.disks.slice(0, i),
                  disk2,
                  ...runDef.disks.slice(i + 1)
                ]
              }),
              onAdd: () => setRunDef({
                ...runDef,
                disks: [
                  ...runDef.disks.slice(0, i + 1),
                  defaultDisk,
                  ...runDef.disks.slice(i + 1)
                ]
              }),
              onAddDiskFile: (onDiskFileAdded) => handleAddDiskFile(0, onDiskFileAdded),
              onRemove: () => setRunDef((runDef2) => ({
                ...runDef2,
                disks: [
                  ...runDef2.disks.slice(0, i),
                  ...runDef2.disks.slice(i + 1)
                ]
              })),
              appearance
            },
            i
          )),
          runDef.diskFiles.map((diskFile, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            DiskFileOption,
            {
              diskFile,
              onChange: (diskFile2) => setRunDef({
                ...runDef,
                diskFiles: [
                  ...runDef.diskFiles.slice(0, i),
                  diskFile2,
                  ...runDef.diskFiles.slice(i + 1)
                ]
              }),
              onAdd: () => handleAddDiskFile(i),
              onRemove: () => setRunDef({
                ...runDef,
                diskFiles: [
                  ...runDef.diskFiles.slice(0, i),
                  ...runDef.diskFiles.slice(i + 1)
                ]
              }),
              appearance
            },
            i
          )),
          runDef.disks.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Disk:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                appearance,
                onClick: (e) => {
                  e.preventDefault();
                  setRunDef({
                    ...runDef,
                    disks: [defaultDisk]
                  });
                },
                children: "Add"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Description Dialog-Description", children: "Some machines and system software combinations may not work." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Row", children: [
          runDef.cdromURLs.map((cdromURL, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CDROMOption,
            {
              cdromURL,
              onChange: (cdromURL2) => setRunDef({
                ...runDef,
                cdromURLs: [
                  ...runDef.cdromURLs.slice(0, i),
                  cdromURL2,
                  ...runDef.cdromURLs.slice(i + 1)
                ]
              }),
              onAdd: () => setRunDef({
                ...runDef,
                cdromURLs: [
                  ...runDef.cdromURLs.slice(0, i + 1),
                  "",
                  ...runDef.cdromURLs.slice(i + 1)
                ]
              }),
              onRemove: () => setRunDef({
                ...runDef,
                cdromURLs: [
                  ...runDef.cdromURLs.slice(0, i),
                  ...runDef.cdromURLs.slice(i + 1)
                ]
              }),
              appearance
            },
            i
          )),
          runDef.cdromURLs.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Disk URL:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                appearance,
                onClick: (e) => {
                  e.preventDefault();
                  setRunDef({
                    ...runDef,
                    cdromURLs: [""]
                  });
                },
                children: "Add"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Description Dialog-Description", children: [
            "Disk or CD-ROM image from a URL. The image must be a raw .iso/.img/.toast/.bin file (i.e. not compressed) and from",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/search?q=repo%3Amihaip%2Finfinite-mac+%22const+allowedDomains%22&type=code", children: "a supported site" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Extras:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                appearance,
                checked: runDef.includeInfiniteHD,
                onChange: (e) => setRunDef({
                  ...runDef,
                  includeInfiniteHD: e.target.checked
                })
              }
            ),
            "Infinite HD"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Description Dialog-Description", children: "Include the Infinite HD disk, which has a large collection of useful software." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: classNames({ "disabled": !canSaveDisks() }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                appearance,
                disabled: !canSaveDisks(),
                checked: runDef.includeSavedHD,
                onChange: (e) => setRunDef({
                  ...runDef,
                  includeSavedHD: e.target.checked
                })
              }
            ),
            "Saved HD"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Description Dialog-Description", children: [
            "Include the Saved HD disk, an empty 1 GB disk whose contents are preserved across visits to this site (best effort).",
            !canSaveDisks() && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Not supported by this browser" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Row Custom-Dialog-InputCompensate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                appearance,
                checked: customDateEnabled,
                onChange: () => {
                  if (customDateEnabled) {
                    setCustomDateEnabled(false);
                    setRunDef({
                      ...runDef,
                      customDate: void 0
                    });
                  } else {
                    setCustomDateEnabled(true);
                  }
                }
              }
            ),
            "Custom Date"
          ] }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              style: {
                visibility: customDateEnabled ? "visible" : "hidden"
              },
              appearance,
              type: "date",
              value: toDateString(runDef.customDate ?? /* @__PURE__ */ new Date()),
              onChange: (e) => setRunDef({
                ...runDef,
                customDate: fromDateString(e.target.value)
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Description Dialog-Description", children: "Allows time-limited software to be used." })
        ] }),
        appleTalkSupported && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Row Custom-Dialog-InputCompensate", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Checkbox,
              {
                appearance,
                checked: appleTalkEnabled,
                onChange: () => setAppleTalkEnabled(!appleTalkEnabled)
              }
            ),
            "Enable AppleTalk"
          ] }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              style: {
                visibility: appleTalkEnabled ? "visible" : "hidden"
              },
              appearance,
              type: "text",
              value: appleTalkZoneName,
              placeholder: "Zone Name",
              size: 12,
              onChange: (e) => setAppleTalkZoneName(e.target.value)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Description Dialog-Description", children: "Allow local networking between emulated machines in the same zone." })
        ] })
      ]
    }
  );
}
function DiskOption({
  disk,
  onChange,
  onAdd,
  onAddDiskFile,
  onRemove,
  appearance
}) {
  const diskOption = (disk2) => {
    const name = systemDiskName(disk2);
    return /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: name, children: name }, name);
  };
  const macDisks = [];
  const nextDisks = [];
  for (const disk2 of Object.values(SYSTEM_DISKS_BY_NAME)) {
    if (disk2.machines[0].platform === "NeXT") {
      nextDisks.push(disk2);
    } else {
      macDisks.push(disk2);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Repeated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Disk:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        className: "Custom-Dialog-Repeated-Disk",
        appearance,
        value: systemDiskName(disk),
        onChange: (e) => {
          const value = e.target.value;
          if (value === "disk-file") {
            onAddDiskFile(onRemove);
          } else {
            onChange(ALL_DISKS_BY_NAME[e.target.value]);
          }
        },
        children: [
          macDisks.map(diskOption),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "NeXT" }),
          nextDisks.map(diskOption),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Floppy Disks" }),
          Object.values(FLOPPY_DISKS_BY_NAME).map(diskOption),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true, children: "Custom" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "disk-file", children: "Disk File…" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "AddRemove",
        appearance,
        onClick: (e) => {
          e.preventDefault();
          onRemove();
        },
        children: "–"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "AddRemove",
        appearance,
        onClick: (e) => {
          e.preventDefault();
          onAdd();
        },
        children: "+"
      }
    )
  ] });
}
function DiskFileOption({
  diskFile,
  onChange,
  onAdd,
  onRemove,
  appearance
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Repeated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Disk:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Custom-Dialog-Repeated-Disk", children: diskFile.file.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "AddRemove",
        appearance,
        onClick: (e) => {
          e.preventDefault();
          onRemove();
        },
        children: "–"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "AddRemove",
        appearance,
        onClick: (e) => {
          e.preventDefault();
          onAdd();
        },
        children: "+"
      }
    )
  ] });
}
function CDROMOption({
  cdromURL,
  onChange,
  onAdd,
  onRemove,
  appearance
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-Repeated", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Custom-Dialog-Label", children: "Disk URL:" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Input,
      {
        type: "url",
        size: 50,
        value: cdromURL,
        onChange: (e) => onChange(e.target.value),
        appearance
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        appearance,
        className: "Custom-Dialog-CDROMs",
        value: "",
        onChange: (e) => onChange(e.target.value),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "System CD-ROMs" }),
          systemCDROMs.map((cdrom, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
            i > 0 && systemCDROMEra(cdrom) !== systemCDROMEra(systemCDROMs[i - 1]) && /* @__PURE__ */ jsxRuntimeExports.jsx("option", { disabled: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: cdrom.srcUrl, children: cdrom.name })
          ] }, cdrom.srcUrl))
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "AddRemove",
        appearance,
        onClick: (e) => {
          e.preventDefault();
          onRemove();
        },
        children: "–"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        className: "AddRemove",
        appearance,
        onClick: (e) => {
          e.preventDefault();
          onAdd();
        },
        children: "+"
      }
    )
  ] });
}
function ScreenSizePicker({
  appearance,
  value,
  onChange
}) {
  const [width, setWidth] = reactExports.useState(
    typeof value === "string" ? 640 : value.width
  );
  const [height, setHeight] = reactExports.useState(
    typeof value === "string" ? 480 : value.height
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Custom-Dialog-ScreenSize", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Select,
      {
        appearance,
        value: typeof value === "string" ? value : "custom",
        onChange: (e) => {
          const option = e.target.value;
          if (option === "custom") {
            onChange({ width, height });
          } else {
            onChange(option);
          }
        },
        children: Object.entries({
          "auto": "Automatic",
          "window": "Window",
          "fullscreen": "Full Screen",
          "custom": "Custom"
        }).map(([value2, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: value2, children: label }, value2))
      }
    ),
    typeof value !== "string" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          appearance,
          type: "number",
          min: 2,
          max: 4096,
          step: 2,
          value: width,
          onChange: (e) => {
            const width2 = parseInt(e.target.value);
            setWidth(width2);
            onChange({ width: width2, height });
          },
          size: 4
        }
      ),
      " ",
      "×",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          appearance,
          type: "number",
          min: 2,
          max: 4096,
          step: 2,
          value: height,
          onChange: (e) => {
            const height2 = parseInt(e.target.value);
            setHeight(height2);
            onChange({ width, height: height2 });
          },
          size: 4
        }
      )
    ] })
  ] });
}
function usePersistentState(defaultValue, key, onValueChange) {
  const [value, setValue] = reactExports.useState(() => {
    const persistedValue = window.localStorage.getItem(key);
    try {
      return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue;
    } catch {
      console.warn("Could not parse persistent state", persistedValue);
      return defaultValue;
    }
  });
  reactExports.useEffect(() => {
    const persistedValue = JSON.stringify(value);
    if (persistedValue !== void 0) {
      window.localStorage.setItem(key, persistedValue);
    } else {
      console.warn("Could not serialize persistent state", value);
    }
    onValueChange == null ? void 0 : onValueChange();
  }, [key, value, onValueChange]);
  return [value, setValue];
}
function startViewTransition(updateCallback) {
  console.log("startViewTransition");
  if ("startViewTransition" in document) {
    document.startViewTransition(updateCallback);
  } else {
    updateCallback();
  }
}
function viewTransitionNameForDisk(disk) {
  const pieces = [
    "disk",
    disk.displayName,
    disk.displaySubtitle,
    ...disk.releaseDate
  ];
  return pieces.join("-").replace(/[^a-zA-Z0-9]/g, "-");
}
function Browser({
  onRun,
  initialCustomRunDef
}) {
  const [diskFilter, setDiskFilter] = useDiskFilter();
  const { byYear: disksByYear } = disks[diskFilter];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Browser", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "Infinite Mac" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Description,
        {
          onRun,
          initialCustomRunDef
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Disks-Container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiskFilters, { value: diskFilter, onChange: setDiskFilter }),
      Array.from(Object.entries(disksByYear), ([year, disks2]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Year", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: year }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Disks", children: disks2.map((disk, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Disk, { disk, onRun }, i)) })
      ] }, year)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Year", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: (/* @__PURE__ */ new Date()).getFullYear() }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Disks", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomDisk, { onRun }) })
      ] })
    ] })
  ] });
}
function Description({
  onRun,
  initialCustomRunDef
}) {
  const [aboutVisible, setAboutVisible] = reactExports.useState(false);
  const [changelogVisible, setChangelogVisible] = reactExports.useState(false);
  const [donateVisible, setDonateVisible] = reactExports.useState(false);
  const [customVisible, setCustomVisible] = reactExports.useState(
    location.pathname === "/run" || initialCustomRunDef !== void 0
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Description", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Infinite Mac is a collection of classic Macintosh and NeXT system releases and software, all easily accessible from the comfort of a (modern) web browser." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Pick any version of System Software/Mac OS or NeXTStep/OPENSTEP from the 1980s or 1990s and run it (and major software of that era) within a virtual machine. You can also",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: () => setCustomVisible(true), children: "run a custom version" }),
      " ",
      "with your choice of machine and virtual disks. Files can be imported and exported using drag and drop, and System 7 and onward have more advanced integrations as well – refer to the welcome screen in each machine for more details.",
      customVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Custom,
        {
          initialRunDef: initialCustomRunDef,
          onRun,
          onDone: () => setCustomVisible(false)
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      aboutVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(About, { onDone: () => setAboutVisible(false) }),
      changelogVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(Changelog, { onDone: () => setChangelogVisible(false) }),
      donateVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(Donate, { onDone: () => setDonateVisible(false) }),
      "You can",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: () => setAboutVisible(true), children: "learn more" }),
      ",",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: () => setChangelogVisible(true), children: "see what's changed recently" }),
      " ",
      "or ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: () => setDonateVisible(true), children: "donate" }),
      " to support this project."
    ] })
  ] });
}
const disks = {
  "all": { label: "All", all: ALL_DISKS, byYear: DISKS_BY_YEAR },
  "notable": {
    label: "Notable",
    all: NOTABLE_DISKS,
    byYear: NOTABLE_DISKS_BY_YEAR
  },
  "next": { label: "NeXT", all: NEXT_DISKS, byYear: NEXT_DISKS_BY_YEAR }
};
function useDiskFilter() {
  const filterParam = new URLSearchParams(location.search).get("filter");
  let defaultValue = "notable";
  let useClientState = false;
  if (filterParam && filterParam.toLowerCase() in disks) {
    defaultValue = filterParam;
    useClientState = true;
  }
  const clientState = reactExports.useState(defaultValue);
  const persistentState = usePersistentState(
    defaultValue,
    "diskFilter"
  );
  return useClientState ? clientState : persistentState;
}
function DiskFilters({
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Disk-Filters-Container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Disk-Filters", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "Disk-Filters-Label", children: "Releases:" }),
    Object.entries(disks).map(([filter, { label, all }]) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      DiskFiltersButton,
      {
        onClick: () => onChange(filter),
        selected: filter === value,
        label,
        count: all.length
      },
      filter
    ))
  ] }) });
}
function DiskFiltersButton({
  onClick,
  selected,
  label,
  count
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: classNames("Disk-Filters-Button", {
        "selected": selected
      }),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "name-container", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "name", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "name-sizer", children: label })
        ] }),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "count", children: [
          "(",
          count,
          ")"
        ] })
      ]
    }
  );
}
function Disk({ disk, onRun }) {
  let { bezelStyle } = disk.machines[0];
  if (disk.machines[0].emulatorType === "DingusPPC") {
    bezelStyle = "Pinstripes";
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DiskFrame,
    {
      bezelStyle,
      viewTransitionName: viewTransitionNameForDisk(disk),
      screen: isPlaceholderDiskDef(disk) ? /* @__PURE__ */ jsxRuntimeExports.jsx(PlaceholderDiskContents, { disk }) : /* @__PURE__ */ jsxRuntimeExports.jsx(DiskContents, { disk, onRun })
    }
  );
}
function DiskFrame({
  bezelStyle,
  screen,
  viewTransitionName
}) {
  const windowWidth = useWindowWidth();
  let screenWidth = windowWidth - (windowWidth <= 400 ? 110 : 180);
  const bezelSize = windowWidth <= 440 ? "Small-ish" : "Medium";
  screenWidth = Math.max(Math.min(screenWidth, 320), 200);
  const screenHeight = Math.round(screenWidth * 0.75);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    ScreenFrame,
    {
      className: "Disk",
      bezelStyle,
      width: screenWidth,
      height: screenHeight,
      bezelSize,
      screen,
      viewTransitionName
    }
  );
}
function DiskContents({ disk, onRun }) {
  const { bezelStyle } = disk.machines[0];
  const [customVisible, setCustomVisible] = reactExports.useState(false);
  const run2 = (event) => {
    const runDef = {
      disks: [disk],
      screenSize: "auto",
      includeInfiniteHD: true,
      includeSavedHD: canSaveDisks(),
      machine: disk.machines[0],
      cdromURLs: [],
      diskFiles: []
    };
    const inNewWindow = event.button === 2 || event.metaKey || event.ctrlKey;
    onRun(runDef, inNewWindow);
  };
  const { appearance = "Classic" } = disk;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: classNames("DiskContents", `DiskContents-${bezelStyle}`),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DiskHeader, { disk }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Row DiskDescription", children: disk.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Row Buttons", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              appearance,
              className: "CustomizeButton",
              onClick: () => setCustomVisible(true),
              children: "Customize…"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { appearance, onClick: run2, children: "Run" })
        ] }),
        customVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Custom,
          {
            defaultDisk: disk,
            onRun,
            onDone: () => setCustomVisible(false)
          }
        )
      ]
    }
  );
}
function PlaceholderDiskContents({ disk }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "DiskContents DiskContents-Placeholder", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DiskHeader, { disk }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Row DiskDescription", children: disk.description })
  ] });
}
function CustomDisk({ onRun }) {
  const [customVisible, setCustomVisible] = reactExports.useState(false);
  const today = /* @__PURE__ */ new Date();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DiskFrame,
    {
      bezelStyle: "Pinstripes",
      screen: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "DiskContents", children: [
        customVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(
          Custom,
          {
            onRun,
            onDone: () => setCustomVisible(false)
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DiskHeader,
          {
            disk: {
              releaseDate: [
                today.getFullYear(),
                today.getMonth() + 1,
                today.getDate()
              ],
              displayName: "Custom"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Row DiskDescription", children: "Build a custom instance, using your choice of emulated machine and disk images." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Row Buttons", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            appearance: "Platinum",
            onClick: () => setCustomVisible(true),
            children: "Run…"
          }
        ) })
      ] })
    }
  );
}
function DiskHeader({
  disk
}) {
  const [year, month, day] = disk.releaseDate;
  const releaseDateString = new Date(year, month - 1, day).toLocaleDateString(
    void 0,
    {
      year: "numeric",
      month: "long",
      day: "numeric"
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "Row", children: [
    disk.displayName,
    disk.displaySubtitle && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "Subtitle", children: [
      " (",
      disk.displaySubtitle,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ReleaseDate", children: [
      releaseDateString,
      disk.isUnstable && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "Unstable-Warning", children: "Unstable" })
    ] })
  ] }) });
}
function Footer({
  onLogoClick,
  showFullscreenButton
}) {
  const [aboutVisible, setAboutVisible] = reactExports.useState(false);
  const [donateVisible, setDonateVisible] = reactExports.useState(false);
  const handleFullScreenClick = () => {
    var _a, _b, _c, _d;
    ((_b = (_a = document.body).requestFullscreen) == null ? void 0 : _b.call(_a)) || ((_d = (_c = document.body).webkitRequestFullscreen) == null ? void 0 : _d.call(_c));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "Footer", children: [
    aboutVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(About, { onDone: () => setAboutVisible(false) }),
    donateVisible && /* @__PURE__ */ jsxRuntimeExports.jsx(Donate, { onDone: () => setDonateVisible(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { onClick: onLogoClick, className: "Footer-Logo", children: "Infinite Mac" }),
    showFullscreenButton && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        onClick: handleFullScreenClick,
        className: "Footer-Fullscreen",
        children: "Full Screen"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        onClick: () => setAboutVisible(true),
        className: "Footer-About",
        children: "About"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        onClick: () => setDonateVisible(true),
        className: "Footer-Donate",
        children: "Donate"
      }
    )
  ] });
}
class BroadcastChannelEthernetProvider {
  constructor() {
    __privateAdd(this, _broadcastChannel, new BroadcastChannel("ethernet"));
    __privateAdd(this, _macAddress2, void 0);
    __privateAdd(this, _delegate2, void 0);
    __privateAdd(this, _handleMessage2, (event) => {
      var _a;
      const { destination, packet } = event.data;
      if (destination === __privateGet(this, _macAddress2) || destination === "*" || destination === "AT") {
        (_a = __privateGet(this, _delegate2)) == null ? void 0 : _a.receive(packet);
      }
    });
    __privateGet(this, _broadcastChannel).addEventListener("message", __privateGet(this, _handleMessage2));
  }
  description() {
    return `Loopback`;
  }
  macAddress() {
    return __privateGet(this, _macAddress2);
  }
  init(macAddress) {
    __privateSet(this, _macAddress2, macAddress);
  }
  send(destination, packet) {
    __privateGet(this, _broadcastChannel).postMessage({
      destination,
      packet
    });
  }
  setDelegate(delegate) {
    __privateSet(this, _delegate2, delegate);
  }
}
_broadcastChannel = new WeakMap();
_macAddress2 = new WeakMap();
_delegate2 = new WeakMap();
_handleMessage2 = new WeakMap();
function runDefFromUrl(urlString) {
  let url;
  try {
    url = new URL(urlString);
  } catch (e) {
    return void 0;
  }
  const { searchParams } = url;
  let isCustom = searchParams.has("edit");
  let includeInfiniteHD;
  let includeSavedHD;
  const disks2 = [];
  const yearDiskDef = diskFromYearPath(url.pathname);
  if (yearDiskDef) {
    disks2.push(yearDiskDef);
    includeInfiniteHD = searchParams.get("infinite_hd") !== "false";
    includeSavedHD = searchParams.get("saved_hd") !== "false";
  } else {
    includeInfiniteHD = searchParams.get("infinite_hd") === "true";
    includeSavedHD = searchParams.get("saved_hd") === "true";
    isCustom = true;
  }
  for (const diskName of searchParams.getAll("disk")) {
    const disk = ALL_DISKS.find((disk2) => disk2.displayName === diskName) ?? FLOPPY_DISKS.find((disk2) => disk2.displayName === diskName);
    if (disk && !isPlaceholderDiskDef(disk)) {
      disks2.push(disk);
    }
  }
  let machine = void 0;
  const machineName = searchParams.get("machine");
  if (machineName) {
    machine = MACHINES_BY_NAME[machineName];
    isCustom = true;
  }
  if (!machine && disks2.length > 0) {
    machine = disks2[0].machines[0];
  }
  if (!machine) {
    return void 0;
  }
  let ramSize = void 0;
  const ramSizeParam = searchParams.get("ram");
  if (ramSizeParam && machine.ramSizes.includes(ramSizeParam)) {
    ramSize = ramSizeParam;
    isCustom = true;
  }
  let screenSize = "auto";
  const screenSizeParam = searchParams.get("screenSize");
  switch (screenSizeParam) {
    case "auto":
    case "fullscreen":
    case "window":
      screenSize = screenSizeParam;
      break;
    case null:
      break;
    default: {
      const [width, height] = screenSizeParam.split("x").map((s) => parseInt(s));
      if (!isNaN(width) && !isNaN(height)) {
        screenSize = { width, height };
      }
      break;
    }
  }
  const cdromURLs = [
    ...searchParams.getAll("cdrom"),
    ...searchParams.getAll("cdrom_url")
  ];
  let ethernetProvider;
  const appleTalkZoneName = searchParams.get("appleTalk");
  if (appleTalkZoneName) {
    ethernetProvider = new CloudflareWorkerEthernetProvider(
      appleTalkZoneName
    );
  } else if (searchParams.get("broadcast_channel_ethernet") === "true") {
    ethernetProvider = new BroadcastChannelEthernetProvider();
  }
  let customDate;
  const customDateParam = searchParams.get("date");
  if (customDateParam) {
    customDate = fromDateString(customDateParam);
  }
  const debugFallback = searchParams.get("debug_fallback") === "true";
  const debugAudio = searchParams.get("debug_audio") === "true";
  const debugPaused = searchParams.get("debug_paused") === "true";
  const debugLog = searchParams.get("debug_log") === "true";
  const debugTrackpad = searchParams.get("debug_trackpad") === "true";
  return {
    disks: disks2,
    includeInfiniteHD,
    includeSavedHD,
    machine,
    ramSize,
    screenSize,
    ethernetProvider,
    cdromURLs,
    diskFiles: [],
    customDate,
    debugFallback,
    debugAudio,
    debugPaused,
    debugLog,
    debugTrackpad,
    isCustom
  };
}
function runDefToUrl(runDef) {
  const { disks: disks2, machine, ethernetProvider } = runDef;
  let url;
  if (disks2.length === 1 && ALL_DISKS.includes(disks2[0])) {
    url = new URL(diskToYearPath(disks2[0]), location.href);
    if (!runDef.includeInfiniteHD) {
      url.searchParams.set("infinite_hd", "false");
    }
    if (!runDef.includeSavedHD) {
      url.searchParams.set("saved_hd", "false");
    }
  } else {
    url = new URL("/run", location.href);
    for (const disk of disks2) {
      url.searchParams.append("disk", disk.displayName);
    }
    if (runDef.includeInfiniteHD) {
      url.searchParams.set("infinite_hd", "true");
    }
    if (runDef.includeSavedHD) {
      url.searchParams.set("saved_hd", "true");
    }
  }
  for (const cdromURL of runDef.cdromURLs) {
    url.searchParams.append("cdrom", cdromURL);
  }
  if (disks2.length !== 1 || machine !== disks2[0].machines[0]) {
    url.searchParams.set("machine", machine.name);
  }
  if (runDef.ramSize && runDef.ramSize !== machine.ramSizes[0]) {
    url.searchParams.set("ram", runDef.ramSize);
  }
  if (runDef.screenSize !== "auto") {
    url.searchParams.set(
      "screenSize",
      typeof runDef.screenSize === "object" ? `${runDef.screenSize.width}x${runDef.screenSize.height}` : runDef.screenSize
    );
  }
  if (ethernetProvider instanceof CloudflareWorkerEthernetProvider) {
    url.searchParams.set("appleTalk", ethernetProvider.zoneName());
  } else if (ethernetProvider instanceof BroadcastChannelEthernetProvider) {
    url.searchParams.set("broadcast_channel_ethernet", "true");
  }
  if (runDef.customDate) {
    url.searchParams.set("date", toDateString(runDef.customDate));
  }
  if (runDef.debugAudio) {
    url.searchParams.set("debug_audio", "true");
  }
  if (runDef.debugLog) {
    url.searchParams.set("debug_log", "true");
  }
  if (runDef.debugPaused) {
    url.searchParams.set("debug_paused", "true");
  }
  if (runDef.debugFallback) {
    url.searchParams.set("debug_fallback", "true");
  }
  if (runDef.debugTrackpad) {
    url.searchParams.set("debug_trackpad", "true");
  }
  return url.toString();
}
function diskToYearPath(disk) {
  var _a;
  const year = (_a = Object.entries(DISKS_BY_YEAR).find(
    ([year2, disks2]) => disks2.includes(disk)
  )) == null ? void 0 : _a[0];
  return `/${year}/${disk.displayName}`;
}
function diskFromYearPath(pathname) {
  const pieces = pathname.split("/");
  if (pieces.length !== 3) {
    return void 0;
  }
  const year = parseInt(pieces[1]);
  if (isNaN(year)) {
    return void 0;
  }
  const disks2 = DISKS_BY_YEAR[year];
  if (!disks2) {
    return void 0;
  }
  const diskName = decodeURIComponent(pieces[2]);
  const disk = disks2.find((disk2) => disk2.displayName === diskName);
  if (!disk || isPlaceholderDiskDef(disk)) {
    return void 0;
  }
  return disk;
}
function App() {
  const [initialRunDef, editInitialRunDef] = reactExports.useMemo(() => {
    const runDef2 = runDefFromUrl(location.href);
    const isEdit = new URL(location.href).searchParams.has("edit");
    return [runDef2, isEdit];
  }, []);
  const [runDef, setRunDef] = reactExports.useState(
    editInitialRunDef ? void 0 : initialRunDef
  );
  const [initialBrowserCustomRunDef, setInitialBrowserCustomRunDef] = reactExports.useState(
    editInitialRunDef ? initialRunDef : void 0
  );
  reactExports.useEffect(() => {
    const listener = () => {
      setRunDef(runDefFromUrl(location.href));
    };
    window.addEventListener("popstate", listener);
    return () => window.removeEventListener("popstate", listener);
  }, []);
  let contents;
  let footer = /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {});
  if (runDef) {
    const handleDone = () => {
      startViewTransition(async () => {
        if (runDef !== initialRunDef) {
          history.back();
          await new Promise((resolve) => {
            window.addEventListener("popstate", resolve, {
              once: true
            });
          });
        } else {
          history.pushState({}, "", "/");
          reactDomExports.flushSync(() => {
            setRunDef(void 0);
          });
        }
        setInitialBrowserCustomRunDef(
          runDef.isCustom ? runDef : void 0
        );
      });
    };
    contents = /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RunDefMac, { runDef, onDone: handleDone }) });
    footer = /* @__PURE__ */ jsxRuntimeExports.jsx(
      Footer,
      {
        onLogoClick: handleDone,
        showFullscreenButton: runDef.screenSize === "fullscreen"
      }
    );
  } else {
    contents = /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Browser,
      {
        initialCustomRunDef: initialBrowserCustomRunDef,
        onRun: (runDef2, inNewWindow) => {
          const runDefUrl = runDefToUrl(runDef2);
          if (inNewWindow) {
            window.open(runDefUrl, "_blank");
            return;
          }
          history.pushState({}, "", runDefUrl);
          startViewTransition(() => {
            reactDomExports.flushSync(() => {
              setRunDef(runDef2);
            });
          });
        }
      }
    ) });
    footer = void 0;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "App", children: [
    contents,
    footer
  ] });
}
const runDefMacLoader = () => __vitePreload(() => import("./RunDefMac-B1h_7upi.js"), true ? __vite__mapDeps([0,1]) : void 0);
let RunDefMac = React.lazy(runDefMacLoader);
setTimeout(async () => {
  RunDefMac = (await runDefMacLoader()).default;
}, 1e3);
try {
  canSaveDisks();
} catch (e) {
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxRuntimeExports.jsx(App, {}));
export {
  EMULATOR_SPEEDS as A,
  Button as B,
  Checkbox as C,
  Dialog as D,
  ETHERNET_PONG_PACKET_LENGTH as E,
  generateChunkUrl as F,
  usePersistentState as G,
  canSaveDisks as H,
  InputBufferAddresses as I,
  incrementError as J,
  incrementMulti as K,
  LockStates as L,
  ScreenFrame as M,
  viewTransitionNameForDisk as N,
  emulatorSupportsDownloadsFolder as O,
  POWER_MACINTOSH_G3_BEIGE as P,
  SAVED_HD as Q,
  isDiskImageFile as R,
  Select as S,
  INFINITE_HD_NEXT as T,
  INFINITE_HD_MFS as U,
  INFINITE_HD6 as V,
  INFINITE_HD as W,
  ETHERNET_PONG_HEADER as a,
  ethernetMacAddressToString as b,
  commonjsGlobal as c,
  ETHERNET_PING_PAYLOAD_LENGTH as d,
  ethernetMacAddressFromString as e,
  ETHERNET_PING_HEADER as f,
  getDefaultExportFromCjs as g,
  ETHERNET_PING_PACKET_LENGTH as h,
  increment as i,
  emulatorUsesPlaceholderDisks as j,
  emulatorNeedsMouseDeltas as k,
  emulatorCpuId as l,
  emulatorModelId as m,
  EMULATOR_REMOVABLE_DISK_COUNT as n,
  POWER_MACINTOSH_6100 as o,
  POWER_MACINTOSH_7500 as p,
  classNames as q,
  reactExports as r,
  jsxRuntimeExports as s,
  systemCDROMCompare as t,
  updateInputBufferWithEvents as u,
  Input as v,
  cdromLibrary as w,
  getCDROMInfo as x,
  emulatorSupportsMouseDeltas as y,
  emulatorSupportsSpeedSetting as z
};
