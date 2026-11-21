import jsQR from "jsqr";
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var o = Object.getPrototypeOf;
var l = Object.prototype.hasOwnProperty;
var a = (_0x334b9d, _0x31003c) => () => {
  if (!_0x31003c) {
    _0x334b9d((_0x31003c = {
      exports: {}
    }).exports, _0x31003c);
  }
  return _0x31003c.exports;
};
var i = (_0x355282, _0x2bbe3b, _0x52bc5f) => {
  _0x52bc5f = _0x355282 != null ? e(o(_0x355282)) : {};
  return ((_0x34398f, _0xf7f28b, _0x594841, _0xd60be) => {
    if (_0xf7f28b && typeof _0xf7f28b == "object" || typeof _0xf7f28b == "function") {
      var _0x1fafb6;
      var _0x1fdc89 = r(_0xf7f28b);
      for (var _0x279e88 = 0, _0xb70b2a = _0x1fdc89.length; _0x279e88 < _0xb70b2a; _0x279e88++) {
        _0x1fafb6 = _0x1fdc89[_0x279e88];
        if (!l.call(_0x34398f, _0x1fafb6) && _0x1fafb6 !== undefined) {
          t(_0x34398f, _0x1fafb6, {
            get: (_0x280851 => _0xf7f28b[_0x280851]).bind(null, _0x1fafb6),
            enumerable: !(_0xd60be = n(_0xf7f28b, _0x1fafb6)) || _0xd60be.enumerable
          });
        }
      }
    }
    return _0x34398f;
  })(!_0x2bbe3b && _0x355282 && _0x355282.__esModule ? _0x52bc5f : t(_0x52bc5f, "default", {
    value: _0x355282,
    enumerable: true
  }), _0x355282);
};
(function () {
  const _0x3cad20 = document.createElement("link").relList;
  if (!_0x3cad20 || !_0x3cad20.supports || !_0x3cad20.supports("modulepreload")) {
    for (const _0x340bdf of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
      _0x183c66(_0x340bdf);
    }
    new MutationObserver(_0x225d31 => {
      for (const _0x5272e4 of _0x225d31) {
        if (_0x5272e4.type === "childList") {
          for (const _0x52dc6e of _0x5272e4.addedNodes) {
            if (_0x52dc6e.tagName === "LINK" && _0x52dc6e.rel === "modulepreload") {
              _0x183c66(_0x52dc6e);
            }
          }
        }
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
  }
  function _0x183c66(_0x4b9076) {
    if (_0x4b9076.ep) {
      return;
    }
    _0x4b9076.ep = true;
    const _0x593cd6 = function (_0x54da80) {
      const _0x567aee = {};
      if (_0x54da80.integrity) {
        _0x567aee.integrity = _0x54da80.integrity;
      }
      if (_0x54da80.referrerPolicy) {
        _0x567aee.referrerPolicy = _0x54da80.referrerPolicy;
      }
      if (_0x54da80.crossOrigin === "use-credentials") {
        _0x567aee.credentials = "include";
      } else if (_0x54da80.crossOrigin === "anonymous") {
        _0x567aee.credentials = "omit";
      } else {
        _0x567aee.credentials = "same-origin";
      }
      return _0x567aee;
    }(_0x4b9076);
    fetch(_0x4b9076.href, _0x593cd6);
  }
})();
var s = a(_0x15f20f => {
  var _0x26428a = Symbol.for("react.transitional.element");
  var _0x7a469c = Symbol.for("react.portal");
  var _0x3afa93 = Symbol.for("react.fragment");
  var _0x4d6331 = Symbol.for("react.strict_mode");
  var _0x29b324 = Symbol.for("react.profiler");
  var _0x3d6356 = Symbol.for("react.consumer");
  var _0x4a807f = Symbol.for("react.context");
  var _0x15251d = Symbol.for("react.forward_ref");
  var _0x1b9181 = Symbol.for("react.suspense");
  var _0x29a338 = Symbol.for("react.memo");
  var _0x226ed2 = Symbol.for("react.lazy");
  var _0x56eded = Symbol.for("react.activity");
  var _0x3426bd = Symbol.iterator;
  var _0x26fa27 = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var _0x2d5634 = Object.assign;
  var _0x43ba87 = {};
  function _0x315070(_0x3035e1, _0x1048bb, _0x18d5fd) {
    this.props = _0x3035e1;
    this.context = _0x1048bb;
    this.refs = _0x43ba87;
    this.updater = _0x18d5fd || _0x26fa27;
  }
  function _0x4c268b() {}
  function _0xf09ec4(_0x45a1c8, _0x55d328, _0x338a7e) {
    this.props = _0x45a1c8;
    this.context = _0x55d328;
    this.refs = _0x43ba87;
    this.updater = _0x338a7e || _0x26fa27;
  }
  _0x315070.prototype.isReactComponent = {};
  _0x315070.prototype.setState = function (_0x5c32c7, _0x111e7b) {
    if (typeof _0x5c32c7 != "object" && typeof _0x5c32c7 != "function" && _0x5c32c7 != null) {
      throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    }
    this.updater.enqueueSetState(this, _0x5c32c7, _0x111e7b, "setState");
  };
  _0x315070.prototype.forceUpdate = function (_0x144dc8) {
    this.updater.enqueueForceUpdate(this, _0x144dc8, "forceUpdate");
  };
  _0x4c268b.prototype = _0x315070.prototype;
  var _0x234335 = _0xf09ec4.prototype = new _0x4c268b();
  _0x234335.constructor = _0xf09ec4;
  _0x2d5634(_0x234335, _0x315070.prototype);
  _0x234335.isPureReactComponent = true;
  var _0x8f8cbc = Array.isArray;
  function _0x1e5a86() {}
  var _0x2ccd9d = {
    H: null,
    A: null,
    T: null,
    S: null
  };
  var _0x13b234 = Object.prototype.hasOwnProperty;
  function _0xc25cc9(_0x2dbcc1, _0x33607d, _0x1ef905) {
    var _0x19fdc3 = _0x1ef905.ref;
    return {
      $$typeof: _0x26428a,
      type: _0x2dbcc1,
      key: _0x33607d,
      ref: _0x19fdc3 !== undefined ? _0x19fdc3 : null,
      props: _0x1ef905
    };
  }
  function _0x5181bd(_0x25a57f) {
    return typeof _0x25a57f == "object" && _0x25a57f !== null && _0x25a57f.$$typeof === _0x26428a;
  }
  var _0x29565a = /\/+/g;
  function _0x2ee39c(_0x4a27b1, _0x193aac) {
    if (typeof _0x4a27b1 == "object" && _0x4a27b1 !== null && _0x4a27b1.key != null) {
      _0xc455d9 = "" + _0x4a27b1.key;
      _0x41e787 = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + _0xc455d9.replace(/[=:]/g, function (_0x53212f) {
        return _0x41e787[_0x53212f];
      });
    } else {
      return _0x193aac.toString(36);
    }
    var _0xc455d9;
    var _0x41e787;
  }
  function _0x478957(_0x4c53ad, _0x3a9d08, _0x27d161, _0x4c0db7, _0x1b84e2) {
    var _0x116534 = typeof _0x4c53ad;
    if (_0x116534 === "undefined" || _0x116534 === "boolean") {
      _0x4c53ad = null;
    }
    var _0x5e8116;
    var _0x32eac9;
    var _0x37b1af = false;
    if (_0x4c53ad === null) {
      _0x37b1af = true;
    } else {
      switch (_0x116534) {
        case "bigint":
        case "string":
        case "number":
          _0x37b1af = true;
          break;
        case "object":
          switch (_0x4c53ad.$$typeof) {
            case _0x26428a:
            case _0x7a469c:
              _0x37b1af = true;
              break;
            case _0x226ed2:
              return _0x478957((_0x37b1af = _0x4c53ad._init)(_0x4c53ad._payload), _0x3a9d08, _0x27d161, _0x4c0db7, _0x1b84e2);
          }
      }
    }
    if (_0x37b1af) {
      _0x1b84e2 = _0x1b84e2(_0x4c53ad);
      _0x37b1af = _0x4c0db7 === "" ? "." + _0x2ee39c(_0x4c53ad, 0) : _0x4c0db7;
      if (_0x8f8cbc(_0x1b84e2)) {
        _0x27d161 = "";
        if (_0x37b1af != null) {
          _0x27d161 = _0x37b1af.replace(_0x29565a, "$&/") + "/";
        }
        _0x478957(_0x1b84e2, _0x3a9d08, _0x27d161, "", function (_0x31ba9e) {
          return _0x31ba9e;
        });
      } else if (_0x1b84e2 != null) {
        if (_0x5181bd(_0x1b84e2)) {
          _0x5e8116 = _0x1b84e2;
          _0x32eac9 = _0x27d161 + (_0x1b84e2.key == null || _0x4c53ad && _0x4c53ad.key === _0x1b84e2.key ? "" : ("" + _0x1b84e2.key).replace(_0x29565a, "$&/") + "/") + _0x37b1af;
          _0x1b84e2 = _0xc25cc9(_0x5e8116.type, _0x32eac9, _0x5e8116.props);
        }
        _0x3a9d08.push(_0x1b84e2);
      }
      return 1;
    }
    _0x37b1af = 0;
    var _0x3d8012;
    var _0x31556b = _0x4c0db7 === "" ? "." : _0x4c0db7 + ":";
    if (_0x8f8cbc(_0x4c53ad)) {
      for (var _0xe73a78 = 0; _0xe73a78 < _0x4c53ad.length; _0xe73a78++) {
        _0x37b1af += _0x478957(_0x4c0db7 = _0x4c53ad[_0xe73a78], _0x3a9d08, _0x27d161, _0x116534 = _0x31556b + _0x2ee39c(_0x4c0db7, _0xe73a78), _0x1b84e2);
      }
    } else if (typeof (_0xe73a78 = (_0x3d8012 = _0x4c53ad) === null || typeof _0x3d8012 != "object" ? null : typeof (_0x3d8012 = _0x3426bd && _0x3d8012[_0x3426bd] || _0x3d8012["@@iterator"]) == "function" ? _0x3d8012 : null) == "function") {
      _0x4c53ad = _0xe73a78.call(_0x4c53ad);
      _0xe73a78 = 0;
      while (!(_0x4c0db7 = _0x4c53ad.next()).done) {
        _0x37b1af += _0x478957(_0x4c0db7 = _0x4c0db7.value, _0x3a9d08, _0x27d161, _0x116534 = _0x31556b + _0x2ee39c(_0x4c0db7, _0xe73a78++), _0x1b84e2);
      }
    } else if (_0x116534 === "object") {
      if (typeof _0x4c53ad.then == "function") {
        return _0x478957(function (_0x128c0f) {
          switch (_0x128c0f.status) {
            case "fulfilled":
              return _0x128c0f.value;
            case "rejected":
              throw _0x128c0f.reason;
            default:
              if (typeof _0x128c0f.status == "string") {
                _0x128c0f.then(_0x1e5a86, _0x1e5a86);
              } else {
                _0x128c0f.status = "pending";
                _0x128c0f.then(function (_0xc49593) {
                  if (_0x128c0f.status === "pending") {
                    _0x128c0f.status = "fulfilled";
                    _0x128c0f.value = _0xc49593;
                  }
                }, function (_0x3b99a1) {
                  if (_0x128c0f.status === "pending") {
                    _0x128c0f.status = "rejected";
                    _0x128c0f.reason = _0x3b99a1;
                  }
                });
              }
              switch (_0x128c0f.status) {
                case "fulfilled":
                  return _0x128c0f.value;
                case "rejected":
                  throw _0x128c0f.reason;
              }
          }
          throw _0x128c0f;
        }(_0x4c53ad), _0x3a9d08, _0x27d161, _0x4c0db7, _0x1b84e2);
      }
      _0x3a9d08 = String(_0x4c53ad);
      throw Error("Objects are not valid as a React child (found: " + (_0x3a9d08 === "[object Object]" ? "object with keys {" + Object.keys(_0x4c53ad).join(", ") + "}" : _0x3a9d08) + "). If you meant to render a collection of children, use an array instead.");
    }
    return _0x37b1af;
  }
  function _0x149660(_0x40da50, _0x25972a, _0x3511d5) {
    if (_0x40da50 == null) {
      return _0x40da50;
    }
    var _0x37a91 = [];
    var _0x15ad4d = 0;
    _0x478957(_0x40da50, _0x37a91, "", "", function (_0x2b2435) {
      return _0x25972a.call(_0x3511d5, _0x2b2435, _0x15ad4d++);
    });
    return _0x37a91;
  }
  function _0x2b10e2(_0x4229cf) {
    if (_0x4229cf._status === -1) {
      var _0x5aeb5a = _0x4229cf._result;
      (_0x5aeb5a = _0x5aeb5a()).then(function (_0x337f8b) {
        if (_0x4229cf._status === 0 || _0x4229cf._status === -1) {
          _0x4229cf._status = 1;
          _0x4229cf._result = _0x337f8b;
        }
      }, function (_0x20b175) {
        if (_0x4229cf._status === 0 || _0x4229cf._status === -1) {
          _0x4229cf._status = 2;
          _0x4229cf._result = _0x20b175;
        }
      });
      if (_0x4229cf._status === -1) {
        _0x4229cf._status = 0;
        _0x4229cf._result = _0x5aeb5a;
      }
    }
    if (_0x4229cf._status === 1) {
      return _0x4229cf._result.default;
    }
    throw _0x4229cf._result;
  }
  var _0x42dbb6 = typeof reportError == "function" ? reportError : function (_0x94ef24) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _0x570b90 = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof _0x94ef24 == "object" && _0x94ef24 !== null && typeof _0x94ef24.message == "string" ? String(_0x94ef24.message) : String(_0x94ef24),
        error: _0x94ef24
      });
      if (!window.dispatchEvent(_0x570b90)) {
        return;
      }
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", _0x94ef24);
      return;
    }
    console.error(_0x94ef24);
  };
  var _0xf84811 = {
    map: _0x149660,
    forEach: function (_0x2a145c, _0x531eb1, _0x404687) {
      _0x149660(_0x2a145c, function () {
        _0x531eb1.apply(this, arguments);
      }, _0x404687);
    },
    count: function (_0x18e3ee) {
      var _0x1b42dd = 0;
      _0x149660(_0x18e3ee, function () {
        _0x1b42dd++;
      });
      return _0x1b42dd;
    },
    toArray: function (_0xcec9f8) {
      return _0x149660(_0xcec9f8, function (_0x1b374e) {
        return _0x1b374e;
      }) || [];
    },
    only: function (_0x3df91e) {
      if (!_0x5181bd(_0x3df91e)) {
        throw Error("React.Children.only expected to receive a single React element child.");
      }
      return _0x3df91e;
    }
  };
  _0x15f20f.Activity = _0x56eded;
  _0x15f20f.Children = _0xf84811;
  _0x15f20f.Component = _0x315070;
  _0x15f20f.Fragment = _0x3afa93;
  _0x15f20f.Profiler = _0x29b324;
  _0x15f20f.PureComponent = _0xf09ec4;
  _0x15f20f.StrictMode = _0x4d6331;
  _0x15f20f.Suspense = _0x1b9181;
  _0x15f20f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _0x2ccd9d;
  _0x15f20f.__COMPILER_RUNTIME = {
    "__proto__": null,
    c: function (_0x481d25) {
      return _0x2ccd9d.H.useMemoCache(_0x481d25);
    }
  };
  _0x15f20f.cache = function (_0x355433) {
    return function () {
      return _0x355433.apply(null, arguments);
    };
  };
  _0x15f20f.cacheSignal = function () {
    return null;
  };
  _0x15f20f.cloneElement = function (_0x26bb52, _0x33480d, _0x5196b6) {
    if (_0x26bb52 == null) {
      throw Error("The argument must be a React element, but you passed " + _0x26bb52 + ".");
    }
    var _0x5b0426 = _0x2d5634({}, _0x26bb52.props);
    var _0x3f319c = _0x26bb52.key;
    if (_0x33480d != null) {
      if (_0x33480d.key !== undefined) {
        _0x3f319c = "" + _0x33480d.key;
      }
      for (_0x18b964 in _0x33480d) {
        if (!!_0x13b234.call(_0x33480d, _0x18b964) && _0x18b964 !== "key" && _0x18b964 !== "__self" && _0x18b964 !== "__source" && (_0x18b964 !== "ref" || _0x33480d.ref !== undefined)) {
          _0x5b0426[_0x18b964] = _0x33480d[_0x18b964];
        }
      }
    }
    var _0x18b964 = arguments.length - 2;
    if (_0x18b964 === 1) {
      _0x5b0426.children = _0x5196b6;
    } else if (_0x18b964 > 1) {
      var _0x23d84a = Array(_0x18b964);
      for (var _0x5900dc = 0; _0x5900dc < _0x18b964; _0x5900dc++) {
        _0x23d84a[_0x5900dc] = arguments[_0x5900dc + 2];
      }
      _0x5b0426.children = _0x23d84a;
    }
    return _0xc25cc9(_0x26bb52.type, _0x3f319c, _0x5b0426);
  };
  _0x15f20f.createContext = function (_0x3ec3bb) {
    (_0x3ec3bb = {
      $$typeof: _0x4a807f,
      _currentValue: _0x3ec3bb,
      _currentValue2: _0x3ec3bb,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }).Provider = _0x3ec3bb;
    _0x3ec3bb.Consumer = {
      $$typeof: _0x3d6356,
      _context: _0x3ec3bb
    };
    return _0x3ec3bb;
  };
  _0x15f20f.createElement = function (_0x3cbccd, _0x544215, _0x704a66) {
    var _0x59deb1;
    var _0x4f949c = {};
    var _0x425ef1 = null;
    if (_0x544215 != null) {
      if (_0x544215.key !== undefined) {
        _0x425ef1 = "" + _0x544215.key;
      }
      for (_0x59deb1 in _0x544215) {
        if (_0x13b234.call(_0x544215, _0x59deb1) && _0x59deb1 !== "key" && _0x59deb1 !== "__self" && _0x59deb1 !== "__source") {
          _0x4f949c[_0x59deb1] = _0x544215[_0x59deb1];
        }
      }
    }
    var _0x5c980c = arguments.length - 2;
    if (_0x5c980c === 1) {
      _0x4f949c.children = _0x704a66;
    } else if (_0x5c980c > 1) {
      var _0x338cf7 = Array(_0x5c980c);
      for (var _0x38f708 = 0; _0x38f708 < _0x5c980c; _0x38f708++) {
        _0x338cf7[_0x38f708] = arguments[_0x38f708 + 2];
      }
      _0x4f949c.children = _0x338cf7;
    }
    if (_0x3cbccd && _0x3cbccd.defaultProps) {
      for (_0x59deb1 in _0x5c980c = _0x3cbccd.defaultProps) {
        if (_0x4f949c[_0x59deb1] === undefined) {
          _0x4f949c[_0x59deb1] = _0x5c980c[_0x59deb1];
        }
      }
    }
    return _0xc25cc9(_0x3cbccd, _0x425ef1, _0x4f949c);
  };
  _0x15f20f.createRef = function () {
    return {
      current: null
    };
  };
  _0x15f20f.forwardRef = function (_0x1f3828) {
    return {
      $$typeof: _0x15251d,
      render: _0x1f3828
    };
  };
  _0x15f20f.isValidElement = _0x5181bd;
  _0x15f20f.lazy = function (_0x1a5b0f) {
    return {
      $$typeof: _0x226ed2,
      _payload: {
        _status: -1,
        _result: _0x1a5b0f
      },
      _init: _0x2b10e2
    };
  };
  _0x15f20f.memo = function (_0xe4aac8, _0x590c10) {
    return {
      $$typeof: _0x29a338,
      type: _0xe4aac8,
      compare: _0x590c10 === undefined ? null : _0x590c10
    };
  };
  _0x15f20f.startTransition = function (_0x3ebee6) {
    var _0x1007d1 = _0x2ccd9d.T;
    var _0x18e05a = {};
    _0x2ccd9d.T = _0x18e05a;
    try {
      var _0x7a87fd = _0x3ebee6();
      var _0x55630d = _0x2ccd9d.S;
      if (_0x55630d !== null) {
        _0x55630d(_0x18e05a, _0x7a87fd);
      }
      if (typeof _0x7a87fd == "object" && _0x7a87fd !== null && typeof _0x7a87fd.then == "function") {
        _0x7a87fd.then(_0x1e5a86, _0x42dbb6);
      }
    } catch (_0x4568f1) {
      _0x42dbb6(_0x4568f1);
    } finally {
      if (_0x1007d1 !== null && _0x18e05a.types !== null) {
        _0x1007d1.types = _0x18e05a.types;
      }
      _0x2ccd9d.T = _0x1007d1;
    }
  };
  _0x15f20f.unstable_useCacheRefresh = function () {
    return _0x2ccd9d.H.useCacheRefresh();
  };
  _0x15f20f.use = function (_0x229a35) {
    return _0x2ccd9d.H.use(_0x229a35);
  };
  _0x15f20f.useActionState = function (_0x2b25be, _0x29f081, _0xd368fe) {
    return _0x2ccd9d.H.useActionState(_0x2b25be, _0x29f081, _0xd368fe);
  };
  _0x15f20f.useCallback = function (_0x2a90ce, _0x595ba0) {
    return _0x2ccd9d.H.useCallback(_0x2a90ce, _0x595ba0);
  };
  _0x15f20f.useContext = function (_0x37bb70) {
    return _0x2ccd9d.H.useContext(_0x37bb70);
  };
  _0x15f20f.useDebugValue = function () {};
  _0x15f20f.useDeferredValue = function (_0x391fe0, _0x5aec1b) {
    return _0x2ccd9d.H.useDeferredValue(_0x391fe0, _0x5aec1b);
  };
  _0x15f20f.useEffect = function (_0x45b4e4, _0x2b66d9) {
    return _0x2ccd9d.H.useEffect(_0x45b4e4, _0x2b66d9);
  };
  _0x15f20f.useEffectEvent = function (_0x2760fa) {
    return _0x2ccd9d.H.useEffectEvent(_0x2760fa);
  };
  _0x15f20f.useId = function () {
    return _0x2ccd9d.H.useId();
  };
  _0x15f20f.useImperativeHandle = function (_0x33cf4a, _0x221366, _0x2dd891) {
    return _0x2ccd9d.H.useImperativeHandle(_0x33cf4a, _0x221366, _0x2dd891);
  };
  _0x15f20f.useInsertionEffect = function (_0x158aab, _0x7812bc) {
    return _0x2ccd9d.H.useInsertionEffect(_0x158aab, _0x7812bc);
  };
  _0x15f20f.useLayoutEffect = function (_0x45f6a4, _0x78eced) {
    return _0x2ccd9d.H.useLayoutEffect(_0x45f6a4, _0x78eced);
  };
  _0x15f20f.useMemo = function (_0x4f6a63, _0x510430) {
    return _0x2ccd9d.H.useMemo(_0x4f6a63, _0x510430);
  };
  _0x15f20f.useOptimistic = function (_0xb2fc05, _0x4310ef) {
    return _0x2ccd9d.H.useOptimistic(_0xb2fc05, _0x4310ef);
  };
  _0x15f20f.useReducer = function (_0xefa62c, _0xceef24, _0x5f1179) {
    return _0x2ccd9d.H.useReducer(_0xefa62c, _0xceef24, _0x5f1179);
  };
  _0x15f20f.useRef = function (_0x2da13c) {
    return _0x2ccd9d.H.useRef(_0x2da13c);
  };
  _0x15f20f.useState = function (_0x270e67) {
    return _0x2ccd9d.H.useState(_0x270e67);
  };
  _0x15f20f.useSyncExternalStore = function (_0x3bb317, _0x139dcb, _0x45c053) {
    return _0x2ccd9d.H.useSyncExternalStore(_0x3bb317, _0x139dcb, _0x45c053);
  };
  _0x15f20f.useTransition = function () {
    return _0x2ccd9d.H.useTransition();
  };
  _0x15f20f.version = "19.2.4";
});
var u = a((_0x389eff, _0x4a376b) => {
  _0x4a376b.exports = s();
});
var c = a(_0x284416 => {
  function _0x37f3ba(_0x46b780, _0x7c79b7) {
    var _0x568774 = _0x46b780.length;
    _0x46b780.push(_0x7c79b7);
    _0x3f54f3: while (_0x568774 > 0) {
      var _0x3e24e5 = _0x568774 - 1 >>> 1;
      var _0x2e4332 = _0x46b780[_0x3e24e5];
      if (!(_0x8c1798(_0x2e4332, _0x7c79b7) > 0)) {
        break _0x3f54f3;
      }
      _0x46b780[_0x3e24e5] = _0x7c79b7;
      _0x46b780[_0x568774] = _0x2e4332;
      _0x568774 = _0x3e24e5;
    }
  }
  function _0x4e9666(_0x248922) {
    if (_0x248922.length === 0) {
      return null;
    } else {
      return _0x248922[0];
    }
  }
  function _0x31e270(_0x5ccd8f) {
    if (_0x5ccd8f.length === 0) {
      return null;
    }
    var _0x36b760 = _0x5ccd8f[0];
    var _0x58b1e0 = _0x5ccd8f.pop();
    if (_0x58b1e0 !== _0x36b760) {
      _0x5ccd8f[0] = _0x58b1e0;
      _0x3ea1e5: for (var _0x116526 = 0, _0x27918b = _0x5ccd8f.length, _0x175176 = _0x27918b >>> 1; _0x116526 < _0x175176;) {
        var _0x23a176 = (_0x116526 + 1) * 2 - 1;
        var _0x2bbef0 = _0x5ccd8f[_0x23a176];
        var _0x1f2647 = _0x23a176 + 1;
        var _0x2c7807 = _0x5ccd8f[_0x1f2647];
        if (_0x8c1798(_0x2bbef0, _0x58b1e0) < 0) {
          if (_0x1f2647 < _0x27918b && _0x8c1798(_0x2c7807, _0x2bbef0) < 0) {
            _0x5ccd8f[_0x116526] = _0x2c7807;
            _0x5ccd8f[_0x1f2647] = _0x58b1e0;
            _0x116526 = _0x1f2647;
          } else {
            _0x5ccd8f[_0x116526] = _0x2bbef0;
            _0x5ccd8f[_0x23a176] = _0x58b1e0;
            _0x116526 = _0x23a176;
          }
        } else {
          if (!(_0x1f2647 < _0x27918b) || !(_0x8c1798(_0x2c7807, _0x58b1e0) < 0)) {
            break _0x3ea1e5;
          }
          _0x5ccd8f[_0x116526] = _0x2c7807;
          _0x5ccd8f[_0x1f2647] = _0x58b1e0;
          _0x116526 = _0x1f2647;
        }
      }
    }
    return _0x36b760;
  }
  function _0x8c1798(_0x56f816, _0x14d58d) {
    var _0x4a3ff6 = _0x56f816.sortIndex - _0x14d58d.sortIndex;
    if (_0x4a3ff6 !== 0) {
      return _0x4a3ff6;
    } else {
      return _0x56f816.id - _0x14d58d.id;
    }
  }
  _0x284416.unstable_now = undefined;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var _0x2152b = performance;
    _0x284416.unstable_now = function () {
      return _0x2152b.now();
    };
  } else {
    var _0x2bb1c5 = Date;
    var _0x40e756 = _0x2bb1c5.now();
    _0x284416.unstable_now = function () {
      return _0x2bb1c5.now() - _0x40e756;
    };
  }
  var _0x2116e3 = [];
  var _0x45e714 = [];
  var _0x96e6f6 = 1;
  var _0x53559a = null;
  var _0x490bd5 = 3;
  var _0x2dbc04 = false;
  var _0x226778 = false;
  var _0x26b5c6 = false;
  var _0x5ac012 = false;
  var _0x17a7cd = typeof setTimeout == "function" ? setTimeout : null;
  var _0xbc15b8 = typeof clearTimeout == "function" ? clearTimeout : null;
  var _0x3136b9 = typeof setImmediate != "undefined" ? setImmediate : null;
  function _0x41b3e7(_0x3ac9ae) {
    for (var _0xe9d2bc = _0x4e9666(_0x45e714); _0xe9d2bc !== null;) {
      if (_0xe9d2bc.callback === null) {
        _0x31e270(_0x45e714);
      } else {
        if (!(_0xe9d2bc.startTime <= _0x3ac9ae)) {
          break;
        }
        _0x31e270(_0x45e714);
        _0xe9d2bc.sortIndex = _0xe9d2bc.expirationTime;
        _0x37f3ba(_0x2116e3, _0xe9d2bc);
      }
      _0xe9d2bc = _0x4e9666(_0x45e714);
    }
  }
  function _0xefbd44(_0x17f19f) {
    _0x26b5c6 = false;
    _0x41b3e7(_0x17f19f);
    if (!_0x226778) {
      if (_0x4e9666(_0x2116e3) !== null) {
        _0x226778 = true;
        if (!_0xfbaf2) {
          _0xfbaf2 = true;
          _0x576e55();
        }
      } else {
        var _0xf3a1f0 = _0x4e9666(_0x45e714);
        if (_0xf3a1f0 !== null) {
          _0x58b043(_0xefbd44, _0xf3a1f0.startTime - _0x17f19f);
        }
      }
    }
  }
  var _0x576e55;
  var _0xfbaf2 = false;
  var _0x3437e8 = -1;
  var _0x496690 = 5;
  var _0x5db98a = -1;
  function _0x1c66b6() {
    return !!_0x5ac012 || !(_0x284416.unstable_now() - _0x5db98a < _0x496690);
  }
  function _0x2cdfe3() {
    _0x5ac012 = false;
    if (_0xfbaf2) {
      var _0x20644f = _0x284416.unstable_now();
      _0x5db98a = _0x20644f;
      var _0x5eae20 = true;
      try {
        _0x1787a1: {
          _0x226778 = false;
          if (_0x26b5c6) {
            _0x26b5c6 = false;
            _0xbc15b8(_0x3437e8);
            _0x3437e8 = -1;
          }
          _0x2dbc04 = true;
          var _0x2a31ae = _0x490bd5;
          try {
            _0x2d63a8: {
              _0x41b3e7(_0x20644f);
              _0x53559a = _0x4e9666(_0x2116e3);
              while (_0x53559a !== null && (!(_0x53559a.expirationTime > _0x20644f) || !_0x1c66b6())) {
                var _0x4c50e9 = _0x53559a.callback;
                if (typeof _0x4c50e9 == "function") {
                  _0x53559a.callback = null;
                  _0x490bd5 = _0x53559a.priorityLevel;
                  var _0x37926d = _0x4c50e9(_0x53559a.expirationTime <= _0x20644f);
                  _0x20644f = _0x284416.unstable_now();
                  if (typeof _0x37926d == "function") {
                    _0x53559a.callback = _0x37926d;
                    _0x41b3e7(_0x20644f);
                    _0x5eae20 = true;
                    break _0x2d63a8;
                  }
                  if (_0x53559a === _0x4e9666(_0x2116e3)) {
                    _0x31e270(_0x2116e3);
                  }
                  _0x41b3e7(_0x20644f);
                } else {
                  _0x31e270(_0x2116e3);
                }
                _0x53559a = _0x4e9666(_0x2116e3);
              }
              if (_0x53559a !== null) {
                _0x5eae20 = true;
              } else {
                var _0x5b29d8 = _0x4e9666(_0x45e714);
                if (_0x5b29d8 !== null) {
                  _0x58b043(_0xefbd44, _0x5b29d8.startTime - _0x20644f);
                }
                _0x5eae20 = false;
              }
            }
            break _0x1787a1;
          } finally {
            _0x53559a = null;
            _0x490bd5 = _0x2a31ae;
            _0x2dbc04 = false;
          }
          _0x5eae20 = undefined;
        }
      } finally {
        if (_0x5eae20) {
          _0x576e55();
        } else {
          _0xfbaf2 = false;
        }
      }
    }
  }
  if (typeof _0x3136b9 == "function") {
    _0x576e55 = function () {
      _0x3136b9(_0x2cdfe3);
    };
  } else if (typeof MessageChannel != "undefined") {
    var _0x32b307 = new MessageChannel();
    var _0x282b88 = _0x32b307.port2;
    _0x32b307.port1.onmessage = _0x2cdfe3;
    _0x576e55 = function () {
      _0x282b88.postMessage(null);
    };
  } else {
    _0x576e55 = function () {
      _0x17a7cd(_0x2cdfe3, 0);
    };
  }
  function _0x58b043(_0x263f1b, _0x4b69ce) {
    _0x3437e8 = _0x17a7cd(function () {
      _0x263f1b(_0x284416.unstable_now());
    }, _0x4b69ce);
  }
  _0x284416.unstable_IdlePriority = 5;
  _0x284416.unstable_ImmediatePriority = 1;
  _0x284416.unstable_LowPriority = 4;
  _0x284416.unstable_NormalPriority = 3;
  _0x284416.unstable_Profiling = null;
  _0x284416.unstable_UserBlockingPriority = 2;
  _0x284416.unstable_cancelCallback = function (_0x142e89) {
    _0x142e89.callback = null;
  };
  _0x284416.unstable_forceFrameRate = function (_0x373b86) {
    if (_0x373b86 < 0 || _0x373b86 > 125) {
      console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
    } else {
      _0x496690 = _0x373b86 > 0 ? Math.floor(1000 / _0x373b86) : 5;
    }
  };
  _0x284416.unstable_getCurrentPriorityLevel = function () {
    return _0x490bd5;
  };
  _0x284416.unstable_next = function (_0x32453f) {
    switch (_0x490bd5) {
      case 1:
      case 2:
      case 3:
        var _0x37758a = 3;
        break;
      default:
        _0x37758a = _0x490bd5;
    }
    var _0x309c4b = _0x490bd5;
    _0x490bd5 = _0x37758a;
    try {
      return _0x32453f();
    } finally {
      _0x490bd5 = _0x309c4b;
    }
  };
  _0x284416.unstable_requestPaint = function () {
    _0x5ac012 = true;
  };
  _0x284416.unstable_runWithPriority = function (_0x377e32, _0x366da3) {
    switch (_0x377e32) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _0x377e32 = 3;
    }
    var _0x5d7be2 = _0x490bd5;
    _0x490bd5 = _0x377e32;
    try {
      return _0x366da3();
    } finally {
      _0x490bd5 = _0x5d7be2;
    }
  };
  _0x284416.unstable_scheduleCallback = function (_0x71f497, _0x5608ca, _0x5004b0) {
    var _0x201cb9 = _0x284416.unstable_now();
    _0x5004b0 = typeof _0x5004b0 == "object" && _0x5004b0 !== null && typeof (_0x5004b0 = _0x5004b0.delay) == "number" && _0x5004b0 > 0 ? _0x201cb9 + _0x5004b0 : _0x201cb9;
    switch (_0x71f497) {
      case 1:
        var _0x1c6dd0 = -1;
        break;
      case 2:
        _0x1c6dd0 = 250;
        break;
      case 5:
        _0x1c6dd0 = 1073741823;
        break;
      case 4:
        _0x1c6dd0 = 10000;
        break;
      default:
        _0x1c6dd0 = 5000;
    }
    _0x71f497 = {
      id: _0x96e6f6++,
      callback: _0x5608ca,
      priorityLevel: _0x71f497,
      startTime: _0x5004b0,
      expirationTime: _0x1c6dd0 = _0x5004b0 + _0x1c6dd0,
      sortIndex: -1
    };
    if (_0x5004b0 > _0x201cb9) {
      _0x71f497.sortIndex = _0x5004b0;
      _0x37f3ba(_0x45e714, _0x71f497);
      if (_0x4e9666(_0x2116e3) === null && _0x71f497 === _0x4e9666(_0x45e714)) {
        if (_0x26b5c6) {
          _0xbc15b8(_0x3437e8);
          _0x3437e8 = -1;
        } else {
          _0x26b5c6 = true;
        }
        _0x58b043(_0xefbd44, _0x5004b0 - _0x201cb9);
      }
    } else {
      _0x71f497.sortIndex = _0x1c6dd0;
      _0x37f3ba(_0x2116e3, _0x71f497);
      if (!_0x226778 && !_0x2dbc04) {
        _0x226778 = true;
        if (!_0xfbaf2) {
          _0xfbaf2 = true;
          _0x576e55();
        }
      }
    }
    return _0x71f497;
  };
  _0x284416.unstable_shouldYield = _0x1c66b6;
  _0x284416.unstable_wrapCallback = function (_0x525910) {
    var _0x2d6546 = _0x490bd5;
    return function () {
      var _0x1ddaf9 = _0x490bd5;
      _0x490bd5 = _0x2d6546;
      try {
        return _0x525910.apply(this, arguments);
      } finally {
        _0x490bd5 = _0x1ddaf9;
      }
    };
  };
});
var f = a((_0x46d2ae, _0x5b94d0) => {
  _0x5b94d0.exports = c();
});
var d = a(_0x2be288 => {
  var _0x45799d = u();
  function _0x52285b(_0x2f4bdc) {
    var _0x143e83 = "https://react.dev/errors/" + _0x2f4bdc;
    if (arguments.length > 1) {
      _0x143e83 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _0x403d5b = 2; _0x403d5b < arguments.length; _0x403d5b++) {
        _0x143e83 += "&args[]=" + encodeURIComponent(arguments[_0x403d5b]);
      }
    }
    return "Minified React error #" + _0x2f4bdc + "; visit " + _0x143e83 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _0x170930() {}
  var _0x525fef = {
    d: {
      f: _0x170930,
      r: function () {
        throw Error(_0x52285b(522));
      },
      D: _0x170930,
      C: _0x170930,
      L: _0x170930,
      m: _0x170930,
      X: _0x170930,
      S: _0x170930,
      M: _0x170930
    },
    p: 0,
    findDOMNode: null
  };
  var _0xea9984 = Symbol.for("react.portal");
  var _0x123c64 = _0x45799d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _0x53b467(_0x49d544, _0x46c79d) {
    if (_0x49d544 === "font") {
      return "";
    } else if (typeof _0x46c79d == "string") {
      if (_0x46c79d === "use-credentials") {
        return _0x46c79d;
      } else {
        return "";
      }
    } else {
      return undefined;
    }
  }
  _0x2be288.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _0x525fef;
  _0x2be288.createPortal = function (_0x3af9ed, _0x57113f, _0x20cc39 = null) {
    if (!_0x57113f || _0x57113f.nodeType !== 1 && _0x57113f.nodeType !== 9 && _0x57113f.nodeType !== 11) {
      throw Error(_0x52285b(299));
    }
    return function (_0x1b4f21, _0xe74cb, _0x24772f, _0x47af57 = null) {
      return {
        $$typeof: _0xea9984,
        key: _0x47af57 == null ? null : "" + _0x47af57,
        children: _0x1b4f21,
        containerInfo: _0xe74cb,
        implementation: _0x24772f
      };
    }(_0x3af9ed, _0x57113f, null, _0x20cc39);
  };
  _0x2be288.flushSync = function (_0x4f412c) {
    var _0x11ddc9 = _0x123c64.T;
    var _0x4a79a4 = _0x525fef.p;
    try {
      _0x123c64.T = null;
      _0x525fef.p = 2;
      if (_0x4f412c) {
        return _0x4f412c();
      }
    } finally {
      _0x123c64.T = _0x11ddc9;
      _0x525fef.p = _0x4a79a4;
      _0x525fef.d.f();
    }
  };
  _0x2be288.preconnect = function (_0x1b403e, _0x4e292d) {
    if (typeof _0x1b403e == "string") {
      _0x4e292d = _0x4e292d ? typeof (_0x4e292d = _0x4e292d.crossOrigin) == "string" ? _0x4e292d === "use-credentials" ? _0x4e292d : "" : undefined : null;
      _0x525fef.d.C(_0x1b403e, _0x4e292d);
    }
  };
  _0x2be288.prefetchDNS = function (_0x48cee9) {
    if (typeof _0x48cee9 == "string") {
      _0x525fef.d.D(_0x48cee9);
    }
  };
  _0x2be288.preinit = function (_0x15b7cb, _0x2c6ec6) {
    if (typeof _0x15b7cb == "string" && _0x2c6ec6 && typeof _0x2c6ec6.as == "string") {
      var _0xd495ee = _0x2c6ec6.as;
      var _0xa491eb = _0x53b467(_0xd495ee, _0x2c6ec6.crossOrigin);
      var _0x5c1d06 = typeof _0x2c6ec6.integrity == "string" ? _0x2c6ec6.integrity : undefined;
      var _0x53f214 = typeof _0x2c6ec6.fetchPriority == "string" ? _0x2c6ec6.fetchPriority : undefined;
      if (_0xd495ee === "style") {
        _0x525fef.d.S(_0x15b7cb, typeof _0x2c6ec6.precedence == "string" ? _0x2c6ec6.precedence : undefined, {
          crossOrigin: _0xa491eb,
          integrity: _0x5c1d06,
          fetchPriority: _0x53f214
        });
      } else if (_0xd495ee === "script") {
        _0x525fef.d.X(_0x15b7cb, {
          crossOrigin: _0xa491eb,
          integrity: _0x5c1d06,
          fetchPriority: _0x53f214,
          nonce: typeof _0x2c6ec6.nonce == "string" ? _0x2c6ec6.nonce : undefined
        });
      }
    }
  };
  _0x2be288.preinitModule = function (_0x2d1bc2, _0xc09204) {
    if (typeof _0x2d1bc2 == "string") {
      if (typeof _0xc09204 == "object" && _0xc09204 !== null) {
        if (_0xc09204.as == null || _0xc09204.as === "script") {
          var _0x1a440f = _0x53b467(_0xc09204.as, _0xc09204.crossOrigin);
          _0x525fef.d.M(_0x2d1bc2, {
            crossOrigin: _0x1a440f,
            integrity: typeof _0xc09204.integrity == "string" ? _0xc09204.integrity : undefined,
            nonce: typeof _0xc09204.nonce == "string" ? _0xc09204.nonce : undefined
          });
        }
      } else {
        _0xc09204 ?? _0x525fef.d.M(_0x2d1bc2);
      }
    }
  };
  _0x2be288.preload = function (_0x46f69c, _0x1e5377) {
    if (typeof _0x46f69c == "string" && typeof _0x1e5377 == "object" && _0x1e5377 !== null && typeof _0x1e5377.as == "string") {
      var _0x545f3c = _0x1e5377.as;
      var _0x9422a9 = _0x53b467(_0x545f3c, _0x1e5377.crossOrigin);
      _0x525fef.d.L(_0x46f69c, _0x545f3c, {
        crossOrigin: _0x9422a9,
        integrity: typeof _0x1e5377.integrity == "string" ? _0x1e5377.integrity : undefined,
        nonce: typeof _0x1e5377.nonce == "string" ? _0x1e5377.nonce : undefined,
        type: typeof _0x1e5377.type == "string" ? _0x1e5377.type : undefined,
        fetchPriority: typeof _0x1e5377.fetchPriority == "string" ? _0x1e5377.fetchPriority : undefined,
        referrerPolicy: typeof _0x1e5377.referrerPolicy == "string" ? _0x1e5377.referrerPolicy : undefined,
        imageSrcSet: typeof _0x1e5377.imageSrcSet == "string" ? _0x1e5377.imageSrcSet : undefined,
        imageSizes: typeof _0x1e5377.imageSizes == "string" ? _0x1e5377.imageSizes : undefined,
        media: typeof _0x1e5377.media == "string" ? _0x1e5377.media : undefined
      });
    }
  };
  _0x2be288.preloadModule = function (_0x36c07a, _0x47cf92) {
    if (typeof _0x36c07a == "string") {
      if (_0x47cf92) {
        var _0x4a235c = _0x53b467(_0x47cf92.as, _0x47cf92.crossOrigin);
        _0x525fef.d.m(_0x36c07a, {
          as: typeof _0x47cf92.as == "string" && _0x47cf92.as !== "script" ? _0x47cf92.as : undefined,
          crossOrigin: _0x4a235c,
          integrity: typeof _0x47cf92.integrity == "string" ? _0x47cf92.integrity : undefined
        });
      } else {
        _0x525fef.d.m(_0x36c07a);
      }
    }
  };
  _0x2be288.requestFormReset = function (_0x2257f8) {
    _0x525fef.d.r(_0x2257f8);
  };
  _0x2be288.unstable_batchedUpdates = function (_0x28823a, _0x3c9821) {
    return _0x28823a(_0x3c9821);
  };
  _0x2be288.useFormState = function (_0x33710f, _0x242201, _0x203644) {
    return _0x123c64.H.useFormState(_0x33710f, _0x242201, _0x203644);
  };
  _0x2be288.useFormStatus = function () {
    return _0x123c64.H.useHostTransitionStatus();
  };
  _0x2be288.version = "19.2.4";
});
var p = a((_0x34fc91, _0x43e9be) => {
  (function _0x4d5c22() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0x4d5c22);
      } catch (_0x1d6925) {
        console.error(_0x1d6925);
      }
    }
  })();
  _0x43e9be.exports = d();
});
var h = a(_0x137b35 => {
  var _0xbf7a82 = f();
  var _0x4703e3 = u();
  var _0x154041 = p();
  function _0x34c7b9(_0x3cbb75) {
    var _0x510826 = "https://react.dev/errors/" + _0x3cbb75;
    if (arguments.length > 1) {
      _0x510826 += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _0x3c076e = 2; _0x3c076e < arguments.length; _0x3c076e++) {
        _0x510826 += "&args[]=" + encodeURIComponent(arguments[_0x3c076e]);
      }
    }
    return "Minified React error #" + _0x3cbb75 + "; visit " + _0x510826 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function _0x4809b3(_0x1b071a) {
    var _0xe8aaf6 = _0x1b071a;
    var _0x52c382 = _0x1b071a;
    if (_0x1b071a.alternate) {
      while (_0xe8aaf6.return) {
        _0xe8aaf6 = _0xe8aaf6.return;
      }
    } else {
      _0x1b071a = _0xe8aaf6;
      do {
        if ((_0xe8aaf6 = _0x1b071a).flags & 4098) {
          _0x52c382 = _0xe8aaf6.return;
        }
        _0x1b071a = _0xe8aaf6.return;
      } while (_0x1b071a);
    }
    if (_0xe8aaf6.tag === 3) {
      return _0x52c382;
    } else {
      return null;
    }
  }
  function _0x5715cf(_0x48a6bf) {
    if (_0x48a6bf.tag === 13) {
      var _0x24f10a = _0x48a6bf.memoizedState;
      if (_0x24f10a === null && (_0x48a6bf = _0x48a6bf.alternate) !== null) {
        _0x24f10a = _0x48a6bf.memoizedState;
      }
      if (_0x24f10a !== null) {
        return _0x24f10a.dehydrated;
      }
    }
    return null;
  }
  function _0x21b7ee(_0x2d59e8) {
    if (_0x2d59e8.tag === 31) {
      var _0x50d433 = _0x2d59e8.memoizedState;
      if (_0x50d433 === null && (_0x2d59e8 = _0x2d59e8.alternate) !== null) {
        _0x50d433 = _0x2d59e8.memoizedState;
      }
      if (_0x50d433 !== null) {
        return _0x50d433.dehydrated;
      }
    }
    return null;
  }
  function _0x59dbad(_0xea9a60) {
    if (_0x4809b3(_0xea9a60) !== _0xea9a60) {
      throw Error(_0x34c7b9(188));
    }
  }
  function _0x423152(_0x36dbcf) {
    var _0x2b0867 = _0x36dbcf.tag;
    if (_0x2b0867 === 5 || _0x2b0867 === 26 || _0x2b0867 === 27 || _0x2b0867 === 6) {
      return _0x36dbcf;
    }
    for (_0x36dbcf = _0x36dbcf.child; _0x36dbcf !== null;) {
      if ((_0x2b0867 = _0x423152(_0x36dbcf)) !== null) {
        return _0x2b0867;
      }
      _0x36dbcf = _0x36dbcf.sibling;
    }
    return null;
  }
  var _0x15c004 = Object.assign;
  var _0x63fbcc = Symbol.for("react.element");
  var _0x54b743 = Symbol.for("react.transitional.element");
  var _0x2f1d8e = Symbol.for("react.portal");
  var _0x283751 = Symbol.for("react.fragment");
  var _0x4d6cdd = Symbol.for("react.strict_mode");
  var _0x1e3f71 = Symbol.for("react.profiler");
  var _0xead563 = Symbol.for("react.consumer");
  var _0x147ad0 = Symbol.for("react.context");
  var _0x5260c6 = Symbol.for("react.forward_ref");
  var _0x3f7a43 = Symbol.for("react.suspense");
  var _0x14e3dc = Symbol.for("react.suspense_list");
  var _0x1b20b5 = Symbol.for("react.memo");
  var _0x232ba2 = Symbol.for("react.lazy");
  var _0x18d5b7 = Symbol.for("react.activity");
  var _0x312705 = Symbol.for("react.memo_cache_sentinel");
  var _0x465d4e = Symbol.iterator;
  function _0x2becc5(_0x22af79) {
    if (_0x22af79 === null || typeof _0x22af79 != "object") {
      return null;
    } else if (typeof (_0x22af79 = _0x465d4e && _0x22af79[_0x465d4e] || _0x22af79["@@iterator"]) == "function") {
      return _0x22af79;
    } else {
      return null;
    }
  }
  var _0x2769d3 = Symbol.for("react.client.reference");
  function _0x340988(_0x327545) {
    if (_0x327545 == null) {
      return null;
    }
    if (typeof _0x327545 == "function") {
      if (_0x327545.$$typeof === _0x2769d3) {
        return null;
      } else {
        return _0x327545.displayName || _0x327545.name || null;
      }
    }
    if (typeof _0x327545 == "string") {
      return _0x327545;
    }
    switch (_0x327545) {
      case _0x283751:
        return "Fragment";
      case _0x1e3f71:
        return "Profiler";
      case _0x4d6cdd:
        return "StrictMode";
      case _0x3f7a43:
        return "Suspense";
      case _0x14e3dc:
        return "SuspenseList";
      case _0x18d5b7:
        return "Activity";
    }
    if (typeof _0x327545 == "object") {
      switch (_0x327545.$$typeof) {
        case _0x2f1d8e:
          return "Portal";
        case _0x147ad0:
          return _0x327545.displayName || "Context";
        case _0xead563:
          return (_0x327545._context.displayName || "Context") + ".Consumer";
        case _0x5260c6:
          var _0xbd9a0c = _0x327545.render;
          if (!(_0x327545 = _0x327545.displayName)) {
            _0x327545 = (_0x327545 = _0xbd9a0c.displayName || _0xbd9a0c.name || "") !== "" ? "ForwardRef(" + _0x327545 + ")" : "ForwardRef";
          }
          return _0x327545;
        case _0x1b20b5:
          if ((_0xbd9a0c = _0x327545.displayName || null) !== null) {
            return _0xbd9a0c;
          } else {
            return _0x340988(_0x327545.type) || "Memo";
          }
        case _0x232ba2:
          _0xbd9a0c = _0x327545._payload;
          _0x327545 = _0x327545._init;
          try {
            return _0x340988(_0x327545(_0xbd9a0c));
          } catch (_0x18dc4f) {}
      }
    }
    return null;
  }
  var _0x284410 = Array.isArray;
  var _0x30149d = _0x4703e3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var _0x3e2aff = _0x154041.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var _0x2eb1a = {
    pending: false,
    data: null,
    method: null,
    action: null
  };
  var _0x364164 = [];
  var _0x455da4 = -1;
  function _0x2d2885(_0x37c369) {
    return {
      current: _0x37c369
    };
  }
  function _0x20fc3e(_0x369b4b) {
    if (!(_0x455da4 < 0)) {
      _0x369b4b.current = _0x364164[_0x455da4];
      _0x364164[_0x455da4] = null;
      _0x455da4--;
    }
  }
  function _0x45c6e5(_0x363974, _0x246f03) {
    _0x455da4++;
    _0x364164[_0x455da4] = _0x363974.current;
    _0x363974.current = _0x246f03;
  }
  var _0x55d700;
  var _0x39be0f;
  var _0x584415 = _0x2d2885(null);
  var _0xd5d6e0 = _0x2d2885(null);
  var _0x2d4ef4 = _0x2d2885(null);
  var _0x12e4d9 = _0x2d2885(null);
  function _0x32e041(_0x11d66d, _0x23f844) {
    _0x45c6e5(_0x2d4ef4, _0x23f844);
    _0x45c6e5(_0xd5d6e0, _0x11d66d);
    _0x45c6e5(_0x584415, null);
    switch (_0x23f844.nodeType) {
      case 9:
      case 11:
        _0x11d66d = (_0x11d66d = _0x23f844.documentElement) && (_0x11d66d = _0x11d66d.namespaceURI) ? _0x247d0c(_0x11d66d) : 0;
        break;
      default:
        _0x11d66d = _0x23f844.tagName;
        if (_0x23f844 = _0x23f844.namespaceURI) {
          _0x11d66d = _0x249e57(_0x23f844 = _0x247d0c(_0x23f844), _0x11d66d);
        } else {
          switch (_0x11d66d) {
            case "svg":
              _0x11d66d = 1;
              break;
            case "math":
              _0x11d66d = 2;
              break;
            default:
              _0x11d66d = 0;
          }
        }
    }
    _0x20fc3e(_0x584415);
    _0x45c6e5(_0x584415, _0x11d66d);
  }
  function _0x21379e() {
    _0x20fc3e(_0x584415);
    _0x20fc3e(_0xd5d6e0);
    _0x20fc3e(_0x2d4ef4);
  }
  function _0x86650b(_0x5d60bb) {
    if (_0x5d60bb.memoizedState !== null) {
      _0x45c6e5(_0x12e4d9, _0x5d60bb);
    }
    var _0x945d98 = _0x584415.current;
    var _0x283b3e = _0x249e57(_0x945d98, _0x5d60bb.type);
    if (_0x945d98 !== _0x283b3e) {
      _0x45c6e5(_0xd5d6e0, _0x5d60bb);
      _0x45c6e5(_0x584415, _0x283b3e);
    }
  }
  function _0xdf61f9(_0x2c71fa) {
    if (_0xd5d6e0.current === _0x2c71fa) {
      _0x20fc3e(_0x584415);
      _0x20fc3e(_0xd5d6e0);
    }
    if (_0x12e4d9.current === _0x2c71fa) {
      _0x20fc3e(_0x12e4d9);
      _0x508408._currentValue = _0x2eb1a;
    }
  }
  function _0x30e942(_0x2b556b) {
    if (_0x55d700 === undefined) {
      try {
        throw Error();
      } catch (_0x3a2a66) {
        var _0x16caa5 = _0x3a2a66.stack.trim().match(/\n( *(at )?)/);
        _0x55d700 = _0x16caa5 && _0x16caa5[1] || "";
        _0x39be0f = _0x3a2a66.stack.indexOf("\n    at") > -1 ? " (<anonymous>)" : _0x3a2a66.stack.indexOf("@") > -1 ? "@unknown:0:0" : "";
      }
    }
    return "\n" + _0x55d700 + _0x2b556b + _0x39be0f;
  }
  var _0x4194aa = false;
  function _0x1fc257(_0x3e7d8e, _0x23410a) {
    if (!_0x3e7d8e || _0x4194aa) {
      return "";
    }
    _0x4194aa = true;
    var _0x5be522 = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      var _0x25d41d = {
        DetermineComponentFrameRoot: function () {
          try {
            if (_0x23410a) {
              function _0x5159a8() {
                throw Error();
              }
              Object.defineProperty(_0x5159a8.prototype, "props", {
                set: function () {
                  throw Error();
                }
              });
              if (typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_0x5159a8, []);
                } catch (_0x552333) {
                  var _0x934f32 = _0x552333;
                }
                Reflect.construct(_0x3e7d8e, [], _0x5159a8);
              } else {
                try {
                  _0x5159a8.call();
                } catch (_0x3022cc) {
                  _0x934f32 = _0x3022cc;
                }
                _0x3e7d8e.call(_0x5159a8.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (_0x52505f) {
                _0x934f32 = _0x52505f;
              }
              if ((_0x5159a8 = _0x3e7d8e()) && typeof _0x5159a8.catch == "function") {
                _0x5159a8.catch(function () {});
              }
            }
          } catch (_0x57b08b) {
            if (_0x57b08b && _0x934f32 && typeof _0x57b08b.stack == "string") {
              return [_0x57b08b.stack, _0x934f32.stack];
            }
          }
          return [null, null];
        }
      };
      _0x25d41d.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var _0x44cb8f = Object.getOwnPropertyDescriptor(_0x25d41d.DetermineComponentFrameRoot, "name");
      if (_0x44cb8f && _0x44cb8f.configurable) {
        Object.defineProperty(_0x25d41d.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
      }
      var _0x1a3925 = _0x25d41d.DetermineComponentFrameRoot();
      var _0x33a116 = _0x1a3925[0];
      var _0x5939d7 = _0x1a3925[1];
      if (_0x33a116 && _0x5939d7) {
        var _0x352d02 = _0x33a116.split("\n");
        var _0x59a264 = _0x5939d7.split("\n");
        for (_0x44cb8f = _0x25d41d = 0; _0x25d41d < _0x352d02.length && !_0x352d02[_0x25d41d].includes("DetermineComponentFrameRoot");) {
          _0x25d41d++;
        }
        while (_0x44cb8f < _0x59a264.length && !_0x59a264[_0x44cb8f].includes("DetermineComponentFrameRoot")) {
          _0x44cb8f++;
        }
        if (_0x25d41d === _0x352d02.length || _0x44cb8f === _0x59a264.length) {
          _0x25d41d = _0x352d02.length - 1;
          _0x44cb8f = _0x59a264.length - 1;
          while (_0x25d41d >= 1 && _0x44cb8f >= 0 && _0x352d02[_0x25d41d] !== _0x59a264[_0x44cb8f]) {
            _0x44cb8f--;
          }
        }
        for (; _0x25d41d >= 1 && _0x44cb8f >= 0; _0x25d41d--, _0x44cb8f--) {
          if (_0x352d02[_0x25d41d] !== _0x59a264[_0x44cb8f]) {
            if (_0x25d41d !== 1 || _0x44cb8f !== 1) {
              do {
                _0x25d41d--;
                if (--_0x44cb8f < 0 || _0x352d02[_0x25d41d] !== _0x59a264[_0x44cb8f]) {
                  var _0x5a427b = "\n" + _0x352d02[_0x25d41d].replace(" at new ", " at ");
                  if (_0x3e7d8e.displayName && _0x5a427b.includes("<anonymous>")) {
                    _0x5a427b = _0x5a427b.replace("<anonymous>", _0x3e7d8e.displayName);
                  }
                  return _0x5a427b;
                }
              } while (_0x25d41d >= 1 && _0x44cb8f >= 0);
            }
            break;
          }
        }
      }
    } finally {
      _0x4194aa = false;
      Error.prepareStackTrace = _0x5be522;
    }
    if (_0x5be522 = _0x3e7d8e ? _0x3e7d8e.displayName || _0x3e7d8e.name : "") {
      return _0x30e942(_0x5be522);
    } else {
      return "";
    }
  }
  function _0x594f86(_0xfbae6b, _0x44a745) {
    switch (_0xfbae6b.tag) {
      case 26:
      case 27:
      case 5:
        return _0x30e942(_0xfbae6b.type);
      case 16:
        return _0x30e942("Lazy");
      case 13:
        if (_0xfbae6b.child !== _0x44a745 && _0x44a745 !== null) {
          return _0x30e942("Suspense Fallback");
        } else {
          return _0x30e942("Suspense");
        }
      case 19:
        return _0x30e942("SuspenseList");
      case 0:
      case 15:
        return _0x1fc257(_0xfbae6b.type, false);
      case 11:
        return _0x1fc257(_0xfbae6b.type.render, false);
      case 1:
        return _0x1fc257(_0xfbae6b.type, true);
      case 31:
        return _0x30e942("Activity");
      default:
        return "";
    }
  }
  function _0x513b24(_0x42e3dc) {
    try {
      var _0x4e279f = "";
      var _0x4a908e = null;
      do {
        _0x4e279f += _0x594f86(_0x42e3dc, _0x4a908e);
        _0x4a908e = _0x42e3dc;
        _0x42e3dc = _0x42e3dc.return;
      } while (_0x42e3dc);
      return _0x4e279f;
    } catch (_0x2647bc) {
      return "\nError generating stack: " + _0x2647bc.message + "\n" + _0x2647bc.stack;
    }
  }
  var _0x2d065a = Object.prototype.hasOwnProperty;
  var _0x3ccef2 = _0xbf7a82.unstable_scheduleCallback;
  var _0x31840a = _0xbf7a82.unstable_cancelCallback;
  var _0x382c7c = _0xbf7a82.unstable_shouldYield;
  var _0x3ba68a = _0xbf7a82.unstable_requestPaint;
  var _0x271a39 = _0xbf7a82.unstable_now;
  var _0x1931e9 = _0xbf7a82.unstable_getCurrentPriorityLevel;
  var _0x302b52 = _0xbf7a82.unstable_ImmediatePriority;
  var _0x104215 = _0xbf7a82.unstable_UserBlockingPriority;
  var _0x39ac2e = _0xbf7a82.unstable_NormalPriority;
  var _0x165f5c = _0xbf7a82.unstable_LowPriority;
  var _0x306d03 = _0xbf7a82.unstable_IdlePriority;
  var _0x4989df = _0xbf7a82.log;
  var _0x343f53 = _0xbf7a82.unstable_setDisableYieldValue;
  var _0x90d840 = null;
  var _0x3be8ed = null;
  function _0x55c8ad(_0x545b22) {
    if (typeof _0x4989df == "function") {
      _0x343f53(_0x545b22);
    }
    if (_0x3be8ed && typeof _0x3be8ed.setStrictMode == "function") {
      try {
        _0x3be8ed.setStrictMode(_0x90d840, _0x545b22);
      } catch (_0x115d42) {}
    }
  }
  var _0x4f44c7 = Math.clz32 ? Math.clz32 : function (_0x271f48) {
    if ((_0x271f48 >>>= 0) == 0) {
      return 32;
    } else {
      return 31 - (_0x2d5660(_0x271f48) / _0x20296a | 0) | 0;
    }
  };
  var _0x2d5660 = Math.log;
  var _0x20296a = Math.LN2;
  var _0x3a63a0 = 256;
  var _0x1499d4 = 262144;
  var _0x41df1f = 4194304;
  function _0x336d13(_0x1d0b62) {
    var _0x1b77e6 = _0x1d0b62 & 42;
    if (_0x1b77e6 !== 0) {
      return _0x1b77e6;
    }
    switch (_0x1d0b62 & -_0x1d0b62) {
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
        return 64;
      case 128:
        return 128;
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
        return _0x1d0b62 & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return _0x1d0b62 & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return _0x1d0b62 & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return _0x1d0b62;
    }
  }
  function _0x51d858(_0x54fff9, _0x324560, _0x52573c) {
    var _0x16bdc4 = _0x54fff9.pendingLanes;
    if (_0x16bdc4 === 0) {
      return 0;
    }
    var _0x16f4db = 0;
    var _0x35b8e1 = _0x54fff9.suspendedLanes;
    var _0x265c07 = _0x54fff9.pingedLanes;
    _0x54fff9 = _0x54fff9.warmLanes;
    var _0x1b379f = _0x16bdc4 & 134217727;
    if (_0x1b379f !== 0) {
      if ((_0x16bdc4 = _0x1b379f & ~_0x35b8e1) !== 0) {
        _0x16f4db = _0x336d13(_0x16bdc4);
      } else if ((_0x265c07 &= _0x1b379f) !== 0) {
        _0x16f4db = _0x336d13(_0x265c07);
      } else if (!_0x52573c) {
        if ((_0x52573c = _0x1b379f & ~_0x54fff9) !== 0) {
          _0x16f4db = _0x336d13(_0x52573c);
        }
      }
    } else if ((_0x1b379f = _0x16bdc4 & ~_0x35b8e1) !== 0) {
      _0x16f4db = _0x336d13(_0x1b379f);
    } else if (_0x265c07 !== 0) {
      _0x16f4db = _0x336d13(_0x265c07);
    } else if (!_0x52573c) {
      if ((_0x52573c = _0x16bdc4 & ~_0x54fff9) !== 0) {
        _0x16f4db = _0x336d13(_0x52573c);
      }
    }
    if (_0x16f4db === 0) {
      return 0;
    } else if (_0x324560 !== 0 && _0x324560 !== _0x16f4db && (_0x324560 & _0x35b8e1) === 0 && ((_0x35b8e1 = _0x16f4db & -_0x16f4db) >= (_0x52573c = _0x324560 & -_0x324560) || _0x35b8e1 === 32 && _0x52573c & 4194048)) {
      return _0x324560;
    } else {
      return _0x16f4db;
    }
  }
  function _0x3f30e6(_0x2216b1, _0x758404) {
    return (_0x2216b1.pendingLanes & ~(_0x2216b1.suspendedLanes & ~_0x2216b1.pingedLanes) & _0x758404) === 0;
  }
  function _0x544cc9(_0x30ce57, _0x325bfa) {
    switch (_0x30ce57) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return _0x325bfa + 250;
      case 16:
      case 32:
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
        return _0x325bfa + 5000;
      default:
        return -1;
    }
  }
  function _0xc2aedf() {
    var _0x563058 = _0x41df1f;
    if (!((_0x41df1f <<= 1) & 62914560)) {
      _0x41df1f = 4194304;
    }
    return _0x563058;
  }
  function _0x9ede8b(_0x31544c) {
    var _0x4c7b29 = [];
    for (var _0xa29bc = 0; _0xa29bc < 31; _0xa29bc++) {
      _0x4c7b29.push(_0x31544c);
    }
    return _0x4c7b29;
  }
  function _0x5ec34f(_0x52dfca, _0x101575) {
    _0x52dfca.pendingLanes |= _0x101575;
    if (_0x101575 !== 268435456) {
      _0x52dfca.suspendedLanes = 0;
      _0x52dfca.pingedLanes = 0;
      _0x52dfca.warmLanes = 0;
    }
  }
  function _0x4e0a08(_0x31b5aa, _0x1f5d64, _0x3b7dbd) {
    _0x31b5aa.pendingLanes |= _0x1f5d64;
    _0x31b5aa.suspendedLanes &= ~_0x1f5d64;
    var _0x56affa = 31 - _0x4f44c7(_0x1f5d64);
    _0x31b5aa.entangledLanes |= _0x1f5d64;
    _0x31b5aa.entanglements[_0x56affa] = _0x31b5aa.entanglements[_0x56affa] | 1073741824 | _0x3b7dbd & 261930;
  }
  function _0xbfe3ba(_0x30bbbe, _0x55b6b9) {
    var _0x1c4178 = _0x30bbbe.entangledLanes |= _0x55b6b9;
    for (_0x30bbbe = _0x30bbbe.entanglements; _0x1c4178;) {
      var _0x4012be = 31 - _0x4f44c7(_0x1c4178);
      var _0x4e2576 = 1 << _0x4012be;
      if (_0x4e2576 & _0x55b6b9 | _0x30bbbe[_0x4012be] & _0x55b6b9) {
        _0x30bbbe[_0x4012be] |= _0x55b6b9;
      }
      _0x1c4178 &= ~_0x4e2576;
    }
  }
  function _0xbd17ac(_0x36f1a8, _0x1baefa) {
    var _0x571f5d = _0x1baefa & -_0x1baefa;
    if (((_0x571f5d = _0x571f5d & 42 ? 1 : _0x107c3a(_0x571f5d)) & (_0x36f1a8.suspendedLanes | _0x1baefa)) !== 0) {
      return 0;
    } else {
      return _0x571f5d;
    }
  }
  function _0x107c3a(_0x34c6e2) {
    switch (_0x34c6e2) {
      case 2:
        _0x34c6e2 = 1;
        break;
      case 8:
        _0x34c6e2 = 4;
        break;
      case 32:
        _0x34c6e2 = 16;
        break;
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
        _0x34c6e2 = 128;
        break;
      case 268435456:
        _0x34c6e2 = 134217728;
        break;
      default:
        _0x34c6e2 = 0;
    }
    return _0x34c6e2;
  }
  function _0x30b643(_0xf42bdd) {
    if ((_0xf42bdd &= -_0xf42bdd) > 2) {
      if (_0xf42bdd > 8) {
        if (_0xf42bdd & 134217727) {
          return 32;
        } else {
          return 268435456;
        }
      } else {
        return 8;
      }
    } else {
      return 2;
    }
  }
  function _0x4d9678() {
    var _0x204c87 = _0x3e2aff.p;
    if (_0x204c87 !== 0) {
      return _0x204c87;
    } else if ((_0x204c87 = window.event) === undefined) {
      return 32;
    } else {
      return _0x5508ca(_0x204c87.type);
    }
  }
  function _0x57b874(_0x2d8735, _0x734f60) {
    var _0xeb1b08 = _0x3e2aff.p;
    try {
      _0x3e2aff.p = _0x2d8735;
      return _0x734f60();
    } finally {
      _0x3e2aff.p = _0xeb1b08;
    }
  }
  var _0x2d4cac = Math.random().toString(36).slice(2);
  var _0x941386 = "__reactFiber$" + _0x2d4cac;
  var _0x21a328 = "__reactProps$" + _0x2d4cac;
  var _0x193a0c = "__reactContainer$" + _0x2d4cac;
  var _0x1e6ce1 = "__reactEvents$" + _0x2d4cac;
  var _0x46fd63 = "__reactListeners$" + _0x2d4cac;
  var _0x4dddd5 = "__reactHandles$" + _0x2d4cac;
  var _0x768be4 = "__reactResources$" + _0x2d4cac;
  var _0x28419d = "__reactMarker$" + _0x2d4cac;
  function _0x2ca6af(_0x1b280d) {
    delete _0x1b280d[_0x941386];
    delete _0x1b280d[_0x21a328];
    delete _0x1b280d[_0x1e6ce1];
    delete _0x1b280d[_0x46fd63];
    delete _0x1b280d[_0x4dddd5];
  }
  function _0x3c703b(_0x12322e) {
    var _0x4a974d = _0x12322e[_0x941386];
    if (_0x4a974d) {
      return _0x4a974d;
    }
    for (var _0x7777b4 = _0x12322e.parentNode; _0x7777b4;) {
      if (_0x4a974d = _0x7777b4[_0x193a0c] || _0x7777b4[_0x941386]) {
        _0x7777b4 = _0x4a974d.alternate;
        if (_0x4a974d.child !== null || _0x7777b4 !== null && _0x7777b4.child !== null) {
          for (_0x12322e = _0x5d84ef(_0x12322e); _0x12322e !== null;) {
            if (_0x7777b4 = _0x12322e[_0x941386]) {
              return _0x7777b4;
            }
            _0x12322e = _0x5d84ef(_0x12322e);
          }
        }
        return _0x4a974d;
      }
      _0x7777b4 = (_0x12322e = _0x7777b4).parentNode;
    }
    return null;
  }
  function _0x29babc(_0x30a839) {
    if (_0x30a839 = _0x30a839[_0x941386] || _0x30a839[_0x193a0c]) {
      var _0x5aac8c = _0x30a839.tag;
      if (_0x5aac8c === 5 || _0x5aac8c === 6 || _0x5aac8c === 13 || _0x5aac8c === 31 || _0x5aac8c === 26 || _0x5aac8c === 27 || _0x5aac8c === 3) {
        return _0x30a839;
      }
    }
    return null;
  }
  function _0x4d1e18(_0x48b491) {
    var _0x30a757 = _0x48b491.tag;
    if (_0x30a757 === 5 || _0x30a757 === 26 || _0x30a757 === 27 || _0x30a757 === 6) {
      return _0x48b491.stateNode;
    }
    throw Error(_0x34c7b9(33));
  }
  function _0x5cda33(_0x5d5906) {
    var _0x29fc91 = _0x5d5906[_0x768be4];
    _0x29fc91 ||= _0x5d5906[_0x768be4] = {
      hoistableStyles: new Map(),
      hoistableScripts: new Map()
    };
    return _0x29fc91;
  }
  function _0x414312(_0x1905bb) {
    _0x1905bb[_0x28419d] = true;
  }
  var _0x2775be = new Set();
  var _0x31d509 = {};
  function _0x32e630(_0x5a033e, _0x764245) {
    _0x271bd2(_0x5a033e, _0x764245);
    _0x271bd2(_0x5a033e + "Capture", _0x764245);
  }
  function _0x271bd2(_0x4919b3, _0x52ab8c) {
    _0x31d509[_0x4919b3] = _0x52ab8c;
    _0x4919b3 = 0;
    for (; _0x4919b3 < _0x52ab8c.length; _0x4919b3++) {
      _0x2775be.add(_0x52ab8c[_0x4919b3]);
    }
  }
  var _0x32169b = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
  var _0xd21dbf = {};
  var _0x2e4abd = {};
  function _0x236dbf(_0x221e2c, _0x483073, _0x488e83) {
    _0xe8e1e0 = _0x483073;
    if (_0x2d065a.call(_0x2e4abd, _0xe8e1e0) || !_0x2d065a.call(_0xd21dbf, _0xe8e1e0) && (_0x32169b.test(_0xe8e1e0) ? _0x2e4abd[_0xe8e1e0] = true : (_0xd21dbf[_0xe8e1e0] = true, 0))) {
      if (_0x488e83 === null) {
        _0x221e2c.removeAttribute(_0x483073);
      } else {
        switch (typeof _0x488e83) {
          case "undefined":
          case "function":
          case "symbol":
            _0x221e2c.removeAttribute(_0x483073);
            return;
          case "boolean":
            var _0x26de7a = _0x483073.toLowerCase().slice(0, 5);
            if (_0x26de7a !== "data-" && _0x26de7a !== "aria-") {
              _0x221e2c.removeAttribute(_0x483073);
              return;
            }
        }
        _0x221e2c.setAttribute(_0x483073, "" + _0x488e83);
      }
    }
    var _0xe8e1e0;
  }
  function _0x365f47(_0x303d16, _0x103695, _0x2e981f) {
    if (_0x2e981f === null) {
      _0x303d16.removeAttribute(_0x103695);
    } else {
      switch (typeof _0x2e981f) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          _0x303d16.removeAttribute(_0x103695);
          return;
      }
      _0x303d16.setAttribute(_0x103695, "" + _0x2e981f);
    }
  }
  function _0x21591c(_0xa77183, _0x28d7f3, _0x299a5b, _0x35c0be) {
    if (_0x35c0be === null) {
      _0xa77183.removeAttribute(_0x299a5b);
    } else {
      switch (typeof _0x35c0be) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          _0xa77183.removeAttribute(_0x299a5b);
          return;
      }
      _0xa77183.setAttributeNS(_0x28d7f3, _0x299a5b, "" + _0x35c0be);
    }
  }
  function _0x5032e9(_0x2a541a) {
    switch (typeof _0x2a541a) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
      case "object":
        return _0x2a541a;
      default:
        return "";
    }
  }
  function _0x2eabbc(_0xb3bd6a) {
    var _0xe327c7 = _0xb3bd6a.type;
    return (_0xb3bd6a = _0xb3bd6a.nodeName) && _0xb3bd6a.toLowerCase() === "input" && (_0xe327c7 === "checkbox" || _0xe327c7 === "radio");
  }
  function _0x493a6f(_0x53659b) {
    if (!_0x53659b._valueTracker) {
      var _0x5127b1 = _0x2eabbc(_0x53659b) ? "checked" : "value";
      _0x53659b._valueTracker = function (_0x151b13, _0x29f7f4, _0x4edcd5) {
        var _0x2be4e6 = Object.getOwnPropertyDescriptor(_0x151b13.constructor.prototype, _0x29f7f4);
        if (!_0x151b13.hasOwnProperty(_0x29f7f4) && _0x2be4e6 !== undefined && typeof _0x2be4e6.get == "function" && typeof _0x2be4e6.set == "function") {
          var _0x2bc661 = _0x2be4e6.get;
          var _0x1aad74 = _0x2be4e6.set;
          Object.defineProperty(_0x151b13, _0x29f7f4, {
            configurable: true,
            get: function () {
              return _0x2bc661.call(this);
            },
            set: function (_0x319a5f) {
              _0x4edcd5 = "" + _0x319a5f;
              _0x1aad74.call(this, _0x319a5f);
            }
          });
          Object.defineProperty(_0x151b13, _0x29f7f4, {
            enumerable: _0x2be4e6.enumerable
          });
          return {
            getValue: function () {
              return _0x4edcd5;
            },
            setValue: function (_0xf25f06) {
              _0x4edcd5 = "" + _0xf25f06;
            },
            stopTracking: function () {
              _0x151b13._valueTracker = null;
              delete _0x151b13[_0x29f7f4];
            }
          };
        }
      }(_0x53659b, _0x5127b1, "" + _0x53659b[_0x5127b1]);
    }
  }
  function _0x53c217(_0x3c5540) {
    if (!_0x3c5540) {
      return false;
    }
    var _0x237298 = _0x3c5540._valueTracker;
    if (!_0x237298) {
      return true;
    }
    var _0x5eb184 = _0x237298.getValue();
    var _0x1c5674 = "";
    if (_0x3c5540) {
      _0x1c5674 = _0x2eabbc(_0x3c5540) ? _0x3c5540.checked ? "true" : "false" : _0x3c5540.value;
    }
    return (_0x3c5540 = _0x1c5674) !== _0x5eb184 && (_0x237298.setValue(_0x3c5540), true);
  }
  function _0x49c92c(_0x169ac9) {
    if ((_0x169ac9 = _0x169ac9 || (typeof document != "undefined" ? document : undefined)) === undefined) {
      return null;
    }
    try {
      return _0x169ac9.activeElement || _0x169ac9.body;
    } catch (_0x458692) {
      return _0x169ac9.body;
    }
  }
  var _0x1fc3c0 = /[\n"\\]/g;
  function _0x1dc39d(_0x252348) {
    return _0x252348.replace(_0x1fc3c0, function (_0x6f8b76) {
      return "\\" + _0x6f8b76.charCodeAt(0).toString(16) + " ";
    });
  }
  function _0x3482c9(_0x28db1f, _0x46dbb1, _0xbb623b, _0xc8d7c0, _0x2c0a01, _0x386b11, _0x40c5ea, _0x182d06) {
    _0x28db1f.name = "";
    if (_0x40c5ea != null && typeof _0x40c5ea != "function" && typeof _0x40c5ea != "symbol" && typeof _0x40c5ea != "boolean") {
      _0x28db1f.type = _0x40c5ea;
    } else {
      _0x28db1f.removeAttribute("type");
    }
    if (_0x46dbb1 != null) {
      if (_0x40c5ea === "number") {
        if (_0x46dbb1 === 0 && _0x28db1f.value === "" || _0x28db1f.value != _0x46dbb1) {
          _0x28db1f.value = "" + _0x5032e9(_0x46dbb1);
        }
      } else if (_0x28db1f.value !== "" + _0x5032e9(_0x46dbb1)) {
        _0x28db1f.value = "" + _0x5032e9(_0x46dbb1);
      }
    } else if (_0x40c5ea === "submit" || _0x40c5ea === "reset") {
      _0x28db1f.removeAttribute("value");
    }
    if (_0x46dbb1 != null) {
      _0x28aac4(_0x28db1f, _0x40c5ea, _0x5032e9(_0x46dbb1));
    } else if (_0xbb623b != null) {
      _0x28aac4(_0x28db1f, _0x40c5ea, _0x5032e9(_0xbb623b));
    } else if (_0xc8d7c0 != null) {
      _0x28db1f.removeAttribute("value");
    }
    if (_0x2c0a01 == null && _0x386b11 != null) {
      _0x28db1f.defaultChecked = !!_0x386b11;
    }
    if (_0x2c0a01 != null) {
      _0x28db1f.checked = _0x2c0a01 && typeof _0x2c0a01 != "function" && typeof _0x2c0a01 != "symbol";
    }
    if (_0x182d06 != null && typeof _0x182d06 != "function" && typeof _0x182d06 != "symbol" && typeof _0x182d06 != "boolean") {
      _0x28db1f.name = "" + _0x5032e9(_0x182d06);
    } else {
      _0x28db1f.removeAttribute("name");
    }
  }
  function _0x178d34(_0x41b6c9, _0x14d2e2, _0xdd3994, _0x3e19fc, _0x3ee719, _0x12a114, _0x393c41, _0xb26fbf) {
    if (_0x12a114 != null && typeof _0x12a114 != "function" && typeof _0x12a114 != "symbol" && typeof _0x12a114 != "boolean") {
      _0x41b6c9.type = _0x12a114;
    }
    if (_0x14d2e2 != null || _0xdd3994 != null) {
      if ((_0x12a114 === "submit" || _0x12a114 === "reset") && _0x14d2e2 == null) {
        _0x493a6f(_0x41b6c9);
        return;
      }
      _0xdd3994 = _0xdd3994 != null ? "" + _0x5032e9(_0xdd3994) : "";
      _0x14d2e2 = _0x14d2e2 != null ? "" + _0x5032e9(_0x14d2e2) : _0xdd3994;
      if (!_0xb26fbf && _0x14d2e2 !== _0x41b6c9.value) {
        _0x41b6c9.value = _0x14d2e2;
      }
      _0x41b6c9.defaultValue = _0x14d2e2;
    }
    _0x3e19fc = typeof (_0x3e19fc = _0x3e19fc ?? _0x3ee719) != "function" && typeof _0x3e19fc != "symbol" && !!_0x3e19fc;
    _0x41b6c9.checked = _0xb26fbf ? _0x41b6c9.checked : !!_0x3e19fc;
    _0x41b6c9.defaultChecked = !!_0x3e19fc;
    if (_0x393c41 != null && typeof _0x393c41 != "function" && typeof _0x393c41 != "symbol" && typeof _0x393c41 != "boolean") {
      _0x41b6c9.name = _0x393c41;
    }
    _0x493a6f(_0x41b6c9);
  }
  function _0x28aac4(_0x5cb7d3, _0x346293, _0x4e5078) {
    if ((_0x346293 !== "number" || _0x49c92c(_0x5cb7d3.ownerDocument) !== _0x5cb7d3) && _0x5cb7d3.defaultValue !== "" + _0x4e5078) {
      _0x5cb7d3.defaultValue = "" + _0x4e5078;
    }
  }
  function _0x23131d(_0x260071, _0x4eeb3c, _0x33f729, _0x1feaa6) {
    _0x260071 = _0x260071.options;
    if (_0x4eeb3c) {
      _0x4eeb3c = {};
      for (var _0x38d6e6 = 0; _0x38d6e6 < _0x33f729.length; _0x38d6e6++) {
        _0x4eeb3c["$" + _0x33f729[_0x38d6e6]] = true;
      }
      for (_0x33f729 = 0; _0x33f729 < _0x260071.length; _0x33f729++) {
        _0x38d6e6 = _0x4eeb3c.hasOwnProperty("$" + _0x260071[_0x33f729].value);
        if (_0x260071[_0x33f729].selected !== _0x38d6e6) {
          _0x260071[_0x33f729].selected = _0x38d6e6;
        }
        if (_0x38d6e6 && _0x1feaa6) {
          _0x260071[_0x33f729].defaultSelected = true;
        }
      }
    } else {
      _0x33f729 = "" + _0x5032e9(_0x33f729);
      _0x4eeb3c = null;
      _0x38d6e6 = 0;
      for (; _0x38d6e6 < _0x260071.length; _0x38d6e6++) {
        if (_0x260071[_0x38d6e6].value === _0x33f729) {
          _0x260071[_0x38d6e6].selected = true;
          if (_0x1feaa6) {
            _0x260071[_0x38d6e6].defaultSelected = true;
          }
          return;
        }
        if (_0x4eeb3c === null && !_0x260071[_0x38d6e6].disabled) {
          _0x4eeb3c = _0x260071[_0x38d6e6];
        }
      }
      if (_0x4eeb3c !== null) {
        _0x4eeb3c.selected = true;
      }
    }
  }
  function _0x1b3b5c(_0x5a0a68, _0x4d7da1, _0x54b27e) {
    if (_0x4d7da1 == null || ((_0x4d7da1 = "" + _0x5032e9(_0x4d7da1)) !== _0x5a0a68.value && (_0x5a0a68.value = _0x4d7da1), _0x54b27e != null)) {
      _0x5a0a68.defaultValue = _0x54b27e != null ? "" + _0x5032e9(_0x54b27e) : "";
    } else if (_0x5a0a68.defaultValue !== _0x4d7da1) {
      _0x5a0a68.defaultValue = _0x4d7da1;
    }
  }
  function _0x4b72cd(_0x15669f, _0x37b9ad, _0x90c8ea, _0x4abf83) {
    if (_0x37b9ad == null) {
      if (_0x4abf83 != null) {
        if (_0x90c8ea != null) {
          throw Error(_0x34c7b9(92));
        }
        if (_0x284410(_0x4abf83)) {
          if (_0x4abf83.length > 1) {
            throw Error(_0x34c7b9(93));
          }
          _0x4abf83 = _0x4abf83[0];
        }
        _0x90c8ea = _0x4abf83;
      }
      _0x90c8ea ??= "";
      _0x37b9ad = _0x90c8ea;
    }
    _0x90c8ea = _0x5032e9(_0x37b9ad);
    _0x15669f.defaultValue = _0x90c8ea;
    if ((_0x4abf83 = _0x15669f.textContent) === _0x90c8ea && _0x4abf83 !== "" && _0x4abf83 !== null) {
      _0x15669f.value = _0x4abf83;
    }
    _0x493a6f(_0x15669f);
  }
  function _0x3d4455(_0x2743fe, _0x543d00) {
    if (_0x543d00) {
      var _0x171844 = _0x2743fe.firstChild;
      if (_0x171844 && _0x171844 === _0x2743fe.lastChild && _0x171844.nodeType === 3) {
        _0x171844.nodeValue = _0x543d00;
        return;
      }
    }
    _0x2743fe.textContent = _0x543d00;
  }
  var _0x2a0e3e = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function _0x45401c(_0x6fc993, _0x5b464d, _0x5cceb5) {
    var _0x210f45 = _0x5b464d.indexOf("--") === 0;
    if (_0x5cceb5 == null || typeof _0x5cceb5 == "boolean" || _0x5cceb5 === "") {
      if (_0x210f45) {
        _0x6fc993.setProperty(_0x5b464d, "");
      } else if (_0x5b464d === "float") {
        _0x6fc993.cssFloat = "";
      } else {
        _0x6fc993[_0x5b464d] = "";
      }
    } else if (_0x210f45) {
      _0x6fc993.setProperty(_0x5b464d, _0x5cceb5);
    } else if (typeof _0x5cceb5 != "number" || _0x5cceb5 === 0 || _0x2a0e3e.has(_0x5b464d)) {
      if (_0x5b464d === "float") {
        _0x6fc993.cssFloat = _0x5cceb5;
      } else {
        _0x6fc993[_0x5b464d] = ("" + _0x5cceb5).trim();
      }
    } else {
      _0x6fc993[_0x5b464d] = _0x5cceb5 + "px";
    }
  }
  function _0x5c24d8(_0x1043c5, _0x295cd6, _0x473185) {
    if (_0x295cd6 != null && typeof _0x295cd6 != "object") {
      throw Error(_0x34c7b9(62));
    }
    _0x1043c5 = _0x1043c5.style;
    if (_0x473185 != null) {
      for (var _0xb39ec7 in _0x473185) {
        if (!!_0x473185.hasOwnProperty(_0xb39ec7) && (_0x295cd6 == null || !_0x295cd6.hasOwnProperty(_0xb39ec7))) {
          if (_0xb39ec7.indexOf("--") === 0) {
            _0x1043c5.setProperty(_0xb39ec7, "");
          } else if (_0xb39ec7 === "float") {
            _0x1043c5.cssFloat = "";
          } else {
            _0x1043c5[_0xb39ec7] = "";
          }
        }
      }
      for (var _0x10b91e in _0x295cd6) {
        _0xb39ec7 = _0x295cd6[_0x10b91e];
        if (_0x295cd6.hasOwnProperty(_0x10b91e) && _0x473185[_0x10b91e] !== _0xb39ec7) {
          _0x45401c(_0x1043c5, _0x10b91e, _0xb39ec7);
        }
      }
    } else {
      for (var _0x35090a in _0x295cd6) {
        if (_0x295cd6.hasOwnProperty(_0x35090a)) {
          _0x45401c(_0x1043c5, _0x35090a, _0x295cd6[_0x35090a]);
        }
      }
    }
  }
  function _0x14a2f4(_0x4d898d) {
    if (_0x4d898d.indexOf("-") === -1) {
      return false;
    }
    switch (_0x4d898d) {
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
  var _0x4f8474 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]);
  var _0xd051fa = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _0x407b66(_0x28d2b5) {
    if (_0xd051fa.test("" + _0x28d2b5)) {
      return "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')";
    } else {
      return _0x28d2b5;
    }
  }
  function _0x3de216() {}
  var _0x3e3fd1 = null;
  function _0x4b1198(_0x158bd4) {
    if ((_0x158bd4 = _0x158bd4.target || _0x158bd4.srcElement || window).correspondingUseElement) {
      _0x158bd4 = _0x158bd4.correspondingUseElement;
    }
    if (_0x158bd4.nodeType === 3) {
      return _0x158bd4.parentNode;
    } else {
      return _0x158bd4;
    }
  }
  var _0x45cd73 = null;
  var _0x3b929f = null;
  function _0x29bb2d(_0x15b84c) {
    var _0x54e4c9 = _0x29babc(_0x15b84c);
    if (_0x54e4c9 && (_0x15b84c = _0x54e4c9.stateNode)) {
      var _0x26376a = _0x15b84c[_0x21a328] || null;
      _0x15b84c = _0x54e4c9.stateNode;
      _0x535045: switch (_0x54e4c9.type) {
        case "input":
          _0x3482c9(_0x15b84c, _0x26376a.value, _0x26376a.defaultValue, _0x26376a.defaultValue, _0x26376a.checked, _0x26376a.defaultChecked, _0x26376a.type, _0x26376a.name);
          _0x54e4c9 = _0x26376a.name;
          if (_0x26376a.type === "radio" && _0x54e4c9 != null) {
            for (_0x26376a = _0x15b84c; _0x26376a.parentNode;) {
              _0x26376a = _0x26376a.parentNode;
            }
            _0x26376a = _0x26376a.querySelectorAll("input[name=\"" + _0x1dc39d("" + _0x54e4c9) + "\"][type=\"radio\"]");
            _0x54e4c9 = 0;
            for (; _0x54e4c9 < _0x26376a.length; _0x54e4c9++) {
              var _0x163bde = _0x26376a[_0x54e4c9];
              if (_0x163bde !== _0x15b84c && _0x163bde.form === _0x15b84c.form) {
                var _0x40b435 = _0x163bde[_0x21a328] || null;
                if (!_0x40b435) {
                  throw Error(_0x34c7b9(90));
                }
                _0x3482c9(_0x163bde, _0x40b435.value, _0x40b435.defaultValue, _0x40b435.defaultValue, _0x40b435.checked, _0x40b435.defaultChecked, _0x40b435.type, _0x40b435.name);
              }
            }
            for (_0x54e4c9 = 0; _0x54e4c9 < _0x26376a.length; _0x54e4c9++) {
              if ((_0x163bde = _0x26376a[_0x54e4c9]).form === _0x15b84c.form) {
                _0x53c217(_0x163bde);
              }
            }
          }
          break _0x535045;
        case "textarea":
          _0x1b3b5c(_0x15b84c, _0x26376a.value, _0x26376a.defaultValue);
          break _0x535045;
        case "select":
          if ((_0x54e4c9 = _0x26376a.value) != null) {
            _0x23131d(_0x15b84c, !!_0x26376a.multiple, _0x54e4c9, false);
          }
      }
    }
  }
  var _0x55d60a = false;
  function _0xc1dba(_0x48d0a7, _0x142306, _0x5cc6b7) {
    if (_0x55d60a) {
      return _0x48d0a7(_0x142306, _0x5cc6b7);
    }
    _0x55d60a = true;
    try {
      return _0x48d0a7(_0x142306);
    } finally {
      _0x55d60a = false;
      if ((_0x45cd73 !== null || _0x3b929f !== null) && (_0x175c4b(), _0x45cd73 && (_0x142306 = _0x45cd73, _0x48d0a7 = _0x3b929f, _0x3b929f = _0x45cd73 = null, _0x29bb2d(_0x142306), _0x48d0a7))) {
        for (_0x142306 = 0; _0x142306 < _0x48d0a7.length; _0x142306++) {
          _0x29bb2d(_0x48d0a7[_0x142306]);
        }
      }
    }
  }
  function _0x5c4460(_0x4e7118, _0x3aefa6) {
    var _0x40ad6f = _0x4e7118.stateNode;
    if (_0x40ad6f === null) {
      return null;
    }
    var _0x4b2222 = _0x40ad6f[_0x21a328] || null;
    if (_0x4b2222 === null) {
      return null;
    }
    _0x40ad6f = _0x4b2222[_0x3aefa6];
    _0x52b4b5: switch (_0x3aefa6) {
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
        if (!(_0x4b2222 = !_0x4b2222.disabled)) {
          _0x4b2222 = (_0x4e7118 = _0x4e7118.type) !== "button" && _0x4e7118 !== "input" && _0x4e7118 !== "select" && _0x4e7118 !== "textarea";
        }
        _0x4e7118 = !_0x4b2222;
        break _0x52b4b5;
      default:
        _0x4e7118 = false;
    }
    if (_0x4e7118) {
      return null;
    }
    if (_0x40ad6f && typeof _0x40ad6f != "function") {
      throw Error(_0x34c7b9(231, _0x3aefa6, typeof _0x40ad6f));
    }
    return _0x40ad6f;
  }
  var _0x2651e0 = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  var _0x3dfabe = false;
  if (_0x2651e0) {
    try {
      var _0x1ad21e = {};
      Object.defineProperty(_0x1ad21e, "passive", {
        get: function () {
          _0x3dfabe = true;
        }
      });
      window.addEventListener("test", _0x1ad21e, _0x1ad21e);
      window.removeEventListener("test", _0x1ad21e, _0x1ad21e);
    } catch (_0xb7d084) {
      _0x3dfabe = false;
    }
  }
  var _0x4564aa = null;
  var _0x1d94f8 = null;
  var _0x47c86c = null;
  function _0x2c7eb2() {
    if (_0x47c86c) {
      return _0x47c86c;
    }
    var _0x21806b;
    var _0x44607f;
    var _0x6fbd2f = _0x1d94f8;
    var _0x19ff04 = _0x6fbd2f.length;
    var _0x50538d = "value" in _0x4564aa ? _0x4564aa.value : _0x4564aa.textContent;
    var _0x154bbe = _0x50538d.length;
    for (_0x21806b = 0; _0x21806b < _0x19ff04 && _0x6fbd2f[_0x21806b] === _0x50538d[_0x21806b]; _0x21806b++);
    var _0x897002 = _0x19ff04 - _0x21806b;
    for (_0x44607f = 1; _0x44607f <= _0x897002 && _0x6fbd2f[_0x19ff04 - _0x44607f] === _0x50538d[_0x154bbe - _0x44607f]; _0x44607f++);
    return _0x47c86c = _0x50538d.slice(_0x21806b, _0x44607f > 1 ? 1 - _0x44607f : undefined);
  }
  function _0x163a78(_0x508284) {
    var _0x204364 = _0x508284.keyCode;
    if ("charCode" in _0x508284) {
      if ((_0x508284 = _0x508284.charCode) === 0 && _0x204364 === 13) {
        _0x508284 = 13;
      }
    } else {
      _0x508284 = _0x204364;
    }
    if (_0x508284 === 10) {
      _0x508284 = 13;
    }
    if (_0x508284 >= 32 || _0x508284 === 13) {
      return _0x508284;
    } else {
      return 0;
    }
  }
  function _0x5022db() {
    return true;
  }
  function _0x1c4311() {
    return false;
  }
  function _0x10e95a(_0x4768cc) {
    function _0x2af35c(_0x41a36c, _0x1c6e78, _0x49d5c0, _0xe45d5a, _0x2f1f5c) {
      this._reactName = _0x41a36c;
      this._targetInst = _0x49d5c0;
      this.type = _0x1c6e78;
      this.nativeEvent = _0xe45d5a;
      this.target = _0x2f1f5c;
      this.currentTarget = null;
      for (var _0x27ad3b in _0x4768cc) {
        if (_0x4768cc.hasOwnProperty(_0x27ad3b)) {
          _0x41a36c = _0x4768cc[_0x27ad3b];
          this[_0x27ad3b] = _0x41a36c ? _0x41a36c(_0xe45d5a) : _0xe45d5a[_0x27ad3b];
        }
      }
      this.isDefaultPrevented = _0xe45d5a.defaultPrevented ?? _0xe45d5a.returnValue === false ? _0x5022db : _0x1c4311;
      this.isPropagationStopped = _0x1c4311;
      return this;
    }
    _0x15c004(_0x2af35c.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var _0x5e4252 = this.nativeEvent;
        if (_0x5e4252) {
          if (_0x5e4252.preventDefault) {
            _0x5e4252.preventDefault();
          } else if (typeof _0x5e4252.returnValue != "unknown") {
            _0x5e4252.returnValue = false;
          }
          this.isDefaultPrevented = _0x5022db;
        }
      },
      stopPropagation: function () {
        var _0x3a4b40 = this.nativeEvent;
        if (_0x3a4b40) {
          if (_0x3a4b40.stopPropagation) {
            _0x3a4b40.stopPropagation();
          } else if (typeof _0x3a4b40.cancelBubble != "unknown") {
            _0x3a4b40.cancelBubble = true;
          }
          this.isPropagationStopped = _0x5022db;
        }
      },
      persist: function () {},
      isPersistent: _0x5022db
    });
    return _0x2af35c;
  }
  var _0x48e7a8;
  var _0x118bfd;
  var _0x7347df;
  var _0x7cbcad = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (_0x357fd7) {
      return _0x357fd7.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var _0x26f986 = _0x10e95a(_0x7cbcad);
  var _0xaf54d5 = _0x15c004({}, _0x7cbcad, {
    view: 0,
    detail: 0
  });
  var _0x503202 = _0x10e95a(_0xaf54d5);
  var _0x59640a = _0x15c004({}, _0xaf54d5, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _0x3742d6,
    button: 0,
    buttons: 0,
    relatedTarget: function (_0x527486) {
      if (_0x527486.relatedTarget === undefined) {
        if (_0x527486.fromElement === _0x527486.srcElement) {
          return _0x527486.toElement;
        } else {
          return _0x527486.fromElement;
        }
      } else {
        return _0x527486.relatedTarget;
      }
    },
    movementX: function (_0x23a53e) {
      if ("movementX" in _0x23a53e) {
        return _0x23a53e.movementX;
      } else {
        if (_0x23a53e !== _0x7347df) {
          if (_0x7347df && _0x23a53e.type === "mousemove") {
            _0x48e7a8 = _0x23a53e.screenX - _0x7347df.screenX;
            _0x118bfd = _0x23a53e.screenY - _0x7347df.screenY;
          } else {
            _0x118bfd = _0x48e7a8 = 0;
          }
          _0x7347df = _0x23a53e;
        }
        return _0x48e7a8;
      }
    },
    movementY: function (_0x4c93f0) {
      if ("movementY" in _0x4c93f0) {
        return _0x4c93f0.movementY;
      } else {
        return _0x118bfd;
      }
    }
  });
  var _0x45a698 = _0x10e95a(_0x59640a);
  var _0x484475 = _0x10e95a(_0x15c004({}, _0x59640a, {
    dataTransfer: 0
  }));
  var _0x1e5764 = _0x10e95a(_0x15c004({}, _0xaf54d5, {
    relatedTarget: 0
  }));
  var _0x3ccef9 = _0x10e95a(_0x15c004({}, _0x7cbcad, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var _0x2604c2 = _0x10e95a(_0x15c004({}, _0x7cbcad, {
    clipboardData: function (_0x566bcb) {
      if ("clipboardData" in _0x566bcb) {
        return _0x566bcb.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  }));
  var _0x3a61d0 = _0x10e95a(_0x15c004({}, _0x7cbcad, {
    data: 0
  }));
  var _0x457515 = {
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
  };
  var _0xd250c4 = {
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
  };
  var _0x14ad96 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function _0x5c5298(_0x2b4aaa) {
    var _0x54f611 = this.nativeEvent;
    if (_0x54f611.getModifierState) {
      return _0x54f611.getModifierState(_0x2b4aaa);
    } else {
      return !!(_0x2b4aaa = _0x14ad96[_0x2b4aaa]) && !!_0x54f611[_0x2b4aaa];
    }
  }
  function _0x3742d6() {
    return _0x5c5298;
  }
  var _0x3277b4 = _0x10e95a(_0x15c004({}, _0xaf54d5, {
    key: function (_0xcf4343) {
      if (_0xcf4343.key) {
        var _0x537752 = _0x457515[_0xcf4343.key] || _0xcf4343.key;
        if (_0x537752 !== "Unidentified") {
          return _0x537752;
        }
      }
      if (_0xcf4343.type === "keypress") {
        if ((_0xcf4343 = _0x163a78(_0xcf4343)) === 13) {
          return "Enter";
        } else {
          return String.fromCharCode(_0xcf4343);
        }
      } else if (_0xcf4343.type === "keydown" || _0xcf4343.type === "keyup") {
        return _0xd250c4[_0xcf4343.keyCode] || "Unidentified";
      } else {
        return "";
      }
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _0x3742d6,
    charCode: function (_0x2b8213) {
      if (_0x2b8213.type === "keypress") {
        return _0x163a78(_0x2b8213);
      } else {
        return 0;
      }
    },
    keyCode: function (_0x2f7ce5) {
      if (_0x2f7ce5.type === "keydown" || _0x2f7ce5.type === "keyup") {
        return _0x2f7ce5.keyCode;
      } else {
        return 0;
      }
    },
    which: function (_0x4d99bf) {
      if (_0x4d99bf.type === "keypress") {
        return _0x163a78(_0x4d99bf);
      } else if (_0x4d99bf.type === "keydown" || _0x4d99bf.type === "keyup") {
        return _0x4d99bf.keyCode;
      } else {
        return 0;
      }
    }
  }));
  var _0xed8e44 = _0x10e95a(_0x15c004({}, _0x59640a, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }));
  var _0x29bfdf = _0x10e95a(_0x15c004({}, _0xaf54d5, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _0x3742d6
  }));
  var _0x4b7785 = _0x10e95a(_0x15c004({}, _0x7cbcad, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var _0x2f8c94 = _0x10e95a(_0x15c004({}, _0x59640a, {
    deltaX: function (_0x4aa2ef) {
      if ("deltaX" in _0x4aa2ef) {
        return _0x4aa2ef.deltaX;
      } else if ("wheelDeltaX" in _0x4aa2ef) {
        return -_0x4aa2ef.wheelDeltaX;
      } else {
        return 0;
      }
    },
    deltaY: function (_0x556aaf) {
      if ("deltaY" in _0x556aaf) {
        return _0x556aaf.deltaY;
      } else if ("wheelDeltaY" in _0x556aaf) {
        return -_0x556aaf.wheelDeltaY;
      } else if ("wheelDelta" in _0x556aaf) {
        return -_0x556aaf.wheelDelta;
      } else {
        return 0;
      }
    },
    deltaZ: 0,
    deltaMode: 0
  }));
  var _0x2f6699 = _0x10e95a(_0x15c004({}, _0x7cbcad, {
    newState: 0,
    oldState: 0
  }));
  var _0x441eee = [9, 13, 27, 32];
  var _0x5ebec2 = _0x2651e0 && "CompositionEvent" in window;
  var _0x5ba91e = null;
  if (_0x2651e0 && "documentMode" in document) {
    _0x5ba91e = document.documentMode;
  }
  var _0x5efd5f = _0x2651e0 && "TextEvent" in window && !_0x5ba91e;
  var _0x4245c8 = _0x2651e0 && (!_0x5ebec2 || _0x5ba91e && _0x5ba91e > 8 && _0x5ba91e <= 11);
  var _0x3f8a51 = String.fromCharCode(32);
  var _0x17e12c = false;
  function _0x25c093(_0x10913a, _0x4caf6b) {
    switch (_0x10913a) {
      case "keyup":
        return _0x441eee.indexOf(_0x4caf6b.keyCode) !== -1;
      case "keydown":
        return _0x4caf6b.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return true;
      default:
        return false;
    }
  }
  function _0x5c6ea5(_0x19cf04) {
    if (typeof (_0x19cf04 = _0x19cf04.detail) == "object" && "data" in _0x19cf04) {
      return _0x19cf04.data;
    } else {
      return null;
    }
  }
  var _0x57a75f = false;
  var _0x77b493 = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function _0xdeafc(_0x1509a5) {
    var _0x6be301 = _0x1509a5 && _0x1509a5.nodeName && _0x1509a5.nodeName.toLowerCase();
    if (_0x6be301 === "input") {
      return !!_0x77b493[_0x1509a5.type];
    } else {
      return _0x6be301 === "textarea";
    }
  }
  function _0x1c4167(_0x1508c9, _0x2921e5, _0x17093c, _0x551361) {
    if (_0x45cd73) {
      if (_0x3b929f) {
        _0x3b929f.push(_0x551361);
      } else {
        _0x3b929f = [_0x551361];
      }
    } else {
      _0x45cd73 = _0x551361;
    }
    if ((_0x2921e5 = _0x24890d(_0x2921e5, "onChange")).length > 0) {
      _0x17093c = new _0x26f986("onChange", "change", null, _0x17093c, _0x551361);
      _0x1508c9.push({
        event: _0x17093c,
        listeners: _0x2921e5
      });
    }
  }
  var _0xc8654c = null;
  var _0x105465 = null;
  function _0x13b13e(_0x17ce54) {
    _0x436724(_0x17ce54, 0);
  }
  function _0x344b44(_0x199e2e) {
    if (_0x53c217(_0x4d1e18(_0x199e2e))) {
      return _0x199e2e;
    }
  }
  function _0x5f4bce(_0x2197d9, _0x235446) {
    if (_0x2197d9 === "change") {
      return _0x235446;
    }
  }
  var _0x2471ea = false;
  if (_0x2651e0) {
    var _0x3849ed;
    if (_0x2651e0) {
      var _0x2a8306 = "oninput" in document;
      if (!_0x2a8306) {
        var _0x1aeea0 = document.createElement("div");
        _0x1aeea0.setAttribute("oninput", "return;");
        _0x2a8306 = typeof _0x1aeea0.oninput == "function";
      }
      _0x3849ed = _0x2a8306;
    } else {
      _0x3849ed = false;
    }
    _0x2471ea = _0x3849ed && (!document.documentMode || document.documentMode > 9);
  }
  function _0x146a2c() {
    if (_0xc8654c) {
      _0xc8654c.detachEvent("onpropertychange", _0x344733);
      _0x105465 = _0xc8654c = null;
    }
  }
  function _0x344733(_0x1cb0a8) {
    if (_0x1cb0a8.propertyName === "value" && _0x344b44(_0x105465)) {
      var _0x4f9039 = [];
      _0x1c4167(_0x4f9039, _0x105465, _0x1cb0a8, _0x4b1198(_0x1cb0a8));
      _0xc1dba(_0x13b13e, _0x4f9039);
    }
  }
  function _0x71a5e1(_0x27f06e, _0xd2bb48, _0x288b47) {
    if (_0x27f06e === "focusin") {
      _0x146a2c();
      _0x105465 = _0x288b47;
      (_0xc8654c = _0xd2bb48).attachEvent("onpropertychange", _0x344733);
    } else if (_0x27f06e === "focusout") {
      _0x146a2c();
    }
  }
  function _0x3e4212(_0x584395) {
    if (_0x584395 === "selectionchange" || _0x584395 === "keyup" || _0x584395 === "keydown") {
      return _0x344b44(_0x105465);
    }
  }
  function _0x300d8f(_0x2d6347, _0x4ed07d) {
    if (_0x2d6347 === "click") {
      return _0x344b44(_0x4ed07d);
    }
  }
  function _0x28f647(_0x523303, _0x5bd5ef) {
    if (_0x523303 === "input" || _0x523303 === "change") {
      return _0x344b44(_0x5bd5ef);
    }
  }
  var _0x1e5abc = typeof Object.is == "function" ? Object.is : function (_0x2ebd23, _0x5643a5) {
    return _0x2ebd23 === _0x5643a5 && (_0x2ebd23 !== 0 || 1 / _0x2ebd23 == 1 / _0x5643a5) || _0x2ebd23 != _0x2ebd23 && _0x5643a5 != _0x5643a5;
  };
  function _0x24fdda(_0x4069f4, _0xc97994) {
    if (_0x1e5abc(_0x4069f4, _0xc97994)) {
      return true;
    }
    if (typeof _0x4069f4 != "object" || _0x4069f4 === null || typeof _0xc97994 != "object" || _0xc97994 === null) {
      return false;
    }
    var _0x26634b = Object.keys(_0x4069f4);
    var _0x196c92 = Object.keys(_0xc97994);
    if (_0x26634b.length !== _0x196c92.length) {
      return false;
    }
    for (_0x196c92 = 0; _0x196c92 < _0x26634b.length; _0x196c92++) {
      var _0x1aadbb = _0x26634b[_0x196c92];
      if (!_0x2d065a.call(_0xc97994, _0x1aadbb) || !_0x1e5abc(_0x4069f4[_0x1aadbb], _0xc97994[_0x1aadbb])) {
        return false;
      }
    }
    return true;
  }
  function _0x5a713f(_0xb9dadc) {
    while (_0xb9dadc && _0xb9dadc.firstChild) {
      _0xb9dadc = _0xb9dadc.firstChild;
    }
    return _0xb9dadc;
  }
  function _0x5e0943(_0xab279a, _0xb26466) {
    var _0x3606e1;
    var _0x5bf87b = _0x5a713f(_0xab279a);
    for (_0xab279a = 0; _0x5bf87b;) {
      if (_0x5bf87b.nodeType === 3) {
        _0x3606e1 = _0xab279a + _0x5bf87b.textContent.length;
        if (_0xab279a <= _0xb26466 && _0x3606e1 >= _0xb26466) {
          return {
            node: _0x5bf87b,
            offset: _0xb26466 - _0xab279a
          };
        }
        _0xab279a = _0x3606e1;
      }
      _0x39e938: {
        while (_0x5bf87b) {
          if (_0x5bf87b.nextSibling) {
            _0x5bf87b = _0x5bf87b.nextSibling;
            break _0x39e938;
          }
          _0x5bf87b = _0x5bf87b.parentNode;
        }
        _0x5bf87b = undefined;
      }
      _0x5bf87b = _0x5a713f(_0x5bf87b);
    }
  }
  function _0x514bbd(_0x4affc5, _0x585743) {
    return !!_0x4affc5 && !!_0x585743 && (_0x4affc5 === _0x585743 || (!_0x4affc5 || _0x4affc5.nodeType !== 3) && (_0x585743 && _0x585743.nodeType === 3 ? _0x514bbd(_0x4affc5, _0x585743.parentNode) : "contains" in _0x4affc5 ? _0x4affc5.contains(_0x585743) : !!_0x4affc5.compareDocumentPosition && !!(_0x4affc5.compareDocumentPosition(_0x585743) & 16)));
  }
  function _0x16424a(_0x2770f9) {
    for (var _0x7d1278 = _0x49c92c((_0x2770f9 = _0x2770f9 != null && _0x2770f9.ownerDocument != null && _0x2770f9.ownerDocument.defaultView != null ? _0x2770f9.ownerDocument.defaultView : window).document); _0x7d1278 instanceof _0x2770f9.HTMLIFrameElement;) {
      try {
        var _0x5eccb5 = typeof _0x7d1278.contentWindow.location.href == "string";
      } catch (_0x3fd6f7) {
        _0x5eccb5 = false;
      }
      if (!_0x5eccb5) {
        break;
      }
      _0x7d1278 = _0x49c92c((_0x2770f9 = _0x7d1278.contentWindow).document);
    }
    return _0x7d1278;
  }
  function _0xf0d8dd(_0x278346) {
    var _0x3f518c = _0x278346 && _0x278346.nodeName && _0x278346.nodeName.toLowerCase();
    return _0x3f518c && (_0x3f518c === "input" && (_0x278346.type === "text" || _0x278346.type === "search" || _0x278346.type === "tel" || _0x278346.type === "url" || _0x278346.type === "password") || _0x3f518c === "textarea" || _0x278346.contentEditable === "true");
  }
  var _0xb2d597 = _0x2651e0 && "documentMode" in document && document.documentMode <= 11;
  var _0x186273 = null;
  var _0x3b8f76 = null;
  var _0x5ccd38 = null;
  var _0x2f3bb1 = false;
  function _0x1b759e(_0x59159a, _0x55410e, _0x159dda) {
    var _0x3981df = _0x159dda.window === _0x159dda ? _0x159dda.document : _0x159dda.nodeType === 9 ? _0x159dda : _0x159dda.ownerDocument;
    if (!_0x2f3bb1 && _0x186273 != null && _0x186273 === _0x49c92c(_0x3981df)) {
      _0x3981df = "selectionStart" in (_0x3981df = _0x186273) && _0xf0d8dd(_0x3981df) ? {
        start: _0x3981df.selectionStart,
        end: _0x3981df.selectionEnd
      } : {
        anchorNode: (_0x3981df = (_0x3981df.ownerDocument && _0x3981df.ownerDocument.defaultView || window).getSelection()).anchorNode,
        anchorOffset: _0x3981df.anchorOffset,
        focusNode: _0x3981df.focusNode,
        focusOffset: _0x3981df.focusOffset
      };
      if (!_0x5ccd38 || !_0x24fdda(_0x5ccd38, _0x3981df)) {
        _0x5ccd38 = _0x3981df;
        if ((_0x3981df = _0x24890d(_0x3b8f76, "onSelect")).length > 0) {
          _0x55410e = new _0x26f986("onSelect", "select", null, _0x55410e, _0x159dda);
          _0x59159a.push({
            event: _0x55410e,
            listeners: _0x3981df
          });
          _0x55410e.target = _0x186273;
        }
      }
    }
  }
  function _0x546d20(_0x190d6e, _0x423db5) {
    var _0x468683 = {};
    _0x468683[_0x190d6e.toLowerCase()] = _0x423db5.toLowerCase();
    _0x468683["Webkit" + _0x190d6e] = "webkit" + _0x423db5;
    _0x468683["Moz" + _0x190d6e] = "moz" + _0x423db5;
    return _0x468683;
  }
  var _0x1d5d51 = {
    animationend: _0x546d20("Animation", "AnimationEnd"),
    animationiteration: _0x546d20("Animation", "AnimationIteration"),
    animationstart: _0x546d20("Animation", "AnimationStart"),
    transitionrun: _0x546d20("Transition", "TransitionRun"),
    transitionstart: _0x546d20("Transition", "TransitionStart"),
    transitioncancel: _0x546d20("Transition", "TransitionCancel"),
    transitionend: _0x546d20("Transition", "TransitionEnd")
  };
  var _0xbb8224 = {};
  var _0x226bb3 = {};
  function _0x574d57(_0x3380c6) {
    if (_0xbb8224[_0x3380c6]) {
      return _0xbb8224[_0x3380c6];
    }
    if (!_0x1d5d51[_0x3380c6]) {
      return _0x3380c6;
    }
    var _0xba793d;
    var _0x1e4caa = _0x1d5d51[_0x3380c6];
    for (_0xba793d in _0x1e4caa) {
      if (_0x1e4caa.hasOwnProperty(_0xba793d) && _0xba793d in _0x226bb3) {
        return _0xbb8224[_0x3380c6] = _0x1e4caa[_0xba793d];
      }
    }
    return _0x3380c6;
  }
  if (_0x2651e0) {
    _0x226bb3 = document.createElement("div").style;
    if (!("AnimationEvent" in window)) {
      delete _0x1d5d51.animationend.animation;
      delete _0x1d5d51.animationiteration.animation;
      delete _0x1d5d51.animationstart.animation;
    }
    if (!("TransitionEvent" in window)) {
      delete _0x1d5d51.transitionend.transition;
    }
  }
  var _0x3a7eb3 = _0x574d57("animationend");
  var _0x5a16fe = _0x574d57("animationiteration");
  var _0x54a549 = _0x574d57("animationstart");
  var _0x107d8c = _0x574d57("transitionrun");
  var _0x5ddd5b = _0x574d57("transitionstart");
  var _0x19265f = _0x574d57("transitioncancel");
  var _0x1f1029 = _0x574d57("transitionend");
  var _0x424a7f = new Map();
  var _0x2edf34 = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _0x58df92(_0x43dd27, _0x3fb883) {
    _0x424a7f.set(_0x43dd27, _0x3fb883);
    _0x32e630(_0x3fb883, [_0x43dd27]);
  }
  _0x2edf34.push("scrollEnd");
  var _0x282638 = typeof reportError == "function" ? reportError : function (_0x1eb25b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _0xf3d24d = new window.ErrorEvent("error", {
        bubbles: true,
        cancelable: true,
        message: typeof _0x1eb25b == "object" && _0x1eb25b !== null && typeof _0x1eb25b.message == "string" ? String(_0x1eb25b.message) : String(_0x1eb25b),
        error: _0x1eb25b
      });
      if (!window.dispatchEvent(_0xf3d24d)) {
        return;
      }
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", _0x1eb25b);
      return;
    }
    console.error(_0x1eb25b);
  };
  var _0x5a6b06 = [];
  var _0x1ef048 = 0;
  var _0x33f387 = 0;
  function _0x130c69() {
    for (var _0x2a23ca = _0x1ef048, _0x3a0533 = _0x33f387 = _0x1ef048 = 0; _0x3a0533 < _0x2a23ca;) {
      var _0x4b8ebe = _0x5a6b06[_0x3a0533];
      _0x5a6b06[_0x3a0533++] = null;
      var _0x3e836d = _0x5a6b06[_0x3a0533];
      _0x5a6b06[_0x3a0533++] = null;
      var _0x3decb2 = _0x5a6b06[_0x3a0533];
      _0x5a6b06[_0x3a0533++] = null;
      var _0x58831e = _0x5a6b06[_0x3a0533];
      _0x5a6b06[_0x3a0533++] = null;
      if (_0x3e836d !== null && _0x3decb2 !== null) {
        var _0x1e34b6 = _0x3e836d.pending;
        if (_0x1e34b6 === null) {
          _0x3decb2.next = _0x3decb2;
        } else {
          _0x3decb2.next = _0x1e34b6.next;
          _0x1e34b6.next = _0x3decb2;
        }
        _0x3e836d.pending = _0x3decb2;
      }
      if (_0x58831e !== 0) {
        _0x5414b3(_0x4b8ebe, _0x3decb2, _0x58831e);
      }
    }
  }
  function _0x5db47d(_0x51a992, _0xd73a53, _0x450f8a, _0x138bf7) {
    _0x5a6b06[_0x1ef048++] = _0x51a992;
    _0x5a6b06[_0x1ef048++] = _0xd73a53;
    _0x5a6b06[_0x1ef048++] = _0x450f8a;
    _0x5a6b06[_0x1ef048++] = _0x138bf7;
    _0x33f387 |= _0x138bf7;
    _0x51a992.lanes |= _0x138bf7;
    if ((_0x51a992 = _0x51a992.alternate) !== null) {
      _0x51a992.lanes |= _0x138bf7;
    }
  }
  function _0x19d9fd(_0x12fe32, _0x1cc53a, _0x4070de, _0x423d4b) {
    _0x5db47d(_0x12fe32, _0x1cc53a, _0x4070de, _0x423d4b);
    return _0x102d93(_0x12fe32);
  }
  function _0x2b6f8b(_0x475840, _0x46f07c) {
    _0x5db47d(_0x475840, null, null, _0x46f07c);
    return _0x102d93(_0x475840);
  }
  function _0x5414b3(_0xcaa05a, _0x178fbb, _0x2c02d1) {
    _0xcaa05a.lanes |= _0x2c02d1;
    var _0x47f780 = _0xcaa05a.alternate;
    if (_0x47f780 !== null) {
      _0x47f780.lanes |= _0x2c02d1;
    }
    var _0x5e7861 = false;
    for (var _0x45f746 = _0xcaa05a.return; _0x45f746 !== null;) {
      _0x45f746.childLanes |= _0x2c02d1;
      if ((_0x47f780 = _0x45f746.alternate) !== null) {
        _0x47f780.childLanes |= _0x2c02d1;
      }
      if (_0x45f746.tag === 22) {
        if ((_0xcaa05a = _0x45f746.stateNode) !== null && !(_0xcaa05a._visibility & 1)) {
          _0x5e7861 = true;
        }
      }
      _0xcaa05a = _0x45f746;
      _0x45f746 = _0x45f746.return;
    }
    if (_0xcaa05a.tag === 3) {
      _0x45f746 = _0xcaa05a.stateNode;
      if (_0x5e7861 && _0x178fbb !== null) {
        _0x5e7861 = 31 - _0x4f44c7(_0x2c02d1);
        if ((_0x47f780 = (_0xcaa05a = _0x45f746.hiddenUpdates)[_0x5e7861]) === null) {
          _0xcaa05a[_0x5e7861] = [_0x178fbb];
        } else {
          _0x47f780.push(_0x178fbb);
        }
        _0x178fbb.lane = _0x2c02d1 | 536870912;
      }
      return _0x45f746;
    } else {
      return null;
    }
  }
  function _0x102d93(_0x3141d1) {
    if (_0x201250 > 50) {
      _0x201250 = 0;
      _0xfcc50c = null;
      throw Error(_0x34c7b9(185));
    }
    for (var _0x16fd3e = _0x3141d1.return; _0x16fd3e !== null;) {
      _0x16fd3e = (_0x3141d1 = _0x16fd3e).return;
    }
    if (_0x3141d1.tag === 3) {
      return _0x3141d1.stateNode;
    } else {
      return null;
    }
  }
  var _0x569738 = {};
  function _0x30d587(_0x4180fc, _0x37d464, _0xe73222, _0x530ef4) {
    this.tag = _0x4180fc;
    this.key = _0xe73222;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.refCleanup = this.ref = null;
    this.pendingProps = _0x37d464;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = _0x530ef4;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function _0x147223(_0x477537, _0x5006d1, _0x218743, _0x2f80f3) {
    return new _0x30d587(_0x477537, _0x5006d1, _0x218743, _0x2f80f3);
  }
  function _0xb233b8(_0xb3a53d) {
    return !!(_0xb3a53d = _0xb3a53d.prototype) && !!_0xb3a53d.isReactComponent;
  }
  function _0x9ba748(_0x4c892e, _0x5e8037) {
    var _0x57919d = _0x4c892e.alternate;
    if (_0x57919d === null) {
      (_0x57919d = _0x147223(_0x4c892e.tag, _0x5e8037, _0x4c892e.key, _0x4c892e.mode)).elementType = _0x4c892e.elementType;
      _0x57919d.type = _0x4c892e.type;
      _0x57919d.stateNode = _0x4c892e.stateNode;
      _0x57919d.alternate = _0x4c892e;
      _0x4c892e.alternate = _0x57919d;
    } else {
      _0x57919d.pendingProps = _0x5e8037;
      _0x57919d.type = _0x4c892e.type;
      _0x57919d.flags = 0;
      _0x57919d.subtreeFlags = 0;
      _0x57919d.deletions = null;
    }
    _0x57919d.flags = _0x4c892e.flags & 65011712;
    _0x57919d.childLanes = _0x4c892e.childLanes;
    _0x57919d.lanes = _0x4c892e.lanes;
    _0x57919d.child = _0x4c892e.child;
    _0x57919d.memoizedProps = _0x4c892e.memoizedProps;
    _0x57919d.memoizedState = _0x4c892e.memoizedState;
    _0x57919d.updateQueue = _0x4c892e.updateQueue;
    _0x5e8037 = _0x4c892e.dependencies;
    _0x57919d.dependencies = _0x5e8037 === null ? null : {
      lanes: _0x5e8037.lanes,
      firstContext: _0x5e8037.firstContext
    };
    _0x57919d.sibling = _0x4c892e.sibling;
    _0x57919d.index = _0x4c892e.index;
    _0x57919d.ref = _0x4c892e.ref;
    _0x57919d.refCleanup = _0x4c892e.refCleanup;
    return _0x57919d;
  }
  function _0x33db6d(_0x1515fc, _0x5ef1db) {
    _0x1515fc.flags &= 65011714;
    var _0x37754a = _0x1515fc.alternate;
    if (_0x37754a === null) {
      _0x1515fc.childLanes = 0;
      _0x1515fc.lanes = _0x5ef1db;
      _0x1515fc.child = null;
      _0x1515fc.subtreeFlags = 0;
      _0x1515fc.memoizedProps = null;
      _0x1515fc.memoizedState = null;
      _0x1515fc.updateQueue = null;
      _0x1515fc.dependencies = null;
      _0x1515fc.stateNode = null;
    } else {
      _0x1515fc.childLanes = _0x37754a.childLanes;
      _0x1515fc.lanes = _0x37754a.lanes;
      _0x1515fc.child = _0x37754a.child;
      _0x1515fc.subtreeFlags = 0;
      _0x1515fc.deletions = null;
      _0x1515fc.memoizedProps = _0x37754a.memoizedProps;
      _0x1515fc.memoizedState = _0x37754a.memoizedState;
      _0x1515fc.updateQueue = _0x37754a.updateQueue;
      _0x1515fc.type = _0x37754a.type;
      _0x5ef1db = _0x37754a.dependencies;
      _0x1515fc.dependencies = _0x5ef1db === null ? null : {
        lanes: _0x5ef1db.lanes,
        firstContext: _0x5ef1db.firstContext
      };
    }
    return _0x1515fc;
  }
  function _0x3c8cd5(_0x2920e3, _0x5729a7, _0x13f41e, _0x78f0bf, _0x4b50b0, _0x2b9ba0) {
    var _0x5cf19e = 0;
    _0x78f0bf = _0x2920e3;
    if (typeof _0x2920e3 == "function") {
      if (_0xb233b8(_0x2920e3)) {
        _0x5cf19e = 1;
      }
    } else if (typeof _0x2920e3 == "string") {
      _0x5cf19e = function (_0x1707e6, _0x1de3cd, _0x1a1fea) {
        if (_0x1a1fea === 1 || _0x1de3cd.itemProp != null) {
          return false;
        }
        switch (_0x1707e6) {
          case "meta":
          case "title":
            return true;
          case "style":
            if (typeof _0x1de3cd.precedence != "string" || typeof _0x1de3cd.href != "string" || _0x1de3cd.href === "") {
              break;
            }
            return true;
          case "link":
            if (typeof _0x1de3cd.rel != "string" || typeof _0x1de3cd.href != "string" || _0x1de3cd.href === "" || _0x1de3cd.onLoad || _0x1de3cd.onError) {
              break;
            }
            return _0x1de3cd.rel !== "stylesheet" || (_0x1707e6 = _0x1de3cd.disabled, typeof _0x1de3cd.precedence == "string" && _0x1707e6 == null);
          case "script":
            if (_0x1de3cd.async && typeof _0x1de3cd.async != "function" && typeof _0x1de3cd.async != "symbol" && !_0x1de3cd.onLoad && !_0x1de3cd.onError && _0x1de3cd.src && typeof _0x1de3cd.src == "string") {
              return true;
            }
        }
        return false;
      }(_0x2920e3, _0x13f41e, _0x584415.current) ? 26 : _0x2920e3 === "html" || _0x2920e3 === "head" || _0x2920e3 === "body" ? 27 : 5;
    } else {
      _0x4bb77d: switch (_0x2920e3) {
        case _0x18d5b7:
          (_0x2920e3 = _0x147223(31, _0x13f41e, _0x5729a7, _0x4b50b0)).elementType = _0x18d5b7;
          _0x2920e3.lanes = _0x2b9ba0;
          return _0x2920e3;
        case _0x283751:
          return _0xd521c7(_0x13f41e.children, _0x4b50b0, _0x2b9ba0, _0x5729a7);
        case _0x4d6cdd:
          _0x5cf19e = 8;
          _0x4b50b0 |= 24;
          break;
        case _0x1e3f71:
          (_0x2920e3 = _0x147223(12, _0x13f41e, _0x5729a7, _0x4b50b0 | 2)).elementType = _0x1e3f71;
          _0x2920e3.lanes = _0x2b9ba0;
          return _0x2920e3;
        case _0x3f7a43:
          (_0x2920e3 = _0x147223(13, _0x13f41e, _0x5729a7, _0x4b50b0)).elementType = _0x3f7a43;
          _0x2920e3.lanes = _0x2b9ba0;
          return _0x2920e3;
        case _0x14e3dc:
          (_0x2920e3 = _0x147223(19, _0x13f41e, _0x5729a7, _0x4b50b0)).elementType = _0x14e3dc;
          _0x2920e3.lanes = _0x2b9ba0;
          return _0x2920e3;
        default:
          if (typeof _0x2920e3 == "object" && _0x2920e3 !== null) {
            switch (_0x2920e3.$$typeof) {
              case _0x147ad0:
                _0x5cf19e = 10;
                break _0x4bb77d;
              case _0xead563:
                _0x5cf19e = 9;
                break _0x4bb77d;
              case _0x5260c6:
                _0x5cf19e = 11;
                break _0x4bb77d;
              case _0x1b20b5:
                _0x5cf19e = 14;
                break _0x4bb77d;
              case _0x232ba2:
                _0x5cf19e = 16;
                _0x78f0bf = null;
                break _0x4bb77d;
            }
          }
          _0x5cf19e = 29;
          _0x13f41e = Error(_0x34c7b9(130, _0x2920e3 === null ? "null" : typeof _0x2920e3, ""));
          _0x78f0bf = null;
      }
    }
    (_0x5729a7 = _0x147223(_0x5cf19e, _0x13f41e, _0x5729a7, _0x4b50b0)).elementType = _0x2920e3;
    _0x5729a7.type = _0x78f0bf;
    _0x5729a7.lanes = _0x2b9ba0;
    return _0x5729a7;
  }
  function _0xd521c7(_0x4405f3, _0x37a4f0, _0x156215, _0x1a7158) {
    (_0x4405f3 = _0x147223(7, _0x4405f3, _0x1a7158, _0x37a4f0)).lanes = _0x156215;
    return _0x4405f3;
  }
  function _0x4f090d(_0x2b4394, _0x1a15fe, _0x33bdb9) {
    (_0x2b4394 = _0x147223(6, _0x2b4394, null, _0x1a15fe)).lanes = _0x33bdb9;
    return _0x2b4394;
  }
  function _0xd1f4e7(_0xac70df) {
    var _0x1ec3f6 = _0x147223(18, null, null, 0);
    _0x1ec3f6.stateNode = _0xac70df;
    return _0x1ec3f6;
  }
  function _0x2432e0(_0x4bbea1, _0x4fb0fa, _0x51795b) {
    (_0x4fb0fa = _0x147223(4, _0x4bbea1.children !== null ? _0x4bbea1.children : [], _0x4bbea1.key, _0x4fb0fa)).lanes = _0x51795b;
    _0x4fb0fa.stateNode = {
      containerInfo: _0x4bbea1.containerInfo,
      pendingChildren: null,
      implementation: _0x4bbea1.implementation
    };
    return _0x4fb0fa;
  }
  var _0x3f4619 = new WeakMap();
  function _0x2ed85e(_0x3edcf3, _0x4ec2b9) {
    if (typeof _0x3edcf3 == "object" && _0x3edcf3 !== null) {
      var _0x29f67a = _0x3f4619.get(_0x3edcf3);
      if (_0x29f67a !== undefined) {
        return _0x29f67a;
      } else {
        _0x4ec2b9 = {
          value: _0x3edcf3,
          source: _0x4ec2b9,
          stack: _0x513b24(_0x4ec2b9)
        };
        _0x3f4619.set(_0x3edcf3, _0x4ec2b9);
        return _0x4ec2b9;
      }
    }
    return {
      value: _0x3edcf3,
      source: _0x4ec2b9,
      stack: _0x513b24(_0x4ec2b9)
    };
  }
  var _0x188f4e = [];
  var _0x5d75c4 = 0;
  var _0x2394da = null;
  var _0x13de35 = 0;
  var _0x3041e6 = [];
  var _0x1a8aab = 0;
  var _0x595d5b = null;
  var _0x12c9e1 = 1;
  var _0x2668a2 = "";
  function _0x1ba706(_0x5d110d, _0x148935) {
    _0x188f4e[_0x5d75c4++] = _0x13de35;
    _0x188f4e[_0x5d75c4++] = _0x2394da;
    _0x2394da = _0x5d110d;
    _0x13de35 = _0x148935;
  }
  function _0x47004d(_0x34d2f2, _0x2f861b, _0x359ec4) {
    _0x3041e6[_0x1a8aab++] = _0x12c9e1;
    _0x3041e6[_0x1a8aab++] = _0x2668a2;
    _0x3041e6[_0x1a8aab++] = _0x595d5b;
    _0x595d5b = _0x34d2f2;
    var _0x7c8eee = _0x12c9e1;
    _0x34d2f2 = _0x2668a2;
    var _0x651256 = 32 - _0x4f44c7(_0x7c8eee) - 1;
    _0x7c8eee &= ~(1 << _0x651256);
    _0x359ec4 += 1;
    var _0x4a8727 = 32 - _0x4f44c7(_0x2f861b) + _0x651256;
    if (_0x4a8727 > 30) {
      var _0x414c11 = _0x651256 - _0x651256 % 5;
      _0x4a8727 = (_0x7c8eee & (1 << _0x414c11) - 1).toString(32);
      _0x7c8eee >>= _0x414c11;
      _0x651256 -= _0x414c11;
      _0x12c9e1 = 1 << 32 - _0x4f44c7(_0x2f861b) + _0x651256 | _0x359ec4 << _0x651256 | _0x7c8eee;
      _0x2668a2 = _0x4a8727 + _0x34d2f2;
    } else {
      _0x12c9e1 = 1 << _0x4a8727 | _0x359ec4 << _0x651256 | _0x7c8eee;
      _0x2668a2 = _0x34d2f2;
    }
  }
  function _0x11a072(_0x12b7b1) {
    if (_0x12b7b1.return !== null) {
      _0x1ba706(_0x12b7b1, 1);
      _0x47004d(_0x12b7b1, 1, 0);
    }
  }
  function _0x52941e(_0xf01874) {
    while (_0xf01874 === _0x2394da) {
      _0x2394da = _0x188f4e[--_0x5d75c4];
      _0x188f4e[_0x5d75c4] = null;
      _0x13de35 = _0x188f4e[--_0x5d75c4];
      _0x188f4e[_0x5d75c4] = null;
    }
    while (_0xf01874 === _0x595d5b) {
      _0x595d5b = _0x3041e6[--_0x1a8aab];
      _0x3041e6[_0x1a8aab] = null;
      _0x2668a2 = _0x3041e6[--_0x1a8aab];
      _0x3041e6[_0x1a8aab] = null;
      _0x12c9e1 = _0x3041e6[--_0x1a8aab];
      _0x3041e6[_0x1a8aab] = null;
    }
  }
  function _0x1c3a97(_0x5f1275, _0x34b61a) {
    _0x3041e6[_0x1a8aab++] = _0x12c9e1;
    _0x3041e6[_0x1a8aab++] = _0x2668a2;
    _0x3041e6[_0x1a8aab++] = _0x595d5b;
    _0x12c9e1 = _0x34b61a.id;
    _0x2668a2 = _0x34b61a.overflow;
    _0x595d5b = _0x5f1275;
  }
  var _0x5ad7b0 = null;
  var _0x57de98 = null;
  var _0x823508 = false;
  var _0x410af8 = null;
  var _0x6462e2 = false;
  var _0x1683eb = Error(_0x34c7b9(519));
  function _0x4f1a46(_0x4f78c1) {
    _0x2725db(_0x2ed85e(Error(_0x34c7b9(418, arguments.length > 1 && arguments[1] !== undefined && arguments[1] ? "text" : "HTML", "")), _0x4f78c1));
    throw _0x1683eb;
  }
  function _0x54dff1(_0x131cf8) {
    var _0x22aa7d = _0x131cf8.stateNode;
    var _0x49e703 = _0x131cf8.type;
    var _0x39f09a = _0x131cf8.memoizedProps;
    _0x22aa7d[_0x941386] = _0x131cf8;
    _0x22aa7d[_0x21a328] = _0x39f09a;
    switch (_0x49e703) {
      case "dialog":
        _0x2d5011("cancel", _0x22aa7d);
        _0x2d5011("close", _0x22aa7d);
        break;
      case "iframe":
      case "object":
      case "embed":
        _0x2d5011("load", _0x22aa7d);
        break;
      case "video":
      case "audio":
        for (_0x49e703 = 0; _0x49e703 < _0xb43409.length; _0x49e703++) {
          _0x2d5011(_0xb43409[_0x49e703], _0x22aa7d);
        }
        break;
      case "source":
        _0x2d5011("error", _0x22aa7d);
        break;
      case "img":
      case "image":
      case "link":
        _0x2d5011("error", _0x22aa7d);
        _0x2d5011("load", _0x22aa7d);
        break;
      case "details":
        _0x2d5011("toggle", _0x22aa7d);
        break;
      case "input":
        _0x2d5011("invalid", _0x22aa7d);
        _0x178d34(_0x22aa7d, _0x39f09a.value, _0x39f09a.defaultValue, _0x39f09a.checked, _0x39f09a.defaultChecked, _0x39f09a.type, _0x39f09a.name, true);
        break;
      case "select":
        _0x2d5011("invalid", _0x22aa7d);
        break;
      case "textarea":
        _0x2d5011("invalid", _0x22aa7d);
        _0x4b72cd(_0x22aa7d, _0x39f09a.value, _0x39f09a.defaultValue, _0x39f09a.children);
    }
    if (typeof (_0x49e703 = _0x39f09a.children) != "string" && typeof _0x49e703 != "number" && typeof _0x49e703 != "bigint" || _0x22aa7d.textContent === "" + _0x49e703 || _0x39f09a.suppressHydrationWarning === true || _0x3e8d67(_0x22aa7d.textContent, _0x49e703)) {
      if (_0x39f09a.popover != null) {
        _0x2d5011("beforetoggle", _0x22aa7d);
        _0x2d5011("toggle", _0x22aa7d);
      }
      if (_0x39f09a.onScroll != null) {
        _0x2d5011("scroll", _0x22aa7d);
      }
      if (_0x39f09a.onScrollEnd != null) {
        _0x2d5011("scrollend", _0x22aa7d);
      }
      if (_0x39f09a.onClick != null) {
        _0x22aa7d.onclick = _0x3de216;
      }
      _0x22aa7d = true;
    } else {
      _0x22aa7d = false;
    }
    if (!_0x22aa7d) {
      _0x4f1a46(_0x131cf8, true);
    }
  }
  function _0x47dcbb(_0x440bc3) {
    for (_0x5ad7b0 = _0x440bc3.return; _0x5ad7b0;) {
      switch (_0x5ad7b0.tag) {
        case 5:
        case 31:
        case 13:
          _0x6462e2 = false;
          return;
        case 27:
        case 3:
          _0x6462e2 = true;
          return;
        default:
          _0x5ad7b0 = _0x5ad7b0.return;
      }
    }
  }
  function _0x2663b6(_0x581b00) {
    if (_0x581b00 !== _0x5ad7b0) {
      return false;
    }
    if (!_0x823508) {
      _0x47dcbb(_0x581b00);
      _0x823508 = true;
      return false;
    }
    var _0xa3298d;
    var _0x18df38 = _0x581b00.tag;
    if (_0xa3298d = _0x18df38 !== 3 && _0x18df38 !== 27) {
      if (_0xa3298d = _0x18df38 === 5) {
        _0xa3298d = (_0xa3298d = _0x581b00.type) === "form" || _0xa3298d === "button" || _0x323586(_0x581b00.type, _0x581b00.memoizedProps);
      }
      _0xa3298d = !_0xa3298d;
    }
    if (_0xa3298d && _0x57de98) {
      _0x4f1a46(_0x581b00);
    }
    _0x47dcbb(_0x581b00);
    if (_0x18df38 === 13) {
      if (!(_0x581b00 = (_0x581b00 = _0x581b00.memoizedState) !== null ? _0x581b00.dehydrated : null)) {
        throw Error(_0x34c7b9(317));
      }
      _0x57de98 = _0x50e05d(_0x581b00);
    } else if (_0x18df38 === 31) {
      if (!(_0x581b00 = (_0x581b00 = _0x581b00.memoizedState) !== null ? _0x581b00.dehydrated : null)) {
        throw Error(_0x34c7b9(317));
      }
      _0x57de98 = _0x50e05d(_0x581b00);
    } else if (_0x18df38 === 27) {
      _0x18df38 = _0x57de98;
      if (_0x6fae4f(_0x581b00.type)) {
        _0x581b00 = _0x50990b;
        _0x50990b = null;
        _0x57de98 = _0x581b00;
      } else {
        _0x57de98 = _0x18df38;
      }
    } else {
      _0x57de98 = _0x5ad7b0 ? _0x45f4a9(_0x581b00.stateNode.nextSibling) : null;
    }
    return true;
  }
  function _0x4a25e9() {
    _0x57de98 = _0x5ad7b0 = null;
    _0x823508 = false;
  }
  function _0x2a80d0() {
    var _0x3686cd = _0x410af8;
    if (_0x3686cd !== null) {
      if (_0x3dc129 === null) {
        _0x3dc129 = _0x3686cd;
      } else {
        _0x3dc129.push.apply(_0x3dc129, _0x3686cd);
      }
      _0x410af8 = null;
    }
    return _0x3686cd;
  }
  function _0x2725db(_0x2d4fe3) {
    if (_0x410af8 === null) {
      _0x410af8 = [_0x2d4fe3];
    } else {
      _0x410af8.push(_0x2d4fe3);
    }
  }
  var _0x488bfc = _0x2d2885(null);
  var _0x41fa62 = null;
  var _0x28430d = null;
  function _0x150c68(_0x56b470, _0x53c908, _0x293e35) {
    _0x45c6e5(_0x488bfc, _0x53c908._currentValue);
    _0x53c908._currentValue = _0x293e35;
  }
  function _0x551581(_0x5904c4) {
    _0x5904c4._currentValue = _0x488bfc.current;
    _0x20fc3e(_0x488bfc);
  }
  function _0x451faf(_0x274d73, _0x22f56f, _0x41687a) {
    while (_0x274d73 !== null) {
      var _0x53d185 = _0x274d73.alternate;
      if ((_0x274d73.childLanes & _0x22f56f) !== _0x22f56f) {
        _0x274d73.childLanes |= _0x22f56f;
        if (_0x53d185 !== null) {
          _0x53d185.childLanes |= _0x22f56f;
        }
      } else if (_0x53d185 !== null && (_0x53d185.childLanes & _0x22f56f) !== _0x22f56f) {
        _0x53d185.childLanes |= _0x22f56f;
      }
      if (_0x274d73 === _0x41687a) {
        break;
      }
      _0x274d73 = _0x274d73.return;
    }
  }
  function _0x4afde8(_0x109f3a, _0x5d4446, _0x177795, _0x3d7ce2) {
    var _0x9122d9 = _0x109f3a.child;
    for (_0x9122d9 !== null && (_0x9122d9.return = _0x109f3a); _0x9122d9 !== null;) {
      var _0x243319 = _0x9122d9.dependencies;
      if (_0x243319 !== null) {
        var _0x579c69 = _0x9122d9.child;
        _0x243319 = _0x243319.firstContext;
        _0x39e181: while (_0x243319 !== null) {
          var _0x1ef1b5 = _0x243319;
          _0x243319 = _0x9122d9;
          for (var _0x43aec2 = 0; _0x43aec2 < _0x5d4446.length; _0x43aec2++) {
            if (_0x1ef1b5.context === _0x5d4446[_0x43aec2]) {
              _0x243319.lanes |= _0x177795;
              if ((_0x1ef1b5 = _0x243319.alternate) !== null) {
                _0x1ef1b5.lanes |= _0x177795;
              }
              _0x451faf(_0x243319.return, _0x177795, _0x109f3a);
              if (!_0x3d7ce2) {
                _0x579c69 = null;
              }
              break _0x39e181;
            }
          }
          _0x243319 = _0x1ef1b5.next;
        }
      } else if (_0x9122d9.tag === 18) {
        if ((_0x579c69 = _0x9122d9.return) === null) {
          throw Error(_0x34c7b9(341));
        }
        _0x579c69.lanes |= _0x177795;
        if ((_0x243319 = _0x579c69.alternate) !== null) {
          _0x243319.lanes |= _0x177795;
        }
        _0x451faf(_0x579c69, _0x177795, _0x109f3a);
        _0x579c69 = null;
      } else {
        _0x579c69 = _0x9122d9.child;
      }
      if (_0x579c69 !== null) {
        _0x579c69.return = _0x9122d9;
      } else {
        for (_0x579c69 = _0x9122d9; _0x579c69 !== null;) {
          if (_0x579c69 === _0x109f3a) {
            _0x579c69 = null;
            break;
          }
          if ((_0x9122d9 = _0x579c69.sibling) !== null) {
            _0x9122d9.return = _0x579c69.return;
            _0x579c69 = _0x9122d9;
            break;
          }
          _0x579c69 = _0x579c69.return;
        }
      }
      _0x9122d9 = _0x579c69;
    }
  }
  function _0x29615d(_0x59f505, _0x2c8800, _0x19dbdf, _0x5e0d9c) {
    _0x59f505 = null;
    for (var _0x359b05 = _0x2c8800, _0x14d50b = false; _0x359b05 !== null;) {
      if (!_0x14d50b) {
        if (_0x359b05.flags & 524288) {
          _0x14d50b = true;
        } else if (_0x359b05.flags & 262144) {
          break;
        }
      }
      if (_0x359b05.tag === 10) {
        var _0x2bc468 = _0x359b05.alternate;
        if (_0x2bc468 === null) {
          throw Error(_0x34c7b9(387));
        }
        if ((_0x2bc468 = _0x2bc468.memoizedProps) !== null) {
          var _0x4223a8 = _0x359b05.type;
          if (!_0x1e5abc(_0x359b05.pendingProps.value, _0x2bc468.value)) {
            if (_0x59f505 !== null) {
              _0x59f505.push(_0x4223a8);
            } else {
              _0x59f505 = [_0x4223a8];
            }
          }
        }
      } else if (_0x359b05 === _0x12e4d9.current) {
        if ((_0x2bc468 = _0x359b05.alternate) === null) {
          throw Error(_0x34c7b9(387));
        }
        if (_0x2bc468.memoizedState.memoizedState !== _0x359b05.memoizedState.memoizedState) {
          if (_0x59f505 !== null) {
            _0x59f505.push(_0x508408);
          } else {
            _0x59f505 = [_0x508408];
          }
        }
      }
      _0x359b05 = _0x359b05.return;
    }
    if (_0x59f505 !== null) {
      _0x4afde8(_0x2c8800, _0x59f505, _0x19dbdf, _0x5e0d9c);
    }
    _0x2c8800.flags |= 262144;
  }
  function _0x586fd9(_0xaf9874) {
    for (_0xaf9874 = _0xaf9874.firstContext; _0xaf9874 !== null;) {
      if (!_0x1e5abc(_0xaf9874.context._currentValue, _0xaf9874.memoizedValue)) {
        return true;
      }
      _0xaf9874 = _0xaf9874.next;
    }
    return false;
  }
  function _0x5141e1(_0x453b4c) {
    _0x41fa62 = _0x453b4c;
    _0x28430d = null;
    if ((_0x453b4c = _0x453b4c.dependencies) !== null) {
      _0x453b4c.firstContext = null;
    }
  }
  function _0x4d359e(_0x4ad622) {
    return _0x246d00(_0x41fa62, _0x4ad622);
  }
  function _0xc3ed50(_0xb1ea4, _0x443dcc) {
    if (_0x41fa62 === null) {
      _0x5141e1(_0xb1ea4);
    }
    return _0x246d00(_0xb1ea4, _0x443dcc);
  }
  function _0x246d00(_0x4a42ea, _0x487886) {
    var _0x17ad75 = _0x487886._currentValue;
    _0x487886 = {
      context: _0x487886,
      memoizedValue: _0x17ad75,
      next: null
    };
    if (_0x28430d === null) {
      if (_0x4a42ea === null) {
        throw Error(_0x34c7b9(308));
      }
      _0x28430d = _0x487886;
      _0x4a42ea.dependencies = {
        lanes: 0,
        firstContext: _0x487886
      };
      _0x4a42ea.flags |= 524288;
    } else {
      _0x28430d = _0x28430d.next = _0x487886;
    }
    return _0x17ad75;
  }
  var _0x2c92b6 = typeof AbortController != "undefined" ? AbortController : function () {
    var _0x561214 = [];
    var _0x45533b = this.signal = {
      aborted: false,
      addEventListener: function (_0x51d1ae, _0x26c266) {
        _0x561214.push(_0x26c266);
      }
    };
    this.abort = function () {
      _0x45533b.aborted = true;
      _0x561214.forEach(function (_0x4066ac) {
        return _0x4066ac();
      });
    };
  };
  var _0xd2ad19 = _0xbf7a82.unstable_scheduleCallback;
  var _0x4a8b5c = _0xbf7a82.unstable_NormalPriority;
  var _0x156a91 = {
    $$typeof: _0x147ad0,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _0x226727() {
    return {
      controller: new _0x2c92b6(),
      data: new Map(),
      refCount: 0
    };
  }
  function _0x10e625(_0x4e8b68) {
    _0x4e8b68.refCount--;
    if (_0x4e8b68.refCount === 0) {
      _0xd2ad19(_0x4a8b5c, function () {
        _0x4e8b68.controller.abort();
      });
    }
  }
  var _0x50ed14 = null;
  var _0x354d93 = 0;
  var _0x28fcfb = 0;
  var _0x452d8a = null;
  function _0x521786() {
    if (--_0x354d93 === 0 && _0x50ed14 !== null) {
      if (_0x452d8a !== null) {
        _0x452d8a.status = "fulfilled";
      }
      var _0x3d24ff = _0x50ed14;
      _0x50ed14 = null;
      _0x28fcfb = 0;
      _0x452d8a = null;
      for (var _0x2789a4 = 0; _0x2789a4 < _0x3d24ff.length; _0x2789a4++) {
        (0, _0x3d24ff[_0x2789a4])();
      }
    }
  }
  var _0x591c6b = _0x30149d.S;
  _0x30149d.S = function (_0x1f6c82, _0x151073) {
    _0x25fd9c = _0x271a39();
    if (typeof _0x151073 == "object" && _0x151073 !== null && typeof _0x151073.then == "function") {
      (function (_0x2fe4a3, _0x5d1188) {
        if (_0x50ed14 === null) {
          var _0xb8368d = _0x50ed14 = [];
          _0x354d93 = 0;
          _0x28fcfb = _0x276259();
          _0x452d8a = {
            status: "pending",
            value: undefined,
            then: function (_0x5da107) {
              _0xb8368d.push(_0x5da107);
            }
          };
        }
        _0x354d93++;
        _0x5d1188.then(_0x521786, _0x521786);
      })(0, _0x151073);
    }
    if (_0x591c6b !== null) {
      _0x591c6b(_0x1f6c82, _0x151073);
    }
  };
  var _0x40f082 = _0x2d2885(null);
  function _0xf146ff() {
    var _0xe74449 = _0x40f082.current;
    if (_0xe74449 !== null) {
      return _0xe74449;
    } else {
      return _0x42aa40.pooledCache;
    }
  }
  function _0x193199(_0x2cc66b, _0x2594be) {
    _0x45c6e5(_0x40f082, _0x2594be === null ? _0x40f082.current : _0x2594be.pool);
  }
  function _0x40a8d7() {
    var _0x31315d = _0xf146ff();
    if (_0x31315d === null) {
      return null;
    } else {
      return {
        parent: _0x156a91._currentValue,
        pool: _0x31315d
      };
    }
  }
  var _0x29ca49 = Error(_0x34c7b9(460));
  var _0xa659e4 = Error(_0x34c7b9(474));
  var _0x302451 = Error(_0x34c7b9(542));
  var _0x3bb41b = {
    then: function () {}
  };
  function _0x590d7f(_0xec7d95) {
    return (_0xec7d95 = _0xec7d95.status) === "fulfilled" || _0xec7d95 === "rejected";
  }
  function _0x4bd6b1(_0x3c1aac, _0x1911eb, _0x523b2e) {
    if ((_0x523b2e = _0x3c1aac[_0x523b2e]) === undefined) {
      _0x3c1aac.push(_0x1911eb);
    } else if (_0x523b2e !== _0x1911eb) {
      _0x1911eb.then(_0x3de216, _0x3de216);
      _0x1911eb = _0x523b2e;
    }
    switch (_0x1911eb.status) {
      case "fulfilled":
        return _0x1911eb.value;
      case "rejected":
        _0x10b216(_0x3c1aac = _0x1911eb.reason);
        throw _0x3c1aac;
      default:
        if (typeof _0x1911eb.status == "string") {
          _0x1911eb.then(_0x3de216, _0x3de216);
        } else {
          if ((_0x3c1aac = _0x42aa40) !== null && _0x3c1aac.shellSuspendCounter > 100) {
            throw Error(_0x34c7b9(482));
          }
          (_0x3c1aac = _0x1911eb).status = "pending";
          _0x3c1aac.then(function (_0x3bf6e6) {
            if (_0x1911eb.status === "pending") {
              var _0x4fe08e = _0x1911eb;
              _0x4fe08e.status = "fulfilled";
              _0x4fe08e.value = _0x3bf6e6;
            }
          }, function (_0x992b46) {
            if (_0x1911eb.status === "pending") {
              var _0x4d0a59 = _0x1911eb;
              _0x4d0a59.status = "rejected";
              _0x4d0a59.reason = _0x992b46;
            }
          });
        }
        switch (_0x1911eb.status) {
          case "fulfilled":
            return _0x1911eb.value;
          case "rejected":
            _0x10b216(_0x3c1aac = _0x1911eb.reason);
            throw _0x3c1aac;
        }
        _0x586ab9 = _0x1911eb;
        throw _0x29ca49;
    }
  }
  function _0x958efc(_0x108e8b) {
    try {
      return (0, _0x108e8b._init)(_0x108e8b._payload);
    } catch (_0x2b4b1c) {
      if (_0x2b4b1c !== null && typeof _0x2b4b1c == "object" && typeof _0x2b4b1c.then == "function") {
        _0x586ab9 = _0x2b4b1c;
        throw _0x29ca49;
      }
      throw _0x2b4b1c;
    }
  }
  var _0x586ab9 = null;
  function _0xebea68() {
    if (_0x586ab9 === null) {
      throw Error(_0x34c7b9(459));
    }
    var _0x46ddde = _0x586ab9;
    _0x586ab9 = null;
    return _0x46ddde;
  }
  function _0x10b216(_0x3f5c7b) {
    if (_0x3f5c7b === _0x29ca49 || _0x3f5c7b === _0x302451) {
      throw Error(_0x34c7b9(483));
    }
  }
  var _0x502a54 = null;
  var _0x553183 = 0;
  function _0x548770(_0x49e673) {
    var _0x559711 = _0x553183;
    _0x553183 += 1;
    if (_0x502a54 === null) {
      _0x502a54 = [];
    }
    return _0x4bd6b1(_0x502a54, _0x49e673, _0x559711);
  }
  function _0x37d83e(_0x56fab6, _0x27d527) {
    _0x27d527 = _0x27d527.props.ref;
    _0x56fab6.ref = _0x27d527 !== undefined ? _0x27d527 : null;
  }
  function _0x2158cc(_0x3d85e2, _0x4183ed) {
    if (_0x4183ed.$$typeof === _0x63fbcc) {
      throw Error(_0x34c7b9(525));
    }
    _0x3d85e2 = Object.prototype.toString.call(_0x4183ed);
    throw Error(_0x34c7b9(31, _0x3d85e2 === "[object Object]" ? "object with keys {" + Object.keys(_0x4183ed).join(", ") + "}" : _0x3d85e2));
  }
  function _0x1cbad1(_0x3a0b2f) {
    function _0x58dc81(_0x2d49fa, _0xe16e40) {
      if (_0x3a0b2f) {
        var _0x5ea876 = _0x2d49fa.deletions;
        if (_0x5ea876 === null) {
          _0x2d49fa.deletions = [_0xe16e40];
          _0x2d49fa.flags |= 16;
        } else {
          _0x5ea876.push(_0xe16e40);
        }
      }
    }
    function _0x1e2f2b(_0x132a6a, _0x4b7ed2) {
      if (!_0x3a0b2f) {
        return null;
      }
      while (_0x4b7ed2 !== null) {
        _0x58dc81(_0x132a6a, _0x4b7ed2);
        _0x4b7ed2 = _0x4b7ed2.sibling;
      }
      return null;
    }
    function _0x1646bf(_0x228e65) {
      var _0x2a8b88 = new Map();
      for (; _0x228e65 !== null;) {
        if (_0x228e65.key !== null) {
          _0x2a8b88.set(_0x228e65.key, _0x228e65);
        } else {
          _0x2a8b88.set(_0x228e65.index, _0x228e65);
        }
        _0x228e65 = _0x228e65.sibling;
      }
      return _0x2a8b88;
    }
    function _0x56d56d(_0x313172, _0x130d0c) {
      (_0x313172 = _0x9ba748(_0x313172, _0x130d0c)).index = 0;
      _0x313172.sibling = null;
      return _0x313172;
    }
    function _0x17357f(_0x5d8b24, _0x5f0bcd, _0x11124a) {
      _0x5d8b24.index = _0x11124a;
      if (_0x3a0b2f) {
        if ((_0x11124a = _0x5d8b24.alternate) !== null) {
          if ((_0x11124a = _0x11124a.index) < _0x5f0bcd) {
            _0x5d8b24.flags |= 67108866;
            return _0x5f0bcd;
          } else {
            return _0x11124a;
          }
        } else {
          _0x5d8b24.flags |= 67108866;
          return _0x5f0bcd;
        }
      } else {
        _0x5d8b24.flags |= 1048576;
        return _0x5f0bcd;
      }
    }
    function _0x98c293(_0x3bc489) {
      if (_0x3a0b2f && _0x3bc489.alternate === null) {
        _0x3bc489.flags |= 67108866;
      }
      return _0x3bc489;
    }
    function _0x57f8cb(_0x5b120c, _0x4cb5ba, _0x1ad5a5, _0xb3dd00) {
      if (_0x4cb5ba === null || _0x4cb5ba.tag !== 6) {
        (_0x4cb5ba = _0x4f090d(_0x1ad5a5, _0x5b120c.mode, _0xb3dd00)).return = _0x5b120c;
        return _0x4cb5ba;
      } else {
        (_0x4cb5ba = _0x56d56d(_0x4cb5ba, _0x1ad5a5)).return = _0x5b120c;
        return _0x4cb5ba;
      }
    }
    function _0x4558d9(_0x1b274c, _0xe84263, _0x2812c6, _0x31b2db) {
      var _0x815739 = _0x2812c6.type;
      if (_0x815739 === _0x283751) {
        return _0x3df96c(_0x1b274c, _0xe84263, _0x2812c6.props.children, _0x31b2db, _0x2812c6.key);
      } else if (_0xe84263 !== null && (_0xe84263.elementType === _0x815739 || typeof _0x815739 == "object" && _0x815739 !== null && _0x815739.$$typeof === _0x232ba2 && _0x958efc(_0x815739) === _0xe84263.type)) {
        _0x37d83e(_0xe84263 = _0x56d56d(_0xe84263, _0x2812c6.props), _0x2812c6);
        _0xe84263.return = _0x1b274c;
        return _0xe84263;
      } else {
        _0x37d83e(_0xe84263 = _0x3c8cd5(_0x2812c6.type, _0x2812c6.key, _0x2812c6.props, null, _0x1b274c.mode, _0x31b2db), _0x2812c6);
        _0xe84263.return = _0x1b274c;
        return _0xe84263;
      }
    }
    function _0x56a4b0(_0x25563e, _0x56c6bd, _0xfa2ec2, _0xd85756) {
      if (_0x56c6bd === null || _0x56c6bd.tag !== 4 || _0x56c6bd.stateNode.containerInfo !== _0xfa2ec2.containerInfo || _0x56c6bd.stateNode.implementation !== _0xfa2ec2.implementation) {
        (_0x56c6bd = _0x2432e0(_0xfa2ec2, _0x25563e.mode, _0xd85756)).return = _0x25563e;
        return _0x56c6bd;
      } else {
        (_0x56c6bd = _0x56d56d(_0x56c6bd, _0xfa2ec2.children || [])).return = _0x25563e;
        return _0x56c6bd;
      }
    }
    function _0x3df96c(_0xc9ca44, _0x454353, _0x43a565, _0x264e5b, _0x25be11) {
      if (_0x454353 === null || _0x454353.tag !== 7) {
        (_0x454353 = _0xd521c7(_0x43a565, _0xc9ca44.mode, _0x264e5b, _0x25be11)).return = _0xc9ca44;
        return _0x454353;
      } else {
        (_0x454353 = _0x56d56d(_0x454353, _0x43a565)).return = _0xc9ca44;
        return _0x454353;
      }
    }
    function _0x1a1c0c(_0x3a9b6c, _0x5aed80, _0x2d4eb8) {
      if (typeof _0x5aed80 == "string" && _0x5aed80 !== "" || typeof _0x5aed80 == "number" || typeof _0x5aed80 == "bigint") {
        (_0x5aed80 = _0x4f090d("" + _0x5aed80, _0x3a9b6c.mode, _0x2d4eb8)).return = _0x3a9b6c;
        return _0x5aed80;
      }
      if (typeof _0x5aed80 == "object" && _0x5aed80 !== null) {
        switch (_0x5aed80.$$typeof) {
          case _0x54b743:
            _0x37d83e(_0x2d4eb8 = _0x3c8cd5(_0x5aed80.type, _0x5aed80.key, _0x5aed80.props, null, _0x3a9b6c.mode, _0x2d4eb8), _0x5aed80);
            _0x2d4eb8.return = _0x3a9b6c;
            return _0x2d4eb8;
          case _0x2f1d8e:
            (_0x5aed80 = _0x2432e0(_0x5aed80, _0x3a9b6c.mode, _0x2d4eb8)).return = _0x3a9b6c;
            return _0x5aed80;
          case _0x232ba2:
            return _0x1a1c0c(_0x3a9b6c, _0x5aed80 = _0x958efc(_0x5aed80), _0x2d4eb8);
        }
        if (_0x284410(_0x5aed80) || _0x2becc5(_0x5aed80)) {
          (_0x5aed80 = _0xd521c7(_0x5aed80, _0x3a9b6c.mode, _0x2d4eb8, null)).return = _0x3a9b6c;
          return _0x5aed80;
        }
        if (typeof _0x5aed80.then == "function") {
          return _0x1a1c0c(_0x3a9b6c, _0x548770(_0x5aed80), _0x2d4eb8);
        }
        if (_0x5aed80.$$typeof === _0x147ad0) {
          return _0x1a1c0c(_0x3a9b6c, _0xc3ed50(_0x3a9b6c, _0x5aed80), _0x2d4eb8);
        }
        _0x2158cc(_0x3a9b6c, _0x5aed80);
      }
      return null;
    }
    function _0x5e1b4a(_0x41d12a, _0x466b0a, _0x2f1e8f, _0x4d8699) {
      var _0x2154fe = _0x466b0a !== null ? _0x466b0a.key : null;
      if (typeof _0x2f1e8f == "string" && _0x2f1e8f !== "" || typeof _0x2f1e8f == "number" || typeof _0x2f1e8f == "bigint") {
        if (_0x2154fe !== null) {
          return null;
        } else {
          return _0x57f8cb(_0x41d12a, _0x466b0a, "" + _0x2f1e8f, _0x4d8699);
        }
      }
      if (typeof _0x2f1e8f == "object" && _0x2f1e8f !== null) {
        switch (_0x2f1e8f.$$typeof) {
          case _0x54b743:
            if (_0x2f1e8f.key === _0x2154fe) {
              return _0x4558d9(_0x41d12a, _0x466b0a, _0x2f1e8f, _0x4d8699);
            } else {
              return null;
            }
          case _0x2f1d8e:
            if (_0x2f1e8f.key === _0x2154fe) {
              return _0x56a4b0(_0x41d12a, _0x466b0a, _0x2f1e8f, _0x4d8699);
            } else {
              return null;
            }
          case _0x232ba2:
            return _0x5e1b4a(_0x41d12a, _0x466b0a, _0x2f1e8f = _0x958efc(_0x2f1e8f), _0x4d8699);
        }
        if (_0x284410(_0x2f1e8f) || _0x2becc5(_0x2f1e8f)) {
          if (_0x2154fe !== null) {
            return null;
          } else {
            return _0x3df96c(_0x41d12a, _0x466b0a, _0x2f1e8f, _0x4d8699, null);
          }
        }
        if (typeof _0x2f1e8f.then == "function") {
          return _0x5e1b4a(_0x41d12a, _0x466b0a, _0x548770(_0x2f1e8f), _0x4d8699);
        }
        if (_0x2f1e8f.$$typeof === _0x147ad0) {
          return _0x5e1b4a(_0x41d12a, _0x466b0a, _0xc3ed50(_0x41d12a, _0x2f1e8f), _0x4d8699);
        }
        _0x2158cc(_0x41d12a, _0x2f1e8f);
      }
      return null;
    }
    function _0x1fe4be(_0x54313f, _0x586d08, _0x4ec8e6, _0x408051, _0x20041b) {
      if (typeof _0x408051 == "string" && _0x408051 !== "" || typeof _0x408051 == "number" || typeof _0x408051 == "bigint") {
        return _0x57f8cb(_0x586d08, _0x54313f = _0x54313f.get(_0x4ec8e6) || null, "" + _0x408051, _0x20041b);
      }
      if (typeof _0x408051 == "object" && _0x408051 !== null) {
        switch (_0x408051.$$typeof) {
          case _0x54b743:
            return _0x4558d9(_0x586d08, _0x54313f = _0x54313f.get(_0x408051.key === null ? _0x4ec8e6 : _0x408051.key) || null, _0x408051, _0x20041b);
          case _0x2f1d8e:
            return _0x56a4b0(_0x586d08, _0x54313f = _0x54313f.get(_0x408051.key === null ? _0x4ec8e6 : _0x408051.key) || null, _0x408051, _0x20041b);
          case _0x232ba2:
            return _0x1fe4be(_0x54313f, _0x586d08, _0x4ec8e6, _0x408051 = _0x958efc(_0x408051), _0x20041b);
        }
        if (_0x284410(_0x408051) || _0x2becc5(_0x408051)) {
          return _0x3df96c(_0x586d08, _0x54313f = _0x54313f.get(_0x4ec8e6) || null, _0x408051, _0x20041b, null);
        }
        if (typeof _0x408051.then == "function") {
          return _0x1fe4be(_0x54313f, _0x586d08, _0x4ec8e6, _0x548770(_0x408051), _0x20041b);
        }
        if (_0x408051.$$typeof === _0x147ad0) {
          return _0x1fe4be(_0x54313f, _0x586d08, _0x4ec8e6, _0xc3ed50(_0x586d08, _0x408051), _0x20041b);
        }
        _0x2158cc(_0x586d08, _0x408051);
      }
      return null;
    }
    function _0x126fab(_0x4fdb09, _0x2fac34, _0xff0bb, _0x2b52f6) {
      if (typeof _0xff0bb == "object" && _0xff0bb !== null && _0xff0bb.type === _0x283751 && _0xff0bb.key === null) {
        _0xff0bb = _0xff0bb.props.children;
      }
      if (typeof _0xff0bb == "object" && _0xff0bb !== null) {
        switch (_0xff0bb.$$typeof) {
          case _0x54b743:
            _0x1d6fef: {
              var _0x22445f = _0xff0bb.key;
              for (; _0x2fac34 !== null;) {
                if (_0x2fac34.key === _0x22445f) {
                  if ((_0x22445f = _0xff0bb.type) === _0x283751) {
                    if (_0x2fac34.tag === 7) {
                      _0x1e2f2b(_0x4fdb09, _0x2fac34.sibling);
                      (_0x2b52f6 = _0x56d56d(_0x2fac34, _0xff0bb.props.children)).return = _0x4fdb09;
                      _0x4fdb09 = _0x2b52f6;
                      break _0x1d6fef;
                    }
                  } else if (_0x2fac34.elementType === _0x22445f || typeof _0x22445f == "object" && _0x22445f !== null && _0x22445f.$$typeof === _0x232ba2 && _0x958efc(_0x22445f) === _0x2fac34.type) {
                    _0x1e2f2b(_0x4fdb09, _0x2fac34.sibling);
                    _0x37d83e(_0x2b52f6 = _0x56d56d(_0x2fac34, _0xff0bb.props), _0xff0bb);
                    _0x2b52f6.return = _0x4fdb09;
                    _0x4fdb09 = _0x2b52f6;
                    break _0x1d6fef;
                  }
                  _0x1e2f2b(_0x4fdb09, _0x2fac34);
                  break;
                }
                _0x58dc81(_0x4fdb09, _0x2fac34);
                _0x2fac34 = _0x2fac34.sibling;
              }
              if (_0xff0bb.type === _0x283751) {
                (_0x2b52f6 = _0xd521c7(_0xff0bb.props.children, _0x4fdb09.mode, _0x2b52f6, _0xff0bb.key)).return = _0x4fdb09;
                _0x4fdb09 = _0x2b52f6;
              } else {
                _0x37d83e(_0x2b52f6 = _0x3c8cd5(_0xff0bb.type, _0xff0bb.key, _0xff0bb.props, null, _0x4fdb09.mode, _0x2b52f6), _0xff0bb);
                _0x2b52f6.return = _0x4fdb09;
                _0x4fdb09 = _0x2b52f6;
              }
            }
            return _0x98c293(_0x4fdb09);
          case _0x2f1d8e:
            _0x6501b2: {
              for (_0x22445f = _0xff0bb.key; _0x2fac34 !== null;) {
                if (_0x2fac34.key === _0x22445f) {
                  if (_0x2fac34.tag === 4 && _0x2fac34.stateNode.containerInfo === _0xff0bb.containerInfo && _0x2fac34.stateNode.implementation === _0xff0bb.implementation) {
                    _0x1e2f2b(_0x4fdb09, _0x2fac34.sibling);
                    (_0x2b52f6 = _0x56d56d(_0x2fac34, _0xff0bb.children || [])).return = _0x4fdb09;
                    _0x4fdb09 = _0x2b52f6;
                    break _0x6501b2;
                  }
                  _0x1e2f2b(_0x4fdb09, _0x2fac34);
                  break;
                }
                _0x58dc81(_0x4fdb09, _0x2fac34);
                _0x2fac34 = _0x2fac34.sibling;
              }
              (_0x2b52f6 = _0x2432e0(_0xff0bb, _0x4fdb09.mode, _0x2b52f6)).return = _0x4fdb09;
              _0x4fdb09 = _0x2b52f6;
            }
            return _0x98c293(_0x4fdb09);
          case _0x232ba2:
            return _0x126fab(_0x4fdb09, _0x2fac34, _0xff0bb = _0x958efc(_0xff0bb), _0x2b52f6);
        }
        if (_0x284410(_0xff0bb)) {
          return function (_0xeeda42, _0x146bd2, _0x1ff98b, _0x36af42) {
            var _0x4fc4a2 = null;
            var _0x3201b4 = null;
            for (var _0x5b48f4 = _0x146bd2, _0x283035 = _0x146bd2 = 0, _0x137cbb = null; _0x5b48f4 !== null && _0x283035 < _0x1ff98b.length; _0x283035++) {
              if (_0x5b48f4.index > _0x283035) {
                _0x137cbb = _0x5b48f4;
                _0x5b48f4 = null;
              } else {
                _0x137cbb = _0x5b48f4.sibling;
              }
              var _0x34f3af = _0x5e1b4a(_0xeeda42, _0x5b48f4, _0x1ff98b[_0x283035], _0x36af42);
              if (_0x34f3af === null) {
                if (_0x5b48f4 === null) {
                  _0x5b48f4 = _0x137cbb;
                }
                break;
              }
              if (_0x3a0b2f && _0x5b48f4 && _0x34f3af.alternate === null) {
                _0x58dc81(_0xeeda42, _0x5b48f4);
              }
              _0x146bd2 = _0x17357f(_0x34f3af, _0x146bd2, _0x283035);
              if (_0x3201b4 === null) {
                _0x4fc4a2 = _0x34f3af;
              } else {
                _0x3201b4.sibling = _0x34f3af;
              }
              _0x3201b4 = _0x34f3af;
              _0x5b48f4 = _0x137cbb;
            }
            if (_0x283035 === _0x1ff98b.length) {
              _0x1e2f2b(_0xeeda42, _0x5b48f4);
              if (_0x823508) {
                _0x1ba706(_0xeeda42, _0x283035);
              }
              return _0x4fc4a2;
            }
            if (_0x5b48f4 === null) {
              for (; _0x283035 < _0x1ff98b.length; _0x283035++) {
                if ((_0x5b48f4 = _0x1a1c0c(_0xeeda42, _0x1ff98b[_0x283035], _0x36af42)) !== null) {
                  _0x146bd2 = _0x17357f(_0x5b48f4, _0x146bd2, _0x283035);
                  if (_0x3201b4 === null) {
                    _0x4fc4a2 = _0x5b48f4;
                  } else {
                    _0x3201b4.sibling = _0x5b48f4;
                  }
                  _0x3201b4 = _0x5b48f4;
                }
              }
              if (_0x823508) {
                _0x1ba706(_0xeeda42, _0x283035);
              }
              return _0x4fc4a2;
            }
            for (_0x5b48f4 = _0x1646bf(_0x5b48f4); _0x283035 < _0x1ff98b.length; _0x283035++) {
              if ((_0x137cbb = _0x1fe4be(_0x5b48f4, _0xeeda42, _0x283035, _0x1ff98b[_0x283035], _0x36af42)) !== null) {
                if (_0x3a0b2f && _0x137cbb.alternate !== null) {
                  _0x5b48f4.delete(_0x137cbb.key === null ? _0x283035 : _0x137cbb.key);
                }
                _0x146bd2 = _0x17357f(_0x137cbb, _0x146bd2, _0x283035);
                if (_0x3201b4 === null) {
                  _0x4fc4a2 = _0x137cbb;
                } else {
                  _0x3201b4.sibling = _0x137cbb;
                }
                _0x3201b4 = _0x137cbb;
              }
            }
            if (_0x3a0b2f) {
              _0x5b48f4.forEach(function (_0x276ff3) {
                return _0x58dc81(_0xeeda42, _0x276ff3);
              });
            }
            if (_0x823508) {
              _0x1ba706(_0xeeda42, _0x283035);
            }
            return _0x4fc4a2;
          }(_0x4fdb09, _0x2fac34, _0xff0bb, _0x2b52f6);
        }
        if (_0x2becc5(_0xff0bb)) {
          if (typeof (_0x22445f = _0x2becc5(_0xff0bb)) != "function") {
            throw Error(_0x34c7b9(150));
          }
          return function (_0x53fa21, _0x1a63c5, _0x257887, _0xe6f077) {
            if (_0x257887 == null) {
              throw Error(_0x34c7b9(151));
            }
            var _0x3b6f73 = null;
            var _0x3e1374 = null;
            for (var _0x1c3802 = _0x1a63c5, _0x1a8dd5 = _0x1a63c5 = 0, _0x5c6a1a = null, _0x4860a5 = _0x257887.next(); _0x1c3802 !== null && !_0x4860a5.done; _0x1a8dd5++, _0x4860a5 = _0x257887.next()) {
              if (_0x1c3802.index > _0x1a8dd5) {
                _0x5c6a1a = _0x1c3802;
                _0x1c3802 = null;
              } else {
                _0x5c6a1a = _0x1c3802.sibling;
              }
              var _0x394239 = _0x5e1b4a(_0x53fa21, _0x1c3802, _0x4860a5.value, _0xe6f077);
              if (_0x394239 === null) {
                if (_0x1c3802 === null) {
                  _0x1c3802 = _0x5c6a1a;
                }
                break;
              }
              if (_0x3a0b2f && _0x1c3802 && _0x394239.alternate === null) {
                _0x58dc81(_0x53fa21, _0x1c3802);
              }
              _0x1a63c5 = _0x17357f(_0x394239, _0x1a63c5, _0x1a8dd5);
              if (_0x3e1374 === null) {
                _0x3b6f73 = _0x394239;
              } else {
                _0x3e1374.sibling = _0x394239;
              }
              _0x3e1374 = _0x394239;
              _0x1c3802 = _0x5c6a1a;
            }
            if (_0x4860a5.done) {
              _0x1e2f2b(_0x53fa21, _0x1c3802);
              if (_0x823508) {
                _0x1ba706(_0x53fa21, _0x1a8dd5);
              }
              return _0x3b6f73;
            }
            if (_0x1c3802 === null) {
              for (; !_0x4860a5.done; _0x1a8dd5++, _0x4860a5 = _0x257887.next()) {
                if ((_0x4860a5 = _0x1a1c0c(_0x53fa21, _0x4860a5.value, _0xe6f077)) !== null) {
                  _0x1a63c5 = _0x17357f(_0x4860a5, _0x1a63c5, _0x1a8dd5);
                  if (_0x3e1374 === null) {
                    _0x3b6f73 = _0x4860a5;
                  } else {
                    _0x3e1374.sibling = _0x4860a5;
                  }
                  _0x3e1374 = _0x4860a5;
                }
              }
              if (_0x823508) {
                _0x1ba706(_0x53fa21, _0x1a8dd5);
              }
              return _0x3b6f73;
            }
            for (_0x1c3802 = _0x1646bf(_0x1c3802); !_0x4860a5.done; _0x1a8dd5++, _0x4860a5 = _0x257887.next()) {
              if ((_0x4860a5 = _0x1fe4be(_0x1c3802, _0x53fa21, _0x1a8dd5, _0x4860a5.value, _0xe6f077)) !== null) {
                if (_0x3a0b2f && _0x4860a5.alternate !== null) {
                  _0x1c3802.delete(_0x4860a5.key === null ? _0x1a8dd5 : _0x4860a5.key);
                }
                _0x1a63c5 = _0x17357f(_0x4860a5, _0x1a63c5, _0x1a8dd5);
                if (_0x3e1374 === null) {
                  _0x3b6f73 = _0x4860a5;
                } else {
                  _0x3e1374.sibling = _0x4860a5;
                }
                _0x3e1374 = _0x4860a5;
              }
            }
            if (_0x3a0b2f) {
              _0x1c3802.forEach(function (_0x2aa237) {
                return _0x58dc81(_0x53fa21, _0x2aa237);
              });
            }
            if (_0x823508) {
              _0x1ba706(_0x53fa21, _0x1a8dd5);
            }
            return _0x3b6f73;
          }(_0x4fdb09, _0x2fac34, _0xff0bb = _0x22445f.call(_0xff0bb), _0x2b52f6);
        }
        if (typeof _0xff0bb.then == "function") {
          return _0x126fab(_0x4fdb09, _0x2fac34, _0x548770(_0xff0bb), _0x2b52f6);
        }
        if (_0xff0bb.$$typeof === _0x147ad0) {
          return _0x126fab(_0x4fdb09, _0x2fac34, _0xc3ed50(_0x4fdb09, _0xff0bb), _0x2b52f6);
        }
        _0x2158cc(_0x4fdb09, _0xff0bb);
      }
      if (typeof _0xff0bb == "string" && _0xff0bb !== "" || typeof _0xff0bb == "number" || typeof _0xff0bb == "bigint") {
        _0xff0bb = "" + _0xff0bb;
        if (_0x2fac34 !== null && _0x2fac34.tag === 6) {
          _0x1e2f2b(_0x4fdb09, _0x2fac34.sibling);
          (_0x2b52f6 = _0x56d56d(_0x2fac34, _0xff0bb)).return = _0x4fdb09;
          _0x4fdb09 = _0x2b52f6;
        } else {
          _0x1e2f2b(_0x4fdb09, _0x2fac34);
          (_0x2b52f6 = _0x4f090d(_0xff0bb, _0x4fdb09.mode, _0x2b52f6)).return = _0x4fdb09;
          _0x4fdb09 = _0x2b52f6;
        }
        return _0x98c293(_0x4fdb09);
      } else {
        return _0x1e2f2b(_0x4fdb09, _0x2fac34);
      }
    }
    return function (_0x22bf83, _0xe7df7d, _0x5a8208, _0x154ee0) {
      try {
        _0x553183 = 0;
        var _0x473b6d = _0x126fab(_0x22bf83, _0xe7df7d, _0x5a8208, _0x154ee0);
        _0x502a54 = null;
        return _0x473b6d;
      } catch (_0x4dbfaa) {
        if (_0x4dbfaa === _0x29ca49 || _0x4dbfaa === _0x302451) {
          throw _0x4dbfaa;
        }
        var _0x4dca10 = _0x147223(29, _0x4dbfaa, null, _0x22bf83.mode);
        _0x4dca10.lanes = _0x154ee0;
        _0x4dca10.return = _0x22bf83;
        return _0x4dca10;
      }
    };
  }
  var _0x121aab = _0x1cbad1(true);
  var _0x435a73 = _0x1cbad1(false);
  var _0x4b8682 = false;
  function _0x2d0933(_0x5cf35b) {
    _0x5cf35b.updateQueue = {
      baseState: _0x5cf35b.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function _0x5bde88(_0x6be04e, _0x2fc1da) {
    _0x6be04e = _0x6be04e.updateQueue;
    if (_0x2fc1da.updateQueue === _0x6be04e) {
      _0x2fc1da.updateQueue = {
        baseState: _0x6be04e.baseState,
        firstBaseUpdate: _0x6be04e.firstBaseUpdate,
        lastBaseUpdate: _0x6be04e.lastBaseUpdate,
        shared: _0x6be04e.shared,
        callbacks: null
      };
    }
  }
  function _0x230e95(_0x5c69bb) {
    return {
      lane: _0x5c69bb,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function _0xe5f4cf(_0x3ce5ad, _0x14dfa7, _0x472f21) {
    var _0x4a1a10 = _0x3ce5ad.updateQueue;
    if (_0x4a1a10 === null) {
      return null;
    }
    _0x4a1a10 = _0x4a1a10.shared;
    if (_0x21d2ba & 2) {
      var _0x2ad103 = _0x4a1a10.pending;
      if (_0x2ad103 === null) {
        _0x14dfa7.next = _0x14dfa7;
      } else {
        _0x14dfa7.next = _0x2ad103.next;
        _0x2ad103.next = _0x14dfa7;
      }
      _0x4a1a10.pending = _0x14dfa7;
      _0x14dfa7 = _0x102d93(_0x3ce5ad);
      _0x5414b3(_0x3ce5ad, null, _0x472f21);
      return _0x14dfa7;
    }
    _0x5db47d(_0x3ce5ad, _0x4a1a10, _0x14dfa7, _0x472f21);
    return _0x102d93(_0x3ce5ad);
  }
  function _0x3cf5de(_0x4b9608, _0x525f39, _0xf2edcd) {
    if ((_0x525f39 = _0x525f39.updateQueue) !== null && (_0x525f39 = _0x525f39.shared, _0xf2edcd & 4194048)) {
      var _0x46f188 = _0x525f39.lanes;
      _0xf2edcd |= _0x46f188 &= _0x4b9608.pendingLanes;
      _0x525f39.lanes = _0xf2edcd;
      _0xbfe3ba(_0x4b9608, _0xf2edcd);
    }
  }
  function _0x246e54(_0x3502de, _0x514106) {
    var _0x19fb1f = _0x3502de.updateQueue;
    var _0x1c259c = _0x3502de.alternate;
    if (_0x1c259c !== null && _0x19fb1f === (_0x1c259c = _0x1c259c.updateQueue)) {
      var _0x489229 = null;
      var _0x340b79 = null;
      if ((_0x19fb1f = _0x19fb1f.firstBaseUpdate) !== null) {
        do {
          var _0x1d8092 = {
            lane: _0x19fb1f.lane,
            tag: _0x19fb1f.tag,
            payload: _0x19fb1f.payload,
            callback: null,
            next: null
          };
          if (_0x340b79 === null) {
            _0x489229 = _0x340b79 = _0x1d8092;
          } else {
            _0x340b79 = _0x340b79.next = _0x1d8092;
          }
          _0x19fb1f = _0x19fb1f.next;
        } while (_0x19fb1f !== null);
        if (_0x340b79 === null) {
          _0x489229 = _0x340b79 = _0x514106;
        } else {
          _0x340b79 = _0x340b79.next = _0x514106;
        }
      } else {
        _0x489229 = _0x340b79 = _0x514106;
      }
      _0x19fb1f = {
        baseState: _0x1c259c.baseState,
        firstBaseUpdate: _0x489229,
        lastBaseUpdate: _0x340b79,
        shared: _0x1c259c.shared,
        callbacks: _0x1c259c.callbacks
      };
      _0x3502de.updateQueue = _0x19fb1f;
      return;
    }
    if ((_0x3502de = _0x19fb1f.lastBaseUpdate) === null) {
      _0x19fb1f.firstBaseUpdate = _0x514106;
    } else {
      _0x3502de.next = _0x514106;
    }
    _0x19fb1f.lastBaseUpdate = _0x514106;
  }
  var _0xef412f = false;
  function _0x3fdcc4() {
    if (_0xef412f && _0x452d8a !== null) {
      throw _0x452d8a;
    }
  }
  function _0x4d991b(_0x45d379, _0x4e931f, _0x58d5fb, _0x1d45f9) {
    _0xef412f = false;
    var _0x450af2 = _0x45d379.updateQueue;
    _0x4b8682 = false;
    var _0x36dcfc = _0x450af2.firstBaseUpdate;
    var _0x5f0752 = _0x450af2.lastBaseUpdate;
    var _0x57bdbe = _0x450af2.shared.pending;
    if (_0x57bdbe !== null) {
      _0x450af2.shared.pending = null;
      var _0x4ab720 = _0x57bdbe;
      var _0x85a768 = _0x4ab720.next;
      _0x4ab720.next = null;
      if (_0x5f0752 === null) {
        _0x36dcfc = _0x85a768;
      } else {
        _0x5f0752.next = _0x85a768;
      }
      _0x5f0752 = _0x4ab720;
      var _0xa0bdf = _0x45d379.alternate;
      if (_0xa0bdf !== null && (_0x57bdbe = (_0xa0bdf = _0xa0bdf.updateQueue).lastBaseUpdate) !== _0x5f0752) {
        if (_0x57bdbe === null) {
          _0xa0bdf.firstBaseUpdate = _0x85a768;
        } else {
          _0x57bdbe.next = _0x85a768;
        }
        _0xa0bdf.lastBaseUpdate = _0x4ab720;
      }
    }
    if (_0x36dcfc !== null) {
      var _0x255b97 = _0x450af2.baseState;
      _0x5f0752 = 0;
      _0xa0bdf = _0x85a768 = _0x4ab720 = null;
      _0x57bdbe = _0x36dcfc;
      while (true) {
        var _0x5701f7 = _0x57bdbe.lane & -536870913;
        var _0x5b19cf = _0x5701f7 !== _0x57bdbe.lane;
        if (_0x5b19cf ? (_0x325084 & _0x5701f7) === _0x5701f7 : (_0x1d45f9 & _0x5701f7) === _0x5701f7) {
          if (_0x5701f7 !== 0 && _0x5701f7 === _0x28fcfb) {
            _0xef412f = true;
          }
          if (_0xa0bdf !== null) {
            _0xa0bdf = _0xa0bdf.next = {
              lane: 0,
              tag: _0x57bdbe.tag,
              payload: _0x57bdbe.payload,
              callback: null,
              next: null
            };
          }
          _0x38490e: {
            var _0x4ad5bd = _0x45d379;
            var _0x59edd5 = _0x57bdbe;
            _0x5701f7 = _0x4e931f;
            var _0x1ea192 = _0x58d5fb;
            switch (_0x59edd5.tag) {
              case 1:
                if (typeof (_0x4ad5bd = _0x59edd5.payload) == "function") {
                  _0x255b97 = _0x4ad5bd.call(_0x1ea192, _0x255b97, _0x5701f7);
                  break _0x38490e;
                }
                _0x255b97 = _0x4ad5bd;
                break _0x38490e;
              case 3:
                _0x4ad5bd.flags = _0x4ad5bd.flags & -65537 | 128;
              case 0:
                if ((_0x5701f7 = typeof (_0x4ad5bd = _0x59edd5.payload) == "function" ? _0x4ad5bd.call(_0x1ea192, _0x255b97, _0x5701f7) : _0x4ad5bd) == null) {
                  break _0x38490e;
                }
                _0x255b97 = _0x15c004({}, _0x255b97, _0x5701f7);
                break _0x38490e;
              case 2:
                _0x4b8682 = true;
            }
          }
          if ((_0x5701f7 = _0x57bdbe.callback) !== null) {
            _0x45d379.flags |= 64;
            if (_0x5b19cf) {
              _0x45d379.flags |= 8192;
            }
            if ((_0x5b19cf = _0x450af2.callbacks) === null) {
              _0x450af2.callbacks = [_0x5701f7];
            } else {
              _0x5b19cf.push(_0x5701f7);
            }
          }
        } else {
          _0x5b19cf = {
            lane: _0x5701f7,
            tag: _0x57bdbe.tag,
            payload: _0x57bdbe.payload,
            callback: _0x57bdbe.callback,
            next: null
          };
          if (_0xa0bdf === null) {
            _0x85a768 = _0xa0bdf = _0x5b19cf;
            _0x4ab720 = _0x255b97;
          } else {
            _0xa0bdf = _0xa0bdf.next = _0x5b19cf;
          }
          _0x5f0752 |= _0x5701f7;
        }
        if ((_0x57bdbe = _0x57bdbe.next) === null) {
          if ((_0x57bdbe = _0x450af2.shared.pending) === null) {
            break;
          }
          _0x57bdbe = (_0x5b19cf = _0x57bdbe).next;
          _0x5b19cf.next = null;
          _0x450af2.lastBaseUpdate = _0x5b19cf;
          _0x450af2.shared.pending = null;
        }
      }
      if (_0xa0bdf === null) {
        _0x4ab720 = _0x255b97;
      }
      _0x450af2.baseState = _0x4ab720;
      _0x450af2.firstBaseUpdate = _0x85a768;
      _0x450af2.lastBaseUpdate = _0xa0bdf;
      if (_0x36dcfc === null) {
        _0x450af2.shared.lanes = 0;
      }
      _0x1a001f |= _0x5f0752;
      _0x45d379.lanes = _0x5f0752;
      _0x45d379.memoizedState = _0x255b97;
    }
  }
  function _0x20c4bc(_0x32bee9, _0x42699a) {
    if (typeof _0x32bee9 != "function") {
      throw Error(_0x34c7b9(191, _0x32bee9));
    }
    _0x32bee9.call(_0x42699a);
  }
  function _0x1af99e(_0x527b03, _0x57aba4) {
    var _0x54ffc6 = _0x527b03.callbacks;
    if (_0x54ffc6 !== null) {
      _0x527b03.callbacks = null;
      _0x527b03 = 0;
      for (; _0x527b03 < _0x54ffc6.length; _0x527b03++) {
        _0x20c4bc(_0x54ffc6[_0x527b03], _0x57aba4);
      }
    }
  }
  var _0x2f51ce = _0x2d2885(null);
  var _0x593aa = _0x2d2885(0);
  function _0x56113a(_0xa868ab, _0x9fd135) {
    _0x45c6e5(_0x593aa, _0xa868ab = _0x226a4f);
    _0x45c6e5(_0x2f51ce, _0x9fd135);
    _0x226a4f = _0xa868ab | _0x9fd135.baseLanes;
  }
  function _0x3aefb8() {
    _0x45c6e5(_0x593aa, _0x226a4f);
    _0x45c6e5(_0x2f51ce, _0x2f51ce.current);
  }
  function _0x46bb4b() {
    _0x226a4f = _0x593aa.current;
    _0x20fc3e(_0x2f51ce);
    _0x20fc3e(_0x593aa);
  }
  var _0x299787 = _0x2d2885(null);
  var _0x254b41 = null;
  function _0x3a5835(_0x41efad) {
    var _0x4b078c = _0x41efad.alternate;
    _0x45c6e5(_0xbb0582, _0xbb0582.current & 1);
    _0x45c6e5(_0x299787, _0x41efad);
    if (_0x254b41 === null && (_0x4b078c === null || _0x2f51ce.current !== null || _0x4b078c.memoizedState !== null)) {
      _0x254b41 = _0x41efad;
    }
  }
  function _0x3bbe64(_0x2abacc) {
    _0x45c6e5(_0xbb0582, _0xbb0582.current);
    _0x45c6e5(_0x299787, _0x2abacc);
    if (_0x254b41 === null) {
      _0x254b41 = _0x2abacc;
    }
  }
  function _0x52ef84(_0x24c93d) {
    if (_0x24c93d.tag === 22) {
      _0x45c6e5(_0xbb0582, _0xbb0582.current);
      _0x45c6e5(_0x299787, _0x24c93d);
      if (_0x254b41 === null) {
        _0x254b41 = _0x24c93d;
      }
    } else {
      _0x511f4e();
    }
  }
  function _0x511f4e() {
    _0x45c6e5(_0xbb0582, _0xbb0582.current);
    _0x45c6e5(_0x299787, _0x299787.current);
  }
  function _0x15b585(_0xc50ea0) {
    _0x20fc3e(_0x299787);
    if (_0x254b41 === _0xc50ea0) {
      _0x254b41 = null;
    }
    _0x20fc3e(_0xbb0582);
  }
  var _0xbb0582 = _0x2d2885(0);
  function _0x1930a4(_0x4c08ea) {
    for (var _0x14f8ae = _0x4c08ea; _0x14f8ae !== null;) {
      if (_0x14f8ae.tag === 13) {
        var _0x1e3aae = _0x14f8ae.memoizedState;
        if (_0x1e3aae !== null && ((_0x1e3aae = _0x1e3aae.dehydrated) === null || _0x5e355f(_0x1e3aae) || _0x2a5706(_0x1e3aae))) {
          return _0x14f8ae;
        }
      } else if (_0x14f8ae.tag !== 19 || _0x14f8ae.memoizedProps.revealOrder !== "forwards" && _0x14f8ae.memoizedProps.revealOrder !== "backwards" && _0x14f8ae.memoizedProps.revealOrder !== "unstable_legacy-backwards" && _0x14f8ae.memoizedProps.revealOrder !== "together") {
        if (_0x14f8ae.child !== null) {
          _0x14f8ae.child.return = _0x14f8ae;
          _0x14f8ae = _0x14f8ae.child;
          continue;
        }
      } else if (_0x14f8ae.flags & 128) {
        return _0x14f8ae;
      }
      if (_0x14f8ae === _0x4c08ea) {
        break;
      }
      while (_0x14f8ae.sibling === null) {
        if (_0x14f8ae.return === null || _0x14f8ae.return === _0x4c08ea) {
          return null;
        }
        _0x14f8ae = _0x14f8ae.return;
      }
      _0x14f8ae.sibling.return = _0x14f8ae.return;
      _0x14f8ae = _0x14f8ae.sibling;
    }
    return null;
  }
  var _0x3c2b6c = 0;
  var _0x4ddeb9 = null;
  var _0x148f31 = null;
  var _0xa14c29 = null;
  var _0x2bc8d4 = false;
  var _0x22c70c = false;
  var _0x5336fd = false;
  var _0x65b549 = 0;
  var _0x3445c4 = 0;
  var _0x140112 = null;
  var _0x32e682 = 0;
  function _0x338a34() {
    throw Error(_0x34c7b9(321));
  }
  function _0x36e557(_0x4193f0, _0x4736ad) {
    if (_0x4736ad === null) {
      return false;
    }
    for (var _0x1a67af = 0; _0x1a67af < _0x4736ad.length && _0x1a67af < _0x4193f0.length; _0x1a67af++) {
      if (!_0x1e5abc(_0x4193f0[_0x1a67af], _0x4736ad[_0x1a67af])) {
        return false;
      }
    }
    return true;
  }
  function _0x2b1eff(_0x12158c, _0x585cce, _0x3f120c, _0xb7d69a, _0x482a5a, _0x20ef6b) {
    _0x3c2b6c = _0x20ef6b;
    _0x4ddeb9 = _0x585cce;
    _0x585cce.memoizedState = null;
    _0x585cce.updateQueue = null;
    _0x585cce.lanes = 0;
    _0x30149d.H = _0x12158c === null || _0x12158c.memoizedState === null ? _0x4eb141 : _0x46f59c;
    _0x5336fd = false;
    _0x20ef6b = _0x3f120c(_0xb7d69a, _0x482a5a);
    _0x5336fd = false;
    if (_0x22c70c) {
      _0x20ef6b = _0xf572ac(_0x585cce, _0x3f120c, _0xb7d69a, _0x482a5a);
    }
    _0x31b98f(_0x12158c);
    return _0x20ef6b;
  }
  function _0x31b98f(_0x488e19) {
    _0x30149d.H = _0x243362;
    var _0x489251 = _0x148f31 !== null && _0x148f31.next !== null;
    _0x3c2b6c = 0;
    _0xa14c29 = _0x148f31 = _0x4ddeb9 = null;
    _0x2bc8d4 = false;
    _0x3445c4 = 0;
    _0x140112 = null;
    if (_0x489251) {
      throw Error(_0x34c7b9(300));
    }
    if (_0x488e19 !== null && !_0x448eaf) {
      if ((_0x488e19 = _0x488e19.dependencies) !== null && _0x586fd9(_0x488e19)) {
        _0x448eaf = true;
      }
    }
  }
  function _0xf572ac(_0x18b324, _0x7cb2a5, _0x5c3243, _0x51a0b8) {
    _0x4ddeb9 = _0x18b324;
    var _0x48ca2f = 0;
    do {
      if (_0x22c70c) {
        _0x140112 = null;
      }
      _0x3445c4 = 0;
      _0x22c70c = false;
      if (_0x48ca2f >= 25) {
        throw Error(_0x34c7b9(301));
      }
      _0x48ca2f += 1;
      _0xa14c29 = _0x148f31 = null;
      if (_0x18b324.updateQueue != null) {
        var _0x511152 = _0x18b324.updateQueue;
        _0x511152.lastEffect = null;
        _0x511152.events = null;
        _0x511152.stores = null;
        if (_0x511152.memoCache != null) {
          _0x511152.memoCache.index = 0;
        }
      }
      _0x30149d.H = _0x4a5d96;
      _0x511152 = _0x7cb2a5(_0x5c3243, _0x51a0b8);
    } while (_0x22c70c);
    return _0x511152;
  }
  function _0x43aa70() {
    var _0x4c233f = _0x30149d.H;
    var _0x4f2990 = _0x4c233f.useState()[0];
    _0x4f2990 = typeof _0x4f2990.then == "function" ? _0x2fc80b(_0x4f2990) : _0x4f2990;
    _0x4c233f = _0x4c233f.useState()[0];
    if ((_0x148f31 !== null ? _0x148f31.memoizedState : null) !== _0x4c233f) {
      _0x4ddeb9.flags |= 1024;
    }
    return _0x4f2990;
  }
  function _0x1755f1() {
    var _0x5a83d5 = _0x65b549 !== 0;
    _0x65b549 = 0;
    return _0x5a83d5;
  }
  function _0x51ea37(_0x2a42f3, _0x80a669, _0x21d252) {
    _0x80a669.updateQueue = _0x2a42f3.updateQueue;
    _0x80a669.flags &= -2053;
    _0x2a42f3.lanes &= ~_0x21d252;
  }
  function _0x58af93(_0x1c5f28) {
    if (_0x2bc8d4) {
      for (_0x1c5f28 = _0x1c5f28.memoizedState; _0x1c5f28 !== null;) {
        var _0x4b0b37 = _0x1c5f28.queue;
        if (_0x4b0b37 !== null) {
          _0x4b0b37.pending = null;
        }
        _0x1c5f28 = _0x1c5f28.next;
      }
      _0x2bc8d4 = false;
    }
    _0x3c2b6c = 0;
    _0xa14c29 = _0x148f31 = _0x4ddeb9 = null;
    _0x22c70c = false;
    _0x3445c4 = _0x65b549 = 0;
    _0x140112 = null;
  }
  function _0x4fd4b2() {
    var _0x422c4b = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (_0xa14c29 === null) {
      _0x4ddeb9.memoizedState = _0xa14c29 = _0x422c4b;
    } else {
      _0xa14c29 = _0xa14c29.next = _0x422c4b;
    }
    return _0xa14c29;
  }
  function _0x57d9bd() {
    if (_0x148f31 === null) {
      var _0x361b9c = _0x4ddeb9.alternate;
      _0x361b9c = _0x361b9c !== null ? _0x361b9c.memoizedState : null;
    } else {
      _0x361b9c = _0x148f31.next;
    }
    var _0x58cb56 = _0xa14c29 === null ? _0x4ddeb9.memoizedState : _0xa14c29.next;
    if (_0x58cb56 !== null) {
      _0xa14c29 = _0x58cb56;
      _0x148f31 = _0x361b9c;
    } else {
      if (_0x361b9c === null) {
        if (_0x4ddeb9.alternate === null) {
          throw Error(_0x34c7b9(467));
        }
        throw Error(_0x34c7b9(310));
      }
      _0x361b9c = {
        memoizedState: (_0x148f31 = _0x361b9c).memoizedState,
        baseState: _0x148f31.baseState,
        baseQueue: _0x148f31.baseQueue,
        queue: _0x148f31.queue,
        next: null
      };
      if (_0xa14c29 === null) {
        _0x4ddeb9.memoizedState = _0xa14c29 = _0x361b9c;
      } else {
        _0xa14c29 = _0xa14c29.next = _0x361b9c;
      }
    }
    return _0xa14c29;
  }
  function _0x2fc80b(_0x675284) {
    var _0xd38e34 = _0x3445c4;
    _0x3445c4 += 1;
    if (_0x140112 === null) {
      _0x140112 = [];
    }
    _0x675284 = _0x4bd6b1(_0x140112, _0x675284, _0xd38e34);
    _0xd38e34 = _0x4ddeb9;
    if ((_0xa14c29 === null ? _0xd38e34.memoizedState : _0xa14c29.next) === null) {
      _0xd38e34 = _0xd38e34.alternate;
      _0x30149d.H = _0xd38e34 === null || _0xd38e34.memoizedState === null ? _0x4eb141 : _0x46f59c;
    }
    return _0x675284;
  }
  function _0x514273(_0x457c60) {
    if (_0x457c60 !== null && typeof _0x457c60 == "object") {
      if (typeof _0x457c60.then == "function") {
        return _0x2fc80b(_0x457c60);
      }
      if (_0x457c60.$$typeof === _0x147ad0) {
        return _0x4d359e(_0x457c60);
      }
    }
    throw Error(_0x34c7b9(438, String(_0x457c60)));
  }
  function _0x2d5d86(_0x110a83) {
    var _0x4710ac = null;
    var _0x1f54d3 = _0x4ddeb9.updateQueue;
    if (_0x1f54d3 !== null) {
      _0x4710ac = _0x1f54d3.memoCache;
    }
    if (_0x4710ac == null) {
      var _0x24a6f6 = _0x4ddeb9.alternate;
      if (_0x24a6f6 !== null && (_0x24a6f6 = _0x24a6f6.updateQueue) !== null && (_0x24a6f6 = _0x24a6f6.memoCache) != null) {
        _0x4710ac = {
          data: _0x24a6f6.data.map(function (_0x4694ca) {
            return _0x4694ca.slice();
          }),
          index: 0
        };
      }
    }
    _0x4710ac ??= {
      data: [],
      index: 0
    };
    if (_0x1f54d3 === null) {
      _0x1f54d3 = {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
      _0x4ddeb9.updateQueue = _0x1f54d3;
    }
    _0x1f54d3.memoCache = _0x4710ac;
    if ((_0x1f54d3 = _0x4710ac.data[_0x4710ac.index]) === undefined) {
      _0x1f54d3 = _0x4710ac.data[_0x4710ac.index] = Array(_0x110a83);
      _0x24a6f6 = 0;
      for (; _0x24a6f6 < _0x110a83; _0x24a6f6++) {
        _0x1f54d3[_0x24a6f6] = _0x312705;
      }
    }
    _0x4710ac.index++;
    return _0x1f54d3;
  }
  function _0x44150c(_0x2e1e51, _0x99f5fa) {
    if (typeof _0x99f5fa == "function") {
      return _0x99f5fa(_0x2e1e51);
    } else {
      return _0x99f5fa;
    }
  }
  function _0x3ec9d0(_0x5251b9) {
    return _0x5f4442(_0x57d9bd(), _0x148f31, _0x5251b9);
  }
  function _0x5f4442(_0x5a72fe, _0x4c4adf, _0x1f62a1) {
    var _0x517dc1 = _0x5a72fe.queue;
    if (_0x517dc1 === null) {
      throw Error(_0x34c7b9(311));
    }
    _0x517dc1.lastRenderedReducer = _0x1f62a1;
    var _0x172001 = _0x5a72fe.baseQueue;
    var _0x48255c = _0x517dc1.pending;
    if (_0x48255c !== null) {
      if (_0x172001 !== null) {
        var _0x2e1d8f = _0x172001.next;
        _0x172001.next = _0x48255c.next;
        _0x48255c.next = _0x2e1d8f;
      }
      _0x4c4adf.baseQueue = _0x172001 = _0x48255c;
      _0x517dc1.pending = null;
    }
    _0x48255c = _0x5a72fe.baseState;
    if (_0x172001 === null) {
      _0x5a72fe.memoizedState = _0x48255c;
    } else {
      var _0x553801 = _0x2e1d8f = null;
      var _0x1a2f7a = null;
      var _0x24853e = _0x4c4adf = _0x172001.next;
      var _0x58b484 = false;
      do {
        var _0x40108b = _0x24853e.lane & -536870913;
        if (_0x40108b !== _0x24853e.lane ? (_0x325084 & _0x40108b) === _0x40108b : (_0x3c2b6c & _0x40108b) === _0x40108b) {
          var _0x3fc3eb = _0x24853e.revertLane;
          if (_0x3fc3eb === 0) {
            if (_0x1a2f7a !== null) {
              _0x1a2f7a = _0x1a2f7a.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: _0x24853e.action,
                hasEagerState: _0x24853e.hasEagerState,
                eagerState: _0x24853e.eagerState,
                next: null
              };
            }
            if (_0x40108b === _0x28fcfb) {
              _0x58b484 = true;
            }
          } else {
            if ((_0x3c2b6c & _0x3fc3eb) === _0x3fc3eb) {
              _0x24853e = _0x24853e.next;
              if (_0x3fc3eb === _0x28fcfb) {
                _0x58b484 = true;
              }
              continue;
            }
            _0x40108b = {
              lane: 0,
              revertLane: _0x24853e.revertLane,
              gesture: null,
              action: _0x24853e.action,
              hasEagerState: _0x24853e.hasEagerState,
              eagerState: _0x24853e.eagerState,
              next: null
            };
            if (_0x1a2f7a === null) {
              _0x553801 = _0x1a2f7a = _0x40108b;
              _0x2e1d8f = _0x48255c;
            } else {
              _0x1a2f7a = _0x1a2f7a.next = _0x40108b;
            }
            _0x4ddeb9.lanes |= _0x3fc3eb;
            _0x1a001f |= _0x3fc3eb;
          }
          _0x40108b = _0x24853e.action;
          if (_0x5336fd) {
            _0x1f62a1(_0x48255c, _0x40108b);
          }
          _0x48255c = _0x24853e.hasEagerState ? _0x24853e.eagerState : _0x1f62a1(_0x48255c, _0x40108b);
        } else {
          _0x3fc3eb = {
            lane: _0x40108b,
            revertLane: _0x24853e.revertLane,
            gesture: _0x24853e.gesture,
            action: _0x24853e.action,
            hasEagerState: _0x24853e.hasEagerState,
            eagerState: _0x24853e.eagerState,
            next: null
          };
          if (_0x1a2f7a === null) {
            _0x553801 = _0x1a2f7a = _0x3fc3eb;
            _0x2e1d8f = _0x48255c;
          } else {
            _0x1a2f7a = _0x1a2f7a.next = _0x3fc3eb;
          }
          _0x4ddeb9.lanes |= _0x40108b;
          _0x1a001f |= _0x40108b;
        }
        _0x24853e = _0x24853e.next;
      } while (_0x24853e !== null && _0x24853e !== _0x4c4adf);
      if (_0x1a2f7a === null) {
        _0x2e1d8f = _0x48255c;
      } else {
        _0x1a2f7a.next = _0x553801;
      }
      if (!_0x1e5abc(_0x48255c, _0x5a72fe.memoizedState) && (_0x448eaf = true, _0x58b484 && (_0x1f62a1 = _0x452d8a) !== null)) {
        throw _0x1f62a1;
      }
      _0x5a72fe.memoizedState = _0x48255c;
      _0x5a72fe.baseState = _0x2e1d8f;
      _0x5a72fe.baseQueue = _0x1a2f7a;
      _0x517dc1.lastRenderedState = _0x48255c;
    }
    if (_0x172001 === null) {
      _0x517dc1.lanes = 0;
    }
    return [_0x5a72fe.memoizedState, _0x517dc1.dispatch];
  }
  function _0x34cb05(_0x5beb6c) {
    var _0x1e5207 = _0x57d9bd();
    var _0x2bf477 = _0x1e5207.queue;
    if (_0x2bf477 === null) {
      throw Error(_0x34c7b9(311));
    }
    _0x2bf477.lastRenderedReducer = _0x5beb6c;
    var _0x111a5b = _0x2bf477.dispatch;
    var _0x5bb922 = _0x2bf477.pending;
    var _0x4fa0c4 = _0x1e5207.memoizedState;
    if (_0x5bb922 !== null) {
      _0x2bf477.pending = null;
      var _0x4160d8 = _0x5bb922 = _0x5bb922.next;
      do {
        _0x4fa0c4 = _0x5beb6c(_0x4fa0c4, _0x4160d8.action);
        _0x4160d8 = _0x4160d8.next;
      } while (_0x4160d8 !== _0x5bb922);
      if (!_0x1e5abc(_0x4fa0c4, _0x1e5207.memoizedState)) {
        _0x448eaf = true;
      }
      _0x1e5207.memoizedState = _0x4fa0c4;
      if (_0x1e5207.baseQueue === null) {
        _0x1e5207.baseState = _0x4fa0c4;
      }
      _0x2bf477.lastRenderedState = _0x4fa0c4;
    }
    return [_0x4fa0c4, _0x111a5b];
  }
  function _0x1667c5(_0x276d96, _0x18a87d, _0x35ab51) {
    var _0x54dd74 = _0x4ddeb9;
    var _0x1c3df6 = _0x57d9bd();
    var _0xf8075d = _0x823508;
    if (_0xf8075d) {
      if (_0x35ab51 === undefined) {
        throw Error(_0x34c7b9(407));
      }
      _0x35ab51 = _0x35ab51();
    } else {
      _0x35ab51 = _0x18a87d();
    }
    var _0x17b10e = !_0x1e5abc((_0x148f31 || _0x1c3df6).memoizedState, _0x35ab51);
    if (_0x17b10e) {
      _0x1c3df6.memoizedState = _0x35ab51;
      _0x448eaf = true;
    }
    _0x1c3df6 = _0x1c3df6.queue;
    _0x33e7e6(_0x149008.bind(null, _0x54dd74, _0x1c3df6, _0x276d96), [_0x276d96]);
    if (_0x1c3df6.getSnapshot !== _0x18a87d || _0x17b10e || _0xa14c29 !== null && _0xa14c29.memoizedState.tag & 1) {
      _0x54dd74.flags |= 2048;
      _0x51e54c(9, {
        destroy: undefined
      }, _0x50d7c1.bind(null, _0x54dd74, _0x1c3df6, _0x35ab51, _0x18a87d), null);
      if (_0x42aa40 === null) {
        throw Error(_0x34c7b9(349));
      }
      if (!_0xf8075d && !(_0x3c2b6c & 127)) {
        _0x12f608(_0x54dd74, _0x18a87d, _0x35ab51);
      }
    }
    return _0x35ab51;
  }
  function _0x12f608(_0x5eab1a, _0x3d1963, _0x132b16) {
    _0x5eab1a.flags |= 16384;
    _0x5eab1a = {
      getSnapshot: _0x3d1963,
      value: _0x132b16
    };
    if ((_0x3d1963 = _0x4ddeb9.updateQueue) === null) {
      _0x3d1963 = {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
      _0x4ddeb9.updateQueue = _0x3d1963;
      _0x3d1963.stores = [_0x5eab1a];
    } else if ((_0x132b16 = _0x3d1963.stores) === null) {
      _0x3d1963.stores = [_0x5eab1a];
    } else {
      _0x132b16.push(_0x5eab1a);
    }
  }
  function _0x50d7c1(_0x4a49ba, _0x1e44b8, _0x16dec3, _0x5c9e75) {
    _0x1e44b8.value = _0x16dec3;
    _0x1e44b8.getSnapshot = _0x5c9e75;
    if (_0x195471(_0x1e44b8)) {
      _0x17ae2e(_0x4a49ba);
    }
  }
  function _0x149008(_0x482fae, _0x195f68, _0x33b521) {
    return _0x33b521(function () {
      if (_0x195471(_0x195f68)) {
        _0x17ae2e(_0x482fae);
      }
    });
  }
  function _0x195471(_0x4a7b1f) {
    var _0x17a089 = _0x4a7b1f.getSnapshot;
    _0x4a7b1f = _0x4a7b1f.value;
    try {
      var _0xfcab9d = _0x17a089();
      return !_0x1e5abc(_0x4a7b1f, _0xfcab9d);
    } catch (_0x724c4a) {
      return true;
    }
  }
  function _0x17ae2e(_0x1fdcf6) {
    var _0x238749 = _0x2b6f8b(_0x1fdcf6, 2);
    if (_0x238749 !== null) {
      _0x3968da(_0x238749, 0, 2);
    }
  }
  function _0x2ccbe1(_0x2f216e) {
    var _0x365185 = _0x4fd4b2();
    if (typeof _0x2f216e == "function") {
      var _0x4ca354 = _0x2f216e;
      _0x2f216e = _0x4ca354();
      if (_0x5336fd) {
        _0x55c8ad(true);
        try {
          _0x4ca354();
        } finally {
          _0x55c8ad(false);
        }
      }
    }
    _0x365185.memoizedState = _0x365185.baseState = _0x2f216e;
    _0x365185.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _0x44150c,
      lastRenderedState: _0x2f216e
    };
    return _0x365185;
  }
  function _0x5b0efa(_0x2b2728, _0x3d9bd2, _0x521b2a, _0x30a9c0) {
    _0x2b2728.baseState = _0x521b2a;
    return _0x5f4442(_0x2b2728, _0x148f31, typeof _0x30a9c0 == "function" ? _0x30a9c0 : _0x44150c);
  }
  function _0x353044(_0x39bb88, _0x15a308, _0x1ebe31, _0xbdbc08, _0x21218a) {
    if (_0x3178ac(_0x39bb88)) {
      throw Error(_0x34c7b9(485));
    }
    if ((_0x39bb88 = _0x15a308.action) !== null) {
      var _0x477bba = {
        payload: _0x21218a,
        action: _0x39bb88,
        next: null,
        isTransition: true,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (_0x284f02) {
          _0x477bba.listeners.push(_0x284f02);
        }
      };
      if (_0x30149d.T !== null) {
        _0x1ebe31(true);
      } else {
        _0x477bba.isTransition = false;
      }
      _0xbdbc08(_0x477bba);
      if ((_0x1ebe31 = _0x15a308.pending) === null) {
        _0x477bba.next = _0x15a308.pending = _0x477bba;
        _0x15c0a8(_0x15a308, _0x477bba);
      } else {
        _0x477bba.next = _0x1ebe31.next;
        _0x15a308.pending = _0x1ebe31.next = _0x477bba;
      }
    }
  }
  function _0x15c0a8(_0x25d75b, _0x9154ef) {
    var _0x49cc2c = _0x9154ef.action;
    var _0x5d4259 = _0x9154ef.payload;
    var _0x8b982e = _0x25d75b.state;
    if (_0x9154ef.isTransition) {
      var _0x4c333a = _0x30149d.T;
      var _0x462c11 = {};
      _0x30149d.T = _0x462c11;
      try {
        var _0x4e9165 = _0x49cc2c(_0x8b982e, _0x5d4259);
        var _0x5c9260 = _0x30149d.S;
        if (_0x5c9260 !== null) {
          _0x5c9260(_0x462c11, _0x4e9165);
        }
        _0x43acb2(_0x25d75b, _0x9154ef, _0x4e9165);
      } catch (_0x4de4ab) {
        _0x4e3e15(_0x25d75b, _0x9154ef, _0x4de4ab);
      } finally {
        if (_0x4c333a !== null && _0x462c11.types !== null) {
          _0x4c333a.types = _0x462c11.types;
        }
        _0x30149d.T = _0x4c333a;
      }
    } else {
      try {
        _0x43acb2(_0x25d75b, _0x9154ef, _0x4c333a = _0x49cc2c(_0x8b982e, _0x5d4259));
      } catch (_0x3de754) {
        _0x4e3e15(_0x25d75b, _0x9154ef, _0x3de754);
      }
    }
  }
  function _0x43acb2(_0x581eab, _0x14a8ff, _0x3de5ad) {
    if (_0x3de5ad !== null && typeof _0x3de5ad == "object" && typeof _0x3de5ad.then == "function") {
      _0x3de5ad.then(function (_0x4bfb43) {
        _0x3191b0(_0x581eab, _0x14a8ff, _0x4bfb43);
      }, function (_0x5a1c52) {
        return _0x4e3e15(_0x581eab, _0x14a8ff, _0x5a1c52);
      });
    } else {
      _0x3191b0(_0x581eab, _0x14a8ff, _0x3de5ad);
    }
  }
  function _0x3191b0(_0x21654, _0x421e93, _0x5cdef9) {
    _0x421e93.status = "fulfilled";
    _0x421e93.value = _0x5cdef9;
    _0x16ce85(_0x421e93);
    _0x21654.state = _0x5cdef9;
    if ((_0x421e93 = _0x21654.pending) !== null) {
      if ((_0x5cdef9 = _0x421e93.next) === _0x421e93) {
        _0x21654.pending = null;
      } else {
        _0x5cdef9 = _0x5cdef9.next;
        _0x421e93.next = _0x5cdef9;
        _0x15c0a8(_0x21654, _0x5cdef9);
      }
    }
  }
  function _0x4e3e15(_0x233746, _0x522d4b, _0x26bf78) {
    var _0x57ebe8 = _0x233746.pending;
    _0x233746.pending = null;
    if (_0x57ebe8 !== null) {
      _0x57ebe8 = _0x57ebe8.next;
      do {
        _0x522d4b.status = "rejected";
        _0x522d4b.reason = _0x26bf78;
        _0x16ce85(_0x522d4b);
        _0x522d4b = _0x522d4b.next;
      } while (_0x522d4b !== _0x57ebe8);
    }
    _0x233746.action = null;
  }
  function _0x16ce85(_0x5323f0) {
    _0x5323f0 = _0x5323f0.listeners;
    for (var _0x1a1bbe = 0; _0x1a1bbe < _0x5323f0.length; _0x1a1bbe++) {
      (0, _0x5323f0[_0x1a1bbe])();
    }
  }
  function _0x2fdd59(_0x5300ab, _0x2f45af) {
    return _0x2f45af;
  }
  function _0xa77dbe(_0x3cac5d, _0xbd0b03) {
    if (_0x823508) {
      var _0x14839f = _0x42aa40.formState;
      if (_0x14839f !== null) {
        _0x1b9b9d: {
          var _0x2f2ea5 = _0x4ddeb9;
          if (_0x823508) {
            if (_0x57de98) {
              _0x3111ee: {
                for (var _0xf38bc = _0x57de98, _0x322741 = _0x6462e2; _0xf38bc.nodeType !== 8;) {
                  if (!_0x322741) {
                    _0xf38bc = null;
                    break _0x3111ee;
                  }
                  if ((_0xf38bc = _0x45f4a9(_0xf38bc.nextSibling)) === null) {
                    _0xf38bc = null;
                    break _0x3111ee;
                  }
                }
                _0xf38bc = (_0x322741 = _0xf38bc.data) === "F!" || _0x322741 === "F" ? _0xf38bc : null;
              }
              if (_0xf38bc) {
                _0x57de98 = _0x45f4a9(_0xf38bc.nextSibling);
                _0x2f2ea5 = _0xf38bc.data === "F!";
                break _0x1b9b9d;
              }
            }
            _0x4f1a46(_0x2f2ea5);
          }
          _0x2f2ea5 = false;
        }
        if (_0x2f2ea5) {
          _0xbd0b03 = _0x14839f[0];
        }
      }
    }
    (_0x14839f = _0x4fd4b2()).memoizedState = _0x14839f.baseState = _0xbd0b03;
    _0x2f2ea5 = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _0x2fdd59,
      lastRenderedState: _0xbd0b03
    };
    _0x14839f.queue = _0x2f2ea5;
    _0x14839f = _0x3f49bb.bind(null, _0x4ddeb9, _0x2f2ea5);
    _0x2f2ea5.dispatch = _0x14839f;
    _0x2f2ea5 = _0x2ccbe1(false);
    _0x322741 = _0x4bb94f.bind(null, _0x4ddeb9, false, _0x2f2ea5.queue);
    _0xf38bc = {
      state: _0xbd0b03,
      dispatch: null,
      action: _0x3cac5d,
      pending: null
    };
    (_0x2f2ea5 = _0x4fd4b2()).queue = _0xf38bc;
    _0x14839f = _0x353044.bind(null, _0x4ddeb9, _0xf38bc, _0x322741, _0x14839f);
    _0xf38bc.dispatch = _0x14839f;
    _0x2f2ea5.memoizedState = _0x3cac5d;
    return [_0xbd0b03, _0x14839f, false];
  }
  function _0xfc6be0(_0x52221a) {
    return _0x1ba2e2(_0x57d9bd(), _0x148f31, _0x52221a);
  }
  function _0x1ba2e2(_0x59ef9a, _0x3bbf6b, _0x1c0234) {
    _0x3bbf6b = _0x5f4442(_0x59ef9a, _0x3bbf6b, _0x2fdd59)[0];
    _0x59ef9a = _0x3ec9d0(_0x44150c)[0];
    if (typeof _0x3bbf6b == "object" && _0x3bbf6b !== null && typeof _0x3bbf6b.then == "function") {
      try {
        var _0x3fb01d = _0x2fc80b(_0x3bbf6b);
      } catch (_0x172862) {
        if (_0x172862 === _0x29ca49) {
          throw _0x302451;
        }
        throw _0x172862;
      }
    } else {
      _0x3fb01d = _0x3bbf6b;
    }
    var _0x2257e9 = (_0x3bbf6b = _0x57d9bd()).queue;
    var _0x58324e = _0x2257e9.dispatch;
    if (_0x1c0234 !== _0x3bbf6b.memoizedState) {
      _0x4ddeb9.flags |= 2048;
      _0x51e54c(9, {
        destroy: undefined
      }, _0x15a2d1.bind(null, _0x2257e9, _0x1c0234), null);
    }
    return [_0x3fb01d, _0x58324e, _0x59ef9a];
  }
  function _0x15a2d1(_0x1f906f, _0x66b5bc) {
    _0x1f906f.action = _0x66b5bc;
  }
  function _0x4f0c9b(_0x461b24) {
    var _0x15de37 = _0x57d9bd();
    var _0x3e8248 = _0x148f31;
    if (_0x3e8248 !== null) {
      return _0x1ba2e2(_0x15de37, _0x3e8248, _0x461b24);
    }
    _0x57d9bd();
    _0x15de37 = _0x15de37.memoizedState;
    var _0x2168e5 = (_0x3e8248 = _0x57d9bd()).queue.dispatch;
    _0x3e8248.memoizedState = _0x461b24;
    return [_0x15de37, _0x2168e5, false];
  }
  function _0x51e54c(_0x1c8489, _0x3e4d74, _0x16bb50, _0x5d436d) {
    _0x1c8489 = {
      tag: _0x1c8489,
      create: _0x16bb50,
      deps: _0x5d436d,
      inst: _0x3e4d74,
      next: null
    };
    if ((_0x3e4d74 = _0x4ddeb9.updateQueue) === null) {
      _0x3e4d74 = {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
      _0x4ddeb9.updateQueue = _0x3e4d74;
    }
    if ((_0x16bb50 = _0x3e4d74.lastEffect) === null) {
      _0x3e4d74.lastEffect = _0x1c8489.next = _0x1c8489;
    } else {
      _0x5d436d = _0x16bb50.next;
      _0x16bb50.next = _0x1c8489;
      _0x1c8489.next = _0x5d436d;
      _0x3e4d74.lastEffect = _0x1c8489;
    }
    return _0x1c8489;
  }
  function _0x49ee27() {
    return _0x57d9bd().memoizedState;
  }
  function _0x1375e3(_0xea789, _0x3fb185, _0x34e176, _0x47e376) {
    var _0x1e13bb = _0x4fd4b2();
    _0x4ddeb9.flags |= _0xea789;
    _0x1e13bb.memoizedState = _0x51e54c(_0x3fb185 | 1, {
      destroy: undefined
    }, _0x34e176, _0x47e376 === undefined ? null : _0x47e376);
  }
  function _0x3dae35(_0x2c64fa, _0x1bccbd, _0x29555d, _0x1431ab) {
    var _0x505f4e = _0x57d9bd();
    _0x1431ab = _0x1431ab === undefined ? null : _0x1431ab;
    var _0x1cc168 = _0x505f4e.memoizedState.inst;
    if (_0x148f31 !== null && _0x1431ab !== null && _0x36e557(_0x1431ab, _0x148f31.memoizedState.deps)) {
      _0x505f4e.memoizedState = _0x51e54c(_0x1bccbd, _0x1cc168, _0x29555d, _0x1431ab);
    } else {
      _0x4ddeb9.flags |= _0x2c64fa;
      _0x505f4e.memoizedState = _0x51e54c(_0x1bccbd | 1, _0x1cc168, _0x29555d, _0x1431ab);
    }
  }
  function _0x25794d(_0x2fbc79, _0x22b88d) {
    _0x1375e3(8390656, 8, _0x2fbc79, _0x22b88d);
  }
  function _0x33e7e6(_0x14bb40, _0x3a935c) {
    _0x3dae35(2048, 8, _0x14bb40, _0x3a935c);
  }
  function _0x20cb21(_0xe3c9ed) {
    var _0x154b04 = _0x57d9bd().memoizedState;
    (function (_0x3dbf08) {
      _0x4ddeb9.flags |= 4;
      var _0x37475b = _0x4ddeb9.updateQueue;
      if (_0x37475b === null) {
        _0x37475b = {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null
        };
        _0x4ddeb9.updateQueue = _0x37475b;
        _0x37475b.events = [_0x3dbf08];
      } else {
        var _0x24b9d8 = _0x37475b.events;
        if (_0x24b9d8 === null) {
          _0x37475b.events = [_0x3dbf08];
        } else {
          _0x24b9d8.push(_0x3dbf08);
        }
      }
    })({
      ref: _0x154b04,
      nextImpl: _0xe3c9ed
    });
    return function () {
      if (_0x21d2ba & 2) {
        throw Error(_0x34c7b9(440));
      }
      return _0x154b04.impl.apply(undefined, arguments);
    };
  }
  function _0x43b7f1(_0x4b2ce0, _0x472752) {
    return _0x3dae35(4, 2, _0x4b2ce0, _0x472752);
  }
  function _0x21430a(_0x312733, _0x156f8d) {
    return _0x3dae35(4, 4, _0x312733, _0x156f8d);
  }
  function _0x2b5eaa(_0x380252, _0x1a15d7) {
    if (typeof _0x1a15d7 == "function") {
      _0x380252 = _0x380252();
      var _0x5fb35e = _0x1a15d7(_0x380252);
      return function () {
        if (typeof _0x5fb35e == "function") {
          _0x5fb35e();
        } else {
          _0x1a15d7(null);
        }
      };
    }
    if (_0x1a15d7 != null) {
      _0x380252 = _0x380252();
      _0x1a15d7.current = _0x380252;
      return function () {
        _0x1a15d7.current = null;
      };
    }
  }
  function _0x47547c(_0x908dee, _0x11e5bc, _0x12defc) {
    _0x12defc = _0x12defc != null ? _0x12defc.concat([_0x908dee]) : null;
    _0x3dae35(4, 4, _0x2b5eaa.bind(null, _0x11e5bc, _0x908dee), _0x12defc);
  }
  function _0x4034b5() {}
  function _0x24f61c(_0x1d25d2, _0x19947f) {
    var _0xff1ca1 = _0x57d9bd();
    _0x19947f = _0x19947f === undefined ? null : _0x19947f;
    var _0x2ac38f = _0xff1ca1.memoizedState;
    if (_0x19947f !== null && _0x36e557(_0x19947f, _0x2ac38f[1])) {
      return _0x2ac38f[0];
    } else {
      _0xff1ca1.memoizedState = [_0x1d25d2, _0x19947f];
      return _0x1d25d2;
    }
  }
  function _0x192069(_0x506563, _0x671c21) {
    var _0x278a5c = _0x57d9bd();
    _0x671c21 = _0x671c21 === undefined ? null : _0x671c21;
    var _0x1f83e5 = _0x278a5c.memoizedState;
    if (_0x671c21 !== null && _0x36e557(_0x671c21, _0x1f83e5[1])) {
      return _0x1f83e5[0];
    }
    _0x1f83e5 = _0x506563();
    if (_0x5336fd) {
      _0x55c8ad(true);
      try {
        _0x506563();
      } finally {
        _0x55c8ad(false);
      }
    }
    _0x278a5c.memoizedState = [_0x1f83e5, _0x671c21];
    return _0x1f83e5;
  }
  function _0x3b5128(_0x8cd8b6, _0x1af6c1, _0x6e464e) {
    if (_0x6e464e === undefined || _0x3c2b6c & 1073741824 && !(_0x325084 & 261930)) {
      return _0x8cd8b6.memoizedState = _0x1af6c1;
    } else {
      _0x8cd8b6.memoizedState = _0x6e464e;
      _0x8cd8b6 = _0x78ba47();
      _0x4ddeb9.lanes |= _0x8cd8b6;
      _0x1a001f |= _0x8cd8b6;
      return _0x6e464e;
    }
  }
  function _0x1914a8(_0x23d6fa, _0x2f6538, _0x584150, _0x434de7) {
    if (_0x1e5abc(_0x584150, _0x2f6538)) {
      return _0x584150;
    } else if (_0x2f51ce.current !== null) {
      _0x23d6fa = _0x3b5128(_0x23d6fa, _0x584150, _0x434de7);
      if (!_0x1e5abc(_0x23d6fa, _0x2f6538)) {
        _0x448eaf = true;
      }
      return _0x23d6fa;
    } else if (_0x3c2b6c & 42 && (!(_0x3c2b6c & 1073741824) || _0x325084 & 261930)) {
      _0x23d6fa = _0x78ba47();
      _0x4ddeb9.lanes |= _0x23d6fa;
      _0x1a001f |= _0x23d6fa;
      return _0x2f6538;
    } else {
      _0x448eaf = true;
      return _0x23d6fa.memoizedState = _0x584150;
    }
  }
  function _0x4ddb1d(_0x1f2756, _0x2d970f, _0x47c912, _0xe3fc3b, _0x5b7836) {
    var _0x22cd77 = _0x3e2aff.p;
    _0x3e2aff.p = _0x22cd77 !== 0 && _0x22cd77 < 8 ? _0x22cd77 : 8;
    var _0x3afdaa;
    var _0x565f82;
    var _0x278097;
    var _0x3aa403 = _0x30149d.T;
    var _0x2c7ebc = {};
    _0x30149d.T = _0x2c7ebc;
    _0x4bb94f(_0x1f2756, false, _0x2d970f, _0x47c912);
    try {
      var _0x5374bb = _0x5b7836();
      var _0x32d45e = _0x30149d.S;
      if (_0x32d45e !== null) {
        _0x32d45e(_0x2c7ebc, _0x5374bb);
      }
      if (_0x5374bb !== null && typeof _0x5374bb == "object" && typeof _0x5374bb.then == "function") {
        _0x15f4d(_0x1f2756, _0x2d970f, (_0x3afdaa = _0xe3fc3b, _0x565f82 = [], _0x278097 = {
          status: "pending",
          value: null,
          reason: null,
          then: function (_0x517ab1) {
            _0x565f82.push(_0x517ab1);
          }
        }, _0x5374bb.then(function () {
          _0x278097.status = "fulfilled";
          _0x278097.value = _0x3afdaa;
          for (var _0x3bf8ef = 0; _0x3bf8ef < _0x565f82.length; _0x3bf8ef++) {
            (0, _0x565f82[_0x3bf8ef])(_0x3afdaa);
          }
        }, function (_0x5437f9) {
          _0x278097.status = "rejected";
          _0x278097.reason = _0x5437f9;
          _0x5437f9 = 0;
          for (; _0x5437f9 < _0x565f82.length; _0x5437f9++) {
            (0, _0x565f82[_0x5437f9])(undefined);
          }
        }), _0x278097), _0x17dc03());
      } else {
        _0x15f4d(_0x1f2756, _0x2d970f, _0xe3fc3b, _0x17dc03());
      }
    } catch (_0x55f91f) {
      _0x15f4d(_0x1f2756, _0x2d970f, {
        then: function () {},
        status: "rejected",
        reason: _0x55f91f
      }, _0x17dc03());
    } finally {
      _0x3e2aff.p = _0x22cd77;
      if (_0x3aa403 !== null && _0x2c7ebc.types !== null) {
        _0x3aa403.types = _0x2c7ebc.types;
      }
      _0x30149d.T = _0x3aa403;
    }
  }
  function _0x238c35() {}
  function _0x419b45(_0x457df7, _0x440cfe, _0x156ca9, _0x5806a7) {
    if (_0x457df7.tag !== 5) {
      throw Error(_0x34c7b9(476));
    }
    var _0x398719 = _0x7e1b6(_0x457df7).queue;
    _0x4ddb1d(_0x457df7, _0x398719, _0x440cfe, _0x2eb1a, _0x156ca9 === null ? _0x238c35 : function () {
      _0x37f0ef(_0x457df7);
      return _0x156ca9(_0x5806a7);
    });
  }
  function _0x7e1b6(_0x13c1ec) {
    var _0xf529b = _0x13c1ec.memoizedState;
    if (_0xf529b !== null) {
      return _0xf529b;
    }
    var _0xefdb4e = {};
    (_0xf529b = {
      memoizedState: _0x2eb1a,
      baseState: _0x2eb1a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _0x44150c,
        lastRenderedState: _0x2eb1a
      },
      next: null
    }).next = {
      memoizedState: _0xefdb4e,
      baseState: _0xefdb4e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _0x44150c,
        lastRenderedState: _0xefdb4e
      },
      next: null
    };
    _0x13c1ec.memoizedState = _0xf529b;
    if ((_0x13c1ec = _0x13c1ec.alternate) !== null) {
      _0x13c1ec.memoizedState = _0xf529b;
    }
    return _0xf529b;
  }
  function _0x37f0ef(_0x1575d3) {
    var _0x2c42b9 = _0x7e1b6(_0x1575d3);
    if (_0x2c42b9.next === null) {
      _0x2c42b9 = _0x1575d3.alternate.memoizedState;
    }
    _0x15f4d(_0x1575d3, _0x2c42b9.next.queue, {}, _0x17dc03());
  }
  function _0x1a8b50() {
    return _0x4d359e(_0x508408);
  }
  function _0x425d0d() {
    return _0x57d9bd().memoizedState;
  }
  function _0x5943ff() {
    return _0x57d9bd().memoizedState;
  }
  function _0x24d001(_0x29dfff) {
    for (var _0x10ebba = _0x29dfff.return; _0x10ebba !== null;) {
      switch (_0x10ebba.tag) {
        case 24:
        case 3:
          var _0x9b1d89 = _0x17dc03();
          var _0x539fd7 = _0xe5f4cf(_0x10ebba, _0x29dfff = _0x230e95(_0x9b1d89), _0x9b1d89);
          if (_0x539fd7 !== null) {
            _0x3968da(_0x539fd7, 0, _0x9b1d89);
            _0x3cf5de(_0x539fd7, _0x10ebba, _0x9b1d89);
          }
          _0x10ebba = {
            cache: _0x226727()
          };
          _0x29dfff.payload = _0x10ebba;
          return;
      }
      _0x10ebba = _0x10ebba.return;
    }
  }
  function _0x24dac8(_0xdad70, _0x4cd0ca, _0x5c335c) {
    var _0x58bfdb = _0x17dc03();
    _0x5c335c = {
      lane: _0x58bfdb,
      revertLane: 0,
      gesture: null,
      action: _0x5c335c,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (_0x3178ac(_0xdad70)) {
      _0x2545c4(_0x4cd0ca, _0x5c335c);
    } else if ((_0x5c335c = _0x19d9fd(_0xdad70, _0x4cd0ca, _0x5c335c, _0x58bfdb)) !== null) {
      _0x3968da(_0x5c335c, 0, _0x58bfdb);
      _0x19eb39(_0x5c335c, _0x4cd0ca, _0x58bfdb);
    }
  }
  function _0x3f49bb(_0x4fd7b5, _0x22c942, _0x3ab9df) {
    _0x15f4d(_0x4fd7b5, _0x22c942, _0x3ab9df, _0x17dc03());
  }
  function _0x15f4d(_0x24227d, _0x19994c, _0x28469c, _0x6d18a1) {
    var _0x12a862 = {
      lane: _0x6d18a1,
      revertLane: 0,
      gesture: null,
      action: _0x28469c,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (_0x3178ac(_0x24227d)) {
      _0x2545c4(_0x19994c, _0x12a862);
    } else {
      var _0x888366 = _0x24227d.alternate;
      if (_0x24227d.lanes === 0 && (_0x888366 === null || _0x888366.lanes === 0) && (_0x888366 = _0x19994c.lastRenderedReducer) !== null) {
        try {
          var _0x19509e = _0x19994c.lastRenderedState;
          var _0x5694b5 = _0x888366(_0x19509e, _0x28469c);
          _0x12a862.hasEagerState = true;
          _0x12a862.eagerState = _0x5694b5;
          if (_0x1e5abc(_0x5694b5, _0x19509e)) {
            _0x5db47d(_0x24227d, _0x19994c, _0x12a862, 0);
            if (_0x42aa40 === null) {
              _0x130c69();
            }
            return false;
          }
        } catch (_0x2accfa) {}
      }
      if ((_0x28469c = _0x19d9fd(_0x24227d, _0x19994c, _0x12a862, _0x6d18a1)) !== null) {
        _0x3968da(_0x28469c, 0, _0x6d18a1);
        _0x19eb39(_0x28469c, _0x19994c, _0x6d18a1);
        return true;
      }
    }
    return false;
  }
  function _0x4bb94f(_0x4741ff, _0x5aeffa, _0x2520bd, _0x823545) {
    _0x823545 = {
      lane: 2,
      revertLane: _0x276259(),
      gesture: null,
      action: _0x823545,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (_0x3178ac(_0x4741ff)) {
      if (_0x5aeffa) {
        throw Error(_0x34c7b9(479));
      }
    } else if ((_0x5aeffa = _0x19d9fd(_0x4741ff, _0x2520bd, _0x823545, 2)) !== null) {
      _0x3968da(_0x5aeffa, 0, 2);
    }
  }
  function _0x3178ac(_0x21aeeb) {
    var _0x14705b = _0x21aeeb.alternate;
    return _0x21aeeb === _0x4ddeb9 || _0x14705b !== null && _0x14705b === _0x4ddeb9;
  }
  function _0x2545c4(_0x6c1e2, _0x420cb4) {
    _0x22c70c = _0x2bc8d4 = true;
    var _0x5062ac = _0x6c1e2.pending;
    if (_0x5062ac === null) {
      _0x420cb4.next = _0x420cb4;
    } else {
      _0x420cb4.next = _0x5062ac.next;
      _0x5062ac.next = _0x420cb4;
    }
    _0x6c1e2.pending = _0x420cb4;
  }
  function _0x19eb39(_0x3646aa, _0x2cf9b0, _0x2e643d) {
    if (_0x2e643d & 4194048) {
      var _0x4d94ec = _0x2cf9b0.lanes;
      _0x2e643d |= _0x4d94ec &= _0x3646aa.pendingLanes;
      _0x2cf9b0.lanes = _0x2e643d;
      _0xbfe3ba(_0x3646aa, _0x2e643d);
    }
  }
  var _0x243362 = {
    readContext: _0x4d359e,
    use: _0x514273,
    useCallback: _0x338a34,
    useContext: _0x338a34,
    useEffect: _0x338a34,
    useImperativeHandle: _0x338a34,
    useLayoutEffect: _0x338a34,
    useInsertionEffect: _0x338a34,
    useMemo: _0x338a34,
    useReducer: _0x338a34,
    useRef: _0x338a34,
    useState: _0x338a34,
    useDebugValue: _0x338a34,
    useDeferredValue: _0x338a34,
    useTransition: _0x338a34,
    useSyncExternalStore: _0x338a34,
    useId: _0x338a34,
    useHostTransitionStatus: _0x338a34,
    useFormState: _0x338a34,
    useActionState: _0x338a34,
    useOptimistic: _0x338a34,
    useMemoCache: _0x338a34,
    useCacheRefresh: _0x338a34
  };
  _0x243362.useEffectEvent = _0x338a34;
  var _0x4eb141 = {
    readContext: _0x4d359e,
    use: _0x514273,
    useCallback: function (_0x5c92f4, _0x185070) {
      _0x4fd4b2().memoizedState = [_0x5c92f4, _0x185070 === undefined ? null : _0x185070];
      return _0x5c92f4;
    },
    useContext: _0x4d359e,
    useEffect: _0x25794d,
    useImperativeHandle: function (_0x5a8c96, _0x336e3b, _0x5b2f95) {
      _0x5b2f95 = _0x5b2f95 != null ? _0x5b2f95.concat([_0x5a8c96]) : null;
      _0x1375e3(4194308, 4, _0x2b5eaa.bind(null, _0x336e3b, _0x5a8c96), _0x5b2f95);
    },
    useLayoutEffect: function (_0x3a3fdf, _0x5e8ad8) {
      return _0x1375e3(4194308, 4, _0x3a3fdf, _0x5e8ad8);
    },
    useInsertionEffect: function (_0x48f837, _0x51bc3d) {
      _0x1375e3(4, 2, _0x48f837, _0x51bc3d);
    },
    useMemo: function (_0x132421, _0x2ddfa1) {
      var _0x45fbe9 = _0x4fd4b2();
      _0x2ddfa1 = _0x2ddfa1 === undefined ? null : _0x2ddfa1;
      var _0x522d06 = _0x132421();
      if (_0x5336fd) {
        _0x55c8ad(true);
        try {
          _0x132421();
        } finally {
          _0x55c8ad(false);
        }
      }
      _0x45fbe9.memoizedState = [_0x522d06, _0x2ddfa1];
      return _0x522d06;
    },
    useReducer: function (_0xacacb, _0x16fe31, _0x17ecae) {
      var _0x38048d = _0x4fd4b2();
      if (_0x17ecae !== undefined) {
        var _0xf33797 = _0x17ecae(_0x16fe31);
        if (_0x5336fd) {
          _0x55c8ad(true);
          try {
            _0x17ecae(_0x16fe31);
          } finally {
            _0x55c8ad(false);
          }
        }
      } else {
        _0xf33797 = _0x16fe31;
      }
      _0x38048d.memoizedState = _0x38048d.baseState = _0xf33797;
      _0xacacb = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: _0xacacb,
        lastRenderedState: _0xf33797
      };
      _0x38048d.queue = _0xacacb;
      _0xacacb = _0xacacb.dispatch = _0x24dac8.bind(null, _0x4ddeb9, _0xacacb);
      return [_0x38048d.memoizedState, _0xacacb];
    },
    useRef: function (_0x57a2bc) {
      _0x57a2bc = {
        current: _0x57a2bc
      };
      return _0x4fd4b2().memoizedState = _0x57a2bc;
    },
    useState: function (_0x5c3cc3) {
      var _0x10e906 = (_0x5c3cc3 = _0x2ccbe1(_0x5c3cc3)).queue;
      var _0x1b5b3e = _0x3f49bb.bind(null, _0x4ddeb9, _0x10e906);
      _0x10e906.dispatch = _0x1b5b3e;
      return [_0x5c3cc3.memoizedState, _0x1b5b3e];
    },
    useDebugValue: _0x4034b5,
    useDeferredValue: function (_0x36566f, _0x554dbc) {
      return _0x3b5128(_0x4fd4b2(), _0x36566f, _0x554dbc);
    },
    useTransition: function () {
      var _0x358d5b = _0x2ccbe1(false);
      _0x358d5b = _0x4ddb1d.bind(null, _0x4ddeb9, _0x358d5b.queue, true, false);
      _0x4fd4b2().memoizedState = _0x358d5b;
      return [false, _0x358d5b];
    },
    useSyncExternalStore: function (_0x2f7eb8, _0x42da3d, _0x1097fe) {
      var _0x122efb = _0x4ddeb9;
      var _0x967048 = _0x4fd4b2();
      if (_0x823508) {
        if (_0x1097fe === undefined) {
          throw Error(_0x34c7b9(407));
        }
        _0x1097fe = _0x1097fe();
      } else {
        _0x1097fe = _0x42da3d();
        if (_0x42aa40 === null) {
          throw Error(_0x34c7b9(349));
        }
        if (!(_0x325084 & 127)) {
          _0x12f608(_0x122efb, _0x42da3d, _0x1097fe);
        }
      }
      _0x967048.memoizedState = _0x1097fe;
      var _0xa2f292 = {
        value: _0x1097fe,
        getSnapshot: _0x42da3d
      };
      _0x967048.queue = _0xa2f292;
      _0x25794d(_0x149008.bind(null, _0x122efb, _0xa2f292, _0x2f7eb8), [_0x2f7eb8]);
      _0x122efb.flags |= 2048;
      _0x51e54c(9, {
        destroy: undefined
      }, _0x50d7c1.bind(null, _0x122efb, _0xa2f292, _0x1097fe, _0x42da3d), null);
      return _0x1097fe;
    },
    useId: function () {
      var _0x3864f3 = _0x4fd4b2();
      var _0x30e5a5 = _0x42aa40.identifierPrefix;
      if (_0x823508) {
        var _0x46a782 = _0x2668a2;
        _0x30e5a5 = "_" + _0x30e5a5 + "R_" + (_0x46a782 = (_0x12c9e1 & ~(1 << 32 - _0x4f44c7(_0x12c9e1) - 1)).toString(32) + _0x46a782);
        if ((_0x46a782 = _0x65b549++) > 0) {
          _0x30e5a5 += "H" + _0x46a782.toString(32);
        }
        _0x30e5a5 += "_";
      } else {
        _0x30e5a5 = "_" + _0x30e5a5 + "r_" + (_0x46a782 = _0x32e682++).toString(32) + "_";
      }
      return _0x3864f3.memoizedState = _0x30e5a5;
    },
    useHostTransitionStatus: _0x1a8b50,
    useFormState: _0xa77dbe,
    useActionState: _0xa77dbe,
    useOptimistic: function (_0x2f9284) {
      var _0x4c93cd = _0x4fd4b2();
      _0x4c93cd.memoizedState = _0x4c93cd.baseState = _0x2f9284;
      var _0x35989e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      _0x4c93cd.queue = _0x35989e;
      _0x4c93cd = _0x4bb94f.bind(null, _0x4ddeb9, true, _0x35989e);
      _0x35989e.dispatch = _0x4c93cd;
      return [_0x2f9284, _0x4c93cd];
    },
    useMemoCache: _0x2d5d86,
    useCacheRefresh: function () {
      return _0x4fd4b2().memoizedState = _0x24d001.bind(null, _0x4ddeb9);
    },
    useEffectEvent: function (_0x1e35b1) {
      var _0x411a9a = _0x4fd4b2();
      var _0x5b6123 = {
        impl: _0x1e35b1
      };
      _0x411a9a.memoizedState = _0x5b6123;
      return function () {
        if (_0x21d2ba & 2) {
          throw Error(_0x34c7b9(440));
        }
        return _0x5b6123.impl.apply(undefined, arguments);
      };
    }
  };
  var _0x46f59c = {
    readContext: _0x4d359e,
    use: _0x514273,
    useCallback: _0x24f61c,
    useContext: _0x4d359e,
    useEffect: _0x33e7e6,
    useImperativeHandle: _0x47547c,
    useInsertionEffect: _0x43b7f1,
    useLayoutEffect: _0x21430a,
    useMemo: _0x192069,
    useReducer: _0x3ec9d0,
    useRef: _0x49ee27,
    useState: function () {
      return _0x3ec9d0(_0x44150c);
    },
    useDebugValue: _0x4034b5,
    useDeferredValue: function (_0xb66605, _0xffb8b4) {
      return _0x1914a8(_0x57d9bd(), _0x148f31.memoizedState, _0xb66605, _0xffb8b4);
    },
    useTransition: function () {
      var _0x3be739 = _0x3ec9d0(_0x44150c)[0];
      var _0x32042a = _0x57d9bd().memoizedState;
      return [typeof _0x3be739 == "boolean" ? _0x3be739 : _0x2fc80b(_0x3be739), _0x32042a];
    },
    useSyncExternalStore: _0x1667c5,
    useId: _0x425d0d,
    useHostTransitionStatus: _0x1a8b50,
    useFormState: _0xfc6be0,
    useActionState: _0xfc6be0,
    useOptimistic: function (_0x3a1bc4, _0x3c4a19) {
      return _0x5b0efa(_0x57d9bd(), 0, _0x3a1bc4, _0x3c4a19);
    },
    useMemoCache: _0x2d5d86,
    useCacheRefresh: _0x5943ff
  };
  _0x46f59c.useEffectEvent = _0x20cb21;
  var _0x4a5d96 = {
    readContext: _0x4d359e,
    use: _0x514273,
    useCallback: _0x24f61c,
    useContext: _0x4d359e,
    useEffect: _0x33e7e6,
    useImperativeHandle: _0x47547c,
    useInsertionEffect: _0x43b7f1,
    useLayoutEffect: _0x21430a,
    useMemo: _0x192069,
    useReducer: _0x34cb05,
    useRef: _0x49ee27,
    useState: function () {
      return _0x34cb05(_0x44150c);
    },
    useDebugValue: _0x4034b5,
    useDeferredValue: function (_0x2f343d, _0x14f266) {
      var _0x186612 = _0x57d9bd();
      if (_0x148f31 === null) {
        return _0x3b5128(_0x186612, _0x2f343d, _0x14f266);
      } else {
        return _0x1914a8(_0x186612, _0x148f31.memoizedState, _0x2f343d, _0x14f266);
      }
    },
    useTransition: function () {
      var _0x1d1864 = _0x34cb05(_0x44150c)[0];
      var _0x57ce14 = _0x57d9bd().memoizedState;
      return [typeof _0x1d1864 == "boolean" ? _0x1d1864 : _0x2fc80b(_0x1d1864), _0x57ce14];
    },
    useSyncExternalStore: _0x1667c5,
    useId: _0x425d0d,
    useHostTransitionStatus: _0x1a8b50,
    useFormState: _0x4f0c9b,
    useActionState: _0x4f0c9b,
    useOptimistic: function (_0x4a80f2, _0x5677ac) {
      var _0x43233c = _0x57d9bd();
      if (_0x148f31 !== null) {
        return _0x5b0efa(_0x43233c, 0, _0x4a80f2, _0x5677ac);
      } else {
        _0x43233c.baseState = _0x4a80f2;
        return [_0x4a80f2, _0x43233c.queue.dispatch];
      }
    },
    useMemoCache: _0x2d5d86,
    useCacheRefresh: _0x5943ff
  };
  function _0x1acdf5(_0x5de595, _0x567443, _0x1fe213, _0x445e73) {
    _0x1fe213 = (_0x1fe213 = _0x1fe213(_0x445e73, _0x567443 = _0x5de595.memoizedState)) == null ? _0x567443 : _0x15c004({}, _0x567443, _0x1fe213);
    _0x5de595.memoizedState = _0x1fe213;
    if (_0x5de595.lanes === 0) {
      _0x5de595.updateQueue.baseState = _0x1fe213;
    }
  }
  _0x4a5d96.useEffectEvent = _0x20cb21;
  var _0x4b3369 = {
    enqueueSetState: function (_0xf43de7, _0x5943f3, _0x38f037) {
      _0xf43de7 = _0xf43de7._reactInternals;
      var _0x47fcd9 = _0x17dc03();
      var _0x3d06d6 = _0x230e95(_0x47fcd9);
      _0x3d06d6.payload = _0x5943f3;
      if (_0x38f037 != null) {
        _0x3d06d6.callback = _0x38f037;
      }
      if ((_0x5943f3 = _0xe5f4cf(_0xf43de7, _0x3d06d6, _0x47fcd9)) !== null) {
        _0x3968da(_0x5943f3, 0, _0x47fcd9);
        _0x3cf5de(_0x5943f3, _0xf43de7, _0x47fcd9);
      }
    },
    enqueueReplaceState: function (_0x39c566, _0x3ae546, _0x2d8091) {
      _0x39c566 = _0x39c566._reactInternals;
      var _0x31256b = _0x17dc03();
      var _0x17fa8b = _0x230e95(_0x31256b);
      _0x17fa8b.tag = 1;
      _0x17fa8b.payload = _0x3ae546;
      if (_0x2d8091 != null) {
        _0x17fa8b.callback = _0x2d8091;
      }
      if ((_0x3ae546 = _0xe5f4cf(_0x39c566, _0x17fa8b, _0x31256b)) !== null) {
        _0x3968da(_0x3ae546, 0, _0x31256b);
        _0x3cf5de(_0x3ae546, _0x39c566, _0x31256b);
      }
    },
    enqueueForceUpdate: function (_0x53f3e5, _0x298507) {
      _0x53f3e5 = _0x53f3e5._reactInternals;
      var _0x305c3a = _0x17dc03();
      var _0x322d17 = _0x230e95(_0x305c3a);
      _0x322d17.tag = 2;
      if (_0x298507 != null) {
        _0x322d17.callback = _0x298507;
      }
      if ((_0x298507 = _0xe5f4cf(_0x53f3e5, _0x322d17, _0x305c3a)) !== null) {
        _0x3968da(_0x298507, 0, _0x305c3a);
        _0x3cf5de(_0x298507, _0x53f3e5, _0x305c3a);
      }
    }
  };
  function _0x18027b(_0x4eaeec, _0x2b429f, _0x3b0b82, _0x26153d, _0x2cd806, _0x547419, _0x1fa10d) {
    if (typeof (_0x4eaeec = _0x4eaeec.stateNode).shouldComponentUpdate == "function") {
      return _0x4eaeec.shouldComponentUpdate(_0x26153d, _0x547419, _0x1fa10d);
    } else {
      return !_0x2b429f.prototype || !_0x2b429f.prototype.isPureReactComponent || !_0x24fdda(_0x3b0b82, _0x26153d) || !_0x24fdda(_0x2cd806, _0x547419);
    }
  }
  function _0x3a9b3f(_0x3a941c, _0xbc0889, _0x565429, _0x4e521f) {
    _0x3a941c = _0xbc0889.state;
    if (typeof _0xbc0889.componentWillReceiveProps == "function") {
      _0xbc0889.componentWillReceiveProps(_0x565429, _0x4e521f);
    }
    if (typeof _0xbc0889.UNSAFE_componentWillReceiveProps == "function") {
      _0xbc0889.UNSAFE_componentWillReceiveProps(_0x565429, _0x4e521f);
    }
    if (_0xbc0889.state !== _0x3a941c) {
      _0x4b3369.enqueueReplaceState(_0xbc0889, _0xbc0889.state, null);
    }
  }
  function _0x2bb569(_0x1d0af7, _0x158417) {
    var _0x26b5d7 = _0x158417;
    if ("ref" in _0x158417) {
      _0x26b5d7 = {};
      for (var _0x553981 in _0x158417) {
        if (_0x553981 !== "ref") {
          _0x26b5d7[_0x553981] = _0x158417[_0x553981];
        }
      }
    }
    if (_0x1d0af7 = _0x1d0af7.defaultProps) {
      if (_0x26b5d7 === _0x158417) {
        _0x26b5d7 = _0x15c004({}, _0x26b5d7);
      }
      for (var _0x5727b9 in _0x1d0af7) {
        if (_0x26b5d7[_0x5727b9] === undefined) {
          _0x26b5d7[_0x5727b9] = _0x1d0af7[_0x5727b9];
        }
      }
    }
    return _0x26b5d7;
  }
  function _0x76e0a4(_0x1b169c) {
    _0x282638(_0x1b169c);
  }
  function _0x25645(_0x28f001) {
    console.error(_0x28f001);
  }
  function _0xb68e8e(_0x2020a7) {
    _0x282638(_0x2020a7);
  }
  function _0x1d03e7(_0x58c370, _0x24daf8) {
    try {
      (0, _0x58c370.onUncaughtError)(_0x24daf8.value, {
        componentStack: _0x24daf8.stack
      });
    } catch (_0x3b3aa4) {
      setTimeout(function () {
        throw _0x3b3aa4;
      });
    }
  }
  function _0x2fe9e6(_0x2adfa2, _0x2e87aa, _0x3e162a) {
    try {
      (0, _0x2adfa2.onCaughtError)(_0x3e162a.value, {
        componentStack: _0x3e162a.stack,
        errorBoundary: _0x2e87aa.tag === 1 ? _0x2e87aa.stateNode : null
      });
    } catch (_0x4933d0) {
      setTimeout(function () {
        throw _0x4933d0;
      });
    }
  }
  function _0x42e5d9(_0x22a6df, _0x12890d, _0x409544) {
    (_0x409544 = _0x230e95(_0x409544)).tag = 3;
    _0x409544.payload = {
      element: null
    };
    _0x409544.callback = function () {
      _0x1d03e7(_0x22a6df, _0x12890d);
    };
    return _0x409544;
  }
  function _0x1ba8d9(_0x4713a8) {
    (_0x4713a8 = _0x230e95(_0x4713a8)).tag = 3;
    return _0x4713a8;
  }
  function _0x277e80(_0x2bc36f, _0x3fb8b1, _0x270719, _0x51d906) {
    var _0xc6444c = _0x270719.type.getDerivedStateFromError;
    if (typeof _0xc6444c == "function") {
      var _0x29c469 = _0x51d906.value;
      _0x2bc36f.payload = function () {
        return _0xc6444c(_0x29c469);
      };
      _0x2bc36f.callback = function () {
        _0x2fe9e6(_0x3fb8b1, _0x270719, _0x51d906);
      };
    }
    var _0x378ca0 = _0x270719.stateNode;
    if (_0x378ca0 !== null && typeof _0x378ca0.componentDidCatch == "function") {
      _0x2bc36f.callback = function () {
        _0x2fe9e6(_0x3fb8b1, _0x270719, _0x51d906);
        if (typeof _0xc6444c != "function") {
          if (_0x59e1ac === null) {
            _0x59e1ac = new Set([this]);
          } else {
            _0x59e1ac.add(this);
          }
        }
        var _0x3f86b1 = _0x51d906.stack;
        this.componentDidCatch(_0x51d906.value, {
          componentStack: _0x3f86b1 !== null ? _0x3f86b1 : ""
        });
      };
    }
  }
  var _0x22cca2 = Error(_0x34c7b9(461));
  var _0x448eaf = false;
  function _0x1067c1(_0x2ad5a8, _0x107cd8, _0x2c0ff6, _0x41e934) {
    _0x107cd8.child = _0x2ad5a8 === null ? _0x435a73(_0x107cd8, null, _0x2c0ff6, _0x41e934) : _0x121aab(_0x107cd8, _0x2ad5a8.child, _0x2c0ff6, _0x41e934);
  }
  function _0x2f3137(_0x1f6432, _0x542953, _0x1dc496, _0x4e654b, _0x3acf13) {
    _0x1dc496 = _0x1dc496.render;
    var _0x4d0f50 = _0x542953.ref;
    if ("ref" in _0x4e654b) {
      var _0x1c2b88 = {};
      for (var _0x592916 in _0x4e654b) {
        if (_0x592916 !== "ref") {
          _0x1c2b88[_0x592916] = _0x4e654b[_0x592916];
        }
      }
    } else {
      _0x1c2b88 = _0x4e654b;
    }
    _0x5141e1(_0x542953);
    _0x4e654b = _0x2b1eff(_0x1f6432, _0x542953, _0x1dc496, _0x1c2b88, _0x4d0f50, _0x3acf13);
    _0x592916 = _0x1755f1();
    if (_0x1f6432 === null || _0x448eaf) {
      if (_0x823508 && _0x592916) {
        _0x11a072(_0x542953);
      }
      _0x542953.flags |= 1;
      _0x1067c1(_0x1f6432, _0x542953, _0x4e654b, _0x3acf13);
      return _0x542953.child;
    } else {
      _0x51ea37(_0x1f6432, _0x542953, _0x3acf13);
      return _0x5915d1(_0x1f6432, _0x542953, _0x3acf13);
    }
  }
  function _0x460b2f(_0x1f8359, _0x4709e5, _0x31889c, _0x1cc358, _0x4f815c) {
    if (_0x1f8359 === null) {
      var _0x475551 = _0x31889c.type;
      if (typeof _0x475551 != "function" || _0xb233b8(_0x475551) || _0x475551.defaultProps !== undefined || _0x31889c.compare !== null) {
        (_0x1f8359 = _0x3c8cd5(_0x31889c.type, null, _0x1cc358, _0x4709e5, _0x4709e5.mode, _0x4f815c)).ref = _0x4709e5.ref;
        _0x1f8359.return = _0x4709e5;
        return _0x4709e5.child = _0x1f8359;
      } else {
        _0x4709e5.tag = 15;
        _0x4709e5.type = _0x475551;
        return _0x2c6994(_0x1f8359, _0x4709e5, _0x475551, _0x1cc358, _0x4f815c);
      }
    }
    _0x475551 = _0x1f8359.child;
    if (!_0x3b4415(_0x1f8359, _0x4f815c)) {
      var _0x408a1e = _0x475551.memoizedProps;
      if ((_0x31889c = (_0x31889c = _0x31889c.compare) !== null ? _0x31889c : _0x24fdda)(_0x408a1e, _0x1cc358) && _0x1f8359.ref === _0x4709e5.ref) {
        return _0x5915d1(_0x1f8359, _0x4709e5, _0x4f815c);
      }
    }
    _0x4709e5.flags |= 1;
    (_0x1f8359 = _0x9ba748(_0x475551, _0x1cc358)).ref = _0x4709e5.ref;
    _0x1f8359.return = _0x4709e5;
    return _0x4709e5.child = _0x1f8359;
  }
  function _0x2c6994(_0x197406, _0xf7c87f, _0x333fde, _0x57884a, _0x18c7e4) {
    if (_0x197406 !== null) {
      var _0x1ba524 = _0x197406.memoizedProps;
      if (_0x24fdda(_0x1ba524, _0x57884a) && _0x197406.ref === _0xf7c87f.ref) {
        _0x448eaf = false;
        _0xf7c87f.pendingProps = _0x57884a = _0x1ba524;
        if (!_0x3b4415(_0x197406, _0x18c7e4)) {
          _0xf7c87f.lanes = _0x197406.lanes;
          return _0x5915d1(_0x197406, _0xf7c87f, _0x18c7e4);
        }
        if (_0x197406.flags & 131072) {
          _0x448eaf = true;
        }
      }
    }
    return _0x59554c(_0x197406, _0xf7c87f, _0x333fde, _0x57884a, _0x18c7e4);
  }
  function _0x178ceb(_0x182fe4, _0x5838f5, _0x2178f4, _0x275b25) {
    var _0x88547e = _0x275b25.children;
    var _0x1dc958 = _0x182fe4 !== null ? _0x182fe4.memoizedState : null;
    if (_0x182fe4 === null && _0x5838f5.stateNode === null) {
      _0x5838f5.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    if (_0x275b25.mode === "hidden") {
      if (_0x5838f5.flags & 128) {
        _0x1dc958 = _0x1dc958 !== null ? _0x1dc958.baseLanes | _0x2178f4 : _0x2178f4;
        if (_0x182fe4 !== null) {
          _0x275b25 = _0x5838f5.child = _0x182fe4.child;
          _0x88547e = 0;
          while (_0x275b25 !== null) {
            _0x88547e = _0x88547e | _0x275b25.lanes | _0x275b25.childLanes;
            _0x275b25 = _0x275b25.sibling;
          }
          _0x275b25 = _0x88547e & ~_0x1dc958;
        } else {
          _0x275b25 = 0;
          _0x5838f5.child = null;
        }
        return _0x1a531e(_0x182fe4, _0x5838f5, _0x1dc958, _0x2178f4, _0x275b25);
      }
      if (!(_0x2178f4 & 536870912)) {
        _0x275b25 = _0x5838f5.lanes = 536870912;
        return _0x1a531e(_0x182fe4, _0x5838f5, _0x1dc958 !== null ? _0x1dc958.baseLanes | _0x2178f4 : _0x2178f4, _0x2178f4, _0x275b25);
      }
      _0x5838f5.memoizedState = {
        baseLanes: 0,
        cachePool: null
      };
      if (_0x182fe4 !== null) {
        _0x193199(0, _0x1dc958 !== null ? _0x1dc958.cachePool : null);
      }
      if (_0x1dc958 !== null) {
        _0x56113a(_0x5838f5, _0x1dc958);
      } else {
        _0x3aefb8();
      }
      _0x52ef84(_0x5838f5);
    } else if (_0x1dc958 !== null) {
      _0x193199(0, _0x1dc958.cachePool);
      _0x56113a(_0x5838f5, _0x1dc958);
      _0x511f4e();
      _0x5838f5.memoizedState = null;
    } else {
      if (_0x182fe4 !== null) {
        _0x193199(0, null);
      }
      _0x3aefb8();
      _0x511f4e();
    }
    _0x1067c1(_0x182fe4, _0x5838f5, _0x88547e, _0x2178f4);
    return _0x5838f5.child;
  }
  function _0x1acede(_0xde0cb9, _0x47e6e0) {
    if ((_0xde0cb9 === null || _0xde0cb9.tag !== 22) && _0x47e6e0.stateNode === null) {
      _0x47e6e0.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    return _0x47e6e0.sibling;
  }
  function _0x1a531e(_0x511822, _0x18f764, _0x23edc9, _0x15f676, _0x4a1fb6) {
    var _0x3019ac = _0xf146ff();
    _0x3019ac = _0x3019ac === null ? null : {
      parent: _0x156a91._currentValue,
      pool: _0x3019ac
    };
    _0x18f764.memoizedState = {
      baseLanes: _0x23edc9,
      cachePool: _0x3019ac
    };
    if (_0x511822 !== null) {
      _0x193199(0, null);
    }
    _0x3aefb8();
    _0x52ef84(_0x18f764);
    if (_0x511822 !== null) {
      _0x29615d(_0x511822, _0x18f764, _0x15f676, true);
    }
    _0x18f764.childLanes = _0x4a1fb6;
    return null;
  }
  function _0x1fee4f(_0x408c43, _0x1739a5) {
    (_0x1739a5 = _0x2f9a48({
      mode: _0x1739a5.mode,
      children: _0x1739a5.children
    }, _0x408c43.mode)).ref = _0x408c43.ref;
    _0x408c43.child = _0x1739a5;
    _0x1739a5.return = _0x408c43;
    return _0x1739a5;
  }
  function _0x546153(_0x4eae4a, _0x1f3772, _0xdd996d) {
    _0x121aab(_0x1f3772, _0x4eae4a.child, null, _0xdd996d);
    (_0x4eae4a = _0x1fee4f(_0x1f3772, _0x1f3772.pendingProps)).flags |= 2;
    _0x15b585(_0x1f3772);
    _0x1f3772.memoizedState = null;
    return _0x4eae4a;
  }
  function _0x4e6de1(_0xade357, _0x296785) {
    var _0xaad16 = _0x296785.ref;
    if (_0xaad16 === null) {
      if (_0xade357 !== null && _0xade357.ref !== null) {
        _0x296785.flags |= 4194816;
      }
    } else {
      if (typeof _0xaad16 != "function" && typeof _0xaad16 != "object") {
        throw Error(_0x34c7b9(284));
      }
      if (_0xade357 === null || _0xade357.ref !== _0xaad16) {
        _0x296785.flags |= 4194816;
      }
    }
  }
  function _0x59554c(_0x1e9fc0, _0x29baa8, _0x10a6fd, _0x4d8121, _0x94cd9) {
    _0x5141e1(_0x29baa8);
    _0x10a6fd = _0x2b1eff(_0x1e9fc0, _0x29baa8, _0x10a6fd, _0x4d8121, undefined, _0x94cd9);
    _0x4d8121 = _0x1755f1();
    if (_0x1e9fc0 === null || _0x448eaf) {
      if (_0x823508 && _0x4d8121) {
        _0x11a072(_0x29baa8);
      }
      _0x29baa8.flags |= 1;
      _0x1067c1(_0x1e9fc0, _0x29baa8, _0x10a6fd, _0x94cd9);
      return _0x29baa8.child;
    } else {
      _0x51ea37(_0x1e9fc0, _0x29baa8, _0x94cd9);
      return _0x5915d1(_0x1e9fc0, _0x29baa8, _0x94cd9);
    }
  }
  function _0xc42dd9(_0x1501ac, _0x53be31, _0xd55f2f, _0x256d17, _0xefa065, _0x56fe9c) {
    _0x5141e1(_0x53be31);
    _0x53be31.updateQueue = null;
    _0xd55f2f = _0xf572ac(_0x53be31, _0x256d17, _0xd55f2f, _0xefa065);
    _0x31b98f(_0x1501ac);
    _0x256d17 = _0x1755f1();
    if (_0x1501ac === null || _0x448eaf) {
      if (_0x823508 && _0x256d17) {
        _0x11a072(_0x53be31);
      }
      _0x53be31.flags |= 1;
      _0x1067c1(_0x1501ac, _0x53be31, _0xd55f2f, _0x56fe9c);
      return _0x53be31.child;
    } else {
      _0x51ea37(_0x1501ac, _0x53be31, _0x56fe9c);
      return _0x5915d1(_0x1501ac, _0x53be31, _0x56fe9c);
    }
  }
  function _0x1ef841(_0x294a6b, _0x1c693f, _0x5c9445, _0xc8f191, _0x179c0a) {
    _0x5141e1(_0x1c693f);
    if (_0x1c693f.stateNode === null) {
      var _0x401c28 = _0x569738;
      var _0x502a9f = _0x5c9445.contextType;
      if (typeof _0x502a9f == "object" && _0x502a9f !== null) {
        _0x401c28 = _0x4d359e(_0x502a9f);
      }
      _0x401c28 = new _0x5c9445(_0xc8f191, _0x401c28);
      _0x1c693f.memoizedState = _0x401c28.state ?? null;
      _0x401c28.updater = _0x4b3369;
      _0x1c693f.stateNode = _0x401c28;
      _0x401c28._reactInternals = _0x1c693f;
      (_0x401c28 = _0x1c693f.stateNode).props = _0xc8f191;
      _0x401c28.state = _0x1c693f.memoizedState;
      _0x401c28.refs = {};
      _0x2d0933(_0x1c693f);
      _0x502a9f = _0x5c9445.contextType;
      _0x401c28.context = typeof _0x502a9f == "object" && _0x502a9f !== null ? _0x4d359e(_0x502a9f) : _0x569738;
      _0x401c28.state = _0x1c693f.memoizedState;
      if (typeof (_0x502a9f = _0x5c9445.getDerivedStateFromProps) == "function") {
        _0x1acdf5(_0x1c693f, _0x5c9445, _0x502a9f, _0xc8f191);
        _0x401c28.state = _0x1c693f.memoizedState;
      }
      if (typeof _0x5c9445.getDerivedStateFromProps != "function" && typeof _0x401c28.getSnapshotBeforeUpdate != "function" && (typeof _0x401c28.UNSAFE_componentWillMount == "function" || typeof _0x401c28.componentWillMount == "function")) {
        _0x502a9f = _0x401c28.state;
        if (typeof _0x401c28.componentWillMount == "function") {
          _0x401c28.componentWillMount();
        }
        if (typeof _0x401c28.UNSAFE_componentWillMount == "function") {
          _0x401c28.UNSAFE_componentWillMount();
        }
        if (_0x502a9f !== _0x401c28.state) {
          _0x4b3369.enqueueReplaceState(_0x401c28, _0x401c28.state, null);
        }
        _0x4d991b(_0x1c693f, _0xc8f191, _0x401c28, _0x179c0a);
        _0x3fdcc4();
        _0x401c28.state = _0x1c693f.memoizedState;
      }
      if (typeof _0x401c28.componentDidMount == "function") {
        _0x1c693f.flags |= 4194308;
      }
      _0xc8f191 = true;
    } else if (_0x294a6b === null) {
      _0x401c28 = _0x1c693f.stateNode;
      var _0x1914ce = _0x1c693f.memoizedProps;
      var _0x2c02b5 = _0x2bb569(_0x5c9445, _0x1914ce);
      _0x401c28.props = _0x2c02b5;
      var _0x28904f = _0x401c28.context;
      var _0x5172f8 = _0x5c9445.contextType;
      _0x502a9f = _0x569738;
      if (typeof _0x5172f8 == "object" && _0x5172f8 !== null) {
        _0x502a9f = _0x4d359e(_0x5172f8);
      }
      var _0x3aba0d = _0x5c9445.getDerivedStateFromProps;
      _0x5172f8 = typeof _0x3aba0d == "function" || typeof _0x401c28.getSnapshotBeforeUpdate == "function";
      _0x1914ce = _0x1c693f.pendingProps !== _0x1914ce;
      if (!_0x5172f8 && (typeof _0x401c28.UNSAFE_componentWillReceiveProps == "function" || typeof _0x401c28.componentWillReceiveProps == "function")) {
        if (_0x1914ce || _0x28904f !== _0x502a9f) {
          _0x3a9b3f(_0x1c693f, _0x401c28, _0xc8f191, _0x502a9f);
        }
      }
      _0x4b8682 = false;
      var _0x53c887 = _0x1c693f.memoizedState;
      _0x401c28.state = _0x53c887;
      _0x4d991b(_0x1c693f, _0xc8f191, _0x401c28, _0x179c0a);
      _0x3fdcc4();
      _0x28904f = _0x1c693f.memoizedState;
      if (_0x1914ce || _0x53c887 !== _0x28904f || _0x4b8682) {
        if (typeof _0x3aba0d == "function") {
          _0x1acdf5(_0x1c693f, _0x5c9445, _0x3aba0d, _0xc8f191);
          _0x28904f = _0x1c693f.memoizedState;
        }
        if (_0x2c02b5 = _0x4b8682 || _0x18027b(_0x1c693f, _0x5c9445, _0x2c02b5, _0xc8f191, _0x53c887, _0x28904f, _0x502a9f)) {
          if (!_0x5172f8 && (typeof _0x401c28.UNSAFE_componentWillMount == "function" || typeof _0x401c28.componentWillMount == "function")) {
            if (typeof _0x401c28.componentWillMount == "function") {
              _0x401c28.componentWillMount();
            }
            if (typeof _0x401c28.UNSAFE_componentWillMount == "function") {
              _0x401c28.UNSAFE_componentWillMount();
            }
          }
          if (typeof _0x401c28.componentDidMount == "function") {
            _0x1c693f.flags |= 4194308;
          }
        } else {
          if (typeof _0x401c28.componentDidMount == "function") {
            _0x1c693f.flags |= 4194308;
          }
          _0x1c693f.memoizedProps = _0xc8f191;
          _0x1c693f.memoizedState = _0x28904f;
        }
        _0x401c28.props = _0xc8f191;
        _0x401c28.state = _0x28904f;
        _0x401c28.context = _0x502a9f;
        _0xc8f191 = _0x2c02b5;
      } else {
        if (typeof _0x401c28.componentDidMount == "function") {
          _0x1c693f.flags |= 4194308;
        }
        _0xc8f191 = false;
      }
    } else {
      _0x401c28 = _0x1c693f.stateNode;
      _0x5bde88(_0x294a6b, _0x1c693f);
      _0x5172f8 = _0x2bb569(_0x5c9445, _0x502a9f = _0x1c693f.memoizedProps);
      _0x401c28.props = _0x5172f8;
      _0x3aba0d = _0x1c693f.pendingProps;
      _0x53c887 = _0x401c28.context;
      _0x28904f = _0x5c9445.contextType;
      _0x2c02b5 = _0x569738;
      if (typeof _0x28904f == "object" && _0x28904f !== null) {
        _0x2c02b5 = _0x4d359e(_0x28904f);
      }
      if (!(_0x28904f = typeof (_0x1914ce = _0x5c9445.getDerivedStateFromProps) == "function" || typeof _0x401c28.getSnapshotBeforeUpdate == "function") && (typeof _0x401c28.UNSAFE_componentWillReceiveProps == "function" || typeof _0x401c28.componentWillReceiveProps == "function")) {
        if (_0x502a9f !== _0x3aba0d || _0x53c887 !== _0x2c02b5) {
          _0x3a9b3f(_0x1c693f, _0x401c28, _0xc8f191, _0x2c02b5);
        }
      }
      _0x4b8682 = false;
      _0x53c887 = _0x1c693f.memoizedState;
      _0x401c28.state = _0x53c887;
      _0x4d991b(_0x1c693f, _0xc8f191, _0x401c28, _0x179c0a);
      _0x3fdcc4();
      var _0x45d774 = _0x1c693f.memoizedState;
      if (_0x502a9f !== _0x3aba0d || _0x53c887 !== _0x45d774 || _0x4b8682 || _0x294a6b !== null && _0x294a6b.dependencies !== null && _0x586fd9(_0x294a6b.dependencies)) {
        if (typeof _0x1914ce == "function") {
          _0x1acdf5(_0x1c693f, _0x5c9445, _0x1914ce, _0xc8f191);
          _0x45d774 = _0x1c693f.memoizedState;
        }
        if (_0x5172f8 = _0x4b8682 || _0x18027b(_0x1c693f, _0x5c9445, _0x5172f8, _0xc8f191, _0x53c887, _0x45d774, _0x2c02b5) || _0x294a6b !== null && _0x294a6b.dependencies !== null && _0x586fd9(_0x294a6b.dependencies)) {
          if (!_0x28904f && (typeof _0x401c28.UNSAFE_componentWillUpdate == "function" || typeof _0x401c28.componentWillUpdate == "function")) {
            if (typeof _0x401c28.componentWillUpdate == "function") {
              _0x401c28.componentWillUpdate(_0xc8f191, _0x45d774, _0x2c02b5);
            }
            if (typeof _0x401c28.UNSAFE_componentWillUpdate == "function") {
              _0x401c28.UNSAFE_componentWillUpdate(_0xc8f191, _0x45d774, _0x2c02b5);
            }
          }
          if (typeof _0x401c28.componentDidUpdate == "function") {
            _0x1c693f.flags |= 4;
          }
          if (typeof _0x401c28.getSnapshotBeforeUpdate == "function") {
            _0x1c693f.flags |= 1024;
          }
        } else {
          if (typeof _0x401c28.componentDidUpdate == "function" && (_0x502a9f !== _0x294a6b.memoizedProps || _0x53c887 !== _0x294a6b.memoizedState)) {
            _0x1c693f.flags |= 4;
          }
          if (typeof _0x401c28.getSnapshotBeforeUpdate == "function" && (_0x502a9f !== _0x294a6b.memoizedProps || _0x53c887 !== _0x294a6b.memoizedState)) {
            _0x1c693f.flags |= 1024;
          }
          _0x1c693f.memoizedProps = _0xc8f191;
          _0x1c693f.memoizedState = _0x45d774;
        }
        _0x401c28.props = _0xc8f191;
        _0x401c28.state = _0x45d774;
        _0x401c28.context = _0x2c02b5;
        _0xc8f191 = _0x5172f8;
      } else {
        if (typeof _0x401c28.componentDidUpdate == "function" && (_0x502a9f !== _0x294a6b.memoizedProps || _0x53c887 !== _0x294a6b.memoizedState)) {
          _0x1c693f.flags |= 4;
        }
        if (typeof _0x401c28.getSnapshotBeforeUpdate == "function" && (_0x502a9f !== _0x294a6b.memoizedProps || _0x53c887 !== _0x294a6b.memoizedState)) {
          _0x1c693f.flags |= 1024;
        }
        _0xc8f191 = false;
      }
    }
    _0x401c28 = _0xc8f191;
    _0x4e6de1(_0x294a6b, _0x1c693f);
    _0xc8f191 = !!(_0x1c693f.flags & 128);
    if (_0x401c28 || _0xc8f191) {
      _0x401c28 = _0x1c693f.stateNode;
      _0x5c9445 = _0xc8f191 && typeof _0x5c9445.getDerivedStateFromError != "function" ? null : _0x401c28.render();
      _0x1c693f.flags |= 1;
      if (_0x294a6b !== null && _0xc8f191) {
        _0x1c693f.child = _0x121aab(_0x1c693f, _0x294a6b.child, null, _0x179c0a);
        _0x1c693f.child = _0x121aab(_0x1c693f, null, _0x5c9445, _0x179c0a);
      } else {
        _0x1067c1(_0x294a6b, _0x1c693f, _0x5c9445, _0x179c0a);
      }
      _0x1c693f.memoizedState = _0x401c28.state;
      _0x294a6b = _0x1c693f.child;
    } else {
      _0x294a6b = _0x5915d1(_0x294a6b, _0x1c693f, _0x179c0a);
    }
    return _0x294a6b;
  }
  function _0x54806d(_0x4c5786, _0x580059, _0x43de6f, _0x54373c) {
    _0x4a25e9();
    _0x580059.flags |= 256;
    _0x1067c1(_0x4c5786, _0x580059, _0x43de6f, _0x54373c);
    return _0x580059.child;
  }
  var _0x20dcdf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function _0x31bac3(_0x344d6a) {
    return {
      baseLanes: _0x344d6a,
      cachePool: _0x40a8d7()
    };
  }
  function _0x208366(_0x28cfe8, _0x358eb9, _0x2c7918) {
    _0x28cfe8 = _0x28cfe8 !== null ? _0x28cfe8.childLanes & ~_0x2c7918 : 0;
    if (_0x358eb9) {
      _0x28cfe8 |= _0x38af2a;
    }
    return _0x28cfe8;
  }
  function _0x5575b7(_0x2594ad, _0x16f9e9, _0x2b990c) {
    var _0x33a30e;
    var _0x2fed3d = _0x16f9e9.pendingProps;
    var _0x3d4b39 = false;
    var _0x540763 = !!(_0x16f9e9.flags & 128);
    if (!(_0x33a30e = _0x540763)) {
      _0x33a30e = (_0x2594ad === null || _0x2594ad.memoizedState !== null) && !!(_0xbb0582.current & 2);
    }
    if (_0x33a30e) {
      _0x3d4b39 = true;
      _0x16f9e9.flags &= -129;
    }
    _0x33a30e = !!(_0x16f9e9.flags & 32);
    _0x16f9e9.flags &= -33;
    if (_0x2594ad === null) {
      if (_0x823508) {
        if (_0x3d4b39) {
          _0x3a5835(_0x16f9e9);
        } else {
          _0x511f4e();
        }
        if (_0x2594ad = _0x57de98) {
          if ((_0x2594ad = (_0x2594ad = _0x29ca00(_0x2594ad, _0x6462e2)) !== null && _0x2594ad.data !== "&" ? _0x2594ad : null) !== null) {
            _0x16f9e9.memoizedState = {
              dehydrated: _0x2594ad,
              treeContext: _0x595d5b !== null ? {
                id: _0x12c9e1,
                overflow: _0x2668a2
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            };
            (_0x2b990c = _0xd1f4e7(_0x2594ad)).return = _0x16f9e9;
            _0x16f9e9.child = _0x2b990c;
            _0x5ad7b0 = _0x16f9e9;
            _0x57de98 = null;
          }
        } else {
          _0x2594ad = null;
        }
        if (_0x2594ad === null) {
          throw _0x4f1a46(_0x16f9e9);
        }
        if (_0x2a5706(_0x2594ad)) {
          _0x16f9e9.lanes = 32;
        } else {
          _0x16f9e9.lanes = 536870912;
        }
        return null;
      }
      var _0xad4eca = _0x2fed3d.children;
      _0x2fed3d = _0x2fed3d.fallback;
      if (_0x3d4b39) {
        _0x511f4e();
        _0xad4eca = _0x2f9a48({
          mode: "hidden",
          children: _0xad4eca
        }, _0x3d4b39 = _0x16f9e9.mode);
        _0x2fed3d = _0xd521c7(_0x2fed3d, _0x3d4b39, _0x2b990c, null);
        _0xad4eca.return = _0x16f9e9;
        _0x2fed3d.return = _0x16f9e9;
        _0xad4eca.sibling = _0x2fed3d;
        _0x16f9e9.child = _0xad4eca;
        (_0x2fed3d = _0x16f9e9.child).memoizedState = _0x31bac3(_0x2b990c);
        _0x2fed3d.childLanes = _0x208366(_0x2594ad, _0x33a30e, _0x2b990c);
        _0x16f9e9.memoizedState = _0x20dcdf;
        return _0x1acede(null, _0x2fed3d);
      } else {
        _0x3a5835(_0x16f9e9);
        return _0x5f0324(_0x16f9e9, _0xad4eca);
      }
    }
    var _0x3edd3b = _0x2594ad.memoizedState;
    if (_0x3edd3b !== null && (_0xad4eca = _0x3edd3b.dehydrated) !== null) {
      if (_0x540763) {
        if (_0x16f9e9.flags & 256) {
          _0x3a5835(_0x16f9e9);
          _0x16f9e9.flags &= -257;
          _0x16f9e9 = _0x120010(_0x2594ad, _0x16f9e9, _0x2b990c);
        } else if (_0x16f9e9.memoizedState !== null) {
          _0x511f4e();
          _0x16f9e9.child = _0x2594ad.child;
          _0x16f9e9.flags |= 128;
          _0x16f9e9 = null;
        } else {
          _0x511f4e();
          _0xad4eca = _0x2fed3d.fallback;
          _0x3d4b39 = _0x16f9e9.mode;
          _0x2fed3d = _0x2f9a48({
            mode: "visible",
            children: _0x2fed3d.children
          }, _0x3d4b39);
          (_0xad4eca = _0xd521c7(_0xad4eca, _0x3d4b39, _0x2b990c, null)).flags |= 2;
          _0x2fed3d.return = _0x16f9e9;
          _0xad4eca.return = _0x16f9e9;
          _0x2fed3d.sibling = _0xad4eca;
          _0x16f9e9.child = _0x2fed3d;
          _0x121aab(_0x16f9e9, _0x2594ad.child, null, _0x2b990c);
          (_0x2fed3d = _0x16f9e9.child).memoizedState = _0x31bac3(_0x2b990c);
          _0x2fed3d.childLanes = _0x208366(_0x2594ad, _0x33a30e, _0x2b990c);
          _0x16f9e9.memoizedState = _0x20dcdf;
          _0x16f9e9 = _0x1acede(null, _0x2fed3d);
        }
      } else {
        _0x3a5835(_0x16f9e9);
        if (_0x2a5706(_0xad4eca)) {
          if (_0x33a30e = _0xad4eca.nextSibling && _0xad4eca.nextSibling.dataset) {
            var _0x233599 = _0x33a30e.dgst;
          }
          _0x33a30e = _0x233599;
          (_0x2fed3d = Error(_0x34c7b9(419))).stack = "";
          _0x2fed3d.digest = _0x33a30e;
          _0x2725db({
            value: _0x2fed3d,
            source: null,
            stack: null
          });
          _0x16f9e9 = _0x120010(_0x2594ad, _0x16f9e9, _0x2b990c);
        } else {
          if (!_0x448eaf) {
            _0x29615d(_0x2594ad, _0x16f9e9, _0x2b990c, false);
          }
          _0x33a30e = (_0x2b990c & _0x2594ad.childLanes) !== 0;
          if (_0x448eaf || _0x33a30e) {
            if ((_0x33a30e = _0x42aa40) !== null && (_0x2fed3d = _0xbd17ac(_0x33a30e, _0x2b990c)) !== 0 && _0x2fed3d !== _0x3edd3b.retryLane) {
              _0x3edd3b.retryLane = _0x2fed3d;
              _0x2b6f8b(_0x2594ad, _0x2fed3d);
              _0x3968da(_0x33a30e, 0, _0x2fed3d);
              throw _0x22cca2;
            }
            if (!_0x5e355f(_0xad4eca)) {
              _0xd49ba5();
            }
            _0x16f9e9 = _0x120010(_0x2594ad, _0x16f9e9, _0x2b990c);
          } else if (_0x5e355f(_0xad4eca)) {
            _0x16f9e9.flags |= 192;
            _0x16f9e9.child = _0x2594ad.child;
            _0x16f9e9 = null;
          } else {
            _0x2594ad = _0x3edd3b.treeContext;
            _0x57de98 = _0x45f4a9(_0xad4eca.nextSibling);
            _0x5ad7b0 = _0x16f9e9;
            _0x823508 = true;
            _0x410af8 = null;
            _0x6462e2 = false;
            if (_0x2594ad !== null) {
              _0x1c3a97(_0x16f9e9, _0x2594ad);
            }
            (_0x16f9e9 = _0x5f0324(_0x16f9e9, _0x2fed3d.children)).flags |= 4096;
          }
        }
      }
      return _0x16f9e9;
    }
    if (_0x3d4b39) {
      _0x511f4e();
      _0xad4eca = _0x2fed3d.fallback;
      _0x3d4b39 = _0x16f9e9.mode;
      _0x233599 = (_0x3edd3b = _0x2594ad.child).sibling;
      (_0x2fed3d = _0x9ba748(_0x3edd3b, {
        mode: "hidden",
        children: _0x2fed3d.children
      })).subtreeFlags = _0x3edd3b.subtreeFlags & 65011712;
      if (_0x233599 !== null) {
        _0xad4eca = _0x9ba748(_0x233599, _0xad4eca);
      } else {
        (_0xad4eca = _0xd521c7(_0xad4eca, _0x3d4b39, _0x2b990c, null)).flags |= 2;
      }
      _0xad4eca.return = _0x16f9e9;
      _0x2fed3d.return = _0x16f9e9;
      _0x2fed3d.sibling = _0xad4eca;
      _0x16f9e9.child = _0x2fed3d;
      _0x1acede(null, _0x2fed3d);
      _0x2fed3d = _0x16f9e9.child;
      if ((_0xad4eca = _0x2594ad.child.memoizedState) === null) {
        _0xad4eca = _0x31bac3(_0x2b990c);
      } else {
        if ((_0x3d4b39 = _0xad4eca.cachePool) !== null) {
          _0x3edd3b = _0x156a91._currentValue;
          _0x3d4b39 = _0x3d4b39.parent !== _0x3edd3b ? {
            parent: _0x3edd3b,
            pool: _0x3edd3b
          } : _0x3d4b39;
        } else {
          _0x3d4b39 = _0x40a8d7();
        }
        _0xad4eca = {
          baseLanes: _0xad4eca.baseLanes | _0x2b990c,
          cachePool: _0x3d4b39
        };
      }
      _0x2fed3d.memoizedState = _0xad4eca;
      _0x2fed3d.childLanes = _0x208366(_0x2594ad, _0x33a30e, _0x2b990c);
      _0x16f9e9.memoizedState = _0x20dcdf;
      return _0x1acede(_0x2594ad.child, _0x2fed3d);
    } else {
      _0x3a5835(_0x16f9e9);
      _0x2594ad = (_0x2b990c = _0x2594ad.child).sibling;
      (_0x2b990c = _0x9ba748(_0x2b990c, {
        mode: "visible",
        children: _0x2fed3d.children
      })).return = _0x16f9e9;
      _0x2b990c.sibling = null;
      if (_0x2594ad !== null) {
        if ((_0x33a30e = _0x16f9e9.deletions) === null) {
          _0x16f9e9.deletions = [_0x2594ad];
          _0x16f9e9.flags |= 16;
        } else {
          _0x33a30e.push(_0x2594ad);
        }
      }
      _0x16f9e9.child = _0x2b990c;
      _0x16f9e9.memoizedState = null;
      return _0x2b990c;
    }
  }
  function _0x5f0324(_0x39f75e, _0x36ee4a) {
    (_0x36ee4a = _0x2f9a48({
      mode: "visible",
      children: _0x36ee4a
    }, _0x39f75e.mode)).return = _0x39f75e;
    return _0x39f75e.child = _0x36ee4a;
  }
  function _0x2f9a48(_0x54b5aa, _0x51c76f) {
    (_0x54b5aa = _0x147223(22, _0x54b5aa, null, _0x51c76f)).lanes = 0;
    return _0x54b5aa;
  }
  function _0x120010(_0x505c3e, _0x504f4c, _0x30f0e0) {
    _0x121aab(_0x504f4c, _0x505c3e.child, null, _0x30f0e0);
    (_0x505c3e = _0x5f0324(_0x504f4c, _0x504f4c.pendingProps.children)).flags |= 2;
    _0x504f4c.memoizedState = null;
    return _0x505c3e;
  }
  function _0x2854e6(_0x50b15d, _0x37261d, _0x3c83c0) {
    _0x50b15d.lanes |= _0x37261d;
    var _0x33eaed = _0x50b15d.alternate;
    if (_0x33eaed !== null) {
      _0x33eaed.lanes |= _0x37261d;
    }
    _0x451faf(_0x50b15d.return, _0x37261d, _0x3c83c0);
  }
  function _0xf0d4d1(_0x4e9b2e, _0x149665, _0x18a4b5, _0x508b2d, _0x4b64f0, _0x286371) {
    var _0x556f8c = _0x4e9b2e.memoizedState;
    if (_0x556f8c === null) {
      _0x4e9b2e.memoizedState = {
        isBackwards: _0x149665,
        rendering: null,
        renderingStartTime: 0,
        last: _0x508b2d,
        tail: _0x18a4b5,
        tailMode: _0x4b64f0,
        treeForkCount: _0x286371
      };
    } else {
      _0x556f8c.isBackwards = _0x149665;
      _0x556f8c.rendering = null;
      _0x556f8c.renderingStartTime = 0;
      _0x556f8c.last = _0x508b2d;
      _0x556f8c.tail = _0x18a4b5;
      _0x556f8c.tailMode = _0x4b64f0;
      _0x556f8c.treeForkCount = _0x286371;
    }
  }
  function _0x281dcf(_0x5522cd, _0x7fac2b, _0x1f40dd) {
    var _0x3c3a45 = _0x7fac2b.pendingProps;
    var _0x53e3b9 = _0x3c3a45.revealOrder;
    var _0x4a443a = _0x3c3a45.tail;
    _0x3c3a45 = _0x3c3a45.children;
    var _0x4ab442 = _0xbb0582.current;
    var _0x165491 = !!(_0x4ab442 & 2);
    if (_0x165491) {
      _0x4ab442 = _0x4ab442 & 1 | 2;
      _0x7fac2b.flags |= 128;
    } else {
      _0x4ab442 &= 1;
    }
    _0x45c6e5(_0xbb0582, _0x4ab442);
    _0x1067c1(_0x5522cd, _0x7fac2b, _0x3c3a45, _0x1f40dd);
    _0x3c3a45 = _0x823508 ? _0x13de35 : 0;
    if (!_0x165491 && _0x5522cd !== null && _0x5522cd.flags & 128) {
      _0x5ef4ba: for (_0x5522cd = _0x7fac2b.child; _0x5522cd !== null;) {
        if (_0x5522cd.tag === 13) {
          if (_0x5522cd.memoizedState !== null) {
            _0x2854e6(_0x5522cd, _0x1f40dd, _0x7fac2b);
          }
        } else if (_0x5522cd.tag === 19) {
          _0x2854e6(_0x5522cd, _0x1f40dd, _0x7fac2b);
        } else if (_0x5522cd.child !== null) {
          _0x5522cd.child.return = _0x5522cd;
          _0x5522cd = _0x5522cd.child;
          continue;
        }
        if (_0x5522cd === _0x7fac2b) {
          break _0x5ef4ba;
        }
        while (_0x5522cd.sibling === null) {
          if (_0x5522cd.return === null || _0x5522cd.return === _0x7fac2b) {
            break _0x5ef4ba;
          }
          _0x5522cd = _0x5522cd.return;
        }
        _0x5522cd.sibling.return = _0x5522cd.return;
        _0x5522cd = _0x5522cd.sibling;
      }
    }
    switch (_0x53e3b9) {
      case "forwards":
        _0x1f40dd = _0x7fac2b.child;
        _0x53e3b9 = null;
        while (_0x1f40dd !== null) {
          if ((_0x5522cd = _0x1f40dd.alternate) !== null && _0x1930a4(_0x5522cd) === null) {
            _0x53e3b9 = _0x1f40dd;
          }
          _0x1f40dd = _0x1f40dd.sibling;
        }
        if ((_0x1f40dd = _0x53e3b9) === null) {
          _0x53e3b9 = _0x7fac2b.child;
          _0x7fac2b.child = null;
        } else {
          _0x53e3b9 = _0x1f40dd.sibling;
          _0x1f40dd.sibling = null;
        }
        _0xf0d4d1(_0x7fac2b, false, _0x53e3b9, _0x1f40dd, _0x4a443a, _0x3c3a45);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        _0x1f40dd = null;
        _0x53e3b9 = _0x7fac2b.child;
        _0x7fac2b.child = null;
        while (_0x53e3b9 !== null) {
          if ((_0x5522cd = _0x53e3b9.alternate) !== null && _0x1930a4(_0x5522cd) === null) {
            _0x7fac2b.child = _0x53e3b9;
            break;
          }
          _0x5522cd = _0x53e3b9.sibling;
          _0x53e3b9.sibling = _0x1f40dd;
          _0x1f40dd = _0x53e3b9;
          _0x53e3b9 = _0x5522cd;
        }
        _0xf0d4d1(_0x7fac2b, true, _0x1f40dd, null, _0x4a443a, _0x3c3a45);
        break;
      case "together":
        _0xf0d4d1(_0x7fac2b, false, null, null, undefined, _0x3c3a45);
        break;
      default:
        _0x7fac2b.memoizedState = null;
    }
    return _0x7fac2b.child;
  }
  function _0x5915d1(_0x498c61, _0x84eb04, _0x5c281d) {
    if (_0x498c61 !== null) {
      _0x84eb04.dependencies = _0x498c61.dependencies;
    }
    _0x1a001f |= _0x84eb04.lanes;
    if ((_0x5c281d & _0x84eb04.childLanes) === 0) {
      if (_0x498c61 === null) {
        return null;
      }
      _0x29615d(_0x498c61, _0x84eb04, _0x5c281d, false);
      if ((_0x5c281d & _0x84eb04.childLanes) === 0) {
        return null;
      }
    }
    if (_0x498c61 !== null && _0x84eb04.child !== _0x498c61.child) {
      throw Error(_0x34c7b9(153));
    }
    if (_0x84eb04.child !== null) {
      _0x5c281d = _0x9ba748(_0x498c61 = _0x84eb04.child, _0x498c61.pendingProps);
      _0x84eb04.child = _0x5c281d;
      _0x5c281d.return = _0x84eb04;
      while (_0x498c61.sibling !== null) {
        _0x498c61 = _0x498c61.sibling;
        (_0x5c281d = _0x5c281d.sibling = _0x9ba748(_0x498c61, _0x498c61.pendingProps)).return = _0x84eb04;
      }
      _0x5c281d.sibling = null;
    }
    return _0x84eb04.child;
  }
  function _0x3b4415(_0x28402f, _0x567915) {
    return (_0x28402f.lanes & _0x567915) !== 0 || (_0x28402f = _0x28402f.dependencies) !== null && !!_0x586fd9(_0x28402f);
  }
  function _0x2483b9(_0xfe94de, _0x616b02, _0x1c993a) {
    if (_0xfe94de !== null) {
      if (_0xfe94de.memoizedProps !== _0x616b02.pendingProps) {
        _0x448eaf = true;
      } else {
        if (!_0x3b4415(_0xfe94de, _0x1c993a) && !(_0x616b02.flags & 128)) {
          _0x448eaf = false;
          return function (_0x5a5fcc, _0x53fa7a, _0x2dc400) {
            switch (_0x53fa7a.tag) {
              case 3:
                _0x32e041(_0x53fa7a, _0x53fa7a.stateNode.containerInfo);
                _0x150c68(0, _0x156a91, _0x5a5fcc.memoizedState.cache);
                _0x4a25e9();
                break;
              case 27:
              case 5:
                _0x86650b(_0x53fa7a);
                break;
              case 4:
                _0x32e041(_0x53fa7a, _0x53fa7a.stateNode.containerInfo);
                break;
              case 10:
                _0x150c68(0, _0x53fa7a.type, _0x53fa7a.memoizedProps.value);
                break;
              case 31:
                if (_0x53fa7a.memoizedState !== null) {
                  _0x53fa7a.flags |= 128;
                  _0x3bbe64(_0x53fa7a);
                  return null;
                }
                break;
              case 13:
                var _0x22d174 = _0x53fa7a.memoizedState;
                if (_0x22d174 !== null) {
                  if (_0x22d174.dehydrated !== null) {
                    _0x3a5835(_0x53fa7a);
                    _0x53fa7a.flags |= 128;
                    return null;
                  } else if ((_0x2dc400 & _0x53fa7a.child.childLanes) !== 0) {
                    return _0x5575b7(_0x5a5fcc, _0x53fa7a, _0x2dc400);
                  } else {
                    _0x3a5835(_0x53fa7a);
                    if ((_0x5a5fcc = _0x5915d1(_0x5a5fcc, _0x53fa7a, _0x2dc400)) !== null) {
                      return _0x5a5fcc.sibling;
                    } else {
                      return null;
                    }
                  }
                }
                _0x3a5835(_0x53fa7a);
                break;
              case 19:
                var _0x23c412 = !!(_0x5a5fcc.flags & 128);
                if (!(_0x22d174 = (_0x2dc400 & _0x53fa7a.childLanes) !== 0)) {
                  _0x29615d(_0x5a5fcc, _0x53fa7a, _0x2dc400, false);
                  _0x22d174 = (_0x2dc400 & _0x53fa7a.childLanes) !== 0;
                }
                if (_0x23c412) {
                  if (_0x22d174) {
                    return _0x281dcf(_0x5a5fcc, _0x53fa7a, _0x2dc400);
                  }
                  _0x53fa7a.flags |= 128;
                }
                if ((_0x23c412 = _0x53fa7a.memoizedState) !== null) {
                  _0x23c412.rendering = null;
                  _0x23c412.tail = null;
                  _0x23c412.lastEffect = null;
                }
                _0x45c6e5(_0xbb0582, _0xbb0582.current);
                if (_0x22d174) {
                  break;
                }
                return null;
              case 22:
                _0x53fa7a.lanes = 0;
                return _0x178ceb(_0x5a5fcc, _0x53fa7a, _0x2dc400, _0x53fa7a.pendingProps);
              case 24:
                _0x150c68(0, _0x156a91, _0x5a5fcc.memoizedState.cache);
            }
            return _0x5915d1(_0x5a5fcc, _0x53fa7a, _0x2dc400);
          }(_0xfe94de, _0x616b02, _0x1c993a);
        }
        _0x448eaf = !!(_0xfe94de.flags & 131072);
      }
    } else {
      _0x448eaf = false;
      if (_0x823508 && _0x616b02.flags & 1048576) {
        _0x47004d(_0x616b02, _0x13de35, _0x616b02.index);
      }
    }
    _0x616b02.lanes = 0;
    switch (_0x616b02.tag) {
      case 16:
        _0xb30f2c: {
          var _0x11fb3a = _0x616b02.pendingProps;
          _0xfe94de = _0x958efc(_0x616b02.elementType);
          _0x616b02.type = _0xfe94de;
          if (typeof _0xfe94de != "function") {
            if (_0xfe94de != null) {
              var _0x53ba0f = _0xfe94de.$$typeof;
              if (_0x53ba0f === _0x5260c6) {
                _0x616b02.tag = 11;
                _0x616b02 = _0x2f3137(null, _0x616b02, _0xfe94de, _0x11fb3a, _0x1c993a);
                break _0xb30f2c;
              }
              if (_0x53ba0f === _0x1b20b5) {
                _0x616b02.tag = 14;
                _0x616b02 = _0x460b2f(null, _0x616b02, _0xfe94de, _0x11fb3a, _0x1c993a);
                break _0xb30f2c;
              }
            }
            _0x616b02 = _0x340988(_0xfe94de) || _0xfe94de;
            throw Error(_0x34c7b9(306, _0x616b02, ""));
          }
          if (_0xb233b8(_0xfe94de)) {
            _0x11fb3a = _0x2bb569(_0xfe94de, _0x11fb3a);
            _0x616b02.tag = 1;
            _0x616b02 = _0x1ef841(null, _0x616b02, _0xfe94de, _0x11fb3a, _0x1c993a);
          } else {
            _0x616b02.tag = 0;
            _0x616b02 = _0x59554c(null, _0x616b02, _0xfe94de, _0x11fb3a, _0x1c993a);
          }
        }
        return _0x616b02;
      case 0:
        return _0x59554c(_0xfe94de, _0x616b02, _0x616b02.type, _0x616b02.pendingProps, _0x1c993a);
      case 1:
        return _0x1ef841(_0xfe94de, _0x616b02, _0x11fb3a = _0x616b02.type, _0x53ba0f = _0x2bb569(_0x11fb3a, _0x616b02.pendingProps), _0x1c993a);
      case 3:
        _0x589146: {
          _0x32e041(_0x616b02, _0x616b02.stateNode.containerInfo);
          if (_0xfe94de === null) {
            throw Error(_0x34c7b9(387));
          }
          _0x11fb3a = _0x616b02.pendingProps;
          var _0x3ff8f5 = _0x616b02.memoizedState;
          _0x53ba0f = _0x3ff8f5.element;
          _0x5bde88(_0xfe94de, _0x616b02);
          _0x4d991b(_0x616b02, _0x11fb3a, null, _0x1c993a);
          var _0x2ecd02 = _0x616b02.memoizedState;
          _0x11fb3a = _0x2ecd02.cache;
          _0x150c68(0, _0x156a91, _0x11fb3a);
          if (_0x11fb3a !== _0x3ff8f5.cache) {
            _0x4afde8(_0x616b02, [_0x156a91], _0x1c993a, true);
          }
          _0x3fdcc4();
          _0x11fb3a = _0x2ecd02.element;
          if (_0x3ff8f5.isDehydrated) {
            _0x3ff8f5 = {
              element: _0x11fb3a,
              isDehydrated: false,
              cache: _0x2ecd02.cache
            };
            _0x616b02.updateQueue.baseState = _0x3ff8f5;
            _0x616b02.memoizedState = _0x3ff8f5;
            if (_0x616b02.flags & 256) {
              _0x616b02 = _0x54806d(_0xfe94de, _0x616b02, _0x11fb3a, _0x1c993a);
              break _0x589146;
            }
            if (_0x11fb3a !== _0x53ba0f) {
              _0x2725db(_0x53ba0f = _0x2ed85e(Error(_0x34c7b9(424)), _0x616b02));
              _0x616b02 = _0x54806d(_0xfe94de, _0x616b02, _0x11fb3a, _0x1c993a);
              break _0x589146;
            }
            _0xfe94de = (_0xfe94de = _0x616b02.stateNode.containerInfo).nodeType === 9 ? _0xfe94de.body : _0xfe94de.nodeName === "HTML" ? _0xfe94de.ownerDocument.body : _0xfe94de;
            _0x57de98 = _0x45f4a9(_0xfe94de.firstChild);
            _0x5ad7b0 = _0x616b02;
            _0x823508 = true;
            _0x410af8 = null;
            _0x6462e2 = true;
            _0x1c993a = _0x435a73(_0x616b02, null, _0x11fb3a, _0x1c993a);
            _0x616b02.child = _0x1c993a;
            while (_0x1c993a) {
              _0x1c993a.flags = _0x1c993a.flags & -3 | 4096;
              _0x1c993a = _0x1c993a.sibling;
            }
          } else {
            _0x4a25e9();
            if (_0x11fb3a === _0x53ba0f) {
              _0x616b02 = _0x5915d1(_0xfe94de, _0x616b02, _0x1c993a);
              break _0x589146;
            }
            _0x1067c1(_0xfe94de, _0x616b02, _0x11fb3a, _0x1c993a);
          }
          _0x616b02 = _0x616b02.child;
        }
        return _0x616b02;
      case 26:
        _0x4e6de1(_0xfe94de, _0x616b02);
        if (_0xfe94de === null) {
          if (_0x1c993a = _0x7a0e0a(_0x616b02.type, null, _0x616b02.pendingProps, null)) {
            _0x616b02.memoizedState = _0x1c993a;
          } else if (!_0x823508) {
            _0x1c993a = _0x616b02.type;
            _0xfe94de = _0x616b02.pendingProps;
            (_0x11fb3a = _0x4d6ed2(_0x2d4ef4.current).createElement(_0x1c993a))[_0x941386] = _0x616b02;
            _0x11fb3a[_0x21a328] = _0xfe94de;
            _0x1541af(_0x11fb3a, _0x1c993a, _0xfe94de);
            _0x414312(_0x11fb3a);
            _0x616b02.stateNode = _0x11fb3a;
          }
        } else {
          _0x616b02.memoizedState = _0x7a0e0a(_0x616b02.type, _0xfe94de.memoizedProps, _0x616b02.pendingProps, _0xfe94de.memoizedState);
        }
        return null;
      case 27:
        _0x86650b(_0x616b02);
        if (_0xfe94de === null && _0x823508) {
          _0x11fb3a = _0x616b02.stateNode = _0x32e984(_0x616b02.type, _0x616b02.pendingProps, _0x2d4ef4.current);
          _0x5ad7b0 = _0x616b02;
          _0x6462e2 = true;
          _0x53ba0f = _0x57de98;
          if (_0x6fae4f(_0x616b02.type)) {
            _0x50990b = _0x53ba0f;
            _0x57de98 = _0x45f4a9(_0x11fb3a.firstChild);
          } else {
            _0x57de98 = _0x53ba0f;
          }
        }
        _0x1067c1(_0xfe94de, _0x616b02, _0x616b02.pendingProps.children, _0x1c993a);
        _0x4e6de1(_0xfe94de, _0x616b02);
        if (_0xfe94de === null) {
          _0x616b02.flags |= 4194304;
        }
        return _0x616b02.child;
      case 5:
        if (_0xfe94de === null && _0x823508) {
          if (_0x53ba0f = _0x11fb3a = _0x57de98) {
            if ((_0x11fb3a = function (_0x3f527e, _0x2e330f, _0x270e64, _0x5776b7) {
              while (_0x3f527e.nodeType === 1) {
                var _0x4ce5ea = _0x270e64;
                if (_0x3f527e.nodeName.toLowerCase() !== _0x2e330f.toLowerCase()) {
                  if (!_0x5776b7 && (_0x3f527e.nodeName !== "INPUT" || _0x3f527e.type !== "hidden")) {
                    break;
                  }
                } else if (_0x5776b7) {
                  if (!_0x3f527e[_0x28419d]) {
                    switch (_0x2e330f) {
                      case "meta":
                        if (!_0x3f527e.hasAttribute("itemprop")) {
                          break;
                        }
                        return _0x3f527e;
                      case "link":
                        if ((_0x4b318e = _0x3f527e.getAttribute("rel")) === "stylesheet" && _0x3f527e.hasAttribute("data-precedence")) {
                          break;
                        }
                        if (_0x4b318e !== _0x4ce5ea.rel || _0x3f527e.getAttribute("href") !== (_0x4ce5ea.href == null || _0x4ce5ea.href === "" ? null : _0x4ce5ea.href) || _0x3f527e.getAttribute("crossorigin") !== (_0x4ce5ea.crossOrigin == null ? null : _0x4ce5ea.crossOrigin) || _0x3f527e.getAttribute("title") !== (_0x4ce5ea.title == null ? null : _0x4ce5ea.title)) {
                          break;
                        }
                        return _0x3f527e;
                      case "style":
                        if (_0x3f527e.hasAttribute("data-precedence")) {
                          break;
                        }
                        return _0x3f527e;
                      case "script":
                        if (((_0x4b318e = _0x3f527e.getAttribute("src")) !== (_0x4ce5ea.src == null ? null : _0x4ce5ea.src) || _0x3f527e.getAttribute("type") !== (_0x4ce5ea.type == null ? null : _0x4ce5ea.type) || _0x3f527e.getAttribute("crossorigin") !== (_0x4ce5ea.crossOrigin == null ? null : _0x4ce5ea.crossOrigin)) && _0x4b318e && _0x3f527e.hasAttribute("async") && !_0x3f527e.hasAttribute("itemprop")) {
                          break;
                        }
                        return _0x3f527e;
                      default:
                        return _0x3f527e;
                    }
                  }
                } else {
                  if (_0x2e330f !== "input" || _0x3f527e.type !== "hidden") {
                    return _0x3f527e;
                  }
                  var _0x4b318e = _0x4ce5ea.name == null ? null : "" + _0x4ce5ea.name;
                  if (_0x4ce5ea.type === "hidden" && _0x3f527e.getAttribute("name") === _0x4b318e) {
                    return _0x3f527e;
                  }
                }
                if ((_0x3f527e = _0x45f4a9(_0x3f527e.nextSibling)) === null) {
                  break;
                }
              }
              return null;
            }(_0x11fb3a, _0x616b02.type, _0x616b02.pendingProps, _0x6462e2)) !== null) {
              _0x616b02.stateNode = _0x11fb3a;
              _0x5ad7b0 = _0x616b02;
              _0x57de98 = _0x45f4a9(_0x11fb3a.firstChild);
              _0x6462e2 = false;
              _0x53ba0f = true;
            } else {
              _0x53ba0f = false;
            }
          }
          if (!_0x53ba0f) {
            _0x4f1a46(_0x616b02);
          }
        }
        _0x86650b(_0x616b02);
        _0x53ba0f = _0x616b02.type;
        _0x3ff8f5 = _0x616b02.pendingProps;
        _0x2ecd02 = _0xfe94de !== null ? _0xfe94de.memoizedProps : null;
        _0x11fb3a = _0x3ff8f5.children;
        if (_0x323586(_0x53ba0f, _0x3ff8f5)) {
          _0x11fb3a = null;
        } else if (_0x2ecd02 !== null && _0x323586(_0x53ba0f, _0x2ecd02)) {
          _0x616b02.flags |= 32;
        }
        if (_0x616b02.memoizedState !== null) {
          _0x53ba0f = _0x2b1eff(_0xfe94de, _0x616b02, _0x43aa70, null, null, _0x1c993a);
          _0x508408._currentValue = _0x53ba0f;
        }
        _0x4e6de1(_0xfe94de, _0x616b02);
        _0x1067c1(_0xfe94de, _0x616b02, _0x11fb3a, _0x1c993a);
        return _0x616b02.child;
      case 6:
        if (_0xfe94de === null && _0x823508) {
          if (_0xfe94de = _0x1c993a = _0x57de98) {
            if ((_0x1c993a = function (_0x5ad9e6, _0x3d9fef, _0x2eef24) {
              if (_0x3d9fef === "") {
                return null;
              }
              while (_0x5ad9e6.nodeType !== 3) {
                if ((_0x5ad9e6.nodeType !== 1 || _0x5ad9e6.nodeName !== "INPUT" || _0x5ad9e6.type !== "hidden") && !_0x2eef24) {
                  return null;
                }
                if ((_0x5ad9e6 = _0x45f4a9(_0x5ad9e6.nextSibling)) === null) {
                  return null;
                }
              }
              return _0x5ad9e6;
            }(_0x1c993a, _0x616b02.pendingProps, _0x6462e2)) !== null) {
              _0x616b02.stateNode = _0x1c993a;
              _0x5ad7b0 = _0x616b02;
              _0x57de98 = null;
              _0xfe94de = true;
            } else {
              _0xfe94de = false;
            }
          }
          if (!_0xfe94de) {
            _0x4f1a46(_0x616b02);
          }
        }
        return null;
      case 13:
        return _0x5575b7(_0xfe94de, _0x616b02, _0x1c993a);
      case 4:
        _0x32e041(_0x616b02, _0x616b02.stateNode.containerInfo);
        _0x11fb3a = _0x616b02.pendingProps;
        if (_0xfe94de === null) {
          _0x616b02.child = _0x121aab(_0x616b02, null, _0x11fb3a, _0x1c993a);
        } else {
          _0x1067c1(_0xfe94de, _0x616b02, _0x11fb3a, _0x1c993a);
        }
        return _0x616b02.child;
      case 11:
        return _0x2f3137(_0xfe94de, _0x616b02, _0x616b02.type, _0x616b02.pendingProps, _0x1c993a);
      case 7:
        _0x1067c1(_0xfe94de, _0x616b02, _0x616b02.pendingProps, _0x1c993a);
        return _0x616b02.child;
      case 8:
      case 12:
        _0x1067c1(_0xfe94de, _0x616b02, _0x616b02.pendingProps.children, _0x1c993a);
        return _0x616b02.child;
      case 10:
        _0x11fb3a = _0x616b02.pendingProps;
        _0x150c68(0, _0x616b02.type, _0x11fb3a.value);
        _0x1067c1(_0xfe94de, _0x616b02, _0x11fb3a.children, _0x1c993a);
        return _0x616b02.child;
      case 9:
        _0x53ba0f = _0x616b02.type._context;
        _0x11fb3a = _0x616b02.pendingProps.children;
        _0x5141e1(_0x616b02);
        _0x11fb3a = _0x11fb3a(_0x53ba0f = _0x4d359e(_0x53ba0f));
        _0x616b02.flags |= 1;
        _0x1067c1(_0xfe94de, _0x616b02, _0x11fb3a, _0x1c993a);
        return _0x616b02.child;
      case 14:
        return _0x460b2f(_0xfe94de, _0x616b02, _0x616b02.type, _0x616b02.pendingProps, _0x1c993a);
      case 15:
        return _0x2c6994(_0xfe94de, _0x616b02, _0x616b02.type, _0x616b02.pendingProps, _0x1c993a);
      case 19:
        return _0x281dcf(_0xfe94de, _0x616b02, _0x1c993a);
      case 31:
        return function (_0x181299, _0x1c14a8, _0x4af520) {
          var _0x4a20be = _0x1c14a8.pendingProps;
          var _0x220c12 = !!(_0x1c14a8.flags & 128);
          _0x1c14a8.flags &= -129;
          if (_0x181299 === null) {
            if (_0x823508) {
              if (_0x4a20be.mode === "hidden") {
                _0x181299 = _0x1fee4f(_0x1c14a8, _0x4a20be);
                _0x1c14a8.lanes = 536870912;
                return _0x1acede(null, _0x181299);
              }
              _0x3bbe64(_0x1c14a8);
              if (_0x181299 = _0x57de98) {
                if ((_0x181299 = (_0x181299 = _0x29ca00(_0x181299, _0x6462e2)) !== null && _0x181299.data === "&" ? _0x181299 : null) !== null) {
                  _0x1c14a8.memoizedState = {
                    dehydrated: _0x181299,
                    treeContext: _0x595d5b !== null ? {
                      id: _0x12c9e1,
                      overflow: _0x2668a2
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                  };
                  (_0x4af520 = _0xd1f4e7(_0x181299)).return = _0x1c14a8;
                  _0x1c14a8.child = _0x4af520;
                  _0x5ad7b0 = _0x1c14a8;
                  _0x57de98 = null;
                }
              } else {
                _0x181299 = null;
              }
              if (_0x181299 === null) {
                throw _0x4f1a46(_0x1c14a8);
              }
              _0x1c14a8.lanes = 536870912;
              return null;
            }
            return _0x1fee4f(_0x1c14a8, _0x4a20be);
          }
          var _0x2be837 = _0x181299.memoizedState;
          if (_0x2be837 !== null) {
            var _0x16954a = _0x2be837.dehydrated;
            _0x3bbe64(_0x1c14a8);
            if (_0x220c12) {
              if (_0x1c14a8.flags & 256) {
                _0x1c14a8.flags &= -257;
                _0x1c14a8 = _0x546153(_0x181299, _0x1c14a8, _0x4af520);
              } else {
                if (_0x1c14a8.memoizedState === null) {
                  throw Error(_0x34c7b9(558));
                }
                _0x1c14a8.child = _0x181299.child;
                _0x1c14a8.flags |= 128;
                _0x1c14a8 = null;
              }
            } else {
              if (!_0x448eaf) {
                _0x29615d(_0x181299, _0x1c14a8, _0x4af520, false);
              }
              _0x220c12 = (_0x4af520 & _0x181299.childLanes) !== 0;
              if (_0x448eaf || _0x220c12) {
                if ((_0x4a20be = _0x42aa40) !== null && (_0x16954a = _0xbd17ac(_0x4a20be, _0x4af520)) !== 0 && _0x16954a !== _0x2be837.retryLane) {
                  _0x2be837.retryLane = _0x16954a;
                  _0x2b6f8b(_0x181299, _0x16954a);
                  _0x3968da(_0x4a20be, 0, _0x16954a);
                  throw _0x22cca2;
                }
                _0xd49ba5();
                _0x1c14a8 = _0x546153(_0x181299, _0x1c14a8, _0x4af520);
              } else {
                _0x181299 = _0x2be837.treeContext;
                _0x57de98 = _0x45f4a9(_0x16954a.nextSibling);
                _0x5ad7b0 = _0x1c14a8;
                _0x823508 = true;
                _0x410af8 = null;
                _0x6462e2 = false;
                if (_0x181299 !== null) {
                  _0x1c3a97(_0x1c14a8, _0x181299);
                }
                (_0x1c14a8 = _0x1fee4f(_0x1c14a8, _0x4a20be)).flags |= 4096;
              }
            }
            return _0x1c14a8;
          }
          (_0x181299 = _0x9ba748(_0x181299.child, {
            mode: _0x4a20be.mode,
            children: _0x4a20be.children
          })).ref = _0x1c14a8.ref;
          _0x1c14a8.child = _0x181299;
          _0x181299.return = _0x1c14a8;
          return _0x181299;
        }(_0xfe94de, _0x616b02, _0x1c993a);
      case 22:
        return _0x178ceb(_0xfe94de, _0x616b02, _0x1c993a, _0x616b02.pendingProps);
      case 24:
        _0x5141e1(_0x616b02);
        _0x11fb3a = _0x4d359e(_0x156a91);
        if (_0xfe94de === null) {
          if ((_0x53ba0f = _0xf146ff()) === null) {
            _0x53ba0f = _0x42aa40;
            _0x3ff8f5 = _0x226727();
            _0x53ba0f.pooledCache = _0x3ff8f5;
            _0x3ff8f5.refCount++;
            if (_0x3ff8f5 !== null) {
              _0x53ba0f.pooledCacheLanes |= _0x1c993a;
            }
            _0x53ba0f = _0x3ff8f5;
          }
          _0x616b02.memoizedState = {
            parent: _0x11fb3a,
            cache: _0x53ba0f
          };
          _0x2d0933(_0x616b02);
          _0x150c68(0, _0x156a91, _0x53ba0f);
        } else {
          if ((_0xfe94de.lanes & _0x1c993a) !== 0) {
            _0x5bde88(_0xfe94de, _0x616b02);
            _0x4d991b(_0x616b02, null, null, _0x1c993a);
            _0x3fdcc4();
          }
          _0x53ba0f = _0xfe94de.memoizedState;
          _0x3ff8f5 = _0x616b02.memoizedState;
          if (_0x53ba0f.parent !== _0x11fb3a) {
            _0x53ba0f = {
              parent: _0x11fb3a,
              cache: _0x11fb3a
            };
            _0x616b02.memoizedState = _0x53ba0f;
            if (_0x616b02.lanes === 0) {
              _0x616b02.memoizedState = _0x616b02.updateQueue.baseState = _0x53ba0f;
            }
            _0x150c68(0, _0x156a91, _0x11fb3a);
          } else {
            _0x11fb3a = _0x3ff8f5.cache;
            _0x150c68(0, _0x156a91, _0x11fb3a);
            if (_0x11fb3a !== _0x53ba0f.cache) {
              _0x4afde8(_0x616b02, [_0x156a91], _0x1c993a, true);
            }
          }
        }
        _0x1067c1(_0xfe94de, _0x616b02, _0x616b02.pendingProps.children, _0x1c993a);
        return _0x616b02.child;
      case 29:
        throw _0x616b02.pendingProps;
    }
    throw Error(_0x34c7b9(156, _0x616b02.tag));
  }
  function _0x53b993(_0x2de864) {
    _0x2de864.flags |= 4;
  }
  function _0x25c2f1(_0x31b3d9, _0x1a2e6c, _0x51a122, _0x3dcd30, _0x53201c) {
    if (_0x1a2e6c = !!(_0x31b3d9.mode & 32)) {
      _0x1a2e6c = false;
    }
    if (_0x1a2e6c) {
      _0x31b3d9.flags |= 16777216;
      if ((_0x53201c & 335544128) === _0x53201c) {
        if (_0x31b3d9.stateNode.complete) {
          _0x31b3d9.flags |= 8192;
        } else {
          if (!_0xedb19f()) {
            _0x586ab9 = _0x3bb41b;
            throw _0xa659e4;
          }
          _0x31b3d9.flags |= 8192;
        }
      }
    } else {
      _0x31b3d9.flags &= -16777217;
    }
  }
  function _0x3dd54b(_0x30fbfa, _0x9284c) {
    if (_0x9284c.type !== "stylesheet" || _0x9284c.state.loading & 4) {
      _0x30fbfa.flags &= -16777217;
    } else {
      _0x30fbfa.flags |= 16777216;
      if (!_0x5d966f(_0x9284c)) {
        if (!_0xedb19f()) {
          _0x586ab9 = _0x3bb41b;
          throw _0xa659e4;
        }
        _0x30fbfa.flags |= 8192;
      }
    }
  }
  function _0x4a6bbf(_0x3db640, _0x2b715f) {
    if (_0x2b715f !== null) {
      _0x3db640.flags |= 4;
    }
    if (_0x3db640.flags & 16384) {
      _0x2b715f = _0x3db640.tag !== 22 ? _0xc2aedf() : 536870912;
      _0x3db640.lanes |= _0x2b715f;
      _0x1bf63c |= _0x2b715f;
    }
  }
  function _0x4e5165(_0x334b7d, _0x362c7f) {
    if (!_0x823508) {
      switch (_0x334b7d.tailMode) {
        case "hidden":
          _0x362c7f = _0x334b7d.tail;
          var _0x558447 = null;
          for (; _0x362c7f !== null;) {
            if (_0x362c7f.alternate !== null) {
              _0x558447 = _0x362c7f;
            }
            _0x362c7f = _0x362c7f.sibling;
          }
          if (_0x558447 === null) {
            _0x334b7d.tail = null;
          } else {
            _0x558447.sibling = null;
          }
          break;
        case "collapsed":
          _0x558447 = _0x334b7d.tail;
          var _0x1b9cfb = null;
          for (; _0x558447 !== null;) {
            if (_0x558447.alternate !== null) {
              _0x1b9cfb = _0x558447;
            }
            _0x558447 = _0x558447.sibling;
          }
          if (_0x1b9cfb === null) {
            if (_0x362c7f || _0x334b7d.tail === null) {
              _0x334b7d.tail = null;
            } else {
              _0x334b7d.tail.sibling = null;
            }
          } else {
            _0x1b9cfb.sibling = null;
          }
      }
    }
  }
  function _0x3ce1eb(_0x200188) {
    var _0x3f4ca1 = _0x200188.alternate !== null && _0x200188.alternate.child === _0x200188.child;
    var _0x354f7e = 0;
    var _0x3a8789 = 0;
    if (_0x3f4ca1) {
      for (var _0x10fd2f = _0x200188.child; _0x10fd2f !== null;) {
        _0x354f7e |= _0x10fd2f.lanes | _0x10fd2f.childLanes;
        _0x3a8789 |= _0x10fd2f.subtreeFlags & 65011712;
        _0x3a8789 |= _0x10fd2f.flags & 65011712;
        _0x10fd2f.return = _0x200188;
        _0x10fd2f = _0x10fd2f.sibling;
      }
    } else {
      for (_0x10fd2f = _0x200188.child; _0x10fd2f !== null;) {
        _0x354f7e |= _0x10fd2f.lanes | _0x10fd2f.childLanes;
        _0x3a8789 |= _0x10fd2f.subtreeFlags;
        _0x3a8789 |= _0x10fd2f.flags;
        _0x10fd2f.return = _0x200188;
        _0x10fd2f = _0x10fd2f.sibling;
      }
    }
    _0x200188.subtreeFlags |= _0x3a8789;
    _0x200188.childLanes = _0x354f7e;
    return _0x3f4ca1;
  }
  function _0x29a24c(_0x32054a, _0x2c4e03, _0xa77c8d) {
    var _0x32b2d9 = _0x2c4e03.pendingProps;
    _0x52941e(_0x2c4e03);
    switch (_0x2c4e03.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
      case 1:
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 3:
        _0xa77c8d = _0x2c4e03.stateNode;
        _0x32b2d9 = null;
        if (_0x32054a !== null) {
          _0x32b2d9 = _0x32054a.memoizedState.cache;
        }
        if (_0x2c4e03.memoizedState.cache !== _0x32b2d9) {
          _0x2c4e03.flags |= 2048;
        }
        _0x551581(_0x156a91);
        _0x21379e();
        if (_0xa77c8d.pendingContext) {
          _0xa77c8d.context = _0xa77c8d.pendingContext;
          _0xa77c8d.pendingContext = null;
        }
        if (_0x32054a === null || _0x32054a.child === null) {
          if (_0x2663b6(_0x2c4e03)) {
            _0x53b993(_0x2c4e03);
          } else if (_0x32054a !== null && (!_0x32054a.memoizedState.isDehydrated || !!(_0x2c4e03.flags & 256))) {
            _0x2c4e03.flags |= 1024;
            _0x2a80d0();
          }
        }
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 26:
        var _0xf02e3 = _0x2c4e03.type;
        var _0x5d1794 = _0x2c4e03.memoizedState;
        if (_0x32054a === null) {
          _0x53b993(_0x2c4e03);
          if (_0x5d1794 !== null) {
            _0x3ce1eb(_0x2c4e03);
            _0x3dd54b(_0x2c4e03, _0x5d1794);
          } else {
            _0x3ce1eb(_0x2c4e03);
            _0x25c2f1(_0x2c4e03, _0xf02e3, 0, 0, _0xa77c8d);
          }
        } else if (_0x5d1794) {
          if (_0x5d1794 !== _0x32054a.memoizedState) {
            _0x53b993(_0x2c4e03);
            _0x3ce1eb(_0x2c4e03);
            _0x3dd54b(_0x2c4e03, _0x5d1794);
          } else {
            _0x3ce1eb(_0x2c4e03);
            _0x2c4e03.flags &= -16777217;
          }
        } else {
          if ((_0x32054a = _0x32054a.memoizedProps) !== _0x32b2d9) {
            _0x53b993(_0x2c4e03);
          }
          _0x3ce1eb(_0x2c4e03);
          _0x25c2f1(_0x2c4e03, _0xf02e3, 0, 0, _0xa77c8d);
        }
        return null;
      case 27:
        _0xdf61f9(_0x2c4e03);
        _0xa77c8d = _0x2d4ef4.current;
        _0xf02e3 = _0x2c4e03.type;
        if (_0x32054a !== null && _0x2c4e03.stateNode != null) {
          if (_0x32054a.memoizedProps !== _0x32b2d9) {
            _0x53b993(_0x2c4e03);
          }
        } else {
          if (!_0x32b2d9) {
            if (_0x2c4e03.stateNode === null) {
              throw Error(_0x34c7b9(166));
            }
            _0x3ce1eb(_0x2c4e03);
            return null;
          }
          _0x32054a = _0x584415.current;
          if (_0x2663b6(_0x2c4e03)) {
            _0x54dff1(_0x2c4e03);
          } else {
            _0x32054a = _0x32e984(_0xf02e3, _0x32b2d9, _0xa77c8d);
            _0x2c4e03.stateNode = _0x32054a;
            _0x53b993(_0x2c4e03);
          }
        }
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 5:
        _0xdf61f9(_0x2c4e03);
        _0xf02e3 = _0x2c4e03.type;
        if (_0x32054a !== null && _0x2c4e03.stateNode != null) {
          if (_0x32054a.memoizedProps !== _0x32b2d9) {
            _0x53b993(_0x2c4e03);
          }
        } else {
          if (!_0x32b2d9) {
            if (_0x2c4e03.stateNode === null) {
              throw Error(_0x34c7b9(166));
            }
            _0x3ce1eb(_0x2c4e03);
            return null;
          }
          _0x5d1794 = _0x584415.current;
          if (_0x2663b6(_0x2c4e03)) {
            _0x54dff1(_0x2c4e03);
          } else {
            var _0x46fe53 = _0x4d6ed2(_0x2d4ef4.current);
            switch (_0x5d1794) {
              case 1:
                _0x5d1794 = _0x46fe53.createElementNS("http://www.w3.org/2000/svg", _0xf02e3);
                break;
              case 2:
                _0x5d1794 = _0x46fe53.createElementNS("http://www.w3.org/1998/Math/MathML", _0xf02e3);
                break;
              default:
                switch (_0xf02e3) {
                  case "svg":
                    _0x5d1794 = _0x46fe53.createElementNS("http://www.w3.org/2000/svg", _0xf02e3);
                    break;
                  case "math":
                    _0x5d1794 = _0x46fe53.createElementNS("http://www.w3.org/1998/Math/MathML", _0xf02e3);
                    break;
                  case "script":
                    (_0x5d1794 = _0x46fe53.createElement("div")).innerHTML = "<script></script>";
                    _0x5d1794 = _0x5d1794.removeChild(_0x5d1794.firstChild);
                    break;
                  case "select":
                    _0x5d1794 = typeof _0x32b2d9.is == "string" ? _0x46fe53.createElement("select", {
                      is: _0x32b2d9.is
                    }) : _0x46fe53.createElement("select");
                    if (_0x32b2d9.multiple) {
                      _0x5d1794.multiple = true;
                    } else if (_0x32b2d9.size) {
                      _0x5d1794.size = _0x32b2d9.size;
                    }
                    break;
                  default:
                    _0x5d1794 = typeof _0x32b2d9.is == "string" ? _0x46fe53.createElement(_0xf02e3, {
                      is: _0x32b2d9.is
                    }) : _0x46fe53.createElement(_0xf02e3);
                }
            }
            _0x5d1794[_0x941386] = _0x2c4e03;
            _0x5d1794[_0x21a328] = _0x32b2d9;
            _0x27be34: for (_0x46fe53 = _0x2c4e03.child; _0x46fe53 !== null;) {
              if (_0x46fe53.tag === 5 || _0x46fe53.tag === 6) {
                _0x5d1794.appendChild(_0x46fe53.stateNode);
              } else if (_0x46fe53.tag !== 4 && _0x46fe53.tag !== 27 && _0x46fe53.child !== null) {
                _0x46fe53.child.return = _0x46fe53;
                _0x46fe53 = _0x46fe53.child;
                continue;
              }
              if (_0x46fe53 === _0x2c4e03) {
                break _0x27be34;
              }
              while (_0x46fe53.sibling === null) {
                if (_0x46fe53.return === null || _0x46fe53.return === _0x2c4e03) {
                  break _0x27be34;
                }
                _0x46fe53 = _0x46fe53.return;
              }
              _0x46fe53.sibling.return = _0x46fe53.return;
              _0x46fe53 = _0x46fe53.sibling;
            }
            _0x2c4e03.stateNode = _0x5d1794;
            _0x1541af(_0x5d1794, _0xf02e3, _0x32b2d9);
            _0x49d8e5: switch (_0xf02e3) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                _0x32b2d9 = !!_0x32b2d9.autoFocus;
                break _0x49d8e5;
              case "img":
                _0x32b2d9 = true;
                break _0x49d8e5;
              default:
                _0x32b2d9 = false;
            }
            if (_0x32b2d9) {
              _0x53b993(_0x2c4e03);
            }
          }
        }
        _0x3ce1eb(_0x2c4e03);
        _0x25c2f1(_0x2c4e03, _0x2c4e03.type, _0x32054a === null || _0x32054a.memoizedProps, _0x2c4e03.pendingProps, _0xa77c8d);
        return null;
      case 6:
        if (_0x32054a && _0x2c4e03.stateNode != null) {
          if (_0x32054a.memoizedProps !== _0x32b2d9) {
            _0x53b993(_0x2c4e03);
          }
        } else {
          if (typeof _0x32b2d9 != "string" && _0x2c4e03.stateNode === null) {
            throw Error(_0x34c7b9(166));
          }
          _0x32054a = _0x2d4ef4.current;
          if (_0x2663b6(_0x2c4e03)) {
            _0x32054a = _0x2c4e03.stateNode;
            _0xa77c8d = _0x2c4e03.memoizedProps;
            _0x32b2d9 = null;
            if ((_0xf02e3 = _0x5ad7b0) !== null) {
              switch (_0xf02e3.tag) {
                case 27:
                case 5:
                  _0x32b2d9 = _0xf02e3.memoizedProps;
              }
            }
            _0x32054a[_0x941386] = _0x2c4e03;
            if (!(_0x32054a = _0x32054a.nodeValue === _0xa77c8d || _0x32b2d9 !== null && _0x32b2d9.suppressHydrationWarning === true || !!_0x3e8d67(_0x32054a.nodeValue, _0xa77c8d))) {
              _0x4f1a46(_0x2c4e03, true);
            }
          } else {
            (_0x32054a = _0x4d6ed2(_0x32054a).createTextNode(_0x32b2d9))[_0x941386] = _0x2c4e03;
            _0x2c4e03.stateNode = _0x32054a;
          }
        }
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 31:
        _0xa77c8d = _0x2c4e03.memoizedState;
        if (_0x32054a === null || _0x32054a.memoizedState !== null) {
          _0x32b2d9 = _0x2663b6(_0x2c4e03);
          if (_0xa77c8d !== null) {
            if (_0x32054a === null) {
              if (!_0x32b2d9) {
                throw Error(_0x34c7b9(318));
              }
              if (!(_0x32054a = (_0x32054a = _0x2c4e03.memoizedState) !== null ? _0x32054a.dehydrated : null)) {
                throw Error(_0x34c7b9(557));
              }
              _0x32054a[_0x941386] = _0x2c4e03;
            } else {
              _0x4a25e9();
              if (!(_0x2c4e03.flags & 128)) {
                _0x2c4e03.memoizedState = null;
              }
              _0x2c4e03.flags |= 4;
            }
            _0x3ce1eb(_0x2c4e03);
            _0x32054a = false;
          } else {
            _0xa77c8d = _0x2a80d0();
            if (_0x32054a !== null && _0x32054a.memoizedState !== null) {
              _0x32054a.memoizedState.hydrationErrors = _0xa77c8d;
            }
            _0x32054a = true;
          }
          if (!_0x32054a) {
            if (_0x2c4e03.flags & 256) {
              _0x15b585(_0x2c4e03);
              return _0x2c4e03;
            } else {
              _0x15b585(_0x2c4e03);
              return null;
            }
          }
          if (_0x2c4e03.flags & 128) {
            throw Error(_0x34c7b9(558));
          }
        }
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 13:
        _0x32b2d9 = _0x2c4e03.memoizedState;
        if (_0x32054a === null || _0x32054a.memoizedState !== null && _0x32054a.memoizedState.dehydrated !== null) {
          _0xf02e3 = _0x2663b6(_0x2c4e03);
          if (_0x32b2d9 !== null && _0x32b2d9.dehydrated !== null) {
            if (_0x32054a === null) {
              if (!_0xf02e3) {
                throw Error(_0x34c7b9(318));
              }
              if (!(_0xf02e3 = (_0xf02e3 = _0x2c4e03.memoizedState) !== null ? _0xf02e3.dehydrated : null)) {
                throw Error(_0x34c7b9(317));
              }
              _0xf02e3[_0x941386] = _0x2c4e03;
            } else {
              _0x4a25e9();
              if (!(_0x2c4e03.flags & 128)) {
                _0x2c4e03.memoizedState = null;
              }
              _0x2c4e03.flags |= 4;
            }
            _0x3ce1eb(_0x2c4e03);
            _0xf02e3 = false;
          } else {
            _0xf02e3 = _0x2a80d0();
            if (_0x32054a !== null && _0x32054a.memoizedState !== null) {
              _0x32054a.memoizedState.hydrationErrors = _0xf02e3;
            }
            _0xf02e3 = true;
          }
          if (!_0xf02e3) {
            if (_0x2c4e03.flags & 256) {
              _0x15b585(_0x2c4e03);
              return _0x2c4e03;
            } else {
              _0x15b585(_0x2c4e03);
              return null;
            }
          }
        }
        _0x15b585(_0x2c4e03);
        if (_0x2c4e03.flags & 128) {
          _0x2c4e03.lanes = _0xa77c8d;
          return _0x2c4e03;
        } else {
          _0xa77c8d = _0x32b2d9 !== null;
          _0x32054a = _0x32054a !== null && _0x32054a.memoizedState !== null;
          if (_0xa77c8d) {
            _0xf02e3 = null;
            if ((_0x32b2d9 = _0x2c4e03.child).alternate !== null && _0x32b2d9.alternate.memoizedState !== null && _0x32b2d9.alternate.memoizedState.cachePool !== null) {
              _0xf02e3 = _0x32b2d9.alternate.memoizedState.cachePool.pool;
            }
            _0x5d1794 = null;
            if (_0x32b2d9.memoizedState !== null && _0x32b2d9.memoizedState.cachePool !== null) {
              _0x5d1794 = _0x32b2d9.memoizedState.cachePool.pool;
            }
            if (_0x5d1794 !== _0xf02e3) {
              _0x32b2d9.flags |= 2048;
            }
          }
          if (_0xa77c8d !== _0x32054a && _0xa77c8d) {
            _0x2c4e03.child.flags |= 8192;
          }
          _0x4a6bbf(_0x2c4e03, _0x2c4e03.updateQueue);
          _0x3ce1eb(_0x2c4e03);
          return null;
        }
      case 4:
        _0x21379e();
        if (_0x32054a === null) {
          _0x458f1e(_0x2c4e03.stateNode.containerInfo);
        }
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 10:
        _0x551581(_0x2c4e03.type);
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 19:
        _0x20fc3e(_0xbb0582);
        if ((_0x32b2d9 = _0x2c4e03.memoizedState) === null) {
          _0x3ce1eb(_0x2c4e03);
          return null;
        }
        _0xf02e3 = !!(_0x2c4e03.flags & 128);
        if ((_0x5d1794 = _0x32b2d9.rendering) === null) {
          if (_0xf02e3) {
            _0x4e5165(_0x32b2d9, false);
          } else {
            if (_0x15ab98 !== 0 || _0x32054a !== null && _0x32054a.flags & 128) {
              for (_0x32054a = _0x2c4e03.child; _0x32054a !== null;) {
                if ((_0x5d1794 = _0x1930a4(_0x32054a)) !== null) {
                  _0x2c4e03.flags |= 128;
                  _0x4e5165(_0x32b2d9, false);
                  _0x32054a = _0x5d1794.updateQueue;
                  _0x2c4e03.updateQueue = _0x32054a;
                  _0x4a6bbf(_0x2c4e03, _0x32054a);
                  _0x2c4e03.subtreeFlags = 0;
                  _0x32054a = _0xa77c8d;
                  _0xa77c8d = _0x2c4e03.child;
                  while (_0xa77c8d !== null) {
                    _0x33db6d(_0xa77c8d, _0x32054a);
                    _0xa77c8d = _0xa77c8d.sibling;
                  }
                  _0x45c6e5(_0xbb0582, _0xbb0582.current & 1 | 2);
                  if (_0x823508) {
                    _0x1ba706(_0x2c4e03, _0x32b2d9.treeForkCount);
                  }
                  return _0x2c4e03.child;
                }
                _0x32054a = _0x32054a.sibling;
              }
            }
            if (_0x32b2d9.tail !== null && _0x271a39() > _0x5e3820) {
              _0x2c4e03.flags |= 128;
              _0xf02e3 = true;
              _0x4e5165(_0x32b2d9, false);
              _0x2c4e03.lanes = 4194304;
            }
          }
        } else {
          if (!_0xf02e3) {
            if ((_0x32054a = _0x1930a4(_0x5d1794)) !== null) {
              _0x2c4e03.flags |= 128;
              _0xf02e3 = true;
              _0x32054a = _0x32054a.updateQueue;
              _0x2c4e03.updateQueue = _0x32054a;
              _0x4a6bbf(_0x2c4e03, _0x32054a);
              _0x4e5165(_0x32b2d9, true);
              if (_0x32b2d9.tail === null && _0x32b2d9.tailMode === "hidden" && !_0x5d1794.alternate && !_0x823508) {
                _0x3ce1eb(_0x2c4e03);
                return null;
              }
            } else if (_0x271a39() * 2 - _0x32b2d9.renderingStartTime > _0x5e3820 && _0xa77c8d !== 536870912) {
              _0x2c4e03.flags |= 128;
              _0xf02e3 = true;
              _0x4e5165(_0x32b2d9, false);
              _0x2c4e03.lanes = 4194304;
            }
          }
          if (_0x32b2d9.isBackwards) {
            _0x5d1794.sibling = _0x2c4e03.child;
            _0x2c4e03.child = _0x5d1794;
          } else {
            if ((_0x32054a = _0x32b2d9.last) !== null) {
              _0x32054a.sibling = _0x5d1794;
            } else {
              _0x2c4e03.child = _0x5d1794;
            }
            _0x32b2d9.last = _0x5d1794;
          }
        }
        if (_0x32b2d9.tail !== null) {
          _0x32054a = _0x32b2d9.tail;
          _0x32b2d9.rendering = _0x32054a;
          _0x32b2d9.tail = _0x32054a.sibling;
          _0x32b2d9.renderingStartTime = _0x271a39();
          _0x32054a.sibling = null;
          _0xa77c8d = _0xbb0582.current;
          _0x45c6e5(_0xbb0582, _0xf02e3 ? _0xa77c8d & 1 | 2 : _0xa77c8d & 1);
          if (_0x823508) {
            _0x1ba706(_0x2c4e03, _0x32b2d9.treeForkCount);
          }
          return _0x32054a;
        } else {
          _0x3ce1eb(_0x2c4e03);
          return null;
        }
      case 22:
      case 23:
        _0x15b585(_0x2c4e03);
        _0x46bb4b();
        _0x32b2d9 = _0x2c4e03.memoizedState !== null;
        if (_0x32054a !== null) {
          if (_0x32054a.memoizedState !== null !== _0x32b2d9) {
            _0x2c4e03.flags |= 8192;
          }
        } else if (_0x32b2d9) {
          _0x2c4e03.flags |= 8192;
        }
        if (_0x32b2d9) {
          if (!!(_0xa77c8d & 536870912) && !(_0x2c4e03.flags & 128)) {
            _0x3ce1eb(_0x2c4e03);
            if (_0x2c4e03.subtreeFlags & 6) {
              _0x2c4e03.flags |= 8192;
            }
          }
        } else {
          _0x3ce1eb(_0x2c4e03);
        }
        if ((_0xa77c8d = _0x2c4e03.updateQueue) !== null) {
          _0x4a6bbf(_0x2c4e03, _0xa77c8d.retryQueue);
        }
        _0xa77c8d = null;
        if (_0x32054a !== null && _0x32054a.memoizedState !== null && _0x32054a.memoizedState.cachePool !== null) {
          _0xa77c8d = _0x32054a.memoizedState.cachePool.pool;
        }
        _0x32b2d9 = null;
        if (_0x2c4e03.memoizedState !== null && _0x2c4e03.memoizedState.cachePool !== null) {
          _0x32b2d9 = _0x2c4e03.memoizedState.cachePool.pool;
        }
        if (_0x32b2d9 !== _0xa77c8d) {
          _0x2c4e03.flags |= 2048;
        }
        if (_0x32054a !== null) {
          _0x20fc3e(_0x40f082);
        }
        return null;
      case 24:
        _0xa77c8d = null;
        if (_0x32054a !== null) {
          _0xa77c8d = _0x32054a.memoizedState.cache;
        }
        if (_0x2c4e03.memoizedState.cache !== _0xa77c8d) {
          _0x2c4e03.flags |= 2048;
        }
        _0x551581(_0x156a91);
        _0x3ce1eb(_0x2c4e03);
        return null;
      case 25:
      case 30:
        return null;
    }
    throw Error(_0x34c7b9(156, _0x2c4e03.tag));
  }
  function _0x4a1013(_0x5ceb53, _0x342d04) {
    _0x52941e(_0x342d04);
    switch (_0x342d04.tag) {
      case 1:
        if ((_0x5ceb53 = _0x342d04.flags) & 65536) {
          _0x342d04.flags = _0x5ceb53 & -65537 | 128;
          return _0x342d04;
        } else {
          return null;
        }
      case 3:
        _0x551581(_0x156a91);
        _0x21379e();
        if ((_0x5ceb53 = _0x342d04.flags) & 65536 && !(_0x5ceb53 & 128)) {
          _0x342d04.flags = _0x5ceb53 & -65537 | 128;
          return _0x342d04;
        } else {
          return null;
        }
      case 26:
      case 27:
      case 5:
        _0xdf61f9(_0x342d04);
        return null;
      case 31:
        if (_0x342d04.memoizedState !== null) {
          _0x15b585(_0x342d04);
          if (_0x342d04.alternate === null) {
            throw Error(_0x34c7b9(340));
          }
          _0x4a25e9();
        }
        if ((_0x5ceb53 = _0x342d04.flags) & 65536) {
          _0x342d04.flags = _0x5ceb53 & -65537 | 128;
          return _0x342d04;
        } else {
          return null;
        }
      case 13:
        _0x15b585(_0x342d04);
        if ((_0x5ceb53 = _0x342d04.memoizedState) !== null && _0x5ceb53.dehydrated !== null) {
          if (_0x342d04.alternate === null) {
            throw Error(_0x34c7b9(340));
          }
          _0x4a25e9();
        }
        if ((_0x5ceb53 = _0x342d04.flags) & 65536) {
          _0x342d04.flags = _0x5ceb53 & -65537 | 128;
          return _0x342d04;
        } else {
          return null;
        }
      case 19:
        _0x20fc3e(_0xbb0582);
        return null;
      case 4:
        _0x21379e();
        return null;
      case 10:
        _0x551581(_0x342d04.type);
        return null;
      case 22:
      case 23:
        _0x15b585(_0x342d04);
        _0x46bb4b();
        if (_0x5ceb53 !== null) {
          _0x20fc3e(_0x40f082);
        }
        if ((_0x5ceb53 = _0x342d04.flags) & 65536) {
          _0x342d04.flags = _0x5ceb53 & -65537 | 128;
          return _0x342d04;
        } else {
          return null;
        }
      case 24:
        _0x551581(_0x156a91);
        return null;
      default:
        return null;
    }
  }
  function _0x2867c6(_0x254bd8, _0x1f0871) {
    _0x52941e(_0x1f0871);
    switch (_0x1f0871.tag) {
      case 3:
        _0x551581(_0x156a91);
        _0x21379e();
        break;
      case 26:
      case 27:
      case 5:
        _0xdf61f9(_0x1f0871);
        break;
      case 4:
        _0x21379e();
        break;
      case 31:
        if (_0x1f0871.memoizedState !== null) {
          _0x15b585(_0x1f0871);
        }
        break;
      case 13:
        _0x15b585(_0x1f0871);
        break;
      case 19:
        _0x20fc3e(_0xbb0582);
        break;
      case 10:
        _0x551581(_0x1f0871.type);
        break;
      case 22:
      case 23:
        _0x15b585(_0x1f0871);
        _0x46bb4b();
        if (_0x254bd8 !== null) {
          _0x20fc3e(_0x40f082);
        }
        break;
      case 24:
        _0x551581(_0x156a91);
    }
  }
  function _0x320efd(_0x514530, _0x374807) {
    try {
      var _0x1a635b = _0x374807.updateQueue;
      var _0x2b6118 = _0x1a635b !== null ? _0x1a635b.lastEffect : null;
      if (_0x2b6118 !== null) {
        var _0x28e79f = _0x2b6118.next;
        _0x1a635b = _0x28e79f;
        do {
          if ((_0x1a635b.tag & _0x514530) === _0x514530) {
            _0x2b6118 = undefined;
            var _0x7e515 = _0x1a635b.create;
            var _0x4cb6f2 = _0x1a635b.inst;
            _0x2b6118 = _0x7e515();
            _0x4cb6f2.destroy = _0x2b6118;
          }
          _0x1a635b = _0x1a635b.next;
        } while (_0x1a635b !== _0x28e79f);
      }
    } catch (_0x4af87a) {
      _0x63b491(_0x374807, _0x374807.return, _0x4af87a);
    }
  }
  function _0x30d75a(_0x5395ee, _0x17d49f, _0x21691a) {
    try {
      var _0x221596 = _0x17d49f.updateQueue;
      var _0x18a995 = _0x221596 !== null ? _0x221596.lastEffect : null;
      if (_0x18a995 !== null) {
        var _0x3df5f1 = _0x18a995.next;
        _0x221596 = _0x3df5f1;
        do {
          if ((_0x221596.tag & _0x5395ee) === _0x5395ee) {
            var _0x164a5d = _0x221596.inst;
            var _0x4cacba = _0x164a5d.destroy;
            if (_0x4cacba !== undefined) {
              _0x164a5d.destroy = undefined;
              _0x18a995 = _0x17d49f;
              var _0x1e3188 = _0x21691a;
              var _0x985d13 = _0x4cacba;
              try {
                _0x985d13();
              } catch (_0x178dd0) {
                _0x63b491(_0x18a995, _0x1e3188, _0x178dd0);
              }
            }
          }
          _0x221596 = _0x221596.next;
        } while (_0x221596 !== _0x3df5f1);
      }
    } catch (_0x15227c) {
      _0x63b491(_0x17d49f, _0x17d49f.return, _0x15227c);
    }
  }
  function _0x28ade3(_0x5acc53) {
    var _0x2c61ba = _0x5acc53.updateQueue;
    if (_0x2c61ba !== null) {
      var _0x24ef16 = _0x5acc53.stateNode;
      try {
        _0x1af99e(_0x2c61ba, _0x24ef16);
      } catch (_0x21dea6) {
        _0x63b491(_0x5acc53, _0x5acc53.return, _0x21dea6);
      }
    }
  }
  function _0x33d203(_0x460465, _0x8a9ed6, _0x1d7ed8) {
    _0x1d7ed8.props = _0x2bb569(_0x460465.type, _0x460465.memoizedProps);
    _0x1d7ed8.state = _0x460465.memoizedState;
    try {
      _0x1d7ed8.componentWillUnmount();
    } catch (_0x1f2b46) {
      _0x63b491(_0x460465, _0x8a9ed6, _0x1f2b46);
    }
  }
  function _0x1d602d(_0x579226, _0x1e1e09) {
    try {
      var _0xb9a677 = _0x579226.ref;
      if (_0xb9a677 !== null) {
        switch (_0x579226.tag) {
          case 26:
          case 27:
          case 5:
            var _0x1ccda6 = _0x579226.stateNode;
            break;
          default:
            _0x1ccda6 = _0x579226.stateNode;
        }
        if (typeof _0xb9a677 == "function") {
          _0x579226.refCleanup = _0xb9a677(_0x1ccda6);
        } else {
          _0xb9a677.current = _0x1ccda6;
        }
      }
    } catch (_0x4af790) {
      _0x63b491(_0x579226, _0x1e1e09, _0x4af790);
    }
  }
  function _0x21b0bd(_0x1650da, _0x401356) {
    var _0x1a4729 = _0x1650da.ref;
    var _0x19dd7e = _0x1650da.refCleanup;
    if (_0x1a4729 !== null) {
      if (typeof _0x19dd7e == "function") {
        try {
          _0x19dd7e();
        } catch (_0x101946) {
          _0x63b491(_0x1650da, _0x401356, _0x101946);
        } finally {
          _0x1650da.refCleanup = null;
          if ((_0x1650da = _0x1650da.alternate) != null) {
            _0x1650da.refCleanup = null;
          }
        }
      } else if (typeof _0x1a4729 == "function") {
        try {
          _0x1a4729(null);
        } catch (_0x3f1dde) {
          _0x63b491(_0x1650da, _0x401356, _0x3f1dde);
        }
      } else {
        _0x1a4729.current = null;
      }
    }
  }
  function _0x4bed37(_0x354ac5) {
    var _0x459898 = _0x354ac5.type;
    var _0x2c57ff = _0x354ac5.memoizedProps;
    var _0x5ee411 = _0x354ac5.stateNode;
    try {
      _0x55f7d0: switch (_0x459898) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          if (_0x2c57ff.autoFocus) {
            _0x5ee411.focus();
          }
          break _0x55f7d0;
        case "img":
          if (_0x2c57ff.src) {
            _0x5ee411.src = _0x2c57ff.src;
          } else if (_0x2c57ff.srcSet) {
            _0x5ee411.srcset = _0x2c57ff.srcSet;
          }
      }
    } catch (_0x352c1d) {
      _0x63b491(_0x354ac5, _0x354ac5.return, _0x352c1d);
    }
  }
  function _0x198441(_0x56c7a6, _0xcacf8a, _0x49485b) {
    try {
      var _0x321a02 = _0x56c7a6.stateNode;
      (function (_0x55ceb9, _0x174521, _0x75a0a7, _0x237336) {
        switch (_0x174521) {
          case "div":
          case "span":
          case "svg":
          case "path":
          case "a":
          case "g":
          case "p":
          case "li":
            break;
          case "input":
            var _0x112380 = null;
            var _0x7d63d7 = null;
            var _0x20f1b3 = null;
            var _0x4bf867 = null;
            var _0x41628a = null;
            var _0x1dfb83 = null;
            var _0x3084c9 = null;
            for (_0x4f560c in _0x75a0a7) {
              var _0x5772fb = _0x75a0a7[_0x4f560c];
              if (_0x75a0a7.hasOwnProperty(_0x4f560c) && _0x5772fb != null) {
                switch (_0x4f560c) {
                  case "checked":
                  case "value":
                    break;
                  case "defaultValue":
                    _0x41628a = _0x5772fb;
                  default:
                    if (!_0x237336.hasOwnProperty(_0x4f560c)) {
                      _0x1fb65c(_0x55ceb9, _0x174521, _0x4f560c, null, _0x237336, _0x5772fb);
                    }
                }
              }
            }
            for (var _0x4869c0 in _0x237336) {
              var _0x4f560c = _0x237336[_0x4869c0];
              _0x5772fb = _0x75a0a7[_0x4869c0];
              if (_0x237336.hasOwnProperty(_0x4869c0) && (_0x4f560c != null || _0x5772fb != null)) {
                switch (_0x4869c0) {
                  case "type":
                    _0x7d63d7 = _0x4f560c;
                    break;
                  case "name":
                    _0x112380 = _0x4f560c;
                    break;
                  case "checked":
                    _0x1dfb83 = _0x4f560c;
                    break;
                  case "defaultChecked":
                    _0x3084c9 = _0x4f560c;
                    break;
                  case "value":
                    _0x20f1b3 = _0x4f560c;
                    break;
                  case "defaultValue":
                    _0x4bf867 = _0x4f560c;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_0x4f560c != null) {
                      throw Error(_0x34c7b9(137, _0x174521));
                    }
                    break;
                  default:
                    if (_0x4f560c !== _0x5772fb) {
                      _0x1fb65c(_0x55ceb9, _0x174521, _0x4869c0, _0x4f560c, _0x237336, _0x5772fb);
                    }
                }
              }
            }
            _0x3482c9(_0x55ceb9, _0x20f1b3, _0x4bf867, _0x41628a, _0x1dfb83, _0x3084c9, _0x7d63d7, _0x112380);
            return;
          case "select":
            _0x4f560c = _0x20f1b3 = _0x4bf867 = _0x4869c0 = null;
            for (_0x7d63d7 in _0x75a0a7) {
              _0x41628a = _0x75a0a7[_0x7d63d7];
              if (_0x75a0a7.hasOwnProperty(_0x7d63d7) && _0x41628a != null) {
                switch (_0x7d63d7) {
                  case "value":
                    break;
                  case "multiple":
                    _0x4f560c = _0x41628a;
                  default:
                    if (!_0x237336.hasOwnProperty(_0x7d63d7)) {
                      _0x1fb65c(_0x55ceb9, _0x174521, _0x7d63d7, null, _0x237336, _0x41628a);
                    }
                }
              }
            }
            for (_0x112380 in _0x237336) {
              _0x7d63d7 = _0x237336[_0x112380];
              _0x41628a = _0x75a0a7[_0x112380];
              if (_0x237336.hasOwnProperty(_0x112380) && (_0x7d63d7 != null || _0x41628a != null)) {
                switch (_0x112380) {
                  case "value":
                    _0x4869c0 = _0x7d63d7;
                    break;
                  case "defaultValue":
                    _0x4bf867 = _0x7d63d7;
                    break;
                  case "multiple":
                    _0x20f1b3 = _0x7d63d7;
                  default:
                    if (_0x7d63d7 !== _0x41628a) {
                      _0x1fb65c(_0x55ceb9, _0x174521, _0x112380, _0x7d63d7, _0x237336, _0x41628a);
                    }
                }
              }
            }
            _0x174521 = _0x4bf867;
            _0x75a0a7 = _0x20f1b3;
            _0x237336 = _0x4f560c;
            if (_0x4869c0 != null) {
              _0x23131d(_0x55ceb9, !!_0x75a0a7, _0x4869c0, false);
            } else if (!!_0x237336 != !!_0x75a0a7) {
              if (_0x174521 != null) {
                _0x23131d(_0x55ceb9, !!_0x75a0a7, _0x174521, true);
              } else {
                _0x23131d(_0x55ceb9, !!_0x75a0a7, _0x75a0a7 ? [] : "", false);
              }
            }
            return;
          case "textarea":
            _0x4f560c = _0x4869c0 = null;
            for (_0x4bf867 in _0x75a0a7) {
              _0x112380 = _0x75a0a7[_0x4bf867];
              if (_0x75a0a7.hasOwnProperty(_0x4bf867) && _0x112380 != null && !_0x237336.hasOwnProperty(_0x4bf867)) {
                switch (_0x4bf867) {
                  case "value":
                  case "children":
                    break;
                  default:
                    _0x1fb65c(_0x55ceb9, _0x174521, _0x4bf867, null, _0x237336, _0x112380);
                }
              }
            }
            for (_0x20f1b3 in _0x237336) {
              _0x112380 = _0x237336[_0x20f1b3];
              _0x7d63d7 = _0x75a0a7[_0x20f1b3];
              if (_0x237336.hasOwnProperty(_0x20f1b3) && (_0x112380 != null || _0x7d63d7 != null)) {
                switch (_0x20f1b3) {
                  case "value":
                    _0x4869c0 = _0x112380;
                    break;
                  case "defaultValue":
                    _0x4f560c = _0x112380;
                    break;
                  case "children":
                    break;
                  case "dangerouslySetInnerHTML":
                    if (_0x112380 != null) {
                      throw Error(_0x34c7b9(91));
                    }
                    break;
                  default:
                    if (_0x112380 !== _0x7d63d7) {
                      _0x1fb65c(_0x55ceb9, _0x174521, _0x20f1b3, _0x112380, _0x237336, _0x7d63d7);
                    }
                }
              }
            }
            _0x1b3b5c(_0x55ceb9, _0x4869c0, _0x4f560c);
            return;
          case "option":
            for (var _0x2aabfe in _0x75a0a7) {
              _0x4869c0 = _0x75a0a7[_0x2aabfe];
              if (_0x75a0a7.hasOwnProperty(_0x2aabfe) && _0x4869c0 != null && !_0x237336.hasOwnProperty(_0x2aabfe)) {
                if (_0x2aabfe === "selected") {
                  _0x55ceb9.selected = false;
                } else {
                  _0x1fb65c(_0x55ceb9, _0x174521, _0x2aabfe, null, _0x237336, _0x4869c0);
                }
              }
            }
            for (_0x41628a in _0x237336) {
              _0x4869c0 = _0x237336[_0x41628a];
              _0x4f560c = _0x75a0a7[_0x41628a];
              if (!!_0x237336.hasOwnProperty(_0x41628a) && _0x4869c0 !== _0x4f560c && (_0x4869c0 != null || _0x4f560c != null)) {
                if (_0x41628a === "selected") {
                  _0x55ceb9.selected = _0x4869c0 && typeof _0x4869c0 != "function" && typeof _0x4869c0 != "symbol";
                } else {
                  _0x1fb65c(_0x55ceb9, _0x174521, _0x41628a, _0x4869c0, _0x237336, _0x4f560c);
                }
              }
            }
            return;
          case "img":
          case "link":
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "keygen":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
          case "menuitem":
            for (var _0x56eec2 in _0x75a0a7) {
              _0x4869c0 = _0x75a0a7[_0x56eec2];
              if (_0x75a0a7.hasOwnProperty(_0x56eec2) && _0x4869c0 != null && !_0x237336.hasOwnProperty(_0x56eec2)) {
                _0x1fb65c(_0x55ceb9, _0x174521, _0x56eec2, null, _0x237336, _0x4869c0);
              }
            }
            for (_0x1dfb83 in _0x237336) {
              _0x4869c0 = _0x237336[_0x1dfb83];
              _0x4f560c = _0x75a0a7[_0x1dfb83];
              if (_0x237336.hasOwnProperty(_0x1dfb83) && _0x4869c0 !== _0x4f560c && (_0x4869c0 != null || _0x4f560c != null)) {
                switch (_0x1dfb83) {
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (_0x4869c0 != null) {
                      throw Error(_0x34c7b9(137, _0x174521));
                    }
                    break;
                  default:
                    _0x1fb65c(_0x55ceb9, _0x174521, _0x1dfb83, _0x4869c0, _0x237336, _0x4f560c);
                }
              }
            }
            return;
          default:
            if (_0x14a2f4(_0x174521)) {
              for (var _0x496106 in _0x75a0a7) {
                _0x4869c0 = _0x75a0a7[_0x496106];
                if (_0x75a0a7.hasOwnProperty(_0x496106) && _0x4869c0 !== undefined && !_0x237336.hasOwnProperty(_0x496106)) {
                  _0x1ebf10(_0x55ceb9, _0x174521, _0x496106, undefined, _0x237336, _0x4869c0);
                }
              }
              for (_0x3084c9 in _0x237336) {
                _0x4869c0 = _0x237336[_0x3084c9];
                _0x4f560c = _0x75a0a7[_0x3084c9];
                if (!!_0x237336.hasOwnProperty(_0x3084c9) && _0x4869c0 !== _0x4f560c && (_0x4869c0 !== undefined || _0x4f560c !== undefined)) {
                  _0x1ebf10(_0x55ceb9, _0x174521, _0x3084c9, _0x4869c0, _0x237336, _0x4f560c);
                }
              }
              return;
            }
        }
        for (var _0x4d6135 in _0x75a0a7) {
          _0x4869c0 = _0x75a0a7[_0x4d6135];
          if (_0x75a0a7.hasOwnProperty(_0x4d6135) && _0x4869c0 != null && !_0x237336.hasOwnProperty(_0x4d6135)) {
            _0x1fb65c(_0x55ceb9, _0x174521, _0x4d6135, null, _0x237336, _0x4869c0);
          }
        }
        for (_0x5772fb in _0x237336) {
          _0x4869c0 = _0x237336[_0x5772fb];
          _0x4f560c = _0x75a0a7[_0x5772fb];
          if (!!_0x237336.hasOwnProperty(_0x5772fb) && _0x4869c0 !== _0x4f560c && (_0x4869c0 != null || _0x4f560c != null)) {
            _0x1fb65c(_0x55ceb9, _0x174521, _0x5772fb, _0x4869c0, _0x237336, _0x4f560c);
          }
        }
      })(_0x321a02, _0x56c7a6.type, _0x49485b, _0xcacf8a);
      _0x321a02[_0x21a328] = _0xcacf8a;
    } catch (_0x212725) {
      _0x63b491(_0x56c7a6, _0x56c7a6.return, _0x212725);
    }
  }
  function _0x336440(_0x314b91) {
    return _0x314b91.tag === 5 || _0x314b91.tag === 3 || _0x314b91.tag === 26 || _0x314b91.tag === 27 && _0x6fae4f(_0x314b91.type) || _0x314b91.tag === 4;
  }
  function _0x41aa99(_0x485d0f) {
    _0x1a5dd3: while (true) {
      while (_0x485d0f.sibling === null) {
        if (_0x485d0f.return === null || _0x336440(_0x485d0f.return)) {
          return null;
        }
        _0x485d0f = _0x485d0f.return;
      }
      _0x485d0f.sibling.return = _0x485d0f.return;
      _0x485d0f = _0x485d0f.sibling;
      while (_0x485d0f.tag !== 5 && _0x485d0f.tag !== 6 && _0x485d0f.tag !== 18) {
        if (_0x485d0f.tag === 27 && _0x6fae4f(_0x485d0f.type)) {
          continue _0x1a5dd3;
        }
        if (_0x485d0f.flags & 2) {
          continue _0x1a5dd3;
        }
        if (_0x485d0f.child === null || _0x485d0f.tag === 4) {
          continue _0x1a5dd3;
        }
        _0x485d0f.child.return = _0x485d0f;
        _0x485d0f = _0x485d0f.child;
      }
      if (!(_0x485d0f.flags & 2)) {
        return _0x485d0f.stateNode;
      }
    }
  }
  function _0x51189d(_0x52d92e, _0x492c65, _0x368584) {
    var _0x17ef47 = _0x52d92e.tag;
    if (_0x17ef47 === 5 || _0x17ef47 === 6) {
      _0x52d92e = _0x52d92e.stateNode;
      if (_0x492c65) {
        (_0x368584.nodeType === 9 ? _0x368584.body : _0x368584.nodeName === "HTML" ? _0x368584.ownerDocument.body : _0x368584).insertBefore(_0x52d92e, _0x492c65);
      } else {
        (_0x492c65 = _0x368584.nodeType === 9 ? _0x368584.body : _0x368584.nodeName === "HTML" ? _0x368584.ownerDocument.body : _0x368584).appendChild(_0x52d92e);
        if ((_0x368584 = _0x368584._reactRootContainer) == null && _0x492c65.onclick === null) {
          _0x492c65.onclick = _0x3de216;
        }
      }
    } else if (_0x17ef47 !== 4 && (_0x17ef47 === 27 && _0x6fae4f(_0x52d92e.type) && (_0x368584 = _0x52d92e.stateNode, _0x492c65 = null), (_0x52d92e = _0x52d92e.child) !== null)) {
      _0x51189d(_0x52d92e, _0x492c65, _0x368584);
      _0x52d92e = _0x52d92e.sibling;
      while (_0x52d92e !== null) {
        _0x51189d(_0x52d92e, _0x492c65, _0x368584);
        _0x52d92e = _0x52d92e.sibling;
      }
    }
  }
  function _0x4b93b9(_0xcf8dd6, _0x3d5bda, _0x1c80fc) {
    var _0x4b1d61 = _0xcf8dd6.tag;
    if (_0x4b1d61 === 5 || _0x4b1d61 === 6) {
      _0xcf8dd6 = _0xcf8dd6.stateNode;
      if (_0x3d5bda) {
        _0x1c80fc.insertBefore(_0xcf8dd6, _0x3d5bda);
      } else {
        _0x1c80fc.appendChild(_0xcf8dd6);
      }
    } else if (_0x4b1d61 !== 4 && (_0x4b1d61 === 27 && _0x6fae4f(_0xcf8dd6.type) && (_0x1c80fc = _0xcf8dd6.stateNode), (_0xcf8dd6 = _0xcf8dd6.child) !== null)) {
      _0x4b93b9(_0xcf8dd6, _0x3d5bda, _0x1c80fc);
      _0xcf8dd6 = _0xcf8dd6.sibling;
      while (_0xcf8dd6 !== null) {
        _0x4b93b9(_0xcf8dd6, _0x3d5bda, _0x1c80fc);
        _0xcf8dd6 = _0xcf8dd6.sibling;
      }
    }
  }
  function _0x385307(_0x15b029) {
    var _0x211823 = _0x15b029.stateNode;
    var _0x317492 = _0x15b029.memoizedProps;
    try {
      var _0x249afb = _0x15b029.type;
      for (var _0x3b0e32 = _0x211823.attributes; _0x3b0e32.length;) {
        _0x211823.removeAttributeNode(_0x3b0e32[0]);
      }
      _0x1541af(_0x211823, _0x249afb, _0x317492);
      _0x211823[_0x941386] = _0x15b029;
      _0x211823[_0x21a328] = _0x317492;
    } catch (_0x1407a9) {
      _0x63b491(_0x15b029, _0x15b029.return, _0x1407a9);
    }
  }
  var _0x238f4a = false;
  var _0x107ff1 = false;
  var _0x590ce7 = false;
  var _0x1cd67e = typeof WeakSet == "function" ? WeakSet : Set;
  var _0xa2398f = null;
  function _0x4c1dba(_0x2ecaf4, _0x74c928, _0xa401ad) {
    var _0x597daf = _0xa401ad.flags;
    switch (_0xa401ad.tag) {
      case 0:
      case 11:
      case 15:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        if (_0x597daf & 4) {
          _0x320efd(5, _0xa401ad);
        }
        break;
      case 1:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        if (_0x597daf & 4) {
          _0x2ecaf4 = _0xa401ad.stateNode;
          if (_0x74c928 === null) {
            try {
              _0x2ecaf4.componentDidMount();
            } catch (_0x4fdb76) {
              _0x63b491(_0xa401ad, _0xa401ad.return, _0x4fdb76);
            }
          } else {
            var _0x414b70 = _0x2bb569(_0xa401ad.type, _0x74c928.memoizedProps);
            _0x74c928 = _0x74c928.memoizedState;
            try {
              _0x2ecaf4.componentDidUpdate(_0x414b70, _0x74c928, _0x2ecaf4.__reactInternalSnapshotBeforeUpdate);
            } catch (_0x202874) {
              _0x63b491(_0xa401ad, _0xa401ad.return, _0x202874);
            }
          }
        }
        if (_0x597daf & 64) {
          _0x28ade3(_0xa401ad);
        }
        if (_0x597daf & 512) {
          _0x1d602d(_0xa401ad, _0xa401ad.return);
        }
        break;
      case 3:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        if (_0x597daf & 64 && (_0x2ecaf4 = _0xa401ad.updateQueue) !== null) {
          _0x74c928 = null;
          if (_0xa401ad.child !== null) {
            switch (_0xa401ad.child.tag) {
              case 27:
              case 5:
              case 1:
                _0x74c928 = _0xa401ad.child.stateNode;
            }
          }
          try {
            _0x1af99e(_0x2ecaf4, _0x74c928);
          } catch (_0x550113) {
            _0x63b491(_0xa401ad, _0xa401ad.return, _0x550113);
          }
        }
        break;
      case 27:
        if (_0x74c928 === null && _0x597daf & 4) {
          _0x385307(_0xa401ad);
        }
      case 26:
      case 5:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        if (_0x74c928 === null && _0x597daf & 4) {
          _0x4bed37(_0xa401ad);
        }
        if (_0x597daf & 512) {
          _0x1d602d(_0xa401ad, _0xa401ad.return);
        }
        break;
      case 12:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        break;
      case 31:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        if (_0x597daf & 4) {
          _0x3b54f2(_0x2ecaf4, _0xa401ad);
        }
        break;
      case 13:
        _0x81e424(_0x2ecaf4, _0xa401ad);
        if (_0x597daf & 4) {
          _0x3ddf3f(_0x2ecaf4, _0xa401ad);
        }
        if (_0x597daf & 64 && (_0x2ecaf4 = _0xa401ad.memoizedState) !== null && (_0x2ecaf4 = _0x2ecaf4.dehydrated) !== null) {
          (function (_0x51bb32, _0xdd0a79) {
            var _0x2da7c5 = _0x51bb32.ownerDocument;
            if (_0x51bb32.data === "$~") {
              _0x51bb32._reactRetry = _0xdd0a79;
            } else if (_0x51bb32.data !== "$?" || _0x2da7c5.readyState !== "loading") {
              _0xdd0a79();
            } else {
              function _0x776919() {
                _0xdd0a79();
                _0x2da7c5.removeEventListener("DOMContentLoaded", _0x776919);
              }
              _0x2da7c5.addEventListener("DOMContentLoaded", _0x776919);
              _0x51bb32._reactRetry = _0x776919;
            }
          })(_0x2ecaf4, _0xa401ad = _0x4926ba.bind(null, _0xa401ad));
        }
        break;
      case 22:
        if (!(_0x597daf = _0xa401ad.memoizedState !== null || _0x238f4a)) {
          _0x74c928 = _0x74c928 !== null && _0x74c928.memoizedState !== null || _0x107ff1;
          _0x414b70 = _0x238f4a;
          var _0x503cc9 = _0x107ff1;
          _0x238f4a = _0x597daf;
          if ((_0x107ff1 = _0x74c928) && !_0x503cc9) {
            _0x921051(_0x2ecaf4, _0xa401ad, !!(_0xa401ad.subtreeFlags & 8772));
          } else {
            _0x81e424(_0x2ecaf4, _0xa401ad);
          }
          _0x238f4a = _0x414b70;
          _0x107ff1 = _0x503cc9;
        }
        break;
      case 30:
        break;
      default:
        _0x81e424(_0x2ecaf4, _0xa401ad);
    }
  }
  function _0xd511b5(_0x1139c4) {
    var _0x59b2ed = _0x1139c4.alternate;
    if (_0x59b2ed !== null) {
      _0x1139c4.alternate = null;
      _0xd511b5(_0x59b2ed);
    }
    _0x1139c4.child = null;
    _0x1139c4.deletions = null;
    _0x1139c4.sibling = null;
    if (_0x1139c4.tag === 5 && (_0x59b2ed = _0x1139c4.stateNode) !== null) {
      _0x2ca6af(_0x59b2ed);
    }
    _0x1139c4.stateNode = null;
    _0x1139c4.return = null;
    _0x1139c4.dependencies = null;
    _0x1139c4.memoizedProps = null;
    _0x1139c4.memoizedState = null;
    _0x1139c4.pendingProps = null;
    _0x1139c4.stateNode = null;
    _0x1139c4.updateQueue = null;
  }
  var _0x37255d = null;
  var _0x3dfabd = false;
  function _0x1c4f60(_0x2bf075, _0x28078d, _0x2a9f89) {
    for (_0x2a9f89 = _0x2a9f89.child; _0x2a9f89 !== null;) {
      _0x13ac02(_0x2bf075, _0x28078d, _0x2a9f89);
      _0x2a9f89 = _0x2a9f89.sibling;
    }
  }
  function _0x13ac02(_0x125a4f, _0x1aead1, _0x518473) {
    if (_0x3be8ed && typeof _0x3be8ed.onCommitFiberUnmount == "function") {
      try {
        _0x3be8ed.onCommitFiberUnmount(_0x90d840, _0x518473);
      } catch (_0x2b2e3f) {}
    }
    switch (_0x518473.tag) {
      case 26:
        if (!_0x107ff1) {
          _0x21b0bd(_0x518473, _0x1aead1);
        }
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        if (_0x518473.memoizedState) {
          _0x518473.memoizedState.count--;
        } else if (_0x518473.stateNode) {
          (_0x518473 = _0x518473.stateNode).parentNode.removeChild(_0x518473);
        }
        break;
      case 27:
        if (!_0x107ff1) {
          _0x21b0bd(_0x518473, _0x1aead1);
        }
        var _0x2288a2 = _0x37255d;
        var _0x50eb98 = _0x3dfabd;
        if (_0x6fae4f(_0x518473.type)) {
          _0x37255d = _0x518473.stateNode;
          _0x3dfabd = false;
        }
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        _0xa39ea0(_0x518473.stateNode);
        _0x37255d = _0x2288a2;
        _0x3dfabd = _0x50eb98;
        break;
      case 5:
        if (!_0x107ff1) {
          _0x21b0bd(_0x518473, _0x1aead1);
        }
      case 6:
        _0x2288a2 = _0x37255d;
        _0x50eb98 = _0x3dfabd;
        _0x37255d = null;
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        _0x3dfabd = _0x50eb98;
        if ((_0x37255d = _0x2288a2) !== null) {
          if (_0x3dfabd) {
            try {
              (_0x37255d.nodeType === 9 ? _0x37255d.body : _0x37255d.nodeName === "HTML" ? _0x37255d.ownerDocument.body : _0x37255d).removeChild(_0x518473.stateNode);
            } catch (_0x1f5f5f) {
              _0x63b491(_0x518473, _0x1aead1, _0x1f5f5f);
            }
          } else {
            try {
              _0x37255d.removeChild(_0x518473.stateNode);
            } catch (_0x28c02c) {
              _0x63b491(_0x518473, _0x1aead1, _0x28c02c);
            }
          }
        }
        break;
      case 18:
        if (_0x37255d !== null) {
          if (_0x3dfabd) {
            _0x13c376((_0x125a4f = _0x37255d).nodeType === 9 ? _0x125a4f.body : _0x125a4f.nodeName === "HTML" ? _0x125a4f.ownerDocument.body : _0x125a4f, _0x518473.stateNode);
            _0x38934a(_0x125a4f);
          } else {
            _0x13c376(_0x37255d, _0x518473.stateNode);
          }
        }
        break;
      case 4:
        _0x2288a2 = _0x37255d;
        _0x50eb98 = _0x3dfabd;
        _0x37255d = _0x518473.stateNode.containerInfo;
        _0x3dfabd = true;
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        _0x37255d = _0x2288a2;
        _0x3dfabd = _0x50eb98;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _0x30d75a(2, _0x518473, _0x1aead1);
        if (!_0x107ff1) {
          _0x30d75a(4, _0x518473, _0x1aead1);
        }
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        break;
      case 1:
        if (!_0x107ff1) {
          _0x21b0bd(_0x518473, _0x1aead1);
          if (typeof (_0x2288a2 = _0x518473.stateNode).componentWillUnmount == "function") {
            _0x33d203(_0x518473, _0x1aead1, _0x2288a2);
          }
        }
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        break;
      case 21:
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        break;
      case 22:
        _0x107ff1 = (_0x2288a2 = _0x107ff1) || _0x518473.memoizedState !== null;
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
        _0x107ff1 = _0x2288a2;
        break;
      default:
        _0x1c4f60(_0x125a4f, _0x1aead1, _0x518473);
    }
  }
  function _0x3b54f2(_0x58704a, _0x4ca200) {
    if (_0x4ca200.memoizedState === null && (_0x58704a = _0x4ca200.alternate) !== null && (_0x58704a = _0x58704a.memoizedState) !== null) {
      _0x58704a = _0x58704a.dehydrated;
      try {
        _0x38934a(_0x58704a);
      } catch (_0x59c993) {
        _0x63b491(_0x4ca200, _0x4ca200.return, _0x59c993);
      }
    }
  }
  function _0x3ddf3f(_0x22d731, _0x425bc9) {
    if (_0x425bc9.memoizedState === null && (_0x22d731 = _0x425bc9.alternate) !== null && (_0x22d731 = _0x22d731.memoizedState) !== null && (_0x22d731 = _0x22d731.dehydrated) !== null) {
      try {
        _0x38934a(_0x22d731);
      } catch (_0x2ed30a) {
        _0x63b491(_0x425bc9, _0x425bc9.return, _0x2ed30a);
      }
    }
  }
  function _0x46e27d(_0x3c93f1, _0x729981) {
    var _0x463004 = function (_0x386d5c) {
      switch (_0x386d5c.tag) {
        case 31:
        case 13:
        case 19:
          var _0x1945db = _0x386d5c.stateNode;
          if (_0x1945db === null) {
            _0x1945db = _0x386d5c.stateNode = new _0x1cd67e();
          }
          return _0x1945db;
        case 22:
          if ((_0x1945db = (_0x386d5c = _0x386d5c.stateNode)._retryCache) === null) {
            _0x1945db = _0x386d5c._retryCache = new _0x1cd67e();
          }
          return _0x1945db;
        default:
          throw Error(_0x34c7b9(435, _0x386d5c.tag));
      }
    }(_0x3c93f1);
    _0x729981.forEach(function (_0x349f9a) {
      if (!_0x463004.has(_0x349f9a)) {
        _0x463004.add(_0x349f9a);
        var _0x344b0f = _0x58162b.bind(null, _0x3c93f1, _0x349f9a);
        _0x349f9a.then(_0x344b0f, _0x344b0f);
      }
    });
  }
  function _0x381509(_0x2174d9, _0x3951c9) {
    var _0x3cecf2 = _0x3951c9.deletions;
    if (_0x3cecf2 !== null) {
      for (var _0x4338ac = 0; _0x4338ac < _0x3cecf2.length; _0x4338ac++) {
        var _0x94989f = _0x3cecf2[_0x4338ac];
        var _0x28bf28 = _0x2174d9;
        var _0xc7a40 = _0x3951c9;
        var _0xb91fc5 = _0xc7a40;
        _0x460ada: while (_0xb91fc5 !== null) {
          switch (_0xb91fc5.tag) {
            case 27:
              if (_0x6fae4f(_0xb91fc5.type)) {
                _0x37255d = _0xb91fc5.stateNode;
                _0x3dfabd = false;
                break _0x460ada;
              }
              break;
            case 5:
              _0x37255d = _0xb91fc5.stateNode;
              _0x3dfabd = false;
              break _0x460ada;
            case 3:
            case 4:
              _0x37255d = _0xb91fc5.stateNode.containerInfo;
              _0x3dfabd = true;
              break _0x460ada;
          }
          _0xb91fc5 = _0xb91fc5.return;
        }
        if (_0x37255d === null) {
          throw Error(_0x34c7b9(160));
        }
        _0x13ac02(_0x28bf28, _0xc7a40, _0x94989f);
        _0x37255d = null;
        _0x3dfabd = false;
        if ((_0x28bf28 = _0x94989f.alternate) !== null) {
          _0x28bf28.return = null;
        }
        _0x94989f.return = null;
      }
    }
    if (_0x3951c9.subtreeFlags & 13886) {
      for (_0x3951c9 = _0x3951c9.child; _0x3951c9 !== null;) {
        _0x55d926(_0x3951c9, _0x2174d9);
        _0x3951c9 = _0x3951c9.sibling;
      }
    }
  }
  var _0x32b674 = null;
  function _0x55d926(_0x5b05af, _0x315ba9) {
    var _0x73cbd3 = _0x5b05af.alternate;
    var _0x3e69a9 = _0x5b05af.flags;
    switch (_0x5b05af.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 4) {
          _0x30d75a(3, _0x5b05af, _0x5b05af.return);
          _0x320efd(3, _0x5b05af);
          _0x30d75a(5, _0x5b05af, _0x5b05af.return);
        }
        break;
      case 1:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 512) {
          if (!_0x107ff1 && _0x73cbd3 !== null) {
            _0x21b0bd(_0x73cbd3, _0x73cbd3.return);
          }
        }
        if (_0x3e69a9 & 64 && _0x238f4a && (_0x5b05af = _0x5b05af.updateQueue) !== null && (_0x3e69a9 = _0x5b05af.callbacks) !== null) {
          _0x73cbd3 = _0x5b05af.shared.hiddenCallbacks;
          _0x5b05af.shared.hiddenCallbacks = _0x73cbd3 === null ? _0x3e69a9 : _0x73cbd3.concat(_0x3e69a9);
        }
        break;
      case 26:
        var _0x55821b = _0x32b674;
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 512) {
          if (!_0x107ff1 && _0x73cbd3 !== null) {
            _0x21b0bd(_0x73cbd3, _0x73cbd3.return);
          }
        }
        if (_0x3e69a9 & 4) {
          var _0x44b745 = _0x73cbd3 !== null ? _0x73cbd3.memoizedState : null;
          _0x3e69a9 = _0x5b05af.memoizedState;
          if (_0x73cbd3 === null) {
            if (_0x3e69a9 === null) {
              if (_0x5b05af.stateNode === null) {
                _0x48c9d0: {
                  _0x3e69a9 = _0x5b05af.type;
                  _0x73cbd3 = _0x5b05af.memoizedProps;
                  _0x55821b = _0x55821b.ownerDocument || _0x55821b;
                  _0x302a02: switch (_0x3e69a9) {
                    case "title":
                      if (!(_0x44b745 = _0x55821b.getElementsByTagName("title")[0]) || _0x44b745[_0x28419d] || _0x44b745[_0x941386] || _0x44b745.namespaceURI === "http://www.w3.org/2000/svg" || _0x44b745.hasAttribute("itemprop")) {
                        _0x44b745 = _0x55821b.createElement(_0x3e69a9);
                        _0x55821b.head.insertBefore(_0x44b745, _0x55821b.querySelector("head > title"));
                      }
                      _0x1541af(_0x44b745, _0x3e69a9, _0x73cbd3);
                      _0x44b745[_0x941386] = _0x5b05af;
                      _0x414312(_0x44b745);
                      _0x3e69a9 = _0x44b745;
                      break _0x48c9d0;
                    case "link":
                      var _0x119231 = _0x23dede("link", "href", _0x55821b).get(_0x3e69a9 + (_0x73cbd3.href || ""));
                      if (_0x119231) {
                        for (var _0x26dfc9 = 0; _0x26dfc9 < _0x119231.length; _0x26dfc9++) {
                          if ((_0x44b745 = _0x119231[_0x26dfc9]).getAttribute("href") === (_0x73cbd3.href == null || _0x73cbd3.href === "" ? null : _0x73cbd3.href) && _0x44b745.getAttribute("rel") === (_0x73cbd3.rel == null ? null : _0x73cbd3.rel) && _0x44b745.getAttribute("title") === (_0x73cbd3.title == null ? null : _0x73cbd3.title) && _0x44b745.getAttribute("crossorigin") === (_0x73cbd3.crossOrigin == null ? null : _0x73cbd3.crossOrigin)) {
                            _0x119231.splice(_0x26dfc9, 1);
                            break _0x302a02;
                          }
                        }
                      }
                      _0x1541af(_0x44b745 = _0x55821b.createElement(_0x3e69a9), _0x3e69a9, _0x73cbd3);
                      _0x55821b.head.appendChild(_0x44b745);
                      break;
                    case "meta":
                      if (_0x119231 = _0x23dede("meta", "content", _0x55821b).get(_0x3e69a9 + (_0x73cbd3.content || ""))) {
                        for (_0x26dfc9 = 0; _0x26dfc9 < _0x119231.length; _0x26dfc9++) {
                          if ((_0x44b745 = _0x119231[_0x26dfc9]).getAttribute("content") === (_0x73cbd3.content == null ? null : "" + _0x73cbd3.content) && _0x44b745.getAttribute("name") === (_0x73cbd3.name == null ? null : _0x73cbd3.name) && _0x44b745.getAttribute("property") === (_0x73cbd3.property == null ? null : _0x73cbd3.property) && _0x44b745.getAttribute("http-equiv") === (_0x73cbd3.httpEquiv == null ? null : _0x73cbd3.httpEquiv) && _0x44b745.getAttribute("charset") === (_0x73cbd3.charSet == null ? null : _0x73cbd3.charSet)) {
                            _0x119231.splice(_0x26dfc9, 1);
                            break _0x302a02;
                          }
                        }
                      }
                      _0x1541af(_0x44b745 = _0x55821b.createElement(_0x3e69a9), _0x3e69a9, _0x73cbd3);
                      _0x55821b.head.appendChild(_0x44b745);
                      break;
                    default:
                      throw Error(_0x34c7b9(468, _0x3e69a9));
                  }
                  _0x44b745[_0x941386] = _0x5b05af;
                  _0x414312(_0x44b745);
                  _0x3e69a9 = _0x44b745;
                }
                _0x5b05af.stateNode = _0x3e69a9;
              } else {
                _0x74e8b1(_0x55821b, _0x5b05af.type, _0x5b05af.stateNode);
              }
            } else {
              _0x5b05af.stateNode = _0x5311ee(_0x55821b, _0x3e69a9, _0x5b05af.memoizedProps);
            }
          } else if (_0x44b745 !== _0x3e69a9) {
            if (_0x44b745 === null) {
              if (_0x73cbd3.stateNode !== null) {
                (_0x73cbd3 = _0x73cbd3.stateNode).parentNode.removeChild(_0x73cbd3);
              }
            } else {
              _0x44b745.count--;
            }
            if (_0x3e69a9 === null) {
              _0x74e8b1(_0x55821b, _0x5b05af.type, _0x5b05af.stateNode);
            } else {
              _0x5311ee(_0x55821b, _0x3e69a9, _0x5b05af.memoizedProps);
            }
          } else if (_0x3e69a9 === null && _0x5b05af.stateNode !== null) {
            _0x198441(_0x5b05af, _0x5b05af.memoizedProps, _0x73cbd3.memoizedProps);
          }
        }
        break;
      case 27:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 512) {
          if (!_0x107ff1 && _0x73cbd3 !== null) {
            _0x21b0bd(_0x73cbd3, _0x73cbd3.return);
          }
        }
        if (_0x73cbd3 !== null && _0x3e69a9 & 4) {
          _0x198441(_0x5b05af, _0x5b05af.memoizedProps, _0x73cbd3.memoizedProps);
        }
        break;
      case 5:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 512) {
          if (!_0x107ff1 && _0x73cbd3 !== null) {
            _0x21b0bd(_0x73cbd3, _0x73cbd3.return);
          }
        }
        if (_0x5b05af.flags & 32) {
          _0x55821b = _0x5b05af.stateNode;
          try {
            _0x3d4455(_0x55821b, "");
          } catch (_0x2a1af3) {
            _0x63b491(_0x5b05af, _0x5b05af.return, _0x2a1af3);
          }
        }
        if (_0x3e69a9 & 4 && _0x5b05af.stateNode != null) {
          _0x198441(_0x5b05af, _0x55821b = _0x5b05af.memoizedProps, _0x73cbd3 !== null ? _0x73cbd3.memoizedProps : _0x55821b);
        }
        if (_0x3e69a9 & 1024) {
          _0x590ce7 = true;
        }
        break;
      case 6:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 4) {
          if (_0x5b05af.stateNode === null) {
            throw Error(_0x34c7b9(162));
          }
          _0x3e69a9 = _0x5b05af.memoizedProps;
          _0x73cbd3 = _0x5b05af.stateNode;
          try {
            _0x73cbd3.nodeValue = _0x3e69a9;
          } catch (_0x4f49d1) {
            _0x63b491(_0x5b05af, _0x5b05af.return, _0x4f49d1);
          }
        }
        break;
      case 3:
        _0x21b4df = null;
        _0x55821b = _0x32b674;
        _0x32b674 = _0x1689ee(_0x315ba9.containerInfo);
        _0x381509(_0x315ba9, _0x5b05af);
        _0x32b674 = _0x55821b;
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 4 && _0x73cbd3 !== null && _0x73cbd3.memoizedState.isDehydrated) {
          try {
            _0x38934a(_0x315ba9.containerInfo);
          } catch (_0x54658d) {
            _0x63b491(_0x5b05af, _0x5b05af.return, _0x54658d);
          }
        }
        if (_0x590ce7) {
          _0x590ce7 = false;
          _0x5b2e64(_0x5b05af);
        }
        break;
      case 4:
        _0x3e69a9 = _0x32b674;
        _0x32b674 = _0x1689ee(_0x5b05af.stateNode.containerInfo);
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        _0x32b674 = _0x3e69a9;
        break;
      case 12:
      default:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        break;
      case 31:
      case 19:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 4 && (_0x3e69a9 = _0x5b05af.updateQueue) !== null) {
          _0x5b05af.updateQueue = null;
          _0x46e27d(_0x5b05af, _0x3e69a9);
        }
        break;
      case 13:
        _0x381509(_0x315ba9, _0x5b05af);
        _0x216cf2(_0x5b05af);
        if (_0x5b05af.child.flags & 8192 && _0x5b05af.memoizedState !== null != (_0x73cbd3 !== null && _0x73cbd3.memoizedState !== null)) {
          _0x189c56 = _0x271a39();
        }
        if (_0x3e69a9 & 4 && (_0x3e69a9 = _0x5b05af.updateQueue) !== null) {
          _0x5b05af.updateQueue = null;
          _0x46e27d(_0x5b05af, _0x3e69a9);
        }
        break;
      case 22:
        _0x55821b = _0x5b05af.memoizedState !== null;
        var _0x1abe2c = _0x73cbd3 !== null && _0x73cbd3.memoizedState !== null;
        var _0x13cfb9 = _0x238f4a;
        var _0x15c74d = _0x107ff1;
        _0x238f4a = _0x13cfb9 || _0x55821b;
        _0x107ff1 = _0x15c74d || _0x1abe2c;
        _0x381509(_0x315ba9, _0x5b05af);
        _0x107ff1 = _0x15c74d;
        _0x238f4a = _0x13cfb9;
        _0x216cf2(_0x5b05af);
        if (_0x3e69a9 & 8192) {
          _0x315ba9 = _0x5b05af.stateNode;
          _0x315ba9._visibility = _0x55821b ? _0x315ba9._visibility & -2 : _0x315ba9._visibility | 1;
          if (_0x55821b) {
            if (_0x73cbd3 !== null && !_0x1abe2c && !_0x238f4a && !_0x107ff1) {
              _0x196061(_0x5b05af);
            }
          }
          _0x73cbd3 = null;
          _0x315ba9 = _0x5b05af;
          _0x4523ac: while (true) {
            if (_0x315ba9.tag === 5 || _0x315ba9.tag === 26) {
              if (_0x73cbd3 === null) {
                _0x1abe2c = _0x73cbd3 = _0x315ba9;
                try {
                  _0x44b745 = _0x1abe2c.stateNode;
                  if (_0x55821b) {
                    if (typeof (_0x119231 = _0x44b745.style).setProperty == "function") {
                      _0x119231.setProperty("display", "none", "important");
                    } else {
                      _0x119231.display = "none";
                    }
                  } else {
                    _0x26dfc9 = _0x1abe2c.stateNode;
                    var _0x159638 = _0x1abe2c.memoizedProps.style;
                    var _0x4d0fdc = _0x159638 != null && _0x159638.hasOwnProperty("display") ? _0x159638.display : null;
                    _0x26dfc9.style.display = _0x4d0fdc == null || typeof _0x4d0fdc == "boolean" ? "" : ("" + _0x4d0fdc).trim();
                  }
                } catch (_0xbef626) {
                  _0x63b491(_0x1abe2c, _0x1abe2c.return, _0xbef626);
                }
              }
            } else if (_0x315ba9.tag === 6) {
              if (_0x73cbd3 === null) {
                _0x1abe2c = _0x315ba9;
                try {
                  _0x1abe2c.stateNode.nodeValue = _0x55821b ? "" : _0x1abe2c.memoizedProps;
                } catch (_0xff1b58) {
                  _0x63b491(_0x1abe2c, _0x1abe2c.return, _0xff1b58);
                }
              }
            } else if (_0x315ba9.tag === 18) {
              if (_0x73cbd3 === null) {
                _0x1abe2c = _0x315ba9;
                try {
                  var _0x53e189 = _0x1abe2c.stateNode;
                  if (_0x55821b) {
                    _0x1ac807(_0x53e189, true);
                  } else {
                    _0x1ac807(_0x1abe2c.stateNode, false);
                  }
                } catch (_0x4f73af) {
                  _0x63b491(_0x1abe2c, _0x1abe2c.return, _0x4f73af);
                }
              }
            } else if ((_0x315ba9.tag !== 22 && _0x315ba9.tag !== 23 || _0x315ba9.memoizedState === null || _0x315ba9 === _0x5b05af) && _0x315ba9.child !== null) {
              _0x315ba9.child.return = _0x315ba9;
              _0x315ba9 = _0x315ba9.child;
              continue;
            }
            if (_0x315ba9 === _0x5b05af) {
              break _0x4523ac;
            }
            while (_0x315ba9.sibling === null) {
              if (_0x315ba9.return === null || _0x315ba9.return === _0x5b05af) {
                break _0x4523ac;
              }
              if (_0x73cbd3 === _0x315ba9) {
                _0x73cbd3 = null;
              }
              _0x315ba9 = _0x315ba9.return;
            }
            if (_0x73cbd3 === _0x315ba9) {
              _0x73cbd3 = null;
            }
            _0x315ba9.sibling.return = _0x315ba9.return;
            _0x315ba9 = _0x315ba9.sibling;
          }
        }
        if (_0x3e69a9 & 4 && (_0x3e69a9 = _0x5b05af.updateQueue) !== null && (_0x73cbd3 = _0x3e69a9.retryQueue) !== null) {
          _0x3e69a9.retryQueue = null;
          _0x46e27d(_0x5b05af, _0x73cbd3);
        }
      case 30:
      case 21:
    }
  }
  function _0x216cf2(_0x208bf4) {
    var _0x80727 = _0x208bf4.flags;
    if (_0x80727 & 2) {
      try {
        var _0x24de21;
        for (var _0x1e50f8 = _0x208bf4.return; _0x1e50f8 !== null;) {
          if (_0x336440(_0x1e50f8)) {
            _0x24de21 = _0x1e50f8;
            break;
          }
          _0x1e50f8 = _0x1e50f8.return;
        }
        if (_0x24de21 == null) {
          throw Error(_0x34c7b9(160));
        }
        switch (_0x24de21.tag) {
          case 27:
            var _0x1fab40 = _0x24de21.stateNode;
            _0x4b93b9(_0x208bf4, _0x41aa99(_0x208bf4), _0x1fab40);
            break;
          case 5:
            var _0x431cdf = _0x24de21.stateNode;
            if (_0x24de21.flags & 32) {
              _0x3d4455(_0x431cdf, "");
              _0x24de21.flags &= -33;
            }
            _0x4b93b9(_0x208bf4, _0x41aa99(_0x208bf4), _0x431cdf);
            break;
          case 3:
          case 4:
            var _0x2357d7 = _0x24de21.stateNode.containerInfo;
            _0x51189d(_0x208bf4, _0x41aa99(_0x208bf4), _0x2357d7);
            break;
          default:
            throw Error(_0x34c7b9(161));
        }
      } catch (_0x5684c9) {
        _0x63b491(_0x208bf4, _0x208bf4.return, _0x5684c9);
      }
      _0x208bf4.flags &= -3;
    }
    if (_0x80727 & 4096) {
      _0x208bf4.flags &= -4097;
    }
  }
  function _0x5b2e64(_0x4c6e1d) {
    if (_0x4c6e1d.subtreeFlags & 1024) {
      for (_0x4c6e1d = _0x4c6e1d.child; _0x4c6e1d !== null;) {
        var _0x50c79d = _0x4c6e1d;
        _0x5b2e64(_0x50c79d);
        if (_0x50c79d.tag === 5 && _0x50c79d.flags & 1024) {
          _0x50c79d.stateNode.reset();
        }
        _0x4c6e1d = _0x4c6e1d.sibling;
      }
    }
  }
  function _0x81e424(_0x5ee9d5, _0x1be82b) {
    if (_0x1be82b.subtreeFlags & 8772) {
      for (_0x1be82b = _0x1be82b.child; _0x1be82b !== null;) {
        _0x4c1dba(_0x5ee9d5, _0x1be82b.alternate, _0x1be82b);
        _0x1be82b = _0x1be82b.sibling;
      }
    }
  }
  function _0x196061(_0x481d73) {
    for (_0x481d73 = _0x481d73.child; _0x481d73 !== null;) {
      var _0x11b146 = _0x481d73;
      switch (_0x11b146.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _0x30d75a(4, _0x11b146, _0x11b146.return);
          _0x196061(_0x11b146);
          break;
        case 1:
          _0x21b0bd(_0x11b146, _0x11b146.return);
          var _0x5e4b81 = _0x11b146.stateNode;
          if (typeof _0x5e4b81.componentWillUnmount == "function") {
            _0x33d203(_0x11b146, _0x11b146.return, _0x5e4b81);
          }
          _0x196061(_0x11b146);
          break;
        case 27:
          _0xa39ea0(_0x11b146.stateNode);
        case 26:
        case 5:
          _0x21b0bd(_0x11b146, _0x11b146.return);
          _0x196061(_0x11b146);
          break;
        case 22:
          if (_0x11b146.memoizedState === null) {
            _0x196061(_0x11b146);
          }
          break;
        default:
          _0x196061(_0x11b146);
      }
      _0x481d73 = _0x481d73.sibling;
    }
  }
  function _0x921051(_0x24fa11, _0x4a6329, _0x311d8f) {
    _0x311d8f = _0x311d8f && !!(_0x4a6329.subtreeFlags & 8772);
    _0x4a6329 = _0x4a6329.child;
    while (_0x4a6329 !== null) {
      var _0x1c6a80 = _0x4a6329.alternate;
      var _0x9e09 = _0x24fa11;
      var _0xfd8fdb = _0x4a6329;
      var _0x507536 = _0xfd8fdb.flags;
      switch (_0xfd8fdb.tag) {
        case 0:
        case 11:
        case 15:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          _0x320efd(4, _0xfd8fdb);
          break;
        case 1:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          if (typeof (_0x9e09 = (_0x1c6a80 = _0xfd8fdb).stateNode).componentDidMount == "function") {
            try {
              _0x9e09.componentDidMount();
            } catch (_0x40a771) {
              _0x63b491(_0x1c6a80, _0x1c6a80.return, _0x40a771);
            }
          }
          if ((_0x9e09 = (_0x1c6a80 = _0xfd8fdb).updateQueue) !== null) {
            var _0xfe0b0a = _0x1c6a80.stateNode;
            try {
              var _0x590e22 = _0x9e09.shared.hiddenCallbacks;
              if (_0x590e22 !== null) {
                _0x9e09.shared.hiddenCallbacks = null;
                _0x9e09 = 0;
                for (; _0x9e09 < _0x590e22.length; _0x9e09++) {
                  _0x20c4bc(_0x590e22[_0x9e09], _0xfe0b0a);
                }
              }
            } catch (_0x173823) {
              _0x63b491(_0x1c6a80, _0x1c6a80.return, _0x173823);
            }
          }
          if (_0x311d8f && _0x507536 & 64) {
            _0x28ade3(_0xfd8fdb);
          }
          _0x1d602d(_0xfd8fdb, _0xfd8fdb.return);
          break;
        case 27:
          _0x385307(_0xfd8fdb);
        case 26:
        case 5:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          if (_0x311d8f && _0x1c6a80 === null && _0x507536 & 4) {
            _0x4bed37(_0xfd8fdb);
          }
          _0x1d602d(_0xfd8fdb, _0xfd8fdb.return);
          break;
        case 12:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          break;
        case 31:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          if (_0x311d8f && _0x507536 & 4) {
            _0x3b54f2(_0x9e09, _0xfd8fdb);
          }
          break;
        case 13:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          if (_0x311d8f && _0x507536 & 4) {
            _0x3ddf3f(_0x9e09, _0xfd8fdb);
          }
          break;
        case 22:
          if (_0xfd8fdb.memoizedState === null) {
            _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
          }
          _0x1d602d(_0xfd8fdb, _0xfd8fdb.return);
          break;
        case 30:
          break;
        default:
          _0x921051(_0x9e09, _0xfd8fdb, _0x311d8f);
      }
      _0x4a6329 = _0x4a6329.sibling;
    }
  }
  function _0x23b0e7(_0x1cdd89, _0x45bc73) {
    var _0x4c3447 = null;
    if (_0x1cdd89 !== null && _0x1cdd89.memoizedState !== null && _0x1cdd89.memoizedState.cachePool !== null) {
      _0x4c3447 = _0x1cdd89.memoizedState.cachePool.pool;
    }
    _0x1cdd89 = null;
    if (_0x45bc73.memoizedState !== null && _0x45bc73.memoizedState.cachePool !== null) {
      _0x1cdd89 = _0x45bc73.memoizedState.cachePool.pool;
    }
    if (_0x1cdd89 !== _0x4c3447) {
      if (_0x1cdd89 != null) {
        _0x1cdd89.refCount++;
      }
      if (_0x4c3447 != null) {
        _0x10e625(_0x4c3447);
      }
    }
  }
  function _0x2a64d3(_0x1371bb, _0x2e10ce) {
    _0x1371bb = null;
    if (_0x2e10ce.alternate !== null) {
      _0x1371bb = _0x2e10ce.alternate.memoizedState.cache;
    }
    if ((_0x2e10ce = _0x2e10ce.memoizedState.cache) !== _0x1371bb) {
      _0x2e10ce.refCount++;
      if (_0x1371bb != null) {
        _0x10e625(_0x1371bb);
      }
    }
  }
  function _0x23444a(_0x5618aa, _0x5d848f, _0x369eef, _0x3f92c5) {
    if (_0x5d848f.subtreeFlags & 10256) {
      for (_0x5d848f = _0x5d848f.child; _0x5d848f !== null;) {
        _0x6a408d(_0x5618aa, _0x5d848f, _0x369eef, _0x3f92c5);
        _0x5d848f = _0x5d848f.sibling;
      }
    }
  }
  function _0x6a408d(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2) {
    var _0x47f9d6 = _0x2a30c7.flags;
    switch (_0x2a30c7.tag) {
      case 0:
      case 11:
      case 15:
        _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
        if (_0x47f9d6 & 2048) {
          _0x320efd(9, _0x2a30c7);
        }
        break;
      case 1:
      case 31:
      case 13:
      default:
        _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
        break;
      case 3:
        _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
        if (_0x47f9d6 & 2048) {
          _0x3fa663 = null;
          if (_0x2a30c7.alternate !== null) {
            _0x3fa663 = _0x2a30c7.alternate.memoizedState.cache;
          }
          if ((_0x2a30c7 = _0x2a30c7.memoizedState.cache) !== _0x3fa663) {
            _0x2a30c7.refCount++;
            if (_0x3fa663 != null) {
              _0x10e625(_0x3fa663);
            }
          }
        }
        break;
      case 12:
        if (_0x47f9d6 & 2048) {
          _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
          _0x3fa663 = _0x2a30c7.stateNode;
          try {
            var _0x66e80 = _0x2a30c7.memoizedProps;
            var _0x287c1d = _0x66e80.id;
            var _0x1d74c2 = _0x66e80.onPostCommit;
            if (typeof _0x1d74c2 == "function") {
              _0x1d74c2(_0x287c1d, _0x2a30c7.alternate === null ? "mount" : "update", _0x3fa663.passiveEffectDuration, -0);
            }
          } catch (_0x5d9750) {
            _0x63b491(_0x2a30c7, _0x2a30c7.return, _0x5d9750);
          }
        } else {
          _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
        }
        break;
      case 23:
        break;
      case 22:
        _0x66e80 = _0x2a30c7.stateNode;
        _0x287c1d = _0x2a30c7.alternate;
        if (_0x2a30c7.memoizedState !== null) {
          if (_0x66e80._visibility & 2) {
            _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
          } else {
            _0x446b29(_0x3fa663, _0x2a30c7);
          }
        } else if (_0x66e80._visibility & 2) {
          _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
        } else {
          _0x66e80._visibility |= 2;
          _0x4466a8(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2, !!(_0x2a30c7.subtreeFlags & 10256) || false);
        }
        if (_0x47f9d6 & 2048) {
          _0x23b0e7(_0x287c1d, _0x2a30c7);
        }
        break;
      case 24:
        _0x23444a(_0x3fa663, _0x2a30c7, _0xc2fb7, _0x2475a2);
        if (_0x47f9d6 & 2048) {
          _0x2a64d3(_0x2a30c7.alternate, _0x2a30c7);
        }
    }
  }
  function _0x4466a8(_0x266fa5, _0x5e5be9, _0x143f88, _0x1f58d7, _0x5ed338) {
    _0x5ed338 = _0x5ed338 && (!!(_0x5e5be9.subtreeFlags & 10256) || false);
    _0x5e5be9 = _0x5e5be9.child;
    while (_0x5e5be9 !== null) {
      var _0x58682d = _0x266fa5;
      var _0x46396d = _0x5e5be9;
      var _0x4ef61f = _0x143f88;
      var _0x33e614 = _0x1f58d7;
      var _0x2d06d9 = _0x46396d.flags;
      switch (_0x46396d.tag) {
        case 0:
        case 11:
        case 15:
          _0x4466a8(_0x58682d, _0x46396d, _0x4ef61f, _0x33e614, _0x5ed338);
          _0x320efd(8, _0x46396d);
          break;
        case 23:
          break;
        case 22:
          var _0x139cbb = _0x46396d.stateNode;
          if (_0x46396d.memoizedState !== null) {
            if (_0x139cbb._visibility & 2) {
              _0x4466a8(_0x58682d, _0x46396d, _0x4ef61f, _0x33e614, _0x5ed338);
            } else {
              _0x446b29(_0x58682d, _0x46396d);
            }
          } else {
            _0x139cbb._visibility |= 2;
            _0x4466a8(_0x58682d, _0x46396d, _0x4ef61f, _0x33e614, _0x5ed338);
          }
          if (_0x5ed338 && _0x2d06d9 & 2048) {
            _0x23b0e7(_0x46396d.alternate, _0x46396d);
          }
          break;
        case 24:
          _0x4466a8(_0x58682d, _0x46396d, _0x4ef61f, _0x33e614, _0x5ed338);
          if (_0x5ed338 && _0x2d06d9 & 2048) {
            _0x2a64d3(_0x46396d.alternate, _0x46396d);
          }
          break;
        default:
          _0x4466a8(_0x58682d, _0x46396d, _0x4ef61f, _0x33e614, _0x5ed338);
      }
      _0x5e5be9 = _0x5e5be9.sibling;
    }
  }
  function _0x446b29(_0x36d1f3, _0x31f2fa) {
    if (_0x31f2fa.subtreeFlags & 10256) {
      for (_0x31f2fa = _0x31f2fa.child; _0x31f2fa !== null;) {
        var _0x524b61 = _0x36d1f3;
        var _0x431758 = _0x31f2fa;
        var _0x40a2ca = _0x431758.flags;
        switch (_0x431758.tag) {
          case 22:
            _0x446b29(_0x524b61, _0x431758);
            if (_0x40a2ca & 2048) {
              _0x23b0e7(_0x431758.alternate, _0x431758);
            }
            break;
          case 24:
            _0x446b29(_0x524b61, _0x431758);
            if (_0x40a2ca & 2048) {
              _0x2a64d3(_0x431758.alternate, _0x431758);
            }
            break;
          default:
            _0x446b29(_0x524b61, _0x431758);
        }
        _0x31f2fa = _0x31f2fa.sibling;
      }
    }
  }
  var _0x1e6a83 = 8192;
  function _0x2e7228(_0x4bede0, _0x5bd13e, _0x1d53f3) {
    if (_0x4bede0.subtreeFlags & _0x1e6a83) {
      for (_0x4bede0 = _0x4bede0.child; _0x4bede0 !== null;) {
        _0x579b87(_0x4bede0, _0x5bd13e, _0x1d53f3);
        _0x4bede0 = _0x4bede0.sibling;
      }
    }
  }
  function _0x579b87(_0x240500, _0x5e0c2f, _0xd3169b) {
    switch (_0x240500.tag) {
      case 26:
        _0x2e7228(_0x240500, _0x5e0c2f, _0xd3169b);
        if (_0x240500.flags & _0x1e6a83 && _0x240500.memoizedState !== null) {
          (function (_0x348445, _0x5c32ae, _0x5d6e32, _0x2500da) {
            if (_0x5d6e32.type === "stylesheet" && (typeof _0x2500da.media != "string" || matchMedia(_0x2500da.media).matches !== false) && !(_0x5d6e32.state.loading & 4)) {
              if (_0x5d6e32.instance === null) {
                var _0x280a85 = _0x326b76(_0x2500da.href);
                var _0xe99560 = _0x5c32ae.querySelector(_0x5562ed(_0x280a85));
                if (_0xe99560) {
                  if ((_0x5c32ae = _0xe99560._p) !== null && typeof _0x5c32ae == "object" && typeof _0x5c32ae.then == "function") {
                    _0x348445.count++;
                    _0x348445 = _0x49944f.bind(_0x348445);
                    _0x5c32ae.then(_0x348445, _0x348445);
                  }
                  _0x5d6e32.state.loading |= 4;
                  _0x5d6e32.instance = _0xe99560;
                  _0x414312(_0xe99560);
                  return;
                }
                _0xe99560 = _0x5c32ae.ownerDocument || _0x5c32ae;
                _0x2500da = _0x294d00(_0x2500da);
                if (_0x280a85 = _0x2d5b1b.get(_0x280a85)) {
                  _0x386058(_0x2500da, _0x280a85);
                }
                _0x414312(_0xe99560 = _0xe99560.createElement("link"));
                var _0x4379dc = _0xe99560;
                _0x4379dc._p = new Promise(function (_0x14f910, _0x2207e5) {
                  _0x4379dc.onload = _0x14f910;
                  _0x4379dc.onerror = _0x2207e5;
                });
                _0x1541af(_0xe99560, "link", _0x2500da);
                _0x5d6e32.instance = _0xe99560;
              }
              if (_0x348445.stylesheets === null) {
                _0x348445.stylesheets = new Map();
              }
              _0x348445.stylesheets.set(_0x5d6e32, _0x5c32ae);
              if ((_0x5c32ae = _0x5d6e32.state.preload) && !(_0x5d6e32.state.loading & 3)) {
                _0x348445.count++;
                _0x5d6e32 = _0x49944f.bind(_0x348445);
                _0x5c32ae.addEventListener("load", _0x5d6e32);
                _0x5c32ae.addEventListener("error", _0x5d6e32);
              }
            }
          })(_0xd3169b, _0x32b674, _0x240500.memoizedState, _0x240500.memoizedProps);
        }
        break;
      case 5:
      default:
        _0x2e7228(_0x240500, _0x5e0c2f, _0xd3169b);
        break;
      case 3:
      case 4:
        var _0xed9f3d = _0x32b674;
        _0x32b674 = _0x1689ee(_0x240500.stateNode.containerInfo);
        _0x2e7228(_0x240500, _0x5e0c2f, _0xd3169b);
        _0x32b674 = _0xed9f3d;
        break;
      case 22:
        if (_0x240500.memoizedState === null) {
          if ((_0xed9f3d = _0x240500.alternate) !== null && _0xed9f3d.memoizedState !== null) {
            _0xed9f3d = _0x1e6a83;
            _0x1e6a83 = 16777216;
            _0x2e7228(_0x240500, _0x5e0c2f, _0xd3169b);
            _0x1e6a83 = _0xed9f3d;
          } else {
            _0x2e7228(_0x240500, _0x5e0c2f, _0xd3169b);
          }
        }
    }
  }
  function _0x392b42(_0x530e71) {
    var _0x295352 = _0x530e71.alternate;
    if (_0x295352 !== null && (_0x530e71 = _0x295352.child) !== null) {
      _0x295352.child = null;
      do {
        _0x295352 = _0x530e71.sibling;
        _0x530e71.sibling = null;
        _0x530e71 = _0x295352;
      } while (_0x530e71 !== null);
    }
  }
  function _0x557b5a(_0x2128b6) {
    var _0x2059bd = _0x2128b6.deletions;
    if (_0x2128b6.flags & 16) {
      if (_0x2059bd !== null) {
        for (var _0x1a442d = 0; _0x1a442d < _0x2059bd.length; _0x1a442d++) {
          var _0x52938d = _0x2059bd[_0x1a442d];
          _0xa2398f = _0x52938d;
          _0x1d6d50(_0x52938d, _0x2128b6);
        }
      }
      _0x392b42(_0x2128b6);
    }
    if (_0x2128b6.subtreeFlags & 10256) {
      for (_0x2128b6 = _0x2128b6.child; _0x2128b6 !== null;) {
        _0x5f3384(_0x2128b6);
        _0x2128b6 = _0x2128b6.sibling;
      }
    }
  }
  function _0x5f3384(_0x4414af) {
    switch (_0x4414af.tag) {
      case 0:
      case 11:
      case 15:
        _0x557b5a(_0x4414af);
        if (_0x4414af.flags & 2048) {
          _0x30d75a(9, _0x4414af, _0x4414af.return);
        }
        break;
      case 3:
      case 12:
      default:
        _0x557b5a(_0x4414af);
        break;
      case 22:
        var _0x1072f2 = _0x4414af.stateNode;
        if (_0x4414af.memoizedState !== null && _0x1072f2._visibility & 2 && (_0x4414af.return === null || _0x4414af.return.tag !== 13)) {
          _0x1072f2._visibility &= -3;
          _0x15dd07(_0x4414af);
        } else {
          _0x557b5a(_0x4414af);
        }
    }
  }
  function _0x15dd07(_0x4c9918) {
    var _0x444023 = _0x4c9918.deletions;
    if (_0x4c9918.flags & 16) {
      if (_0x444023 !== null) {
        for (var _0x4de106 = 0; _0x4de106 < _0x444023.length; _0x4de106++) {
          var _0x3d5640 = _0x444023[_0x4de106];
          _0xa2398f = _0x3d5640;
          _0x1d6d50(_0x3d5640, _0x4c9918);
        }
      }
      _0x392b42(_0x4c9918);
    }
    for (_0x4c9918 = _0x4c9918.child; _0x4c9918 !== null;) {
      switch ((_0x444023 = _0x4c9918).tag) {
        case 0:
        case 11:
        case 15:
          _0x30d75a(8, _0x444023, _0x444023.return);
          _0x15dd07(_0x444023);
          break;
        case 22:
          if ((_0x4de106 = _0x444023.stateNode)._visibility & 2) {
            _0x4de106._visibility &= -3;
            _0x15dd07(_0x444023);
          }
          break;
        default:
          _0x15dd07(_0x444023);
      }
      _0x4c9918 = _0x4c9918.sibling;
    }
  }
  function _0x1d6d50(_0xa17827, _0x2b69bd) {
    while (_0xa2398f !== null) {
      var _0x131721 = _0xa2398f;
      switch (_0x131721.tag) {
        case 0:
        case 11:
        case 15:
          _0x30d75a(8, _0x131721, _0x2b69bd);
          break;
        case 23:
        case 22:
          if (_0x131721.memoizedState !== null && _0x131721.memoizedState.cachePool !== null) {
            var _0x217439 = _0x131721.memoizedState.cachePool.pool;
            if (_0x217439 != null) {
              _0x217439.refCount++;
            }
          }
          break;
        case 24:
          _0x10e625(_0x131721.memoizedState.cache);
      }
      if ((_0x217439 = _0x131721.child) !== null) {
        _0x217439.return = _0x131721;
        _0xa2398f = _0x217439;
      } else {
        _0x4d95ab: for (_0x131721 = _0xa17827; _0xa2398f !== null;) {
          var _0x23318e = (_0x217439 = _0xa2398f).sibling;
          var _0xfc92b8 = _0x217439.return;
          _0xd511b5(_0x217439);
          if (_0x217439 === _0x131721) {
            _0xa2398f = null;
            break _0x4d95ab;
          }
          if (_0x23318e !== null) {
            _0x23318e.return = _0xfc92b8;
            _0xa2398f = _0x23318e;
            break _0x4d95ab;
          }
          _0xa2398f = _0xfc92b8;
        }
      }
    }
  }
  var _0x628477 = {
    getCacheForType: function (_0x5a6a5c) {
      var _0x12ba16 = _0x4d359e(_0x156a91);
      var _0x38ef6d = _0x12ba16.data.get(_0x5a6a5c);
      if (_0x38ef6d === undefined) {
        _0x38ef6d = _0x5a6a5c();
        _0x12ba16.data.set(_0x5a6a5c, _0x38ef6d);
      }
      return _0x38ef6d;
    },
    cacheSignal: function () {
      return _0x4d359e(_0x156a91).controller.signal;
    }
  };
  var _0x912782 = typeof WeakMap == "function" ? WeakMap : Map;
  var _0x21d2ba = 0;
  var _0x42aa40 = null;
  var _0x405db8 = null;
  var _0x325084 = 0;
  var _0x4a11ac = 0;
  var _0x629a2b = null;
  var _0x5505b8 = false;
  var _0x5dcb6d = false;
  var _0x256da0 = false;
  var _0x226a4f = 0;
  var _0x15ab98 = 0;
  var _0x1a001f = 0;
  var _0x4e09eb = 0;
  var _0x1f8055 = 0;
  var _0x38af2a = 0;
  var _0x1bf63c = 0;
  var _0x186d3c = null;
  var _0x3dc129 = null;
  var _0x586d86 = false;
  var _0x189c56 = 0;
  var _0x25fd9c = 0;
  var _0x5e3820 = Infinity;
  var _0x2cd2b3 = null;
  var _0x59e1ac = null;
  var _0x5ab585 = 0;
  var _0x19bf48 = null;
  var _0x208a52 = null;
  var _0x21f0ba = 0;
  var _0x265690 = 0;
  var _0x53a162 = null;
  var _0x547854 = null;
  var _0x201250 = 0;
  var _0xfcc50c = null;
  function _0x17dc03() {
    if (_0x21d2ba & 2 && _0x325084 !== 0) {
      return _0x325084 & -_0x325084;
    } else if (_0x30149d.T !== null) {
      return _0x276259();
    } else {
      return _0x4d9678();
    }
  }
  function _0x78ba47() {
    if (_0x38af2a === 0) {
      if (_0x325084 & 536870912 && !_0x823508) {
        _0x38af2a = 536870912;
      } else {
        var _0x578820 = _0x1499d4;
        if (!((_0x1499d4 <<= 1) & 3932160)) {
          _0x1499d4 = 262144;
        }
        _0x38af2a = _0x578820;
      }
    }
    if ((_0x578820 = _0x299787.current) !== null) {
      _0x578820.flags |= 32;
    }
    return _0x38af2a;
  }
  function _0x3968da(_0x2da5d1, _0x2ff05a, _0x5d52d8) {
    if (_0x2da5d1 === _0x42aa40 && (_0x4a11ac === 2 || _0x4a11ac === 9) || _0x2da5d1.cancelPendingCommit !== null) {
      _0x5e3c73(_0x2da5d1, 0);
      _0x527aec(_0x2da5d1, _0x325084, _0x38af2a, false);
    }
    _0x5ec34f(_0x2da5d1, _0x5d52d8);
    if (!(_0x21d2ba & 2) || _0x2da5d1 !== _0x42aa40) {
      if (_0x2da5d1 === _0x42aa40) {
        if (!(_0x21d2ba & 2)) {
          _0x4e09eb |= _0x5d52d8;
        }
        if (_0x15ab98 === 4) {
          _0x527aec(_0x2da5d1, _0x325084, _0x38af2a, false);
        }
      }
      _0xb07498(_0x2da5d1);
    }
  }
  function _0x38d661(_0x3c33f9, _0x218858, _0x190d6b) {
    if (_0x21d2ba & 6) {
      throw Error(_0x34c7b9(327));
    }
    var _0x36de9f = !_0x190d6b && !(_0x218858 & 127) && (_0x218858 & _0x3c33f9.expiredLanes) === 0 || _0x3f30e6(_0x3c33f9, _0x218858);
    var _0x5b69ac = _0x36de9f ? function (_0x508f3f, _0x3cce9c) {
      var _0x5bee41 = _0x21d2ba;
      _0x21d2ba |= 2;
      var _0x13f2ca = _0x2f1461();
      var _0x58f9ee = _0x2c7428();
      if (_0x42aa40 !== _0x508f3f || _0x325084 !== _0x3cce9c) {
        _0x2cd2b3 = null;
        _0x5e3820 = _0x271a39() + 500;
        _0x5e3c73(_0x508f3f, _0x3cce9c);
      } else {
        _0x5dcb6d = _0x3f30e6(_0x508f3f, _0x3cce9c);
      }
      _0x10d772: while (true) {
        try {
          if (_0x4a11ac !== 0 && _0x405db8 !== null) {
            _0x3cce9c = _0x405db8;
            var _0x4bf9b1 = _0x629a2b;
            _0x2b56dc: switch (_0x4a11ac) {
              case 1:
                _0x4a11ac = 0;
                _0x629a2b = null;
                _0x11fc8d(_0x508f3f, _0x3cce9c, _0x4bf9b1, 1);
                break;
              case 2:
              case 9:
                if (_0x590d7f(_0x4bf9b1)) {
                  _0x4a11ac = 0;
                  _0x629a2b = null;
                  _0x4b9653(_0x3cce9c);
                  break;
                }
                _0x3cce9c = function () {
                  if ((_0x4a11ac === 2 || _0x4a11ac === 9) && _0x42aa40 === _0x508f3f) {
                    _0x4a11ac = 7;
                  }
                  _0xb07498(_0x508f3f);
                };
                _0x4bf9b1.then(_0x3cce9c, _0x3cce9c);
                break _0x10d772;
              case 3:
                _0x4a11ac = 7;
                break _0x10d772;
              case 4:
                _0x4a11ac = 5;
                break _0x10d772;
              case 7:
                if (_0x590d7f(_0x4bf9b1)) {
                  _0x4a11ac = 0;
                  _0x629a2b = null;
                  _0x4b9653(_0x3cce9c);
                } else {
                  _0x4a11ac = 0;
                  _0x629a2b = null;
                  _0x11fc8d(_0x508f3f, _0x3cce9c, _0x4bf9b1, 7);
                }
                break;
              case 5:
                var _0x309625 = null;
                switch (_0x405db8.tag) {
                  case 26:
                    _0x309625 = _0x405db8.memoizedState;
                  case 5:
                  case 27:
                    var _0x3085bc = _0x405db8;
                    if (_0x309625 ? _0x5d966f(_0x309625) : _0x3085bc.stateNode.complete) {
                      _0x4a11ac = 0;
                      _0x629a2b = null;
                      var _0x531fa1 = _0x3085bc.sibling;
                      if (_0x531fa1 !== null) {
                        _0x405db8 = _0x531fa1;
                      } else {
                        var _0x45f58f = _0x3085bc.return;
                        if (_0x45f58f !== null) {
                          _0x405db8 = _0x45f58f;
                          _0x5af89b(_0x45f58f);
                        } else {
                          _0x405db8 = null;
                        }
                      }
                      break _0x2b56dc;
                    }
                }
                _0x4a11ac = 0;
                _0x629a2b = null;
                _0x11fc8d(_0x508f3f, _0x3cce9c, _0x4bf9b1, 5);
                break;
              case 6:
                _0x4a11ac = 0;
                _0x629a2b = null;
                _0x11fc8d(_0x508f3f, _0x3cce9c, _0x4bf9b1, 6);
                break;
              case 8:
                _0x533e51();
                _0x15ab98 = 6;
                break _0x10d772;
              default:
                throw Error(_0x34c7b9(462));
            }
          }
          _0x1e2c93();
          break;
        } catch (_0x4b0c50) {
          _0xeec992(_0x508f3f, _0x4b0c50);
        }
      }
      _0x28430d = _0x41fa62 = null;
      _0x30149d.H = _0x13f2ca;
      _0x30149d.A = _0x58f9ee;
      _0x21d2ba = _0x5bee41;
      if (_0x405db8 !== null) {
        return 0;
      } else {
        _0x42aa40 = null;
        _0x325084 = 0;
        _0x130c69();
        return _0x15ab98;
      }
    }(_0x3c33f9, _0x218858) : _0xa84830(_0x3c33f9, _0x218858, true);
    var _0x1e169b = _0x36de9f;
    while (true) {
      if (_0x5b69ac === 0) {
        if (_0x5dcb6d && !_0x36de9f) {
          _0x527aec(_0x3c33f9, _0x218858, 0, false);
        }
        break;
      }
      _0x190d6b = _0x3c33f9.current.alternate;
      if (!_0x1e169b || _0x508dbd(_0x190d6b)) {
        if (_0x5b69ac === 2) {
          _0x1e169b = _0x218858;
          if (_0x3c33f9.errorRecoveryDisabledLanes & _0x1e169b) {
            var _0x536d9b = 0;
          } else {
            _0x536d9b = (_0x536d9b = _0x3c33f9.pendingLanes & -536870913) != 0 ? _0x536d9b : _0x536d9b & 536870912 ? 536870912 : 0;
          }
          if (_0x536d9b !== 0) {
            _0x218858 = _0x536d9b;
            _0x562e58: {
              var _0x54fafe = _0x3c33f9;
              _0x5b69ac = _0x186d3c;
              var _0x5e6bc0 = _0x54fafe.current.memoizedState.isDehydrated;
              if (_0x5e6bc0) {
                _0x5e3c73(_0x54fafe, _0x536d9b).flags |= 256;
              }
              if ((_0x536d9b = _0xa84830(_0x54fafe, _0x536d9b, false)) !== 2) {
                if (_0x256da0 && !_0x5e6bc0) {
                  _0x54fafe.errorRecoveryDisabledLanes |= _0x1e169b;
                  _0x4e09eb |= _0x1e169b;
                  _0x5b69ac = 4;
                  break _0x562e58;
                }
                _0x1e169b = _0x3dc129;
                _0x3dc129 = _0x5b69ac;
                if (_0x1e169b !== null) {
                  if (_0x3dc129 === null) {
                    _0x3dc129 = _0x1e169b;
                  } else {
                    _0x3dc129.push.apply(_0x3dc129, _0x1e169b);
                  }
                }
              }
              _0x5b69ac = _0x536d9b;
            }
            _0x1e169b = false;
            if (_0x5b69ac !== 2) {
              continue;
            }
          }
        }
        if (_0x5b69ac === 1) {
          _0x5e3c73(_0x3c33f9, 0);
          _0x527aec(_0x3c33f9, _0x218858, 0, true);
          break;
        }
        _0xae3e7e: {
          _0x36de9f = _0x3c33f9;
          switch (_0x1e169b = _0x5b69ac) {
            case 0:
            case 1:
              throw Error(_0x34c7b9(345));
            case 4:
              if ((_0x218858 & 4194048) !== _0x218858) {
                break;
              }
            case 6:
              _0x527aec(_0x36de9f, _0x218858, _0x38af2a, !_0x5505b8);
              break _0xae3e7e;
            case 2:
              _0x3dc129 = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(_0x34c7b9(329));
          }
          if ((_0x218858 & 62914560) === _0x218858 && (_0x5b69ac = _0x189c56 + 300 - _0x271a39()) > 10) {
            _0x527aec(_0x36de9f, _0x218858, _0x38af2a, !_0x5505b8);
            if (_0x51d858(_0x36de9f, 0, true) !== 0) {
              break _0xae3e7e;
            }
            _0x21f0ba = _0x218858;
            _0x36de9f.timeoutHandle = _0x374c13(_0x468977.bind(null, _0x36de9f, _0x190d6b, _0x3dc129, _0x2cd2b3, _0x586d86, _0x218858, _0x38af2a, _0x4e09eb, _0x1bf63c, _0x5505b8, _0x1e169b, "Throttled", -0, 0), _0x5b69ac);
          } else {
            _0x468977(_0x36de9f, _0x190d6b, _0x3dc129, _0x2cd2b3, _0x586d86, _0x218858, _0x38af2a, _0x4e09eb, _0x1bf63c, _0x5505b8, _0x1e169b, null, -0, 0);
          }
        }
        break;
      }
      _0x5b69ac = _0xa84830(_0x3c33f9, _0x218858, false);
      _0x1e169b = false;
    }
    _0xb07498(_0x3c33f9);
  }
  function _0x468977(_0x560a7b, _0x3128e0, _0x529224, _0x620f5d, _0x280675, _0x15d668, _0xf25d50, _0x164ae7, _0x1a0972, _0x1abf41, _0xea4218, _0x3a220b, _0x5a0d8f, _0x416c21) {
    _0x560a7b.timeoutHandle = -1;
    if ((_0x3a220b = _0x3128e0.subtreeFlags) & 8192 || !(~_0x3a220b & 16785408)) {
      _0x579b87(_0x3128e0, _0x15d668, _0x3a220b = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: _0x3de216
      });
      var _0x2cf4b2 = (_0x15d668 & 62914560) === _0x15d668 ? _0x189c56 - _0x271a39() : (_0x15d668 & 4194048) === _0x15d668 ? _0x25fd9c - _0x271a39() : 0;
      if ((_0x2cf4b2 = function (_0x4e6767, _0x113f1e) {
        if (_0x4e6767.stylesheets && _0x4e6767.count === 0) {
          _0x3ff96d(_0x4e6767, _0x4e6767.stylesheets);
        }
        if (_0x4e6767.count > 0 || _0x4e6767.imgCount > 0) {
          return function (_0x4785c9) {
            var _0x4124f5 = setTimeout(function () {
              if (_0x4e6767.stylesheets) {
                _0x3ff96d(_0x4e6767, _0x4e6767.stylesheets);
              }
              if (_0x4e6767.unsuspend) {
                var _0x4df88a = _0x4e6767.unsuspend;
                _0x4e6767.unsuspend = null;
                _0x4df88a();
              }
            }, 60000 + _0x113f1e);
            if (_0x4e6767.imgBytes > 0 && _0x391f94 === 0) {
              _0x391f94 = function () {
                if (typeof performance.getEntriesByType == "function") {
                  var _0x15e8fd = 0;
                  var _0x43a0ee = 0;
                  for (var _0x1b6d54 = performance.getEntriesByType("resource"), _0x243ed1 = 0; _0x243ed1 < _0x1b6d54.length; _0x243ed1++) {
                    var _0x965450 = _0x1b6d54[_0x243ed1];
                    var _0xe6325f = _0x965450.transferSize;
                    var _0x4c5445 = _0x965450.initiatorType;
                    var _0x4acedd = _0x965450.duration;
                    if (_0xe6325f && _0x4acedd && _0x258c48(_0x4c5445)) {
                      _0x4c5445 = 0;
                      _0x4acedd = _0x965450.responseEnd;
                      _0x243ed1 += 1;
                      for (; _0x243ed1 < _0x1b6d54.length; _0x243ed1++) {
                        var _0x189e1c = _0x1b6d54[_0x243ed1];
                        var _0x5162b3 = _0x189e1c.startTime;
                        if (_0x5162b3 > _0x4acedd) {
                          break;
                        }
                        var _0x1526cd = _0x189e1c.transferSize;
                        var _0x33bbda = _0x189e1c.initiatorType;
                        if (_0x1526cd && _0x258c48(_0x33bbda)) {
                          _0x4c5445 += _0x1526cd * ((_0x189e1c = _0x189e1c.responseEnd) < _0x4acedd ? 1 : (_0x4acedd - _0x5162b3) / (_0x189e1c - _0x5162b3));
                        }
                      }
                      --_0x243ed1;
                      _0x43a0ee += (_0xe6325f + _0x4c5445) * 8 / (_0x965450.duration / 1000);
                      if (++_0x15e8fd > 10) {
                        break;
                      }
                    }
                  }
                  if (_0x15e8fd > 0) {
                    return _0x43a0ee / _0x15e8fd / 1000000;
                  }
                }
                if (navigator.connection && typeof (_0x15e8fd = navigator.connection.downlink) == "number") {
                  return _0x15e8fd;
                } else {
                  return 5;
                }
              }() * 62500;
            }
            var _0x198219 = setTimeout(function () {
              _0x4e6767.waitingForImages = false;
              if (_0x4e6767.count === 0 && (_0x4e6767.stylesheets && _0x3ff96d(_0x4e6767, _0x4e6767.stylesheets), _0x4e6767.unsuspend)) {
                var _0x748188 = _0x4e6767.unsuspend;
                _0x4e6767.unsuspend = null;
                _0x748188();
              }
            }, (_0x4e6767.imgBytes > _0x391f94 ? 50 : 800) + _0x113f1e);
            _0x4e6767.unsuspend = _0x4785c9;
            return function () {
              _0x4e6767.unsuspend = null;
              clearTimeout(_0x4124f5);
              clearTimeout(_0x198219);
            };
          };
        } else {
          return null;
        }
      }(_0x3a220b, _0x2cf4b2)) !== null) {
        _0x21f0ba = _0x15d668;
        _0x560a7b.cancelPendingCommit = _0x2cf4b2(_0x187ee9.bind(null, _0x560a7b, _0x3128e0, _0x15d668, _0x529224, _0x620f5d, _0x280675, _0xf25d50, _0x164ae7, _0x1a0972, _0xea4218, _0x3a220b, null, _0x5a0d8f, _0x416c21));
        _0x527aec(_0x560a7b, _0x15d668, _0xf25d50, !_0x1abf41);
        return;
      }
    }
    _0x187ee9(_0x560a7b, _0x3128e0, _0x15d668, _0x529224, _0x620f5d, _0x280675, _0xf25d50, _0x164ae7, _0x1a0972);
  }
  function _0x508dbd(_0xbdd014) {
    var _0xa7d99b = _0xbdd014;
    for (;;) {
      var _0x28d105 = _0xa7d99b.tag;
      if ((_0x28d105 === 0 || _0x28d105 === 11 || _0x28d105 === 15) && _0xa7d99b.flags & 16384 && (_0x28d105 = _0xa7d99b.updateQueue) !== null && (_0x28d105 = _0x28d105.stores) !== null) {
        for (var _0x567ada = 0; _0x567ada < _0x28d105.length; _0x567ada++) {
          var _0x226140 = _0x28d105[_0x567ada];
          var _0x31225a = _0x226140.getSnapshot;
          _0x226140 = _0x226140.value;
          try {
            if (!_0x1e5abc(_0x31225a(), _0x226140)) {
              return false;
            }
          } catch (_0x3fd52c) {
            return false;
          }
        }
      }
      _0x28d105 = _0xa7d99b.child;
      if (_0xa7d99b.subtreeFlags & 16384 && _0x28d105 !== null) {
        _0x28d105.return = _0xa7d99b;
        _0xa7d99b = _0x28d105;
      } else {
        if (_0xa7d99b === _0xbdd014) {
          break;
        }
        while (_0xa7d99b.sibling === null) {
          if (_0xa7d99b.return === null || _0xa7d99b.return === _0xbdd014) {
            return true;
          }
          _0xa7d99b = _0xa7d99b.return;
        }
        _0xa7d99b.sibling.return = _0xa7d99b.return;
        _0xa7d99b = _0xa7d99b.sibling;
      }
    }
    return true;
  }
  function _0x527aec(_0x930bc2, _0x1c0e6c, _0x5cf368, _0x418a07) {
    _0x1c0e6c &= ~_0x1f8055;
    _0x1c0e6c &= ~_0x4e09eb;
    _0x930bc2.suspendedLanes |= _0x1c0e6c;
    _0x930bc2.pingedLanes &= ~_0x1c0e6c;
    if (_0x418a07) {
      _0x930bc2.warmLanes |= _0x1c0e6c;
    }
    _0x418a07 = _0x930bc2.expirationTimes;
    for (var _0x4e5c3c = _0x1c0e6c; _0x4e5c3c > 0;) {
      var _0x5ca5f7 = 31 - _0x4f44c7(_0x4e5c3c);
      var _0x28e2d4 = 1 << _0x5ca5f7;
      _0x418a07[_0x5ca5f7] = -1;
      _0x4e5c3c &= ~_0x28e2d4;
    }
    if (_0x5cf368 !== 0) {
      _0x4e0a08(_0x930bc2, _0x5cf368, _0x1c0e6c);
    }
  }
  function _0x175c4b() {
    return !!(_0x21d2ba & 6) || (_0x5eaecd(0, false), false);
  }
  function _0x533e51() {
    if (_0x405db8 !== null) {
      if (_0x4a11ac === 0) {
        var _0x462974 = _0x405db8.return;
      } else {
        _0x28430d = _0x41fa62 = null;
        _0x58af93(_0x462974 = _0x405db8);
        _0x502a54 = null;
        _0x553183 = 0;
        _0x462974 = _0x405db8;
      }
      while (_0x462974 !== null) {
        _0x2867c6(_0x462974.alternate, _0x462974);
        _0x462974 = _0x462974.return;
      }
      _0x405db8 = null;
    }
  }
  function _0x5e3c73(_0x8b07de, _0x3e79c4) {
    var _0x32aa78 = _0x8b07de.timeoutHandle;
    if (_0x32aa78 !== -1) {
      _0x8b07de.timeoutHandle = -1;
      _0x3e53c8(_0x32aa78);
    }
    if ((_0x32aa78 = _0x8b07de.cancelPendingCommit) !== null) {
      _0x8b07de.cancelPendingCommit = null;
      _0x32aa78();
    }
    _0x21f0ba = 0;
    _0x533e51();
    _0x42aa40 = _0x8b07de;
    _0x405db8 = _0x32aa78 = _0x9ba748(_0x8b07de.current, null);
    _0x325084 = _0x3e79c4;
    _0x4a11ac = 0;
    _0x629a2b = null;
    _0x5505b8 = false;
    _0x5dcb6d = _0x3f30e6(_0x8b07de, _0x3e79c4);
    _0x256da0 = false;
    _0x1bf63c = _0x38af2a = _0x1f8055 = _0x4e09eb = _0x1a001f = _0x15ab98 = 0;
    _0x3dc129 = _0x186d3c = null;
    _0x586d86 = false;
    if (_0x3e79c4 & 8) {
      _0x3e79c4 |= _0x3e79c4 & 32;
    }
    var _0x510433 = _0x8b07de.entangledLanes;
    if (_0x510433 !== 0) {
      _0x8b07de = _0x8b07de.entanglements;
      _0x510433 &= _0x3e79c4;
      while (_0x510433 > 0) {
        var _0x35f99a = 31 - _0x4f44c7(_0x510433);
        var _0x2b3f24 = 1 << _0x35f99a;
        _0x3e79c4 |= _0x8b07de[_0x35f99a];
        _0x510433 &= ~_0x2b3f24;
      }
    }
    _0x226a4f = _0x3e79c4;
    _0x130c69();
    return _0x32aa78;
  }
  function _0xeec992(_0x55c12b, _0x471c71) {
    _0x4ddeb9 = null;
    _0x30149d.H = _0x243362;
    if (_0x471c71 === _0x29ca49 || _0x471c71 === _0x302451) {
      _0x471c71 = _0xebea68();
      _0x4a11ac = 3;
    } else if (_0x471c71 === _0xa659e4) {
      _0x471c71 = _0xebea68();
      _0x4a11ac = 4;
    } else {
      _0x4a11ac = _0x471c71 === _0x22cca2 ? 8 : _0x471c71 !== null && typeof _0x471c71 == "object" && typeof _0x471c71.then == "function" ? 6 : 1;
    }
    _0x629a2b = _0x471c71;
    if (_0x405db8 === null) {
      _0x15ab98 = 1;
      _0x1d03e7(_0x55c12b, _0x2ed85e(_0x471c71, _0x55c12b.current));
    }
  }
  function _0xedb19f() {
    var _0x2fe0b3 = _0x299787.current;
    return _0x2fe0b3 === null || ((_0x325084 & 4194048) === _0x325084 ? _0x254b41 === null : ((_0x325084 & 62914560) === _0x325084 || !!(_0x325084 & 536870912)) && _0x2fe0b3 === _0x254b41);
  }
  function _0x2f1461() {
    var _0x4f475d = _0x30149d.H;
    _0x30149d.H = _0x243362;
    if (_0x4f475d === null) {
      return _0x243362;
    } else {
      return _0x4f475d;
    }
  }
  function _0x2c7428() {
    var _0x47f884 = _0x30149d.A;
    _0x30149d.A = _0x628477;
    return _0x47f884;
  }
  function _0xd49ba5() {
    _0x15ab98 = 4;
    if (!_0x5505b8 && ((_0x325084 & 4194048) === _0x325084 || _0x299787.current === null)) {
      _0x5dcb6d = true;
    }
    if ((!!(_0x1a001f & 134217727) || !!(_0x4e09eb & 134217727)) && _0x42aa40 !== null) {
      _0x527aec(_0x42aa40, _0x325084, _0x38af2a, false);
    }
  }
  function _0xa84830(_0x3a46dc, _0x13eaaf, _0x449a3c) {
    var _0x27097b = _0x21d2ba;
    _0x21d2ba |= 2;
    var _0x4a97ad = _0x2f1461();
    var _0x18fa09 = _0x2c7428();
    if (_0x42aa40 !== _0x3a46dc || _0x325084 !== _0x13eaaf) {
      _0x2cd2b3 = null;
      _0x5e3c73(_0x3a46dc, _0x13eaaf);
    }
    _0x13eaaf = false;
    var _0x12e043 = _0x15ab98;
    _0x4ddf70: while (true) {
      try {
        if (_0x4a11ac !== 0 && _0x405db8 !== null) {
          var _0x27cd13 = _0x405db8;
          var _0x1657c4 = _0x629a2b;
          switch (_0x4a11ac) {
            case 8:
              _0x533e51();
              _0x12e043 = 6;
              break _0x4ddf70;
            case 3:
            case 2:
            case 9:
            case 6:
              if (_0x299787.current === null) {
                _0x13eaaf = true;
              }
              var _0x4ed70c = _0x4a11ac;
              _0x4a11ac = 0;
              _0x629a2b = null;
              _0x11fc8d(_0x3a46dc, _0x27cd13, _0x1657c4, _0x4ed70c);
              if (_0x449a3c && _0x5dcb6d) {
                _0x12e043 = 0;
                break _0x4ddf70;
              }
              break;
            default:
              _0x4ed70c = _0x4a11ac;
              _0x4a11ac = 0;
              _0x629a2b = null;
              _0x11fc8d(_0x3a46dc, _0x27cd13, _0x1657c4, _0x4ed70c);
          }
        }
        _0x1b9d80();
        _0x12e043 = _0x15ab98;
        break;
      } catch (_0x5250f7) {
        _0xeec992(_0x3a46dc, _0x5250f7);
      }
    }
    if (_0x13eaaf) {
      _0x3a46dc.shellSuspendCounter++;
    }
    _0x28430d = _0x41fa62 = null;
    _0x21d2ba = _0x27097b;
    _0x30149d.H = _0x4a97ad;
    _0x30149d.A = _0x18fa09;
    if (_0x405db8 === null) {
      _0x42aa40 = null;
      _0x325084 = 0;
      _0x130c69();
    }
    return _0x12e043;
  }
  function _0x1b9d80() {
    while (_0x405db8 !== null) {
      _0x37b901(_0x405db8);
    }
  }
  function _0x1e2c93() {
    while (_0x405db8 !== null && !_0x382c7c()) {
      _0x37b901(_0x405db8);
    }
  }
  function _0x37b901(_0x5a4607) {
    var _0x5bbe36 = _0x2483b9(_0x5a4607.alternate, _0x5a4607, _0x226a4f);
    _0x5a4607.memoizedProps = _0x5a4607.pendingProps;
    if (_0x5bbe36 === null) {
      _0x5af89b(_0x5a4607);
    } else {
      _0x405db8 = _0x5bbe36;
    }
  }
  function _0x4b9653(_0x49d9bc) {
    var _0x16c60a = _0x49d9bc;
    var _0xc853ed = _0x16c60a.alternate;
    switch (_0x16c60a.tag) {
      case 15:
      case 0:
        _0x16c60a = _0xc42dd9(_0xc853ed, _0x16c60a, _0x16c60a.pendingProps, _0x16c60a.type, undefined, _0x325084);
        break;
      case 11:
        _0x16c60a = _0xc42dd9(_0xc853ed, _0x16c60a, _0x16c60a.pendingProps, _0x16c60a.type.render, _0x16c60a.ref, _0x325084);
        break;
      case 5:
        _0x58af93(_0x16c60a);
      default:
        _0x2867c6(_0xc853ed, _0x16c60a);
        _0x16c60a = _0x2483b9(_0xc853ed, _0x16c60a = _0x405db8 = _0x33db6d(_0x16c60a, _0x226a4f), _0x226a4f);
    }
    _0x49d9bc.memoizedProps = _0x49d9bc.pendingProps;
    if (_0x16c60a === null) {
      _0x5af89b(_0x49d9bc);
    } else {
      _0x405db8 = _0x16c60a;
    }
  }
  function _0x11fc8d(_0x4cbebf, _0xd68ebe, _0x307ebe, _0x35199f) {
    _0x28430d = _0x41fa62 = null;
    _0x58af93(_0xd68ebe);
    _0x502a54 = null;
    _0x553183 = 0;
    var _0x134179 = _0xd68ebe.return;
    try {
      if (function (_0x5547df, _0xf92e8f, _0x520469, _0x55a12f, _0x470700) {
        _0x520469.flags |= 32768;
        if (_0x55a12f !== null && typeof _0x55a12f == "object" && typeof _0x55a12f.then == "function") {
          if ((_0xf92e8f = _0x520469.alternate) !== null) {
            _0x29615d(_0xf92e8f, _0x520469, _0x470700, true);
          }
          if ((_0x520469 = _0x299787.current) !== null) {
            switch (_0x520469.tag) {
              case 31:
              case 13:
                if (_0x254b41 === null) {
                  _0xd49ba5();
                } else if (_0x520469.alternate === null && _0x15ab98 === 0) {
                  _0x15ab98 = 3;
                }
                _0x520469.flags &= -257;
                _0x520469.flags |= 65536;
                _0x520469.lanes = _0x470700;
                if (_0x55a12f === _0x3bb41b) {
                  _0x520469.flags |= 16384;
                } else {
                  if ((_0xf92e8f = _0x520469.updateQueue) === null) {
                    _0x520469.updateQueue = new Set([_0x55a12f]);
                  } else {
                    _0xf92e8f.add(_0x55a12f);
                  }
                  _0x3c7328(_0x5547df, _0x55a12f, _0x470700);
                }
                return false;
              case 22:
                _0x520469.flags |= 65536;
                if (_0x55a12f === _0x3bb41b) {
                  _0x520469.flags |= 16384;
                } else {
                  if ((_0xf92e8f = _0x520469.updateQueue) === null) {
                    _0xf92e8f = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([_0x55a12f])
                    };
                    _0x520469.updateQueue = _0xf92e8f;
                  } else if ((_0x520469 = _0xf92e8f.retryQueue) === null) {
                    _0xf92e8f.retryQueue = new Set([_0x55a12f]);
                  } else {
                    _0x520469.add(_0x55a12f);
                  }
                  _0x3c7328(_0x5547df, _0x55a12f, _0x470700);
                }
                return false;
            }
            throw Error(_0x34c7b9(435, _0x520469.tag));
          }
          _0x3c7328(_0x5547df, _0x55a12f, _0x470700);
          _0xd49ba5();
          return false;
        }
        if (_0x823508) {
          if ((_0xf92e8f = _0x299787.current) !== null) {
            if (!(_0xf92e8f.flags & 65536)) {
              _0xf92e8f.flags |= 256;
            }
            _0xf92e8f.flags |= 65536;
            _0xf92e8f.lanes = _0x470700;
            if (_0x55a12f !== _0x1683eb) {
              _0x2725db(_0x2ed85e(_0x5547df = Error(_0x34c7b9(422), {
                cause: _0x55a12f
              }), _0x520469));
            }
          } else {
            if (_0x55a12f !== _0x1683eb) {
              _0x2725db(_0x2ed85e(_0xf92e8f = Error(_0x34c7b9(423), {
                cause: _0x55a12f
              }), _0x520469));
            }
            (_0x5547df = _0x5547df.current.alternate).flags |= 65536;
            _0x470700 &= -_0x470700;
            _0x5547df.lanes |= _0x470700;
            _0x55a12f = _0x2ed85e(_0x55a12f, _0x520469);
            _0x246e54(_0x5547df, _0x470700 = _0x42e5d9(_0x5547df.stateNode, _0x55a12f, _0x470700));
            if (_0x15ab98 !== 4) {
              _0x15ab98 = 2;
            }
          }
          return false;
        }
        var _0x571343 = Error(_0x34c7b9(520), {
          cause: _0x55a12f
        });
        _0x571343 = _0x2ed85e(_0x571343, _0x520469);
        if (_0x186d3c === null) {
          _0x186d3c = [_0x571343];
        } else {
          _0x186d3c.push(_0x571343);
        }
        if (_0x15ab98 !== 4) {
          _0x15ab98 = 2;
        }
        if (_0xf92e8f === null) {
          return true;
        }
        _0x55a12f = _0x2ed85e(_0x55a12f, _0x520469);
        _0x520469 = _0xf92e8f;
        do {
          switch (_0x520469.tag) {
            case 3:
              _0x520469.flags |= 65536;
              _0x5547df = _0x470700 & -_0x470700;
              _0x520469.lanes |= _0x5547df;
              _0x246e54(_0x520469, _0x5547df = _0x42e5d9(_0x520469.stateNode, _0x55a12f, _0x5547df));
              return false;
            case 1:
              _0xf92e8f = _0x520469.type;
              _0x571343 = _0x520469.stateNode;
              if (!(_0x520469.flags & 128) && (typeof _0xf92e8f.getDerivedStateFromError == "function" || _0x571343 !== null && typeof _0x571343.componentDidCatch == "function" && (_0x59e1ac === null || !_0x59e1ac.has(_0x571343)))) {
                _0x520469.flags |= 65536;
                _0x470700 &= -_0x470700;
                _0x520469.lanes |= _0x470700;
                _0x277e80(_0x470700 = _0x1ba8d9(_0x470700), _0x5547df, _0x520469, _0x55a12f);
                _0x246e54(_0x520469, _0x470700);
                return false;
              }
          }
          _0x520469 = _0x520469.return;
        } while (_0x520469 !== null);
        return false;
      }(_0x4cbebf, _0x134179, _0xd68ebe, _0x307ebe, _0x325084)) {
        _0x15ab98 = 1;
        _0x1d03e7(_0x4cbebf, _0x2ed85e(_0x307ebe, _0x4cbebf.current));
        _0x405db8 = null;
        return;
      }
    } catch (_0x13edf9) {
      if (_0x134179 !== null) {
        _0x405db8 = _0x134179;
        throw _0x13edf9;
      }
      _0x15ab98 = 1;
      _0x1d03e7(_0x4cbebf, _0x2ed85e(_0x307ebe, _0x4cbebf.current));
      _0x405db8 = null;
      return;
    }
    if (_0xd68ebe.flags & 32768) {
      if (_0x823508 || _0x35199f === 1) {
        _0x4cbebf = true;
      } else if (_0x5dcb6d || _0x325084 & 536870912) {
        _0x4cbebf = false;
      } else {
        _0x5505b8 = _0x4cbebf = true;
        if ((_0x35199f === 2 || _0x35199f === 9 || _0x35199f === 3 || _0x35199f === 6) && (_0x35199f = _0x299787.current) !== null && _0x35199f.tag === 13) {
          _0x35199f.flags |= 16384;
        }
      }
      _0x540e4f(_0xd68ebe, _0x4cbebf);
    } else {
      _0x5af89b(_0xd68ebe);
    }
  }
  function _0x5af89b(_0x41f778) {
    var _0x477de0 = _0x41f778;
    do {
      if (_0x477de0.flags & 32768) {
        _0x540e4f(_0x477de0, _0x5505b8);
        return;
      }
      _0x41f778 = _0x477de0.return;
      var _0x2172ad = _0x29a24c(_0x477de0.alternate, _0x477de0, _0x226a4f);
      if (_0x2172ad !== null) {
        _0x405db8 = _0x2172ad;
        return;
      }
      if ((_0x477de0 = _0x477de0.sibling) !== null) {
        _0x405db8 = _0x477de0;
        return;
      }
      _0x405db8 = _0x477de0 = _0x41f778;
    } while (_0x477de0 !== null);
    if (_0x15ab98 === 0) {
      _0x15ab98 = 5;
    }
  }
  function _0x540e4f(_0x48544b, _0x3bd948) {
    do {
      var _0x59fba4 = _0x4a1013(_0x48544b.alternate, _0x48544b);
      if (_0x59fba4 !== null) {
        _0x59fba4.flags &= 32767;
        _0x405db8 = _0x59fba4;
        return;
      }
      if ((_0x59fba4 = _0x48544b.return) !== null) {
        _0x59fba4.flags |= 32768;
        _0x59fba4.subtreeFlags = 0;
        _0x59fba4.deletions = null;
      }
      if (!_0x3bd948 && (_0x48544b = _0x48544b.sibling) !== null) {
        _0x405db8 = _0x48544b;
        return;
      }
      _0x405db8 = _0x48544b = _0x59fba4;
    } while (_0x48544b !== null);
    _0x15ab98 = 6;
    _0x405db8 = null;
  }
  function _0x187ee9(_0xcbf17e, _0x4dbe50, _0x14ba75, _0x52f6dc, _0x2bbf82, _0x165b93, _0x26bfb5, _0x26d717, _0x37cd29) {
    _0xcbf17e.cancelPendingCommit = null;
    do {
      _0x3306fc();
    } while (_0x5ab585 !== 0);
    if (_0x21d2ba & 6) {
      throw Error(_0x34c7b9(327));
    }
    if (_0x4dbe50 !== null) {
      if (_0x4dbe50 === _0xcbf17e.current) {
        throw Error(_0x34c7b9(177));
      }
      _0x165b93 = _0x4dbe50.lanes | _0x4dbe50.childLanes;
      (function (_0x3a567a, _0x5740b8, _0x37ba97, _0x11378d, _0x53b0af, _0x2e41e5) {
        var _0x175fed = _0x3a567a.pendingLanes;
        _0x3a567a.pendingLanes = _0x37ba97;
        _0x3a567a.suspendedLanes = 0;
        _0x3a567a.pingedLanes = 0;
        _0x3a567a.warmLanes = 0;
        _0x3a567a.expiredLanes &= _0x37ba97;
        _0x3a567a.entangledLanes &= _0x37ba97;
        _0x3a567a.errorRecoveryDisabledLanes &= _0x37ba97;
        _0x3a567a.shellSuspendCounter = 0;
        var _0x31baa5 = _0x3a567a.entanglements;
        var _0x532d47 = _0x3a567a.expirationTimes;
        var _0x3d0ad5 = _0x3a567a.hiddenUpdates;
        for (_0x37ba97 = _0x175fed & ~_0x37ba97; _0x37ba97 > 0;) {
          var _0x44a811 = 31 - _0x4f44c7(_0x37ba97);
          var _0x54d745 = 1 << _0x44a811;
          _0x31baa5[_0x44a811] = 0;
          _0x532d47[_0x44a811] = -1;
          var _0x12a0a1 = _0x3d0ad5[_0x44a811];
          if (_0x12a0a1 !== null) {
            _0x3d0ad5[_0x44a811] = null;
            _0x44a811 = 0;
            for (; _0x44a811 < _0x12a0a1.length; _0x44a811++) {
              var _0x551fce = _0x12a0a1[_0x44a811];
              if (_0x551fce !== null) {
                _0x551fce.lane &= -536870913;
              }
            }
          }
          _0x37ba97 &= ~_0x54d745;
        }
        if (_0x11378d !== 0) {
          _0x4e0a08(_0x3a567a, _0x11378d, 0);
        }
        if (_0x2e41e5 !== 0 && _0x53b0af === 0 && _0x3a567a.tag !== 0) {
          _0x3a567a.suspendedLanes |= _0x2e41e5 & ~(_0x175fed & ~_0x5740b8);
        }
      })(_0xcbf17e, _0x14ba75, _0x165b93 |= _0x33f387, _0x26bfb5, _0x26d717, _0x37cd29);
      if (_0xcbf17e === _0x42aa40) {
        _0x405db8 = _0x42aa40 = null;
        _0x325084 = 0;
      }
      _0x208a52 = _0x4dbe50;
      _0x19bf48 = _0xcbf17e;
      _0x21f0ba = _0x14ba75;
      _0x265690 = _0x165b93;
      _0x53a162 = _0x2bbf82;
      _0x547854 = _0x52f6dc;
      if (_0x4dbe50.subtreeFlags & 10256 || _0x4dbe50.flags & 10256) {
        _0xcbf17e.callbackNode = null;
        _0xcbf17e.callbackPriority = 0;
        _0x3ccef2(_0x39ac2e, function () {
          _0x7ef92e();
          return null;
        });
      } else {
        _0xcbf17e.callbackNode = null;
        _0xcbf17e.callbackPriority = 0;
      }
      _0x52f6dc = !!(_0x4dbe50.flags & 13878);
      if (_0x4dbe50.subtreeFlags & 13878 || _0x52f6dc) {
        _0x52f6dc = _0x30149d.T;
        _0x30149d.T = null;
        _0x2bbf82 = _0x3e2aff.p;
        _0x3e2aff.p = 2;
        _0x26bfb5 = _0x21d2ba;
        _0x21d2ba |= 4;
        try {
          (function (_0x58508d, _0x2b325e) {
            _0x58508d = _0x58508d.containerInfo;
            _0x1ae31a = _0x339421;
            if (_0xf0d8dd(_0x58508d = _0x16424a(_0x58508d))) {
              if ("selectionStart" in _0x58508d) {
                var _0x5701dc = {
                  start: _0x58508d.selectionStart,
                  end: _0x58508d.selectionEnd
                };
              } else {
                _0x12b19f: {
                  var _0x2f532c = (_0x5701dc = (_0x5701dc = _0x58508d.ownerDocument) && _0x5701dc.defaultView || window).getSelection && _0x5701dc.getSelection();
                  if (_0x2f532c && _0x2f532c.rangeCount !== 0) {
                    _0x5701dc = _0x2f532c.anchorNode;
                    var _0x519dc6 = _0x2f532c.anchorOffset;
                    var _0x426182 = _0x2f532c.focusNode;
                    _0x2f532c = _0x2f532c.focusOffset;
                    try {
                      _0x5701dc.nodeType;
                      _0x426182.nodeType;
                    } catch (_0x4e3d0e) {
                      _0x5701dc = null;
                      break _0x12b19f;
                    }
                    var _0x3ae03e = 0;
                    var _0x556b1b = -1;
                    var _0x26e47c = -1;
                    var _0x419725 = 0;
                    var _0xb9c5e5 = 0;
                    var _0x4f5a3e = _0x58508d;
                    var _0x45c926 = null;
                    _0x39a434: while (true) {
                      for (var _0x2e8f7b; _0x4f5a3e !== _0x5701dc || _0x519dc6 !== 0 && _0x4f5a3e.nodeType !== 3 || (_0x556b1b = _0x3ae03e + _0x519dc6), _0x4f5a3e !== _0x426182 || _0x2f532c !== 0 && _0x4f5a3e.nodeType !== 3 || (_0x26e47c = _0x3ae03e + _0x2f532c), _0x4f5a3e.nodeType === 3 && (_0x3ae03e += _0x4f5a3e.nodeValue.length), (_0x2e8f7b = _0x4f5a3e.firstChild) !== null;) {
                        _0x45c926 = _0x4f5a3e;
                        _0x4f5a3e = _0x2e8f7b;
                      }
                      while (true) {
                        if (_0x4f5a3e === _0x58508d) {
                          break _0x39a434;
                        }
                        if (_0x45c926 === _0x5701dc && ++_0x419725 === _0x519dc6) {
                          _0x556b1b = _0x3ae03e;
                        }
                        if (_0x45c926 === _0x426182 && ++_0xb9c5e5 === _0x2f532c) {
                          _0x26e47c = _0x3ae03e;
                        }
                        if ((_0x2e8f7b = _0x4f5a3e.nextSibling) !== null) {
                          break;
                        }
                        _0x45c926 = (_0x4f5a3e = _0x45c926).parentNode;
                      }
                      _0x4f5a3e = _0x2e8f7b;
                    }
                    _0x5701dc = _0x556b1b === -1 || _0x26e47c === -1 ? null : {
                      start: _0x556b1b,
                      end: _0x26e47c
                    };
                  } else {
                    _0x5701dc = null;
                  }
                }
              }
              _0x5701dc = _0x5701dc || {
                start: 0,
                end: 0
              };
            } else {
              _0x5701dc = null;
            }
            _0x52aad = {
              focusedElem: _0x58508d,
              selectionRange: _0x5701dc
            };
            _0x339421 = false;
            _0xa2398f = _0x2b325e;
            while (_0xa2398f !== null) {
              _0x58508d = (_0x2b325e = _0xa2398f).child;
              if (_0x2b325e.subtreeFlags & 1028 && _0x58508d !== null) {
                _0x58508d.return = _0x2b325e;
                _0xa2398f = _0x58508d;
              } else {
                while (_0xa2398f !== null) {
                  _0x426182 = (_0x2b325e = _0xa2398f).alternate;
                  _0x58508d = _0x2b325e.flags;
                  switch (_0x2b325e.tag) {
                    case 0:
                      if (_0x58508d & 4 && (_0x58508d = (_0x58508d = _0x2b325e.updateQueue) !== null ? _0x58508d.events : null) !== null) {
                        for (_0x5701dc = 0; _0x5701dc < _0x58508d.length; _0x5701dc++) {
                          (_0x519dc6 = _0x58508d[_0x5701dc]).ref.impl = _0x519dc6.nextImpl;
                        }
                      }
                      break;
                    case 11:
                    case 15:
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                      break;
                    case 1:
                      if (_0x58508d & 1024 && _0x426182 !== null) {
                        _0x58508d = undefined;
                        _0x5701dc = _0x2b325e;
                        _0x519dc6 = _0x426182.memoizedProps;
                        _0x426182 = _0x426182.memoizedState;
                        _0x2f532c = _0x5701dc.stateNode;
                        try {
                          var _0x25a4ee = _0x2bb569(_0x5701dc.type, _0x519dc6);
                          _0x58508d = _0x2f532c.getSnapshotBeforeUpdate(_0x25a4ee, _0x426182);
                          _0x2f532c.__reactInternalSnapshotBeforeUpdate = _0x58508d;
                        } catch (_0x5949f7) {
                          _0x63b491(_0x5701dc, _0x5701dc.return, _0x5949f7);
                        }
                      }
                      break;
                    case 3:
                      if (_0x58508d & 1024) {
                        if ((_0x5701dc = (_0x58508d = _0x2b325e.stateNode.containerInfo).nodeType) === 9) {
                          _0x17bb7f(_0x58508d);
                        } else if (_0x5701dc === 1) {
                          switch (_0x58508d.nodeName) {
                            case "HEAD":
                            case "HTML":
                            case "BODY":
                              _0x17bb7f(_0x58508d);
                              break;
                            default:
                              _0x58508d.textContent = "";
                          }
                        }
                      }
                      break;
                    default:
                      if (_0x58508d & 1024) {
                        throw Error(_0x34c7b9(163));
                      }
                  }
                  if ((_0x58508d = _0x2b325e.sibling) !== null) {
                    _0x58508d.return = _0x2b325e.return;
                    _0xa2398f = _0x58508d;
                    break;
                  }
                  _0xa2398f = _0x2b325e.return;
                }
              }
            }
          })(_0xcbf17e, _0x4dbe50);
        } finally {
          _0x21d2ba = _0x26bfb5;
          _0x3e2aff.p = _0x2bbf82;
          _0x30149d.T = _0x52f6dc;
        }
      }
      _0x5ab585 = 1;
      _0x447e1d();
      _0x2ad552();
      _0x442d4f();
    }
  }
  function _0x447e1d() {
    if (_0x5ab585 === 1) {
      _0x5ab585 = 0;
      var _0x4cb431 = _0x19bf48;
      var _0x302d50 = _0x208a52;
      var _0x371020 = !!(_0x302d50.flags & 13878);
      if (_0x302d50.subtreeFlags & 13878 || _0x371020) {
        _0x371020 = _0x30149d.T;
        _0x30149d.T = null;
        var _0x34e9f8 = _0x3e2aff.p;
        _0x3e2aff.p = 2;
        var _0x1e9b5a = _0x21d2ba;
        _0x21d2ba |= 4;
        try {
          _0x55d926(_0x302d50, _0x4cb431);
          var _0x20135d = _0x52aad;
          var _0x5dc477 = _0x16424a(_0x4cb431.containerInfo);
          var _0x23d9b4 = _0x20135d.focusedElem;
          var _0x39e702 = _0x20135d.selectionRange;
          if (_0x5dc477 !== _0x23d9b4 && _0x23d9b4 && _0x23d9b4.ownerDocument && _0x514bbd(_0x23d9b4.ownerDocument.documentElement, _0x23d9b4)) {
            if (_0x39e702 !== null && _0xf0d8dd(_0x23d9b4)) {
              var _0x35b897 = _0x39e702.start;
              var _0x29a800 = _0x39e702.end;
              if (_0x29a800 === undefined) {
                _0x29a800 = _0x35b897;
              }
              if ("selectionStart" in _0x23d9b4) {
                _0x23d9b4.selectionStart = _0x35b897;
                _0x23d9b4.selectionEnd = Math.min(_0x29a800, _0x23d9b4.value.length);
              } else {
                var _0x369313 = _0x23d9b4.ownerDocument || document;
                var _0x45f982 = _0x369313 && _0x369313.defaultView || window;
                if (_0x45f982.getSelection) {
                  var _0x134fdc = _0x45f982.getSelection();
                  var _0x4428fd = _0x23d9b4.textContent.length;
                  var _0x3ea4a8 = Math.min(_0x39e702.start, _0x4428fd);
                  var _0x816efc = _0x39e702.end === undefined ? _0x3ea4a8 : Math.min(_0x39e702.end, _0x4428fd);
                  if (!_0x134fdc.extend && _0x3ea4a8 > _0x816efc) {
                    _0x5dc477 = _0x816efc;
                    _0x816efc = _0x3ea4a8;
                    _0x3ea4a8 = _0x5dc477;
                  }
                  var _0x44f02f = _0x5e0943(_0x23d9b4, _0x3ea4a8);
                  var _0x203f7e = _0x5e0943(_0x23d9b4, _0x816efc);
                  if (_0x44f02f && _0x203f7e && (_0x134fdc.rangeCount !== 1 || _0x134fdc.anchorNode !== _0x44f02f.node || _0x134fdc.anchorOffset !== _0x44f02f.offset || _0x134fdc.focusNode !== _0x203f7e.node || _0x134fdc.focusOffset !== _0x203f7e.offset)) {
                    var _0x35537d = _0x369313.createRange();
                    _0x35537d.setStart(_0x44f02f.node, _0x44f02f.offset);
                    _0x134fdc.removeAllRanges();
                    if (_0x3ea4a8 > _0x816efc) {
                      _0x134fdc.addRange(_0x35537d);
                      _0x134fdc.extend(_0x203f7e.node, _0x203f7e.offset);
                    } else {
                      _0x35537d.setEnd(_0x203f7e.node, _0x203f7e.offset);
                      _0x134fdc.addRange(_0x35537d);
                    }
                  }
                }
              }
            }
            _0x369313 = [];
            _0x134fdc = _0x23d9b4;
            while (_0x134fdc = _0x134fdc.parentNode) {
              if (_0x134fdc.nodeType === 1) {
                _0x369313.push({
                  element: _0x134fdc,
                  left: _0x134fdc.scrollLeft,
                  top: _0x134fdc.scrollTop
                });
              }
            }
            if (typeof _0x23d9b4.focus == "function") {
              _0x23d9b4.focus();
            }
            _0x23d9b4 = 0;
            for (; _0x23d9b4 < _0x369313.length; _0x23d9b4++) {
              var _0xc569cd = _0x369313[_0x23d9b4];
              _0xc569cd.element.scrollLeft = _0xc569cd.left;
              _0xc569cd.element.scrollTop = _0xc569cd.top;
            }
          }
          _0x339421 = !!_0x1ae31a;
          _0x52aad = _0x1ae31a = null;
        } finally {
          _0x21d2ba = _0x1e9b5a;
          _0x3e2aff.p = _0x34e9f8;
          _0x30149d.T = _0x371020;
        }
      }
      _0x4cb431.current = _0x302d50;
      _0x5ab585 = 2;
    }
  }
  function _0x2ad552() {
    if (_0x5ab585 === 2) {
      _0x5ab585 = 0;
      var _0x4fa48f = _0x19bf48;
      var _0x556c95 = _0x208a52;
      var _0x4c7e22 = !!(_0x556c95.flags & 8772);
      if (_0x556c95.subtreeFlags & 8772 || _0x4c7e22) {
        _0x4c7e22 = _0x30149d.T;
        _0x30149d.T = null;
        var _0x806e5b = _0x3e2aff.p;
        _0x3e2aff.p = 2;
        var _0x77c0d9 = _0x21d2ba;
        _0x21d2ba |= 4;
        try {
          _0x4c1dba(_0x4fa48f, _0x556c95.alternate, _0x556c95);
        } finally {
          _0x21d2ba = _0x77c0d9;
          _0x3e2aff.p = _0x806e5b;
          _0x30149d.T = _0x4c7e22;
        }
      }
      _0x5ab585 = 3;
    }
  }
  function _0x442d4f() {
    if (_0x5ab585 === 4 || _0x5ab585 === 3) {
      _0x5ab585 = 0;
      _0x3ba68a();
      var _0x555e5b = _0x19bf48;
      var _0x7887bb = _0x208a52;
      var _0x3ac97b = _0x21f0ba;
      var _0x15d6d6 = _0x547854;
      if (_0x7887bb.subtreeFlags & 10256 || _0x7887bb.flags & 10256) {
        _0x5ab585 = 5;
      } else {
        _0x5ab585 = 0;
        _0x208a52 = _0x19bf48 = null;
        _0x2d2314(_0x555e5b, _0x555e5b.pendingLanes);
      }
      var _0x12d011 = _0x555e5b.pendingLanes;
      if (_0x12d011 === 0) {
        _0x59e1ac = null;
      }
      _0x30b643(_0x3ac97b);
      _0x7887bb = _0x7887bb.stateNode;
      if (_0x3be8ed && typeof _0x3be8ed.onCommitFiberRoot == "function") {
        try {
          _0x3be8ed.onCommitFiberRoot(_0x90d840, _0x7887bb, undefined, !(~_0x7887bb.current.flags & 128));
        } catch (_0x58ffa2) {}
      }
      if (_0x15d6d6 !== null) {
        _0x7887bb = _0x30149d.T;
        _0x12d011 = _0x3e2aff.p;
        _0x3e2aff.p = 2;
        _0x30149d.T = null;
        try {
          var _0x2b9fe7 = _0x555e5b.onRecoverableError;
          for (var _0x3048a3 = 0; _0x3048a3 < _0x15d6d6.length; _0x3048a3++) {
            var _0x1bd054 = _0x15d6d6[_0x3048a3];
            _0x2b9fe7(_0x1bd054.value, {
              componentStack: _0x1bd054.stack
            });
          }
        } finally {
          _0x30149d.T = _0x7887bb;
          _0x3e2aff.p = _0x12d011;
        }
      }
      if (_0x21f0ba & 3) {
        _0x3306fc();
      }
      _0xb07498(_0x555e5b);
      _0x12d011 = _0x555e5b.pendingLanes;
      if (_0x3ac97b & 261930 && _0x12d011 & 42) {
        if (_0x555e5b === _0xfcc50c) {
          _0x201250++;
        } else {
          _0x201250 = 0;
          _0xfcc50c = _0x555e5b;
        }
      } else {
        _0x201250 = 0;
      }
      _0x5eaecd(0, false);
    }
  }
  function _0x2d2314(_0x516a66, _0x38040e) {
    if ((_0x516a66.pooledCacheLanes &= _0x38040e) === 0 && (_0x38040e = _0x516a66.pooledCache) != null) {
      _0x516a66.pooledCache = null;
      _0x10e625(_0x38040e);
    }
  }
  function _0x3306fc() {
    _0x447e1d();
    _0x2ad552();
    _0x442d4f();
    return _0x7ef92e();
  }
  function _0x7ef92e() {
    if (_0x5ab585 !== 5) {
      return false;
    }
    var _0x319829 = _0x19bf48;
    var _0x6af989 = _0x265690;
    _0x265690 = 0;
    var _0x51fe78 = _0x30b643(_0x21f0ba);
    var _0x1ed527 = _0x30149d.T;
    var _0x1ec3a9 = _0x3e2aff.p;
    try {
      _0x3e2aff.p = _0x51fe78 < 32 ? 32 : _0x51fe78;
      _0x30149d.T = null;
      _0x51fe78 = _0x53a162;
      _0x53a162 = null;
      var _0x5b470d = _0x19bf48;
      var _0x159cd3 = _0x21f0ba;
      _0x5ab585 = 0;
      _0x208a52 = _0x19bf48 = null;
      _0x21f0ba = 0;
      if (_0x21d2ba & 6) {
        throw Error(_0x34c7b9(331));
      }
      var _0x3fee22 = _0x21d2ba;
      _0x21d2ba |= 4;
      _0x5f3384(_0x5b470d.current);
      _0x6a408d(_0x5b470d, _0x5b470d.current, _0x159cd3, _0x51fe78);
      _0x21d2ba = _0x3fee22;
      _0x5eaecd(0, false);
      if (_0x3be8ed && typeof _0x3be8ed.onPostCommitFiberRoot == "function") {
        try {
          _0x3be8ed.onPostCommitFiberRoot(_0x90d840, _0x5b470d);
        } catch (_0x588271) {}
      }
      return true;
    } finally {
      _0x3e2aff.p = _0x1ec3a9;
      _0x30149d.T = _0x1ed527;
      _0x2d2314(_0x319829, _0x6af989);
    }
  }
  function _0x3b2b58(_0x328f14, _0x53cb56, _0x1a94f0) {
    _0x53cb56 = _0x2ed85e(_0x1a94f0, _0x53cb56);
    if ((_0x328f14 = _0xe5f4cf(_0x328f14, _0x53cb56 = _0x42e5d9(_0x328f14.stateNode, _0x53cb56, 2), 2)) !== null) {
      _0x5ec34f(_0x328f14, 2);
      _0xb07498(_0x328f14);
    }
  }
  function _0x63b491(_0x1b7a7, _0x3fec35, _0x236878) {
    if (_0x1b7a7.tag === 3) {
      _0x3b2b58(_0x1b7a7, _0x1b7a7, _0x236878);
    } else {
      while (_0x3fec35 !== null) {
        if (_0x3fec35.tag === 3) {
          _0x3b2b58(_0x3fec35, _0x1b7a7, _0x236878);
          break;
        }
        if (_0x3fec35.tag === 1) {
          var _0x55c6b3 = _0x3fec35.stateNode;
          if (typeof _0x3fec35.type.getDerivedStateFromError == "function" || typeof _0x55c6b3.componentDidCatch == "function" && (_0x59e1ac === null || !_0x59e1ac.has(_0x55c6b3))) {
            _0x1b7a7 = _0x2ed85e(_0x236878, _0x1b7a7);
            if ((_0x55c6b3 = _0xe5f4cf(_0x3fec35, _0x236878 = _0x1ba8d9(2), 2)) !== null) {
              _0x277e80(_0x236878, _0x55c6b3, _0x3fec35, _0x1b7a7);
              _0x5ec34f(_0x55c6b3, 2);
              _0xb07498(_0x55c6b3);
            }
            break;
          }
        }
        _0x3fec35 = _0x3fec35.return;
      }
    }
  }
  function _0x3c7328(_0x1e36e7, _0x5f09e6, _0x4eb048) {
    var _0x37b7cf = _0x1e36e7.pingCache;
    if (_0x37b7cf === null) {
      _0x37b7cf = _0x1e36e7.pingCache = new _0x912782();
      var _0x19bb9a = new Set();
      _0x37b7cf.set(_0x5f09e6, _0x19bb9a);
    } else if ((_0x19bb9a = _0x37b7cf.get(_0x5f09e6)) === undefined) {
      _0x19bb9a = new Set();
      _0x37b7cf.set(_0x5f09e6, _0x19bb9a);
    }
    if (!_0x19bb9a.has(_0x4eb048)) {
      _0x256da0 = true;
      _0x19bb9a.add(_0x4eb048);
      _0x1e36e7 = _0x182b78.bind(null, _0x1e36e7, _0x5f09e6, _0x4eb048);
      _0x5f09e6.then(_0x1e36e7, _0x1e36e7);
    }
  }
  function _0x182b78(_0x4bb274, _0x2db9be, _0x4ec665) {
    var _0x573ba1 = _0x4bb274.pingCache;
    if (_0x573ba1 !== null) {
      _0x573ba1.delete(_0x2db9be);
    }
    _0x4bb274.pingedLanes |= _0x4bb274.suspendedLanes & _0x4ec665;
    _0x4bb274.warmLanes &= ~_0x4ec665;
    if (_0x42aa40 === _0x4bb274 && (_0x325084 & _0x4ec665) === _0x4ec665) {
      if (_0x15ab98 === 4 || _0x15ab98 === 3 && (_0x325084 & 62914560) === _0x325084 && _0x271a39() - _0x189c56 < 300) {
        if (!(_0x21d2ba & 2)) {
          _0x5e3c73(_0x4bb274, 0);
        }
      } else {
        _0x1f8055 |= _0x4ec665;
      }
      if (_0x1bf63c === _0x325084) {
        _0x1bf63c = 0;
      }
    }
    _0xb07498(_0x4bb274);
  }
  function _0x506dc1(_0x460b88, _0x523cc2) {
    if (_0x523cc2 === 0) {
      _0x523cc2 = _0xc2aedf();
    }
    if ((_0x460b88 = _0x2b6f8b(_0x460b88, _0x523cc2)) !== null) {
      _0x5ec34f(_0x460b88, _0x523cc2);
      _0xb07498(_0x460b88);
    }
  }
  function _0x4926ba(_0x4cf8c3) {
    var _0x53351a = _0x4cf8c3.memoizedState;
    var _0x56d1b6 = 0;
    if (_0x53351a !== null) {
      _0x56d1b6 = _0x53351a.retryLane;
    }
    _0x506dc1(_0x4cf8c3, _0x56d1b6);
  }
  function _0x58162b(_0x1d250f, _0x16b3e1) {
    var _0x2c2c0c = 0;
    switch (_0x1d250f.tag) {
      case 31:
      case 13:
        var _0x4899ee = _0x1d250f.stateNode;
        var _0x5a5e64 = _0x1d250f.memoizedState;
        if (_0x5a5e64 !== null) {
          _0x2c2c0c = _0x5a5e64.retryLane;
        }
        break;
      case 19:
        _0x4899ee = _0x1d250f.stateNode;
        break;
      case 22:
        _0x4899ee = _0x1d250f.stateNode._retryCache;
        break;
      default:
        throw Error(_0x34c7b9(314));
    }
    if (_0x4899ee !== null) {
      _0x4899ee.delete(_0x16b3e1);
    }
    _0x506dc1(_0x1d250f, _0x2c2c0c);
  }
  var _0x376769 = null;
  var _0x51b6af = null;
  var _0x1f0ed3 = false;
  var _0x5c7cbc = false;
  var _0x49a0f0 = false;
  var _0x15703c = 0;
  function _0xb07498(_0x40ad99) {
    if (_0x40ad99 !== _0x51b6af && _0x40ad99.next === null) {
      if (_0x51b6af === null) {
        _0x376769 = _0x51b6af = _0x40ad99;
      } else {
        _0x51b6af = _0x51b6af.next = _0x40ad99;
      }
    }
    _0x5c7cbc = true;
    if (!_0x1f0ed3) {
      _0x1f0ed3 = true;
      _0x90e8f6(function () {
        if (_0x21d2ba & 6) {
          _0x3ccef2(_0x302b52, _0x2568f9);
        } else {
          _0x397048();
        }
      });
    }
  }
  function _0x5eaecd(_0x15c8e9, _0x38292e) {
    if (!_0x49a0f0 && _0x5c7cbc) {
      _0x49a0f0 = true;
      do {
        for (var _0x316be0 = false, _0x72edba = _0x376769; _0x72edba !== null;) {
          if (!_0x38292e) {
            if (_0x15c8e9 !== 0) {
              var _0x24414b = _0x72edba.pendingLanes;
              if (_0x24414b === 0) {
                var _0x3f669f = 0;
              } else {
                var _0x4d5ee7 = _0x72edba.suspendedLanes;
                var _0x48153c = _0x72edba.pingedLanes;
                _0x3f669f = (1 << 31 - _0x4f44c7(_0x15c8e9 | 42) + 1) - 1;
                _0x3f669f = (_0x3f669f &= _0x24414b & ~(_0x4d5ee7 & ~_0x48153c)) & 201326741 ? _0x3f669f & 201326741 | 1 : _0x3f669f ? _0x3f669f | 2 : 0;
              }
              if (_0x3f669f !== 0) {
                _0x316be0 = true;
                _0x4fd757(_0x72edba, _0x3f669f);
              }
            } else {
              _0x3f669f = _0x325084;
              if (!!((_0x3f669f = _0x51d858(_0x72edba, _0x72edba === _0x42aa40 ? _0x3f669f : 0, _0x72edba.cancelPendingCommit !== null || _0x72edba.timeoutHandle !== -1)) & 3) && !_0x3f30e6(_0x72edba, _0x3f669f)) {
                _0x316be0 = true;
                _0x4fd757(_0x72edba, _0x3f669f);
              }
            }
          }
          _0x72edba = _0x72edba.next;
        }
      } while (_0x316be0);
      _0x49a0f0 = false;
    }
  }
  function _0x2568f9() {
    _0x397048();
  }
  function _0x397048() {
    _0x5c7cbc = _0x1f0ed3 = false;
    var _0xaef0fe;
    var _0xece70a = 0;
    if (_0x15703c !== 0 && ((_0xaef0fe = window.event) && _0xaef0fe.type === "popstate" ? _0xaef0fe !== _0x4f32e0 && (_0x4f32e0 = _0xaef0fe, 1) : (_0x4f32e0 = null, 0))) {
      _0xece70a = _0x15703c;
    }
    var _0xdc2eee = _0x271a39();
    for (var _0x17fb20 = null, _0x13bff3 = _0x376769; _0x13bff3 !== null;) {
      var _0x5d8fcc = _0x13bff3.next;
      var _0x494f7d = _0x14251d(_0x13bff3, _0xdc2eee);
      if (_0x494f7d === 0) {
        _0x13bff3.next = null;
        if (_0x17fb20 === null) {
          _0x376769 = _0x5d8fcc;
        } else {
          _0x17fb20.next = _0x5d8fcc;
        }
        if (_0x5d8fcc === null) {
          _0x51b6af = _0x17fb20;
        }
      } else {
        _0x17fb20 = _0x13bff3;
        if (_0xece70a !== 0 || _0x494f7d & 3) {
          _0x5c7cbc = true;
        }
      }
      _0x13bff3 = _0x5d8fcc;
    }
    if (_0x5ab585 === 0 || _0x5ab585 === 5) {
      _0x5eaecd(_0xece70a, false);
    }
    if (_0x15703c !== 0) {
      _0x15703c = 0;
    }
  }
  function _0x14251d(_0x3597a0, _0x3556ca) {
    var _0x1f41d0 = _0x3597a0.suspendedLanes;
    var _0xb84800 = _0x3597a0.pingedLanes;
    var _0xc5f560 = _0x3597a0.expirationTimes;
    for (var _0x28928b = _0x3597a0.pendingLanes & -62914561; _0x28928b > 0;) {
      var _0x2d84c2 = 31 - _0x4f44c7(_0x28928b);
      var _0x5b6b88 = 1 << _0x2d84c2;
      var _0x2123c4 = _0xc5f560[_0x2d84c2];
      if (_0x2123c4 === -1) {
        if ((_0x5b6b88 & _0x1f41d0) === 0 || (_0x5b6b88 & _0xb84800) !== 0) {
          _0xc5f560[_0x2d84c2] = _0x544cc9(_0x5b6b88, _0x3556ca);
        }
      } else if (_0x2123c4 <= _0x3556ca) {
        _0x3597a0.expiredLanes |= _0x5b6b88;
      }
      _0x28928b &= ~_0x5b6b88;
    }
    _0x1f41d0 = _0x325084;
    _0x1f41d0 = _0x51d858(_0x3597a0, _0x3597a0 === (_0x3556ca = _0x42aa40) ? _0x1f41d0 : 0, _0x3597a0.cancelPendingCommit !== null || _0x3597a0.timeoutHandle !== -1);
    _0xb84800 = _0x3597a0.callbackNode;
    if (_0x1f41d0 === 0 || _0x3597a0 === _0x3556ca && (_0x4a11ac === 2 || _0x4a11ac === 9) || _0x3597a0.cancelPendingCommit !== null) {
      if (_0xb84800 !== null && _0xb84800 !== null) {
        _0x31840a(_0xb84800);
      }
      _0x3597a0.callbackNode = null;
      return _0x3597a0.callbackPriority = 0;
    }
    if (!(_0x1f41d0 & 3) || _0x3f30e6(_0x3597a0, _0x1f41d0)) {
      if ((_0x3556ca = _0x1f41d0 & -_0x1f41d0) === _0x3597a0.callbackPriority) {
        return _0x3556ca;
      }
      if (_0xb84800 !== null) {
        _0x31840a(_0xb84800);
      }
      switch (_0x30b643(_0x1f41d0)) {
        case 2:
        case 8:
          _0x1f41d0 = _0x104215;
          break;
        case 32:
        default:
          _0x1f41d0 = _0x39ac2e;
          break;
        case 268435456:
          _0x1f41d0 = _0x306d03;
      }
      _0xb84800 = _0x22ce3f.bind(null, _0x3597a0);
      _0x1f41d0 = _0x3ccef2(_0x1f41d0, _0xb84800);
      _0x3597a0.callbackPriority = _0x3556ca;
      _0x3597a0.callbackNode = _0x1f41d0;
      return _0x3556ca;
    }
    if (_0xb84800 !== null && _0xb84800 !== null) {
      _0x31840a(_0xb84800);
    }
    _0x3597a0.callbackPriority = 2;
    _0x3597a0.callbackNode = null;
    return 2;
  }
  function _0x22ce3f(_0xdf6a9c, _0x4d5f53) {
    if (_0x5ab585 !== 0 && _0x5ab585 !== 5) {
      _0xdf6a9c.callbackNode = null;
      _0xdf6a9c.callbackPriority = 0;
      return null;
    }
    var _0x6345c6 = _0xdf6a9c.callbackNode;
    if (_0x3306fc() && _0xdf6a9c.callbackNode !== _0x6345c6) {
      return null;
    }
    var _0x2e63dd = _0x325084;
    if ((_0x2e63dd = _0x51d858(_0xdf6a9c, _0xdf6a9c === _0x42aa40 ? _0x2e63dd : 0, _0xdf6a9c.cancelPendingCommit !== null || _0xdf6a9c.timeoutHandle !== -1)) === 0) {
      return null;
    } else {
      _0x38d661(_0xdf6a9c, _0x2e63dd, _0x4d5f53);
      _0x14251d(_0xdf6a9c, _0x271a39());
      if (_0xdf6a9c.callbackNode != null && _0xdf6a9c.callbackNode === _0x6345c6) {
        return _0x22ce3f.bind(null, _0xdf6a9c);
      } else {
        return null;
      }
    }
  }
  function _0x4fd757(_0x565f73, _0x56083a) {
    if (_0x3306fc()) {
      return null;
    }
    _0x38d661(_0x565f73, _0x56083a, true);
  }
  function _0x276259() {
    if (_0x15703c === 0) {
      var _0x55156e = _0x28fcfb;
      if (_0x55156e === 0) {
        _0x55156e = _0x3a63a0;
        if (!((_0x3a63a0 <<= 1) & 261888)) {
          _0x3a63a0 = 256;
        }
      }
      _0x15703c = _0x55156e;
    }
    return _0x15703c;
  }
  function _0x16c11b(_0x404e80) {
    if (_0x404e80 == null || typeof _0x404e80 == "symbol" || typeof _0x404e80 == "boolean") {
      return null;
    } else if (typeof _0x404e80 == "function") {
      return _0x404e80;
    } else {
      return _0x407b66("" + _0x404e80);
    }
  }
  function _0x12703a(_0x48ba1e, _0x42c163) {
    var _0x11cac7 = _0x42c163.ownerDocument.createElement("input");
    _0x11cac7.name = _0x42c163.name;
    _0x11cac7.value = _0x42c163.value;
    if (_0x48ba1e.id) {
      _0x11cac7.setAttribute("form", _0x48ba1e.id);
    }
    _0x42c163.parentNode.insertBefore(_0x11cac7, _0x42c163);
    _0x48ba1e = new FormData(_0x48ba1e);
    _0x11cac7.parentNode.removeChild(_0x11cac7);
    return _0x48ba1e;
  }
  for (var _0x2ddac8 = 0; _0x2ddac8 < _0x2edf34.length; _0x2ddac8++) {
    var _0x26b455 = _0x2edf34[_0x2ddac8];
    _0x58df92(_0x26b455.toLowerCase(), "on" + (_0x26b455[0].toUpperCase() + _0x26b455.slice(1)));
  }
  _0x58df92(_0x3a7eb3, "onAnimationEnd");
  _0x58df92(_0x5a16fe, "onAnimationIteration");
  _0x58df92(_0x54a549, "onAnimationStart");
  _0x58df92("dblclick", "onDoubleClick");
  _0x58df92("focusin", "onFocus");
  _0x58df92("focusout", "onBlur");
  _0x58df92(_0x107d8c, "onTransitionRun");
  _0x58df92(_0x5ddd5b, "onTransitionStart");
  _0x58df92(_0x19265f, "onTransitionCancel");
  _0x58df92(_0x1f1029, "onTransitionEnd");
  _0x271bd2("onMouseEnter", ["mouseout", "mouseover"]);
  _0x271bd2("onMouseLeave", ["mouseout", "mouseover"]);
  _0x271bd2("onPointerEnter", ["pointerout", "pointerover"]);
  _0x271bd2("onPointerLeave", ["pointerout", "pointerover"]);
  _0x32e630("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
  _0x32e630("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
  _0x32e630("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  _0x32e630("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
  _0x32e630("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
  _0x32e630("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _0xb43409 = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
  var _0x3d63a0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_0xb43409));
  function _0x436724(_0x906f8, _0x22fbaf) {
    _0x22fbaf = !!(_0x22fbaf & 4);
    for (var _0x3ce8b0 = 0; _0x3ce8b0 < _0x906f8.length; _0x3ce8b0++) {
      var _0x4d5a2c = _0x906f8[_0x3ce8b0];
      var _0x23611a = _0x4d5a2c.event;
      _0x4d5a2c = _0x4d5a2c.listeners;
      _0x122ef4: {
        var _0x4c9154 = undefined;
        if (_0x22fbaf) {
          for (var _0x1650f3 = _0x4d5a2c.length - 1; _0x1650f3 >= 0; _0x1650f3--) {
            var _0x383a46 = _0x4d5a2c[_0x1650f3];
            var _0x4ce549 = _0x383a46.instance;
            var _0x2f2b0d = _0x383a46.currentTarget;
            _0x383a46 = _0x383a46.listener;
            if (_0x4ce549 !== _0x4c9154 && _0x23611a.isPropagationStopped()) {
              break _0x122ef4;
            }
            _0x4c9154 = _0x383a46;
            _0x23611a.currentTarget = _0x2f2b0d;
            try {
              _0x4c9154(_0x23611a);
            } catch (_0x33a478) {
              _0x282638(_0x33a478);
            }
            _0x23611a.currentTarget = null;
            _0x4c9154 = _0x4ce549;
          }
        } else {
          for (_0x1650f3 = 0; _0x1650f3 < _0x4d5a2c.length; _0x1650f3++) {
            _0x4ce549 = (_0x383a46 = _0x4d5a2c[_0x1650f3]).instance;
            _0x2f2b0d = _0x383a46.currentTarget;
            _0x383a46 = _0x383a46.listener;
            if (_0x4ce549 !== _0x4c9154 && _0x23611a.isPropagationStopped()) {
              break _0x122ef4;
            }
            _0x4c9154 = _0x383a46;
            _0x23611a.currentTarget = _0x2f2b0d;
            try {
              _0x4c9154(_0x23611a);
            } catch (_0x1cfd54) {
              _0x282638(_0x1cfd54);
            }
            _0x23611a.currentTarget = null;
            _0x4c9154 = _0x4ce549;
          }
        }
      }
    }
  }
  function _0x2d5011(_0xe35dfc, _0x37344a) {
    var _0x5acbc5 = _0x37344a[_0x1e6ce1];
    if (_0x5acbc5 === undefined) {
      _0x5acbc5 = _0x37344a[_0x1e6ce1] = new Set();
    }
    var _0x562cf7 = _0xe35dfc + "__bubble";
    if (!_0x5acbc5.has(_0x562cf7)) {
      _0x473611(_0x37344a, _0xe35dfc, 2, false);
      _0x5acbc5.add(_0x562cf7);
    }
  }
  function _0x355efe(_0x4e8da4, _0x82b579, _0x1a1643) {
    var _0x490c55 = 0;
    if (_0x82b579) {
      _0x490c55 |= 4;
    }
    _0x473611(_0x1a1643, _0x4e8da4, _0x490c55, _0x82b579);
  }
  var _0x59e23e = "_reactListening" + Math.random().toString(36).slice(2);
  function _0x458f1e(_0x342ded) {
    if (!_0x342ded[_0x59e23e]) {
      _0x342ded[_0x59e23e] = true;
      _0x2775be.forEach(function (_0x4ea41a) {
        if (_0x4ea41a !== "selectionchange") {
          if (!_0x3d63a0.has(_0x4ea41a)) {
            _0x355efe(_0x4ea41a, false, _0x342ded);
          }
          _0x355efe(_0x4ea41a, true, _0x342ded);
        }
      });
      var _0x16acac = _0x342ded.nodeType === 9 ? _0x342ded : _0x342ded.ownerDocument;
      if (_0x16acac !== null && !_0x16acac[_0x59e23e]) {
        _0x16acac[_0x59e23e] = true;
        _0x355efe("selectionchange", false, _0x16acac);
      }
    }
  }
  function _0x473611(_0x378545, _0xb47ee2, _0xbe0d16, _0x5f25af) {
    switch (_0x5508ca(_0xb47ee2)) {
      case 2:
        var _0xf34f65 = _0x2a03a6;
        break;
      case 8:
        _0xf34f65 = _0x18f25b;
        break;
      default:
        _0xf34f65 = _0x608e3e;
    }
    _0xbe0d16 = _0xf34f65.bind(null, _0xb47ee2, _0xbe0d16, _0x378545);
    _0xf34f65 = undefined;
    if (!!_0x3dfabe && (_0xb47ee2 === "touchstart" || _0xb47ee2 === "touchmove" || _0xb47ee2 === "wheel")) {
      _0xf34f65 = true;
    }
    if (_0x5f25af) {
      if (_0xf34f65 !== undefined) {
        _0x378545.addEventListener(_0xb47ee2, _0xbe0d16, {
          capture: true,
          passive: _0xf34f65
        });
      } else {
        _0x378545.addEventListener(_0xb47ee2, _0xbe0d16, true);
      }
    } else if (_0xf34f65 !== undefined) {
      _0x378545.addEventListener(_0xb47ee2, _0xbe0d16, {
        passive: _0xf34f65
      });
    } else {
      _0x378545.addEventListener(_0xb47ee2, _0xbe0d16, false);
    }
  }
  function _0x1f2ce5(_0x1bf05a, _0x3798a8, _0x4552dc, _0x367141, _0x16443a) {
    var _0x26935a = _0x367141;
    if (!(_0x3798a8 & 1) && !(_0x3798a8 & 2) && _0x367141 !== null) {
      _0x3b5c5a: while (true) {
        if (_0x367141 === null) {
          return;
        }
        var _0x2ef4c8 = _0x367141.tag;
        if (_0x2ef4c8 === 3 || _0x2ef4c8 === 4) {
          var _0x367a01 = _0x367141.stateNode.containerInfo;
          if (_0x367a01 === _0x16443a) {
            break;
          }
          if (_0x2ef4c8 === 4) {
            for (_0x2ef4c8 = _0x367141.return; _0x2ef4c8 !== null;) {
              var _0xe6f9b1 = _0x2ef4c8.tag;
              if ((_0xe6f9b1 === 3 || _0xe6f9b1 === 4) && _0x2ef4c8.stateNode.containerInfo === _0x16443a) {
                return;
              }
              _0x2ef4c8 = _0x2ef4c8.return;
            }
          }
          while (_0x367a01 !== null) {
            if ((_0x2ef4c8 = _0x3c703b(_0x367a01)) === null) {
              return;
            }
            if ((_0xe6f9b1 = _0x2ef4c8.tag) === 5 || _0xe6f9b1 === 6 || _0xe6f9b1 === 26 || _0xe6f9b1 === 27) {
              _0x367141 = _0x26935a = _0x2ef4c8;
              continue _0x3b5c5a;
            }
            _0x367a01 = _0x367a01.parentNode;
          }
        }
        _0x367141 = _0x367141.return;
      }
    }
    _0xc1dba(function () {
      var _0x222ae9 = _0x26935a;
      var _0x4741cc = _0x4b1198(_0x4552dc);
      var _0x1ab335 = [];
      _0x3b7930: {
        var _0x5740d5 = _0x424a7f.get(_0x1bf05a);
        if (_0x5740d5 !== undefined) {
          var _0x17c3f4 = _0x26f986;
          var _0x240193 = _0x1bf05a;
          switch (_0x1bf05a) {
            case "keypress":
              if (_0x163a78(_0x4552dc) === 0) {
                break _0x3b7930;
              }
            case "keydown":
            case "keyup":
              _0x17c3f4 = _0x3277b4;
              break;
            case "focusin":
              _0x240193 = "focus";
              _0x17c3f4 = _0x1e5764;
              break;
            case "focusout":
              _0x240193 = "blur";
              _0x17c3f4 = _0x1e5764;
              break;
            case "beforeblur":
            case "afterblur":
              _0x17c3f4 = _0x1e5764;
              break;
            case "click":
              if (_0x4552dc.button === 2) {
                break _0x3b7930;
              }
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              _0x17c3f4 = _0x45a698;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              _0x17c3f4 = _0x484475;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              _0x17c3f4 = _0x29bfdf;
              break;
            case _0x3a7eb3:
            case _0x5a16fe:
            case _0x54a549:
              _0x17c3f4 = _0x3ccef9;
              break;
            case _0x1f1029:
              _0x17c3f4 = _0x4b7785;
              break;
            case "scroll":
            case "scrollend":
              _0x17c3f4 = _0x503202;
              break;
            case "wheel":
              _0x17c3f4 = _0x2f8c94;
              break;
            case "copy":
            case "cut":
            case "paste":
              _0x17c3f4 = _0x2604c2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              _0x17c3f4 = _0xed8e44;
              break;
            case "toggle":
            case "beforetoggle":
              _0x17c3f4 = _0x2f6699;
          }
          var _0x30d9d4 = !!(_0x3798a8 & 4);
          var _0x5bfe3e = !_0x30d9d4 && (_0x1bf05a === "scroll" || _0x1bf05a === "scrollend");
          var _0x180ad3 = _0x30d9d4 ? _0x5740d5 !== null ? _0x5740d5 + "Capture" : null : _0x5740d5;
          _0x30d9d4 = [];
          var _0x1be1e6;
          for (var _0x560cc7 = _0x222ae9; _0x560cc7 !== null;) {
            var _0xd2c80c = _0x560cc7;
            _0x1be1e6 = _0xd2c80c.stateNode;
            if (((_0xd2c80c = _0xd2c80c.tag) === 5 || _0xd2c80c === 26 || _0xd2c80c === 27) && _0x1be1e6 !== null && _0x180ad3 !== null) {
              if ((_0xd2c80c = _0x5c4460(_0x560cc7, _0x180ad3)) != null) {
                _0x30d9d4.push(_0x2daa83(_0x560cc7, _0xd2c80c, _0x1be1e6));
              }
            }
            if (_0x5bfe3e) {
              break;
            }
            _0x560cc7 = _0x560cc7.return;
          }
          if (_0x30d9d4.length > 0) {
            _0x5740d5 = new _0x17c3f4(_0x5740d5, _0x240193, null, _0x4552dc, _0x4741cc);
            _0x1ab335.push({
              event: _0x5740d5,
              listeners: _0x30d9d4
            });
          }
        }
      }
      if (!(_0x3798a8 & 7)) {
        _0x17c3f4 = _0x1bf05a === "mouseout" || _0x1bf05a === "pointerout";
        if ((!(_0x5740d5 = _0x1bf05a === "mouseover" || _0x1bf05a === "pointerover") || _0x4552dc === _0x3e3fd1 || !(_0x240193 = _0x4552dc.relatedTarget || _0x4552dc.fromElement) || !_0x3c703b(_0x240193) && !_0x240193[_0x193a0c]) && (_0x17c3f4 || _0x5740d5) && (_0x5740d5 = _0x4741cc.window === _0x4741cc ? _0x4741cc : (_0x5740d5 = _0x4741cc.ownerDocument) ? _0x5740d5.defaultView || _0x5740d5.parentWindow : window, _0x17c3f4 ? (_0x17c3f4 = _0x222ae9, (_0x240193 = (_0x240193 = _0x4552dc.relatedTarget || _0x4552dc.toElement) ? _0x3c703b(_0x240193) : null) !== null && (_0x5bfe3e = _0x4809b3(_0x240193), _0x30d9d4 = _0x240193.tag, _0x240193 !== _0x5bfe3e || _0x30d9d4 !== 5 && _0x30d9d4 !== 27 && _0x30d9d4 !== 6) && (_0x240193 = null)) : (_0x17c3f4 = null, _0x240193 = _0x222ae9), _0x17c3f4 !== _0x240193)) {
          _0x30d9d4 = _0x45a698;
          _0xd2c80c = "onMouseLeave";
          _0x180ad3 = "onMouseEnter";
          _0x560cc7 = "mouse";
          if (_0x1bf05a === "pointerout" || _0x1bf05a === "pointerover") {
            _0x30d9d4 = _0xed8e44;
            _0xd2c80c = "onPointerLeave";
            _0x180ad3 = "onPointerEnter";
            _0x560cc7 = "pointer";
          }
          _0x5bfe3e = _0x17c3f4 == null ? _0x5740d5 : _0x4d1e18(_0x17c3f4);
          _0x1be1e6 = _0x240193 == null ? _0x5740d5 : _0x4d1e18(_0x240193);
          (_0x5740d5 = new _0x30d9d4(_0xd2c80c, _0x560cc7 + "leave", _0x17c3f4, _0x4552dc, _0x4741cc)).target = _0x5bfe3e;
          _0x5740d5.relatedTarget = _0x1be1e6;
          _0xd2c80c = null;
          if (_0x3c703b(_0x4741cc) === _0x222ae9) {
            (_0x30d9d4 = new _0x30d9d4(_0x180ad3, _0x560cc7 + "enter", _0x240193, _0x4552dc, _0x4741cc)).target = _0x1be1e6;
            _0x30d9d4.relatedTarget = _0x5bfe3e;
            _0xd2c80c = _0x30d9d4;
          }
          _0x5bfe3e = _0xd2c80c;
          if (_0x17c3f4 && _0x240193) {
            _0x133581: {
              _0x30d9d4 = _0xd7a546;
              _0x560cc7 = _0x240193;
              _0x1be1e6 = 0;
              _0xd2c80c = _0x180ad3 = _0x17c3f4;
              for (; _0xd2c80c; _0xd2c80c = _0x30d9d4(_0xd2c80c)) {
                _0x1be1e6++;
              }
              _0xd2c80c = 0;
              for (var _0x55f380 = _0x560cc7; _0x55f380; _0x55f380 = _0x30d9d4(_0x55f380)) {
                _0xd2c80c++;
              }
              while (_0x1be1e6 - _0xd2c80c > 0) {
                _0x180ad3 = _0x30d9d4(_0x180ad3);
                _0x1be1e6--;
              }
              while (_0xd2c80c - _0x1be1e6 > 0) {
                _0x560cc7 = _0x30d9d4(_0x560cc7);
                _0xd2c80c--;
              }
              while (_0x1be1e6--) {
                if (_0x180ad3 === _0x560cc7 || _0x560cc7 !== null && _0x180ad3 === _0x560cc7.alternate) {
                  _0x30d9d4 = _0x180ad3;
                  break _0x133581;
                }
                _0x180ad3 = _0x30d9d4(_0x180ad3);
                _0x560cc7 = _0x30d9d4(_0x560cc7);
              }
              _0x30d9d4 = null;
            }
          } else {
            _0x30d9d4 = null;
          }
          if (_0x17c3f4 !== null) {
            _0x27be8e(_0x1ab335, _0x5740d5, _0x17c3f4, _0x30d9d4, false);
          }
          if (_0x240193 !== null && _0x5bfe3e !== null) {
            _0x27be8e(_0x1ab335, _0x5bfe3e, _0x240193, _0x30d9d4, true);
          }
        }
        if ((_0x17c3f4 = (_0x5740d5 = _0x222ae9 ? _0x4d1e18(_0x222ae9) : window).nodeName && _0x5740d5.nodeName.toLowerCase()) === "select" || _0x17c3f4 === "input" && _0x5740d5.type === "file") {
          var _0x30762b = _0x5f4bce;
        } else if (_0xdeafc(_0x5740d5)) {
          if (_0x2471ea) {
            _0x30762b = _0x28f647;
          } else {
            _0x30762b = _0x3e4212;
            var _0x4bde72 = _0x71a5e1;
          }
        } else if (!(_0x17c3f4 = _0x5740d5.nodeName) || _0x17c3f4.toLowerCase() !== "input" || _0x5740d5.type !== "checkbox" && _0x5740d5.type !== "radio") {
          if (_0x222ae9 && _0x14a2f4(_0x222ae9.elementType)) {
            _0x30762b = _0x5f4bce;
          }
        } else {
          _0x30762b = _0x300d8f;
        }
        if (_0x30762b &&= _0x30762b(_0x1bf05a, _0x222ae9)) {
          _0x1c4167(_0x1ab335, _0x30762b, _0x4552dc, _0x4741cc);
        } else {
          if (_0x4bde72) {
            _0x4bde72(_0x1bf05a, _0x5740d5, _0x222ae9);
          }
          if (_0x1bf05a === "focusout" && _0x222ae9 && _0x5740d5.type === "number" && _0x222ae9.memoizedProps.value != null) {
            _0x28aac4(_0x5740d5, "number", _0x5740d5.value);
          }
        }
        _0x4bde72 = _0x222ae9 ? _0x4d1e18(_0x222ae9) : window;
        switch (_0x1bf05a) {
          case "focusin":
            if (_0xdeafc(_0x4bde72) || _0x4bde72.contentEditable === "true") {
              _0x186273 = _0x4bde72;
              _0x3b8f76 = _0x222ae9;
              _0x5ccd38 = null;
            }
            break;
          case "focusout":
            _0x5ccd38 = _0x3b8f76 = _0x186273 = null;
            break;
          case "mousedown":
            _0x2f3bb1 = true;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            _0x2f3bb1 = false;
            _0x1b759e(_0x1ab335, _0x4552dc, _0x4741cc);
            break;
          case "selectionchange":
            if (_0xb2d597) {
              break;
            }
          case "keydown":
          case "keyup":
            _0x1b759e(_0x1ab335, _0x4552dc, _0x4741cc);
        }
        var _0x131b47;
        if (_0x5ebec2) {
          _0x22ecae: {
            switch (_0x1bf05a) {
              case "compositionstart":
                var _0x12bedf = "onCompositionStart";
                break _0x22ecae;
              case "compositionend":
                _0x12bedf = "onCompositionEnd";
                break _0x22ecae;
              case "compositionupdate":
                _0x12bedf = "onCompositionUpdate";
                break _0x22ecae;
            }
            _0x12bedf = undefined;
          }
        } else if (_0x57a75f) {
          if (_0x25c093(_0x1bf05a, _0x4552dc)) {
            _0x12bedf = "onCompositionEnd";
          }
        } else if (_0x1bf05a === "keydown" && _0x4552dc.keyCode === 229) {
          _0x12bedf = "onCompositionStart";
        }
        if (_0x12bedf) {
          if (_0x4245c8 && _0x4552dc.locale !== "ko") {
            if (_0x57a75f || _0x12bedf !== "onCompositionStart") {
              if (_0x12bedf === "onCompositionEnd" && _0x57a75f) {
                _0x131b47 = _0x2c7eb2();
              }
            } else {
              _0x1d94f8 = "value" in (_0x4564aa = _0x4741cc) ? _0x4564aa.value : _0x4564aa.textContent;
              _0x57a75f = true;
            }
          }
          if ((_0x4bde72 = _0x24890d(_0x222ae9, _0x12bedf)).length > 0) {
            _0x12bedf = new _0x3a61d0(_0x12bedf, _0x1bf05a, null, _0x4552dc, _0x4741cc);
            _0x1ab335.push({
              event: _0x12bedf,
              listeners: _0x4bde72
            });
            if (_0x131b47 || (_0x131b47 = _0x5c6ea5(_0x4552dc)) !== null) {
              _0x12bedf.data = _0x131b47;
            }
          }
        }
        if ((_0x131b47 = _0x5efd5f ? function (_0x4e3d58, _0x409458) {
          switch (_0x4e3d58) {
            case "compositionend":
              return _0x5c6ea5(_0x409458);
            case "keypress":
              if (_0x409458.which !== 32) {
                return null;
              } else {
                _0x17e12c = true;
                return _0x3f8a51;
              }
            case "textInput":
              if ((_0x4e3d58 = _0x409458.data) === _0x3f8a51 && _0x17e12c) {
                return null;
              } else {
                return _0x4e3d58;
              }
            default:
              return null;
          }
        }(_0x1bf05a, _0x4552dc) : function (_0x34b90c, _0x40f8f9) {
          if (_0x57a75f) {
            if (_0x34b90c === "compositionend" || !_0x5ebec2 && _0x25c093(_0x34b90c, _0x40f8f9)) {
              _0x34b90c = _0x2c7eb2();
              _0x47c86c = _0x1d94f8 = _0x4564aa = null;
              _0x57a75f = false;
              return _0x34b90c;
            } else {
              return null;
            }
          }
          switch (_0x34b90c) {
            case "paste":
            default:
              return null;
            case "keypress":
              if (!_0x40f8f9.ctrlKey && !_0x40f8f9.altKey && !_0x40f8f9.metaKey || _0x40f8f9.ctrlKey && _0x40f8f9.altKey) {
                if (_0x40f8f9.char && _0x40f8f9.char.length > 1) {
                  return _0x40f8f9.char;
                }
                if (_0x40f8f9.which) {
                  return String.fromCharCode(_0x40f8f9.which);
                }
              }
              return null;
            case "compositionend":
              if (_0x4245c8 && _0x40f8f9.locale !== "ko") {
                return null;
              } else {
                return _0x40f8f9.data;
              }
          }
        }(_0x1bf05a, _0x4552dc)) && (_0x12bedf = _0x24890d(_0x222ae9, "onBeforeInput")).length > 0) {
          _0x4bde72 = new _0x3a61d0("onBeforeInput", "beforeinput", null, _0x4552dc, _0x4741cc);
          _0x1ab335.push({
            event: _0x4bde72,
            listeners: _0x12bedf
          });
          _0x4bde72.data = _0x131b47;
        }
        (function (_0x3a8932, _0x3887aa, _0x2eb0e6, _0x39c08d, _0x1125aa) {
          if (_0x3887aa === "submit" && _0x2eb0e6 && _0x2eb0e6.stateNode === _0x1125aa) {
            var _0x21cee1 = _0x16c11b((_0x1125aa[_0x21a328] || null).action);
            var _0x8cd604 = _0x39c08d.submitter;
            if (_0x8cd604 && (_0x3887aa = (_0x3887aa = _0x8cd604[_0x21a328] || null) ? _0x16c11b(_0x3887aa.formAction) : _0x8cd604.getAttribute("formAction")) !== null) {
              _0x21cee1 = _0x3887aa;
              _0x8cd604 = null;
            }
            var _0x334047 = new _0x26f986("action", "action", null, _0x39c08d, _0x1125aa);
            _0x3a8932.push({
              event: _0x334047,
              listeners: [{
                instance: null,
                listener: function () {
                  if (_0x39c08d.defaultPrevented) {
                    if (_0x15703c !== 0) {
                      var _0x33d8f1 = _0x8cd604 ? _0x12703a(_0x1125aa, _0x8cd604) : new FormData(_0x1125aa);
                      _0x419b45(_0x2eb0e6, {
                        pending: true,
                        data: _0x33d8f1,
                        method: _0x1125aa.method,
                        action: _0x21cee1
                      }, null, _0x33d8f1);
                    }
                  } else if (typeof _0x21cee1 == "function") {
                    _0x334047.preventDefault();
                    _0x33d8f1 = _0x8cd604 ? _0x12703a(_0x1125aa, _0x8cd604) : new FormData(_0x1125aa);
                    _0x419b45(_0x2eb0e6, {
                      pending: true,
                      data: _0x33d8f1,
                      method: _0x1125aa.method,
                      action: _0x21cee1
                    }, _0x21cee1, _0x33d8f1);
                  }
                },
                currentTarget: _0x1125aa
              }]
            });
          }
        })(_0x1ab335, _0x1bf05a, _0x222ae9, _0x4552dc, _0x4741cc);
      }
      _0x436724(_0x1ab335, _0x3798a8);
    });
  }
  function _0x2daa83(_0x14439b, _0x43361, _0x4b7a1b) {
    return {
      instance: _0x14439b,
      listener: _0x43361,
      currentTarget: _0x4b7a1b
    };
  }
  function _0x24890d(_0x20b062, _0x1bfdb0) {
    var _0x13fc4d = _0x1bfdb0 + "Capture";
    var _0x51e49d = [];
    for (; _0x20b062 !== null;) {
      var _0x2e93d2 = _0x20b062;
      var _0x39669f = _0x2e93d2.stateNode;
      if (((_0x2e93d2 = _0x2e93d2.tag) === 5 || _0x2e93d2 === 26 || _0x2e93d2 === 27) && _0x39669f !== null) {
        if ((_0x2e93d2 = _0x5c4460(_0x20b062, _0x13fc4d)) != null) {
          _0x51e49d.unshift(_0x2daa83(_0x20b062, _0x2e93d2, _0x39669f));
        }
        if ((_0x2e93d2 = _0x5c4460(_0x20b062, _0x1bfdb0)) != null) {
          _0x51e49d.push(_0x2daa83(_0x20b062, _0x2e93d2, _0x39669f));
        }
      }
      if (_0x20b062.tag === 3) {
        return _0x51e49d;
      }
      _0x20b062 = _0x20b062.return;
    }
    return [];
  }
  function _0xd7a546(_0x21bfbf) {
    if (_0x21bfbf === null) {
      return null;
    }
    do {
      _0x21bfbf = _0x21bfbf.return;
    } while (_0x21bfbf && _0x21bfbf.tag !== 5 && _0x21bfbf.tag !== 27);
    return _0x21bfbf || null;
  }
  function _0x27be8e(_0x4ff258, _0x2c8860, _0x5f3fb9, _0x1eff83, _0x42a678) {
    var _0x4d1fb7 = _0x2c8860._reactName;
    var _0x149efd = [];
    for (; _0x5f3fb9 !== null && _0x5f3fb9 !== _0x1eff83;) {
      var _0x3be90c = _0x5f3fb9;
      var _0xd42f98 = _0x3be90c.alternate;
      var _0x2479dc = _0x3be90c.stateNode;
      _0x3be90c = _0x3be90c.tag;
      if (_0xd42f98 !== null && _0xd42f98 === _0x1eff83) {
        break;
      }
      if ((_0x3be90c === 5 || _0x3be90c === 26 || _0x3be90c === 27) && _0x2479dc !== null) {
        _0xd42f98 = _0x2479dc;
        if (_0x42a678) {
          if ((_0x2479dc = _0x5c4460(_0x5f3fb9, _0x4d1fb7)) != null) {
            _0x149efd.unshift(_0x2daa83(_0x5f3fb9, _0x2479dc, _0xd42f98));
          }
        } else if (!_0x42a678) {
          if ((_0x2479dc = _0x5c4460(_0x5f3fb9, _0x4d1fb7)) != null) {
            _0x149efd.push(_0x2daa83(_0x5f3fb9, _0x2479dc, _0xd42f98));
          }
        }
      }
      _0x5f3fb9 = _0x5f3fb9.return;
    }
    if (_0x149efd.length !== 0) {
      _0x4ff258.push({
        event: _0x2c8860,
        listeners: _0x149efd
      });
    }
  }
  var _0x5b5032 = /\r\n?/g;
  var _0x4cba0a = /\u0000|\uFFFD/g;
  function _0x5f46d7(_0x10a4fa) {
    return (typeof _0x10a4fa == "string" ? _0x10a4fa : "" + _0x10a4fa).replace(_0x5b5032, "\n").replace(_0x4cba0a, "");
  }
  function _0x3e8d67(_0x54d82d, _0x76b8ed) {
    _0x76b8ed = _0x5f46d7(_0x76b8ed);
    return _0x5f46d7(_0x54d82d) === _0x76b8ed;
  }
  function _0x1fb65c(_0x58c5fb, _0x3830a9, _0x3a5314, _0x59be7b, _0x2e0a9b, _0x343bc7) {
    switch (_0x3a5314) {
      case "children":
        if (typeof _0x59be7b == "string") {
          if (_0x3830a9 !== "body" && (_0x3830a9 !== "textarea" || _0x59be7b !== "")) {
            _0x3d4455(_0x58c5fb, _0x59be7b);
          }
        } else if ((typeof _0x59be7b == "number" || typeof _0x59be7b == "bigint") && _0x3830a9 !== "body") {
          _0x3d4455(_0x58c5fb, "" + _0x59be7b);
        }
        break;
      case "className":
        _0x365f47(_0x58c5fb, "class", _0x59be7b);
        break;
      case "tabIndex":
        _0x365f47(_0x58c5fb, "tabindex", _0x59be7b);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _0x365f47(_0x58c5fb, _0x3a5314, _0x59be7b);
        break;
      case "style":
        _0x5c24d8(_0x58c5fb, _0x59be7b, _0x343bc7);
        break;
      case "data":
        if (_0x3830a9 !== "object") {
          _0x365f47(_0x58c5fb, "data", _0x59be7b);
          break;
        }
      case "src":
      case "href":
        if (_0x59be7b === "" && (_0x3830a9 !== "a" || _0x3a5314 !== "href")) {
          _0x58c5fb.removeAttribute(_0x3a5314);
          break;
        }
        if (_0x59be7b == null || typeof _0x59be7b == "function" || typeof _0x59be7b == "symbol" || typeof _0x59be7b == "boolean") {
          _0x58c5fb.removeAttribute(_0x3a5314);
          break;
        }
        _0x59be7b = _0x407b66("" + _0x59be7b);
        _0x58c5fb.setAttribute(_0x3a5314, _0x59be7b);
        break;
      case "action":
      case "formAction":
        if (typeof _0x59be7b == "function") {
          _0x58c5fb.setAttribute(_0x3a5314, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break;
        }
        if (typeof _0x343bc7 == "function") {
          if (_0x3a5314 === "formAction") {
            if (_0x3830a9 !== "input") {
              _0x1fb65c(_0x58c5fb, _0x3830a9, "name", _0x2e0a9b.name, _0x2e0a9b, null);
            }
            _0x1fb65c(_0x58c5fb, _0x3830a9, "formEncType", _0x2e0a9b.formEncType, _0x2e0a9b, null);
            _0x1fb65c(_0x58c5fb, _0x3830a9, "formMethod", _0x2e0a9b.formMethod, _0x2e0a9b, null);
            _0x1fb65c(_0x58c5fb, _0x3830a9, "formTarget", _0x2e0a9b.formTarget, _0x2e0a9b, null);
          } else {
            _0x1fb65c(_0x58c5fb, _0x3830a9, "encType", _0x2e0a9b.encType, _0x2e0a9b, null);
            _0x1fb65c(_0x58c5fb, _0x3830a9, "method", _0x2e0a9b.method, _0x2e0a9b, null);
            _0x1fb65c(_0x58c5fb, _0x3830a9, "target", _0x2e0a9b.target, _0x2e0a9b, null);
          }
        }
        if (_0x59be7b == null || typeof _0x59be7b == "symbol" || typeof _0x59be7b == "boolean") {
          _0x58c5fb.removeAttribute(_0x3a5314);
          break;
        }
        _0x59be7b = _0x407b66("" + _0x59be7b);
        _0x58c5fb.setAttribute(_0x3a5314, _0x59be7b);
        break;
      case "onClick":
        if (_0x59be7b != null) {
          _0x58c5fb.onclick = _0x3de216;
        }
        break;
      case "onScroll":
        if (_0x59be7b != null) {
          _0x2d5011("scroll", _0x58c5fb);
        }
        break;
      case "onScrollEnd":
        if (_0x59be7b != null) {
          _0x2d5011("scrollend", _0x58c5fb);
        }
        break;
      case "dangerouslySetInnerHTML":
        if (_0x59be7b != null) {
          if (typeof _0x59be7b != "object" || !("__html" in _0x59be7b)) {
            throw Error(_0x34c7b9(61));
          }
          if ((_0x3a5314 = _0x59be7b.__html) != null) {
            if (_0x2e0a9b.children != null) {
              throw Error(_0x34c7b9(60));
            }
            _0x58c5fb.innerHTML = _0x3a5314;
          }
        }
        break;
      case "multiple":
        _0x58c5fb.multiple = _0x59be7b && typeof _0x59be7b != "function" && typeof _0x59be7b != "symbol";
        break;
      case "muted":
        _0x58c5fb.muted = _0x59be7b && typeof _0x59be7b != "function" && typeof _0x59be7b != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
      case "autoFocus":
        break;
      case "xlinkHref":
        if (_0x59be7b == null || typeof _0x59be7b == "function" || typeof _0x59be7b == "boolean" || typeof _0x59be7b == "symbol") {
          _0x58c5fb.removeAttribute("xlink:href");
          break;
        }
        _0x3a5314 = _0x407b66("" + _0x59be7b);
        _0x58c5fb.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", _0x3a5314);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        if (_0x59be7b != null && typeof _0x59be7b != "function" && typeof _0x59be7b != "symbol") {
          _0x58c5fb.setAttribute(_0x3a5314, "" + _0x59be7b);
        } else {
          _0x58c5fb.removeAttribute(_0x3a5314);
        }
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        if (_0x59be7b && typeof _0x59be7b != "function" && typeof _0x59be7b != "symbol") {
          _0x58c5fb.setAttribute(_0x3a5314, "");
        } else {
          _0x58c5fb.removeAttribute(_0x3a5314);
        }
        break;
      case "capture":
      case "download":
        if (_0x59be7b === true) {
          _0x58c5fb.setAttribute(_0x3a5314, "");
        } else if (_0x59be7b !== false && _0x59be7b != null && typeof _0x59be7b != "function" && typeof _0x59be7b != "symbol") {
          _0x58c5fb.setAttribute(_0x3a5314, _0x59be7b);
        } else {
          _0x58c5fb.removeAttribute(_0x3a5314);
        }
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        if (_0x59be7b != null && typeof _0x59be7b != "function" && typeof _0x59be7b != "symbol" && !isNaN(_0x59be7b) && _0x59be7b >= 1) {
          _0x58c5fb.setAttribute(_0x3a5314, _0x59be7b);
        } else {
          _0x58c5fb.removeAttribute(_0x3a5314);
        }
        break;
      case "rowSpan":
      case "start":
        if (_0x59be7b == null || typeof _0x59be7b == "function" || typeof _0x59be7b == "symbol" || isNaN(_0x59be7b)) {
          _0x58c5fb.removeAttribute(_0x3a5314);
        } else {
          _0x58c5fb.setAttribute(_0x3a5314, _0x59be7b);
        }
        break;
      case "popover":
        _0x2d5011("beforetoggle", _0x58c5fb);
        _0x2d5011("toggle", _0x58c5fb);
        _0x236dbf(_0x58c5fb, "popover", _0x59be7b);
        break;
      case "xlinkActuate":
        _0x21591c(_0x58c5fb, "http://www.w3.org/1999/xlink", "xlink:actuate", _0x59be7b);
        break;
      case "xlinkArcrole":
        _0x21591c(_0x58c5fb, "http://www.w3.org/1999/xlink", "xlink:arcrole", _0x59be7b);
        break;
      case "xlinkRole":
        _0x21591c(_0x58c5fb, "http://www.w3.org/1999/xlink", "xlink:role", _0x59be7b);
        break;
      case "xlinkShow":
        _0x21591c(_0x58c5fb, "http://www.w3.org/1999/xlink", "xlink:show", _0x59be7b);
        break;
      case "xlinkTitle":
        _0x21591c(_0x58c5fb, "http://www.w3.org/1999/xlink", "xlink:title", _0x59be7b);
        break;
      case "xlinkType":
        _0x21591c(_0x58c5fb, "http://www.w3.org/1999/xlink", "xlink:type", _0x59be7b);
        break;
      case "xmlBase":
        _0x21591c(_0x58c5fb, "http://www.w3.org/XML/1998/namespace", "xml:base", _0x59be7b);
        break;
      case "xmlLang":
        _0x21591c(_0x58c5fb, "http://www.w3.org/XML/1998/namespace", "xml:lang", _0x59be7b);
        break;
      case "xmlSpace":
        _0x21591c(_0x58c5fb, "http://www.w3.org/XML/1998/namespace", "xml:space", _0x59be7b);
        break;
      case "is":
        _0x236dbf(_0x58c5fb, "is", _0x59be7b);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!(_0x3a5314.length > 2) || _0x3a5314[0] !== "o" && _0x3a5314[0] !== "O" || _0x3a5314[1] !== "n" && _0x3a5314[1] !== "N") {
          _0x236dbf(_0x58c5fb, _0x3a5314 = _0x4f8474.get(_0x3a5314) || _0x3a5314, _0x59be7b);
        }
    }
  }
  function _0x1ebf10(_0x3e2722, _0x281f38, _0x1c7387, _0x550532, _0x50feb8, _0x2faee3) {
    switch (_0x1c7387) {
      case "style":
        _0x5c24d8(_0x3e2722, _0x550532, _0x2faee3);
        break;
      case "dangerouslySetInnerHTML":
        if (_0x550532 != null) {
          if (typeof _0x550532 != "object" || !("__html" in _0x550532)) {
            throw Error(_0x34c7b9(61));
          }
          if ((_0x1c7387 = _0x550532.__html) != null) {
            if (_0x50feb8.children != null) {
              throw Error(_0x34c7b9(60));
            }
            _0x3e2722.innerHTML = _0x1c7387;
          }
        }
        break;
      case "children":
        if (typeof _0x550532 == "string") {
          _0x3d4455(_0x3e2722, _0x550532);
        } else if (typeof _0x550532 == "number" || typeof _0x550532 == "bigint") {
          _0x3d4455(_0x3e2722, "" + _0x550532);
        }
        break;
      case "onScroll":
        if (_0x550532 != null) {
          _0x2d5011("scroll", _0x3e2722);
        }
        break;
      case "onScrollEnd":
        if (_0x550532 != null) {
          _0x2d5011("scrollend", _0x3e2722);
        }
        break;
      case "onClick":
        if (_0x550532 != null) {
          _0x3e2722.onclick = _0x3de216;
        }
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
      case "innerText":
      case "textContent":
        break;
      default:
        if (!_0x31d509.hasOwnProperty(_0x1c7387)) {
          if (_0x1c7387[0] !== "o" || _0x1c7387[1] !== "n" || (_0x50feb8 = _0x1c7387.endsWith("Capture"), _0x281f38 = _0x1c7387.slice(2, _0x50feb8 ? _0x1c7387.length - 7 : undefined), typeof (_0x2faee3 = (_0x2faee3 = _0x3e2722[_0x21a328] || null) != null ? _0x2faee3[_0x1c7387] : null) == "function" && _0x3e2722.removeEventListener(_0x281f38, _0x2faee3, _0x50feb8), typeof _0x550532 != "function")) {
            if (_0x1c7387 in _0x3e2722) {
              _0x3e2722[_0x1c7387] = _0x550532;
            } else if (_0x550532 === true) {
              _0x3e2722.setAttribute(_0x1c7387, "");
            } else {
              _0x236dbf(_0x3e2722, _0x1c7387, _0x550532);
            }
          } else {
            if (typeof _0x2faee3 != "function" && _0x2faee3 !== null) {
              if (_0x1c7387 in _0x3e2722) {
                _0x3e2722[_0x1c7387] = null;
              } else if (_0x3e2722.hasAttribute(_0x1c7387)) {
                _0x3e2722.removeAttribute(_0x1c7387);
              }
            }
            _0x3e2722.addEventListener(_0x281f38, _0x550532, _0x50feb8);
          }
        }
    }
  }
  function _0x1541af(_0x22eeb9, _0x67ffd7, _0x640063) {
    switch (_0x67ffd7) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        _0x2d5011("error", _0x22eeb9);
        _0x2d5011("load", _0x22eeb9);
        var _0x1f4ec5;
        var _0x5ed84f = false;
        var _0x19343b = false;
        for (_0x1f4ec5 in _0x640063) {
          if (_0x640063.hasOwnProperty(_0x1f4ec5)) {
            var _0x1af213 = _0x640063[_0x1f4ec5];
            if (_0x1af213 != null) {
              switch (_0x1f4ec5) {
                case "src":
                  _0x5ed84f = true;
                  break;
                case "srcSet":
                  _0x19343b = true;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(_0x34c7b9(137, _0x67ffd7));
                default:
                  _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x1f4ec5, _0x1af213, _0x640063, null);
              }
            }
          }
        }
        if (_0x19343b) {
          _0x1fb65c(_0x22eeb9, _0x67ffd7, "srcSet", _0x640063.srcSet, _0x640063, null);
        }
        if (_0x5ed84f) {
          _0x1fb65c(_0x22eeb9, _0x67ffd7, "src", _0x640063.src, _0x640063, null);
        }
        return;
      case "input":
        _0x2d5011("invalid", _0x22eeb9);
        var _0x5bb732 = _0x1f4ec5 = _0x1af213 = _0x19343b = null;
        var _0x54d970 = null;
        var _0x539ac9 = null;
        for (_0x5ed84f in _0x640063) {
          if (_0x640063.hasOwnProperty(_0x5ed84f)) {
            var _0x3929d6 = _0x640063[_0x5ed84f];
            if (_0x3929d6 != null) {
              switch (_0x5ed84f) {
                case "name":
                  _0x19343b = _0x3929d6;
                  break;
                case "type":
                  _0x1af213 = _0x3929d6;
                  break;
                case "checked":
                  _0x54d970 = _0x3929d6;
                  break;
                case "defaultChecked":
                  _0x539ac9 = _0x3929d6;
                  break;
                case "value":
                  _0x1f4ec5 = _0x3929d6;
                  break;
                case "defaultValue":
                  _0x5bb732 = _0x3929d6;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (_0x3929d6 != null) {
                    throw Error(_0x34c7b9(137, _0x67ffd7));
                  }
                  break;
                default:
                  _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x5ed84f, _0x3929d6, _0x640063, null);
              }
            }
          }
        }
        _0x178d34(_0x22eeb9, _0x1f4ec5, _0x5bb732, _0x54d970, _0x539ac9, _0x1af213, _0x19343b, false);
        return;
      case "select":
        _0x2d5011("invalid", _0x22eeb9);
        _0x5ed84f = _0x1af213 = _0x1f4ec5 = null;
        for (_0x19343b in _0x640063) {
          if (_0x640063.hasOwnProperty(_0x19343b) && (_0x5bb732 = _0x640063[_0x19343b]) != null) {
            switch (_0x19343b) {
              case "value":
                _0x1f4ec5 = _0x5bb732;
                break;
              case "defaultValue":
                _0x1af213 = _0x5bb732;
                break;
              case "multiple":
                _0x5ed84f = _0x5bb732;
              default:
                _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x19343b, _0x5bb732, _0x640063, null);
            }
          }
        }
        _0x67ffd7 = _0x1f4ec5;
        _0x640063 = _0x1af213;
        _0x22eeb9.multiple = !!_0x5ed84f;
        if (_0x67ffd7 != null) {
          _0x23131d(_0x22eeb9, !!_0x5ed84f, _0x67ffd7, false);
        } else if (_0x640063 != null) {
          _0x23131d(_0x22eeb9, !!_0x5ed84f, _0x640063, true);
        }
        return;
      case "textarea":
        _0x2d5011("invalid", _0x22eeb9);
        _0x1f4ec5 = _0x19343b = _0x5ed84f = null;
        for (_0x1af213 in _0x640063) {
          if (_0x640063.hasOwnProperty(_0x1af213) && (_0x5bb732 = _0x640063[_0x1af213]) != null) {
            switch (_0x1af213) {
              case "value":
                _0x5ed84f = _0x5bb732;
                break;
              case "defaultValue":
                _0x19343b = _0x5bb732;
                break;
              case "children":
                _0x1f4ec5 = _0x5bb732;
                break;
              case "dangerouslySetInnerHTML":
                if (_0x5bb732 != null) {
                  throw Error(_0x34c7b9(91));
                }
                break;
              default:
                _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x1af213, _0x5bb732, _0x640063, null);
            }
          }
        }
        _0x4b72cd(_0x22eeb9, _0x5ed84f, _0x19343b, _0x1f4ec5);
        return;
      case "option":
        for (_0x54d970 in _0x640063) {
          if (_0x640063.hasOwnProperty(_0x54d970) && (_0x5ed84f = _0x640063[_0x54d970]) != null) {
            if (_0x54d970 === "selected") {
              _0x22eeb9.selected = _0x5ed84f && typeof _0x5ed84f != "function" && typeof _0x5ed84f != "symbol";
            } else {
              _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x54d970, _0x5ed84f, _0x640063, null);
            }
          }
        }
        return;
      case "dialog":
        _0x2d5011("beforetoggle", _0x22eeb9);
        _0x2d5011("toggle", _0x22eeb9);
        _0x2d5011("cancel", _0x22eeb9);
        _0x2d5011("close", _0x22eeb9);
        break;
      case "iframe":
      case "object":
        _0x2d5011("load", _0x22eeb9);
        break;
      case "video":
      case "audio":
        for (_0x5ed84f = 0; _0x5ed84f < _0xb43409.length; _0x5ed84f++) {
          _0x2d5011(_0xb43409[_0x5ed84f], _0x22eeb9);
        }
        break;
      case "image":
        _0x2d5011("error", _0x22eeb9);
        _0x2d5011("load", _0x22eeb9);
        break;
      case "details":
        _0x2d5011("toggle", _0x22eeb9);
        break;
      case "embed":
      case "source":
      case "link":
        _0x2d5011("error", _0x22eeb9);
        _0x2d5011("load", _0x22eeb9);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_0x539ac9 in _0x640063) {
          if (_0x640063.hasOwnProperty(_0x539ac9) && (_0x5ed84f = _0x640063[_0x539ac9]) != null) {
            switch (_0x539ac9) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(_0x34c7b9(137, _0x67ffd7));
              default:
                _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x539ac9, _0x5ed84f, _0x640063, null);
            }
          }
        }
        return;
      default:
        if (_0x14a2f4(_0x67ffd7)) {
          for (_0x3929d6 in _0x640063) {
            if (_0x640063.hasOwnProperty(_0x3929d6) && (_0x5ed84f = _0x640063[_0x3929d6]) !== undefined) {
              _0x1ebf10(_0x22eeb9, _0x67ffd7, _0x3929d6, _0x5ed84f, _0x640063, undefined);
            }
          }
          return;
        }
    }
    for (_0x5bb732 in _0x640063) {
      if (_0x640063.hasOwnProperty(_0x5bb732) && (_0x5ed84f = _0x640063[_0x5bb732]) != null) {
        _0x1fb65c(_0x22eeb9, _0x67ffd7, _0x5bb732, _0x5ed84f, _0x640063, null);
      }
    }
  }
  function _0x258c48(_0x59852) {
    switch (_0x59852) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return true;
      default:
        return false;
    }
  }
  var _0x1ae31a = null;
  var _0x52aad = null;
  function _0x4d6ed2(_0x47fc0b) {
    if (_0x47fc0b.nodeType === 9) {
      return _0x47fc0b;
    } else {
      return _0x47fc0b.ownerDocument;
    }
  }
  function _0x247d0c(_0x3f7e01) {
    switch (_0x3f7e01) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _0x249e57(_0x5f4f76, _0x378dd7) {
    if (_0x5f4f76 === 0) {
      switch (_0x378dd7) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    }
    if (_0x5f4f76 === 1 && _0x378dd7 === "foreignObject") {
      return 0;
    } else {
      return _0x5f4f76;
    }
  }
  function _0x323586(_0x1a93d0, _0x5d547b) {
    return _0x1a93d0 === "textarea" || _0x1a93d0 === "noscript" || typeof _0x5d547b.children == "string" || typeof _0x5d547b.children == "number" || typeof _0x5d547b.children == "bigint" || typeof _0x5d547b.dangerouslySetInnerHTML == "object" && _0x5d547b.dangerouslySetInnerHTML !== null && _0x5d547b.dangerouslySetInnerHTML.__html != null;
  }
  var _0x4f32e0 = null;
  var _0x374c13 = typeof setTimeout == "function" ? setTimeout : undefined;
  var _0x3e53c8 = typeof clearTimeout == "function" ? clearTimeout : undefined;
  var _0x42bbe5 = typeof Promise == "function" ? Promise : undefined;
  var _0x90e8f6 = typeof queueMicrotask == "function" ? queueMicrotask : _0x42bbe5 !== undefined ? function (_0x5a4847) {
    return _0x42bbe5.resolve(null).then(_0x5a4847).catch(_0x3e4299);
  } : _0x374c13;
  function _0x3e4299(_0x2bb25a) {
    setTimeout(function () {
      throw _0x2bb25a;
    });
  }
  function _0x6fae4f(_0x2f0ce5) {
    return _0x2f0ce5 === "head";
  }
  function _0x13c376(_0x37c0df, _0x48d759) {
    var _0x2a0b11 = _0x48d759;
    var _0x4bc7f0 = 0;
    do {
      var _0x1588e1 = _0x2a0b11.nextSibling;
      _0x37c0df.removeChild(_0x2a0b11);
      if (_0x1588e1 && _0x1588e1.nodeType === 8) {
        if ((_0x2a0b11 = _0x1588e1.data) === "/$" || _0x2a0b11 === "/&") {
          if (_0x4bc7f0 === 0) {
            _0x37c0df.removeChild(_0x1588e1);
            _0x38934a(_0x48d759);
            return;
          }
          _0x4bc7f0--;
        } else if (_0x2a0b11 === "$" || _0x2a0b11 === "$?" || _0x2a0b11 === "$~" || _0x2a0b11 === "$!" || _0x2a0b11 === "&") {
          _0x4bc7f0++;
        } else if (_0x2a0b11 === "html") {
          _0xa39ea0(_0x37c0df.ownerDocument.documentElement);
        } else if (_0x2a0b11 === "head") {
          _0xa39ea0(_0x2a0b11 = _0x37c0df.ownerDocument.head);
          for (var _0x59d8ac = _0x2a0b11.firstChild; _0x59d8ac;) {
            var _0x31e252 = _0x59d8ac.nextSibling;
            var _0x42a26b = _0x59d8ac.nodeName;
            if (!_0x59d8ac[_0x28419d] && _0x42a26b !== "SCRIPT" && _0x42a26b !== "STYLE" && (_0x42a26b !== "LINK" || _0x59d8ac.rel.toLowerCase() !== "stylesheet")) {
              _0x2a0b11.removeChild(_0x59d8ac);
            }
            _0x59d8ac = _0x31e252;
          }
        } else if (_0x2a0b11 === "body") {
          _0xa39ea0(_0x37c0df.ownerDocument.body);
        }
      }
      _0x2a0b11 = _0x1588e1;
    } while (_0x2a0b11);
    _0x38934a(_0x48d759);
  }
  function _0x1ac807(_0x3484dc, _0x2b64fc) {
    var _0x5ed2b0 = _0x3484dc;
    _0x3484dc = 0;
    do {
      var _0x7e725f = _0x5ed2b0.nextSibling;
      if (_0x5ed2b0.nodeType === 1) {
        if (_0x2b64fc) {
          _0x5ed2b0._stashedDisplay = _0x5ed2b0.style.display;
          _0x5ed2b0.style.display = "none";
        } else {
          _0x5ed2b0.style.display = _0x5ed2b0._stashedDisplay || "";
          if (_0x5ed2b0.getAttribute("style") === "") {
            _0x5ed2b0.removeAttribute("style");
          }
        }
      } else if (_0x5ed2b0.nodeType === 3) {
        if (_0x2b64fc) {
          _0x5ed2b0._stashedText = _0x5ed2b0.nodeValue;
          _0x5ed2b0.nodeValue = "";
        } else {
          _0x5ed2b0.nodeValue = _0x5ed2b0._stashedText || "";
        }
      }
      if (_0x7e725f && _0x7e725f.nodeType === 8) {
        if ((_0x5ed2b0 = _0x7e725f.data) === "/$") {
          if (_0x3484dc === 0) {
            break;
          }
          _0x3484dc--;
        } else if (_0x5ed2b0 === "$" || _0x5ed2b0 === "$?" || _0x5ed2b0 === "$~" || _0x5ed2b0 === "$!") {
          _0x3484dc++;
        }
      }
      _0x5ed2b0 = _0x7e725f;
    } while (_0x5ed2b0);
  }
  function _0x17bb7f(_0x18b781) {
    var _0x5b251c = _0x18b781.firstChild;
    for (_0x5b251c && _0x5b251c.nodeType === 10 && (_0x5b251c = _0x5b251c.nextSibling); _0x5b251c;) {
      var _0x2e48b2 = _0x5b251c;
      _0x5b251c = _0x5b251c.nextSibling;
      switch (_0x2e48b2.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _0x17bb7f(_0x2e48b2);
          _0x2ca6af(_0x2e48b2);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (_0x2e48b2.rel.toLowerCase() === "stylesheet") {
            continue;
          }
      }
      _0x18b781.removeChild(_0x2e48b2);
    }
  }
  function _0x29ca00(_0x134d1b, _0x2e9422) {
    while (_0x134d1b.nodeType !== 8) {
      if ((_0x134d1b.nodeType !== 1 || _0x134d1b.nodeName !== "INPUT" || _0x134d1b.type !== "hidden") && !_0x2e9422) {
        return null;
      }
      if ((_0x134d1b = _0x45f4a9(_0x134d1b.nextSibling)) === null) {
        return null;
      }
    }
    return _0x134d1b;
  }
  function _0x5e355f(_0x47102b) {
    return _0x47102b.data === "$?" || _0x47102b.data === "$~";
  }
  function _0x2a5706(_0x773b7f) {
    return _0x773b7f.data === "$!" || _0x773b7f.data === "$?" && _0x773b7f.ownerDocument.readyState !== "loading";
  }
  function _0x45f4a9(_0xb7062c) {
    for (; _0xb7062c != null; _0xb7062c = _0xb7062c.nextSibling) {
      var _0x475fd6 = _0xb7062c.nodeType;
      if (_0x475fd6 === 1 || _0x475fd6 === 3) {
        break;
      }
      if (_0x475fd6 === 8) {
        if ((_0x475fd6 = _0xb7062c.data) === "$" || _0x475fd6 === "$!" || _0x475fd6 === "$?" || _0x475fd6 === "$~" || _0x475fd6 === "&" || _0x475fd6 === "F!" || _0x475fd6 === "F") {
          break;
        }
        if (_0x475fd6 === "/$" || _0x475fd6 === "/&") {
          return null;
        }
      }
    }
    return _0xb7062c;
  }
  var _0x50990b = null;
  function _0x50e05d(_0x241fe2) {
    _0x241fe2 = _0x241fe2.nextSibling;
    var _0xe0fbaa = 0;
    for (; _0x241fe2;) {
      if (_0x241fe2.nodeType === 8) {
        var _0x28fe59 = _0x241fe2.data;
        if (_0x28fe59 === "/$" || _0x28fe59 === "/&") {
          if (_0xe0fbaa === 0) {
            return _0x45f4a9(_0x241fe2.nextSibling);
          }
          _0xe0fbaa--;
        } else if (_0x28fe59 === "$" || _0x28fe59 === "$!" || _0x28fe59 === "$?" || _0x28fe59 === "$~" || _0x28fe59 === "&") {
          _0xe0fbaa++;
        }
      }
      _0x241fe2 = _0x241fe2.nextSibling;
    }
    return null;
  }
  function _0x5d84ef(_0x53300d) {
    _0x53300d = _0x53300d.previousSibling;
    var _0x2f706c = 0;
    for (; _0x53300d;) {
      if (_0x53300d.nodeType === 8) {
        var _0x39f9a0 = _0x53300d.data;
        if (_0x39f9a0 === "$" || _0x39f9a0 === "$!" || _0x39f9a0 === "$?" || _0x39f9a0 === "$~" || _0x39f9a0 === "&") {
          if (_0x2f706c === 0) {
            return _0x53300d;
          }
          _0x2f706c--;
        } else if (_0x39f9a0 === "/$" || _0x39f9a0 === "/&") {
          _0x2f706c++;
        }
      }
      _0x53300d = _0x53300d.previousSibling;
    }
    return null;
  }
  function _0x32e984(_0x51fc0a, _0x17ae38, _0x1490bd) {
    _0x17ae38 = _0x4d6ed2(_0x1490bd);
    switch (_0x51fc0a) {
      case "html":
        if (!(_0x51fc0a = _0x17ae38.documentElement)) {
          throw Error(_0x34c7b9(452));
        }
        return _0x51fc0a;
      case "head":
        if (!(_0x51fc0a = _0x17ae38.head)) {
          throw Error(_0x34c7b9(453));
        }
        return _0x51fc0a;
      case "body":
        if (!(_0x51fc0a = _0x17ae38.body)) {
          throw Error(_0x34c7b9(454));
        }
        return _0x51fc0a;
      default:
        throw Error(_0x34c7b9(451));
    }
  }
  function _0xa39ea0(_0xae7159) {
    for (var _0x584853 = _0xae7159.attributes; _0x584853.length;) {
      _0xae7159.removeAttributeNode(_0x584853[0]);
    }
    _0x2ca6af(_0xae7159);
  }
  var _0x2d5b1b = new Map();
  var _0x5ea7fb = new Set();
  function _0x1689ee(_0x47898a) {
    if (typeof _0x47898a.getRootNode == "function") {
      return _0x47898a.getRootNode();
    } else if (_0x47898a.nodeType === 9) {
      return _0x47898a;
    } else {
      return _0x47898a.ownerDocument;
    }
  }
  var _0x18630a = _0x3e2aff.d;
  _0x3e2aff.d = {
    f: function () {
      var _0x3d9356 = _0x18630a.f();
      var _0x30fca0 = _0x175c4b();
      return _0x3d9356 || _0x30fca0;
    },
    r: function (_0x2c7b55) {
      var _0x514ef0 = _0x29babc(_0x2c7b55);
      if (_0x514ef0 !== null && _0x514ef0.tag === 5 && _0x514ef0.type === "form") {
        _0x37f0ef(_0x514ef0);
      } else {
        _0x18630a.r(_0x2c7b55);
      }
    },
    D: function (_0x4a17b4) {
      _0x18630a.D(_0x4a17b4);
      _0x28a8a9("dns-prefetch", _0x4a17b4, null);
    },
    C: function (_0x3dba7c, _0x142834) {
      _0x18630a.C(_0x3dba7c, _0x142834);
      _0x28a8a9("preconnect", _0x3dba7c, _0x142834);
    },
    L: function (_0x4e04db, _0x3cbdee, _0x372a3f) {
      _0x18630a.L(_0x4e04db, _0x3cbdee, _0x372a3f);
      var _0x22872c = _0x5d7c0d;
      if (_0x22872c && _0x4e04db && _0x3cbdee) {
        var _0x3b7a8a = "link[rel=\"preload\"][as=\"" + _0x1dc39d(_0x3cbdee) + "\"]";
        if (_0x3cbdee === "image" && _0x372a3f && _0x372a3f.imageSrcSet) {
          _0x3b7a8a += "[imagesrcset=\"" + _0x1dc39d(_0x372a3f.imageSrcSet) + "\"]";
          if (typeof _0x372a3f.imageSizes == "string") {
            _0x3b7a8a += "[imagesizes=\"" + _0x1dc39d(_0x372a3f.imageSizes) + "\"]";
          }
        } else {
          _0x3b7a8a += "[href=\"" + _0x1dc39d(_0x4e04db) + "\"]";
        }
        var _0x42c324 = _0x3b7a8a;
        switch (_0x3cbdee) {
          case "style":
            _0x42c324 = _0x326b76(_0x4e04db);
            break;
          case "script":
            _0x42c324 = _0x10f23b(_0x4e04db);
        }
        if (!_0x2d5b1b.has(_0x42c324)) {
          _0x4e04db = _0x15c004({
            rel: "preload",
            href: _0x3cbdee === "image" && _0x372a3f && _0x372a3f.imageSrcSet ? undefined : _0x4e04db,
            as: _0x3cbdee
          }, _0x372a3f);
          _0x2d5b1b.set(_0x42c324, _0x4e04db);
          if (_0x22872c.querySelector(_0x3b7a8a) === null && (_0x3cbdee !== "style" || !_0x22872c.querySelector(_0x5562ed(_0x42c324))) && (_0x3cbdee !== "script" || !_0x22872c.querySelector(_0x48a0c7(_0x42c324)))) {
            _0x1541af(_0x3cbdee = _0x22872c.createElement("link"), "link", _0x4e04db);
            _0x414312(_0x3cbdee);
            _0x22872c.head.appendChild(_0x3cbdee);
          }
        }
      }
    },
    m: function (_0x59ecf1, _0x36f0d8) {
      _0x18630a.m(_0x59ecf1, _0x36f0d8);
      var _0x49ea7a = _0x5d7c0d;
      if (_0x49ea7a && _0x59ecf1) {
        var _0x2eb1bc = _0x36f0d8 && typeof _0x36f0d8.as == "string" ? _0x36f0d8.as : "script";
        var _0x39767e = "link[rel=\"modulepreload\"][as=\"" + _0x1dc39d(_0x2eb1bc) + "\"][href=\"" + _0x1dc39d(_0x59ecf1) + "\"]";
        var _0x32e753 = _0x39767e;
        switch (_0x2eb1bc) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            _0x32e753 = _0x10f23b(_0x59ecf1);
        }
        if (!_0x2d5b1b.has(_0x32e753) && (_0x59ecf1 = _0x15c004({
          rel: "modulepreload",
          href: _0x59ecf1
        }, _0x36f0d8), _0x2d5b1b.set(_0x32e753, _0x59ecf1), _0x49ea7a.querySelector(_0x39767e) === null)) {
          switch (_0x2eb1bc) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (_0x49ea7a.querySelector(_0x48a0c7(_0x32e753))) {
                return;
              }
          }
          _0x1541af(_0x2eb1bc = _0x49ea7a.createElement("link"), "link", _0x59ecf1);
          _0x414312(_0x2eb1bc);
          _0x49ea7a.head.appendChild(_0x2eb1bc);
        }
      }
    },
    X: function (_0x196067, _0x795b91) {
      _0x18630a.X(_0x196067, _0x795b91);
      var _0x4b56d0 = _0x5d7c0d;
      if (_0x4b56d0 && _0x196067) {
        var _0xda3a61 = _0x5cda33(_0x4b56d0).hoistableScripts;
        var _0xd6bf79 = _0x10f23b(_0x196067);
        var _0x215ea1 = _0xda3a61.get(_0xd6bf79);
        if (!_0x215ea1) {
          if (!(_0x215ea1 = _0x4b56d0.querySelector(_0x48a0c7(_0xd6bf79)))) {
            _0x196067 = _0x15c004({
              src: _0x196067,
              async: true
            }, _0x795b91);
            if (_0x795b91 = _0x2d5b1b.get(_0xd6bf79)) {
              _0x49d0fe(_0x196067, _0x795b91);
            }
            _0x414312(_0x215ea1 = _0x4b56d0.createElement("script"));
            _0x1541af(_0x215ea1, "link", _0x196067);
            _0x4b56d0.head.appendChild(_0x215ea1);
          }
          _0x215ea1 = {
            type: "script",
            instance: _0x215ea1,
            count: 1,
            state: null
          };
          _0xda3a61.set(_0xd6bf79, _0x215ea1);
        }
      }
    },
    S: function (_0xc8189b, _0x586fa0, _0x5efdb9) {
      _0x18630a.S(_0xc8189b, _0x586fa0, _0x5efdb9);
      var _0x489fe3 = _0x5d7c0d;
      if (_0x489fe3 && _0xc8189b) {
        var _0x380597 = _0x5cda33(_0x489fe3).hoistableStyles;
        var _0x49c86e = _0x326b76(_0xc8189b);
        _0x586fa0 = _0x586fa0 || "default";
        var _0x558566 = _0x380597.get(_0x49c86e);
        if (!_0x558566) {
          var _0x5e88f9 = {
            loading: 0,
            preload: null
          };
          if (_0x558566 = _0x489fe3.querySelector(_0x5562ed(_0x49c86e))) {
            _0x5e88f9.loading = 5;
          } else {
            _0xc8189b = _0x15c004({
              rel: "stylesheet",
              href: _0xc8189b,
              "data-precedence": _0x586fa0
            }, _0x5efdb9);
            if (_0x5efdb9 = _0x2d5b1b.get(_0x49c86e)) {
              _0x386058(_0xc8189b, _0x5efdb9);
            }
            var _0x5f26e0 = _0x558566 = _0x489fe3.createElement("link");
            _0x414312(_0x5f26e0);
            _0x1541af(_0x5f26e0, "link", _0xc8189b);
            _0x5f26e0._p = new Promise(function (_0x5e583a, _0xb847d7) {
              _0x5f26e0.onload = _0x5e583a;
              _0x5f26e0.onerror = _0xb847d7;
            });
            _0x5f26e0.addEventListener("load", function () {
              _0x5e88f9.loading |= 1;
            });
            _0x5f26e0.addEventListener("error", function () {
              _0x5e88f9.loading |= 2;
            });
            _0x5e88f9.loading |= 4;
            _0x5c2f11(_0x558566, _0x586fa0, _0x489fe3);
          }
          _0x558566 = {
            type: "stylesheet",
            instance: _0x558566,
            count: 1,
            state: _0x5e88f9
          };
          _0x380597.set(_0x49c86e, _0x558566);
        }
      }
    },
    M: function (_0x358a19, _0x1cb6cc) {
      _0x18630a.M(_0x358a19, _0x1cb6cc);
      var _0x4cf048 = _0x5d7c0d;
      if (_0x4cf048 && _0x358a19) {
        var _0x1e2a98 = _0x5cda33(_0x4cf048).hoistableScripts;
        var _0x582d60 = _0x10f23b(_0x358a19);
        var _0xd6ee7 = _0x1e2a98.get(_0x582d60);
        if (!_0xd6ee7) {
          if (!(_0xd6ee7 = _0x4cf048.querySelector(_0x48a0c7(_0x582d60)))) {
            _0x358a19 = _0x15c004({
              src: _0x358a19,
              async: true,
              type: "module"
            }, _0x1cb6cc);
            if (_0x1cb6cc = _0x2d5b1b.get(_0x582d60)) {
              _0x49d0fe(_0x358a19, _0x1cb6cc);
            }
            _0x414312(_0xd6ee7 = _0x4cf048.createElement("script"));
            _0x1541af(_0xd6ee7, "link", _0x358a19);
            _0x4cf048.head.appendChild(_0xd6ee7);
          }
          _0xd6ee7 = {
            type: "script",
            instance: _0xd6ee7,
            count: 1,
            state: null
          };
          _0x1e2a98.set(_0x582d60, _0xd6ee7);
        }
      }
    }
  };
  var _0x5d7c0d = typeof document == "undefined" ? null : document;
  function _0x28a8a9(_0x18ed9e, _0x1795f6, _0x5bbcd7) {
    var _0x129065 = _0x5d7c0d;
    if (_0x129065 && typeof _0x1795f6 == "string" && _0x1795f6) {
      var _0x4e50dc = _0x1dc39d(_0x1795f6);
      _0x4e50dc = "link[rel=\"" + _0x18ed9e + "\"][href=\"" + _0x4e50dc + "\"]";
      if (typeof _0x5bbcd7 == "string") {
        _0x4e50dc += "[crossorigin=\"" + _0x5bbcd7 + "\"]";
      }
      if (!_0x5ea7fb.has(_0x4e50dc)) {
        _0x5ea7fb.add(_0x4e50dc);
        _0x18ed9e = {
          rel: _0x18ed9e,
          crossOrigin: _0x5bbcd7,
          href: _0x1795f6
        };
        if (_0x129065.querySelector(_0x4e50dc) === null) {
          _0x1541af(_0x1795f6 = _0x129065.createElement("link"), "link", _0x18ed9e);
          _0x414312(_0x1795f6);
          _0x129065.head.appendChild(_0x1795f6);
        }
      }
    }
  }
  function _0x7a0e0a(_0x1ab400, _0x1efe25, _0x234088, _0x440e9a) {
    var _0x1e85fc;
    var _0x33b5e8;
    var _0x352736;
    var _0x3ce7c1;
    var _0x1e4cd7 = (_0x1e4cd7 = _0x2d4ef4.current) ? _0x1689ee(_0x1e4cd7) : null;
    if (!_0x1e4cd7) {
      throw Error(_0x34c7b9(446));
    }
    switch (_0x1ab400) {
      case "meta":
      case "title":
        return null;
      case "style":
        if (typeof _0x234088.precedence == "string" && typeof _0x234088.href == "string") {
          _0x1efe25 = _0x326b76(_0x234088.href);
          if (!(_0x440e9a = (_0x234088 = _0x5cda33(_0x1e4cd7).hoistableStyles).get(_0x1efe25))) {
            _0x440e9a = {
              type: "style",
              instance: null,
              count: 0,
              state: null
            };
            _0x234088.set(_0x1efe25, _0x440e9a);
          }
          return _0x440e9a;
        } else {
          return {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        }
      case "link":
        if (_0x234088.rel === "stylesheet" && typeof _0x234088.href == "string" && typeof _0x234088.precedence == "string") {
          _0x1ab400 = _0x326b76(_0x234088.href);
          var _0x3db371 = _0x5cda33(_0x1e4cd7).hoistableStyles;
          var _0x19ec6a = _0x3db371.get(_0x1ab400);
          if (!_0x19ec6a) {
            _0x1e4cd7 = _0x1e4cd7.ownerDocument || _0x1e4cd7;
            _0x19ec6a = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            };
            _0x3db371.set(_0x1ab400, _0x19ec6a);
            if ((_0x3db371 = _0x1e4cd7.querySelector(_0x5562ed(_0x1ab400))) && !_0x3db371._p) {
              _0x19ec6a.instance = _0x3db371;
              _0x19ec6a.state.loading = 5;
            }
            if (!_0x2d5b1b.has(_0x1ab400)) {
              _0x234088 = {
                rel: "preload",
                as: "style",
                href: _0x234088.href,
                crossOrigin: _0x234088.crossOrigin,
                integrity: _0x234088.integrity,
                media: _0x234088.media,
                hrefLang: _0x234088.hrefLang,
                referrerPolicy: _0x234088.referrerPolicy
              };
              _0x2d5b1b.set(_0x1ab400, _0x234088);
              if (!_0x3db371) {
                _0x1e85fc = _0x1e4cd7;
                _0x33b5e8 = _0x1ab400;
                _0x352736 = _0x234088;
                _0x3ce7c1 = _0x19ec6a.state;
                if (_0x1e85fc.querySelector("link[rel=\"preload\"][as=\"style\"][" + _0x33b5e8 + "]")) {
                  _0x3ce7c1.loading = 1;
                } else {
                  _0x33b5e8 = _0x1e85fc.createElement("link");
                  _0x3ce7c1.preload = _0x33b5e8;
                  _0x33b5e8.addEventListener("load", function () {
                    return _0x3ce7c1.loading |= 1;
                  });
                  _0x33b5e8.addEventListener("error", function () {
                    return _0x3ce7c1.loading |= 2;
                  });
                  _0x1541af(_0x33b5e8, "link", _0x352736);
                  _0x414312(_0x33b5e8);
                  _0x1e85fc.head.appendChild(_0x33b5e8);
                }
              }
            }
          }
          if (_0x1efe25 && _0x440e9a === null) {
            throw Error(_0x34c7b9(528, ""));
          }
          return _0x19ec6a;
        }
        if (_0x1efe25 && _0x440e9a !== null) {
          throw Error(_0x34c7b9(529, ""));
        }
        return null;
      case "script":
        _0x1efe25 = _0x234088.async;
        if (typeof (_0x234088 = _0x234088.src) == "string" && _0x1efe25 && typeof _0x1efe25 != "function" && typeof _0x1efe25 != "symbol") {
          _0x1efe25 = _0x10f23b(_0x234088);
          if (!(_0x440e9a = (_0x234088 = _0x5cda33(_0x1e4cd7).hoistableScripts).get(_0x1efe25))) {
            _0x440e9a = {
              type: "script",
              instance: null,
              count: 0,
              state: null
            };
            _0x234088.set(_0x1efe25, _0x440e9a);
          }
          return _0x440e9a;
        } else {
          return {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        }
      default:
        throw Error(_0x34c7b9(444, _0x1ab400));
    }
  }
  function _0x326b76(_0x507557) {
    return "href=\"" + _0x1dc39d(_0x507557) + "\"";
  }
  function _0x5562ed(_0x3c2240) {
    return "link[rel=\"stylesheet\"][" + _0x3c2240 + "]";
  }
  function _0x294d00(_0x425984) {
    return _0x15c004({}, _0x425984, {
      "data-precedence": _0x425984.precedence,
      precedence: null
    });
  }
  function _0x10f23b(_0x18a07f) {
    return "[src=\"" + _0x1dc39d(_0x18a07f) + "\"]";
  }
  function _0x48a0c7(_0x3c7cad) {
    return "script[async]" + _0x3c7cad;
  }
  function _0x5311ee(_0x3ac873, _0x5b6304, _0x2fb737) {
    _0x5b6304.count++;
    if (_0x5b6304.instance === null) {
      switch (_0x5b6304.type) {
        case "style":
          var _0x327acd = _0x3ac873.querySelector("style[data-href~=\"" + _0x1dc39d(_0x2fb737.href) + "\"]");
          if (_0x327acd) {
            _0x5b6304.instance = _0x327acd;
            _0x414312(_0x327acd);
            return _0x327acd;
          }
          var _0xb83966 = _0x15c004({}, _0x2fb737, {
            "data-href": _0x2fb737.href,
            "data-precedence": _0x2fb737.precedence,
            href: null,
            precedence: null
          });
          _0x414312(_0x327acd = (_0x3ac873.ownerDocument || _0x3ac873).createElement("style"));
          _0x1541af(_0x327acd, "style", _0xb83966);
          _0x5c2f11(_0x327acd, _0x2fb737.precedence, _0x3ac873);
          return _0x5b6304.instance = _0x327acd;
        case "stylesheet":
          _0xb83966 = _0x326b76(_0x2fb737.href);
          var _0x391713 = _0x3ac873.querySelector(_0x5562ed(_0xb83966));
          if (_0x391713) {
            _0x5b6304.state.loading |= 4;
            _0x5b6304.instance = _0x391713;
            _0x414312(_0x391713);
            return _0x391713;
          }
          _0x327acd = _0x294d00(_0x2fb737);
          if (_0xb83966 = _0x2d5b1b.get(_0xb83966)) {
            _0x386058(_0x327acd, _0xb83966);
          }
          _0x414312(_0x391713 = (_0x3ac873.ownerDocument || _0x3ac873).createElement("link"));
          var _0x2af1d1 = _0x391713;
          _0x2af1d1._p = new Promise(function (_0x406dfe, _0x37db89) {
            _0x2af1d1.onload = _0x406dfe;
            _0x2af1d1.onerror = _0x37db89;
          });
          _0x1541af(_0x391713, "link", _0x327acd);
          _0x5b6304.state.loading |= 4;
          _0x5c2f11(_0x391713, _0x2fb737.precedence, _0x3ac873);
          return _0x5b6304.instance = _0x391713;
        case "script":
          _0x391713 = _0x10f23b(_0x2fb737.src);
          if (_0xb83966 = _0x3ac873.querySelector(_0x48a0c7(_0x391713))) {
            _0x5b6304.instance = _0xb83966;
            _0x414312(_0xb83966);
            return _0xb83966;
          } else {
            _0x327acd = _0x2fb737;
            if (_0xb83966 = _0x2d5b1b.get(_0x391713)) {
              _0x49d0fe(_0x327acd = _0x15c004({}, _0x2fb737), _0xb83966);
            }
            _0x414312(_0xb83966 = (_0x3ac873 = _0x3ac873.ownerDocument || _0x3ac873).createElement("script"));
            _0x1541af(_0xb83966, "link", _0x327acd);
            _0x3ac873.head.appendChild(_0xb83966);
            return _0x5b6304.instance = _0xb83966;
          }
        case "void":
          return null;
        default:
          throw Error(_0x34c7b9(443, _0x5b6304.type));
      }
    } else if (_0x5b6304.type === "stylesheet" && !(_0x5b6304.state.loading & 4)) {
      _0x327acd = _0x5b6304.instance;
      _0x5b6304.state.loading |= 4;
      _0x5c2f11(_0x327acd, _0x2fb737.precedence, _0x3ac873);
    }
    return _0x5b6304.instance;
  }
  function _0x5c2f11(_0x176aa4, _0x30c7b4, _0x4d81ed) {
    for (var _0x4864fd = _0x4d81ed.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), _0x48933b = _0x4864fd.length ? _0x4864fd[_0x4864fd.length - 1] : null, _0x507a4e = _0x48933b, _0x5cb33d = 0; _0x5cb33d < _0x4864fd.length; _0x5cb33d++) {
      var _0x57bea1 = _0x4864fd[_0x5cb33d];
      if (_0x57bea1.dataset.precedence === _0x30c7b4) {
        _0x507a4e = _0x57bea1;
      } else if (_0x507a4e !== _0x48933b) {
        break;
      }
    }
    if (_0x507a4e) {
      _0x507a4e.parentNode.insertBefore(_0x176aa4, _0x507a4e.nextSibling);
    } else {
      (_0x30c7b4 = _0x4d81ed.nodeType === 9 ? _0x4d81ed.head : _0x4d81ed).insertBefore(_0x176aa4, _0x30c7b4.firstChild);
    }
  }
  function _0x386058(_0x35f25f, _0x17b90a) {
    _0x35f25f.crossOrigin ??= _0x17b90a.crossOrigin;
    _0x35f25f.referrerPolicy ??= _0x17b90a.referrerPolicy;
    _0x35f25f.title ??= _0x17b90a.title;
  }
  function _0x49d0fe(_0x175346, _0x215ea6) {
    _0x175346.crossOrigin ??= _0x215ea6.crossOrigin;
    _0x175346.referrerPolicy ??= _0x215ea6.referrerPolicy;
    _0x175346.integrity ??= _0x215ea6.integrity;
  }
  var _0x21b4df = null;
  function _0x23dede(_0x2cc838, _0x38a36f, _0x437991) {
    if (_0x21b4df === null) {
      var _0x4a0704 = new Map();
      var _0x30264a = _0x21b4df = new Map();
      _0x30264a.set(_0x437991, _0x4a0704);
    } else if (!(_0x4a0704 = (_0x30264a = _0x21b4df).get(_0x437991))) {
      _0x4a0704 = new Map();
      _0x30264a.set(_0x437991, _0x4a0704);
    }
    if (_0x4a0704.has(_0x2cc838)) {
      return _0x4a0704;
    }
    _0x4a0704.set(_0x2cc838, null);
    _0x437991 = _0x437991.getElementsByTagName(_0x2cc838);
    _0x30264a = 0;
    for (; _0x30264a < _0x437991.length; _0x30264a++) {
      var _0x37d7ea = _0x437991[_0x30264a];
      if (!_0x37d7ea[_0x28419d] && !_0x37d7ea[_0x941386] && (_0x2cc838 !== "link" || _0x37d7ea.getAttribute("rel") !== "stylesheet") && _0x37d7ea.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _0x298e48 = _0x37d7ea.getAttribute(_0x38a36f) || "";
        _0x298e48 = _0x2cc838 + _0x298e48;
        var _0x2d4a86 = _0x4a0704.get(_0x298e48);
        if (_0x2d4a86) {
          _0x2d4a86.push(_0x37d7ea);
        } else {
          _0x4a0704.set(_0x298e48, [_0x37d7ea]);
        }
      }
    }
    return _0x4a0704;
  }
  function _0x74e8b1(_0x288c3e, _0x4ac98f, _0xe69467) {
    (_0x288c3e = _0x288c3e.ownerDocument || _0x288c3e).head.insertBefore(_0xe69467, _0x4ac98f === "title" ? _0x288c3e.querySelector("head > title") : null);
  }
  function _0x5d966f(_0x2e08f2) {
    return _0x2e08f2.type !== "stylesheet" || !!(_0x2e08f2.state.loading & 3);
  }
  var _0x391f94 = 0;
  function _0x49944f() {
    this.count--;
    if (this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) {
        _0x3ff96d(this, this.stylesheets);
      } else if (this.unsuspend) {
        var _0x467e0b = this.unsuspend;
        this.unsuspend = null;
        _0x467e0b();
      }
    }
  }
  var _0x197ddb = null;
  function _0x3ff96d(_0xe569a0, _0x391652) {
    _0xe569a0.stylesheets = null;
    if (_0xe569a0.unsuspend !== null) {
      _0xe569a0.count++;
      _0x197ddb = new Map();
      _0x391652.forEach(_0x4d812b, _0xe569a0);
      _0x197ddb = null;
      _0x49944f.call(_0xe569a0);
    }
  }
  function _0x4d812b(_0x1e7065, _0x2c73c7) {
    if (!(_0x2c73c7.state.loading & 4)) {
      var _0x5552d3 = _0x197ddb.get(_0x1e7065);
      if (_0x5552d3) {
        var _0x96c583 = _0x5552d3.get(null);
      } else {
        _0x5552d3 = new Map();
        _0x197ddb.set(_0x1e7065, _0x5552d3);
        for (var _0xb26434 = _0x1e7065.querySelectorAll("link[data-precedence],style[data-precedence]"), _0x380431 = 0; _0x380431 < _0xb26434.length; _0x380431++) {
          var _0x503c6d = _0xb26434[_0x380431];
          if (_0x503c6d.nodeName === "LINK" || _0x503c6d.getAttribute("media") !== "not all") {
            _0x5552d3.set(_0x503c6d.dataset.precedence, _0x503c6d);
            _0x96c583 = _0x503c6d;
          }
        }
        if (_0x96c583) {
          _0x5552d3.set(null, _0x96c583);
        }
      }
      _0x503c6d = (_0xb26434 = _0x2c73c7.instance).getAttribute("data-precedence");
      if ((_0x380431 = _0x5552d3.get(_0x503c6d) || _0x96c583) === _0x96c583) {
        _0x5552d3.set(null, _0xb26434);
      }
      _0x5552d3.set(_0x503c6d, _0xb26434);
      this.count++;
      _0x96c583 = _0x49944f.bind(this);
      _0xb26434.addEventListener("load", _0x96c583);
      _0xb26434.addEventListener("error", _0x96c583);
      if (_0x380431) {
        _0x380431.parentNode.insertBefore(_0xb26434, _0x380431.nextSibling);
      } else {
        (_0x1e7065 = _0x1e7065.nodeType === 9 ? _0x1e7065.head : _0x1e7065).insertBefore(_0xb26434, _0x1e7065.firstChild);
      }
      _0x2c73c7.state.loading |= 4;
    }
  }
  var _0x508408 = {
    $$typeof: _0x147ad0,
    Provider: null,
    Consumer: null,
    _currentValue: _0x2eb1a,
    _currentValue2: _0x2eb1a,
    _threadCount: 0
  };
  function _0x218073(_0x251afb, _0x5cb0d0, _0x5996ed, _0x21251b, _0xf6f5d1, _0x4e0ab2, _0x33b2e0, _0x1ec6ad, _0x1b5030) {
    this.tag = 1;
    this.containerInfo = _0x251afb;
    this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
    this.callbackPriority = 0;
    this.expirationTimes = _0x9ede8b(-1);
    this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = _0x9ede8b(0);
    this.hiddenUpdates = _0x9ede8b(null);
    this.identifierPrefix = _0x21251b;
    this.onUncaughtError = _0xf6f5d1;
    this.onCaughtError = _0x4e0ab2;
    this.onRecoverableError = _0x33b2e0;
    this.pooledCache = null;
    this.pooledCacheLanes = 0;
    this.formState = _0x1b5030;
    this.incompleteTransitions = new Map();
  }
  function _0xfa9c48(_0x471ff8, _0x27968f, _0x26384a, _0x54c437, _0x56cdaa, _0x21e60b) {
    _0x56cdaa = function (_0x515e87) {
      if (_0x515e87) {
        return _0x515e87 = _0x569738;
      } else {
        return _0x569738;
      }
    }(_0x56cdaa);
    if (_0x54c437.context === null) {
      _0x54c437.context = _0x56cdaa;
    } else {
      _0x54c437.pendingContext = _0x56cdaa;
    }
    (_0x54c437 = _0x230e95(_0x27968f)).payload = {
      element: _0x26384a
    };
    if ((_0x21e60b = _0x21e60b === undefined ? null : _0x21e60b) !== null) {
      _0x54c437.callback = _0x21e60b;
    }
    if ((_0x26384a = _0xe5f4cf(_0x471ff8, _0x54c437, _0x27968f)) !== null) {
      _0x3968da(_0x26384a, 0, _0x27968f);
      _0x3cf5de(_0x26384a, _0x471ff8, _0x27968f);
    }
  }
  function _0xb0520(_0x3ed79b, _0x3a9372) {
    if ((_0x3ed79b = _0x3ed79b.memoizedState) !== null && _0x3ed79b.dehydrated !== null) {
      var _0x3638c4 = _0x3ed79b.retryLane;
      _0x3ed79b.retryLane = _0x3638c4 !== 0 && _0x3638c4 < _0x3a9372 ? _0x3638c4 : _0x3a9372;
    }
  }
  function _0xa5d394(_0x3c9789, _0x3091a3) {
    _0xb0520(_0x3c9789, _0x3091a3);
    if (_0x3c9789 = _0x3c9789.alternate) {
      _0xb0520(_0x3c9789, _0x3091a3);
    }
  }
  function _0x36ff85(_0x48712f) {
    if (_0x48712f.tag === 13 || _0x48712f.tag === 31) {
      var _0x5aba7f = _0x2b6f8b(_0x48712f, 67108864);
      if (_0x5aba7f !== null) {
        _0x3968da(_0x5aba7f, 0, 67108864);
      }
      _0xa5d394(_0x48712f, 67108864);
    }
  }
  function _0x2538ca(_0x1036d4) {
    if (_0x1036d4.tag === 13 || _0x1036d4.tag === 31) {
      var _0xa6503 = _0x17dc03();
      var _0x502805 = _0x2b6f8b(_0x1036d4, _0xa6503 = _0x107c3a(_0xa6503));
      if (_0x502805 !== null) {
        _0x3968da(_0x502805, 0, _0xa6503);
      }
      _0xa5d394(_0x1036d4, _0xa6503);
    }
  }
  var _0x339421 = true;
  function _0x2a03a6(_0x1c05a2, _0x4f4929, _0x4eab3f, _0x4bda44) {
    var _0x17392f = _0x30149d.T;
    _0x30149d.T = null;
    var _0x5c1209 = _0x3e2aff.p;
    try {
      _0x3e2aff.p = 2;
      _0x608e3e(_0x1c05a2, _0x4f4929, _0x4eab3f, _0x4bda44);
    } finally {
      _0x3e2aff.p = _0x5c1209;
      _0x30149d.T = _0x17392f;
    }
  }
  function _0x18f25b(_0x2bf8be, _0x13af01, _0x382b51, _0xf6ed45) {
    var _0x3b8867 = _0x30149d.T;
    _0x30149d.T = null;
    var _0x193f07 = _0x3e2aff.p;
    try {
      _0x3e2aff.p = 8;
      _0x608e3e(_0x2bf8be, _0x13af01, _0x382b51, _0xf6ed45);
    } finally {
      _0x3e2aff.p = _0x193f07;
      _0x30149d.T = _0x3b8867;
    }
  }
  function _0x608e3e(_0xa63010, _0x5e33fb, _0x3f26c2, _0xfcbe2d) {
    if (_0x339421) {
      var _0x4ca20d = _0x534177(_0xfcbe2d);
      if (_0x4ca20d === null) {
        _0x1f2ce5(_0xa63010, _0x5e33fb, _0xfcbe2d, _0x2ac4cb, _0x3f26c2);
        _0x4f7278(_0xa63010, _0xfcbe2d);
      } else if (function (_0x377e22, _0x3f4e45, _0x4721d8, _0x5ef72e, _0x487b0e) {
        switch (_0x3f4e45) {
          case "focusin":
            _0x1f1829 = _0x41841b(_0x1f1829, _0x377e22, _0x3f4e45, _0x4721d8, _0x5ef72e, _0x487b0e);
            return true;
          case "dragenter":
            _0x58bcc1 = _0x41841b(_0x58bcc1, _0x377e22, _0x3f4e45, _0x4721d8, _0x5ef72e, _0x487b0e);
            return true;
          case "mouseover":
            _0xde667a = _0x41841b(_0xde667a, _0x377e22, _0x3f4e45, _0x4721d8, _0x5ef72e, _0x487b0e);
            return true;
          case "pointerover":
            var _0x55f482 = _0x487b0e.pointerId;
            _0x184bea.set(_0x55f482, _0x41841b(_0x184bea.get(_0x55f482) || null, _0x377e22, _0x3f4e45, _0x4721d8, _0x5ef72e, _0x487b0e));
            return true;
          case "gotpointercapture":
            _0x55f482 = _0x487b0e.pointerId;
            _0x4c22ef.set(_0x55f482, _0x41841b(_0x4c22ef.get(_0x55f482) || null, _0x377e22, _0x3f4e45, _0x4721d8, _0x5ef72e, _0x487b0e));
            return true;
        }
        return false;
      }(_0x4ca20d, _0xa63010, _0x5e33fb, _0x3f26c2, _0xfcbe2d)) {
        _0xfcbe2d.stopPropagation();
      } else {
        _0x4f7278(_0xa63010, _0xfcbe2d);
        if (_0x5e33fb & 4 && _0x59707.indexOf(_0xa63010) > -1) {
          while (_0x4ca20d !== null) {
            var _0x43d47d = _0x29babc(_0x4ca20d);
            if (_0x43d47d !== null) {
              switch (_0x43d47d.tag) {
                case 3:
                  if ((_0x43d47d = _0x43d47d.stateNode).current.memoizedState.isDehydrated) {
                    var _0x404dc8 = _0x336d13(_0x43d47d.pendingLanes);
                    if (_0x404dc8 !== 0) {
                      var _0x444a89 = _0x43d47d;
                      _0x444a89.pendingLanes |= 2;
                      _0x444a89.entangledLanes |= 2;
                      while (_0x404dc8) {
                        var _0x582c5a = 1 << 31 - _0x4f44c7(_0x404dc8);
                        _0x444a89.entanglements[1] |= _0x582c5a;
                        _0x404dc8 &= ~_0x582c5a;
                      }
                      _0xb07498(_0x43d47d);
                      if (!(_0x21d2ba & 6)) {
                        _0x5e3820 = _0x271a39() + 500;
                        _0x5eaecd(0, false);
                      }
                    }
                  }
                  break;
                case 31:
                case 13:
                  if ((_0x444a89 = _0x2b6f8b(_0x43d47d, 2)) !== null) {
                    _0x3968da(_0x444a89, 0, 2);
                  }
                  _0x175c4b();
                  _0xa5d394(_0x43d47d, 2);
              }
            }
            if ((_0x43d47d = _0x534177(_0xfcbe2d)) === null) {
              _0x1f2ce5(_0xa63010, _0x5e33fb, _0xfcbe2d, _0x2ac4cb, _0x3f26c2);
            }
            if (_0x43d47d === _0x4ca20d) {
              break;
            }
            _0x4ca20d = _0x43d47d;
          }
          if (_0x4ca20d !== null) {
            _0xfcbe2d.stopPropagation();
          }
        } else {
          _0x1f2ce5(_0xa63010, _0x5e33fb, _0xfcbe2d, null, _0x3f26c2);
        }
      }
    }
  }
  function _0x534177(_0x281e83) {
    return _0x23da77(_0x281e83 = _0x4b1198(_0x281e83));
  }
  var _0x2ac4cb = null;
  function _0x23da77(_0x56d635) {
    _0x2ac4cb = null;
    if ((_0x56d635 = _0x3c703b(_0x56d635)) !== null) {
      var _0x2eda6e = _0x4809b3(_0x56d635);
      if (_0x2eda6e === null) {
        _0x56d635 = null;
      } else {
        var _0x2bdb7c = _0x2eda6e.tag;
        if (_0x2bdb7c === 13) {
          if ((_0x56d635 = _0x5715cf(_0x2eda6e)) !== null) {
            return _0x56d635;
          }
          _0x56d635 = null;
        } else if (_0x2bdb7c === 31) {
          if ((_0x56d635 = _0x21b7ee(_0x2eda6e)) !== null) {
            return _0x56d635;
          }
          _0x56d635 = null;
        } else if (_0x2bdb7c === 3) {
          if (_0x2eda6e.stateNode.current.memoizedState.isDehydrated) {
            if (_0x2eda6e.tag === 3) {
              return _0x2eda6e.stateNode.containerInfo;
            } else {
              return null;
            }
          }
          _0x56d635 = null;
        } else if (_0x2eda6e !== _0x56d635) {
          _0x56d635 = null;
        }
      }
    }
    _0x2ac4cb = _0x56d635;
    return null;
  }
  function _0x5508ca(_0x3e1386) {
    switch (_0x3e1386) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (_0x1931e9()) {
          case _0x302b52:
            return 2;
          case _0x104215:
            return 8;
          case _0x39ac2e:
          case _0x165f5c:
            return 32;
          case _0x306d03:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var _0x1caf3c = false;
  var _0x1f1829 = null;
  var _0x58bcc1 = null;
  var _0xde667a = null;
  var _0x184bea = new Map();
  var _0x4c22ef = new Map();
  var _0x3972d1 = [];
  var _0x59707 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function _0x4f7278(_0x4b4481, _0x395b77) {
    switch (_0x4b4481) {
      case "focusin":
      case "focusout":
        _0x1f1829 = null;
        break;
      case "dragenter":
      case "dragleave":
        _0x58bcc1 = null;
        break;
      case "mouseover":
      case "mouseout":
        _0xde667a = null;
        break;
      case "pointerover":
      case "pointerout":
        _0x184bea.delete(_0x395b77.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        _0x4c22ef.delete(_0x395b77.pointerId);
    }
  }
  function _0x41841b(_0x1a944d, _0x5c7a03, _0x245d6e, _0x5ae648, _0xb9c036, _0x33973e) {
    if (_0x1a944d === null || _0x1a944d.nativeEvent !== _0x33973e) {
      _0x1a944d = {
        blockedOn: _0x5c7a03,
        domEventName: _0x245d6e,
        eventSystemFlags: _0x5ae648,
        nativeEvent: _0x33973e,
        targetContainers: [_0xb9c036]
      };
      if (_0x5c7a03 !== null && (_0x5c7a03 = _0x29babc(_0x5c7a03)) !== null) {
        _0x36ff85(_0x5c7a03);
      }
      return _0x1a944d;
    } else {
      _0x1a944d.eventSystemFlags |= _0x5ae648;
      _0x5c7a03 = _0x1a944d.targetContainers;
      if (_0xb9c036 !== null && _0x5c7a03.indexOf(_0xb9c036) === -1) {
        _0x5c7a03.push(_0xb9c036);
      }
      return _0x1a944d;
    }
  }
  function _0x460c87(_0x1f6142) {
    var _0x13a0c7 = _0x3c703b(_0x1f6142.target);
    if (_0x13a0c7 !== null) {
      var _0x2cf5b4 = _0x4809b3(_0x13a0c7);
      if (_0x2cf5b4 !== null) {
        if ((_0x13a0c7 = _0x2cf5b4.tag) === 13) {
          if ((_0x13a0c7 = _0x5715cf(_0x2cf5b4)) !== null) {
            _0x1f6142.blockedOn = _0x13a0c7;
            _0x57b874(_0x1f6142.priority, function () {
              _0x2538ca(_0x2cf5b4);
            });
            return;
          }
        } else if (_0x13a0c7 === 31) {
          if ((_0x13a0c7 = _0x21b7ee(_0x2cf5b4)) !== null) {
            _0x1f6142.blockedOn = _0x13a0c7;
            _0x57b874(_0x1f6142.priority, function () {
              _0x2538ca(_0x2cf5b4);
            });
            return;
          }
        } else if (_0x13a0c7 === 3 && _0x2cf5b4.stateNode.current.memoizedState.isDehydrated) {
          _0x1f6142.blockedOn = _0x2cf5b4.tag === 3 ? _0x2cf5b4.stateNode.containerInfo : null;
          return;
        }
      }
    }
    _0x1f6142.blockedOn = null;
  }
  function _0x1c4850(_0x17dceb) {
    if (_0x17dceb.blockedOn !== null) {
      return false;
    }
    for (var _0x597806 = _0x17dceb.targetContainers; _0x597806.length > 0;) {
      var _0x26af00 = _0x534177(_0x17dceb.nativeEvent);
      if (_0x26af00 !== null) {
        if ((_0x597806 = _0x29babc(_0x26af00)) !== null) {
          _0x36ff85(_0x597806);
        }
        _0x17dceb.blockedOn = _0x26af00;
        return false;
      }
      var _0x1ef24e = new (_0x26af00 = _0x17dceb.nativeEvent).constructor(_0x26af00.type, _0x26af00);
      _0x3e3fd1 = _0x1ef24e;
      _0x26af00.target.dispatchEvent(_0x1ef24e);
      _0x3e3fd1 = null;
      _0x597806.shift();
    }
    return true;
  }
  function _0x2f9c6b(_0x30563a, _0x1285a6, _0x5a420d) {
    if (_0x1c4850(_0x30563a)) {
      _0x5a420d.delete(_0x1285a6);
    }
  }
  function _0x44de86() {
    _0x1caf3c = false;
    if (_0x1f1829 !== null && _0x1c4850(_0x1f1829)) {
      _0x1f1829 = null;
    }
    if (_0x58bcc1 !== null && _0x1c4850(_0x58bcc1)) {
      _0x58bcc1 = null;
    }
    if (_0xde667a !== null && _0x1c4850(_0xde667a)) {
      _0xde667a = null;
    }
    _0x184bea.forEach(_0x2f9c6b);
    _0x4c22ef.forEach(_0x2f9c6b);
  }
  function _0x102ce9(_0x781477, _0x88fdb7) {
    if (_0x781477.blockedOn === _0x88fdb7) {
      _0x781477.blockedOn = null;
      if (!_0x1caf3c) {
        _0x1caf3c = true;
        _0xbf7a82.unstable_scheduleCallback(_0xbf7a82.unstable_NormalPriority, _0x44de86);
      }
    }
  }
  var _0xa5beb9 = null;
  function _0x5d48fb(_0x5a23e0) {
    if (_0xa5beb9 !== _0x5a23e0) {
      _0xa5beb9 = _0x5a23e0;
      _0xbf7a82.unstable_scheduleCallback(_0xbf7a82.unstable_NormalPriority, function () {
        if (_0xa5beb9 === _0x5a23e0) {
          _0xa5beb9 = null;
        }
        for (var _0x151500 = 0; _0x151500 < _0x5a23e0.length; _0x151500 += 3) {
          var _0x1b8316 = _0x5a23e0[_0x151500];
          var _0x148e5b = _0x5a23e0[_0x151500 + 1];
          var _0x88e061 = _0x5a23e0[_0x151500 + 2];
          if (typeof _0x148e5b != "function") {
            if (_0x23da77(_0x148e5b || _0x1b8316) === null) {
              continue;
            }
            break;
          }
          var _0x17a040 = _0x29babc(_0x1b8316);
          if (_0x17a040 !== null) {
            _0x5a23e0.splice(_0x151500, 3);
            _0x151500 -= 3;
            _0x419b45(_0x17a040, {
              pending: true,
              data: _0x88e061,
              method: _0x1b8316.method,
              action: _0x148e5b
            }, _0x148e5b, _0x88e061);
          }
        }
      });
    }
  }
  function _0x38934a(_0x5e46ac) {
    function _0x25e717(_0x2a4211) {
      return _0x102ce9(_0x2a4211, _0x5e46ac);
    }
    if (_0x1f1829 !== null) {
      _0x102ce9(_0x1f1829, _0x5e46ac);
    }
    if (_0x58bcc1 !== null) {
      _0x102ce9(_0x58bcc1, _0x5e46ac);
    }
    if (_0xde667a !== null) {
      _0x102ce9(_0xde667a, _0x5e46ac);
    }
    _0x184bea.forEach(_0x25e717);
    _0x4c22ef.forEach(_0x25e717);
    for (var _0x75f60f = 0; _0x75f60f < _0x3972d1.length; _0x75f60f++) {
      var _0x1dd5a1 = _0x3972d1[_0x75f60f];
      if (_0x1dd5a1.blockedOn === _0x5e46ac) {
        _0x1dd5a1.blockedOn = null;
      }
    }
    while (_0x3972d1.length > 0 && (_0x75f60f = _0x3972d1[0]).blockedOn === null) {
      _0x460c87(_0x75f60f);
      if (_0x75f60f.blockedOn === null) {
        _0x3972d1.shift();
      }
    }
    if ((_0x75f60f = (_0x5e46ac.ownerDocument || _0x5e46ac).$$reactFormReplay) != null) {
      for (_0x1dd5a1 = 0; _0x1dd5a1 < _0x75f60f.length; _0x1dd5a1 += 3) {
        var _0xa9b0b7 = _0x75f60f[_0x1dd5a1];
        var _0x449b98 = _0x75f60f[_0x1dd5a1 + 1];
        var _0x1ff31c = _0xa9b0b7[_0x21a328] || null;
        if (typeof _0x449b98 == "function") {
          if (!_0x1ff31c) {
            _0x5d48fb(_0x75f60f);
          }
        } else if (_0x1ff31c) {
          var _0x4db747 = null;
          if (_0x449b98 && _0x449b98.hasAttribute("formAction")) {
            _0xa9b0b7 = _0x449b98;
            if (_0x1ff31c = _0x449b98[_0x21a328] || null) {
              _0x4db747 = _0x1ff31c.formAction;
            } else if (_0x23da77(_0xa9b0b7) !== null) {
              continue;
            }
          } else {
            _0x4db747 = _0x1ff31c.action;
          }
          if (typeof _0x4db747 == "function") {
            _0x75f60f[_0x1dd5a1 + 1] = _0x4db747;
          } else {
            _0x75f60f.splice(_0x1dd5a1, 3);
            _0x1dd5a1 -= 3;
          }
          _0x5d48fb(_0x75f60f);
        }
      }
    }
  }
  function _0x5db50f() {
    function _0x212890(_0x3b7f58) {
      if (_0x3b7f58.canIntercept && _0x3b7f58.info === "react-transition") {
        _0x3b7f58.intercept({
          handler: function () {
            return new Promise(function (_0x468f98) {
              return _0x2ea28d = _0x468f98;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
    }
    function _0x5ca546() {
      if (_0x2ea28d !== null) {
        _0x2ea28d();
        _0x2ea28d = null;
      }
      if (!_0x26686a) {
        setTimeout(_0x1de5a0, 20);
      }
    }
    function _0x1de5a0() {
      if (!_0x26686a && !navigation.transition) {
        var _0x29dea2 = navigation.currentEntry;
        if (_0x29dea2 && _0x29dea2.url != null) {
          navigation.navigate(_0x29dea2.url, {
            state: _0x29dea2.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
    }
    if (typeof navigation == "object") {
      var _0x26686a = false;
      var _0x2ea28d = null;
      navigation.addEventListener("navigate", _0x212890);
      navigation.addEventListener("navigatesuccess", _0x5ca546);
      navigation.addEventListener("navigateerror", _0x5ca546);
      setTimeout(_0x1de5a0, 100);
      return function () {
        _0x26686a = true;
        navigation.removeEventListener("navigate", _0x212890);
        navigation.removeEventListener("navigatesuccess", _0x5ca546);
        navigation.removeEventListener("navigateerror", _0x5ca546);
        if (_0x2ea28d !== null) {
          _0x2ea28d();
          _0x2ea28d = null;
        }
      };
    }
  }
  function _0x56dbb6(_0x41b43f) {
    this._internalRoot = _0x41b43f;
  }
  function _0x2b5c0a(_0x386eb3) {
    this._internalRoot = _0x386eb3;
  }
  _0x2b5c0a.prototype.render = _0x56dbb6.prototype.render = function (_0x3d8357) {
    var _0x1b1bed = this._internalRoot;
    if (_0x1b1bed === null) {
      throw Error(_0x34c7b9(409));
    }
    _0xfa9c48(_0x1b1bed.current, _0x17dc03(), _0x3d8357, _0x1b1bed, null, null);
  };
  _0x2b5c0a.prototype.unmount = _0x56dbb6.prototype.unmount = function () {
    var _0x50b3b5 = this._internalRoot;
    if (_0x50b3b5 !== null) {
      this._internalRoot = null;
      var _0x115eca = _0x50b3b5.containerInfo;
      _0xfa9c48(_0x50b3b5.current, 2, null, _0x50b3b5, null, null);
      _0x175c4b();
      _0x115eca[_0x193a0c] = null;
    }
  };
  _0x2b5c0a.prototype.unstable_scheduleHydration = function (_0x2f1cf3) {
    if (_0x2f1cf3) {
      var _0x214ca9 = _0x4d9678();
      _0x2f1cf3 = {
        blockedOn: null,
        target: _0x2f1cf3,
        priority: _0x214ca9
      };
      for (var _0x583c9c = 0; _0x583c9c < _0x3972d1.length && _0x214ca9 !== 0 && _0x214ca9 < _0x3972d1[_0x583c9c].priority; _0x583c9c++);
      _0x3972d1.splice(_0x583c9c, 0, _0x2f1cf3);
      if (_0x583c9c === 0) {
        _0x460c87(_0x2f1cf3);
      }
    }
  };
  var _0x54ba0c = _0x4703e3.version;
  if (_0x54ba0c !== "19.2.4") {
    throw Error(_0x34c7b9(527, _0x54ba0c, "19.2.4"));
  }
  _0x3e2aff.findDOMNode = function (_0x5f2693) {
    var _0x1022e3 = _0x5f2693._reactInternals;
    if (_0x1022e3 === undefined) {
      if (typeof _0x5f2693.render == "function") {
        throw Error(_0x34c7b9(188));
      }
      _0x5f2693 = Object.keys(_0x5f2693).join(",");
      throw Error(_0x34c7b9(268, _0x5f2693));
    }
    _0x5f2693 = function (_0x25095c) {
      var _0x1d5c4d = _0x25095c.alternate;
      if (!_0x1d5c4d) {
        if ((_0x1d5c4d = _0x4809b3(_0x25095c)) === null) {
          throw Error(_0x34c7b9(188));
        }
        if (_0x1d5c4d !== _0x25095c) {
          return null;
        } else {
          return _0x25095c;
        }
      }
      var _0x46fa47 = _0x25095c;
      var _0x3f6355 = _0x1d5c4d;
      while (true) {
        var _0x4728e2 = _0x46fa47.return;
        if (_0x4728e2 === null) {
          break;
        }
        var _0x1dc732 = _0x4728e2.alternate;
        if (_0x1dc732 === null) {
          if ((_0x3f6355 = _0x4728e2.return) !== null) {
            _0x46fa47 = _0x3f6355;
            continue;
          }
          break;
        }
        if (_0x4728e2.child === _0x1dc732.child) {
          for (_0x1dc732 = _0x4728e2.child; _0x1dc732;) {
            if (_0x1dc732 === _0x46fa47) {
              _0x59dbad(_0x4728e2);
              return _0x25095c;
            }
            if (_0x1dc732 === _0x3f6355) {
              _0x59dbad(_0x4728e2);
              return _0x1d5c4d;
            }
            _0x1dc732 = _0x1dc732.sibling;
          }
          throw Error(_0x34c7b9(188));
        }
        if (_0x46fa47.return !== _0x3f6355.return) {
          _0x46fa47 = _0x4728e2;
          _0x3f6355 = _0x1dc732;
        } else {
          var _0x37e4f0 = false;
          for (var _0x3fb3ec = _0x4728e2.child; _0x3fb3ec;) {
            if (_0x3fb3ec === _0x46fa47) {
              _0x37e4f0 = true;
              _0x46fa47 = _0x4728e2;
              _0x3f6355 = _0x1dc732;
              break;
            }
            if (_0x3fb3ec === _0x3f6355) {
              _0x37e4f0 = true;
              _0x3f6355 = _0x4728e2;
              _0x46fa47 = _0x1dc732;
              break;
            }
            _0x3fb3ec = _0x3fb3ec.sibling;
          }
          if (!_0x37e4f0) {
            for (_0x3fb3ec = _0x1dc732.child; _0x3fb3ec;) {
              if (_0x3fb3ec === _0x46fa47) {
                _0x37e4f0 = true;
                _0x46fa47 = _0x1dc732;
                _0x3f6355 = _0x4728e2;
                break;
              }
              if (_0x3fb3ec === _0x3f6355) {
                _0x37e4f0 = true;
                _0x3f6355 = _0x1dc732;
                _0x46fa47 = _0x4728e2;
                break;
              }
              _0x3fb3ec = _0x3fb3ec.sibling;
            }
            if (!_0x37e4f0) {
              throw Error(_0x34c7b9(189));
            }
          }
        }
        if (_0x46fa47.alternate !== _0x3f6355) {
          throw Error(_0x34c7b9(190));
        }
      }
      if (_0x46fa47.tag !== 3) {
        throw Error(_0x34c7b9(188));
      }
      if (_0x46fa47.stateNode.current === _0x46fa47) {
        return _0x25095c;
      } else {
        return _0x1d5c4d;
      }
    }(_0x1022e3);
    if ((_0x5f2693 = _0x5f2693 !== null ? _0x423152(_0x5f2693) : null) === null) {
      return null;
    } else {
      return _0x5f2693.stateNode;
    }
  };
  var _0x7e9bb2 = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _0x30149d,
    reconcilerVersion: "19.2.4"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var _0x3a8136 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_0x3a8136.isDisabled && _0x3a8136.supportsFiber) {
      try {
        _0x90d840 = _0x3a8136.inject(_0x7e9bb2);
        _0x3be8ed = _0x3a8136;
      } catch (_0x1cb8c0) {}
    }
  }
  _0x137b35.createRoot = function (_0x1a754e, _0x34e4ad) {
    if (!(_0x2dd4c3 = _0x1a754e) || _0x2dd4c3.nodeType !== 1 && _0x2dd4c3.nodeType !== 9 && _0x2dd4c3.nodeType !== 11) {
      throw Error(_0x34c7b9(299));
    }
    var _0x2dd4c3;
    var _0x3bc62c = false;
    var _0x527ebd = "";
    var _0x4b5d65 = _0x76e0a4;
    var _0x36fbe2 = _0x25645;
    var _0x4ed7b9 = _0xb68e8e;
    if (_0x34e4ad != null) {
      if (_0x34e4ad.unstable_strictMode === true) {
        _0x3bc62c = true;
      }
      if (_0x34e4ad.identifierPrefix !== undefined) {
        _0x527ebd = _0x34e4ad.identifierPrefix;
      }
      if (_0x34e4ad.onUncaughtError !== undefined) {
        _0x4b5d65 = _0x34e4ad.onUncaughtError;
      }
      if (_0x34e4ad.onCaughtError !== undefined) {
        _0x36fbe2 = _0x34e4ad.onCaughtError;
      }
      if (_0x34e4ad.onRecoverableError !== undefined) {
        _0x4ed7b9 = _0x34e4ad.onRecoverableError;
      }
    }
    _0x34e4ad = function (_0x5ea955, _0x407304, _0x4d6f15, _0x68e599, _0x5469ec, _0x5ebe5a, _0x3a2132, _0x399123, _0x38d805, _0x8b69b2, _0x4c1d7e, _0x257cb8) {
      _0x5ea955 = new _0x218073(_0x5ea955, _0x407304, _0x4d6f15, _0x3a2132, _0x38d805, _0x8b69b2, _0x4c1d7e, _0x257cb8, null);
      _0x407304 = 1;
      if (_0x5ebe5a === true) {
        _0x407304 |= 24;
      }
      _0x5ebe5a = _0x147223(3, null, null, _0x407304);
      _0x5ea955.current = _0x5ebe5a;
      _0x5ebe5a.stateNode = _0x5ea955;
      (_0x407304 = _0x226727()).refCount++;
      _0x5ea955.pooledCache = _0x407304;
      _0x407304.refCount++;
      _0x5ebe5a.memoizedState = {
        element: null,
        isDehydrated: _0x4d6f15,
        cache: _0x407304
      };
      _0x2d0933(_0x5ebe5a);
      return _0x5ea955;
    }(_0x1a754e, 1, false, 0, 0, _0x3bc62c, _0x527ebd, 0, _0x4b5d65, _0x36fbe2, _0x4ed7b9, _0x5db50f);
    _0x1a754e[_0x193a0c] = _0x34e4ad.current;
    _0x458f1e(_0x1a754e);
    return new _0x56dbb6(_0x34e4ad);
  };
});
var g = a((_0x2d1a4e, _0x3e8831) => {
  (function _0x57db7b() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0x57db7b);
      } catch (_0x101d8c) {
        console.error(_0x101d8c);
      }
    }
  })();
  _0x3e8831.exports = h();
});
var m = u();
var v = g();
var b = a((_0xc6d143, _0x44498f) => {
  _0x44498f.exports = function () {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  };
});
var y = a(_0x46af90 => {
  var _0x28a8a3;
  var _0x41cc80 = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
  _0x46af90.getSymbolSize = function (_0x2d084b) {
    if (!_0x2d084b) {
      throw new Error("\"version\" cannot be null or undefined");
    }
    if (_0x2d084b < 1 || _0x2d084b > 40) {
      throw new Error("\"version\" should be in range from 1 to 40");
    }
    return _0x2d084b * 4 + 17;
  };
  _0x46af90.getSymbolTotalCodewords = function (_0x39ee2f) {
    return _0x41cc80[_0x39ee2f];
  };
  _0x46af90.getBCHDigit = function (_0x2fb17c) {
    let _0x11fc47 = 0;
    while (_0x2fb17c !== 0) {
      _0x11fc47++;
      _0x2fb17c >>>= 1;
    }
    return _0x11fc47;
  };
  _0x46af90.setToSJISFunction = function (_0x1f5baa) {
    if (typeof _0x1f5baa != "function") {
      throw new Error("\"toSJISFunc\" is not a valid function.");
    }
    _0x28a8a3 = _0x1f5baa;
  };
  _0x46af90.isKanjiModeEnabled = function () {
    return _0x28a8a3 !== undefined;
  };
  _0x46af90.toSJIS = function (_0x3b97d8) {
    return _0x28a8a3(_0x3b97d8);
  };
});
var w = a(_0x5ef82f => {
  _0x5ef82f.L = {
    bit: 1
  };
  _0x5ef82f.M = {
    bit: 0
  };
  _0x5ef82f.Q = {
    bit: 3
  };
  _0x5ef82f.H = {
    bit: 2
  };
  _0x5ef82f.isValid = function (_0x303623) {
    return _0x303623 && _0x303623.bit !== undefined && _0x303623.bit >= 0 && _0x303623.bit < 4;
  };
  _0x5ef82f.from = function (_0x449cef, _0x52d1e3) {
    if (_0x5ef82f.isValid(_0x449cef)) {
      return _0x449cef;
    }
    try {
      return function (_0x3526ae) {
        if (typeof _0x3526ae != "string") {
          throw new Error("Param is not a string");
        }
        switch (_0x3526ae.toLowerCase()) {
          case "l":
          case "low":
            return _0x5ef82f.L;
          case "m":
          case "medium":
            return _0x5ef82f.M;
          case "q":
          case "quartile":
            return _0x5ef82f.Q;
          case "h":
          case "high":
            return _0x5ef82f.H;
          default:
            throw new Error("Unknown EC Level: " + _0x3526ae);
        }
      }(_0x449cef);
    } catch (_0x2cd8f5) {
      return _0x52d1e3;
    }
  };
});
var k = a((_0x13e76f, _0x1a7123) => {
  function _0x20ca1e() {
    this.buffer = [];
    this.length = 0;
  }
  _0x20ca1e.prototype = {
    get: function (_0x164150) {
      const _0x5c98a4 = Math.floor(_0x164150 / 8);
      return (this.buffer[_0x5c98a4] >>> 7 - _0x164150 % 8 & 1) == 1;
    },
    put: function (_0x2a55a4, _0x1c3648) {
      for (let _0x276636 = 0; _0x276636 < _0x1c3648; _0x276636++) {
        this.putBit((_0x2a55a4 >>> _0x1c3648 - _0x276636 - 1 & 1) == 1);
      }
    },
    getLengthInBits: function () {
      return this.length;
    },
    putBit: function (_0xcea97) {
      const _0x19ad78 = Math.floor(this.length / 8);
      if (this.buffer.length <= _0x19ad78) {
        this.buffer.push(0);
      }
      if (_0xcea97) {
        this.buffer[_0x19ad78] |= 128 >>> this.length % 8;
      }
      this.length++;
    }
  };
  _0x1a7123.exports = _0x20ca1e;
});
var x = a((_0xd4991a, _0x189fd8) => {
  function _0x4073f8(_0x116d97) {
    if (!_0x116d97 || _0x116d97 < 1) {
      throw new Error("BitMatrix size must be defined and greater than 0");
    }
    this.size = _0x116d97;
    this.data = new Uint8Array(_0x116d97 * _0x116d97);
    this.reservedBit = new Uint8Array(_0x116d97 * _0x116d97);
  }
  _0x4073f8.prototype.set = function (_0x5d14d1, _0x2e067b, _0x1f329a, _0x587cc0) {
    const _0x7c35bd = _0x5d14d1 * this.size + _0x2e067b;
    this.data[_0x7c35bd] = _0x1f329a;
    if (_0x587cc0) {
      this.reservedBit[_0x7c35bd] = true;
    }
  };
  _0x4073f8.prototype.get = function (_0x4eba2c, _0x16909f) {
    return this.data[_0x4eba2c * this.size + _0x16909f];
  };
  _0x4073f8.prototype.xor = function (_0x6b88a7, _0x4de86f, _0x2114ed) {
    this.data[_0x6b88a7 * this.size + _0x4de86f] ^= _0x2114ed;
  };
  _0x4073f8.prototype.isReserved = function (_0x47b078, _0x149807) {
    return this.reservedBit[_0x47b078 * this.size + _0x149807];
  };
  _0x189fd8.exports = _0x4073f8;
});
var S = a(_0x2a5a26 => {
  var _0xcd047a = y().getSymbolSize;
  _0x2a5a26.getRowColCoords = function (_0x55648e) {
    if (_0x55648e === 1) {
      return [];
    }
    const _0x444c37 = Math.floor(_0x55648e / 7) + 2;
    const _0x5c43b7 = _0xcd047a(_0x55648e);
    const _0x9de7f5 = _0x5c43b7 === 145 ? 26 : Math.ceil((_0x5c43b7 - 13) / (_0x444c37 * 2 - 2)) * 2;
    const _0x17a2eb = [_0x5c43b7 - 7];
    for (let _0x1acffc = 1; _0x1acffc < _0x444c37 - 1; _0x1acffc++) {
      _0x17a2eb[_0x1acffc] = _0x17a2eb[_0x1acffc - 1] - _0x9de7f5;
    }
    _0x17a2eb.push(6);
    return _0x17a2eb.reverse();
  };
  _0x2a5a26.getPositions = function (_0x4e59b1) {
    const _0x186f86 = [];
    const _0xa95430 = _0x2a5a26.getRowColCoords(_0x4e59b1);
    const _0x3a98a4 = _0xa95430.length;
    for (let _0x41852a = 0; _0x41852a < _0x3a98a4; _0x41852a++) {
      for (let _0x1d64d8 = 0; _0x1d64d8 < _0x3a98a4; _0x1d64d8++) {
        if ((_0x41852a !== 0 || _0x1d64d8 !== 0) && (_0x41852a !== 0 || _0x1d64d8 !== _0x3a98a4 - 1) && (_0x41852a !== _0x3a98a4 - 1 || _0x1d64d8 !== 0)) {
          _0x186f86.push([_0xa95430[_0x41852a], _0xa95430[_0x1d64d8]]);
        }
      }
    }
    return _0x186f86;
  };
});
var C = a(_0x472a64 => {
  var _0x2c2d48 = y().getSymbolSize;
  _0x472a64.getPositions = function (_0x2b62b0) {
    const _0x195ed5 = _0x2c2d48(_0x2b62b0);
    return [[0, 0], [_0x195ed5 - 7, 0], [0, _0x195ed5 - 7]];
  };
});
var E = a(_0x39c110 => {
  _0x39c110.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  function _0x8715f0(_0x4252a0, _0xadbf10, _0x5ebc61) {
    switch (_0x4252a0) {
      case _0x39c110.Patterns.PATTERN000:
        return (_0xadbf10 + _0x5ebc61) % 2 == 0;
      case _0x39c110.Patterns.PATTERN001:
        return _0xadbf10 % 2 == 0;
      case _0x39c110.Patterns.PATTERN010:
        return _0x5ebc61 % 3 == 0;
      case _0x39c110.Patterns.PATTERN011:
        return (_0xadbf10 + _0x5ebc61) % 3 == 0;
      case _0x39c110.Patterns.PATTERN100:
        return (Math.floor(_0xadbf10 / 2) + Math.floor(_0x5ebc61 / 3)) % 2 == 0;
      case _0x39c110.Patterns.PATTERN101:
        return _0xadbf10 * _0x5ebc61 % 2 + _0xadbf10 * _0x5ebc61 % 3 == 0;
      case _0x39c110.Patterns.PATTERN110:
        return (_0xadbf10 * _0x5ebc61 % 2 + _0xadbf10 * _0x5ebc61 % 3) % 2 == 0;
      case _0x39c110.Patterns.PATTERN111:
        return (_0xadbf10 * _0x5ebc61 % 3 + (_0xadbf10 + _0x5ebc61) % 2) % 2 == 0;
      default:
        throw new Error("bad maskPattern:" + _0x4252a0);
    }
  }
  _0x39c110.isValid = function (_0x58cf46) {
    return _0x58cf46 != null && _0x58cf46 !== "" && !isNaN(_0x58cf46) && _0x58cf46 >= 0 && _0x58cf46 <= 7;
  };
  _0x39c110.from = function (_0x68e463) {
    if (_0x39c110.isValid(_0x68e463)) {
      return parseInt(_0x68e463, 10);
    } else {
      return undefined;
    }
  };
  _0x39c110.getPenaltyN1 = function (_0x5aa3e3) {
    const _0x3f1d5f = _0x5aa3e3.size;
    let _0x823a27 = 0;
    let _0x485485 = 0;
    let _0x19c251 = 0;
    let _0x40c769 = null;
    let _0x4f040d = null;
    for (let _0x5f3eb0 = 0; _0x5f3eb0 < _0x3f1d5f; _0x5f3eb0++) {
      _0x485485 = _0x19c251 = 0;
      _0x40c769 = _0x4f040d = null;
      for (let _0x2b0888 = 0; _0x2b0888 < _0x3f1d5f; _0x2b0888++) {
        let _0x103dbb = _0x5aa3e3.get(_0x5f3eb0, _0x2b0888);
        if (_0x103dbb === _0x40c769) {
          _0x485485++;
        } else {
          if (_0x485485 >= 5) {
            _0x823a27 += _0x485485 - 5 + 3;
          }
          _0x40c769 = _0x103dbb;
          _0x485485 = 1;
        }
        _0x103dbb = _0x5aa3e3.get(_0x2b0888, _0x5f3eb0);
        if (_0x103dbb === _0x4f040d) {
          _0x19c251++;
        } else {
          if (_0x19c251 >= 5) {
            _0x823a27 += _0x19c251 - 5 + 3;
          }
          _0x4f040d = _0x103dbb;
          _0x19c251 = 1;
        }
      }
      if (_0x485485 >= 5) {
        _0x823a27 += _0x485485 - 5 + 3;
      }
      if (_0x19c251 >= 5) {
        _0x823a27 += _0x19c251 - 5 + 3;
      }
    }
    return _0x823a27;
  };
  _0x39c110.getPenaltyN2 = function (_0x38248f) {
    const _0x6b061c = _0x38248f.size;
    let _0x136d07 = 0;
    for (let _0x32d019 = 0; _0x32d019 < _0x6b061c - 1; _0x32d019++) {
      for (let _0x1b0e23 = 0; _0x1b0e23 < _0x6b061c - 1; _0x1b0e23++) {
        const _0x3c9894 = _0x38248f.get(_0x32d019, _0x1b0e23) + _0x38248f.get(_0x32d019, _0x1b0e23 + 1) + _0x38248f.get(_0x32d019 + 1, _0x1b0e23) + _0x38248f.get(_0x32d019 + 1, _0x1b0e23 + 1);
        if (_0x3c9894 === 4 || _0x3c9894 === 0) {
          _0x136d07++;
        }
      }
    }
    return _0x136d07 * 3;
  };
  _0x39c110.getPenaltyN3 = function (_0x24b726) {
    const _0x26fe14 = _0x24b726.size;
    let _0x389416 = 0;
    let _0x15965d = 0;
    let _0x2d84c7 = 0;
    for (let _0x234db0 = 0; _0x234db0 < _0x26fe14; _0x234db0++) {
      _0x15965d = _0x2d84c7 = 0;
      for (let _0x3c484b = 0; _0x3c484b < _0x26fe14; _0x3c484b++) {
        _0x15965d = _0x15965d << 1 & 2047 | _0x24b726.get(_0x234db0, _0x3c484b);
        if (_0x3c484b >= 10 && (_0x15965d === 1488 || _0x15965d === 93)) {
          _0x389416++;
        }
        _0x2d84c7 = _0x2d84c7 << 1 & 2047 | _0x24b726.get(_0x3c484b, _0x234db0);
        if (_0x3c484b >= 10 && (_0x2d84c7 === 1488 || _0x2d84c7 === 93)) {
          _0x389416++;
        }
      }
    }
    return _0x389416 * 40;
  };
  _0x39c110.getPenaltyN4 = function (_0x125e19) {
    let _0x25643b = 0;
    const _0x2c36bc = _0x125e19.data.length;
    for (let _0x1f1ff6 = 0; _0x1f1ff6 < _0x2c36bc; _0x1f1ff6++) {
      _0x25643b += _0x125e19.data[_0x1f1ff6];
    }
    return Math.abs(Math.ceil(_0x25643b * 100 / _0x2c36bc / 5) - 10) * 10;
  };
  _0x39c110.applyMask = function (_0x47e68a, _0x54f33f) {
    const _0x1ab03e = _0x54f33f.size;
    for (let _0x3d37ca = 0; _0x3d37ca < _0x1ab03e; _0x3d37ca++) {
      for (let _0x4b5a7c = 0; _0x4b5a7c < _0x1ab03e; _0x4b5a7c++) {
        if (!_0x54f33f.isReserved(_0x4b5a7c, _0x3d37ca)) {
          _0x54f33f.xor(_0x4b5a7c, _0x3d37ca, _0x8715f0(_0x47e68a, _0x4b5a7c, _0x3d37ca));
        }
      }
    }
  };
  _0x39c110.getBestMask = function (_0x32a380, _0x3ecc4c) {
    const _0x50fc5c = Object.keys(_0x39c110.Patterns).length;
    let _0x378b5a = 0;
    let _0x2173fe = Infinity;
    for (let _0x2ae365 = 0; _0x2ae365 < _0x50fc5c; _0x2ae365++) {
      _0x3ecc4c(_0x2ae365);
      _0x39c110.applyMask(_0x2ae365, _0x32a380);
      const _0x360b6a = _0x39c110.getPenaltyN1(_0x32a380) + _0x39c110.getPenaltyN2(_0x32a380) + _0x39c110.getPenaltyN3(_0x32a380) + _0x39c110.getPenaltyN4(_0x32a380);
      _0x39c110.applyMask(_0x2ae365, _0x32a380);
      if (_0x360b6a < _0x2173fe) {
        _0x2173fe = _0x360b6a;
        _0x378b5a = _0x2ae365;
      }
    }
    return _0x378b5a;
  };
});
var T = a(_0x3fbb57 => {
  var _0x39f3d1 = w();
  var _0x40f959 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81];
  var _0x513859 = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
  _0x3fbb57.getBlocksCount = function (_0x5dd4da, _0x354c47) {
    switch (_0x354c47) {
      case _0x39f3d1.L:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 0];
      case _0x39f3d1.M:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 1];
      case _0x39f3d1.Q:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 2];
      case _0x39f3d1.H:
        return _0x40f959[(_0x5dd4da - 1) * 4 + 3];
      default:
        return;
    }
  };
  _0x3fbb57.getTotalCodewordsCount = function (_0x1e16b3, _0x484c9d) {
    switch (_0x484c9d) {
      case _0x39f3d1.L:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 0];
      case _0x39f3d1.M:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 1];
      case _0x39f3d1.Q:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 2];
      case _0x39f3d1.H:
        return _0x513859[(_0x1e16b3 - 1) * 4 + 3];
      default:
        return;
    }
  };
});
var P = a(_0x15d82f => {
  var _0x5a1feb = new Uint8Array(512);
  var _0x38496b = new Uint8Array(256);
  (function () {
    let _0x4924f7 = 1;
    for (let _0x388b67 = 0; _0x388b67 < 255; _0x388b67++) {
      _0x5a1feb[_0x388b67] = _0x4924f7;
      _0x38496b[_0x4924f7] = _0x388b67;
      _0x4924f7 <<= 1;
      if (_0x4924f7 & 256) {
        _0x4924f7 ^= 285;
      }
    }
    for (let _0x1c00dd = 255; _0x1c00dd < 512; _0x1c00dd++) {
      _0x5a1feb[_0x1c00dd] = _0x5a1feb[_0x1c00dd - 255];
    }
  })();
  _0x15d82f.log = function (_0x157825) {
    if (_0x157825 < 1) {
      throw new Error("log(" + _0x157825 + ")");
    }
    return _0x38496b[_0x157825];
  };
  _0x15d82f.exp = function (_0x253215) {
    return _0x5a1feb[_0x253215];
  };
  _0x15d82f.mul = function (_0x48887a, _0x1a3b3f) {
    if (_0x48887a === 0 || _0x1a3b3f === 0) {
      return 0;
    } else {
      return _0x5a1feb[_0x38496b[_0x48887a] + _0x38496b[_0x1a3b3f]];
    }
  };
});
var z = a(_0x32e467 => {
  var _0x599b20 = P();
  _0x32e467.mul = function (_0x23599a, _0x4ec529) {
    const _0x5161ca = new Uint8Array(_0x23599a.length + _0x4ec529.length - 1);
    for (let _0x1c7986 = 0; _0x1c7986 < _0x23599a.length; _0x1c7986++) {
      for (let _0x3f9603 = 0; _0x3f9603 < _0x4ec529.length; _0x3f9603++) {
        _0x5161ca[_0x1c7986 + _0x3f9603] ^= _0x599b20.mul(_0x23599a[_0x1c7986], _0x4ec529[_0x3f9603]);
      }
    }
    return _0x5161ca;
  };
  _0x32e467.mod = function (_0xc12e76, _0x1ec746) {
    let _0x3d74ff = new Uint8Array(_0xc12e76);
    while (_0x3d74ff.length - _0x1ec746.length >= 0) {
      const _0x5b7d70 = _0x3d74ff[0];
      for (let _0x49afba = 0; _0x49afba < _0x1ec746.length; _0x49afba++) {
        _0x3d74ff[_0x49afba] ^= _0x599b20.mul(_0x1ec746[_0x49afba], _0x5b7d70);
      }
      let _0x569e10 = 0;
      while (_0x569e10 < _0x3d74ff.length && _0x3d74ff[_0x569e10] === 0) {
        _0x569e10++;
      }
      _0x3d74ff = _0x3d74ff.slice(_0x569e10);
    }
    return _0x3d74ff;
  };
  _0x32e467.generateECPolynomial = function (_0x3b1ff0) {
    let _0x480a4f = new Uint8Array([1]);
    for (let _0x10419b = 0; _0x10419b < _0x3b1ff0; _0x10419b++) {
      _0x480a4f = _0x32e467.mul(_0x480a4f, new Uint8Array([1, _0x599b20.exp(_0x10419b)]));
    }
    return _0x480a4f;
  };
});
var M = a((_0x35764d, _0x31efbe) => {
  var _0x2956a0 = z();
  function _0x7fd416(_0x2c1b39) {
    this.genPoly = undefined;
    this.degree = _0x2c1b39;
    if (this.degree) {
      this.initialize(this.degree);
    }
  }
  _0x7fd416.prototype.initialize = function (_0xc8d6d2) {
    this.degree = _0xc8d6d2;
    this.genPoly = _0x2956a0.generateECPolynomial(this.degree);
  };
  _0x7fd416.prototype.encode = function (_0xc731f1) {
    if (!this.genPoly) {
      throw new Error("Encoder not initialized");
    }
    const _0x435b58 = new Uint8Array(_0xc731f1.length + this.degree);
    _0x435b58.set(_0xc731f1);
    const _0x5040ef = _0x2956a0.mod(_0x435b58, this.genPoly);
    const _0x2f8fc8 = this.degree - _0x5040ef.length;
    if (_0x2f8fc8 > 0) {
      const _0x6f4d2e = new Uint8Array(this.degree);
      _0x6f4d2e.set(_0x5040ef, _0x2f8fc8);
      return _0x6f4d2e;
    }
    return _0x5040ef;
  };
  _0x31efbe.exports = _0x7fd416;
});
var L = a(_0x14d153 => {
  _0x14d153.isValid = function (_0x35c167) {
    return !isNaN(_0x35c167) && _0x35c167 >= 1 && _0x35c167 <= 40;
  };
});
var A = a(_0x18e1b4 => {
  var _0x4e8462 = "[0-9]+";
  var _0x4135e7 = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  var _0x344c02 = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (_0x4135e7 = _0x4135e7.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
  _0x18e1b4.KANJI = new RegExp(_0x4135e7, "g");
  _0x18e1b4.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
  _0x18e1b4.BYTE = new RegExp(_0x344c02, "g");
  _0x18e1b4.NUMERIC = new RegExp(_0x4e8462, "g");
  _0x18e1b4.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
  var _0x2c493e = new RegExp("^" + _0x4135e7 + "$");
  var _0x2b89ad = new RegExp("^" + _0x4e8462 + "$");
  var _0x360d14 = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  _0x18e1b4.testKanji = function (_0x1c3d9d) {
    return _0x2c493e.test(_0x1c3d9d);
  };
  _0x18e1b4.testNumeric = function (_0x26a73f) {
    return _0x2b89ad.test(_0x26a73f);
  };
  _0x18e1b4.testAlphanumeric = function (_0x38898e) {
    return _0x360d14.test(_0x38898e);
  };
});
var N = a(_0x562667 => {
  var _0xd57ee8 = L();
  var _0x5f55f5 = A();
  _0x562667.NUMERIC = {
    id: "Numeric",
    bit: 1,
    ccBits: [10, 12, 14]
  };
  _0x562667.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 2,
    ccBits: [9, 11, 13]
  };
  _0x562667.BYTE = {
    id: "Byte",
    bit: 4,
    ccBits: [8, 16, 16]
  };
  _0x562667.KANJI = {
    id: "Kanji",
    bit: 8,
    ccBits: [8, 10, 12]
  };
  _0x562667.MIXED = {
    bit: -1
  };
  _0x562667.getCharCountIndicator = function (_0x3ef8a, _0x5926d8) {
    if (!_0x3ef8a.ccBits) {
      throw new Error("Invalid mode: " + _0x3ef8a);
    }
    if (!_0xd57ee8.isValid(_0x5926d8)) {
      throw new Error("Invalid version: " + _0x5926d8);
    }
    if (_0x5926d8 >= 1 && _0x5926d8 < 10) {
      return _0x3ef8a.ccBits[0];
    } else if (_0x5926d8 < 27) {
      return _0x3ef8a.ccBits[1];
    } else {
      return _0x3ef8a.ccBits[2];
    }
  };
  _0x562667.getBestModeForData = function (_0x43c3ba) {
    if (_0x5f55f5.testNumeric(_0x43c3ba)) {
      return _0x562667.NUMERIC;
    } else if (_0x5f55f5.testAlphanumeric(_0x43c3ba)) {
      return _0x562667.ALPHANUMERIC;
    } else if (_0x5f55f5.testKanji(_0x43c3ba)) {
      return _0x562667.KANJI;
    } else {
      return _0x562667.BYTE;
    }
  };
  _0x562667.toString = function (_0x1474a3) {
    if (_0x1474a3 && _0x1474a3.id) {
      return _0x1474a3.id;
    }
    throw new Error("Invalid mode");
  };
  _0x562667.isValid = function (_0x188fb0) {
    return _0x188fb0 && _0x188fb0.bit && _0x188fb0.ccBits;
  };
  _0x562667.from = function (_0x3931f0, _0x5c8a0) {
    if (_0x562667.isValid(_0x3931f0)) {
      return _0x3931f0;
    }
    try {
      return function (_0x39250d) {
        if (typeof _0x39250d != "string") {
          throw new Error("Param is not a string");
        }
        switch (_0x39250d.toLowerCase()) {
          case "numeric":
            return _0x562667.NUMERIC;
          case "alphanumeric":
            return _0x562667.ALPHANUMERIC;
          case "kanji":
            return _0x562667.KANJI;
          case "byte":
            return _0x562667.BYTE;
          default:
            throw new Error("Unknown mode: " + _0x39250d);
        }
      }(_0x3931f0);
    } catch (_0xf908ae) {
      return _0x5c8a0;
    }
  };
});
var R = a(_0x122e41 => {
  var _0x46818e = y();
  var _0x5dbd90 = T();
  var _0x5ad733 = w();
  var _0x277ef4 = N();
  var _0x1f3e6e = L();
  var _0x497351 = _0x46818e.getBCHDigit(7973);
  function _0x4e6a21(_0x19a300, _0x16e7d4) {
    return _0x277ef4.getCharCountIndicator(_0x19a300, _0x16e7d4) + 4;
  }
  function _0x2bed39(_0x2ccae5, _0x31f582) {
    let _0x4b39eb = 0;
    _0x2ccae5.forEach(function (_0x29c388) {
      const _0x278f20 = _0x4e6a21(_0x29c388.mode, _0x31f582);
      _0x4b39eb += _0x278f20 + _0x29c388.getBitsLength();
    });
    return _0x4b39eb;
  }
  _0x122e41.from = function (_0xc6962c, _0x5085e1) {
    if (_0x1f3e6e.isValid(_0xc6962c)) {
      return parseInt(_0xc6962c, 10);
    } else {
      return _0x5085e1;
    }
  };
  _0x122e41.getCapacity = function (_0xe9383e, _0x4dd9c0, _0x4408f3) {
    if (!_0x1f3e6e.isValid(_0xe9383e)) {
      throw new Error("Invalid QR Code version");
    }
    if (_0x4408f3 === undefined) {
      _0x4408f3 = _0x277ef4.BYTE;
    }
    const _0x343265 = (_0x46818e.getSymbolTotalCodewords(_0xe9383e) - _0x5dbd90.getTotalCodewordsCount(_0xe9383e, _0x4dd9c0)) * 8;
    if (_0x4408f3 === _0x277ef4.MIXED) {
      return _0x343265;
    }
    const _0x330008 = _0x343265 - _0x4e6a21(_0x4408f3, _0xe9383e);
    switch (_0x4408f3) {
      case _0x277ef4.NUMERIC:
        return Math.floor(_0x330008 / 10 * 3);
      case _0x277ef4.ALPHANUMERIC:
        return Math.floor(_0x330008 / 11 * 2);
      case _0x277ef4.KANJI:
        return Math.floor(_0x330008 / 13);
      case _0x277ef4.BYTE:
      default:
        return Math.floor(_0x330008 / 8);
    }
  };
  _0x122e41.getBestVersionForData = function (_0x14b8e2, _0x55ce1e) {
    let _0x88437c;
    const _0x49635e = _0x5ad733.from(_0x55ce1e, _0x5ad733.M);
    if (Array.isArray(_0x14b8e2)) {
      if (_0x14b8e2.length > 1) {
        return function (_0xb84429, _0x3b9ebc) {
          for (let _0x23cc09 = 1; _0x23cc09 <= 40; _0x23cc09++) {
            if (_0x2bed39(_0xb84429, _0x23cc09) <= _0x122e41.getCapacity(_0x23cc09, _0x3b9ebc, _0x277ef4.MIXED)) {
              return _0x23cc09;
            }
          }
        }(_0x14b8e2, _0x49635e);
      }
      if (_0x14b8e2.length === 0) {
        return 1;
      }
      _0x88437c = _0x14b8e2[0];
    } else {
      _0x88437c = _0x14b8e2;
    }
    return function (_0x402031, _0x1adeb4, _0x42b24e) {
      for (let _0x101111 = 1; _0x101111 <= 40; _0x101111++) {
        if (_0x1adeb4 <= _0x122e41.getCapacity(_0x101111, _0x42b24e, _0x402031)) {
          return _0x101111;
        }
      }
    }(_0x88437c.mode, _0x88437c.getLength(), _0x49635e);
  };
  _0x122e41.getEncodedBits = function (_0x26a538) {
    if (!_0x1f3e6e.isValid(_0x26a538) || _0x26a538 < 7) {
      throw new Error("Invalid QR Code version");
    }
    let _0x15e0b6 = _0x26a538 << 12;
    while (_0x46818e.getBCHDigit(_0x15e0b6) - _0x497351 >= 0) {
      _0x15e0b6 ^= 7973 << _0x46818e.getBCHDigit(_0x15e0b6) - _0x497351;
    }
    return _0x26a538 << 12 | _0x15e0b6;
  };
});
var I = a(_0x2528a7 => {
  var _0x4f8342 = y();
  var _0x554ef2 = _0x4f8342.getBCHDigit(1335);
  _0x2528a7.getEncodedBits = function (_0x297898, _0x528adc) {
    const _0x2be09d = _0x297898.bit << 3 | _0x528adc;
    let _0x355ed0 = _0x2be09d << 10;
    while (_0x4f8342.getBCHDigit(_0x355ed0) - _0x554ef2 >= 0) {
      _0x355ed0 ^= 1335 << _0x4f8342.getBCHDigit(_0x355ed0) - _0x554ef2;
    }
    return (_0x2be09d << 10 | _0x355ed0) ^ 21522;
  };
});
var D = a((_0x35b3db, _0x181c08) => {
  var _0x4dd97c = N();
  function _0x21a416(_0x168041) {
    this.mode = _0x4dd97c.NUMERIC;
    this.data = _0x168041.toString();
  }
  _0x21a416.getBitsLength = function (_0x3e1aa1) {
    return Math.floor(_0x3e1aa1 / 3) * 10 + (_0x3e1aa1 % 3 ? _0x3e1aa1 % 3 * 3 + 1 : 0);
  };
  _0x21a416.prototype.getLength = function () {
    return this.data.length;
  };
  _0x21a416.prototype.getBitsLength = function () {
    return _0x21a416.getBitsLength(this.data.length);
  };
  _0x21a416.prototype.write = function (_0x277fca) {
    let _0x502bc9;
    let _0x5bbd5c;
    let _0x2e4bfe;
    for (_0x502bc9 = 0; _0x502bc9 + 3 <= this.data.length; _0x502bc9 += 3) {
      _0x5bbd5c = this.data.substr(_0x502bc9, 3);
      _0x2e4bfe = parseInt(_0x5bbd5c, 10);
      _0x277fca.put(_0x2e4bfe, 10);
    }
    const _0x1bb13c = this.data.length - _0x502bc9;
    if (_0x1bb13c > 0) {
      _0x5bbd5c = this.data.substr(_0x502bc9);
      _0x2e4bfe = parseInt(_0x5bbd5c, 10);
      _0x277fca.put(_0x2e4bfe, _0x1bb13c * 3 + 1);
    }
  };
  _0x181c08.exports = _0x21a416;
});
var _ = a((_0xc6af7f, _0x1b668a) => {
  var _0x45eca6 = N();
  var _0x1effda = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
  function _0x1758fb(_0x731fdd) {
    this.mode = _0x45eca6.ALPHANUMERIC;
    this.data = _0x731fdd;
  }
  _0x1758fb.getBitsLength = function (_0xc33764) {
    return Math.floor(_0xc33764 / 2) * 11 + _0xc33764 % 2 * 6;
  };
  _0x1758fb.prototype.getLength = function () {
    return this.data.length;
  };
  _0x1758fb.prototype.getBitsLength = function () {
    return _0x1758fb.getBitsLength(this.data.length);
  };
  _0x1758fb.prototype.write = function (_0x4dcf8e) {
    let _0x1e2de9;
    for (_0x1e2de9 = 0; _0x1e2de9 + 2 <= this.data.length; _0x1e2de9 += 2) {
      let _0x2e017f = _0x1effda.indexOf(this.data[_0x1e2de9]) * 45;
      _0x2e017f += _0x1effda.indexOf(this.data[_0x1e2de9 + 1]);
      _0x4dcf8e.put(_0x2e017f, 11);
    }
    if (this.data.length % 2) {
      _0x4dcf8e.put(_0x1effda.indexOf(this.data[_0x1e2de9]), 6);
    }
  };
  _0x1b668a.exports = _0x1758fb;
});
var B = a((_0x588917, _0x4a6a17) => {
  var _0x24b049 = N();
  function _0x38ac7d(_0x4a74e1) {
    this.mode = _0x24b049.BYTE;
    this.data = typeof _0x4a74e1 == "string" ? new TextEncoder().encode(_0x4a74e1) : new Uint8Array(_0x4a74e1);
  }
  _0x38ac7d.getBitsLength = function (_0x4ae0ba) {
    return _0x4ae0ba * 8;
  };
  _0x38ac7d.prototype.getLength = function () {
    return this.data.length;
  };
  _0x38ac7d.prototype.getBitsLength = function () {
    return _0x38ac7d.getBitsLength(this.data.length);
  };
  _0x38ac7d.prototype.write = function (_0x1180fb) {
    for (let _0x358c4b = 0, _0x5b220c = this.data.length; _0x358c4b < _0x5b220c; _0x358c4b++) {
      _0x1180fb.put(this.data[_0x358c4b], 8);
    }
  };
  _0x4a6a17.exports = _0x38ac7d;
});
var O = a((_0x4996cf, _0x3f750c) => {
  var _0x445290 = N();
  var _0x3f0b18 = y();
  function _0x2fe622(_0x4b3976) {
    this.mode = _0x445290.KANJI;
    this.data = _0x4b3976;
  }
  _0x2fe622.getBitsLength = function (_0x5b82a5) {
    return _0x5b82a5 * 13;
  };
  _0x2fe622.prototype.getLength = function () {
    return this.data.length;
  };
  _0x2fe622.prototype.getBitsLength = function () {
    return _0x2fe622.getBitsLength(this.data.length);
  };
  _0x2fe622.prototype.write = function (_0xb48b71) {
    let _0x2b8a54;
    for (_0x2b8a54 = 0; _0x2b8a54 < this.data.length; _0x2b8a54++) {
      let _0xd0162d = _0x3f0b18.toSJIS(this.data[_0x2b8a54]);
      if (_0xd0162d >= 33088 && _0xd0162d <= 40956) {
        _0xd0162d -= 33088;
      } else {
        if (!(_0xd0162d >= 57408) || !(_0xd0162d <= 60351)) {
          throw new Error("Invalid SJIS character: " + this.data[_0x2b8a54] + "\nMake sure your charset is UTF-8");
        }
        _0xd0162d -= 49472;
      }
      _0xd0162d = (_0xd0162d >>> 8 & 255) * 192 + (_0xd0162d & 255);
      _0xb48b71.put(_0xd0162d, 13);
    }
  };
  _0x3f750c.exports = _0x2fe622;
});
var F = a((_0x176c69, _0x512458) => {
  var _0x8307fd = {
    single_source_shortest_paths: function (_0x156337, _0x290878, _0x17c3c1) {
      var _0x17bdfa = {};
      var _0x56c9f1 = {
        [_0x290878]: 0
      };
      var _0x10fb23;
      var _0x29b665;
      var _0x247269;
      var _0x4b80c7;
      var _0x27eca4;
      var _0x259460;
      var _0x2e59a6;
      var _0x36e54a = _0x8307fd.PriorityQueue.make();
      for (_0x36e54a.push(_0x290878, 0); !_0x36e54a.empty();) {
        _0x29b665 = (_0x10fb23 = _0x36e54a.pop()).value;
        _0x4b80c7 = _0x10fb23.cost;
        for (_0x247269 in _0x27eca4 = _0x156337[_0x29b665] || {}) {
          if (_0x27eca4.hasOwnProperty(_0x247269)) {
            _0x259460 = _0x4b80c7 + _0x27eca4[_0x247269];
            _0x2e59a6 = _0x56c9f1[_0x247269];
            if (_0x56c9f1[_0x247269] === undefined || _0x2e59a6 > _0x259460) {
              _0x56c9f1[_0x247269] = _0x259460;
              _0x36e54a.push(_0x247269, _0x259460);
              _0x17bdfa[_0x247269] = _0x29b665;
            }
          }
        }
      }
      if (_0x17c3c1 !== undefined && _0x56c9f1[_0x17c3c1] === undefined) {
        var _0x3d9491 = ["Could not find a path from ", _0x290878, " to ", _0x17c3c1, "."].join("");
        throw new Error(_0x3d9491);
      }
      return _0x17bdfa;
    },
    extract_shortest_path_from_predecessor_list: function (_0x342c34, _0x453645) {
      var _0x5cc3d9 = [];
      for (var _0x393825 = _0x453645; _0x393825;) {
        _0x5cc3d9.push(_0x393825);
        _0x342c34[_0x393825];
        _0x393825 = _0x342c34[_0x393825];
      }
      _0x5cc3d9.reverse();
      return _0x5cc3d9;
    },
    find_path: function (_0x37eeaa, _0x5c0f20, _0x3cd710) {
      var _0x444ff8 = _0x8307fd.single_source_shortest_paths(_0x37eeaa, _0x5c0f20, _0x3cd710);
      return _0x8307fd.extract_shortest_path_from_predecessor_list(_0x444ff8, _0x3cd710);
    },
    PriorityQueue: {
      make: function (_0x2322ea) {
        var _0x5eab39;
        var _0xa0d3f6 = _0x8307fd.PriorityQueue;
        var _0x3ca117 = {};
        _0x2322ea = _0x2322ea || {};
        for (_0x5eab39 in _0xa0d3f6) {
          if (_0xa0d3f6.hasOwnProperty(_0x5eab39)) {
            _0x3ca117[_0x5eab39] = _0xa0d3f6[_0x5eab39];
          }
        }
        _0x3ca117.queue = [];
        _0x3ca117.sorter = _0x2322ea.sorter || _0xa0d3f6.default_sorter;
        return _0x3ca117;
      },
      default_sorter: function (_0x18bffe, _0x15d048) {
        return _0x18bffe.cost - _0x15d048.cost;
      },
      push: function (_0x43a785, _0x1969e8) {
        var _0x4fee62 = {
          value: _0x43a785,
          cost: _0x1969e8
        };
        this.queue.push(_0x4fee62);
        this.queue.sort(this.sorter);
      },
      pop: function () {
        return this.queue.shift();
      },
      empty: function () {
        return this.queue.length === 0;
      }
    }
  };
  if (_0x512458 !== undefined) {
    _0x512458.exports = _0x8307fd;
  }
});
var U = a(_0x177174 => {
  var _0x5a80f0 = N();
  var _0x1ff1de = D();
  var _0x2394eb = _();
  var _0xb5a533 = B();
  var _0x4f6dea = O();
  var _0x297db2 = A();
  var _0x134161 = y();
  var _0x109c42 = F();
  function _0x259d06(_0x41c851) {
    return unescape(encodeURIComponent(_0x41c851)).length;
  }
  function _0x16aa1b(_0x4811fe, _0x31e9c6, _0x142f43) {
    const _0xaf2e06 = [];
    let _0x53fb6b;
    while ((_0x53fb6b = _0x4811fe.exec(_0x142f43)) !== null) {
      _0xaf2e06.push({
        data: _0x53fb6b[0],
        index: _0x53fb6b.index,
        mode: _0x31e9c6,
        length: _0x53fb6b[0].length
      });
    }
    return _0xaf2e06;
  }
  function _0x4fcbac(_0xcbebb8) {
    const _0x1ae010 = _0x16aa1b(_0x297db2.NUMERIC, _0x5a80f0.NUMERIC, _0xcbebb8);
    const _0x1c856c = _0x16aa1b(_0x297db2.ALPHANUMERIC, _0x5a80f0.ALPHANUMERIC, _0xcbebb8);
    let _0x551405;
    let _0x4b3992;
    if (_0x134161.isKanjiModeEnabled()) {
      _0x551405 = _0x16aa1b(_0x297db2.BYTE, _0x5a80f0.BYTE, _0xcbebb8);
      _0x4b3992 = _0x16aa1b(_0x297db2.KANJI, _0x5a80f0.KANJI, _0xcbebb8);
    } else {
      _0x551405 = _0x16aa1b(_0x297db2.BYTE_KANJI, _0x5a80f0.BYTE, _0xcbebb8);
      _0x4b3992 = [];
    }
    return _0x1ae010.concat(_0x1c856c, _0x551405, _0x4b3992).sort(function (_0x275843, _0x1a7090) {
      return _0x275843.index - _0x1a7090.index;
    }).map(function (_0x2eeec6) {
      return {
        data: _0x2eeec6.data,
        mode: _0x2eeec6.mode,
        length: _0x2eeec6.length
      };
    });
  }
  function _0x5c2d09(_0x4c313c, _0x273580) {
    switch (_0x273580) {
      case _0x5a80f0.NUMERIC:
        return _0x1ff1de.getBitsLength(_0x4c313c);
      case _0x5a80f0.ALPHANUMERIC:
        return _0x2394eb.getBitsLength(_0x4c313c);
      case _0x5a80f0.KANJI:
        return _0x4f6dea.getBitsLength(_0x4c313c);
      case _0x5a80f0.BYTE:
        return _0xb5a533.getBitsLength(_0x4c313c);
    }
  }
  function _0x15ac30(_0x48d93b, _0x3453a4) {
    let _0x1c4b1d;
    const _0x401117 = _0x5a80f0.getBestModeForData(_0x48d93b);
    _0x1c4b1d = _0x5a80f0.from(_0x3453a4, _0x401117);
    if (_0x1c4b1d !== _0x5a80f0.BYTE && _0x1c4b1d.bit < _0x401117.bit) {
      throw new Error("\"" + _0x48d93b + "\" cannot be encoded with mode " + _0x5a80f0.toString(_0x1c4b1d) + ".\n Suggested mode is: " + _0x5a80f0.toString(_0x401117));
    }
    if (_0x1c4b1d === _0x5a80f0.KANJI && !_0x134161.isKanjiModeEnabled()) {
      _0x1c4b1d = _0x5a80f0.BYTE;
    }
    switch (_0x1c4b1d) {
      case _0x5a80f0.NUMERIC:
        return new _0x1ff1de(_0x48d93b);
      case _0x5a80f0.ALPHANUMERIC:
        return new _0x2394eb(_0x48d93b);
      case _0x5a80f0.KANJI:
        return new _0x4f6dea(_0x48d93b);
      case _0x5a80f0.BYTE:
        return new _0xb5a533(_0x48d93b);
    }
  }
  _0x177174.fromArray = function (_0x501ad8) {
    return _0x501ad8.reduce(function (_0x2b9c4c, _0x521f91) {
      if (typeof _0x521f91 == "string") {
        _0x2b9c4c.push(_0x15ac30(_0x521f91, null));
      } else if (_0x521f91.data) {
        _0x2b9c4c.push(_0x15ac30(_0x521f91.data, _0x521f91.mode));
      }
      return _0x2b9c4c;
    }, []);
  };
  _0x177174.fromString = function (_0x5bc927, _0x3867ba) {
    const _0x31ddb9 = function (_0x291994, _0x33cc37) {
      const _0x5c2858 = {};
      const _0x5adc55 = {
        start: {}
      };
      let _0x22c2d8 = ["start"];
      for (let _0x1ef89d = 0; _0x1ef89d < _0x291994.length; _0x1ef89d++) {
        const _0x2891b = _0x291994[_0x1ef89d];
        const _0x5dcd07 = [];
        for (let _0x1cbc94 = 0; _0x1cbc94 < _0x2891b.length; _0x1cbc94++) {
          const _0x39d201 = _0x2891b[_0x1cbc94];
          const _0x2c721f = "" + _0x1ef89d + _0x1cbc94;
          _0x5dcd07.push(_0x2c721f);
          _0x5c2858[_0x2c721f] = {
            node: _0x39d201,
            lastCount: 0
          };
          _0x5adc55[_0x2c721f] = {};
          for (let _0x32d03e = 0; _0x32d03e < _0x22c2d8.length; _0x32d03e++) {
            const _0x4f627f = _0x22c2d8[_0x32d03e];
            if (_0x5c2858[_0x4f627f] && _0x5c2858[_0x4f627f].node.mode === _0x39d201.mode) {
              _0x5adc55[_0x4f627f][_0x2c721f] = _0x5c2d09(_0x5c2858[_0x4f627f].lastCount + _0x39d201.length, _0x39d201.mode) - _0x5c2d09(_0x5c2858[_0x4f627f].lastCount, _0x39d201.mode);
              _0x5c2858[_0x4f627f].lastCount += _0x39d201.length;
            } else {
              if (_0x5c2858[_0x4f627f]) {
                _0x5c2858[_0x4f627f].lastCount = _0x39d201.length;
              }
              _0x5adc55[_0x4f627f][_0x2c721f] = _0x5c2d09(_0x39d201.length, _0x39d201.mode) + 4 + _0x5a80f0.getCharCountIndicator(_0x39d201.mode, _0x33cc37);
            }
          }
        }
        _0x22c2d8 = _0x5dcd07;
      }
      for (let _0xd956d5 = 0; _0xd956d5 < _0x22c2d8.length; _0xd956d5++) {
        _0x5adc55[_0x22c2d8[_0xd956d5]].end = 0;
      }
      return {
        map: _0x5adc55,
        table: _0x5c2858
      };
    }(function (_0x54f941) {
      const _0x3416b2 = [];
      for (let _0x1b9ade = 0; _0x1b9ade < _0x54f941.length; _0x1b9ade++) {
        const _0x477e05 = _0x54f941[_0x1b9ade];
        switch (_0x477e05.mode) {
          case _0x5a80f0.NUMERIC:
            _0x3416b2.push([_0x477e05, {
              data: _0x477e05.data,
              mode: _0x5a80f0.ALPHANUMERIC,
              length: _0x477e05.length
            }, {
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x477e05.length
            }]);
            break;
          case _0x5a80f0.ALPHANUMERIC:
            _0x3416b2.push([_0x477e05, {
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x477e05.length
            }]);
            break;
          case _0x5a80f0.KANJI:
            _0x3416b2.push([_0x477e05, {
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x259d06(_0x477e05.data)
            }]);
            break;
          case _0x5a80f0.BYTE:
            _0x3416b2.push([{
              data: _0x477e05.data,
              mode: _0x5a80f0.BYTE,
              length: _0x259d06(_0x477e05.data)
            }]);
        }
      }
      return _0x3416b2;
    }(_0x4fcbac(_0x5bc927, _0x134161.isKanjiModeEnabled())), _0x3867ba);
    const _0x5d9d50 = _0x109c42.find_path(_0x31ddb9.map, "start", "end");
    const _0x156509 = [];
    for (let _0xf73daf = 1; _0xf73daf < _0x5d9d50.length - 1; _0xf73daf++) {
      _0x156509.push(_0x31ddb9.table[_0x5d9d50[_0xf73daf]].node);
    }
    return _0x177174.fromArray(_0x156509.reduce(function (_0x31d0c3, _0x2c913d) {
      const _0x548f8c = _0x31d0c3.length - 1 >= 0 ? _0x31d0c3[_0x31d0c3.length - 1] : null;
      if (_0x548f8c && _0x548f8c.mode === _0x2c913d.mode) {
        _0x31d0c3[_0x31d0c3.length - 1].data += _0x2c913d.data;
        return _0x31d0c3;
      } else {
        _0x31d0c3.push(_0x2c913d);
        return _0x31d0c3;
      }
    }, []));
  };
  _0x177174.rawSplit = function (_0x181431) {
    return _0x177174.fromArray(_0x4fcbac(_0x181431, _0x134161.isKanjiModeEnabled()));
  };
});
var j = a(_0x207d9e => {
  var _0x434f3a = y();
  var _0x283db5 = w();
  var _0x54e039 = k();
  var _0x1978c5 = x();
  var _0x4660ed = S();
  var _0x26a0fb = C();
  var _0x5176e1 = E();
  var _0x443e47 = T();
  var _0x211062 = M();
  var _0x2365e0 = R();
  var _0x5e252b = I();
  var _0x26db84 = N();
  var _0x559776 = U();
  function _0x1e19b9(_0x1d0f5c, _0x54f857, _0x2b818c) {
    const _0x79371f = _0x1d0f5c.size;
    const _0x2b1066 = _0x5e252b.getEncodedBits(_0x54f857, _0x2b818c);
    let _0x55bf41;
    let _0x4e8b23;
    for (_0x55bf41 = 0; _0x55bf41 < 15; _0x55bf41++) {
      _0x4e8b23 = (_0x2b1066 >> _0x55bf41 & 1) == 1;
      if (_0x55bf41 < 6) {
        _0x1d0f5c.set(_0x55bf41, 8, _0x4e8b23, true);
      } else if (_0x55bf41 < 8) {
        _0x1d0f5c.set(_0x55bf41 + 1, 8, _0x4e8b23, true);
      } else {
        _0x1d0f5c.set(_0x79371f - 15 + _0x55bf41, 8, _0x4e8b23, true);
      }
      if (_0x55bf41 < 8) {
        _0x1d0f5c.set(8, _0x79371f - _0x55bf41 - 1, _0x4e8b23, true);
      } else if (_0x55bf41 < 9) {
        _0x1d0f5c.set(8, 15 - _0x55bf41 - 1 + 1, _0x4e8b23, true);
      } else {
        _0x1d0f5c.set(8, 15 - _0x55bf41 - 1, _0x4e8b23, true);
      }
    }
    _0x1d0f5c.set(_0x79371f - 8, 8, 1, true);
  }
  function _0x467879(_0x769b59, _0x4d62d3, _0xf9f8c2, _0x3d27e4) {
    let _0x24dc4e;
    if (Array.isArray(_0x769b59)) {
      _0x24dc4e = _0x559776.fromArray(_0x769b59);
    } else {
      if (typeof _0x769b59 != "string") {
        throw new Error("Invalid data");
      }
      {
        let _0x465edc = _0x4d62d3;
        if (!_0x465edc) {
          const _0x27f266 = _0x559776.rawSplit(_0x769b59);
          _0x465edc = _0x2365e0.getBestVersionForData(_0x27f266, _0xf9f8c2);
        }
        _0x24dc4e = _0x559776.fromString(_0x769b59, _0x465edc || 40);
      }
    }
    const _0x39abd1 = _0x2365e0.getBestVersionForData(_0x24dc4e, _0xf9f8c2);
    if (!_0x39abd1) {
      throw new Error("The amount of data is too big to be stored in a QR Code");
    }
    if (_0x4d62d3) {
      if (_0x4d62d3 < _0x39abd1) {
        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + _0x39abd1 + ".\n");
      }
    } else {
      _0x4d62d3 = _0x39abd1;
    }
    const _0xbe230a = function (_0x1976cc, _0x17a3ac, _0x25755d) {
      const _0x25c230 = new _0x54e039();
      _0x25755d.forEach(function (_0x35a12e) {
        _0x25c230.put(_0x35a12e.mode.bit, 4);
        _0x25c230.put(_0x35a12e.getLength(), _0x26db84.getCharCountIndicator(_0x35a12e.mode, _0x1976cc));
        _0x35a12e.write(_0x25c230);
      });
      const _0x348e21 = (_0x434f3a.getSymbolTotalCodewords(_0x1976cc) - _0x443e47.getTotalCodewordsCount(_0x1976cc, _0x17a3ac)) * 8;
      for (_0x25c230.getLengthInBits() + 4 <= _0x348e21 && _0x25c230.put(0, 4); _0x25c230.getLengthInBits() % 8 != 0;) {
        _0x25c230.putBit(0);
      }
      const _0x44f34a = (_0x348e21 - _0x25c230.getLengthInBits()) / 8;
      for (let _0x3d30e0 = 0; _0x3d30e0 < _0x44f34a; _0x3d30e0++) {
        _0x25c230.put(_0x3d30e0 % 2 ? 17 : 236, 8);
      }
      return function (_0x56b2c3, _0x3efe9f, _0x1c4460) {
        const _0x28777c = _0x434f3a.getSymbolTotalCodewords(_0x3efe9f);
        const _0x13d276 = _0x28777c - _0x443e47.getTotalCodewordsCount(_0x3efe9f, _0x1c4460);
        const _0x469a14 = _0x443e47.getBlocksCount(_0x3efe9f, _0x1c4460);
        const _0x18429a = _0x469a14 - _0x28777c % _0x469a14;
        const _0x5ed58e = Math.floor(_0x28777c / _0x469a14);
        const _0x41b953 = Math.floor(_0x13d276 / _0x469a14);
        const _0x15c4ee = _0x41b953 + 1;
        const _0x20fcf4 = _0x5ed58e - _0x41b953;
        const _0x37a78e = new _0x211062(_0x20fcf4);
        let _0x3491df = 0;
        const _0x225cb6 = new Array(_0x469a14);
        const _0x4d42e5 = new Array(_0x469a14);
        let _0x4a0d3b = 0;
        const _0x2f1d53 = new Uint8Array(_0x56b2c3.buffer);
        for (let _0x129414 = 0; _0x129414 < _0x469a14; _0x129414++) {
          const _0x4d1a65 = _0x129414 < _0x18429a ? _0x41b953 : _0x15c4ee;
          _0x225cb6[_0x129414] = _0x2f1d53.slice(_0x3491df, _0x3491df + _0x4d1a65);
          _0x4d42e5[_0x129414] = _0x37a78e.encode(_0x225cb6[_0x129414]);
          _0x3491df += _0x4d1a65;
          _0x4a0d3b = Math.max(_0x4a0d3b, _0x4d1a65);
        }
        const _0x21a558 = new Uint8Array(_0x28777c);
        let _0x52bb75;
        let _0x489e46;
        let _0x5c7a21 = 0;
        for (_0x52bb75 = 0; _0x52bb75 < _0x4a0d3b; _0x52bb75++) {
          for (_0x489e46 = 0; _0x489e46 < _0x469a14; _0x489e46++) {
            if (_0x52bb75 < _0x225cb6[_0x489e46].length) {
              _0x21a558[_0x5c7a21++] = _0x225cb6[_0x489e46][_0x52bb75];
            }
          }
        }
        for (_0x52bb75 = 0; _0x52bb75 < _0x20fcf4; _0x52bb75++) {
          for (_0x489e46 = 0; _0x489e46 < _0x469a14; _0x489e46++) {
            _0x21a558[_0x5c7a21++] = _0x4d42e5[_0x489e46][_0x52bb75];
          }
        }
        return _0x21a558;
      }(_0x25c230, _0x1976cc, _0x17a3ac);
    }(_0x4d62d3, _0xf9f8c2, _0x24dc4e);
    const _0x5d79b7 = new _0x1978c5(_0x434f3a.getSymbolSize(_0x4d62d3));
    (function (_0x4ec2e8, _0x2966bb) {
      const _0x48fa0d = _0x4ec2e8.size;
      const _0x29e1b5 = _0x26a0fb.getPositions(_0x2966bb);
      for (let _0x526636 = 0; _0x526636 < _0x29e1b5.length; _0x526636++) {
        const _0x534a3f = _0x29e1b5[_0x526636][0];
        const _0x7be56b = _0x29e1b5[_0x526636][1];
        for (let _0x230e9b = -1; _0x230e9b <= 7; _0x230e9b++) {
          if (!(_0x534a3f + _0x230e9b <= -1) && !(_0x48fa0d <= _0x534a3f + _0x230e9b)) {
            for (let _0x348e5e = -1; _0x348e5e <= 7; _0x348e5e++) {
              if (!(_0x7be56b + _0x348e5e <= -1) && !(_0x48fa0d <= _0x7be56b + _0x348e5e)) {
                if (_0x230e9b >= 0 && _0x230e9b <= 6 && (_0x348e5e === 0 || _0x348e5e === 6) || _0x348e5e >= 0 && _0x348e5e <= 6 && (_0x230e9b === 0 || _0x230e9b === 6) || _0x230e9b >= 2 && _0x230e9b <= 4 && _0x348e5e >= 2 && _0x348e5e <= 4) {
                  _0x4ec2e8.set(_0x534a3f + _0x230e9b, _0x7be56b + _0x348e5e, true, true);
                } else {
                  _0x4ec2e8.set(_0x534a3f + _0x230e9b, _0x7be56b + _0x348e5e, false, true);
                }
              }
            }
          }
        }
      }
    })(_0x5d79b7, _0x4d62d3);
    (function (_0x1a231e) {
      const _0x3edf19 = _0x1a231e.size;
      for (let _0xb91712 = 8; _0xb91712 < _0x3edf19 - 8; _0xb91712++) {
        const _0x37ba8a = _0xb91712 % 2 == 0;
        _0x1a231e.set(_0xb91712, 6, _0x37ba8a, true);
        _0x1a231e.set(6, _0xb91712, _0x37ba8a, true);
      }
    })(_0x5d79b7);
    (function (_0x5e2bf7, _0x250124) {
      const _0x2158ee = _0x4660ed.getPositions(_0x250124);
      for (let _0x221c24 = 0; _0x221c24 < _0x2158ee.length; _0x221c24++) {
        const _0x59b9b4 = _0x2158ee[_0x221c24][0];
        const _0x4d5b40 = _0x2158ee[_0x221c24][1];
        for (let _0x3560e7 = -2; _0x3560e7 <= 2; _0x3560e7++) {
          for (let _0x2ae25b = -2; _0x2ae25b <= 2; _0x2ae25b++) {
            if (_0x3560e7 === -2 || _0x3560e7 === 2 || _0x2ae25b === -2 || _0x2ae25b === 2 || _0x3560e7 === 0 && _0x2ae25b === 0) {
              _0x5e2bf7.set(_0x59b9b4 + _0x3560e7, _0x4d5b40 + _0x2ae25b, true, true);
            } else {
              _0x5e2bf7.set(_0x59b9b4 + _0x3560e7, _0x4d5b40 + _0x2ae25b, false, true);
            }
          }
        }
      }
    })(_0x5d79b7, _0x4d62d3);
    _0x1e19b9(_0x5d79b7, _0xf9f8c2, 0);
    if (_0x4d62d3 >= 7) {
      (function (_0x505f99, _0x13a747) {
        const _0x266f04 = _0x505f99.size;
        const _0x6eed4f = _0x2365e0.getEncodedBits(_0x13a747);
        let _0x50e18b;
        let _0x2270c0;
        let _0xf426de;
        for (let _0x3732a2 = 0; _0x3732a2 < 18; _0x3732a2++) {
          _0x50e18b = Math.floor(_0x3732a2 / 3);
          _0x2270c0 = _0x3732a2 % 3 + _0x266f04 - 8 - 3;
          _0xf426de = (_0x6eed4f >> _0x3732a2 & 1) == 1;
          _0x505f99.set(_0x50e18b, _0x2270c0, _0xf426de, true);
          _0x505f99.set(_0x2270c0, _0x50e18b, _0xf426de, true);
        }
      })(_0x5d79b7, _0x4d62d3);
    }
    (function (_0x33136e, _0x584edb) {
      const _0x2acc7d = _0x33136e.size;
      let _0x2f5b1c = -1;
      let _0x2205c5 = _0x2acc7d - 1;
      let _0x2c3d52 = 7;
      let _0x280249 = 0;
      for (let _0xf931b1 = _0x2acc7d - 1; _0xf931b1 > 0; _0xf931b1 -= 2) {
        for (_0xf931b1 === 6 && _0xf931b1--;;) {
          for (let _0x5d66e3 = 0; _0x5d66e3 < 2; _0x5d66e3++) {
            if (!_0x33136e.isReserved(_0x2205c5, _0xf931b1 - _0x5d66e3)) {
              let _0x222986 = false;
              if (_0x280249 < _0x584edb.length) {
                _0x222986 = (_0x584edb[_0x280249] >>> _0x2c3d52 & 1) == 1;
              }
              _0x33136e.set(_0x2205c5, _0xf931b1 - _0x5d66e3, _0x222986);
              _0x2c3d52--;
              if (_0x2c3d52 === -1) {
                _0x280249++;
                _0x2c3d52 = 7;
              }
            }
          }
          _0x2205c5 += _0x2f5b1c;
          if (_0x2205c5 < 0 || _0x2acc7d <= _0x2205c5) {
            _0x2205c5 -= _0x2f5b1c;
            _0x2f5b1c = -_0x2f5b1c;
            break;
          }
        }
      }
    })(_0x5d79b7, _0xbe230a);
    if (isNaN(_0x3d27e4)) {
      _0x3d27e4 = _0x5176e1.getBestMask(_0x5d79b7, _0x1e19b9.bind(null, _0x5d79b7, _0xf9f8c2));
    }
    _0x5176e1.applyMask(_0x3d27e4, _0x5d79b7);
    _0x1e19b9(_0x5d79b7, _0xf9f8c2, _0x3d27e4);
    return {
      modules: _0x5d79b7,
      version: _0x4d62d3,
      errorCorrectionLevel: _0xf9f8c2,
      maskPattern: _0x3d27e4,
      segments: _0x24dc4e
    };
  }
  _0x207d9e.create = function (_0x4d09a1, _0x4473bd) {
    if (_0x4d09a1 === undefined || _0x4d09a1 === "") {
      throw new Error("No input text");
    }
    let _0x5cd606;
    let _0x4abaf7;
    let _0x458c43 = _0x283db5.M;
    if (_0x4473bd !== undefined) {
      _0x458c43 = _0x283db5.from(_0x4473bd.errorCorrectionLevel, _0x283db5.M);
      _0x5cd606 = _0x2365e0.from(_0x4473bd.version);
      _0x4abaf7 = _0x5176e1.from(_0x4473bd.maskPattern);
      if (_0x4473bd.toSJISFunc) {
        _0x434f3a.setToSJISFunction(_0x4473bd.toSJISFunc);
      }
    }
    return _0x467879(_0x4d09a1, _0x5cd606, _0x458c43, _0x4abaf7);
  };
});
var V = a(_0x1c5ba2 => {
  function _0x4eb4fb(_0x4b3800) {
    if (typeof _0x4b3800 == "number") {
      _0x4b3800 = _0x4b3800.toString();
    }
    if (typeof _0x4b3800 != "string") {
      throw new Error("Color should be defined as hex string");
    }
    let _0x3d9aa0 = _0x4b3800.slice().replace("#", "").split("");
    if (_0x3d9aa0.length < 3 || _0x3d9aa0.length === 5 || _0x3d9aa0.length > 8) {
      throw new Error("Invalid hex color: " + _0x4b3800);
    }
    if (_0x3d9aa0.length === 3 || _0x3d9aa0.length === 4) {
      _0x3d9aa0 = Array.prototype.concat.apply([], _0x3d9aa0.map(function (_0x20d0c4) {
        return [_0x20d0c4, _0x20d0c4];
      }));
    }
    if (_0x3d9aa0.length === 6) {
      _0x3d9aa0.push("F", "F");
    }
    const _0x24094e = parseInt(_0x3d9aa0.join(""), 16);
    return {
      r: _0x24094e >> 24 & 255,
      g: _0x24094e >> 16 & 255,
      b: _0x24094e >> 8 & 255,
      a: _0x24094e & 255,
      hex: "#" + _0x3d9aa0.slice(0, 6).join("")
    };
  }
  _0x1c5ba2.getOptions = function (_0x2a4c57) {
    _0x2a4c57 ||= {};
    _0x2a4c57.color ||= {};
    const _0x264705 = _0x2a4c57.margin === undefined || _0x2a4c57.margin === null || _0x2a4c57.margin < 0 ? 4 : _0x2a4c57.margin;
    const _0x40c7a7 = _0x2a4c57.width && _0x2a4c57.width >= 21 ? _0x2a4c57.width : undefined;
    const _0x1f2cb2 = _0x2a4c57.scale || 4;
    return {
      width: _0x40c7a7,
      scale: _0x40c7a7 ? 4 : _0x1f2cb2,
      margin: _0x264705,
      color: {
        dark: _0x4eb4fb(_0x2a4c57.color.dark || "#000000ff"),
        light: _0x4eb4fb(_0x2a4c57.color.light || "#ffffffff")
      },
      type: _0x2a4c57.type,
      rendererOpts: _0x2a4c57.rendererOpts || {}
    };
  };
  _0x1c5ba2.getScale = function (_0x379ef3, _0x5b110f) {
    if (_0x5b110f.width && _0x5b110f.width >= _0x379ef3 + _0x5b110f.margin * 2) {
      return _0x5b110f.width / (_0x379ef3 + _0x5b110f.margin * 2);
    } else {
      return _0x5b110f.scale;
    }
  };
  _0x1c5ba2.getImageWidth = function (_0x5f1cba, _0x3df401) {
    const _0x1de973 = _0x1c5ba2.getScale(_0x5f1cba, _0x3df401);
    return Math.floor((_0x5f1cba + _0x3df401.margin * 2) * _0x1de973);
  };
  _0x1c5ba2.qrToImageData = function (_0x20bc4c, _0xa8f765, _0x4f31ee) {
    const _0x3b7fb5 = _0xa8f765.modules.size;
    const _0xefad56 = _0xa8f765.modules.data;
    const _0x193c2e = _0x1c5ba2.getScale(_0x3b7fb5, _0x4f31ee);
    const _0x2183d = Math.floor((_0x3b7fb5 + _0x4f31ee.margin * 2) * _0x193c2e);
    const _0x46dc4e = _0x4f31ee.margin * _0x193c2e;
    const _0x3d2aae = [_0x4f31ee.color.light, _0x4f31ee.color.dark];
    for (let _0x4ff570 = 0; _0x4ff570 < _0x2183d; _0x4ff570++) {
      for (let _0x10e0ba = 0; _0x10e0ba < _0x2183d; _0x10e0ba++) {
        let _0x2d67ff = (_0x4ff570 * _0x2183d + _0x10e0ba) * 4;
        let _0x24eaf3 = _0x4f31ee.color.light;
        if (_0x4ff570 >= _0x46dc4e && _0x10e0ba >= _0x46dc4e && _0x4ff570 < _0x2183d - _0x46dc4e && _0x10e0ba < _0x2183d - _0x46dc4e) {
          _0x24eaf3 = _0x3d2aae[_0xefad56[Math.floor((_0x4ff570 - _0x46dc4e) / _0x193c2e) * _0x3b7fb5 + Math.floor((_0x10e0ba - _0x46dc4e) / _0x193c2e)] ? 1 : 0];
        }
        _0x20bc4c[_0x2d67ff++] = _0x24eaf3.r;
        _0x20bc4c[_0x2d67ff++] = _0x24eaf3.g;
        _0x20bc4c[_0x2d67ff++] = _0x24eaf3.b;
        _0x20bc4c[_0x2d67ff] = _0x24eaf3.a;
      }
    }
  };
});
var H = a(_0x76be88 => {
  var _0x1f6f78 = V();
  _0x76be88.render = function (_0x5577b4, _0x107d8a, _0x553012) {
    let _0x43e7d9 = _0x553012;
    let _0x4aa860 = _0x107d8a;
    if (_0x43e7d9 === undefined && (!_0x107d8a || !_0x107d8a.getContext)) {
      _0x43e7d9 = _0x107d8a;
      _0x107d8a = undefined;
    }
    if (!_0x107d8a) {
      _0x4aa860 = function () {
        try {
          return document.createElement("canvas");
        } catch (_0x3afbb7) {
          throw new Error("You need to specify a canvas element");
        }
      }();
    }
    _0x43e7d9 = _0x1f6f78.getOptions(_0x43e7d9);
    const _0x16e627 = _0x1f6f78.getImageWidth(_0x5577b4.modules.size, _0x43e7d9);
    const _0x155bd6 = _0x4aa860.getContext("2d");
    const _0x457e68 = _0x155bd6.createImageData(_0x16e627, _0x16e627);
    _0x1f6f78.qrToImageData(_0x457e68.data, _0x5577b4, _0x43e7d9);
    (function (_0x5ac8a3, _0x2e9ac0, _0x2d7c95) {
      _0x5ac8a3.clearRect(0, 0, _0x2e9ac0.width, _0x2e9ac0.height);
      _0x2e9ac0.style ||= {};
      _0x2e9ac0.height = _0x2d7c95;
      _0x2e9ac0.width = _0x2d7c95;
      _0x2e9ac0.style.height = _0x2d7c95 + "px";
      _0x2e9ac0.style.width = _0x2d7c95 + "px";
    })(_0x155bd6, _0x4aa860, _0x16e627);
    _0x155bd6.putImageData(_0x457e68, 0, 0);
    return _0x4aa860;
  };
  _0x76be88.renderToDataURL = function (_0x40c4ac, _0x394602, _0x5d05a3) {
    let _0x36b0c2 = _0x5d05a3;
    if (_0x36b0c2 === undefined && (!_0x394602 || !_0x394602.getContext)) {
      _0x36b0c2 = _0x394602;
      _0x394602 = undefined;
    }
    _0x36b0c2 ||= {};
    const _0x10e20b = _0x76be88.render(_0x40c4ac, _0x394602, _0x36b0c2);
    const _0x8dfee2 = _0x36b0c2.type || "image/png";
    const _0x22cd5f = _0x36b0c2.rendererOpts || {};
    return _0x10e20b.toDataURL(_0x8dfee2, _0x22cd5f.quality);
  };
});
var X = a(_0x164b16 => {
  var _0x42d843 = V();
  function _0x42e99f(_0x23c0ab, _0x1c9917) {
    const _0x413f8e = _0x23c0ab.a / 255;
    const _0x3be932 = _0x1c9917 + "=\"" + _0x23c0ab.hex + "\"";
    if (_0x413f8e < 1) {
      return _0x3be932 + " " + _0x1c9917 + "-opacity=\"" + _0x413f8e.toFixed(2).slice(1) + "\"";
    } else {
      return _0x3be932;
    }
  }
  function _0x319b57(_0x3b9700, _0x2e7f87, _0x55b54a) {
    let _0x47e0c3 = _0x3b9700 + _0x2e7f87;
    if (_0x55b54a !== undefined) {
      _0x47e0c3 += " " + _0x55b54a;
    }
    return _0x47e0c3;
  }
  _0x164b16.render = function (_0x274483, _0x12a2e6, _0x697e75) {
    const _0x39ecc0 = _0x42d843.getOptions(_0x12a2e6);
    const _0x3aee03 = _0x274483.modules.size;
    const _0xd1017a = _0x274483.modules.data;
    const _0x5dbd51 = _0x3aee03 + _0x39ecc0.margin * 2;
    const _0x528408 = _0x39ecc0.color.light.a ? "<path " + _0x42e99f(_0x39ecc0.color.light, "fill") + " d=\"M0 0h" + _0x5dbd51 + "v" + _0x5dbd51 + "H0z\"/>" : "";
    const _0x1907b1 = "<path " + _0x42e99f(_0x39ecc0.color.dark, "stroke") + " d=\"" + function (_0x1f18b7, _0x4d4c69, _0x56eb27) {
      let _0x31e299 = "";
      let _0x2e10e4 = 0;
      let _0x22cf17 = false;
      let _0x2b9704 = 0;
      for (let _0x3d1de0 = 0; _0x3d1de0 < _0x1f18b7.length; _0x3d1de0++) {
        const _0x162e85 = Math.floor(_0x3d1de0 % _0x4d4c69);
        const _0x1a9ea0 = Math.floor(_0x3d1de0 / _0x4d4c69);
        if (!_0x162e85 && !_0x22cf17) {
          _0x22cf17 = true;
        }
        if (_0x1f18b7[_0x3d1de0]) {
          _0x2b9704++;
          if (!(_0x3d1de0 > 0) || !(_0x162e85 > 0) || !_0x1f18b7[_0x3d1de0 - 1]) {
            _0x31e299 += _0x22cf17 ? _0x319b57("M", _0x162e85 + _0x56eb27, 0.5 + _0x1a9ea0 + _0x56eb27) : _0x319b57("m", _0x2e10e4, 0);
            _0x2e10e4 = 0;
            _0x22cf17 = false;
          }
          if (!(_0x162e85 + 1 < _0x4d4c69) || !_0x1f18b7[_0x3d1de0 + 1]) {
            _0x31e299 += _0x319b57("h", _0x2b9704);
            _0x2b9704 = 0;
          }
        } else {
          _0x2e10e4++;
        }
      }
      return _0x31e299;
    }(_0xd1017a, _0x3aee03, _0x39ecc0.margin) + "\"/>";
    const _0x33926c = "viewBox=\"0 0 " + _0x5dbd51 + " " + _0x5dbd51 + "\"";
    const _0x47aba6 = "<svg xmlns=\"http://www.w3.org/2000/svg\" " + (_0x39ecc0.width ? "width=\"" + _0x39ecc0.width + "\" height=\"" + _0x39ecc0.width + "\" " : "") + _0x33926c + " shape-rendering=\"crispEdges\">" + _0x528408 + _0x1907b1 + "</svg>\n";
    if (typeof _0x697e75 == "function") {
      _0x697e75(null, _0x47aba6);
    }
    return _0x47aba6;
  };
});
var Y = i(a(_0x4140ce => {
  var _0x3a8da8 = b();
  var _0x4c3241 = j();
  var _0x4bc8e6 = H();
  var _0x401fd3 = X();
  function _0x41ab80(_0x16c717, _0x4b5c53, _0x31c84d, _0x158c84, _0x2b3a73) {
    const _0x43d5d1 = [].slice.call(arguments, 1);
    const _0x17aed8 = _0x43d5d1.length;
    const _0x22ce6f = typeof _0x43d5d1[_0x17aed8 - 1] == "function";
    if (!_0x22ce6f && !_0x3a8da8()) {
      throw new Error("Callback required as last argument");
    }
    if (!_0x22ce6f) {
      if (_0x17aed8 < 1) {
        throw new Error("Too few arguments provided");
      }
      if (_0x17aed8 === 1) {
        _0x31c84d = _0x4b5c53;
        _0x4b5c53 = _0x158c84 = undefined;
      } else if (_0x17aed8 === 2 && !_0x4b5c53.getContext) {
        _0x158c84 = _0x31c84d;
        _0x31c84d = _0x4b5c53;
        _0x4b5c53 = undefined;
      }
      return new Promise(function (_0x80954a, _0x5a18ce) {
        try {
          _0x80954a(_0x16c717(_0x4c3241.create(_0x31c84d, _0x158c84), _0x4b5c53, _0x158c84));
        } catch (_0x79c4b3) {
          _0x5a18ce(_0x79c4b3);
        }
      });
    }
    if (_0x17aed8 < 2) {
      throw new Error("Too few arguments provided");
    }
    if (_0x17aed8 === 2) {
      _0x2b3a73 = _0x31c84d;
      _0x31c84d = _0x4b5c53;
      _0x4b5c53 = _0x158c84 = undefined;
    } else if (_0x17aed8 === 3) {
      if (_0x4b5c53.getContext && _0x2b3a73 === undefined) {
        _0x2b3a73 = _0x158c84;
        _0x158c84 = undefined;
      } else {
        _0x2b3a73 = _0x158c84;
        _0x158c84 = _0x31c84d;
        _0x31c84d = _0x4b5c53;
        _0x4b5c53 = undefined;
      }
    }
    try {
      const _0x395ad6 = _0x4c3241.create(_0x31c84d, _0x158c84);
      _0x2b3a73(null, _0x16c717(_0x395ad6, _0x4b5c53, _0x158c84));
    } catch (_0x4599e1) {
      _0x2b3a73(_0x4599e1);
    }
  }
  _0x4140ce.create = _0x4c3241.create;
  _0x4140ce.toCanvas = _0x41ab80.bind(null, _0x4bc8e6.render);
  _0x4140ce.toDataURL = _0x41ab80.bind(null, _0x4bc8e6.renderToDataURL);
  _0x4140ce.toString = _0x41ab80.bind(null, function (_0x5e2de4, _0x537e7e, _0x365feb) {
    return _0x401fd3.render(_0x5e2de4, _0x365feb);
  });
})(), 1);
var $ = 0.0245;
var q = $;
var G = 67240;
var W = 0.46;
var Z = {
  r: 0.9,
  g: 0.85,
  b: 0.95
};
var Q = {
  r: 0.55,
  g: 0.6,
  b: 0.5
};
var K = "https://ppweilai.online/";
function J(_0x8f69b8) {
  return "vec3f(" + _0x8f69b8.r.toFixed(6) + ", " + _0x8f69b8.g.toFixed(6) + ", " + _0x8f69b8.b.toFixed(6) + ")";
}
function ee(_0x207145) {
  try {
    const {
      modules: _0x441361
    } = Y.create(_0x207145 || "https://ppweilai.online/", {
      errorCorrectionLevel: "H"
    });
    const {
      size: _0x4fe257
    } = _0x441361;
    const _0x5a0fde = [];
    for (let _0x470d50 = 0; _0x470d50 < _0x4fe257; _0x470d50++) {
      const _0x1ae87b = [];
      for (let _0x4b15a7 = 0; _0x4b15a7 < _0x4fe257; _0x4b15a7++) {
        _0x1ae87b.push(_0x441361.get(_0x4b15a7, _0x470d50) === 1);
      }
      _0x5a0fde.push(_0x1ae87b);
    }
    return _0x5a0fde;
  } catch {
    return ee(K);
  }
}
var te = function (_0x493478) {
  _0x493478[_0x493478.Dirt = 0] = "Dirt";
  _0x493478[_0x493478.CherryBlossom = 1] = "CherryBlossom";
  _0x493478[_0x493478.Trunk = 2] = "Trunk";
  _0x493478[_0x493478.Grass = 3] = "Grass";
  _0x493478[_0x493478.FallenPetals = 4] = "FallenPetals";
  _0x493478[_0x493478.Branch = 5] = "Branch";
  return _0x493478;
}({});
function ne(_0x279ed6, _0x487f15 = 0, _0x1e5f0f = 0) {
  const _0x3b15f5 = Math.sin(_0x279ed6 * 127.1 + _0x487f15 * 311.7 + _0x1e5f0f * 43.7) * 43758.5;
  return _0x3b15f5 - Math.floor(_0x3b15f5);
}
var re = 0;
function oe(_0x5c068b) {
  re = _0x5c068b;
}
function le(_0x36209e, _0x505581 = 0, _0x3aa8b2 = 0) {
  const _0x5c362f = Math.sin(_0x36209e * 127.1 + _0x505581 * 311.7 + _0x3aa8b2 * 43.7 + re * 7919) * 43758.5;
  return _0x5c362f - Math.floor(_0x5c362f);
}
function ae(_0x229433) {
  const _0xe8133 = _0x229433.length;
  const _0x4fd4c0 = _0xe8133 / 2;
  const _0x25b220 = _0xe8133 / 2;
  const _0x2b21fe = _0xe8133 / 29;
  const _0x30dc8a = Math.round(_0x2b21fe * 12);
  const _0x4b7910 = _0x30dc8a * q;
  const _0x19b5ff = _0xe8133 * W;
  const _0x561d0e = _0x19b5ff * _0x19b5ff;
  const _0x5f5cb4 = new Float32Array(268960);
  const _0xf9b88c = new Float32Array(G);
  const _0x274541 = new Float32Array(G);
  const _0x349655 = new Uint32Array(G);
  let _0x5944f2 = 0;
  const _0xfbd8fb = Math.round(_0x2b21fe * 18);
  for (let _0x55becd = 0; _0x55becd < _0xe8133; _0x55becd++) {
    const _0x69a4b7 = _0x229433[_0x55becd];
    for (let _0x5da55c = 0; _0x5da55c < _0xe8133; _0x5da55c++) {
      const _0x16fe1b = _0x69a4b7[_0x5da55c];
      const _0x4a81af = _0x5da55c - _0x4fd4c0;
      const _0x169607 = _0x55becd - _0x25b220;
      const _0x3a1e1 = _0x4a81af * _0x4a81af + _0x169607 * _0x169607;
      const _0x4fe3c8 = _0x5944f2;
      const _0x1a4644 = _0x4fe3c8 * 4;
      _0x5f5cb4[_0x1a4644] = _0x5da55c;
      _0x5f5cb4[_0x1a4644 + 1] = _0x55becd;
      _0x5f5cb4[_0x1a4644 + 2] = 0;
      _0x5f5cb4[_0x1a4644 + 3] = 0;
      _0xf9b88c[_0x4fe3c8] = q;
      _0x274541[_0x4fe3c8] = 0;
      _0x349655[_0x4fe3c8] = _0x16fe1b ? _0x3a1e1 < 6.25 ? te.CherryBlossom : _0x3a1e1 >= _0x561d0e ? te.Grass : te.FallenPetals : te.Dirt;
      _0x5944f2++;
      if (_0x16fe1b) {
        if (_0x3a1e1 < 6.25) {
          for (let _0xa0b325 = 1; _0xa0b325 < _0x30dc8a; _0xa0b325++) {
            const _0x3650da = _0x5944f2;
            const _0x5bde27 = _0x3650da * 4;
            _0x5f5cb4[_0x5bde27] = _0x5da55c;
            _0x5f5cb4[_0x5bde27 + 1] = _0x55becd;
            _0x5f5cb4[_0x5bde27 + 2] = 0;
            _0x5f5cb4[_0x5bde27 + 3] = 0;
            _0xf9b88c[_0x3650da] = q;
            _0x274541[_0x3650da] = _0xa0b325 * q;
            _0x349655[_0x3650da] = te.Trunk;
            _0x5944f2++;
          }
        }
        if (_0x3a1e1 < _0x561d0e) {
          const _0x2ac119 = 1 - Math.sqrt(_0x3a1e1) / _0x19b5ff;
          const _0xf6efc3 = Math.max(4, Math.round(_0xfbd8fb * (0.25 + _0x2ac119 * 0.75 * _0x2ac119)));
          const _0x540cf1 = Math.floor(_0x2ac119 * 4.5 * _0x2b21fe) * q;
          for (let _0x27bdbb = 0; _0x27bdbb < _0xf6efc3; _0x27bdbb++) {
            const _0xb811f0 = _0x5944f2;
            const _0x4e29bb = _0xb811f0 * 4;
            _0x5f5cb4[_0x4e29bb] = _0x5da55c;
            _0x5f5cb4[_0x4e29bb + 1] = _0x55becd;
            _0x5f5cb4[_0x4e29bb + 2] = 0;
            _0x5f5cb4[_0x4e29bb + 3] = 0;
            _0xf9b88c[_0xb811f0] = q;
            _0x274541[_0xb811f0] = _0x4b7910 + _0x27bdbb * q + _0x540cf1;
            _0x349655[_0xb811f0] = te.CherryBlossom;
            _0x5944f2++;
          }
          const _0x5deec3 = Math.floor(ne(_0x5da55c, _0x55becd, 500) * 6 * _0x2b21fe);
          for (let _0x5d115b = 0; _0x5d115b < _0x5deec3; _0x5d115b++) {
            const _0x87360b = _0x5944f2;
            const _0x58ce22 = _0x87360b * 4;
            _0x5f5cb4[_0x58ce22] = _0x5da55c;
            _0x5f5cb4[_0x58ce22 + 1] = _0x55becd;
            _0x5f5cb4[_0x58ce22 + 2] = 0;
            _0x5f5cb4[_0x58ce22 + 3] = 0;
            _0xf9b88c[_0x87360b] = q;
            _0x274541[_0x87360b] = _0x4b7910 + (_0xf6efc3 + _0x5d115b) * q + _0x540cf1;
            _0x349655[_0x87360b] = te.CherryBlossom;
            _0x5944f2++;
          }
          if (_0x3a1e1 < 2.25) {
            for (let _0x460077 = 0; _0x460077 < 4; _0x460077++) {
              const _0x19d474 = _0x5944f2;
              const _0x545e67 = _0x19d474 * 4;
              _0x5f5cb4[_0x545e67] = _0x5da55c;
              _0x5f5cb4[_0x545e67 + 1] = _0x55becd;
              _0x5f5cb4[_0x545e67 + 2] = 0;
              _0x5f5cb4[_0x545e67 + 3] = 0;
              _0xf9b88c[_0x19d474] = q;
              _0x274541[_0x19d474] = _0x4b7910 + _0x460077 * q;
              _0x349655[_0x19d474] = te.CherryBlossom;
              _0x5944f2++;
            }
          }
        }
      }
    }
  }
  return {
    positions: _0x5f5cb4,
    heights: _0xf9b88c,
    baseY: _0x274541,
    types: _0x349655,
    gridSize: _0xe8133,
    numBlocks: _0x5944f2
  };
}
function ie(_0x427824) {
  const _0x9d63f2 = _0x427824.length;
  let _0x211dd5 = 0;
  let _0x1d18f3 = 0;
  for (let _0x3fec09 = 0; _0x3fec09 < _0x9d63f2; _0x3fec09++) {
    for (let _0x316c37 = 0; _0x316c37 < _0x9d63f2; _0x316c37++) {
      if (_0x427824[_0x3fec09][_0x316c37]) {
        _0x211dd5++;
      }
      if (_0x316c37 > 0 && _0x427824[_0x3fec09][_0x316c37] !== _0x427824[_0x3fec09][_0x316c37 - 1]) {
        _0x1d18f3++;
      }
      if (_0x3fec09 > 0 && _0x427824[_0x3fec09][_0x316c37] !== _0x427824[_0x3fec09 - 1][_0x316c37]) {
        _0x1d18f3++;
      }
    }
  }
  const _0x38fd42 = _0x211dd5 / (_0x9d63f2 * _0x9d63f2);
  const _0x3d3828 = _0x1d18f3 / (_0x9d63f2 * 2 * (_0x9d63f2 - 1));
  const _0x39f8ba = _0x9d63f2 / 29;
  return {
    gridSize: _0x9d63f2,
    density: _0x38fd42,
    edgeRatio: _0x3d3828,
    trunkHeight: (0.26 + _0x38fd42 * 0.08) * _0x39f8ba,
    trunkRadius: (0.024 + _0x38fd42 * 0.008) * _0x39f8ba,
    trunkLean: (0.04 + ne(_0x38fd42, _0x3d3828) * 0.03) * _0x39f8ba,
    mainBranches: 4 + Math.floor(_0x38fd42 * 4),
    branchSpread: 0.5 + _0x3d3828 * 0.5,
    branchLengthScale: 0.55 + _0x38fd42 * 0.25,
    maxDepth: _0x3d3828 > 0.28 ? 5 : 4,
    canopyDensity: 0.5 + _0x38fd42 * 0.5
  };
}
function se(_0x20ed88, _0x502ef9) {
  const _0x4bffad = _0x502ef9 * W * $;
  const _0x1503b3 = [];
  const _0x213242 = [];
  const {
    trunkHeight: _0x1c95cd,
    trunkRadius: _0x16e7f2,
    trunkLean: _0x41e54e,
    mainBranches: _0x53f698,
    branchLengthScale: _0x775357,
    maxDepth: _0x27b343
  } = _0x20ed88;
  let _0x2c60d5 = 0;
  function _0x22daca(_0x2b1124, _0x5eaaa6, _0x46283b, _0x49488c, _0x4d411b, _0x22c197, _0x449652, _0x4ef4ca, _0x1afc5b, _0x1ed9ea) {
    _0x1503b3.push(_0x2b1124, _0x5eaaa6, _0x46283b, _0x49488c, _0x4d411b, _0x22c197, _0x449652, _0x4ef4ca, _0x1afc5b, _0x1ed9ea, 0, 0);
    _0x2c60d5++;
  }
  for (let _0x32ef82 = 0; _0x32ef82 < 10; _0x32ef82++) {
    const _0x199ef7 = _0x32ef82 / 10;
    const _0x1be1fb = (_0x32ef82 + 1) / 10;
    const _0x3d67d5 = _0x16e7f2 * (1 - _0x199ef7 * 0.55) * (1 + Math.sin(_0x199ef7 * Math.PI * 0.8) * 0.08);
    const _0x341807 = _0x16e7f2 * (1 - _0x1be1fb * 0.55) * (1 + Math.sin(_0x1be1fb * Math.PI * 0.8) * 0.08);
    const _0x3fc8bc = _0x41e54e * _0x199ef7 * _0x199ef7 + _0x41e54e * 0.3 * Math.sin(_0x199ef7 * Math.PI * 1.5);
    const _0x5025a5 = _0x41e54e * 0.5 * Math.sin(_0x199ef7 * Math.PI * 0.8);
    const _0x5ef742 = _0x41e54e * _0x1be1fb * _0x1be1fb + _0x41e54e * 0.3 * Math.sin(_0x1be1fb * Math.PI * 1.5);
    const _0x27c5f7 = _0x41e54e * 0.5 * Math.sin(_0x1be1fb * Math.PI * 0.8);
    _0x22daca(_0x3fc8bc, _0x199ef7 * _0x1c95cd, _0x5025a5, _0x3d67d5, _0x5ef742, _0x1be1fb * _0x1c95cd, _0x27c5f7, _0x341807, 0, _0x199ef7 * 0.5);
  }
  function _0x40061e(_0x537471) {
    return {
      x: _0x41e54e * _0x537471 * _0x537471 + _0x41e54e * 0.3 * Math.sin(_0x537471 * Math.PI * 1.5),
      y: _0x1c95cd * _0x537471,
      z: _0x41e54e * 0.5 * Math.sin(_0x537471 * Math.PI * 0.8)
    };
  }
  const _0x44030b = _0x1c95cd + _0x4bffad * 1.5;
  const _0x26697a = _0x1c95cd * 0.5;
  function _0x414b54(_0x206c34, _0x2b782c, _0x3f6d33, _0x4353c0, _0x10032f, _0x539494, _0x436fa6, _0x2cee5c, _0x26c3c9, _0x61ba34) {
    if (_0x2c60d5 >= 485) {
      return;
    }
    _0x22daca(_0x206c34, _0x2b782c, _0x3f6d33, _0x4353c0, _0x10032f, _0x539494, _0x436fa6, _0x2cee5c, _0x61ba34, le(_0x2c60d5, 0, 400));
    const _0x554a3c = 1 + Math.floor(le(_0x2c60d5, 0, 500) * 2);
    for (let _0x441bd5 = 0; _0x441bd5 < _0x554a3c && _0x2c60d5 < 485; _0x441bd5++) {
      const _0x1b5e3a = _0x26c3c9 + (le(_0x2c60d5, _0x441bd5, 600) - 0.5) * 2.2;
      const _0x285119 = _0x4bffad * (0.15 + le(_0x2c60d5, _0x441bd5, 700) * 0.2) * _0x775357;
      const _0x53e98e = 0.1 + le(_0x2c60d5, _0x441bd5, 750) * 0.45;
      const _0xab784 = _0x2cee5c * (0.5 + le(_0x2c60d5, _0x441bd5, 800) * 0.2);
      let _0xceeb6a = _0x10032f + Math.cos(_0x1b5e3a) * Math.cos(_0x53e98e) * _0x285119;
      let _0x450bc3 = Math.max(Math.min(_0x539494 + Math.sin(_0x53e98e) * _0x285119, _0x44030b), _0x26697a);
      let _0x4cd2c2 = _0x436fa6 + Math.sin(_0x1b5e3a) * Math.cos(_0x53e98e) * _0x285119;
      const _0x539cd0 = _0xab784 * 0.4;
      const _0x10b53b = Math.sqrt(_0xceeb6a * _0xceeb6a + _0x4cd2c2 * _0x4cd2c2);
      if (_0x10b53b > _0x4bffad * 0.95) {
        _0xceeb6a *= _0x4bffad * 0.95 / _0x10b53b;
        _0x4cd2c2 *= _0x4bffad * 0.95 / _0x10b53b;
      }
      _0x22daca(_0x10032f, _0x539494, _0x436fa6, _0xab784, _0xceeb6a, _0x450bc3, _0x4cd2c2, _0x539cd0, _0x61ba34 + 1, le(_0x2c60d5, _0x441bd5, 850));
      _0x213242.push({
        x: _0xceeb6a,
        y: _0x450bc3,
        z: _0x4cd2c2,
        radius: _0x539cd0 * 25
      });
      if (_0x27b343 >= 4 && _0x2c60d5 < 485) {
        const _0x412cee = _0x1b5e3a + (le(_0x2c60d5, _0x441bd5, 860) - 0.5) * 2.2;
        const _0x562a38 = _0x285119 * 0.45;
        const _0x4b94dc = 0.1 + le(_0x2c60d5, _0x441bd5, 870) * 0.35;
        const _0x5e8b0f = _0x539cd0 * 0.5;
        let _0x4f01b4 = _0xceeb6a + Math.cos(_0x412cee) * Math.cos(_0x4b94dc) * _0x562a38;
        const _0x46cb67 = Math.max(Math.min(_0x450bc3 + Math.sin(_0x4b94dc) * _0x562a38, _0x44030b), _0x26697a);
        let _0x201e61 = _0x4cd2c2 + Math.sin(_0x412cee) * Math.cos(_0x4b94dc) * _0x562a38;
        const _0x1097b4 = Math.sqrt(_0x4f01b4 * _0x4f01b4 + _0x201e61 * _0x201e61);
        if (_0x1097b4 > _0x4bffad * 0.95) {
          _0x4f01b4 *= _0x4bffad * 0.95 / _0x1097b4;
          _0x201e61 *= _0x4bffad * 0.95 / _0x1097b4;
        }
        _0x22daca(_0xceeb6a, _0x450bc3, _0x4cd2c2, _0x539cd0, _0x4f01b4, _0x46cb67, _0x201e61, _0x5e8b0f * 0.3, _0x61ba34 + 2, le(_0x2c60d5, _0x441bd5, 880));
        _0x213242.push({
          x: _0x4f01b4,
          y: _0x46cb67,
          z: _0x201e61,
          radius: _0x5e8b0f * 15
        });
      }
    }
  }
  const _0x5ebc65 = 3 + Math.floor(le(0, 0, 2000) * 2);
  const _0xd5c3ff = _0x40061e(0.95);
  for (let _0x3b3ce0 = 0; _0x3b3ce0 < _0x5ebc65 && _0x2c60d5 < 470; _0x3b3ce0++) {
    const _0x2c157b = _0x3b3ce0 / _0x5ebc65 * Math.PI * 2 + le(_0x3b3ce0, 0, 2100) * 0.5;
    const _0x1e5157 = _0x4bffad * (0.1 + le(_0x3b3ce0, 0, 2200) * 0.25);
    const _0x15d972 = _0x16e7f2 * (0.3 + le(_0x3b3ce0, 0, 2300) * 0.12);
    const _0x13c1ba = 2 + Math.floor(le(_0x3b3ce0, 0, 2400));
    let _0x267545 = _0xd5c3ff.x;
    let _0x157db9 = _0xd5c3ff.y;
    let _0x514a91 = _0xd5c3ff.z;
    let _0x4a4c09 = _0x15d972;
    for (let _0x4796f1 = 0; _0x4796f1 < _0x13c1ba && _0x2c60d5 < 475; _0x4796f1++) {
      const _0x5c2f8d = (_0x4796f1 + 1) / _0x13c1ba;
      const _0x473603 = (le(_0x3b3ce0, _0x4796f1, 2500) - 0.5) * 0.01;
      const _0x1096b1 = (le(_0x3b3ce0, _0x4796f1, 2600) - 0.5) * 0.01;
      const _0x12999f = _0xd5c3ff.x + Math.cos(_0x2c157b) * _0x1e5157 * _0x5c2f8d + _0x473603;
      const _0x2d108c = _0xd5c3ff.y + (_0x44030b - _0xd5c3ff.y) * _0x5c2f8d * (0.7 + le(_0x3b3ce0, _0x4796f1, 2700) * 0.3);
      const _0x23fb48 = _0xd5c3ff.z + Math.sin(_0x2c157b) * _0x1e5157 * _0x5c2f8d + _0x1096b1;
      const _0x5d4efa = _0x4a4c09 * (0.5 + le(_0x3b3ce0, _0x4796f1, 2800) * 0.1);
      _0x22daca(_0x267545, _0x157db9, _0x514a91, _0x4a4c09, _0x12999f, _0x2d108c, _0x23fb48, _0x5d4efa, 1, le(_0x3b3ce0, _0x4796f1, 2900));
      _0x267545 = _0x12999f;
      _0x157db9 = _0x2d108c;
      _0x514a91 = _0x23fb48;
      _0x4a4c09 = _0x5d4efa;
    }
    _0x213242.push({
      x: _0x267545,
      y: _0x157db9,
      z: _0x514a91,
      radius: _0x4a4c09 * 35
    });
    _0x414b54(_0x267545, _0x157db9, _0x514a91, _0x4a4c09 * 0.7, _0x267545 + (le(_0x3b3ce0, 0, 3000) - 0.5) * _0x4bffad * 0.35, Math.max(Math.min(_0x157db9 + _0x4bffad * 0.08, _0x44030b), _0x26697a), _0x514a91 + (le(_0x3b3ce0, 0, 3100) - 0.5) * _0x4bffad * 0.35, _0x4a4c09 * 0.3, _0x2c157b, 2);
  }
  for (let _0x113cc4 = 0; _0x113cc4 < _0x53f698 && _0x2c60d5 < 470; _0x113cc4++) {
    const _0x35ba82 = _0x40061e(0.7 + le(_0x113cc4, 0, 1200) * 0.25);
    const _0x2e8134 = _0x113cc4 / _0x53f698 * Math.PI * 2 + (le(_0x113cc4, 0, 900) - 0.5) * 0.4;
    const _0xf33809 = _0x4bffad * (0.6 + le(_0x113cc4, 0, 1000) * 0.35);
    const _0xab260d = _0x1c95cd * (0.8 + le(_0x113cc4, 0, 1050) * 0.2);
    const _0x5348a2 = Math.cos(_0x2e8134) * _0xf33809;
    const _0x59bdbf = Math.sin(_0x2e8134) * _0xf33809;
    let _0x16df8d = _0x35ba82.x;
    let _0x50bf63 = _0x35ba82.y;
    let _0x1c1dca = _0x35ba82.z;
    let _0x225f0f = _0x16e7f2 * (0.4 + le(_0x113cc4, 0, 1100) * 0.15);
    for (let _0x5482d7 = 0; _0x5482d7 < 3 && _0x2c60d5 < 475; _0x5482d7++) {
      const _0x37aae9 = (_0x5482d7 + 1) / 3;
      const _0x29e1c9 = Math.sin(_0x37aae9 * Math.PI) * _0x4bffad * 0.3;
      const _0x5d0d43 = (le(_0x113cc4, _0x5482d7, 150) - 0.5) * 0.015;
      const _0x46bbb5 = (le(_0x113cc4, _0x5482d7, 250) - 0.5) * 0.015;
      const _0x5487d3 = _0x35ba82.x + (_0x5348a2 - _0x35ba82.x) * _0x37aae9 + _0x5d0d43;
      const _0x530e73 = _0x35ba82.y + (_0xab260d - _0x35ba82.y) * _0x37aae9 + _0x29e1c9 * (1 - _0x37aae9);
      const _0x18bf77 = _0x35ba82.z + (_0x59bdbf - _0x35ba82.z) * _0x37aae9 + _0x46bbb5;
      const _0x3901b7 = _0x225f0f * (0.55 + le(_0x113cc4, _0x5482d7, 350) * 0.1);
      _0x22daca(_0x16df8d, _0x50bf63, _0x1c1dca, _0x225f0f, _0x5487d3, _0x530e73, _0x18bf77, _0x3901b7, 1, le(_0x113cc4, _0x5482d7, 400));
      if (_0x5482d7 >= 1 && _0x2c60d5 < 470) {
        _0x414b54(_0x5487d3, _0x530e73, _0x18bf77, _0x3901b7 * 0.6, _0x5487d3 + (le(_0x113cc4, _0x5482d7, 610) - 0.5) * _0x4bffad * 0.45, Math.max(Math.min(_0x530e73 + _0x4bffad * (0.05 + le(_0x113cc4, _0x5482d7, 620) * 0.1), _0x44030b), _0x26697a), _0x18bf77 + (le(_0x113cc4, _0x5482d7, 630) - 0.5) * _0x4bffad * 0.45, _0x3901b7 * 0.25, _0x2e8134, 2);
      }
      _0x16df8d = _0x5487d3;
      _0x50bf63 = _0x530e73;
      _0x1c1dca = _0x18bf77;
      _0x225f0f = _0x3901b7;
    }
    _0x213242.push({
      x: _0x16df8d,
      y: _0x50bf63,
      z: _0x1c1dca,
      radius: _0x225f0f * 30
    });
  }
  return {
    segments: new Float32Array(_0x1503b3),
    segmentCount: _0x2c60d5,
    tips: _0x213242
  };
}
function ue(_0x3a8805, _0x530fdd) {
  const _0x2fcf19 = _0x530fdd.gridSize;
  const _0x44143a = _0x2fcf19 * $ * 0.5;
  const _0x34a707 = [];
  let _0x9010d = 0;
  const _0x381388 = 100000;
  function _0x491b2f(_0x1d0d89, _0x323eee) {
    return {
      col: (_0x1d0d89 + _0x44143a) / $,
      row: (_0x323eee + _0x44143a) / $
    };
  }
  function _0x3d5134(_0x1624bd, _0x36482c, _0x3718f4, _0x708a2) {
    if (!(_0x9010d >= _0x381388)) {
      _0x34a707.push(_0x1624bd, _0x36482c, _0x3718f4, _0x708a2);
      _0x9010d++;
    }
  }
  for (let _0xe98428 = 0; _0xe98428 < _0x3a8805.length; _0xe98428++) {
    const _0x4f0012 = _0x3a8805[_0xe98428];
    if (le(_0xe98428, 0, 780) < 0.01) {
      continue;
    }
    const _0x3299c9 = Math.sqrt(_0x4f0012.x * _0x4f0012.x + _0x4f0012.z * _0x4f0012.z);
    const _0x2bbbe7 = 1 + (1 - Math.min(1, _0x3299c9 / (_0x44143a * W))) * 0.45;
    const _0x11cdd4 = (1 + le(_0xe98428, 3, 790) * 0.3) * _0x2bbbe7;
    const _0x75f64a = Math.max(40, Math.floor(_0x4f0012.radius * 60 * _0x530fdd.canopyDensity * _0x11cdd4));
    const _0x5ce8f7 = _0x4f0012.radius * $ * 9 * _0x11cdd4;
    for (let _0x3f40f0 = 0; _0x3f40f0 < _0x75f64a; _0x3f40f0++) {
      const _0x14a522 = le(_0xe98428, _0x3f40f0, 800);
      const _0x5e2b6 = le(_0xe98428, _0x3f40f0, 810) * Math.PI * 2;
      const _0x132c91 = le(_0xe98428, _0x3f40f0, 820) * 2 - 1;
      const _0xb45b2a = Math.sqrt(1 - _0x132c91 * _0x132c91);
      const _0x51c242 = _0x5ce8f7 * Math.cbrt(le(_0xe98428, _0x3f40f0, 830));
      const _0x859f01 = _0x4f0012.x + _0x51c242 * _0xb45b2a * Math.cos(_0x5e2b6) * 1.5;
      const _0x5a59b4 = _0x4f0012.y + _0x51c242 * _0x132c91 * 1.1 + _0x5ce8f7 * 0.1;
      const _0x1b0006 = _0x491b2f(_0x859f01, _0x4f0012.z + _0x51c242 * _0xb45b2a * Math.sin(_0x5e2b6) * 1.5);
      _0x3d5134(_0x1b0006.col, _0x1b0006.row, _0x5a59b4, _0x14a522);
    }
    const _0x59794d = 6 + Math.floor(le(_0xe98428, 0, 1500) * 6);
    for (let _0x403ced = 0; _0x403ced < _0x59794d; _0x403ced++) {
      const _0x3d0c95 = le(_0xe98428, _0x403ced, 1600);
      const _0x35e4a5 = le(_0xe98428, _0x403ced, 1700) * Math.PI * 2;
      const _0x4af583 = _0x5ce8f7 * 0.5;
      const _0xc0b4e6 = _0x4f0012.x + Math.cos(_0x35e4a5) * _0x4af583;
      const _0x529457 = _0x4f0012.z + Math.sin(_0x35e4a5) * _0x4af583;
      const _0x93815b = _0x4f0012.y - q * (0.5 + le(_0xe98428, _0x403ced, 1900) * 2);
      const _0x450fc7 = _0x491b2f(_0xc0b4e6, _0x529457);
      _0x3d5134(_0x450fc7.col, _0x450fc7.row, _0x93815b, _0x3d0c95);
    }
    if (le(_0xe98428, 2, 900) < 0.5) {
      const _0x2ec00 = le(_0xe98428, 0, 910) + 1;
      const _0x2f08b0 = le(_0xe98428, 0, 920) * Math.PI * 2;
      const _0x1074eb = _0x4f0012.x + Math.cos(_0x2f08b0) * _0x5ce8f7 * 0.4;
      const _0x2e4d81 = _0x4f0012.z + Math.sin(_0x2f08b0) * _0x5ce8f7 * 0.4;
      const _0x3ff7df = _0x4f0012.y - 0.01225;
      const _0x4a0022 = _0x491b2f(_0x1074eb, _0x2e4d81);
      _0x3d5134(_0x4a0022.col, _0x4a0022.row, _0x3ff7df, _0x2ec00);
    }
  }
  if (_0x3a8805.length > 0 && _0x9010d < _0x381388) {
    let _0x10f730 = -Infinity;
    for (let _0x590352 = 0; _0x590352 < _0x3a8805.length; _0x590352++) {
      if (_0x3a8805[_0x590352].y > _0x10f730) {
        _0x10f730 = _0x3a8805[_0x590352].y;
      }
    }
    const _0x434b01 = Math.floor(Math.max(0.75, _0x530fdd.canopyDensity) * 120);
    const _0x3bdf00 = _0x44143a * W * 0.2;
    const _0x211c62 = _0x10f730 - 0.049;
    for (let _0xd712e = 0; _0xd712e < _0x434b01; _0xd712e++) {
      const _0x594041 = le(_0xd712e, 0, 5100) * Math.PI * 2;
      const _0x2439a1 = _0x3bdf00 * Math.sqrt(le(_0xd712e, 0, 5200));
      const _0xd54fc3 = Math.cos(_0x594041) * _0x2439a1;
      const _0x3bb07e = Math.sin(_0x594041) * _0x2439a1;
      const _0x244438 = _0x211c62 + (le(_0xd712e, 0, 5300) - 0.35) * q * 8;
      const _0x3d3272 = le(_0xd712e, 0, 5400);
      const _0x11ee78 = _0x491b2f(_0xd54fc3, _0x3bb07e);
      _0x3d5134(_0x11ee78.col, _0x11ee78.row, _0x244438, _0x3d3272);
    }
  }
  const _0x45a7e6 = _0x2fcf19 * W * $;
  for (let _0x397dc0 = 0; _0x397dc0 < 80; _0x397dc0++) {
    const _0x196a9c = le(_0x397dc0, 0, 4000) * Math.PI * 2;
    const _0x3ee931 = le(_0x397dc0, 0, 4100);
    const _0x4e7b3e = _0x45a7e6 * (0.1 + _0x3ee931 * _0x3ee931 * 0.75);
    const _0x2303f7 = Math.cos(_0x196a9c) * _0x4e7b3e;
    const _0x5a52f1 = Math.sin(_0x196a9c) * _0x4e7b3e;
    const _0x50f155 = le(_0x397dc0, 0, 4200);
    const _0x5455f1 = _0x491b2f(_0x2303f7, _0x5a52f1);
    _0x3d5134(_0x5455f1.col, _0x5455f1.row, 0.0294, _0x50f155);
  }
  const _0x1aa98b = new Float32Array(400000);
  _0x1aa98b.set(new Float32Array(_0x34a707));
  return {
    positions: _0x1aa98b,
    count: _0x9010d
  };
}
function ce(_0x529473) {
  const _0x158edb = _0x529473.length;
  const _0x496094 = _0x158edb / 2;
  const _0x4e288c = _0x158edb / 2;
  const _0x44267a = _0x158edb / 29;
  const _0x5c79d6 = Math.round(_0x44267a * 12) * q;
  const _0x46b675 = _0x158edb * W;
  const _0x3781ba = [];
  let _0x313c0f = 0;
  const _0x3fa930 = _0x46b675 * _0x46b675;
  for (let _0x528309 = 0; _0x528309 < _0x158edb; _0x528309++) {
    for (let _0x1ff797 = 0; _0x1ff797 < _0x158edb; _0x1ff797++) {
      const _0x31b9f9 = _0x1ff797 - _0x496094;
      const _0x492658 = _0x528309 - _0x4e288c;
      const _0x533ac0 = _0x31b9f9 * _0x31b9f9 + _0x492658 * _0x492658;
      if (_0x533ac0 < _0x3fa930 && _0x533ac0 >= 6.25) {
        const _0x579646 = 1 - Math.sqrt(_0x533ac0) / _0x46b675;
        const _0x4b0dab = Math.round(_0x44267a * 18);
        const _0xabfc6d = Math.max(4, Math.round(_0x4b0dab * (0.25 + _0x579646 * 0.75 * _0x579646))) + Math.floor(ne(_0x1ff797, _0x528309, 500) * 6 * _0x44267a);
        const _0x2c5886 = Math.floor(_0x579646 * 4.5 * _0x44267a) * q;
        const _0xf16cc7 = _0x5c79d6 + (_0xabfc6d - 1) * q + _0x2c5886 + q;
        const _0x2c5f55 = 4 + Math.floor(ne(_0x1ff797, _0x528309, 600) * 3);
        for (let _0x5e25dc = 0; _0x5e25dc < _0x2c5f55; _0x5e25dc++) {
          const _0x4425b5 = ne(_0x1ff797, _0x528309, 777 + _0x5e25dc);
          const _0x1607e3 = (ne(_0x1ff797, _0x528309, 800 + _0x5e25dc) - 0.5) * 1.2;
          const _0x13aa55 = (ne(_0x1ff797, _0x528309, 900 + _0x5e25dc) - 0.5) * 1.2;
          const _0x1e7c27 = (ne(_0x1ff797, _0x528309, 1000 + _0x5e25dc) - 0.6) * q * 2;
          _0x3781ba.push(_0x1ff797 + _0x1607e3, _0x528309 + _0x13aa55, _0xf16cc7 + _0x1e7c27, _0x4425b5);
          _0x313c0f++;
        }
        if (ne(_0x1ff797, _0x528309, 1100) < 0.35) {
          const _0x2970f8 = ne(_0x1ff797, _0x528309, 1200) + 1;
          const _0x2ee6bc = (ne(_0x1ff797, _0x528309, 1300) - 0.5) * 0.5;
          const _0x586b16 = (ne(_0x1ff797, _0x528309, 1400) - 0.5) * 0.5;
          _0x3781ba.push(_0x1ff797 + _0x2ee6bc, _0x528309 + _0x586b16, _0xf16cc7 - 0.0245, _0x2970f8);
          _0x313c0f++;
        }
      }
    }
  }
  return {
    positions: _0x3781ba,
    count: _0x313c0f
  };
}
function fe(_0x20367e, _0x1d3800) {
  const _0x462aab = [];
  let _0x324d25 = 0;
  const _0x47c257 = _0x20367e / 2;
  const _0x2e15e5 = _0x20367e / 2;
  const _0xaa6940 = _0x20367e * W;
  const _0x4e77ff = _0xaa6940 * _0xaa6940;
  for (let _0x4fc3f0 = 0; _0x4fc3f0 < _0x20367e; _0x4fc3f0++) {
    for (let _0x444372 = 0; _0x444372 < _0x20367e && _0x324d25 < 50000; _0x444372++) {
      const _0xdb17ed = _0x444372 - _0x47c257;
      const _0x356079 = _0x4fc3f0 - _0x2e15e5;
      const _0x363a6d = _0xdb17ed * _0xdb17ed + _0x356079 * _0x356079;
      if (_0x363a6d < 25) {
        continue;
      }
      if (!_0x1d3800?.[_0x4fc3f0]?.[_0x444372]) {
        continue;
      }
      if (_0x363a6d < _0x4e77ff) {
        continue;
      }
      const _0x397f3e = 14 + Math.floor(ne(_0x444372, _0x4fc3f0, 5100) * 8);
      for (let _0x2b1b41 = 0; _0x2b1b41 < _0x397f3e && _0x324d25 < 50000; _0x2b1b41++) {
        const _0x12a942 = ne(_0x444372, _0x4fc3f0, 5200 + _0x2b1b41);
        const _0x4edfd3 = (ne(_0x444372, _0x4fc3f0, 5300 + _0x2b1b41) - 0.5) * 0.85;
        const _0x2a8cec = (ne(_0x444372, _0x4fc3f0, 5400 + _0x2b1b41) - 0.5) * 0.85;
        const _0x4f9ab8 = $ * (0.5 + ne(_0x444372, _0x4fc3f0, 5500 + _0x2b1b41) * 1.2);
        _0x462aab.push(_0x444372 + _0x4edfd3, _0x4fc3f0 + _0x2a8cec, _0x12a942, _0x4f9ab8);
        _0x324d25++;
      }
    }
  }
  const _0x1f8674 = new Float32Array(200000);
  _0x1f8674.set(new Float32Array(_0x462aab));
  return {
    positions: _0x1f8674,
    count: _0x324d25
  };
}
function de(_0x37cd31, _0x5e35d9, _0x56239b = 10) {
  const _0x75b573 = _0x5e35d9 * $ * 0.5;
  const _0x3ae270 = [];
  let _0x1c586e = 0;
  if (_0x37cd31.length === 0) {
    return {
      positions: new Float32Array(_0x56239b * 4),
      count: 0
    };
  }
  for (let _0xe8fadc = 0; _0xe8fadc < _0x56239b; _0xe8fadc++) {
    const _0x3eab59 = _0x37cd31[Math.floor(le(_0xe8fadc, 0, 5000) * _0x37cd31.length) % _0x37cd31.length];
    const _0x2ade1d = le(_0xe8fadc, 0, 5100);
    const _0x7e3341 = le(_0xe8fadc, 0, 5200) * Math.PI * 2;
    const _0x5e1d3a = _0x3eab59.radius * $ * 1.5 * le(_0xe8fadc, 0, 5300);
    const _0x340321 = _0x3eab59.x + Math.cos(_0x7e3341) * _0x5e1d3a;
    const _0x55221a = _0x3eab59.z + Math.sin(_0x7e3341) * _0x5e1d3a;
    const _0xc8920b = _0x3eab59.y + q * (0.5 + le(_0xe8fadc, 0, 5400) * 1);
    const _0x19834c = (_0x340321 + _0x75b573) / $;
    const _0x1748ea = (_0x55221a + _0x75b573) / $;
    _0x3ae270.push(_0x19834c, _0x1748ea, _0xc8920b, _0x2ade1d);
    _0x1c586e++;
  }
  const _0x4f6eb1 = new Float32Array(_0x56239b * 4);
  _0x4f6eb1.set(new Float32Array(_0x3ae270));
  return {
    positions: _0x4f6eb1,
    count: _0x1c586e
  };
}
function pe(_0x35dd00) {
  const _0x3e6c3b = new Float32Array(2000);
  const _0x1a5dc8 = _0x35dd00 * 1.2;
  for (let _0x46d318 = 0; _0x46d318 < 500; _0x46d318++) {
    const _0xd74b3e = le(_0x46d318, 0, 8000) * _0x1a5dc8 - (_0x1a5dc8 - _0x35dd00) * 0.5;
    const _0x419de7 = le(_0x46d318, 0, 8100) * _0x1a5dc8 - (_0x1a5dc8 - _0x35dd00) * 0.5;
    const _0x1ba7a5 = le(_0x46d318, 0, 8200);
    const _0x2fb8b5 = le(_0x46d318, 0, 8300);
    _0x3e6c3b[_0x46d318 * 4] = _0xd74b3e;
    _0x3e6c3b[_0x46d318 * 4 + 1] = _0x419de7;
    _0x3e6c3b[_0x46d318 * 4 + 2] = _0x1ba7a5;
    _0x3e6c3b[_0x46d318 * 4 + 3] = _0x2fb8b5;
  }
  return {
    positions: _0x3e6c3b,
    count: 500
  };
}
function he(_0x24d894) {
  const _0x4d6338 = _0x24d894 * 0.46;
  const _0x561931 = new Float32Array(40);
  for (let _0x2395f5 = 0; _0x2395f5 < 10; _0x2395f5++) {
    const _0x48b245 = _0x4d6338 * (0.35 + le(_0x2395f5, 0, 9000) * 0.55);
    const _0x3cb79c = 0.25 + le(_0x2395f5, 0, 9100) * 0.3;
    const _0x2ac722 = 4 + le(_0x2395f5, 0, 9200) * 9;
    const _0x1914ee = le(_0x2395f5, 0, 9300);
    _0x561931[_0x2395f5 * 4] = _0x48b245;
    _0x561931[_0x2395f5 * 4 + 1] = _0x3cb79c;
    _0x561931[_0x2395f5 * 4 + 2] = _0x2ac722;
    _0x561931[_0x2395f5 * 4 + 3] = _0x1914ee;
  }
  return {
    positions: _0x561931,
    count: 10
  };
}
function ge(_0x316ce1, _0xbf09a2) {
  return _0x316ce1.createBuffer({
    size: _0xbf09a2,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
  });
}
function me(_0x24430e, _0x1678a2) {
  return _0x24430e.createBuffer({
    size: _0x1678a2,
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
  });
}
var ve = {
  color: {
    srcFactor: "one",
    dstFactor: "one-minus-src-alpha",
    operation: "add"
  },
  alpha: {
    srcFactor: "one",
    dstFactor: "one-minus-src-alpha",
    operation: "add"
  }
};
function be(_0x5396fb, _0x4417a4, _0x2c83d9, _0x438831) {
  const _0x5688cb = _0x5396fb.createShaderModule({
    code: _0x438831.vertex
  });
  const _0x391502 = _0x5396fb.createShaderModule({
    code: _0x438831.fragment
  });
  _0x5688cb.getCompilationInfo().then(_0x325ab5 => {
    for (const _0x42c623 of _0x325ab5.messages) {
      if (_0x42c623.type === "error") {
        console.error("Vertex shader error:", _0x42c623.message, "line:", _0x42c623.lineNum);
      }
    }
  });
  _0x391502.getCompilationInfo().then(_0x8dadc2 => {
    for (const _0x3225f8 of _0x8dadc2.messages) {
      if (_0x3225f8.type === "error") {
        console.error("Fragment shader error:", _0x3225f8.message, "line:", _0x3225f8.lineNum);
      }
    }
  });
  return _0x5396fb.createRenderPipeline({
    layout: _0x5396fb.createPipelineLayout({
      bindGroupLayouts: [_0x2c83d9]
    }),
    vertex: {
      module: _0x5688cb,
      entryPoint: "main"
    },
    fragment: {
      module: _0x391502,
      entryPoint: "main",
      targets: [{
        format: _0x4417a4,
        blend: _0x438831.blend ?? ve
      }]
    },
    primitive: {
      topology: "triangle-list",
      cullMode: "none"
    },
    depthStencil: {
      depthWriteEnabled: _0x438831.depthWrite,
      depthCompare: _0x438831.depthCompare,
      format: "depth24plus"
    }
  });
}
var ye = "\nstruct Uniforms {\n  aspectRatio: f32,\n  time: f32,\n  blockCount: f32,\n  progress: f32,\n  gridSize: f32,\n  cameraBobX: f32,\n  cameraBobY: f32,\n  season: f32,       // 0=spring, 1=summer, 2=autumn\n  burstTime: f32,    // time when burst was triggered\n  customR: f32,      // custom flower color R\n  customG: f32,      // custom flower color G\n  customB: f32,      // custom flower color B\n  customStrength: f32, // blend strength for custom color\n  rainMode: f32,     // 0=clear, 1=rain (auto for autumn)\n  trunkSeed: f32,   // 0..1 per-session bark variation seed\n  _pad2: f32,\n}\n";
function we(_0x1e8f73 = "localPos") {
  return "\n  let isoAngleY = mix(0.78, 0, progress) + uniforms.cameraBobX;\n  let isoAngleX = mix(-0.55, -1.5708, progress) + uniforms.cameraBobY;\n\n  let cy = cos(isoAngleY); let sy = sin(isoAngleY);\n  let cx = cos(isoAngleX); let sx = sin(isoAngleX);\n\n  let ry_x = " + _0x1e8f73 + ".x * cy - " + _0x1e8f73 + ".z * sy;\n  let ry_z = " + _0x1e8f73 + ".x * sy + " + _0x1e8f73 + ".z * cy;\n  let rx_y = " + _0x1e8f73 + ".y * cx - ry_z * sx;\n  let rx_z = " + _0x1e8f73 + ".y * sx + ry_z * cx;\n\n  let portraitBoost = select(1.0, 1.2, uniforms.aspectRatio < 0.8);\n  let viewScale = (mix(" + 37.7.toFixed(2) + ", " + 46.400000000000006.toFixed(2) + ", progress) / uniforms.gridSize) * portraitBoost;\n  let ar = uniforms.aspectRatio;\n  let scaleX = viewScale / max(ar, 1.0);\n  let scaleY = viewScale / max(1.0 / ar, 1.0);\n\n  let yOffsetScene = mix(-0.06, 0.08, progress);\n  let xOffsetScene = mix(0.0, 0.015, progress);\n";
}
var ke = "0.0245";
var xe = "\nfn acesFilm(x: vec3f) -> vec3f {\n  let a = 2.51; let b = 0.03; let c = 2.43; let d = 0.59; let e = 0.14;\n  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), vec3f(0.0), vec3f(1.0));\n}\n";
function Se(_0x113124, _0x78f0a7, _0x17b9d1, _0x48fd67, _0x88c97d, _0x5114a0, _0x3fdc95, _0x57feaf, _0x2a9b8a, _0x6807c1) {
  const {
    device: _0xf2fdd0,
    buffers: _0x5ccbaf
  } = _0x113124;
  (function (_0x257095, _0x15a120, _0x51230d) {
    _0x257095.queue.writeBuffer(_0x15a120.typeBuffer, 0, _0x51230d.types);
    _0x257095.queue.writeBuffer(_0x15a120.posBuffer, 0, _0x51230d.positions);
    _0x257095.queue.writeBuffer(_0x15a120.heightBuffer, 0, _0x51230d.heights);
    _0x257095.queue.writeBuffer(_0x15a120.baseYBuffer, 0, _0x51230d.baseY);
  })(_0xf2fdd0, _0x5ccbaf, _0x78f0a7);
  _0x113124.counts.numBlocks = _0x78f0a7.numBlocks;
  _0x113124.counts.gridSize = _0x78f0a7.gridSize;
  const _0x20a40f = _0x113124._branchUpload;
  _0x20a40f.fill(0);
  _0x20a40f.set(_0x17b9d1.segments);
  _0xf2fdd0.queue.writeBuffer(_0x5ccbaf.branchBuffer, 0, _0x20a40f);
  _0x113124.counts.segmentCount = _0x17b9d1.segmentCount;
  const _0x5df3cd = _0x48fd67.count + _0x5114a0;
  const _0x2d3ed0 = _0x113124._flowerUpload;
  _0x2d3ed0.fill(0);
  _0x2d3ed0.set(_0x48fd67.positions);
  for (let _0x293520 = 0; _0x293520 < _0x5114a0 * 4; _0x293520++) {
    _0x2d3ed0[_0x48fd67.count * 4 + _0x293520] = _0x88c97d[_0x293520];
  }
  _0xf2fdd0.queue.writeBuffer(_0x5ccbaf.flowerBuffer, 0, _0x2d3ed0);
  _0x113124.counts.flowerCount = _0x5df3cd;
  _0xf2fdd0.queue.writeBuffer(_0x5ccbaf.grassBuffer, 0, _0x3fdc95.positions);
  _0x113124.counts.grassCount = _0x3fdc95.count;
  const _0x19e583 = _0x113124._petalUpload;
  _0x19e583.fill(0);
  _0x19e583.set(_0x57feaf.positions);
  _0xf2fdd0.queue.writeBuffer(_0x5ccbaf.fallingPetalBuffer, 0, _0x19e583);
  _0x113124.counts.petalCount = _0x57feaf.count;
  if (_0x2a9b8a) {
    const _0x218fe3 = _0x113124._rainUpload;
    _0x218fe3.fill(0);
    _0x218fe3.set(_0x2a9b8a.positions);
    _0xf2fdd0.queue.writeBuffer(_0x5ccbaf.rainBuffer, 0, _0x218fe3);
    _0x113124.counts.rainCount = _0x2a9b8a.count;
  }
  if (_0x6807c1) {
    const _0x9b7c82 = _0x113124._butterflyUpload;
    _0x9b7c82.fill(0);
    _0x9b7c82.set(_0x6807c1.positions);
    _0xf2fdd0.queue.writeBuffer(_0x5ccbaf.butterflyBuffer, 0, _0x9b7c82);
    _0x113124.counts.butterflyCount = _0x6807c1.count;
  }
}
function Ce(_0x778c68, _0x4a15bf) {
  const {
    device: _0x5980a0,
    context: _0x36df41,
    buffers: _0x5ce5cf,
    pipelines: _0x5e02fb,
    bindGroups: _0x1ff786,
    counts: _0x115046
  } = _0x778c68;
  const _0x49c9f6 = _0x778c68._uniformArr;
  _0x49c9f6[0] = _0x778c68.aspectRatio;
  _0x49c9f6[1] = _0x4a15bf.time;
  _0x49c9f6[3] = _0x4a15bf.progress;
  _0x49c9f6[4] = _0x115046.gridSize;
  _0x49c9f6[5] = _0x4a15bf.cameraBobX;
  _0x49c9f6[6] = _0x4a15bf.cameraBobY;
  _0x49c9f6[7] = _0x4a15bf.season;
  _0x49c9f6[8] = _0x4a15bf.burstTime;
  _0x49c9f6[9] = _0x4a15bf.customR;
  _0x49c9f6[10] = _0x4a15bf.customG;
  _0x49c9f6[11] = _0x4a15bf.customB;
  _0x49c9f6[12] = _0x4a15bf.customStrength;
  _0x49c9f6[13] = _0x4a15bf.rainMode;
  _0x49c9f6[14] = _0x4a15bf.trunkSeed;
  _0x49c9f6[15] = 0;
  _0x49c9f6[2] = _0x115046.numBlocks;
  _0x5980a0.queue.writeBuffer(_0x5ce5cf.blockUniforms, 0, _0x49c9f6);
  _0x49c9f6[2] = _0x115046.segmentCount;
  _0x5980a0.queue.writeBuffer(_0x5ce5cf.branchUniforms, 0, _0x49c9f6);
  _0x49c9f6[2] = _0x115046.grassCount;
  _0x5980a0.queue.writeBuffer(_0x5ce5cf.grassUniforms, 0, _0x49c9f6);
  _0x49c9f6[2] = _0x115046.petalCount;
  _0x5980a0.queue.writeBuffer(_0x5ce5cf.petalUniforms, 0, _0x49c9f6);
  _0x49c9f6[2] = _0x115046.rainCount;
  _0x5980a0.queue.writeBuffer(_0x5ce5cf.rainUniforms, 0, _0x49c9f6);
  _0x49c9f6[2] = _0x115046.butterflyCount;
  _0x5980a0.queue.writeBuffer(_0x5ce5cf.butterflyUniforms, 0, _0x49c9f6);
  const _0x1728fc = _0x5980a0.createCommandEncoder();
  const _0xb56c7c = _0x36df41.getCurrentTexture().createView();
  const _0x202404 = !_0x778c68.isMobile && _0x4a15bf.progress > 0 && _0x4a15bf.progress < 1 && _0x5e02fb.blur;
  const _0x235809 = _0x202404 ? _0x778c68.sceneTextureView : _0xb56c7c;
  const _0x11b771 = _0x1728fc.beginRenderPass({
    colorAttachments: [{
      view: _0x235809,
      clearValue: _0x4a15bf.season > 2.5 ? { r: 0.88, g: 0.91, b: 0.94, a: 1 } : { r: 0.965, g: 0.945, b: 0.906, a: 1 },
      loadOp: "clear",
      storeOp: "store"
    }],
    depthStencilAttachment: {
      view: _0x778c68.depthTextureView,
      depthClearValue: 1,
      depthLoadOp: "clear",
      depthStoreOp: "store"
    }
  });
  _0x11b771.setPipeline(_0x5e02fb.sky);
  _0x11b771.setBindGroup(0, _0x1ff786.sky);
  _0x11b771.draw(3);
  _0x11b771.setPipeline(_0x5e02fb.shadow);
  _0x11b771.setBindGroup(0, _0x1ff786.shadow);
  _0x11b771.draw(6);
  _0x11b771.setPipeline(_0x5e02fb.blocks);
  _0x11b771.setBindGroup(0, _0x1ff786.blocks);
  _0x11b771.draw(_0x115046.numBlocks * 36);
  if (_0x115046.grassCount > 0 && _0x5e02fb.grass) {
    _0x11b771.setPipeline(_0x5e02fb.grass);
    _0x11b771.setBindGroup(0, _0x1ff786.grass);
    _0x11b771.draw(_0x115046.grassCount * 3);
  }
  if (_0x115046.segmentCount > 0 && _0x5e02fb.branches) {
    _0x11b771.setPipeline(_0x5e02fb.branches);
    _0x11b771.setBindGroup(0, _0x1ff786.branches);
    _0x11b771.draw(_0x115046.segmentCount * 48);
  }
  if (_0x115046.flowerCount > 0) {
    _0x11b771.setPipeline(_0x5e02fb.flowers);
    _0x11b771.setBindGroup(0, _0x1ff786.flowers);
    _0x11b771.draw(_0x115046.flowerCount * 150);
  }
  if (_0x115046.petalCount > 0 && _0x5e02fb.fallingPetals) {
    _0x11b771.setPipeline(_0x5e02fb.fallingPetals);
    _0x11b771.setBindGroup(0, _0x1ff786.fallingPetals);
    _0x11b771.draw(_0x115046.petalCount * 150);
  }
  if (_0x115046.rainCount > 0 && _0x5e02fb.rain && _0x4a15bf.rainMode > 0.01) {
    _0x11b771.setPipeline(_0x5e02fb.rain);
    _0x11b771.setBindGroup(0, _0x1ff786.rain);
    _0x11b771.draw(_0x115046.rainCount * 6);
  }
  if (_0x115046.butterflyCount > 0 && _0x5e02fb.butterflies) {
    _0x11b771.setPipeline(_0x5e02fb.butterflies);
    _0x11b771.setBindGroup(0, _0x1ff786.butterflies);
    _0x11b771.draw(_0x115046.butterflyCount * 6);
  }
  _0x11b771.end();
  if (_0x202404) {
    const _0x403294 = _0x1728fc.beginRenderPass({
      colorAttachments: [{
        view: _0xb56c7c,
        clearValue: {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        },
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    _0x403294.setPipeline(_0x5e02fb.blur);
    _0x403294.setBindGroup(0, _0x1ff786.blur);
    _0x403294.draw(3);
    _0x403294.end();
  }
  _0x5980a0.queue.submit([_0x1728fc.finish()]);
}
function Ee(_0x2fd5e7) {
  let _0x4d2441 = 0;
  for (let _0x947d6d = 0; _0x947d6d < _0x2fd5e7.length; _0x947d6d++) {
    _0x4d2441 = Math.imul(31, _0x4d2441) + _0x2fd5e7.charCodeAt(_0x947d6d) | 0;
  }
  return Math.abs(_0x4d2441) % 99991 + 1;
}
var Te = {
  container: {
    backgroundColor: "#f6f1e7",
    width: "100%",
    height: "100dvh",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden"
  },
  canvasWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  topLogoLink: {
    position: "absolute",
    top: "calc(12px + env(safe-area-inset-top, 0px))",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 3,
    pointerEvents: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12
  },
  topLogoLinkWide: {
    left: "max(16px, env(safe-area-inset-left, 0px))",
    transform: "none"
  },
  topLogoImage: {
    width: "min(163px, calc(62.5vw - 18px))",
    height: "auto",
    display: "block"
  },
  scanQrOverlay: {
    position: "absolute",
    inset: 0,
    pointerEvents: "none"
  },
  canvas: {
    backgroundColor: "#f6f1e7"
  },
  controlsOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "max(8px, env(safe-area-inset-bottom, 0px))",
    pointerEvents: "none"
  },
  helperText: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "rgba(92, 79, 63, 0.78)",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 0.12,
    lineHeight: 1.3,
    minHeight: 34,
    maxWidth: "min(92vw, 360px)",
    padding: "8px 14px",
    marginBottom: 10,
    borderRadius: 9999,
    border: "1px solid rgba(158, 142, 121, 0.2)",
    background: "rgba(248, 242, 232, 0.76)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "none",
    pointerEvents: "auto",
    cursor: "pointer",
    textShadow: "none"
  },
  helperTextError: {
    color: "#dc2626",
    border: "1px solid rgba(220, 38, 38, 0.22)",
    background: "rgba(254, 242, 242, 0.9)",
    cursor: "default"
  },
  inputContainer: {
    padding: "10px 10px 10px",
    width: "min(640px, calc(100% - 16px))",
    maxWidth: "100%",
    boxSizing: "border-box",
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    borderRadius: "18px 18px 0 0",
    border: "none",
    background: "rgba(247, 241, 231, 0.62)",
    boxShadow: "none",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)"
  },
  inputContainerMobile: {
    padding: "8px 12px 8px",
    borderRadius: "16px 16px 0 0",
    gap: 6,
    width: "100%"
  },
  inputRow: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  },
  input: {
    flex: 1,
    height: 48,
    backgroundColor: "rgba(255, 250, 242, 0.9)",
    borderRadius: 12,
    border: "1px solid rgba(156, 140, 119, 0.26)",
    boxShadow: "none",
    color: "#3f352b",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 0.1,
    padding: "0 14px",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "inherit",
    minWidth: 0,
    transition: "background-color 0.2s ease, border-color 0.2s ease"
  },
  inputFocused: {
    backgroundColor: "rgba(255, 252, 247, 0.98)",
    borderColor: "rgba(128, 112, 91, 0.4)"
  },
  submitBtn: {
    width: 48,
    height: 48,
    borderRadius: 14,
    border: "none",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    fontSize: 20,
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    transition: "all 0.2s"
  },
  submitBtnDisabled: {
    backgroundColor: "#ccc",
    color: "#999",
    cursor: "not-allowed"
  },
  inputError: {
    backgroundColor: "rgba(254, 242, 242, 0.95)",
    borderColor: "rgba(194, 108, 108, 0.42)"
  },
  seasonRow: {
    display: "flex",
    gap: 6,
    marginTop: 0,
    alignItems: "center"
  },
  seasonRowMobile: {
    marginTop: 0,
    gap: 5
  },
  seasonBtn: {
    flex: 1,
    minHeight: 48,
    padding: "0 10px",
    borderRadius: 11,
    border: "none",
    backgroundColor: "rgba(253, 247, 238, 0.78)",
    color: "#5f4e3d",
    fontSize: 12,
    fontWeight: 500,
    cursor: "pointer",
    transition: "all 0.22s ease",
    fontFamily: "inherit",
    boxShadow: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  seasonBtnActive: {
    border: "none",
    backgroundColor: "rgba(238, 227, 209, 0.95)",
    color: "#3f352b",
    fontWeight: 600,
    boxShadow: "none"
  },
  muteBtn: {
    width: 48,
    height: 48,
    borderRadius: 11,
    border: "none",
    backgroundColor: "rgba(253, 247, 238, 0.78)",
    color: "#5f4e3d",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "none",
    transition: "all 0.22s ease"
  },
  iconBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: "none",
    backgroundColor: "rgba(244, 233, 216, 0.94)",
    color: "#4c3f33",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "none",
    transition: "all 0.22s ease"
  },
  scanQrBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: "1px solid rgba(160, 143, 121, 0.28)",
    backgroundColor: "rgba(255, 248, 238, 0.9)",
    color: "#473a2f",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "none",
    transition: "all 0.22s ease"
  },
  shareBtn: {
    width: 48,
    height: 48,
    borderRadius: 12,
    border: "none",
    backgroundColor: "#c07a3a",
    color: "#fff9f1",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 1px 0 rgba(123, 77, 38, 0.25)",
    transition: "all 0.22s ease"
  },
  iconBtnActive: {
    border: "none",
    backgroundColor: "rgba(232, 219, 199, 0.96)",
    color: "#3f352b",
    boxShadow: "none"
  },
  muteBtnActive: {
    border: "none",
    backgroundColor: "rgba(238, 227, 209, 0.95)",
    color: "#3f352b",
    boxShadow: "none"
  },
  generateAnotherBtn: {
    width: "100%",
    height: 48,
    border: "none",
    borderRadius: 12,
    backgroundColor: "#c07a3a",
    color: "#fff9f1",
    boxShadow: "0 1px 0 rgba(123, 77, 38, 0.25)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    transition: "all 0.22s ease",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 600,
    padding: "0 16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  visitLinkBtn: {
    width: "100%",
    height: 48,
    border: "1px solid rgba(160, 143, 121, 0.28)",
    borderRadius: 12,
    backgroundColor: "rgba(255, 248, 238, 0.9)",
    color: "#473a2f",
    boxShadow: "none",
    transition: "all 0.22s ease",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 600,
    padding: "0 16px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  },
  sharedActionRow: {
    display: "flex",
    gap: 8,
    alignItems: "center"
  },
  sharedActionBtn: {
    flex: 1,
    minWidth: 0
  },
  paletteRow: {
    display: "flex",
    gap: 8,
    marginTop: 0,
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    transition: "opacity 0.3s",
    minHeight: 34,
    alignItems: "center"
  },
  paletteRowMobile: {
    gap: 6,
    marginTop: 0
  },
  paletteSwatch: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    minWidth: 0,
    minHeight: 0,
    boxSizing: "border-box",
    boxShadow: "none",
    transition: "transform 0.2s ease",
    WebkitTapHighlightColor: "transparent",
    touchAction: "manipulation"
  },
  paletteSwatchMobile: {
    width: 24,
    height: 24
  },
  paletteSwatchActive: {
    border: "none",
    outline: "2px solid rgba(95, 78, 61, 0.72)",
    outlineOffset: 1,
    boxShadow: "none",
    transform: "translateY(-1px)"
  },
  receiverRow: {
    display: "flex",
    gap: 8,
    marginTop: 0,
    justifyContent: "center"
  },
  sharePopoverWrap: {
    position: "relative"
  },
  sharePopoverBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 10,
    pointerEvents: "auto"
  },
  sharePopover: {
    position: "absolute",
    bottom: "calc(100% + 10px)",
    right: 0,
    minWidth: 190,
    padding: 6,
    borderRadius: 14,
    border: "1px solid rgba(158, 142, 121, 0.22)",
    background: "rgba(252, 248, 240, 0.92)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxShadow: "0 8px 32px rgba(80, 60, 30, 0.12), 0 1px 3px rgba(80, 60, 30, 0.08)",
    zIndex: 11,
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  sharePopoverItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 14px",
    borderRadius: 10,
    border: "none",
    outline: "none",
    background: "none",
    WebkitAppearance: "none",
    color: "#3f352b",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "background-color 0.15s ease",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent"
  },
  sharePopoverItemHover: {
    backgroundColor: "rgba(238, 227, 209, 0.7)"
  },
  sharePopoverIcon: {
    width: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "#6b5a48"
  },
  errorMessage: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: 40,
    textAlign: "center",
    color: "#666"
  },
  creditsHintWrap: {
    position: "absolute",
    right: "max(12px, env(safe-area-inset-right, 0px))",
    top: "max(12px, env(safe-area-inset-top, 0px))",
    zIndex: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    height: 28,
    pointerEvents: "auto"
  },
  githubButton: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    background: "transparent",
    color: "#5f4e3d",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    transition: "color 0.2s ease, transform 0.2s ease"
  },
  creditsHintButton: {
    width: 28,
    height: 28,
    border: "none",
    borderRadius: "50%",
    background: "transparent",
    color: "#5f4e3d",
    fontFamily: "inherit",
    lineHeight: 1,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    boxShadow: "none"
  },
  creditsHintTooltip: {
    position: "absolute",
    top: "calc(100% + 8px)",
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 0
  },
  creditsHintCard: {
    minWidth: 220,
    maxWidth: "min(84vw, 320px)",
    padding: "8px 10px",
    borderRadius: 10,
    border: "1px solid rgba(158, 142, 121, 0.28)",
    background: "rgba(252, 248, 240, 0.96)",
    color: "#5f4e3d",
    fontSize: 11,
    lineHeight: 1.35,
    textAlign: "left",
    boxShadow: "0 6px 18px rgba(80, 60, 30, 0.14)"
  },
  creditsHintArrow: {
    width: 0,
    height: 0,
    marginBottom: -1,
    marginRight: 8,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderBottom: "6px solid rgba(252, 248, 240, 0.96)"
  },
  creditsHintLink: {
    color: "#7d4f24",
    textDecoration: "underline",
    textUnderlineOffset: 2,
    whiteSpace: "nowrap"
  }
};
var Pe = a(_0x3a406e => {
  var _0x13dc84 = Symbol.for("react.transitional.element");
  var _0x233478 = Symbol.for("react.fragment");
  function _0x1c8865(_0x495fb0, _0x3a8963, _0x253769) {
    var _0x1e915a = null;
    if (_0x253769 !== undefined) {
      _0x1e915a = "" + _0x253769;
    }
    if (_0x3a8963.key !== undefined) {
      _0x1e915a = "" + _0x3a8963.key;
    }
    if ("key" in _0x3a8963) {
      _0x253769 = {};
      for (var _0x441921 in _0x3a8963) {
        if (_0x441921 !== "key") {
          _0x253769[_0x441921] = _0x3a8963[_0x441921];
        }
      }
    } else {
      _0x253769 = _0x3a8963;
    }
    _0x3a8963 = _0x253769.ref;
    return {
      $$typeof: _0x13dc84,
      type: _0x495fb0,
      key: _0x1e915a,
      ref: _0x3a8963 !== undefined ? _0x3a8963 : null,
      props: _0x253769
    };
  }
  _0x3a406e.Fragment = _0x233478;
  _0x3a406e.jsx = _0x1c8865;
  _0x3a406e.jsxs = _0x1c8865;
});
var ze = a((_0x5f402a, _0x41e66e) => {
  _0x41e66e.exports = Pe();
})();
var Me = [{
  label: "Predeterminado",
  color: "#e8a0b0",
  rgb: [0, 0, 0]
}, {
  label: "Lavanda",
  color: "#9b6fc0",
  rgb: [0.58, 0.3, 0.82]
}, {
  label: "Rojo coral",
  color: "#e83030",
  rgb: [0.95, 0.18, 0.15]
}, {
  label: "Dorado",
  color: "#e8a800",
  rgb: [0.95, 0.68, 0.02]
}, {
  label: "Azul cielo",
  color: "#3a8ef5",
  rgb: [0.22, 0.55, 0.96]
}, {
  label: "Blanco nieve",
  color: "#dfe6e9",
  rgb: [0.87, 0.9, 0.91]
}, {
  label: "Verde esmeralda",
  color: "#20a879",
  rgb: [0.08, 0.66, 0.47]
}, {
  label: "Turquesa",
  color: "#22b8b0",
  rgb: [0.05, 0.72, 0.69]
}, {
  label: "Azul noche",
  color: "#344b9b",
  rgb: [0.16, 0.22, 0.61]
}, {
  label: "Fucsia",
  color: "#d94b9b",
  rgb: [0.82, 0.15, 0.52]
}, {
  label: "Naranja",
  color: "#f08a35",
  rgb: [0.94, 0.39, 0.08]
}, {
  label: "Negro carbón",
  color: "#41454b",
  rgb: [0.20, 0.22, 0.25]
}];
var Le = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true
};
var Ae = {
  github: <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  winter: <svg {...Le}><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93M8 4l4 4 4-4M8 20l4-4 4 4M4 8l4 4-4 4M20 8l-4 4 4 4" /></svg>,
  qrScan: <svg {...Le}><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" /><rect width="8" height="8" x="8" y="8" rx="1" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></svg>,
  spring: <svg {...Le}><circle cx="12" cy="12" r="3" /><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" /><path d="M12 7.5V9" /><path d="M7.5 12H9" /><path d="M16.5 12H15" /><path d="M12 16.5V15" /><path d="m8 8 1.88 1.88" /><path d="M14.12 9.88 16 8" /><path d="m8 16 1.88-1.88" /><path d="M14.12 14.12 16 16" /></svg>,
  summer: <svg {...Le}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>,
  fall: <svg {...Le}><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M16 14v6" /><path d="M8 14v6" /><path d="M12 16v6" /></svg>,
  share: <svg {...Le}><path d="M12 2v13" /><path d="m16 6-4-4-4 4" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /></svg>,
  muted: <svg {...Le}><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><line x1="22" x2="16" y1="9" y2="15" /><line x1="16" x2="22" y1="9" y2="15" /></svg>,
  unmuted: <svg {...Le}><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" /><path d="M16 9a5 5 0 0 1 0 6" /><path d="M19.364 18.364a9 9 0 0 0 0-12.728" /></svg>,
  generateAnother: <svg {...Le}><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" /><path d="M20 2v4" /><path d="M22 4h-4" /><circle cx="4" cy="20" r="2" /></svg>,
  visit: <svg {...Le}><path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" /></svg>,
  copyLink: <svg {...Le} width={16} height={16}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>,
  download: <svg {...Le} width={16} height={16}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>,
  copyImage: <svg {...Le} width={16} height={16}><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>,
  info: <svg {...Le}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>,
  check: <svg {...Le} width={16} height={16}><polyline points="20 6 9 17 4 12" /></svg>,
  x: <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  facebook: <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  whatsapp: <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden={true}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
};
var Ne = [{
  label: "Primavera",
  icon: Ae.spring
}, {
  label: "Verano",
  icon: Ae.summer
}, {
  label: "Otoño",
  icon: Ae.fall
}, {
  label: "Invierno",
  icon: Ae.winter
}];
var Re = ["/audio/spring.mp3", "/audio/summer.mp3", "/audio/autumn.mp3", "/audio/winter.mp3"];
var Ie = "qrtree";
var De = /iP(hone|ad|od)/.test(navigator.userAgent);
var _e = /Android/i.test(navigator.userAgent);
function Be(_0x13188a) {
  try {
    const _0x368b02 = _0x13188a.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((_0x13188a.length + 3) % 4);
    const _0x35d92e = atob(_0x368b02);
    const _0x1dabb7 = new Uint8Array(_0x35d92e.length);
    for (let _0x2ecd85 = 0; _0x2ecd85 < _0x35d92e.length; _0x2ecd85++) {
      _0x1dabb7[_0x2ecd85] = _0x35d92e.charCodeAt(_0x2ecd85);
    }
    return new TextDecoder().decode(_0x1dabb7);
  } catch {
    return null;
  }
}
function Oe(_0x4e094d, _0x20fa5a, _0x161d61) {
  return function (_0x1a0307) {
    const _0xbf1fc4 = new TextEncoder().encode(_0x1a0307);
    let _0x20fc94 = "";
    for (let _0x458d92 = 0; _0x458d92 < _0xbf1fc4.length; _0x458d92++) {
      _0x20fc94 += String.fromCharCode(_0xbf1fc4[_0x458d92]);
    }
    return btoa(_0x20fc94).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }(String(_0x20fa5a) + String(_0x161d61 + 1) + _0x4e094d);
}
function Fe(_0x49e8af) {
  const _0x1f805c = Be(_0x49e8af);
  if (!_0x1f805c || _0x1f805c.length < 3) {
    return null;
  }
  const _0x528591 = Number(_0x1f805c[0]);
  const _0x12eb57 = Number(_0x1f805c[1]) - 1;
  const _0x1cdc4e = _0x1f805c.slice(2);
  if (Number.isFinite(_0x528591) && Number.isFinite(_0x12eb57)) {
    return {
      url: _0x1cdc4e,
      season: Math.min(3, Math.max(0, _0x528591)),
      palette: Math.min(11, Math.max(-1, _0x12eb57))
    };
  } else {
    return null;
  }
}
function Ue(_0x371247) {
  const _0x53652d = _0x371247.trim();
  if (_0x53652d.length === 0) {
    return {
      valid: false,
      error: ""
    };
  }
  try {
    const { modules: _0xccaa7a } = Y.create(_0x53652d, {
      errorCorrectionLevel: "H"
    });
    if (_0xccaa7a.size > 41) {
      return {
        valid: false,
        error: "El contenido es demasiado largo para generar el árbol QR. Prueba a reducir el texto."
      };
    } else {
      return {
        valid: true,
        error: ""
      };
    }
  } catch {
    return {
      valid: false,
      error: "El formato del contenido no es compatible o supera el límite permitido."
    };
  }
}
function _Component() {
  const _0x5d9fc1 = function () {
    try {
      const _0x162db9 = JSON.parse(sessionStorage.getItem(Ie) ?? "{}");
      const _0x39f614 = window.location.pathname.match(/^\/s\/([A-Za-z0-9_-]+)$/);
      if (_0x39f614) {
        const _0x20f0ee = Fe(_0x39f614[1]);
        if (_0x20f0ee && _0x20f0ee.url.trim().length > 0) {
          return {
            url: _0x20f0ee.url,
            season: _0x20f0ee.season,
            palette: _0x20f0ee.palette,
            muted: typeof _0x162db9.muted != "boolean" || _0x162db9.muted,
            sharedMode: true
          };
        }
      }
      const _0xfd1861 = new URLSearchParams(window.location.search);
      const _0x333e15 = _0xfd1861.get("q");
      if (_0x333e15) {
        const _0x376179 = Fe(_0x333e15);
        if (_0x376179 && _0x376179.url.trim().length > 0) {
          return {
            url: _0x376179.url,
            season: _0x376179.season,
            palette: _0x376179.palette,
            muted: typeof _0x162db9.muted != "boolean" || _0x162db9.muted,
            sharedMode: false
          };
        }
      }
      const _0x5e4d99 = _0xfd1861.get("u");
      const _0x5e4529 = _0x5e4d99 ? Be(_0x5e4d99) : null;
      const _0x52f5fb = typeof _0x5e4529 == "string" && _0x5e4529.trim().length > 0 ? _0x5e4529.trim() : typeof _0x162db9.url == "string" ? _0x162db9.url : K;
      const _0x5f2662 = Number.parseInt(_0xfd1861.get("s") ?? "", 10);
      const _0x168318 = Number.parseInt(_0xfd1861.get("c") ?? "", 10);
      const _0x2003ad = _0xfd1861.get("m") === "1";
      return {
        url: _0x52f5fb,
        season: Number.isFinite(_0x5f2662) ? Math.min(3, Math.max(0, _0x5f2662)) : typeof _0x162db9.season == "number" ? Math.min(3, Math.max(0, _0x162db9.season)) : 1,
        palette: Number.isFinite(_0x168318) ? Math.min(11, Math.max(-1, _0x168318)) : typeof _0x162db9.palette == "number" ? Math.min(11, Math.max(-1, _0x162db9.palette)) : -1,
        muted: typeof _0x162db9.muted != "boolean" || _0x162db9.muted,
        sharedMode: _0x2003ad
      };
    } catch {
      return {
        url: K,
        season: 1,
        palette: -1,
        muted: true,
        sharedMode: false
      };
    }
  }();
  const [_0x1bb750, _0x8d8406] = (0, m.useState)({
    width: 0,
    height: 0,
    isMobile: false
  });
  const [_0xd36b8b, _0x5d786b] = (0, m.useState)(0);
  const [_0x535bec, _0x452b11] = (0, m.useState)(false);
  const _0x34a6ac = (0, m.useRef)(0);
  const _0x280204 = (0, m.useRef)(null);
  const _0x583d98 = (0, m.useRef)(false);
  const [_0x446d01, _0x31ca17] = (0, m.useState)(false);
  const [_0x14b306, _0x4a3a07] = (0, m.useState)(_0x5d9fc1.url);
  const [_0x16eae2, _0x1c2177] = (0, m.useState)(_0x5d9fc1.url);
  const [_0x3744d8, _0x5559b9] = (0, m.useState)(false);
  const [_0x3e9140, _0x182d75] = (0, m.useState)("");
  const [_0x570a8a, _0x444573] = (0, m.useState)(Ue(_0x5d9fc1.url).valid);
  const _0x3129c7 = (0, m.useRef)(_0x5d9fc1.season);
  const [_0x153546, _0x49fe52] = (0, m.useState)(_0x5d9fc1.season);
  const _0x5bd40a = (0, m.useRef)([0, 0, 0, 0]);
  const [_0x2d9aad, _0x19c622] = (0, m.useState)(_0x5d9fc1.palette);
  const [_0x1b8033, _0x88a962] = (0, m.useState)(_0x5d9fc1.muted);
  const [_0x25978d, _0x3f0c6d] = (0, m.useState)(_0x5d9fc1.sharedMode);
  const _0xea012c = (0, m.useRef)(_0x5d9fc1.muted);
  const _0x80eed8 = (0, m.useRef)(null);
  const _0x2f2fa6 = (0, m.useRef)(_0x5d9fc1.url);
  const _0x4457f4 = (0, m.useRef)("");
  const [_0x1f990f, _0x23d318] = (0, m.useState)("");
  const [_0x52efb9, _0x171bdf] = (0, m.useState)(false);
  const [_0x469f6b, _0x502af1] = (0, m.useState)(false);
  const [_0xdbc765, _0xdd5148] = (0, m.useState)(false);
  const [_0xcc6554, _0x270590] = (0, m.useState)(null);
  const [_0x32b6de, _0x44580a] = (0, m.useState)(null);
  const [_0x2b80c3, _0x23dd65] = (0, m.useState)(false);
  const _0x2e687e = (0, m.useRef)(0);
  const _0x4efbdf = (0, m.useRef)(null);
  const _0x1246ba = (0, m.useRef)(null);
  const _0x38016f = (0, m.useRef)(null);
  _0x1246ba.current = _0x171bdf;
  _0x38016f.current = _0x23d318;
  const _qrInputRef = (0, m.useRef)(null);
  const _decodeQRFromImage = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, img.width, img.height);
        const res = jsQR(imgData.data, imgData.width, imgData.height, {
          inversionAttempts: "attemptBoth"
        });
        if (res && res.data) {
          const decoded = res.data.trim();
          _0x4a3a07(decoded);
          const { valid, error } = Ue(decoded);
          _0x444573(valid);
          if (valid) {
            _0x2f2fa6.current = decoded;
            _0x1c2177(decoded);
            _0x5559b9(false);
            _0x182d75("");
          } else {
            _0x5559b9(true);
            _0x182d75(error || "El contenido detectado es demasiado largo.");
          }
        } else {
          alert("No se detectó ningún código QR válido en la imagen. Intenta subir una imagen más nítida.");
        }
      };
      img.onerror = () => alert("No se pudo cargar la imagen. Inténtalo de nuevo.");
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  (0, m.useEffect)(() => {
    const handlePaste = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith("image/")) {
          const file = items[i].getAsFile();
          if (file) {
            _decodeQRFromImage(file);
            break;
          }
        }
      }
    };
    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);
  (0, m.useEffect)(() => {
    const handleDragOver = (e) => e.preventDefault();
    const handleDrop = (e) => {
      e.preventDefault();
      const files = e.dataTransfer?.files;
      if (files && files[0] && files[0].type.startsWith("image/")) {
        _decodeQRFromImage(files[0]);
      }
    };
    window.addEventListener("dragover", handleDragOver);
    window.addEventListener("drop", handleDrop);
    return () => {
      window.removeEventListener("dragover", handleDragOver);
      window.removeEventListener("drop", handleDrop);
    };
  }, []);
  const _0x45582d = (0, m.useCallback)(() => {
    const _0x12c9fb = window.innerWidth;
    const _0x2705c3 = window.innerHeight;
    const _0x33e27d = window.visualViewport;
    const _0x1b3352 = _0x33e27d?.height ?? _0x2705c3;
    const _0x5b0842 = document.documentElement.clientHeight || _0x2705c3;
    const _0x47479c = _0x33e27d ? Math.max(0, _0x5b0842 - (_0x33e27d.offsetTop + _0x33e27d.height)) : 0;
    const _0x2732f4 = _0x33e27d ? Math.max(0, window.innerHeight - (_0x33e27d.offsetTop + _0x33e27d.height)) : 0;
    const _0x3415e2 = Math.max(_0x47479c, _0x2732f4);
    if (_0x1b3352 > _0x34a6ac.current) {
      _0x34a6ac.current = _0x1b3352;
    }
    if (_0x12c9fb > 0 && _0x2705c3 > 0) {
      const _0x2c5cc8 = _0x12c9fb <= 768;
      const _0xab3195 = _0x12c9fb > _0x2705c3;
      const _0x1e1059 = _0x12c9fb <= 900;
      const _0x42e723 = document.activeElement;
      const _0x4630fc = _0x42e723 != null && (_0x42e723.tagName === "INPUT" || _0x42e723.tagName === "TEXTAREA" || _0x42e723.isContentEditable);
      const _0x3a85df = _0x34a6ac.current || _0x1b3352;
      _0x452b11((!_0x4630fc || !(_0x3a85df > 0) || !(_0x1b3352 < _0x3a85df * 0.78)) && (_0x1e1059 && _0xab3195 || _0x12c9fb < 360 || _0x2705c3 < 560));
      _0x8d8406({
        width: _0x12c9fb,
        height: _0x2705c3,
        isMobile: _0x2c5cc8
      });
      _0x5d786b(Math.round(_0x3415e2));
    }
  }, []);
  (0, m.useEffect)(() => {
    _0x45582d();
    const _0x32162d = new Set();
    const _0x45de31 = () => {
      _0x45582d();
      [100, 250, 500, 900].forEach(_0x45edf1 => {
        const _0x47bcb4 = window.setTimeout(() => {
          _0x32162d.delete(_0x47bcb4);
          _0x45582d();
        }, _0x45edf1);
        _0x32162d.add(_0x47bcb4);
      });
    };
    window.addEventListener("resize", _0x45de31);
    window.addEventListener("orientationchange", _0x45de31);
    window.addEventListener("focus", _0x45de31);
    window.addEventListener("pageshow", _0x45de31);
    window.visualViewport?.addEventListener("resize", _0x45582d);
    window.visualViewport?.addEventListener("scroll", _0x45582d);
    return () => {
      _0x32162d.forEach(_0x5dabd5 => window.clearTimeout(_0x5dabd5));
      _0x32162d.clear();
      window.removeEventListener("resize", _0x45de31);
      window.removeEventListener("orientationchange", _0x45de31);
      window.removeEventListener("focus", _0x45de31);
      window.removeEventListener("pageshow", _0x45de31);
      window.visualViewport?.removeEventListener("resize", _0x45582d);
      window.visualViewport?.removeEventListener("scroll", _0x45582d);
    };
  }, [_0x45582d]);
  (0, m.useEffect)(() => {
    if (!_0x535bec) {
      return;
    }
    const _0x2fa966 = window.setInterval(_0x45582d, 250);
    return () => window.clearInterval(_0x2fa966);
  }, [_0x535bec, _0x45582d]);
  (0, m.useEffect)(() => {
    let _0x17179f = _0x80eed8.current;
    if (!_0x17179f) {
      _0x17179f = new Audio();
      _0x17179f.loop = true;
      _0x17179f.volume = 0.55;
      _0x17179f.preload = "auto";
      _0x17179f.setAttribute("playsinline", "");
      _0x17179f.setAttribute("webkit-playsinline", "");
      _0x80eed8.current = _0x17179f;
    }
    _0x17179f.pause();
    _0x17179f.src = Re[_0x153546];
    _0x17179f.loop = true;
    _0x17179f.currentTime = 0;
    if (!_0xea012c.current) {
      _0x17179f.play().catch(() => {
        _0xea012c.current = true;
        _0x88a962(true);
      });
    }
  }, [_0x153546]);
  (0, m.useEffect)(() => () => {
    _0x80eed8.current?.pause();
  }, []);
  const _0x146a25 = (0, m.useCallback)(async () => {
    const _0x57e8ed = !_0xea012c.current;
    const _0x7c6df2 = _0x80eed8.current;
    if (!_0x7c6df2) {
      _0xea012c.current = _0x57e8ed;
      _0x88a962(_0x57e8ed);
      return;
    }
    if (_0x57e8ed) {
      _0xea012c.current = true;
      _0x88a962(true);
      _0x7c6df2.pause();
      return;
    }
    _0x7c6df2.src ||= Re[_0x3129c7.current] ?? Re[0];
    _0x7c6df2.loop = true;
    try {
      await _0x7c6df2.play();
      _0xea012c.current = false;
      _0x88a962(false);
    } catch {
      _0xea012c.current = true;
      _0x88a962(true);
    }
  }, []);
  _0x3129c7.current = _0x153546;
  if (_0x2d9aad <= 0 || (_0x153546 !== 0 && _0x153546 !== 3)) {
    _0x5bd40a.current = [0, 0, 0, 0];
  } else {
    const _0x4d37f5 = Me[_0x2d9aad];
    _0x5bd40a.current = [_0x4d37f5.rgb[0], _0x4d37f5.rgb[1], _0x4d37f5.rgb[2], 1];
  }
  (0, m.useEffect)(() => {
    sessionStorage.setItem(Ie, JSON.stringify({
      url: _0x16eae2,
      season: _0x153546,
      palette: _0x2d9aad,
      muted: _0x1b8033
    }));
    const _0x22e55c = _0x16eae2 === "https://ppweilai.online/" && _0x153546 === 1 && _0x2d9aad === -1;
    const _0x12a439 = Oe(_0x16eae2, _0x153546, _0x2d9aad);
    const _0xc83661 = _0x25978d ? "/s/" + _0x12a439 : _0x22e55c ? "/" : "?q=" + _0x12a439;
    window.history.replaceState(null, "", _0xc83661);
  }, [_0x16eae2, _0x153546, _0x2d9aad, _0x1b8033, _0x25978d]);
  const _0x23bdbd = _0x446d01 && _0x52efb9 && !!_0x1f990f;
  const _0x175ba0 = _0x1bb750.width >= 900;
  const _0x1487f1 = !_0x25978d && _0x3744d8 && !!_0x3e9140;
  const _0x32e13e = _e && _0x1bb750.isMobile && _0xd36b8b === 0 ? 56 : 0;
  const _0x1ecde7 = _0x1487f1 ? _0x3e9140 : _0x446d01 ? "Haz clic para ver el árbol 3D" : "Haz clic en el árbol para ver el código QR";
  (0, m.useEffect)(() => {
    if (!_0x1bb750.isMobile || !_0x469f6b) {
      return;
    }
    _0x2e687e.current = window.scrollY;
    const _0x53ec6a = document.body;
    const _0x5830c0 = document.documentElement;
    const _0x1a1752 = {
      overflow: _0x53ec6a.style.overflow,
      position: _0x53ec6a.style.position,
      top: _0x53ec6a.style.top,
      left: _0x53ec6a.style.left,
      right: _0x53ec6a.style.right,
      width: _0x53ec6a.style.width
    };
    const _0x58e0c4 = _0x5830c0.style.overscrollBehaviorY;
    _0x53ec6a.style.overflow = "hidden";
    _0x53ec6a.style.position = "fixed";
    _0x53ec6a.style.top = "-" + _0x2e687e.current + "px";
    _0x53ec6a.style.left = "0";
    _0x53ec6a.style.right = "0";
    _0x53ec6a.style.width = "100%";
    _0x5830c0.style.overscrollBehaviorY = "none";
    const _0x1ac0bf = _0x3671f3 => {
      if (!_0x3671f3.target?.closest("input, textarea, [contenteditable=\"true\"]")) {
        _0x3671f3.preventDefault();
      }
    };
    document.addEventListener("touchmove", _0x1ac0bf, {
      passive: false
    });
    return () => {
      document.removeEventListener("touchmove", _0x1ac0bf);
      _0x53ec6a.style.overflow = _0x1a1752.overflow;
      _0x53ec6a.style.position = _0x1a1752.position;
      _0x53ec6a.style.top = _0x1a1752.top;
      _0x53ec6a.style.left = _0x1a1752.left;
      _0x53ec6a.style.right = _0x1a1752.right;
      _0x53ec6a.style.width = _0x1a1752.width;
      _0x5830c0.style.overscrollBehaviorY = _0x58e0c4;
      window.scrollTo(0, _0x2e687e.current);
    };
  }, [_0x1bb750.isMobile, _0x469f6b]);
  (0, m.useEffect)(() => {
    const _0x54ed56 = _0x245fb7 => _0x245fb7.preventDefault();
    const _0x2ec024 = _0x238389 => {
      if (_0x238389.touches.length > 1) {
        _0x238389.preventDefault();
      }
    };
    const _0xc736c7 = _0x5f5d9b => {
      if (_0x5f5d9b.ctrlKey) {
        _0x5f5d9b.preventDefault();
      }
    };
    document.addEventListener("gesturestart", _0x54ed56, {
      passive: false
    });
    document.addEventListener("gesturechange", _0x54ed56, {
      passive: false
    });
    document.addEventListener("gestureend", _0x54ed56, {
      passive: false
    });
    document.addEventListener("touchmove", _0x2ec024, {
      passive: false
    });
    window.addEventListener("wheel", _0xc736c7, {
      passive: false
    });
    return () => {
      document.removeEventListener("gesturestart", _0x54ed56);
      document.removeEventListener("gesturechange", _0x54ed56);
      document.removeEventListener("gestureend", _0x54ed56);
      document.removeEventListener("touchmove", _0x2ec024);
      window.removeEventListener("wheel", _0xc736c7);
    };
  }, []);
  (0, m.useEffect)(() => {
    const _0x4f2c8d = _0x469151 => {
      if (_0x469151.target.tagName !== "INPUT") {
        if (_0x469151.key >= "1" && _0x469151.key <= "3") {
          _0x49fe52(parseInt(_0x469151.key) - 1);
        } else if (_0x469151.key === " ") {
          _0x469151.preventDefault();
          _0x583d98.current = !_0x583d98.current;
          _0x31ca17(_0x583d98.current);
          if (!_0x583d98.current) {
            _0x171bdf(false);
          }
        }
      }
    };
    window.addEventListener("keydown", _0x4f2c8d);
    return () => window.removeEventListener("keydown", _0x4f2c8d);
  }, []);
  (function (_0xed4da) {
    const {
      canvasRef: _0xc8ac50,
      canvasWidth: _0x1b3318,
      canvasHeight: _0x1f69fa,
      qrContent: _0x582982,
      isFlat: _0x357820,
      seasonRef: _0x45ded0,
      customColorRef: _0x2728d7,
      treeSeed: _0x5399fb,
      qrSnapshotRef: _0x1ddb2b,
      onFlatSettled: _0x3d1546,
      onQrSnapshotUpdated: _0x1e3edc
    } = _0xed4da;
    const _0x41e5ac = (0, m.useRef)(null);
    const _0x9a37bd = (0, m.useRef)(false);
    const _0x6f8fc9 = (0, m.useRef)(null);
    const _0x366195 = (0, m.useRef)(Date.now());
    const _0x27739d = (0, m.useRef)(null);
    const _0x2c7cf4 = (0, m.useRef)(0);
    const _0x4c7277 = (0, m.useRef)(0);
    const _0x5b6917 = (0, m.useRef)(Date.now());
    const _0x2323cd = (0, m.useRef)(_0x582982);
    _0x2323cd.current = _0x582982;
    const _0x4e7fe7 = (0, m.useRef)(_0x582982);
    const _0x26693f = (0, m.useRef)(0);
    const _0x43f2cb = (0, m.useRef)(null);
    const _0x28866d = (0, m.useRef)(null);
    const _0x4531f4 = (0, m.useRef)(0);
    const _0x5dd6ef = (Ee(_0x5399fb.current) - 1) / 99990;
    const _0x38b120 = (0, m.useRef)(0);
    const _0x518aa4 = (0, m.useRef)(false);
    const _0x4d86e9 = (0, m.useRef)(0);
    (0, m.useEffect)(() => {
      const _0x3b8292 = _0x27739d.current;
      if (!_0x3b8292) {
        return;
      }
      const _0x395d73 = ee(_0x582982);
      const _0x4340e1 = ae(_0x395d73);
      const _0xb533ad = ie(_0x395d73);
      _0x43f2cb.current = _0x395d73;
      _0x28866d.current = _0xb533ad;
      _0x4531f4.current = _0x4340e1.gridSize;
      oe(Ee(_0x5399fb.current));
      const _0x480944 = se(_0xb533ad, _0x4340e1.gridSize);
      const _0x24768e = ue(_0x480944.tips, _0xb533ad);
      const _0x3dabd4 = ce(_0x395d73);
      const _0x30fbf7 = fe(_0x4340e1.gridSize, _0x395d73);
      const _0x414ed0 = de(_0x480944.tips, _0x4340e1.gridSize);
      const _0x4eee01 = pe(_0x4340e1.gridSize);
      const _0x30e15d = he(_0x4340e1.gridSize);
      Se(_0x3b8292, _0x4340e1, _0x480944, _0x24768e, _0x3dabd4.positions, _0x3dabd4.count, _0x30fbf7, _0x414ed0, _0x4eee01, _0x30e15d);
      _0x4e7fe7.current = _0x582982;
    }, [_0x582982]);
    const _0x354f89 = (0, m.useCallback)(async () => {
      try {
        if (_0x27739d.current || _0x9a37bd.current) {
          return;
        }
        if (_0x1b3318 <= 0 || _0x1f69fa <= 0) {
          return;
        }
        const _0x3404a9 = _0xc8ac50.current;
        if (!_0x3404a9) {
          return;
        }
        _0x9a37bd.current = true;
        const _0x2c9dd9 = await async function (_0x3965a8, _0x99bdef, _0xf44ff4) {
          const _0x3f70a1 = _0x3965a8.getContext("webgpu");
          if (!_0x3f70a1) {
            return null;
          }
          const _0x1e2627 = await navigator.gpu?.requestAdapter();
          if (!_0x1e2627) {
            return null;
          }
          const _0x2cc8ca = await _0x1e2627.requestDevice();
          const _0x1614a7 = navigator.gpu.getPreferredCanvasFormat();
          const _0x2635ba = Math.min(window.devicePixelRatio || 1, 3);
          _0x3965a8.width = Math.max(1, Math.floor(_0x99bdef * _0x2635ba));
          _0x3965a8.height = Math.max(1, Math.floor(_0xf44ff4 * _0x2635ba));
          _0x3f70a1.configure({
            device: _0x2cc8ca,
            format: _0x1614a7,
            alphaMode: "premultiplied"
          });
          const _0x3900da = ge(_0x2cc8ca, 64);
          const _0x49b52a = ge(_0x2cc8ca, 64);
          const _0x46b627 = ge(_0x2cc8ca, 64);
          const _0x595d58 = ge(_0x2cc8ca, 64);
          const _0x517713 = ge(_0x2cc8ca, 64);
          const _0x2df518 = ge(_0x2cc8ca, 64);
          const _0x11bbe2 = me(_0x2cc8ca, 268960);
          const _0x28d692 = me(_0x2cc8ca, 1075840);
          const _0x1476a0 = me(_0x2cc8ca, 268960);
          const _0x1261f1 = me(_0x2cc8ca, 268960);
          const _0x3021ae = me(_0x2cc8ca, 1600000);
          const _0x377a4d = me(_0x2cc8ca, 24000);
          const _0x2be32b = me(_0x2cc8ca, 800000);
          const _0x59e82c = me(_0x2cc8ca, 160);
          const _0x47a094 = me(_0x2cc8ca, 8000);
          const _0x4ad745 = me(_0x2cc8ca, 160);
          const _0x4ba824 = _0x2cc8ca.createBindGroupLayout({
            entries: [{
              binding: 0,
              visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: 1,
              visibility: GPUShaderStage.VERTEX,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: 2,
              visibility: GPUShaderStage.VERTEX,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: 3,
              visibility: GPUShaderStage.VERTEX,
              buffer: {
                type: "read-only-storage"
              }
            }, {
              binding: 4,
              visibility: GPUShaderStage.VERTEX,
              buffer: {
                type: "read-only-storage"
              }
            }]
          });
          const _0x4c8b61 = _0x2cc8ca.createBindGroupLayout({
            entries: [{
              binding: 0,
              visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
              buffer: {
                type: "uniform"
              }
            }]
          });
          const _0xc01810 = _0x2cc8ca.createBindGroupLayout({
            entries: [{
              binding: 0,
              visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: 1,
              visibility: GPUShaderStage.VERTEX,
              buffer: {
                type: "read-only-storage"
              }
            }]
          });
          const _0x3272ff = _0x2cc8ca.createBindGroup({
            layout: _0x4ba824,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x3900da
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x11bbe2
              }
            }, {
              binding: 2,
              resource: {
                buffer: _0x28d692
              }
            }, {
              binding: 3,
              resource: {
                buffer: _0x1476a0
              }
            }, {
              binding: 4,
              resource: {
                buffer: _0x1261f1
              }
            }]
          });
          const _0x10cde2 = _0x2cc8ca.createBindGroup({
            layout: _0x4c8b61,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x3900da
              }
            }]
          });
          const _0x4cdd33 = _0x2cc8ca.createBindGroup({
            layout: _0xc01810,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x3900da
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x3021ae
              }
            }]
          });
          const _0x221957 = _0x2cc8ca.createBindGroup({
            layout: _0xc01810,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x49b52a
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x377a4d
              }
            }]
          });
          const _0x30997a = _0x2cc8ca.createBindGroup({
            layout: _0xc01810,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x46b627
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x2be32b
              }
            }]
          });
          const _0x507dc = _0x2cc8ca.createBindGroup({
            layout: _0xc01810,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x595d58
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x59e82c
              }
            }]
          });
          const _0x542379 = _0x2cc8ca.createBindGroup({
            layout: _0xc01810,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x517713
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x47a094
              }
            }]
          });
          const _0x1cc244 = _0x2cc8ca.createBindGroup({
            layout: _0xc01810,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x2df518
              }
            }, {
              binding: 1,
              resource: {
                buffer: _0x4ad745
              }
            }]
          });
          const _0xf57c94 = be(_0x2cc8ca, _0x1614a7, _0x4c8b61, {
            vertex: "\n" + ye + "\n\nstruct SkyOut {\n  @builtin(position) position: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n@vertex\nfn main(@builtin(vertex_index) vi: u32) -> SkyOut {\n  var tri = array<vec2f, 3>(\n    vec2f(-1.0, -1.0),\n    vec2f(3.0, -1.0),\n    vec2f(-1.0, 3.0)\n  );\n  let p = tri[vi];\n  var o: SkyOut;\n  o.position = vec4f(p, 1.0, 1.0);\n  o.uv = vec2f(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5);\n  return o;\n}\n",
            fragment: "\n" + ye + "\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n@fragment\nfn main(@location(0) uv: vec2f) -> @location(0) vec4f {\n  let season = uniforms.season;\n  if (season > 2.5) {\n    // Soft, poetic misty winter paper tone (harmonious with spring/summer/autumn)\n    let topCol = vec3f(0.82, 0.86, 0.90);\n    let botCol = vec3f(0.91, 0.94, 0.96);\n    let t = smoothstep(0.0, 1.0, uv.y);\n    let sky = mix(topCol, botCol, t);\n    return vec4f(sky, 1.0);\n  }\n  return vec4f(0.965, 0.945, 0.906, 1.0);\n}\n",
            depthWrite: false,
            depthCompare: "always"
          });
          const _0x59a269 = be(_0x2cc8ca, _0x1614a7, _0x4c8b61, {
            vertex: "\n" + ye + "\n\nstruct ShadowOut {\n  @builtin(position) position: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n@vertex\nfn main(@builtin(vertex_index) vi: u32) -> ShadowOut {\n  var quadVerts = array<vec2f, 6>(\n    vec2f(-1.0, -1.0), vec2f(1.0, -1.0), vec2f(-1.0, 1.0),\n    vec2f(-1.0, 1.0), vec2f(1.0, -1.0), vec2f(1.0, 1.0)\n  );\n\n  let qv = quadVerts[vi];\n  var o: ShadowOut;\n  o.uv = qv * 0.5 + 0.5;\n\n  let gridSize = uniforms.gridSize;\n  let blockSize = 0.0245;\n  let halfGrid = gridSize * blockSize * 0.5;\n  let shadowScale = 0.85;\n\n  let progress = uniforms.progress;\n  let shadowHeight = 0.48;\n  let lightDirXZ = vec2f(-0.5, -0.5);\n  let shadowOffset = -lightDirXZ * shadowHeight * 0.35 * (1.0 - progress);\n\n  let localX = qv.x * halfGrid * shadowScale + shadowOffset.x;\n  let localY = -shadowHeight;\n  let localZ = qv.y * halfGrid * shadowScale + shadowOffset.y;\n\n  let isoAngleY = mix(0.78, 0, progress) + uniforms.cameraBobX;\n  let isoAngleX = mix(-0.55, -1.5708, progress) + uniforms.cameraBobY;\n\n  let cy = cos(isoAngleY); let sy = sin(isoAngleY);\n  let cx = cos(isoAngleX); let sx = sin(isoAngleX);\n\n  let ry_x = localX * cy - localZ * sy;\n  let ry_z = localX * sy + localZ * cy;\n  let rx_y = localY * cx - ry_z * sx;\n  let rx_z = localY * sx + ry_z * cx;\n\n  let viewScale = mix(1.3, 1.6, progress);\n  let ar = uniforms.aspectRatio;\n  let scaleX = viewScale / max(ar, 1.0);\n  let scaleY = viewScale / max(1.0 / ar, 1.0);\n\n  let yOffsetScene = mix(0.0, 0.08, progress);\n  let xOffsetScene = mix(0.0, 0.015, progress);\n\n  o.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    0.99,\n    1.0\n  );\n\n  return o;\n}\n",
            fragment: "\n" + ye + "\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n@fragment\nfn main(@location(0) uv: vec2f) -> @location(0) vec4f {\n  return vec4f(0.0, 0.0, 0.0, 0.0);\n}\n",
            depthWrite: false,
            depthCompare: "always",
            blend: {
              color: {
                srcFactor: "src-alpha",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
              },
              alpha: {
                srcFactor: "one",
                dstFactor: "one-minus-src-alpha",
                operation: "add"
              }
            }
          });
          const _0xafe3b5 = be(_0x2cc8ca, _0x1614a7, _0x4ba824, {
            vertex: "\n" + ye + "\n\nstruct BlockOutput {\n  @builtin(position) position: vec4f,\n  @location(0) uv: vec2f,\n  @location(1) faceNx: f32,\n  @location(2) faceNy: f32,\n  @location(3) faceNz: f32,\n  @location(4) blockType: f32,\n  @location(5) blockH: f32,\n  @location(6) col: f32,\n  @location(7) row: f32,\n  @location(8) layer: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> blockTypes: array<u32>;\n@group(0) @binding(2) var<storage, read> blockPositions: array<vec4f>;\n@group(0) @binding(3) var<storage, read> blockHeights: array<f32>;\n@group(0) @binding(4) var<storage, read> blockBaseY: array<f32>;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> BlockOutput {\n  var output: BlockOutput;\n  let blockIdx = vertexIndex / 36u;\n  let localVertIdx = vertexIndex % 36u;\n  let faceIdx = localVertIdx / 6u;\n  let vertIdx = localVertIdx % 6u;\n\n  let blockCount = u32(uniforms.blockCount);\n  if (blockIdx >= blockCount) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let posData = blockPositions[blockIdx];\n  let col = posData.x;\n  let row = posData.y;\n  output.col = col;\n  output.row = row;\n  output.layer = blockBaseY[blockIdx] / " + ke + ";\n\n  let gridSize = uniforms.gridSize;\n  let blockSize = " + ke + ";\n  let halfGrid = gridSize * blockSize * 0.5;\n  let cubeSize = blockSize;\n\n  let baseX = col * blockSize - halfGrid;\n  let baseY = blockBaseY[blockIdx];\n  let baseZ = row * blockSize - halfGrid;\n  let h = cubeSize;\n  output.blockH = h;\n\n  let typePacked = blockTypes[blockIdx];\n  output.blockType = f32(typePacked);\n\n  let quadVerts = array<vec2f, 6>(\n    vec2f(0.0, 0.0), vec2f(1.0, 0.0), vec2f(0.0, 1.0),\n    vec2f(0.0, 1.0), vec2f(1.0, 0.0), vec2f(1.0, 1.0)\n  );\n  let qv = quadVerts[vertIdx];\n  let hw = cubeSize * 0.5;\n  let hd = cubeSize * 0.5;\n\n  var localPos = vec3f(0.0);\n  var normal = vec3f(0.0);\n\n  var swayX = 0.0;\n  var swayZ = 0.0;\n  if (typePacked == 1u && h > 0.15) {\n    let time = uniforms.time;\n    swayX = sin(time * 0.8 + col * 0.3 + row * 0.2) * 0.002 * h;\n    swayZ = sin(time * 0.6 + col * 0.2 + row * 0.4) * 0.0015 * h;\n  }\n\n  if (faceIdx == 0u) {\n    localPos = vec3f(baseX + (qv.x - 0.5) * cubeSize + swayX, baseY + h, baseZ + (qv.y - 0.5) * cubeSize + swayZ);\n    normal = vec3f(0.0, 1.0, 0.0);\n  } else if (faceIdx == 1u) {\n    localPos = vec3f(baseX + (qv.x - 0.5) * cubeSize, baseY, baseZ + (0.5 - qv.y) * cubeSize);\n    normal = vec3f(0.0, -1.0, 0.0);\n  } else if (faceIdx == 2u) {\n    localPos = vec3f(baseX + (qv.x - 0.5) * cubeSize + swayX * qv.y, baseY + qv.y * h, baseZ + hd + swayZ * qv.y);\n    normal = vec3f(0.0, 0.0, 1.0);\n  } else if (faceIdx == 3u) {\n    localPos = vec3f(baseX + (0.5 - qv.x) * cubeSize + swayX * qv.y, baseY + qv.y * h, baseZ - hd + swayZ * qv.y);\n    normal = vec3f(0.0, 0.0, -1.0);\n  } else if (faceIdx == 4u) {\n    localPos = vec3f(baseX + hw + swayX * qv.y, baseY + qv.y * h, baseZ + (qv.x - 0.5) * cubeSize + swayZ * qv.y);\n    normal = vec3f(1.0, 0.0, 0.0);\n  } else {\n    localPos = vec3f(baseX - hw + swayX * qv.y, baseY + qv.y * h, baseZ + (0.5 - qv.x) * cubeSize + swayZ * qv.y);\n    normal = vec3f(-1.0, 0.0, 0.0);\n  }\n\n  output.uv = qv;\n  output.faceNx = normal.x;\n  output.faceNy = normal.y;\n  output.faceNz = normal.z;\n\n  let progress = uniforms.progress;\n\n  if (typePacked == 2u && baseY > 0.001) {\n    let trunkVis = smoothstep(0.2, 0.6, progress);\n    localPos = vec3f(\n      baseX + (localPos.x - baseX) * trunkVis,\n      baseY + (localPos.y - baseY) * trunkVis,\n      baseZ + (localPos.z - baseZ) * trunkVis,\n    );\n  }\n\n  if (typePacked == 1u) {\n    let cubeVis = smoothstep(0.15, 0.6, progress);\n    localPos = vec3f(\n      baseX + (localPos.x - baseX) * cubeVis,\n      baseY + (localPos.y - baseY) * cubeVis,\n      baseZ + (localPos.z - baseZ) * cubeVis,\n    );\n  }\n\n  if (typePacked == 5u) {\n    let branchVis = smoothstep(0.0, 0.4, 1.0 - progress);\n    localPos = vec3f(\n      baseX + (localPos.x - baseX) * branchVis,\n      baseY + (localPos.y - baseY) * branchVis,\n      baseZ + (localPos.z - baseZ) * branchVis,\n    );\n  }\n\n  " + we() + "\n  \n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n  return output;\n}\n",
            fragment: "\n" + ye + "\n\nstruct BlockInput {\n  @location(0) uv: vec2f,\n  @location(1) faceNx: f32,\n  @location(2) faceNy: f32,\n  @location(3) faceNz: f32,\n  @location(4) blockType: f32,\n  @location(5) blockH: f32,\n  @location(6) col: f32,\n  @location(7) row: f32,\n  @location(8) layer: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n" + xe + "\n\n@fragment\nfn main(input: BlockInput) -> @location(0) vec4f {\n  let uv = input.uv;\n  let N = normalize(vec3f(input.faceNx, input.faceNy, input.faceNz));\n  let blockType = i32(input.blockType + 0.5);\n  let progress = uniforms.progress;\n  let season = uniforms.season;\n\n  var dirtLight = vec3f(0.86, 0.80, 0.68);\n  var dirtMid = vec3f(0.80, 0.74, 0.62);\n  var dirtDark = vec3f(0.72, 0.66, 0.54);\n\n  // Summer: dirty earthy brown-beige soil\n  if (season > 0.5 && season < 1.5) {\n    dirtLight = vec3f(0.78, 0.66, 0.52);\n    dirtMid   = vec3f(0.68, 0.57, 0.43);\n    dirtDark  = vec3f(0.56, 0.46, 0.34);\n  }\n\n  var sakuraLight = vec3f(0.88, 0.48, 0.55);\n  var sakuraMid = vec3f(0.78, 0.34, 0.42);\n  var sakuraDeep = vec3f(0.65, 0.24, 0.32);\n  var sakuraRich = vec3f(0.52, 0.16, 0.24);\n\n  // Custom color tint for canopy blocks — saturated\n  let customStr = uniforms.customStrength;\n  if (customStr > 0.01) {\n    let cc = vec3f(uniforms.customR, uniforms.customG, uniforms.customB);\n    sakuraLight = mix(sakuraLight, cc * 1.15, customStr);\n    sakuraMid   = mix(sakuraMid,   cc * 0.90, customStr);\n    sakuraDeep  = mix(sakuraDeep,  cc * 0.70, customStr);\n    sakuraRich  = mix(sakuraRich,  cc * 0.55, customStr);\n  }\n\n  var grassDark = vec3f(0.10, 0.30, 0.06);\n  var grassMid = vec3f(0.16, 0.42, 0.10);\n  var grassBright = vec3f(0.24, 0.52, 0.14);\n\n  if (season > 0.5 && season < 1.5) {\n    sakuraLight = vec3f(0.10, 0.24, 0.03);\n    sakuraMid   = vec3f(0.06, 0.18, 0.02);\n    sakuraDeep  = vec3f(0.04, 0.13, 0.01);\n    sakuraRich  = vec3f(0.02, 0.08, 0.01);\n    grassDark   = vec3f(0.04, 0.16, 0.01);\n    grassMid    = vec3f(0.08, 0.26, 0.02);\n    grassBright = vec3f(0.14, 0.36, 0.04);\n  } else if (season > 1.5 && season < 2.5) {\n    sakuraLight = vec3f(0.74, 0.36, 0.10);\n    sakuraMid   = vec3f(0.62, 0.23, 0.07);\n    sakuraDeep  = vec3f(0.50, 0.15, 0.05);\n    sakuraRich  = vec3f(0.38, 0.10, 0.03);\n    grassDark   = vec3f(0.42, 0.26, 0.08);\n    grassMid    = vec3f(0.56, 0.34, 0.10);\n    grassBright = vec3f(0.68, 0.42, 0.12);\n  }\n\n  let barkLight = vec3f(0.42, 0.24, 0.14);\n  let barkMid = vec3f(0.34, 0.18, 0.10);\n  let barkDark = vec3f(0.24, 0.12, 0.06);\n  let barkDeep = vec3f(0.18, 0.08, 0.04);\n\n  const sunDir = vec3f(-0.405616, 0.861934, -0.304212);\n  let sunCol = vec3f(1.20, 1.20, 1.20);\n  let ambient = vec3f(0.28, 0.28, 0.30);\n  let skyFill = " + J(Z) + ";\n  let bounce = " + J(Q) + ";\n\n  let NdSun = max(dot(N, sunDir), 0.0);\n  let NdUp = max(dot(N, vec3f(0.0, 1.0, 0.0)), 0.0);\n\n  let layer = input.layer;\n  let seed = vec2f(input.col, input.row);\n  let blockSeed = seed.x * 17.3 + seed.y * 31.1 + layer * 73.7;\n  let noise1 = fract(sin(blockSeed) * 43758.5);\n  let noise2 = fract(sin(blockSeed * 1.7 + 127.1) * 43758.5);\n  let noise3 = fract(sin(blockSeed * 2.3 + 311.7) * 43758.5);\n\n  let gridSize = uniforms.gridSize;\n  let cx = gridSize * 0.5;\n  let cy = gridSize * 0.5;\n  let shadowOffsetX = 1.5;\n  let shadowOffsetY = 1.5;\n  let dx = input.col - (cx + shadowOffsetX);\n  let dy = input.row - (cy + shadowOffsetY);\n  let distFromShadowCenter = sqrt(dx * dx + dy * dy);\n  let canopyRadius = gridSize * 0.46;\n  let trunkRadius = 2.5;\n  let shadowT = 1.0 - smoothstep(trunkRadius, canopyRadius, distFromShadowCenter);\n  let trunkAO = (1.0 - smoothstep(0.0, trunkRadius * 1.5, distFromShadowCenter)) * 0.20;\n  let treeShadow = 1.0 - shadowT * 0.35 - trunkAO;\n\n  let maxCanopyLayer = 15.0;\n  let layerRatio = min(layer / maxCanopyLayer, 1.0);\n  let canopyAO = 0.65 + layerRatio * 0.35;\n\n  var albedo = vec3f(0.5);\n\n  if (input.faceNy > 0.5) {\n    let topWarmTint = vec3f(1.1, 1.08, 1.02);\n    let isDarkModule = step(0.5, f32(blockType));\n\n    if (blockType == 0) {\n      var dirtColor = dirtMid;\n      let t = noise1;\n      if (t < 0.4) { dirtColor = mix(dirtLight, dirtMid, t / 0.4); }\n      else if (t < 0.7) { dirtColor = mix(dirtMid, dirtDark, (t - 0.4) / 0.3); }\n      else { dirtColor = mix(dirtDark, dirtDark * 0.85, (t - 0.7) / 0.3); }\n      let shift = (noise2 - 0.5) * 0.18;\n      let grain = (noise3 - 0.5) * 0.08;\n      dirtColor = dirtColor * (1.0 + shift + grain) * treeShadow;\n\n      let distFromCenter = sqrt((input.col - cx) * (input.col - cx) + (input.row - cy) * (input.row - cy));\n      let underCanopy = step(distFromCenter, canopyRadius);\n      let speckleChance = noise3 * underCanopy;\n\n      if (season < 0.5) {\n        let petalTint = vec3f(0.90, 0.72, 0.70);\n        dirtColor = mix(dirtColor, petalTint, step(0.85, speckleChance) * 0.4);\n      } else if (season < 1.5) {\n        let greenSpeck = vec3f(0.55, 0.68, 0.42);\n        dirtColor = mix(dirtColor, greenSpeck, step(0.92, speckleChance) * 0.2);\n      } else if (season < 2.5) {\n        let leafSpeck = mix(vec3f(0.85, 0.52, 0.15), vec3f(0.72, 0.35, 0.10), noise1);\n        dirtColor = mix(dirtColor, leafSpeck, step(0.70, speckleChance) * 0.5);\n      }\n      albedo = dirtColor * topWarmTint;\n\n    } else if (blockType == 1) {\n      var cherryColor = sakuraMid;\n      let t = noise1;\n      if (t < 0.33) { cherryColor = mix(sakuraLight, sakuraMid, t / 0.33); }\n      else if (t < 0.66) { cherryColor = mix(sakuraMid, sakuraDeep, (t - 0.33) / 0.33); }\n      else { cherryColor = mix(sakuraDeep, sakuraRich, (t - 0.66) / 0.34); }\n      let shift = (noise2 - 0.5) * 0.15;\n      cherryColor = cherryColor * (1.0 + shift);\n\n      let edgeX = min(uv.x, 1.0 - uv.x);\n      let edgeY = min(uv.y, 1.0 - uv.y);\n      let edgeDist = min(edgeX, edgeY);\n      let roundedEdge = smoothstep(0.0, 0.12, edgeDist);\n      let edgeDarken = mix(0.88, 1.0, roundedEdge);\n      let finalEdge = mix(edgeDarken, 1.0, progress);\n      albedo = cherryColor * topWarmTint * canopyAO * finalEdge;\n\n    } else if (blockType == 2) {\n      let trunkMaxLayer = 18.0;\n      let heightRatio = min(layer / trunkMaxLayer, 1.0);\n      let sandColor = vec3f(0.85, 0.78, 0.64);\n      let sandShift = (noise1 - 0.5) * 0.1;\n      let groundSand = sandColor * (1.0 + sandShift) * treeShadow;\n\n      var barkColor = mix(barkMid, barkLight, noise1 * 0.4);\n      let shift = (noise2 - 0.5) * 0.15;\n      barkColor = barkColor * (1.0 + shift);\n      let aoShadow = 0.6 + heightRatio * 0.4;\n      let sandBlend = smoothstep(0.0, 0.15, heightRatio);\n      albedo = mix(groundSand, barkColor * aoShadow, sandBlend) * topWarmTint;\n\n    } else if (blockType == 3) {\n      let grassBrown = vec3f(0.28, 0.25, 0.12);\n      let grassOlive = vec3f(0.32, 0.35, 0.15);\n      var grassColor = grassMid;\n      let t = noise1;\n      if (t < 0.3) { grassColor = mix(grassBright, grassMid, t / 0.3); }\n      else if (t < 0.6) { grassColor = mix(grassMid, grassDark, (t - 0.3) / 0.3); }\n      else if (t < 0.8) { grassColor = mix(grassDark, grassBrown, (t - 0.6) / 0.2); }\n      else { grassColor = mix(grassBrown, grassOlive, (t - 0.8) / 0.2); }\n      let shift = (noise2 - 0.5) * 0.2;\n      grassColor = grassColor * (1.0 + shift);\n      albedo = grassColor * topWarmTint;\n\n    } else if (blockType == 5) {\n      var branchColor = mix(barkMid, barkLight, noise1 * 0.5);\n      let bShift = (noise2 - 0.5) * 0.12;\n      branchColor = branchColor * (1.0 + bShift);\n      let ringNoise = sin(noise1 * 12.0 + noise2 * 6.0) * 0.06 + 0.94;\n      albedo = branchColor * ringNoise * topWarmTint * canopyAO;\n\n    } else {\n      let sandA = vec3f(0.84, 0.77, 0.63);\n      let sandB = vec3f(0.80, 0.73, 0.60);\n      let sandPink = vec3f(0.84, 0.74, 0.66);\n      var fallenColor = sandA;\n      if (noise1 < 0.4) { fallenColor = mix(sandA, sandB, noise2); }\n      else if (noise1 < 0.75) { fallenColor = mix(sandB, sandPink, noise2 * 0.5); }\n      else { fallenColor = mix(sandA, sandPink, noise2 * 0.4); }\n      let shift = (noise2 - 0.5) * 0.12;\n      fallenColor = fallenColor * (1.0 + shift) * treeShadow;\n      albedo = fallenColor * topWarmTint;\n    }\n\n    let qrBoost = progress * progress;\n    // Stronger darkening for spring & autumn QR contrast\n    let seasonDark = select(0.0, 0.08, season < 0.5 || season > 1.5);\n    // Extra darkening for light custom colors (Snow) in QR mode\n    let albedoBright = dot(albedo, vec3f(0.299, 0.587, 0.114));\n    let snowExtraDark = mix(0.0, 0.12, smoothstep(0.55, 0.8, albedoBright) * customStr);\n    let darkFactor = mix(0.48, 0.32 - snowExtraDark - seasonDark, qrBoost);\n    // Prevent light QR modules from washing out to gray/white in 2D mode\n    let lightFactor = mix(0.20, 0.48, qrBoost);\n    let lightTarget = vec3f(0.92, 0.90, 0.84);\n    let darkened = albedo * darkFactor;\n    let brightened = mix(albedo, lightTarget, lightFactor);\n    albedo = mix(brightened, darkened, isDarkModule);\n\n  } else if (abs(input.faceNz) > 0.5 || abs(input.faceNx) > 0.5) {\n    let faceN = normalize(vec3f(input.faceNx, input.faceNy, input.faceNz));\n    let sunLight = max(dot(faceN, sunDir), 0.0);\n    let shade = 0.3 + sunLight * 0.65;\n    let tint = vec3f(0.95, 0.95, 0.98);\n\n    if (layer < 1.0 && (blockType == 0 || blockType == 3 || blockType == 4)) {\n      let stoneLight = vec3f(0.78, 0.72, 0.64);\n      let stoneMid = vec3f(0.68, 0.62, 0.54);\n      let stoneDark = vec3f(0.58, 0.52, 0.45);\n      var stoneColor = stoneMid;\n      if (noise1 < 0.35) { stoneColor = mix(stoneLight, stoneMid, noise2); }\n      else if (noise1 < 0.7) { stoneColor = mix(stoneMid, stoneDark, noise2 * 0.6); }\n      else { stoneColor = mix(stoneDark, stoneLight, noise2 * 0.3); }\n      let stoneShift = (noise3 - 0.5) * 0.08;\n      stoneColor = stoneColor * (1.0 + stoneShift);\n      albedo = stoneColor * shade * tint;\n\n    } else if (blockType == 0) {\n      var dirtColor = dirtMid;\n      let t = noise1;\n      if (t < 0.4) { dirtColor = mix(dirtLight, dirtMid, t / 0.4); }\n      else if (t < 0.7) { dirtColor = mix(dirtMid, dirtDark, (t - 0.4) / 0.3); }\n      else { dirtColor = dirtDark * (1.0 - (t - 0.7) * 0.2); }\n      let shift = (noise2 - 0.5) * 0.2;\n      dirtColor = dirtColor * (1.0 + shift);\n      albedo = dirtColor * shade * tint;\n\n    } else if (blockType == 1) {\n      var cherryColor = sakuraMid;\n      let t = noise1;\n      if (t < 0.33) { cherryColor = mix(sakuraLight, sakuraMid, t / 0.33); }\n      else if (t < 0.66) { cherryColor = mix(sakuraMid, sakuraDeep, (t - 0.33) / 0.33); }\n      else { cherryColor = mix(sakuraDeep, sakuraRich, (t - 0.66) / 0.34); }\n      let shift = (noise2 - 0.5) * 0.25;\n      cherryColor = cherryColor * (1.0 + shift);\n      let edgeX = min(uv.x, 1.0 - uv.x);\n      let edgeY = min(uv.y, 1.0 - uv.y);\n      let edgeDist = min(edgeX, edgeY);\n      let roundedEdge = smoothstep(0.0, 0.12, edgeDist);\n      let edgeDarken = mix(0.7, 1.0, roundedEdge);\n      albedo = cherryColor * shade * tint * canopyAO * edgeDarken;\n      if (uniforms.season > 2.5) {\n        let winterSnow = mix(vec3f(0.88, 0.94, 0.99), vec3f(0.98, 0.99, 1.00), noise1);\n        albedo = winterSnow * shade * tint * canopyAO * edgeDarken;\n      }\n\n    } else if (blockType == 2) {\n      let trunkCx = gridSize * 0.5;\n      let trunkCy = gridSize * 0.5;\n      let radX = input.col - trunkCx;\n      let radZ = input.row - trunkCy;\n      let radLen = max(sqrt(radX * radX + radZ * radZ), 0.01);\n      let cylNormalX = radX / radLen;\n      let cylNormalZ = radZ / radLen;\n      let cylN = normalize(vec3f(cylNormalX * 0.8 + faceN.x * 0.2, faceN.y * 0.15, cylNormalZ * 0.8 + faceN.z * 0.2));\n      let cylSunLight = max(dot(cylN, sunDir), 0.0);\n\n      let trunkMaxLayer = 18.0;\n      let heightRatio = min(layer / trunkMaxLayer, 1.0);\n\n      let ts = uniforms.trunkSeed;  // 0..1 per-session bark variation\n\n      let barkAngle = atan2(radZ, radX);\n      let groove1 = sin(barkAngle * (9.0 + ts * 7.0) + noise1 * 2.0) * 0.5 + 0.5;\n      let groove2 = sin(barkAngle * (5.0 + ts * 5.0) + noise2 * 3.5 + 1.7) * 0.5 + 0.5;\n      let groove3 = sin(barkAngle * (16.0 + ts * 8.0) + noise1 * 5.0) * 0.5 + 0.5;\n      let grooveDepth = (groove1 * 0.5 + groove2 * 0.3 + groove3 * 0.2) * 0.25 + 0.75;\n\n      let spiralAngle = barkAngle + heightRatio * (1.8 + ts * 2.0) + noise1 * 0.5;\n      let woodGrain = sin(spiralAngle * (6.0 + ts * 5.0) + layer * 2.0) * 0.08 + 0.92;\n      let ringPattern = sin(layer * (2.0 + ts * 3.5) + noise2 * 4.0) * 0.10 + 0.90;\n      let knotNoise = sin(barkAngle * 3.0 + layer * 5.0 + noise3 * 6.0);\n      let knot = smoothstep(0.85, 0.95, knotNoise) * 0.15;\n\n      var barkColor = mix(barkDark, barkMid, heightRatio * 0.7);\n      barkColor = mix(barkColor, barkLight, groove1 * 0.3);\n      let purpleUndertone = vec3f(0.08, 0.02, 0.10) * heightRatio * 0.3;\n      barkColor = barkColor + purpleUndertone;\n      let shift = (noise2 - 0.5) * 0.18;\n      barkColor = barkColor * (1.0 + shift);\n      barkColor = barkColor - knot;\n      // Seed-based hue variation: warm reddish (ts→1) to cool gray-brown (ts→0)\n      let hueShift = (ts - 0.5) * 0.10;\n      barkColor = clamp(barkColor + vec3f(hueShift, -abs(hueShift) * 0.25, -hueShift * 0.45), vec3f(0.0), vec3f(1.0));\n\n      let edgeFade = 1.0 - smoothstep(0.6, 1.0, abs(dot(cylN, normalize(vec3f(faceN.x, 0.0, faceN.z)))));\n      let cylAO = 0.7 + edgeFade * 0.3;\n      let vertAO = 0.60 + heightRatio * 0.40;\n      let trunkShade = 0.22 + cylSunLight * 0.75;\n      var trunkAlbedo = barkColor * trunkShade * grooveDepth * woodGrain * ringPattern * cylAO * vertAO * tint;\n\n      let sandSideColor = vec3f(0.78, 0.72, 0.58) * shade * tint;\n      let sideBlend = smoothstep(0.0, 0.15, heightRatio);\n      albedo = mix(sandSideColor, trunkAlbedo, sideBlend);\n\n    } else if (blockType == 3) {\n      let grassBrown = vec3f(0.28, 0.25, 0.12);\n      let grassOlive = vec3f(0.32, 0.35, 0.15);\n      var grassColor = grassMid;\n      let t = noise1;\n      if (t < 0.3) { grassColor = mix(grassBright, grassMid, t / 0.3); }\n      else if (t < 0.6) { grassColor = mix(grassMid, grassDark, (t - 0.6) / 0.3); }\n      else if (t < 0.8) { grassColor = mix(grassDark, grassBrown, (t - 0.6) / 0.2); }\n      else { grassColor = mix(grassBrown, grassOlive, (t - 0.8) / 0.2); }\n      let shift = (noise2 - 0.5) * 0.2;\n      grassColor = grassColor * (1.0 + shift);\n      albedo = grassColor * shade * tint;\n      if (uniforms.season > 2.5 && faceN.y > 0.15) {\n        let snowG = mix(vec3f(0.88, 0.93, 0.98), vec3f(0.97, 0.99, 1.00), noise1 * 0.5);\n        albedo = mix(albedo, snowG * shade * tint, smoothstep(0.15, 0.7, faceN.y) * 0.92);\n      }\n\n    } else if (blockType == 5) {\n      var branchColor = mix(barkDark, barkMid, noise1 * 0.6);\n      let grooveSide = sin(layer * 5.0 + noise1 * 3.0) * 0.08 + 0.92;\n      let bShift = (noise2 - 0.5) * 0.15;\n      branchColor = branchColor * (1.0 + bShift) * grooveSide;\n      albedo = branchColor * shade * tint;\n\n    } else {\n      let sandSide = vec3f(0.72, 0.66, 0.52);\n      let sandSideDark = vec3f(0.62, 0.56, 0.44);\n      var fallenColor = mix(sandSide, sandSideDark, noise1 * 0.5);\n      let shift = (noise2 - 0.5) * 0.12;\n      fallenColor = fallenColor * (1.0 + shift);\n      albedo = fallenColor * shade * tint;\n    }\n\n  } else {\n    let bottomTint = vec3f(0.65, 0.62, 0.58);\n    let fallenBottom = vec3f(0.50, 0.45, 0.38);\n\n    if (blockType == 0) { albedo = dirtDark * 0.5 * bottomTint; }\n    else if (blockType == 1) { albedo = sakuraDeep * 0.5 * bottomTint; }\n    else if (blockType == 2) { albedo = barkDark * 0.5 * bottomTint; }\n    else if (blockType == 3) { albedo = grassDark * 0.5 * bottomTint; }\n    else if (blockType == 5) { albedo = barkDark * 0.5 * bottomTint; }\n    else { albedo = fallenBottom * 0.6 * bottomTint; }\n  }\n\n  const viewDir = vec3f(0.398015, 0.597022, 0.696526);\n  let rimDot = 1.0 - max(dot(N, viewDir), 0.0);\n  let rimLight = pow(rimDot, 4.0) * 0.06 * vec3f(0.85, 0.75, 0.95);\n\n  let diffuse = albedo * (ambient + sunCol * NdSun * 0.85 + skyFill * NdUp * 0.18 + bounce * 0.15) + rimLight;\n  var hdr = diffuse;\n  hdr = acesFilm(hdr * 1.15);\n  hdr = pow(hdr, vec3f(1.0 / 2.2));\n\n  let grayB = dot(hdr, vec3f(0.299, 0.587, 0.114));\n  hdr = mix(vec3f(grayB), hdr, 1.25);\n\n  // Rain wet ground effect (hide in QR mode)\n  let rainVis = uniforms.rainMode * (1.0 - progress);\n  if (rainVis > 0.01 && input.faceNy > 0.5 && blockType != 1) {\n    let rainMode = rainVis;\n    // Wet specular highlight\n    let specDir = normalize(vec3f(0.4, 0.9, 0.3));\n    let viewD = normalize(vec3f(0.4, 0.6, 0.7));\n    let half = normalize(specDir + viewD);\n    let spec = pow(max(dot(N, half), 0.0), 32.0) * 0.16 * rainMode;\n    hdr = hdr + vec3f(spec);\n\n    // Darken for wetness\n    hdr = hdr * mix(1.0, 0.88, rainMode);\n\n    // Ripple rings on ground blocks\n    if (blockType == 0 || blockType == 3 || blockType == 4) {\n      let rippleCenter1 = vec2f(input.col + sin(uniforms.time * 1.3 + noise1 * 5.0) * 3.0,\n                                 input.row + cos(uniforms.time * 1.1 + noise2 * 4.0) * 3.0);\n      let rippleCenter2 = vec2f(input.col + sin(uniforms.time * 0.9 + noise2 * 7.0) * 4.0,\n                                 input.row + cos(uniforms.time * 1.5 + noise1 * 3.0) * 4.0);\n      let rd1 = length(vec2f(input.col, input.row) - rippleCenter1);\n      let rd2 = length(vec2f(input.col, input.row) - rippleCenter2);\n      let ripple1 = sin(rd1 * 4.0 - uniforms.time * 6.0) * 0.5 + 0.5;\n      let ripple2 = sin(rd2 * 3.5 - uniforms.time * 5.0) * 0.5 + 0.5;\n      let rippleIntensity = (smoothstep(0.4, 0.6, ripple1) + smoothstep(0.4, 0.6, ripple2)) * 0.015 * rainMode;\n      hdr = hdr + vec3f(rippleIntensity * 0.8, rippleIntensity * 0.85, rippleIntensity);\n    }\n  }\n\n  return vec4f(hdr, 1.0);\n}\n",
            depthWrite: true,
            depthCompare: "less"
          });
          const _0x2d4d3b = be(_0x2cc8ca, _0x1614a7, _0xc01810, {
            vertex: "\n" + ye + "\n\nstruct FlowerOutput {\n  @builtin(position) position: vec4f,\n  @location(0) petalT: f32,\n  @location(1) normalX: f32,\n  @location(2) normalY: f32,\n  @location(3) normalZ: f32,\n  @location(4) seed: f32,\n  @location(5) isCenter: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> flowerPositions: array<vec4f>;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> FlowerOutput {\n  var output: FlowerOutput;\n\n  let vertsPerFlower = 150u;\n  let flowerIdx = vertexIndex / vertsPerFlower;\n  let localVert = vertexIndex % vertsPerFlower;\n\n  let flowerData = flowerPositions[flowerIdx];\n  let col = flowerData.x;\n  let row = flowerData.y;\n  let topY = flowerData.z;\n  let rawSeed = flowerData.w;\n\n  let isLeaf = step(1.0, rawSeed);\n  let seed = rawSeed - isLeaf;\n  output.seed = rawSeed;\n\n  let progress = uniforms.progress;\n\n  let vis = smoothstep(0.0, 0.6, 1.0 - progress);\n  if (vis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let blockSize = f32(" + ke + ");\n  let gridSize = uniforms.gridSize;\n  let halfGrid = gridSize * blockSize * 0.5;\n\n  // In summer, cull ~60% of low-lying ground flowers\n  let season = uniforms.season;\n  let groundThreshold = blockSize * gridSize * 0.22;\n  if (season > 0.5 && season < 1.5 && topY < groundThreshold && fract(seed * 7.13) < 0.82) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let centerX = col * blockSize - halfGrid;\n  let centerY = topY;\n  let centerZ = row * blockSize - halfGrid;\n\n  let time = uniforms.time;\n  let isGroundPetal = step(topY, blockSize * 2.5);\n  let windFactor = (1.0 - isGroundPetal) * vis;\n  let windBase = sin(time * 0.45 + col * 0.25 + row * 0.15) * 0.028;\n  let windTurb = sin(time * 1.1 + col * 0.8 + row * 0.6) * 0.008;\n  let swayX = (windBase + windTurb) * windFactor;\n  let swayZ = sin(time * 0.35 + col * 0.15 + row * 0.25) * 0.018 * windFactor;\n\n  let baseScale = blockSize * (0.7 + seed * 0.3) * vis;\n  let flowerScale = mix(baseScale, baseScale * 0.9, isLeaf);\n  let petalLength = mix(flowerScale * 0.85, flowerScale * 1.3, isLeaf);\n  let petalWidth = mix(flowerScale * 0.38, flowerScale * 0.18, isLeaf);\n  let curlHeight = mix(blockSize * 0.18, blockSize * 0.08, isLeaf) * vis;\n  let centerRadius = mix(blockSize * 0.12, blockSize * 0.04, isLeaf) * vis;\n\n  let baseRotation = seed * 6.28318;\n\n  let tiltAngle = (seed * 0.25 + 0.05) * (1.0 - isLeaf * 0.5);\n  let tiltDir = seed * 6.28318 * 3.17;\n  let tiltCos = cos(tiltAngle);\n  let tiltSin = sin(tiltAngle);\n  let tiltAxisX = cos(tiltDir);\n  let tiltAxisZ = sin(tiltDir);\n\n  var localPos = vec3f(0.0);\n  var normal = vec3f(0.0, 1.0, 0.0);\n  output.isCenter = 0.0;\n  output.petalT = 0.0;\n\n  if (localVert < 120u) {\n    let petalIdx = localVert / 24u;\n    let segVert = localVert % 24u;\n    let segIdx = segVert / 6u;\n    let triVert = segVert % 6u;\n\n    let petalAngle = f32(petalIdx) * 1.25664 + baseRotation;\n    let cosA = cos(petalAngle);\n    let sinA = sin(petalAngle);\n\n    var petalScale = 1.0;\n    if (isLeaf > 0.5 && petalIdx >= 3u) {\n      petalScale = 0.0;\n    }\n\n    var rowIdx: u32;\n    var side: f32;\n    if (triVert == 0u) { rowIdx = segIdx;     side = -1.0; }\n    else if (triVert == 1u) { rowIdx = segIdx;     side =  1.0; }\n    else if (triVert == 2u) { rowIdx = segIdx + 1u; side = -1.0; }\n    else if (triVert == 3u) { rowIdx = segIdx + 1u; side = -1.0; }\n    else if (triVert == 4u) { rowIdx = segIdx;     side =  1.0; }\n    else { rowIdx = segIdx + 1u; side =  1.0; }\n\n    let t = f32(rowIdx) * 0.25;\n    output.petalT = t;\n\n    let dist = t * petalLength * petalScale;\n    let hw = petalWidth * sin(t * 3.14159) * sqrt(1.0 - t * 0.3) * petalScale;\n    let curl = curlHeight * 4.0 * t * (1.0 - t);\n\n    let alongX = dist * cosA;\n    let alongZ = dist * sinA;\n    let perpX = side * hw * (-sinA);\n    let perpZ = side * hw * cosA;\n\n    localPos = vec3f(\n      centerX + alongX + perpX + swayX,\n      centerY + curl,\n      centerZ + alongZ + perpZ + swayZ,\n    );\n\n    let curlSlope = curlHeight * 4.0 * (1.0 - 2.0 * t);\n    normal = normalize(vec3f(\n      -curlSlope * cosA + side * 0.2 * sinA,\n      1.0,\n      -curlSlope * sinA - side * 0.2 * cosA,\n    ));\n  } else {\n    output.isCenter = 1.0;\n    let diskVert = localVert - 120u;\n    let triIdx = diskVert / 3u;\n    let triV = diskVert % 3u;\n\n    let centerElevation = curlHeight * 0.8;\n\n    if (triV == 0u) {\n      localPos = vec3f(centerX + swayX, centerY + centerElevation, centerZ + swayZ);\n      normal = vec3f(0.0, 1.0, 0.0);\n    } else {\n      let angleIdx = select(triIdx, triIdx + 1u, triV == 2u);\n      let angle = f32(angleIdx) * 0.62832 + baseRotation;\n      localPos = vec3f(\n        centerX + cos(angle) * centerRadius + swayX,\n        centerY + centerElevation * 0.9,\n        centerZ + sin(angle) * centerRadius + swayZ,\n      );\n      normal = vec3f(0.0, 1.0, 0.0);\n    }\n  }\n\n  // Apply tilt (Rodrigues rotation)\n  let offX = localPos.x - centerX - swayX;\n  let offY = localPos.y - centerY;\n  let offZ = localPos.z - centerZ - swayZ;\n\n  let dotAO = tiltAxisX * offX + tiltAxisZ * offZ;\n  let crossX = -tiltAxisZ * offY;\n  let crossY = tiltAxisZ * offX - tiltAxisX * offZ;\n  let crossZ = tiltAxisX * offY;\n\n  let rotX = offX * tiltCos + crossX * tiltSin + tiltAxisX * dotAO * (1.0 - tiltCos);\n  let rotY = offY * tiltCos + crossY * tiltSin;\n  let rotZ = offZ * tiltCos + crossZ * tiltSin + tiltAxisZ * dotAO * (1.0 - tiltCos);\n\n  localPos = vec3f(\n    centerX + swayX + rotX,\n    centerY + rotY,\n    centerZ + swayZ + rotZ,\n  );\n\n  // Also rotate normal\n  let nDotA = tiltAxisX * normal.x + tiltAxisZ * normal.z;\n  let nCrossX = -tiltAxisZ * normal.y;\n  let nCrossY = tiltAxisZ * normal.x - tiltAxisX * normal.z;\n  let nCrossZ = tiltAxisX * normal.y;\n  normal = normalize(vec3f(\n    normal.x * tiltCos + nCrossX * tiltSin + tiltAxisX * nDotA * (1.0 - tiltCos),\n    normal.y * tiltCos + nCrossY * tiltSin,\n    normal.z * tiltCos + nCrossZ * tiltSin + tiltAxisZ * nDotA * (1.0 - tiltCos),\n  ));\n\n  // Scale toward center for 2D transition\n  localPos = vec3f(\n    centerX + swayX + (localPos.x - centerX - swayX) * vis,\n    centerY + (localPos.y - centerY) * vis,\n    centerZ + swayZ + (localPos.z - centerZ - swayZ) * vis,\n  );\n\n  output.normalX = normal.x;\n  output.normalY = normal.y;\n  output.normalZ = normal.z;\n\n  " + we() + "\n  \n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n  return output;\n}\n",
            fragment: "\n" + ye + "\n\nstruct FlowerInput {\n  @location(0) petalT: f32,\n  @location(1) normalX: f32,\n  @location(2) normalY: f32,\n  @location(3) normalZ: f32,\n  @location(4) seed: f32,\n  @location(5) isCenter: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n" + xe + "\n\n@fragment\nfn main(input: FlowerInput) -> @location(0) vec4f {\n  let N = normalize(vec3f(input.normalX, input.normalY, input.normalZ));\n  let t = input.petalT;\n  let rawSeed = input.seed;\n  let origIsLeaf = step(1.0, rawSeed);\n  let seed = rawSeed - origIsLeaf;\n\n  let season = uniforms.season;\n\n  let leafChance = fract(seed * 4.37);\n  var isLeaf = origIsLeaf;\n  let isGroundFlower = step(input.petalT, 0.01) * (1.0 - origIsLeaf);\n\n  if (season > 0.5 && season < 1.5) {\n    isLeaf = 1.0;\n  } else if (season > 1.5 && season < 2.5) {\n    isLeaf = 1.0;\n    if (leafChance < 0.40) { discard; }\n  } else if (season > 2.5) {\n    isLeaf = 1.0;\n    if (leafChance < 0.15) { discard; }\n  }\n\n  var leafDark   = vec3f(0.25, 0.40, 0.22);\n  var leafMedium = vec3f(0.40, 0.55, 0.30);\n  var leafLight  = vec3f(0.55, 0.68, 0.38);\n  var leafOlive  = vec3f(0.48, 0.52, 0.28);\n\n  if (season > 0.5 && season < 1.5) {\n    leafDark   = vec3f(0.03, 0.12, 0.01);\n    leafMedium = vec3f(0.06, 0.20, 0.02);\n    leafLight  = vec3f(0.12, 0.28, 0.03);\n    leafOlive  = vec3f(0.08, 0.18, 0.02);\n  } else if (season > 1.5 && season < 2.5) {\n    leafDark   = vec3f(0.42, 0.12, 0.05);\n    leafMedium = vec3f(0.58, 0.21, 0.07);\n    leafLight  = vec3f(0.70, 0.34, 0.09);\n    leafOlive  = vec3f(0.62, 0.40, 0.07);\n  } else if (season > 2.5) {\n    // Deep winter pine needle greens with rich depth\n    leafDark   = vec3f(0.08, 0.18, 0.14);\n    leafMedium = vec3f(0.16, 0.30, 0.24);\n    leafLight  = vec3f(0.26, 0.44, 0.36);\n    leafOlive  = vec3f(0.20, 0.36, 0.28);\n  }\n\n  var shadeDeep   = vec3f(0.85, 0.22, 0.38);\n  var shadeMedium = vec3f(0.92, 0.40, 0.52);\n  var shadeLight  = vec3f(0.96, 0.58, 0.66);\n  var shadePale   = vec3f(0.98, 0.75, 0.80);\n  var shadeBlush  = vec3f(0.97, 0.65, 0.72);\n  var shadeWhite  = vec3f(0.99, 0.88, 0.90);\n  var stamenGold  = vec3f(0.92, 0.78, 0.35);\n\n  if (season > 0.5 && season < 1.5) {\n    shadeDeep   = vec3f(0.88, 0.90, 0.82);\n    shadeMedium = vec3f(0.92, 0.93, 0.85);\n    shadeLight  = vec3f(0.95, 0.95, 0.88);\n    shadePale   = vec3f(0.96, 0.96, 0.92);\n    shadeBlush  = vec3f(0.93, 0.94, 0.86);\n    shadeWhite  = vec3f(0.97, 0.97, 0.94);\n    stamenGold  = vec3f(0.82, 0.78, 0.35);\n  } else if (season > 1.5 && season < 2.5) {\n    shadeDeep   = vec3f(0.52, 0.08, 0.03);\n    shadeMedium = vec3f(0.64, 0.18, 0.05);\n    shadeLight  = vec3f(0.72, 0.32, 0.07);\n    shadePale   = vec3f(0.78, 0.46, 0.12);\n    shadeBlush  = vec3f(0.68, 0.25, 0.07);\n    shadeWhite  = vec3f(0.80, 0.58, 0.20);\n    stamenGold  = vec3f(0.62, 0.42, 0.08);\n  } else if (season > 2.5) {\n    // Winter Red Holly / Plum Blossom accent dots\n    shadeDeep   = vec3f(0.70, 0.12, 0.16);\n    shadeMedium = vec3f(0.84, 0.18, 0.24);\n    shadeLight  = vec3f(0.92, 0.28, 0.32);\n    shadePale   = vec3f(0.95, 0.42, 0.46);\n    shadeBlush  = vec3f(0.88, 0.22, 0.26);\n    shadeWhite  = vec3f(0.98, 0.60, 0.64);\n    stamenGold  = vec3f(0.88, 0.75, 0.25);\n  }\n\n  var baseColor = vec3f(0.0);\n\n  if (isLeaf > 0.5) {\n    let leafTier = fract(seed * 5.17);\n    var leafBase: vec3f;\n    var leafTip: vec3f;\n    if (leafTier < 0.35) { leafBase = leafDark; leafTip = leafMedium; }\n    else if (leafTier < 0.6) { leafBase = leafMedium; leafTip = leafLight; }\n    else if (leafTier < 0.85) { leafBase = leafOlive; leafTip = leafLight; }\n    else { leafBase = leafDark; leafTip = leafOlive; }\n    baseColor = mix(leafBase, leafTip, t);\n\n    // In Winter: Top surfaces receive beautiful pure snow caps (agujas de pino cubiertas de nieve)\n    if (season > 2.5) {\n      let snowCap = smoothstep(0.15, 0.75, N.y) * (0.65 + fract(seed * 7.13) * 0.35);\n      let snowCol = vec3f(0.93, 0.95, 0.98);\n      baseColor = mix(baseColor, snowCol, snowCap * 0.82);\n      // Frost rim on leaf edge\n      baseColor = mix(baseColor, vec3f(0.86, 0.92, 0.98), t * 0.35);\n    }\n  } else if (input.isCenter > 0.5) {\n    let goldVar = fract(seed * 13.3) * 0.15;\n    let goldColor = stamenGold * (0.9 + goldVar);\n    let centerLeaf = mix(leafDark, leafMedium, fract(seed * 5.17));\n    baseColor = mix(goldColor, centerLeaf, min(season, 1.0));\n    if (season > 2.5) {\n      baseColor = mix(stamenGold, vec3f(0.92, 0.95, 0.98), 0.35);\n    }\n  } else {\n    if (season > 0.5 && season < 2.5) {\n      let leafTier2 = fract(seed * 8.13);\n      var lBase: vec3f;\n      var lTip: vec3f;\n      if (leafTier2 < 0.3) { lBase = leafDark; lTip = leafMedium; }\n      else if (leafTier2 < 0.6) { lBase = leafMedium; lTip = leafLight; }\n      else if (leafTier2 < 0.85) { lBase = leafOlive; lTip = leafLight; }\n      else { lBase = leafDark; lTip = leafOlive; }\n      baseColor = mix(lBase, lTip, t);\n    } else if (season > 2.5) {\n      // Winter snow blooms\n      let tierW = fract(seed * 7.31);\n      var pBase = vec3f(0.12, 0.24, 0.18);\n      var pTip = vec3f(0.92, 0.95, 0.98);\n      baseColor = mix(pBase, pTip, smoothstep(0.1, 0.8, t + N.y * 0.4));\n    } else {\n      let tier = fract(seed * 7.31);\n      var petalBase: vec3f;\n      var petalTip: vec3f;\n      if (tier < 0.2) { petalBase = shadeDeep; petalTip = shadeMedium; }\n      else if (tier < 0.35) { petalBase = shadeMedium; petalTip = shadeLight; }\n      else if (tier < 0.50) { petalBase = shadeLight; petalTip = shadePale; }\n      else if (tier < 0.65) { petalBase = shadeBlush; petalTip = shadePale; }\n      else if (tier < 0.80) { petalBase = shadePale; petalTip = shadeWhite; }\n      else { petalBase = shadeDeep; petalTip = shadeBlush; }\n      baseColor = mix(petalBase, petalTip, t);\n\n      let veinT = abs(t - 0.5) * 2.0;\n      let veinDarken = 1.0 - (1.0 - veinT) * 0.08;\n      baseColor = baseColor * veinDarken;\n    }\n  }\n\n  let customStrength = uniforms.customStrength;\n  if (customStrength > 0.01) {\n    let customCol = vec3f(uniforms.customR, uniforms.customG, uniforms.customB);\n    let luma = dot(baseColor, vec3f(0.299, 0.587, 0.114));\n    let baseLuma = dot(customCol, vec3f(0.299, 0.587, 0.114));\n    let lumaDelta = luma - 0.5;\n    let tinted = customCol * (0.7 + lumaDelta * 1.2) + vec3f(lumaDelta * 0.15);\n    baseColor = mix(baseColor, tinted, customStrength);\n  }\n\n  const sunDir = vec3f(-0.405616, 0.861934, -0.304212);\n  let sunColor = vec3f(1.20, 1.20, 1.20);\n  let ambient = vec3f(0.28, 0.28, 0.30);\n  let NdotL = max(dot(N, sunDir), 0.0);\n\n  let NdotLBack = max(dot(-N, sunDir), 0.0);\n  let sssColor = mix(vec3f(1.0, 0.55, 0.65), vec3f(0.6, 0.8, 0.4), isLeaf);\n  let subsurface = NdotLBack * 0.22 * sssColor;\n\n  let skyFill = vec3f(0.90, 0.85, 0.88);\n  let skyContrib = max(N.y, 0.0) * 0.12 * skyFill;\n\n  let depthDarken = mix(0.92, 1.0, fract(seed * 11.3));\n  let undersideDarken = mix(0.55, 1.0, max(N.y, 0.0)) * depthDarken;\n\n  const viewDir = vec3f(0.398015, 0.597022, 0.696526);\n  let rimDot = 1.0 - max(dot(N, viewDir), 0.0);\n  let rim = pow(rimDot, 3.0) * 0.10 * vec3f(1.0, 0.85, 0.88);\n\n  let lit = baseColor * undersideDarken * (ambient + sunColor * NdotL * 0.88) + subsurface + skyContrib + rim;\n\n  let hdr = acesFilm(lit * 1.05);\n  var ldr = pow(hdr, vec3f(1.0 / 2.2));\n\n  let gray = dot(ldr, vec3f(0.299, 0.587, 0.114));\n  ldr = mix(vec3f(gray), ldr, 1.9);\n\n  if (season < 0.5 && isLeaf < 0.5) {\n    let qrDarken = uniforms.progress * uniforms.progress;\n    let brightness = dot(ldr, vec3f(0.299, 0.587, 0.114));\n    let extraDark = mix(0.55, 0.42, smoothstep(0.5, 0.8, brightness) * customStrength);\n    ldr = ldr * mix(1.0, extraDark, qrDarken);\n  }\n\n  return vec4f(ldr, 1.0);\n}\n",
            depthWrite: true,
            depthCompare: "less"
          });
          let _0x1a172b = null;
          try {
            _0x1a172b = be(_0x2cc8ca, _0x1614a7, _0xc01810, {
              vertex: "\n" + ye + "\n\nstruct BranchOutput {\n  @builtin(position) position: vec4f,\n  @location(0) normalX: f32,\n  @location(1) normalY: f32,\n  @location(2) normalZ: f32,\n  @location(3) depth: f32,\n  @location(4) vSeed: f32,\n  @location(5) ringT: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> branchData: array<vec4f>;\n\nconst VERTS_PER_SEG: u32 = 48u;\nconst RADIAL: u32 = 8u;\nconst PI: f32 = 3.14159265;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> BranchOutput {\n  var output: BranchOutput;\n\n  let segIdx = vertexIndex / VERTS_PER_SEG;\n  let localVert = vertexIndex % VERTS_PER_SEG;\n\n  let segCount = u32(uniforms.blockCount);\n  if (segIdx >= segCount) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let startData = branchData[segIdx * 3u + 0u];\n  let endData   = branchData[segIdx * 3u + 1u];\n  let segMeta   = branchData[segIdx * 3u + 2u];\n\n  let startPos = startData.xyz;\n  let startR   = startData.w;\n  let endPos   = endData.xyz;\n  let endR     = endData.w;\n  let depth    = segMeta.x;\n  let seed     = segMeta.y;\n\n  output.depth = depth;\n  output.vSeed = seed;\n\n  let progress = uniforms.progress;\n  let branchVis = smoothstep(0.0, 0.4, 1.0 - progress);\n  if (branchVis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let quadIdx = localVert / 6u;\n  let triVert = localVert % 6u;\n\n  let angle0 = f32(quadIdx) / f32(RADIAL) * 2.0 * PI;\n  let angle1 = f32(quadIdx + 1u) / f32(RADIAL) * 2.0 * PI;\n\n  var ringT: f32;\n  var angle: f32;\n  if (triVert == 0u) { ringT = 0.0; angle = angle0; }\n  else if (triVert == 1u) { ringT = 0.0; angle = angle1; }\n  else if (triVert == 2u) { ringT = 1.0; angle = angle0; }\n  else if (triVert == 3u) { ringT = 1.0; angle = angle0; }\n  else if (triVert == 4u) { ringT = 0.0; angle = angle1; }\n  else { ringT = 1.0; angle = angle1; }\n\n  output.ringT = ringT;\n\n  let pos = mix(startPos, endPos, ringT);\n  let radius = mix(startR, endR, ringT) * branchVis;\n\n  let dir = normalize(endPos - startPos);\n  var refUp = vec3f(0.0, 1.0, 0.0);\n  if (abs(dot(dir, refUp)) > 0.95) {\n    refUp = vec3f(1.0, 0.0, 0.0);\n  }\n  let right = normalize(cross(dir, refUp));\n  let up = normalize(cross(right, dir));\n\n  let time = uniforms.time;\n  let windAmount = min(depth / 4.0, 1.0) * 0.016 * branchVis;\n  let windBase = sin(time * 0.45 + pos.x * 15.0 + pos.z * 10.0) * windAmount;\n  let windTurb = sin(time * 1.1 + pos.x * 40.0 + pos.z * 30.0) * windAmount * 0.25;\n  let windOffX = windBase + windTurb;\n  let windOffZ = sin(time * 0.35 + pos.z * 12.0 + pos.x * 8.0) * windAmount * 0.6;\n  let windedPos = pos + vec3f(windOffX, 0.0, windOffZ);\n\n  let localPos = windedPos + right * cos(angle) * radius + up * sin(angle) * radius;\n\n  let normal = normalize(right * cos(angle) + up * sin(angle));\n  output.normalX = normal.x;\n  output.normalY = normal.y;\n  output.normalZ = normal.z;\n\n  " + we() + "\n  \n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n\n  return output;\n}\n",
              fragment: "\n" + ye + "\n\nstruct BranchInput {\n  @location(0) normalX: f32,\n  @location(1) normalY: f32,\n  @location(2) normalZ: f32,\n  @location(3) depth: f32,\n  @location(4) vSeed: f32,\n  @location(5) ringT: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n" + xe + "\n\n@fragment\nfn main(input: BranchInput) -> @location(0) vec4f {\n  let N = normalize(vec3f(input.normalX, input.normalY, input.normalZ));\n  let depth = input.depth;\n  let seed = input.vSeed;\n  let t = input.ringT;\n\n  let barkBase  = vec3f(0.28, 0.16, 0.10);\n  let barkLight = vec3f(0.40, 0.26, 0.18);\n  let barkDark  = vec3f(0.16, 0.09, 0.05);\n  let barkHighlight = vec3f(0.50, 0.34, 0.24);\n\n  let depthT = min(depth / 5.0, 1.0);\n  var bark = mix(barkBase, barkLight, depthT * 0.5);\n  bark = mix(bark, barkHighlight, depthT * depthT * 0.2);\n\n  let noise1 = fract(sin(seed * 43.7 + depth * 17.3) * 43758.5);\n  let noise2 = fract(sin(seed * 73.1 + depth * 31.1 + 127.1) * 43758.5);\n\n  let grooveAngle = fract(sin(seed * 127.1 + t * 31.1) * 43758.5) * 6.28;\n  let groove1 = sin(grooveAngle * 8.0 + noise1 * 3.0) * 0.5 + 0.5;\n  let groove2 = sin(grooveAngle * 14.0 + noise2 * 5.0 + 1.7) * 0.5 + 0.5;\n  let groove3 = sin(grooveAngle * 22.0 + noise1 * 7.0) * 0.5 + 0.5;\n  let grooveEffect = (groove1 * 0.5 + groove2 * 0.3 + groove3 * 0.2) * 0.18 + 0.82;\n\n  let ring = sin(t * 18.0 + noise2 * 6.0) * 0.07 + 0.93;\n\n  let knotNoise = sin(seed * 47.3 + t * 13.0 + noise1 * 8.0);\n  let knot = smoothstep(0.88, 0.95, knotNoise) * 0.10;\n\n  let colorShift = (noise1 - 0.5) * 0.12;\n  bark = bark * (1.0 + colorShift) * grooveEffect * ring - knot;\n\n  const sunDir = vec3f(-0.405616, 0.861934, -0.304212);\n  let sunCol = vec3f(1.20, 1.20, 1.20);\n  let ambient = vec3f(0.25, 0.25, 0.28);\n  let NdotL = max(dot(N, sunDir), 0.0);\n\n  let NdotLBack = max(dot(-N, sunDir), 0.0);\n  let sss = NdotLBack * depthT * 0.06 * vec3f(0.6, 0.3, 0.2);\n\n  let skyFill = vec3f(0.85, 0.80, 0.90);\n  let skyContrib = max(N.y, 0.0) * 0.08 * skyFill;\n\n  let ao = 0.75 + depthT * 0.25;\n\n  let lit = bark * (ambient + sunCol * NdotL * 0.82) * ao + sss + skyContrib;\n\n  let hdr = acesFilm(lit * 1.05);\n  var ldr = pow(hdr, vec3f(1.0 / 2.2));\n\n  let gray = dot(ldr, vec3f(0.299, 0.587, 0.114));\n  ldr = mix(vec3f(gray), ldr, 1.25);\n\n  return vec4f(ldr, 1.0);\n}\n",
              depthWrite: true,
              depthCompare: "less"
            });
          } catch (_0x351bc4) {
            console.error("Branch pipeline failed (non-fatal):", _0x351bc4);
          }
          let _0x2f7da1 = null;
          try {
            _0x2f7da1 = be(_0x2cc8ca, _0x1614a7, _0xc01810, {
              vertex: "\n" + ye + "\n\nstruct GrassOutput {\n  @builtin(position) position: vec4f,\n  @location(0) greenT: f32,\n  @location(1) normalY: f32,\n  @location(2) seed: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> grassData: array<vec4f>;\n\nconst PI: f32 = 3.14159265;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> GrassOutput {\n  var output: GrassOutput;\n\n  let bladeIdx = vertexIndex / 3u;\n  let vertIdx = vertexIndex % 3u;\n\n  let grassCount = u32(uniforms.blockCount);\n  if (bladeIdx >= grassCount) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let progress = uniforms.progress;\n  let vis = smoothstep(0.0, 0.3, 1.0 - progress);\n  if (vis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let data = grassData[bladeIdx];\n  let col = data.x;\n  let row = data.y;\n  let seed = data.z;\n  let bladeHeight = data.w * vis;\n\n  output.seed = seed;\n\n  let blockSize = f32(" + ke + ");\n  let gridSize = uniforms.gridSize;\n  let halfGrid = gridSize * blockSize * 0.5;\n\n  let baseX = col * blockSize - halfGrid;\n  let baseY = 0.0;\n  let baseZ = row * blockSize - halfGrid;\n\n  let angle = seed * PI * 2.0;\n  let cosA = cos(angle);\n  let sinA = sin(angle);\n\n  let halfWidth = blockSize * 0.22;\n\n  var localPos = vec3f(0.0);\n\n  let tiltX = (seed - 0.5) * 0.4;\n  let tiltZ = (fract(seed * 7.13) - 0.5) * 0.4;\n  let time = uniforms.time;\n  let windBase = sin(time * 0.45 + col * 0.25 + row * 0.15) * 0.02;\n  let windTurb = sin(time * 1.1 + col * 0.8 + row * 0.6) * 0.005;\n  let windX = windBase + windTurb;\n  let windZ = sin(time * 0.35 + col * 0.15 + row * 0.25) * 0.012;\n  let tipOffX = (tiltX + windX) * bladeHeight * 4.0;\n  let tipOffZ = (tiltZ + windZ) * bladeHeight * 4.0;\n\n  let yLift = blockSize * 1.0;\n\n  if (vertIdx == 0u) {\n    localPos = vec3f(baseX - halfWidth * cosA, baseY + yLift, baseZ - halfWidth * sinA);\n    output.greenT = 0.0;\n    output.normalY = 0.3;\n  } else if (vertIdx == 1u) {\n    localPos = vec3f(baseX + halfWidth * cosA, baseY + yLift, baseZ + halfWidth * sinA);\n    output.greenT = 0.0;\n    output.normalY = 0.3;\n  } else {\n    let curlDroop = bladeHeight * seed * 0.15;\n    localPos = vec3f(baseX + tipOffX, baseY + yLift + bladeHeight - curlDroop, baseZ + tipOffZ);\n    output.greenT = 1.0;\n    output.normalY = 0.9;\n  }\n\n  " + we() + "\n  \n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n\n  return output;\n}\n",
              fragment: "\n" + ye + "\n\nstruct GrassInput {\n  @location(0) greenT: f32,\n  @location(1) normalY: f32,\n  @location(2) seed: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n" + xe + "\n\n@fragment\nfn main(input: GrassInput) -> @location(0) vec4f {\n  let season = uniforms.season;\n\n  var darkGreen  = vec3f(0.12, 0.32, 0.06);\n  var midGreen   = vec3f(0.22, 0.48, 0.12);\n  var lightGreen = vec3f(0.35, 0.58, 0.20);\n  var coralPink  = vec3f(0.65, 0.28, 0.30);\n  var dustyRose  = vec3f(0.55, 0.32, 0.28);\n  var mossGreen  = vec3f(0.30, 0.40, 0.15);\n  var yellowFlower = vec3f(0.75, 0.68, 0.20);\n  var whiteFlower = vec3f(0.88, 0.86, 0.78);\n  var lavender = vec3f(0.55, 0.42, 0.62);\n\n  if (season > 0.5 && season < 1.5) {\n    darkGreen  = vec3f(0.03, 0.16, 0.01);\n    midGreen   = vec3f(0.08, 0.28, 0.02);\n    lightGreen = vec3f(0.16, 0.38, 0.04);\n    mossGreen  = vec3f(0.10, 0.22, 0.02);\n    coralPink  = vec3f(0.12, 0.28, 0.03);\n    dustyRose  = vec3f(0.08, 0.22, 0.02);\n    yellowFlower = vec3f(0.44, 0.48, 0.10);\n    whiteFlower = vec3f(0.58, 0.64, 0.42);\n    lavender = vec3f(0.18, 0.30, 0.08);\n  } else if (season > 1.5 && season < 2.5) {\n    darkGreen  = vec3f(0.42, 0.24, 0.08);\n    midGreen   = vec3f(0.56, 0.32, 0.10);\n    lightGreen = vec3f(0.70, 0.42, 0.12);\n    mossGreen  = vec3f(0.50, 0.30, 0.08);\n    coralPink  = vec3f(0.62, 0.26, 0.10);\n    dustyRose  = vec3f(0.55, 0.28, 0.12);\n    yellowFlower = vec3f(0.76, 0.52, 0.14);\n    whiteFlower = vec3f(0.74, 0.62, 0.42);\n    lavender = vec3f(0.52, 0.32, 0.18);\n  } else if (season > 2.5) {\n    // Winter dormant golden reeds and frosty dried grass\n    darkGreen    = vec3f(0.35, 0.32, 0.25);\n    midGreen     = vec3f(0.48, 0.45, 0.36);\n    lightGreen   = vec3f(0.65, 0.62, 0.52);\n    mossGreen    = vec3f(0.40, 0.38, 0.30);\n    coralPink    = vec3f(0.60, 0.58, 0.52);\n    dustyRose    = vec3f(0.52, 0.50, 0.44);\n    yellowFlower = vec3f(0.78, 0.18, 0.22); // Winter Holly Red Berry\n    whiteFlower  = vec3f(0.92, 0.94, 0.96); // Snow frost dots\n    lavender     = vec3f(0.55, 0.54, 0.50);\n  }\n\n  let tier = fract(input.seed * 7.31);\n  var baseColor: vec3f;\n  var tipColor: vec3f;\n  if (tier < 0.22) { baseColor = darkGreen; tipColor = midGreen; }\n  else if (tier < 0.42) { baseColor = midGreen; tipColor = lightGreen; }\n  else if (tier < 0.55) { baseColor = mossGreen; tipColor = lightGreen; }\n  else if (tier < 0.68) { baseColor = dustyRose; tipColor = coralPink; }\n  else if (tier < 0.76) { baseColor = coralPink; tipColor = vec3f(0.72, 0.35, 0.35); }\n  else if (tier < 0.84) { baseColor = midGreen; tipColor = yellowFlower; }\n  else if (tier < 0.92) { baseColor = mossGreen; tipColor = whiteFlower; }\n  else { baseColor = dustyRose; tipColor = lavender; }\n\n  var color = mix(baseColor, tipColor, input.greenT);\n  if (season > 2.5) {\n    // Frost tip highlight\n    color = mix(color, vec3f(0.90, 0.93, 0.96), input.greenT * 0.45);\n  }\n\n  const sunDir = vec3f(-0.405616, 0.861934, -0.304212);\n  let N = normalize(vec3f(0.0, input.normalY, 0.3));\n  let NdotL = max(dot(N, sunDir), 0.0);\n  let ambient = vec3f(0.22, 0.24, 0.18);\n  let sunCol = vec3f(1.20, 1.20, 1.20);\n\n  let lit = color * (ambient + sunCol * NdotL * 0.85);\n\n  let hdr = acesFilm(lit * 1.1);\n  var ldr = pow(hdr, vec3f(1.0 / 2.2));\n\n  let gray = dot(ldr, vec3f(0.299, 0.587, 0.114));\n  ldr = mix(vec3f(gray), ldr, 1.6);\n\n  return vec4f(ldr, 1.0);\n}\n",
              depthWrite: true,
              depthCompare: "less"
            });
          } catch (_0x33b16b) {
            console.error("Grass pipeline failed (non-fatal):", _0x33b16b);
          }
          let _0x72f378 = null;
          try {
            _0x72f378 = be(_0x2cc8ca, _0x1614a7, _0xc01810, {
              vertex: "\n" + ye + "\n\nstruct FlowerOutput {\n  @builtin(position) position: vec4f,\n  @location(0) petalT: f32,\n  @location(1) normalX: f32,\n  @location(2) normalY: f32,\n  @location(3) normalZ: f32,\n  @location(4) seed: f32,\n  @location(5) isCenter: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> petalData: array<vec4f>;\n\nconst PI: f32 = 3.14159265;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> FlowerOutput {\n  var output: FlowerOutput;\n\n  let vertsPerFlower = 150u;\n  let flowerIdx = vertexIndex / vertsPerFlower;\n  let localVert = vertexIndex % vertsPerFlower;\n\n  let petalCount = u32(uniforms.blockCount);\n  if (flowerIdx >= petalCount) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let progress = uniforms.progress;\n  let vis = smoothstep(0.0, 0.4, 1.0 - progress);\n  if (vis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let data = petalData[flowerIdx];\n  let col = data.x;\n  let row = data.y;\n  let topY = data.z;\n  let seed = data.w;\n  output.seed = seed;\n\n  let blockSize = f32(" + ke + ");\n  let gridSize = uniforms.gridSize;\n  let halfGrid = gridSize * blockSize * 0.5;\n  let time = uniforms.time;\n\n  let cyclePeriod = 8.0 + seed * 6.0;\n  let phaseOffset = seed * 100.0;\n  let rawCycle = (time + phaseOffset) / cyclePeriod;\n  let cycleT = fract(rawCycle);\n\n  let fadeIn = smoothstep(0.0, 0.05, cycleT);\n  let fadeOut = 1.0 - smoothstep(0.95, 1.0, cycleT);\n  let fallVis = fadeIn * fadeOut * vis;\n\n  if (fallVis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let fallT = cycleT;\n  let groundY = blockSize * 1.5;\n  let fallHeight = mix(topY, groundY, fallT);\n\n  let originX = col * blockSize - halfGrid;\n  let originZ = row * blockSize - halfGrid;\n\n  let driftX = sin(time * 0.45 + seed * 5.0) * 0.045 * fallT\n             + sin(time * 1.1 + seed * 12.0) * 0.012 * fallT;\n  let driftZ = sin(time * 0.35 + seed * 8.0) * 0.03 * fallT\n             + cos(time * 0.8 + seed * 3.0) * 0.01 * fallT;\n\n  // Burst effect on toggle\n  let burstAge = time - uniforms.burstTime;\n  let burstIntensity = smoothstep(2.5, 0.0, burstAge) * step(0.0, uniforms.burstTime);\n  let burstAngle = seed * 6.28318 * 3.0 + f32(flowerIdx) * 0.618 * 6.28318;\n  let burstRadius = burstIntensity * blockSize * gridSize * 0.25 * (0.4 + seed * 0.6);\n  let burstDx = cos(burstAngle) * burstRadius;\n  let burstDy = burstIntensity * burstIntensity * blockSize * gridSize * 0.12 * (seed * 0.5 + 0.3);\n  let burstDz = sin(burstAngle) * burstRadius;\n\n  let centerX = originX + driftX + burstDx;\n  let centerY = fallHeight + burstDy;\n  let centerZ = originZ + driftZ + burstDz;\n\n  let flowerScale = blockSize * (0.5 + seed * 0.3) * fallVis;\n  let petalLength = flowerScale * 0.85;\n  let petalWidth = flowerScale * 0.38;\n  let curlHeight = blockSize * 0.15 * fallVis;\n  let centerRadius = blockSize * 0.10 * fallVis;\n\n  let baseRotation = seed * 6.28318 + time * (0.8 + seed * 1.2);\n\n  let tiltAngle = 0.3 + fallT * 1.2 + sin(time * 0.9 + seed * 7.0) * 0.4;\n  let tiltDir = time * (0.5 + seed * 0.8) + seed * PI * 2.0;\n  let tiltCos = cos(tiltAngle);\n  let tiltSin = sin(tiltAngle);\n  let tiltAxisX = cos(tiltDir);\n  let tiltAxisZ = sin(tiltDir);\n\n  var localPos = vec3f(0.0);\n  var normal = vec3f(0.0, 1.0, 0.0);\n  output.isCenter = 0.0;\n  output.petalT = 0.0;\n\n  if (localVert < 120u) {\n    let petalIdx = localVert / 24u;\n    let segVert = localVert % 24u;\n    let segIdx = segVert / 6u;\n    let triVert = segVert % 6u;\n\n    let petalAngle = f32(petalIdx) * 1.25664 + baseRotation;\n    let cosA = cos(petalAngle);\n    let sinA = sin(petalAngle);\n\n    var rowIdx: u32;\n    var side: f32;\n    if (triVert == 0u) { rowIdx = segIdx;     side = -1.0; }\n    else if (triVert == 1u) { rowIdx = segIdx;     side =  1.0; }\n    else if (triVert == 2u) { rowIdx = segIdx + 1u; side = -1.0; }\n    else if (triVert == 3u) { rowIdx = segIdx + 1u; side = -1.0; }\n    else if (triVert == 4u) { rowIdx = segIdx;     side =  1.0; }\n    else { rowIdx = segIdx + 1u; side =  1.0; }\n\n    let t = f32(rowIdx) * 0.25;\n    output.petalT = t;\n\n    let dist = t * petalLength;\n    let hw = petalWidth * sin(t * 3.14159) * sqrt(1.0 - t * 0.3);\n    let curl = curlHeight * 4.0 * t * (1.0 - t);\n\n    let alongX = dist * cosA;\n    let alongZ = dist * sinA;\n    let perpX = side * hw * (-sinA);\n    let perpZ = side * hw * cosA;\n\n    localPos = vec3f(alongX + perpX, curl, alongZ + perpZ);\n\n    let curlSlope = curlHeight * 4.0 * (1.0 - 2.0 * t);\n    normal = normalize(vec3f(\n      -curlSlope * cosA + side * 0.2 * sinA,\n      1.0,\n      -curlSlope * sinA - side * 0.2 * cosA,\n    ));\n  } else {\n    output.isCenter = 1.0;\n    let diskVert = localVert - 120u;\n    let triIdx = diskVert / 3u;\n    let triV = diskVert % 3u;\n\n    let centerElevation = curlHeight * 0.8;\n\n    if (triV == 0u) {\n      localPos = vec3f(0.0, centerElevation, 0.0);\n      normal = vec3f(0.0, 1.0, 0.0);\n    } else {\n      let angleIdx = select(triIdx, triIdx + 1u, triV == 2u);\n      let diskAngle = f32(angleIdx) * 0.62832 + baseRotation;\n      localPos = vec3f(cos(diskAngle) * centerRadius, centerElevation * 0.9, sin(diskAngle) * centerRadius);\n      normal = vec3f(0.0, 1.0, 0.0);\n    }\n  }\n\n  // Apply tumbling tilt (Rodrigues rotation)\n  let dotAO = tiltAxisX * localPos.x + tiltAxisZ * localPos.z;\n  let crossX = -tiltAxisZ * localPos.y;\n  let crossY = tiltAxisZ * localPos.x - tiltAxisX * localPos.z;\n  let crossZ = tiltAxisX * localPos.y;\n\n  let rotX = localPos.x * tiltCos + crossX * tiltSin + tiltAxisX * dotAO * (1.0 - tiltCos);\n  let rotY = localPos.y * tiltCos + crossY * tiltSin;\n  let rotZ = localPos.z * tiltCos + crossZ * tiltSin + tiltAxisZ * dotAO * (1.0 - tiltCos);\n\n  localPos = vec3f(centerX + rotX, centerY + rotY, centerZ + rotZ);\n\n  let nDotA = tiltAxisX * normal.x + tiltAxisZ * normal.z;\n  let nCrossX = -tiltAxisZ * normal.y;\n  let nCrossY = tiltAxisZ * normal.x - tiltAxisX * normal.z;\n  let nCrossZ = tiltAxisX * normal.y;\n  normal = normalize(vec3f(\n    normal.x * tiltCos + nCrossX * tiltSin + tiltAxisX * nDotA * (1.0 - tiltCos),\n    normal.y * tiltCos + nCrossY * tiltSin,\n    normal.z * tiltCos + nCrossZ * tiltSin + tiltAxisZ * nDotA * (1.0 - tiltCos),\n  ));\n\n  output.normalX = normal.x;\n  output.normalY = normal.y;\n  output.normalZ = normal.z;\n\n  " + we() + "\n  \n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n  return output;\n}\n",
              fragment: "\n" + ye + "\n\nstruct FlowerInput {\n  @location(0) petalT: f32,\n  @location(1) normalX: f32,\n  @location(2) normalY: f32,\n  @location(3) normalZ: f32,\n  @location(4) seed: f32,\n  @location(5) isCenter: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n" + xe + "\n\n@fragment\nfn main(input: FlowerInput) -> @location(0) vec4f {\n  let N = normalize(vec3f(input.normalX, input.normalY, input.normalZ));\n  let t = input.petalT;\n  let seed = input.seed;\n\n  let season = uniforms.season;\n\n  let fallChance = fract(seed * 4.37);\n  let springThreshold = mix(0.25, 0.15, uniforms.customStrength);\n  if (season < 0.5 && fallChance > springThreshold) { discard; }\n  if (season > 0.5 && season < 1.5) { discard; }\n  if (season > 2.5 && fallChance > 0.85) { discard; }\n\n  var shadeDeep    = vec3f(0.85, 0.22, 0.38);\n  var shadeMedium  = vec3f(0.92, 0.40, 0.52);\n  var shadeLight   = vec3f(0.96, 0.58, 0.66);\n  var shadePale    = vec3f(0.98, 0.75, 0.80);\n  var shadeBlush   = vec3f(0.97, 0.65, 0.72);\n  var shadeWhite   = vec3f(0.99, 0.88, 0.90);\n  var stamenGold   = vec3f(0.92, 0.78, 0.35);\n\n  if (season > 0.5 && season < 1.5) {\n    shadeDeep = vec3f(0.04, 0.14, 0.01); shadeMedium = vec3f(0.08, 0.24, 0.02);\n    shadeLight = vec3f(0.14, 0.34, 0.04); shadePale = vec3f(0.22, 0.40, 0.06);\n    shadeBlush = vec3f(0.10, 0.28, 0.03); shadeWhite = vec3f(0.28, 0.42, 0.08);\n    stamenGold = vec3f(0.34, 0.36, 0.06);\n  } else if (season > 1.5 && season < 2.5) {\n    shadeDeep = vec3f(0.62, 0.10, 0.04); shadeMedium = vec3f(0.75, 0.22, 0.06);\n    shadeLight = vec3f(0.85, 0.38, 0.08); shadePale = vec3f(0.90, 0.55, 0.15);\n    shadeBlush = vec3f(0.80, 0.30, 0.08); shadeWhite = vec3f(0.92, 0.68, 0.25);\n    stamenGold = vec3f(0.72, 0.50, 0.10);\n  } else if (season > 2.5) {\n    shadeDeep = vec3f(0.80, 0.88, 0.98); shadeMedium = vec3f(0.90, 0.95, 1.00);\n    shadeLight = vec3f(0.96, 0.98, 1.00); shadePale = vec3f(0.98, 0.99, 1.00);\n    shadeBlush = vec3f(0.90, 0.95, 1.00); shadeWhite = vec3f(1.00, 1.00, 1.00);\n    stamenGold = vec3f(0.75, 0.88, 1.00);\n  }\n\n  var baseColor = vec3f(0.0);\n\n  if (input.isCenter > 0.5) {\n    let goldVar = fract(seed * 13.3) * 0.15;\n    baseColor = stamenGold * (0.9 + goldVar);\n  } else {\n    let tier = fract(seed * 7.31);\n    var petalBase: vec3f;\n    var petalTip: vec3f;\n    if (tier < 0.2) { petalBase = shadeDeep; petalTip = shadeMedium; }\n    else if (tier < 0.35) { petalBase = shadeMedium; petalTip = shadeLight; }\n    else if (tier < 0.50) { petalBase = shadeLight; petalTip = shadePale; }\n    else if (tier < 0.65) { petalBase = shadeBlush; petalTip = shadePale; }\n    else if (tier < 0.80) { petalBase = shadePale; petalTip = shadeWhite; }\n    else { petalBase = shadeDeep; petalTip = shadeBlush; }\n    baseColor = mix(petalBase, petalTip, t);\n\n    let veinT = abs(t - 0.5) * 2.0;\n    let veinDarken = 1.0 - (1.0 - veinT) * 0.08;\n    baseColor = baseColor * veinDarken;\n  }\n\n  let customStrength = uniforms.customStrength;\n  if (customStrength > 0.01) {\n    let customCol = vec3f(uniforms.customR, uniforms.customG, uniforms.customB);\n    let luma = dot(baseColor, vec3f(0.299, 0.587, 0.114));\n    let lumaDelta = luma - 0.5;\n    let tinted = customCol * (0.7 + lumaDelta * 1.2) + vec3f(lumaDelta * 0.15);\n    baseColor = mix(baseColor, tinted, customStrength);\n  }\n\n  const sunDir = vec3f(-0.405616, 0.861934, -0.304212);\n  let sunColor = vec3f(1.20, 1.20, 1.20);\n  let ambient = vec3f(0.28, 0.28, 0.30);\n  let NdotL = max(dot(N, sunDir), 0.0);\n\n  let NdotLBack = max(dot(-N, sunDir), 0.0);\n  let sssColor = vec3f(1.0, 0.55, 0.65);\n  let subsurface = NdotLBack * 0.22 * sssColor;\n\n  let skyFill = vec3f(0.90, 0.85, 0.88);\n  let skyContrib = max(N.y, 0.0) * 0.12 * skyFill;\n\n  let undersideDarken = mix(0.55, 1.0, max(N.y, 0.0));\n\n  const viewDir = vec3f(0.398015, 0.597022, 0.696526);\n  let rimDot = 1.0 - max(dot(N, viewDir), 0.0);\n  let rim = pow(rimDot, 3.0) * 0.10 * vec3f(1.0, 0.85, 0.88);\n\n  let lit = baseColor * undersideDarken * (ambient + sunColor * NdotL * 0.88) + subsurface + skyContrib + rim;\n\n  let hdr = acesFilm(lit * 1.05);\n  var ldr = pow(hdr, vec3f(1.0 / 2.2));\n\n  let gray = dot(ldr, vec3f(0.299, 0.587, 0.114));\n  ldr = mix(vec3f(gray), ldr, 1.6);\n\n  return vec4f(ldr, 1.0);\n}\n",
              depthWrite: true,
              depthCompare: "less"
            });
          } catch (_0x45bc9e) {
            console.error("Falling petal pipeline failed (non-fatal):", _0x45bc9e);
          }
          let _0x3bc201 = null;
          try {
            _0x3bc201 = be(_0x2cc8ca, _0x1614a7, _0xc01810, {
              vertex: "\n" + ye + "\n\nstruct RainOutput {\n  @builtin(position) position: vec4f,\n  @location(0) alpha: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> rainData: array<vec4f>;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> RainOutput {\n  var output: RainOutput;\n\n  let vertsPerDrop = 6u;\n  let dropIdx = vertexIndex / vertsPerDrop;\n  let localVert = vertexIndex % vertsPerDrop;\n\n  let count = u32(uniforms.blockCount);\n  if (dropIdx >= count) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let rainMode = uniforms.rainMode;\n  let progress = uniforms.progress;\n  // Hide rain in QR mode\n  let vis = smoothstep(0.0, 0.3, 1.0 - progress) * rainMode;\n\n  if (vis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let data = rainData[dropIdx];\n  let col = data.x;\n  let row = data.y;\n  let phase = data.z;\n  let seed = data.w;\n\n  let blockSize = f32(" + ke + ");\n  let gridSize = uniforms.gridSize;\n  let halfGrid = gridSize * blockSize * 0.5;\n  let time = uniforms.time;\n\n  let fallSpeed = 1.5 + seed * 1.0;\n  let cycleT = fract((time * fallSpeed + phase * 10.0) * 0.3);\n\n  let topY = blockSize * 45.0;\n  let botY = blockSize * 0.5;\n  let dropY = mix(topY, botY, cycleT);\n\n  // Slight fixed wind angle for rain\n  let windDrift = 0.015 * cycleT;\n\n  let baseX = col * blockSize - halfGrid + windDrift;\n  let baseZ = row * blockSize - halfGrid + 0.008 * cycleT;\n\n  let streakLength = blockSize * (2.5 + seed * 1.5);\n  let streakWidth = blockSize * 0.06;\n\n  let quadVerts = array<vec2f, 6>(\n    vec2f(-1.0, 0.0), vec2f(1.0, 0.0), vec2f(-1.0, 1.0),\n    vec2f(-1.0, 1.0), vec2f(1.0, 0.0), vec2f(1.0, 1.0)\n  );\n  let qv = quadVerts[localVert];\n\n  let fadeTop = smoothstep(0.0, 0.1, cycleT);\n  let fadeBot = 1.0 - smoothstep(0.85, 1.0, cycleT);\n  output.alpha = fadeTop * fadeBot * vis * (0.06 + seed * 0.05);\n\n  var localPos = vec3f(\n    baseX + qv.x * streakWidth,\n    dropY + qv.y * streakLength,\n    baseZ\n  );\n\n  " + we() + "\n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n  return output;\n}\n",
              fragment: "\n" + ye + "\n\nstruct RainInput {\n  @location(0) alpha: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n@fragment\nfn main(input: RainInput) -> @location(0) vec4f {\n  if (input.alpha < 0.01) { discard; }\n  let color = vec3f(0.72, 0.78, 0.9);\n  return vec4f(color * input.alpha, input.alpha);\n}\n",
              depthWrite: false,
              depthCompare: "less",
              blend: {
                color: {
                  srcFactor: "src-alpha",
                  dstFactor: "one-minus-src-alpha",
                  operation: "add"
                },
                alpha: {
                  srcFactor: "one",
                  dstFactor: "one-minus-src-alpha",
                  operation: "add"
                }
              }
            });
          } catch (_0x1e59c2) {
            console.error("Rain pipeline failed (non-fatal):", _0x1e59c2);
          }
          let _0x32fe7e = null;
          try {
            _0x32fe7e = be(_0x2cc8ca, _0x1614a7, _0xc01810, {
              vertex: "\n" + ye + "\n\nstruct ButterflyOutput {\n  @builtin(position) position: vec4f,\n  @location(0) wingT: f32,\n  @location(1) seed: f32,\n  @location(2) wingSide: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var<storage, read> butterflyData: array<vec4f>;\n\nconst PI: f32 = 3.14159265;\n\n@vertex\nfn main(@builtin(vertex_index) vertexIndex: u32) -> ButterflyOutput {\n  var output: ButterflyOutput;\n\n  let vertsPerButterfly = 6u;\n  let bIdx = vertexIndex / vertsPerButterfly;\n  let localVert = vertexIndex % vertsPerButterfly;\n\n  let count = u32(uniforms.blockCount);\n  if (bIdx >= count) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let progress = uniforms.progress;\n  let season = uniforms.season;\n\n  // Summer only (season 1)\n  let summerVis = 1.0 - abs(season - 1.0);\n  let vis = smoothstep(0.0, 0.4, 1.0 - progress) * smoothstep(0.0, 0.5, summerVis);\n  if (vis < 0.01) {\n    output.position = vec4f(0.0, 0.0, -10.0, 1.0);\n    return output;\n  }\n\n  let data = butterflyData[bIdx];\n  let orbitRadius = data.x;\n  let orbitSpeed = data.y;\n  let heightOffset = data.z;\n  let seed = data.w;\n  output.seed = seed;\n\n  let blockSize = f32(" + ke + ");\n  let gridSize = uniforms.gridSize;\n  let halfGrid = gridSize * blockSize * 0.5;\n  let time = uniforms.time;\n\n  // Faster erratic orbit with wobble\n  let phase = seed * PI * 2.0;\n  let orbitAngle = time * orbitSpeed + phase;\n  let wobble = sin(time * 2.5 + seed * 8.0) * 0.3;\n  let bobY = sin(time * 1.8 + seed * 5.0) * blockSize * 2.0;\n\n  let centerCol = gridSize * 0.5 + cos(orbitAngle + wobble) * orbitRadius;\n  let centerRow = gridSize * 0.5 + sin(orbitAngle + wobble) * orbitRadius;\n  let centerY = blockSize * heightOffset + bobY;\n\n  let centerX = centerCol * blockSize - halfGrid;\n  let centerZ = centerRow * blockSize - halfGrid;\n\n  // Direction of travel (tangent to orbit)\n  let dirX = -sin(orbitAngle + wobble);\n  let dirZ = cos(orbitAngle + wobble);\n\n  // Rapid wing flapping — butterfly flutter\n  let flapSpeed = 14.0 + seed * 10.0;\n  let flapAngle = sin(time * flapSpeed + seed * 10.0) * 0.9;\n\n  // Square-ish wings — width ≈ length\n  let wingSpan = blockSize * (0.82 + seed * 0.32) * vis;\n  let wingLength = blockSize * (0.74 + seed * 0.24) * vis;\n\n  // Perpendicular to flight direction (wing axis)\n  let perpX = dirZ;\n  let perpZ = -dirX;\n\n  let isRightWing = localVert >= 3u;\n  let wingVert = localVert % 3u;\n  let wingSign = select(-1.0, 1.0, isRightWing);\n  output.wingSide = wingSign;\n\n  var localPos = vec3f(0.0);\n  output.wingT = 0.0;\n\n  if (wingVert == 0u) {\n    // Body center\n    localPos = vec3f(centerX, centerY, centerZ);\n    output.wingT = 0.0;\n  } else if (wingVert == 1u) {\n    // Front-outer corner — forward + outward\n    let wingUp = sin(flapAngle * wingSign) * wingSpan * 0.7;\n    let wingOut = cos(flapAngle * wingSign) * wingSpan;\n    localPos = vec3f(\n      centerX + perpX * wingOut * wingSign + dirX * wingLength * 0.55,\n      centerY + wingUp,\n      centerZ + perpZ * wingOut * wingSign + dirZ * wingLength * 0.55,\n    );\n    output.wingT = 1.0;\n  } else {\n    // Back-outer corner — backward + outward\n    let wingUp = sin(flapAngle * wingSign) * wingSpan * 0.5;\n    let wingOut = cos(flapAngle * wingSign) * wingSpan * 0.85;\n    localPos = vec3f(\n      centerX + perpX * wingOut * wingSign - dirX * wingLength * 0.55,\n      centerY + wingUp,\n      centerZ + perpZ * wingOut * wingSign - dirZ * wingLength * 0.55,\n    );\n    output.wingT = 0.7;\n  }\n\n  " + we() + "\n  \n  output.position = vec4f(\n    (ry_x + xOffsetScene) * scaleX,\n    (rx_y + yOffsetScene) * scaleY,\n    rx_z * 0.01 + 0.5,\n    1.0\n  );\n\n  return output;\n}\n",
              fragment: "\n" + ye + "\n\nstruct ButterflyInput {\n  @location(0) wingT: f32,\n  @location(1) seed: f32,\n  @location(2) wingSide: f32,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n" + xe + "\n\n@fragment\nfn main(input: ButterflyInput) -> @location(0) vec4f {\n  let seed = input.seed;\n  let t = input.wingT;\n\n  // Bright vivid butterfly colors for summer\n  var wingBase: vec3f;\n  var wingTip: vec3f;\n\n  let tier = fract(seed * 3.17);\n  if (tier < 0.25) {\n    // Electric blue\n    wingBase = vec3f(0.15, 0.40, 0.95);\n    wingTip = vec3f(0.35, 0.65, 1.0);\n  } else if (tier < 0.5) {\n    // Vivid orange monarch\n    wingBase = vec3f(0.95, 0.45, 0.05);\n    wingTip = vec3f(1.0, 0.70, 0.20);\n  } else if (tier < 0.75) {\n    // Bright yellow\n    wingBase = vec3f(0.95, 0.85, 0.15);\n    wingTip = vec3f(1.0, 0.95, 0.50);\n  } else {\n    // Hot pink/magenta\n    wingBase = vec3f(0.90, 0.20, 0.55);\n    wingTip = vec3f(1.0, 0.50, 0.70);\n  }\n\n  var color = mix(wingBase, wingTip, t);\n\n  // Dark wing edge markings\n  let edgeDark = mix(0.6, 1.0, smoothstep(0.0, 0.25, t));\n  color = color * edgeDark;\n\n  // Wing spots — small dark dots\n  let spotChance = fract(seed * 7.3 + t * 3.1);\n  if (spotChance > 0.8 && t > 0.4) {\n    color = color * 0.3;\n  }\n\n  // Bright lighting\n  let ambient = vec3f(0.40, 0.40, 0.42);\n  const sunDir = vec3f(-0.405616, 0.861934, -0.304212);\n  let N = vec3f(0.0, 1.0, 0.0);\n  let NdotL = max(dot(N, sunDir), 0.0);\n  let lit = color * (ambient + vec3f(1.3) * NdotL * 0.8);\n\n  let hdr = acesFilm(lit * 1.8);\n  var ldr = pow(hdr, vec3f(1.0 / 2.2));\n  // Extra saturation boost for vivid butterflies\n  let gray = dot(ldr, vec3f(0.299, 0.587, 0.114));\n  ldr = mix(vec3f(gray), ldr, 2.2);\n\n  return vec4f(ldr, 1.0);\n}\n",
              depthWrite: true,
              depthCompare: "less"
            });
          } catch (_0x395c8a) {
            console.error("Butterfly pipeline failed (non-fatal):", _0x395c8a);
          }
          const _0x4c3382 = _0x2cc8ca.createTexture({
            size: [_0x3965a8.width, _0x3965a8.height],
            format: _0x1614a7,
            usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
          });
          const _0x31132d = _0x4c3382.createView();
          const _0x4ab107 = _0x2cc8ca.createSampler({
            magFilter: "linear",
            minFilter: "linear"
          });
          const _0x298d5e = _0x2cc8ca.createBindGroupLayout({
            entries: [{
              binding: 0,
              visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
              buffer: {
                type: "uniform"
              }
            }, {
              binding: 1,
              visibility: GPUShaderStage.FRAGMENT,
              texture: {
                sampleType: "float"
              }
            }, {
              binding: 2,
              visibility: GPUShaderStage.FRAGMENT,
              sampler: {}
            }]
          });
          const _0x74e167 = _0x2cc8ca.createBindGroup({
            layout: _0x298d5e,
            entries: [{
              binding: 0,
              resource: {
                buffer: _0x3900da
              }
            }, {
              binding: 1,
              resource: _0x31132d
            }, {
              binding: 2,
              resource: _0x4ab107
            }]
          });
          let _0x5c2fd7 = null;
          try {
            const _0x3c9660 = _0x2cc8ca.createShaderModule({
              code: "\n" + ye + "\n\nstruct BlurOut {\n  @builtin(position) position: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n\n@vertex\nfn main(@builtin(vertex_index) vi: u32) -> BlurOut {\n  var tri = array<vec2f, 3>(\n    vec2f(-1.0, -1.0),\n    vec2f(3.0, -1.0),\n    vec2f(-1.0, 3.0)\n  );\n  let p = tri[vi];\n  var o: BlurOut;\n  o.position = vec4f(p, 1.0, 1.0);\n  o.uv = vec2f(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5);\n  return o;\n}\n"
            });
            const _0x48ce8b = _0x2cc8ca.createShaderModule({
              code: "\n" + ye + "\n\n@group(0) @binding(0) var<uniform> uniforms: Uniforms;\n@group(0) @binding(1) var sceneTex: texture_2d<f32>;\n@group(0) @binding(2) var sceneSamp: sampler;\n\n@fragment\nfn main(@location(0) uv: vec2f) -> @location(0) vec4f {\n  let progress = uniforms.progress;\n\n  // Blur strength peaks mid-transition, zero at endpoints\n  let strength = sin(progress * 3.14159) * 0.05;\n\n  // Radial direction from center to this pixel\n  let center = vec2f(0.5, 0.5);\n  let dir = (uv - center) * strength;\n\n  // Accumulate 8 samples along the radial direction\n  var color = vec4f(0.0);\n  for (var i = 0u; i < 8u; i++) {\n    let t = f32(i) / 7.0;\n    color += textureSample(sceneTex, sceneSamp, uv - dir * t);\n  }\n  color /= 8.0;\n\n  // Vignette — darken edges proportional to transition intensity\n  let dist = length(uv - center);\n  let vignette = 1.0 - dist * dist * strength * 8.0;\n  color = vec4f(color.rgb * vignette, 1.0);\n\n  return color;\n}\n"
            });
            _0x5c2fd7 = _0x2cc8ca.createRenderPipeline({
              layout: _0x2cc8ca.createPipelineLayout({
                bindGroupLayouts: [_0x298d5e]
              }),
              vertex: {
                module: _0x3c9660,
                entryPoint: "main"
              },
              fragment: {
                module: _0x48ce8b,
                entryPoint: "main",
                targets: [{
                  format: _0x1614a7
                }]
              },
              primitive: {
                topology: "triangle-list",
                cullMode: "none"
              }
            });
          } catch (_0x5f19ff) {
            console.error("Blur pipeline failed (non-fatal):", _0x5f19ff);
          }
          const _0x1a3016 = _0x2cc8ca.createTexture({
            size: [_0x3965a8.width, _0x3965a8.height],
            format: "depth24plus",
            usage: GPUTextureUsage.RENDER_ATTACHMENT
          });
          return {
            device: _0x2cc8ca,
            context: _0x3f70a1,
            buffers: {
              blockUniforms: _0x3900da,
              branchUniforms: _0x49b52a,
              grassUniforms: _0x46b627,
              petalUniforms: _0x595d58,
              typeBuffer: _0x11bbe2,
              posBuffer: _0x28d692,
              heightBuffer: _0x1476a0,
              baseYBuffer: _0x1261f1,
              flowerBuffer: _0x3021ae,
              branchBuffer: _0x377a4d,
              grassBuffer: _0x2be32b,
              fallingPetalBuffer: _0x59e82c,
              rainUniforms: _0x517713,
              rainBuffer: _0x47a094,
              butterflyUniforms: _0x2df518,
              butterflyBuffer: _0x4ad745
            },
            pipelines: {
              sky: _0xf57c94,
              shadow: _0x59a269,
              blocks: _0xafe3b5,
              flowers: _0x2d4d3b,
              branches: _0x1a172b,
              grass: _0x2f7da1,
              fallingPetals: _0x72f378,
              rain: _0x3bc201,
              butterflies: _0x32fe7e,
              blur: _0x5c2fd7
            },
            bindGroups: {
              sky: _0x10cde2,
              shadow: _0x10cde2,
              blocks: _0x3272ff,
              flowers: _0x4cdd33,
              branches: _0x221957,
              grass: _0x30997a,
              fallingPetals: _0x507dc,
              rain: _0x542379,
              butterflies: _0x1cc244,
              blur: _0x74e167
            },
            depthTexture: _0x1a3016,
            depthTextureView: _0x1a3016.createView(),
            sceneTexture: _0x4c3382,
            sceneTextureView: _0x31132d,
            blurSampler: _0x4ab107,
            blurBindGroupLayout: _0x298d5e,
            aspectRatio: _0x3965a8.width / _0x3965a8.height,
            isMobile: "ontouchstart" in globalThis || navigator.maxTouchPoints > 0,
            counts: {
              numBlocks: 0,
              gridSize: 0,
              flowerCount: 0,
              segmentCount: 0,
              grassCount: 0,
              petalCount: 0,
              rainCount: 0,
              butterflyCount: 0
            },
            _uniformArr: new Float32Array(16),
            _branchUpload: new Float32Array(6000),
            _flowerUpload: new Float32Array(400000),
            _petalUpload: new Float32Array(40),
            _rainUpload: new Float32Array(2000),
            _butterflyUpload: new Float32Array(40)
          };
        }(_0x3404a9, _0x1b3318, _0x1f69fa);
        if (!_0x2c9dd9) {
          return;
        }
        _0x27739d.current = _0x2c9dd9;
        _0x6f8fc9.current = _0x3404a9;
        const _0xed02d6 = ee(_0x2323cd.current);
        const _0x4f57c1 = ae(_0xed02d6);
        const _0x3921ec = ie(_0xed02d6);
        _0x43f2cb.current = _0xed02d6;
        _0x28866d.current = _0x3921ec;
        _0x4531f4.current = _0x4f57c1.gridSize;
        oe(Ee(_0x5399fb.current));
        const _0x654dac = se(_0x3921ec, _0x4f57c1.gridSize);
        const _0x2149ca = ue(_0x654dac.tips, _0x3921ec);
        const _0x22d346 = ce(_0xed02d6);
        const _0x4d367f = fe(_0x4f57c1.gridSize, _0xed02d6);
        const _0x30e59c = de(_0x654dac.tips, _0x4f57c1.gridSize);
        const _0x5dc1c4 = pe(_0x4f57c1.gridSize);
        const _0x41ff9f = he(_0x4f57c1.gridSize);
        Se(_0x2c9dd9, _0x4f57c1, _0x654dac, _0x2149ca, _0x22d346.positions, _0x22d346.count, _0x4d367f, _0x30e59c, _0x5dc1c4, _0x41ff9f);
        _0x4e7fe7.current = _0x2323cd.current;
        let _0x42fa71 = -1;
        let _0xdd66a6 = "";
        let _0x2a658b = "";
        let _0x1fb690 = 0;
        let _0x4a09eb = 0;
        let _0x422c2b = false;
        const _0x318264 = () => {
          if (!_0x1ddb2b) {
            return;
          }
          if (_0x4e7fe7.current !== _0x2323cd.current) {
            return;
          }
          const _0x7ae42c = _0x2728d7.current.join(",");
          const _0xc795fa = _0x3404a9.width;
          const _0x15124f = _0x3404a9.height;
          const _0x3fc7b1 = _0x1fb690 !== _0xc795fa || _0x4a09eb !== _0x15124f;
          const _0x4f601d = _0x42fa71 !== _0x45ded0.current || _0xdd66a6 !== _0x7ae42c || _0x2a658b !== _0x2323cd.current;
          if (!_0x3fc7b1 && !_0x4f601d && !_0x422c2b) {
            return;
          }
          if (_0x3fc7b1 && _0x1fb690 > 0) {
            _0x1fb690 = _0xc795fa;
            _0x4a09eb = _0x15124f;
            _0x1ddb2b.current = "";
            _0x1e3edc?.current?.("");
            _0x422c2b = true;
            return;
          }
          _0x422c2b = false;
          _0x42fa71 = _0x45ded0.current;
          _0xdd66a6 = _0x7ae42c;
          _0x2a658b = _0x2323cd.current;
          _0x1fb690 = _0xc795fa;
          _0x4a09eb = _0x15124f;
          const _0x1f741d = _0x45ded0.current === 2 ? 1 : 0;
          Ce(_0x2c9dd9, {
            time: 0,
            progress: 1,
            season: _0x45ded0.current,
            cameraBobX: 0,
            cameraBobY: 0,
            burstTime: 0,
            customR: _0x2728d7.current[0],
            customG: _0x2728d7.current[1],
            customB: _0x2728d7.current[2],
            customStrength: _0x2728d7.current[3],
            rainMode: _0x1f741d,
            trunkSeed: _0x5dd6ef
          });
          const _0x429fa1 = document.createElement("canvas");
          _0x429fa1.width = _0xc795fa;
          _0x429fa1.height = _0x15124f;
          const _0x31335f = _0x429fa1.getContext("2d");
          if (_0x31335f) {
            _0x31335f.drawImage(_0x3404a9, 0, 0);
            const _0x3b0cfe = _0x429fa1.toDataURL("image/png");
            _0x1ddb2b.current = _0x3b0cfe;
            _0x1e3edc?.current?.(_0x3b0cfe);
          }
        };
        setTimeout(_0x318264, 50);
        let _0x2f7bba = false;
        const _0x363ece = () => {
          const _0x3136b0 = Date.now();
          const _0x4c30 = Math.min((_0x3136b0 - _0x5b6917.current) / 1000, 0.05);
          _0x5b6917.current = _0x3136b0;
          const _0x1574de = _0x357820.current ? 1 : 0;
          var _0x3fbddf;
          _0x2c7cf4.current += (_0x1574de - _0x2c7cf4.current) * Math.min(1, _0x4c30 * 3.5);
          if (Math.abs(_0x2c7cf4.current - _0x1574de) < 0.001) {
            _0x2c7cf4.current = _0x1574de;
          }
          _0x4c7277.current = (_0x3fbddf = _0x2c7cf4.current) < 0.5 ? _0x3fbddf * 4 * _0x3fbddf * _0x3fbddf : 1 - (_0x3fbddf * -2 + 2) ** 3 / 2;
          const _0x502b59 = _0x2c7cf4.current >= 0.9 && _0x1574de === 1;
          if (_0x502b59 !== _0x2f7bba) {
            _0x2f7bba = _0x502b59;
            _0x3d1546?.current?.(_0x502b59);
          }
          const _0x505c2a = (_0x3136b0 - _0x366195.current) / 1000;
          const _0x5a9357 = _0x4c7277.current;
          const _0x1441a0 = 1 - _0x5a9357;
          const _0x1b5312 = _0x505c2a - _0x38b120.current;
          const _0x5944f9 = Math.exp(-_0x1b5312 * 6) * Math.sin(_0x1b5312 * 12) * 0.008;
          const _0x31d89e = Math.sin(_0x505c2a * 0.15) * 0.003 * _0x1441a0;
          const _0x38fea0 = Math.sin(_0x505c2a * 0.11 + 1) * 0.002 * _0x1441a0 + _0x5944f9;
          if (_0x357820.current !== _0x518aa4.current) {
            _0x518aa4.current = _0x357820.current;
            _0x38b120.current = _0x505c2a;
          }
          const _0x55604a = _0x45ded0.current === 2 ? 1 : 0;
          _0x4d86e9.current += (_0x55604a - _0x4d86e9.current) * Math.min(1, _0x4c30 * 3);
          if (Math.abs(_0x4d86e9.current - _0x55604a) < 0.001) {
            _0x4d86e9.current = _0x55604a;
          }
          if (_0x45ded0.current !== _0x26693f.current && _0x28866d.current) {
            _0x26693f.current = _0x45ded0.current;
            oe(Ee(_0x5399fb.current));
            const _0x59e81c = _0x28866d.current;
            const _0x383b6a = _0x4531f4.current;
            const _0x3b2897 = se(_0x59e81c, _0x383b6a);
            const _0x562106 = ue(_0x3b2897.tips, _0x59e81c);
            const _0x78bced = ce(_0x43f2cb.current);
            const _0x5a0aee = de(_0x3b2897.tips, _0x383b6a);
            (function (_0x25e6b7, _0x5bbbd2, _0xc89383, _0x1fa980, _0x30cbc0, _0x4870d4) {
              const {
                device: _0x5baf85,
                buffers: _0x1be70e
              } = _0x25e6b7;
              const _0x642403 = _0x25e6b7._branchUpload;
              _0x642403.fill(0);
              _0x642403.set(_0x5bbbd2.segments);
              _0x5baf85.queue.writeBuffer(_0x1be70e.branchBuffer, 0, _0x642403);
              _0x25e6b7.counts.segmentCount = _0x5bbbd2.segmentCount;
              const _0x5721af = _0xc89383.count + _0x30cbc0;
              const _0x3931ee = _0x25e6b7._flowerUpload;
              _0x3931ee.fill(0);
              _0x3931ee.set(_0xc89383.positions);
              for (let _0x11f1b6 = 0; _0x11f1b6 < _0x30cbc0 * 4; _0x11f1b6++) {
                _0x3931ee[_0xc89383.count * 4 + _0x11f1b6] = _0x1fa980[_0x11f1b6];
              }
              _0x5baf85.queue.writeBuffer(_0x1be70e.flowerBuffer, 0, _0x3931ee);
              _0x25e6b7.counts.flowerCount = _0x5721af;
              const _0x5c2e98 = _0x25e6b7._petalUpload;
              _0x5c2e98.fill(0);
              _0x5c2e98.set(_0x4870d4.positions);
              _0x5baf85.queue.writeBuffer(_0x1be70e.fallingPetalBuffer, 0, _0x5c2e98);
              _0x25e6b7.counts.petalCount = _0x4870d4.count;
            })(_0x2c9dd9, _0x3b2897, _0x562106, _0x78bced.positions, _0x78bced.count, _0x5a0aee);
          }
          _0x318264();
          Ce(_0x2c9dd9, {
            time: _0x505c2a,
            progress: _0x5a9357,
            season: _0x45ded0.current,
            cameraBobX: _0x31d89e,
            cameraBobY: _0x38fea0,
            burstTime: _0x38b120.current,
            customR: _0x2728d7.current[0],
            customG: _0x2728d7.current[1],
            customB: _0x2728d7.current[2],
            customStrength: _0x2728d7.current[3],
            rainMode: _0x4d86e9.current,
            trunkSeed: _0x5dd6ef
          });
          _0x41e5ac.current = requestAnimationFrame(_0x363ece);
        };
        _0x363ece();
      } catch (_0x3ed1c9) {
        console.error("WebGPU init failed:", _0x3ed1c9);
      } finally {
        _0x9a37bd.current = false;
      }
    }, [_0x1b3318, _0x1f69fa, _0xc8ac50, _0x357820, _0x45ded0, _0x2728d7, _0x5399fb, _0x1ddb2b, _0x3d1546, _0x1e3edc]);
    (0, m.useEffect)(() => {
      const _0x20486e = setTimeout(_0x354f89, 100);
      return () => {
        clearTimeout(_0x20486e);
      };
    }, [_0x354f89, _0x1b3318, _0x1f69fa]);
    (0, m.useEffect)(() => {
      const _0x4d722f = _0xc8ac50.current;
      if (!!_0x4d722f && !(_0x1b3318 <= 0) && !(_0x1f69fa <= 0)) {
        if (_0x27739d.current && _0x6f8fc9.current !== _0x4d722f) {
          if (_0x41e5ac.current) {
            cancelAnimationFrame(_0x41e5ac.current);
            _0x41e5ac.current = null;
          }
          _0x27739d.current = null;
          _0x6f8fc9.current = null;
          _0x366195.current = Date.now();
          _0x5b6917.current = Date.now();
        }
        if (!_0x27739d.current) {
          _0x354f89();
        }
      }
    });
    (0, m.useEffect)(() => {
      const _0x45bb31 = _0x27739d.current;
      const _0x5c9186 = _0xc8ac50.current;
      if (_0x45bb31 && _0x5c9186) {
        if (!(_0x1b3318 <= 0) && !(_0x1f69fa <= 0)) {
          (function (_0x82808b, _0x5deeb4, _0x14b74c, _0x4a6a56) {
            const _0x141c8b = Math.min(window.devicePixelRatio || 1, 3);
            const _0x40cedb = Math.max(1, Math.floor(_0x14b74c * _0x141c8b));
            const _0x53e645 = Math.max(1, Math.floor(_0x4a6a56 * _0x141c8b));
            if (_0x5deeb4.width === _0x40cedb && _0x5deeb4.height === _0x53e645) {
              return;
            }
            _0x5deeb4.width = _0x40cedb;
            _0x5deeb4.height = _0x53e645;
            _0x82808b.context.configure({
              device: _0x82808b.device,
              format: navigator.gpu.getPreferredCanvasFormat(),
              alphaMode: "premultiplied"
            });
            _0x82808b.depthTexture.destroy();
            _0x82808b.depthTexture = _0x82808b.device.createTexture({
              size: [_0x5deeb4.width, _0x5deeb4.height],
              format: "depth24plus",
              usage: GPUTextureUsage.RENDER_ATTACHMENT
            });
            _0x82808b.depthTextureView = _0x82808b.depthTexture.createView();
            _0x82808b.sceneTexture.destroy();
            const _0x52eccf = navigator.gpu.getPreferredCanvasFormat();
            _0x82808b.sceneTexture = _0x82808b.device.createTexture({
              size: [_0x5deeb4.width, _0x5deeb4.height],
              format: _0x52eccf,
              usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING
            });
            _0x82808b.sceneTextureView = _0x82808b.sceneTexture.createView();
            _0x82808b.bindGroups.blur = _0x82808b.device.createBindGroup({
              layout: _0x82808b.blurBindGroupLayout,
              entries: [{
                binding: 0,
                resource: {
                  buffer: _0x82808b.buffers.blockUniforms
                }
              }, {
                binding: 1,
                resource: _0x82808b.sceneTextureView
              }, {
                binding: 2,
                resource: _0x82808b.blurSampler
              }]
            });
            _0x82808b.aspectRatio = _0x5deeb4.width / _0x5deeb4.height;
          })(_0x45bb31, _0x5c9186, _0x1b3318, _0x1f69fa);
        }
      }
    }, [_0x1b3318, _0x1f69fa, _0xc8ac50]);
    (0, m.useEffect)(() => () => {
      if (_0x41e5ac.current) {
        cancelAnimationFrame(_0x41e5ac.current);
      }
    }, []);
  })({
    canvasRef: _0x280204,
    canvasWidth: _0x1bb750.width,
    canvasHeight: _0x1bb750.height,
    qrContent: _0x16eae2,
    isFlat: _0x583d98,
    seasonRef: _0x3129c7,
    customColorRef: _0x5bd40a,
    treeSeed: _0x2f2fa6,
    qrSnapshotRef: _0x4457f4,
    onFlatSettled: _0x1246ba,
    onQrSnapshotUpdated: _0x38016f
  });
  const _0x1d6f82 = (0, m.useCallback)(() => {
    _0x583d98.current = !_0x583d98.current;
    _0x31ca17(_0x583d98.current);
    if (!_0x583d98.current) {
      _0x171bdf(false);
    }
  }, []);
  const _0xca890e = (0, m.useRef)(null);
  const _0x58638c = (0, m.useRef)(null);
  (0, m.useEffect)(() => () => {
    if (_0xca890e.current) {
      clearTimeout(_0xca890e.current);
    }
    if (_0x58638c.current) {
      clearTimeout(_0x58638c.current);
    }
  }, []);
  const _0x572d25 = (0, m.useCallback)(() => {
    const _0x59ecb7 = Oe(_0x16eae2, _0x153546, _0x2d9aad);
    return window.location.origin + "/s/" + _0x59ecb7;
  }, [_0x16eae2, _0x153546, _0x2d9aad]);
  const _0x4694ab = (0, m.useCallback)(async () => {
    const _0x4755e1 = _0x4457f4.current || _0x1f990f;
    if (!_0x4755e1) {
      return null;
    }
    let _0xsourceBlob;
    let _0ximageUrl;
    try {
      _0xsourceBlob = await (await fetch(_0x4755e1)).blob();
      _0ximageUrl = URL.createObjectURL(_0xsourceBlob);
      const _0ximage = new Image();
      await new Promise((_0xresolve, _0xreject) => {
        _0ximage.onload = _0xresolve;
        _0ximage.onerror = _0xreject;
        _0ximage.src = _0ximageUrl;
      });
      const _0xwidth = _0ximage.naturalWidth;
      const _0xheight = _0ximage.naturalHeight;
      if (!_0xwidth || !_0xheight) {
        return _0xsourceBlob;
      }
      // The QR scene is rendered centered; crop a square from the shorter canvas dimension.
      const _0xside = Math.max(1, Math.floor(Math.min(_0xwidth, _0xheight) * 0.66));
      const _0xleft = Math.max(0, Math.floor((_0xwidth - _0xside) / 2));
      const _0xtop = Math.max(0, Math.min(_0xheight - _0xside, Math.floor((_0xheight - _0xside) / 2 - _0xheight * 0.055)));
      const _0xcropCanvas = document.createElement("canvas");
      _0xcropCanvas.width = _0xside;
      _0xcropCanvas.height = _0xside;
      const _0xcropContext = _0xcropCanvas.getContext("2d");
      if (!_0xcropContext) {
        return _0xsourceBlob;
      }
      _0xcropContext.drawImage(_0ximage, _0xleft, _0xtop, _0xside, _0xside, 0, 0, _0xside, _0xside);
      return await new Promise(_0xresolve => _0xcropCanvas.toBlob(_0xresolve, "image/png")) || _0xsourceBlob;
    } catch {
      return _0xsourceBlob || null;
    } finally {
      if (_0ximageUrl) {
        URL.revokeObjectURL(_0ximageUrl);
      }
    }
  }, [_0x1f990f]);
  const _0xcreateShareVideo = async () => {
    const _0xsourceCanvas = _0x280204.current;
    if (!_0xsourceCanvas || typeof MediaRecorder === "undefined" || !_0xsourceCanvas.captureStream) {
      alert("Este navegador no permite crear videos desde el árbol.");
      return;
    }
    const _0xoriginalFlat = _0x583d98.current;
    const _0xwidth = _0xsourceCanvas.width;
    const _0xheight = _0xsourceCanvas.height;
    const _0xside = Math.max(1, Math.floor(Math.min(_0xwidth, _0xheight) * 0.66));
    const _0xleft = Math.max(0, Math.floor((_0xwidth - _0xside) / 2));
    const _0xtop = Math.max(0, Math.min(_0xheight - _0xside, Math.floor((_0xheight - _0xside) / 2 - _0xheight * 0.055)));
    // Preserve the actual source crop resolution (up to 1440px); avoid both forced downscaling and artificial upscaling.
    const _0xvideoSize = Math.min(1440, _0xside);
    const _0xvideoCanvas = document.createElement("canvas");
    _0xvideoCanvas.width = _0xvideoSize;
    _0xvideoCanvas.height = _0xvideoSize;
    const _0xvideoContext = _0xvideoCanvas.getContext("2d", { alpha: false });
    if (!_0xvideoContext) {
      alert("No se pudo preparar el video.");
      return;
    }
    const _0xstream = _0xvideoCanvas.captureStream(30);
    const _0xmime = ["video/mp4;codecs=h264", "video/mp4", "video/webm;codecs=vp9", "video/webm;codecs=vp8", "video/webm"].find(_0xtype => MediaRecorder.isTypeSupported(_0xtype)) || "";
    let _0xrecorder;
    let _0xframe;
    try {
      _0xrecorder = new MediaRecorder(_0xstream, _0xmime ? { mimeType: _0xmime } : undefined);
      const _0xchunks = [];
      const _0xfinished = new Promise((_0xresolve, _0xreject) => {
        _0xrecorder.ondataavailable = _0xevent => {
          if (_0xevent.data && _0xevent.data.size) _0xchunks.push(_0xevent.data);
        };
        _0xrecorder.onerror = () => _0xreject(new Error("No se pudo grabar el video."));
        _0xrecorder.onstop = () => _0xresolve(new Blob(_0xchunks, { type: _0xrecorder.mimeType || "video/webm" }));
      });
      const _0xdrawFrame = () => {
        _0xvideoContext.drawImage(_0xsourceCanvas, _0xleft, _0xtop, _0xside, _0xside, 0, 0, _0xvideoSize, _0xvideoSize);
        _0xframe = requestAnimationFrame(_0xdrawFrame);
      };
      // Always begin with the 3D tree, then let the real WebGPU scene animate into its QR state.
      if (_0xoriginalFlat) {
        _0x1d6f82();
        await new Promise(_0xresolve => setTimeout(_0xresolve, 500));
      }
      _0xdrawFrame();
      _0xrecorder.start(100);
      await new Promise(_0xresolve => setTimeout(_0xresolve, 2000));
      _0x1d6f82();
      // Allow the tree-to-QR morph to finish, then hold the completed QR for four seconds.
      await new Promise(_0xresolve => setTimeout(_0xresolve, 1500));
      await new Promise(_0xresolve => setTimeout(_0xresolve, 4000));
      if (_0xrecorder.state !== "inactive") _0xrecorder.stop();
      const _0xblob = await _0xfinished;
      const _0xextension = _0xblob.type.includes("mp4") ? "mp4" : "webm";
      const _0xfilename = "tree-qr-video." + _0xextension;
      const _0xfile = new File([_0xblob], _0xfilename, { type: _0xblob.type });
      if (navigator.share && navigator.canShare?.({ files: [_0xfile] })) {
        await navigator.share({ files: [_0xfile], title: "Árbol y código QR" }).catch(() => {});
      } else {
        const _0xurl = URL.createObjectURL(_0xblob);
        const _0xlink = document.createElement("a");
        _0xlink.href = _0xurl;
        _0xlink.download = _0xfilename;
        _0xlink.click();
        setTimeout(() => URL.revokeObjectURL(_0xurl), 1500);
      }
      _0xdd5148(false);
      _0x44580a(null);
    } catch (_0xerror) {
      console.error(_0xerror);
      alert("No se pudo crear el video. Inténtalo de nuevo en otro navegador.");
    } finally {
      if (_0xframe) cancelAnimationFrame(_0xframe);
      if (_0xrecorder && _0xrecorder.state !== "inactive") _0xrecorder.stop();
      _0xstream.getTracks().forEach(_0xtrack => _0xtrack.stop());
      if (_0x583d98.current !== _0xoriginalFlat) _0x1d6f82();
    }
  };
  const _0x274176 = async () => {
    if (("ontouchstart" in window || navigator.maxTouchPoints > 0) && navigator.share) {
      const _0xdc862d = _0x572d25();
      const _0x24ddab = await _0x4694ab();
      if (_0x24ddab) {
        const _0xc91cf0 = {
          url: _0xdc862d,
          files: [new File([_0x24ddab], "tree-qr.png", {
            type: "image/png"
          })]
        };
        if (navigator.canShare?.(_0xc91cf0)) {
          navigator.share(_0xc91cf0).catch(() => {});
          return;
        }
      }
      navigator.share({
        url: _0xdc862d
      }).catch(() => {});
    } else {
      _0xdd5148(_0x5022b3 => {
        if (_0x5022b3) {
          _0x44580a(null);
        }
        return !_0x5022b3;
      });
    }
  };
  const _0x1f6acc = () => {
    navigator.clipboard?.writeText(_0x572d25()).then(() => {
      _0x270590("link");
      setTimeout(() => _0x270590(null), 1500);
      return;
    }).catch(() => {});
    _0xdd5148(false);
    _0x44580a(null);
  };
  const _0x228c85 = async () => {
    const _0x4ad5b9 = await _0x4694ab();
    if (!_0x4ad5b9) {
      return;
    }
    const _0xdownloadUrl = URL.createObjectURL(_0x4ad5b9);
    const _0x10f4af = document.createElement("a");
    _0x10f4af.href = _0xdownloadUrl;
    _0x10f4af.download = "tree-qr.png";
    _0x10f4af.click();
    setTimeout(() => URL.revokeObjectURL(_0xdownloadUrl), 1000);
    _0xdd5148(false);
    _0x44580a(null);
  };
  const _0x305892 = () => {
    const _0x1b2b7e = encodeURIComponent(_0x572d25());
    window.open("https://x.com/intent/tweet?url=" + _0x1b2b7e, "_blank", "noopener");
    _0xdd5148(false);
    _0x44580a(null);
  };
  const _0x4d5637 = () => {
    const _0x302f59 = encodeURIComponent(_0x572d25());
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + _0x302f59, "_blank", "noopener");
    _0xdd5148(false);
    _0x44580a(null);
  };
  const _0x4a5592 = () => {
    const _0x56b749 = encodeURIComponent(_0x572d25());
    window.open("https://wa.me/?text=" + _0x56b749, "_blank", "noopener");
    _0xdd5148(false);
    _0x44580a(null);
  };
  (0, m.useEffect)(() => {
    if (!_0xdbc765) {
      return;
    }
    const _0x40b156 = _0x56fddd => {
      if (_0x56fddd.key === "Escape") {
        _0xdd5148(false);
        _0x44580a(null);
      }
    };
    document.addEventListener("keydown", _0x40b156);
    return () => document.removeEventListener("keydown", _0x40b156);
  }, [_0xdbc765]);
  (0, m.useEffect)(() => {
    if (!_0x2b80c3) {
      return;
    }
    const _0x55df59 = _0x233d9a => {
      if (_0x233d9a.key === "Escape") {
        _0x23dd65(false);
      }
    };
    document.addEventListener("keydown", _0x55df59);
    return () => document.removeEventListener("keydown", _0x55df59);
  }, [_0x2b80c3]);
  (0, m.useEffect)(() => {
    if (!_0x2b80c3) {
      return;
    }
    const _0x4f618f = _0x360005 => {
      const _0x40e8d2 = _0x4efbdf.current;
      const _0x19d596 = _0x360005.target;
      if (_0x40e8d2 && _0x19d596) {
        if (!_0x40e8d2.contains(_0x19d596)) {
          _0x23dd65(false);
        }
      }
    };
    document.addEventListener("mousedown", _0x4f618f);
    document.addEventListener("touchstart", _0x4f618f, {
      passive: true
    });
    return () => {
      document.removeEventListener("mousedown", _0x4f618f);
      document.removeEventListener("touchstart", _0x4f618f);
    };
  }, [_0x2b80c3]);
  (0, m.useEffect)(() => {
    if (!_0x2b80c3) {
      return;
    }
    const _0x41d93c = window.setTimeout(() => _0x23dd65(false), 5000);
    return () => window.clearTimeout(_0x41d93c);
  }, [_0x2b80c3]);
  const _0x471049 = _0x1aa996 => <div style={Te.sharePopoverWrap}><button onClick={_0x274176} aria-label={_0x1aa996} title={_0x1aa996} style={Te.shareBtn}>{Ae.share}</button>{_0xdbc765 && <ze.Fragment><div style={Te.sharePopoverBackdrop} onClick={() => {
        _0xdd5148(false);
        _0x44580a(null);
      }} /><div style={Te.sharePopover}><div role="button" tabIndex={0} style={{
          ...Te.sharePopoverItem,
          ...(_0x32b6de === "link" ? Te.sharePopoverItemHover : {})
        }} onMouseEnter={() => _0x44580a("link")} onMouseLeave={() => _0x44580a(null)} onClick={_0x1f6acc}><span style={Te.sharePopoverIcon}>{_0xcc6554 === "link" ? Ae.check : Ae.copyLink}</span>{_0xcc6554 === "link" ? "¡Copiado!" : "Copiar enlace"}</div><div role="button" tabIndex={0} style={{
          ...Te.sharePopoverItem,
          ...(_0x32b6de === "download" ? Te.sharePopoverItemHover : {})
        }} onMouseEnter={() => _0x44580a("download")} onMouseLeave={() => _0x44580a(null)} onClick={_0x228c85}><span style={Te.sharePopoverIcon}>{Ae.download}</span>Descargar código QR</div><div role="button" tabIndex={0} style={Te.sharePopoverItem} onClick={_0xcreateShareVideo}><span style={Te.sharePopoverIcon}>{Ae.download}</span>Crear video del árbol y QR</div><div style={{
          height: 1,
          margin: "2px 8px",
          background: "rgba(158, 142, 121, 0.15)"
        }} /><div role="button" tabIndex={0} style={{
          ...Te.sharePopoverItem,
          ...(_0x32b6de === "x" ? Te.sharePopoverItemHover : {})
        }} onMouseEnter={() => _0x44580a("x")} onMouseLeave={() => _0x44580a(null)} onClick={_0x305892}><span style={Te.sharePopoverIcon}>{Ae.x}</span>Compartir en X</div><div role="button" tabIndex={0} style={{
          ...Te.sharePopoverItem,
          ...(_0x32b6de === "facebook" ? Te.sharePopoverItemHover : {})
        }} onMouseEnter={() => _0x44580a("facebook")} onMouseLeave={() => _0x44580a(null)} onClick={_0x4d5637}><span style={Te.sharePopoverIcon}>{Ae.facebook}</span>Compartir en Facebook</div><div role="button" tabIndex={0} style={{
          ...Te.sharePopoverItem,
          ...(_0x32b6de === "whatsapp" ? Te.sharePopoverItemHover : {})
        }} onMouseEnter={() => _0x44580a("whatsapp")} onMouseLeave={() => _0x44580a(null)} onClick={_0x4a5592}><span style={Te.sharePopoverIcon}>{Ae.whatsapp}</span>Compartir en WhatsApp</div></div></ze.Fragment>}</div>;
  const _0x1ef1fa = () => {
    const raw = _0x16eae2.trim();
    if (/^https?:\/\//i.test(raw)) {
      window.open(raw, "_blank", "noopener,noreferrer");
    } else {
      navigator.clipboard?.writeText(raw).then(() => {
        alert("Contenido copiado al portapapeles:\n" + raw);
      }).catch(() => {
        alert("Contenido:\n" + raw);
      });
    }
  };
  if (navigator.gpu) {
    return <div style={Te.container}><a href="https://ppweilai.online/" target="_blank" rel="noopener noreferrer" aria-label="Visitar la página principal" style={{
        ...Te.topLogoLink,
        ...(_0x175ba0 ? Te.topLogoLinkWide : {})
      }}><img src="https://ppweilai.online/assets/logo.png" alt="Logo" draggable={false} style={{
        ...Te.topLogoImage,
        maxHeight: 40,
        width: "auto",
        objectFit: "contain"
      }} /></a><div style={Te.canvasWrapper}><canvas ref={_0x280204} onClick={_0x1d6f82} style={{
          ...Te.canvas,
          width: "100%",
          height: "100%",
          cursor: "pointer"
        }} />{_0x23bdbd && <img src={_0x1f990f} alt={"QR code for " + _0x16eae2} onClick={_0x1d6f82} draggable={false} style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "fill",
          cursor: "pointer",
          display: "block"
        }} />}{_0x535bec && <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1f1f1f",
          backdropFilter: "none",
          zIndex: 4,
          pointerEvents: "auto"
        }}><div style={{
            ...Te.errorMessage,
            color: "#f1f5f9",
            padding: 28
          }}><h2 style={{
              margin: 0,
              color: "#ffffff"
            }}>La pantalla es demasiado pequeña</h2><p style={{
              margin: "10px 0 0",
              color: "rgba(241, 245, 249, 0.9)"
            }}>{_0x25978d ? "Puedes abrir directamente el enlace del contenido o usar el modo vertical o una pantalla más grande." : "Usa el modo vertical o una pantalla más grande."}</p>{_0x25978d && <button onClick={_0x1ef1fa} style={{
              ...Te.visitLinkBtn,
              marginTop: 12,
              width: "min(320px, 100%)"
            }}><span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6
              }}>{Ae.visit}Abrir enlace compartido</span></button>}</div></div>}</div>{!_0x535bec && <div style={{
        ...Te.controlsOverlay,
        paddingBottom: "calc(" + (_0xd36b8b + _0x32e13e + (De ? 32 : 0)) + "px + env(safe-area-inset-bottom, 0px))"
      }}><div style={{
          ...Te.helperText,
          ...(_0x1487f1 ? Te.helperTextError : {})
        }} onClick={_0x1487f1 ? undefined : _0x1d6f82} role={_0x1487f1 ? undefined : "button"} tabIndex={_0x1487f1 ? -1 : 0} onKeyDown={_0x154f74 => {
          if (!_0x1487f1 && (_0x154f74.key === "Enter" || _0x154f74.key === " ")) {
            _0x154f74.preventDefault();
            _0x1d6f82();
          }
        }}>{_0x1ecde7}</div>{_0x25978d ? <div style={{
          ...Te.inputContainer,
          ...(_0x1bb750.isMobile ? Te.inputContainerMobile : {})
        }}><div style={Te.sharedActionRow}><button onClick={_0x1ef1fa} style={{
              ...Te.visitLinkBtn,
              ...Te.sharedActionBtn
            }}><span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6
              }}>{Ae.visit}Abrir enlace / Copiar contenido</span></button><button onClick={() => {
              _0x3f0c6d(false);
              if (_0xca890e.current) {
                clearTimeout(_0xca890e.current);
              }
              if (_0x58638c.current) {
                clearTimeout(_0x58638c.current);
              }
              _0x2f2fa6.current = K;
              _0x4a3a07(K);
              _0x1c2177(K);
              _0x5559b9(false);
              _0x182d75("");
              _0x444573(Ue(K).valid);
              _0x49fe52(1);
              _0x19c622(-1);
              _0xea012c.current = true;
              _0x88a962(true);
              _0x80eed8.current?.pause();
              window.history.replaceState(null, "", "/");
            }} style={{
              ...Te.generateAnotherBtn,
              ...Te.sharedActionBtn
            }}><span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6
              }}>{Ae.generateAnother}Crear otro código QR</span></button></div><div style={Te.receiverRow}><button onClick={_0x146a25} aria-label={_0x1b8033 ? "Activar sonido" : "Silenciar"} title={_0x1b8033 ? "Activar sonido" : "Silenciar"} style={{
              ...Te.muteBtn,
              ...(_0x1b8033 ? {} : Te.muteBtnActive)
            }}>{_0x1b8033 ? Ae.muted : Ae.unmuted}</button>{_0x471049("Compartir código QR")}</div></div> : <div style={{
          ...Te.inputContainer,
          ...(_0x1bb750.isMobile ? Te.inputContainerMobile : {})
        }}><div style={Te.inputRow}><input type="text" value={_0x14b306} onChange={_0x1e2206 => (_0x2dd6d3 => {
              _0x4a3a07(_0x2dd6d3);
              const {
                valid: _0x48575b,
                error: _0x1379aa
              } = Ue(_0x2dd6d3);
              _0x444573(_0x48575b);
              if (_0x58638c.current) {
                clearTimeout(_0x58638c.current);
              }
              if (_0x2dd6d3.trim().length === 0 || _0x48575b) {
                _0x5559b9(false);
                _0x182d75("");
              } else {
                _0x58638c.current = setTimeout(() => {
                  const _0x5ac74e = Ue(_0x2dd6d3);
                  if (!_0x5ac74e.valid && _0x2dd6d3.trim().length > 0) {
                    _0x5559b9(true);
                    _0x182d75(_0x5ac74e.error);
                  }
                }, 450);
              }
              if (_0xca890e.current) {
                clearTimeout(_0xca890e.current);
              }
              if (_0x48575b) {
                _0xca890e.current = setTimeout(() => {
                  const _0x5cbaf1 = _0x2dd6d3.trim();
                  _0x2f2fa6.current = _0x5cbaf1;
                  _0x1c2177(_0x5cbaf1);
                }, 700);
              }
            })(_0x1e2206.target.value)} onKeyDown={_0x3d8a46 => {
              if (_0x3d8a46.key === "Enter") {
                ((_0x3b7929 = _0x14b306) => {
                  if (_0xca890e.current) {
                    clearTimeout(_0xca890e.current);
                  }
                  if (_0x58638c.current) {
                    clearTimeout(_0x58638c.current);
                  }
                  const {
                    valid: _0x175ec3
                  } = Ue(_0x3b7929);
                  if (_0x175ec3) {
                    const _0x2338fa = _0x3b7929.trim();
                    _0x2f2fa6.current = _0x2338fa;
                    _0x1c2177(_0x2338fa);
                  }
                })(_0x3d8a46.currentTarget.value);
              }
            }} onFocus={() => _0x502af1(true)} onBlur={() => _0x502af1(false)} placeholder="Escribe un texto o una URL, o sube/pega una imagen de un código QR..." style={{
              ...Te.input,
              ...(_0x469f6b ? Te.inputFocused : {})
            }} autoComplete="off" autoCorrect="off" spellCheck={false} /><input ref={_qrInputRef} type="file" accept="image/*" style={{ display: "none" }} onChange={e => {
              if (e.target.files && e.target.files[0]) {
                _decodeQRFromImage(e.target.files[0]);
                e.target.value = "";
              }
            }} /><button type="button" onClick={() => _qrInputRef.current?.click()} aria-label="Reconocer código QR desde una imagen" title="Reconocer/subir una imagen de código QR (también puedes pegar una captura con Ctrl+V)" style={Te.scanQrBtn}>{Ae.qrScan}</button>{_0x471049("Compartir")}</div><div style={{
            ...Te.seasonRow,
            ...(_0x1bb750.isMobile ? Te.seasonRowMobile : {})
          }} role="radiogroup" aria-label="Selector de estación">{Ne.map(({
              label: _0x4586a2,
              icon: _0x13ff0c
            }, _0x1786c) => <button onClick={() => _0x49fe52(_0x1786c)} role="radio" aria-checked={_0x153546 === _0x1786c} aria-label={_0x4586a2} style={{
              ...Te.seasonBtn,
              ...(_0x153546 === _0x1786c ? Te.seasonBtnActive : {})
            }} key={_0x1786c}><span style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6
              }}>{_0x13ff0c}{_0x4586a2}</span></button>)}<button onClick={_0x146a25} aria-label={_0x1b8033 ? "Activar sonido" : "Silenciar"} title={_0x1b8033 ? "Activar sonido" : "Silenciar"} style={{
              ...Te.muteBtn,
              ...(_0x1b8033 ? {} : Te.muteBtnActive)
            }}>{_0x1b8033 ? Ae.muted : Ae.unmuted}</button></div><div style={{
            ...Te.paletteRow,
            ...(_0x1bb750.isMobile ? Te.paletteRowMobile : {}),
            visibility: (_0x153546 === 0 || _0x153546 === 3) ? "visible" : "hidden",
            pointerEvents: (_0x153546 === 0 || _0x153546 === 3) ? "auto" : "none"
          }}>{Me.map((_0x13972f, _0x33296b) => <div onClick={() => _0x19c622(_0x33296b === _0x2d9aad || _0x33296b === 0 ? -1 : _0x33296b)} onKeyDown={_0x2b7ffa => {
              if (_0x2b7ffa.key === "Enter" || _0x2b7ffa.key === " ") {
                _0x2b7ffa.preventDefault();
                _0x19c622(_0x33296b === _0x2d9aad || _0x33296b === 0 ? -1 : _0x33296b);
              }
            }} role="button" tabIndex={0} aria-label={_0x13972f.label} title={_0x13972f.label} style={{
              ...Te.paletteSwatch,
              ...(_0x1bb750.isMobile ? Te.paletteSwatchMobile : {}),
              ...(_0x33296b === _0x2d9aad || _0x33296b === 0 && _0x2d9aad === -1 ? Te.paletteSwatchActive : {}),
              backgroundColor: _0x13972f.color
            }} key={_0x33296b} />)}</div></div>}</div>}<div ref={_0x4efbdf} style={Te.creditsHintWrap}><a href="https://github.com/xscanzm/magic-tree-qr" target="_blank" rel="noopener noreferrer" aria-label="Ver el repositorio de código abierto en GitHub" title="Repositorio de código abierto en GitHub (xscanzm/magic-tree-qr)" style={Te.githubButton}>{Ae.github}</a>{_0x2b80c3 && <div style={Te.creditsHintTooltip}><div style={Te.creditsHintArrow} /><div style={Te.creditsHintCard}><div style={{ fontWeight: 700, fontSize: 12, marginBottom: 4, color: "#3f3328" }}>Generador de códigos QR artísticos en 3D</div><div style={{ color: "#6e5d4e", marginBottom: 6 }}>Haz clic en el árbol para ver el código QR desde arriba<br />Disponible en primavera · verano · otoño · invierno</div><div style={{ borderTop: "1px solid rgba(158, 142, 121, 0.22)", paddingTop: 6, marginBottom: 6 }}><span style={{ fontWeight: 600 }}>Repositorio de código abierto:</span><a href="https://github.com/xscanzm/magic-tree-qr" target="_blank" rel="noopener noreferrer" style={Te.creditsHintLink}>github.com/xscanzm/magic-tree-qr</a></div><div style={{ borderTop: "1px solid rgba(158, 142, 121, 0.15)", paddingTop: 5, display: "flex", justifyContent: "space-between", color: "#8a7a6b", fontSize: 10 }}><span>Agradecimientos a <a href="https://icqr.com" target="_blank" rel="noopener noreferrer" style={Te.creditsHintLink}>icqr</a></span><span>Traducción al español y adaptación <strong>xscanzm</strong></span></div></div></div>}<button type="button" aria-label="Ver información del proyecto y código abierto" title="Información del proyecto y código abierto" onClick={() => _0x23dd65(_0x3b08aa => !_0x3b08aa)} style={Te.creditsHintButton}>{Ae.info}</button></div></div>;
  } else {
    return <div style={Te.container}><div style={Te.errorMessage}><h2>Este navegador no es compatible con WebGPU</h2><p>Esta aplicación necesita WebGPU. Se recomienda usar la versión más reciente de Chrome, Edge u otro navegador moderno compatible con WebGPU.</p></div></div>;
  }
}
var Ve = document.getElementById("root");
if (Ve) {
  (0, v.createRoot)(Ve).render(<m.StrictMode><_Component /></m.StrictMode>);
}
