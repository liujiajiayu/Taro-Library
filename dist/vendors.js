(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["vendors"],{

/***/ "./node_modules/@vue/devtools-api/lib/esm/const.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/const.js ***!
  \*********************************************************/
/*! exports provided: HOOK_SETUP */
/*! exports used: HOOK_SETUP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HOOK_SETUP; });
var HOOK_SETUP = 'devtools-plugin:setup';

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/env.js":
/*!*******************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/env.js ***!
  \*******************************************************/
/*! exports provided: getDevtoolsGlobalHook, getTarget */
/*! exports used: getDevtoolsGlobalHook, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(navigator, window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getDevtoolsGlobalHook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTarget; });
function getDevtoolsGlobalHook() {
  return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
  // @ts-ignore
  return typeof navigator !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["navigator"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@vue/devtools-api/lib/esm/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@vue/devtools-api/lib/esm/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: setupDevtoolsPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupDevtoolsPlugin", function() { return setupDevtoolsPlugin; });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/@vue/devtools-api/lib/esm/env.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./node_modules/@vue/devtools-api/lib/esm/const.js");



function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
  var hook = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getDevtoolsGlobalHook */ "a"])();

  if (hook) {
    hook.emit(_const__WEBPACK_IMPORTED_MODULE_1__[/* HOOK_SETUP */ "a"], pluginDescriptor, setupFn);
  } else {
    var target = Object(_env__WEBPACK_IMPORTED_MODULE_0__[/* getTarget */ "b"])();
    var list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
    list.push({
      pluginDescriptor: pluginDescriptor,
      setupFn: setupFn
    });
  }
}

/***/ }),

/***/ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js ***!
  \*********************************************************************/
/*! exports provided: ITERATE_KEY, computed, customRef, effect, enableTracking, isProxy, isReactive, isReadonly, isRef, markRaw, pauseTracking, proxyRefs, reactive, readonly, ref, resetTracking, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRef, toRefs, track, trigger, triggerRef, unref */
/*! exports used: computed, effect, isProxy, isReactive, isReadonly, isRef, markRaw, pauseTracking, proxyRefs, reactive, readonly, ref, resetTracking, shallowReactive, shallowReadonly, shallowRef, stop, toRaw, toRefs, track, trigger, unref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ITERATE_KEY */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return computed; });
/* unused harmony export customRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return effect; });
/* unused harmony export enableTracking */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return markRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pauseTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return proxyRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return resetTracking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return shallowReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return shallowReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return shallowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return toRaw; });
/* unused harmony export toRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return trigger; });
/* unused harmony export triggerRef */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return unref; });
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");






var targetMap = new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol( true ? 'iterate' : undefined);
var MAP_KEY_ITERATE_KEY = Symbol( true ? 'Map key iterate' : undefined);

function isEffect(fn) {
  return fn && fn._isEffect === true;
}

function effect(fn) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];

  if (isEffect(fn)) {
    fn = fn.raw;
  }

  var effect = createReactiveEffect(fn, options);

  if (!options.lazy) {
    effect();
  }

  return effect;
}

function stop(effect) {
  if (effect.active) {
    cleanup(effect);

    if (effect.options.onStop) {
      effect.options.onStop();
    }

    effect.active = false;
  }
}

var uid = 0;

function createReactiveEffect(fn, options) {
  var effect = function reactiveEffect() {
    if (!effect.active) {
      return fn();
    }

    if (!effectStack.includes(effect)) {
      cleanup(effect);

      try {
        enableTracking();
        effectStack.push(effect);
        activeEffect = effect;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };

  effect.id = uid++;
  effect.allowRecurse = !!options.allowRecurse;
  effect._isEffect = true;
  effect.active = true;
  effect.raw = fn;
  effect.deps = [];
  effect.options = options;
  return effect;
}

function cleanup(effect) {
  var deps = effect.deps;

  if (deps.length) {
    for (var i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }

    deps.length = 0;
  }
}

var shouldTrack = true;
var trackStack = [];

function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}

function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}

function resetTracking() {
  var last = trackStack.pop();
  shouldTrack = last === undefined ? true : last;
}

function track(target, type, key) {
  if (!shouldTrack || activeEffect === undefined) {
    return;
  }

  var depsMap = targetMap.get(target);

  if (!depsMap) {
    targetMap.set(target, depsMap = new Map());
  }

  var dep = depsMap.get(key);

  if (!dep) {
    depsMap.set(key, dep = new Set());
  }

  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);

    if ( true && activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target: target,
        type: type,
        key: key
      });
    }
  }
}

function trigger(target, type, key, newValue, oldValue, oldTarget) {
  var depsMap = targetMap.get(target);

  if (!depsMap) {
    // never been tracked
    return;
  }

  var effects = new Set();

  var add = function add(effectsToAdd) {
    if (effectsToAdd) {
      effectsToAdd.forEach(function (effect) {
        if (effect !== activeEffect || effect.allowRecurse) {
          effects.add(effect);
        }
      });
    }
  };

  if (type === "clear"
  /* CLEAR */
  ) {
    // collection being cleared
    // trigger all effects for target
    depsMap.forEach(add);
  } else if (key === 'length' && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target)) {
    depsMap.forEach(function (dep, key) {
      if (key === 'length' || key >= newValue) {
        add(dep);
      }
    });
  } else {
    // schedule runs for SET | ADD | DELETE
    if (key !== void 0) {
      add(depsMap.get(key));
    } // also run for iteration key on ADD | DELETE | Map.SET


    switch (type) {
      case "add"
      /* ADD */
      :
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target)) {
          add(depsMap.get(ITERATE_KEY));

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isMap */ "s"])(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isIntegerKey */ "r"])(key)) {
          // new index added to array -> length changes
          add(depsMap.get('length'));
        }

        break;

      case "delete"
      /* DELETE */
      :
        if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target)) {
          add(depsMap.get(ITERATE_KEY));

          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isMap */ "s"])(target)) {
            add(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }

        break;

      case "set"
      /* SET */
      :
        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isMap */ "s"])(target)) {
          add(depsMap.get(ITERATE_KEY));
        }

        break;
    }
  }

  var run = function run(effect) {
    if ( true && effect.options.onTrigger) {
      effect.options.onTrigger({
        effect: effect,
        target: target,
        key: key,
        type: type,
        newValue: newValue,
        oldValue: oldValue,
        oldTarget: oldTarget
      });
    }

    if (effect.options.scheduler) {
      effect.options.scheduler(effect);
    } else {
      effect();
    }
  };

  effects.forEach(run);
}

var isNonTrackableKeys = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* makeMap */ "G"])("__proto__,__v_isRef,__isVue");
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map(function (key) {
  return Symbol[key];
}).filter(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isSymbol */ "D"]));
var get = /*#__PURE__*/createGetter();
var shallowGet = /*#__PURE__*/createGetter(false, true);
var readonlyGet = /*#__PURE__*/createGetter(true);
var shallowReadonlyGet = /*#__PURE__*/createGetter(true, true);
var arrayInstrumentations = /*#__PURE__*/createArrayInstrumentations();

function createArrayInstrumentations() {
  var instrumentations = {};
  ['includes', 'indexOf', 'lastIndexOf'].forEach(function (key) {
    instrumentations[key] = function () {
      var arr = toRaw(this);

      for (var i = 0, l = this.length; i < l; i++) {
        track(arr, "get"
        /* GET */
        , i + '');
      } // we run the method using the original args first (which may be reactive)


      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var res = arr[key].apply(arr, args);

      if (res === -1 || res === false) {
        // if that didn't work, run it again using raw values.
        return arr[key].apply(arr, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(args.map(toRaw)));
      } else {
        return res;
      }
    };
  });
  ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(function (key) {
    instrumentations[key] = function () {
      pauseTracking();

      for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      var res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}

function createGetter() {
  var isReadonly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function get(target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }

    var targetIsArray = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target);

    if (!isReadonly && targetIsArray && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }

    var res = Reflect.get(target, key, receiver);

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isSymbol */ "D"])(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }

    if (!isReadonly) {
      track(target, "get"
      /* GET */
      , key);
    }

    if (shallow) {
      return res;
    }

    if (isRef(res)) {
      // ref unwrapping - does not apply for Array + integer key.
      var shouldUnwrap = !targetIsArray || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isIntegerKey */ "r"])(key);
      return shouldUnwrap ? res.value : res;
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(res)) {
      // Convert returned value into a proxy as well. we do the isObject check
      // here to avoid invalid value warning. Also need to lazy access readonly
      // and reactive here to avoid circular dependency.
      return isReadonly ? readonly(res) : reactive(res);
    }

    return res;
  };
}

var set = /*#__PURE__*/createSetter();
var shallowSet = /*#__PURE__*/createSetter(true);

function createSetter() {
  var shallow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);

      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }

    var hadKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isIntegerKey */ "r"])(key) ? Number(key) < target.length : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(target, key);
    var result = Reflect.set(target, key, value, receiver); // don't trigger if target is something up in the prototype chain of original

    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add"
        /* ADD */
        , key, value);
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasChanged */ "j"])(value, oldValue)) {
        trigger(target, "set"
        /* SET */
        , key, value, oldValue);
      }
    }

    return result;
  };
}

function deleteProperty(target, key) {
  var hadKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(target, key);
  var oldValue = target[key];
  var result = Reflect.deleteProperty(target, key);

  if (result && hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function has(target, key) {
  var result = Reflect.has(target, key);

  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isSymbol */ "D"])(key) || !builtInSymbols.has(key)) {
    track(target, "has"
    /* HAS */
    , key);
  }

  return result;
}

function ownKeys(target) {
  track(target, "iterate"
  /* ITERATE */
  , Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(target) ? 'length' : ITERATE_KEY);
  return Reflect.ownKeys(target);
}

var mutableHandlers = {
  get: get,
  set: set,
  deleteProperty: deleteProperty,
  has: has,
  ownKeys: ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set: function set(target, key) {
    if (true) {
      console.warn("Set operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    if (true) {
      console.warn("Delete operation on key \"".concat(String(key), "\" failed: target is readonly."), target);
    }

    return true;
  }
};
var shallowReactiveHandlers = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, mutableHandlers, {
  get: shallowGet,
  set: shallowSet
}); // Props handlers are special in the sense that it should not unwrap top-level
// refs (in order to allow refs to be explicitly passed down), but should
// retain the reactivity of the normal readonly object.

var shallowReadonlyHandlers = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, readonlyHandlers, {
  get: shallowReadonlyGet
});

var toReactive = function toReactive(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(value) ? reactive(value) : value;
};

var toReadonly = function toReadonly(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(value) ? readonly(value) : value;
};

var toShallow = function toShallow(value) {
  return value;
};

var getProto = function getProto(v) {
  return Reflect.getPrototypeOf(v);
};

function get$1(target, key) {
  var isReadonly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isShallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  // #1772: readonly(reactive(Map)) should return readonly + reactive version
  // of the value
  target = target["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get"
    /* GET */
    , key);
  }

  !isReadonly && track(rawTarget, "get"
  /* GET */
  , rawKey);

  var _getProto = getProto(rawTarget),
      has = _getProto.has;

  var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;

  if (has.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    // #3602 readonly(reactive(Map))
    // ensure that the nested reactive `Map` can do tracking for itself
    target.get(key);
  }
}

function has$1(key) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var target = this["__v_raw"
  /* RAW */
  ];
  var rawTarget = toRaw(target);
  var rawKey = toRaw(key);

  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has"
    /* HAS */
    , key);
  }

  !isReadonly && track(rawTarget, "has"
  /* HAS */
  , rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}

function size(target) {
  var isReadonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  target = target["__v_raw"
  /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate"
  /* ITERATE */
  , ITERATE_KEY);
  return Reflect.get(target, 'size', target);
}

function add(value) {
  value = toRaw(value);
  var target = toRaw(this);
  var proto = getProto(target);
  var hadKey = proto.has.call(target, value);

  if (!hadKey) {
    target.add(value);
    trigger(target, "add"
    /* ADD */
    , value, value);
  }

  return this;
}

function set$1(key, value) {
  value = toRaw(value);
  var target = toRaw(this);

  var _getProto2 = getProto(target),
      has = _getProto2.has,
      get = _getProto2.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get.call(target, key);
  target.set(key, value);

  if (!hadKey) {
    trigger(target, "add"
    /* ADD */
    , key, value);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasChanged */ "j"])(value, oldValue)) {
    trigger(target, "set"
    /* SET */
    , key, value, oldValue);
  }

  return this;
}

function deleteEntry(key) {
  var target = toRaw(this);

  var _getProto3 = getProto(target),
      has = _getProto3.has,
      get = _getProto3.get;

  var hadKey = has.call(target, key);

  if (!hadKey) {
    key = toRaw(key);
    hadKey = has.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has, key);
  }

  var oldValue = get ? get.call(target, key) : undefined; // forward the operation before queueing reactions

  var result = target.delete(key);

  if (hadKey) {
    trigger(target, "delete"
    /* DELETE */
    , key, undefined, oldValue);
  }

  return result;
}

function clear() {
  var target = toRaw(this);
  var hadItems = target.size !== 0;
  var oldTarget =  true ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isMap */ "s"])(target) ? new Map(target) : new Set(target) : undefined; // forward the operation before queueing reactions

  var result = target.clear();

  if (hadItems) {
    trigger(target, "clear"
    /* CLEAR */
    , undefined, undefined, oldTarget);
  }

  return result;
}

function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    var observed = this;
    var target = observed["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , ITERATE_KEY);
    return target.forEach(function (value, key) {
      // important: make sure the callback is
      // 1. invoked with the reactive map as `this` and 3rd arg
      // 2. the value received should be a corresponding reactive/readonly.
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}

function createIterableMethod(method, isReadonly, isShallow) {
  return function () {
    var target = this["__v_raw"
    /* RAW */
    ];
    var rawTarget = toRaw(target);
    var targetIsMap = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isMap */ "s"])(rawTarget);
    var isPair = method === 'entries' || method === Symbol.iterator && targetIsMap;
    var isKeyOnly = method === 'keys' && targetIsMap;
    var innerIterator = target[method].apply(target, arguments);
    var wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate"
    /* ITERATE */
    , isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY); // return a wrapped iterator which returns observed versions of the
    // values emitted from the real iterator

    return Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
      // iterator protocol
      next: function next() {
        var _innerIterator$next = innerIterator.next(),
            value = _innerIterator$next.value,
            done = _innerIterator$next.done;

        return done ? {
          value: value,
          done: done
        } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done: done
        };
      }
    }, Symbol.iterator, function () {
      return this;
    });
  };
}

function createReadonlyMethod(type) {
  return function () {
    if (true) {
      var key = (arguments.length <= 0 ? undefined : arguments[0]) ? "on key \"".concat(arguments.length <= 0 ? undefined : arguments[0], "\" ") : "";
      console.warn("".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* capitalize */ "f"])(type), " operation ").concat(key, "failed: target is readonly."), toRaw(this));
    }

    return type === "delete"
    /* DELETE */
    ? false : this;
  };
}

function createInstrumentations() {
  var mutableInstrumentations = {
    get: function get(key) {
      return get$1(this, key);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    delete: deleteEntry,
    clear: clear,
    forEach: createForEach(false, false)
  };
  var shallowInstrumentations = {
    get: function get(key) {
      return get$1(this, key, false, true);
    },

    get size() {
      return size(this);
    },

    has: has$1,
    add: add,
    set: set$1,
    delete: deleteEntry,
    clear: clear,
    forEach: createForEach(false, true)
  };
  var readonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    delete: createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  var shallowReadonlyInstrumentations = {
    get: function get(key) {
      return get$1(this, key, true, true);
    },

    get size() {
      return size(this, true);
    },

    has: function has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod("add"
    /* ADD */
    ),
    set: createReadonlyMethod("set"
    /* SET */
    ),
    delete: createReadonlyMethod("delete"
    /* DELETE */
    ),
    clear: createReadonlyMethod("clear"
    /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  var iteratorMethods = ['keys', 'values', 'entries', Symbol.iterator];
  iteratorMethods.forEach(function (method) {
    mutableInstrumentations[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations[method] = createIterableMethod(method, true, false);
    shallowInstrumentations[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations[method] = createIterableMethod(method, true, true);
  });
  return [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations];
}

var _createInstrumentatio = /* #__PURE__*/createInstrumentations(),
    _createInstrumentatio2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_createInstrumentatio, 4),
    mutableInstrumentations = _createInstrumentatio2[0],
    readonlyInstrumentations = _createInstrumentatio2[1],
    shallowInstrumentations = _createInstrumentatio2[2],
    shallowReadonlyInstrumentations = _createInstrumentatio2[3];

function createInstrumentationGetter(isReadonly, shallow) {
  var instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return function (target, key, receiver) {
    if (key === "__v_isReactive"
    /* IS_REACTIVE */
    ) {
      return !isReadonly;
    } else if (key === "__v_isReadonly"
    /* IS_READONLY */
    ) {
      return isReadonly;
    } else if (key === "__v_raw"
    /* RAW */
    ) {
      return target;
    }

    return Reflect.get(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}

var mutableCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /*#__PURE__*/createInstrumentationGetter(true, true)
};

function checkIdentityKeys(target, has, key) {
  var rawKey = toRaw(key);

  if (rawKey !== key && has.call(target, rawKey)) {
    var type = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toRawType */ "N"])(target);
    console.warn("Reactive ".concat(type, " contains both the raw and reactive ") + "versions of the same object".concat(type === "Map" ? " as keys" : "", ", ") + "which can lead to inconsistencies. " + "Avoid differentiating between the raw and reactive versions " + "of an object and only use the reactive version if possible.");
  }
}

var reactiveMap = new WeakMap();
var shallowReactiveMap = new WeakMap();
var readonlyMap = new WeakMap();
var shallowReadonlyMap = new WeakMap();

function targetTypeMap(rawType) {
  switch (rawType) {
    case 'Object':
    case 'Array':
      return 1
      /* COMMON */
      ;

    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
      /* COLLECTION */
      ;

    default:
      return 0
      /* INVALID */
      ;
  }
}

function getTargetType(value) {
  return value["__v_skip"
  /* SKIP */
  ] || !Object.isExtensible(value) ? 0
  /* INVALID */
  : targetTypeMap(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toRawType */ "N"])(value));
}

function reactive(target) {
  // if trying to observe a readonly proxy, return the readonly version.
  if (target && target["__v_isReadonly"
  /* IS_READONLY */
  ]) {
    return target;
  }

  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
/**
 * Return a shallowly-reactive copy of the original object, where only the root
 * level properties are reactive. It also does not auto-unwrap refs (even at the
 * root level).
 */


function shallowReactive(target) {
  return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
/**
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
/**
 * Returns a reactive-copy of the original object, where only the root level
 * properties are readonly, and does NOT unwrap refs nor recursively convert
 * returned properties.
 * This is used for creating the props proxy object for stateful components.
 */


function shallowReadonly(target) {
  return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}

function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(target)) {
    if (true) {
      console.warn("value cannot be made reactive: ".concat(String(target)));
    }

    return target;
  } // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object


  if (target["__v_raw"
  /* RAW */
  ] && !(isReadonly && target["__v_isReactive"
  /* IS_REACTIVE */
  ])) {
    return target;
  } // target already has corresponding Proxy


  var existingProxy = proxyMap.get(target);

  if (existingProxy) {
    return existingProxy;
  } // only a whitelist of value types can be observed.


  var targetType = getTargetType(target);

  if (targetType === 0
  /* INVALID */
  ) {
    return target;
  }

  var proxy = new Proxy(target, targetType === 2
  /* COLLECTION */
  ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}

function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"
    /* RAW */
    ]);
  }

  return !!(value && value["__v_isReactive"
  /* IS_REACTIVE */
  ]);
}

function isReadonly(value) {
  return !!(value && value["__v_isReadonly"
  /* IS_READONLY */
  ]);
}

function isProxy(value) {
  return isReactive(value) || isReadonly(value);
}

function toRaw(observed) {
  return observed && toRaw(observed["__v_raw"
  /* RAW */
  ]) || observed;
}

function markRaw(value) {
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* def */ "g"])(value, "__v_skip"
  /* SKIP */
  , true);
  return value;
}

var convert = function convert(val) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(val) ? reactive(val) : val;
};

function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}

function ref(value) {
  return createRef(value);
}

function shallowRef(value) {
  return createRef(value, true);
}

var RefImpl = /*#__PURE__*/function () {
  function RefImpl(value) {
    var _shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, RefImpl);

    this._shallow = _shallow;
    this.__v_isRef = true;
    this._rawValue = _shallow ? value : toRaw(value);
    this._value = _shallow ? value : convert(value);
  }

  Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(RefImpl, [{
    key: "value",
    get: function get() {
      track(toRaw(this), "get"
      /* GET */
      , 'value');
      return this._value;
    },
    set: function set(newVal) {
      newVal = this._shallow ? newVal : toRaw(newVal);

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasChanged */ "j"])(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = this._shallow ? newVal : convert(newVal);
        trigger(toRaw(this), "set"
        /* SET */
        , 'value', newVal);
      }
    }
  }]);

  return RefImpl;
}();

function createRef(rawValue) {
  var shallow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isRef(rawValue)) {
    return rawValue;
  }

  return new RefImpl(rawValue, shallow);
}

function triggerRef(ref) {
  trigger(toRaw(ref), "set"
  /* SET */
  , 'value',  true ? ref.value : undefined);
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

var shallowUnwrapHandlers = {
  get: function get(target, key, receiver) {
    return unref(Reflect.get(target, key, receiver));
  },
  set: function set(target, key, value, receiver) {
    var oldValue = target[key];

    if (isRef(oldValue) && !isRef(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};

function proxyRefs(objectWithRefs) {
  return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}

var CustomRefImpl = /*#__PURE__*/function () {
  function CustomRefImpl(factory) {
    var _this = this;

    Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, CustomRefImpl);

    this.__v_isRef = true;

    var _factory = factory(function () {
      return track(_this, "get"
      /* GET */
      , 'value');
    }, function () {
      return trigger(_this, "set"
      /* SET */
      , 'value');
    }),
        get = _factory.get,
        set = _factory.set;

    this._get = get;
    this._set = set;
  }

  Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(CustomRefImpl, [{
    key: "value",
    get: function get() {
      return this._get();
    },
    set: function set(newVal) {
      this._set(newVal);
    }
  }]);

  return CustomRefImpl;
}();

function customRef(factory) {
  return new CustomRefImpl(factory);
}

function toRefs(object) {
  if ( true && !isProxy(object)) {
    console.warn("toRefs() expects a reactive object but received a plain one.");
  }

  var ret = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(object) ? new Array(object.length) : {};

  for (var key in object) {
    ret[key] = toRef(object, key);
  }

  return ret;
}

var ObjectRefImpl = /*#__PURE__*/function () {
  function ObjectRefImpl(_object, _key) {
    Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ObjectRefImpl);

    this._object = _object;
    this._key = _key;
    this.__v_isRef = true;
  }

  Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ObjectRefImpl, [{
    key: "value",
    get: function get() {
      return this._object[this._key];
    },
    set: function set(newVal) {
      this._object[this._key] = newVal;
    }
  }]);

  return ObjectRefImpl;
}();

function toRef(object, key) {
  return isRef(object[key]) ? object[key] : new ObjectRefImpl(object, key);
}

var ComputedRefImpl = /*#__PURE__*/function () {
  function ComputedRefImpl(getter, _setter, isReadonly) {
    var _this2 = this;

    Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ComputedRefImpl);

    this._setter = _setter;
    this._dirty = true;
    this.__v_isRef = true;
    this.effect = effect(getter, {
      lazy: true,
      scheduler: function scheduler() {
        if (!_this2._dirty) {
          _this2._dirty = true;
          trigger(toRaw(_this2), "set"
          /* SET */
          , 'value');
        }
      }
    });
    this["__v_isReadonly"
    /* IS_READONLY */
    ] = isReadonly;
  }

  Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ComputedRefImpl, [{
    key: "value",
    get: function get() {
      // the computed ref may get wrapped by other proxies e.g. readonly() #3376
      var self = toRaw(this);

      if (self._dirty) {
        self._value = this.effect();
        self._dirty = false;
      }

      track(self, "get"
      /* GET */
      , 'value');
      return self._value;
    },
    set: function set(newValue) {
      this._setter(newValue);
    }
  }]);

  return ComputedRefImpl;
}();

function computed(getterOrOptions) {
  var getter;
  var setter;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(getterOrOptions)) {
    getter = getterOrOptions;
    setter =  true ? function () {
      console.warn('Write operation failed: computed value is readonly');
    } : undefined;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  return new ComputedRefImpl(getter, setter, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(getterOrOptions) || !getterOrOptions.set);
}



/***/ }),

/***/ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js ***!
  \*************************************************************************/
/*! exports provided: customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, camelize, capitalize, toDisplayString, toHandlerKey, BaseTransition, Comment, Fragment, KeepAlive, Static, Suspense, Teleport, Text, callWithAsyncErrorHandling, callWithErrorHandling, cloneVNode, compatUtils, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createSlots, createStaticVNode, createTextVNode, createVNode, defineAsyncComponent, defineComponent, defineEmit, defineEmits, defineExpose, defineProps, devtools, getCurrentInstance, getTransitionRawChildren, h, handleError, initCustomFormatter, inject, isRuntimeOnly, isVNode, mergeDefaults, mergeProps, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, openBlock, popScopeId, provide, pushScopeId, queuePostFlushCb, registerRuntimeCompiler, renderList, renderSlot, resolveComponent, resolveDirective, resolveDynamicComponent, resolveFilter, resolveTransitionHooks, setBlockTracking, setDevtoolsHook, setTransitionHooks, ssrContextKey, ssrUtils, toHandlers, transformVNodeArgs, useAttrs, useContext, useSSRContext, useSlots, useTransitionState, version, warn, watch, watchEffect, withAsyncContext, withCtx, withDefaults, withDirectives, withScopeId */
/*! exports used: BaseTransition, Fragment, Static, Teleport, callWithAsyncErrorHandling, computed, createBlock, createCommentVNode, createHydrationRenderer, createRenderer, createTextVNode, createVNode, defineComponent, getCurrentInstance, getTransitionRawChildren, h, inject, isRuntimeOnly, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onDeactivated, onMounted, onUnmounted, onUpdated, openBlock, provide, renderList, renderSlot, resolveComponent, resolveTransitionHooks, setTransitionHooks, useTransitionState, warn, watch, watchEffect, withCtx, withDirectives, withScopeId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, window, document, SVGElement) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseTransition; });
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Fragment; });
/* unused harmony export KeepAlive */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Static; });
/* unused harmony export Suspense */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Teleport; });
/* unused harmony export Text */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return callWithAsyncErrorHandling; });
/* unused harmony export callWithErrorHandling */
/* unused harmony export cloneVNode */
/* unused harmony export compatUtils */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createCommentVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return createHydrationRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return createRenderer; });
/* unused harmony export createSlots */
/* unused harmony export createStaticVNode */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return createTextVNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return createVNode; });
/* unused harmony export defineAsyncComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return defineComponent; });
/* unused harmony export defineEmit */
/* unused harmony export defineEmits */
/* unused harmony export defineExpose */
/* unused harmony export defineProps */
/* unused harmony export devtools */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getTransitionRawChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return h; });
/* unused harmony export handleError */
/* unused harmony export initCustomFormatter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isRuntimeOnly; });
/* unused harmony export isVNode */
/* unused harmony export mergeDefaults */
/* unused harmony export mergeProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return onBeforeMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return onBeforeUnmount; });
/* unused harmony export onBeforeUpdate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return onDeactivated; });
/* unused harmony export onErrorCaptured */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return onMounted; });
/* unused harmony export onRenderTracked */
/* unused harmony export onRenderTriggered */
/* unused harmony export onServerPrefetch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return onUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return onUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return openBlock; });
/* unused harmony export popScopeId */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return provide; });
/* unused harmony export pushScopeId */
/* unused harmony export queuePostFlushCb */
/* unused harmony export registerRuntimeCompiler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return renderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return renderSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return resolveComponent; });
/* unused harmony export resolveDirective */
/* unused harmony export resolveDynamicComponent */
/* unused harmony export resolveFilter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return resolveTransitionHooks; });
/* unused harmony export setBlockTracking */
/* unused harmony export setDevtoolsHook */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return setTransitionHooks; });
/* unused harmony export ssrContextKey */
/* unused harmony export ssrUtils */
/* unused harmony export toHandlers */
/* unused harmony export transformVNodeArgs */
/* unused harmony export useAttrs */
/* unused harmony export useContext */
/* unused harmony export useSSRContext */
/* unused harmony export useSlots */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return useTransitionState; });
/* unused harmony export version */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return watchEffect; });
/* unused harmony export withAsyncContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return withCtx; });
/* unused harmony export withDefaults */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return withDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return withScopeId; });
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _vue_reactivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/reactivity */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/shared */ "./node_modules/@vue/shared/dist/shared.esm-bundler.js");





var _ErrorTypeStrings, _deprecationData;





var stack = [];

function pushWarningContext(vnode) {
  stack.push(vnode);
}

function popWarningContext() {
  stack.pop();
}

function warn(msg) {
  // avoid props formatting or warn handler tracking deps that might be mutated
  // during patch, leading to infinite recursion.
  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* pauseTracking */ "h"])();
  var instance = stack.length ? stack[stack.length - 1].component : null;
  var appWarnHandler = instance && instance.appContext.config.warnHandler;
  var trace = getComponentTrace();

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (appWarnHandler) {
    callWithErrorHandling(appWarnHandler, instance, 11
    /* APP_WARN_HANDLER */
    , [msg + args.join(''), instance && instance.proxy, trace.map(function (_ref) {
      var vnode = _ref.vnode;
      return "at <".concat(formatComponentName(instance, vnode.type), ">");
    }).join('\n'), trace]);
  } else {
    var _console;

    var warnArgs = ["[Vue warn]: ".concat(msg)].concat(args);
    /* istanbul ignore if */

    if (trace.length && // avoid spamming console during tests
    !false) {
      warnArgs.push.apply(warnArgs, ["\n"].concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(formatTrace(trace))));
    }

    (_console = console).warn.apply(_console, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(warnArgs));
  }

  Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* resetTracking */ "m"])();
}

function getComponentTrace() {
  var currentVNode = stack[stack.length - 1];

  if (!currentVNode) {
    return [];
  } // we can't just use the stack because it will be incomplete during updates
  // that did not start from the root. Re-construct the parent chain using
  // instance parent pointers.


  var normalizedStack = [];

  while (currentVNode) {
    var last = normalizedStack[0];

    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }

    var parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }

  return normalizedStack;
}
/* istanbul ignore next */


function formatTrace(trace) {
  var logs = [];
  trace.forEach(function (entry, i) {
    logs.push.apply(logs, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(i === 0 ? [] : ["\n"]).concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(formatTraceEntry(entry))));
  });
  return logs;
}

function formatTraceEntry(_ref2) {
  var vnode = _ref2.vnode,
      recurseCount = _ref2.recurseCount;
  var postfix = recurseCount > 0 ? "... (".concat(recurseCount, " recursive calls)") : "";
  var isRoot = vnode.component ? vnode.component.parent == null : false;
  var open = " at <".concat(formatComponentName(vnode.component, vnode.type, isRoot));
  var close = ">" + postfix;
  return vnode.props ? [open].concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(formatProps(vnode.props)), [close]) : [open + close];
}
/* istanbul ignore next */


function formatProps(props) {
  var res = [];
  var keys = Object.keys(props);
  keys.slice(0, 3).forEach(function (key) {
    res.push.apply(res, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(formatProp(key, props[key])));
  });

  if (keys.length > 3) {
    res.push(" ...");
  }

  return res;
}
/* istanbul ignore next */


function formatProp(key, value, raw) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(value)) {
    value = JSON.stringify(value);
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (typeof value === 'number' || typeof value === 'boolean' || value == null) {
    return raw ? value : ["".concat(key, "=").concat(value)];
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(value)) {
    value = formatProp(key, Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(value.value), true);
    return raw ? value : ["".concat(key, "=Ref<"), value, ">"];
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(value)) {
    return ["".concat(key, "=fn").concat(value.name ? "<".concat(value.name, ">") : "")];
  } else {
    value = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(value);
    return raw ? value : ["".concat(key, "="), value];
  }
}

var ErrorTypeStrings = (_ErrorTypeStrings = {}, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "sp"
/* SERVER_PREFETCH */
, 'serverPrefetch hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "bc"
/* BEFORE_CREATE */
, 'beforeCreate hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "c"
/* CREATED */
, 'created hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "bm"
/* BEFORE_MOUNT */
, 'beforeMount hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "m"
/* MOUNTED */
, 'mounted hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "bu"
/* BEFORE_UPDATE */
, 'beforeUpdate hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "u"
/* UPDATED */
, 'updated'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "bum"
/* BEFORE_UNMOUNT */
, 'beforeUnmount hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "um"
/* UNMOUNTED */
, 'unmounted hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "a"
/* ACTIVATED */
, 'activated hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "da"
/* DEACTIVATED */
, 'deactivated hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "ec"
/* ERROR_CAPTURED */
, 'errorCaptured hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "rtc"
/* RENDER_TRACKED */
, 'renderTracked hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, "rtg"
/* RENDER_TRIGGERED */
, 'renderTriggered hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 0
/* SETUP_FUNCTION */
, 'setup function'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 1
/* RENDER_FUNCTION */
, 'render function'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 2
/* WATCH_GETTER */
, 'watcher getter'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 3
/* WATCH_CALLBACK */
, 'watcher callback'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 4
/* WATCH_CLEANUP */
, 'watcher cleanup function'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 5
/* NATIVE_EVENT_HANDLER */
, 'native event handler'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 6
/* COMPONENT_EVENT_HANDLER */
, 'component event handler'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 7
/* VNODE_HOOK */
, 'vnode hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 8
/* DIRECTIVE_HOOK */
, 'directive hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 9
/* TRANSITION_HOOK */
, 'transition hook'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 10
/* APP_ERROR_HANDLER */
, 'app errorHandler'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 11
/* APP_WARN_HANDLER */
, 'app warnHandler'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 12
/* FUNCTION_REF */
, 'ref function'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 13
/* ASYNC_COMPONENT_LOADER */
, 'async component loader'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_ErrorTypeStrings, 14
/* SCHEDULER */
, 'scheduler flush. This is likely a Vue internals bug. ' + 'Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/vue-next'), _ErrorTypeStrings);

function callWithErrorHandling(fn, instance, type, args) {
  var res;

  try {
    res = args ? fn.apply(void 0, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(args)) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }

  return res;
}

function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(fn)) {
    var res = callWithErrorHandling(fn, instance, type, args);

    if (res && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isPromise */ "x"])(res)) {
      res.catch(function (err) {
        handleError(err, instance, type);
      });
    }

    return res;
  }

  var values = [];

  for (var i = 0; i < fn.length; i++) {
    values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
  }

  return values;
}

function handleError(err, instance, type) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var contextVNode = instance ? instance.vnode : null;

  if (instance) {
    var cur = instance.parent; // the exposed instance is the render proxy to keep it consistent with 2.x

    var exposedInstance = instance.proxy; // in production the hook receives only the error code

    var errorInfo =  true ? ErrorTypeStrings[type] : undefined;

    while (cur) {
      var errorCapturedHooks = cur.ec;

      if (errorCapturedHooks) {
        for (var i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }

      cur = cur.parent;
    } // app-level handling


    var appErrorHandler = instance.appContext.config.errorHandler;

    if (appErrorHandler) {
      callWithErrorHandling(appErrorHandler, null, 10
      /* APP_ERROR_HANDLER */
      , [err, exposedInstance, errorInfo]);
      return;
    }
  }

  logError(err, type, contextVNode, throwInDev);
}

function logError(err, type, contextVNode) {
  var throwInDev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  if (true) {
    var info = ErrorTypeStrings[type];

    if (contextVNode) {
      pushWarningContext(contextVNode);
    }

    warn("Unhandled error".concat(info ? " during execution of ".concat(info) : ""));

    if (contextVNode) {
      popWarningContext();
    } // crash in dev by default so it's more noticeable


    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else {}
}

var isFlushing = false;
var isFlushPending = false;
var queue = [];
var flushIndex = 0;
var pendingPreFlushCbs = [];
var activePreFlushCbs = null;
var preFlushIndex = 0;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = Promise.resolve();
var currentFlushPromise = null;
var currentPreFlushParentJob = null;
var RECURSION_LIMIT = 100;

function nextTick(fn) {
  var p = currentFlushPromise || resolvedPromise;
  return fn ? p.then(this ? fn.bind(this) : fn) : p;
} // #2768
// Use binary-search to find a suitable position in the queue,
// so that the queue maintains the increasing order of job's id,
// which can prevent the job from being skipped and also can avoid repeated patching.


function findInsertionIndex(job) {
  // the start index should be `flushIndex + 1`
  var start = flushIndex + 1;
  var end = queue.length;
  var jobId = getId(job);

  while (start < end) {
    var middle = start + end >>> 1;
    var middleJobId = getId(queue[middle]);
    middleJobId < jobId ? start = middle + 1 : end = middle;
  }

  return start;
}

function queueJob(job) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if ((!queue.length || !queue.includes(job, isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex)) && job !== currentPreFlushParentJob) {
    var pos = findInsertionIndex(job);

    if (pos > -1) {
      queue.splice(pos, 0, job);
    } else {
      queue.push(job);
    }

    queueFlush();
  }
}

function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}

function invalidateJob(job) {
  var i = queue.indexOf(job);

  if (i > flushIndex) {
    queue.splice(i, 1);
  }
}

function queueCb(cb, activeQueue, pendingQueue, index) {
  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(cb)) {
    if (!activeQueue || !activeQueue.includes(cb, cb.allowRecurse ? index + 1 : index)) {
      pendingQueue.push(cb);
    }
  } else {
    // if cb is an array, it is a component lifecycle hook which can only be
    // triggered by a job, which is already deduped in the main queue, so
    // we can skip duplicate check here to improve perf
    pendingQueue.push.apply(pendingQueue, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(cb));
  }

  queueFlush();
}

function queuePreFlushCb(cb) {
  queueCb(cb, activePreFlushCbs, pendingPreFlushCbs, preFlushIndex);
}

function queuePostFlushCb(cb) {
  queueCb(cb, activePostFlushCbs, pendingPostFlushCbs, postFlushIndex);
}

function flushPreFlushCbs(seen) {
  var parentJob = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (pendingPreFlushCbs.length) {
    currentPreFlushParentJob = parentJob;
    activePreFlushCbs = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(new Set(pendingPreFlushCbs));
    pendingPreFlushCbs.length = 0;

    if (true) {
      seen = seen || new Map();
    }

    for (preFlushIndex = 0; preFlushIndex < activePreFlushCbs.length; preFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePreFlushCbs[preFlushIndex])) {
        continue;
      }

      activePreFlushCbs[preFlushIndex]();
    }

    activePreFlushCbs = null;
    preFlushIndex = 0;
    currentPreFlushParentJob = null; // recursively flush until it drains

    flushPreFlushCbs(seen, parentJob);
  }
}

function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    var deduped = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(new Set(pendingPostFlushCbs));

    pendingPostFlushCbs.length = 0; // #1947 already has active queue, nested flushPostFlushCbs call

    if (activePostFlushCbs) {
      var _activePostFlushCbs;

      (_activePostFlushCbs = activePostFlushCbs).push.apply(_activePostFlushCbs, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(deduped));

      return;
    }

    activePostFlushCbs = deduped;

    if (true) {
      seen = seen || new Map();
    }

    activePostFlushCbs.sort(function (a, b) {
      return getId(a) - getId(b);
    });

    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if ( true && checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }

      activePostFlushCbs[postFlushIndex]();
    }

    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}

var getId = function getId(job) {
  return job.id == null ? Infinity : job.id;
};

function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;

  if (true) {
    seen = seen || new Map();
  }

  flushPreFlushCbs(seen); // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child so its render effect will have smaller
  //    priority number)
  // 2. If a component is unmounted during a parent component's update,
  //    its update can be skipped.

  queue.sort(function (a, b) {
    return getId(a) - getId(b);
  });

  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      var job = queue[flushIndex];

      if (job && job.active !== false) {
        if ( true && checkRecursiveUpdates(seen, job)) {
          continue;
        }

        callWithErrorHandling(job, null, 14
        /* SCHEDULER */
        );
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    currentFlushPromise = null; // some postFlushCb queued jobs!
    // keep flushing until it drains.

    if (queue.length || pendingPreFlushCbs.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}

function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    var count = seen.get(fn);

    if (count > RECURSION_LIMIT) {
      var instance = fn.ownerInstance;
      var componentName = instance && getComponentName(instance.type);
      warn("Maximum recursive updates exceeded".concat(componentName ? " in component <".concat(componentName, ">") : "", ". ") + "This means you have a reactive effect that is mutating its own " + "dependencies and thus recursively triggering itself. Possible sources " + "include component template, render function, updated hook or " + "watcher source function.");
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
/* eslint-disable no-restricted-globals */


var isHmrUpdating = false;
var hmrDirtyComponents = new Set(); // Expose the HMR runtime on the global object
// This makes it entirely tree-shakable without polluting the exports and makes
// it easier to be used in toolings like vue-loader
// Note: for a component to be eligible for HMR it also needs the __hmrId option
// to be set so that its instances can be registered / removed.

if (true) {
  var globalObject = typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {};
  globalObject.__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}

var map = new Map();

function registerHMR(instance) {
  var id = instance.type.__hmrId;
  var record = map.get(id);

  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }

  record.instances.add(instance);
}

function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}

function createRecord(id, component) {
  if (!component) {
    warn("HMR API usage is out of date.\n" + "Please upgrade vue-loader/vite/rollup-plugin-vue or other relevant " + "dependency that handles Vue SFC compilation.");
    component = {};
  }

  if (map.has(id)) {
    return false;
  }

  map.set(id, {
    component: isClassComponent(component) ? component.__vccOpts : component,
    instances: new Set()
  });
  return true;
}

function rerender(id, newRender) {
  var record = map.get(id);
  if (!record) return;
  if (newRender) record.component.render = newRender; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  Array.from(record.instances).forEach(function (instance) {
    if (newRender) {
      instance.render = newRender;
    }

    instance.renderCache = []; // this flag forces child components with slot content to update

    isHmrUpdating = true;
    instance.update();
    isHmrUpdating = false;
  });
}

function reload(id, newComp) {
  var record = map.get(id);
  if (!record) return; // Array.from creates a snapshot which avoids the set being mutated during
  // updates

  var component = record.component,
      instances = record.instances;

  if (!hmrDirtyComponents.has(component)) {
    // 1. Update existing comp definition to match new one
    newComp = isClassComponent(newComp) ? newComp.__vccOpts : newComp;
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(component, newComp);

    for (var key in component) {
      if (key !== '__file' && !(key in newComp)) {
        delete component[key];
      }
    } // 2. Mark component dirty. This forces the renderer to replace the component
    // on patch.


    hmrDirtyComponents.add(component); // 3. Make sure to unmark the component after the reload.

    queuePostFlushCb(function () {
      hmrDirtyComponents.delete(component);
    });
  }

  Array.from(instances).forEach(function (instance) {
    if (instance.parent) {
      // 4. Force the parent instance to re-render. This will cause all updated
      // components to be unmounted and re-mounted. Queue the update so that we
      // don't end up forcing the same parent to re-render multiple times.
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      // root instance mounted via createApp() has a reload method
      instance.appContext.reload();
    } else if (typeof window !== 'undefined') {
      // root instance inside tree created via raw render(). Force reload.
      window.location.reload();
    } else {
      console.warn('[HMR] Root or manually mounted instance modified. Full reload required.');
    }
  });
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn("[HMR] Something went wrong during Vue component hot-reload. " + "Full reload required.");
    }
  };
}

var devtools;

function setDevtoolsHook(hook) {
  devtools = hook;
}

function devtoolsInitApp(app, version) {
  // TODO queue if devtools is undefined
  if (!devtools) return;
  devtools.emit("app:init"
  /* APP_INIT */
  , app, version, {
    Fragment: Fragment,
    Text: Text,
    Comment: Comment$1,
    Static: Static
  });
}

function devtoolsUnmountApp(app) {
  if (!devtools) return;
  devtools.emit("app:unmount"
  /* APP_UNMOUNT */
  , app);
}

var devtoolsComponentAdded = /*#__PURE__*/createDevtoolsComponentHook("component:added"
/* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /*#__PURE__*/createDevtoolsComponentHook("component:updated"
/* COMPONENT_UPDATED */
);
var devtoolsComponentRemoved = /*#__PURE__*/createDevtoolsComponentHook("component:removed"
/* COMPONENT_REMOVED */
);

function createDevtoolsComponentHook(hook) {
  return function (component) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component.parent ? component.parent.uid : undefined, component);
  };
}

var devtoolsPerfStart = /*#__PURE__*/createDevtoolsPerformanceHook("perf:start"
/* PERFORMANCE_START */
);
var devtoolsPerfEnd = /*#__PURE__*/createDevtoolsPerformanceHook("perf:end"
/* PERFORMANCE_END */
);

function createDevtoolsPerformanceHook(hook) {
  return function (component, type, time) {
    if (!devtools) return;
    devtools.emit(hook, component.appContext.app, component.uid, component, type, time);
  };
}

function devtoolsComponentEmit(component, event, params) {
  if (!devtools) return;
  devtools.emit("component:emit"
  /* COMPONENT_EMIT */
  , component.appContext.app, component, event, params);
}

var deprecationData = (_deprecationData = {}, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_MOUNT"
/* GLOBAL_MOUNT */
, {
  message: "The global app bootstrapping API has changed: vm.$mount() and the \"el\" " + "option have been removed. Use createApp(RootComponent).mount() instead.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#mounting-app-instance"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_MOUNT_CONTAINER"
/* GLOBAL_MOUNT_CONTAINER */
, {
  message: "Vue detected directives on the mount container. " + "In Vue 3, the container is no longer considered part of the template " + "and will not be processed/replaced.",
  link: "https://v3.vuejs.org/guide/migration/mount-changes.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_EXTEND"
/* GLOBAL_EXTEND */
, {
  message: "Vue.extend() has been removed in Vue 3. " + "Use defineComponent() instead.",
  link: "https://v3.vuejs.org/api/global-api.html#definecomponent"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_PROTOTYPE"
/* GLOBAL_PROTOTYPE */
, {
  message: "Vue.prototype is no longer available in Vue 3. " + "Use app.config.globalProperties instead.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#vue-prototype-replaced-by-config-globalproperties"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_SET"
/* GLOBAL_SET */
, {
  message: "Vue.set() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_DELETE"
/* GLOBAL_DELETE */
, {
  message: "Vue.delete() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_OBSERVABLE"
/* GLOBAL_OBSERVABLE */
, {
  message: "Vue.observable() has been removed. " + "Use `import { reactive } from \"vue\"` from Composition API instead.",
  link: "https://v3.vuejs.org/api/basic-reactivity.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "GLOBAL_PRIVATE_UTIL"
/* GLOBAL_PRIVATE_UTIL */
, {
  message: "Vue.util has been removed. Please refactor to avoid its usage " + "since it was an internal API even in Vue 2."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_SILENT"
/* CONFIG_SILENT */
, {
  message: "config.silent has been removed because it is not good practice to " + "intentionally suppress warnings. You can use your browser console's " + "filter features to focus on relevant messages."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_DEVTOOLS"
/* CONFIG_DEVTOOLS */
, {
  message: "config.devtools has been removed. To enable devtools for " + "production, configure the __VUE_PROD_DEVTOOLS__ compile-time flag.",
  link: "https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_KEY_CODES"
/* CONFIG_KEY_CODES */
, {
  message: "config.keyCodes has been removed. " + "In Vue 3, you can directly use the kebab-case key names as v-on modifiers.",
  link: "https://v3.vuejs.org/guide/migration/keycode-modifiers.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_PRODUCTION_TIP"
/* CONFIG_PRODUCTION_TIP */
, {
  message: "config.productionTip has been removed.",
  link: "https://v3.vuejs.org/guide/migration/global-api.html#config-productiontip-removed"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_IGNORED_ELEMENTS"
/* CONFIG_IGNORED_ELEMENTS */
, {
  message: function message() {
    var msg = "config.ignoredElements has been removed.";

    if (isRuntimeOnly()) {
      msg += " Pass the \"isCustomElement\" option to @vue/compiler-dom instead.";
    } else {
      msg += " Use config.isCustomElement instead.";
    }

    return msg;
  },
  link: "https://v3.vuejs.org/guide/migration/global-api.html#config-ignoredelements-is-now-config-iscustomelement"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_WHITESPACE"
/* CONFIG_WHITESPACE */
, {
  // this warning is only relevant in the full build when using runtime
  // compilation, so it's put in the runtime compatConfig list.
  message: "Vue 3 compiler's whitespace option will default to \"condense\" instead of " + "\"preserve\". To suppress this warning, provide an explicit value for " + "`config.compilerOptions.whitespace`."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CONFIG_OPTION_MERGE_STRATS"
/* CONFIG_OPTION_MERGE_STRATS */
, {
  message: "config.optionMergeStrategies no longer exposes internal strategies. " + "Use custom merge functions instead."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_SET"
/* INSTANCE_SET */
, {
  message: "vm.$set() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_DELETE"
/* INSTANCE_DELETE */
, {
  message: "vm.$delete() has been removed as it is no longer needed in Vue 3. " + "Simply use native JavaScript mutations."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_DESTROY"
/* INSTANCE_DESTROY */
, {
  message: "vm.$destroy() has been removed. Use app.unmount() instead.",
  link: "https://v3.vuejs.org/api/application-api.html#unmount"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_EVENT_EMITTER"
/* INSTANCE_EVENT_EMITTER */
, {
  message: "vm.$on/$once/$off() have been removed. " + "Use an external event emitter library instead.",
  link: "https://v3.vuejs.org/guide/migration/events-api.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_EVENT_HOOKS"
/* INSTANCE_EVENT_HOOKS */
, {
  message: function message(event) {
    return "\"".concat(event, "\" lifecycle events are no longer supported. From templates, ") + "use the \"vnode\" prefix instead of \"hook:\". For example, @".concat(event, " ") + "should be changed to @vnode-".concat(event.slice(5), ". ") + "From JavaScript, use Composition API to dynamically register lifecycle " + "hooks.";
  },
  link: "https://v3.vuejs.org/guide/migration/vnode-lifecycle-events.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_CHILDREN"
/* INSTANCE_CHILDREN */
, {
  message: "vm.$children has been removed. Consider refactoring your logic " + "to avoid relying on direct access to child components.",
  link: "https://v3.vuejs.org/guide/migration/children.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_LISTENERS"
/* INSTANCE_LISTENERS */
, {
  message: "vm.$listeners has been removed. In Vue 3, parent v-on listeners are " + "included in vm.$attrs and it is no longer necessary to separately use " + "v-on=\"$listeners\" if you are already using v-bind=\"$attrs\". " + "(Note: the Vue 3 behavior only applies if this compat config is disabled)",
  link: "https://v3.vuejs.org/guide/migration/listeners-removed.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_SCOPED_SLOTS"
/* INSTANCE_SCOPED_SLOTS */
, {
  message: "vm.$scopedSlots has been removed. Use vm.$slots instead.",
  link: "https://v3.vuejs.org/guide/migration/slots-unification.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "INSTANCE_ATTRS_CLASS_STYLE"
/* INSTANCE_ATTRS_CLASS_STYLE */
, {
  message: function message(componentName) {
    return "Component <".concat(componentName || 'Anonymous', "> has `inheritAttrs: false` but is ") + "relying on class/style fallthrough from parent. In Vue 3, class/style " + "are now included in $attrs and will no longer fallthrough when " + "inheritAttrs is false. If you are already using v-bind=\"$attrs\" on " + "component root it should render the same end result. " + "If you are binding $attrs to a non-root element and expecting " + "class/style to fallthrough on root, you will need to now manually bind " + "them on root via :class=\"$attrs.class\".";
  },
  link: "https://v3.vuejs.org/guide/migration/attrs-includes-class-style.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "OPTIONS_DATA_FN"
/* OPTIONS_DATA_FN */
, {
  message: "The \"data\" option can no longer be a plain object. " + "Always use a function.",
  link: "https://v3.vuejs.org/guide/migration/data-option.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "OPTIONS_DATA_MERGE"
/* OPTIONS_DATA_MERGE */
, {
  message: function message(key) {
    return "Detected conflicting key \"".concat(key, "\" when merging data option values. ") + "In Vue 3, data keys are merged shallowly and will override one another.";
  },
  link: "https://v3.vuejs.org/guide/migration/data-option.html#mixin-merge-behavior-change"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "OPTIONS_BEFORE_DESTROY"
/* OPTIONS_BEFORE_DESTROY */
, {
  message: "`beforeDestroy` has been renamed to `beforeUnmount`."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "OPTIONS_DESTROYED"
/* OPTIONS_DESTROYED */
, {
  message: "`destroyed` has been renamed to `unmounted`."
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "WATCH_ARRAY"
/* WATCH_ARRAY */
, {
  message: "\"watch\" option or vm.$watch on an array value will no longer " + "trigger on array mutation unless the \"deep\" option is specified. " + "If current usage is intended, you can disable the compat behavior and " + "suppress this warning with:" + "\n\n  configureCompat({ ".concat("WATCH_ARRAY"
  /* WATCH_ARRAY */
  , ": false })\n"),
  link: "https://v3.vuejs.org/guide/migration/watch.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "PROPS_DEFAULT_THIS"
/* PROPS_DEFAULT_THIS */
, {
  message: function message(key) {
    return "props default value function no longer has access to \"this\". The compat " + "build only offers access to this.$options." + "(found in prop \"".concat(key, "\")");
  },
  link: "https://v3.vuejs.org/guide/migration/props-default-this.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "CUSTOM_DIR"
/* CUSTOM_DIR */
, {
  message: function message(legacyHook, newHook) {
    return "Custom directive hook \"".concat(legacyHook, "\" has been removed. ") + "Use \"".concat(newHook, "\" instead.");
  },
  link: "https://v3.vuejs.org/guide/migration/custom-directives.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "V_FOR_REF"
/* V_FOR_REF */
, {
  message: "Ref usage on v-for no longer creates array ref values in Vue 3. " + "Consider using function refs or refactor to avoid ref usage altogether.",
  link: "https://v3.vuejs.org/guide/migration/array-refs.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "V_ON_KEYCODE_MODIFIER"
/* V_ON_KEYCODE_MODIFIER */
, {
  message: "Using keyCode as v-on modifier is no longer supported. " + "Use kebab-case key name modifiers instead.",
  link: "https://v3.vuejs.org/guide/migration/keycode-modifiers.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "ATTR_FALSE_VALUE"
/* ATTR_FALSE_VALUE */
, {
  message: function message(name) {
    return "Attribute \"".concat(name, "\" with v-bind value `false` will render ") + "".concat(name, "=\"false\" instead of removing it in Vue 3. To remove the attribute, ") + "use `null` or `undefined` instead. If the usage is intended, " + "you can disable the compat behavior and suppress this warning with:" + "\n\n  configureCompat({ ".concat("ATTR_FALSE_VALUE"
    /* ATTR_FALSE_VALUE */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/attribute-coercion.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "ATTR_ENUMERATED_COERCION"
/* ATTR_ENUMERATED_COERCION */
, {
  message: function message(name, value, coerced) {
    return "Enumerated attribute \"".concat(name, "\" with v-bind value `").concat(value, "` will ") + "".concat(value === null ? "be removed" : "render the value as-is", " instead of coercing the value to \"").concat(coerced, "\" in Vue 3. ") + "Always use explicit \"true\" or \"false\" values for enumerated attributes. " + "If the usage is intended, " + "you can disable the compat behavior and suppress this warning with:" + "\n\n  configureCompat({ ".concat("ATTR_ENUMERATED_COERCION"
    /* ATTR_ENUMERATED_COERCION */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/attribute-coercion.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "TRANSITION_CLASSES"
/* TRANSITION_CLASSES */
, {
  message: "" // this feature cannot be runtime-detected

}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "TRANSITION_GROUP_ROOT"
/* TRANSITION_GROUP_ROOT */
, {
  message: "<TransitionGroup> no longer renders a root <span> element by " + "default if no \"tag\" prop is specified. If you do not rely on the span " + "for styling, you can disable the compat behavior and suppress this " + "warning with:" + "\n\n  configureCompat({ ".concat("TRANSITION_GROUP_ROOT"
  /* TRANSITION_GROUP_ROOT */
  , ": false })\n"),
  link: "https://v3.vuejs.org/guide/migration/transition-group.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "COMPONENT_ASYNC"
/* COMPONENT_ASYNC */
, {
  message: function message(comp) {
    var name = getComponentName(comp);
    return "Async component".concat(name ? " <".concat(name, ">") : "s", " should be explicitly created via `defineAsyncComponent()` ") + "in Vue 3. Plain functions will be treated as functional components in " + "non-compat build. If you have already migrated all async component " + "usage and intend to use plain functions for functional components, " + "you can disable the compat behavior and suppress this " + "warning with:" + "\n\n  configureCompat({ ".concat("COMPONENT_ASYNC"
    /* COMPONENT_ASYNC */
    , ": false })\n");
  },
  link: "https://v3.vuejs.org/guide/migration/async-components.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "COMPONENT_FUNCTIONAL"
/* COMPONENT_FUNCTIONAL */
, {
  message: function message(comp) {
    var name = getComponentName(comp);
    return "Functional component".concat(name ? " <".concat(name, ">") : "s", " should be defined as a plain function in Vue 3. The \"functional\" ") + "option has been removed. NOTE: Before migrating to use plain " + "functions for functional components, first make sure that all async " + "components usage have been migrated and its compat behavior has " + "been disabled.";
  },
  link: "https://v3.vuejs.org/guide/migration/functional-components.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "COMPONENT_V_MODEL"
/* COMPONENT_V_MODEL */
, {
  message: function message(comp) {
    var configMsg = "opt-in to " + "Vue 3 behavior on a per-component basis with `compatConfig: { ".concat("COMPONENT_V_MODEL"
    /* COMPONENT_V_MODEL */
    , ": false }`.");

    if (comp.props && (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(comp.props) ? comp.props.includes('modelValue') : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(comp.props, 'modelValue'))) {
      return "Component delcares \"modelValue\" prop, which is Vue 3 usage, but " + "is running under Vue 2 compat v-model behavior. You can ".concat(configMsg);
    }

    return "v-model usage on component has changed in Vue 3. Component that expects " + "to work with v-model should now use the \"modelValue\" prop and emit the " + "\"update:modelValue\" event. You can update the usage and then ".concat(configMsg);
  },
  link: "https://v3.vuejs.org/guide/migration/v-model.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "RENDER_FUNCTION"
/* RENDER_FUNCTION */
, {
  message: "Vue 3's render function API has changed. " + "You can opt-in to the new API with:" + "\n\n  configureCompat({ ".concat("RENDER_FUNCTION"
  /* RENDER_FUNCTION */
  , ": false })\n") + "\n  (This can also be done per-component via the \"compatConfig\" option.)",
  link: "https://v3.vuejs.org/guide/migration/render-function-api.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "FILTERS"
/* FILTERS */
, {
  message: "filters have been removed in Vue 3. " + "The \"|\" symbol will be treated as native JavaScript bitwise OR operator. " + "Use method calls or computed properties instead.",
  link: "https://v3.vuejs.org/guide/migration/filters.html"
}), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(_deprecationData, "PRIVATE_APIS"
/* PRIVATE_APIS */
, {
  message: function message(name) {
    return "\"".concat(name, "\" is a Vue 2 private API that no longer exists in Vue 3. ") + "If you are seeing this warning only due to a dependency, you can " + "suppress this warning via { PRIVATE_APIS: 'supress-warning' }.";
  }
}), _deprecationData);
var instanceWarned = Object.create(null);
var warnCount = Object.create(null);

function warnDeprecation(key, instance) {
  if (false) {}

  instance = instance || getCurrentInstance(); // check user config

  var config = getCompatConfigForKey(key, instance);

  if (config === 'suppress-warning') {
    return;
  }

  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var dupKey = key + args.join('');
  var compId = instance && formatComponentName(instance, instance.type);

  if (compId === 'Anonymous' && instance) {
    compId = instance.uid;
  } // skip if the same warning is emitted for the same component type


  var componentDupKey = dupKey + compId;

  if (componentDupKey in instanceWarned) {
    return;
  }

  instanceWarned[componentDupKey] = true; // same warning, but different component. skip the long message and just
  // log the key and count.

  if (dupKey in warnCount) {
    warn("(deprecation ".concat(key, ") (").concat(++warnCount[dupKey] + 1, ")"));
    return;
  }

  warnCount[dupKey] = 0;
  var _deprecationData$key = deprecationData[key],
      message = _deprecationData$key.message,
      link = _deprecationData$key.link;
  warn("(deprecation ".concat(key, ") ").concat(typeof message === 'function' ? message.apply(void 0, args) : message).concat(link ? "\n  Details: ".concat(link) : ""));

  if (!isCompatEnabled(key, instance, true)) {
    console.error("^ The above deprecation's compat behavior is disabled and will likely " + "lead to runtime errors.");
  }
}

var globalCompatConfig = {
  MODE: 2
};

function getCompatConfigForKey(key, instance) {
  var instanceConfig = instance && instance.type.compatConfig;

  if (instanceConfig && key in instanceConfig) {
    return instanceConfig[key];
  }

  return globalCompatConfig[key];
}

function isCompatEnabled(key, instance) {
  var enableForBuiltIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  // skip compat for built-in components
  if (!enableForBuiltIn && instance && instance.type.__isBuiltIn) {
    return false;
  }

  var rawMode = getCompatConfigForKey('MODE', instance) || 2;
  var val = getCompatConfigForKey(key, instance);
  var mode = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(rawMode) ? rawMode(instance && instance.type) : rawMode;

  if (mode === 2) {
    return val !== false;
  } else {
    return val === true || val === 'suppress-warning';
  }
}

function emit(instance, event) {
  var props = instance.vnode.props || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];

  for (var _len3 = arguments.length, rawArgs = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
    rawArgs[_key3 - 2] = arguments[_key3];
  }

  if (true) {
    var emitsOptions = instance.emitsOptions,
        _instance$propsOption = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
        propsOptions = _instance$propsOption[0];

    if (emitsOptions) {
      if (!(event in emitsOptions) && !false) {
        if (!propsOptions || !(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(event) in propsOptions)) {
          warn("Component emitted event \"".concat(event, "\" but it is neither declared in ") + "the emits option nor as an \"".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(event), "\" prop."));
        }
      } else {
        var validator = emitsOptions[event];

        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(validator)) {
          var isValid = validator.apply(void 0, rawArgs);

          if (!isValid) {
            warn("Invalid event arguments: event validation failed for event \"".concat(event, "\"."));
          }
        }
      }
    }
  }

  var args = rawArgs;
  var isModelListener = event.startsWith('update:'); // for v-model update:xxx events, apply modifiers on args

  var modelArg = isModelListener && event.slice(7);

  if (modelArg && modelArg in props) {
    var modifiersKey = "".concat(modelArg === 'modelValue' ? 'model' : modelArg, "Modifiers");

    var _ref3 = props[modifiersKey] || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
        number = _ref3.number,
        trim = _ref3.trim;

    if (trim) {
      args = rawArgs.map(function (a) {
        return a.trim();
      });
    } else if (number) {
      args = rawArgs.map(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toNumber */ "M"]);
    }
  }

  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }

  if (true) {
    var lowerCaseEvent = event.toLowerCase();

    if (lowerCaseEvent !== event && props[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(lowerCaseEvent)]) {
      warn("Event \"".concat(lowerCaseEvent, "\" is emitted in component ") + "".concat(formatComponentName(instance, instance.type), " but the handler is registered for \"").concat(event, "\". ") + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hyphenate */ "l"])(event), "\" instead of \"").concat(event, "\"."));
    }
  }

  var handlerName;
  var handler = props[handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(event)] || // also try camelCase event handler (#2249)
  props[handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(event))]; // for v-model update:xxx events, also trigger kebab-case equivalent
  // for props passed via kebab-case

  if (!handler && isModelListener) {
    handler = props[handlerName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hyphenate */ "l"])(event))];
  }

  if (handler) {
    callWithAsyncErrorHandling(handler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }

  var onceHandler = props[handlerName + "Once"];

  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }

    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(onceHandler, instance, 6
    /* COMPONENT_EVENT_HANDLER */
    , args);
  }
}

function normalizeEmitsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.emitsCache;
  var cached = cache.get(comp);

  if (cached !== undefined) {
    return cached;
  }

  var raw = comp.emits;
  var normalized = {}; // apply mixin/extends props

  var hasExtends = false;

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(comp)) {
    var extendEmits = function extendEmits(raw) {
      var normalizedFromExtend = normalizeEmitsOptions(raw, appContext, true);

      if (normalizedFromExtend) {
        hasExtends = true;
        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(normalized, normalizedFromExtend);
      }
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }

    if (comp.extends) {
      extendEmits(comp.extends);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, null);
    return null;
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(raw)) {
    raw.forEach(function (key) {
      return normalized[key] = null;
    });
  } else {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(normalized, raw);
  }

  cache.set(comp, normalized);
  return normalized;
} // Check if an incoming prop key is a declared emit event listener.
// e.g. With `emits: { click: null }`, props named `onClick` and `onclick` are
// both considered matched listeners.


function isEmitListener(options, key) {
  if (!options || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isOn */ "v"])(key)) {
    return false;
  }

  key = key.slice(2).replace(/Once$/, '');
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(options, key[0].toLowerCase() + key.slice(1)) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(options, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hyphenate */ "l"])(key)) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(options, key);
}
/**
 * mark the current rendering instance for asset resolution (e.g.
 * resolveComponent, resolveDirective) during render
 */


var currentRenderingInstance = null;
var currentScopeId = null;
/**
 * Note: rendering calls maybe nested. The function returns the parent rendering
 * instance if present, which should be restored after the render is done:
 *
 * ```js
 * const prev = setCurrentRenderingInstance(i)
 * // ...render
 * setCurrentRenderingInstance(prev)
 * ```
 */

function setCurrentRenderingInstance(instance) {
  var prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
/**
 * Set scope id when creating hoisted vnodes.
 * @private compiler helper
 */


function pushScopeId(id) {
  currentScopeId = id;
}
/**
 * Technically we no longer need this after 3.0.8 but we need to keep the same
 * API for backwards compat w/ code generated by compilers.
 * @private
 */


function popScopeId() {
  currentScopeId = null;
}
/**
 * Only for backwards compat
 * @private
 */


var withScopeId = function withScopeId(_id) {
  return withCtx;
};
/**
 * Wrap a slot function to memoize current rendering instance
 * @private compiler helper
 */


function withCtx(fn) {
  var ctx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentRenderingInstance;
  var isNonScopedSlot // false only
  = arguments.length > 2 ? arguments[2] : undefined;
  if (!ctx) return fn; // already normalized

  if (fn._n) {
    return fn;
  }

  var renderFnWithContext = function renderFnWithContext() {
    // If a user calls a compiled slot inside a template expression (#1745), it
    // can mess up block tracking, so by default we disable block tracking and
    // force bail out when invoking a compiled slot (indicated by the ._d flag).
    // This isn't necessary if rendering a compiled `<slot>`, so we flip the
    // ._d flag off when invoking the wrapped fn inside `renderSlot`.
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }

    var prevInstance = setCurrentRenderingInstance(ctx);
    var res = fn.apply(void 0, arguments);
    setCurrentRenderingInstance(prevInstance);

    if (renderFnWithContext._d) {
      setBlockTracking(1);
    }

    if (true) {
      devtoolsComponentUpdated(ctx);
    }

    return res;
  }; // mark normalized to avoid duplicated wrapping


  renderFnWithContext._n = true; // mark this as compiled by default
  // this is used in vnode.ts -> normalizeChildren() to set the slot
  // rendering flag.

  renderFnWithContext._c = true; // disable block tracking by default

  renderFnWithContext._d = true;
  return renderFnWithContext;
}
/**
 * dev only flag to track whether $attrs was used during render.
 * If $attrs was used during render then the warning for failed attrs
 * fallthrough can be suppressed.
 */


var accessedAttrs = false;

function markAttrsAccessed() {
  accessedAttrs = true;
}

function renderComponentRoot(instance) {
  var Component = instance.type,
      vnode = instance.vnode,
      proxy = instance.proxy,
      withProxy = instance.withProxy,
      props = instance.props,
      _instance$propsOption2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
      propsOptions = _instance$propsOption2[0],
      slots = instance.slots,
      attrs = instance.attrs,
      emit = instance.emit,
      render = instance.render,
      renderCache = instance.renderCache,
      data = instance.data,
      setupState = instance.setupState,
      ctx = instance.ctx,
      inheritAttrs = instance.inheritAttrs;

  var result;
  var prev = setCurrentRenderingInstance(instance);

  if (true) {
    accessedAttrs = false;
  }

  try {
    var fallthroughAttrs;

    if (vnode.shapeFlag & 4
    /* STATEFUL_COMPONENT */
    ) {
      // withProxy is a proxy with a different `has` trap only for
      // runtime-compiled render functions using `with` block.
      var proxyToUse = withProxy || proxy;
      result = normalizeVNode(render.call(proxyToUse, proxyToUse, renderCache, props, setupState, data, ctx));
      fallthroughAttrs = attrs;
    } else {
      // functional
      var _render = Component; // in dev, mark attrs accessed if optional props (attrs === props)

      if ( true && attrs === props) {
        markAttrsAccessed();
      }

      result = normalizeVNode(_render.length > 1 ? _render(props,  true ? {
        get attrs() {
          markAttrsAccessed();
          return attrs;
        },

        slots: slots,
        emit: emit
      } : undefined) : _render(props, null
      /* we know it doesn't need it */
      ));
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    } // attr merging
    // in dev mode, comments are preserved, and it's possible for a template
    // to have comments along side the root element which makes it a fragment


    var root = result;
    var setRoot = undefined;

    if ( true && result.patchFlag > 0 && result.patchFlag & 2048
    /* DEV_ROOT_FRAGMENT */
    ) {
      ;

      var _getChildRoot = getChildRoot(result);

      var _getChildRoot2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_getChildRoot, 2);

      root = _getChildRoot2[0];
      setRoot = _getChildRoot2[1];
    }

    if (fallthroughAttrs && inheritAttrs !== false) {
      var keys = Object.keys(fallthroughAttrs);
      var _root = root,
          shapeFlag = _root.shapeFlag;

      if (keys.length) {
        if (shapeFlag & 1
        /* ELEMENT */
        || shapeFlag & 6
        /* COMPONENT */
        ) {
          if (propsOptions && keys.some(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isModelListener */ "t"])) {
            // If a v-model listener (onUpdate:xxx) has a corresponding declared
            // prop, it indicates this component expects to handle v-model and
            // it should not fallthrough.
            // related: #1543, #1643, #1989
            fallthroughAttrs = filterModelListeners(fallthroughAttrs, propsOptions);
          }

          root = cloneVNode(root, fallthroughAttrs);
        } else if ( true && !accessedAttrs && root.type !== Comment$1) {
          var allAttrs = Object.keys(attrs);
          var eventAttrs = [];
          var extraAttrs = [];

          for (var i = 0, l = allAttrs.length; i < l; i++) {
            var key = allAttrs[i];

            if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isOn */ "v"])(key)) {
              // ignore v-model handlers when they fail to fallthrough
              if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isModelListener */ "t"])(key)) {
                // remove `on`, lowercase first letter to reflect event casing
                // accurately
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }

          if (extraAttrs.length) {
            warn("Extraneous non-props attributes (" + "".concat(extraAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes.");
          }

          if (eventAttrs.length) {
            warn("Extraneous non-emits event listeners (" + "".concat(eventAttrs.join(', '), ") ") + "were passed to component but could not be automatically inherited " + "because component renders fragment or text root nodes. " + "If the listener is intended to be a component custom event listener only, " + "declare it using the \"emits\" option.");
          }
        }
      }
    }

    if (false) {} // inherit directives

    if (vnode.dirs) {
      if ( true && !isElementRoot(root)) {
        warn("Runtime directive used on component with non-element root node. " + "The directives will not function as intended.");
      }

      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    } // inherit transition data


    if (vnode.transition) {
      if ( true && !isElementRoot(root)) {
        warn("Component inside <Transition> renders non-element root node " + "that cannot be animated.");
      }

      root.transition = vnode.transition;
    }

    if ( true && setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1
    /* RENDER_FUNCTION */
    );
    result = createVNode(Comment$1);
  }

  setCurrentRenderingInstance(prev);
  return result;
}
/**
 * dev only
 * In dev mode, template root level comments are rendered, which turns the
 * template into a fragment root, but we need to locate the single element
 * root for attrs and scope id processing.
 */


var getChildRoot = function getChildRoot(vnode) {
  var rawChildren = vnode.children;
  var dynamicChildren = vnode.dynamicChildren;
  var childRoot = filterSingleRoot(rawChildren);

  if (!childRoot) {
    return [vnode, undefined];
  }

  var index = rawChildren.indexOf(childRoot);
  var dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;

  var setRoot = function setRoot(updatedRoot) {
    rawChildren[index] = updatedRoot;

    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [].concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(dynamicChildren), [updatedRoot]);
      }
    }
  };

  return [normalizeVNode(childRoot), setRoot];
};

function filterSingleRoot(children) {
  var singleRoot;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (isVNode(child)) {
      // ignore user comment
      if (child.type !== Comment$1 || child.children === 'v-if') {
        if (singleRoot) {
          // has more than 1 non-comment child, return now
          return;
        } else {
          singleRoot = child;
        }
      }
    } else {
      return;
    }
  }

  return singleRoot;
}

var getFunctionalFallthrough = function getFunctionalFallthrough(attrs) {
  var res;

  for (var key in attrs) {
    if (key === 'class' || key === 'style' || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isOn */ "v"])(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }

  return res;
};

var filterModelListeners = function filterModelListeners(attrs, props) {
  var res = {};

  for (var key in attrs) {
    if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isModelListener */ "t"])(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }

  return res;
};

var isElementRoot = function isElementRoot(vnode) {
  return vnode.shapeFlag & 6
  /* COMPONENT */
  || vnode.shapeFlag & 1
  /* ELEMENT */
  || vnode.type === Comment$1 // potential v-if branch switch
  ;
};

function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  var prevProps = prevVNode.props,
      prevChildren = prevVNode.children,
      component = prevVNode.component;
  var nextProps = nextVNode.props,
      nextChildren = nextVNode.children,
      patchFlag = nextVNode.patchFlag;
  var emits = component.emitsOptions; // Parent component's render function was hot-updated. Since this may have
  // caused the child component's slots content to have changed, we need to
  // force the child to update as well.

  if ( true && (prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  } // force child update for runtime directive or transition on component vnode.


  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }

  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024
    /* DYNAMIC_SLOTS */
    ) {
      // slot content that references values that might have changed,
      // e.g. in a v-for
      return true;
    }

    if (patchFlag & 16
    /* FULL_PROPS */
    ) {
      if (!prevProps) {
        return !!nextProps;
      } // presence of this flag indicates props are always non-null


      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8
    /* PROPS */
    ) {
      var dynamicProps = nextVNode.dynamicProps;

      for (var i = 0; i < dynamicProps.length; i++) {
        var key = dynamicProps[i];

        if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    // this path is only taken by manually written render functions
    // so presence of any children leads to a forced update
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }

    if (prevProps === nextProps) {
      return false;
    }

    if (!prevProps) {
      return !!nextProps;
    }

    if (!nextProps) {
      return true;
    }

    return hasPropsChanged(prevProps, nextProps, emits);
  }

  return false;
}

function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  var nextKeys = Object.keys(nextProps);

  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }

  for (var i = 0; i < nextKeys.length; i++) {
    var key = nextKeys[i];

    if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }

  return false;
}

function updateHOCHostEl(_ref4, el // HostNode
) {
  var vnode = _ref4.vnode,
      parent = _ref4.parent;

  while (parent && parent.subTree === vnode) {
    (vnode = parent.vnode).el = el;
    parent = parent.parent;
  }
}

var isSuspense = function isSuspense(type) {
  return type.__isSuspense;
}; // Suspense exposes a component-like API, and is treated like a component
// in the compiler, but internally it's a special built-in type that hooks
// directly into the renderer.


var SuspenseImpl = {
  name: 'Suspense',
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: true,
  process: function process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, // platform-specific impl passed from renderer
  rendererInternals) {
    if (n1 == null) {
      mountSuspense(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals);
    } else {
      patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, rendererInternals);
    }
  },
  hydrate: hydrateSuspense,
  create: createSuspenseBoundary,
  normalize: normalizeSuspenseChildren
}; // Force-casted public typing for h and TSX props inference

var Suspense = SuspenseImpl;

function triggerEvent(vnode, name) {
  var eventListener = vnode.props && vnode.props[name];

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(eventListener)) {
    eventListener();
  }
}

function mountSuspense(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals) {
  var patch = rendererInternals.p,
      createElement = rendererInternals.o.createElement;
  var hiddenContainer = createElement('div');
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals); // start mounting the content subtree in an off-dom container

  patch(null, suspense.pendingBranch = vnode.ssContent, hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds); // now check if we have encountered any async deps

  if (suspense.deps > 0) {
    // has async
    // invoke @fallback event
    triggerEvent(vnode, 'onPending');
    triggerEvent(vnode, 'onFallback'); // mount the fallback tree

    patch(null, vnode.ssFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
    isSVG, slotScopeIds);
    setActiveBranch(suspense, vnode.ssFallback);
  } else {
    // Suspense has no async deps. Just resolve.
    suspense.resolve();
  }
}

function patchSuspense(n1, n2, container, anchor, parentComponent, isSVG, slotScopeIds, optimized, _ref5) {
  var patch = _ref5.p,
      unmount = _ref5.um,
      createElement = _ref5.o.createElement;
  var suspense = n2.suspense = n1.suspense;
  suspense.vnode = n2;
  n2.el = n1.el;
  var newBranch = n2.ssContent;
  var newFallback = n2.ssFallback;
  var activeBranch = suspense.activeBranch,
      pendingBranch = suspense.pendingBranch,
      isInFallback = suspense.isInFallback,
      isHydrating = suspense.isHydrating;

  if (pendingBranch) {
    suspense.pendingBranch = newBranch;

    if (isSameVNodeType(newBranch, pendingBranch)) {
      // same root type but content may have changed.
      patch(pendingBranch, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        suspense.resolve();
      } else if (isInFallback) {
        patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, newFallback);
      }
    } else {
      // toggled before pending tree is resolved
      suspense.pendingId++;

      if (isHydrating) {
        // if toggled before hydration is finished, the current DOM tree is
        // no longer valid. set it as the active branch so it will be unmounted
        // when resolved
        suspense.isHydrating = false;
        suspense.activeBranch = pendingBranch;
      } else {
        unmount(pendingBranch, parentComponent, suspense);
      } // increment pending ID. this is used to invalidate async callbacks
      // reset suspense state


      suspense.deps = 0; // discard effects from pending branch

      suspense.effects.length = 0; // discard previous container

      suspense.hiddenContainer = createElement('div');

      if (isInFallback) {
        // already in fallback state
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        } else {
          patch(activeBranch, newFallback, container, anchor, parentComponent, null, // fallback tree will not have suspense context
          isSVG, slotScopeIds, optimized);
          setActiveBranch(suspense, newFallback);
        }
      } else if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
        // toggled "back" to current active branch
        patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized); // force resolve

        suspense.resolve(true);
      } else {
        // switched to a 3rd branch
        patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

        if (suspense.deps <= 0) {
          suspense.resolve();
        }
      }
    }
  } else {
    if (activeBranch && isSameVNodeType(newBranch, activeBranch)) {
      // root did not change, just normal patch
      patch(activeBranch, newBranch, container, anchor, parentComponent, suspense, isSVG, slotScopeIds, optimized);
      setActiveBranch(suspense, newBranch);
    } else {
      // root node toggled
      // invoke @pending event
      triggerEvent(n2, 'onPending'); // mount pending branch in off-dom container

      suspense.pendingBranch = newBranch;
      suspense.pendingId++;
      patch(null, newBranch, suspense.hiddenContainer, null, parentComponent, suspense, isSVG, slotScopeIds, optimized);

      if (suspense.deps <= 0) {
        // incoming branch has no async deps, resolve now.
        suspense.resolve();
      } else {
        var timeout = suspense.timeout,
            pendingId = suspense.pendingId;

        if (timeout > 0) {
          setTimeout(function () {
            if (suspense.pendingId === pendingId) {
              suspense.fallback(newFallback);
            }
          }, timeout);
        } else if (timeout === 0) {
          suspense.fallback(newFallback);
        }
      }
    }
  }
}

var hasWarned = false;

function createSuspenseBoundary(vnode, parent, parentComponent, container, hiddenContainer, anchor, isSVG, slotScopeIds, optimized, rendererInternals) {
  var isHydrating = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;

  /* istanbul ignore if */
  if ( true && !hasWarned) {
    hasWarned = true; // @ts-ignore `console.info` cannot be null error

    console[console.info ? 'info' : 'log']("<Suspense> is an experimental feature and its API will likely change.");
  }

  var patch = rendererInternals.p,
      _move = rendererInternals.m,
      _unmount2 = rendererInternals.um,
      _next = rendererInternals.n,
      _rendererInternals$o = rendererInternals.o,
      parentNode = _rendererInternals$o.parentNode,
      remove = _rendererInternals$o.remove;
  var timeout = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toNumber */ "M"])(vnode.props && vnode.props.timeout);
  var suspense = {
    vnode: vnode,
    parent: parent,
    parentComponent: parentComponent,
    isSVG: isSVG,
    container: container,
    hiddenContainer: hiddenContainer,
    anchor: anchor,
    deps: 0,
    pendingId: 0,
    timeout: typeof timeout === 'number' ? timeout : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: true,
    isHydrating: isHydrating,
    isUnmounted: false,
    effects: [],
    resolve: function resolve() {
      var resume = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (true) {
        if (!resume && !suspense.pendingBranch) {
          throw new Error("suspense.resolve() is called without a pending branch.");
        }

        if (suspense.isUnmounted) {
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
        }
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          pendingBranch = suspense.pendingBranch,
          pendingId = suspense.pendingId,
          effects = suspense.effects,
          parentComponent = suspense.parentComponent,
          container = suspense.container;

      if (suspense.isHydrating) {
        suspense.isHydrating = false;
      } else if (!resume) {
        var delayEnter = activeBranch && pendingBranch.transition && pendingBranch.transition.mode === 'out-in';

        if (delayEnter) {
          activeBranch.transition.afterLeave = function () {
            if (pendingId === suspense.pendingId) {
              _move(pendingBranch, container, _anchor, 0
              /* ENTER */
              );
            }
          };
        } // this is initial anchor on mount


        var _anchor = suspense.anchor; // unmount current active tree

        if (activeBranch) {
          // if the fallback tree was mounted, it may have been moved
          // as part of a parent suspense. get the latest anchor for insertion
          _anchor = _next(activeBranch);

          _unmount2(activeBranch, parentComponent, suspense, true);
        }

        if (!delayEnter) {
          // move content from off-dom container to actual container
          _move(pendingBranch, container, _anchor, 0
          /* ENTER */
          );
        }
      }

      setActiveBranch(suspense, pendingBranch);
      suspense.pendingBranch = null;
      suspense.isInFallback = false; // flush buffered effects
      // check if there is a pending parent suspense

      var parent = suspense.parent;
      var hasUnresolvedAncestor = false;

      while (parent) {
        if (parent.pendingBranch) {
          var _parent$effects;

          // found a pending parent suspense, merge buffered post jobs
          // into that parent
          (_parent$effects = parent.effects).push.apply(_parent$effects, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(effects));

          hasUnresolvedAncestor = true;
          break;
        }

        parent = parent.parent;
      } // no pending parent suspense, flush all jobs


      if (!hasUnresolvedAncestor) {
        queuePostFlushCb(effects);
      }

      suspense.effects = []; // invoke @resolve event

      triggerEvent(vnode, 'onResolve');
    },
    fallback: function fallback(fallbackVNode) {
      if (!suspense.pendingBranch) {
        return;
      }

      var vnode = suspense.vnode,
          activeBranch = suspense.activeBranch,
          parentComponent = suspense.parentComponent,
          container = suspense.container,
          isSVG = suspense.isSVG; // invoke @fallback event

      triggerEvent(vnode, 'onFallback');

      var anchor = _next(activeBranch);

      var mountFallback = function mountFallback() {
        if (!suspense.isInFallback) {
          return;
        } // mount the fallback tree


        patch(null, fallbackVNode, container, anchor, parentComponent, null, // fallback tree will not have suspense context
        isSVG, slotScopeIds, optimized);
        setActiveBranch(suspense, fallbackVNode);
      };

      var delayEnter = fallbackVNode.transition && fallbackVNode.transition.mode === 'out-in';

      if (delayEnter) {
        activeBranch.transition.afterLeave = mountFallback;
      }

      suspense.isInFallback = true; // unmount current active branch

      _unmount2(activeBranch, parentComponent, null, // no suspense so unmount hooks fire now
      true // shouldRemove
      );

      if (!delayEnter) {
        mountFallback();
      }
    },
    move: function move(container, anchor, type) {
      suspense.activeBranch && _move(suspense.activeBranch, container, anchor, type);
      suspense.container = container;
    },
    next: function next() {
      return suspense.activeBranch && _next(suspense.activeBranch);
    },
    registerDep: function registerDep(instance, setupRenderEffect) {
      var isInPendingSuspense = !!suspense.pendingBranch;

      if (isInPendingSuspense) {
        suspense.deps++;
      }

      var hydratedEl = instance.vnode.el;
      instance.asyncDep.catch(function (err) {
        handleError(err, instance, 0
        /* SETUP_FUNCTION */
        );
      }).then(function (asyncSetupResult) {
        // retry when the setup() promise resolves.
        // component may have been unmounted before resolve.
        if (instance.isUnmounted || suspense.isUnmounted || suspense.pendingId !== instance.suspenseId) {
          return;
        } // retry from this component


        instance.asyncResolved = true;
        var vnode = instance.vnode;

        if (true) {
          pushWarningContext(vnode);
        }

        handleSetupResult(instance, asyncSetupResult, false);

        if (hydratedEl) {
          // vnode may have been replaced if an update happened before the
          // async dep is resolved.
          vnode.el = hydratedEl;
        }

        var placeholder = !hydratedEl && instance.subTree.el;
        setupRenderEffect(instance, vnode, // component may have been moved before resolve.
        // if this is not a hydration, instance.subTree will be the comment
        // placeholder.
        parentNode(hydratedEl || instance.subTree.el), // anchor will not be used if this is hydration, so only need to
        // consider the comment placeholder case.
        hydratedEl ? null : _next(instance.subTree), suspense, isSVG, optimized);

        if (placeholder) {
          remove(placeholder);
        }

        updateHOCHostEl(instance, vnode.el);

        if (true) {
          popWarningContext();
        } // only decrease deps count if suspense is not already resolved


        if (isInPendingSuspense && --suspense.deps === 0) {
          suspense.resolve();
        }
      });
    },
    unmount: function unmount(parentSuspense, doRemove) {
      suspense.isUnmounted = true;

      if (suspense.activeBranch) {
        _unmount2(suspense.activeBranch, parentComponent, parentSuspense, doRemove);
      }

      if (suspense.pendingBranch) {
        _unmount2(suspense.pendingBranch, parentComponent, parentSuspense, doRemove);
      }
    }
  };
  return suspense;
}

function hydrateSuspense(node, vnode, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, rendererInternals, hydrateNode) {
  /* eslint-disable no-restricted-globals */
  var suspense = vnode.suspense = createSuspenseBoundary(vnode, parentSuspense, parentComponent, node.parentNode, document.createElement('div'), null, isSVG, slotScopeIds, optimized, rendererInternals, true
  /* hydrating */
  ); // there are two possible scenarios for server-rendered suspense:
  // - success: ssr content should be fully resolved
  // - failure: ssr content should be the fallback branch.
  // however, on the client we don't really know if it has failed or not
  // attempt to hydrate the DOM assuming it has succeeded, but we still
  // need to construct a suspense boundary first

  var result = hydrateNode(node, suspense.pendingBranch = vnode.ssContent, parentComponent, suspense, slotScopeIds, optimized);

  if (suspense.deps === 0) {
    suspense.resolve();
  }

  return result;
  /* eslint-enable no-restricted-globals */
}

function normalizeSuspenseChildren(vnode) {
  var shapeFlag = vnode.shapeFlag,
      children = vnode.children;
  var isSlotChildren = shapeFlag & 32
  /* SLOTS_CHILDREN */
  ;
  vnode.ssContent = normalizeSuspenseSlot(isSlotChildren ? children.default : children);
  vnode.ssFallback = isSlotChildren ? normalizeSuspenseSlot(children.fallback) : createVNode(Comment);
}

function normalizeSuspenseSlot(s) {
  var block;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(s)) {
    var isCompiledSlot = s._c;

    if (isCompiledSlot) {
      // disableTracking: false
      // allow block tracking for compiled slots
      // (see ./componentRenderContext.ts)
      s._d = false;
      openBlock();
    }

    s = s();

    if (isCompiledSlot) {
      s._d = true;
      block = currentBlock;
      closeBlock();
    }
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(s)) {
    var singleChild = filterSingleRoot(s);

    if ( true && !singleChild) {
      warn("<Suspense> slots expect a single root node.");
    }

    s = singleChild;
  }

  s = normalizeVNode(s);

  if (block) {
    s.dynamicChildren = block.filter(function (c) {
      return c !== s;
    });
  }

  return s;
}

function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(fn)) {
      var _suspense$effects;

      (_suspense$effects = suspense.effects).push.apply(_suspense$effects, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(fn));
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}

function setActiveBranch(suspense, branch) {
  suspense.activeBranch = branch;
  var vnode = suspense.vnode,
      parentComponent = suspense.parentComponent;
  var el = vnode.el = branch.el; // in case suspense is the root node of a component,
  // recursively update the HOC el

  if (parentComponent && parentComponent.subTree === vnode) {
    parentComponent.vnode.el = el;
    updateHOCHostEl(parentComponent, el);
  }
}

function provide(key, value) {
  if (!currentInstance) {
    if (true) {
      warn("provide() can only be used inside setup().");
    }
  } else {
    var provides = currentInstance.provides; // by default an instance inherits its parent's provides object
    // but when it needs to provide values of its own, it creates its
    // own provides object using parent provides object as prototype.
    // this way in `inject` we can simply look up injections from direct
    // parent and let the prototype chain do the work.

    var parentProvides = currentInstance.parent && currentInstance.parent.provides;

    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    } // TS doesn't allow symbol as index type


    provides[key] = value;
  }
}

function inject(key, defaultValue) {
  var treatDefaultAsFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // fallback to `currentRenderingInstance` so that this can be called in
  // a functional component
  var instance = currentInstance || currentRenderingInstance;

  if (instance) {
    // #2400
    // to support `app.use` plugins,
    // fallback to appContext's `provides` if the intance is at root
    var provides = instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides;

    if (provides && key in provides) {
      // TS doesn't allow symbol as index type
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(defaultValue) ? defaultValue.call(instance.proxy) : defaultValue;
    } else if (true) {
      warn("injection \"".concat(String(key), "\" not found."));
    }
  } else if (true) {
    warn("inject() can only be used inside setup() or functional components.");
  }
} // Simple effect.


function watchEffect(effect, options) {
  return doWatch(effect, null, options);
} // initial value for watchers to trigger on undefined initial values


var INITIAL_WATCHER_VALUE = {}; // implementation

function watch(source, cb, options) {
  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(cb)) {
    warn("`watch(fn, options?)` signature has been moved to a separate API. " + "Use `watchEffect(fn, options?)` instead. `watch` now only " + "supports `watch(source, cb, options?) signature.");
  }

  return doWatch(source, cb, options);
}

function doWatch(source, cb) {
  var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
      immediate = _ref6.immediate,
      deep = _ref6.deep,
      flush = _ref6.flush,
      onTrack = _ref6.onTrack,
      onTrigger = _ref6.onTrigger;

  var instance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : currentInstance;

  if ( true && !cb) {
    if (immediate !== undefined) {
      warn("watch() \"immediate\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }

    if (deep !== undefined) {
      warn("watch() \"deep\" option is only respected when using the " + "watch(source, callback, options?) signature.");
    }
  }

  var warnInvalidSource = function warnInvalidSource(s) {
    warn("Invalid watch source: ", s, "A watch source can only be a getter/effect function, a ref, " + "a reactive object, or an array of these types.");
  };

  var getter;
  var forceTrigger = false;
  var isMultiSource = false;

  if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(source)) {
    getter = function getter() {
      return source.value;
    };

    forceTrigger = !!source._shallow;
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isReactive */ "d"])(source)) {
    getter = function getter() {
      return source;
    };

    deep = true;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(source)) {
    isMultiSource = true;
    forceTrigger = source.some(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isReactive */ "d"]);

    getter = function getter() {
      return source.map(function (s) {
        if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(s)) {
          return s.value;
        } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isReactive */ "d"])(s)) {
          return traverse(s);
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(s)) {
          return callWithErrorHandling(s, instance, 2
          /* WATCH_GETTER */
          );
        } else {
           true && warnInvalidSource(s);
        }
      });
    };
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(source)) {
    if (cb) {
      // getter with cb
      getter = function getter() {
        return callWithErrorHandling(source, instance, 2
        /* WATCH_GETTER */
        );
      };
    } else {
      // no cb -> simple effect
      getter = function getter() {
        if (instance && instance.isUnmounted) {
          return;
        }

        if (cleanup) {
          cleanup();
        }

        return callWithAsyncErrorHandling(source, instance, 3
        /* WATCH_CALLBACK */
        , [onInvalidate]);
      };
    }
  } else {
    getter = _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"];
     true && warnInvalidSource(source);
  }

  if (cb && deep) {
    var baseGetter = getter;

    getter = function getter() {
      return traverse(baseGetter());
    };
  }

  var cleanup;

  var onInvalidate = function onInvalidate(fn) {
    cleanup = runner.options.onStop = function () {
      callWithErrorHandling(fn, instance, 4
      /* WATCH_CLEANUP */
      );
    };
  };

  var oldValue = isMultiSource ? [] : INITIAL_WATCHER_VALUE;

  var job = function job() {
    if (!runner.active) {
      return;
    }

    if (cb) {
      // watch(source, cb)
      var newValue = runner();

      if (deep || forceTrigger || (isMultiSource ? newValue.some(function (v, i) {
        return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasChanged */ "j"])(v, oldValue[i]);
      }) : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasChanged */ "j"])(newValue, oldValue)) || false) {
        // cleanup before running cb again
        if (cleanup) {
          cleanup();
        }

        callWithAsyncErrorHandling(cb, instance, 3
        /* WATCH_CALLBACK */
        , [newValue, // pass undefined as the old value when it's changed for the first time
        oldValue === INITIAL_WATCHER_VALUE ? undefined : oldValue, onInvalidate]);
        oldValue = newValue;
      }
    } else {
      // watchEffect
      runner();
    }
  }; // important: mark the job as a watcher callback so that scheduler knows
  // it is allowed to self-trigger (#1727)


  job.allowRecurse = !!cb;
  var scheduler;

  if (flush === 'sync') {
    scheduler = job; // the scheduler function gets called directly
  } else if (flush === 'post') {
    scheduler = function scheduler() {
      return queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else {
    // default: 'pre'
    scheduler = function scheduler() {
      if (!instance || instance.isMounted) {
        queuePreFlushCb(job);
      } else {
        // with 'pre' option, the first call must happen before
        // the component is mounted so it is called synchronously.
        job();
      }
    };
  }

  var runner = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* effect */ "b"])(getter, {
    lazy: true,
    onTrack: onTrack,
    onTrigger: onTrigger,
    scheduler: scheduler
  });
  recordInstanceBoundEffect(runner, instance); // initial run

  if (cb) {
    if (immediate) {
      job();
    } else {
      oldValue = runner();
    }
  } else if (flush === 'post') {
    queuePostRenderEffect(runner, instance && instance.suspense);
  } else {
    runner();
  }

  return function () {
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* stop */ "q"])(runner);

    if (instance) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* remove */ "J"])(instance.effects, runner);
    }
  };
} // this.$watch


function instanceWatch(source, value, options) {
  var publicThis = this.proxy;
  var getter = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(source) ? source.includes('.') ? createPathGetter(publicThis, source) : function () {
    return publicThis[source];
  } : source.bind(publicThis, publicThis);
  var cb;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }

  return doWatch(getter, cb.bind(publicThis), options, this);
}

function createPathGetter(ctx, path) {
  var segments = path.split('.');
  return function () {
    var cur = ctx;

    for (var i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }

    return cur;
  };
}

function traverse(value) {
  var seen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Set();

  if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(value) || value["__v_skip"
  /* SKIP */
  ]) {
    return value;
  }

  seen = seen || new Set();

  if (seen.has(value)) {
    return value;
  }

  seen.add(value);

  if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(value)) {
    traverse(value.value, seen);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isSet */ "A"])(value) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isMap */ "s"])(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isPlainObject */ "w"])(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
}

function useTransitionState() {
  var state = {
    isMounted: false,
    isLeaving: false,
    isUnmounting: false,
    leavingVNodes: new Map()
  };
  onMounted(function () {
    state.isMounted = true;
  });
  onBeforeUnmount(function () {
    state.isUnmounting = true;
  });
  return state;
}

var TransitionHookValidator = [Function, Array];
var BaseTransitionImpl = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  },
  setup: function setup(props, _ref7) {
    var slots = _ref7.slots;
    var instance = getCurrentInstance();
    var state = useTransitionState();
    var prevTransitionKey;
    return function () {
      var children = slots.default && getTransitionRawChildren(slots.default(), true);

      if (!children || !children.length) {
        return;
      } // warn multiple elements


      if ( true && children.length > 1) {
        warn('<transition> can only be used on a single element or component. Use ' + '<transition-group> for lists.');
      } // there's no need to track reactivity for these props so use the raw
      // props for a bit better perf


      var rawProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(props);
      var mode = rawProps.mode; // check mode

      if ( true && mode && !['in-out', 'out-in', 'default'].includes(mode)) {
        warn("invalid <transition> mode: ".concat(mode));
      } // at this point children has a guaranteed length of 1.


      var child = children[0];

      if (state.isLeaving) {
        return emptyPlaceholder(child);
      } // in the case of <transition><keep-alive/></transition>, we need to
      // compare the type of the kept-alive children.


      var innerChild = getKeepAliveChild(child);

      if (!innerChild) {
        return emptyPlaceholder(child);
      }

      var enterHooks = resolveTransitionHooks(innerChild, rawProps, state, instance);
      setTransitionHooks(innerChild, enterHooks);
      var oldChild = instance.subTree;
      var oldInnerChild = oldChild && getKeepAliveChild(oldChild);
      var transitionKeyChanged = false;
      var getTransitionKey = innerChild.type.getTransitionKey;

      if (getTransitionKey) {
        var key = getTransitionKey();

        if (prevTransitionKey === undefined) {
          prevTransitionKey = key;
        } else if (key !== prevTransitionKey) {
          prevTransitionKey = key;
          transitionKeyChanged = true;
        }
      } // handle mode


      if (oldInnerChild && oldInnerChild.type !== Comment$1 && (!isSameVNodeType(innerChild, oldInnerChild) || transitionKeyChanged)) {
        var leavingHooks = resolveTransitionHooks(oldInnerChild, rawProps, state, instance); // update old tree's hooks in case of dynamic transition

        setTransitionHooks(oldInnerChild, leavingHooks); // switching between different views

        if (mode === 'out-in') {
          state.isLeaving = true; // return placeholder node and queue update when leave finishes

          leavingHooks.afterLeave = function () {
            state.isLeaving = false;
            instance.update();
          };

          return emptyPlaceholder(child);
        } else if (mode === 'in-out' && innerChild.type !== Comment$1) {
          leavingHooks.delayLeave = function (el, earlyRemove, delayedLeave) {
            var leavingVNodesCache = getLeavingNodesForType(state, oldInnerChild);
            leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild; // early removal callback

            el._leaveCb = function () {
              earlyRemove();
              el._leaveCb = undefined;
              delete enterHooks.delayedLeave;
            };

            enterHooks.delayedLeave = delayedLeave;
          };
        }
      }

      return child;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var BaseTransition = BaseTransitionImpl;

function getLeavingNodesForType(state, vnode) {
  var leavingVNodes = state.leavingVNodes;
  var leavingVNodesCache = leavingVNodes.get(vnode.type);

  if (!leavingVNodesCache) {
    leavingVNodesCache = Object.create(null);
    leavingVNodes.set(vnode.type, leavingVNodesCache);
  }

  return leavingVNodesCache;
} // The transition hooks are attached to the vnode as vnode.transition
// and will be called at appropriate timing in the renderer.


function resolveTransitionHooks(vnode, props, state, instance) {
  var appear = props.appear,
      mode = props.mode,
      _props$persisted = props.persisted,
      persisted = _props$persisted === void 0 ? false : _props$persisted,
      onBeforeEnter = props.onBeforeEnter,
      onEnter = props.onEnter,
      onAfterEnter = props.onAfterEnter,
      onEnterCancelled = props.onEnterCancelled,
      onBeforeLeave = props.onBeforeLeave,
      onLeave = props.onLeave,
      onAfterLeave = props.onAfterLeave,
      onLeaveCancelled = props.onLeaveCancelled,
      onBeforeAppear = props.onBeforeAppear,
      onAppear = props.onAppear,
      onAfterAppear = props.onAfterAppear,
      onAppearCancelled = props.onAppearCancelled;
  var key = String(vnode.key);
  var leavingVNodesCache = getLeavingNodesForType(state, vnode);

  var callHook = function callHook(hook, args) {
    hook && callWithAsyncErrorHandling(hook, instance, 9
    /* TRANSITION_HOOK */
    , args);
  };

  var hooks = {
    mode: mode,
    persisted: persisted,
    beforeEnter: function beforeEnter(el) {
      var hook = onBeforeEnter;

      if (!state.isMounted) {
        if (appear) {
          hook = onBeforeAppear || onBeforeEnter;
        } else {
          return;
        }
      } // for same element (v-show)


      if (el._leaveCb) {
        el._leaveCb(true
        /* cancelled */
        );
      } // for toggled element with same key (v-if)


      var leavingVNode = leavingVNodesCache[key];

      if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el._leaveCb) {
        // force early removal (not cancelled)
        leavingVNode.el._leaveCb();
      }

      callHook(hook, [el]);
    },
    enter: function enter(el) {
      var hook = onEnter;
      var afterHook = onAfterEnter;
      var cancelHook = onEnterCancelled;

      if (!state.isMounted) {
        if (appear) {
          hook = onAppear || onEnter;
          afterHook = onAfterAppear || onAfterEnter;
          cancelHook = onAppearCancelled || onEnterCancelled;
        } else {
          return;
        }
      }

      var called = false;

      var done = el._enterCb = function (cancelled) {
        if (called) return;
        called = true;

        if (cancelled) {
          callHook(cancelHook, [el]);
        } else {
          callHook(afterHook, [el]);
        }

        if (hooks.delayedLeave) {
          hooks.delayedLeave();
        }

        el._enterCb = undefined;
      };

      if (hook) {
        hook(el, done);

        if (hook.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    leave: function leave(el, remove) {
      var key = String(vnode.key);

      if (el._enterCb) {
        el._enterCb(true
        /* cancelled */
        );
      }

      if (state.isUnmounting) {
        return remove();
      }

      callHook(onBeforeLeave, [el]);
      var called = false;

      var done = el._leaveCb = function (cancelled) {
        if (called) return;
        called = true;
        remove();

        if (cancelled) {
          callHook(onLeaveCancelled, [el]);
        } else {
          callHook(onAfterLeave, [el]);
        }

        el._leaveCb = undefined;

        if (leavingVNodesCache[key] === vnode) {
          delete leavingVNodesCache[key];
        }
      };

      leavingVNodesCache[key] = vnode;

      if (onLeave) {
        onLeave(el, done);

        if (onLeave.length <= 1) {
          done();
        }
      } else {
        done();
      }
    },
    clone: function clone(vnode) {
      return resolveTransitionHooks(vnode, props, state, instance);
    }
  };
  return hooks;
} // the placeholder really only handles one special case: KeepAlive
// in the case of a KeepAlive in a leave phase we need to return a KeepAlive
// placeholder with empty content to avoid the KeepAlive instance from being
// unmounted.


function emptyPlaceholder(vnode) {
  if (isKeepAlive(vnode)) {
    vnode = cloneVNode(vnode);
    vnode.children = null;
    return vnode;
  }
}

function getKeepAliveChild(vnode) {
  return isKeepAlive(vnode) ? vnode.children ? vnode.children[0] : undefined : vnode;
}

function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6
  /* COMPONENT */
  && vnode.component) {
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128
  /* SUSPENSE */
  ) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}

function getTransitionRawChildren(children) {
  var keepComment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var ret = [];
  var keyedFragmentCount = 0;

  for (var i = 0; i < children.length; i++) {
    var child = children[i]; // handle fragment children case, e.g. v-for

    if (child.type === Fragment) {
      if (child.patchFlag & 128
      /* KEYED_FRAGMENT */
      ) keyedFragmentCount++;
      ret = ret.concat(getTransitionRawChildren(child.children, keepComment));
    } // comment placeholders should be skipped, e.g. v-if
    else if (keepComment || child.type !== Comment$1) {
      ret.push(child);
    }
  } // #1126 if a transition children list contains multiple sub fragments, these
  // fragments will be merged into a flat children array. Since each v-for
  // fragment may contain different static bindings inside, we need to de-op
  // these children to force full diffs to ensure correct behavior.


  if (keyedFragmentCount > 1) {
    for (var _i = 0; _i < ret.length; _i++) {
      ret[_i].patchFlag = -2
      /* BAIL */
      ;
    }
  }

  return ret;
} // implementation, close to no-op


function defineComponent(options) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(options) ? {
    setup: options,
    name: options.name
  } : options;
}

var isAsyncWrapper = function isAsyncWrapper(i) {
  return !!i.type.__asyncLoader;
};

function defineAsyncComponent(source) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(source)) {
    source = {
      loader: source
    };
  }

  var _source = source,
      loader = _source.loader,
      loadingComponent = _source.loadingComponent,
      errorComponent = _source.errorComponent,
      _source$delay = _source.delay,
      delay = _source$delay === void 0 ? 200 : _source$delay,
      timeout = _source.timeout,
      _source$suspensible = _source.suspensible,
      suspensible = _source$suspensible === void 0 ? true : _source$suspensible,
      userOnError = _source.onError;
  var pendingRequest = null;
  var resolvedComp;
  var retries = 0;

  var retry = function retry() {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function load() {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch(function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function userRetry() {
            return resolve(retry());
          };

          var userFail = function userFail() {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }

      if ( true && !comp) {
        warn("Async component loader resolved to undefined. " + "If you are using retry(), make sure to return its return value.");
      } // interop module default


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
      }

      if ( true && comp && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(comp) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(comp)) {
        throw new Error("Invalid async component load result: ".concat(comp));
      }

      resolvedComp = comp;
      return comp;
    }));
  };

  return defineComponent({
    name: 'AsyncComponentWrapper',
    __asyncLoader: load,

    get __asyncResolved() {
      return resolvedComp;
    },

    setup: function setup() {
      var instance = currentInstance; // already resolved

      if (resolvedComp) {
        return function () {
          return createInnerComp(resolvedComp, instance);
        };
      }

      var onError = function onError(err) {
        pendingRequest = null;
        handleError(err, instance, 13
        /* ASYNC_COMPONENT_LOADER */
        , !errorComponent
        /* do not throw in dev if user provided error component */
        );
      }; // suspense-controlled or SSR.


      if (suspensible && instance.suspense || false) {
        return load().then(function (comp) {
          return function () {
            return createInnerComp(comp, instance);
          };
        }).catch(function (err) {
          onError(err);
          return function () {
            return errorComponent ? createVNode(errorComponent, {
              error: err
            }) : null;
          };
        });
      }

      var loaded = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* ref */ "l"])(false);
      var error = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* ref */ "l"])();
      var delayed = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* ref */ "l"])(!!delay);

      if (delay) {
        setTimeout(function () {
          delayed.value = false;
        }, delay);
      }

      if (timeout != null) {
        setTimeout(function () {
          if (!loaded.value && !error.value) {
            var err = new Error("Async component timed out after ".concat(timeout, "ms."));
            onError(err);
            error.value = err;
          }
        }, timeout);
      }

      load().then(function () {
        loaded.value = true;

        if (instance.parent && isKeepAlive(instance.parent.vnode)) {
          // parent is keep-alive, force update so the loaded component's
          // name is taken into account
          queueJob(instance.parent.update);
        }
      }).catch(function (err) {
        onError(err);
        error.value = err;
      });
      return function () {
        if (loaded.value && resolvedComp) {
          return createInnerComp(resolvedComp, instance);
        } else if (error.value && errorComponent) {
          return createVNode(errorComponent, {
            error: error.value
          });
        } else if (loadingComponent && !delayed.value) {
          return createVNode(loadingComponent);
        }
      };
    }
  });
}

function createInnerComp(comp, _ref8) {
  var _ref8$vnode = _ref8.vnode,
      ref = _ref8$vnode.ref,
      props = _ref8$vnode.props,
      children = _ref8$vnode.children;
  var vnode = createVNode(comp, props, children); // ensure inner component inherits the async wrapper's ref owner

  vnode.ref = ref;
  return vnode;
}

var isKeepAlive = function isKeepAlive(vnode) {
  return vnode.type.__isKeepAlive;
};

var KeepAliveImpl = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: true,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup: function setup(props, _ref9) {
    var slots = _ref9.slots;
    var instance = getCurrentInstance(); // KeepAlive communicates with the instantiated renderer via the
    // ctx where the renderer passes in its internals,
    // and the KeepAlive instance exposes activate/deactivate implementations.
    // The whole point of this is to avoid importing KeepAlive directly in the
    // renderer to facilitate tree-shaking.

    var sharedContext = instance.ctx; // if the internal renderer is not registered, it indicates that this is server-side rendering,
    // for KeepAlive, we just need to render its children

    if (!sharedContext.renderer) {
      return slots.default;
    }

    var cache = new Map();
    var keys = new Set();
    var current = null;

    if (true) {
      instance.__v_cache = cache;
    }

    var parentSuspense = instance.suspense;
    var _sharedContext$render = sharedContext.renderer,
        patch = _sharedContext$render.p,
        move = _sharedContext$render.m,
        _unmount = _sharedContext$render.um,
        createElement = _sharedContext$render.o.createElement;
    var storageContainer = createElement('div');

    sharedContext.activate = function (vnode, container, anchor, isSVG, optimized) {
      var instance = vnode.component;
      move(vnode, container, anchor, 0
      /* ENTER */
      , parentSuspense); // in case props have changed

      patch(instance.vnode, vnode, container, anchor, instance, parentSuspense, isSVG, vnode.slotScopeIds, optimized);
      queuePostRenderEffect(function () {
        instance.isDeactivated = false;

        if (instance.a) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(instance.a);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeMounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    sharedContext.deactivate = function (vnode) {
      var instance = vnode.component;
      move(vnode, storageContainer, null, 1
      /* LEAVE */
      , parentSuspense);
      queuePostRenderEffect(function () {
        if (instance.da) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(instance.da);
        }

        var vnodeHook = vnode.props && vnode.props.onVnodeUnmounted;

        if (vnodeHook) {
          invokeVNodeHook(vnodeHook, instance.parent, vnode);
        }

        instance.isDeactivated = true;
      }, parentSuspense);

      if (true) {
        // Update components tree
        devtoolsComponentAdded(instance);
      }
    };

    function unmount(vnode) {
      // reset the shapeFlag so it can be properly unmounted
      resetShapeFlag(vnode);

      _unmount(vnode, instance, parentSuspense);
    }

    function pruneCache(filter) {
      cache.forEach(function (vnode, key) {
        var name = getComponentName(vnode.type);

        if (name && (!filter || !filter(name))) {
          pruneCacheEntry(key);
        }
      });
    }

    function pruneCacheEntry(key) {
      var cached = cache.get(key);

      if (!current || cached.type !== current.type) {
        unmount(cached);
      } else if (current) {
        // current active instance should no longer be kept-alive.
        // we can't unmount it now but it might be later, so reset its flag now.
        resetShapeFlag(current);
      }

      cache.delete(key);
      keys.delete(key);
    } // prune cache on include/exclude prop change


    watch(function () {
      return [props.include, props.exclude];
    }, function (_ref10) {
      var _ref11 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref10, 2),
          include = _ref11[0],
          exclude = _ref11[1];

      include && pruneCache(function (name) {
        return matches(include, name);
      });
      exclude && pruneCache(function (name) {
        return !matches(exclude, name);
      });
    }, // prune post-render after `current` has been updated
    {
      flush: 'post',
      deep: true
    }); // cache sub tree after render

    var pendingCacheKey = null;

    var cacheSubtree = function cacheSubtree() {
      // fix #1621, the pendingCacheKey could be 0
      if (pendingCacheKey != null) {
        cache.set(pendingCacheKey, getInnerChild(instance.subTree));
      }
    };

    onMounted(cacheSubtree);
    onUpdated(cacheSubtree);
    onBeforeUnmount(function () {
      cache.forEach(function (cached) {
        var subTree = instance.subTree,
            suspense = instance.suspense;
        var vnode = getInnerChild(subTree);

        if (cached.type === vnode.type) {
          // current instance will be unmounted as part of keep-alive's unmount
          resetShapeFlag(vnode); // but invoke its deactivated hook here

          var da = vnode.component.da;
          da && queuePostRenderEffect(da, suspense);
          return;
        }

        unmount(cached);
      });
    });
    return function () {
      pendingCacheKey = null;

      if (!slots.default) {
        return null;
      }

      var children = slots.default();
      var rawVNode = children[0];

      if (children.length > 1) {
        if (true) {
          warn("KeepAlive should contain exactly one component child.");
        }

        current = null;
        return children;
      } else if (!isVNode(rawVNode) || !(rawVNode.shapeFlag & 4
      /* STATEFUL_COMPONENT */
      ) && !(rawVNode.shapeFlag & 128
      /* SUSPENSE */
      )) {
        current = null;
        return rawVNode;
      }

      var vnode = getInnerChild(rawVNode);
      var comp = vnode.type; // for async components, name check should be based in its loaded
      // inner component if available

      var name = getComponentName(isAsyncWrapper(vnode) ? vnode.type.__asyncResolved || {} : comp);
      var include = props.include,
          exclude = props.exclude,
          max = props.max;

      if (include && (!name || !matches(include, name)) || exclude && name && matches(exclude, name)) {
        current = vnode;
        return rawVNode;
      }

      var key = vnode.key == null ? comp : vnode.key;
      var cachedVNode = cache.get(key); // clone vnode if it's reused because we are going to mutate it

      if (vnode.el) {
        vnode = cloneVNode(vnode);

        if (rawVNode.shapeFlag & 128
        /* SUSPENSE */
        ) {
          rawVNode.ssContent = vnode;
        }
      } // #1513 it's possible for the returned vnode to be cloned due to attr
      // fallthrough or scopeId, so the vnode here may not be the final vnode
      // that is mounted. Instead of caching it directly, we store the pending
      // key and cache `instance.subTree` (the normalized vnode) in
      // beforeMount/beforeUpdate hooks.


      pendingCacheKey = key;

      if (cachedVNode) {
        // copy over mounted state
        vnode.el = cachedVNode.el;
        vnode.component = cachedVNode.component;

        if (vnode.transition) {
          // recursively update transition hooks on subTree
          setTransitionHooks(vnode, vnode.transition);
        } // avoid vnode being mounted as fresh


        vnode.shapeFlag |= 512
        /* COMPONENT_KEPT_ALIVE */
        ; // make this key the freshest

        keys.delete(key);
        keys.add(key);
      } else {
        keys.add(key); // prune oldest entry

        if (max && keys.size > parseInt(max, 10)) {
          pruneCacheEntry(keys.values().next().value);
        }
      } // avoid vnode being unmounted


      vnode.shapeFlag |= 256
      /* COMPONENT_SHOULD_KEEP_ALIVE */
      ;
      current = vnode;
      return rawVNode;
    };
  }
}; // export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files

var KeepAlive = KeepAliveImpl;

function matches(pattern, name) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(pattern)) {
    return pattern.some(function (p) {
      return matches(p, name);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(pattern)) {
    return pattern.split(',').indexOf(name) > -1;
  } else if (pattern.test) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a"
  /* ACTIVATED */
  , target);
}

function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da"
  /* DEACTIVATED */
  , target);
}

function registerKeepAliveHook(hook, type) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;

  // cache the deactivate branch check wrapper for injected hooks so the same
  // hook can be properly deduped by the scheduler. "__wdc" stands for "with
  // deactivation check".
  var wrappedHook = hook.__wdc || (hook.__wdc = function () {
    // only fire the hook if the target instance is NOT in a deactivated branch.
    var current = target;

    while (current) {
      if (current.isDeactivated) {
        return;
      }

      current = current.parent;
    }

    hook();
  });

  injectHook(type, wrappedHook, target); // In addition to registering it on the target instance, we walk up the parent
  // chain and register it on all ancestor instances that are keep-alive roots.
  // This avoids the need to walk the entire component tree when invoking these
  // hooks, and more importantly, avoids the need to track child components in
  // arrays.

  if (target) {
    var current = target.parent;

    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }

      current = current.parent;
    }
  }
}

function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  // injectHook wraps the original for error handling, so make sure to remove
  // the wrapped version.
  var injected = injectHook(type, hook, keepAliveRoot, true
  /* prepend */
  );
  onUnmounted(function () {
    Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* remove */ "J"])(keepAliveRoot[type], injected);
  }, target);
}

function resetShapeFlag(vnode) {
  var shapeFlag = vnode.shapeFlag;

  if (shapeFlag & 256
  /* COMPONENT_SHOULD_KEEP_ALIVE */
  ) {
    shapeFlag -= 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ;
  }

  if (shapeFlag & 512
  /* COMPONENT_KEPT_ALIVE */
  ) {
    shapeFlag -= 512
    /* COMPONENT_KEPT_ALIVE */
    ;
  }

  vnode.shapeFlag = shapeFlag;
}

function getInnerChild(vnode) {
  return vnode.shapeFlag & 128
  /* SUSPENSE */
  ? vnode.ssContent : vnode;
}

function injectHook(type, hook) {
  var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : currentInstance;
  var prepend = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (target) {
    var hooks = target[type] || (target[type] = []); // cache the error handling wrapper for injected hooks so the same hook
    // can be properly deduped by the scheduler. "__weh" stands for "with error
    // handling".

    var wrappedHook = hook.__weh || (hook.__weh = function () {
      if (target.isUnmounted) {
        return;
      } // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.


      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* pauseTracking */ "h"])(); // Set currentInstance during hook invocation.
      // This assumes the hook does not synchronously trigger other hooks, which
      // can only be false when the user does something really funky.

      setCurrentInstance(target);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      var res = callWithAsyncErrorHandling(hook, target, type, args);
      setCurrentInstance(null);
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* resetTracking */ "m"])();
      return res;
    });

    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }

    return wrappedHook;
  } else if (true) {
    var apiName = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(ErrorTypeStrings[type].replace(/ hook$/, ''));
    warn("".concat(apiName, " is called when there is no active component instance to be ") + "associated with. " + "Lifecycle injection APIs can only be used during execution of setup()." + (" If you are using async setup(), make sure to register lifecycle " + "hooks before the first await statement."));
  }
}

var createHook = function createHook(lifecycle) {
  return function (hook) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
    return (// post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
      (!isInSSRComponentSetup || lifecycle === "sp"
      /* SERVER_PREFETCH */
      ) && injectHook(lifecycle, hook, target)
    );
  };
};

var onBeforeMount = createHook("bm"
/* BEFORE_MOUNT */
);
var onMounted = createHook("m"
/* MOUNTED */
);
var onBeforeUpdate = createHook("bu"
/* BEFORE_UPDATE */
);
var onUpdated = createHook("u"
/* UPDATED */
);
var onBeforeUnmount = createHook("bum"
/* BEFORE_UNMOUNT */
);
var onUnmounted = createHook("um"
/* UNMOUNTED */
);
var onServerPrefetch = createHook("sp"
/* SERVER_PREFETCH */
);
var onRenderTriggered = createHook("rtg"
/* RENDER_TRIGGERED */
);
var onRenderTracked = createHook("rtc"
/* RENDER_TRACKED */
);

function onErrorCaptured(hook) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;
  injectHook("ec"
  /* ERROR_CAPTURED */
  , hook, target);
}

function createDuplicateChecker() {
  var cache = Object.create(null);
  return function (type, key) {
    if (cache[key]) {
      warn("".concat(type, " property \"").concat(key, "\" is already defined in ").concat(cache[key], "."));
    } else {
      cache[key] = type;
    }
  };
}

var shouldCacheAccess = true;

function applyOptions(instance) {
  var options = resolveMergedOptions(instance);
  var publicThis = instance.proxy;
  var ctx = instance.ctx; // do not cache property access on public proxy during state initialization

  shouldCacheAccess = false; // call beforeCreate first before accessing other options since
  // the hook may mutate resolved options (#2791)

  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc"
    /* BEFORE_CREATE */
    );
  }

  var dataOptions = options.data,
      computedOptions = options.computed,
      methods = options.methods,
      watchOptions = options.watch,
      provideOptions = options.provide,
      injectOptions = options.inject,
      created = options.created,
      beforeMount = options.beforeMount,
      mounted = options.mounted,
      beforeUpdate = options.beforeUpdate,
      updated = options.updated,
      activated = options.activated,
      deactivated = options.deactivated,
      beforeDestroy = options.beforeDestroy,
      beforeUnmount = options.beforeUnmount,
      destroyed = options.destroyed,
      unmounted = options.unmounted,
      render = options.render,
      renderTracked = options.renderTracked,
      renderTriggered = options.renderTriggered,
      errorCaptured = options.errorCaptured,
      serverPrefetch = options.serverPrefetch,
      expose = options.expose,
      inheritAttrs = options.inheritAttrs,
      components = options.components,
      directives = options.directives,
      filters = options.filters;
  var checkDuplicateProperties =  true ? createDuplicateChecker() : undefined;

  if (true) {
    var _instance$propsOption3 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
        propsOptions = _instance$propsOption3[0];

    if (propsOptions) {
      for (var key in propsOptions) {
        checkDuplicateProperties("Props"
        /* PROPS */
        , key);
      }
    }
  } // options initialization order (to be consistent with Vue 2):
  // - props (already done outside of this function)
  // - inject
  // - methods
  // - data (deferred since it relies on `this` access)
  // - computed
  // - watch (deferred since it relies on `this` access)


  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }

  if (methods) {
    for (var _key5 in methods) {
      var methodHandler = methods[_key5];

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(methodHandler)) {
        // In dev mode, we use the `createRenderContext` function to define methods to the proxy target,
        // and those are read-only but reconfigurable, so it needs to be redefined here
        if (true) {
          Object.defineProperty(ctx, _key5, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {}

        if (true) {
          checkDuplicateProperties("Methods"
          /* METHODS */
          , _key5);
        }
      } else if (true) {
        warn("Method \"".concat(_key5, "\" has type \"").concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(methodHandler), "\" in the component definition. ") + "Did you reference the function correctly?");
      }
    }
  }

  if (dataOptions) {
    (function () {
      if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(dataOptions)) {
        warn("The data option must be a function. " + "Plain object usage is no longer supported.");
      }

      var data = dataOptions.call(publicThis, publicThis);

      if ( true && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isPromise */ "x"])(data)) {
        warn("data() returned a Promise - note data() cannot be async; If you " + "intend to perform data fetching before component renders, use " + "async setup() + <Suspense>.");
      }

      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(data)) {
         true && warn("data() should return an object.");
      } else {
        instance.data = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* reactive */ "j"])(data);

        if (true) {
          var _loop = function _loop(_key6) {
            checkDuplicateProperties("Data"
            /* DATA */
            , _key6); // expose data on ctx during dev

            if (_key6[0] !== '$' && _key6[0] !== '_') {
              Object.defineProperty(ctx, _key6, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return data[_key6];
                },
                set: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]
              });
            }
          };

          for (var _key6 in data) {
            _loop(_key6);
          }
        }
      }
    })();
  } // state initialization complete at this point - start caching access


  shouldCacheAccess = true;

  if (computedOptions) {
    var _loop2 = function _loop2(_key7) {
      var opt = computedOptions[_key7];
      var get = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(opt) ? opt.bind(publicThis, publicThis) : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(opt.get) ? opt.get.bind(publicThis, publicThis) : _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"];

      if ( true && get === _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]) {
        warn("Computed property \"".concat(_key7, "\" has no getter."));
      }

      var set = !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(opt) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(opt.set) ? opt.set.bind(publicThis) :  true ? function () {
        warn("Write operation failed: computed property \"".concat(_key7, "\" is readonly."));
      } : undefined;
      var c = computed({
        get: get,
        set: set
      });
      Object.defineProperty(ctx, _key7, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return c.value;
        },
        set: function set(v) {
          return c.value = v;
        }
      });

      if (true) {
        checkDuplicateProperties("Computed"
        /* COMPUTED */
        , _key7);
      }
    };

    for (var _key7 in computedOptions) {
      _loop2(_key7);
    }
  }

  if (watchOptions) {
    for (var _key8 in watchOptions) {
      createWatcher(watchOptions[_key8], ctx, publicThis, _key8);
    }
  }

  if (provideOptions) {
    var provides = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach(function (key) {
      provide(key, provides[key]);
    });
  }

  if (created) {
    callHook(created, instance, "c"
    /* CREATED */
    );
  }

  function registerLifecycleHook(register, hook) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(hook)) {
      hook.forEach(function (_hook) {
        return register(_hook.bind(publicThis));
      });
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }

  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(expose)) {
    if (expose.length) {
      var exposed = instance.exposed || (instance.exposed = {});
      expose.forEach(function (key) {
        Object.defineProperty(exposed, key, {
          get: function get() {
            return publicThis[key];
          },
          set: function set(val) {
            return publicThis[key] = val;
          }
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  } // options that are handled when creating the instance but also need to be
  // applied from mixins


  if (render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]) {
    instance.render = render;
  }

  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  } // asset options.


  if (components) instance.components = components;
  if (directives) instance.directives = directives;
}

function resolveInjections(injectOptions, ctx) {
  var checkDuplicateProperties = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"];

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }

  for (var key in injectOptions) {
    var opt = injectOptions[key];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(opt)) {
      if ('default' in opt) {
        ctx[key] = inject(opt.from || key, opt.default, true
        /* treat default function as factory */
        );
      } else {
        ctx[key] = inject(opt.from || key);
      }
    } else {
      ctx[key] = inject(opt);
    }

    if (true) {
      checkDuplicateProperties("Inject"
      /* INJECT */
      , key);
    }
  }
}

function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(hook) ? hook.map(function (h) {
    return h.bind(instance.proxy);
  }) : hook.bind(instance.proxy), instance, type);
}

function createWatcher(raw, ctx, publicThis, key) {
  var getter = key.includes('.') ? createPathGetter(publicThis, key) : function () {
    return publicThis[key];
  };

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(raw)) {
    var handler = ctx[raw];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(handler)) {
      watch(getter, handler);
    } else if (true) {
      warn("Invalid watch handler specified by key \"".concat(raw, "\""), handler);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(raw)) {
    watch(getter, raw.bind(publicThis));
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(raw)) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(raw)) {
      raw.forEach(function (r) {
        return createWatcher(r, ctx, publicThis, key);
      });
    } else {
      var _handler = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(_handler)) {
        watch(getter, _handler, raw);
      } else if (true) {
        warn("Invalid watch handler specified by key \"".concat(raw.handler, "\""), _handler);
      }
    }
  } else if (true) {
    warn("Invalid watch option: \"".concat(key, "\""), raw);
  }
}
/**
 * Resolve merged options and cache it on the component.
 * This is done only once per-component since the merging does not involve
 * instances.
 */


function resolveMergedOptions(instance) {
  var base = instance.type;
  var mixins = base.mixins,
      extendsOptions = base.extends;
  var _instance$appContext = instance.appContext,
      globalMixins = _instance$appContext.mixins,
      cache = _instance$appContext.optionsCache,
      optionMergeStrategies = _instance$appContext.config.optionMergeStrategies;
  var cached = cache.get(base);
  var resolved;

  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};

    if (globalMixins.length) {
      globalMixins.forEach(function (m) {
        return mergeOptions(resolved, m, optionMergeStrategies, true);
      });
    }

    mergeOptions(resolved, base, optionMergeStrategies);
  }

  cache.set(base, resolved);
  return resolved;
}

function mergeOptions(to, from, strats) {
  var asMixin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var mixins = from.mixins,
      extendsOptions = from.extends;

  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }

  if (mixins) {
    mixins.forEach(function (m) {
      return mergeOptions(to, m, strats, true);
    });
  }

  for (var key in from) {
    if (asMixin && key === 'expose') {
       true && warn("\"expose\" option is ignored when declared in mixins or extends. " + "It should only be declared in the base component itself.");
    } else {
      var strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }

  return to;
}

var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeObjectOptions,
  emits: mergeObjectOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  destroyed: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};

function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }

  if (!to) {
    return from;
  }

  return function mergedDataFn() {
    return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(to) ? to.call(this, this) : to, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(from) ? from.call(this, this) : from);
  };
}

function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}

function normalizeInject(raw) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(raw)) {
    var res = {};

    for (var i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }

    return res;
  }

  return raw;
}

function mergeAsArray(to, from) {
  return to ? Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(new Set([].concat(to, from))) : from;
}

function mergeObjectOptions(to, from) {
  return to ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(Object.create(null), to), from) : from;
}

function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  var merged = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(Object.create(null), to);

  for (var key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }

  return merged;
}

function initProps(instance, rawProps, isStateful) {
  var isSSR = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var props = {};
  var attrs = {};
  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* def */ "g"])(attrs, InternalObjectKey, 1);
  instance.propsDefaults = Object.create(null);
  setFullProps(instance, rawProps, props, attrs); // ensure all declared prop keys are present

  for (var key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = undefined;
    }
  } // validation


  if (true) {
    validateProps(rawProps || {}, props, instance);
  }

  if (isStateful) {
    // stateful
    instance.props = isSSR ? props : Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReactive */ "n"])(props);
  } else {
    if (!instance.type.props) {
      // functional w/ optional props, props === attrs
      instance.props = attrs;
    } else {
      // functional w/ declared props
      instance.props = props;
    }
  }

  instance.attrs = attrs;
}

function updateProps(instance, rawProps, rawPrevProps, optimized) {
  var props = instance.props,
      attrs = instance.attrs,
      patchFlag = instance.vnode.patchFlag;
  var rawCurrentProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(props);

  var _instance$propsOption4 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
      options = _instance$propsOption4[0];

  var hasAttrsChanged = false;

  if ( // always force full diff in dev
  // - #1942 if hmr is enabled with sfc component
  // - vite#872 non-sfc component used by sfc component
  !( true && (instance.type.__hmrId || instance.parent && instance.parent.type.__hmrId)) && (optimized || patchFlag > 0) && !(patchFlag & 16
  /* FULL_PROPS */
  )) {
    if (patchFlag & 8
    /* PROPS */
    ) {
      // Compiler-generated props & no keys change, just set the updated
      // the props.
      var propsToUpdate = instance.vnode.dynamicProps;

      for (var i = 0; i < propsToUpdate.length; i++) {
        var key = propsToUpdate[i]; // PROPS flag guarantees rawProps to be non-null

        var value = rawProps[key];

        if (options) {
          // attr / props separation was done on init and will be consistent
          // in this code path, so just check if attrs have it.
          if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            var camelizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(key);
            props[camelizedKey] = resolvePropValue(options, rawCurrentProps, camelizedKey, value, instance, false
            /* isAbsent */
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    // full props update.
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    } // in case of dynamic props, check if we need to delete keys from
    // the props object


    var kebabKey;

    for (var _key9 in rawCurrentProps) {
      if (!rawProps || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(rawProps, _key9) && ((kebabKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hyphenate */ "l"])(_key9)) === _key9 || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && (rawPrevProps[_key9] !== undefined || // for kebab-case
          rawPrevProps[kebabKey] !== undefined)) {
            props[_key9] = resolvePropValue(options, rawCurrentProps, _key9, undefined, instance, true
            /* isAbsent */
            );
          }
        } else {
          delete props[_key9];
        }
      }
    } // in the case of functional component w/o props declaration, props and
    // attrs point to the same object so it should already have been updated.


    if (attrs !== rawCurrentProps) {
      for (var _key10 in attrs) {
        if (!rawProps || !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(rawProps, _key10)) {
          delete attrs[_key10];
          hasAttrsChanged = true;
        }
      }
    }
  } // trigger updates for $attrs in case it's used in component slots


  if (hasAttrsChanged) {
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* trigger */ "u"])(instance, "set"
    /* SET */
    , '$attrs');
  }

  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}

function setFullProps(instance, rawProps, props, attrs) {
  var _instance$propsOption5 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 2),
      options = _instance$propsOption5[0],
      needCastKeys = _instance$propsOption5[1];

  var hasAttrsChanged = false;
  var rawCastValues;

  if (rawProps) {
    for (var key in rawProps) {
      // key, ref are reserved and never passed down
      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isReservedProp */ "y"])(key)) {
        continue;
      }

      var value = rawProps[key]; // prop option names are camelized during normalization, so to support
      // kebab -> camel conversion here we need to camelize the key.

      var camelKey = void 0;

      if (options && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(options, camelKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }

  if (needCastKeys) {
    var rawCurrentProps = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(props);
    var castValues = rawCastValues || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];

    for (var i = 0; i < needCastKeys.length; i++) {
      var _key11 = needCastKeys[i];
      props[_key11] = resolvePropValue(options, rawCurrentProps, _key11, castValues[_key11], instance, !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(castValues, _key11));
    }
  }

  return hasAttrsChanged;
}

function resolvePropValue(options, props, key, value, instance, isAbsent) {
  var opt = options[key];

  if (opt != null) {
    var hasDefault = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(opt, 'default'); // default values

    if (hasDefault && value === undefined) {
      var defaultValue = opt.default;

      if (opt.type !== Function && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(defaultValue)) {
        var propsDefaults = instance.propsDefaults;

        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(null, props);
          setCurrentInstance(null);
        }
      } else {
        value = defaultValue;
      }
    } // boolean casting


    if (opt[0
    /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[1
      /* shouldCastTrue */
      ] && (value === '' || value === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hyphenate */ "l"])(key))) {
        value = true;
      }
    }
  }

  return value;
}

function normalizePropsOptions(comp, appContext) {
  var asMixin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cache = appContext.propsCache;
  var cached = cache.get(comp);

  if (cached) {
    return cached;
  }

  var raw = comp.props;
  var normalized = {};
  var needCastKeys = []; // apply mixin/extends props

  var hasExtends = false;

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(comp)) {
    var extendProps = function extendProps(raw) {
      hasExtends = true;

      var _normalizePropsOption = normalizePropsOptions(raw, appContext, true),
          _normalizePropsOption2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_normalizePropsOption, 2),
          props = _normalizePropsOption2[0],
          keys = _normalizePropsOption2[1];

      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(normalized, props);
      if (keys) needCastKeys.push.apply(needCastKeys, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(keys));
    };

    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }

    if (comp.extends) {
      extendProps(comp.extends);
    }

    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }

  if (!raw && !hasExtends) {
    cache.set(comp, _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"]);
    return _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"];
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(raw)) {
    for (var i = 0; i < raw.length; i++) {
      if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(raw[i])) {
        warn("props must be strings when using array syntax.", raw[i]);
      }

      var normalizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(raw[i]);

      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];
      }
    }
  } else if (raw) {
    if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(raw)) {
      warn("invalid props options", raw);
    }

    for (var key in raw) {
      var _normalizedKey = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(key);

      if (validatePropName(_normalizedKey)) {
        var opt = raw[key];
        var prop = normalized[_normalizedKey] = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(opt) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(opt) ? {
          type: opt
        } : opt;

        if (prop) {
          var booleanIndex = getTypeIndex(Boolean, prop.type);
          var stringIndex = getTypeIndex(String, prop.type);
          prop[0
          /* shouldCast */
          ] = booleanIndex > -1;
          prop[1
          /* shouldCastTrue */
          ] = stringIndex < 0 || booleanIndex < stringIndex; // if the prop needs boolean casting or default value

          if (booleanIndex > -1 || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(prop, 'default')) {
            needCastKeys.push(_normalizedKey);
          }
        }
      }
    }
  }

  var res = [normalized, needCastKeys];
  cache.set(comp, res);
  return res;
}

function validatePropName(key) {
  if (key[0] !== '$') {
    return true;
  } else if (true) {
    warn("Invalid prop name: \"".concat(key, "\" is a reserved property."));
  }

  return false;
} // use function string name to check type constructors
// so that it works across vms / iframes.


function getType(ctor) {
  var match = ctor && ctor.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(expectedTypes)) {
    return expectedTypes.findIndex(function (t) {
      return isSameType(t, type);
    });
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  return -1;
}
/**
 * dev only
 */


function validateProps(rawProps, props, instance) {
  var resolvedValues = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(props);
  var options = instance.propsOptions[0];

  for (var key in options) {
    var opt = options[key];
    if (opt == null) continue;
    validateProp(key, resolvedValues[key], opt, !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(rawProps, key) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(rawProps, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hyphenate */ "l"])(key)));
  }
}
/**
 * dev only
 */


function validateProp(name, value, prop, isAbsent) {
  var type = prop.type,
      required = prop.required,
      validator = prop.validator; // required!

  if (required && isAbsent) {
    warn('Missing required prop: "' + name + '"');
    return;
  } // missing but optional


  if (value == null && !prop.required) {
    return;
  } // type check


  if (type != null && type !== true) {
    var isValid = false;
    var types = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(type) ? type : [type];
    var expectedTypes = []; // value is valid as long as one of the specified types match

    for (var i = 0; i < types.length && !isValid; i++) {
      var _assertType = assertType(value, types[i]),
          valid = _assertType.valid,
          expectedType = _assertType.expectedType;

      expectedTypes.push(expectedType || '');
      isValid = valid;
    }

    if (!isValid) {
      warn(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  } // custom validator


  if (validator && !validator(value)) {
    warn('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}

var isSimpleType = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* makeMap */ "G"])('String,Number,Boolean,Function,Symbol,BigInt');
/**
 * dev only
 */

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (isSimpleType(expectedType)) {
    var t = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value);

    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(value);
  } else if (expectedType === 'Array') {
    valid = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * dev only
 */


function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"".concat(name, "\".") + " Expected ".concat(expectedTypes.map(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* capitalize */ "f"]).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toRawType */ "N"])(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value ".concat(expectedValue);
  }

  message += ", got ".concat(receivedType, " "); // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value ".concat(receivedValue, ".");
  }

  return message;
}
/**
 * dev only
 */


function styleValue(value, type) {
  if (type === 'String') {
    return "\"".concat(value, "\"");
  } else if (type === 'Number') {
    return "".concat(Number(value));
  } else {
    return "".concat(value);
  }
}
/**
 * dev only
 */


function isExplicable(type) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return type.toLowerCase() === elem;
  });
}
/**
 * dev only
 */


function isBoolean() {
  for (var _len5 = arguments.length, args = new Array(_len5), _key12 = 0; _key12 < _len5; _key12++) {
    args[_key12] = arguments[_key12];
  }

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}

var isInternalKey = function isInternalKey(key) {
  return key[0] === '_' || key === '$stable';
};

var normalizeSlotValue = function normalizeSlotValue(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
};

var normalizeSlot = function normalizeSlot(key, rawSlot, ctx) {
  var normalized = withCtx(function (props) {
    if ( true && currentInstance) {
      warn("Slot \"".concat(key, "\" invoked outside of the render function: ") + "this will not track dependencies used in the slot. " + "Invoke the slot function inside the render function instead.");
    }

    return normalizeSlotValue(rawSlot(props));
  }, ctx);
  normalized._c = false;
  return normalized;
};

var normalizeObjectSlots = function normalizeObjectSlots(rawSlots, slots, instance) {
  var ctx = rawSlots._ctx;

  for (var key in rawSlots) {
    if (isInternalKey(key)) continue;
    var value = rawSlots[key];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      (function () {
        if (true) {
          warn("Non-function value encountered for slot \"".concat(key, "\". ") + "Prefer function slots for better performance.");
        }

        var normalized = normalizeSlotValue(value);

        slots[key] = function () {
          return normalized;
        };
      })();
    }
  }
};

var normalizeVNodeSlots = function normalizeVNodeSlots(instance, children) {
  if ( true && !isKeepAlive(instance.vnode) && !false) {
    warn("Non-function value encountered for default slot. " + "Prefer function slots for better performance.");
  }

  var normalized = normalizeSlotValue(children);

  instance.slots.default = function () {
    return normalized;
  };
};

var initSlots = function initSlots(instance, children) {
  if (instance.vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // users can get the shallow readonly version of the slots object through `this.$slots`,
      // we should avoid the proxy object polluting the slots of the internal instance
      instance.slots = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(children); // make compiler marker non-enumerable

      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* def */ "g"])(children, '_', type);
    } else {
      normalizeObjectSlots(children, instance.slots = {});
    }
  } else {
    instance.slots = {};

    if (children) {
      normalizeVNodeSlots(instance, children);
    }
  }

  Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* def */ "g"])(instance.slots, InternalObjectKey, 1);
};

var updateSlots = function updateSlots(instance, children, optimized) {
  var vnode = instance.vnode,
      slots = instance.slots;
  var needDeletionCheck = true;
  var deletionComparisonTarget = _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];

  if (vnode.shapeFlag & 32
  /* SLOTS_CHILDREN */
  ) {
    var type = children._;

    if (type) {
      // compiled slots.
      if ( true && isHmrUpdating) {
        // Parent was HMR updated so slot content may have changed.
        // force update slots and mark instance for hmr as well
        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(slots, children);
      } else if (optimized && type === 1
      /* STABLE */
      ) {
        // compiled AND stable.
        // no need to update, and skip stale slots removal.
        needDeletionCheck = false;
      } else {
        // compiled but dynamic (v-if/v-for on slots) - update slots, but skip
        // normalization.
        Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(slots, children); // #2893
        // when rendering the optimized slots by manually written render function,
        // we need to delete the `slots._` flag if necessary to make subsequent updates reliable,
        // i.e. let the `renderSlot` create the bailed Fragment

        if (!optimized && type === 1
        /* STABLE */
        ) {
          delete slots._;
        }
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }

    deletionComparisonTarget = children;
  } else if (children) {
    // non slot object children (direct value) passed to a component
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = {
      default: 1
    };
  } // delete stale slots


  if (needDeletionCheck) {
    for (var key in slots) {
      if (!isInternalKey(key) && !(key in deletionComparisonTarget)) {
        delete slots[key];
      }
    }
  }
};
/**
Runtime helper for applying directives to a vnode. Example usage:

const comp = resolveComponent('comp')
const foo = resolveDirective('foo')
const bar = resolveDirective('bar')

return withDirectives(h(comp), [
  [foo, this.x],
  [bar, this.y]
])
*/


var isBuiltInDirective = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* makeMap */ "G"])('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text');

function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn('Do not use built-in directive ids as custom directive id: ' + name);
  }
}
/**
 * Adds directives to a VNode.
 */


function withDirectives(vnode, directives) {
  var internalInstance = currentRenderingInstance;

  if (internalInstance === null) {
     true && warn("withDirectives can only be used inside render functions.");
    return vnode;
  }

  var instance = internalInstance.proxy;
  var bindings = vnode.dirs || (vnode.dirs = []);

  for (var i = 0; i < directives.length; i++) {
    var _directives$i = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(directives[i], 4),
        dir = _directives$i[0],
        value = _directives$i[1],
        arg = _directives$i[2],
        _directives$i$ = _directives$i[3],
        modifiers = _directives$i$ === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] : _directives$i$;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(dir)) {
      dir = {
        mounted: dir,
        updated: dir
      };
    }

    if (dir.deep) {
      traverse(value);
    }

    bindings.push({
      dir: dir,
      instance: instance,
      value: value,
      oldValue: void 0,
      arg: arg,
      modifiers: modifiers
    });
  }

  return vnode;
}

function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  var bindings = vnode.dirs;
  var oldBindings = prevVNode && prevVNode.dirs;

  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i];

    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }

    var hook = binding.dir[name];

    if (hook) {
      // disable tracking inside all lifecycle hooks
      // since they can potentially be called inside effects.
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* pauseTracking */ "h"])();
      callWithAsyncErrorHandling(hook, instance, 8
      /* DIRECTIVE_HOOK */
      , [vnode.el, binding, vnode, prevVNode]);
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* resetTracking */ "m"])();
    }
  }
}

function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NO */ "c"],
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: undefined,
      warnHandler: undefined,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  };
}

var uid = 0;

function createAppAPI(render, hydrate) {
  return function createApp(rootComponent) {
    var rootProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (rootProps != null && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(rootProps)) {
       true && warn("root props passed to app.mount() must be an object.");
      rootProps = null;
    }

    var context = createAppContext();
    var installedPlugins = new Set();
    var isMounted = false;
    var app = context.app = {
      _uid: uid++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version: version,

      get config() {
        return context.config;
      },

      set config(v) {
        if (true) {
          warn("app.config cannot be replaced. Modify individual options instead.");
        }
      },

      use: function use(plugin) {
        for (var _len6 = arguments.length, options = new Array(_len6 > 1 ? _len6 - 1 : 0), _key13 = 1; _key13 < _len6; _key13++) {
          options[_key13 - 1] = arguments[_key13];
        }

        if (installedPlugins.has(plugin)) {
           true && warn("Plugin has already been applied to target app.");
        } else if (plugin && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install.apply(plugin, [app].concat(options));
        } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(plugin)) {
          installedPlugins.add(plugin);
          plugin.apply(void 0, [app].concat(options));
        } else if (true) {
          warn("A plugin must either be a function or an object with an \"install\" " + "function.");
        }

        return app;
      },
      mixin: function mixin(_mixin) {
        if (true) {
          if (!context.mixins.includes(_mixin)) {
            context.mixins.push(_mixin);
          } else if (true) {
            warn('Mixin has already been applied to target app' + (_mixin.name ? ": ".concat(_mixin.name) : ''));
          }
        } else {}

        return app;
      },
      component: function component(name, _component) {
        if (true) {
          validateComponentName(name, context.config);
        }

        if (!_component) {
          return context.components[name];
        }

        if ( true && context.components[name]) {
          warn("Component \"".concat(name, "\" has already been registered in target app."));
        }

        context.components[name] = _component;
        return app;
      },
      directive: function directive(name, _directive) {
        if (true) {
          validateDirectiveName(name);
        }

        if (!_directive) {
          return context.directives[name];
        }

        if ( true && context.directives[name]) {
          warn("Directive \"".concat(name, "\" has already been registered in target app."));
        }

        context.directives[name] = _directive;
        return app;
      },
      mount: function mount(rootContainer, isHydrate, isSVG) {
        if (!isMounted) {
          var vnode = createVNode(rootComponent, rootProps); // store app context on the root VNode.
          // this will be set on the root instance on initial mount.

          vnode.appContext = context; // HMR root reload

          if (true) {
            context.reload = function () {
              render(cloneVNode(vnode), rootContainer, isSVG);
            };
          }

          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, isSVG);
          }

          isMounted = true;
          app._container = rootContainer;
          rootContainer.__vue_app__ = app;

          if (true) {
            app._instance = vnode.component;
            devtoolsInitApp(app, version);
          }

          return vnode.component.proxy;
        } else if (true) {
          warn("App has already been mounted.\n" + "If you want to remount the same app, move your app creation logic " + "into a factory function and create fresh app instances for each " + "mount - e.g. `const createMyApp = () => createApp(App)`");
        }
      },
      unmount: function unmount() {
        if (isMounted) {
          render(null, app._container);

          if (true) {
            app._instance = null;
            devtoolsUnmountApp(app);
          }

          delete app._container.__vue_app__;
        } else if (true) {
          warn("Cannot unmount an app that is not mounted.");
        }
      },
      provide: function provide(key, value) {
        if ( true && key in context.provides) {
          warn("App already provides property with key \"".concat(String(key), "\". ") + "It will be overwritten with the new value.");
        } // TypeScript doesn't allow symbols as index type
        // https://github.com/Microsoft/TypeScript/issues/24587


        context.provides[key] = value;
        return app;
      }
    };
    return app;
  };
}

var hasMismatch = false;

var isSVGContainer = function isSVGContainer(container) {
  return /svg/.test(container.namespaceURI) && container.tagName !== 'foreignObject';
};

var isComment = function isComment(node) {
  return node.nodeType === 8;
}
/* COMMENT */
; // Note: hydration is DOM-specific
// But we have to place it in core due to tight coupling with core - splitting
// it out creates a ton of unnecessary complexity.
// Hydration also depends on some renderer internal logic which needs to be
// passed in via arguments.


function createHydrationFunctions(rendererInternals) {
  var mountComponent = rendererInternals.mt,
      patch = rendererInternals.p,
      _rendererInternals$o2 = rendererInternals.o,
      patchProp = _rendererInternals$o2.patchProp,
      nextSibling = _rendererInternals$o2.nextSibling,
      parentNode = _rendererInternals$o2.parentNode,
      remove = _rendererInternals$o2.remove,
      insert = _rendererInternals$o2.insert,
      createComment = _rendererInternals$o2.createComment;

  var hydrate = function hydrate(vnode, container) {
    if (!container.hasChildNodes()) {
       true && warn("Attempting to hydrate existing markup but container is empty. " + "Performing full mount instead.");
      patch(null, vnode, container);
      flushPostFlushCbs();
      return;
    }

    hasMismatch = false;
    hydrateNode(container.firstChild, vnode, null, null, null);
    flushPostFlushCbs();

    if (hasMismatch && !false) {
      // this error should show up in production
      console.error("Hydration completed but contains mismatches.");
    }
  };

  var hydrateNode = function hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds) {
    var optimized = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var isFragmentStart = isComment(node) && node.data === '[';

    var onMismatch = function onMismatch() {
      return handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragmentStart);
    };

    var type = vnode.type,
        ref = vnode.ref,
        shapeFlag = vnode.shapeFlag;
    var domType = node.nodeType;
    vnode.el = node;
    var nextNode = null;

    switch (type) {
      case Text:
        if (domType !== 3
        /* TEXT */
        ) {
          nextNode = onMismatch();
        } else {
          if (node.data !== vnode.children) {
            hasMismatch = true;
             true && warn("Hydration text mismatch:" + "\n- Client: ".concat(JSON.stringify(node.data)) + "\n- Server: ".concat(JSON.stringify(vnode.children)));
            node.data = vnode.children;
          }

          nextNode = nextSibling(node);
        }

        break;

      case Comment$1:
        if (domType !== 8
        /* COMMENT */
        || isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = nextSibling(node);
        }

        break;

      case Static:
        if (domType !== 1
        /* ELEMENT */
        ) {
          nextNode = onMismatch();
        } else {
          // determine anchor, adopt content
          nextNode = node; // if the static vnode has its content stripped during build,
          // adopt it from the server-rendered HTML.

          var needToAdoptContent = !vnode.children.length;

          for (var i = 0; i < vnode.staticCount; i++) {
            if (needToAdoptContent) vnode.children += nextNode.outerHTML;

            if (i === vnode.staticCount - 1) {
              vnode.anchor = nextNode;
            }

            nextNode = nextSibling(nextNode);
          }

          return nextNode;
        }

        break;

      case Fragment:
        if (!isFragmentStart) {
          nextNode = onMismatch();
        } else {
          nextNode = hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
        }

        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
          if (domType !== 1
          /* ELEMENT */
          || vnode.type.toLowerCase() !== node.tagName.toLowerCase()) {
            nextNode = onMismatch();
          } else {
            nextNode = hydrateElement(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
          }
        } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
          // when setting up the render effect, if the initial vnode already
          // has .el set, the component will perform hydration instead of mount
          // on its sub-tree.
          vnode.slotScopeIds = slotScopeIds;
          var container = parentNode(node);
          mountComponent(vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), optimized); // component may be async, so in the case of fragments we cannot rely
          // on component's rendered output to determine the end of the fragment
          // instead, we do a lookahead to find the end anchor node.

          nextNode = isFragmentStart ? locateClosingAsyncAnchor(node) : nextSibling(node); // #3787
          // if component is async, it may get moved / unmounted before its
          // inner component is loaded, so we need to give it a placeholder
          // vnode that matches its adopted DOM.

          if (isAsyncWrapper(vnode)) {
            var subTree;

            if (isFragmentStart) {
              subTree = createVNode(Fragment);
              subTree.anchor = nextNode ? nextNode.previousSibling : container.lastChild;
            } else {
              subTree = node.nodeType === 3 ? createTextVNode('') : createVNode('div');
            }

            subTree.el = node;
            vnode.component.subTree = subTree;
          }
        } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
          if (domType !== 8
          /* COMMENT */
          ) {
            nextNode = onMismatch();
          } else {
            nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, rendererInternals, hydrateChildren);
          }
        } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
          nextNode = vnode.type.hydrate(node, vnode, parentComponent, parentSuspense, isSVGContainer(parentNode(node)), slotScopeIds, optimized, rendererInternals, hydrateNode);
        } else if (true) {
          warn('Invalid HostVNode type:', type, "(".concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type), ")"));
        }

    }

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode);
    }

    return nextNode;
  };

  var hydrateElement = function hydrateElement(el, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!vnode.dynamicChildren;
    var type = vnode.type,
        props = vnode.props,
        patchFlag = vnode.patchFlag,
        shapeFlag = vnode.shapeFlag,
        dirs = vnode.dirs; // #4006 for form elements with non-string v-model value bindings
    // e.g. <option :value="obj">, <input type="checkbox" :true-value="1">

    var forcePatchValue = type === 'input' && dirs || type === 'option'; // skip props & children if this is hoisted static nodes

    if (forcePatchValue || patchFlag !== -1
    /* HOISTED */
    ) {
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        if (forcePatchValue || !optimized || patchFlag & 16
        /* FULL_PROPS */
        || patchFlag & 32
        /* HYDRATE_EVENTS */
        ) {
          for (var key in props) {
            if (forcePatchValue && key.endsWith('value') || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isOn */ "v"])(key) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isReservedProp */ "y"])(key)) {
              patchProp(el, key, null, props[key]);
            }
          }
        } else if (props.onClick) {
          // Fast path for click listeners (which is most often) to avoid
          // iterating through props.
          patchProp(el, 'onClick', null, props.onClick);
        }
      } // vnode / directive hooks


      var vnodeHooks;

      if (vnodeHooks = props && props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHooks, parentComponent, vnode);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
      }

      if ((vnodeHooks = props && props.onVnodeMounted) || dirs) {
        queueEffectWithSuspense(function () {
          vnodeHooks && invokeVNodeHook(vnodeHooks, parentComponent, vnode);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
        }, parentSuspense);
      } // children


      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      && // skip if element has innerHTML / textContent
      !(props && (props.innerHTML || props.textContent))) {
        var next = hydrateChildren(el.firstChild, vnode, el, parentComponent, parentSuspense, slotScopeIds, optimized);
        var _hasWarned = false;

        while (next) {
          hasMismatch = true;

          if ( true && !_hasWarned) {
            warn("Hydration children mismatch in <".concat(vnode.type, ">: ") + "server rendered element contains more child nodes than client vdom.");
            _hasWarned = true;
          } // The SSRed DOM contains more nodes than it should. Remove them.


          var cur = next;
          next = next.nextSibling;
          remove(cur);
        }
      } else if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
        if (el.textContent !== vnode.children) {
          hasMismatch = true;
           true && warn("Hydration text content mismatch in <".concat(vnode.type, ">:\n") + "- Client: ".concat(el.textContent, "\n") + "- Server: ".concat(vnode.children));
          el.textContent = vnode.children;
        }
      }
    }

    return el.nextSibling;
  };

  var hydrateChildren = function hydrateChildren(node, parentVNode, container, parentComponent, parentSuspense, slotScopeIds, optimized) {
    optimized = optimized || !!parentVNode.dynamicChildren;
    var children = parentVNode.children;
    var l = children.length;
    var hasWarned = false;

    for (var i = 0; i < l; i++) {
      var vnode = optimized ? children[i] : children[i] = normalizeVNode(children[i]);

      if (node) {
        node = hydrateNode(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized);
      } else if (vnode.type === Text && !vnode.children) {
        continue;
      } else {
        hasMismatch = true;

        if ( true && !hasWarned) {
          warn("Hydration children mismatch in <".concat(container.tagName.toLowerCase(), ">: ") + "server rendered element contains fewer child nodes than client vdom.");
          hasWarned = true;
        } // the SSRed DOM didn't contain enough nodes. Mount the missing ones.


        patch(null, vnode, container, null, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
      }
    }

    return node;
  };

  var hydrateFragment = function hydrateFragment(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized) {
    var fragmentSlotScopeIds = vnode.slotScopeIds;

    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    var container = parentNode(node);
    var next = hydrateChildren(nextSibling(node), vnode, container, parentComponent, parentSuspense, slotScopeIds, optimized);

    if (next && isComment(next) && next.data === ']') {
      return nextSibling(vnode.anchor = next);
    } else {
      // fragment didn't hydrate successfully, since we didn't get a end anchor
      // back. This should have led to node/children mismatch warnings.
      hasMismatch = true; // since the anchor is missing, we need to create one and insert it

      insert(vnode.anchor = createComment("]"), container, next);
      return next;
    }
  };

  var handleMismatch = function handleMismatch(node, vnode, parentComponent, parentSuspense, slotScopeIds, isFragment) {
    hasMismatch = true;
     true && warn("Hydration node mismatch:\n- Client vnode:", vnode.type, "\n- Server rendered DOM:", node, node.nodeType === 3
    /* TEXT */
    ? "(text)" : isComment(node) && node.data === '[' ? "(start of fragment)" : "");
    vnode.el = null;

    if (isFragment) {
      // remove excessive fragment nodes
      var end = locateClosingAsyncAnchor(node);

      while (true) {
        var _next2 = nextSibling(node);

        if (_next2 && _next2 !== end) {
          remove(_next2);
        } else {
          break;
        }
      }
    }

    var next = nextSibling(node);
    var container = parentNode(node);
    remove(node);
    patch(null, vnode, container, next, parentComponent, parentSuspense, isSVGContainer(container), slotScopeIds);
    return next;
  };

  var locateClosingAsyncAnchor = function locateClosingAsyncAnchor(node) {
    var match = 0;

    while (node) {
      node = nextSibling(node);

      if (node && isComment(node)) {
        if (node.data === '[') match++;

        if (node.data === ']') {
          if (match === 0) {
            return nextSibling(node);
          } else {
            match--;
          }
        }
      }
    }

    return node;
  };

  return [hydrate, hydrateNode];
}

var supported;
var perf;

function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark("vue-".concat(type, "-").concat(instance.uid));
  }

  if (true) {
    devtoolsPerfStart(instance, type, supported ? perf.now() : Date.now());
  }
}

function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    var startTag = "vue-".concat(type, "-").concat(instance.uid);
    var endTag = startTag + ":end";
    perf.mark(endTag);
    perf.measure("<".concat(formatComponentName(instance, instance.type), "> ").concat(type), startTag, endTag);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }

  if (true) {
    devtoolsPerfEnd(instance, type, supported ? perf.now() : Date.now());
  }
}

function isSupported() {
  if (supported !== undefined) {
    return supported;
  }
  /* eslint-disable no-restricted-globals */


  if (typeof window !== 'undefined' && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  /* eslint-enable no-restricted-globals */


  return supported;
}
/**
 * This is only called in esm-bundler builds.
 * It is called when a renderer is created, in `baseCreateRenderer` so that
 * importing runtime-core is side-effects free.
 *
 * istanbul-ignore-next
 */


function initFeatureFlags() {
  var needWarn = false;

  if (false) {}

  if (false) {}

  if ( true && needWarn) {
    console.warn("You are running the esm-bundler build of Vue. It is recommended to " + "configure your bundler to explicitly replace feature flag globals " + "with boolean literals to get proper tree-shaking in the final bundle. " + "See http://link.vuejs.org/feature-flags for more details.");
  }
}

var prodEffectOptions = {
  scheduler: queueJob,
  // #1801, #2043 component render effects should allow recursive updates
  allowRecurse: true
};

function createDevEffectOptions(instance) {
  return {
    scheduler: queueJob,
    allowRecurse: true,
    onTrack: instance.rtc ? function (e) {
      return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(instance.rtc, e);
    } : void 0,
    onTrigger: instance.rtg ? function (e) {
      return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(instance.rtg, e);
    } : void 0
  };
}

var queuePostRenderEffect = queueEffectWithSuspense;

var setRef = function setRef(rawRef, oldRawRef, parentSuspense, vnode) {
  var isUnmount = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(rawRef)) {
    rawRef.forEach(function (r, i) {
      return setRef(r, oldRawRef && (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(oldRawRef) ? oldRawRef[i] : oldRawRef), parentSuspense, vnode, isUnmount);
    });
    return;
  }

  if (isAsyncWrapper(vnode) && !isUnmount) {
    // when mounting async components, nothing needs to be done,
    // because the template ref is forwarded to inner component
    return;
  }

  var refValue = vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
  var value = isUnmount ? null : refValue;
  var owner = rawRef.i,
      ref = rawRef.r;

  if ( true && !owner) {
    warn("Missing ref owner context. ref cannot be used on hoisted vnodes. " + "A vnode with ref must be created inside the render function.");
    return;
  }

  var oldRef = oldRawRef && oldRawRef.r;
  var refs = owner.refs === _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] ? owner.refs = {} : owner.refs;
  var setupState = owner.setupState; // dynamic ref changed. unset old ref

  if (oldRef != null && oldRef !== ref) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(oldRef)) {
      refs[oldRef] = null;

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(setupState, oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(oldRef)) {
      oldRef.value = null;
    }
  }

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(ref)) {
    var doSet = function doSet() {
      {
        refs[ref] = value;
      }

      if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(setupState, ref)) {
        setupState[ref] = value;
      }
    }; // #1789: for non-null values, set them after render
    // null values means this is unmount and it should not overwrite another
    // ref with the same key


    if (value) {
      doSet.id = -1;
      queuePostRenderEffect(doSet, parentSuspense);
    } else {
      doSet();
    }
  } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(ref)) {
    var _doSet = function _doSet() {
      ref.value = value;
    };

    if (value) {
      _doSet.id = -1;
      queuePostRenderEffect(_doSet, parentSuspense);
    } else {
      _doSet();
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(ref)) {
    callWithErrorHandling(ref, owner, 12
    /* FUNCTION_REF */
    , [value, refs]);
  } else if (true) {
    warn('Invalid template ref type:', value, "(".concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value), ")"));
  }
};
/**
 * The createRenderer function accepts two generic arguments:
 * HostNode and HostElement, corresponding to Node and Element types in the
 * host environment. For example, for runtime-dom, HostNode would be the DOM
 * `Node` interface and HostElement would be the DOM `Element` interface.
 *
 * Custom renderers can pass in the platform specific types like this:
 *
 * ``` js
 * const { render, createApp } = createRenderer<Node, Element>({
 *   patchProp,
 *   ...nodeOps
 * })
 * ```
 */


function createRenderer(options) {
  return baseCreateRenderer(options);
} // Separate API for creating hydration-enabled renderer.
// Hydration logic is only used when calling this function, making it
// tree-shakable.


function createHydrationRenderer(options) {
  return baseCreateRenderer(options, createHydrationFunctions);
} // implementation


function baseCreateRenderer(options, createHydrationFns) {
  // compile-time feature flags check
  {
    initFeatureFlags();
  }

  if (true) {
    var target = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* getGlobalThis */ "i"])();
    target.__VUE__ = true;
    setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__);
  }

  var hostInsert = options.insert,
      hostRemove = options.remove,
      hostPatchProp = options.patchProp,
      hostForcePatchProp = options.forcePatchProp,
      hostCreateElement = options.createElement,
      hostCreateText = options.createText,
      hostCreateComment = options.createComment,
      hostSetText = options.setText,
      hostSetElementText = options.setElementText,
      hostParentNode = options.parentNode,
      hostNextSibling = options.nextSibling,
      _options$setScopeId = options.setScopeId,
      hostSetScopeId = _options$setScopeId === void 0 ? _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"] : _options$setScopeId,
      hostCloneNode = options.cloneNode,
      hostInsertStaticContent = options.insertStaticContent; // Note: functions inside this closure should use `const xxx = () => {}`
  // style in order to prevent being inlined by minifiers.

  var patch = function patch(n1, n2, container) {
    var anchor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var parentComponent = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var parentSuspense = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    var isSVG = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    var slotScopeIds = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] :  true && isHmrUpdating ? false : !!n2.dynamicChildren;

    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }

    if (n2.patchFlag === -2
    /* BAIL */
    ) {
      optimized = false;
      n2.dynamicChildren = null;
    }

    var type = n2.type,
        ref = n2.ref,
        shapeFlag = n2.shapeFlag;

    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;

      case Comment$1:
        processCommentNode(n1, n2, container, anchor);
        break;

      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG);
        } else if (true) {
          patchStaticNode(n1, n2, container, isSVG);
        }

        break;

      case Fragment:
        processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        break;

      default:
        if (shapeFlag & 1
        /* ELEMENT */
        ) {
          processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 6
        /* COMPONENT */
        ) {
          processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (shapeFlag & 64
        /* TELEPORT */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (shapeFlag & 128
        /* SUSPENSE */
        ) {
          type.process(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals);
        } else if (true) {
          warn('Invalid VNode type:', type, "(".concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type), ")"));
        }

    } // set ref


    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    }
  };

  var processText = function processText(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateText(n2.children), container, anchor);
    } else {
      var el = n2.el = n1.el;

      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };

  var processCommentNode = function processCommentNode(n1, n2, container, anchor) {
    if (n1 == null) {
      hostInsert(n2.el = hostCreateComment(n2.children || ''), container, anchor);
    } else {
      // there's no support for dynamic comments
      n2.el = n1.el;
    }
  };

  var mountStaticNode = function mountStaticNode(n2, container, anchor, isSVG) {
    var _hostInsertStaticCont = hostInsertStaticContent(n2.children, container, anchor, isSVG);

    var _hostInsertStaticCont2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_hostInsertStaticCont, 2);

    n2.el = _hostInsertStaticCont2[0];
    n2.anchor = _hostInsertStaticCont2[1];
  };
  /**
   * Dev / HMR only
   */


  var patchStaticNode = function patchStaticNode(n1, n2, container, isSVG) {
    // static nodes are only patched during dev for HMR
    if (n2.children !== n1.children) {
      var anchor = hostNextSibling(n1.anchor); // remove existing

      removeStaticNode(n1);

      var _hostInsertStaticCont3 = hostInsertStaticContent(n2.children, container, anchor, isSVG);

      var _hostInsertStaticCont4 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_hostInsertStaticCont3, 2);

      n2.el = _hostInsertStaticCont4[0];
      n2.anchor = _hostInsertStaticCont4[1];
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };

  var moveStaticNode = function moveStaticNode(_ref12, container, nextSibling) {
    var el = _ref12.el,
        anchor = _ref12.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }

    hostInsert(anchor, container, nextSibling);
  };

  var removeStaticNode = function removeStaticNode(_ref13) {
    var el = _ref13.el,
        anchor = _ref13.anchor;
    var next;

    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }

    hostRemove(anchor);
  };

  var processElement = function processElement(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    isSVG = isSVG || n2.type === 'svg';

    if (n1 == null) {
      mountElement(n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var mountElement = function mountElement(vnode, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el;
    var vnodeHook;
    var type = vnode.type,
        props = vnode.props,
        shapeFlag = vnode.shapeFlag,
        transition = vnode.transition,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs;

    if (false
    /* HOISTED */
    ) {} else {
      el = vnode.el = hostCreateElement(vnode.type, isSVG, props && props.is, props); // mount children first, since some props may rely on child content
      // being already rendered, e.g. `<select value>`

      if (shapeFlag & 8
      /* TEXT_CHILDREN */
      ) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        mountChildren(vnode.children, el, null, parentComponent, parentSuspense, isSVG && type !== 'foreignObject', slotScopeIds, optimized);
      }

      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'created');
      } // props


      if (props) {
        for (var key in props) {
          if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isReservedProp */ "y"])(key)) {
            hostPatchProp(el, key, null, props[key], isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }

        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      } // scopeId


      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    }

    if (true) {
      Object.defineProperty(el, '__vnode', {
        value: vnode,
        enumerable: false
      });
      Object.defineProperty(el, '__vueParentComponent', {
        value: parentComponent,
        enumerable: false
      });
    }

    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, 'beforeMount');
    } // #1583 For inside suspense + suspense not resolved case, enter hook should call when suspense resolved
    // #1689 For inside suspense + suspense resolved case, just call it


    var needCallTransitionHooks = (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;

    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }

    hostInsert(el, container, anchor);

    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, 'mounted');
      }, parentSuspense);
    }
  };

  var setScopeId = function setScopeId(el, vnode, scopeId, slotScopeIds, parentComponent) {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }

    if (slotScopeIds) {
      for (var i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }

    if (parentComponent) {
      var subTree = parentComponent.subTree;

      if ( true && subTree.patchFlag > 0 && subTree.patchFlag & 2048
      /* DEV_ROOT_FRAGMENT */
      ) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }

      if (vnode === subTree) {
        var parentVNode = parentComponent.vnode;
        setScopeId(el, parentVNode, parentVNode.scopeId, parentVNode.slotScopeIds, parentComponent.parent);
      }
    }
  };

  var mountChildren = function mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var start = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

    for (var i = start; i < children.length; i++) {
      var child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(null, child, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }
  };

  var patchElement = function patchElement(n1, n2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var el = n2.el = n1.el;
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        dirs = n2.dirs; // #1426 take the old vnode's patch flag into account since user may clone a
    // compiler-generated vnode, which de-opts to FULL_PROPS

    patchFlag |= n1.patchFlag & 16
    /* FULL_PROPS */
    ;
    var oldProps = n1.props || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];
    var newProps = n2.props || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"];
    var vnodeHook;

    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }

    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, 'beforeUpdate');
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (patchFlag > 0) {
      // the presence of a patchFlag means this element's render code was
      // generated by the compiler and can take the fast path.
      // in this path old node and new node are guaranteed to have the same shape
      // (i.e. at the exact same position in the source template)
      if (patchFlag & 16
      /* FULL_PROPS */
      ) {
        // element props contain dynamic keys, full diff needed
        patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
      } else {
        // class
        // this flag is matched when the element has dynamic class bindings.
        if (patchFlag & 2
        /* CLASS */
        ) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, 'class', null, newProps.class, isSVG);
          }
        } // style
        // this flag is matched when the element has dynamic style bindings


        if (patchFlag & 4
        /* STYLE */
        ) {
          hostPatchProp(el, 'style', oldProps.style, newProps.style, isSVG);
        } // props
        // This flag is matched when the element has dynamic prop/attr bindings
        // other than class and style. The keys of dynamic prop/attrs are saved for
        // faster iteration.
        // Note dynamic keys like :[foo]="bar" will cause this optimization to
        // bail out and go through a full diff because we need to unset the old key


        if (patchFlag & 8
        /* PROPS */
        ) {
          // if the flag is present then dynamicProps must be non-null
          var propsToUpdate = n2.dynamicProps;

          for (var i = 0; i < propsToUpdate.length; i++) {
            var key = propsToUpdate[i];
            var prev = oldProps[key];
            var next = newProps[key];

            if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
              hostPatchProp(el, key, prev, next, isSVG, n1.children, parentComponent, parentSuspense, unmountChildren);
            }
          }
        }
      } // text
      // This flag is matched when the element has only dynamic text children.


      if (patchFlag & 1
      /* TEXT */
      ) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      // unoptimized, full diff
      patchProps(el, n2, oldProps, newProps, parentComponent, parentSuspense, isSVG);
    }

    var areChildrenSVG = isSVG && n2.type !== 'foreignObject';

    if (dynamicChildren) {
      patchBlockChildren(n1.dynamicChildren, dynamicChildren, el, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds);

      if ( true && parentComponent && parentComponent.type.__hmrId) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      // full diff
      patchChildren(n1, n2, el, null, parentComponent, parentSuspense, areChildrenSVG, slotScopeIds, false);
    }

    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, 'updated');
      }, parentSuspense);
    }
  }; // The fast path for blocks.


  var patchBlockChildren = function patchBlockChildren(oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    for (var i = 0; i < newChildren.length; i++) {
      var oldVNode = oldChildren[i];
      var newVNode = newChildren[i]; // Determine the container (parent element) for the patch.

      var container = // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el && (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
      // which also requires the correct parent container
      !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
      oldVNode.shapeFlag & 6
      /* COMPONENT */
      || oldVNode.shapeFlag & 64
      /* TELEPORT */
      ) ? hostParentNode(oldVNode.el) : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer;
      patch(oldVNode, newVNode, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, true);
    }
  };

  var patchProps = function patchProps(el, vnode, oldProps, newProps, parentComponent, parentSuspense, isSVG) {
    if (oldProps !== newProps) {
      for (var key in newProps) {
        // empty string is not valid prop
        if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isReservedProp */ "y"])(key)) continue;
        var next = newProps[key];
        var prev = oldProps[key];

        if (next !== prev || hostForcePatchProp && hostForcePatchProp(el, key)) {
          hostPatchProp(el, key, prev, next, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
        }
      }

      if (oldProps !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"]) {
        for (var _key14 in oldProps) {
          if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isReservedProp */ "y"])(_key14) && !(_key14 in newProps)) {
            hostPatchProp(el, _key14, oldProps[_key14], null, isSVG, vnode.children, parentComponent, parentSuspense, unmountChildren);
          }
        }
      }
    }
  };

  var processFragment = function processFragment(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText('');
    var fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText('');
    var patchFlag = n2.patchFlag,
        dynamicChildren = n2.dynamicChildren,
        fragmentSlotScopeIds = n2.slotScopeIds;

    if (dynamicChildren) {
      optimized = true;
    } // check if this is a slot fragment with :slotted scope ids


    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }

    if ( true && isHmrUpdating) {
      // HMR updated, force full diff
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor); // a fragment can only have array children
      // since they are either generated by the compiler, or implicitly created
      // from arrays.

      mountChildren(n2.children, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    } else {
      if (patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren) {
        // a stable fragment (template root or <template v-for>) doesn't need to
        // patch children order, but it may contain dynamicChildren.
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, container, parentComponent, parentSuspense, isSVG, slotScopeIds);

        if ( true && parentComponent && parentComponent.type.__hmrId) {
          traverseStaticChildren(n1, n2);
        } else if ( // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        n2.key != null || parentComponent && n2 === parentComponent.subTree) {
          traverseStaticChildren(n1, n2, true
          /* shallow */
          );
        }
      } else {
        // keyed / unkeyed, or manual fragments.
        // for keyed & unkeyed, since they are compiler generated from v-for,
        // each child is guaranteed to be a block so the fragment will never
        // have dynamicChildren.
        patchChildren(n1, n2, container, fragmentEndAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      }
    }
  };

  var processComponent = function processComponent(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    n2.slotScopeIds = slotScopeIds;

    if (n1 == null) {
      if (n2.shapeFlag & 512
      /* COMPONENT_KEPT_ALIVE */
      ) {
        parentComponent.ctx.activate(n2, container, anchor, isSVG, optimized);
      } else {
        mountComponent(n2, container, anchor, parentComponent, parentSuspense, isSVG, optimized);
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };

  var mountComponent = function mountComponent(initialVNode, container, anchor, parentComponent, parentSuspense, isSVG, optimized) {
    var instance = initialVNode.component = createComponentInstance(initialVNode, parentComponent, parentSuspense);

    if ( true && instance.type.__hmrId) {
      registerHMR(instance);
    }

    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, "mount");
    } // inject renderer internals for keepAlive


    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    } // resolve props and slots for setup context


    {
      if (true) {
        startMeasure(instance, "init");
      }

      setupComponent(instance);

      if (true) {
        endMeasure(instance, "init");
      }
    } // setup() is async. This component relies on async logic to be resolved
    // before proceeding

    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect); // Give it a placeholder if this is not hydration
      // TODO handle self-defined fallback

      if (!initialVNode.el) {
        var placeholder = instance.subTree = createVNode(Comment$1);
        processCommentNode(null, placeholder, container, anchor);
      }

      return;
    }

    setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized);

    if (true) {
      popWarningContext();
      endMeasure(instance, "mount");
    }
  };

  var updateComponent = function updateComponent(n1, n2, optimized) {
    var instance = n2.component = n1.component;

    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        // async & still pending - just update props and slots
        // since the component's reactive effect for render isn't set-up yet
        if (true) {
          pushWarningContext(n2);
        }

        updateComponentPreRender(instance, n2, optimized);

        if (true) {
          popWarningContext();
        }

        return;
      } else {
        // normal update
        instance.next = n2; // in case the child component is also queued, remove it to avoid
        // double updating the same child component in the same flush.

        invalidateJob(instance.update); // instance.update is the reactive effect runner.

        instance.update();
      }
    } else {
      // no update needed. just copy over properties
      n2.component = n1.component;
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };

  var setupRenderEffect = function setupRenderEffect(instance, initialVNode, container, anchor, parentSuspense, isSVG, optimized) {
    // create reactive effect for rendering
    instance.update = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* effect */ "b"])(function componentEffect() {
      if (!instance.isMounted) {
        var vnodeHook;
        var _initialVNode = initialVNode,
            el = _initialVNode.el,
            props = _initialVNode.props;
        var bm = instance.bm,
            m = instance.m,
            parent = instance.parent; // beforeMount hook

        if (bm) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(bm);
        } // onVnodeBeforeMount


        if (vnodeHook = props && props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parent, initialVNode);
        }

        if (el && hydrateNode) {
          // vnode has adopted host node - perform hydration instead of mount.
          var hydrateSubTree = function hydrateSubTree() {
            if (true) {
              startMeasure(instance, "render");
            }

            instance.subTree = renderComponentRoot(instance);

            if (true) {
              endMeasure(instance, "render");
            }

            if (true) {
              startMeasure(instance, "hydrate");
            }

            hydrateNode(el, instance.subTree, instance, parentSuspense, null);

            if (true) {
              endMeasure(instance, "hydrate");
            }
          };

          if (isAsyncWrapper(initialVNode)) {
            initialVNode.type.__asyncLoader().then( // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            function () {
              return !instance.isUnmounted && hydrateSubTree();
            });
          } else {
            hydrateSubTree();
          }
        } else {
          if (true) {
            startMeasure(instance, "render");
          }

          var subTree = instance.subTree = renderComponentRoot(instance);

          if (true) {
            endMeasure(instance, "render");
          }

          if (true) {
            startMeasure(instance, "patch");
          }

          patch(null, subTree, container, anchor, instance, parentSuspense, isSVG);

          if (true) {
            endMeasure(instance, "patch");
          }

          initialVNode.el = subTree.el;
        } // mounted hook


        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        } // onVnodeMounted


        if (vnodeHook = props && props.onVnodeMounted) {
          var scopedInitialVNode = initialVNode;
          queuePostRenderEffect(function () {
            return invokeVNodeHook(vnodeHook, parent, scopedInitialVNode);
          }, parentSuspense);
        } // activated hook for keep-alive roots.
        // #1742 activated hook must be accessed after first render
        // since the hook may be injected by a child keep-alive


        if (initialVNode.shapeFlag & 256
        /* COMPONENT_SHOULD_KEEP_ALIVE */
        ) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }

        instance.isMounted = true;

        if (true) {
          devtoolsComponentAdded(instance);
        } // #2458: deference mount-only object parameters to prevent memleaks


        initialVNode = container = anchor = null;
      } else {
        // updateComponent
        // This is triggered by mutation of component's own state (next: null)
        // OR parent calling processComponent (next: VNode)
        var next = instance.next,
            bu = instance.bu,
            u = instance.u,
            _parent = instance.parent,
            vnode = instance.vnode;
        var originNext = next;

        var _vnodeHook;

        if (true) {
          pushWarningContext(next || instance.vnode);
        }

        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        } // beforeUpdate hook


        if (bu) {
          Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(bu);
        } // onVnodeBeforeUpdate


        if (_vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(_vnodeHook, _parent, next, vnode);
        } // render


        if (true) {
          startMeasure(instance, "render");
        }

        var nextTree = renderComponentRoot(instance);

        if (true) {
          endMeasure(instance, "render");
        }

        var prevTree = instance.subTree;
        instance.subTree = nextTree;

        if (true) {
          startMeasure(instance, "patch");
        }

        patch(prevTree, nextTree, // parent may have changed if it's in a teleport
        hostParentNode(prevTree.el), // anchor may have changed if it's in a fragment
        getNextHostNode(prevTree), instance, parentSuspense, isSVG);

        if (true) {
          endMeasure(instance, "patch");
        }

        next.el = nextTree.el;

        if (originNext === null) {
          // self-triggered update. In case of HOC, update parent component
          // vnode el. HOC is indicated by parent instance's subTree pointing
          // to child component's vnode
          updateHOCHostEl(instance, nextTree.el);
        } // updated hook


        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        } // onVnodeUpdated


        if (_vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(function () {
            return invokeVNodeHook(_vnodeHook, _parent, next, vnode);
          }, parentSuspense);
        }

        if (true) {
          devtoolsComponentUpdated(instance);
        }

        if (true) {
          popWarningContext();
        }
      }
    },  true ? createDevEffectOptions(instance) : undefined);

    if (true) {
      // @ts-ignore
      instance.update.ownerInstance = instance;
    }
  };

  var updateComponentPreRender = function updateComponentPreRender(instance, nextVNode, optimized) {
    nextVNode.component = instance;
    var prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* pauseTracking */ "h"])(); // props update may have triggered pre-flush watchers.
    // flush them before the render update.

    flushPreFlushCbs(undefined, instance.update);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* resetTracking */ "m"])();
  };

  var patchChildren = function patchChildren(n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds) {
    var optimized = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : false;
    var c1 = n1 && n1.children;
    var prevShapeFlag = n1 ? n1.shapeFlag : 0;
    var c2 = n2.children;
    var patchFlag = n2.patchFlag,
        shapeFlag = n2.shapeFlag; // fast path

    if (patchFlag > 0) {
      if (patchFlag & 128
      /* KEYED_FRAGMENT */
      ) {
        // this could be either fully-keyed or mixed (some keyed some not)
        // presence of patchFlag means children are guaranteed to be arrays
        patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      } else if (patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) {
        // unkeyed
        patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        return;
      }
    } // children has 3 possibilities: text, array or no children.


    if (shapeFlag & 8
    /* TEXT_CHILDREN */
    ) {
      // text children fast path
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }

      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        // prev children was array
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          // two arrays, cannot assume anything, do full diff
          patchKeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else {
          // no new children, just unmount old
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        // prev children was text OR null
        // new children is array OR null
        if (prevShapeFlag & 8
        /* TEXT_CHILDREN */
        ) {
          hostSetElementText(container, '');
        } // mount new if array


        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      }
    }
  };

  var patchUnkeyedChildren = function patchUnkeyedChildren(c1, c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    c1 = c1 || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"];
    c2 = c2 || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"];
    var oldLength = c1.length;
    var newLength = c2.length;
    var commonLength = Math.min(oldLength, newLength);
    var i;

    for (i = 0; i < commonLength; i++) {
      var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(c1[i], nextChild, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
    }

    if (oldLength > newLength) {
      // remove old
      unmountChildren(c1, parentComponent, parentSuspense, true, false, commonLength);
    } else {
      // mount new
      mountChildren(c2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, commonLength);
    }
  }; // can be all-keyed or mixed


  var patchKeyedChildren = function patchKeyedChildren(c1, c2, container, parentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized) {
    var i = 0;
    var l2 = c2.length;
    var e1 = c1.length - 1; // prev ending index

    var e2 = l2 - 1; // next ending index
    // 1. sync from start
    // (a b) c
    // (a b) d e

    while (i <= e1 && i <= e2) {
      var n1 = c1[i];
      var n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

      if (isSameVNodeType(n1, n2)) {
        patch(n1, n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      i++;
    } // 2. sync from end
    // a (b c)
    // d e (b c)


    while (i <= e1 && i <= e2) {
      var _n = c1[e1];

      var _n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);

      if (isSameVNodeType(_n, _n2)) {
        patch(_n, _n2, container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
      } else {
        break;
      }

      e1--;
      e2--;
    } // 3. common sequence + mount
    // (a b)
    // (a b) c
    // i = 2, e1 = 1, e2 = 2
    // (a b)
    // c (a b)
    // i = 0, e1 = -1, e2 = 0


    if (i > e1) {
      if (i <= e2) {
        var nextPos = e2 + 1;
        var anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;

        while (i <= e2) {
          patch(null, c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]), container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          i++;
        }
      }
    } // 4. common sequence + unmount
    // (a b) c
    // (a b)
    // i = 2, e1 = 2, e2 = 1
    // a (b c)
    // (b c)
    // i = 0, e1 = 0, e2 = -1
    else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } // 5. unknown sequence
    // [i ... e1 + 1]: a b [c d e] f g
    // [i ... e2 + 1]: a b [e d c h] f g
    // i = 2, e1 = 4, e2 = 5
    else {
      var s1 = i; // prev starting index

      var s2 = i; // next starting index
      // 5.1 build key:index map for newChildren

      var keyToNewIndexMap = new Map();

      for (i = s2; i <= e2; i++) {
        var nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);

        if (nextChild.key != null) {
          if ( true && keyToNewIndexMap.has(nextChild.key)) {
            warn("Duplicate keys found during update:", JSON.stringify(nextChild.key), "Make sure keys are unique.");
          }

          keyToNewIndexMap.set(nextChild.key, i);
        }
      } // 5.2 loop through old children left to be patched and try to patch
      // matching nodes & remove nodes that are no longer present


      var j;
      var patched = 0;
      var toBePatched = e2 - s2 + 1;
      var moved = false; // used to track whether any node has moved

      var maxNewIndexSoFar = 0; // works as Map<newIndex, oldIndex>
      // Note that oldIndex is offset by +1
      // and oldIndex = 0 is a special value indicating the new node has
      // no corresponding old node.
      // used for determining longest stable subsequence

      var newIndexToOldIndexMap = new Array(toBePatched);

      for (i = 0; i < toBePatched; i++) {
        newIndexToOldIndexMap[i] = 0;
      }

      for (i = s1; i <= e1; i++) {
        var prevChild = c1[i];

        if (patched >= toBePatched) {
          // all new children have been patched so this can only be a removal
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }

        var newIndex = void 0;

        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          // key-less node, try to locate a key-less node of the same type
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }

        if (newIndex === undefined) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;

          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }

          patch(prevChild, c2[newIndex], container, null, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
          patched++;
        }
      } // 5.3 move and mount
      // generate longest stable subsequence only when nodes have moved


      var increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"];
      j = increasingNewIndexSequence.length - 1; // looping backwards so that we can use last patched node as anchor

      for (i = toBePatched - 1; i >= 0; i--) {
        var nextIndex = s2 + i;
        var _nextChild = c2[nextIndex];

        var _anchor2 = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;

        if (newIndexToOldIndexMap[i] === 0) {
          // mount new
          patch(null, _nextChild, container, _anchor2, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        } else if (moved) {
          // move if:
          // There is no stable subsequence (e.g. a reverse)
          // OR current node is not among the stable sequence
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(_nextChild, container, _anchor2, 2
            /* REORDER */
            );
          } else {
            j--;
          }
        }
      }
    }
  };

  var move = function move(vnode, container, anchor, moveType) {
    var parentSuspense = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var el = vnode.el,
        type = vnode.type,
        transition = vnode.transition,
        children = vnode.children,
        shapeFlag = vnode.shapeFlag;

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }

    if (shapeFlag & 128
    /* SUSPENSE */
    ) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
      type.move(vnode, container, anchor, internals);
      return;
    }

    if (type === Fragment) {
      hostInsert(el, container, anchor);

      for (var i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }

      hostInsert(vnode.anchor, container, anchor);
      return;
    }

    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    } // single nodes


    var needTransition = moveType !== 2
    /* REORDER */
    && shapeFlag & 1
    /* ELEMENT */
    && transition;

    if (needTransition) {
      if (moveType === 0
      /* ENTER */
      ) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(function () {
          return transition.enter(el);
        }, parentSuspense);
      } else {
        var leave = transition.leave,
            delayLeave = transition.delayLeave,
            afterLeave = transition.afterLeave;

        var _remove = function _remove() {
          return hostInsert(el, container, anchor);
        };

        var performLeave = function performLeave() {
          leave(el, function () {
            _remove();

            afterLeave && afterLeave();
          });
        };

        if (delayLeave) {
          delayLeave(el, _remove, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };

  var unmount = function unmount(vnode, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var type = vnode.type,
        props = vnode.props,
        ref = vnode.ref,
        children = vnode.children,
        dynamicChildren = vnode.dynamicChildren,
        shapeFlag = vnode.shapeFlag,
        patchFlag = vnode.patchFlag,
        dirs = vnode.dirs; // unset ref

    if (ref != null) {
      setRef(ref, null, parentSuspense, vnode, true);
    }

    if (shapeFlag & 256
    /* COMPONENT_SHOULD_KEEP_ALIVE */
    ) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }

    var shouldInvokeDirs = shapeFlag & 1
    /* ELEMENT */
    && dirs;
    var vnodeHook;

    if (vnodeHook = props && props.onVnodeBeforeUnmount) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }

    if (shapeFlag & 6
    /* COMPONENT */
    ) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128
      /* SUSPENSE */
      ) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }

      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, 'beforeUnmount');
      }

      if (shapeFlag & 64
      /* TELEPORT */
      ) {
        vnode.type.remove(vnode, parentComponent, parentSuspense, optimized, internals, doRemove);
      } else if (dynamicChildren && (type !== Fragment || patchFlag > 0 && patchFlag & 64
      /* STABLE_FRAGMENT */
      )) {
        // fast path for block nodes: only need to unmount dynamic children.
        unmountChildren(dynamicChildren, parentComponent, parentSuspense, false, true);
      } else if (type === Fragment && (patchFlag & 128
      /* KEYED_FRAGMENT */
      || patchFlag & 256
      /* UNKEYED_FRAGMENT */
      ) || !optimized && shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        unmountChildren(children, parentComponent, parentSuspense);
      }

      if (doRemove) {
        remove(vnode);
      }
    }

    if ((vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(function () {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, 'unmounted');
      }, parentSuspense);
    }
  };

  var remove = function remove(vnode) {
    var type = vnode.type,
        el = vnode.el,
        anchor = vnode.anchor,
        transition = vnode.transition;

    if (type === Fragment) {
      removeFragment(el, anchor);
      return;
    }

    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }

    var performRemove = function performRemove() {
      hostRemove(el);

      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };

    if (vnode.shapeFlag & 1
    /* ELEMENT */
    && transition && !transition.persisted) {
      var leave = transition.leave,
          delayLeave = transition.delayLeave;

      var performLeave = function performLeave() {
        return leave(el, performRemove);
      };

      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };

  var removeFragment = function removeFragment(cur, end) {
    // For fragments, directly remove all contained DOM nodes.
    // (fragment child nodes cannot have transition)
    var next;

    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }

    hostRemove(end);
  };

  var unmountComponent = function unmountComponent(instance, parentSuspense, doRemove) {
    if ( true && instance.type.__hmrId) {
      unregisterHMR(instance);
    }

    var bum = instance.bum,
        effects = instance.effects,
        update = instance.update,
        subTree = instance.subTree,
        um = instance.um; // beforeUnmount hook

    if (bum) {
      Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* invokeArrayFns */ "m"])(bum);
    }

    if (effects) {
      for (var i = 0; i < effects.length; i++) {
        Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* stop */ "q"])(effects[i]);
      }
    } // update may be null if a component is unmounted before its async
    // setup has resolved.


    if (update) {
      Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* stop */ "q"])(update);
      unmount(subTree, instance, parentSuspense, doRemove);
    } // unmounted hook


    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }

    queuePostRenderEffect(function () {
      instance.isUnmounted = true;
    }, parentSuspense); // A component with async dep inside a pending suspense is unmounted before
    // its async dep resolves. This should remove the dep from the suspense, and
    // cause the suspense to resolve immediately if that was the last dep.

    if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
      parentSuspense.deps--;

      if (parentSuspense.deps === 0) {
        parentSuspense.resolve();
      }
    }

    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };

  var unmountChildren = function unmountChildren(children, parentComponent, parentSuspense) {
    var doRemove = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var optimized = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var start = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    for (var i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };

  var getNextHostNode = function getNextHostNode(vnode) {
    if (vnode.shapeFlag & 6
    /* COMPONENT */
    ) {
      return getNextHostNode(vnode.component.subTree);
    }

    if (vnode.shapeFlag & 128
    /* SUSPENSE */
    ) {
      return vnode.suspense.next();
    }

    return hostNextSibling(vnode.anchor || vnode.el);
  };

  var render = function render(vnode, container, isSVG) {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG);
    }

    flushPostFlushCbs();
    container._vnode = vnode;
  };

  var internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  var hydrate;
  var hydrateNode;

  if (createHydrationFns) {
    var _createHydrationFns = createHydrationFns(internals);

    var _createHydrationFns2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_createHydrationFns, 2);

    hydrate = _createHydrationFns2[0];
    hydrateNode = _createHydrationFns2[1];
  }

  return {
    render: render,
    hydrate: hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}

function invokeVNodeHook(hook, instance, vnode) {
  var prevVNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  callWithAsyncErrorHandling(hook, instance, 7
  /* VNODE_HOOK */
  , [vnode, prevVNode]);
}
/**
 * #1156
 * When a component is HMR-enabled, we need to make sure that all static nodes
 * inside a block also inherit the DOM element from the previous tree so that
 * HMR updates (which are full updates) can retrieve the element for patching.
 *
 * #2080
 * Inside keyed `template` fragment static children, if a fragment is moved,
 * the children will always moved so that need inherit el form previous nodes
 * to ensure correct moved position.
 */


function traverseStaticChildren(n1, n2) {
  var shallow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var ch1 = n1.children;
  var ch2 = n2.children;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(ch1) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(ch2)) {
    for (var i = 0; i < ch1.length; i++) {
      // this is only called in the optimized path so array children are
      // guaranteed to be vnodes
      var c1 = ch1[i];
      var c2 = ch2[i];

      if (c2.shapeFlag & 1
      /* ELEMENT */
      && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32
        /* HYDRATE_EVENTS */
        ) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }

        if (!shallow) traverseStaticChildren(c1, c2);
      } // also inherit for comment nodes, but not placeholders (e.g. v-if which
      // would have received .el during block patch)


      if ( true && c2.type === Comment$1 && !c2.el) {
        c2.el = c1.el;
      }
    }
  }
} // https://en.wikipedia.org/wiki/Longest_increasing_subsequence


function getSequence(arr) {
  var p = arr.slice();
  var result = [0];
  var i, j, u, v, c;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    var arrI = arr[i];

    if (arrI !== 0) {
      j = result[result.length - 1];

      if (arr[j] < arrI) {
        p[i] = j;
        result.push(i);
        continue;
      }

      u = 0;
      v = result.length - 1;

      while (u < v) {
        c = (u + v) / 2 | 0;

        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }

      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p[i] = result[u - 1];
        }

        result[u] = i;
      }
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}

var isTeleport = function isTeleport(type) {
  return type.__isTeleport;
};

var isTeleportDisabled = function isTeleportDisabled(props) {
  return props && (props.disabled || props.disabled === '');
};

var isTargetSVG = function isTargetSVG(target) {
  return typeof SVGElement !== 'undefined' && target instanceof SVGElement;
};

var resolveTarget = function resolveTarget(props, select) {
  var targetSelector = props && props.to;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(targetSelector)) {
    if (!select) {
       true && warn("Current renderer does not support string target for Teleports. " + "(missing querySelector renderer option)");
      return null;
    } else {
      var target = select(targetSelector);

      if (!target) {
         true && warn("Failed to locate Teleport target with selector \"".concat(targetSelector, "\". ") + "Note the target element must exist before the component is mounted - " + "i.e. the target cannot be rendered by the component itself, and " + "ideally should be outside of the entire Vue component tree.");
      }

      return target;
    }
  } else {
    if ( true && !targetSelector && !isTeleportDisabled(props)) {
      warn("Invalid Teleport target: ".concat(targetSelector));
    }

    return targetSelector;
  }
};

var TeleportImpl = {
  __isTeleport: true,
  process: function (_process) {
    function process(_x, _x2, _x3, _x4, _x5, _x6, _x7, _x8, _x9, _x10) {
      return _process.apply(this, arguments);
    }

    process.toString = function () {
      return _process.toString();
    };

    return process;
  }(function (n1, n2, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized, internals) {
    var mountChildren = internals.mc,
        patchChildren = internals.pc,
        patchBlockChildren = internals.pbc,
        _internals$o = internals.o,
        insert = _internals$o.insert,
        querySelector = _internals$o.querySelector,
        createText = _internals$o.createText,
        createComment = _internals$o.createComment;
    var disabled = isTeleportDisabled(n2.props);
    var shapeFlag = n2.shapeFlag,
        children = n2.children,
        dynamicChildren = n2.dynamicChildren; // #3302
    // HMR updated, force full diff

    if ( true && isHmrUpdating) {
      optimized = false;
      dynamicChildren = null;
    }

    if (n1 == null) {
      // insert anchors in the main view
      var placeholder = n2.el =  true ? createComment('teleport start') : undefined;
      var mainAnchor = n2.anchor =  true ? createComment('teleport end') : undefined;
      insert(placeholder, container, anchor);
      insert(mainAnchor, container, anchor);
      var target = n2.target = resolveTarget(n2.props, querySelector);
      var targetAnchor = n2.targetAnchor = createText('');

      if (target) {
        insert(targetAnchor, target); // #2652 we could be teleporting from a non-SVG tree into an SVG tree

        isSVG = isSVG || isTargetSVG(target);
      } else if ( true && !disabled) {
        warn('Invalid Teleport target on mount:', target, "(".concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target), ")"));
      }

      var mount = function mount(container, anchor) {
        // Teleport *always* has Array children. This is enforced in both the
        // compiler and vnode children normalization.
        if (shapeFlag & 16
        /* ARRAY_CHILDREN */
        ) {
          mountChildren(children, container, anchor, parentComponent, parentSuspense, isSVG, slotScopeIds, optimized);
        }
      };

      if (disabled) {
        mount(container, mainAnchor);
      } else if (target) {
        mount(target, targetAnchor);
      }
    } else {
      // update content
      n2.el = n1.el;

      var _mainAnchor = n2.anchor = n1.anchor;

      var _target = n2.target = n1.target;

      var _targetAnchor = n2.targetAnchor = n1.targetAnchor;

      var wasDisabled = isTeleportDisabled(n1.props);
      var currentContainer = wasDisabled ? container : _target;
      var currentAnchor = wasDisabled ? _mainAnchor : _targetAnchor;
      isSVG = isSVG || isTargetSVG(_target);

      if (dynamicChildren) {
        // fast path when the teleport happens to be a block root
        patchBlockChildren(n1.dynamicChildren, dynamicChildren, currentContainer, parentComponent, parentSuspense, isSVG, slotScopeIds); // even in block tree mode we need to make sure all root-level nodes
        // in the teleport inherit previous DOM references so that they can
        // be moved in future patches.

        traverseStaticChildren(n1, n2, true);
      } else if (!optimized) {
        patchChildren(n1, n2, currentContainer, currentAnchor, parentComponent, parentSuspense, isSVG, slotScopeIds, false);
      }

      if (disabled) {
        if (!wasDisabled) {
          // enabled -> disabled
          // move into main container
          moveTeleport(n2, container, _mainAnchor, internals, 1
          /* TOGGLE */
          );
        }
      } else {
        // target changed
        if ((n2.props && n2.props.to) !== (n1.props && n1.props.to)) {
          var nextTarget = n2.target = resolveTarget(n2.props, querySelector);

          if (nextTarget) {
            moveTeleport(n2, nextTarget, null, internals, 0
            /* TARGET_CHANGE */
            );
          } else if (true) {
            warn('Invalid Teleport target on update:', _target, "(".concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_target), ")"));
          }
        } else if (wasDisabled) {
          // disabled -> enabled
          // move into teleport target
          moveTeleport(n2, _target, _targetAnchor, internals, 1
          /* TOGGLE */
          );
        }
      }
    }
  }),
  remove: function remove(vnode, parentComponent, parentSuspense, optimized, _ref14, doRemove) {
    var unmount = _ref14.um,
        hostRemove = _ref14.o.remove;
    var shapeFlag = vnode.shapeFlag,
        children = vnode.children,
        anchor = vnode.anchor,
        targetAnchor = vnode.targetAnchor,
        target = vnode.target,
        props = vnode.props;

    if (target) {
      hostRemove(targetAnchor);
    } // an unmounted teleport should always remove its children if not disabled


    if (doRemove || !isTeleportDisabled(props)) {
      hostRemove(anchor);

      if (shapeFlag & 16
      /* ARRAY_CHILDREN */
      ) {
        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          unmount(child, parentComponent, parentSuspense, true, !!child.dynamicChildren);
        }
      }
    }
  },
  move: moveTeleport,
  hydrate: hydrateTeleport
};

function moveTeleport(vnode, container, parentAnchor, _ref15) {
  var insert = _ref15.o.insert,
      move = _ref15.m;
  var moveType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

  // move target anchor if this is a target change.
  if (moveType === 0
  /* TARGET_CHANGE */
  ) {
    insert(vnode.targetAnchor, container, parentAnchor);
  }

  var el = vnode.el,
      anchor = vnode.anchor,
      shapeFlag = vnode.shapeFlag,
      children = vnode.children,
      props = vnode.props;
  var isReorder = moveType === 2
  /* REORDER */
  ; // move main view anchor if this is a re-order.

  if (isReorder) {
    insert(el, container, parentAnchor);
  } // if this is a re-order and teleport is enabled (content is in target)
  // do not move children. So the opposite is: only move children if this
  // is not a reorder, or the teleport is disabled


  if (!isReorder || isTeleportDisabled(props)) {
    // Teleport has either Array children or no children.
    if (shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
      for (var i = 0; i < children.length; i++) {
        move(children[i], container, parentAnchor, 2
        /* REORDER */
        );
      }
    }
  } // move main view anchor if this is a re-order.


  if (isReorder) {
    insert(anchor, container, parentAnchor);
  }
}

function hydrateTeleport(node, vnode, parentComponent, parentSuspense, slotScopeIds, optimized, _ref16, hydrateChildren) {
  var _ref16$o = _ref16.o,
      nextSibling = _ref16$o.nextSibling,
      parentNode = _ref16$o.parentNode,
      querySelector = _ref16$o.querySelector;
  var target = vnode.target = resolveTarget(vnode.props, querySelector);

  if (target) {
    // if multiple teleports rendered to the same target element, we need to
    // pick up from where the last teleport finished instead of the first node
    var targetNode = target._lpa || target.firstChild;

    if (vnode.shapeFlag & 16
    /* ARRAY_CHILDREN */
    ) {
      if (isTeleportDisabled(vnode.props)) {
        vnode.anchor = hydrateChildren(nextSibling(node), vnode, parentNode(node), parentComponent, parentSuspense, slotScopeIds, optimized);
        vnode.targetAnchor = targetNode;
      } else {
        vnode.anchor = nextSibling(node);
        vnode.targetAnchor = hydrateChildren(targetNode, vnode, target, parentComponent, parentSuspense, slotScopeIds, optimized);
      }

      target._lpa = vnode.targetAnchor && nextSibling(vnode.targetAnchor);
    }
  }

  return vnode.anchor && nextSibling(vnode.anchor);
} // Force-casted public typing for h and TSX props inference


var Teleport = TeleportImpl;
var COMPONENTS = 'components';
var DIRECTIVES = 'directives';
/**
 * @private
 */

function resolveComponent(name, maybeSelfReference) {
  return resolveAsset(COMPONENTS, name, true, maybeSelfReference) || name;
}

var NULL_DYNAMIC_COMPONENT = Symbol();
/**
 * @private
 */

function resolveDynamicComponent(component) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(component)) {
    return resolveAsset(COMPONENTS, component, false) || component;
  } else {
    // invalid types will fallthrough to createVNode and raise warning
    return component || NULL_DYNAMIC_COMPONENT;
  }
}
/**
 * @private
 */


function resolveDirective(name) {
  return resolveAsset(DIRECTIVES, name);
} // implementation


function resolveAsset(type, name) {
  var warnMissing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var maybeSelfReference = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var instance = currentRenderingInstance || currentInstance;

  if (instance) {
    var Component = instance.type; // explicit self name has highest priority

    if (type === COMPONENTS) {
      var selfName = getComponentName(Component);

      if (selfName && (selfName === name || selfName === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(name) || selfName === Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* capitalize */ "f"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(name)))) {
        return Component;
      }
    }

    var res = // local registration
    // check instance[type] first which is resolved for options API
    resolve(instance[type] || Component[type], name) || // global registration
    resolve(instance.appContext[type], name);

    if (!res && maybeSelfReference) {
      // fallback to implicit self-reference
      return Component;
    }

    if ( true && warnMissing && !res) {
      warn("Failed to resolve ".concat(type.slice(0, -1), ": ").concat(name));
    }

    return res;
  } else if (true) {
    warn("resolve".concat(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* capitalize */ "f"])(type.slice(0, -1)), " ") + "can only be used in render() or setup().");
  }
}

function resolve(registry, name) {
  return registry && (registry[name] || registry[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(name)] || registry[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* capitalize */ "f"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* camelize */ "e"])(name))]);
}

var Fragment = Symbol( true ? 'Fragment' : undefined);
var Text = Symbol( true ? 'Text' : undefined);
var Comment$1 = Symbol( true ? 'Comment' : undefined);
var Static = Symbol( true ? 'Static' : undefined); // Since v-if and v-for are the two possible ways node structure can dynamically
// change, once we consider v-if branches and each v-for fragment a block, we
// can divide a template into nested blocks, and within each block the node
// structure would be stable. This allows us to skip most children diffing
// and only worry about the dynamic nodes (indicated by patch flags).

var blockStack = [];
var currentBlock = null;
/**
 * Open a block.
 * This must be called before `createBlock`. It cannot be part of `createBlock`
 * because the children of the block are evaluated before `createBlock` itself
 * is called. The generated code typically looks like this:
 *
 * ```js
 * function render() {
 *   return (openBlock(),createBlock('div', null, [...]))
 * }
 * ```
 * disableTracking is true when creating a v-for fragment block, since a v-for
 * fragment always diffs its children.
 *
 * @private
 */

function openBlock() {
  var disableTracking = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  blockStack.push(currentBlock = disableTracking ? null : []);
}

function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
} // Whether we should be tracking dynamic child nodes inside a block.
// Only tracks when this value is > 0
// We are not using a simple boolean because this value may need to be
// incremented/decremented by nested usage of v-once (see below)


var isBlockTreeEnabled = 1;
/**
 * Block tracking sometimes needs to be disabled, for example during the
 * creation of a tree that needs to be cached by v-once. The compiler generates
 * code like this:
 *
 * ``` js
 * _cache[1] || (
 *   setBlockTracking(-1),
 *   _cache[1] = createVNode(...),
 *   setBlockTracking(1),
 *   _cache[1]
 * )
 * ```
 *
 * @private
 */

function setBlockTracking(value) {
  isBlockTreeEnabled += value;
}
/**
 * Create a block root vnode. Takes the same exact arguments as `createVNode`.
 * A block root keeps track of dynamic nodes within the block in the
 * `dynamicChildren` array.
 *
 * @private
 */


function createBlock(type, props, children, patchFlag, dynamicProps) {
  var vnode = createVNode(type, props, children, patchFlag, dynamicProps, true
  /* isBlock: prevent a block from tracking itself */
  ); // save current block children on the block vnode

  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_ARR */ "a"] : null; // close block

  closeBlock(); // a block is always going to be patched, so track it as a child of its
  // parent block

  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }

  return vnode;
}

function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}

function isSameVNodeType(n1, n2) {
  if ( true && n2.shapeFlag & 6
  /* COMPONENT */
  && hmrDirtyComponents.has(n2.type)) {
    // HMR only: if the component has been hot-updated, force a reload.
    return false;
  }

  return n1.type === n2.type && n1.key === n2.key;
}

var vnodeArgsTransformer;
/**
 * Internal API for registering an arguments transform for createVNode
 * used for creating stubs in the test-utils
 * It is *internal* but needs to be exposed for test-utils to pick up proper
 * typings
 */

function transformVNodeArgs(transformer) {
  vnodeArgsTransformer = transformer;
}

var createVNodeWithArgsTransform = function createVNodeWithArgsTransform() {
  for (var _len7 = arguments.length, args = new Array(_len7), _key15 = 0; _key15 < _len7; _key15++) {
    args[_key15] = arguments[_key15];
  }

  return _createVNode.apply(void 0, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args));
};

var InternalObjectKey = "__vInternal";

var normalizeKey = function normalizeKey(_ref17) {
  var key = _ref17.key;
  return key != null ? key : null;
};

var normalizeRef = function normalizeRef(_ref18) {
  var ref = _ref18.ref;
  return ref != null ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(ref) || Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(ref) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(ref) ? {
    i: currentRenderingInstance,
    r: ref
  } : ref : null;
};

var createVNode =  true ? createVNodeWithArgsTransform : undefined;

function _createVNode(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var children = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var patchFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var dynamicProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var isBlockNode = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if ( true && !type) {
      warn("Invalid vnode type when creating vnode: ".concat(type, "."));
    }

    type = Comment$1;
  }

  if (isVNode(type)) {
    // createVNode receiving an existing vnode. This happens in cases like
    // <component :is="vnode"/>
    // #2078 make sure to merge refs during the clone instead of overwriting it
    var cloned = cloneVNode(type, props, true
    /* mergeRef: true */
    );

    if (children) {
      normalizeChildren(cloned, children);
    }

    return cloned;
  } // class component normalization.


  if (isClassComponent(type)) {
    type = type.__vccOpts;
  } // class & style normalization.


  if (props) {
    // for reactive or proxy objects, we need to clone it to enable mutation.
    if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isProxy */ "c"])(props) || InternalObjectKey in props) {
      props = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, props);
    }

    var _props = props,
        klass = _props.class,
        style = _props.style;

    if (klass && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(klass)) {
      props.class = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* normalizeClass */ "H"])(klass);
    }

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(style)) {
      // reactive state objects need to be cloned since they are likely to be
      // mutated
      if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isProxy */ "c"])(style) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(style)) {
        style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, style);
      }

      props.style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* normalizeStyle */ "I"])(style);
    }
  } // encode the vnode type information into a bitmap


  var shapeFlag = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(type) ? 1
  /* ELEMENT */
  : isSuspense(type) ? 128
  /* SUSPENSE */
  : isTeleport(type) ? 64
  /* TELEPORT */
  : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(type) ? 4
  /* STATEFUL_COMPONENT */
  : Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(type) ? 2
  /* FUNCTIONAL_COMPONENT */
  : 0;

  if ( true && shapeFlag & 4
  /* STATEFUL_COMPONENT */
  && Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isProxy */ "c"])(type)) {
    type = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(type);
    warn("Vue received a Component which was made a reactive object. This can " + "lead to unnecessary performance overhead, and should be avoided by " + "marking the component with `markRaw` or using `shallowRef` " + "instead of `ref`.", "\nComponent that was made reactive: ", type);
  }

  var vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type: type,
    props: props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children: null,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    shapeFlag: shapeFlag,
    patchFlag: patchFlag,
    dynamicProps: dynamicProps,
    dynamicChildren: null,
    appContext: null
  }; // validate key

  if ( true && vnode.key !== vnode.key) {
    warn("VNode created with invalid key (NaN). VNode type:", vnode.type);
  }

  normalizeChildren(vnode, children); // normalize suspense children

  if (shapeFlag & 128
  /* SUSPENSE */
  ) {
    type.normalize(vnode);
  }

  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && (patchFlag > 0 || shapeFlag & 6
  /* COMPONENT */
  ) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  patchFlag !== 32
  /* HYDRATE_EVENTS */
  ) {
    currentBlock.push(vnode);
  }

  return vnode;
}

function cloneVNode(vnode, extraProps) {
  var mergeRef = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // This is intentionally NOT using spread or extend to avoid the runtime
  // key enumeration cost.
  var props = vnode.props,
      ref = vnode.ref,
      patchFlag = vnode.patchFlag,
      children = vnode.children;
  var mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  var cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? // #2078 in the case of <component :is="vnode" ref="extra"/>
    // if the vnode itself already has a ref, cloneVNode will need to merge
    // the refs so the single vnode can be set on multiple refs
    mergeRef && ref ? Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(ref) ? ref.concat(normalizeRef(extraProps)) : [ref, normalizeRef(extraProps)] : normalizeRef(extraProps) : ref,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children:  true && patchFlag === -1
    /* HOISTED */
    && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: perserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 // hoisted node
    ? 16
    /* FULL_PROPS */
    : patchFlag | 16
    /* FULL_PROPS */
    : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition: vnode.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    el: vnode.el,
    anchor: vnode.anchor
  };
  return cloned;
}
/**
 * Dev only, for HMR of hoisted vnodes reused in v-for
 * https://github.com/vitejs/vite/issues/2022
 */


function deepCloneVNode(vnode) {
  var cloned = cloneVNode(vnode);

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }

  return cloned;
}
/**
 * @private
 */


function createTextVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' ';
  var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return createVNode(Text, null, text, flag);
}
/**
 * @private
 */


function createStaticVNode(content, numberOfNodes) {
  // A static vnode can contain multiple stringified elements, and the number
  // of elements is necessary for hydration.
  var vnode = createVNode(Static, null, content);
  vnode.staticCount = numberOfNodes;
  return vnode;
}
/**
 * @private
 */


function createCommentVNode() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var asBlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return asBlock ? (openBlock(), createBlock(Comment$1, null, text)) : createVNode(Comment$1, null, text);
}

function normalizeVNode(child) {
  if (child == null || typeof child === 'boolean') {
    // empty placeholder
    return createVNode(Comment$1);
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(child)) {
    // fragment
    return createVNode(Fragment, null, // #3666, avoid reference pollution when reusing vnode
    child.slice());
  } else if (Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(child) === 'object') {
    // already vnode, this should be the most common since compiled templates
    // always produce all-vnode children arrays
    return cloneIfMounted(child);
  } else {
    // strings and numbers
    return createVNode(Text, null, String(child));
  }
} // optimized normalization for template-compiled render fns


function cloneIfMounted(child) {
  return child.el === null ? child : cloneVNode(child);
}

function normalizeChildren(vnode, children) {
  var type = 0;
  var shapeFlag = vnode.shapeFlag;

  if (children == null) {
    children = null;
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(children)) {
    type = 16
    /* ARRAY_CHILDREN */
    ;
  } else if (Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(children) === 'object') {
    if (shapeFlag & 1
    /* ELEMENT */
    || shapeFlag & 64
    /* TELEPORT */
    ) {
      // Normalize slot to plain children for plain element and Teleport
      var slot = children.default;

      if (slot) {
        // _c marker is added by withCtx() indicating this is a compiled slot
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }

      return;
    } else {
      type = 32
      /* SLOTS_CHILDREN */
      ;
      var slotFlag = children._;

      if (!slotFlag && !(InternalObjectKey in children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3
      /* FORWARDED */
      && currentRenderingInstance) {
        // a child component receives forwarded slots from the parent.
        // its slot type is determined by its parent's slot type.
        if (currentRenderingInstance.slots._ === 1
        /* STABLE */
        ) {
          children._ = 1
          /* STABLE */
          ;
        } else {
          children._ = 2
          /* DYNAMIC */
          ;
          vnode.patchFlag |= 1024
          /* DYNAMIC_SLOTS */
          ;
        }
      }
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(children)) {
    children = {
      default: children,
      _ctx: currentRenderingInstance
    };
    type = 32
    /* SLOTS_CHILDREN */
    ;
  } else {
    children = String(children); // force teleport children to array so it can be moved around

    if (shapeFlag & 64
    /* TELEPORT */
    ) {
      type = 16
      /* ARRAY_CHILDREN */
      ;
      children = [createTextVNode(children)];
    } else {
      type = 8
      /* TEXT_CHILDREN */
      ;
    }
  }

  vnode.children = children;
  vnode.shapeFlag |= type;
}

function mergeProps() {
  var ret = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, arguments.length <= 0 ? undefined : arguments[0]);

  for (var i = 1; i < arguments.length; i++) {
    var toMerge = i < 0 || arguments.length <= i ? undefined : arguments[i];

    for (var key in toMerge) {
      if (key === 'class') {
        if (ret.class !== toMerge.class) {
          ret.class = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* normalizeClass */ "H"])([ret.class, toMerge.class]);
        }
      } else if (key === 'style') {
        ret.style = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* normalizeStyle */ "I"])([ret.style, toMerge.style]);
      } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isOn */ "v"])(key)) {
        var existing = ret[key];
        var incoming = toMerge[key];

        if (existing !== incoming) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== '') {
        ret[key] = toMerge[key];
      }
    }
  }

  return ret;
}
/**
 * Actual implementation
 */


function renderList(source, renderItem) {
  var ret;

  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(source) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(source)) {
    ret = new Array(source.length);

    for (var i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(source[i], i);
    }
  } else if (typeof source === 'number') {
    if ( true && !Number.isInteger(source)) {
      warn("The v-for range expect an integer value but got ".concat(source, "."));
      return [];
    }

    ret = new Array(source);

    for (var _i2 = 0; _i2 < source; _i2++) {
      ret[_i2] = renderItem(_i2 + 1, _i2);
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(source, renderItem);
    } else {
      var keys = Object.keys(source);
      ret = new Array(keys.length);

      for (var _i3 = 0, _l = keys.length; _i3 < _l; _i3++) {
        var key = keys[_i3];
        ret[_i3] = renderItem(source[key], key, _i3);
      }
    }
  } else {
    ret = [];
  }

  return ret;
}
/**
 * Compiler runtime helper for creating dynamic slots object
 * @private
 */


function createSlots(slots, dynamicSlots) {
  for (var i = 0; i < dynamicSlots.length; i++) {
    var slot = dynamicSlots[i]; // array of dynamic slot generated by <template v-for="..." #[...]>

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(slot)) {
      for (var j = 0; j < slot.length; j++) {
        slots[slot[j].name] = slot[j].fn;
      }
    } else if (slot) {
      // conditional single slot generated by <template v-if="..." #foo>
      slots[slot.name] = slot.fn;
    }
  }

  return slots;
}
/**
 * Compiler runtime helper for rendering `<slot/>`
 * @private
 */


function renderSlot(slots, name) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var // this is not a user-facing function, so the fallback is always generated by
  // the compiler and guaranteed to be a function returning an array
  fallback = arguments.length > 3 ? arguments[3] : undefined;
  var noSlotted = arguments.length > 4 ? arguments[4] : undefined;
  var slot = slots[name];

  if ( true && slot && slot.length > 1) {
    warn("SSR-optimized slot function detected in a non-SSR-optimized render " + "function. You need to mark this component with $dynamic-slots in the " + "parent template.");

    slot = function slot() {
      return [];
    };
  } // a compiled slot disables block tracking by default to avoid manual
  // invocation interfering with template-based block tracking, but in
  // `renderSlot` we can be sure that it's template-based so we can force
  // enable it.


  if (slot && slot._c) {
    slot._d = false;
  }

  openBlock();
  var validSlotContent = slot && ensureValidVNode(slot(props));
  var rendered = createBlock(Fragment, {
    key: props.key || "_".concat(name)
  }, validSlotContent || (fallback ? fallback() : []), validSlotContent && slots._ === 1
  /* STABLE */
  ? 64
  /* STABLE_FRAGMENT */
  : -2
  /* BAIL */
  );

  if (!noSlotted && rendered.scopeId) {
    rendered.slotScopeIds = [rendered.scopeId + '-s'];
  }

  if (slot && slot._c) {
    slot._d = true;
  }

  return rendered;
}

function ensureValidVNode(vnodes) {
  return vnodes.some(function (child) {
    if (!isVNode(child)) return true;
    if (child.type === Comment$1) return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) return false;
    return true;
  }) ? vnodes : null;
}
/**
 * For prefixing keys in v-on="obj" with "on"
 * @private
 */


function toHandlers(obj) {
  var ret = {};

  if ( true && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(obj)) {
    warn("v-on with no argument expects an object value.");
    return ret;
  }

  for (var key in obj) {
    ret[Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* toHandlerKey */ "L"])(key)] = obj[key];
  }

  return ret;
}
/**
 * #2437 In Vue 3, functional components do not have a public instance proxy but
 * they exist in the internal parent chain. For code that relies on traversing
 * public $parent chains, skip functional ones and go to the parent instead.
 */


var getPublicInstance = function getPublicInstance(i) {
  if (!i) return null;
  if (isStatefulComponent(i)) return getExposeProxy(i) || i.proxy;
  return getPublicInstance(i.parent);
};

var publicPropertiesMap = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(Object.create(null), {
  $: function $(i) {
    return i;
  },
  $el: function $el(i) {
    return i.vnode.el;
  },
  $data: function $data(i) {
    return i.data;
  },
  $props: function $props(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReadonly */ "o"])(i.props) : undefined;
  },
  $attrs: function $attrs(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReadonly */ "o"])(i.attrs) : undefined;
  },
  $slots: function $slots(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReadonly */ "o"])(i.slots) : undefined;
  },
  $refs: function $refs(i) {
    return  true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReadonly */ "o"])(i.refs) : undefined;
  },
  $parent: function $parent(i) {
    return getPublicInstance(i.parent);
  },
  $root: function $root(i) {
    return getPublicInstance(i.root);
  },
  $emit: function $emit(i) {
    return i.emit;
  },
  $options: function $options(i) {
    return  true ? resolveMergedOptions(i) : undefined;
  },
  $forceUpdate: function $forceUpdate(i) {
    return function () {
      return queueJob(i.update);
    };
  },
  $nextTick: function $nextTick(i) {
    return nextTick.bind(i.proxy);
  },
  $watch: function $watch(i) {
    return  true ? instanceWatch.bind(i) : undefined;
  }
});
var PublicInstanceProxyHandlers = {
  get: function get(_ref19, key) {
    var instance = _ref19._;
    var ctx = instance.ctx,
        setupState = instance.setupState,
        data = instance.data,
        props = instance.props,
        accessCache = instance.accessCache,
        type = instance.type,
        appContext = instance.appContext; // for internal formatters to know that this is a Vue instance

    if ( true && key === '__isVue') {
      return true;
    } // prioritize <script setup> bindings during dev.
    // this allows even properties that start with _ or $ to be used - so that
    // it aligns with the production behavior where the render fn is inlined and
    // indeed has access to all declared variables.


    if ( true && setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && setupState.__isScriptSetup && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(setupState, key)) {
      return setupState[key];
    } // data / props / ctx
    // This getter gets called for every property access on the render context
    // during render and is a major hotspot. The most expensive part of this
    // is the multiple hasOwn() calls. It's much faster to do a simple property
    // access on a plain object, so we use an accessCache object (with null
    // prototype) to memoize what access type a key corresponds to.


    var normalizedProps;

    if (key[0] !== '$') {
      var n = accessCache[key];

      if (n !== undefined) {
        switch (n) {
          case 0
          /* SETUP */
          :
            return setupState[key];

          case 1
          /* DATA */
          :
            return data[key];

          case 3
          /* CONTEXT */
          :
            return ctx[key];

          case 2
          /* PROPS */
          :
            return props[key];
          // default: just fallthrough
        }
      } else if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(setupState, key)) {
        accessCache[key] = 0
        /* SETUP */
        ;
        return setupState[key];
      } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(data, key)) {
        accessCache[key] = 1
        /* DATA */
        ;
        return data[key];
      } else if ( // only cache other properties when instance has declared (thus stable)
      // props
      (normalizedProps = instance.propsOptions[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(normalizedProps, key)) {
        accessCache[key] = 2
        /* PROPS */
        ;
        return props[key];
      } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(ctx, key)) {
        accessCache[key] = 3
        /* CONTEXT */
        ;
        return ctx[key];
      } else if ( false || shouldCacheAccess) {
        accessCache[key] = 4
        /* OTHER */
        ;
      }
    }

    var publicGetter = publicPropertiesMap[key];
    var cssModule, globalProperties; // public $xxx properties

    if (publicGetter) {
      if (key === '$attrs') {
        Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* track */ "t"])(instance, "get"
        /* GET */
        , key);
         true && markAttrsAccessed();
      }

      return publicGetter(instance);
    } else if ( // css module (injected by vue-loader)
    (cssModule = type.__cssModules) && (cssModule = cssModule[key])) {
      return cssModule;
    } else if (ctx !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(ctx, key)) {
      // user may set custom properties to `this` that start with `$`
      accessCache[key] = 3
      /* CONTEXT */
      ;
      return ctx[key];
    } else if (globalProperties = appContext.config.globalProperties, Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(globalProperties, key)) {
      {
        return globalProperties[key];
      }
    } else if ( true && currentRenderingInstance && (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isString */ "C"])(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf('__v') !== 0)) {
      if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && (key[0] === '$' || key[0] === '_') && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(data, key)) {
        warn("Property ".concat(JSON.stringify(key), " must be accessed via $data because it starts with a reserved ") + "character (\"$\" or \"_\") and is not proxied on the render context.");
      } else if (instance === currentRenderingInstance) {
        warn("Property ".concat(JSON.stringify(key), " was accessed during render ") + "but is not defined on instance.");
      }
    }
  },
  set: function set(_ref20, key, value) {
    var instance = _ref20._;
    var data = instance.data,
        setupState = instance.setupState,
        ctx = instance.ctx;

    if (setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(setupState, key)) {
      setupState[key] = value;
    } else if (data !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(data, key)) {
      data[key] = value;
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(instance.props, key)) {
       true && warn("Attempting to mutate prop \"".concat(key, "\". Props are readonly."), instance);
      return false;
    }

    if (key[0] === '$' && key.slice(1) in instance) {
       true && warn("Attempting to mutate public property \"".concat(key, "\". ") + "Properties starting with $ are reserved and readonly.", instance);
      return false;
    } else {
      if ( true && key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value: value
        });
      } else {
        ctx[key] = value;
      }
    }

    return true;
  },
  has: function has(_ref21, key) {
    var _ref21$_ = _ref21._,
        data = _ref21$_.data,
        setupState = _ref21$_.setupState,
        accessCache = _ref21$_.accessCache,
        ctx = _ref21$_.ctx,
        appContext = _ref21$_.appContext,
        propsOptions = _ref21$_.propsOptions;
    var normalizedProps;
    return accessCache[key] !== undefined || data !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(data, key) || setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"] && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(setupState, key) || (normalizedProps = propsOptions[0]) && Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(normalizedProps, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(ctx, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(publicPropertiesMap, key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* hasOwn */ "k"])(appContext.config.globalProperties, key);
  }
};

if (true) {
  PublicInstanceProxyHandlers.ownKeys = function (target) {
    warn("Avoid app logic that relies on enumerating keys on a component instance. " + "The keys will be empty in production mode to avoid performance overhead.");
    return Reflect.ownKeys(target);
  };
}

var RuntimeCompiledPublicInstanceProxyHandlers = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, PublicInstanceProxyHandlers, {
  get: function get(target, key) {
    // fast path for unscopables when using `with` block
    if (key === Symbol.unscopables) {
      return;
    }

    return PublicInstanceProxyHandlers.get(target, key, target);
  },
  has: function has(_, key) {
    var has = key[0] !== '_' && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isGloballyWhitelisted */ "p"])(key);

    if ( true && !has && PublicInstanceProxyHandlers.has(_, key)) {
      warn("Property ".concat(JSON.stringify(key), " should not start with _ which is a reserved prefix for Vue internals."));
    }

    return has;
  }
}); // In dev mode, the proxy target exposes the same properties as seen on `this`
// for easier console inspection. In prod mode it will be an empty object so
// these properties definitions can be skipped.

function createRenderContext(instance) {
  var target = {}; // expose internal instance for proxy handlers

  Object.defineProperty(target, "_", {
    configurable: true,
    enumerable: false,
    get: function get() {
      return instance;
    }
  }); // expose public properties

  Object.keys(publicPropertiesMap).forEach(function (key) {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: function get() {
        return publicPropertiesMap[key](instance);
      },
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]
    });
  });
  return target;
} // dev only


function exposePropsOnRenderContext(instance) {
  var ctx = instance.ctx,
      _instance$propsOption6 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance.propsOptions, 1),
      propsOptions = _instance$propsOption6[0];

  if (propsOptions) {
    Object.keys(propsOptions).forEach(function (key) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return instance.props[key];
        },
        set: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]
      });
    });
  }
} // dev only


function exposeSetupStateOnRenderContext(instance) {
  var ctx = instance.ctx,
      setupState = instance.setupState;
  Object.keys(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(setupState)).forEach(function (key) {
    if (!setupState.__isScriptSetup && (key[0] === '$' || key[0] === '_')) {
      warn("setup() return property ".concat(JSON.stringify(key), " should not start with \"$\" or \"_\" ") + "which are reserved prefixes for Vue internals.");
      return;
    }

    Object.defineProperty(ctx, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return setupState[key];
      },
      set: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]
    });
  });
}

var emptyAppContext = createAppContext();
var uid$1 = 0;

function createComponentInstance(vnode, parent, suspense) {
  var type = vnode.type; // inherit parent app context - or - if root, adopt from root vnode

  var appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
  var instance = {
    uid: uid$1++,
    vnode: vnode,
    type: type,
    parent: parent,
    appContext: appContext,
    root: null,
    next: null,
    subTree: null,
    update: null,
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    effects: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null,
    renderCache: [],
    // local resovled assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    emitted: null,
    // props default value
    propsDefaults: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    data: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    props: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    attrs: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    slots: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    refs: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    setupState: _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"],
    setupContext: null,
    // suspense related
    suspense: suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };

  if (true) {
    instance.ctx = createRenderContext(instance);
  } else {}

  instance.root = parent ? parent.root : instance;
  instance.emit = emit.bind(null, instance);
  return instance;
}

var currentInstance = null;

var getCurrentInstance = function getCurrentInstance() {
  return currentInstance || currentRenderingInstance;
};

var setCurrentInstance = function setCurrentInstance(instance) {
  currentInstance = instance;
};

var isBuiltInTag = /*#__PURE__*/Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* makeMap */ "G"])('slot,component');

function validateComponentName(name, config) {
  var appIsNativeTag = config.isNativeTag || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NO */ "c"];

  if (isBuiltInTag(name) || appIsNativeTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component id: ' + name);
  }
}

function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4
  /* STATEFUL_COMPONENT */
  ;
}

var isInSSRComponentSetup = false;

function setupComponent(instance) {
  var isSSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  isInSSRComponentSetup = isSSR;
  var _instance$vnode = instance.vnode,
      props = _instance$vnode.props,
      children = _instance$vnode.children;
  var isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children);
  var setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : undefined;
  isInSSRComponentSetup = false;
  return setupResult;
}

function setupStatefulComponent(instance, isSSR) {
  var Component = instance.type;

  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }

    if (Component.components) {
      var names = Object.keys(Component.components);

      for (var i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }

    if (Component.directives) {
      var _names = Object.keys(Component.directives);

      for (var _i4 = 0; _i4 < _names.length; _i4++) {
        validateDirectiveName(_names[_i4]);
      }
    }

    if (Component.compilerOptions && isRuntimeOnly()) {
      warn("\"compilerOptions\" is only supported when using a build of Vue that " + "includes the runtime compiler. Since you are using a runtime-only " + "build, the options should be passed via your build tool config instead.");
    }
  } // 0. create render proxy property access cache


  instance.accessCache = Object.create(null); // 1. create public instance / render proxy
  // also mark it raw so it's never observed

  instance.proxy = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* markRaw */ "g"])(new Proxy(instance.ctx, PublicInstanceProxyHandlers));

  if (true) {
    exposePropsOnRenderContext(instance);
  } // 2. call setup()


  var setup = Component.setup;

  if (setup) {
    var setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    currentInstance = instance;
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* pauseTracking */ "h"])();
    var setupResult = callWithErrorHandling(setup, instance, 0
    /* SETUP_FUNCTION */
    , [ true ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReadonly */ "o"])(instance.props) : undefined, setupContext]);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* resetTracking */ "m"])();
    currentInstance = null;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isPromise */ "x"])(setupResult)) {
      var unsetInstance = function unsetInstance() {
        currentInstance = null;
      };

      setupResult.then(unsetInstance, unsetInstance);

      if (isSSR) {
        // return the promise so server-renderer can wait on it
        return setupResult.then(function (resolvedResult) {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch(function (e) {
          handleError(e, instance, 0
          /* SETUP_FUNCTION */
          );
        });
      } else {
        // async setup returned Promise.
        // bail here and wait for re-entry.
        instance.asyncDep = setupResult;
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}

function handleSetupResult(instance, setupResult, isSSR) {
  if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(setupResult)) {
    // setup returned an inline render function
    {
      instance.render = setupResult;
    }
  } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(setupResult)) {
    if ( true && isVNode(setupResult)) {
      warn("setup() should not return VNodes directly - " + "return a render function instead.");
    } // setup returned bindings.
    // assuming a render function compiled from template is present.


    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }

    instance.setupState = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* proxyRefs */ "i"])(setupResult);

    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if ( true && setupResult !== undefined) {
    warn("setup() should return an object. Received: ".concat(setupResult === null ? 'null' : Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(setupResult)));
  }

  finishComponentSetup(instance, isSSR);
}

var compile; // dev only

var isRuntimeOnly = function isRuntimeOnly() {
  return !compile;
};
/**
 * For runtime-dom to register the compiler.
 * Note the exported method uses any to avoid d.ts relying on the compiler types.
 */


function registerRuntimeCompiler(_compile) {
  compile = _compile;
}

function finishComponentSetup(instance, isSSR, skipOptions) {
  var Component = instance.type; // template / render function normalization

  if (!instance.render) {
    // could be set from setup()
    if (compile && !Component.render) {
      var template = Component.template;

      if (template) {
        if (true) {
          startMeasure(instance, "compile");
        }

        var _instance$appContext$ = instance.appContext.config,
            isCustomElement = _instance$appContext$.isCustomElement,
            compilerOptions = _instance$appContext$.compilerOptions;
        var delimiters = Component.delimiters,
            componentCompilerOptions = Component.compilerOptions;
        var finalCompilerOptions = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])(Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({
          isCustomElement: isCustomElement,
          delimiters: delimiters
        }, compilerOptions), componentCompilerOptions);
        Component.render = compile(template, finalCompilerOptions);

        if (true) {
          endMeasure(instance, "compile");
        }
      }
    }

    instance.render = Component.render || _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"]; // for runtime-compiled render functions using `with` blocks, the render
    // proxy used needs a different `has` handler which is more performant and
    // also only allows a whitelist of globals to fallthrough.

    if (instance.render._rc) {
      instance.withProxy = new Proxy(instance.ctx, RuntimeCompiledPublicInstanceProxyHandlers);
    }
  } // support for 2.x options


  if (true) {
    currentInstance = instance;
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* pauseTracking */ "h"])();
    applyOptions(instance);
    Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* resetTracking */ "m"])();
    currentInstance = null;
  } // warn missing template/render
  // the runtime compilation of template in SSR is done by server-render


  if ( true && !Component.render && instance.render === _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* NOOP */ "d"] && !isSSR) {
    /* istanbul ignore if */
    if (!compile && Component.template) {
      warn("Component provided template option but " + "runtime compilation is not supported in this build of Vue." + " Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\"."
      /* should not happen */
      );
    } else {
      warn("Component is missing template or render function.");
    }
  }
}

var attrDevProxyHandlers = {
  get: function get(target, key) {
    markAttrsAccessed();
    return target[key];
  },
  set: function set() {
    warn("setupContext.attrs is readonly.");
    return false;
  },
  deleteProperty: function deleteProperty() {
    warn("setupContext.attrs is readonly.");
    return false;
  }
};

function createSetupContext(instance) {
  var expose = function expose(exposed) {
    if ( true && instance.exposed) {
      warn("expose() should be called only once per setup().");
    }

    instance.exposed = exposed || {};
  };

  if (true) {
    var attrs; // We use getters in dev in case libs like test-utils overwrite instance
    // properties (overwrites should not be done in prod)

    return Object.freeze({
      get attrs() {
        return attrs || (attrs = new Proxy(instance.attrs, attrDevProxyHandlers));
      },

      get slots() {
        return Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* shallowReadonly */ "o"])(instance.slots);
      },

      get emit() {
        return function (event) {
          for (var _len8 = arguments.length, args = new Array(_len8 > 1 ? _len8 - 1 : 0), _key16 = 1; _key16 < _len8; _key16++) {
            args[_key16 - 1] = arguments[_key16];
          }

          return instance.emit.apply(instance, [event].concat(args));
        };
      },

      expose: expose
    });
  } else {}
}

function getExposeProxy(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* proxyRefs */ "i"])(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* markRaw */ "g"])(instance.exposed)), {
      get: function get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      }
    }));
  }
} // record effects created during a component's setup() so that they can be
// stopped when the component unmounts


function recordInstanceBoundEffect(effect) {
  var instance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentInstance;

  if (instance) {
    (instance.effects || (instance.effects = [])).push(effect);
  }
}

var classifyRE = /(?:^|[-_])(\w)/g;

var classify = function classify(str) {
  return str.replace(classifyRE, function (c) {
    return c.toUpperCase();
  }).replace(/[-_]/g, '');
};

function getComponentName(Component) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(Component) ? Component.displayName || Component.name : Component.name;
}
/* istanbul ignore next */


function formatComponentName(instance, Component) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var name = getComponentName(Component);

  if (!name && Component.__file) {
    var match = Component.__file.match(/([^/\\]+)\.\w+$/);

    if (match) {
      name = match[1];
    }
  }

  if (!name && instance && instance.parent) {
    // try to infer the name based on reverse resolution
    var inferFromRegistry = function inferFromRegistry(registry) {
      for (var key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };

    name = inferFromRegistry(instance.components || instance.parent.type.components) || inferFromRegistry(instance.appContext.components);
  }

  return name ? classify(name) : isRoot ? "App" : "Anonymous";
}

function isClassComponent(value) {
  return Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(value) && '__vccOpts' in value;
}

function computed(getterOrOptions) {
  var c = Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* computed */ "a"])(getterOrOptions);
  recordInstanceBoundEffect(c.effect);
  return c;
}

 true ? Object.freeze({}) : undefined;
 true ? Object.freeze([]) : undefined;

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isObject = function isObject(val) {
  return val !== null && Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}; // dev only


var warnRuntimeUsage = function warnRuntimeUsage(method) {
  return warn("".concat(method, "() is a compiler-hint helper that is only usable inside ") + "<script setup> of a single file component. Its arguments should be " + "compiled away and passing it at runtime has no effect.");
}; // implementation


function defineProps() {
  if (true) {
    warnRuntimeUsage("defineProps");
  }

  return null;
} // implementation


function defineEmits() {
  if (true) {
    warnRuntimeUsage("defineEmits");
  }

  return null;
}
/**
 * @deprecated use `defineEmits` instead.
 */


var defineEmit = defineEmits;
/**
 * Vue `<script setup>` compiler macro for declaring a component's exposed
 * instance properties when it is accessed by a parent component via template
 * refs.
 *
 * `<script setup>` components are closed by default - i.e. varaibles inside
 * the `<script setup>` scope is not exposed to parent unless explicitly exposed
 * via `defineExpose`.
 *
 * This is only usable inside `<script setup>`, is compiled away in the
 * output and should **not** be actually called at runtime.
 */

function defineExpose(exposed) {
  if (true) {
    warnRuntimeUsage("defineExpose");
  }
}
/**
 * Vue `<script setup>` compiler macro for providing props default values when
 * using type-based `defineProps` decalration.
 *
 * Example usage:
 * ```ts
 * withDefaults(defineProps<{
 *   size?: number
 *   labels?: string[]
 * }>(), {
 *   size: 3,
 *   labels: () => ['default label']
 * })
 * ```
 *
 * This is only usable inside `<script setup>`, is compiled away in the output
 * and should **not** be actually called at runtime.
 */


function withDefaults(props, defaults) {
  if (true) {
    warnRuntimeUsage("withDefaults");
  }

  return null;
}
/**
 * @deprecated use `useSlots` and `useAttrs` instead.
 */


function useContext() {
  if (true) {
    warn("`useContext()` has been deprecated and will be removed in the " + "next minor release. Use `useSlots()` and `useAttrs()` instead.");
  }

  return getContext();
}

function useSlots() {
  return getContext().slots;
}

function useAttrs() {
  return getContext().attrs;
}

function getContext() {
  var i = getCurrentInstance();

  if ( true && !i) {
    warn("useContext() called without active instance.");
  }

  return i.setupContext || (i.setupContext = createSetupContext(i));
}
/**
 * Runtime helper for merging default declarations. Imported by compiled code
 * only.
 * @internal
 */


function mergeDefaults( // the base props is compiler-generated and guaranteed to be in this shape.
props, defaults) {
  for (var key in defaults) {
    var val = props[key];

    if (val) {
      val.default = defaults[key];
    } else if (val === null) {
      props[key] = {
        default: defaults[key]
      };
    } else if (true) {
      warn("props default key \"".concat(key, "\" has no corresponding declaration."));
    }
  }

  return props;
}
/**
 * `<script setup>` helper for persisting the current instance context over
 * async/await flows.
 *
 * `@vue/compiler-sfc` converts the following:
 *
 * ```ts
 * const x = await foo()
 * ```
 *
 * into:
 *
 * ```ts
 * let __temp, __restore
 * const x = (([__temp, __restore] = withAsyncContext(() => foo())),__temp=await __temp,__restore(),__temp)
 * ```
 * @internal
 */


function withAsyncContext(getAwaitable) {
  var ctx = getCurrentInstance();
  var awaitable = getAwaitable();
  setCurrentInstance(null);

  if (isPromise(awaitable)) {
    awaitable = awaitable.catch(function (e) {
      setCurrentInstance(ctx);
      throw e;
    });
  }

  return [awaitable, function () {
    return setCurrentInstance(ctx);
  }];
} // Actual implementation


function h(type, propsOrChildren, children) {
  var l = arguments.length;

  if (l === 2) {
    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(propsOrChildren) && !Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(propsOrChildren)) {
      // single vnode without props
      if (isVNode(propsOrChildren)) {
        return createVNode(type, null, [propsOrChildren]);
      } // props without children


      return createVNode(type, propsOrChildren);
    } else {
      // omit props
      return createVNode(type, null, propsOrChildren);
    }
  } else {
    if (l > 3) {
      children = Array.prototype.slice.call(arguments, 2);
    } else if (l === 3 && isVNode(children)) {
      children = [children];
    }

    return createVNode(type, propsOrChildren, children);
  }
}

var ssrContextKey = Symbol( true ? "ssrContext" : undefined);

var useSSRContext = function useSSRContext() {
  {
    var ctx = inject(ssrContextKey);

    if (!ctx) {
      warn("Server rendering context not provided. Make sure to only call " + "useSSRContext() conditionally in the server build.");
    }

    return ctx;
  }
};

function initCustomFormatter() {
  /* eslint-disable no-restricted-globals */
  if ( false || typeof window === 'undefined') {
    return;
  }

  var vueStyle = {
    style: 'color:#3ba776'
  };
  var numberStyle = {
    style: 'color:#0b1bc9'
  };
  var stringStyle = {
    style: 'color:#b62e24'
  };
  var keywordStyle = {
    style: 'color:#9d288c'
  }; // custom formatter for Chrome
  // https://www.mattzeunert.com/2016/02/19/custom-chrome-devtools-object-formatters.html

  var formatter = {
    header: function header(obj) {
      // TODO also format ComponentPublicInstance & ctx.slots/attrs in setup
      if (!Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(obj)) {
        return null;
      }

      if (obj.__isVue) {
        return ['div', vueStyle, "VueInstance"];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isRef */ "f"])(obj)) {
        return ['div', {}, ['span', vueStyle, genRefFlag(obj)], '<', formatValue(obj.value), ">"];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isReactive */ "d"])(obj)) {
        return ['div', {}, ['span', vueStyle, 'Reactive'], '<', formatValue(obj), ">".concat(Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isReadonly */ "e"])(obj) ? " (readonly)" : "")];
      } else if (Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* isReadonly */ "e"])(obj)) {
        return ['div', {}, ['span', vueStyle, 'Readonly'], '<', formatValue(obj), '>'];
      }

      return null;
    },
    hasBody: function hasBody(obj) {
      return obj && obj.__isVue;
    },
    body: function body(obj) {
      if (obj && obj.__isVue) {
        return ['div', {}].concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(formatInstance(obj.$)));
      }
    }
  };

  function formatInstance(instance) {
    var blocks = [];

    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock('props', Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(instance.props)));
    }

    if (instance.setupState !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"]) {
      blocks.push(createInstanceBlock('setup', instance.setupState));
    }

    if (instance.data !== _vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* EMPTY_OBJ */ "b"]) {
      blocks.push(createInstanceBlock('data', Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(instance.data)));
    }

    var computed = extractKeys(instance, 'computed');

    if (computed) {
      blocks.push(createInstanceBlock('computed', computed));
    }

    var injected = extractKeys(instance, 'inject');

    if (injected) {
      blocks.push(createInstanceBlock('injected', injected));
    }

    blocks.push(['div', {}, ['span', {
      style: keywordStyle.style + ';opacity:0.66'
    }, '$ (internal): '], ['object', {
      object: instance
    }]]);
    return blocks;
  }

  function createInstanceBlock(type, target) {
    target = Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* extend */ "h"])({}, target);

    if (!Object.keys(target).length) {
      return ['span', {}];
    }

    return ['div', {
      style: 'line-height:1.25em;margin-bottom:0.6em'
    }, ['div', {
      style: 'color:#476582'
    }, type], ['div', {
      style: 'padding-left:1.25em'
    }].concat(Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object.keys(target).map(function (key) {
      return ['div', {}, ['span', keywordStyle, key + ': '], formatValue(target[key], false)];
    })))];
  }

  function formatValue(v) {
    var asRaw = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (typeof v === 'number') {
      return ['span', numberStyle, v];
    } else if (typeof v === 'string') {
      return ['span', stringStyle, JSON.stringify(v)];
    } else if (typeof v === 'boolean') {
      return ['span', keywordStyle, v];
    } else if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(v)) {
      return ['object', {
        object: asRaw ? Object(_vue_reactivity__WEBPACK_IMPORTED_MODULE_4__[/* toRaw */ "r"])(v) : v
      }];
    } else {
      return ['span', stringStyle, String(v)];
    }
  }

  function extractKeys(instance, type) {
    var Comp = instance.type;

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isFunction */ "o"])(Comp)) {
      return;
    }

    var extracted = {};

    for (var key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }

    return extracted;
  }

  function isKeyOfType(Comp, key, type) {
    var opts = Comp[type];

    if (Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isArray */ "n"])(opts) && opts.includes(key) || Object(_vue_shared__WEBPACK_IMPORTED_MODULE_5__[/* isObject */ "u"])(opts) && key in opts) {
      return true;
    }

    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }

    if (Comp.mixins && Comp.mixins.some(function (m) {
      return isKeyOfType(m, key, type);
    })) {
      return true;
    }
  }

  function genRefFlag(v) {
    if (v._shallow) {
      return "ShallowRef";
    }

    if (v.effect) {
      return "ComputedRef";
    }

    return "Ref";
  }

  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
} // Core API ------------------------------------------------------------------


var version = "3.1.5";
/**
 * SSR utils for \@vue/server-renderer. Only exposed in cjs builds.
 * @internal
 */

var ssrUtils = null;
/**
 * @internal only exposed in compat builds
 */

var resolveFilter = null;
/**
 * @internal only exposed in compat builds.
 */

var compatUtils = null;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["TaroElement"]))

/***/ }),

/***/ "./node_modules/@vue/shared/dist/shared.esm-bundler.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vue/shared/dist/shared.esm-bundler.js ***!
  \*************************************************************/
/*! exports provided: EMPTY_ARR, EMPTY_OBJ, NO, NOOP, PatchFlagNames, babelParserDefaultPlugins, camelize, capitalize, def, escapeHtml, escapeHtmlComment, extend, generateCodeFrame, getGlobalThis, hasChanged, hasOwn, hyphenate, invokeArrayFns, isArray, isBooleanAttr, isDate, isFunction, isGloballyWhitelisted, isHTMLTag, isIntegerKey, isKnownAttr, isMap, isModelListener, isNoUnitNumericStyleProp, isObject, isOn, isPlainObject, isPromise, isReservedProp, isSSRSafeAttrName, isSVGTag, isSet, isSpecialBooleanAttr, isString, isSymbol, isVoidTag, looseEqual, looseIndexOf, makeMap, normalizeClass, normalizeStyle, objectToString, parseStringStyle, propsToAttrMap, remove, slotFlagsText, stringifyStyle, toDisplayString, toHandlerKey, toNumber, toRawType, toTypeString */
/*! exports used: EMPTY_ARR, EMPTY_OBJ, NO, NOOP, camelize, capitalize, def, extend, getGlobalThis, hasChanged, hasOwn, hyphenate, invokeArrayFns, isArray, isFunction, isGloballyWhitelisted, isHTMLTag, isIntegerKey, isMap, isModelListener, isObject, isOn, isPlainObject, isPromise, isReservedProp, isSVGTag, isSet, isSpecialBooleanAttr, isString, isSymbol, looseEqual, looseIndexOf, makeMap, normalizeClass, normalizeStyle, remove, toDisplayString, toHandlerKey, toNumber, toRawType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(window, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_ARR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EMPTY_OBJ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NOOP; });
/* unused harmony export PatchFlagNames */
/* unused harmony export babelParserDefaultPlugins */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return capitalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return def; });
/* unused harmony export escapeHtml */
/* unused harmony export escapeHtmlComment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return extend; });
/* unused harmony export generateCodeFrame */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getGlobalThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return hasChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hyphenate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return invokeArrayFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return isArray; });
/* unused harmony export isBooleanAttr */
/* unused harmony export isDate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isGloballyWhitelisted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isIntegerKey; });
/* unused harmony export isKnownAttr */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return isModelListener; });
/* unused harmony export isNoUnitNumericStyleProp */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return isOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return isReservedProp; });
/* unused harmony export isSSRSafeAttrName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return isSVGTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return isSpecialBooleanAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return isSymbol; });
/* unused harmony export isVoidTag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return looseEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return looseIndexOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return makeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return normalizeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return normalizeStyle; });
/* unused harmony export objectToString */
/* unused harmony export parseStringStyle */
/* unused harmony export propsToAttrMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return remove; });
/* unused harmony export slotFlagsText */
/* unused harmony export stringifyStyle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return toDisplayString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return toHandlerKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return toRawType; });
/* unused harmony export toTypeString */
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");





var _PatchFlagNames, _slotFlagsText;

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}
/**
 * dev only flag -> name mapping
 */


var PatchFlagNames = (_PatchFlagNames = {}, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 1
/* TEXT */
, "TEXT"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 2
/* CLASS */
, "CLASS"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 4
/* STYLE */
, "STYLE"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 8
/* PROPS */
, "PROPS"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 16
/* FULL_PROPS */
, "FULL_PROPS"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 32
/* HYDRATE_EVENTS */
, "HYDRATE_EVENTS"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 64
/* STABLE_FRAGMENT */
, "STABLE_FRAGMENT"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 128
/* KEYED_FRAGMENT */
, "KEYED_FRAGMENT"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 256
/* UNKEYED_FRAGMENT */
, "UNKEYED_FRAGMENT"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 512
/* NEED_PATCH */
, "NEED_PATCH"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 1024
/* DYNAMIC_SLOTS */
, "DYNAMIC_SLOTS"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, 2048
/* DEV_ROOT_FRAGMENT */
, "DEV_ROOT_FRAGMENT"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, -1
/* HOISTED */
, "HOISTED"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_PatchFlagNames, -2
/* BAIL */
, "BAIL"), _PatchFlagNames);
/**
 * Dev only
 */

var slotFlagsText = (_slotFlagsText = {}, Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_slotFlagsText, 1
/* STABLE */
, 'STABLE'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_slotFlagsText, 2
/* DYNAMIC */
, 'DYNAMIC'), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_slotFlagsText, 3
/* FORWARDED */
, 'FORWARDED'), _slotFlagsText);
var GLOBALS_WHITE_LISTED = 'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' + 'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' + 'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt';
var isGloballyWhitelisted = /*#__PURE__*/makeMap(GLOBALS_WHITE_LISTED);
var range = 2;

function generateCodeFrame(source) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : source.length;
  // Split the content into individual lines but capture the newline sequence
  // that separated each line. This is important because the actual sequence is
  // needed to properly take into account the full line length for offset
  // comparison
  var lines = source.split(/(\r?\n)/); // Separate the lines and newline sequences into separate arrays for easier referencing

  var newlineSequences = lines.filter(function (_, idx) {
    return idx % 2 === 1;
  });
  lines = lines.filter(function (_, idx) {
    return idx % 2 === 0;
  });
  var count = 0;
  var res = [];

  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);

    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) continue;
        var line = j + 1;
        res.push("".concat(line).concat(' '.repeat(Math.max(3 - String(line).length, 0)), "|  ").concat(lines[j]));
        var lineLength = lines[j].length;
        var newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;

        if (j === i) {
          // push underline
          var pad = start - (count - (lineLength + newLineSeqLength));
          var length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push("   |  " + ' '.repeat(pad) + '^'.repeat(length));
        } else if (j > i) {
          if (end > count) {
            var _length = Math.max(Math.min(end - count, lineLength), 1);

            res.push("   |  " + '^'.repeat(_length));
          }

          count += lineLength + newLineSeqLength;
        }
      }

      break;
    }
  }

  return res.join('\n');
}
/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */


var specialBooleanAttrs = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
var isSpecialBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs);
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */

var isBooleanAttr = /*#__PURE__*/makeMap(specialBooleanAttrs + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden," + "loop,open,required,reversed,scoped,seamless," + "checked,muted,multiple,selected");
var unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
var attrValidationCache = {};

function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }

  var isUnsafe = unsafeAttrCharRE.test(name);

  if (isUnsafe) {
    console.error("unsafe attribute name: ".concat(name));
  }

  return attrValidationCache[name] = !isUnsafe;
}

var propsToAttrMap = {
  acceptCharset: 'accept-charset',
  className: 'class',
  htmlFor: 'for',
  httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */

var isNoUnitNumericStyleProp = /*#__PURE__*/makeMap("animation-iteration-count,border-image-outset,border-image-slice," + "border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count," + "columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order," + "grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column," + "grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp," + "line-height,opacity,order,orphans,tab-size,widows,z-index,zoom," + // SVG
"fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset," + "stroke-miterlimit,stroke-opacity,stroke-width");
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */

var isKnownAttr = /*#__PURE__*/makeMap("accept,accept-charset,accesskey,action,align,allow,alt,async," + "autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor," + "border,buffered,capture,challenge,charset,checked,cite,class,code," + "codebase,color,cols,colspan,content,contenteditable,contextmenu,controls," + "coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname," + "disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form," + "formaction,formenctype,formmethod,formnovalidate,formtarget,headers," + "height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity," + "ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low," + "manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate," + "open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly," + "referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped," + "selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset," + "start,step,style,summary,tabindex,target,title,translate,type,usemap," + "value,width,wrap");

function normalizeStyle(value) {
  if (isArray(value)) {
    var res = {};

    for (var i = 0; i < value.length; i++) {
      var item = value[i];
      var normalized = normalizeStyle(isString(item) ? parseStringStyle(item) : item);

      if (normalized) {
        for (var key in normalized) {
          res[key] = normalized[key];
        }
      }
    }

    return res;
  } else if (isObject(value)) {
    return value;
  }
}

var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:(.+)/;

function parseStringStyle(cssText) {
  var ret = {};
  cssText.split(listDelimiterRE).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}

function stringifyStyle(styles) {
  var ret = '';

  if (!styles) {
    return ret;
  }

  for (var key in styles) {
    var value = styles[key];
    var normalizedKey = key.startsWith("--") ? key : hyphenate(key);

    if (isString(value) || typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey)) {
      // only render valid values
      ret += "".concat(normalizedKey, ":").concat(value, ";");
    }
  }

  return ret;
}

function normalizeClass(value) {
  var res = '';

  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      var normalized = normalizeClass(value[i]);

      if (normalized) {
        res += normalized + ' ';
      }
    }
  } else if (isObject(value)) {
    for (var name in value) {
      if (value[name]) {
        res += name + ' ';
      }
    }
  }

  return res.trim();
} // These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element


var HTML_TAGS = 'html,body,base,head,link,meta,style,title,address,article,aside,footer,' + 'header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,' + 'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' + 'data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,' + 'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' + 'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' + 'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' + 'option,output,progress,select,textarea,details,dialog,menu,' + 'summary,template,blockquote,iframe,tfoot'; // https://developer.mozilla.org/en-US/docs/Web/SVG/Element

var SVG_TAGS = 'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' + 'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' + 'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' + 'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' + 'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' + 'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' + 'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' + 'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' + 'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' + 'text,textPath,title,tspan,unknown,use,view';
var VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
var isHTMLTag = /*#__PURE__*/makeMap(HTML_TAGS);
var isSVGTag = /*#__PURE__*/makeMap(SVG_TAGS);
var isVoidTag = /*#__PURE__*/makeMap(VOID_TAGS);
var escapeRE = /["'&<>]/;

function escapeHtml(string) {
  var str = '' + string;
  var match = escapeRE.exec(str);

  if (!match) {
    return str;
  }

  var html = '';
  var escaped;
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escaped = '&quot;';
        break;

      case 38:
        // &
        escaped = '&amp;';
        break;

      case 39:
        // '
        escaped = '&#39;';
        break;

      case 60:
        // <
        escaped = '&lt;';
        break;

      case 62:
        // >
        escaped = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escaped;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // https://www.w3.org/TR/html52/syntax.html#comments


var commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;

function escapeHtmlComment(src) {
  return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  var equal = true;

  for (var i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }

  return equal;
}

function looseEqual(a, b) {
  if (a === b) return true;
  var aValidType = isDate(a);
  var bValidType = isDate(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }

  aValidType = isArray(a);
  bValidType = isArray(b);

  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }

  aValidType = isObject(a);
  bValidType = isObject(b);

  if (aValidType || bValidType) {
    /* istanbul ignore if: this if will probably never be called */
    if (!aValidType || !bValidType) {
      return false;
    }

    var aKeysCount = Object.keys(a).length;
    var bKeysCount = Object.keys(b).length;

    if (aKeysCount !== bKeysCount) {
      return false;
    }

    for (var key in a) {
      var aHasKey = a.hasOwnProperty(key);
      var bHasKey = b.hasOwnProperty(key);

      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }

  return String(a) === String(b);
}

function looseIndexOf(arr, val) {
  return arr.findIndex(function (item) {
    return looseEqual(item, val);
  });
}
/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */


var toDisplayString = function toDisplayString(val) {
  return val == null ? '' : isObject(val) ? JSON.stringify(val, replacer, 2) : String(val);
};

var replacer = function replacer(_key, val) {
  if (isMap(val)) {
    return Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, "Map(".concat(val.size, ")"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val.entries()).reduce(function (entries, _ref) {
      var _ref2 = Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      entries["".concat(key, " =>")] = val;
      return entries;
    }, {}));
  } else if (isSet(val)) {
    return Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, "Set(".concat(val.size, ")"), Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(val.values()));
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }

  return val;
};
/**
 * List of @babel/parser plugins that are used for template expression
 * transforms and SFC script transforms. By default we enable proposals slated
 * for ES2020. This will need to be updated as the spec moves forward.
 * Full list at https://babeljs.io/docs/en/next/babel-parser#plugins
 */


var babelParserDefaultPlugins = ['bigInt', 'optionalChaining', 'nullishCoalescingOperator'];
var EMPTY_OBJ =  true ? Object.freeze({}) : undefined;
var EMPTY_ARR =  true ? Object.freeze([]) : undefined;

var NOOP = function NOOP() {};
/**
 * Always return false.
 */


var NO = function NO() {
  return false;
};

var onRE = /^on[^a-z]/;

var isOn = function isOn(key) {
  return onRE.test(key);
};

var isModelListener = function isModelListener(key) {
  return key.startsWith('onUpdate:');
};

var extend = Object.assign;

var remove = function remove(arr, el) {
  var i = arr.indexOf(el);

  if (i > -1) {
    arr.splice(i, 1);
  }
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var isArray = Array.isArray;

var isMap = function isMap(val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function isSet(val) {
  return toTypeString(val) === '[object Set]';
};

var isDate = function isDate(val) {
  return val instanceof Date;
};

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

var isString = function isString(val) {
  return typeof val === 'string';
};

var isSymbol = function isSymbol(val) {
  return Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'symbol';
};

var isObject = function isObject(val) {
  return val !== null && Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object';
};

var isPromise = function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

var objectToString = Object.prototype.toString;

var toTypeString = function toTypeString(value) {
  return objectToString.call(value);
};

var toRawType = function toRawType(value) {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};

var isPlainObject = function isPlainObject(val) {
  return toTypeString(val) === '[object Object]';
};

var isIntegerKey = function isIntegerKey(key) {
  return isString(key) && key !== 'NaN' && key[0] !== '-' && '' + parseInt(key, 10) === key;
};

var isReservedProp = /*#__PURE__*/makeMap( // the leading comma is intentional so empty string "" is also included
',key,ref,' + 'onVnodeBeforeMount,onVnodeMounted,' + 'onVnodeBeforeUpdate,onVnodeUpdated,' + 'onVnodeBeforeUnmount,onVnodeUnmounted');

var cacheStringFunction = function cacheStringFunction(fn) {
  var cache = Object.create(null);
  return function (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};

var camelizeRE = /-(\w)/g;
/**
 * @private
 */

var camelize = cacheStringFunction(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */

var hyphenate = cacheStringFunction(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * @private
 */

var capitalize = cacheStringFunction(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * @private
 */

var toHandlerKey = cacheStringFunction(function (str) {
  return str ? "on".concat(capitalize(str)) : "";
}); // compare whether a value has changed, accounting for NaN.

var hasChanged = function hasChanged(value, oldValue) {
  return value !== oldValue && (value === value || oldValue === oldValue);
};

var invokeArrayFns = function invokeArrayFns(fns, arg) {
  for (var i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};

var def = function def(obj, key, value) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value: value
  });
};

var toNumber = function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
};

var _globalThis;

var getGlobalThis = function getGlobalThis() {
  return _globalThis || (_globalThis = typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/construct.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/get.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/get.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _get; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(self);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/set.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/set.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _set; });
/* harmony import */ var _superPropBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superPropBase.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/superPropBase.js");
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/defineProperty.js");



function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = Object(_superPropBase_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/superPropBase.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/superPropBase.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _superPropBase; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(object);
    if (object === null) break;
  }

  return object;
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _toArray(arr) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof.js ***!
  \**************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/babel-preset-taro/node_modules/@babel/runtime/regenerator/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");

/***/ }),

/***/ "./node_modules/inversify/es/annotation/decorator_utils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/decorator_utils.js ***!
  \*****************************************************************/
/*! exports provided: decorate, tagParameter, tagProperty */
/*! exports used: tagParameter, tagProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export decorate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tagParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tagProperty; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");



function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
  var metadataKey = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["TAGGED"];

  _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
}

function tagProperty(annotationTarget, propertyName, metadata) {
  var metadataKey = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["TAGGED_PROP"];

  _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
}

function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
  var paramsOrPropertiesMetadata = {};
  var isParameterDecorator = typeof parameterIndex === "number";
  var key = parameterIndex !== undefined && isParameterDecorator ? parameterIndex.toString() : propertyName;

  if (isParameterDecorator && propertyName !== undefined) {
    throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_DECORATOR_OPERATION */ "m"]);
  }

  if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
    paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
  }

  var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];

  if (!Array.isArray(paramOrPropertyMetadata)) {
    paramOrPropertyMetadata = [];
  } else {
    for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
      var m = paramOrPropertyMetadata_1[_i];

      if (m.key === metadata.key) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* DUPLICATED_METADATA */ "k"] + " " + m.key.toString());
      }
    }
  }

  paramOrPropertyMetadata.push(metadata);
  paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
  Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}

function _decorate(decorators, target) {
  Reflect.decorate(decorators, target);
}

function _param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function decorate(decorator, target, parameterIndex) {
  if (typeof parameterIndex === "number") {
    _decorate([_param(parameterIndex, decorator)], target);
  } else if (typeof parameterIndex === "string") {
    Reflect.decorate([decorator], target, parameterIndex);
  } else {
    _decorate([decorator], target);
  }
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/inject.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/inject.js ***!
  \********************************************************/
/*! exports provided: LazyServiceIdentifer, inject */
/*! exports used: LazyServiceIdentifer, inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyServiceIdentifer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inject; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");





var LazyServiceIdentifer = function () {
  function LazyServiceIdentifer(cb) {
    this._cb = cb;
  }

  LazyServiceIdentifer.prototype.unwrap = function () {
    return this._cb();
  };

  return LazyServiceIdentifer;
}();



function inject(serviceIdentifier) {
  return function (target, targetKey, index) {
    if (serviceIdentifier === undefined) {
      throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* UNDEFINED_INJECT_ANNOTATION */ "z"])(target.name));
    }

    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["INJECT_TAG"], serviceIdentifier);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_3__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/injectable.js":
/*!************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/injectable.js ***!
  \************************************************************/
/*! exports provided: injectable */
/*! exports used: injectable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectable; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");



function injectable() {
  return function (target) {
    if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], target)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* DUPLICATED_INJECTABLE_DECORATOR */ "j"]);
    }

    var types = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["DESIGN_PARAM_TYPES"], target) || [];
    Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["PARAM_TYPES"], types, target);
    return target;
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/multi_inject.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/multi_inject.js ***!
  \**************************************************************/
/*! exports provided: multiInject */
/*! exports used: multiInject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return multiInject; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");




function multiInject(serviceIdentifier) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"], serviceIdentifier);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/named.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/annotation/named.js ***!
  \*******************************************************/
/*! exports provided: named */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export named */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");




function named(name) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], name);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/optional.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/optional.js ***!
  \**********************************************************/
/*! exports provided: optional */
/*! exports used: optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optional; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");




function optional() {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"], true);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/post_construct.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/post_construct.js ***!
  \****************************************************************/
/*! exports provided: postConstruct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export postConstruct */
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");




function postConstruct() {
  return function (target, propertyKey, descriptor) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], propertyKey);

    if (Reflect.hasOwnMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], target.constructor)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* MULTIPLE_POST_CONSTRUCT_METHODS */ "t"]);
    }

    Reflect.defineMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_1__["POST_CONSTRUCT"], metadata, target.constructor);
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/tagged.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/tagged.js ***!
  \********************************************************/
/*! exports provided: tagged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tagged */
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");



function tagged(metadataKey, metadataValue) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_0__[/* Metadata */ "a"](metadataKey, metadataValue);

    if (typeof index === "number") {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
    } else {
      Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_1__[/* tagProperty */ "b"])(target, targetKey, metadata);
    }
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/target_name.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/annotation/target_name.js ***!
  \*************************************************************/
/*! exports provided: targetName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export targetName */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");




function targetName(name) {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAME_TAG"], name);
    Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/annotation/unmanaged.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/es/annotation/unmanaged.js ***!
  \***********************************************************/
/*! exports provided: unmanaged */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export unmanaged */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _decorator_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");




function unmanaged() {
  return function (target, targetKey, index) {
    var metadata = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["UNMANAGED_TAG"], true);
    Object(_decorator_utils__WEBPACK_IMPORTED_MODULE_2__[/* tagParameter */ "a"])(target, targetKey, index, metadata);
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/bindings/binding.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/bindings/binding.js ***!
  \*******************************************************/
/*! exports provided: Binding */
/*! exports used: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binding; });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");



var Binding = function () {
  function Binding(serviceIdentifier, scope) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__[/* id */ "a"])();
    this.activated = false;
    this.serviceIdentifier = serviceIdentifier;
    this.scope = scope;
    this.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingTypeEnum */ "b"].Invalid;

    this.constraint = function (request) {
      return true;
    };

    this.implementationType = null;
    this.cache = null;
    this.factory = null;
    this.provider = null;
    this.onActivation = null;
    this.dynamicValue = null;
  }

  Binding.prototype.clone = function () {
    var clone = new Binding(this.serviceIdentifier, this.scope);
    clone.activated = clone.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Singleton ? this.activated : false;
    clone.implementationType = this.implementationType;
    clone.dynamicValue = this.dynamicValue;
    clone.scope = this.scope;
    clone.type = this.type;
    clone.factory = this.factory;
    clone.provider = this.provider;
    clone.constraint = this.constraint;
    clone.onActivation = this.onActivation;
    clone.cache = this.cache;
    return clone;
  };

  return Binding;
}();



/***/ }),

/***/ "./node_modules/inversify/es/bindings/binding_count.js":
/*!*************************************************************!*\
  !*** ./node_modules/inversify/es/bindings/binding_count.js ***!
  \*************************************************************/
/*! exports provided: BindingCount */
/*! exports used: BindingCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingCount; });
var BindingCount = {
  MultipleBindingsAvailable: 2,
  NoBindingsAvailable: 0,
  OnlyOneBindingAvailable: 1
};


/***/ }),

/***/ "./node_modules/inversify/es/constants/error_msgs.js":
/*!***********************************************************!*\
  !*** ./node_modules/inversify/es/constants/error_msgs.js ***!
  \***********************************************************/
/*! exports provided: DUPLICATED_INJECTABLE_DECORATOR, DUPLICATED_METADATA, NULL_ARGUMENT, KEY_NOT_FOUND, AMBIGUOUS_MATCH, CANNOT_UNBIND, NOT_REGISTERED, MISSING_INJECTABLE_ANNOTATION, MISSING_INJECT_ANNOTATION, UNDEFINED_INJECT_ANNOTATION, CIRCULAR_DEPENDENCY, NOT_IMPLEMENTED, INVALID_BINDING_TYPE, NO_MORE_SNAPSHOTS_AVAILABLE, INVALID_MIDDLEWARE_RETURN, INVALID_FUNCTION_BINDING, INVALID_TO_SELF_VALUE, INVALID_DECORATOR_OPERATION, ARGUMENTS_LENGTH_MISMATCH, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, MULTIPLE_POST_CONSTRUCT_METHODS, POST_CONSTRUCT_ERROR, CIRCULAR_DEPENDENCY_IN_FACTORY, STACK_OVERFLOW */
/*! exports used: AMBIGUOUS_MATCH, ARGUMENTS_LENGTH_MISMATCH, CANNOT_UNBIND, CIRCULAR_DEPENDENCY, CIRCULAR_DEPENDENCY_IN_FACTORY, CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE, CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE, CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK, CONTAINER_OPTIONS_MUST_BE_AN_OBJECT, DUPLICATED_INJECTABLE_DECORATOR, DUPLICATED_METADATA, INVALID_BINDING_TYPE, INVALID_DECORATOR_OPERATION, INVALID_FUNCTION_BINDING, INVALID_MIDDLEWARE_RETURN, INVALID_TO_SELF_VALUE, KEY_NOT_FOUND, MISSING_INJECTABLE_ANNOTATION, MISSING_INJECT_ANNOTATION, MULTIPLE_POST_CONSTRUCT_METHODS, NOT_REGISTERED, NO_MORE_SNAPSHOTS_AVAILABLE, NULL_ARGUMENT, POST_CONSTRUCT_ERROR, STACK_OVERFLOW, UNDEFINED_INJECT_ANNOTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DUPLICATED_INJECTABLE_DECORATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DUPLICATED_METADATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return NULL_ARGUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return KEY_NOT_FOUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AMBIGUOUS_MATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CANNOT_UNBIND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return NOT_REGISTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return MISSING_INJECTABLE_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return MISSING_INJECT_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UNDEFINED_INJECT_ANNOTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CIRCULAR_DEPENDENCY; });
/* unused harmony export NOT_IMPLEMENTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INVALID_BINDING_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return NO_MORE_SNAPSHOTS_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return INVALID_MIDDLEWARE_RETURN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return INVALID_FUNCTION_BINDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return INVALID_TO_SELF_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return INVALID_DECORATOR_OPERATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ARGUMENTS_LENGTH_MISMATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CONTAINER_OPTIONS_MUST_BE_AN_OBJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return MULTIPLE_POST_CONSTRUCT_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return POST_CONSTRUCT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CIRCULAR_DEPENDENCY_IN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return STACK_OVERFLOW; });
var DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
var DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
var NULL_ARGUMENT = "NULL argument";
var KEY_NOT_FOUND = "Key Not Found";
var AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
var CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
var NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
var MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
var MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
var UNDEFINED_INJECT_ANNOTATION = function UNDEFINED_INJECT_ANNOTATION(name) {
  return "@inject called with undefined this could mean that the class " + name + " has " + "a circular dependency problem. You can use a LazyServiceIdentifer to  " + "overcome this limitation.";
};
var CIRCULAR_DEPENDENCY = "Circular dependency found:";
var NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
var INVALID_BINDING_TYPE = "Invalid binding type:";
var NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
var INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
var INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
var INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " + "used as service identifier";
var INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " + "must be applied to the parameters of a class constructor or a class property.";
var ARGUMENTS_LENGTH_MISMATCH = function ARGUMENTS_LENGTH_MISMATCH() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return "The number of constructor arguments in the derived class " + (values[0] + " must be >= than the number of constructor arguments of its base class.");
};
var CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " + "must be an object.";
var CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " + "be a string ('singleton' or 'transient').";
var CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " + "be a boolean";
var CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must " + "be a boolean";
var MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
var POST_CONSTRUCT_ERROR = function POST_CONSTRUCT_ERROR() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return "@postConstruct error in class " + values[0] + ": " + values[1];
};
var CIRCULAR_DEPENDENCY_IN_FACTORY = function CIRCULAR_DEPENDENCY_IN_FACTORY() {
  var values = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    values[_i] = arguments[_i];
  }

  return "It looks like there is a circular dependency " + ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") + ("service identifier '" + values[1] + "'.");
};
var STACK_OVERFLOW = "Maximum call stack size exceeded";

/***/ }),

/***/ "./node_modules/inversify/es/constants/literal_types.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/constants/literal_types.js ***!
  \**************************************************************/
/*! exports provided: BindingScopeEnum, BindingTypeEnum, TargetTypeEnum */
/*! exports used: BindingScopeEnum, BindingTypeEnum, TargetTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingScopeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BindingTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TargetTypeEnum; });
var BindingScopeEnum = {
  Request: "Request",
  Singleton: "Singleton",
  Transient: "Transient"
};
var BindingTypeEnum = {
  ConstantValue: "ConstantValue",
  Constructor: "Constructor",
  DynamicValue: "DynamicValue",
  Factory: "Factory",
  Function: "Function",
  Instance: "Instance",
  Invalid: "Invalid",
  Provider: "Provider"
};
var TargetTypeEnum = {
  ClassProperty: "ClassProperty",
  ConstructorArgument: "ConstructorArgument",
  Variable: "Variable"
};


/***/ }),

/***/ "./node_modules/inversify/es/constants/metadata_keys.js":
/*!**************************************************************!*\
  !*** ./node_modules/inversify/es/constants/metadata_keys.js ***!
  \**************************************************************/
/*! exports provided: NAMED_TAG, NAME_TAG, UNMANAGED_TAG, OPTIONAL_TAG, INJECT_TAG, MULTI_INJECT_TAG, TAGGED, TAGGED_PROP, PARAM_TYPES, DESIGN_PARAM_TYPES, POST_CONSTRUCT, NON_CUSTOM_TAG_KEYS */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAMED_TAG", function() { return NAMED_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_TAG", function() { return NAME_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMANAGED_TAG", function() { return UNMANAGED_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONAL_TAG", function() { return OPTIONAL_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INJECT_TAG", function() { return INJECT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MULTI_INJECT_TAG", function() { return MULTI_INJECT_TAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGGED", function() { return TAGGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAGGED_PROP", function() { return TAGGED_PROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAM_TYPES", function() { return PARAM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESIGN_PARAM_TYPES", function() { return DESIGN_PARAM_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST_CONSTRUCT", function() { return POST_CONSTRUCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_CUSTOM_TAG_KEYS", function() { return NON_CUSTOM_TAG_KEYS; });
var NAMED_TAG = "named";
var NAME_TAG = "name";
var UNMANAGED_TAG = "unmanaged";
var OPTIONAL_TAG = "optional";
var INJECT_TAG = "inject";
var MULTI_INJECT_TAG = "multi_inject";
var TAGGED = "inversify:tagged";
var TAGGED_PROP = "inversify:tagged_props";
var PARAM_TYPES = "inversify:paramtypes";
var DESIGN_PARAM_TYPES = "design:paramtypes";
var POST_CONSTRUCT = "post_construct";

function getNonCustomTagKeys() {
  return [INJECT_TAG, MULTI_INJECT_TAG, NAME_TAG, UNMANAGED_TAG, NAMED_TAG, OPTIONAL_TAG];
}

var NON_CUSTOM_TAG_KEYS = getNonCustomTagKeys();

/***/ }),

/***/ "./node_modules/inversify/es/container/container.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/container/container.js ***!
  \**********************************************************/
/*! exports provided: Container */
/*! exports used: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _bindings_binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bindings/binding */ "./node_modules/inversify/es/bindings/binding.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../planning/metadata_reader */ "./node_modules/inversify/es/planning/metadata_reader.js");
/* harmony import */ var _planning_planner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../planning/planner */ "./node_modules/inversify/es/planning/planner.js");
/* harmony import */ var _resolution_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../resolution/resolver */ "./node_modules/inversify/es/resolution/resolver.js");
/* harmony import */ var _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../syntax/binding_to_syntax */ "./node_modules/inversify/es/syntax/binding_to_syntax.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _container_snapshot__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./container_snapshot */ "./node_modules/inversify/es/container/container_snapshot.js");
/* harmony import */ var _lookup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lookup */ "./node_modules/inversify/es/container/lookup.js");


var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};














var Container = function () {
  function Container(containerOptions) {
    this._appliedMiddleware = [];
    var options = containerOptions || {};

    if (Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options) !== "object") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_MUST_BE_AN_OBJECT */ "i"]);
    }

    if (options.defaultScope === undefined) {
      options.defaultScope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Transient;
    } else if (options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Singleton && options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Transient && options.defaultScope !== _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Request) {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE */ "g"]);
    }

    if (options.autoBindInjectable === undefined) {
      options.autoBindInjectable = false;
    } else if (typeof options.autoBindInjectable !== "boolean") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE */ "f"]);
    }

    if (options.skipBaseClassChecks === undefined) {
      options.skipBaseClassChecks = false;
    } else if (typeof options.skipBaseClassChecks !== "boolean") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK */ "h"]);
    }

    this.options = {
      autoBindInjectable: options.autoBindInjectable,
      defaultScope: options.defaultScope,
      skipBaseClassChecks: options.skipBaseClassChecks
    };
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_9__[/* id */ "a"])();
    this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_12__[/* Lookup */ "a"]();
    this._snapshots = [];
    this._middleware = null;
    this.parent = null;
    this._metadataReader = new _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_5__[/* MetadataReader */ "a"]();
  }

  Container.merge = function (container1, container2) {
    var container3 = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      container3[_i - 2] = arguments[_i];
    }

    var container = new Container();

    var targetContainers = __spreadArray([container1, container2], container3).map(function (targetContainer) {
      return Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* getBindingDictionary */ "b"])(targetContainer);
    });

    var bindingDictionary = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* getBindingDictionary */ "b"])(container);

    function copyDictionary(origin, destination) {
      origin.traverse(function (key, value) {
        value.forEach(function (binding) {
          destination.add(binding.serviceIdentifier, binding.clone());
        });
      });
    }

    targetContainers.forEach(function (targetBindingDictionary) {
      copyDictionary(targetBindingDictionary, bindingDictionary);
    });
    return container;
  };

  Container.prototype.load = function () {
    var modules = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }

    var getHelpers = this._getContainerModuleHelpersFactory();

    for (var _a = 0, modules_1 = modules; _a < modules_1.length; _a++) {
      var currentModule = modules_1[_a];
      var containerModuleHelpers = getHelpers(currentModule.id);
      currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction);
    }
  };

  Container.prototype.loadAsync = function () {
    var modules = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }

    return __awaiter(this, void 0, void 0, function () {
      var getHelpers, _a, modules_2, currentModule, containerModuleHelpers;

      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            getHelpers = this._getContainerModuleHelpersFactory();
            _a = 0, modules_2 = modules;
            _b.label = 1;

          case 1:
            if (!(_a < modules_2.length)) return [3, 4];
            currentModule = modules_2[_a];
            containerModuleHelpers = getHelpers(currentModule.id);
            return [4, currentModule.registry(containerModuleHelpers.bindFunction, containerModuleHelpers.unbindFunction, containerModuleHelpers.isboundFunction, containerModuleHelpers.rebindFunction)];

          case 2:
            _b.sent();

            _b.label = 3;

          case 3:
            _a++;
            return [3, 1];

          case 4:
            return [2];
        }
      });
    });
  };

  Container.prototype.unload = function () {
    var _this = this;

    var modules = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      modules[_i] = arguments[_i];
    }

    var conditionFactory = function conditionFactory(expected) {
      return function (item) {
        return item.moduleId === expected;
      };
    };

    modules.forEach(function (module) {
      var condition = conditionFactory(module.id);

      _this._bindingDictionary.removeByCondition(condition);
    });
  };

  Container.prototype.bind = function (serviceIdentifier) {
    var scope = this.options.defaultScope || _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* BindingScopeEnum */ "a"].Transient;
    var binding = new _bindings_binding__WEBPACK_IMPORTED_MODULE_1__[/* Binding */ "a"](serviceIdentifier, scope);

    this._bindingDictionary.add(serviceIdentifier, binding);

    return new _syntax_binding_to_syntax__WEBPACK_IMPORTED_MODULE_8__[/* BindingToSyntax */ "a"](binding);
  };

  Container.prototype.rebind = function (serviceIdentifier) {
    this.unbind(serviceIdentifier);
    return this.bind(serviceIdentifier);
  };

  Container.prototype.unbind = function (serviceIdentifier) {
    try {
      this._bindingDictionary.remove(serviceIdentifier);
    } catch (e) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* CANNOT_UNBIND */ "c"] + " " + Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_10__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier));
    }
  };

  Container.prototype.unbindAll = function () {
    this._bindingDictionary = new _lookup__WEBPACK_IMPORTED_MODULE_12__[/* Lookup */ "a"]();
  };

  Container.prototype.isBound = function (serviceIdentifier) {
    var bound = this._bindingDictionary.hasKey(serviceIdentifier);

    if (!bound && this.parent) {
      bound = this.parent.isBound(serviceIdentifier);
    }

    return bound;
  };

  Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
    return this.isBoundTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
  };

  Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
    var bound = false;

    if (this._bindingDictionary.hasKey(serviceIdentifier)) {
      var bindings = this._bindingDictionary.get(serviceIdentifier);

      var request_1 = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* createMockRequest */ "a"])(this, serviceIdentifier, key, value);
      bound = bindings.some(function (b) {
        return b.constraint(request_1);
      });
    }

    if (!bound && this.parent) {
      bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
    }

    return bound;
  };

  Container.prototype.snapshot = function () {
    this._snapshots.push(_container_snapshot__WEBPACK_IMPORTED_MODULE_11__[/* ContainerSnapshot */ "a"].of(this._bindingDictionary.clone(), this._middleware));
  };

  Container.prototype.restore = function () {
    var snapshot = this._snapshots.pop();

    if (snapshot === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* NO_MORE_SNAPSHOTS_AVAILABLE */ "v"]);
    }

    this._bindingDictionary = snapshot.bindings;
    this._middleware = snapshot.middleware;
  };

  Container.prototype.createChild = function (containerOptions) {
    var child = new Container(containerOptions || this.options);
    child.parent = this;
    return child;
  };

  Container.prototype.applyMiddleware = function () {
    var middlewares = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      middlewares[_i] = arguments[_i];
    }

    this._appliedMiddleware = this._appliedMiddleware.concat(middlewares);
    var initial = this._middleware ? this._middleware : this._planAndResolve();
    this._middleware = middlewares.reduce(function (prev, curr) {
      return curr(prev);
    }, initial);
  };

  Container.prototype.applyCustomMetadataReader = function (metadataReader) {
    this._metadataReader = metadataReader;
  };

  Container.prototype.get = function (serviceIdentifier) {
    return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier);
  };

  Container.prototype.getTagged = function (serviceIdentifier, key, value) {
    return this._get(false, false, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier, key, value);
  };

  Container.prototype.getNamed = function (serviceIdentifier, named) {
    return this.getTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
  };

  Container.prototype.getAll = function (serviceIdentifier) {
    return this._get(true, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier);
  };

  Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
    return this._get(false, true, _constants_literal_types__WEBPACK_IMPORTED_MODULE_3__[/* TargetTypeEnum */ "c"].Variable, serviceIdentifier, key, value);
  };

  Container.prototype.getAllNamed = function (serviceIdentifier, named) {
    return this.getAllTagged(serviceIdentifier, _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_4__["NAMED_TAG"], named);
  };

  Container.prototype.resolve = function (constructorFunction) {
    var tempContainer = this.createChild();
    tempContainer.bind(constructorFunction).toSelf();

    this._appliedMiddleware.forEach(function (m) {
      tempContainer.applyMiddleware(m);
    });

    return tempContainer.get(constructorFunction);
  };

  Container.prototype._getContainerModuleHelpersFactory = function () {
    var _this = this;

    var setModuleId = function setModuleId(bindingToSyntax, moduleId) {
      bindingToSyntax._binding.moduleId = moduleId;
    };

    var getBindFunction = function getBindFunction(moduleId) {
      return function (serviceIdentifier) {
        var _bind = _this.bind.bind(_this);

        var bindingToSyntax = _bind(serviceIdentifier);

        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };

    var getUnbindFunction = function getUnbindFunction(moduleId) {
      return function (serviceIdentifier) {
        var _unbind = _this.unbind.bind(_this);

        _unbind(serviceIdentifier);
      };
    };

    var getIsboundFunction = function getIsboundFunction(moduleId) {
      return function (serviceIdentifier) {
        var _isBound = _this.isBound.bind(_this);

        return _isBound(serviceIdentifier);
      };
    };

    var getRebindFunction = function getRebindFunction(moduleId) {
      return function (serviceIdentifier) {
        var _rebind = _this.rebind.bind(_this);

        var bindingToSyntax = _rebind(serviceIdentifier);

        setModuleId(bindingToSyntax, moduleId);
        return bindingToSyntax;
      };
    };

    return function (mId) {
      return {
        bindFunction: getBindFunction(mId),
        isboundFunction: getIsboundFunction(mId),
        rebindFunction: getRebindFunction(mId),
        unbindFunction: getUnbindFunction(mId)
      };
    };
  };

  Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
    var result = null;
    var defaultArgs = {
      avoidConstraints: avoidConstraints,
      contextInterceptor: function contextInterceptor(context) {
        return context;
      },
      isMultiInject: isMultiInject,
      key: key,
      serviceIdentifier: serviceIdentifier,
      targetType: targetType,
      value: value
    };

    if (this._middleware) {
      result = this._middleware(defaultArgs);

      if (result === undefined || result === null) {
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_2__[/* INVALID_MIDDLEWARE_RETURN */ "o"]);
      }
    } else {
      result = this._planAndResolve()(defaultArgs);
    }

    return result;
  };

  Container.prototype._planAndResolve = function () {
    var _this = this;

    return function (args) {
      var context = Object(_planning_planner__WEBPACK_IMPORTED_MODULE_6__[/* plan */ "c"])(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
      context = args.contextInterceptor(context);
      var result = Object(_resolution_resolver__WEBPACK_IMPORTED_MODULE_7__[/* resolve */ "a"])(context);
      return result;
    };
  };

  return Container;
}();



/***/ }),

/***/ "./node_modules/inversify/es/container/container_module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/container/container_module.js ***!
  \*****************************************************************/
/*! exports provided: ContainerModule, AsyncContainerModule */
/*! exports used: ContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerModule; });
/* unused harmony export AsyncContainerModule */
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");


var ContainerModule = function () {
  function ContainerModule(registry) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.registry = registry;
  }

  return ContainerModule;
}();



var AsyncContainerModule = function () {
  function AsyncContainerModule(registry) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.registry = registry;
  }

  return AsyncContainerModule;
}();



/***/ }),

/***/ "./node_modules/inversify/es/container/container_snapshot.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inversify/es/container/container_snapshot.js ***!
  \*******************************************************************/
/*! exports provided: ContainerSnapshot */
/*! exports used: ContainerSnapshot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerSnapshot; });
var ContainerSnapshot = function () {
  function ContainerSnapshot() {}

  ContainerSnapshot.of = function (bindings, middleware) {
    var snapshot = new ContainerSnapshot();
    snapshot.bindings = bindings;
    snapshot.middleware = middleware;
    return snapshot;
  };

  return ContainerSnapshot;
}();



/***/ }),

/***/ "./node_modules/inversify/es/container/lookup.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/container/lookup.js ***!
  \*******************************************************/
/*! exports provided: Lookup */
/*! exports used: Lookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lookup; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");


var Lookup = function () {
  function Lookup() {
    this._map = new Map();
  }

  Lookup.prototype.getMap = function () {
    return this._map;
  };

  Lookup.prototype.add = function (serviceIdentifier, value) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    if (value === null || value === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    var entry = this._map.get(serviceIdentifier);

    if (entry !== undefined) {
      entry.push(value);

      this._map.set(serviceIdentifier, entry);
    } else {
      this._map.set(serviceIdentifier, [value]);
    }
  };

  Lookup.prototype.get = function (serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    var entry = this._map.get(serviceIdentifier);

    if (entry !== undefined) {
      return entry;
    } else {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* KEY_NOT_FOUND */ "q"]);
    }
  };

  Lookup.prototype.remove = function (serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    if (!this._map.delete(serviceIdentifier)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* KEY_NOT_FOUND */ "q"]);
    }
  };

  Lookup.prototype.removeByCondition = function (condition) {
    var _this = this;

    this._map.forEach(function (entries, key) {
      var updatedEntries = entries.filter(function (entry) {
        return !condition(entry);
      });

      if (updatedEntries.length > 0) {
        _this._map.set(key, updatedEntries);
      } else {
        _this._map.delete(key);
      }
    });
  };

  Lookup.prototype.hasKey = function (serviceIdentifier) {
    if (serviceIdentifier === null || serviceIdentifier === undefined) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* NULL_ARGUMENT */ "w"]);
    }

    return this._map.has(serviceIdentifier);
  };

  Lookup.prototype.clone = function () {
    var copy = new Lookup();

    this._map.forEach(function (value, key) {
      value.forEach(function (b) {
        return copy.add(key, b.clone());
      });
    });

    return copy;
  };

  Lookup.prototype.traverse = function (func) {
    this._map.forEach(function (value, key) {
      func(key, value);
    });
  };

  return Lookup;
}();



/***/ }),

/***/ "./node_modules/inversify/es/inversify.js":
/*!************************************************!*\
  !*** ./node_modules/inversify/es/inversify.js ***!
  \************************************************/
/*! exports provided: METADATA_KEY, Container, BindingScopeEnum, BindingTypeEnum, TargetTypeEnum, AsyncContainerModule, ContainerModule, injectable, tagged, named, inject, LazyServiceIdentifer, optional, unmanaged, multiInject, targetName, postConstruct, MetadataReader, id, decorate, traverseAncerstors, taggedConstraint, namedConstraint, typeConstraint, getServiceIdentifierAsString, multiBindToService */
/*! exports used: Container, ContainerModule, inject, injectable, multiInject, optional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export METADATA_KEY */
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _container_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container */ "./node_modules/inversify/es/container/container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _container_container__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _container_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/container_module */ "./node_modules/inversify/es/container/container_module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _container_container_module__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotation/injectable */ "./node_modules/inversify/es/annotation/injectable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _annotation_injectable__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _annotation_tagged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./annotation/tagged */ "./node_modules/inversify/es/annotation/tagged.js");
/* harmony import */ var _annotation_named__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./annotation/named */ "./node_modules/inversify/es/annotation/named.js");
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./annotation/inject */ "./node_modules/inversify/es/annotation/inject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _annotation_inject__WEBPACK_IMPORTED_MODULE_7__["b"]; });

/* harmony import */ var _annotation_optional__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./annotation/optional */ "./node_modules/inversify/es/annotation/optional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _annotation_optional__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _annotation_unmanaged__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./annotation/unmanaged */ "./node_modules/inversify/es/annotation/unmanaged.js");
/* harmony import */ var _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./annotation/multi_inject */ "./node_modules/inversify/es/annotation/multi_inject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _annotation_multi_inject__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _annotation_target_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./annotation/target_name */ "./node_modules/inversify/es/annotation/target_name.js");
/* harmony import */ var _annotation_post_construct__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./annotation/post_construct */ "./node_modules/inversify/es/annotation/post_construct.js");
/* harmony import */ var _planning_metadata_reader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./planning/metadata_reader */ "./node_modules/inversify/es/planning/metadata_reader.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _annotation_decorator_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./annotation/decorator_utils */ "./node_modules/inversify/es/annotation/decorator_utils.js");
/* harmony import */ var _syntax_constraint_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./syntax/constraint_helpers */ "./node_modules/inversify/es/syntax/constraint_helpers.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _utils_binding_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/binding_utils */ "./node_modules/inversify/es/utils/binding_utils.js");

var METADATA_KEY = _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__;



















/***/ }),

/***/ "./node_modules/inversify/es/planning/context.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/context.js ***!
  \*******************************************************/
/*! exports provided: Context */
/*! exports used: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Context; });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");


var Context = function () {
  function Context(container) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.container = container;
  }

  Context.prototype.addPlan = function (plan) {
    this.plan = plan;
  };

  Context.prototype.setCurrentRequest = function (currentRequest) {
    this.currentRequest = currentRequest;
  };

  return Context;
}();



/***/ }),

/***/ "./node_modules/inversify/es/planning/metadata.js":
/*!********************************************************!*\
  !*** ./node_modules/inversify/es/planning/metadata.js ***!
  \********************************************************/
/*! exports provided: Metadata */
/*! exports used: Metadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Metadata; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");


var Metadata = function () {
  function Metadata(key, value) {
    this.key = key;
    this.value = value;
  }

  Metadata.prototype.toString = function () {
    if (this.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]) {
      return "named: " + this.value.toString() + " ";
    } else {
      return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
    }
  };

  return Metadata;
}();



/***/ }),

/***/ "./node_modules/inversify/es/planning/metadata_reader.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/planning/metadata_reader.js ***!
  \***************************************************************/
/*! exports provided: MetadataReader */
/*! exports used: MetadataReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataReader; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");


var MetadataReader = function () {
  function MetadataReader() {}

  MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
    var compilerGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["PARAM_TYPES"], constructorFunc);
    var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED"], constructorFunc);
    return {
      compilerGeneratedMetadata: compilerGeneratedMetadata,
      userGeneratedMetadata: userGeneratedMetadata || {}
    };
  };

  MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
    var userGeneratedMetadata = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["TAGGED_PROP"], constructorFunc) || [];
    return userGeneratedMetadata;
  };

  return MetadataReader;
}();



/***/ }),

/***/ "./node_modules/inversify/es/planning/plan.js":
/*!****************************************************!*\
  !*** ./node_modules/inversify/es/planning/plan.js ***!
  \****************************************************/
/*! exports provided: Plan */
/*! exports used: Plan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
var Plan = function () {
  function Plan(parentContext, rootRequest) {
    this.parentContext = parentContext;
    this.rootRequest = rootRequest;
  }

  return Plan;
}();



/***/ }),

/***/ "./node_modules/inversify/es/planning/planner.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/planner.js ***!
  \*******************************************************/
/*! exports provided: plan, createMockRequest, getBindingDictionary */
/*! exports used: createMockRequest, getBindingDictionary, plan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createMockRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getBindingDictionary; });
/* harmony import */ var _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bindings/binding_count */ "./node_modules/inversify/es/bindings/binding_count.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/inversify/es/planning/context.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _plan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./plan */ "./node_modules/inversify/es/planning/plan.js");
/* harmony import */ var _reflection_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reflection_utils */ "./node_modules/inversify/es/planning/reflection_utils.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request */ "./node_modules/inversify/es/planning/request.js");
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./target */ "./node_modules/inversify/es/planning/target.js");













function getBindingDictionary(cntnr) {
  return cntnr._bindingDictionary;
}

function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
  var metadataKey = isMultiInject ? _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"] : _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"];
  var injectMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](metadataKey, serviceIdentifier);
  var target = new _target__WEBPACK_IMPORTED_MODULE_11__[/* Target */ "a"](targetType, name, serviceIdentifier, injectMetadata);

  if (key !== undefined) {
    var tagMetadata = new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](key, value);
    target.metadata.push(tagMetadata);
  }

  return target;
}

function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
  var bindings = getBindings(context.container, target.serviceIdentifier);
  var activeBindings = [];

  if (bindings.length === _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].NoBindingsAvailable && context.container.options.autoBindInjectable && typeof target.serviceIdentifier === "function" && metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
    context.container.bind(target.serviceIdentifier).toSelf();
    bindings = getBindings(context.container, target.serviceIdentifier);
  }

  if (!avoidConstraints) {
    activeBindings = bindings.filter(function (binding) {
      var request = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](binding.serviceIdentifier, context, parentRequest, binding, target);
      return binding.constraint(request);
    });
  } else {
    activeBindings = bindings;
  }

  _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);

  return activeBindings;
}

function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
  switch (bindings.length) {
    case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].NoBindingsAvailable:
      if (target.isOptional()) {
        return bindings;
      } else {
        var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier);
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* NOT_REGISTERED */ "u"];
        msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listMetadataForTarget */ "d"])(serviceIdentifierString, target);
        msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listRegisteredBindingsForServiceIdentifier */ "e"])(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      }

    case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].OnlyOneBindingAvailable:
      if (!target.isArray()) {
        return bindings;
      }

    case _bindings_binding_count__WEBPACK_IMPORTED_MODULE_0__[/* BindingCount */ "a"].MultipleBindingsAvailable:
    default:
      if (!target.isArray()) {
        var serviceIdentifierString = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* getServiceIdentifierAsString */ "c"])(serviceIdentifier);
        var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* AMBIGUOUS_MATCH */ "a"] + " " + serviceIdentifierString;
        msg += Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* listRegisteredBindingsForServiceIdentifier */ "e"])(container, serviceIdentifierString, getBindings);
        throw new Error(msg);
      } else {
        return bindings;
      }

  }
}

function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
  var activeBindings;
  var childRequest;

  if (parentRequest === null) {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
    childRequest = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](serviceIdentifier, context, null, activeBindings, target);
    var thePlan = new _plan__WEBPACK_IMPORTED_MODULE_8__[/* Plan */ "a"](context, childRequest);
    context.addPlan(thePlan);
  } else {
    activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
    childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
  }

  activeBindings.forEach(function (binding) {
    var subChildRequest = null;

    if (target.isArray()) {
      subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
    } else {
      if (binding.cache) {
        return;
      }

      subChildRequest = childRequest;
    }

    if (binding.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* BindingTypeEnum */ "b"].Instance && binding.implementationType !== null) {
      var dependencies = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getDependencies */ "b"])(metadataReader, binding.implementationType);

      if (!context.container.options.skipBaseClassChecks) {
        var baseClassDependencyCount = Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getBaseClassDependencyCount */ "a"])(metadataReader, binding.implementationType);

        if (dependencies.length < baseClassDependencyCount) {
          var error = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* ARGUMENTS_LENGTH_MISMATCH */ "b"](Object(_reflection_utils__WEBPACK_IMPORTED_MODULE_9__[/* getFunctionName */ "c"])(binding.implementationType));
          throw new Error(error);
        }
      }

      dependencies.forEach(function (dependency) {
        _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
      });
    }
  });
}

function getBindings(container, serviceIdentifier) {
  var bindings = [];
  var bindingDictionary = getBindingDictionary(container);

  if (bindingDictionary.hasKey(serviceIdentifier)) {
    bindings = bindingDictionary.get(serviceIdentifier);
  } else if (container.parent !== null) {
    bindings = getBindings(container.parent, serviceIdentifier);
  }

  return bindings;
}

function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
  if (avoidConstraints === void 0) {
    avoidConstraints = false;
  }

  var context = new _context__WEBPACK_IMPORTED_MODULE_6__[/* Context */ "a"](container);

  var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);

  try {
    _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);

    return context;
  } catch (error) {
    if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_4__[/* isStackOverflowExeption */ "a"])(error)) {
      if (context.plan) {
        Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_5__[/* circularDependencyToException */ "a"])(context.plan.rootRequest);
      }
    }

    throw error;
  }
}

function createMockRequest(container, serviceIdentifier, key, value) {
  var target = new _target__WEBPACK_IMPORTED_MODULE_11__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].Variable, "", serviceIdentifier, new _metadata__WEBPACK_IMPORTED_MODULE_7__[/* Metadata */ "a"](key, value));
  var context = new _context__WEBPACK_IMPORTED_MODULE_6__[/* Context */ "a"](container);
  var request = new _request__WEBPACK_IMPORTED_MODULE_10__[/* Request */ "a"](serviceIdentifier, context, null, [], target);
  return request;
}



/***/ }),

/***/ "./node_modules/inversify/es/planning/queryable_string.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/planning/queryable_string.js ***!
  \****************************************************************/
/*! exports provided: QueryableString */
/*! exports used: QueryableString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryableString; });
var QueryableString = function () {
  function QueryableString(str) {
    this.str = str;
  }

  QueryableString.prototype.startsWith = function (searchString) {
    return this.str.indexOf(searchString) === 0;
  };

  QueryableString.prototype.endsWith = function (searchString) {
    var reverseString = "";
    var reverseSearchString = searchString.split("").reverse().join("");
    reverseString = this.str.split("").reverse().join("");
    return this.startsWith.call({
      str: reverseString
    }, reverseSearchString);
  };

  QueryableString.prototype.contains = function (searchString) {
    return this.str.indexOf(searchString) !== -1;
  };

  QueryableString.prototype.equals = function (compareString) {
    return this.str === compareString;
  };

  QueryableString.prototype.value = function () {
    return this.str;
  };

  return QueryableString;
}();



/***/ }),

/***/ "./node_modules/inversify/es/planning/reflection_utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/planning/reflection_utils.js ***!
  \****************************************************************/
/*! exports provided: getDependencies, getBaseClassDependencyCount, getFunctionName */
/*! exports used: getBaseClassDependencyCount, getDependencies, getFunctionName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDependencies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getBaseClassDependencyCount; });
/* harmony import */ var _annotation_inject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../annotation/inject */ "./node_modules/inversify/es/annotation/inject.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _utils_serialization__WEBPACK_IMPORTED_MODULE_4__["b"]; });

/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./target */ "./node_modules/inversify/es/planning/target.js");
var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};








function getDependencies(metadataReader, func) {
  var constructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "b"])(func);
  var targets = getTargets(metadataReader, constructorName, func, false);
  return targets;
}

function getTargets(metadataReader, constructorName, func, isBaseClass) {
  var metadata = metadataReader.getConstructorMetadata(func);
  var serviceIdentifiers = metadata.compilerGeneratedMetadata;

  if (serviceIdentifiers === undefined) {
    var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* MISSING_INJECTABLE_ANNOTATION */ "r"] + " " + constructorName + ".";
    throw new Error(msg);
  }

  var constructorArgsMetadata = metadata.userGeneratedMetadata;
  var keys = Object.keys(constructorArgsMetadata);
  var hasUserDeclaredUnknownInjections = func.length === 0 && keys.length > 0;
  var hasOptionalParameters = keys.length > func.length;
  var iterations = hasUserDeclaredUnknownInjections || hasOptionalParameters ? keys.length : func.length;
  var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
  var propertyTargets = getClassPropsAsTargets(metadataReader, func);

  var targets = __spreadArray(__spreadArray([], constructorTargets), propertyTargets);

  return targets;
}

function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
  var targetMetadata = constructorArgsMetadata[index.toString()] || [];
  var metadata = formatTargetMetadata(targetMetadata);
  var isManaged = metadata.unmanaged !== true;
  var serviceIdentifier = serviceIdentifiers[index];
  var injectIdentifier = metadata.inject || metadata.multiInject;
  serviceIdentifier = injectIdentifier ? injectIdentifier : serviceIdentifier;

  if (serviceIdentifier instanceof _annotation_inject__WEBPACK_IMPORTED_MODULE_0__[/* LazyServiceIdentifer */ "a"]) {
    serviceIdentifier = serviceIdentifier.unwrap();
  }

  if (isManaged) {
    var isObject = serviceIdentifier === Object;
    var isFunction = serviceIdentifier === Function;
    var isUndefined = serviceIdentifier === undefined;
    var isUnknownType = isObject || isFunction || isUndefined;

    if (!isBaseClass && isUnknownType) {
      var msg = _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* MISSING_INJECT_ANNOTATION */ "s"] + " argument " + index + " in class " + constructorName + ".";
      throw new Error(msg);
    }

    var target = new _target__WEBPACK_IMPORTED_MODULE_5__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].ConstructorArgument, metadata.targetName, serviceIdentifier);
    target.metadata = targetMetadata;
    return target;
  }

  return null;
}

function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
  var targets = [];

  for (var i = 0; i < iterations; i++) {
    var index = i;
    var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);

    if (target !== null) {
      targets.push(target);
    }
  }

  return targets;
}

function getClassPropsAsTargets(metadataReader, constructorFunc) {
  var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
  var targets = [];
  var keys = Object.keys(classPropsMetadata);

  for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
    var key = keys_1[_i];
    var targetMetadata = classPropsMetadata[key];
    var metadata = formatTargetMetadata(classPropsMetadata[key]);
    var targetName = metadata.targetName || key;
    var serviceIdentifier = metadata.inject || metadata.multiInject;
    var target = new _target__WEBPACK_IMPORTED_MODULE_5__[/* Target */ "a"](_constants_literal_types__WEBPACK_IMPORTED_MODULE_2__[/* TargetTypeEnum */ "c"].ClassProperty, targetName, serviceIdentifier);
    target.metadata = targetMetadata;
    targets.push(target);
  }

  var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;

  if (baseConstructor !== Object) {
    var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
    targets = __spreadArray(__spreadArray([], targets), baseTargets);
  }

  return targets;
}

function getBaseClassDependencyCount(metadataReader, func) {
  var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;

  if (baseConstructor !== Object) {
    var baseConstructorName = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_4__[/* getFunctionName */ "b"])(baseConstructor);
    var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
    var metadata = targets.map(function (t) {
      return t.metadata.filter(function (m) {
        return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"];
      });
    });
    var unmanagedCount = [].concat.apply([], metadata).length;
    var dependencyCount = targets.length - unmanagedCount;

    if (dependencyCount > 0) {
      return dependencyCount;
    } else {
      return getBaseClassDependencyCount(metadataReader, baseConstructor);
    }
  } else {
    return 0;
  }
}

function formatTargetMetadata(targetMetadata) {
  var targetMetadataMap = {};
  targetMetadata.forEach(function (m) {
    targetMetadataMap[m.key.toString()] = m.value;
  });
  return {
    inject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["INJECT_TAG"]],
    multiInject: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["MULTI_INJECT_TAG"]],
    targetName: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["NAME_TAG"]],
    unmanaged: targetMetadataMap[_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_3__["UNMANAGED_TAG"]]
  };
}



/***/ }),

/***/ "./node_modules/inversify/es/planning/request.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/planning/request.js ***!
  \*******************************************************/
/*! exports provided: Request */
/*! exports used: Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");


var Request = function () {
  function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_0__[/* id */ "a"])();
    this.serviceIdentifier = serviceIdentifier;
    this.parentContext = parentContext;
    this.parentRequest = parentRequest;
    this.target = target;
    this.childRequests = [];
    this.bindings = Array.isArray(bindings) ? bindings : [bindings];
    this.requestScope = parentRequest === null ? new Map() : null;
  }

  Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
    var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
    this.childRequests.push(child);
    return child;
  };

  return Request;
}();



/***/ }),

/***/ "./node_modules/inversify/es/planning/target.js":
/*!******************************************************!*\
  !*** ./node_modules/inversify/es/planning/target.js ***!
  \******************************************************/
/*! exports provided: Target */
/*! exports used: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Target; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/id */ "./node_modules/inversify/es/utils/id.js");
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata */ "./node_modules/inversify/es/planning/metadata.js");
/* harmony import */ var _queryable_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queryable_string */ "./node_modules/inversify/es/planning/queryable_string.js");





var Target = function () {
  function Target(type, name, serviceIdentifier, namedOrTagged) {
    this.id = Object(_utils_id__WEBPACK_IMPORTED_MODULE_1__[/* id */ "a"])();
    this.type = type;
    this.serviceIdentifier = serviceIdentifier;
    this.name = new _queryable_string__WEBPACK_IMPORTED_MODULE_3__[/* QueryableString */ "a"](name || "");
    this.metadata = new Array();
    var metadataItem = null;

    if (typeof namedOrTagged === "string") {
      metadataItem = new _metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"](_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"], namedOrTagged);
    } else if (namedOrTagged instanceof _metadata__WEBPACK_IMPORTED_MODULE_2__[/* Metadata */ "a"]) {
      metadataItem = namedOrTagged;
    }

    if (metadataItem !== null) {
      this.metadata.push(metadataItem);
    }
  }

  Target.prototype.hasTag = function (key) {
    for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
      var m = _a[_i];

      if (m.key === key) {
        return true;
      }
    }

    return false;
  };

  Target.prototype.isArray = function () {
    return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"]);
  };

  Target.prototype.matchesArray = function (name) {
    return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["MULTI_INJECT_TAG"])(name);
  };

  Target.prototype.isNamed = function () {
    return this.hasTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);
  };

  Target.prototype.isTagged = function () {
    return this.metadata.some(function (metadata) {
      return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function (key) {
        return metadata.key !== key;
      });
    });
  };

  Target.prototype.isOptional = function () {
    return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["OPTIONAL_TAG"])(true);
  };

  Target.prototype.getNamedTag = function () {
    if (this.isNamed()) {
      return this.metadata.filter(function (m) {
        return m.key === _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"];
      })[0];
    }

    return null;
  };

  Target.prototype.getCustomTags = function () {
    if (this.isTagged()) {
      return this.metadata.filter(function (metadata) {
        return _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NON_CUSTOM_TAG_KEYS"].every(function (key) {
          return metadata.key !== key;
        });
      });
    } else {
      return null;
    }
  };

  Target.prototype.matchesNamedTag = function (name) {
    return this.matchesTag(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"])(name);
  };

  Target.prototype.matchesTag = function (key) {
    var _this = this;

    return function (value) {
      for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
        var m = _a[_i];

        if (m.key === key && m.value === value) {
          return true;
        }
      }

      return false;
    };
  };

  return Target;
}();



/***/ }),

/***/ "./node_modules/inversify/es/resolution/instantiation.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/resolution/instantiation.js ***!
  \***************************************************************/
/*! exports provided: resolveInstance */
/*! exports used: resolveInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveInstance; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
var __spreadArray = undefined && undefined.__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }

  return to;
};





function _injectProperties(instance, childRequests, resolveRequest) {
  var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
    return childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* TargetTypeEnum */ "c"].ClassProperty;
  });
  var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
  propertyInjectionsRequests.forEach(function (r, index) {
    var propertyName = "";
    propertyName = r.target.name.value();
    var injection = propertyInjections[index];
    instance[propertyName] = injection;
  });
  return instance;
}

function _createInstance(Func, injections) {
  return new (Func.bind.apply(Func, __spreadArray([void 0], injections)))();
}

function _postConstruct(constr, result) {
  if (Reflect.hasMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__["POST_CONSTRUCT"], constr)) {
    var data = Reflect.getMetadata(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_2__["POST_CONSTRUCT"], constr);

    try {
      result[data.value]();
    } catch (e) {
      throw new Error(Object(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* POST_CONSTRUCT_ERROR */ "x"])(constr.name, e.message));
    }
  }
}

function resolveInstance(constr, childRequests, resolveRequest) {
  var result = null;

  if (childRequests.length > 0) {
    var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
      return childRequest.target !== null && childRequest.target.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* TargetTypeEnum */ "c"].ConstructorArgument;
    });
    var constructorInjections = constructorInjectionsRequests.map(resolveRequest);
    result = _createInstance(constr, constructorInjections);
    result = _injectProperties(result, childRequests, resolveRequest);
  } else {
    result = new constr();
  }

  _postConstruct(constr, result);

  return result;
}



/***/ }),

/***/ "./node_modules/inversify/es/resolution/resolver.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/resolution/resolver.js ***!
  \**********************************************************/
/*! exports provided: resolve */
/*! exports used: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolve; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _utils_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/exceptions */ "./node_modules/inversify/es/utils/exceptions.js");
/* harmony import */ var _utils_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/serialization */ "./node_modules/inversify/es/utils/serialization.js");
/* harmony import */ var _instantiation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instantiation */ "./node_modules/inversify/es/resolution/instantiation.js");






var invokeFactory = function invokeFactory(factoryType, serviceIdentifier, fn) {
  try {
    return fn();
  } catch (error) {
    if (Object(_utils_exceptions__WEBPACK_IMPORTED_MODULE_2__[/* isStackOverflowExeption */ "a"])(error)) {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* CIRCULAR_DEPENDENCY_IN_FACTORY */ "e"](factoryType, serviceIdentifier.toString()));
    } else {
      throw error;
    }
  }
};

var _resolveRequest = function _resolveRequest(requestScope) {
  return function (request) {
    request.parentContext.setCurrentRequest(request);
    var bindings = request.bindings;
    var childRequests = request.childRequests;
    var targetIsAnArray = request.target && request.target.isArray();
    var targetParentIsNotAnArray = !request.parentRequest || !request.parentRequest.target || !request.target || !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);

    if (targetIsAnArray && targetParentIsNotAnArray) {
      return childRequests.map(function (childRequest) {
        var _f = _resolveRequest(requestScope);

        return _f(childRequest);
      });
    } else {
      var result = null;

      if (request.target.isOptional() && bindings.length === 0) {
        return undefined;
      }

      var binding_1 = bindings[0];
      var isSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
      var isRequestSingleton = binding_1.scope === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Request;

      if (isSingleton && binding_1.activated) {
        return binding_1.cache;
      }

      if (isRequestSingleton && requestScope !== null && requestScope.has(binding_1.id)) {
        return requestScope.get(binding_1.id);
      }

      if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].ConstantValue) {
        result = binding_1.cache;
        binding_1.activated = true;
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Function) {
        result = binding_1.cache;
        binding_1.activated = true;
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Constructor) {
        result = binding_1.implementationType;
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].DynamicValue && binding_1.dynamicValue !== null) {
        result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function () {
          return binding_1.dynamicValue(request.parentContext);
        });
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory && binding_1.factory !== null) {
        result = invokeFactory("toFactory", binding_1.serviceIdentifier, function () {
          return binding_1.factory(request.parentContext);
        });
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Provider && binding_1.provider !== null) {
        result = invokeFactory("toProvider", binding_1.serviceIdentifier, function () {
          return binding_1.provider(request.parentContext);
        });
      } else if (binding_1.type === _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Instance && binding_1.implementationType !== null) {
        result = Object(_instantiation__WEBPACK_IMPORTED_MODULE_4__[/* resolveInstance */ "a"])(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
      } else {
        var serviceIdentifier = Object(_utils_serialization__WEBPACK_IMPORTED_MODULE_3__[/* getServiceIdentifierAsString */ "c"])(request.serviceIdentifier);
        throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_BINDING_TYPE */ "l"] + " " + serviceIdentifier);
      }

      if (typeof binding_1.onActivation === "function") {
        result = binding_1.onActivation(request.parentContext, result);
      }

      if (isSingleton) {
        binding_1.cache = result;
        binding_1.activated = true;
      }

      if (isRequestSingleton && requestScope !== null && !requestScope.has(binding_1.id)) {
        requestScope.set(binding_1.id, result);
      }

      return result;
    }
  };
};

function resolve(context) {
  var _f = _resolveRequest(context.plan.rootRequest.requestScope);

  return _f(context.plan.rootRequest);
}



/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_in_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_in_syntax.js ***!
  \***************************************************************/
/*! exports provided: BindingInSyntax */
/*! exports used: BindingInSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingInSyntax; });
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js");



var BindingInSyntax = function () {
  function BindingInSyntax(binding) {
    this._binding = binding;
  }

  BindingInSyntax.prototype.inRequestScope = function () {
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Request;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingInSyntax.prototype.inSingletonScope = function () {
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingInSyntax.prototype.inTransientScope = function () {
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_0__[/* BindingScopeEnum */ "a"].Transient;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  return BindingInSyntax;
}();



/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js ***!
  \***********************************************************************/
/*! exports provided: BindingInWhenOnSyntax */
/*! exports used: BindingInWhenOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingInWhenOnSyntax; });
/* harmony import */ var _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_in_syntax */ "./node_modules/inversify/es/syntax/binding_in_syntax.js");
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");




var BindingInWhenOnSyntax = function () {
  function BindingInWhenOnSyntax(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingWhenSyntax */ "a"](this._binding);
    this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingOnSyntax */ "a"](this._binding);
    this._bindingInSyntax = new _binding_in_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingInSyntax */ "a"](binding);
  }

  BindingInWhenOnSyntax.prototype.inRequestScope = function () {
    return this._bindingInSyntax.inRequestScope();
  };

  BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
    return this._bindingInSyntax.inSingletonScope();
  };

  BindingInWhenOnSyntax.prototype.inTransientScope = function () {
    return this._bindingInSyntax.inTransientScope();
  };

  BindingInWhenOnSyntax.prototype.when = function (constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };

  BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };

  BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };

  BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };

  BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };

  BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };

  BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
    return this._bindingOnSyntax.onActivation(handler);
  };

  return BindingInWhenOnSyntax;
}();



/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_on_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_on_syntax.js ***!
  \***************************************************************/
/*! exports provided: BindingOnSyntax */
/*! exports used: BindingOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingOnSyntax; });
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");


var BindingOnSyntax = function () {
  function BindingOnSyntax(binding) {
    this._binding = binding;
  }

  BindingOnSyntax.prototype.onActivation = function (handler) {
    this._binding.onActivation = handler;
    return new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingWhenSyntax */ "a"](this._binding);
  };

  return BindingOnSyntax;
}();



/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_to_syntax.js":
/*!***************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_to_syntax.js ***!
  \***************************************************************/
/*! exports provided: BindingToSyntax */
/*! exports used: BindingToSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingToSyntax; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");
/* harmony import */ var _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/literal_types */ "./node_modules/inversify/es/constants/literal_types.js");
/* harmony import */ var _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binding_in_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_in_when_on_syntax.js");
/* harmony import */ var _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binding_when_on_syntax */ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js");





var BindingToSyntax = function () {
  function BindingToSyntax(binding) {
    this._binding = binding;
  }

  BindingToSyntax.prototype.to = function (constructor) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Instance;
    this._binding.implementationType = constructor;
    return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingInWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toSelf = function () {
    if (typeof this._binding.serviceIdentifier !== "function") {
      throw new Error("" + _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_TO_SELF_VALUE */ "p"]);
    }

    var self = this._binding.serviceIdentifier;
    return this.to(self);
  };

  BindingToSyntax.prototype.toConstantValue = function (value) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].ConstantValue;
    this._binding.cache = value;
    this._binding.dynamicValue = null;
    this._binding.implementationType = null;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toDynamicValue = function (func) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].DynamicValue;
    this._binding.cache = null;
    this._binding.dynamicValue = func;
    this._binding.implementationType = null;
    return new _binding_in_when_on_syntax__WEBPACK_IMPORTED_MODULE_2__[/* BindingInWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toConstructor = function (constructor) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Constructor;
    this._binding.implementationType = constructor;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toFactory = function (factory) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory;
    this._binding.factory = factory;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toFunction = function (func) {
    if (typeof func !== "function") {
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* INVALID_FUNCTION_BINDING */ "n"]);
    }

    var bindingWhenOnSyntax = this.toConstantValue(func);
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Function;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return bindingWhenOnSyntax;
  };

  BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Factory;

    this._binding.factory = function (context) {
      var autofactory = function autofactory() {
        return context.container.get(serviceIdentifier);
      };

      return autofactory;
    };

    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toProvider = function (provider) {
    this._binding.type = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingTypeEnum */ "b"].Provider;
    this._binding.provider = provider;
    this._binding.scope = _constants_literal_types__WEBPACK_IMPORTED_MODULE_1__[/* BindingScopeEnum */ "a"].Singleton;
    return new _binding_when_on_syntax__WEBPACK_IMPORTED_MODULE_3__[/* BindingWhenOnSyntax */ "a"](this._binding);
  };

  BindingToSyntax.prototype.toService = function (service) {
    this.toDynamicValue(function (context) {
      return context.container.get(service);
    });
  };

  return BindingToSyntax;
}();



/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_when_on_syntax.js":
/*!********************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_when_on_syntax.js ***!
  \********************************************************************/
/*! exports provided: BindingWhenOnSyntax */
/*! exports used: BindingWhenOnSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingWhenOnSyntax; });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding_when_syntax */ "./node_modules/inversify/es/syntax/binding_when_syntax.js");



var BindingWhenOnSyntax = function () {
  function BindingWhenOnSyntax(binding) {
    this._binding = binding;
    this._bindingWhenSyntax = new _binding_when_syntax__WEBPACK_IMPORTED_MODULE_1__[/* BindingWhenSyntax */ "a"](this._binding);
    this._bindingOnSyntax = new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  }

  BindingWhenOnSyntax.prototype.when = function (constraint) {
    return this._bindingWhenSyntax.when(constraint);
  };

  BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
    return this._bindingWhenSyntax.whenTargetNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
    return this._bindingWhenSyntax.whenTargetIsDefault();
  };

  BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenTargetTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
    return this._bindingWhenSyntax.whenInjectedInto(parent);
  };

  BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
    return this._bindingWhenSyntax.whenParentNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenParentTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
    return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
    return this._bindingWhenSyntax.whenNoAncestorNamed(name);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
    return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
  };

  BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
  };

  BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
    return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
  };

  BindingWhenOnSyntax.prototype.onActivation = function (handler) {
    return this._bindingOnSyntax.onActivation(handler);
  };

  return BindingWhenOnSyntax;
}();



/***/ }),

/***/ "./node_modules/inversify/es/syntax/binding_when_syntax.js":
/*!*****************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/binding_when_syntax.js ***!
  \*****************************************************************/
/*! exports provided: BindingWhenSyntax */
/*! exports used: BindingWhenSyntax */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingWhenSyntax; });
/* harmony import */ var _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_on_syntax */ "./node_modules/inversify/es/syntax/binding_on_syntax.js");
/* harmony import */ var _constraint_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constraint_helpers */ "./node_modules/inversify/es/syntax/constraint_helpers.js");



var BindingWhenSyntax = function () {
  function BindingWhenSyntax(binding) {
    this._binding = binding;
  }

  BindingWhenSyntax.prototype.when = function (constraint) {
    this._binding.constraint = constraint;
    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
    this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name);
    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
    this._binding.constraint = function (request) {
      var targetIsDefault = request.target !== null && !request.target.isNamed() && !request.target.isTagged();
      return targetIsDefault;
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
    this._binding.constraint = Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value);
    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(parent)(request.parentRequest);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenParentNamed = function (name) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name)(request.parentRequest);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value)(request.parentRequest);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(ancestor));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* typeConstraint */ "d"])(ancestor));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* namedConstraint */ "a"])(name));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* taggedConstraint */ "b"])(tag)(value));
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
    this._binding.constraint = function (request) {
      return Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, constraint);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
    this._binding.constraint = function (request) {
      return !Object(_constraint_helpers__WEBPACK_IMPORTED_MODULE_1__[/* traverseAncerstors */ "c"])(request, constraint);
    };

    return new _binding_on_syntax__WEBPACK_IMPORTED_MODULE_0__[/* BindingOnSyntax */ "a"](this._binding);
  };

  return BindingWhenSyntax;
}();



/***/ }),

/***/ "./node_modules/inversify/es/syntax/constraint_helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/inversify/es/syntax/constraint_helpers.js ***!
  \****************************************************************/
/*! exports provided: traverseAncerstors, taggedConstraint, namedConstraint, typeConstraint */
/*! exports used: namedConstraint, taggedConstraint, traverseAncerstors, typeConstraint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return traverseAncerstors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return taggedConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return namedConstraint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return typeConstraint; });
/* harmony import */ var _constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/metadata_keys */ "./node_modules/inversify/es/constants/metadata_keys.js");
/* harmony import */ var _planning_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../planning/metadata */ "./node_modules/inversify/es/planning/metadata.js");



var traverseAncerstors = function traverseAncerstors(request, constraint) {
  var parent = request.parentRequest;

  if (parent !== null) {
    return constraint(parent) ? true : traverseAncerstors(parent, constraint);
  } else {
    return false;
  }
};

var taggedConstraint = function taggedConstraint(key) {
  return function (value) {
    var constraint = function constraint(request) {
      return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };

    constraint.metaData = new _planning_metadata__WEBPACK_IMPORTED_MODULE_1__[/* Metadata */ "a"](key, value);
    return constraint;
  };
};

var namedConstraint = taggedConstraint(_constants_metadata_keys__WEBPACK_IMPORTED_MODULE_0__["NAMED_TAG"]);

var typeConstraint = function typeConstraint(type) {
  return function (request) {
    var binding = null;

    if (request !== null) {
      binding = request.bindings[0];

      if (typeof type === "string") {
        var serviceIdentifier = binding.serviceIdentifier;
        return serviceIdentifier === type;
      } else {
        var constructor = request.bindings[0].implementationType;
        return type === constructor;
      }
    }

    return false;
  };
};



/***/ }),

/***/ "./node_modules/inversify/es/utils/binding_utils.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/utils/binding_utils.js ***!
  \**********************************************************/
/*! exports provided: multiBindToService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export multiBindToService */
var multiBindToService = function multiBindToService(container) {
  return function (service) {
    return function () {
      var types = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        types[_i] = arguments[_i];
      }

      return types.forEach(function (t) {
        return container.bind(t).toService(service);
      });
    };
  };
};

/***/ }),

/***/ "./node_modules/inversify/es/utils/exceptions.js":
/*!*******************************************************!*\
  !*** ./node_modules/inversify/es/utils/exceptions.js ***!
  \*******************************************************/
/*! exports provided: isStackOverflowExeption */
/*! exports used: isStackOverflowExeption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isStackOverflowExeption; });
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");

function isStackOverflowExeption(error) {
  return error instanceof RangeError || error.message === _constants_error_msgs__WEBPACK_IMPORTED_MODULE_0__[/* STACK_OVERFLOW */ "y"];
}

/***/ }),

/***/ "./node_modules/inversify/es/utils/id.js":
/*!***********************************************!*\
  !*** ./node_modules/inversify/es/utils/id.js ***!
  \***********************************************/
/*! exports provided: id */
/*! exports used: id */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return id; });
var idCounter = 0;

function id() {
  return idCounter++;
}



/***/ }),

/***/ "./node_modules/inversify/es/utils/serialization.js":
/*!**********************************************************!*\
  !*** ./node_modules/inversify/es/utils/serialization.js ***!
  \**********************************************************/
/*! exports provided: getFunctionName, getServiceIdentifierAsString, listRegisteredBindingsForServiceIdentifier, listMetadataForTarget, circularDependencyToException */
/*! exports used: circularDependencyToException, getFunctionName, getServiceIdentifierAsString, listMetadataForTarget, listRegisteredBindingsForServiceIdentifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getFunctionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getServiceIdentifierAsString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return listRegisteredBindingsForServiceIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return listMetadataForTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return circularDependencyToException; });
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/error_msgs */ "./node_modules/inversify/es/constants/error_msgs.js");



function getServiceIdentifierAsString(serviceIdentifier) {
  if (typeof serviceIdentifier === "function") {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier.name;
  } else if (Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(serviceIdentifier) === "symbol") {
    return serviceIdentifier.toString();
  } else {
    var _serviceIdentifier = serviceIdentifier;
    return _serviceIdentifier;
  }
}

function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
  var registeredBindingsList = "";
  var registeredBindings = getBindings(container, serviceIdentifier);

  if (registeredBindings.length !== 0) {
    registeredBindingsList = "\nRegistered bindings:";
    registeredBindings.forEach(function (binding) {
      var name = "Object";

      if (binding.implementationType !== null) {
        name = getFunctionName(binding.implementationType);
      }

      registeredBindingsList = registeredBindingsList + "\n " + name;

      if (binding.constraint.metaData) {
        registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
      }
    });
  }

  return registeredBindingsList;
}

function alreadyDependencyChain(request, serviceIdentifier) {
  if (request.parentRequest === null) {
    return false;
  } else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
    return true;
  } else {
    return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
  }
}

function dependencyChainToString(request) {
  function _createStringArr(req, result) {
    if (result === void 0) {
      result = [];
    }

    var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
    result.push(serviceIdentifier);

    if (req.parentRequest !== null) {
      return _createStringArr(req.parentRequest, result);
    }

    return result;
  }

  var stringArr = _createStringArr(request);

  return stringArr.reverse().join(" --> ");
}

function circularDependencyToException(request) {
  request.childRequests.forEach(function (childRequest) {
    if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
      var services = dependencyChainToString(childRequest);
      throw new Error(_constants_error_msgs__WEBPACK_IMPORTED_MODULE_1__[/* CIRCULAR_DEPENDENCY */ "d"] + " " + services);
    } else {
      circularDependencyToException(childRequest);
    }
  });
}

function listMetadataForTarget(serviceIdentifierString, target) {
  if (target.isTagged() || target.isNamed()) {
    var m_1 = "";
    var namedTag = target.getNamedTag();
    var otherTags = target.getCustomTags();

    if (namedTag !== null) {
      m_1 += namedTag.toString() + "\n";
    }

    if (otherTags !== null) {
      otherTags.forEach(function (tag) {
        m_1 += tag.toString() + "\n";
      });
    }

    return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
  } else {
    return " " + serviceIdentifierString;
  }
}

function getFunctionName(v) {
  if (v.name) {
    return v.name;
  } else {
    var name_1 = v.toString();
    var match = name_1.match(/^function\s*([^\s(]+)/);
    return match ? match[1] : "Anonymous function: " + name_1;
  }
}



/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof.js");

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = ( false ? undefined : _typeof(module)) === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this;
}() || Function("return this")());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm-browser.js":
/*!****************************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm-browser.js ***!
  \****************************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, createStore, mapActions, mapGetters, mapMutations, mapState, storeKey, useStore */
/*! exports used: createStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export createLogger */
/* unused harmony export createNamespacedHelpers */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createStore; });
/* unused harmony export mapActions */
/* unused harmony export mapGetters */
/* unused harmony export mapMutations */
/* unused harmony export mapState */
/* unused harmony export storeKey */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStore; });
/* harmony import */ var E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var _vue_devtools_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/devtools-api */ "./node_modules/@vue/devtools-api/lib/esm/index.js");


/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */


var storeKey = 'store';

function useStore(key) {
  if (key === void 0) key = null;
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* inject */ "q"])(key !== null ? key : storeKey);
}
/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */


function find(list, f) {
  return list.filter(f)[0];
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


function deepCopy(obj, cache) {
  if (cache === void 0) cache = []; // just return if obj is immutable value

  if (obj === null || Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) !== 'object') {
    return obj;
  } // if obj is hit, it is in circular structure


  var hit = find(cache, function (c) {
    return c.original === obj;
  });

  if (hit) {
    return hit.copy;
  }

  var copy = Array.isArray(obj) ? [] : {}; // put the copy into cache at first
  // because we want to refer it in recursive deepCopy

  cache.push({
    original: obj,
    copy: copy
  });
  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });
  return copy;
}
/**
 * forEach for object
 */


function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {
    return fn(obj[key], key);
  });
}

function isObject(obj) {
  return obj !== null && Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vuex] " + msg);
  }
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ? subs.unshift(fn) : subs.push(fn);
  }

  return function () {
    var i = subs.indexOf(fn);

    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state; // init all modules

  installModule(store, state, [], store._modules.root, true); // reset state

  resetStoreState(store, state, hot);
}

function resetStoreState(store, state, hot) {
  var oldState = store._state; // bind store public getters

  store.getters = {}; // reset local getters cache

  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldState.
    // using partial to return function with only arguments preserved in closure environment.
    computedObj[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      // TODO: use `computed` when it's possible. at the moment we can't due to
      // https://github.com/vuejs/vuex/pull/1883
      get: function get() {
        return computedObj[key]();
      },
      enumerable: true // for local getters

    });
  });
  store._state = Object(vue__WEBPACK_IMPORTED_MODULE_2__[/* reactive */ "j"])({
    data: state
  }); // enable strict mode for new state

  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldState) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldState.data = null;
      });
    }
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;

  var namespace = store._modules.getNamespace(path); // register in namespace map


  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && true) {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }

    store._modulesNamespaceMap[namespace] = module;
  } // set state


  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];

    store._withCommit(function () {
      {
        if (moduleName in parentState) {
          console.warn("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");
        }
      }
      parentState[moduleName] = module.state;
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);
  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });
  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });
  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });
  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}
/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */


function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';
  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;

        if (!store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },
    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;

        if (!store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    }
  }; // getters and state object must be gotten lazily
  // because they will be changed by state update

  Object.defineProperties(local, {
    getters: {
      get: noNamespace ? function () {
        return store.getters;
      } : function () {
        return makeLocalGetters(store, namespace);
      }
    },
    state: {
      get: function get() {
        return getNestedState(store.state, path);
      }
    }
  });
  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {
        return;
      } // extract local getter type


      var localType = type.slice(splitPos); // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.

      Object.defineProperty(gettersProxy, localType, {
        get: function get() {
          return store.getters[type];
        },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);

    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }

    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);

        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }

  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* watch */ "J"])(function () {
    return store._state.data;
  }, function () {
    {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, {
    deep: true,
    flush: 'sync'
  });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {
    return state[key];
  }, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  {
    assert(typeof type === 'string', "expects string as the type, but found " + Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(type) + ".");
  }
  return {
    type: type,
    payload: payload,
    options: options
  };
}

var LABEL_VUEX_BINDINGS = 'vuex bindings';
var MUTATIONS_LAYER_ID = 'vuex:mutations';
var ACTIONS_LAYER_ID = 'vuex:actions';
var INSPECTOR_ID = 'vuex';
var actionId = 0;

function addDevtools(app, store) {
  Object(_vue_devtools_api__WEBPACK_IMPORTED_MODULE_3__["setupDevtoolsPlugin"])({
    id: 'org.vuejs.vuex',
    app: app,
    label: 'Vuex',
    homepage: 'https://next.vuex.vuejs.org/',
    logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
    packageName: 'vuex',
    componentStateTypes: [LABEL_VUEX_BINDINGS]
  }, function (api) {
    api.addTimelineLayer({
      id: MUTATIONS_LAYER_ID,
      label: 'Vuex Mutations',
      color: COLOR_LIME_500
    });
    api.addTimelineLayer({
      id: ACTIONS_LAYER_ID,
      label: 'Vuex Actions',
      color: COLOR_LIME_500
    });
    api.addInspector({
      id: INSPECTOR_ID,
      label: 'Vuex',
      icon: 'storage',
      treeFilterPlaceholder: 'Filter stores...'
    });
    api.on.getInspectorTree(function (payload) {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        if (payload.filter) {
          var nodes = [];
          flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
          payload.rootNodes = nodes;
        } else {
          payload.rootNodes = [formatStoreForInspectorTree(store._modules.root, '')];
        }
      }
    });
    api.on.getInspectorState(function (payload) {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        var modulePath = payload.nodeId;
        makeLocalGetters(store, modulePath);
        payload.state = formatStoreForInspectorState(getStoreModule(store._modules, modulePath), modulePath === 'root' ? store.getters : store._makeLocalGettersCache, modulePath);
      }
    });
    api.on.editInspectorState(function (payload) {
      if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
        var modulePath = payload.nodeId;
        var path = payload.path;

        if (modulePath !== 'root') {
          path = modulePath.split('/').filter(Boolean).concat(path);
        }

        store._withCommit(function () {
          payload.set(store._state.data, path, payload.state.value);
        });
      }
    });
    store.subscribe(function (mutation, state) {
      var data = {};

      if (mutation.payload) {
        data.payload = mutation.payload;
      }

      data.state = state;
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.addTimelineEvent({
        layerId: MUTATIONS_LAYER_ID,
        event: {
          time: Date.now(),
          title: mutation.type,
          data: data
        }
      });
    });
    store.subscribeAction({
      before: function before(action, state) {
        var data = {};

        if (action.payload) {
          data.payload = action.payload;
        }

        action._id = actionId++;
        action._time = Date.now();
        data.state = state;
        api.addTimelineEvent({
          layerId: ACTIONS_LAYER_ID,
          event: {
            time: action._time,
            title: action.type,
            groupId: action._id,
            subtitle: 'start',
            data: data
          }
        });
      },
      after: function after(action, state) {
        var data = {};

        var duration = Date.now() - action._time;

        data.duration = {
          _custom: {
            type: 'duration',
            display: duration + "ms",
            tooltip: 'Action duration',
            value: duration
          }
        };

        if (action.payload) {
          data.payload = action.payload;
        }

        data.state = state;
        api.addTimelineEvent({
          layerId: ACTIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: action.type,
            groupId: action._id,
            subtitle: 'end',
            data: data
          }
        });
      }
    });
  });
} // extracted from tailwind palette


var COLOR_LIME_500 = 0x84cc16;
var COLOR_DARK = 0x666666;
var COLOR_WHITE = 0xffffff;
var TAG_NAMESPACED = {
  label: 'namespaced',
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};
/**
 * @param {string} path
 */

function extractNameFromPath(path) {
  return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root';
}
/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */


function formatStoreForInspectorTree(module, path) {
  return {
    id: path || 'root',
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function (moduleName) {
      return formatStoreForInspectorTree(module._children[moduleName], path + moduleName + '/');
    })
  };
}
/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */


function flattenStoreForInspectorTree(result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || 'root',
      label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }

  Object.keys(module._children).forEach(function (moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
  });
}
/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */


function formatStoreForInspectorState(module, getters, path) {
  getters = path === 'root' ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function (key) {
      return {
        key: key,
        editable: true,
        value: module.state[key]
      };
    })
  };

  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function (key) {
      return {
        key: key.endsWith('/') ? extractNameFromPath(key) : key,
        editable: false,
        value: canThrow(function () {
          return tree[key];
        })
      };
    });
  }

  return storeState;
}

function transformPathsToObjectTree(getters) {
  var result = {};
  Object.keys(getters).forEach(function (key) {
    var path = key.split('/');

    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function (p) {
        if (!target[p]) {
          target[p] = {
            _custom: {
              value: {},
              display: p,
              tooltip: 'Module',
              abstract: true
            }
          };
        }

        target = target[p]._custom.value;
      });
      target[leafKey] = canThrow(function () {
        return getters[key];
      });
    } else {
      result[key] = canThrow(function () {
        return getters[key];
      });
    }
  });
  return result;
}

function getStoreModule(moduleMap, path) {
  var names = path.split('/').filter(function (n) {
    return n;
  });
  return names.reduce(function (module, moduleName, i) {
    var child = module[moduleName];

    if (!child) {
      throw new Error("Missing module \"" + moduleName + "\" for path \"" + path + "\".");
    }

    return i === names.length - 1 ? child : child._children;
  }, path === 'root' ? moduleMap : moduleMap.root._children);
}

function canThrow(cb) {
  try {
    return cb();
  } catch (e) {
    return e;
  }
} // Base data struct for store's module, package with some attribute and method


var Module = function Module(rawModule, runtime) {
  this.runtime = runtime; // Store some children item

  this._children = Object.create(null); // Store the origin module object which passed by programmer

  this._rawModule = rawModule;
  var rawState = rawModule.state; // Store the origin module's state

  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = {
  namespaced: {
    configurable: true
  }
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;

  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }

  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }

  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors$1);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1$1 = this;
  if (runtime === void 0) runtime = true;
  {
    assertRawModule(path, rawModule);
  }
  var newModule = new Module(rawModule, runtime);

  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  } // register nested modules


  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    {
      console.warn("[vuex] trying to unregister module '" + key + "', which is " + "not registered");
    }
    return;
  }

  if (!child.runtime) {
    return;
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key);
  }

  return false;
};

function update(path, targetModule, newModule) {
  {
    assertRawModule(path, newModule);
  } // update target module

  targetModule.update(newModule); // update nested modules

  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        {
          console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " + 'manual reload is needed');
        }
        return;
      }

      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var functionAssert = {
  assert: function assert(value) {
    return typeof value === 'function';
  },
  expected: 'function'
};
var objectAssert = {
  assert: function assert(value) {
    return typeof value === 'function' || Object(E_vue_taro_library_main_taro_library_main_node_modules_babel_preset_taro_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(value) === 'object' && typeof value.handler === 'function';
  },
  expected: 'function or object with "handler" function'
};
var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {
      return;
    }

    var assertOptions = assertTypes[key];
    forEachValue(rawModule[key], function (value, type) {
      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";

  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }

  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

function createStore(options) {
  return new Store(options);
}

var Store = function Store(options) {
  var this$1$1 = this;
  if (options === void 0) options = {};
  {
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }
  var plugins = options.plugins;
  if (plugins === void 0) plugins = [];
  var strict = options.strict;
  if (strict === void 0) strict = false;
  var devtools = options.devtools; // store internal state

  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = Object.create(null);
  this._devtools = devtools; // bind commit and dispatch to self

  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;

  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };

  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  }; // strict mode


  this.strict = strict;
  var state = this._modules.root.state; // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters

  installModule(this, state, [], this._modules.root); // initialize the store state, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)

  resetStoreState(this, state); // apply plugins

  plugins.forEach(function (plugin) {
    return plugin(this$1$1);
  });
};

var prototypeAccessors = {
  state: {
    configurable: true
  }
};

Store.prototype.install = function install(app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;
  var useDevtools = this._devtools !== undefined ? this._devtools : true;

  if (useDevtools) {
    addDevtools(app, this);
  }
};

prototypeAccessors.state.get = function () {
  return this._state.data;
};

prototypeAccessors.state.set = function (v) {
  {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1$1 = this; // check object-style commit

  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;
  var mutation = {
    type: type,
    payload: payload
  };
  var entry = this._mutations[type];

  if (!entry) {
    {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }

  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {
    return sub(mutation, this$1$1.state);
  });

  if (options && options.silent) {
    console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " + 'Use the filter functionality in the vue-devtools');
  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1$1 = this; // check object-style dispatch

  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;
  var action = {
    type: type,
    payload: payload
  };
  var entry = this._actions[type];

  if (!entry) {
    {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {
      return sub.before;
    }).forEach(function (sub) {
      return sub.before(action, this$1$1.state);
    });
  } catch (e) {
    {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {
    return handler(payload);
  })) : entry[0](payload);
  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1$1._actionSubscribers.filter(function (sub) {
          return sub.after;
        }).forEach(function (sub) {
          return sub.after(action, this$1$1.state);
        });
      } catch (e) {
        {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }

      resolve(res);
    }, function (error) {
      try {
        this$1$1._actionSubscribers.filter(function (sub) {
          return sub.error;
        }).forEach(function (sub) {
          return sub.error(action, this$1$1.state, error);
        });
      } catch (e) {
        {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }

      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? {
    before: fn
  } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch$1(getter, cb, options) {
  var this$1$1 = this;
  {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* watch */ "J"])(function () {
    return getter(this$1$1.state, this$1$1.getters);
  }, cb, Object.assign({}, options));
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1$1 = this;

  this._withCommit(function () {
    this$1$1._state.data = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {
    path = [path];
  }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);

  installModule(this, this.state, path, this._modules.get(path), options.preserveState); // reset store to update getters...

  resetStoreState(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1$1 = this;

  if (typeof path === 'string') {
    path = [path];
  }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);

  this._withCommit(function () {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });

  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {
    path = [path];
  }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }
  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);

  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors);
/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};

  if (!isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }

  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;

      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);

        if (!module) {
          return;
        }

        state = module.context.state;
        getters = module.context.getters;
      }

      return typeof val === 'function' ? val.call(this, state, getters) : state[val];
    }; // mark vuex getter for devtools


    res[key].vuex = true;
  });
  return res;
});
/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};

  if (!isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }

  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      } // Get the commit method from store


      var commit = this.$store.commit;

      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);

        if (!module) {
          return;
        }

        commit = module.context.commit;
      }

      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};

  if (!isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }

  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val; // The namespace has been mutated by normalizeNamespace

    val = namespace + val;

    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }

      if (!(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }

      return this.$store.getters[val];
    }; // mark vuex getter for devtools


    res[key].vuex = true;
  });
  return res;
});
/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};

  if (!isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }

  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      } // get dispatch function from store


      var dispatch = this.$store.dispatch;

      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);

        if (!module) {
          return;
        }

        dispatch = module.context.dispatch;
      }

      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});
/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */

var createNamespacedHelpers = function createNamespacedHelpers(namespace) {
  return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace)
  };
};
/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */


function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }

  return Array.isArray(map) ? map.map(function (key) {
    return {
      key: key,
      val: key
    };
  }) : Object.keys(map).map(function (key) {
    return {
      key: key,
      val: map[key]
    };
  });
}
/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */


function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}
/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */


function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }

    return fn(namespace, map);
  };
}
/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */


function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];

  if (!module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }

  return module;
} // Credits: borrowed code from fcomb/redux-logger


function createLogger(ref) {
  if (ref === void 0) ref = {};
  var collapsed = ref.collapsed;
  if (collapsed === void 0) collapsed = true;
  var filter = ref.filter;
  if (filter === void 0) filter = function filter(mutation, stateBefore, stateAfter) {
    return true;
  };
  var transformer = ref.transformer;
  if (transformer === void 0) transformer = function transformer(state) {
    return state;
  };
  var mutationTransformer = ref.mutationTransformer;
  if (mutationTransformer === void 0) mutationTransformer = function mutationTransformer(mut) {
    return mut;
  };
  var actionFilter = ref.actionFilter;
  if (actionFilter === void 0) actionFilter = function actionFilter(action, state) {
    return true;
  };
  var actionTransformer = ref.actionTransformer;
  if (actionTransformer === void 0) actionTransformer = function actionTransformer(act) {
    return act;
  };
  var logMutations = ref.logMutations;
  if (logMutations === void 0) logMutations = true;
  var logActions = ref.logActions;
  if (logActions === void 0) logActions = true;
  var logger = ref.logger;
  if (logger === void 0) logger = console;
  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return;
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + mutation.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + action.type + formattedTime;
          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  };
}

function startMessage(logger, message, collapsed) {
  var startMessage = collapsed ? logger.groupCollapsed : logger.group; // render

  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage(logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime() {
  var time = new Date();
  return " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
}

function repeat(str, times) {
  return new Array(times + 1).join(str);
}

function pad(num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num;
}

var index = {
  version: '4.0.2',
  Store: Store,
  storeKey: storeKey,
  createStore: createStore,
  useStore: useStore,
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};
/* unused harmony default export */ var _unused_webpack_default_export = (index);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(window) {var _typeof = __webpack_require__(/*! ./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof */ "./node_modules/babel-preset-taro/node_modules/@babel/runtime/helpers/typeof.js");

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/mini-runner/node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

}]);
//# sourceMappingURL=vendors.js.map