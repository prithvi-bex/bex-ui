var yr = {}, Vt = {
  get exports() {
    return yr;
  },
  set exports(O) {
    yr = O;
  }
}, He = {}, hr = {}, Ut = {
  get exports() {
    return hr;
  },
  set exports(O) {
    hr = O;
  }
}, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Yt() {
  if (ct)
    return g;
  ct = 1;
  var O = Symbol.for("react.element"), v = Symbol.for("react.portal"), Ee = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), de = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), te = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ee(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var G = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, Ie = {};
  function ne(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || G;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ne.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = ne.prototype;
  function F(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || G;
  }
  var ye = F.prototype = new ae();
  ye.constructor = F, se(ye, ne.prototype), ye.isPureReactComponent = !0;
  var oe = Array.isArray, M = Object.prototype.hasOwnProperty, q = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function pe(n, s, h) {
    var C, _ = {}, k = null, j = null;
    if (s != null)
      for (C in s.ref !== void 0 && (j = s.ref), s.key !== void 0 && (k = "" + s.key), s)
        M.call(s, C) && !ce.hasOwnProperty(C) && (_[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      _.children = h;
    else if (1 < T) {
      for (var w = Array(T), V = 0; V < T; V++)
        w[V] = arguments[V + 2];
      _.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        _[C] === void 0 && (_[C] = T[C]);
    return { $$typeof: O, type: n, key: k, ref: j, props: _, _owner: q.current };
  }
  function Re(n, s) {
    return { $$typeof: O, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === O;
  }
  function Ue(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var we = /\/+/g;
  function H(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ue("" + n.key) : s.toString(36);
  }
  function K(n, s, h, C, _) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var j = !1;
    if (n === null)
      j = !0;
    else
      switch (k) {
        case "string":
        case "number":
          j = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case O:
            case v:
              j = !0;
          }
      }
    if (j)
      return j = n, _ = _(j), n = C === "" ? "." + H(j, 0) : C, oe(_) ? (h = "", n != null && (h = n.replace(we, "$&/") + "/"), K(_, s, h, "", function(V) {
        return V;
      })) : _ != null && (Ce(_) && (_ = Re(_, h + (!_.key || j && j.key === _.key ? "" : ("" + _.key).replace(we, "$&/") + "/") + n)), s.push(_)), 1;
    if (j = 0, C = C === "" ? "." : C + ":", oe(n))
      for (var T = 0; T < n.length; T++) {
        k = n[T];
        var w = C + H(k, T);
        j += K(k, s, h, w, _);
      }
    else if (w = ee(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(k = n.next()).done; )
        k = k.value, w = C + H(k, T++), j += K(k, s, h, w, _);
    else if (k === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return j;
  }
  function Y(n, s, h) {
    if (n == null)
      return n;
    var C = [], _ = 0;
    return K(n, C, "", "", function(k) {
      return s.call(h, k, _++);
    }), C;
  }
  function ue(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, fe = { transition: null }, Se = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: fe, ReactCurrentOwner: q };
  return g.Children = { map: Y, forEach: function(n, s, h) {
    Y(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return Y(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Y(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ne, g.Fragment = Ee, g.Profiler = de, g.PureComponent = F, g.StrictMode = X, g.Suspense = L, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = se({}, n.props), _ = n.key, k = n.ref, j = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (k = s.ref, j = q.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        M.call(s, w) && !ce.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = h;
    else if (1 < w) {
      T = Array(w);
      for (var V = 0; V < w; V++)
        T[V] = arguments[V + 2];
      C.children = T;
    }
    return { $$typeof: O, type: n.type, key: _, ref: k, props: C, _owner: j };
  }, g.createContext = function(n) {
    return n = { $$typeof: te, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: re, _context: n }, n.Consumer = n;
  }, g.createElement = pe, g.createFactory = function(n) {
    var s = pe.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: Q, render: n };
  }, g.isValidElement = Ce, g.lazy = function(n) {
    return { $$typeof: N, _payload: { _status: -1, _result: n }, _init: ue };
  }, g.memo = function(n, s) {
    return { $$typeof: Z, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Ke = {}, Bt = {
  get exports() {
    return Ke;
  },
  set exports(O) {
    Ke = O;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function zt() {
  return ft || (ft = 1, function(O, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Ee = "18.2.0", X = Symbol.for("react.element"), de = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), Z = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
      function F(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[ae];
        return typeof r == "function" ? r : null;
      }
      var ye = {
        current: null
      }, oe = {
        transition: null
      }, M = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, q = {
        current: null
      }, ce = {}, pe = null;
      function Re(e) {
        pe = e;
      }
      ce.setExtraStackFrame = function(e) {
        pe = e;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var e = "";
        pe && (e += pe);
        var r = ce.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ue = !1, we = !1, H = !1, K = !1, Y = {
        ReactCurrentDispatcher: ye,
        ReactCurrentBatchConfig: oe,
        ReactCurrentOwner: q
      };
      Y.ReactDebugCurrentFrame = ce, Y.ReactCurrentActQueue = M;
      function ue(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Se[i])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[i] = !0;
        }
      }
      var s = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var k = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, j = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in k)
          k.hasOwnProperty(T) && j(T, k[T]);
      }
      function w() {
      }
      w.prototype = _.prototype;
      function V(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var he = V.prototype = new w();
      he.constructor = V, h(he, _.prototype), he.isPureReactComponent = !0;
      function mr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Je = Array.isArray;
      function Fe(e) {
        return Je(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function Oe(e) {
        if ($e(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), Te(e);
      }
      function Xe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function le(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case re:
            return "Fragment";
          case de:
            return "Portal";
          case Q:
            return "Profiler";
          case te:
            return "StrictMode";
          case U:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Z:
              var r = e;
              return Pe(r) + ".Consumer";
            case L:
              var a = e;
              return Pe(a._context) + ".Provider";
            case N:
              return Xe(e, e.render, "ForwardRef");
            case G:
              var o = e.displayName || null;
              return o !== null ? o : le(e.type) || "Memo";
            case se: {
              var i = e, p = i._payload, l = i._init;
              try {
                return le(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ke = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Qe, Ze, Ne;
      Ne = {};
      function Ye(e) {
        if (ke.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function me(e) {
        if (ke.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function _r(e, r) {
        var a = function() {
          Qe || (Qe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function er(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function rr(e) {
        if (typeof e.ref == "string" && q.current && e.__self && q.current.stateNode !== e.__self) {
          var r = le(q.current.type);
          Ne[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var je = function(e, r, a, o, i, p, l) {
        var y = {
          $$typeof: X,
          type: e,
          key: r,
          ref: a,
          props: l,
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function br(e, r, a) {
        var o, i = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Ye(r) && (l = r.ref, rr(r)), me(r) && (Oe(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            ke.call(r, o) && !Le.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          i.children = a;
        else if (P > 1) {
          for (var x = Array(P), A = 0; A < P; A++)
            x[A] = arguments[A + 2];
          Object.freeze && Object.freeze(x), i.children = x;
        }
        if (e && e.defaultProps) {
          var I = e.defaultProps;
          for (o in I)
            i[o] === void 0 && (i[o] = I[o]);
        }
        if (p || l) {
          var W = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && _r(i, W), l && er(i, W);
        }
        return je(e, p, l, y, E, q.current, i);
      }
      function Er(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Rr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          Ye(r) && (l = r.ref, P = q.current), me(r) && (Oe(r.key), p = "" + r.key);
          var x;
          e.type && e.type.defaultProps && (x = e.type.defaultProps);
          for (o in r)
            ke.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && x !== void 0 ? i[o] = x[o] : i[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          i.children = a;
        else if (A > 1) {
          for (var I = Array(A), W = 0; W < A; W++)
            I[W] = arguments[W + 2];
          i.children = I;
        }
        return je(e.type, p, l, y, E, P, i);
      }
      function ge(e) {
        return typeof e == "object" && e !== null && e.$$typeof === X;
      }
      var tr = ".", Cr = ":";
      function wr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var Me = !1, nr = /\/+/g;
      function ve(e) {
        return e.replace(nr, "$&/");
      }
      function xe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), wr("" + e.key)) : r.toString(36);
      }
      function _e(e, r, a, o, i) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case X:
                case de:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), P = o === "" ? tr + xe(y, 0) : o;
          if (Fe(E)) {
            var x = "";
            P != null && (x = ve(P) + "/"), _e(E, r, x, "", function(Wt) {
              return Wt;
            });
          } else
            E != null && (ge(E) && (E.key && (!y || y.key !== E.key) && Oe(E.key), E = Er(
              E,
              a + (E.key && (!y || y.key !== E.key) ? ve("" + E.key) + "/" : "") + P
            )), r.push(E));
          return 1;
        }
        var A, I, W = 0, z = o === "" ? tr : o + Cr;
        if (Fe(e))
          for (var vr = 0; vr < e.length; vr++)
            A = e[vr], I = z + xe(A, vr), W += _e(A, r, a, I, i);
        else {
          var Nr = F(e);
          if (typeof Nr == "function") {
            var ut = e;
            Nr === ut.entries && (Me || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Nt = Nr.call(ut), it, Mt = 0; !(it = Nt.next()).done; )
              A = it.value, I = z + xe(A, Mt++), W += _e(A, r, a, I, i);
          } else if (p === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return W;
      }
      function Ae(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return _e(e, o, "", "", function(p) {
          return r.call(a, p, i++);
        }), o;
      }
      function Sr(e) {
        var r = 0;
        return Ae(e, function() {
          r++;
        }), r;
      }
      function ar(e, r, a) {
        Ae(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Tr(e) {
        return Ae(e, function(r) {
          return r;
        }) || [];
      }
      function or(e) {
        if (!ge(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ur(e) {
        var r = {
          $$typeof: Z,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: L,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var p = {
            $$typeof: Z,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, Be = 0, ze = 1, Or = 2;
      function Pr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === Be || e._status === De) {
              var l = e;
              l._status = ze, l._result = p;
            }
          }, function(p) {
            if (e._status === Be || e._status === De) {
              var l = e;
              l._status = Or, l._result = p;
            }
          }), e._status === De) {
            var o = e;
            o._status = Be, o._result = a;
          }
        }
        if (e._status === ze) {
          var i = e._result;
          return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          _status: De,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: Pr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function jr(e) {
        e != null && e.$$typeof === G ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: N,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === re || e === Q || K || e === te || e === U || e === ee || H || e === Ie || Ce || Ue || we || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === G || e.$$typeof === L || e.$$typeof === Z || e.$$typeof === N || e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: G,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = ye.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function D(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function J(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function be(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function ir(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ie(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function yt() {
        var e = f();
        return e.useTransition();
      }
      function ht(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function mt() {
        var e = f();
        return e.useId();
      }
      function gt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var qe = 0, Wr, Vr, Ur, Yr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function _t() {
        {
          if (qe === 0) {
            Wr = console.log, Vr = console.info, Ur = console.warn, Yr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          qe++;
        }
      }
      function bt() {
        {
          if (qe--, qe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Wr
              }),
              info: h({}, e, {
                value: Vr
              }),
              warn: h({}, e, {
                value: Ur
              }),
              error: h({}, e, {
                value: Yr
              }),
              group: h({}, e, {
                value: Br
              }),
              groupCollapsed: h({}, e, {
                value: zr
              }),
              groupEnd: h({}, e, {
                value: qr
              })
            });
          }
          qe < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = Y.ReactCurrentDispatcher, Ar;
      function sr(e, r, a) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              Ar = o && o[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Dr = !1, cr;
      {
        var Et = typeof WeakMap == "function" ? WeakMap : Map;
        cr = new Et();
      }
      function Gr(e, r) {
        if (!e || Dr)
          return "";
        {
          var a = cr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Dr = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = xr.current, xr.current = null, _t();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (z) {
                o = z;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, x = E.length - 1; P >= 1 && x >= 0 && y[P] !== E[x]; )
              x--;
            for (; P >= 1 && x >= 0; P--, x--)
              if (y[P] !== E[x]) {
                if (P !== 1 || x !== 1)
                  do
                    if (P--, x--, x < 0 || y[P] !== E[x]) {
                      var A = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && cr.set(e, A), A;
                    }
                  while (P >= 1 && x >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, xr.current = p, bt(), Error.prepareStackTrace = i;
        }
        var I = e ? e.displayName || e.name : "", W = I ? sr(I) : "";
        return typeof e == "function" && cr.set(e, W), W;
      }
      function Rt(e, r, a) {
        return Gr(e, !1);
      }
      function Ct(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function fr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, Ct(e));
        if (typeof e == "string")
          return sr(e);
        switch (e) {
          case U:
            return sr("Suspense");
          case ee:
            return sr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              return Rt(e.render);
            case G:
              return fr(e.type, r, a);
            case se: {
              var o = e, i = o._payload, p = o._init;
              try {
                return fr(p(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Jr = Y.ReactDebugCurrentFrame;
      function lr(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Jr.setExtraStackFrame(a);
        } else
          Jr.setExtraStackFrame(null);
      }
      function wt(e, r, a, o, i) {
        {
          var p = Function.call.bind(ke);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (lr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), lr(null)), y instanceof Error && !(y.message in Kr) && (Kr[y.message] = !0, lr(i), d("Failed %s type: %s", a, y.message), lr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var Ir;
      Ir = !1;
      function Xr() {
        if (q.current) {
          var e = le(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var Qr = {};
      function Ot(e) {
        var r = Xr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Zr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Ot(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== q.current && (o = " It was passed a child from " + le(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if (Fe(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              ge(o) && Zr(o, r);
            }
          else if (ge(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = F(e);
            if (typeof i == "function" && i !== e.entries)
              for (var p = i.call(e), l; !(l = p.next()).done; )
                ge(l.value) && Zr(l.value, r);
          }
        }
      }
      function rt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === N || r.$$typeof === G))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = le(r);
            wt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Ir) {
            Ir = !0;
            var i = le(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function tt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Tt(r);
          p ? i += p : i += Xr();
          var l;
          e === null ? l = "null" : Fe(e) ? l = "array" : e !== void 0 && e.$$typeof === X ? (l = "<" + (le(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = br.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            et(arguments[E], e);
        return e === re ? Pt(y) : rt(y), y;
      }
      var nt = !1;
      function kt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, a) {
        for (var o = Rr.apply(this, arguments), i = 2; i < arguments.length; i++)
          et(arguments[i], o.type);
        return rt(o), o;
      }
      function xt(e, r) {
        var a = oe.transition;
        oe.transition = {};
        var o = oe.transition;
        oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (oe.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, dr = null;
      function At(e) {
        if (dr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = O && O[r];
            dr = a.call(O, "timers").setImmediate;
          } catch {
            dr = function(i) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = i, p.port2.postMessage(void 0);
            };
          }
        return dr(e);
      }
      var Ve = 0, ot = !1;
      function Dt(e) {
        {
          var r = Ve;
          Ve++, M.current === null && (M.current = []);
          var a = M.isBatchingLegacy, o;
          try {
            if (M.isBatchingLegacy = !0, o = e(), !a && M.didScheduleLegacyUpdate) {
              var i = M.current;
              i !== null && (M.didScheduleLegacyUpdate = !1, Lr(i));
            }
          } catch (I) {
            throw pr(r), I;
          } finally {
            M.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function(I, W) {
                l = !0, p.then(function(z) {
                  pr(r), Ve === 0 ? Fr(z, I, W) : I(z);
                }, function(z) {
                  pr(r), W(z);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ot = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (pr(r), Ve === 0) {
              var P = M.current;
              P !== null && (Lr(P), M.current = null);
              var x = {
                then: function(I, W) {
                  M.current === null ? (M.current = [], Fr(E, I, W)) : I(E);
                }
              };
              return x;
            } else {
              var A = {
                then: function(I, W) {
                  I(E);
                }
              };
              return A;
            }
          }
        }
      }
      function pr(e) {
        e !== Ve - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Fr(e, r, a) {
        {
          var o = M.current;
          if (o !== null)
            try {
              Lr(o), At(function() {
                o.length === 0 ? (M.current = null, r(e)) : Fr(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var $r = !1;
      function Lr(e) {
        if (!$r) {
          $r = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            $r = !1;
          }
        }
      }
      var It = tt, Ft = jt, $t = kt, Lt = {
        map: Ae,
        forEach: ar,
        count: Sr,
        toArray: Tr,
        only: or
      };
      v.Children = Lt, v.Component = _, v.Fragment = re, v.Profiler = Q, v.PureComponent = V, v.StrictMode = te, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.cloneElement = Ft, v.createContext = ur, v.createElement = It, v.createFactory = $t, v.createRef = mr, v.forwardRef = jr, v.isValidElement = ge, v.lazy = kr, v.memo = c, v.startTransition = xt, v.unstable_act = Dt, v.useCallback = J, v.useContext = R, v.useDebugValue = ie, v.useDeferredValue = ht, v.useEffect = B, v.useId = mt, v.useImperativeHandle = ir, v.useInsertionEffect = D, v.useLayoutEffect = $, v.useMemo = be, v.useReducer = b, v.useRef = m, v.useState = S, v.useSyncExternalStore = gt, v.useTransition = yt, v.version = Ee, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Bt, Ke)), Ke;
}
var lt;
function vt() {
  return lt || (lt = 1, function(O) {
    process.env.NODE_ENV === "production" ? O.exports = Yt() : O.exports = zt();
  }(Ut)), hr;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function qt() {
  if (dt)
    return He;
  dt = 1;
  var O = vt(), v = Symbol.for("react.element"), Ee = Symbol.for("react.fragment"), X = Object.prototype.hasOwnProperty, de = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(Q, L, Z) {
    var N, U = {}, ee = null, G = null;
    Z !== void 0 && (ee = "" + Z), L.key !== void 0 && (ee = "" + L.key), L.ref !== void 0 && (G = L.ref);
    for (N in L)
      X.call(L, N) && !re.hasOwnProperty(N) && (U[N] = L[N]);
    if (Q && Q.defaultProps)
      for (N in L = Q.defaultProps, L)
        U[N] === void 0 && (U[N] = L[N]);
    return { $$typeof: v, type: Q, key: ee, ref: G, props: U, _owner: de.current };
  }
  return He.Fragment = Ee, He.jsx = te, He.jsxs = te, He;
}
var Ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Ht() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var O = vt(), v = Symbol.for("react.element"), Ee = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), de = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), Q = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), G = Symbol.for("react.offscreen"), se = Symbol.iterator, Ie = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = se && t[se] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var ae = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function F(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        ye("error", t, c);
      }
    }
    function ye(t, u, c) {
      {
        var f = ae.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (u += "%s", c = c.concat([R]));
        var S = c.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var oe = !1, M = !1, q = !1, ce = !1, pe = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === X || t === re || pe || t === de || t === Z || t === N || ce || t === G || oe || M || q || typeof t == "object" && t !== null && (t.$$typeof === ee || t.$$typeof === U || t.$$typeof === te || t.$$typeof === Q || t.$$typeof === L || t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ue(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var R = u.displayName || u.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function we(t) {
      return t.displayName || "Context";
    }
    function H(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && F("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case X:
          return "Fragment";
        case Ee:
          return "Portal";
        case re:
          return "Profiler";
        case de:
          return "StrictMode";
        case Z:
          return "Suspense";
        case N:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Q:
            var u = t;
            return we(u) + ".Consumer";
          case te:
            var c = t;
            return we(c._context) + ".Provider";
          case L:
            return Ue(t, t.render, "ForwardRef");
          case U:
            var f = t.displayName || null;
            return f !== null ? f : H(t.type) || "Memo";
          case ee: {
            var R = t, S = R._payload, b = R._init;
            try {
              return H(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, Y = 0, ue, d, fe, Se, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function _() {
      {
        if (Y === 0) {
          ue = console.log, d = console.info, fe = console.warn, Se = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function k() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, t, {
              value: ue
            }),
            info: K({}, t, {
              value: d
            }),
            warn: K({}, t, {
              value: fe
            }),
            error: K({}, t, {
              value: Se
            }),
            group: K({}, t, {
              value: n
            }),
            groupCollapsed: K({}, t, {
              value: s
            }),
            groupEnd: K({}, t, {
              value: h
            })
          });
        }
        Y < 0 && F("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = ae.ReactCurrentDispatcher, T;
    function w(t, u, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            T = f && f[1] || "";
          }
        return `
` + T + t;
      }
    }
    var V = !1, he;
    {
      var mr = typeof WeakMap == "function" ? WeakMap : Map;
      he = new mr();
    }
    function Je(t, u) {
      if (!t || V)
        return "";
      {
        var c = he.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      V = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = j.current, j.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ie) {
              f = ie;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ie) {
              f = ie;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            f = ie;
          }
          t();
        }
      } catch (ie) {
        if (ie && f && typeof ie.stack == "string") {
          for (var m = ie.stack.split(`
`), B = f.stack.split(`
`), D = m.length - 1, $ = B.length - 1; D >= 1 && $ >= 0 && m[D] !== B[$]; )
            $--;
          for (; D >= 1 && $ >= 0; D--, $--)
            if (m[D] !== B[$]) {
              if (D !== 1 || $ !== 1)
                do
                  if (D--, $--, $ < 0 || m[D] !== B[$]) {
                    var J = `
` + m[D].replace(" at new ", " at ");
                    return t.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, J), J;
                  }
                while (D >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        V = !1, j.current = S, k(), Error.prepareStackTrace = R;
      }
      var be = t ? t.displayName || t.name : "", ir = be ? w(be) : "";
      return typeof t == "function" && he.set(t, ir), ir;
    }
    function Fe(t, u, c) {
      return Je(t, !1);
    }
    function gr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function $e(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, gr(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case Z:
          return w("Suspense");
        case N:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            return Fe(t.render);
          case U:
            return $e(t.type, u, c);
          case ee: {
            var f = t, R = f._payload, S = f._init;
            try {
              return $e(S(R), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Oe = {}, Xe = ae.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        Xe.setExtraStackFrame(c);
      } else
        Xe.setExtraStackFrame(null);
    }
    function le(t, u, c, f, R) {
      {
        var S = Function.call.bind(Te);
        for (var b in t)
          if (S(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              m = D;
            }
            m && !(m instanceof Error) && (Pe(R), F("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), Pe(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, Pe(R), F("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var ke = Array.isArray;
    function Le(t) {
      return ke(t);
    }
    function Qe(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function Ze(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function Ye(t) {
      if (Ze(t))
        return F("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), Ne(t);
    }
    var me = ae.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, je;
    je = {};
    function br(t) {
      if (Te.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Er(t) {
      if (Te.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, u) {
      if (typeof t.ref == "string" && me.current && u && me.current.stateNode !== u) {
        var c = H(me.current.type);
        je[c] || (F('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(me.current.type), t.ref), je[c] = !0);
      }
    }
    function ge(t, u) {
      {
        var c = function() {
          er || (er = !0, F("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function tr(t, u) {
      {
        var c = function() {
          rr || (rr = !0, F("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Cr = function(t, u, c, f, R, S, b) {
      var m = {
        $$typeof: v,
        type: t,
        key: u,
        ref: c,
        props: b,
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function wr(t, u, c, f, R) {
      {
        var S, b = {}, m = null, B = null;
        c !== void 0 && (Ye(c), m = "" + c), Er(u) && (Ye(u.key), m = "" + u.key), br(u) && (B = u.ref, Rr(u, R));
        for (S in u)
          Te.call(u, S) && !_r.hasOwnProperty(S) && (b[S] = u[S]);
        if (t && t.defaultProps) {
          var D = t.defaultProps;
          for (S in D)
            b[S] === void 0 && (b[S] = D[S]);
        }
        if (m || B) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && ge(b, $), B && tr(b, $);
        }
        return Cr(t, m, B, R, f, me.current, b);
      }
    }
    var Me = ae.ReactCurrentOwner, nr = ae.ReactDebugCurrentFrame;
    function ve(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        nr.setExtraStackFrame(c);
      } else
        nr.setExtraStackFrame(null);
    }
    var xe;
    xe = !1;
    function _e(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function Ae() {
      {
        if (Me.current) {
          var t = H(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var ar = {};
    function Tr(t) {
      {
        var u = Ae();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function or(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(u);
        if (ar[c])
          return;
        ar[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Me.current && (f = " It was passed a child from " + H(t._owner.type) + "."), ve(t), F('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ve(null);
      }
    }
    function ur(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            _e(f) && or(f, u);
          }
        else if (_e(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ne(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), b; !(b = S.next()).done; )
              _e(b.value) && or(b.value, u);
        }
      }
    }
    function De(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === L || u.$$typeof === U))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = H(u);
          le(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !xe) {
          xe = !0;
          var R = H(u);
          F("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && F("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Be(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ve(t), F("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ve(null);
            break;
          }
        }
        t.ref !== null && (ve(t), F("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    function ze(t, u, c, f, R, S) {
      {
        var b = Ce(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Sr(R);
          B ? m += B : m += Ae();
          var D;
          t === null ? D = "null" : Le(t) ? D = "array" : t !== void 0 && t.$$typeof === v ? (D = "<" + (H(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : D = typeof t, F("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, m);
        }
        var $ = wr(t, u, c, R, S);
        if ($ == null)
          return $;
        if (b) {
          var J = u.children;
          if (J !== void 0)
            if (f)
              if (Le(J)) {
                for (var be = 0; be < J.length; be++)
                  ur(J[be], t);
                Object.freeze && Object.freeze(J);
              } else
                F("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(J, t);
        }
        return t === X ? Be($) : De($), $;
      }
    }
    function Or(t, u, c) {
      return ze(t, u, c, !0);
    }
    function Pr(t, u, c) {
      return ze(t, u, c, !1);
    }
    var kr = Pr, jr = Or;
    Ge.Fragment = X, Ge.jsx = kr, Ge.jsxs = jr;
  }()), Ge;
}
(function(O) {
  process.env.NODE_ENV === "production" ? O.exports = qt() : O.exports = Ht();
})(Vt);
const Mr = yr.jsx, Gt = yr.jsxs, Kt = ({ title: O, description: v }) => /* @__PURE__ */ Mr("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden sm:max-w-xs lg:max-w-sm xl:max-w-md", children: /* @__PURE__ */ Gt("div", { className: "px-6 py-4", children: [
  /* @__PURE__ */ Mr("h2", { className: "font-bold text-xl mb-2", children: O }),
  /* @__PURE__ */ Mr("p", { className: "text-gray-700 text-base", children: v })
] }) });
export {
  Kt as Card
};
