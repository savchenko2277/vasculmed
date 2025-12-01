/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 788:
/***/ (() => {

// глобальный объект для экспорта логики
window.Site = {};

/* Polyfills */
(function (e) {
  e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector;
  e.closest = e.closest || function closest(selector) {
    if (!this) return null;
    if (this.matches(selector)) return this;
    if (!this.parentElement) {
      return null;
    } else return this.parentElement.closest(selector);
  };
})(Element.prototype);
(function (e) {
  var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
  !matches ? e.matches = e.matchesSelector = function matches(selector) {
    var matches = document.querySelectorAll(selector);
    var th = this;
    return Array.prototype.some.call(matches, function (e) {
      return e === th;
    });
  } : e.matches = e.matchesSelector = matches;
})(Element.prototype);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/js/libs/utils.js
var _this = undefined;
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Проверка на объект (не массив)
var isObject = function isObject(item) {
  return item && _typeof(item) === 'object' && !Array.isArray(item);
};

// Слияние двух объектов с глубокой вложенностью
var _mergeDeep = function mergeDeep(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  if (!sources.length) return target;
  var source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
        _mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, _defineProperty({}, key, source[key]));
      }
    }
  }
  return _mergeDeep.apply(void 0, [target].concat(sources));
};

// Глубокое клонирование объекта

var _cloneObj = function cloneObj(obj) {
  if (obj === null || _typeof(obj) !== 'object') return obj;
  var newObj = Array.isArray(obj) ? [] : {};
  for (var prop in obj) {
    obj.hasOwnProperty(prop) && (newObj[prop] = _cloneObj(obj[prop]));
  }
  return newObj;
};

// Отложить вызов функции

var throttle = function throttle(fn) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var timeout = null;
  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    if (timeout === null) {
      // fn.apply(this, args);

      timeout = setTimeout(function () {
        fn.apply(_this, args);
        timeout = null;
      }, delay);
    }
  };
};

/* window.addEventListener("resize", throttle(() => {
	console.log('hello');
}, 200)); */

// Получить ширину прокрутки
var getScrollSize = function getScrollSize() {
  var outer = document.createElement('div');
  var inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  var scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
};

// Получить высоту скрытого элемента
var getHeight = function getHeight(el) {
  if (!el) return;
  var computed = window.getComputedStyle(el);
  var height = el.offsetHeight;

  // Если элемент с "border-box", учитываем паддинги и бордеры
  if (computed.boxSizing !== "border-box") {
    height -= parseFloat(computed.paddingTop) + parseFloat(computed.borderBottomWidth) + parseFloat(computed.borderTopWidth) + parseFloat(computed.paddingBottom);
  }

  // Если высота авто и элемент скрыт, клонируем его для вычислений
  if (computed.height === 'auto' && computed.display === 'none') {
    var clone = el.cloneNode(true);
    Object.assign(clone.style, {
      visibility: 'hidden',
      overflow: 'visible',
      maxHeight: 'none',
      display: 'block',
      opacity: '0'
    });
    el.after(clone);
    height = clone.offsetHeight;
    clone.remove();
  }
  return height;
};

/* 
* Плавная прокрутка к заданному элементу 
* @вызов:
* 
import { scrollToId } from "../../js/libs/utils";
scrollToId(document.querySelectorAll('a[href^="#"]'));
* 
*/

var scrollToId = function scrollToId(items) {
  items.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById(item.getAttribute('href').substring(1)).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
};

/* 
* Плавная прокрутка к верху страницы
* @вызов:
* 
import { scrollToTop } from "../../js/libs/utils";
scrollToTop(document.querySelector('a[href^="top"]'));
* 
*/

var scrollToTop = function scrollToTop(item) {
  if (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
};

/* 
* Обновление заданного массива в localStorage
* @вызов:
* 
import { updateLocalStorage } from "../../js/libs/utils";
updateLocalStorage('myArray', 'item1');
updateLocalStorage('myArray', 'item1', false);
* 
*/

var updateLocalStorage = function updateLocalStorage(key, item) {
  var add = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var storage = JSON.parse(localStorage.getItem(key)) || [];
  var updated = add ? _toConsumableArray(new Set([].concat(_toConsumableArray(storage), [item]))) : storage.filter(function (val) {
    return val !== item;
  });
  localStorage.setItem(key, JSON.stringify(updated));
};

/* 
* Простая валидация формы
* @вызов:
* 
import { validate } from "../../js/libs/utils";
input.classList.toggle('error', !validate(input));
* 
*/

var validate = function validate(input) {
  if (!input || !input.dataset.rules) return true;
  var rules = input.dataset.rules.split(',').map(function (rule) {
    return rule.trim();
  }).filter(Boolean);
  if (!rules.length) return true;
  var value = input.value.trim();
  var patterns = {
    req: /.+/,
    omit: /^$/,
    num: /^\d*$/,
    name: /^[a-zA-Zа-яА-ЯёЁ\s-]+$/,
    phone: /^\+?\d{1,4}[-\d()\s]{5,20}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    url: /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/i
  };
  var _iterator = _createForOfIteratorHelper(rules),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var rule = _step.value;
      if (rule.startsWith('min:') && value.length < +rule.slice(4)) return false;
      if (rule.startsWith('max:') && value.length > +rule.slice(4)) return false;
      if (rule.startsWith('num:') && (isNaN(+value) || +value > +rule.slice(4))) return false;
      if (patterns[rule] && !patterns[rule].test(value)) return false;
      if (!patterns[rule] && !rule.includes(':')) {
        console.warn("Unknown rule: ".concat(rule));
        return false;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
};

/* 
* Изменение высоты формы по мере ввода текста
* @вызов:
* 
import { textareaResize } from "../../js/libs/utils";
document.querySelectorAll('textarea').forEach(autoResizeTextarea);
* 
*/

var textareaResize = function textareaResize(textarea) {
  if (!textarea) return;
  var resize = function resize() {
    var style = getComputedStyle(textarea);
    var borderOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + borderOffset + 'px';
  };
  textarea.addEventListener('input', resize);
  resize();
};
// EXTERNAL MODULE: ./src/js/polyfills.js
var polyfills = __webpack_require__(788);
;// ./src/js/libs/driveTabs.js
function driveTabs_typeof(o) { "@babel/helpers - typeof"; return driveTabs_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, driveTabs_typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || driveTabs_unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function driveTabs_createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = driveTabs_unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function driveTabs_toConsumableArray(r) { return driveTabs_arrayWithoutHoles(r) || driveTabs_iterableToArray(r) || driveTabs_unsupportedIterableToArray(r) || driveTabs_nonIterableSpread(); }
function driveTabs_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function driveTabs_unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return driveTabs_arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? driveTabs_arrayLikeToArray(r, a) : void 0; } }
function driveTabs_iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function driveTabs_arrayWithoutHoles(r) { if (Array.isArray(r)) return driveTabs_arrayLikeToArray(r); }
function driveTabs_arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { driveTabs_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, driveTabs_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function driveTabs_defineProperty(e, r, t) { return (r = driveTabs_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function driveTabs_toPropertyKey(t) { var i = driveTabs_toPrimitive(t, "string"); return "symbol" == driveTabs_typeof(i) ? i : i + ""; }
function driveTabs_toPrimitive(t, r) { if ("object" != driveTabs_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != driveTabs_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
/* 
* Простая реализация табов, основанная на переключении классов.
* При нажатии на кнопку заголовка, переключается класс у соответствующего
* ей контентного блока.
* 
* @требуемая разметка
* 
<div class="tab">
	<div class="tab__buttons">
		<button class="tab__button active"></button>
		<button class="tab__button"></button>
		<button class="tab__button"></button>
	</div>
	<div class="tab__blocks">
		<div class="tab__block active"></div>
		<div class="tab__block"></div>
		<div class="tab__block"></div>
	</div>
	<div class="tab__otherblocks">
		<a class="active" href="./">One</a>
		<a href="./">Two</a>
		<a href="./"><Three/a>
	</div>
</div>
* 
* @вызов
* 
import { driveTabs } from "../../js/libs/driveTabs";
const tabs = driveTabs({
	container: '.tab',
	controls: '.tab__button',
	selects: ['.tab__block', '.tab__otherblocks a'],
	cls: 'active',
	onInit() {
		console.log(this);
	},
	onClick(i) {
		console.log(this, i);
	},
	onTab(set, i) {
		console.log(this, set, i);
	},
	onTick(i) {
		console.log(this, i);
	},
});
* 
*/

var driveTabs = function driveTabs() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _setActive = /*#__PURE__*/new WeakMap();
  var Tabs = /*#__PURE__*/function () {
    function Tabs(props) {
      var _this = this;
      _classCallCheck(this, Tabs);
      _classPrivateFieldInitSpec(this, _setActive, function (i, e) {
        var _this$props$onClick, _this$props$onTick;
        e === null || e === void 0 || e.preventDefault();
        e && ((_this$props$onClick = _this.props.onClick) === null || _this$props$onClick === void 0 ? void 0 : _this$props$onClick.call(_this, i));
        if (!_this.controls[i].classList.contains(_this.props.cls)) {
          _this.close();
          _this.controls[i].classList.add(_this.props.cls);
          _this.selects.map(function (set) {
            var _this$props$onTab;
            set[i].classList.add(_this.props.cls);
            (_this$props$onTab = _this.props.onTab) === null || _this$props$onTab === void 0 || _this$props$onTab.call(_this, set, i);
          });
        }
        (_this$props$onTick = _this.props.onTick) === null || _this$props$onTick === void 0 || _this$props$onTick.call(_this, i);
      });
      driveTabs_defineProperty(this, "close", function () {
        return _this.controls.forEach(function (button, i) {
          button.classList.remove(_this.props.cls);
          _this.selects.map(function (set) {
            return set[i].classList.remove(_this.props.cls);
          });
        });
      });
      driveTabs_defineProperty(this, "move", function () {
        var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        _this.currentActive += direction;
        if (_this.currentActive >= _this.controls.length) {
          _this.currentActive = 0;
        } else if (_this.currentActive < 0) {
          _this.currentActive = _this.controls.length - 1;
        }
        _classPrivateFieldGet(_setActive, _this).call(_this, _this.currentActive);
      });
      this.props = _objectSpread({
        cls: 'active',
        events: 'click'
      }, props);
      this.container = this.props.container instanceof Element ? this.props.container : document.querySelector(this.props.container);
      this.controls = this.props.controls instanceof NodeList ? this.props.controls : this.container.querySelectorAll(this.props.controls);
      this.selects = this.props.selects instanceof NodeList ? [this.props.selects].concat() : [this.props.selects].flat().map(function (set) {
        return _this.container.querySelectorAll(set);
      });
      this.currentActive = driveTabs_toConsumableArray(this.controls).findIndex(function (ctrl) {
        return ctrl.classList.contains(_this.props.cls);
      });
      this.events = this.props.events.split(',').map(function (ev) {
        return ev.trim();
      });
      this.init();
    }
    return _createClass(Tabs, [{
      key: "init",
      value: function init() {
        var _this2 = this,
          _this$props$onInit;
        var _iterator = driveTabs_createForOfIteratorHelper(this.selects.entries()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
              i = _step$value[0],
              set = _step$value[1];
            if (this.controls.length !== set.length) {
              console.error("Tabs warning: Controls count (".concat(this.controls.length, ") ") + "doesn't match targets set #".concat(i, " count (").concat(set.length, ")"));
              return;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        this.controls.forEach(function (button, i) {
          _this2.events.forEach(function (event) {
            button.addEventListener(event, function (e) {
              return _classPrivateFieldGet(_setActive, _this2).call(_this2, i, e);
            });
          });
        });
        (_this$props$onInit = this.props.onInit) === null || _this$props$onInit === void 0 || _this$props$onInit.call(this);
      }
    }]);
  }();
  return new Tabs(props);
};
;// ./node_modules/swiper/shared/ssr-window.esm.mjs
/**
 * SSR Window 5.0.1
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2025, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: June 27, 2025
 */
/* eslint-disable no-param-reassign */
function ssr_window_esm_isObject(obj) {
  return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function extend(target = {}, src = {}) {
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
    if (typeof target[key] === 'undefined') target[key] = src[key];else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) {
      extend(target[key], src[key]);
    }
  });
}
const ssrDocument = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: {
    blur() {},
    nodeName: ''
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {}
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  }
};
function ssr_window_esm_getDocument() {
  const doc = typeof document !== 'undefined' ? document : {};
  extend(doc, ssrDocument);
  return doc;
}
const ssrWindow = {
  document: ssrDocument,
  navigator: {
    userAgent: ''
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: ''
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {}
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return '';
      }
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(callback) {
    if (typeof setTimeout === 'undefined') {
      callback();
      return null;
    }
    return setTimeout(callback, 0);
  },
  cancelAnimationFrame(id) {
    if (typeof setTimeout === 'undefined') {
      return;
    }
    clearTimeout(id);
  }
};
function ssr_window_esm_getWindow() {
  const win = typeof window !== 'undefined' ? window : {};
  extend(win, ssrWindow);
  return win;
}



;// ./node_modules/swiper/shared/utils.mjs


function classesToTokens(classes = '') {
  return classes.trim().split(' ').filter(c => !!c.trim());
}

function deleteProps(obj) {
  const object = obj;
  Object.keys(object).forEach(key => {
    try {
      object[key] = null;
    } catch (e) {
      // no getter for object
    }
    try {
      delete object[key];
    } catch (e) {
      // something got wrong
    }
  });
}
function nextTick(callback, delay = 0) {
  return setTimeout(callback, delay);
}
function now() {
  return Date.now();
}
function utils_getComputedStyle(el) {
  const window = ssr_window_esm_getWindow();
  let style;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(el, null);
  }
  if (!style && el.currentStyle) {
    style = el.currentStyle;
  }
  if (!style) {
    style = el.style;
  }
  return style;
}
function getTranslate(el, axis = 'x') {
  const window = ssr_window_esm_getWindow();
  let matrix;
  let curTransform;
  let transformMatrix;
  const curStyle = utils_getComputedStyle(el);
  if (window.WebKitCSSMatrix) {
    curTransform = curStyle.transform || curStyle.webkitTransform;
    if (curTransform.split(',').length > 6) {
      curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
    }
    // Some old versions of Webkit choke when 'none' is passed; pass
    // empty string instead in this case
    transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
  } else {
    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
    matrix = transformMatrix.toString().split(',');
  }
  if (axis === 'x') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[4]);
  }
  if (axis === 'y') {
    // Latest Chrome and webkits Fix
    if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
    // Crazy IE10 Matrix
    else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
    // Normal Browsers
    else curTransform = parseFloat(matrix[5]);
  }
  return curTransform || 0;
}
function utils_isObject(o) {
  return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function isNode(node) {
  // eslint-disable-next-line
  if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
    return node instanceof HTMLElement;
  }
  return node && (node.nodeType === 1 || node.nodeType === 11);
}
function utils_extend(...args) {
  const to = Object(args[0]);
  const noExtend = ['__proto__', 'constructor', 'prototype'];
  for (let i = 1; i < args.length; i += 1) {
    const nextSource = args[i];
    if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
      const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
      for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
        const nextKey = keysArray[nextIndex];
        const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
            to[nextKey] = {};
            if (nextSource[nextKey].__swiper__) {
              to[nextKey] = nextSource[nextKey];
            } else {
              utils_extend(to[nextKey], nextSource[nextKey]);
            }
          } else {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }
  }
  return to;
}
function setCSSProperty(el, varName, varValue) {
  el.style.setProperty(varName, varValue);
}
function animateCSSModeScroll({
  swiper,
  targetPosition,
  side
}) {
  const window = ssr_window_esm_getWindow();
  const startPosition = -swiper.translate;
  let startTime = null;
  let time;
  const duration = swiper.params.speed;
  swiper.wrapperEl.style.scrollSnapType = 'none';
  window.cancelAnimationFrame(swiper.cssModeFrameID);
  const dir = targetPosition > startPosition ? 'next' : 'prev';
  const isOutOfBound = (current, target) => {
    return dir === 'next' && current >= target || dir === 'prev' && current <= target;
  };
  const animate = () => {
    time = new Date().getTime();
    if (startTime === null) {
      startTime = time;
    }
    const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
    const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
    let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
    if (isOutOfBound(currentPosition, targetPosition)) {
      currentPosition = targetPosition;
    }
    swiper.wrapperEl.scrollTo({
      [side]: currentPosition
    });
    if (isOutOfBound(currentPosition, targetPosition)) {
      swiper.wrapperEl.style.overflow = 'hidden';
      swiper.wrapperEl.style.scrollSnapType = '';
      setTimeout(() => {
        swiper.wrapperEl.style.overflow = '';
        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });
      });
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      return;
    }
    swiper.cssModeFrameID = window.requestAnimationFrame(animate);
  };
  animate();
}
function getSlideTransformEl(slideEl) {
  return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
}
function elementChildren(element, selector = '') {
  const window = ssr_window_esm_getWindow();
  const children = [...element.children];
  if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
    children.push(...element.assignedElements());
  }
  if (!selector) {
    return children;
  }
  return children.filter(el => el.matches(selector));
}
function elementIsChildOfSlot(el, slot) {
  // Breadth-first search through all parent's children and assigned elements
  const elementsQueue = [slot];
  while (elementsQueue.length > 0) {
    const elementToCheck = elementsQueue.shift();
    if (el === elementToCheck) {
      return true;
    }
    elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
  }
}
function elementIsChildOf(el, parent) {
  const window = ssr_window_esm_getWindow();
  let isChild = parent.contains(el);
  if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
    const children = [...parent.assignedElements()];
    isChild = children.includes(el);
    if (!isChild) {
      isChild = elementIsChildOfSlot(el, parent);
    }
  }
  return isChild;
}
function showWarning(text) {
  try {
    console.warn(text);
    return;
  } catch (err) {
    // err
  }
}
function createElement(tag, classes = []) {
  const el = document.createElement(tag);
  el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
  return el;
}
function elementOffset(el) {
  const window = getWindow();
  const document = getDocument();
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = el === window ? window.scrollY : el.scrollTop;
  const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
function elementPrevAll(el, selector) {
  const prevEls = [];
  while (el.previousElementSibling) {
    const prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if (prev.matches(selector)) prevEls.push(prev);
    } else prevEls.push(prev);
    el = prev;
  }
  return prevEls;
}
function elementNextAll(el, selector) {
  const nextEls = [];
  while (el.nextElementSibling) {
    const next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if (next.matches(selector)) nextEls.push(next);
    } else nextEls.push(next);
    el = next;
  }
  return nextEls;
}
function elementStyle(el, prop) {
  const window = ssr_window_esm_getWindow();
  return window.getComputedStyle(el, null).getPropertyValue(prop);
}
function elementIndex(el) {
  let child = el;
  let i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) i += 1;
    }
    return i;
  }
  return undefined;
}
function elementParents(el, selector) {
  const parents = []; // eslint-disable-line
  let parent = el.parentElement; // eslint-disable-line
  while (parent) {
    if (selector) {
      if (parent.matches(selector)) parents.push(parent);
    } else {
      parents.push(parent);
    }
    parent = parent.parentElement;
  }
  return parents;
}
function elementTransitionEnd(el, callback) {
  function fireCallBack(e) {
    if (e.target !== el) return;
    callback.call(el, e);
    el.removeEventListener('transitionend', fireCallBack);
  }
  if (callback) {
    el.addEventListener('transitionend', fireCallBack);
  }
}
function elementOuterSize(el, size, includeMargins) {
  const window = ssr_window_esm_getWindow();
  if (includeMargins) {
    return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
  }
  return el.offsetWidth;
}
function makeElementsArray(el) {
  return (Array.isArray(el) ? el : [el]).filter(e => !!e);
}
function getRotateFix(swiper) {
  return v => {
    if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
      return v + 0.001;
    }
    return v;
  };
}
function setInnerHTML(el, html = '') {
  if (typeof trustedTypes !== 'undefined') {
    el.innerHTML = trustedTypes.createPolicy('html', {
      createHTML: s => s
    }).createHTML(html);
  } else {
    el.innerHTML = html;
  }
}



;// ./node_modules/swiper/shared/swiper-core.mjs



let support;
function calcSupport() {
  const window = ssr_window_esm_getWindow();
  const document = ssr_window_esm_getDocument();
  return {
    smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
    touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
  };
}
function getSupport() {
  if (!support) {
    support = calcSupport();
  }
  return support;
}

let deviceCached;
function calcDevice({
  userAgent
} = {}) {
  const support = getSupport();
  const window = ssr_window_esm_getWindow();
  const platform = window.navigator.platform;
  const ua = userAgent || window.navigator.userAgent;
  const device = {
    ios: false,
    android: false
  };
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  let ipad = ua.match(/(iPad)(?!\1).*OS\s([\d_]+)/);
  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
  const windows = platform === 'Win32';
  let macos = platform === 'MacIntel';

  // iPadOs 13 fix
  const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
    ipad = ua.match(/(Version)\/([\d.]+)/);
    if (!ipad) ipad = [0, 1, '13_0_0'];
    macos = false;
  }

  // Android
  if (android && !windows) {
    device.os = 'android';
    device.android = true;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Export object
  return device;
}
function getDevice(overrides = {}) {
  if (!deviceCached) {
    deviceCached = calcDevice(overrides);
  }
  return deviceCached;
}

let browser;
function calcBrowser() {
  const window = ssr_window_esm_getWindow();
  const device = getDevice();
  let needPerspectiveFix = false;
  function isSafari() {
    const ua = window.navigator.userAgent.toLowerCase();
    return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
  }
  if (isSafari()) {
    const ua = String(window.navigator.userAgent);
    if (ua.includes('Version/')) {
      const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
      needPerspectiveFix = major < 16 || major === 16 && minor < 2;
    }
  }
  const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
  const isSafariBrowser = isSafari();
  const need3dFix = isSafariBrowser || isWebView && device.ios;
  return {
    isSafari: needPerspectiveFix || isSafariBrowser,
    needPerspectiveFix,
    need3dFix,
    isWebView
  };
}
function getBrowser() {
  if (!browser) {
    browser = calcBrowser();
  }
  return browser;
}

function Resize({
  swiper,
  on,
  emit
}) {
  const window = ssr_window_esm_getWindow();
  let observer = null;
  let animationFrame = null;
  const resizeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('beforeResize');
    emit('resize');
  };
  const createObserver = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    observer = new ResizeObserver(entries => {
      animationFrame = window.requestAnimationFrame(() => {
        const {
          width,
          height
        } = swiper;
        let newWidth = width;
        let newHeight = height;
        entries.forEach(({
          contentBoxSize,
          contentRect,
          target
        }) => {
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });
        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
    });
    observer.observe(swiper.el);
  };
  const removeObserver = () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
    if (observer && observer.unobserve && swiper.el) {
      observer.unobserve(swiper.el);
      observer = null;
    }
  };
  const orientationChangeHandler = () => {
    if (!swiper || swiper.destroyed || !swiper.initialized) return;
    emit('orientationchange');
  };
  on('init', () => {
    if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
      createObserver();
      return;
    }
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('orientationchange', orientationChangeHandler);
  });
  on('destroy', () => {
    removeObserver();
    window.removeEventListener('resize', resizeHandler);
    window.removeEventListener('orientationchange', orientationChangeHandler);
  });
}

function Observer({
  swiper,
  extendParams,
  on,
  emit
}) {
  const observers = [];
  const window = ssr_window_esm_getWindow();
  const attach = (target, options = {}) => {
    const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
    const observer = new ObserverFunc(mutations => {
      // The observerUpdate event should only be triggered
      // once despite the number of mutations.  Additional
      // triggers are redundant and are very costly
      if (swiper.__preventObserver__) return;
      if (mutations.length === 1) {
        emit('observerUpdate', mutations[0]);
        return;
      }
      const observerUpdate = function observerUpdate() {
        emit('observerUpdate', mutations[0]);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(observerUpdate);
      } else {
        window.setTimeout(observerUpdate, 0);
      }
    });
    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData
    });
    observers.push(observer);
  };
  const init = () => {
    if (!swiper.params.observer) return;
    if (swiper.params.observeParents) {
      const containerParents = elementParents(swiper.hostEl);
      for (let i = 0; i < containerParents.length; i += 1) {
        attach(containerParents[i]);
      }
    }
    // Observe container
    attach(swiper.hostEl, {
      childList: swiper.params.observeSlideChildren
    });

    // Observe wrapper
    attach(swiper.wrapperEl, {
      attributes: false
    });
  };
  const destroy = () => {
    observers.forEach(observer => {
      observer.disconnect();
    });
    observers.splice(0, observers.length);
  };
  extendParams({
    observer: false,
    observeParents: false,
    observeSlideChildren: false
  });
  on('init', init);
  on('destroy', destroy);
}

/* eslint-disable no-underscore-dangle */

var eventsEmitter = {
  on(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    events.split(' ').forEach(event => {
      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
      self.eventsListeners[event][method](handler);
    });
    return self;
  },
  once(events, handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    function onceHandler(...args) {
      self.off(events, onceHandler);
      if (onceHandler.__emitterProxy) {
        delete onceHandler.__emitterProxy;
      }
      handler.apply(self, args);
    }
    onceHandler.__emitterProxy = handler;
    return self.on(events, onceHandler, priority);
  },
  onAny(handler, priority) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (typeof handler !== 'function') return self;
    const method = priority ? 'unshift' : 'push';
    if (self.eventsAnyListeners.indexOf(handler) < 0) {
      self.eventsAnyListeners[method](handler);
    }
    return self;
  },
  offAny(handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsAnyListeners) return self;
    const index = self.eventsAnyListeners.indexOf(handler);
    if (index >= 0) {
      self.eventsAnyListeners.splice(index, 1);
    }
    return self;
  },
  off(events, handler) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    events.split(' ').forEach(event => {
      if (typeof handler === 'undefined') {
        self.eventsListeners[event] = [];
      } else if (self.eventsListeners[event]) {
        self.eventsListeners[event].forEach((eventHandler, index) => {
          if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
            self.eventsListeners[event].splice(index, 1);
          }
        });
      }
    });
    return self;
  },
  emit(...args) {
    const self = this;
    if (!self.eventsListeners || self.destroyed) return self;
    if (!self.eventsListeners) return self;
    let events;
    let data;
    let context;
    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
      events = args[0];
      data = args.slice(1, args.length);
      context = self;
    } else {
      events = args[0].events;
      data = args[0].data;
      context = args[0].context || self;
    }
    data.unshift(context);
    const eventsArray = Array.isArray(events) ? events : events.split(' ');
    eventsArray.forEach(event => {
      if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
        self.eventsAnyListeners.forEach(eventHandler => {
          eventHandler.apply(context, [event, ...data]);
        });
      }
      if (self.eventsListeners && self.eventsListeners[event]) {
        self.eventsListeners[event].forEach(eventHandler => {
          eventHandler.apply(context, data);
        });
      }
    });
    return self;
  }
};

function updateSize() {
  const swiper = this;
  let width;
  let height;
  const el = swiper.el;
  if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
    width = swiper.params.width;
  } else {
    width = el.clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
    height = swiper.params.height;
  } else {
    height = el.clientHeight;
  }
  if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
    return;
  }

  // Subtract paddings
  width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
  height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
  if (Number.isNaN(width)) width = 0;
  if (Number.isNaN(height)) height = 0;
  Object.assign(swiper, {
    width,
    height,
    size: swiper.isHorizontal() ? width : height
  });
}

function updateSlides() {
  const swiper = this;
  function getDirectionPropertyValue(node, label) {
    return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
  }
  const params = swiper.params;
  const {
    wrapperEl,
    slidesEl,
    rtlTranslate: rtl,
    wrongRTL
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
  const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  let snapGrid = [];
  const slidesGrid = [];
  const slidesSizesGrid = [];
  let offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }
  let offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }
  const previousSnapGridLength = swiper.snapGrid.length;
  const previousSlidesGridLength = swiper.slidesGrid.length;
  const swiperSize = swiper.size - offsetBefore - offsetAfter;
  let spaceBetween = params.spaceBetween;
  let slidePosition = -offsetBefore;
  let prevSlideSize = 0;
  let index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  swiper.virtualSize = -spaceBetween - offsetBefore - offsetAfter;

  // reset margins
  slides.forEach(slideEl => {
    if (rtl) {
      slideEl.style.marginLeft = '';
    } else {
      slideEl.style.marginRight = '';
    }
    slideEl.style.marginBottom = '';
    slideEl.style.marginTop = '';
  });

  // reset cssMode offsets
  if (params.centeredSlides && params.cssMode) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
  }
  const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
  if (gridEnabled) {
    swiper.grid.initSlides(slides);
  } else if (swiper.grid) {
    swiper.grid.unsetSlides();
  }

  // Calc slides
  let slideSize;
  const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
    return typeof params.breakpoints[key].slidesPerView !== 'undefined';
  }).length > 0;
  for (let i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    const slide = slides[i];
    if (slide) {
      if (gridEnabled) {
        swiper.grid.updateSlide(i, slide, slides);
      }
      if (elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line
    }

    if (isVirtual && params.slidesPerView === 'auto') {
      if (params.virtual.slidesPerViewAutoSlideSize) {
        slideSize = params.virtual.slidesPerViewAutoSlideSize;
      }
      if (slideSize && slide) {
        if (params.roundLengths) slideSize = Math.floor(slideSize);
        slide.style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    } else if (params.slidesPerView === 'auto') {
      if (shouldResetSlideSize) {
        slide.style[swiper.getDirectionLabel('width')] = ``;
      }
      const slideStyles = getComputedStyle(slide);
      const currentTransform = slide.style.transform;
      const currentWebKitTransform = slide.style.webkitTransform;
      if (currentTransform) {
        slide.style.transform = 'none';
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = 'none';
      }
      if (params.roundLengths) {
        slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
      } else {
        // eslint-disable-next-line
        const width = getDirectionPropertyValue(slideStyles, 'width');
        const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
        const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
        const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
        const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
        const boxSizing = slideStyles.getPropertyValue('box-sizing');
        if (boxSizing && boxSizing === 'border-box') {
          slideSize = width + marginLeft + marginRight;
        } else {
          const {
            clientWidth,
            offsetWidth
          } = slide;
          slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
        }
      }
      if (currentTransform) {
        slide.style.transform = currentTransform;
      }
      if (currentWebKitTransform) {
        slide.style.webkitTransform = currentWebKitTransform;
      }
      if (params.roundLengths) slideSize = Math.floor(slideSize);
    } else {
      slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
      if (params.roundLengths) slideSize = Math.floor(slideSize);
      if (slide) {
        slide.style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
      }
    }
    if (slide) {
      slide.swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);
    if (params.centeredSlides) {
      slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
    } else {
      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
      if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }
    swiper.virtualSize += slideSize + spaceBetween;
    prevSlideSize = slideSize;
    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (params.setWrapperSize) {
    wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
  }
  if (gridEnabled) {
    swiper.grid.updateWrapperSize(slideSize, snapGrid);
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    const newSlidesGrid = [];
    for (let i = 0; i < snapGrid.length; i += 1) {
      let slidesGridItem = snapGrid[i];
      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(slidesGridItem);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (isVirtual && params.loop) {
    const size = slidesSizesGrid[0] + spaceBetween;
    if (params.slidesPerGroup > 1) {
      const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
      const groupSize = size * params.slidesPerGroup;
      for (let i = 0; i < groups; i += 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
      }
    }
    for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
      if (params.slidesPerGroup === 1) {
        snapGrid.push(snapGrid[snapGrid.length - 1] + size);
      }
      slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
      swiper.virtualSize += size;
    }
  }
  if (snapGrid.length === 0) snapGrid = [0];
  if (spaceBetween !== 0) {
    const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
    slides.filter((_, slideIndex) => {
      if (!params.cssMode || params.loop) return true;
      if (slideIndex === slides.length - 1) {
        return false;
      }
      return true;
    }).forEach(slideEl => {
      slideEl.style[key] = `${spaceBetween}px`;
    });
  }
  if (params.centeredSlides && params.centeredSlidesBounds) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
    snapGrid = snapGrid.map(snap => {
      if (snap <= 0) return -offsetBefore;
      if (snap > maxSnap) return maxSnap + offsetAfter;
      return snap;
    });
  }
  if (params.centerInsufficientSlides) {
    let allSlidesSize = 0;
    slidesSizesGrid.forEach(slideSizeValue => {
      allSlidesSize += slideSizeValue + (spaceBetween || 0);
    });
    allSlidesSize -= spaceBetween;
    const offsetSize = (offsetBefore || 0) + (offsetAfter || 0);
    if (allSlidesSize + offsetSize < swiperSize) {
      const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
      snapGrid.forEach((snap, snapIndex) => {
        snapGrid[snapIndex] = snap - allSlidesOffset;
      });
      slidesGrid.forEach((snap, snapIndex) => {
        slidesGrid[snapIndex] = snap + allSlidesOffset;
      });
    }
  }
  Object.assign(swiper, {
    slides,
    snapGrid,
    slidesGrid,
    slidesSizesGrid
  });
  if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
    setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
    setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
    const addToSnapGrid = -swiper.snapGrid[0];
    const addToSlidesGrid = -swiper.slidesGrid[0];
    swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
    swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
  }
  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    if (swiper.params.watchOverflow) swiper.checkOverflow();
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  swiper.emit('slidesUpdated');
  if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
    const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
    const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
    if (slidesLength <= params.maxBackfaceHiddenSlides) {
      if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
    } else if (hasClassBackfaceClassAdded) {
      swiper.el.classList.remove(backFaceHiddenClass);
    }
  }
}

function updateAutoHeight(speed) {
  const swiper = this;
  const activeSlides = [];
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  let newHeight = 0;
  let i;
  if (typeof speed === 'number') {
    swiper.setTransition(speed);
  } else if (speed === true) {
    swiper.setTransition(swiper.params.speed);
  }
  const getSlideByIndex = index => {
    if (isVirtual) {
      return swiper.slides[swiper.getSlideIndexByData(index)];
    }
    return swiper.slides[index];
  };
  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    if (swiper.params.centeredSlides) {
      (swiper.visibleSlides || []).forEach(slide => {
        activeSlides.push(slide);
      });
    } else {
      for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
        const index = swiper.activeIndex + i;
        if (index > swiper.slides.length && !isVirtual) break;
        activeSlides.push(getSlideByIndex(index));
      }
    }
  } else {
    activeSlides.push(getSlideByIndex(swiper.activeIndex));
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      const height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

function updateSlidesOffset() {
  const swiper = this;
  const slides = swiper.slides;
  // eslint-disable-next-line
  const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
  for (let i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
  }
}

const toggleSlideClasses$1 = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesProgress(translate = this && this.translate || 0) {
  const swiper = this;
  const params = swiper.params;
  const {
    slides,
    rtlTranslate: rtl,
    snapGrid
  } = swiper;
  if (slides.length === 0) return;
  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
  let offsetCenter = -translate;
  if (rtl) offsetCenter = translate;
  swiper.visibleSlidesIndexes = [];
  swiper.visibleSlides = [];
  let spaceBetween = params.spaceBetween;
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
  } else if (typeof spaceBetween === 'string') {
    spaceBetween = parseFloat(spaceBetween);
  }
  for (let i = 0; i < slides.length; i += 1) {
    const slide = slides[i];
    let slideOffset = slide.swiperSlideOffset;
    if (params.cssMode && params.centeredSlides) {
      slideOffset -= slides[0].swiperSlideOffset;
    }
    const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
    const slideBefore = -(offsetCenter - slideOffset);
    const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
    const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
    const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
    if (isVisible) {
      swiper.visibleSlides.push(slide);
      swiper.visibleSlidesIndexes.push(i);
    }
    toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
    toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
    slide.progress = rtl ? -slideProgress : slideProgress;
    slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
  }
}

function updateProgress(translate) {
  const swiper = this;
  if (typeof translate === 'undefined') {
    const multiplier = swiper.rtlTranslate ? -1 : 1;
    // eslint-disable-next-line
    translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
  }
  const params = swiper.params;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  let {
    progress,
    isBeginning,
    isEnd,
    progressLoop
  } = swiper;
  const wasBeginning = isBeginning;
  const wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / translatesDiff;
    const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
    const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
    isBeginning = isBeginningRounded || progress <= 0;
    isEnd = isEndRounded || progress >= 1;
    if (isBeginningRounded) progress = 0;
    if (isEndRounded) progress = 1;
  }
  if (params.loop) {
    const firstSlideIndex = swiper.getSlideIndexByData(0);
    const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
    const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
    const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
    const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
    const translateAbs = Math.abs(translate);
    if (translateAbs >= firstSlideTranslate) {
      progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
    } else {
      progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
    }
    if (progressLoop > 1) progressLoop -= 1;
  }
  Object.assign(swiper, {
    progress,
    progressLoop,
    isBeginning,
    isEnd
  });
  if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
    swiper.emit('fromEdge');
  }
  swiper.emit('progress', progress);
}

const toggleSlideClasses = (slideEl, condition, className) => {
  if (condition && !slideEl.classList.contains(className)) {
    slideEl.classList.add(className);
  } else if (!condition && slideEl.classList.contains(className)) {
    slideEl.classList.remove(className);
  }
};
function updateSlidesClasses() {
  const swiper = this;
  const {
    slides,
    params,
    slidesEl,
    activeIndex
  } = swiper;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  const getFilteredSlide = selector => {
    return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
  };
  let activeSlide;
  let prevSlide;
  let nextSlide;
  if (isVirtual) {
    if (params.loop) {
      let slideIndex = activeIndex - swiper.virtual.slidesBefore;
      if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
      if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else {
      activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    }
  } else {
    if (gridEnabled) {
      activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
      nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
      prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
    } else {
      activeSlide = slides[activeIndex];
    }
  }
  if (activeSlide) {
    if (!gridEnabled) {
      // Next Slide
      nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !nextSlide) {
        nextSlide = slides[0];
      }

      // Prev Slide
      prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
      if (params.loop && !prevSlide === 0) {
        prevSlide = slides[slides.length - 1];
      }
    }
  }
  slides.forEach(slideEl => {
    toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
    toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
    toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
  });
  swiper.emitSlidesClasses();
}

const processLazyPreloader = (swiper, imageEl) => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
  const slideEl = imageEl.closest(slideSelector());
  if (slideEl) {
    let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
    if (!lazyEl && swiper.isElement) {
      if (slideEl.shadowRoot) {
        lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      } else {
        // init later
        requestAnimationFrame(() => {
          if (slideEl.shadowRoot) {
            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (lazyEl) lazyEl.remove();
          }
        });
      }
    }
    if (lazyEl) lazyEl.remove();
  }
};
const unlazy = (swiper, index) => {
  if (!swiper.slides[index]) return;
  const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
  if (imageEl) imageEl.removeAttribute('loading');
};
const preload = swiper => {
  if (!swiper || swiper.destroyed || !swiper.params) return;
  let amount = swiper.params.lazyPreloadPrevNext;
  const len = swiper.slides.length;
  if (!len || !amount || amount < 0) return;
  amount = Math.min(amount, len);
  const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
  const activeIndex = swiper.activeIndex;
  if (swiper.params.grid && swiper.params.grid.rows > 1) {
    const activeColumn = activeIndex;
    const preloadColumns = [activeColumn - amount];
    preloadColumns.push(...Array.from({
      length: amount
    }).map((_, i) => {
      return activeColumn + slidesPerView + i;
    }));
    swiper.slides.forEach((slideEl, i) => {
      if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
    });
    return;
  }
  const slideIndexLastInView = activeIndex + slidesPerView - 1;
  if (swiper.params.rewind || swiper.params.loop) {
    for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
      const realIndex = (i % len + len) % len;
      if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    }
  } else {
    for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
      if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
        unlazy(swiper, i);
      }
    }
  }
};

function getActiveIndexByTranslate(swiper) {
  const {
    slidesGrid,
    params
  } = swiper;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  let activeIndex;
  for (let i = 0; i < slidesGrid.length; i += 1) {
    if (typeof slidesGrid[i + 1] !== 'undefined') {
      if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
        activeIndex = i;
      } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
        activeIndex = i + 1;
      }
    } else if (translate >= slidesGrid[i]) {
      activeIndex = i;
    }
  }
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
  }
  return activeIndex;
}
function updateActiveIndex(newActiveIndex) {
  const swiper = this;
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  const {
    snapGrid,
    params,
    activeIndex: previousIndex,
    realIndex: previousRealIndex,
    snapIndex: previousSnapIndex
  } = swiper;
  let activeIndex = newActiveIndex;
  let snapIndex;
  const getVirtualRealIndex = aIndex => {
    let realIndex = aIndex - swiper.virtual.slidesBefore;
    if (realIndex < 0) {
      realIndex = swiper.virtual.slides.length + realIndex;
    }
    if (realIndex >= swiper.virtual.slides.length) {
      realIndex -= swiper.virtual.slides.length;
    }
    return realIndex;
  };
  if (typeof activeIndex === 'undefined') {
    activeIndex = getActiveIndexByTranslate(swiper);
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
    snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  if (activeIndex === previousIndex && !swiper.params.loop) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }
  if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
    swiper.realIndex = getVirtualRealIndex(activeIndex);
    return;
  }
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;

  // Get real index
  let realIndex;
  if (swiper.virtual && params.virtual.enabled && params.loop) {
    realIndex = getVirtualRealIndex(activeIndex);
  } else if (gridEnabled) {
    const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
    let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
    if (Number.isNaN(activeSlideIndex)) {
      activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
    }
    realIndex = Math.floor(activeSlideIndex / params.grid.rows);
  } else if (swiper.slides[activeIndex]) {
    const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
    if (slideIndex) {
      realIndex = parseInt(slideIndex, 10);
    } else {
      realIndex = activeIndex;
    }
  } else {
    realIndex = activeIndex;
  }
  Object.assign(swiper, {
    previousSnapIndex,
    snapIndex,
    previousRealIndex,
    realIndex,
    previousIndex,
    activeIndex
  });
  if (swiper.initialized) {
    preload(swiper);
  }
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (swiper.initialized || swiper.params.runCallbacksOnInit) {
    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }
    swiper.emit('slideChange');
  }
}

function updateClickedSlide(el, path) {
  const swiper = this;
  const params = swiper.params;
  let slide = el.closest(`.${params.slideClass}, swiper-slide`);
  if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
    [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
      if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
        slide = pathEl;
      }
    });
  }
  let slideFound = false;
  let slideIndex;
  if (slide) {
    for (let i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) {
        slideFound = true;
        slideIndex = i;
        break;
      }
    }
  }
  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = slideIndex;
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
}

var update = {
  updateSize,
  updateSlides,
  updateAutoHeight,
  updateSlidesOffset,
  updateSlidesProgress,
  updateProgress,
  updateSlidesClasses,
  updateActiveIndex,
  updateClickedSlide
};

function getSwiperTranslate(axis = this.isHorizontal() ? 'x' : 'y') {
  const swiper = this;
  const {
    params,
    rtlTranslate: rtl,
    translate,
    wrapperEl
  } = swiper;
  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }
  if (params.cssMode) {
    return translate;
  }
  let currentTranslate = getTranslate(wrapperEl, axis);
  currentTranslate += swiper.cssOverflowAdjustment();
  if (rtl) currentTranslate = -currentTranslate;
  return currentTranslate || 0;
}

function setTranslate(translate, byController) {
  const swiper = this;
  const {
    rtlTranslate: rtl,
    params,
    wrapperEl,
    progress
  } = swiper;
  let x = 0;
  let y = 0;
  const z = 0;
  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }
  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }
  swiper.previousTranslate = swiper.translate;
  swiper.translate = swiper.isHorizontal() ? x : y;
  if (params.cssMode) {
    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
  } else if (!params.virtualTranslate) {
    if (swiper.isHorizontal()) {
      x -= swiper.cssOverflowAdjustment();
    } else {
      y -= swiper.cssOverflowAdjustment();
    }
    wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }

  // Check if we need to update progress
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }
  swiper.emit('setTranslate', swiper.translate, byController);
}

function minTranslate() {
  return -this.snapGrid[0];
}

function maxTranslate() {
  return -this.snapGrid[this.snapGrid.length - 1];
}

function translateTo(translate = 0, speed = this.params.speed, runCallbacks = true, translateBounds = true, internal) {
  const swiper = this;
  const {
    params,
    wrapperEl
  } = swiper;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  const minTranslate = swiper.minTranslate();
  const maxTranslate = swiper.maxTranslate();
  let newTranslate;
  if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate;

  // Update progress
  swiper.updateProgress(newTranslate);
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    if (speed === 0) {
      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: -newTranslate,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: -newTranslate,
        behavior: 'smooth'
      });
    }
    return true;
  }
  if (speed === 0) {
    swiper.setTransition(0);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionEnd');
    }
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(newTranslate);
    if (runCallbacks) {
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.emit('transitionStart');
    }
    if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onTranslateToWrapperTransitionEnd) {
        swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
          if (!swiper || swiper.destroyed) return;
          if (e.target !== this) return;
          swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.onTranslateToWrapperTransitionEnd = null;
          delete swiper.onTranslateToWrapperTransitionEnd;
          swiper.animating = false;
          if (runCallbacks) {
            swiper.emit('transitionEnd');
          }
        };
      }
      swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
    }
  }
  return true;
}

var translate = {
  getTranslate: getSwiperTranslate,
  setTranslate,
  minTranslate,
  maxTranslate,
  translateTo
};

function setTransition(duration, byController) {
  const swiper = this;
  if (!swiper.params.cssMode) {
    swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
    swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
  }
  swiper.emit('setTransition', duration, byController);
}

function transitionEmit({
  swiper,
  runCallbacks,
  direction,
  step
}) {
  const {
    activeIndex,
    previousIndex
  } = swiper;
  let dir = direction;
  if (!dir) {
    if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
  }
  swiper.emit(`transition${step}`);
  if (runCallbacks && dir === 'reset') {
    swiper.emit(`slideResetTransition${step}`);
  } else if (runCallbacks && activeIndex !== previousIndex) {
    swiper.emit(`slideChangeTransition${step}`);
    if (dir === 'next') {
      swiper.emit(`slideNextTransition${step}`);
    } else {
      swiper.emit(`slidePrevTransition${step}`);
    }
  }
}

function transitionStart(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  if (params.cssMode) return;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'Start'
  });
}

function transitionEnd(runCallbacks = true, direction) {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.animating = false;
  if (params.cssMode) return;
  swiper.setTransition(0);
  transitionEmit({
    swiper,
    runCallbacks,
    direction,
    step: 'End'
  });
}

var transition = {
  setTransition,
  transitionStart,
  transitionEnd
};

function slideTo(index = 0, speed, runCallbacks = true, internal, initial) {
  if (typeof index === 'string') {
    index = parseInt(index, 10);
  }
  const swiper = this;
  let slideIndex = index;
  if (slideIndex < 0) slideIndex = 0;
  const {
    params,
    snapGrid,
    slidesGrid,
    previousIndex,
    activeIndex,
    rtlTranslate: rtl,
    wrapperEl,
    enabled
  } = swiper;
  if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
    return false;
  }
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
  let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  const translate = -snapGrid[snapIndex];
  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (let i = 0; i < slidesGrid.length; i += 1) {
      const normalizedTranslate = -Math.floor(translate * 100);
      const normalizedGrid = Math.floor(slidesGrid[i] * 100);
      const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
          slideIndex = i;
        } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
          slideIndex = i + 1;
        }
      } else if (normalizedTranslate >= normalizedGrid) {
        slideIndex = i;
      }
    }
  }
  // Directions locks
  if (swiper.initialized && slideIndex !== activeIndex) {
    if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
      return false;
    }
    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
      if ((activeIndex || 0) !== slideIndex) {
        return false;
      }
    }
  }
  if (slideIndex !== (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  // Update progress
  swiper.updateProgress(translate);
  let direction;
  if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset';

  // initial virtual
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
  const isInitialVirtual = isVirtual && initial;
  // Update Index
  if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    if (direction !== 'reset') {
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    }
    return false;
  }
  if (params.cssMode) {
    const isH = swiper.isHorizontal();
    const t = rtl ? translate : -translate;
    if (speed === 0) {
      if (isVirtual) {
        swiper.wrapperEl.style.scrollSnapType = 'none';
        swiper._immediateVirtual = true;
      }
      if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
        swiper._cssModeVirtualInitialSet = true;
        requestAnimationFrame(() => {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        });
      } else {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      }
      if (isVirtual) {
        requestAnimationFrame(() => {
          swiper.wrapperEl.style.scrollSnapType = '';
          swiper._immediateVirtual = false;
        });
      }
    } else {
      if (!swiper.support.smoothScroll) {
        animateCSSModeScroll({
          swiper,
          targetPosition: t,
          side: isH ? 'left' : 'top'
        });
        return true;
      }
      wrapperEl.scrollTo({
        [isH ? 'left' : 'top']: t,
        behavior: 'smooth'
      });
    }
    return true;
  }
  const browser = getBrowser();
  const isSafari = browser.isSafari;
  if (isVirtual && !initial && isSafari && swiper.isElement) {
    swiper.virtual.update(false, false, slideIndex);
  }
  swiper.setTransition(speed);
  swiper.setTranslate(translate);
  swiper.updateActiveIndex(slideIndex);
  swiper.updateSlidesClasses();
  swiper.emit('beforeTransitionStart', speed, internal);
  swiper.transitionStart(runCallbacks, direction);
  if (speed === 0) {
    swiper.transitionEnd(runCallbacks, direction);
  } else if (!swiper.animating) {
    swiper.animating = true;
    if (!swiper.onSlideToWrapperTransitionEnd) {
      swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
        if (!swiper || swiper.destroyed) return;
        if (e.target !== this) return;
        swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.onSlideToWrapperTransitionEnd = null;
        delete swiper.onSlideToWrapperTransitionEnd;
        swiper.transitionEnd(runCallbacks, direction);
      };
    }
    swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
  }
  return true;
}

function slideToLoop(index = 0, speed, runCallbacks = true, internal) {
  if (typeof index === 'string') {
    const indexAsNumber = parseInt(index, 10);
    index = indexAsNumber;
  }
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  let newIndex = index;
  if (swiper.params.loop) {
    if (swiper.virtual && swiper.params.virtual.enabled) {
      // eslint-disable-next-line
      newIndex = newIndex + swiper.virtual.slidesBefore;
    } else {
      let targetSlideIndex;
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        targetSlideIndex = swiper.getSlideIndexByData(newIndex);
      }
      const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
      const {
        centeredSlides,
        slidesOffsetBefore,
        slidesOffsetAfter
      } = swiper.params;
      const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
      let slidesPerView = swiper.params.slidesPerView;
      if (slidesPerView === 'auto') {
        slidesPerView = swiper.slidesPerViewDynamic();
      } else {
        slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
        if (bothDirections && slidesPerView % 2 === 0) {
          slidesPerView = slidesPerView + 1;
        }
      }
      let needLoopFix = cols - targetSlideIndex < slidesPerView;
      if (bothDirections) {
        needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
      }
      if (internal && bothDirections && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
        needLoopFix = false;
      }
      if (needLoopFix) {
        const direction = bothDirections ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
        swiper.loopFix({
          direction,
          slideTo: true,
          activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
          slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
        });
      }
      if (gridEnabled) {
        const slideIndex = newIndex * swiper.params.grid.rows;
        newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
      } else {
        newIndex = swiper.getSlideIndexByData(newIndex);
      }
    }
  }
  requestAnimationFrame(() => {
    swiper.slideTo(newIndex, speed, runCallbacks, internal);
  });
  return swiper;
}

/* eslint no-unused-vars: "off" */
function slideNext(speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    enabled,
    params,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let perGroup = params.slidesPerGroup;
  if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
    perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
  }
  const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'next'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
    if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
      });
      return true;
    }
  }
  if (params.rewind && swiper.isEnd) {
    return swiper.slideTo(0, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slidePrev(speed, runCallbacks = true, internal) {
  const swiper = this;
  const {
    params,
    snapGrid,
    slidesGrid,
    rtlTranslate,
    enabled,
    animating
  } = swiper;
  if (!enabled || swiper.destroyed) return swiper;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  const isVirtual = swiper.virtual && params.virtual.enabled;
  if (params.loop) {
    if (animating && !isVirtual && params.loopPreventsSliding) return false;
    swiper.loopFix({
      direction: 'prev'
    });
    // eslint-disable-next-line
    swiper._clientLeft = swiper.wrapperEl.clientLeft;
  }
  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
  function normalize(val) {
    if (val < 0) return -Math.floor(Math.abs(val));
    return Math.floor(val);
  }
  const normalizedTranslate = normalize(translate);
  const normalizedSnapGrid = snapGrid.map(val => normalize(val));
  const isFreeMode = params.freeMode && params.freeMode.enabled;
  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
    let prevSnapIndex;
    snapGrid.forEach((snap, snapIndex) => {
      if (normalizedTranslate >= snap) {
        // prevSnap = snap;
        prevSnapIndex = snapIndex;
      }
    });
    if (typeof prevSnapIndex !== 'undefined') {
      prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
  }
  let prevIndex = 0;
  if (typeof prevSnap !== 'undefined') {
    prevIndex = slidesGrid.indexOf(prevSnap);
    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
      prevIndex = Math.max(prevIndex, 0);
    }
  }
  if (params.rewind && swiper.isBeginning) {
    const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
  } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
    requestAnimationFrame(() => {
      swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    });
    return true;
  }
  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideReset(speed, runCallbacks = true, internal) {
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

/* eslint no-unused-vars: "off" */
function slideToClosest(speed, runCallbacks = true, internal, threshold = 0.5) {
  const swiper = this;
  if (swiper.destroyed) return;
  if (typeof speed === 'undefined') {
    speed = swiper.params.speed;
  }
  let index = swiper.activeIndex;
  const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
  const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  if (translate >= swiper.snapGrid[snapIndex]) {
    // The current translate is on or after the current snap index, so the choice
    // is between the current index and the one after it.
    const currentSnap = swiper.snapGrid[snapIndex];
    const nextSnap = swiper.snapGrid[snapIndex + 1];
    if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
      index += swiper.params.slidesPerGroup;
    }
  } else {
    // The current translate is before the current snap index, so the choice
    // is between the current index and the one before it.
    const prevSnap = swiper.snapGrid[snapIndex - 1];
    const currentSnap = swiper.snapGrid[snapIndex];
    if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
      index -= swiper.params.slidesPerGroup;
    }
  }
  index = Math.max(index, 0);
  index = Math.min(index, swiper.slidesGrid.length - 1);
  return swiper.slideTo(index, speed, runCallbacks, internal);
}

function slideToClickedSlide() {
  const swiper = this;
  if (swiper.destroyed) return;
  const {
    params,
    slidesEl
  } = swiper;
  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
  let realIndex;
  const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
  const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
  if (params.loop) {
    if (swiper.animating) return;
    realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      swiper.slideToLoop(realIndex);
    } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
      swiper.loopFix();
      slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
      nextTick(() => {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
}

var slide = {
  slideTo,
  slideToLoop,
  slideNext,
  slidePrev,
  slideReset,
  slideToClosest,
  slideToClickedSlide
};

function loopCreate(slideRealIndex, initial) {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
  const initSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    slides.forEach((el, index) => {
      el.setAttribute('data-swiper-slide-index', index);
    });
  };
  const clearBlankSlides = () => {
    const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
    slides.forEach(el => {
      el.remove();
    });
    if (slides.length > 0) {
      swiper.recalcSlides();
      swiper.updateSlides();
    }
  };
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
    clearBlankSlides();
  }
  const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
  const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
  const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
  const addBlankSlides = amountOfSlides => {
    for (let i = 0; i < amountOfSlides; i += 1) {
      const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
      swiper.slidesEl.append(slideEl);
    }
  };
  if (shouldFillGroup) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else if (shouldFillGrid) {
    if (params.loopAddBlankSlides) {
      const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
      addBlankSlides(slidesToAdd);
      swiper.recalcSlides();
      swiper.updateSlides();
    } else {
      showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
    }
    initSlides();
  } else {
    initSlides();
  }
  const bothDirections = params.centeredSlides || !!params.slidesOffsetBefore || !!params.slidesOffsetAfter;
  swiper.loopFix({
    slideRealIndex,
    direction: bothDirections ? undefined : 'next',
    initial
  });
}

function loopFix({
  slideRealIndex,
  slideTo = true,
  direction,
  setTranslate,
  activeSlideIndex,
  initial,
  byController,
  byMousewheel
} = {}) {
  const swiper = this;
  if (!swiper.params.loop) return;
  swiper.emit('beforeLoopFix');
  const {
    slides,
    allowSlidePrev,
    allowSlideNext,
    slidesEl,
    params
  } = swiper;
  const {
    centeredSlides,
    slidesOffsetBefore,
    slidesOffsetAfter,
    initialSlide
  } = params;
  const bothDirections = centeredSlides || !!slidesOffsetBefore || !!slidesOffsetAfter;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  if (swiper.virtual && params.virtual.enabled) {
    if (slideTo) {
      if (!bothDirections && swiper.snapIndex === 0) {
        swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
      } else if (bothDirections && swiper.snapIndex < params.slidesPerView) {
        swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
      } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
        swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
    return;
  }
  let slidesPerView = params.slidesPerView;
  if (slidesPerView === 'auto') {
    slidesPerView = swiper.slidesPerViewDynamic();
  } else {
    slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
    if (bothDirections && slidesPerView % 2 === 0) {
      slidesPerView = slidesPerView + 1;
    }
  }
  const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
  let loopedSlides = bothDirections ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
  if (loopedSlides % slidesPerGroup !== 0) {
    loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
  }
  loopedSlides += params.loopAdditionalSlides;
  swiper.loopedSlides = loopedSlides;
  const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
  if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
  } else if (gridEnabled && params.grid.fill === 'row') {
    showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
  }
  const prependSlidesIndexes = [];
  const appendSlidesIndexes = [];
  const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
  const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !bothDirections;
  let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
  if (typeof activeSlideIndex === 'undefined') {
    activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
  } else {
    activeIndex = activeSlideIndex;
  }
  const isNext = direction === 'next' || !direction;
  const isPrev = direction === 'prev' || !direction;
  let slidesPrepended = 0;
  let slidesAppended = 0;
  const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
  const activeColIndexWithShift = activeColIndex + (bothDirections && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
  // prepend last slides before start
  if (activeColIndexWithShift < loopedSlides) {
    slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
    for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        const colIndexToPrepend = cols - index - 1;
        for (let i = slides.length - 1; i >= 0; i -= 1) {
          if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
        }
        // slides.forEach((slide, slideIndex) => {
        //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
        // });
      } else {
        prependSlidesIndexes.push(cols - index - 1);
      }
    }
  } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
    slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
    if (isInitialOverflow) {
      slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
    }
    for (let i = 0; i < slidesAppended; i += 1) {
      const index = i - Math.floor(i / cols) * cols;
      if (gridEnabled) {
        slides.forEach((slide, slideIndex) => {
          if (slide.column === index) appendSlidesIndexes.push(slideIndex);
        });
      } else {
        appendSlidesIndexes.push(index);
      }
    }
  }
  swiper.__preventObserver__ = true;
  requestAnimationFrame(() => {
    swiper.__preventObserver__ = false;
  });
  if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
    if (appendSlidesIndexes.includes(activeSlideIndex)) {
      appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
    if (prependSlidesIndexes.includes(activeSlideIndex)) {
      prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
    }
  }
  if (isPrev) {
    prependSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.prepend(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  if (isNext) {
    appendSlidesIndexes.forEach(index => {
      slides[index].swiperLoopMoveDOM = true;
      slidesEl.append(slides[index]);
      slides[index].swiperLoopMoveDOM = false;
    });
  }
  swiper.recalcSlides();
  if (params.slidesPerView === 'auto') {
    swiper.updateSlides();
  } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
    swiper.slides.forEach((slide, slideIndex) => {
      swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
    });
  }
  if (params.watchSlidesProgress) {
    swiper.updateSlidesOffset();
  }
  if (slideTo) {
    if (prependSlidesIndexes.length > 0 && isPrev) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        if (setTranslate) {
          const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
          swiper.touchEventsData.currentTranslate = swiper.translate;
        }
      }
    } else if (appendSlidesIndexes.length > 0 && isNext) {
      if (typeof slideRealIndex === 'undefined') {
        const currentSlideTranslate = swiper.slidesGrid[activeIndex];
        const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
        const diff = newSlideTranslate - currentSlideTranslate;
        if (byMousewheel) {
          swiper.setTranslate(swiper.translate - diff);
        } else {
          swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
          if (setTranslate) {
            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
          }
        }
      } else {
        const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
        swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
      }
    }
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.controller && swiper.controller.control && !byController) {
    const loopParams = {
      slideRealIndex,
      direction,
      setTranslate,
      activeSlideIndex,
      byController: true
    };
    if (Array.isArray(swiper.controller.control)) {
      swiper.controller.control.forEach(c => {
        if (!c.destroyed && c.params.loop) c.loopFix({
          ...loopParams,
          slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
        });
      });
    } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
      swiper.controller.control.loopFix({
        ...loopParams,
        slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
      });
    }
  }
  swiper.emit('loopFix');
}

function loopDestroy() {
  const swiper = this;
  const {
    params,
    slidesEl
  } = swiper;
  if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
  swiper.recalcSlides();
  const newSlidesOrder = [];
  swiper.slides.forEach(slideEl => {
    const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
    newSlidesOrder[index] = slideEl;
  });
  swiper.slides.forEach(slideEl => {
    slideEl.removeAttribute('data-swiper-slide-index');
  });
  newSlidesOrder.forEach(slideEl => {
    slidesEl.append(slideEl);
  });
  swiper.recalcSlides();
  swiper.slideTo(swiper.realIndex, 0);
}

var loop = {
  loopCreate,
  loopFix,
  loopDestroy
};

function setGrabCursor(moving) {
  const swiper = this;
  if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
  const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  el.style.cursor = 'move';
  el.style.cursor = moving ? 'grabbing' : 'grab';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

function unsetGrabCursor() {
  const swiper = this;
  if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
    return;
  }
  if (swiper.isElement) {
    swiper.__preventObserver__ = true;
  }
  swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  if (swiper.isElement) {
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
  }
}

var grabCursor = {
  setGrabCursor,
  unsetGrabCursor
};

// Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
function closestElement(selector, base = this) {
  function __closestFrom(el) {
    if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
    if (el.assignedSlot) el = el.assignedSlot;
    const found = el.closest(selector);
    if (!found && !el.getRootNode) {
      return null;
    }
    return found || __closestFrom(el.getRootNode().host);
  }
  return __closestFrom(base);
}
function preventEdgeSwipe(swiper, event, startX) {
  const window = ssr_window_esm_getWindow();
  const {
    params
  } = swiper;
  const edgeSwipeDetection = params.edgeSwipeDetection;
  const edgeSwipeThreshold = params.edgeSwipeThreshold;
  if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
    if (edgeSwipeDetection === 'prevent') {
      event.preventDefault();
      return true;
    }
    return false;
  }
  return true;
}
function onTouchStart(event) {
  const swiper = this;
  const document = ssr_window_esm_getDocument();
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  const data = swiper.touchEventsData;
  if (e.type === 'pointerdown') {
    if (data.pointerId !== null && data.pointerId !== e.pointerId) {
      return;
    }
    data.pointerId = e.pointerId;
  } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
    data.touchId = e.targetTouches[0].identifier;
  }
  if (e.type === 'touchstart') {
    // don't proceed touch event
    preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
    return;
  }
  const {
    params,
    touches,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (swiper.animating && params.preventInteractionOnTransition) {
    return;
  }
  if (!swiper.animating && params.cssMode && params.loop) {
    swiper.loopFix();
  }
  let targetEl = e.target;
  if (params.touchEventsTarget === 'wrapper') {
    if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
  }
  if ('which' in e && e.which === 3) return;
  if ('button' in e && e.button > 0) return;
  if (data.isTouched && data.isMoved) return;

  // change target el for shadow root component
  const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  // eslint-disable-next-line
  const eventPath = e.composedPath ? e.composedPath() : e.path;
  if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
    targetEl = eventPath[0];
  }
  const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
  const isTargetShadow = !!(e.target && e.target.shadowRoot);

  // use closestElement for shadow root element to get the actual closest for nested shadow root element
  if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!targetEl.closest(params.swipeHandler)) return;
  }
  touches.currentX = e.pageX;
  touches.currentY = e.pageY;
  const startX = touches.currentX;
  const startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

  if (!preventEdgeSwipe(swiper, e, startX)) {
    return;
  }
  Object.assign(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined
  });
  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) data.allowThresholdMove = false;
  let preventDefault = true;
  if (targetEl.matches(data.focusableElements)) {
    preventDefault = false;
    if (targetEl.nodeName === 'SELECT') {
      data.isTouched = false;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
    document.activeElement.blur();
  }
  const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
    e.preventDefault();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
    swiper.freeMode.onTouchStart();
  }
  swiper.emit('touchStart', e);
}

function onTouchMove(event) {
  const document = ssr_window_esm_getDocument();
  const swiper = this;
  const data = swiper.touchEventsData;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && event.pointerType === 'mouse') return;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  if (e.type === 'pointermove') {
    if (data.touchId !== null) return; // return from pointer if we use touch
    const id = e.pointerId;
    if (id !== data.pointerId) return;
  }
  let targetTouch;
  if (e.type === 'touchmove') {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  } else {
    targetTouch = e;
  }
  if (!data.isTouched) {
    if (data.startMoving && data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }
    return;
  }
  const pageX = targetTouch.pageX;
  const pageY = targetTouch.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    if (!e.target.matches(data.focusableElements)) {
      swiper.allowClick = false;
    }
    if (data.isTouched) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY
      });
      data.touchStartTime = now();
    }
    return;
  }
  if (params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
      return;
    } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
      return;
    }
  }
  if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
    document.activeElement.blur();
  }
  if (document.activeElement) {
    if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  touches.previousX = touches.currentX;
  touches.previousY = touches.currentY;
  touches.currentX = pageX;
  touches.currentY = pageY;
  const diffX = touches.currentX - touches.startX;
  const diffY = touches.currentY - touches.startY;
  if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
  if (typeof data.isScrolling === 'undefined') {
    let touchAngle;
    if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if (diffX * diffX + diffY * diffY >= 25) {
        touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof data.startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  if (!params.cssMode && e.cancelable) {
    e.preventDefault();
  }
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }
  let diff = swiper.isHorizontal() ? diffX : diffY;
  let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
  if (params.oneWayMovement) {
    diff = Math.abs(diff) * (rtl ? 1 : -1);
    touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
  }
  touches.diff = diff;
  diff *= params.touchRatio;
  if (rtl) {
    diff = -diff;
    touchesDiff = -touchesDiff;
  }
  const prevTouchesDirection = swiper.touchesDirection;
  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
  const isLoop = swiper.params.loop && !params.cssMode;
  const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
  if (!data.isMoved) {
    if (isLoop && allowLoopFix) {
      swiper.loopFix({
        direction: swiper.swipeDirection
      });
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      const evt = new window.CustomEvent('transitionend', {
        bubbles: true,
        cancelable: true,
        detail: {
          bySwiperTouchMove: true
        }
      });
      swiper.wrapperEl.dispatchEvent(evt);
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  let loopFixed;
  new Date().getTime();
  if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
    Object.assign(touches, {
      startX: pageX,
      startY: pageY,
      currentX: pageX,
      currentY: pageY,
      startTranslate: data.currentTranslate
    });
    data.loopSwapReset = true;
    data.startTranslate = data.currentTranslate;
    return;
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;
  data.currentTranslate = diff + data.startTranslate;
  let disableParentSwiper = true;
  let resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if (diff > 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
      swiper.loopFix({
        direction: 'prev',
        setTranslate: true,
        activeSlideIndex: 0
      });
    }
    if (data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      }
    }
  } else if (diff < 0) {
    if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
      swiper.loopFix({
        direction: 'next',
        setTranslate: true,
        activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
      });
    }
    if (data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) {
        data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }
    }
  }
  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
    data.currentTranslate = data.startTranslate;
  }

  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }
  if (!params.followFinger || params.cssMode) return;

  // Update active index in free mode
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
    swiper.freeMode.onTouchMove();
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
}

function onTouchEnd(event) {
  const swiper = this;
  const data = swiper.touchEventsData;
  let e = event;
  if (e.originalEvent) e = e.originalEvent;
  let targetTouch;
  const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
  if (!isTouchEvent) {
    if (data.touchId !== null) return; // return from pointer if we use touch
    if (e.pointerId !== data.pointerId) return;
    targetTouch = e;
  } else {
    targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
    if (!targetTouch || targetTouch.identifier !== data.touchId) return;
  }
  if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
    const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
    if (!proceed) {
      return;
    }
  }
  data.pointerId = null;
  data.touchId = null;
  const {
    params,
    touches,
    rtlTranslate: rtl,
    slidesGrid,
    enabled
  } = swiper;
  if (!enabled) return;
  if (!params.simulateTouch && e.pointerType === 'mouse') return;
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) {
    if (data.isMoved && params.grabCursor) {
      swiper.setGrabCursor(false);
    }
    data.isMoved = false;
    data.startMoving = false;
    return;
  }

  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  const touchEndTime = now();
  const timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    const pathTree = e.path || e.composedPath && e.composedPath();
    swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
    swiper.emit('tap click', e);
    if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
      swiper.emit('doubleTap doubleClick', e);
    }
  }
  data.lastClickTime = now();
  nextTick(() => {
    if (!swiper.destroyed) swiper.allowClick = true;
  });
  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;
  data.startMoving = false;
  let currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.cssMode) {
    return;
  }
  if (params.freeMode && params.freeMode.enabled) {
    swiper.freeMode.onTouchEnd({
      currentPos
    });
    return;
  }

  // Find current slide
  const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
  let stopIndex = 0;
  let groupSize = swiper.slidesSizesGrid[0];
  for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
    const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (typeof slidesGrid[i + increment] !== 'undefined') {
      if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
        stopIndex = i;
        groupSize = slidesGrid[i + increment] - slidesGrid[i];
      }
    } else if (swipeToLast || currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }
  let rewindFirstIndex = null;
  let rewindLastIndex = null;
  if (params.rewind) {
    if (swiper.isBeginning) {
      rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
    } else if (swiper.isEnd) {
      rewindFirstIndex = 0;
    }
  }
  // Find current slide size
  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
  const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > 1 - params.longSwipesRatio) {
        swiper.slideTo(stopIndex + increment);
      } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
        swiper.slideTo(rewindLastIndex);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
    if (!isNavButtonTarget) {
      if (swiper.swipeDirection === 'next') {
        swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
      }
      if (swiper.swipeDirection === 'prev') {
        swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
      }
    } else if (e.target === swiper.navigation.nextEl) {
      swiper.slideTo(stopIndex + increment);
    } else {
      swiper.slideTo(stopIndex);
    }
  }
}

function onResize() {
  const swiper = this;
  const {
    params,
    el
  } = swiper;
  if (el && el.offsetWidth === 0) return;

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  const {
    allowSlideNext,
    allowSlidePrev,
    snapGrid
  } = swiper;
  const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;
  swiper.updateSize();
  swiper.updateSlides();
  swiper.updateSlidesClasses();
  const isVirtualLoop = isVirtual && params.loop;
  if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
    swiper.slideTo(swiper.slides.length - 1, 0, false, true);
  } else {
    if (swiper.params.loop && !isVirtual) {
      swiper.slideToLoop(swiper.realIndex, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
    clearTimeout(swiper.autoplay.resizeTimeout);
    swiper.autoplay.resizeTimeout = setTimeout(() => {
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.resume();
      }
    }, 500);
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
    swiper.checkOverflow();
  }
}

function onClick(e) {
  const swiper = this;
  if (!swiper.enabled) return;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) e.preventDefault();
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
}

function onScroll() {
  const swiper = this;
  const {
    wrapperEl,
    rtlTranslate,
    enabled
  } = swiper;
  if (!enabled) return;
  swiper.previousTranslate = swiper.translate;
  if (swiper.isHorizontal()) {
    swiper.translate = -wrapperEl.scrollLeft;
  } else {
    swiper.translate = -wrapperEl.scrollTop;
  }
  // eslint-disable-next-line
  if (swiper.translate === 0) swiper.translate = 0;
  swiper.updateActiveIndex();
  swiper.updateSlidesClasses();
  let newProgress;
  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
  }
  if (newProgress !== swiper.progress) {
    swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
  }
  swiper.emit('setTranslate', swiper.translate, false);
}

function onLoad(e) {
  const swiper = this;
  processLazyPreloader(swiper, e.target);
  if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
    return;
  }
  swiper.update();
}

function onDocumentTouchStart() {
  const swiper = this;
  if (swiper.documentTouchHandlerProceeded) return;
  swiper.documentTouchHandlerProceeded = true;
  if (swiper.params.touchReleaseOnEdges) {
    swiper.el.style.touchAction = 'auto';
  }
}

const events = (swiper, method) => {
  const document = ssr_window_esm_getDocument();
  const {
    params,
    el,
    wrapperEl,
    device
  } = swiper;
  const capture = !!params.nested;
  const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
  const swiperMethod = method;
  if (!el || typeof el === 'string') return;

  // Touch Events
  document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
    passive: false,
    capture
  });
  el[domMethod]('touchstart', swiper.onTouchStart, {
    passive: false
  });
  el[domMethod]('pointerdown', swiper.onTouchStart, {
    passive: false
  });
  document[domMethod]('touchmove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('pointermove', swiper.onTouchMove, {
    passive: false,
    capture
  });
  document[domMethod]('touchend', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerup', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointercancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('touchcancel', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerout', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('pointerleave', swiper.onTouchEnd, {
    passive: true
  });
  document[domMethod]('contextmenu', swiper.onTouchEnd, {
    passive: true
  });

  // Prevent Links Clicks
  if (params.preventClicks || params.preventClicksPropagation) {
    el[domMethod]('click', swiper.onClick, true);
  }
  if (params.cssMode) {
    wrapperEl[domMethod]('scroll', swiper.onScroll);
  }

  // Resize handler
  if (params.updateOnWindowResize) {
    swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
  } else {
    swiper[swiperMethod]('observerUpdate', onResize, true);
  }

  // Images loader
  el[domMethod]('load', swiper.onLoad, {
    capture: true
  });
};
function attachEvents() {
  const swiper = this;
  const {
    params
  } = swiper;
  swiper.onTouchStart = onTouchStart.bind(swiper);
  swiper.onTouchMove = onTouchMove.bind(swiper);
  swiper.onTouchEnd = onTouchEnd.bind(swiper);
  swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
  if (params.cssMode) {
    swiper.onScroll = onScroll.bind(swiper);
  }
  swiper.onClick = onClick.bind(swiper);
  swiper.onLoad = onLoad.bind(swiper);
  events(swiper, 'on');
}
function detachEvents() {
  const swiper = this;
  events(swiper, 'off');
}
var events$1 = {
  attachEvents,
  detachEvents
};

const isGridEnabled = (swiper, params) => {
  return swiper.grid && params.grid && params.grid.rows > 1;
};
function setBreakpoint() {
  const swiper = this;
  const {
    realIndex,
    initialized,
    params,
    el
  } = swiper;
  const breakpoints = params.breakpoints;
  if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
  const document = ssr_window_esm_getDocument();

  // Get breakpoint for window/container width and update parameters
  const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
  const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
  const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
  if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
  const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  const breakpointParams = breakpointOnlyParams || swiper.originalParams;
  const wasMultiRow = isGridEnabled(swiper, params);
  const isMultiRow = isGridEnabled(swiper, breakpointParams);
  const wasGrabCursor = swiper.params.grabCursor;
  const isGrabCursor = breakpointParams.grabCursor;
  const wasEnabled = params.enabled;
  if (wasMultiRow && !isMultiRow) {
    el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
    swiper.emitContainerClasses();
  } else if (!wasMultiRow && isMultiRow) {
    el.classList.add(`${params.containerModifierClass}grid`);
    if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
      el.classList.add(`${params.containerModifierClass}grid-column`);
    }
    swiper.emitContainerClasses();
  }
  if (wasGrabCursor && !isGrabCursor) {
    swiper.unsetGrabCursor();
  } else if (!wasGrabCursor && isGrabCursor) {
    swiper.setGrabCursor();
  }

  // Toggle navigation, pagination, scrollbar
  ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
    if (typeof breakpointParams[prop] === 'undefined') return;
    const wasModuleEnabled = params[prop] && params[prop].enabled;
    const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
    if (wasModuleEnabled && !isModuleEnabled) {
      swiper[prop].disable();
    }
    if (!wasModuleEnabled && isModuleEnabled) {
      swiper[prop].enable();
    }
  });
  const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
  const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  const wasLoop = params.loop;
  if (directionChanged && initialized) {
    swiper.changeDirection();
  }
  utils_extend(swiper.params, breakpointParams);
  const isEnabled = swiper.params.enabled;
  const hasLoop = swiper.params.loop;
  Object.assign(swiper, {
    allowTouchMove: swiper.params.allowTouchMove,
    allowSlideNext: swiper.params.allowSlideNext,
    allowSlidePrev: swiper.params.allowSlidePrev
  });
  if (wasEnabled && !isEnabled) {
    swiper.disable();
  } else if (!wasEnabled && isEnabled) {
    swiper.enable();
  }
  swiper.currentBreakpoint = breakpoint;
  swiper.emit('_beforeBreakpoint', breakpointParams);
  if (initialized) {
    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (!wasLoop && hasLoop) {
      swiper.loopCreate(realIndex);
      swiper.updateSlides();
    } else if (wasLoop && !hasLoop) {
      swiper.loopDestroy();
    }
  }
  swiper.emit('breakpoint', breakpointParams);
}

function getBreakpoint(breakpoints, base = 'window', containerEl) {
  if (!breakpoints || base === 'container' && !containerEl) return undefined;
  let breakpoint = false;
  const window = ssr_window_esm_getWindow();
  const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
  const points = Object.keys(breakpoints).map(point => {
    if (typeof point === 'string' && point.indexOf('@') === 0) {
      const minRatio = parseFloat(point.substr(1));
      const value = currentHeight * minRatio;
      return {
        value,
        point
      };
    }
    return {
      value: point,
      point
    };
  });
  points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
  for (let i = 0; i < points.length; i += 1) {
    const {
      point,
      value
    } = points[i];
    if (base === 'window') {
      if (window.matchMedia(`(min-width: ${value}px)`).matches) {
        breakpoint = point;
      }
    } else if (value <= containerEl.clientWidth) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
}

var breakpoints = {
  setBreakpoint,
  getBreakpoint
};

function prepareClasses(entries, prefix) {
  const resultClasses = [];
  entries.forEach(item => {
    if (typeof item === 'object') {
      Object.keys(item).forEach(classNames => {
        if (item[classNames]) {
          resultClasses.push(prefix + classNames);
        }
      });
    } else if (typeof item === 'string') {
      resultClasses.push(prefix + item);
    }
  });
  return resultClasses;
}
function addClasses() {
  const swiper = this;
  const {
    classNames,
    params,
    rtl,
    el,
    device
  } = swiper;
  // prettier-ignore
  const suffixes = prepareClasses(['initialized', params.direction, {
    'free-mode': swiper.params.freeMode && params.freeMode.enabled
  }, {
    'autoheight': params.autoHeight
  }, {
    'rtl': rtl
  }, {
    'grid': params.grid && params.grid.rows > 1
  }, {
    'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
  }, {
    'android': device.android
  }, {
    'ios': device.ios
  }, {
    'css-mode': params.cssMode
  }, {
    'centered': params.cssMode && params.centeredSlides
  }, {
    'watch-progress': params.watchSlidesProgress
  }], params.containerModifierClass);
  classNames.push(...suffixes);
  el.classList.add(...classNames);
  swiper.emitContainerClasses();
}

function removeClasses() {
  const swiper = this;
  const {
    el,
    classNames
  } = swiper;
  if (!el || typeof el === 'string') return;
  el.classList.remove(...classNames);
  swiper.emitContainerClasses();
}

var classes = {
  addClasses,
  removeClasses
};

function checkOverflow() {
  const swiper = this;
  const {
    isLocked: wasLocked,
    params
  } = swiper;
  const {
    slidesOffsetBefore
  } = params;
  if (slidesOffsetBefore) {
    const lastSlideIndex = swiper.slides.length - 1;
    const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
    swiper.isLocked = swiper.size > lastSlideRightEdge;
  } else {
    swiper.isLocked = swiper.snapGrid.length === 1;
  }
  if (params.allowSlideNext === true) {
    swiper.allowSlideNext = !swiper.isLocked;
  }
  if (params.allowSlidePrev === true) {
    swiper.allowSlidePrev = !swiper.isLocked;
  }
  if (wasLocked && wasLocked !== swiper.isLocked) {
    swiper.isEnd = false;
  }
  if (wasLocked !== swiper.isLocked) {
    swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  }
}
var checkOverflow$1 = {
  checkOverflow
};

var defaults = {
  init: true,
  direction: 'horizontal',
  oneWayMovement: false,
  swiperElementNodeName: 'SWIPER-CONTAINER',
  touchEventsTarget: 'wrapper',
  initialSlide: 0,
  speed: 300,
  cssMode: false,
  updateOnWindowResize: true,
  resizeObserver: true,
  nested: false,
  createElements: false,
  eventsPrefix: 'swiper',
  enabled: true,
  focusableElements: 'input, select, option, textarea, button, video, label',
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: false,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: false,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: false,
  // Set wrapper width
  setWrapperSize: false,
  // Virtual Translate
  virtualTranslate: false,
  // Effects
  effect: 'slide',
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,
  breakpointsBase: 'window',
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: false,
  centeredSlides: false,
  centeredSlidesBounds: false,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: true,
  centerInsufficientSlides: false,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: true,
  // Round length
  roundLengths: false,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 5,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: true,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  // Unique Navigation Elements
  uniqueNavElements: true,
  // Resistance
  resistance: true,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: false,
  // Cursor
  grabCursor: false,
  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  // loop
  loop: false,
  loopAddBlankSlides: true,
  loopAdditionalSlides: 0,
  loopPreventsSliding: true,
  // rewind
  rewind: false,
  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: true,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: 'swiper-',
  // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-blank',
  slideActiveClass: 'swiper-slide-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideFullyVisibleClass: 'swiper-slide-fully-visible',
  slideNextClass: 'swiper-slide-next',
  slidePrevClass: 'swiper-slide-prev',
  wrapperClass: 'swiper-wrapper',
  lazyPreloaderClass: 'swiper-lazy-preloader',
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: true,
  // Internals
  _emitClasses: false
};

function moduleExtendParams(params, allModulesParams) {
  return function extendParams(obj = {}) {
    const moduleParamName = Object.keys(obj)[0];
    const moduleParams = obj[moduleParamName];
    if (typeof moduleParams !== 'object' || moduleParams === null) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (params[moduleParamName] === true) {
      params[moduleParamName] = {
        enabled: true
      };
    }
    if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
      params[moduleParamName].auto = true;
    }
    if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
      params[moduleParamName].auto = true;
    }
    if (!(moduleParamName in params && 'enabled' in moduleParams)) {
      utils_extend(allModulesParams, obj);
      return;
    }
    if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
      params[moduleParamName].enabled = true;
    }
    if (!params[moduleParamName]) params[moduleParamName] = {
      enabled: false
    };
    utils_extend(allModulesParams, obj);
  };
}

/* eslint no-param-reassign: "off" */
const prototypes = {
  eventsEmitter,
  update,
  translate,
  transition,
  slide,
  loop,
  grabCursor,
  events: events$1,
  breakpoints,
  checkOverflow: checkOverflow$1,
  classes
};
const extendedDefaults = {};
class Swiper {
  constructor(...args) {
    let el;
    let params;
    if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
      params = args[0];
    } else {
      [el, params] = args;
    }
    if (!params) params = {};
    params = utils_extend({}, params);
    if (el && !params.el) params.el = el;
    const document = ssr_window_esm_getDocument();
    if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
      const swipers = [];
      document.querySelectorAll(params.el).forEach(containerEl => {
        const newParams = utils_extend({}, params, {
          el: containerEl
        });
        swipers.push(new Swiper(newParams));
      });
      // eslint-disable-next-line no-constructor-return
      return swipers;
    }

    // Swiper Instance
    const swiper = this;
    swiper.__swiper__ = true;
    swiper.support = getSupport();
    swiper.device = getDevice({
      userAgent: params.userAgent
    });
    swiper.browser = getBrowser();
    swiper.eventsListeners = {};
    swiper.eventsAnyListeners = [];
    swiper.modules = [...swiper.__modules__];
    if (params.modules && Array.isArray(params.modules)) {
      swiper.modules.push(...params.modules);
    }
    const allModulesParams = {};
    swiper.modules.forEach(mod => {
      mod({
        params,
        swiper,
        extendParams: moduleExtendParams(params, allModulesParams),
        on: swiper.on.bind(swiper),
        once: swiper.once.bind(swiper),
        off: swiper.off.bind(swiper),
        emit: swiper.emit.bind(swiper)
      });
    });

    // Extend defaults with modules params
    const swiperParams = utils_extend({}, defaults, allModulesParams);

    // Extend defaults with passed params
    swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = utils_extend({}, swiper.params);
    swiper.passedParams = utils_extend({}, params);

    // add event listeners
    if (swiper.params && swiper.params.on) {
      Object.keys(swiper.params.on).forEach(eventName => {
        swiper.on(eventName, swiper.params.on[eventName]);
      });
    }
    if (swiper.params && swiper.params.onAny) {
      swiper.onAny(swiper.params.onAny);
    }

    // Extend Swiper
    Object.assign(swiper, {
      enabled: swiper.params.enabled,
      el,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: true,
      isEnd: false,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: false,
      cssOverflowAdjustment() {
        // Returns 0 unless `translate` is > 2**23
        // Should be subtracted from css values to prevent overflow
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        focusableElements: swiper.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        startMoving: undefined,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: true,
      // Touches
      allowTouchMove: swiper.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    });
    swiper.emit('_swiper');

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    // eslint-disable-next-line no-constructor-return
    return swiper;
  }
  getDirectionLabel(property) {
    if (this.isHorizontal()) {
      return property;
    }
    // prettier-ignore
    return {
      'width': 'height',
      'margin-top': 'margin-left',
      'margin-bottom ': 'margin-right',
      'margin-left': 'margin-top',
      'margin-right': 'margin-bottom',
      'padding-left': 'padding-top',
      'padding-right': 'padding-bottom',
      'marginRight': 'marginBottom'
    }[property];
  }
  getSlideIndex(slideEl) {
    const {
      slidesEl,
      params
    } = this;
    const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    const firstSlideIndex = elementIndex(slides[0]);
    return elementIndex(slideEl) - firstSlideIndex;
  }
  getSlideIndexByData(index) {
    return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
  }
  getSlideIndexWhenGrid(index) {
    if (this.grid && this.params.grid && this.params.grid.rows > 1) {
      if (this.params.grid.fill === 'column') {
        index = Math.floor(index / this.params.grid.rows);
      } else if (this.params.grid.fill === 'row') {
        index = index % Math.ceil(this.slides.length / this.params.grid.rows);
      }
    }
    return index;
  }
  recalcSlides() {
    const swiper = this;
    const {
      slidesEl,
      params
    } = swiper;
    swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
  }
  enable() {
    const swiper = this;
    if (swiper.enabled) return;
    swiper.enabled = true;
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }
    swiper.emit('enable');
  }
  disable() {
    const swiper = this;
    if (!swiper.enabled) return;
    swiper.enabled = false;
    if (swiper.params.grabCursor) {
      swiper.unsetGrabCursor();
    }
    swiper.emit('disable');
  }
  setProgress(progress, speed) {
    const swiper = this;
    progress = Math.min(Math.max(progress, 0), 1);
    const min = swiper.minTranslate();
    const max = swiper.maxTranslate();
    const current = (max - min) * progress + min;
    swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  emitContainerClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const cls = swiper.el.className.split(' ').filter(className => {
      return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
    });
    swiper.emit('_containerClasses', cls.join(' '));
  }
  getSlideClasses(slideEl) {
    const swiper = this;
    if (swiper.destroyed) return '';
    return slideEl.className.split(' ').filter(className => {
      return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
    }).join(' ');
  }
  emitSlidesClasses() {
    const swiper = this;
    if (!swiper.params._emitClasses || !swiper.el) return;
    const updates = [];
    swiper.slides.forEach(slideEl => {
      const classNames = swiper.getSlideClasses(slideEl);
      updates.push({
        slideEl,
        classNames
      });
      swiper.emit('_slideClass', slideEl, classNames);
    });
    swiper.emit('_slideClasses', updates);
  }
  slidesPerViewDynamic(view = 'current', exact = false) {
    const swiper = this;
    const {
      params,
      slides,
      slidesGrid,
      slidesSizesGrid,
      size: swiperSize,
      activeIndex
    } = swiper;
    let spv = 1;
    if (typeof params.slidesPerView === 'number') return params.slidesPerView;
    if (params.centeredSlides) {
      let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
      let breakLoop;
      for (let i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += Math.ceil(slides[i].swiperSlideSize);
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
      for (let i = activeIndex - 1; i >= 0; i -= 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) breakLoop = true;
        }
      }
    } else {
      // eslint-disable-next-line
      if (view === 'current') {
        for (let i = activeIndex + 1; i < slides.length; i += 1) {
          const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      } else {
        // previous
        for (let i = activeIndex - 1; i >= 0; i -= 1) {
          const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
          if (slideInView) {
            spv += 1;
          }
        }
      }
    }
    return spv;
  }
  update() {
    const swiper = this;
    if (!swiper || swiper.destroyed) return;
    const {
      snapGrid,
      params
    } = swiper;
    // Breakpoints
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      }
    });
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();
    function setTranslate() {
      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    let translated;
    if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
      setTranslate();
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
        translated = swiper.slideTo(slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
    swiper.emit('update');
  }
  changeDirection(newDirection, needUpdate = true) {
    const swiper = this;
    const currentDirection = swiper.params.direction;
    if (!newDirection) {
      // eslint-disable-next-line
      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
    }
    if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
      return swiper;
    }
    swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
    swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
    swiper.emitContainerClasses();
    swiper.params.direction = newDirection;
    swiper.slides.forEach(slideEl => {
      if (newDirection === 'vertical') {
        slideEl.style.width = '';
      } else {
        slideEl.style.height = '';
      }
    });
    swiper.emit('changeDirection');
    if (needUpdate) swiper.update();
    return swiper;
  }
  changeLanguageDirection(direction) {
    const swiper = this;
    if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
    swiper.rtl = direction === 'rtl';
    swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
    if (swiper.rtl) {
      swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'rtl';
    } else {
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
      swiper.el.dir = 'ltr';
    }
    swiper.update();
  }
  mount(element) {
    const swiper = this;
    if (swiper.mounted) return true;

    // Find el
    let el = element || swiper.params.el;
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    if (!el) {
      return false;
    }
    el.swiper = swiper;
    if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
      swiper.isElement = true;
    }
    const getWrapperSelector = () => {
      return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
    };
    const getWrapper = () => {
      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        const res = el.shadowRoot.querySelector(getWrapperSelector());
        // Children needs to return slot items
        return res;
      }
      return elementChildren(el, getWrapperSelector())[0];
    };
    // Find Wrapper
    let wrapperEl = getWrapper();
    if (!wrapperEl && swiper.params.createElements) {
      wrapperEl = createElement('div', swiper.params.wrapperClass);
      el.append(wrapperEl);
      elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
        wrapperEl.append(slideEl);
      });
    }
    Object.assign(swiper, {
      el,
      wrapperEl,
      slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
      hostEl: swiper.isElement ? el.parentNode.host : el,
      mounted: true,
      // RTL
      rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
      wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
    });
    return true;
  }
  init(el) {
    const swiper = this;
    if (swiper.initialized) return swiper;
    const mounted = swiper.mount(el);
    if (mounted === false) return swiper;
    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();
    if (swiper.params.watchOverflow) {
      swiper.checkOverflow();
    }

    // Set Grab Cursor
    if (swiper.params.grabCursor && swiper.enabled) {
      swiper.setGrabCursor();
    }

    // Slide To Initial Slide
    if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
    }

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate(undefined, true);
    }

    // Attach events
    swiper.attachEvents();
    const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
    if (swiper.isElement) {
      lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
    }
    lazyElements.forEach(imageEl => {
      if (imageEl.complete) {
        processLazyPreloader(swiper, imageEl);
      } else {
        imageEl.addEventListener('load', e => {
          processLazyPreloader(swiper, e.target);
        });
      }
    });
    preload(swiper);

    // Init Flag
    swiper.initialized = true;
    preload(swiper);

    // Emit
    swiper.emit('init');
    swiper.emit('afterInit');
    return swiper;
  }
  destroy(deleteInstance = true, cleanStyles = true) {
    const swiper = this;
    const {
      params,
      el,
      wrapperEl,
      slides
    } = swiper;
    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
      return null;
    }
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      if (el && typeof el !== 'string') {
        el.removeAttribute('style');
      }
      if (wrapperEl) {
        wrapperEl.removeAttribute('style');
      }
      if (slides && slides.length) {
        slides.forEach(slideEl => {
          slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
          slideEl.removeAttribute('style');
          slideEl.removeAttribute('data-swiper-slide-index');
        });
      }
    }
    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(eventName => {
      swiper.off(eventName);
    });
    if (deleteInstance !== false) {
      if (swiper.el && typeof swiper.el !== 'string') {
        swiper.el.swiper = null;
      }
      deleteProps(swiper);
    }
    swiper.destroyed = true;
    return null;
  }
  static extendDefaults(newDefaults) {
    utils_extend(extendedDefaults, newDefaults);
  }
  static get extendedDefaults() {
    return extendedDefaults;
  }
  static get defaults() {
    return defaults;
  }
  static installModule(mod) {
    if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
    const modules = Swiper.prototype.__modules__;
    if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
      modules.push(mod);
    }
  }
  static use(module) {
    if (Array.isArray(module)) {
      module.forEach(m => Swiper.installModule(m));
      return Swiper;
    }
    Swiper.installModule(module);
    return Swiper;
  }
}
Object.keys(prototypes).forEach(prototypeGroup => {
  Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
    Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
  });
});
Swiper.use([Resize, Observer]);



;// ./node_modules/swiper/swiper.mjs
/**
 * Swiper 12.0.3
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 21, 2025
 */



;// ./node_modules/@fancyapps/ui/dist/utils/isPlainObject.js
/*! License details at fancyapps.com/license */
const isPlainObject_t=t=>"object"==typeof t&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t);

;// ./node_modules/@fancyapps/ui/dist/utils/isString.js
/*! License details at fancyapps.com/license */
const isString_t=t=>"string"==typeof t;

;// ./node_modules/@fancyapps/ui/dist/utils/isNode.js
/*! License details at fancyapps.com/license */
const isNode_n=n=>n&&null!==n&&n instanceof Element&&"nodeType"in n;

;// ./node_modules/@fancyapps/ui/dist/utils/strToHtml.js
/*! License details at fancyapps.com/license */
const strToHtml_e=function(e){var t=(new DOMParser).parseFromString(e,"text/html").body;if(t.childElementCount>1){for(var n=document.createElement("div");t.firstChild;)n.appendChild(t.firstChild);return n}let r=t.firstChild;return!r||r instanceof HTMLElement?r:((n=document.createElement("div")).appendChild(r),n)};

;// ./node_modules/@fancyapps/ui/dist/utils/getScrollableParent.js
/*! License details at fancyapps.com/license */
const e=function(e){if(!(e&&e instanceof Element&&e.offsetParent))return!1;const n=e.scrollHeight>e.clientHeight,t=window.getComputedStyle(e).overflowY,o=-1!==t.indexOf("hidden"),i=-1!==t.indexOf("visible");return n&&!o&&!i},getScrollableParent_n=function(t,o=void 0){return!t||t===document.body||o&&t===o?null:e(t)?t:getScrollableParent_n(t.parentElement,o)};

;// ./node_modules/@fancyapps/ui/dist/utils/scrollLock.js
/*! License details at fancyapps.com/license */
const scrollLock_t=(t=!0,e="--f-scrollbar-compensate",s="--f-body-margin",o="hide-scrollbar")=>{const n=document,r=n.body,l=n.documentElement;if(t){if(r.classList.contains(o))return;let t=window.innerWidth-l.getBoundingClientRect().width;t<0&&(t=0),l.style.setProperty(e,`${t}px`);const n=parseFloat(window.getComputedStyle(r).marginRight);n&&r.style.setProperty(s,`${n}px`),r.classList.add(o)}else r.classList.remove(o),r.style.setProperty(s,""),n.documentElement.style.setProperty(e,"")};

;// ./node_modules/@fancyapps/ui/dist/utils/extend.js
/*! License details at fancyapps.com/license */
const extend_r=(t,...e)=>{const n=e.length;for(let c=0;c<n;c++){const n=e[c]||{};Object.entries(n).forEach((([e,n])=>{const c=Array.isArray(n)?[]:{};t[e]||Object.assign(t,{[e]:c}),isPlainObject_t(n)?Object.assign(t[e],extend_r(t[e],n)):Array.isArray(n)?Object.assign(t,{[e]:[...n]}):Object.assign(t,{[e]:n})}))}return t};

;// ./node_modules/@fancyapps/ui/dist/utils/canUseDOM.js
/*! License details at fancyapps.com/license */
function canUseDOM_e(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}

;// ./node_modules/@fancyapps/ui/dist/utils/clamp.js
/*! License details at fancyapps.com/license */
const clamp_t=function(t=0,n=0,a=0){return Math.max(Math.min(n,a),t)};

;// ./node_modules/@fancyapps/ui/dist/utils/map.js
/*! License details at fancyapps.com/license */
const map_t=function(t=0,n=0,r=0,c=0,m=0,p=!1){const s=(t-n)/(r-n)*(m-c)+c;return p?c<m?clamp_t(c,s,m):clamp_t(m,s,c):s};

;// ./node_modules/@fancyapps/ui/dist/utils/addClass.js
/*! License details at fancyapps.com/license */
const addClass_s=(s,t="")=>{s&&s.classList&&t.split(" ").forEach((t=>{t&&s.classList.add(t)}))};

;// ./node_modules/@fancyapps/ui/dist/utils/removeClass.js
/*! License details at fancyapps.com/license */
const removeClass_s=(s,t="")=>{s&&s.classList&&t.split(" ").forEach((t=>{t&&s.classList.remove(t)}))};

;// ./node_modules/@fancyapps/ui/dist/utils/toggleClass.js
/*! License details at fancyapps.com/license */
const toggleClass_s=(s,t="",c)=>{s&&s.classList&&t.split(" ").forEach((t=>{t&&s.classList.toggle(t,c||!1)}))};

;// ./node_modules/@fancyapps/ui/dist/utils/isEqual.js
/*! License details at fancyapps.com/license */
function isEqual_e(e){return isPlainObject_t(e)||Array.isArray(e)}function isEqual_n(t,r){const o=Object.keys(t),c=Object.keys(r);return o.length===c.length&&o.every((o=>{const c=t[o],i=r[o];return"function"==typeof c?`${c}`==`${i}`:isEqual_e(c)&&isEqual_e(i)?isEqual_n(c,i):c===i}))}

;// ./node_modules/@fancyapps/ui/dist/libs/tween.js
/*! License details at fancyapps.com/license */
const tween_e=function(n){for(const t of s)t.getState()===i.Running&&t.tick(a?n-a:0);a=n,u=window.requestAnimationFrame(tween_e)};var i,o,r;!function(n){n[n.Initializing=0]="Initializing",n[n.Running=1]="Running",n[n.Paused=2]="Paused",n[n.Completed=3]="Completed",n[n.Destroyed=4]="Destroyed"}(i||(i={})),function(n){n[n.Spring=0]="Spring",n[n.Ease=1]="Ease"}(o||(o={})),function(n){n[n.Loop=0]="Loop",n[n.Reverse=1]="Reverse"}(r||(r={}));const s=new Set;let u=null,a=0;function tween_c(){let a=i.Initializing,f=o.Ease,l=0,g=0,p=tween_c.Easings.Linear,m=500,d=0,b=0,S=0,h=0,y=1/0,E=.01,R=.01,M=!1,j={},w=null,v={},O={},C={},L=0,I=0,D=r.Loop,z=tween_c.Easings.Linear;const N=new Map;function V(n,...t){for(const e of N.get(n)||[])e(...t)}function q(n){return g=0,n?w=setTimeout((()=>{x()}),n):x(),F}function x(){a=i.Running,V("start",v,O)}function A(){if(a=i.Completed,C={},V("end",v),a===i.Completed)if(l<L){if(l++,D===r.Reverse){const n=Object.assign({},j);j=Object.assign({},O),O=n}q(I)}else l=0;return F}const F={getState:function(){return a},easing:function(n){return p=n,f=o.Ease,C={},F},duration:function(n){return m=n,F},spring:function(n={}){f=o.Spring;const t={velocity:0,mass:1,tension:170,friction:26,restDelta:.1,restSpeed:.1,maxSpeed:1/0,clamp:!0},{velocity:e,mass:i,tension:r,friction:s,restDelta:u,restSpeed:a,maxSpeed:c,clamp:l}=Object.assign(Object.assign({},t),n);return d=e,b=i,S=r,h=s,R=u,E=a,y=c,M=l,C={},F},isRunning:function(){return a===i.Running},isSpring:function(){return f===o.Spring},from:function(n){return v=Object.assign({},n),F},to:function(n){return O=n,F},repeat:function(n,t=0,e=r.Loop,i){return L=n,I=t,D=e,z=i||p,F},on:function(n,t){var e,i;return e=n,i=t,N.set(e,[...N.get(e)||[],i]),F},off:function(n,t){var e,i;return e=n,i=t,N.has(e)&&N.set(e,N.get(e).filter((n=>n!==i))),F},start:function(n){return isEqual_n(v,O)||(a=i.Initializing,j=Object.assign({},v),s.add(this),u||(u=window.requestAnimationFrame(tween_e)),q(n)),F},pause:function(){return w&&(clearTimeout(w),w=null),a===i.Running&&(a=i.Paused,V("pause",v)),F},end:A,tick:function(e){e>50&&(e=50),g+=e;let s=0,u=!1;if(a!==i.Running)return F;if(f===o.Ease){s=clamp_t(0,g/m,1),u=1===s;const t=D===r.Reverse?z:p;for(const n in v)v[n]=j[n]+(O[n]-j[n])*t(s)}if(f===o.Spring){const t=.001*e;let i=0;for(const e in v){const o=O[e];let r=v[e];if("number"!=typeof o||isNaN(o)||"number"!=typeof r||isNaN(r))continue;if(Math.abs(o-r)<=R){v[e]=o,C[e]=0;continue}C[e]||("object"==typeof d&&"number"==typeof d[e]?C[e]=d[e]:C[e]="number"==typeof d?d:0);let s=C[e];s=clamp_t(-1*Math.abs(y),s,Math.abs(y));const u=s*b*h;s+=((r>o?-1:1)*(Math.abs(o-r)*S)-u)/b*t,r+=s*t;const a=v[e]>o?r<o:r>o;let c=Math.abs(s)<E&&Math.abs(o-r)<=R;M&&a&&(c=!0),c?(r=o,s=0):i++,v[e]=r,C[e]=s}u=!i}const c=Object.assign({},O);return V("step",v,j,O,s),u&&a===i.Running&&isEqual_n(O,c)&&(a=i.Completed,A()),F},getStartValues:function(){return j},getCurrentValues:function(){return v},getCurrentVelocities:function(){return C},getEndValues:function(){return O},destroy:function(){a=i.Destroyed,w&&(clearTimeout(w),w=null),j=v=O={},s.delete(this)}};return F}tween_c.destroy=()=>{for(const n of s)n.destroy();u&&(cancelAnimationFrame(u),u=null)},tween_c.Easings={Linear:function(n){return n},EaseIn:function(n){return 0===n?0:Math.pow(2,10*n-10)},EaseOut:function(n){return 1===n?1:1-Math.pow(2,-10*n)},EaseInOut:function(n){return 0===n?0:1===n?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2}};

;// ./node_modules/@fancyapps/ui/dist/libs/gestures.js
/*! License details at fancyapps.com/license */
function gestures_e(e){return"undefined"!=typeof TouchEvent&&e instanceof TouchEvent}function t(t,n){const o=[],s=gestures_e(t)?t[n]:t instanceof MouseEvent&&("changedTouches"===n||"mouseup"!==t.type)?[t]:[];for(const e of s)o.push({x:e.clientX,y:e.clientY,ts:Date.now()});return o}function n(e){return t(e,"touches")}function gestures_o(e){return t(e,"targetTouches")}function gestures_s(e){return t(e,"changedTouches")}function gestures_i(e){const t=e[0],n=e[1]||t;return{x:(t.x+n.x)/2,y:(t.y+n.y)/2,ts:n.ts}}function c(e){const t=e[0],n=e[1]||e[0];return t&&n?-1*Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y)):0}const gestures_r=e=>{e.cancelable&&e.preventDefault()},gestures_a={passive:!1},gestures_u={panThreshold:5,swipeThreshold:3,ignore:["textarea","input","select","[contenteditable]","[data-selectable]","[data-draggable]"]};let l=!1,d=!0;const f=(e,t)=>{let f,h,v,p=Object.assign(Object.assign({},gestures_u),t),g=[],m=[],E=[],w=!1,y=!1,T=!1,b=!1,M=0,x=0,L=0,P=0,D=0,X=0,Y=0,j=0,k=0,R=[],z=0,A=0;const O=new Map;function S(e){const t=c(m),n=c(E),o=t&&n?t/n:0,s=Math.abs(Y)>Math.abs(j)?Y:j,i={srcEvent:f,isPanRecognized:w,isSwipeRecognized:y,firstTouch:g,previousTouch:E,currentTouch:m,deltaX:L,deltaY:P,offsetX:D,offsetY:X,velocityX:Y,velocityY:j,velocity:s,angle:k,axis:v,scale:o,center:h};for(const t of O.get(e)||[])t(i)}function q(e){const t=Date.now();if(R=R.filter((e=>!e.ts||e.ts>t-100)),e&&R.push(e),Y=0,j=0,R.length>3){const e=R[0],t=R[R.length-1];if(e&&t){const n=t.x-e.x,o=t.y-e.y,s=e.ts&&t.ts?t.ts-e.ts:0;s>0&&(Y=Math.abs(n)>3?n/(s/30):0,j=Math.abs(o)>3?o/(s/30):0)}}}function C(e){if("undefined"!=typeof MouseEvent&&e instanceof MouseEvent){if(l)return}else l=!0;const t=e.composedPath()[0],n=p.ignore.join(",");if(t.matches(n)||t.closest(n))return;if("undefined"!=typeof MouseEvent&&e instanceof MouseEvent){if(!e.buttons||0!==e.button)return;gestures_r(e)}e instanceof MouseEvent&&(window.addEventListener("mousemove",I),window.addEventListener("mouseup",B)),window.addEventListener("blur",F),f=e,m=gestures_o(e),g=[...m],E=[],x=m.length,h=gestures_i(m),1===x&&(w=!1,y=!1,T=!1),x&&q(gestures_i(m));const s=Date.now(),c=s-(M||s);b=c>0&&c<=250&&1===x,M=s,clearTimeout(z),S("start")}function I(e){var t;if(!g.length)return;if(e.defaultPrevented)return;f=e,E=[...m],m=n(e);const o=gestures_i(E),s=gestures_i(n(e));if(q(s),x=m.length,h=s,E.length===m.length?(L=s.x-o.x,P=s.y-o.y):(L=0,P=0),g.length){const e=gestures_i(g);D=s.x-e.x,X=s.y-e.y}if(m.length>1){const e=c(m),t=c(E);Math.abs(e-t)>=.1&&(T=!0,S("pinch"))}w||(w=Math.abs(D)>p.panThreshold||Math.abs(X)>p.panThreshold,w&&(d=!1,clearTimeout(A),A=0,k=Math.abs(180*Math.atan2(X,D)/Math.PI),v=k>45&&k<135?"y":"x",g=[...m],E=[...m],D=0,X=0,L=0,P=0,null===(t=window.getSelection())||void 0===t||t.removeAllRanges(),S("panstart"))),w&&(L||P)&&S("pan"),S("move")}function B(e){if(f=e,!g.length)return;const t=gestures_o(e),n=gestures_s(e);if(x=t.length,h=gestures_i(n),n.length&&q(gestures_i(n)),E=[...m],m=[...t],g=[...t],x>0)S("end"),w=!1,y=!1,R=[];else{const e=p.swipeThreshold;(Math.abs(Y)>e||Math.abs(j)>e)&&(y=!0),w&&S("panend"),y&&S("swipe"),w||y||T||(S("tap"),b?S("doubleTap"):z=setTimeout((function(){S("singleTap")}),250)),S("end"),G()}}function F(){clearTimeout(z),G(),w&&S("panend"),S("end")}function G(){l=!1,w=!1,y=!1,b=!1,x=0,R=[],m=[],E=[],g=[],L=0,P=0,D=0,X=0,Y=0,j=0,k=0,v=void 0,window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",B),window.removeEventListener("blur",F),d||A||(A=setTimeout((()=>{d=!0,A=0}),100))}function H(e){const t=e.target;l=!1,t&&!e.defaultPrevented&&(d||(gestures_r(e),e.stopPropagation()))}const J={init:function(){return e&&(e.addEventListener("click",H,gestures_a),e.addEventListener("mousedown",C,gestures_a),e.addEventListener("touchstart",C,gestures_a),e.addEventListener("touchmove",I,gestures_a),e.addEventListener("touchend",B),e.addEventListener("touchcancel",B)),J},on:function(e,t){return function(e,t){O.set(e,[...O.get(e)||[],t])}(e,t),J},off:function(e,t){return O.has(e)&&O.set(e,O.get(e).filter((e=>e!==t))),J},isPointerDown:()=>x>0,destroy:function(){clearTimeout(z),clearTimeout(A),A=0,e&&(e.removeEventListener("click",H,gestures_a),e.removeEventListener("mousedown",C,gestures_a),e.removeEventListener("touchstart",C,gestures_a),e.removeEventListener("touchmove",I,gestures_a),e.removeEventListener("touchend",B),e.removeEventListener("touchcancel",B)),e=null,G()}};return J};f.isClickAllowed=()=>d;

;// ./node_modules/@fancyapps/ui/dist/panzoom/l10n/en_EN.js
/*! License details at fancyapps.com/license */
const en_EN_e={IMAGE_ERROR:"This image couldn't be loaded. <br /> Please try again later.",MOVE_UP:"Move up",MOVE_DOWN:"Move down",MOVE_LEFT:"Move left",MOVE_RIGHT:"Move right",ZOOM_IN:"Zoom in",ZOOM_OUT:"Zoom out",TOGGLE_FULL:"Toggle zoom level",TOGGLE_1TO1:"Toggle zoom level",ITERATE_ZOOM:"Toggle zoom level",ROTATE_CCW:"Rotate counterclockwise",ROTATE_CW:"Rotate clockwise",FLIP_X:"Flip horizontally",FLIP_Y:"Flip vertically",RESET:"Reset",TOGGLE_FS:"Toggle fullscreen"};

;// ./node_modules/@fancyapps/ui/dist/panzoom/panzoom.js
/*! License details at fancyapps.com/license */
const h=e=>{e.cancelable&&e.preventDefault()},m=(e,t=1e4)=>(e=parseFloat(e+"")||0,Math.round((e+Number.EPSILON)*t)/t),p=e=>e instanceof HTMLImageElement;var v,b;!function(e){e.Reset="reset",e.Zoom="zoom",e.ZoomIn="zoomIn",e.ZoomOut="zoomOut",e.ZoomTo="zoomTo",e.ToggleCover="toggleCover",e.ToggleFull="toggleFull",e.ToggleMax="toggleMax",e.IterateZoom="iterateZoom",e.Pan="pan",e.Swipe="swipe",e.Move="move",e.MoveLeft="moveLeft",e.MoveRight="moveRight",e.MoveUp="moveUp",e.MoveDown="moveDown",e.RotateCCW="rotateCCW",e.RotateCW="rotateCW",e.FlipX="flipX",e.FlipY="flipY",e.ToggleFS="toggleFS"}(v||(v={})),function(e){e.Cover="cover",e.Full="full",e.Max="max"}(b||(b={}));const y={x:0,y:0,scale:1,angle:0,flipX:1,flipY:1},x={bounds:!0,classes:{container:"f-panzoom",wrapper:"f-panzoom__wrapper",content:"f-panzoom__content",viewport:"f-panzoom__viewport"},clickAction:v.ToggleFull,dblClickAction:!1,gestures:{},height:"auto",l10n:en_EN_e,maxScale:4,minScale:1,mouseMoveFactor:1,panMode:"drag",protected:!1,singleClickAction:!1,spinnerTpl:'<div class="f-spinner"></div>',wheelAction:v.Zoom,width:"auto"};let w,M=0,k=0,j=0;const E=(c,b={},E={})=>{let S,O,C,T,A,F,Z,L,P=0,X=Object.assign(Object.assign({},x),b),Y={},R=Object.assign({},y),z=Object.assign({},y);const D=[];function I(e){let t=X[e];return t&&"function"==typeof t?t(je):t}function W(){return c&&c.parentElement&&S&&3===P}const q=new Map;function H(e,...t){const n=[...q.get(e)||[]];X.on&&n.push(X.on[e]);for(const e of n)e&&e instanceof Function&&e(je,...t);"*"!==e&&H("*",e,...t)}function $(e){if(!W())return;const t=e.target;if(getScrollableParent_n(t))return;const o=Date.now(),a=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(e,t){return Math.abs(t)>Math.abs(e)?t:e})),s=clamp_t(-1,a,1);H("wheel",e,s);const r=I("wheelAction");if(!r)return;if(e.defaultPrevented)return;const l=z.scale;let c=l*(s>0?1.5:.5);if(r===v.Zoom){const t=Math.abs(e.deltaY)<100&&Math.abs(e.deltaX)<100;if(o-k<(t?200:45))return void h(e);k=o;const n=ne(),a=se();if(m(c)<m(n)&&m(l)<=m(n)?(j+=Math.abs(s),c=n):m(c)>m(a)&&m(l)>=m(a)?(j+=Math.abs(s),c=a):(j=0,c=clamp_t(n,c,a)),j>7)return}switch(h(e),r){case v.Pan:ue(r,{srcEvent:e,deltaX:2*-e.deltaX,deltaY:2*-e.deltaY});break;case v.Zoom:ue(v.ZoomTo,{srcEvent:e,scale:c,center:{x:e.clientX,y:e.clientY}});break;default:ue(r,{srcEvent:e})}}function _(e){var n,o;const i=e.composedPath()[0];if(!f.isClickAllowed())return;if(!isNode_n(i)||e.defaultPrevented)return;if(!(null==c?void 0:c.contains(i)))return;if(i.hasAttribute("disabled")||i.hasAttribute("aria-disabled"))return;const a=i.closest("[data-panzoom-action]"),s=null===(n=null==a?void 0:a.dataset)||void 0===n?void 0:n.panzoomAction,r=(null===(o=null==a?void 0:a.dataset)||void 0===o?void 0:o.panzoomValue)||"";if(s){switch(h(e),s){case v.ZoomTo:case v.ZoomIn:case v.ZoomOut:ue(s,{scale:parseFloat(r||"")||void 0});break;case v.MoveLeft:case v.MoveRight:ue(s,{deltaX:parseFloat(r||"")||void 0});break;case v.MoveUp:case v.MoveDown:ue(s,{deltaY:parseFloat(r||"")||void 0});break;case v.ToggleFS:Me();break;default:ue(s)}return}if(!(null==S?void 0:S.contains(i)))return;const u={srcEvent:e};if(ue(I("clickAction"),u),I("dblClickAction")){const e=Date.now(),t=e-(M||e);M=e,t>0&&t<=250?(w&&(clearTimeout(w),w=void 0),ue(I("dblClickAction"),u)):w=setTimeout((()=>{ue(I("singleClickAction"),u)}),250)}}function B(e){if(L=e,!W()||!Q())return;if(R.scale<=1||z.scale<=1)return;if(((null==S?void 0:S.dataset.animationName)||"").indexOf("zoom")>-1)return;const t=ee(z.scale);if(!t)return;const{x:n,y:o}=t;ue(v.Pan,{deltaX:n-z.x,deltaY:o-z.y})}function N(){var e;c&&(removeClass_s(c,"is-loading"),null===(e=c.querySelector(".f-spinner"))||void 0===e||e.remove())}function V(){if(!c||!O)return;if(N(),p(O)&&(!O.complete||!O.naturalWidth))return P=2,null==S||S.classList.add("has-error"),void H("error");H("loaded");const{width:e,height:t}=J();p(O)&&(O.setAttribute("width",e+""),O.setAttribute("height",t+"")),S&&(removeClass_s(S,"has-error"),p(O)&&(S.setAttribute("width",e+""),S.setAttribute("height",t+""),S.style.aspectRatio=`${e/t||""}`)),F=tween_c().on("start",((e,t)=>{void 0!==t.angle&&(t.angle=90*Math.round(t.angle/90)),void 0!==t.flipX&&(t.flipX=t.flipX>0?1:-1),void 0!==t.flipY&&(t.flipY=t.flipY>0?1:-1),z=Object.assign(Object.assign({},y),t),ce(),H("animationStart")})).on("pause",(e=>{z=Object.assign(Object.assign({},y),e)})).on("step",(e=>{if(!W())return void(null==F||F.end());if(R=Object.assign(Object.assign({},y),e),Q()||!I("bounds")||ye()||z.scale>R.scale||z.scale<oe())return void de();const t=re(z.scale);let n=!1,o=!1,a=!1,s=!1;R.x<t.x[0]&&(n=!0),R.x>t.x[1]&&(o=!0),R.y<t.y[0]&&(s=!0),R.y>t.y[1]&&(a=!0);let r=!1,l=!1,c=!1,u=!1;z.x<t.x[0]&&(r=!0),z.x>t.x[1]&&(l=!0),z.y<t.y[0]&&(u=!0),z.y>t.y[1]&&(c=!0);let d=!1;(o&&l||n&&r)&&(z.x=clamp_t(t.x[0],z.x,t.x[1]),d=!0),(a&&c||s&&u)&&(z.y=clamp_t(t.y[0],z.y,t.y[1]),d=!0),d&&F&&F.spring({tension:94,friction:17,maxSpeed:555*z.scale,restDelta:.1,restSpeed:.1,velocity:F.getCurrentVelocities()}).from(R).to(z).start(),de()})).on("end",(()=>{(null==A?void 0:A.isPointerDown())||le(),(null==F?void 0:F.isRunning())||(ce(),H("animationEnd"))})),function(){const e=I("gestures");if(!e)return;if(!T||!O)return;let t=!1;A=f(T,e).on("start",(e=>{if(!I("gestures"))return;if(!F)return;if(!W()||Q())return;const n=e.srcEvent;(R.scale>1||e.currentTouch.length>1)&&(null==n||n.stopPropagation(),F.pause(),t=!0),1===e.currentTouch.length&&H("touchStart")})).on("move",(e=>{var n;t&&(1!==z.scale||e.currentTouch.length>1)&&(h(e.srcEvent),null===(n=e.srcEvent)||void 0===n||n.stopPropagation())})).on("pan",(e=>{if(!t)return;const n=e.srcEvent;(1!==z.scale||e.currentTouch.length>1)&&(h(n),ue(v.Pan,e))})).on("swipe",(e=>{t&&z.scale>1&&ue(v.Swipe,e)})).on("tap",(e=>{H("click",e)})).on("singleTap",(e=>{H("singleClick",e)})).on("doubleTap",(e=>{H("dblClick",e)})).on("pinch",(e=>{t&&(e.scale>oe()?ue(v.ZoomIn,e):e.scale<oe()?ue(v.ZoomOut,e):ue(v.Pan,e))})).on("end",(e=>{t&&(e.currentTouch.length?(e.srcEvent.stopPropagation(),h(e.srcEvent),null==F||F.end()):(t=!1,ce(),le(),H("touchEnd")))})).init()}(),T&&(T.addEventListener("wheel",$,{passive:!1}),D.push((()=>{null==T||T.removeEventListener("wheel",$,{passive:!1})}))),null==c||c.addEventListener("click",_),null===document||void 0===document||document.addEventListener("mousemove",B),D.push((()=>{null==c||c.removeEventListener("click",_),null===document||void 0===document||document.removeEventListener("mousemove",B)}));const n=U();R=Object.assign({},n),z=Object.assign({},n),P=3,de(),ce(),H("ready"),requestAnimationFrame((()=>{N(),T&&(T.style.visibility="")}))}function U(){const e=Object.assign({},I("startPos")||{});let t=e.scale,n=1;n="string"==typeof t?te(t):"number"==typeof t?t:oe();const o=Object.assign(Object.assign(Object.assign({},y),e),{scale:n}),i=Q()?ee(n):void 0;if(i){const{x:e,y:t}=i;o.x=e,o.y=t}return o}function G(){const e={top:0,left:0,width:0,height:0};if(S){const t=S.getBoundingClientRect();z.angle%180==90?(e.top=t.top+.5*t.height-.5*t.width,e.left=t.left+.5*t.width-.5*t.height,e.width=t.height,e.height=t.width):(e.top=t.top,e.left=t.left,e.width=t.width,e.height=t.height)}return e}function J(){let t=I("width"),n=I("height");if(O&&"auto"===t){const e=O.getAttribute("width");t=e?parseFloat(e+""):void 0!==O.dataset.width?parseFloat(O.dataset.width+""):p(T)?T.naturalWidth:p(O)?O.naturalWidth:(null==S?void 0:S.getBoundingClientRect().width)||0}else t=isString_t(t)?parseFloat(t):t;if(O&&"auto"===n){const e=O.getAttribute("height");n=e?parseFloat(e+""):void 0!==O.dataset.height?parseFloat(O.dataset.height+""):p(T)?T.naturalHeight:p(O)?O.naturalHeight:(null==S?void 0:S.getBoundingClientRect().height)||0}else n=isString_t(n)?parseFloat(n):n;return{width:t,height:n}}function K(){const e=G();return{width:e.width,height:e.height}}function Q(){return"mousemove"===I("panMode")&&matchMedia("(hover: hover)").matches}function ee(e){const t=L||I("event"),n=null==S?void 0:S.getBoundingClientRect();if(!t||!n||e<=1)return{x:0,y:0};const o=(t.clientX||0)-n.left,a=(t.clientY||0)-n.top,{width:s,height:r}=K(),l=re(e);if(e>1){const t=I("mouseMoveFactor");t>1&&(e*=t)}let c=s*e,u=r*e,d=.5*(c-s)-o/s*100/100*(c-s),f=.5*(u-r)-a/r*100/100*(u-r);return d=clamp_t(l.x[0],d,l.x[1]),f=clamp_t(l.y[0],f,l.y[1]),{x:d,y:f}}function te(e="base"){if(!c)return 1;const t=c.getBoundingClientRect(),n=G(),{width:o,height:a}=J(),s=e=>{if("number"==typeof e)return e;switch(e){case"min":case"base":return 1;case"cover":return Math.max(t.height/n.height,t.width/n.width)||1;case"full":case"max":{const e=z.angle%180==90?a:o;return e&&n.width?e/n.width:1}}},r=I("minScale"),l=I("maxScale"),u=Math.min(s("full"),s(r)),d="number"==typeof l?s("full")*l:Math.min(s("full"),s(l));switch(e){case"min":return u;case"base":return clamp_t(u,1,d);case"cover":return s("cover");case"full":return Math.min(d,s("full"));case"max":return d}}function ne(){return te("min")}function oe(){return te("base")}function ie(){return te("cover")}function ae(){return te("full")}function se(){return te("max")}function re(e){const t={x:[0,0],y:[0,0]},n=null==c?void 0:c.getBoundingClientRect();if(!n)return t;const o=G(),i=n.width,a=n.height;let s=o.width,r=o.height,l=e=void 0===e?z.scale:e,u=e;if(Q()&&e>1){const t=I("mouseMoveFactor");t>1&&(s*e>i+.01&&(l*=t),r*e>a+.01&&(u*=t))}return s*=l,r*=u,e>1&&(s>i&&(t.x[0]=.5*(i-s),t.x[1]=.5*(s-i)),t.x[0]-=.5*(o.left-n.left),t.x[1]-=.5*(o.left-n.left),t.x[0]-=.5*(o.left+o.width-n.right),t.x[1]-=.5*(o.left+o.width-n.right),r>a&&(t.y[0]=.5*(a-r),t.y[1]=.5*(r-a)),t.y[0]-=.5*(o.top-n.top),t.y[1]-=.5*(o.top-n.top),t.y[0]-=.5*(o.top+o.height-n.bottom),t.y[1]-=.5*(o.top+o.height-n.bottom)),t}function le(){if(!W())return;if(!I("bounds"))return;if(!F)return;const e=ne(),t=se(),n=clamp_t(e,z.scale,t);if(z.scale<e-.01||z.scale>t+.01)return void ue(v.ZoomTo,{scale:n});if(F.isRunning())return;if(ye())return;const o=re(n);z.x<o.x[0]||z.x>o.x[1]||z.y<o.y[0]||z.y>o.y[1]?(z.x=clamp_t(o.x[0],z.x,o.x[1]),z.y=clamp_t(o.y[0],z.y,o.y[1]),F.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:F.getCurrentVelocities()}),F.from(R).to(z).start()):de()}function ce(e){var t;if(!W())return;const n=be(),o=ye(),i=xe(),a=we(),s=ge(),r=he();toggleClass_s(S,"is-fullsize",a),toggleClass_s(S,"is-expanded",i),toggleClass_s(S,"is-dragging",o),toggleClass_s(S,"can-drag",n),toggleClass_s(S,"will-zoom-in",s),toggleClass_s(S,"will-zoom-out",r);const l=pe(),u=ve(),d=me(),g=!W();for(const n of(null===(t=e||c)||void 0===t?void 0:t.querySelectorAll("[data-panzoom-action]"))||[]){const e=n.dataset.panzoomAction;let t=!1;if(g)t=!0;else switch(e){case v.ZoomIn:l||(t=!0);break;case v.ZoomOut:d||(t=!0);break;case v.ToggleFull:{u||d||(t=!0);const e=n.querySelector("g");e&&(e.style.display=a&&!t?"none":"");break}case v.IterateZoom:{l||d||(t=!0);const e=n.querySelector("g");e&&(e.style.display=l||t?"":"none");break}case v.ToggleCover:case v.ToggleMax:l||d||(t=!0)}t?(n.setAttribute("aria-disabled",""),n.setAttribute("tabindex","-1")):(n.removeAttribute("aria-disabled"),n.removeAttribute("tabindex"))}}function ue(e,t){var n;if(!(e&&c&&O&&F&&W()))return;if(e===v.Swipe&&Math.abs(F.getCurrentVelocities().scale)>.01)return;const o=Object.assign({},z);let a=Object.assign({},z),l=re(Q()?o.scale:R.scale);const u=F.getCurrentVelocities(),d=G(),f=((null===(n=(t=t||{}).currentTouch)||void 0===n?void 0:n.length)||0)>1,h=t.velocityX||0,m=t.velocityY||0;let p=t.center;t.srcEvent&&(p=gestures_i(gestures_s(t.srcEvent)));let b=t.deltaX||0,x=t.deltaY||0;switch(e){case v.MoveRight:b=t.deltaX||100;break;case v.MoveLeft:b=t.deltaX||-100;break;case v.MoveUp:x=t.deltaY||-100;break;case v.MoveDown:x=t.deltaY||100}let w=[];switch(e){case v.Reset:a=Object.assign({},y),a.scale=oe();break;case v.Pan:case v.Move:case v.MoveLeft:case v.MoveRight:case v.MoveUp:case v.MoveDown:if(ye()){let e=1,t=1;a.x<=l.x[0]&&h<=0&&(e=Math.max(.01,1-Math.abs(1/d.width*Math.abs(a.x-l.x[0]))),e*=.2),a.x>=l.x[1]&&h>=0&&(e=Math.max(.01,1-Math.abs(1/d.width*Math.abs(a.x-l.x[1]))),e*=.2),a.y<=l.y[0]&&m<=0&&(t=Math.max(.01,1-Math.abs(1/d.height*Math.abs(a.y-l.y[0]))),t*=.2),a.y>=l.y[1]&&m>=0&&(t=Math.max(.01,1-Math.abs(1/d.height*Math.abs(a.y-l.y[1]))),t*=.2),a.x+=b*e,a.y+=x*t}else a.x=clamp_t(l.x[0],a.x+b,l.x[1]),a.y=clamp_t(l.y[0],a.y+x,l.y[1]);break;case v.Swipe:const e=(e=0)=>Math.sign(e)*Math.pow(Math.abs(e),1.5);a.x+=clamp_t(-1e3,e(h),1e3),a.y+=clamp_t(-1e3,e(m),1e3),m&&!h&&(a.x=clamp_t(l.x[0],a.x,l.x[1])),!m&&h&&(a.y=clamp_t(l.y[0],a.y,l.y[1])),u.x=h,u.y=m;break;case v.ZoomTo:a.scale=t.scale||1;break;case v.ZoomIn:a.scale=a.scale*(t.scale||2),f||(a.scale=Math.min(a.scale,se()));break;case v.ZoomOut:a.scale=a.scale*(t.scale||.5),f||(a.scale=Math.max(a.scale,ne()));break;case v.ToggleCover:w=[oe(),ie()];break;case v.ToggleFull:w=[oe(),ae()];break;case v.ToggleMax:w=[oe(),se()];break;case v.IterateZoom:w=[oe(),ae(),se()];break;case v.Zoom:const n=ae();a.scale>=n-.05?a.scale=oe():a.scale=Math.min(n,a.scale*(t.scale||2));break;case v.RotateCW:a.angle+=90;break;case v.RotateCCW:a.angle-=90;break;case v.FlipX:a.flipX*=-1;break;case v.FlipY:a.flipY*=-1}if(void 0!==R.angle&&Math.abs(R.angle)>=360&&(a.angle-=360*Math.floor(R.angle/360),R.angle-=360*Math.floor(R.angle/360)),w.length){const e=w.findIndex((e=>e>a.scale+1e-4));a.scale=w[e]||w[0]}if(f&&(a.scale=clamp_t(ne()*(f?.8:1),a.scale,se()*(f?1.6:1))),Q()){const e=ee(a.scale);if(e){const{x:t,y:n}=e;a.x=t,a.y=n}}else if(Math.abs(a.scale-o.scale)>1e-4){let e=0,t=0;if(p)e=p.x,t=p.y;else{const n=c.getBoundingClientRect();e=n.x+.5*n.width,t=n.y+.5*n.height}let n=e-d.left,s=t-d.top;n-=.5*d.width,s-=.5*d.height;const r=(n-o.x)/o.scale,u=(s-o.y)/o.scale;a.x=n-r*a.scale,a.y=s-u*a.scale,!f&&I("bounds")&&(l=re(a.scale),a.x=clamp_t(l.x[0],a.x,l.x[1]),a.y=clamp_t(l.y[0],a.y,l.y[1]))}if(e===v.Swipe){let e=94,t=17,n=500*a.scale,o=u;F.spring({tension:e,friction:t,maxSpeed:n,restDelta:.1,restSpeed:.1,velocity:o})}else e===v.Pan||f?F.spring({tension:900,friction:17,restDelta:.01,restSpeed:.01,maxSpeed:1}):F.spring({tension:170,friction:17,restDelta:.001,restSpeed:.001,maxSpeed:1/0,velocity:u});if(0===t.velocity||isEqual_n(R,a))R=Object.assign({},a),z=Object.assign({},a),F.end(),de(),ce();else{if(isEqual_n(z,a))return;F.from(R).to(a).start()}H("action",e)}function de(){if(!O||!S||!T)return;const{width:e,height:t}=J();Object.assign(S.style,{maxWidth:`min(${e}px, 100%)`,maxHeight:`min(${t}px, 100%)`});const n=function(){const{width:e,height:t}=J(),{width:n,height:o}=K();if(!c)return{x:0,y:0,width:0,height:0,scale:0,flipX:0,flipY:0,angle:0,fitWidth:n,fitHeight:o,fullWidth:e,fullHeight:t};let{x:i,y:a,scale:s,angle:r,flipX:l,flipY:u}=R,d=1/ae(),f=e,g=t,h=R.scale*d,m=z.scale*d;const p=Math.max(n,o),v=Math.min(n,o);e>t?(f=p,g=v):(f=v,g=p);h=e>t?p*s/e||1:p*s/t||1;let b=f?e*m:0,y=g?t*m:0,x=f&&g?e*h/b:0;return i=i+.5*f-.5*b,a=a+.5*g-.5*y,{x:i,y:a,width:b,height:y,scale:x,flipX:l,flipY:u,angle:r,fitWidth:n,fitHeight:o,fullWidth:e,fullHeight:t}}(),{x:o,y:i,width:a,height:s,scale:r,angle:l,flipX:u,flipY:d}=n;let f=`translate(${m(o)}px, ${m(i)}px)`;f+=1!==u||1!==d?` scaleX(${m(r*u)}) scaleY(${m(r*d)})`:` scale(${m(r)})`,0!==l&&(f+=` rotate(${l}deg)`),T.style.width=`${m(a)}px`,T.style.height=`${m(s)}px`,T.style.transform=`${f}`,H("render")}function fe(){let e=z.scale;const t=I("clickAction");let n=oe();if(t){let o=[];switch(t){case v.ZoomIn:n=2*e;break;case v.ZoomOut:n=.5*e;break;case v.ToggleCover:o=[oe(),ie()];break;case v.ToggleFull:o=[oe(),ae()];break;case v.ToggleMax:o=[oe(),se()];break;case v.IterateZoom:o=[oe(),ae(),se()];break;case v.Zoom:const t=ae();n=e>=t-.05?oe():Math.min(t,2*e)}if(o.length){const t=o.findIndex((t=>t>e+1e-4));n=o[t]||oe()}}return n=clamp_t(ne(),n,se()),n}function ge(){return!!(W()&&fe()>z.scale)}function he(){return!!(W()&&fe()<z.scale)}function me(){return!!(W()&&z.scale>ne())}function pe(){return!!(W()&&z.scale<se())}function ve(){return!!(W()&&z.scale<ae())}function be(){return!(!(W()&&xe()&&A)||Q())}function ye(){return!(!W()||!(null==A?void 0:A.isPointerDown())||Q())}function xe(){return!!(W()&&z.scale>oe())}function we(){return!!(W()&&z.scale>=ae())}function Me(){const e="in-fullscreen",t="with-panzoom-in-fullscreen";null==c||c.classList.toggle(e);const n=null==c?void 0:c.classList.contains(e);n?(document.documentElement.classList.add(t),document.addEventListener("keydown",ke,!0)):(document.documentElement.classList.remove(t),document.removeEventListener("keydown",ke,!0)),de(),H(n?"enterFS":"exitFS")}function ke(e){"Escape"!==e.key||e.defaultPrevented||Me()}const je={canDrag:be,canZoomIn:pe,canZoomOut:me,canZoomToFull:ve,destroy:function(){H("destroy");for(const e of Object.values(Y))null==e||e.destroy(je);for(const e of D)e();return S&&(S.style.aspectRatio="",S.style.maxWidth="",S.style.maxHeight=""),T&&(T.style.width="",T.style.height="",T.style.transform=""),S=void 0,O=void 0,T=void 0,R=Object.assign({},y),z=Object.assign({},y),null==F||F.destroy(),F=void 0,null==A||A.destroy(),A=void 0,P=4,je},emit:H,execute:ue,getBoundaries:re,getContainer:function(){return c},getContent:function(){return O},getFullDim:J,getGestures:function(){return A},getMousemovePos:ee,getOptions:function(){return X},getPlugins:function(){return Y},getScale:te,getStartPosition:U,getState:function(){return P},getTransform:function(e){return!0===e?z:R},getTween:function(){return F},getViewport:function(){return T},getWrapper:function(){return S},init:function(){return P=0,H("init"),function(){for(const[e,t]of Object.entries(Object.assign(Object.assign({},E),X.plugins||{})))if(e&&!Y[e]&&t instanceof Function){const n=t();n.init(je),Y[e]=n}H("initPlugins")}(),function(){const e=Object.assign(Object.assign({},x.classes),I("classes"));if(!c)return;if(addClass_s(c,e.container),O=c.querySelector("."+e.content),!O)return;O.setAttribute("draggable","false"),S=c.querySelector("."+e.wrapper),S||(S=document.createElement("div"),addClass_s(S,e.wrapper),O.insertAdjacentElement("beforebegin",S),S.insertAdjacentElement("afterbegin",O));T=c.querySelector("."+e.viewport),T||(T=document.createElement("div"),addClass_s(T,e.viewport),T.insertAdjacentElement("afterbegin",O),S.insertAdjacentElement("beforeend",T));C=O.cloneNode(!0),C.removeAttribute("id"),S.insertAdjacentElement("afterbegin",C),O instanceof HTMLPictureElement&&(O=O.querySelector("img"));C instanceof HTMLPictureElement&&(C=C.querySelector("img"));T instanceof HTMLPictureElement&&(T=T.querySelector("img"));if(T&&(T.style.visibility="hidden",I("protected"))){T.addEventListener("contextmenu",(e=>{h(e)}));const e=document.createElement("div");addClass_s(e,"f-panzoom__protected"),T.appendChild(e)}H("initLayout")}(),function(){if(c&&S&&!Z){let e=null;Z=new ResizeObserver((()=>{W()&&(e=e||requestAnimationFrame((()=>{W()&&(ce(),le(),H("refresh")),e=null})))})),Z.observe(S),D.push((()=>{null==Z||Z.disconnect(),Z=void 0,e&&(cancelAnimationFrame(e),e=null)}))}}(),function(){if(!c||!O)return;if(!p(O)||!p(C))return void V();const e=()=>{O&&p(O)&&O.decode().then((()=>{V()})).catch((()=>{V()}))};if(P=1,c.classList.add("is-loading"),H("loading"),C.src&&C.complete)return void e();(function(){if(!c)return;if(null==c?void 0:c.querySelector(".f-spinner"))return;const e=I("spinnerTpl"),t=strToHtml_e(e);t&&(t.classList.add("f-spinner"),c.classList.add("is-loading"),null==S||S.insertAdjacentElement("afterbegin",t))})(),C.addEventListener("load",e,!1),C.addEventListener("error",e,!1),D.push((()=>{null==C||C.removeEventListener("load",e,!1),null==C||C.removeEventListener("error",e,!1)}))}(),je},isDragging:ye,isExpanded:xe,isFullsize:we,isMousemoveMode:Q,localize:function(e,t=[]){const n=I("l10n")||{};e=String(e).replace(/\{\{(\w+)\}\}/g,((e,t)=>n[t]||e));for(let n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e=e.replace(/\{\{(.*?)\}\}/g,((e,t)=>t))},off:function(e,t){for(const n of e instanceof Array?e:[e])q.has(n)&&q.set(n,q.get(n).filter((e=>e!==t)));return je},on:function(e,t){for(const n of e instanceof Array?e:[e])q.set(n,[...q.get(n)||[],t]);return je},toggleFS:Me,updateControls:ce,version:"6.1.0",willZoomIn:ge,willZoomOut:he};return je};E.l10n={en_EN:en_EN_e},E.getDefaults=()=>x;

;// ./node_modules/@fancyapps/ui/dist/utils/getDirectChildren.js
/*! License details at fancyapps.com/license */
const getDirectChildren_e=(e,o)=>{let t=[];return e.childNodes.forEach((e=>{e.nodeType!==Node.ELEMENT_NODE||o&&!e.matches(o)||t.push(e)})),t};

;// ./node_modules/@fancyapps/ui/dist/carousel/l10n/en_EN.js
/*! License details at fancyapps.com/license */
const en_EN_o=Object.assign(Object.assign({},en_EN_e),{ERROR:"Something went wrong. <br /> Please try again later.",NEXT:"Next page",PREV:"Previous page",GOTO:"Go to page #%d",DOWNLOAD:"Download",TOGGLE_FULLSCREEN:"Toggle full-screen mode",TOGGLE_EXPAND:"Toggle full-size mode",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_AUTOPLAY:"Toggle slideshow"});

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.js
/*! License details at fancyapps.com/license */
const carousel_m=e=>{e.cancelable&&e.preventDefault()},carousel_h={adaptiveHeight:!1,center:!0,classes:{container:"f-carousel",isEnabled:"is-enabled",isLTR:"is-ltr",isRTL:"is-rtl",isHorizontal:"is-horizontal",isVertical:"is-vertical",hasAdaptiveHeight:"has-adaptive-height",viewport:"f-carousel__viewport",slide:"f-carousel__slide",isSelected:"is-selected"},dragFree:!1,enabled:!0,errorTpl:'<div class="f-html">{{ERROR}}</div>',fill:!1,infinite:!0,initialPage:0,l10n:en_EN_o,rtl:!1,slides:[],slidesPerPage:"auto",spinnerTpl:'<div class="f-spinner"></div>',transition:"fade",tween:{clamp:!0,mass:1,tension:160,friction:25,restDelta:1,restSpeed:1,velocity:0},vertical:!1};let carousel_b,carousel_E=0;const carousel_y=(g,x={},M={})=>{carousel_E++;let w,S,j,L,P,A=0,O=Object.assign({},carousel_h),T=Object.assign({},carousel_h),R={},V=null,C=null,H=!1,D=!1,$=!1,q=!1,F="height",I=0,z=!0,k=0,N=0,B=0,_=0,G="*",X=[],Y=[];const W=new Set;let J=[],K=[],Q=0,U=0,Z=0;function ee(e,...t){let n=T[e];return n&&n instanceof Function?n($e,...t):n}function te(e,t=[]){const n=ee("l10n")||{};e=String(e).replace(/\{\{(\w+)\}\}/g,((e,t)=>n[t]||e));for(let n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e=e.replace(/\{\{(.*?)\}\}/g,((e,t)=>t))}const ne=new Map;function ie(e,...t){const n=[...ne.get(e)||[]];T.on&&n.push(T.on[e]);for(const e of n)e&&e instanceof Function&&e($e,...t);"*"!==e&&ie("*",e,...t)}function oe(){var t,n;const i=extend_r({},carousel_h,O);extend_r(i,carousel_h,O);let r="";const l=O.breakpoints||{};if(l)for(const[e,t]of Object.entries(l))window.matchMedia(e).matches&&(r+=e,extend_r(i,t));if(void 0===P||r!==P){if(P=r,0!==A){let e=null===(n=null===(t=K[k])||void 0===t?void 0:t.slides[0])||void 0===n?void 0:n.index;void 0===e&&(e=T.initialSlide),i.initialSlide=e,i.slides=[];for(const e of X)e.isVirtual&&i.slides.push(e)}Ce(),T=i,!1!==T.enabled&&(A=0,ie("init"),function(){for(const[e,t]of Object.entries(Object.assign(Object.assign({},M),T.plugins||{})))if(e&&!R[e]&&t instanceof Function){const n=t();n.init($e,carousel_y),R[e]=n}ie("initPlugins")}(),function(){if(!V)return;const t=ee("classes")||{};addClass_s(V,t.container);const n=ee("style");if(n&&isPlainObject_t(n))for(const[e,t]of Object.entries(n))V.style.setProperty(e,t);C=V.querySelector(`.${t.viewport}`),C||(C=document.createElement("div"),addClass_s(C,t.viewport),C.append(...getDirectChildren_e(V,`.${t.slide}`)),V.insertAdjacentElement("afterbegin",C)),V.carousel=$e,ie("initLayout")}(),function(){if(!C)return;const e=ee("classes")||{};X=[],[...getDirectChildren_e(C,`.${e.slide}`)].forEach((e=>{if(e.parentElement){const t=he(Object.assign({el:e,isVirtual:!1},e.dataset||{}));ie("createSlide",t),X.push(t)}})),xe();for(const e of X)ie("addSlide",e);me(ee("slides"));for(const e of X){const t=e.el;(null==t?void 0:t.parentElement)===C&&(addClass_s(t,T.classes.slide),addClass_s(t,e.class),Oe(e),ie("attachSlideEl",e))}ie("initSlides")}(),Me(),A=1,addClass_s(V,(ee("classes")||{}).isEnabled||""),Ve(),ce(),S=tween_c().on("start",(()=>{w&&w.isPointerDown()||(ae(),Ve())})).on("step",(e=>{const t=I;I=e.pos,I!==t&&(z=!1,Ve())})).on("end",(e=>{(null==w?void 0:w.isPointerDown())||(I=e.pos,S&&!D&&(I<B||I>_)?S.spring({clamp:!0,mass:1,tension:200,friction:25,velocity:0,restDelta:1,restSpeed:1}).from({pos:I}).to({pos:clamp_t(B,I,_)}).start():z||(z=!0,ie("settle")))})),re(),function(){if(V&&C&&(V.addEventListener("click",Le,{passive:!1}),document.addEventListener("mousemove",se),!j)){let e=!0,t=null;j=new ResizeObserver((()=>{e?e=!1:t||(t=requestAnimationFrame((()=>{!function(){if(1!==A||!C)return;const e=K.length;Me(),re();const t=C.getBoundingClientRect(),n=t.height,i=t.width;e>1&&(q&&Math.abs(n-Q)<.5||!q&&Math.abs(i-U)<.5)||(Q=n,U=i,q&&!n||!q&&!i||V&&C&&(e===K.length&&(null==w?void 0:w.isPointerDown())||(ee("dragFree")&&(D||I>B&&I<_)?(ae(),Ve()):Te(k,{transition:!1}))))}(),t=null})))})),j.observe(C)}}(),ie("ready"))}}function se(e){carousel_b=e}function re(){if(!C)return;const e=ee("gestures");!1!==e?w||(w=f(C,e).on("start",(e=>{var t,n;if(!S)return;const{srcEvent:o}=e;q&&gestures_e(o)&&!getScrollableParent_n(o.target)&&carousel_m(o),S.pause(),S.getCurrentVelocities().pos=0;const s=null===(t=K[k])||void 0===t?void 0:t.slides[0];if(s&&W.has(s.index)&&s.el&&(I=s.offset||0,I+=(function(e){const t=window.getComputedStyle(e),n=new DOMMatrixReadOnly(t.transform);return{width:n.m41||0,height:n.m42||0}}(s.el)[F]||0)*($&&!q?1:-1)),Se(),!D){(I<B||I>_)&&S.spring({clamp:!0,mass:1,tension:500,friction:25,velocity:(null===(n=S.getCurrentVelocities())||void 0===n?void 0:n.pos)||0,restDelta:1,restSpeed:1}).from({pos:I}).to({pos:clamp_t(B,I,_)}).start()}})).on("move",(e=>{var t,n;const{srcEvent:o,axis:s}=e,r=o.target;if(s||(carousel_m(o),o.stopPropagation(),o.stopImmediatePropagation()),("y"===s&&q||"x"===s&&!q)&&(carousel_m(o),o.stopPropagation()),!s)return;const{deltaX:l,deltaY:a}=e;if(!S)return;if(gestures_e(o)&&(null===(t=o.touches)||void 0===t?void 0:t.length)>1)return;if("y"===s&&!q||"x"===s&&q)return;if(r&&getScrollableParent_n(r)&&("x"!==s||q))return;const c=$&&!q?1:-1;let d=q?a:l,u=(null==S?void 0:S.isRunning())?S.getEndValues().pos:I,f=1;D||(u<=B&&d*c<0?(f=Math.max(.01,1-(Math.abs(1/ve()*Math.abs(u-B))||0)),f*=.2):u>=_&&d*c>0&&(f=Math.max(.01,1-(Math.abs(1/ve()*Math.abs(u-_))||0)),f*=.2)),u+=d*f*c,S.spring({clamp:!0,mass:1,tension:700,friction:25,velocity:(null===(n=S.getCurrentVelocities())||void 0===n?void 0:n.pos)||0,restDelta:1,restSpeed:1}).from({pos:I}).to({pos:u}).start()})).on("panstart",(e=>{(null==e?void 0:e.axis)===(q?"y":"x")&&addClass_s(C,"is-dragging")})).on("panend",(()=>{removeClass_s(C,"is-dragging")})).on("end",(e=>{var t,n;const{srcEvent:o,axis:s,velocityX:r,velocityY:l,currentTouch:c}=e;if(c.length>0||!S)return;const d=o.target,u=d&&getScrollableParent_n(d)&&!("x"===s&&!q);q&&gestures_e(o)&&!e.axis&&Le(o);const f=K.length,v=ee("dragFree");if(!f)return;const g=ee("vertical")?l:r;let m=(null==S?void 0:S.isRunning())?S.getEndValues().pos:I;const h=$&&!q?1:-1;if(u||(m+=g*(v?5:1)*h),!D&&(g*h<=0&&m<B||g*h>=0&&m>_)){let e=0;return Math.abs(g)>0&&(e=2*Math.abs(g),e=Math.min(.3*ve(),e)),m=clamp_t(B+-1*e,m,_+e),void S.spring({clamp:!0,mass:1,tension:380,friction:25,velocity:-1*g,restDelta:1,restSpeed:1}).from({pos:I}).to({pos:m}).start()}if(v||(null===(t=R.Autoscroll)||void 0===t?void 0:t.isEnabled()))return void(Math.abs(g)>10?S.spring({clamp:!0,mass:1,tension:150,friction:25,velocity:-1*g,restDelta:1,restSpeed:1}).from({pos:I}).to({pos:m}).start():S.isRunning()||z||(z=!0,ie("settle")));if(!v&&!(null===(n=R.Autoscroll)||void 0===n?void 0:n.isEnabled())&&(!e.offsetX&&!e.offsetY||"y"===s&&!q||"x"===s&&q))return void Te(k,{transition:"tween"});let b=ue(m);Math.abs(g)>10&&b===k&&(b+=g>0?$&&!q?1:-1:$&&!q?-1:1),Te(b,{transition:"tween",tween:{velocity:-1*g}})})).init()):w&&(w.destroy(),w=void 0)}function le(e="*"){var t;const n=[];for(const i of X)("*"===e||i.class&&i.class.includes(e)||i.el&&(null===(t=i.el)||void 0===t?void 0:t.classList.contains(e)))&&n.push(i);L=void 0,G=e,Y=[...n]}function ae(){if(!S)return;const e=ue((null==S?void 0:S.isRunning())?S.getEndValues().pos:I);e!==k&&(L=k,k=e,Oe(),ce(),de(),ie("change",k,L))}function ce(){var e;if(!V)return;toggleClass_s(C,"is-draggable",!!w&&K.length>0);for(const e of V.querySelectorAll("[data-carousel-index]"))e.innerHTML=k+"";for(const e of V.querySelectorAll("[data-carousel-page]"))e.innerHTML=k+1+"";for(const e of V.querySelectorAll("[data-carousel-pages]"))e.innerHTML=K.length+"";for(const e of V.querySelectorAll("[data-carousel-go-prev]"))e.toggleAttribute("aria-disabled",!He()),He()?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1");for(const e of V.querySelectorAll("[data-carousel-go-next]"))e.toggleAttribute("aria-disabled",!De()),De()?e.removeAttribute("tabindex"):e.setAttribute("tabindex","-1");let t=!1;const n=null===(e=K[k])||void 0===e?void 0:e.slides[0];n&&(n.downloadSrc||"image"===n.type&&n.src)&&(t=!0);for(const e of V.querySelectorAll("[data-carousel-download]"))e.toggleAttribute("aria-disabled",!t)}function de(e){var t;e||(e=null===(t=K[k])||void 0===t?void 0:t.slides[0]);const n=null==e?void 0:e.el;if(n)for(const t of n.querySelectorAll("[data-slide-index]"))t.innerHTML=e.index+1+""}function ue(e){var t,n,i;if(!K.length)return 0;const o=pe();let s=e;D?s-=Math.floor((e-(null===(t=K[0])||void 0===t?void 0:t.pos))/o)*o||0:s=clamp_t(null===(n=K[0])||void 0===n?void 0:n.pos,e,null===(i=K[K.length-1])||void 0===i?void 0:i.pos);const r=new Map;let l=0;for(const e of K){const t=Math.abs(e.pos-s),n=Math.abs(e.pos-s-o),i=Math.abs(e.pos-s+o),a=Math.min(t,n,i);r.set(l,a),l++}const c=r.size>0?[...r.entries()].reduce(((e,t)=>t[1]<e[1]?t:e)):[k,0];return parseInt(c[0])}function fe(){return Z}function ve(){let e=0;return C&&(C.childElementCount||(C.style.display="grid"),e=C.getBoundingClientRect()[F]||0,C.style.display=""),e}function pe(e=!0){return Y.reduce(((e,t)=>e+t.dim),0)+(Y.length-(D&&e?0:1))*Z}function ge(e){const t=pe(),n=ve();if(!t||!C||!n)return[];const i=[];e=void 0===e?I:e,D&&(e-=Math.floor(e/t)*t||0);let o=0,s=0;if(H){const e=C.getBoundingClientRect();o=Math.abs(e[q?"top":"left"]),s=Math.abs(window[q?"innerHeight":"innerWidth"]-e[q?"bottom":"right"])}let r=0;for(let l of Y){const a=(t=0)=>{i.indexOf(l)>-1||(l.pos=r-e+t||0,l.offset+t>e-l.dim-o+.51&&l.offset+t<e+n+s-.51&&i.push(l))};l.offset=r,D&&(a(t),a(-1*t)),a(),r+=l.dim+Z}return i}function me(e,t){const n=[];for(const t of Array.isArray(e)?e:[e]){const e=he(Object.assign(Object.assign({},t),{isVirtual:!0}));e.el||(e.el=document.createElement("div")),ie("createSlide",e),n.push(e)}X.splice(void 0===t?X.length:t,0,...n),xe();for(const e of n)ie("addSlide",e),be(e);return le(G),n}function he(e){return(isString_t(e)||e instanceof HTMLElement)&&(e={html:e}),Object.assign({index:-1,el:void 0,class:"",isVirtual:!0,dim:0,pos:0,offset:0,html:"",src:""},e)}function be(e){let t=e.el;if(!e||!t)return;const n=e.html?e.html instanceof HTMLElement?e.html:strToHtml_e(e.html):void 0;n&&(addClass_s(n,"f-html"),e.htmlEl=n,addClass_s(t,"has-html"),t.append(n),ie("contentReady",e))}function Ee(e){if(!C||!e)return;let t=e.el;if(t){if(t.setAttribute("index",e.index+""),t.parentElement!==C){let n;addClass_s(t,T.classes.slide),addClass_s(t,e.class),Oe(e);for(const t of X)if(t.index>e.index){n=t.el;break}C.insertBefore(t,n&&C.contains(n)?n:null),ie("attachSlideEl",e)}return de(e),t}}function ye(e){const t=null==e?void 0:e.el;t&&(t.remove(),we(t),ie("detachSlideEl",e))}function xe(){for(let e=0;e<X.length;e++){const t=X[e],n=t.el;n&&(t.index!==e&&we(n),n.setAttribute("index",`${e}`)),t.index=e}}function Me(){var e,n,i,o,s;if(!V||!C)return;$=ee("rtl"),q=ee("vertical"),F=q?"height":"width";const r=ee("classes");if(toggleClass_s(V,r.isLTR,!$),toggleClass_s(V,r.isRTL,$),toggleClass_s(V,r.isHorizontal,!q),toggleClass_s(V,r.isVertical,q),toggleClass_s(V,r.hasAdaptiveHeight,ee("adaptiveHeight")),!ve())return;const l=window.getComputedStyle(C);H="visible"===l.getPropertyValue("overflow-"+(q?"y":"x")),Z=C&&parseFloat(l.getPropertyValue("--f-carousel-gap"))||0;const d=function(){let e=0;if(C){let t=document.createElement("div");t.style.display="block",addClass_s(t,T.classes.slide),C.appendChild(t),e=t.getBoundingClientRect()[F],t.remove(),t=void 0}return e}();for(const n of Y){const i=n.el;let o=0;if(!n.isVirtual&&i&&isNode_n(i)){let t=!1;i.parentElement&&i.parentElement===C||(C.appendChild(i),t=!0),o=i.getBoundingClientRect()[F],t&&(null===(e=i.parentElement)||void 0===e||e.removeChild(i))}else o=d;n.dim=o}if(D=!1,ee("infinite")){D=!0;const e=pe();let t=ve();if(H){const e=C.getBoundingClientRect();t+=e.left,t+=e.right-e.width}for(let i=0;i<Y.length;i++){const o=(null===(n=Y[i])||void 0===n?void 0:n.dim)+Z;if(e-o<t&&e-o-t<o){D=!1;break}}}if(function(){var e;if(!V)return;const t=ve(),n=pe(!1);let i=ee("slidesPerPage");i="auto"===i?1/0:parseFloat(i+""),K=[];let o=0,s=0;for(const n of Y)(!K.length||o+n.dim-t>.05||s>=i)&&(K.push({index:K.length,slides:[],dim:0,offset:0,pos:0}),o=0,s=0),null===(e=K[K.length-1])||void 0===e||e.slides.push(n),o+=n.dim+Z,s++;const r=ee("center"),l=ee("fill");let c=0;for(const e of K){e.dim=(e.slides.length-1)*Z;for(const t of e.slides)e.dim+=t.dim;e.offset=c,e.pos=c,!1!==r&&(e.pos-=.5*(t-e.dim)),l&&!D&&n>t&&(e.pos=clamp_t(0,e.pos,n-t)),c+=e.dim+Z}const d=[];let u;for(const e of K){const t=Object.assign({},e);u&&Math.abs(t.pos-u.pos)<.1?(u.dim+=t.dim,u.slides=[...u.slides,...t.slides]):(u=t,t.index=d.length,d.push(t))}K=d,ce()}(),B=(null===(i=K[0])||void 0===i?void 0:i.pos)||0,_=(null===(o=K[K.length-1])||void 0===o?void 0:o.pos)||0,0===A)!function(){var e;L=void 0,k=ee("initialPage");const t=ee("initialSlide")||void 0;void 0!==t&&(k=$e.getPageIndex(t)||0),k=clamp_t(0,k,K.length-1),I=(null===(e=K[k])||void 0===e?void 0:e.pos)||0,N=I}();else{const e=(null==S?void 0:S.isRunning())?S.getEndValues().pos:I;(e<B||e>_)&&(N=(null===(s=K[k||0])||void 0===s?void 0:s.pos)||0,I=clamp_t(B,I,_))}ie("refresh")}function we(e){if(!e||!isNode_n(e))return;const n=parseInt(e.getAttribute("index")||"-1");let i="";for(const t of Array.from(e.classList)){const e=t.match(/^f-(\w+)(Out|In)$/);e&&e[1]&&(i=e[1]+"")}if(!e||!i)return;const o=[`f-${i}Out`,`f-${i}In`,"to-prev","to-next","from-prev","from-next"];e.removeEventListener("animationend",je),removeClass_s(e,o.join(" ")),W.delete(n)}function Se(){if(!C)return;const e=W.size>0;for(const e of Y)we(e.el);W.clear(),e&&Ve()}function je(e){var t;"f-"===(null===(t=e.animationName)||void 0===t?void 0:t.substring(0,2))&&(we(e.target),W.size||(removeClass_s(V,"in-transition"),!z&&Math.abs($e.getPosition(!0)-N)<.5&&(z=!0,ie("settle"))),Ve())}function Le(e){var t;if(e.defaultPrevented)return;const n=e.composedPath()[0];if(n.closest("[data-carousel-go-prev]"))return carousel_m(e),void $e.prev();if(n.closest("[data-carousel-go-next]"))return carousel_m(e),void $e.next();const i=n.closest("[data-carousel-go-to]");if(i)return carousel_m(e),void $e.goTo(parseFloat(i.dataset.carouselGoTo||"")||0);if(n.closest("[data-carousel-download]")){carousel_m(e);const n=null===(t=K[k])||void 0===t?void 0:t.slides[0];if(n&&(n.downloadSrc||"image"===n.type&&n.src)){const e=n.downloadFilename,t=document.createElement("a"),i=n.downloadSrc||n.src||"";t.href=i,t.target="_blank",t.download=e||i,t.click()}}else ie("click",e)}function Pe(e){var t;const n=e.el;n&&(null===(t=n.querySelector(".f-spinner"))||void 0===t||t.remove())}function Ae(e){var t;const n=e.el;n&&(null===(t=n.querySelector(".f-html.is-error"))||void 0===t||t.remove(),removeClass_s(n,"has-error"))}function Oe(e){var t;e||(e=null===(t=K[k])||void 0===t?void 0:t.slides[0]);const i=null==e?void 0:e.el;if(!i)return;let o=ee("formatCaption",e);void 0===o&&(o=e.caption),o=o||"";const s=ee("captionEl");if(s&&s instanceof HTMLElement){if(e.index!==k)return;if(isString_t(o)&&(s.innerHTML=te(o+"")),o instanceof HTMLElement){if(o.parentElement===s)return;s.innerHTML="",o.parentElement&&(o=o.cloneNode(!0)),s.append(o)}return}if(!o)return;let r=e.captionEl||i.querySelector(".f-caption");!r&&o instanceof HTMLElement&&o.classList.contains("f-caption")&&(r=o),r||(r=document.createElement("div"),addClass_s(r,"f-caption"),isString_t(o)?r.innerHTML=te(o+""):o instanceof HTMLElement&&(o.parentElement&&(o=o.cloneNode(!0)),r.append(o)));const l=`f-caption-${carousel_E}_${e.index}`;r.setAttribute("id",l),r.dataset.selectable="true",addClass_s(i,"has-caption"),i.setAttribute("aria-labelledby",l),e.captionEl=r,i.insertAdjacentElement("beforeend",r)}function Te(t,i={}){var o,r;let{transition:l,tween:u}=Object.assign({transition:T.transition,tween:T.tween},i||{});if(!V||!S)return;const f=K.length;if(!f)return;if(function(e,t){var i,o,s,r;if(!(V&&S&&t&&isString_t(t)&&"tween"!==t))return!1;if((null===(i=K[k])||void 0===i?void 0:i.slides.length)>1)return!1;const l=K.length;let u=e>k?1:-1;e=D?(e%l+l)%l:clamp_t(0,e,l-1),$&&(u*=-1);const f=null===(o=K[k])||void 0===o?void 0:o.slides[0],v=null==f?void 0:f.index,p=null===(s=K[e])||void 0===s?void 0:s.slides[0],g=null==p?void 0:p.index,m=null===(r=K[e])||void 0===r?void 0:r.pos;if(void 0===g||void 0===v||v===g||I===m||Math.abs(ve()-((null==p?void 0:p.dim)||0))>1)return!1;z=!1,S.pause(),Se(),addClass_s(V,"in-transition"),I=N=m;const h=Ee(f),b=Ee(p);return ae(),h&&(W.add(v),h.style.transform="",h.addEventListener("animationend",je),removeClass_s(h,T.classes.isSelected),h.inert=!1,addClass_s(h,`f-${t}Out to-${u>0?"next":"prev"}`)),b&&(W.add(g),b.style.transform="",b.addEventListener("animationend",je),addClass_s(b,T.classes.isSelected),b.inert=!1,addClass_s(b,`f-${t}In from-${u>0?"prev":"next"}`)),Ve(),!0}(t,l))return;t=D?(t%f+f)%f:clamp_t(0,t,f-1),N=(null===(o=K[t||0])||void 0===o?void 0:o.pos)||0;const v=S.isRunning()?S.getEndValues().pos:I;if(Math.abs(N-v)<1)return I=N,k!==t&&(Oe(),ce(),de(),L=k,k=t,ie("change",k,L)),Ve(),void(z||(z=!0,ie("settle")));if(S.pause(),Se(),D){const e=pe(),t=Math.floor((v-(null===(r=K[0])||void 0===r?void 0:r.pos))/e)||0,n=N+t*e;N=[n+e,n,n-e].reduce((function(e,t){return Math.abs(t-v)<Math.abs(e-v)?t:e}))}!1!==l&&isPlainObject_t(u)?S.spring(extend_r({},T.tween,u)).from({pos:I}).to({pos:N}).start():(I=N,ae(),Ve(),z||(z=!0,ie("settle")))}function Re(e){var t;let n=I;if(D&&!0!==e){const e=pe();n-=(Math.floor((I-(null===(t=K[0])||void 0===t?void 0:t.pos)||0)/e)||0)*e}return n}function Ve(){var e;if(!V||!C)return;J=ge();const t=new Set,n=[],i=K[k],s=T.setTransform||void 0;let l;for(const o of Y){const s=W.has(o.index),r=J.indexOf(o)>-1,a=(null===(e=null==i?void 0:i.slides)||void 0===e?void 0:e.indexOf(o))>-1;if(o.isVirtual&&!s&&!r)continue;let c=Ee(o);if(c&&(n.push(o),a&&t.add(c),ee("adaptiveHeight")&&a)){const e=(c.firstElementChild||c).getBoundingClientRect().height;l=null==l?e:Math.max(l,e)}}C&&l&&(C.style.height=`${l}px`),[...getDirectChildren_e(C,`.${T.classes.slide}`)].forEach((e=>{toggleClass_s(e,T.classes.isSelected,t.has(e));const n=X[parseInt(e.getAttribute("index")||"-1")];if(!n)return e.remove(),void we(e);const i=W.has(n.index),o=J.indexOf(n)>-1;if(n.isVirtual&&!i&&!o)return void ye(n);e.inert=!o;let l=n.pos?Math.round(1e4*n.pos)/1e4:0,a=0,c=0,d=0,f=0;i||(a=q?0:$?-1*l:l,c=q?l:0,d=map_t(a,0,n.dim,0,100),f=map_t(c,0,n.dim,0,100)),s instanceof Function&&!i?s($e,n,{x:a,y:c,xPercent:d,yPercent:f}):e.style.transform=a||c?`translate3d(${d}%, ${f}%,0)`:""})),ie("render",n)}function Ce(){var e;null==V||V.removeEventListener("click",Le),Se(),document.removeEventListener("mousemove",se),null==j||j.disconnect(),j=void 0;for(const n of X)n.el&&isNode_n(n.el)&&(n.state=void 0,Pe(n),Ae(n),ye(n),n.isVirtual?(null===(e=n.el)||void 0===e||e.remove(),n.el=void 0):(n.el.style.transform="",null==C||C.appendChild(n.el)));for(const e of Object.values(R))null==e||e.destroy();R={},null==w||w.destroy(),w=void 0,null==S||S.destroy(),S=void 0;for(const[e,t]of Object.entries(T.classes||{}))"container"!==e&&removeClass_s(V,t);removeClass_s(C,"is-draggable")}function He(){return D||k>0}function De(){return D||k<K.length-1}const $e={add:function(e,t){var n,i;let o=I;const s=k,r=pe(),l=(null==S?void 0:S.isRunning())?S.getEndValues().pos:I,a=r&&Math.floor((l-((null===(n=K[0])||void 0===n?void 0:n.pos)||0))/r)||0;return me(e,t),le(G),Me(),S&&(s===k&&(o-=a*r),N=(null===(i=K[k||0])||void 0===i?void 0:i.pos)||0,o===N?I=N:S.spring({clamp:!0,mass:1,tension:300,friction:25,restDelta:1,restSpeed:1}).from({pos:o}).to({pos:N}).start()),Ve(),$e},canGoPrev:He,canGoNext:De,destroy:function(){return ie("destroy"),window.removeEventListener("resize",oe),Ce(),ne.clear(),V=null,K=[],X=[],T=Object.assign({},carousel_h),R={},Y=[],P=void 0,G="*",A=2,$e},emit:ie,filter:function(e="*"){return le(e),Me(),Ve(),ie("filter",e),$e},getContainer:function(){return V},getGapDim:fe,getGestures:function(){return w},getLastMouseMove:function(){return carousel_b},getOption:function(e){return ee(e)},getOptions:function(){return T},getPage:function(){return K[k]},getPageIndex:function(e){if(void 0!==e){for(const t of K||[])for(const n of t.slides)if(n.index===e)return t.index;return-1}return k},getPageIndexFromPosition:ue,getPageProgress:function(e,t){var n;void 0===e&&(e=k);const i=K[e];if(!i)return e>k?-1:1;const o=pe(),s=fe();let r=i.pos,l=Re();if(D&&!0!==t){const e=Math.floor((l-(null===(n=K[0])||void 0===n?void 0:n.pos))/o)||0;l-=e*o,r=[r+o,r,r-o].reduce((function(e,t){return Math.abs(t-l)<Math.abs(e-l)?t:e}))}return(l-r)/(i.dim+s)||0},getPageVisibility:function(e){var t;void 0===e&&(e=k);const n=K[e];if(!n)return e>k?-1:1;const i=Re(),o=ve();let s=n.pos;if(D){const e=pe(),n=s+(Math.floor((i-(null===(t=K[0])||void 0===t?void 0:t.pos))/e)||0)*e;s=[n+e,n,n-e].reduce((function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e}))}return s>i&&s+n.dim<i+o?1:s<i?(s+n.dim-i)/n.dim||0:s+n.dim>i+o&&(i+o-s)/n.dim||0},getPages:function(){return K},getPlugins:function(){return R},getPosition:Re,getSlides:function(){return X},getState:function(){return A},getTotalSlideDim:pe,getTween:function(){return S},getViewport:function(){return C},getViewportDim:ve,getVisibleSlides:function(e){return void 0===e?J:ge(e)},goTo:Te,hasNavigated:function(){return void 0!==L},hideError:Ae,hideLoading:Pe,init:function(){if(!g||!isNode_n(g))throw new Error("No Element found");return 0!==A&&(Ce(),A=0),V=g,O=x,window.removeEventListener("resize",oe),O.breakpoints&&window.addEventListener("resize",oe),oe(),$e},isInfinite:function(){return D},isInTransition:function(){return W.size>0},isRTL:function(){return $},isSettled:function(){return z},isVertical:function(){return q},localize:function(e,t=[]){return te(e,t)},next:function(e={}){return Te(k+1,e),$e},off:function(e,t){for(const n of e instanceof Array?e:[e])ne.has(n)&&ne.set(n,ne.get(n).filter((e=>e!==t)));return $e},on:function(e,t){for(const n of e instanceof Array?e:[e])ne.set(n,[...ne.get(n)||[],t]);return $e},prev:function(e={}){return Te(k-1,e),$e},reInit:function(e={},t={}){return Ce(),A=0,P=void 0,G="*",x=e,O=e,M=t,oe(),$e},remove:function(e){void 0===e&&(e=X.length-1);const t=X[e];return t&&(ie("removeSlide",t),t.el&&(we(t.el),t.el.remove(),t.el=void 0),X.splice(e,1),le(G),Me(),k=clamp_t(0,k,K.length-1),Ve()),$e},setPosition:function(e){I=e,ae(),Ve()},showError:function(e,t){Pe(e),Ae(e);const n=e.el;if(n){const i=document.createElement("div");addClass_s(i,"f-html"),addClass_s(i,"is-error"),i.innerHTML=te(t||"<p>{{ERROR}}</p>"),e.htmlEl=i,addClass_s(n,"has-html"),addClass_s(n,"has-error"),n.insertAdjacentElement("afterbegin",i),ie("contentReady",e)}return $e},showLoading:function(e){const t=e.el,n=null==t?void 0:t.querySelector(".f-spinner");if(!t||n)return $e;const i=ee("spinnerTpl"),o=strToHtml_e(i);return o&&(addClass_s(o,"f-spinner"),t.insertAdjacentElement("beforeend",o)),$e},version:"6.1.0"};return $e};carousel_y.l10n={en_EN:en_EN_o},carousel_y.getDefaults=()=>carousel_h;

;// ./node_modules/@fancyapps/ui/dist/utils/replaceAll.js
/*! License details at fancyapps.com/license */
const replaceAll_n=function(n="",t="",o=""){return n.split(t).join(o)};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.zoomable.js
/*! License details at fancyapps.com/license */
const carousel_zoomable_a={tpl:t=>`<img class="f-panzoom__content" \n    ${t.srcset?'data-lazy-srcset="{{srcset}}"':""} \n    ${t.sizes?'data-lazy-sizes="{{sizes}}"':""} \n    data-lazy-src="{{src}}" alt="{{alt}}" />`},carousel_zoomable_s=()=>{let s;function l(e,o){const n=null==s?void 0:s.getOptions().Zoomable;let i=(isPlainObject_t(n)?Object.assign(Object.assign({},carousel_zoomable_a),n):carousel_zoomable_a)[e];return i&&"function"==typeof i&&o?i(o):i}function c(){s&&!1!==s.getOptions().Zoomable&&(s.on("addSlide",f),s.on("removeSlide",u),s.on("attachSlideEl",g),s.on("click",d),s.on("change",r),s.on("ready",r))}function r(){m();const t=(null==s?void 0:s.getVisibleSlides())||[];if(t.length>1||"slide"===(null==s?void 0:s.getOption("transition")))for(const e of t){const t=e.panzoomRef;t&&((null==s?void 0:s.getPage().slides)||[]).indexOf(e)<0&&t.execute(v.ZoomTo,Object.assign({},t.getStartPosition()))}}function d(t,e){const o=e.target;o&&!e.defaultPrevented&&o.dataset.panzoomAction&&p(o.dataset.panzoomAction)}function f(t,i){const a=i.el;if(!s||!a||i.panzoomRef)return;const c=i.src||i.lazySrc||"",r=i.alt||i.caption||`Image #${i.index}`,d=i.srcset||i.lazySrcset||"",f=i.sizes||i.lazySizes||"";if(c&&isString_t(c)&&!i.html&&(!i.type||"image"===i.type)){i.type="image",i.thumbSrc=i.thumbSrc||c;let t=l("tpl",i);t=replaceAll_n(t,"{{src}}",c+""),t=replaceAll_n(t,"{{srcset}}",d+""),t=replaceAll_n(t,"{{sizes}}",f+""),a.insertAdjacentHTML("afterbegin",t)}const u=a.querySelector(".f-panzoom__content");if(!u)return;u.setAttribute("alt",r+"");const g=i.width&&"auto"!==i.width?parseFloat(i.width+""):"auto",p=i.height&&"auto"!==i.height?parseFloat(i.height+""):"auto",z=E(a,Object.assign({width:g,height:p,classes:{container:"f-zoomable"},event:()=>null==s?void 0:s.getLastMouseMove(),spinnerTpl:()=>(null==s?void 0:s.getOption("spinnerTpl"))||""},l("Panzoom")));z.on("*",((t,e,...o)=>{s&&("loading"===e&&(i.state=0),"loaded"===e&&(i.state=1),"error"===e&&(i.state=2,null==s||s.showError(i,"{{IMAGE_ERROR}}")),s.emit(`panzoom:${e}`,i,...o),"ready"===e&&s.emit("contentReady",i),i.index===(null==s?void 0:s.getPageIndex())&&m())})),i.panzoomRef=z}function u(t,e){e.panzoomRef&&(e.panzoomRef.destroy(),e.panzoomRef=void 0)}function g(t,e){const o=e.panzoomRef;if(o)switch(o.getState()){case 0:o.init();break;case 3:o.execute(v.ZoomTo,Object.assign(Object.assign({},o.getStartPosition()),{velocity:0}))}}function m(){var t,e;const o=(null==s?void 0:s.getContainer())||void 0,n=null===(e=null===(t=null==s?void 0:s.getPage())||void 0===t?void 0:t.slides[0])||void 0===e?void 0:e.panzoomRef;if(o)if(n)n.updateControls(o);else for(const t of o.querySelectorAll("[data-panzoom-action]")||[])t.setAttribute("aria-disabled",""),t.setAttribute("tabindex","-1")}function p(t,...e){var o;null===(o=null==s?void 0:s.getPage().slides[0].panzoomRef)||void 0===o||o.execute(t,...e)}return{init:function(t){s=t,s.on("initPlugins",c)},destroy:function(){if(s){s.off("initPlugins",c),s.off("addSlide",f),s.off("removeSlide",u),s.off("attachSlideEl",g),s.off("click",d),s.off("change",r),s.off("ready",r);for(const t of s.getSlides())u(0,t)}s=void 0},execute:p}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.sync.js
/*! License details at fancyapps.com/license */
const carousel_sync_e={syncOnChange:!1,syncOnClick:!0,syncOnHover:!1},carousel_sync_i=()=>{let i,t;function o(){const t=null==i?void 0:i.getOptions().Sync;return isPlainObject_t(t)?Object.assign(Object.assign({},carousel_sync_e),t):carousel_sync_e}function s(n){var e,s,l;i&&n&&(t=n,i.getOptions().classes=Object.assign(Object.assign({},i.getOptions().classes),{isSelected:""}),i.getOptions().initialSlide=(null===(s=null===(e=t.getPage())||void 0===e?void 0:e.slides[0])||void 0===s?void 0:s.index)||0,o().syncOnChange&&i.on("change",c),o().syncOnClick&&i.on("click",g),o().syncOnHover&&(null===(l=i.getViewport())||void 0===l||l.addEventListener("mouseover",u)),function(){if(!i||!t)return;i.on("ready",d),i.on("refresh",a),t.on("change",r),t.on("filter",f)}())}function l(){const n=o().target;i&&n&&s(n)}function d(){v()}function c(){var n;if(i&&t){const e=(null===(n=i.getPage())||void 0===n?void 0:n.slides)||[],o=t.getPageIndex(e[0].index||0);o>-1&&t.goTo(o,i.hasNavigated()?void 0:{tween:!1,transition:!1}),v()}}function r(){var n;if(i&&t){const e=i.getPageIndex((null===(n=t.getPage())||void 0===n?void 0:n.slides[0].index)||0);e>-1&&i.goTo(e,t.hasNavigated()?void 0:{tween:!1,transition:!1}),v()}}function g(n,e){var o;if(!i||!t)return;if(null===(o=i.getTween())||void 0===o?void 0:o.isRunning())return;const s=null==i?void 0:i.getOptions().classes.slide;if(!s)return;const l=s?e.target.closest(`.${s}`):null;if(l){const n=parseInt(l.getAttribute("index")||"")||0,e=t.getPageIndex(n);t.goTo(e)}}function u(n){i&&g(0,n)}function a(){var n;if(i&&t){const e=i.getPageIndex((null===(n=t.getPage())||void 0===n?void 0:n.slides[0].index)||0);e>-1&&i.goTo(e,{tween:!1,transition:!1}),v()}}function f(n,e){i&&t&&(i.filter(e),r())}function v(){var n,e,o;if(!t)return;const s=(null===(e=null===(n=t.getPage())||void 0===n?void 0:n.slides[0])||void 0===e?void 0:e.index)||0;for(const n of(null==i?void 0:i.getSlides())||[])null===(o=n.el)||void 0===o||o.classList.toggle("is-selected",n.index===s)}return{init:function(n){i=n,i.on("initSlides",l)},destroy:function(){var n;null==i||i.off("ready",d),null==i||i.off("refresh",a),null==i||i.off("change",c),null==i||i.off("click",g),null===(n=null==i?void 0:i.getViewport())||void 0===n||n.removeEventListener("mouseover",u),null==t||t.off("change",r),null==t||t.off("filter",f),t=void 0,null==i||i.off("initSlides",l),i=void 0},getTarget:function(){return t}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.lazyload.js
/*! License details at fancyapps.com/license */
const carousel_lazyload_s={showLoading:!0,preload:1},carousel_lazyload_n="is-lazyloading",carousel_lazyload_o="is-lazyloaded",carousel_lazyload_l="has-lazyerror",carousel_lazyload_i=()=>{let i;function d(){const e=null==i?void 0:i.getOptions().Lazyload;return isPlainObject_t(e)?Object.assign(Object.assign({},carousel_lazyload_s),e):carousel_lazyload_s}function r(t){var s;const r=t.el;if(!r)return;const c="[data-lazy-src],[data-lazy-srcset],[data-lazy-bg]",u=Array.from(r.querySelectorAll(c));r.matches(c)&&u.push(r);for(const r of u){const c=r.dataset.lazySrc,u=r.dataset.lazySrcset,f=r.dataset.lazySizes,m=r.dataset.lazyBg,y=(r instanceof HTMLImageElement||r instanceof HTMLSourceElement)&&(c||u),z=r instanceof HTMLElement&&m;if(!y&&!z)continue;const g=c||u||m;if(g){if(y&&g){const m=null===(s=r.parentElement)||void 0===s?void 0:s.classList.contains("f-panzoom__wrapper");d().showLoading&&(null==i||i.showLoading(t)),r.addEventListener("load",(()=>{null==i||i.hideLoading(t),removeClass_s(r,carousel_lazyload_l),r instanceof HTMLImageElement?r.decode().then((()=>{removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_o)})):(removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_o)),m||null==i||i.emit("lazyLoad:loaded",t,r,g)})),r.addEventListener("error",(()=>{null==i||i.hideLoading(t),removeClass_s(r,carousel_lazyload_n),addClass_s(r,carousel_lazyload_l),m||null==i||i.emit("lazyLoad:error",t,r,g)})),r.classList.add("f-lazyload"),r.classList.add(carousel_lazyload_n),m||null==i||i.emit("lazyLoad:load",t,r,g),c&&(r.src=c),u&&(r.srcset=u),f&&(r.sizes=f)}else if(z){if(!document.body.contains(r)){document.createElement("img").src=m}r.style.backgroundImage=`url('${m}')`}delete r.dataset.lazySrc,delete r.dataset.lazySrcset,delete r.dataset.lazySizes,delete r.dataset.lazyBg}}}function c(){if(!i)return;const e=[...i.getVisibleSlides()],t=d().preload;if(t>0){const a=i.getPosition(),s=i.getViewportDim();e.push(...i.getVisibleSlides(a+s*t),...i.getVisibleSlides(a-s*t))}for(const t of e)r(t)}return{init:function(e){i=e,i.on("render",c)},destroy:function(){null==i||i.off("render",c),i=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.arrows.js
/*! License details at fancyapps.com/license */
const carousel_arrows_r='tabindex="-1" width="24" height="24" viewBox="0 0 24 24"',carousel_arrows_i={prevTpl:`<svg ${carousel_arrows_r}><path d="M15 3l-9 9 9 9"></path></svg>`,nextTpl:`<svg ${carousel_arrows_r}><path d="M9 3l9 9-9 9"></path></svg>`},carousel_arrows_s=()=>{let r,s,l;function a(){const t=null==r?void 0:r.getOptions().Arrows;return isPlainObject_t(t)?Object.assign(Object.assign({},carousel_arrows_i),t):carousel_arrows_i}function u(e){if(!r)return;const o=`<button data-carousel-go-${e} tabindex="0" class="f-button is-arrow is-${e}" title="{{${e.toUpperCase()}}}">`+a()[`${e}Tpl`]+"</button",i=strToHtml_e(r.localize(o))||void 0;return i&&addClass_s(i,a()[`${e}Class`]),i}function g(){var t;null==s||s.remove(),s=void 0,null==l||l.remove(),l=void 0,null===(t=null==r?void 0:r.getContainer())||void 0===t||t.classList.remove("has-arrows")}function c(){r&&!1!==r.getOptions().Arrows&&r.getPages().length>1?(!function(){if(!r)return;const t=r.getViewport();t&&(s||(s=u("prev"),s&&t.insertAdjacentElement("beforebegin",s)),l||(l=u("next"),l&&t.insertAdjacentElement("afterend",l)),toggleClass_s(r.getContainer(),"has-arrows",!(!s&&!l)))}(),r&&(null==s||s.toggleAttribute("aria-disabled",!r.canGoPrev()),null==l||l.toggleAttribute("aria-disabled",!r.canGoNext()))):g()}return{init:function(t){r=t.on(["change","refresh"],c)},destroy:function(){g(),null==r||r.off(["change","refresh"],c),r=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/shared/buttons.js
/*! License details at fancyapps.com/license */
const buttons_t='<circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/>',buttons_M='<g><line x1="11" y1="8" x2="11" y2="14"></line></g>'+buttons_t,buttons_o={moveLeft:["moveLeft","MOVE_LEFT",'<path d="M5 12h14M5 12l6 6M5 12l6-6"/>'],moveRight:["moveRight","MOVE_RIGHT",'<path d="M5 12h14M13 18l6-6M13 6l6 6"/>'],moveUp:["moveUp","MOVE_UP",'<path d="M12 5v14M18 11l-6-6M6 11l6-6"/>'],moveDown:["moveDown","MOVE_DOWN",'<path d="M12 5v14M18 13l-6 6M6 13l6 6"/>'],zoomOut:["zoomOut","ZOOM_OUT",buttons_t],zoomIn:["zoomIn","ZOOM_IN",buttons_M],toggleFull:["toggleFull","TOGGLE_FULL",buttons_M],iterateZoom:["iterateZoom","ITERATE_ZOOM",buttons_M],toggle1to1:["toggleFull","TOGGLE_FULL",'<path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/>'],rotateCCW:["rotateCCW","ROTATE_CCW",'<path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/>'],rotateCW:["rotateCW","ROTATE_CW",'<path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/>'],flipX:["flipX","FLIP_X",'<path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/>'],flipY:["flipY","FLIP_Y",'<path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/>'],reset:["reset","RESET",'<path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>'],toggleFS:["toggleFS","TOGGLE_FS",'<g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g>']},buttons_v={};for(const[t,M]of Object.entries(buttons_o))buttons_v[t]={tpl:`<button data-panzoom-action="${M[0]}" class="f-button" title="{{${M[1]}}}"><svg>${M[2]}</svg></button>`};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.toolbar.js
/*! License details at fancyapps.com/license */
var carousel_toolbar_l;!function(t){t.Left="left",t.middle="middle",t.right="right"}(carousel_toolbar_l||(carousel_toolbar_l={}));const carousel_toolbar_s=Object.assign({counter:{tpl:'<div class="f-counter"><span data-carousel-page></span>/<span data-carousel-pages></span></div>'},download:{tpl:'<button data-carousel-download class="f-button" title="{{DOWNLOAD}}"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></button>'},autoplay:{tpl:'<button data-autoplay-action="toggle" class="f-button" title="{{TOGGLE_AUTOPLAY}}"><svg><g><path d="M5 3.5 19 12 5 20.5Z"/></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},thumbs:{tpl:'<button data-thumbs-action="toggle" class="f-button" title="{{TOGGLE_THUMBS}}"><svg><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1M9 21h1M14 21h1M19 21h1"/></svg></button>'}},buttons_v),carousel_toolbar_a={absolute:!1,display:{left:[],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY","reset"],right:[]},enabled:"auto",items:{}},carousel_toolbar_r=()=>{let l,r;function u(e){const o=null==l?void 0:l.getOptions().Toolbar;let n=(isPlainObject_t(o)?Object.assign(Object.assign({},carousel_toolbar_a),o):carousel_toolbar_a)[e];return n&&"function"==typeof n&&l?n(l):n}function c(){var a,c;if(!(null==l?void 0:l.getOptions().Toolbar))return;if(!l||r)return;const d=l.getContainer();if(!d)return;let f=u("enabled");if(!f)return;const g=u("absolute"),p=l.getSlides().length>1;let b=!1,m=!1;for(const t of l.getSlides())t.panzoomRef&&(b=!0),(t.downloadSrc||"image"===t.type&&t.src)&&(m=!0);const v=(null===(a=l.getPlugins().Thumbs)||void 0===a?void 0:a.isEnabled())||!1,h=p&&l.getPlugins().Autoplay||!1,E=l.getPlugins().Fullscreen&&(document.fullscreenEnabled||document.webkitFullscreenEnabled);if("auto"===f&&(f=b),!f)return;r=d.querySelector(".f-carousel__toolbar")||void 0,r||(r=document.createElement("div"),r.classList.add("f-carousel__toolbar"));const y=u("display"),j=extend_r({},carousel_toolbar_s,u("items"));for(const i of["left","middle","right"]){const s=y[i]||[],a=document.createElement("div");a.classList.add("f-carousel__toolbar__column"),a.classList.add(`is-${i}`);for(const i of s){let s;if(isString_t(i)){if("counter"===i&&!p)continue;if("autoplay"===i&&!h)continue;if(buttons_v[i]&&!b)continue;if("fullscreen"===i&&!E)continue;if("thumbs"===i&&!v)continue;if("download"===i&&!m)continue;s=j[i]}if(isPlainObject_t(i)&&(s=i),s&&s.tpl){let t=l.localize(s.tpl);t=t.split("<svg>").join('<svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24">');const e=strToHtml_e(t);e&&("function"==typeof s.click&&l&&e.addEventListener("click",(t=>{t.preventDefault(),t.stopPropagation(),"function"==typeof s.click&&l&&s.click(l,t)})),a.append(e))}}r.append(a)}if(r.childElementCount){if(g&&r.classList.add("is-absolute"),!r.parentElement){const t=u("parentEl");t?t.insertAdjacentElement("afterbegin",r):null===(c=l.getViewport())||void 0===c||c.insertAdjacentElement("beforebegin",r)}d.contains(r)&&d.classList.add("has-toolbar")}}return{init:function(t){l=t,null==l||l.on("initSlides",c)},destroy:function(){var t;null==l||l.off("initSlides",c),null===(t=null==l?void 0:l.getContainer())||void 0===t||t.classList.remove("has-toolbar"),null==r||r.remove(),r=void 0},add:function(t,e){carousel_toolbar_s[t]=e},isEnabled:function(){return!!r}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.autoplay.js
/*! License details at fancyapps.com/license */
const carousel_autoplay_e={autoStart:!0,pauseOnHover:!0,showProgressbar:!0,timeout:2e3},carousel_autoplay_n=()=>{let n,o,i=!1,a=!1,l=!1,s=null;function r(o){const i=null==n?void 0:n.getOptions().Autoplay;let a=(isPlainObject_t(i)?Object.assign(Object.assign({},carousel_autoplay_e),i):carousel_autoplay_e)[o];return a&&"function"==typeof a&&n?a(n):a}function u(){clearTimeout(o),o=void 0}function c(){if(!n||!i||l||a||o||!n.isSettled()||function(){var t;const e=(null===(t=null==n?void 0:n.getPage())||void 0===t?void 0:t.slides)||[];for(const t of e)if(0===t.state)return!0;return!1}())return;!function(){var t,e,o,i;if(!n)return;if(g(),!r("showProgressbar"))return;let a=r("progressbarParentEl");!a&&(null===(t=n.getPlugins().Toolbar)||void 0===t?void 0:t.isEnabled())&&(a=n.getContainer());if(!a&&!0!==(null===(e=n.getPlugins().Toolbar)||void 0===e?void 0:e.isEnabled())){const t=(null===(o=n.getPages()[0])||void 0===o?void 0:o.slides)||[],e=(null===(i=n.getPage())||void 0===i?void 0:i.slides)||[];1===t.length&&1===e.length&&(a=e[0].el)}a||(a=n.getViewport());if(!a)return;s=document.createElement("div"),s.classList.add("f-progressbar"),a.prepend(s);const l=r("timeout")||1e3;s.style.animationDuration=`${l}ms`}();const t=r("timeout");o=setTimeout((()=>{n&&i&&!a&&(n.isInfinite()||n.getPageIndex()!==n.getPages().length-1?n.next():n.goTo(0))}),t)}function d(){var t,e;if(!n||n.getPages().length<2||!1===n.getOptions().Autoplay)return;if(i)return;i=!0,n.emit("autoplay:start",r("timeout")),null===(t=n.getContainer())||void 0===t||t.classList.add("has-autoplay"),null===(e=n.getTween())||void 0===e||e.on("start",y);const o=null==n?void 0:n.getContainer();o&&r("pauseOnHover")&&matchMedia("(hover: hover)").matches&&(o.addEventListener("mouseenter",b,!1),o.addEventListener("mouseleave",E,!1)),n.on("change",h),n.on("settle",P),n.on("contentReady",m),n.on("panzoom:touchStart",f),n.on("panzoom:wheel",f),n.isSettled()&&c()}function f(){var t,e;if(u(),g(),i&&n){n.emit("autoplay:end"),null===(t=n.getContainer())||void 0===t||t.classList.remove("has-autoplay"),null===(e=n.getTween())||void 0===e||e.off("start",y);const o=null==n?void 0:n.getContainer();o&&(o.removeEventListener("mouseenter",b,!1),o.removeEventListener("mouseleave",E,!1))}n&&(n.off("change",h),n.off("settle",P),n.off("contentReady",m),n.off("panzoom:touchStart",f),n.off("panzoom:wheel",f)),i=!1,a=!1}function g(){s&&(s.remove(),s=null)}function v(){n&&n.getPages().length>1&&r("autoStart")&&d()}function m(){c()}function p(t,e){const n=e.target;n&&!e.defaultPrevented&&"toggle"===n.dataset.autoplayAction&&w.toggle()}function h(){!n||!(null==n?void 0:n.isInfinite())&&n.getPageIndex()===n.getPages().length-1?f():(g(),u())}function P(){c()}function y(){u(),g()}function b(){l=!0,i&&(g(),u())}function E(){l=!1,i&&!a&&(null==n?void 0:n.isSettled())&&c()}const w={init:function(t){n=t,n.on("ready",v),n.on("click",p)},destroy:function(){f(),null==n||n.off("ready",v),null==n||n.off("click",p),n=void 0},isEnabled:()=>i,pause:function(){a=!0,u()},resume:function(){a=!1,i&&!l&&c()},start(){d()},stop(){f()},toggle(){i?f():d()}};return w};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.js
/*! License details at fancyapps.com/license */
const carousel_thumbs_s={Carousel:{Lazyload:{showLoading:!1}},minCount:2,showOnStart:!0,thumbTpl:'<button aria-label="Slide to #{{page}}"><img draggable="false" alt="{{alt}}" data-lazy-src="{{src}}" /></button>',type:"modern"};let carousel_thumbs_u;const carousel_thumbs_a=()=>{let a,c,d,f,g=0,m=0,h=!0;function v(e){const n=null==a?void 0:a.getOptions().Thumbs;let o=(isPlainObject_t(n)?Object.assign(Object.assign({},carousel_thumbs_s),n):carousel_thumbs_s)[e];return o&&"function"==typeof o&&a?o(a):o}function p(){if(!a)return!1;if(!1===(null==a?void 0:a.getOptions().Thumbs))return!1;let t=0;for(const e of a.getSlides())e.thumbSrc&&t++;return t>=v("minCount")}function b(){return"modern"===v("type")}function y(){return"scrollable"===v("type")}function x(){const t=[],e=(null==a?void 0:a.getSlides())||[];for(const n of e)t.push({index:n.index,html:S(n)});return t}function S(t){const e=t.thumb?t.thumb instanceof HTMLImageElement?t.thumb.src:t.thumb:t.thumbSrc||void 0,o=void 0===t.thumbAlt?`Thumbnail #${t.index}`:t.thumbAlt+"";let i=v("thumbTpl");return i=replaceAll_n(i,"{{alt}}",o),i=replaceAll_n(i,"{{src}}",e+""),i=replaceAll_n(i,"{{index}}",`${t.index}`),i=replaceAll_n(i,"{{page}}",`${t.index||1}`),i}function C(t=!1){var e;const n=null==a?void 0:a.getContainer();if(!a||!n||d)return;if(!p())return;const o=(null===(e=v("Carousel"))||void 0===e?void 0:e.classes)||{};if(o.container=o.container||"f-thumbs",!d){const t=n.nextElementSibling;(null==t?void 0:t.classList.contains(o.container))&&(d=t)}if(!d){d=document.createElement("div");const t=v("parentEl");t?t.insertAdjacentElement("beforeend",d):n.insertAdjacentElement("afterend",d)}addClass_s(d,o.container),addClass_s(d,"f-thumbs"),addClass_s(d,`is-${v("type")}`),t&&addClass_s(d,"is-hidden")}function L(){if(!d||!y())return;f=document.createElement("div"),addClass_s(f,"f-thumbs__viewport");let t="";for(const e of x()){const n=e.html||"";"string"==typeof n&&(t+=`<div index="${e.index}" class="f-thumbs__slide">${n}</div>`)}f.innerHTML=t,d.append(f),d.addEventListener("click",(t=>{t.preventDefault();const e=t.target.closest("[index]"),n=parseInt((null==e?void 0:e.getAttribute("index"))||"-1");a&&n>-1&&a.goTo(n)}));const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&t.target instanceof HTMLImageElement&&(t.target.src=t.target.getAttribute("data-lazy-src")+"",t.target.removeAttribute("data-lazy-src"),e.unobserve(t.target))}))}),{root:f,rootMargin:"100px"});d.querySelectorAll("[data-lazy-src]").forEach((t=>{e.observe(t)})),null==a||a.emit("thumbs:ready")}function T(){var t;if(!carousel_thumbs_u||!a||!d||y()||c)return;const n=x();if(!n.length)return;const o=extend_r({},{Sync:{target:a},Lazyload:{preload:1},slides:n,classes:{container:"f-thumbs",viewport:"f-thumbs__viewport",slide:"f-thumbs__slide"},center:!0,fill:!b(),infinite:!1,dragFree:!0,rtl:a.getOptions().rtl||!1,slidesPerPage:t=>{let e=0;return b()&&(!function(){if(!b())return;if(!d)return;const t=t=>d&&parseFloat(getComputedStyle(d).getPropertyValue("--f-thumb-"+t))||0;g=t("width"),m=t("clip-width")}(),e=4*(g-m)),t&&t.getTotalSlideDim()<=t.getViewportDim()-e?1/0:1}},carousel_thumbs_s.Carousel||{},v("Carousel")||{});c=carousel_thumbs_u(d,o,{Sync:carousel_sync_i,Lazyload:carousel_lazyload_i}),c.on("ready",(()=>{addClass_s(d,"is-syncing"),null==a||a.emit("thumbs:ready"),b()&&(null==a||a.on("render",j))})),c.on("destroy",(()=>{null==a||a.emit("thumbs:destroy")})),c.init(),null===(t=c.getGestures())||void 0===t||t.on("start",(()=>{h=!1})),c.on("click",((t,e)=>{const n=e.target;if(n){const t=n.matches("button")?n:n.firstElementChild;t&&t.matches("button")&&(e.preventDefault(),t.focus({preventScroll:!0}))}})),addClass_s(a.getContainer(),"has-thumbs"),_()}function E(){p()&&v("showOnStart")&&(C(),L())}function P(){var t;p()&&(T(),null==a||a.on("addSlide",M),null==a||a.on("click",O),null==a||a.on("refresh",$),null===(t=null==a?void 0:a.getGestures())||void 0===t||t.on("start",w),z())}function w(){var t,e;h=!0;(null===(t=document.activeElement)||void 0===t?void 0:t.closest(".f-thumbs"))&&(null===(e=document.activeElement)||void 0===e||e.blur())}function j(){var t,e;null==d||d.classList.toggle("is-syncing",!1===(null==a?void 0:a.hasNavigated())||(null===(t=null==a?void 0:a.getTween())||void 0===t?void 0:t.isRunning())),_(),(null===(e=null==a?void 0:a.getGestures())||void 0===e?void 0:e.isPointerDown())&&function(){if(!b())return;if(!a||!c)return;if(!h)return;const t=c.getTween(),e=c.getPages(),n=a.getPageIndex()||0,i=a.getPageProgress()||0;if(!(a&&e&&e[n]&&t))return;const r=t.isRunning()?t.getCurrentValues().pos:c.getPosition();if(void 0===r)return;let l=e[n].pos+i*(g-m);l=clamp_t(e[0].pos,l,e[e.length-1].pos),t.from({pos:r}).to({pos:l}).start()}()}function A(){h=!0,z()}function M(t,e){null==c||c.add({html:S(e)},e.index)}function O(t,e){const n=e.target;n&&!e.defaultPrevented&&"toggle"===n.dataset.thumbsAction&&(d||(C(!0),L(),T()),d&&d.classList.toggle("is-hidden"))}function $(){z()}function z(){if(!a||!f||!y())return;const t=a.getPageIndex();f.querySelectorAll(".is-selected").forEach((t=>{t.classList.remove("is-selected")}));const e=f.querySelector(`[index="${t}"]`);if(e){e.classList.add("is-selected");const t=f.getBoundingClientRect(),n=e.getBoundingClientRect(),o=e.offsetTop-f.offsetTop-.5*t.height+.5*n.height,i=e.scrollLeft-f.scrollLeft-.5*t.width+.5*n.width;f.scrollTo({top:o,left:i,behavior:"smooth"})}}function _(){if(!b())return;if(!a||!c)return;const t=(null==c?void 0:c.getSlides())||[];let e=-.5*g;for(const n of t){const t=n.el;if(!t)continue;let o=a.getPageProgress(n.index)||0;o=Math.max(-1,Math.min(1,o)),o>-1&&o<1&&(e+=.5*g*(1-Math.abs(o))),o=Math.round(1e4*o)/1e4,e=Math.round(1e4*e)/1e4,t.style.setProperty("--progress",`${Math.abs(o)}`),t.style.setProperty("--shift",`${(null==a?void 0:a.isRTL())?-1*e:e}px`),o>-1&&o<1&&(e+=.5*g*(1-Math.abs(o)))}}return{init:function(t,e){carousel_thumbs_u=e,a=t,a.on("ready",P),a.on("initSlides",E),a.on("change",A)},destroy:function(){var t,e;y()&&(null==a||a.emit("thumbs:destroy")),null==a||a.off("ready",P),null==a||a.off("initSlides",E),null==a||a.off("change",A),null==a||a.off("render",j),null==a||a.off("addSlide",M),null==a||a.off("click",O),null==a||a.off("refresh",$),null===(t=null==a?void 0:a.getGestures())||void 0===t||t.off("start",w),null===(e=null==a?void 0:a.getContainer())||void 0===e||e.classList.remove("has-thumbs"),a=void 0,null==c||c.destroy(),c=void 0,null==d||d.remove(),d=void 0},getCarousel:function(){return c},getContainer:function(){return d},getType:function(){return v("type")},isEnabled:p}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.html.js
/*! License details at fancyapps.com/license */
const carousel_html_a={iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto"}},carousel_html_i=()=>{let i;function l(t,a){let i=a.src;if(!isString_t(i))return;let l=a.type;if(!l){if(l||("#"===i.charAt(0)?l="inline":i.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.((a)?png|avif|gif|jp(g|eg)|pjp(eg)?|jfif|svg|webp|bmp|ico|tif(f)?)((\?|#).*)?$)/i)?l="image":i.match(/\.(pdf)((\?|#).*)?$/i)?l="pdf":i.match(/\.(html|php)((\?|#).*)?$/i)&&(l="iframe")),!l){const t=i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i);t&&(i=`https://maps.google.${t[1]}/?ll=${(t[2]?t[2]+"&z="+Math.floor(parseFloat(t[3]))+(t[4]?t[4].replace(/^\//,"&"):""):t[4]+"").replace(/\?/,"&")}&output=${t[4]&&t[4].indexOf("layer=c")>0?"svembed":"embed"}`,l="gmap")}if(!l){const t=i.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i);t&&(i=`https://maps.google.${t[1]}/maps?q=${t[2].replace("query=","q=").replace("api=1","")}&output=embed`,l="gmap")}a.src=i,a.type=l}}function o(e,l){"iframe"!==l.type&&"pdf"!==l.type&&"gmap"!==l.type||function(e){if(!i||!e.el||!e.src)return;const l=document.createElement("iframe");l.classList.add("f-iframe");for(const[e,o]of Object.entries(function(){const e=null==i?void 0:i.getOptions().Html;return isPlainObject_t(e)?Object.assign(Object.assign({},carousel_html_a),e):carousel_html_a}().iframeAttr||{}))l.setAttribute(e,o);l.onerror=()=>{i&&1===i.getState()&&i.showError(e,"{{IFRAME_ERROR}}")},l.src=e.src;const o=document.createElement("div");if(o.classList.add("f-html"),o.append(l),e.width){let t=`${e.width}`;t.match(/^\d+$/)&&(t+="px"),o.style.maxWidth=`${t}`}if(e.height){let t=`${e.height}`;t.match(/^\d+$/)&&(t+="px"),o.style.maxHeight=`${t}`}if(e.aspectRatio){const t=e.el.getBoundingClientRect();o.style.aspectRatio=`${e.aspectRatio}`,o.style[t.width>t.height?"width":"height"]="auto",o.style[t.width>t.height?"maxWidth":"maxHeight"]="none"}e.contentEl=l,e.htmlEl=o,e.el.classList.add("has-html"),e.el.classList.add("has-iframe"),e.el.classList.add(`has-${e.type}`),e.el.prepend(o),i.emit("contentReady",e)}(l)}function n(t,e){var a,l;"iframe"!==e.type&&"pdf"!==e.type&&"gmap"!==e.type||(null==i||i.hideError(e),null===(a=e.contentEl)||void 0===a||a.remove(),e.contentEl=void 0,null===(l=e.htmlEl)||void 0===l||l.remove(),e.htmlEl=void 0)}return{init:function(t){i=t,i.on("addSlide",l),i.on("attachSlideEl",o),i.on("detachSlideEl",n)},destroy:function(){null==i||i.off("addSlide",l),null==i||i.off("attachSlideEl",o),null==i||i.off("detachSlideEl",n),i=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.video.js
/*! License details at fancyapps.com/license */
const carousel_video_n=(t,e={})=>{const o=new URL(t),n=new URLSearchParams(o.search),i=new URLSearchParams;for(const[t,o]of[...n,...Object.entries(e)]){let e=o+"";if("t"===t){let t=e.match(/((\d*)m)?(\d*)s?/);t&&i.set("start",60*parseInt(t[2]||"0")+parseInt(t[3]||"0")+"")}else i.set(t,e)}let l=i+"",s=t.match(/#t=((.*)?\d+s)/);return s&&(l+=`#t=${s[1]}`),l},carousel_video_i={autoplay:!1,html5videoTpl:'<video class="f-html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n    <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',iframeAttr:{allow:"autoplay; fullscreen",scrolling:"auto",credentialless:""},vimeo:{byline:1,color:"00adef",controls:1,dnt:1,muted:0},youtube:{controls:1,enablejsapi:1,nocookie:1,rel:0,fs:1}},carousel_video_l=()=>{let l,s=!1;function a(){const e=null==l?void 0:l.getOptions().Video;return isPlainObject_t(e)?Object.assign(Object.assign({},carousel_video_i),e):carousel_video_i}function r(){var t;return null===(t=null==l?void 0:l.getPage())||void 0===t?void 0:t.slides[0]}const c=t=>{var e;try{let o=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===o.event)for(let o of Array.from((null===(e=null==l?void 0:l.getContainer())||void 0===e?void 0:e.getElementsByClassName("f-iframe"))||[]))o instanceof HTMLIFrameElement&&o.contentWindow===t.source&&(o.dataset.ready="true")}else if(t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/)&&"onReady"===o.event){const t=document.getElementById(o.id);t&&(t.dataset.ready="true")}}catch(t){}};function d(t,o){const i=o.src;if(!isString_t(i))return;let l=o.type;if(!l||"html5video"===l){const t=i.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i);t&&(l="html5video",o.html5videoFormat=o.html5videoFormat||"video/"+("ogv"===t[1]?"ogg":t[1]))}if(!l||"youtube"===l){const t=i.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i);if(t){const e=Object.assign(Object.assign({},a().youtube),o.youtube||{}),s=`www.youtube${e.nocookie?"-nocookie":""}.com`,r=carousel_video_n(i,e),c=encodeURIComponent(t[2]);o.videoId=c,o.src=`https://${s}/embed/${c}?${r}`,o.thumb=o.thumb||`https://i.ytimg.com/vi/${c}/mqdefault.jpg`,l="youtube"}}if(!l||"vimeo"===l){const t=i.match(/^.+vimeo.com\/(?:\/)?(video\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/);if(t){const e=Object.assign(Object.assign({},a().vimeo),o.vimeo||{}),s=carousel_video_n(i,e),r=encodeURIComponent(t[2]),c=t[5]||"";o.videoId=r,o.src=`https://player.vimeo.com/video/${r}?${c?`h=${c}${s?"&":""}`:""}${s}`,l="vimeo"}}o.type=l}function u(t,n){"html5video"===n.type&&function(t){if(!l||!t.el||!t.src)return;const{el:n,src:i}=t;if(!n||!i)return;const s=t.html5videoTpl||a().html5videoTpl,r=t.html5videoFormat||a().html5videoFormat;if(!s)return;const c=t.poster||(t.thumb&&isString_t(t.thumb)?t.thumb:""),d=strToHtml_e(s.replace(/\{\{src\}\}/gi,i+"").replace(/\{\{format\}\}/gi,r||"").replace(/\{\{poster\}\}/gi,c+""));if(!d)return;const u=document.createElement("div");u.classList.add("f-html"),u.append(d),t.contentEl=d,t.htmlEl=u,n.classList.add(`has-${t.type}`),n.prepend(u),h(t),l.emit("contentReady",t)}(n),"youtube"!==n.type&&"vimeo"!==n.type||function(t){if(!l||!t.el||!t.src)return;const e=document.createElement("iframe");e.classList.add("f-iframe"),e.setAttribute("id",`f-iframe_${t.videoId}`);for(const[t,o]of Object.entries(a().iframeAttr||{}))e.setAttribute(t,o);e.onload=()=>{var o;l&&1===l.getState()&&"youtube"===t.type&&(null===(o=e.contentWindow)||void 0===o||o.postMessage(JSON.stringify({event:"listening",id:e.getAttribute("id")}),"*"))},e.onerror=()=>{l&&1===l.getState()&&(null==l||l.showError(t,"{{IFRAME_ERROR}}"))},e.src=t.src;const o=document.createElement("div");o.classList.add("f-html"),o.append(e),t.contentEl=e,t.htmlEl=o,t.el.classList.add("has-html"),t.el.classList.add("has-iframe"),t.el.classList.add(`has-${t.type}`),t.el.prepend(o),h(t),l.emit("contentReady",t)}(n)}function m(t,e){var o,n;"html5video"!==e.type&&"youtube"!==e.type&&"vimeo"!==e.type||(null===(o=e.contentEl)||void 0===o||o.remove(),e.contentEl=void 0,null===(n=e.htmlEl)||void 0===n||n.remove(),e.htmlEl=void 0),e.poller&&clearTimeout(e.poller)}function f(){s=!1}function p(){if(s)return;s=!0;const t=r();(t&&void 0!==t.autoplay?t.autoplay:a().autoplay)&&(function(){var t;const e=r(),o=null==e?void 0:e.el;if(o&&"html5video"===(null==e?void 0:e.type))try{const t=o.querySelector("video");if(t){const e=t.play();void 0!==e&&e.then((()=>{})).catch((e=>{t.muted=!0,t.play()}))}}catch(t){}const n=null==e?void 0:e.htmlEl;n instanceof HTMLIFrameElement&&(null===(t=n.contentWindow)||void 0===t||t.postMessage('{"event":"command","func":"stopVideo","args":""}',"*"))}(),function(){const t=r(),e=null==t?void 0:t.type;if(!(null==t?void 0:t.el)||"youtube"!==e&&"vimeo"!==e)return;const o=()=>{if(t.contentEl&&t.contentEl instanceof HTMLIFrameElement&&t.contentEl.contentWindow){let e;if("true"===t.contentEl.dataset.ready)return e="youtube"===t.type?{event:"command",func:"playVideo"}:{method:"play",value:"true"},e&&t.contentEl.contentWindow.postMessage(JSON.stringify(e),"*"),void(t.poller=void 0);"youtube"===t.type&&(e={event:"listening",id:t.contentEl.getAttribute("id")},t.contentEl.contentWindow.postMessage(JSON.stringify(e),"*"))}t.poller=setTimeout(o,250)};o()}())}function h(t){const e=null==t?void 0:t.htmlEl;if(t&&e&&("html5video"===t.type||"youtube"===t.type||"vimeo"===t.type)){if(e.style.aspectRatio="",e.style.width="",e.style.height="",e.style.maxWidth="",e.style.maxHeight="",t.width){let o=`${t.width}`;o.match(/^\d+$/)&&(o+="px"),e.style.maxWidth=`${o}`}if(t.height){let o=`${t.height}`;o.match(/^\d+$/)&&(o+="px"),e.style.maxHeight=`${o}`}if(t.aspectRatio){const o=t.aspectRatio.split("/"),n=parseFloat(o[0].trim()),i=o[1]?parseFloat(o[1].trim()):0,l=n&&i?n/i:n;e.offsetHeight;const s=e.getBoundingClientRect(),a=l<(s.width||1)/(s.height||1);e.style.aspectRatio=`${t.aspectRatio}`,e.style.width=a?"auto":"",e.style.height=a?"":"auto"}}}function v(){h(r())}return{init:function(t){l=t,l.on("addSlide",d),l.on("attachSlideEl",u),l.on("detachSlideEl",m),l.on("ready",p),l.on("change",f),l.on("settle",p),l.on("refresh",v),window.addEventListener("message",c)},destroy:function(){null==l||l.off("addSlide",d),null==l||l.off("attachSlideEl",u),null==l||l.off("detachSlideEl",m),null==l||l.off("ready",p),null==l||l.off("change",f),null==l||l.off("settle",p),null==l||l.off("refresh",v),window.removeEventListener("message",c),l=void 0}}};

;// ./node_modules/@fancyapps/ui/dist/carousel/carousel.fullscreen.js
/*! License details at fancyapps.com/license */
const carousel_fullscreen_n={autoStart:!1,btnTpl:'<button data-fullscreen-action="toggle" class="f-button" title="{{TOGGLE_FULLSCREEN}}"><svg><g><path d="M8 3H5a2 2 0 0 0-2 2v3M21 8V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3M16 21h3a2 2 0 0 0 2-2v-3"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},carousel_fullscreen_t="in-fullscreen-mode",carousel_fullscreen_l=()=>{let l;function u(t){const u=null==l?void 0:l.getOptions().Fullscreen;let o=(isPlainObject_t(u)?Object.assign(Object.assign({},carousel_fullscreen_n),u):carousel_fullscreen_n)[t];return o&&"function"==typeof o&&l?o(l):o}function o(){var e;null===(e=null==l?void 0:l.getPlugins().Toolbar)||void 0===e||e.add("fullscreen",{tpl:u("btnTpl")})}function c(){if(u("autoStart")){const e=s();e&&a(e)}}function i(e,n){const t=n.target;t&&!n.defaultPrevented&&"toggle"===t.dataset.fullscreenAction&&d()}function s(){return u("el")||(null==l?void 0:l.getContainer())||void 0}function r(){const e=document;return e.fullscreenEnabled?!!e.fullscreenElement:!!e.webkitFullscreenEnabled&&!!e.webkitFullscreenElement}function a(e){const n=document;let l;return e||(e=n.documentElement),n.fullscreenEnabled?l=e.requestFullscreen():n.webkitFullscreenEnabled&&(l=e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)),l&&l.then((()=>{e.classList.add(carousel_fullscreen_t)})),l}function f(){const e=document;let n;return e.fullscreenEnabled?n=e.fullscreenElement&&e.exitFullscreen():e.webkitFullscreenEnabled&&(n=e.webkitFullscreenElement&&e.webkitExitFullscreen()),n&&n.then((()=>{var e;null===(e=s())||void 0===e||e.classList.remove(carousel_fullscreen_t)})),n}function d(){if(r())f();else{const e=s();e&&a(e)}}return{init:function(e){l=e,l.on("initPlugins",o),l.on("ready",c),l.on("click",i)},destroy:function(){null==l||l.off("initPlugins",o),null==l||l.off("ready",c),null==l||l.off("click",i)},exit:f,inFullscreen:r,request:a,toggle:d}};

;// ./node_modules/@fancyapps/ui/dist/fancybox/fancybox.hash.js
/*! License details at fancyapps.com/license */
let fancybox_hash_e,fancybox_hash_n=!1,fancybox_hash_o=!1,fancybox_hash_r=!1,fancybox_hash_i=!1;const fancybox_hash_l=()=>{const t=new URL(document.URL).hash,e=t.slice(1).split("-"),n=e[e.length-1],o=n&&/^\+?\d+$/.test(n)&&parseInt(e.pop()||"1",10)||1;return{urlHash:t,urlSlug:e.join("-"),urlIndex:o}},fancybox_hash_s=()=>{const t=null==fancybox_hash_e?void 0:fancybox_hash_e.getInstance();return!(!t||1!=t.getState())},fancybox_hash_a=()=>{if(!fancybox_hash_e)return;if(fancybox_hash_s())return;const{urlSlug:t,urlIndex:n}=fancybox_hash_l();if(!t)return;let o=document.querySelector(`[data-slug="${t}"]`);if(o&&o.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),fancybox_hash_s())return;const r=document.querySelectorAll(`[data-fancybox="${t}"]`);if(!r.length)return;const i=r[n-1];i&&i.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0}))},fancybox_hash_u=()=>{if(!fancybox_hash_e)return;if(fancybox_hash_r)return;const t=null==fancybox_hash_e?void 0:fancybox_hash_e.getInstance(),n=null==t?void 0:t.getCarousel();if(!1===(null==t?void 0:t.getOptions().Hash))return;const{urlSlug:o,urlIndex:s}=fancybox_hash_l();if(t&&n){const e=n.getSlides();for(const t of e||[])if(o===t.slug||o===t.fancybox&&t.index===s-1)return void n.goTo(t.index);fancybox_hash_i=!0,t.close(),fancybox_hash_i=!1}fancybox_hash_a()},fancybox_hash_c=()=>{fancybox_hash_e&&setTimeout((()=>{fancybox_hash_n=!0,fancybox_hash_a(),fancybox_hash_n=!1,window.addEventListener("hashchange",fancybox_hash_u,!1)}),300)},fancybox_hash_d=()=>{let t,e="auto",s="";function a(){var r,i;if(!t||!t.isTopMost())return;if(!1===t.getOptions().Hash)return;const a=t.getCarousel();if(!a)return;const{urlHash:c,urlSlug:d}=fancybox_hash_l(),f=t.getSlide();if(!f)return;let h=f.slug||f.fancybox||"",g=parseInt(f.index+"",10)+1;if(!h)return;let w=f.slug?`#${f.slug}`:`#${h}-${g}`;if(((null===(i=null===(r=t.getCarousel())||void 0===r?void 0:r.getPages())||void 0===i?void 0:i.length)||0)<2&&(w=`#${h}`),c!==w&&(s=c),history.scrollRestoration&&(e=history.scrollRestoration,history.scrollRestoration="manual"),a.on("change",u),fancybox_hash_n)return;const p=h!==d;try{window.history[p?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+w)}catch(t){}p&&(fancybox_hash_o=!0)}function u(){if(!t||!t.isTopMost())return;if(!1===t.getOptions().Hash)return;const e=t.getSlide();if(!e)return;let n=e.slug||e.fancybox||"",o=e.index+1,i=e.slug?`#${e.slug}`:`#${n}-${o}`;fancybox_hash_r=!0;try{window.history.replaceState({},document.title,window.location.pathname+window.location.search+i)}catch(t){}fancybox_hash_r=!1}function c(){if(fancybox_hash_i)return;if(!t||!t.isTopMost())return;if(!1===t.getOptions().Hash)return;const e=t.getSlide();if(!e)return;if(e.fancybox||""){fancybox_hash_r=!0;try{!fancybox_hash_o||fancybox_hash_n||function(){if(window.parent===window)return!1;try{var t=window.frameElement}catch(e){t=null}return null===t?"data:"===location.protocol:t.hasAttribute("sandbox")}()?window.history.replaceState({},document.title,window.location.pathname+window.location.search+s):window.history.back()}catch(t){}fancybox_hash_r=!1}}return{init:function(e){t=e,t.on("ready",a),t.on("close",c)},destroy:function(){null==t||t.off("ready",a),null==t||t.off("close",c);const n=null==t?void 0:t.getCarousel();n&&n.off("change",u),t=void 0,history.scrollRestoration&&e&&(history.scrollRestoration=e)}}};fancybox_hash_d.startFromUrl=fancybox_hash_a,fancybox_hash_d.setup=function(n){fancybox_hash_e||(fancybox_hash_e=n,canUseDOM_e()&&(/complete|interactive|loaded/.test(document.readyState)?fancybox_hash_c():document.addEventListener("DOMContentLoaded",fancybox_hash_c)))};

;// ./node_modules/@fancyapps/ui/dist/fancybox/l10n/en_EN.js
/*! License details at fancyapps.com/license */
const l10n_en_EN_o=Object.assign(Object.assign({},en_EN_o),{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ELEMENT_NOT_FOUND:"HTML Element Not Found",IFRAME_ERROR:"Error Loading Page"});

;// ./node_modules/@fancyapps/ui/dist/fancybox/fancybox.js
/*! License details at fancyapps.com/license */
const fancybox_M='<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg tabindex="-1" width="24" height="24" viewBox="0 0 24 24"><path d="M19.286 4.714 4.714 19.286M4.714 4.714l14.572 14.572" /></svg></button>';carousel_toolbar_r().add("close",{tpl:fancybox_M});const fancybox_k=e=>{e.cancelable&&e.preventDefault()},O=e=>{e&&e.dispatchEvent(new CustomEvent("animationend",{bubbles:!1,cancelable:!0,currentTarget:e}))},R=(e=null,t="",n)=>{if(!e||!e.parentElement||!t)return void(n&&n());O(e);const o=i=>{i.target===e&&e.dataset.animationName&&(e.removeEventListener("animationend",o),delete e.dataset.animationName,n&&n(),e.classList.remove(t))};e.dataset.animationName=t,e.addEventListener("animationend",o),addClass_s(e,t)};var _;!function(e){e[e.Init=0]="Init",e[e.Ready=1]="Ready",e[e.Closing=2]="Closing",e[e.Destroyed=3]="Destroyed"}(_||(_={}));const I={ajax:null,backdropClick:"close",Carousel:{},closeButton:"auto",closeExisting:!1,delegateEl:void 0,dragToClose:!0,fadeEffect:!0,groupAll:!1,groupAttr:"data-fancybox",hideClass:"f-fadeOut",hideScrollbar:!0,id:void 0,idle:!1,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"prev",ArrowDown:"next",ArrowRight:"next",ArrowLeft:"prev"},l10n:l10n_en_EN_o,mainClass:"",mainStyle:{},mainTpl:'<dialog class="fancybox__dialog">\n    <div class="fancybox__container" tabindex="0" aria-label="{{MODAL}}">\n      <div class="fancybox__backdrop"></div>\n      <div class="fancybox__carousel"></div>\n    </div>\n  </dialog>',modal:!0,on:{},parentEl:void 0,placeFocusBack:!0,showClass:"f-zoomInUp",startIndex:0,sync:void 0,theme:"dark",triggerEl:void 0,triggerEvent:void 0,zoomEffect:!0},H=new Map;let z=0;const D="with-fancybox",B=()=>{let r,T,A,B,N,F,V,W=_.Init,$=Object.assign({},I),K=-1,U={},X=[],G=!1,Y=!0,Z=0;function J(e,...t){let n=$[e];return n&&"function"==typeof n?n(Oe,...t):n}function Q(e,t=[]){const n=J("l10n")||{};e=String(e).replace(/\{\{(\w+)\}\}/g,((e,t)=>n[t]||e));for(let n=0;n<t.length;n++)e=e.split(t[n][0]).join(t[n][1]);return e=e.replace(/\{\{(.*?)\}\}/g,((e,t)=>t))}const ee=new Map;function te(e,...t){const n=[...ee.get(e)||[]];for(const[t,o]of Object.entries($.on||{}))(t===e||t.split(" ").indexOf(e)>-1)&&n.push(o);for(const e of n)e&&"function"==typeof e&&e(Oe,...t);"*"!==e&&te("*",e,...t)}function ne(t=[],n={}){W!==_.Init&&(Oe.destroy(),W=_.Init),$=extend_r({},I,n),K=J("id")||"fancybox-"+ ++z;const a=H.get(K);if(a&&a.destroy(),H.set(K,Oe),te("init"),function(){for(const[e,t]of Object.entries(Object.assign(Object.assign({},q.Plugins),$.plugins||{})))if(e&&!U[e]&&t instanceof Function){const n=t();n.init(Oe),U[e]=n}te("initPlugins")}(),function(e=[]){te("initSlides",e),X=[...e]}(t),function(){const t=J("parentEl")||document.body;if(!(t&&t instanceof HTMLElement))return;const n=Q(J("mainTpl")||"");if(r=strToHtml_e(n)||void 0,!r)return;if(T=r.querySelector(".fancybox__container"),!(T&&T instanceof HTMLElement))return;const l=J("mainClass");l&&addClass_s(T,l);const a=J("mainStyle");if(a&&isPlainObject_t(a))for(const[e,t]of Object.entries(a))T.style.setProperty(e,t);const u=J("theme"),d="auto"===u?window.matchMedia("(prefers-color-scheme:light)").matches:"light"===u;T.setAttribute("theme",d?"light":"dark"),r.setAttribute("id",`${K}`),r.addEventListener("keydown",(e=>{"Escape"===e.key&&fancybox_k(e)})),r.addEventListener("wheel",(e=>{const t=e.target;let n=J("wheel",e);t.closest(".f-thumbs")&&(n="slide");const o="slide"===n,s=[-e.deltaX||0,-e.deltaY||0,-e.detail||0].reduce((function(e,t){return Math.abs(t)>Math.abs(e)?t:e})),l=Math.max(-1,Math.min(1,s)),r=Date.now();Z&&r-Z<300?o&&fancybox_k(e):(Z=r,te("wheel",e,l),e.defaultPrevented||("close"===n?Ae(e):"slide"===n&&B&&!getScrollableParent_n(t)&&(fancybox_k(e),B[l>0?"prev":"next"]())))}),{capture:!0,passive:!1}),r.addEventListener("cancel",(e=>{Ae(e)})),t.append(r),1===H.size&&(J("hideScrollbar")&&scrollLock_t(!0),document.documentElement.classList.add(D));r instanceof HTMLDialogElement&&(J("modal")?r.showModal():r.show());te("initLayout")}(),function(){if(A=(null==r?void 0:r.querySelector(".fancybox__carousel"))||void 0,!A)return;A.fancybox=Oe;const e=extend_r({},{Autoplay:{autoStart:!1,pauseOnHover:!1,progressbarParentEl:e=>{const t=e.getContainer();return(null==t?void 0:t.querySelector(".f-carousel__toolbar [data-autoplay-action]"))||t}},Fullscreen:{el:T},Toolbar:{absolute:!0,items:{counter:{tpl:'<div class="f-counter"><span data-fancybox-page></span>/<span data-fancybox-pages></span></div>'}},display:{left:["counter"],right:["toggleFull","autoplay","fullscreen","thumbs","close"]}},Video:{autoplay:!0},Thumbs:{minCount:2,Carousel:{classes:{container:"fancybox__thumbs"}}},classes:{container:"fancybox__carousel",viewport:"fancybox__viewport",slide:"fancybox__slide"},spinnerTpl:'<div class="f-spinner" data-fancybox-close></div>',dragFree:!1,slidesPerPage:1,plugins:{Sync:carousel_sync_i,Arrows:carousel_arrows_s,Lazyload:carousel_lazyload_i,Zoomable:carousel_zoomable_s,Html:carousel_html_i,Video:carousel_video_l,Autoplay:carousel_autoplay_n,Fullscreen:carousel_fullscreen_l,Thumbs:carousel_thumbs_a,Toolbar:carousel_toolbar_r}},J("Carousel")||{},{slides:X,enabled:!0,initialPage:J("startIndex")||0,l10n:J("l10n")});B=carousel_y(A,e),te("initCarousel",B),B.on("*",((e,t,...n)=>{te(`Carousel.${t}`,e,...n)})),B.on("attachSlideEl",ie),B.on("detachSlideEl",se),B.on("contentReady",ue),B.on("ready",ae),B.on("change",re),B.on("settle",ce),B.on("thumbs:ready",de),B.on("thumbs:destroy",de),B.init()}(),r&&T){if(J("closeExisting"))for(const[e,t]of H.entries())e!==K&&t.close();J("fadeEffect")?(setTimeout((()=>{oe()}),500),addClass_s(T,"is-revealing")):oe(),T.classList.add("is-ready"),W=_.Ready,te("ready")}}function oe(){removeClass_s(T,"is-revealing");try{if(document.activeElement===r){((null==T?void 0:T.querySelector("[autofocus]"))||T).focus()}}catch(e){}}function ie(e,n){var o;ye(n),fe(),null===(o=n.el)||void 0===o||o.addEventListener("click",le),"inline"!==n.type&&"clone"!==n.type||function(e){if(!B||!e||!e.el)return;let n=null;if(isString_t(e.src)){const t=e.src.split("#",2).pop();n=t?document.getElementById(t):null}if(n){if(addClass_s(n,"f-html"),"clone"===e.type||n.closest(".fancybox__carousel")){n=n.cloneNode(!0);const t=n.dataset.animationName;t&&(n.classList.remove(t),delete n.dataset.animationName);let o=n.getAttribute("id");o=o?`${o}--clone`:`clone-${K}-${e.index}`,n.setAttribute("id",o)}else if(n.parentNode){const t=document.createElement("div");t.inert=!0,n.parentNode.insertBefore(t,n),e.placeholderEl=t}e.htmlEl=n,addClass_s(e.el,"has-html"),e.el.prepend(n),n.classList.remove("hidden"),"none"===n.style.display&&(n.style.display=""),"none"===getComputedStyle(n).getPropertyValue("display")&&(n.style.display=n.dataset.display||"flex"),null==B||B.emit("contentReady",e)}else null==B||B.showError(e,"{{ELEMENT_NOT_FOUND}}")}(n),"ajax"===n.type&&function(e){const t=e.el;if(!t)return;if(e.htmlEl||e.xhr)return;null==B||B.showLoading(e),e.state=0;const n=new XMLHttpRequest;n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE&&W===_.Ready)if(null==B||B.hideLoading(e),e.state=1,200===n.status){let o=n.responseText+"",i=null,s=null;if(e.filter){const t=document.createElement("div");t.innerHTML=o,s=t.querySelector(e.filter+"")}s&&s instanceof HTMLElement?i=s:(i=document.createElement("div"),i.innerHTML=o),i.classList.add("f-html"),e.htmlEl=i,t.classList.add("has-html"),t.classList.add("has-ajax"),t.prepend(i),null==B||B.emit("contentReady",e)}else null==B||B.showError(e)};const o=J("ajax")||null;n.open(o?"POST":"GET",e.src+""),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(o),e.xhr=n}(n)}function se(e,t){var n;!function(e){e.closeButtonEl&&(e.closeButtonEl.remove(),e.closeButtonEl=void 0)}(t),null===(n=t.el)||void 0===n||n.removeEventListener("click",le),"inline"!==t.type&&"clone"!==t.type||function(e){const t=e.htmlEl,n=e.placeholderEl;t&&("none"!==getComputedStyle(t).getPropertyValue("display")&&(t.style.display="none"),t.offsetHeight);n&&(t&&n.parentNode&&n.parentNode.insertBefore(t,n),n.remove());e.htmlEl=void 0,e.placeholderEl=void 0}(t),t.xhr&&(t.xhr.abort(),t.xhr=void 0)}function le(e){if(!be())return;if(W!==_.Ready)return fancybox_k(e),void e.stopPropagation();if(e.defaultPrevented)return;if(!f.isClickAllowed())return;const t=e.composedPath()[0];t.closest(".fancybox__carousel")&&t.classList.contains("fancybox__slide")&&me(e)}function re(){Y=!1,T&&B&&T.classList.remove("is-revealing"),fe();const e=J("sync");if(B&&e){const t=e.getPageIndex(B.getPageIndex())||0;e.goTo(t,{transition:!1})}}function ae(){var e;!function(){const e=null==B?void 0:B.getViewport();if(!J("dragToClose")||!B||!e)return;if(N=f(e).init(),!N)return;let t=!1,n=0,o=0,s={},l=1;function r(){var e,t;null==F||F.spring({clamp:!0,mass:1,tension:0===o?140:960,friction:17,restDelta:.1,restSpeed:.1,maxSpeed:1/0}).from({y:n}).to({y:o}).start();const i=(null===(e=null==B?void 0:B.getViewport())||void 0===e?void 0:e.getBoundingClientRect().height)||0,s=null===(t=Ee())||void 0===t?void 0:t.panzoomRef;if(i&&s)if(0===o)s.execute(v.Reset);else{const e=map_t(Math.abs(n),0,.33*i,l,.75*l,!1);s.execute(v.ZoomTo,{scale:e})}}const c=e=>{var t;const n=e.srcEvent,o=n.target;return B&&!(gestures_e(n)&&(null===(t=n.touches)||void 0===t?void 0:t.length)>1)&&o&&!getScrollableParent_n(o)};F=tween_c().on("step",(t=>{if(T&&e&&W===_.Ready){const o=e.getBoundingClientRect().height;n=Math.min(o,Math.max(-1*o,t.y));const i=map_t(Math.abs(n),0,.5*o,1,0,!0);T.style.setProperty("--f-drag-opacity",i+""),T.style.setProperty("--f-drag-offset",n+"px")}})),N.on("start",(function(){t||(null==F||F.pause(),o=n)})).on("panstart",(e=>{var n,o;if(!t&&c(e)&&"y"===e.axis){fancybox_k(e.srcEvent),t=!0,Te(),null===(n=null==B?void 0:B.getViewport())||void 0===n||n.classList.add("is-dragging");const i=null===(o=Ee())||void 0===o?void 0:o.panzoomRef;if(i){l=i.getTransform().scale||1;const e=i.getOptions();s=Object.assign({},e),e.bounds=!1,e.gestures=!1}}else t=!1})).on("pan",(function(e){t&&c(e)&&(fancybox_k(e.srcEvent),e.srcEvent.stopPropagation(),"y"===e.axis&&(o+=e.deltaY,r()))})).on("end",(e=>{var i,l,a;if(null===(i=null==B?void 0:B.getViewport())||void 0===i||i.classList.remove("is-dragging"),t){const t=null===(l=Ee())||void 0===l?void 0:l.panzoomRef;if(t){null===(a=t.getTween())||void 0===a||a.end();const e=t.getOptions();e.bounds=s.bounds||!1,e.gestures=s.gestures||!1}c(e)&&"y"===e.axis&&(Math.abs(e.velocityY)>5||Math.abs(n)>50)&&Ae(e.srcEvent,"f-throwOut"+(e.velocityY>0?"Down":"Up"))}t=!1,W===_.Ready&&0!==n&&(o=0,r())}))}(),document.body.addEventListener("click",ve),document.body.addEventListener("keydown",pe,{passive:!1,capture:!0}),fe(),je();const t=J("sync");t&&(null===(e=t.getTween())||void 0===e||e.start()),he(Ee())}function ce(){(null==B?void 0:B.canGoNext())?je():Ce()}function ue(e,t){ye(t),he(t)}function de(){var e;const t=null==B?void 0:B.getPlugins().Thumbs;toggleClass_s(T,"has-thumbs",(null==t?void 0:t.isEnabled())||!1),toggleClass_s(T,"has-vertical-thumbs",!!t&&("scrollable"===t.getType()||!0===(null===(e=t.getCarousel())||void 0===e?void 0:e.isVertical())))}function fe(){if(T){const e=(null==B?void 0:B.getPages())||[],t=(null==B?void 0:B.getPageIndex())||0;for(const e of T.querySelectorAll("[data-fancybox-index]"))e.innerHTML=t+"";for(const e of T.querySelectorAll("[data-fancybox-page]"))e.innerHTML=t+1+"";for(const t of T.querySelectorAll("[data-fancybox-pages]"))t.innerHTML=e.length+""}}function me(e){if(!!e.composedPath()[0].closest("[data-fancybox-close]"))return void Ae(e);if(te("backdropClick",e),e.defaultPrevented)return;J("backdropClick")&&Ae(e)}function ge(){Se()}function pe(e){if(!be())return;if(W!==_.Ready)return;const t=e.key,o=J("keyboard");if(!o)return;if(e.ctrlKey||e.altKey||e.shiftKey)return;const i=e.composedPath()[0];if(!isNode_n(i))return;if("Escape"!==t&&(e=>{const t=["input","textarea","select","option","video","iframe","[contenteditable]","[data-selectable]","[data-draggable]"].join(",");return e.matches(t)||e.closest(t)})(i))return;if(te("keydown",e),e.defaultPrevented)return;const s=o[t];if(s)switch(s){case"close":Ae(e);break;case"next":fancybox_k(e),null==B||B.next();break;case"prev":fancybox_k(e),null==B||B.prev()}}function ve(e){if(!be())return;if(W!==_.Ready)return;if(Se(),e.defaultPrevented)return;const t=e.composedPath()[0],n=!!t.closest("[data-fancybox-close]"),o=t.classList.contains("fancybox__backdrop");(n||o)&&me(e)}function ye(e){var t;const{el:n,htmlEl:i,closeButtonEl:s}=e;if(!n||!i||s)return;let l=J("closeButton");if("auto"===l&&(l=!0!==(null===(t=null==B?void 0:B.getPlugins().Toolbar)||void 0===t?void 0:t.isEnabled())),l){const t=strToHtml_e(Q(fancybox_M));t&&(addClass_s(t,"is-close-button"),e.closeButtonEl=i.insertAdjacentElement("afterbegin",t),n.classList.add("has-close-btn"))}}function he(e){if(!(Y&&B&&1===B.getState()&&e&&e.index===B.getOptions().initialPage&&e.el&&e.el.parentElement))return;if(void 0!==e.state&&1!==e.state)return;Y=!1;const t=e.panzoomRef,n=null==t?void 0:t.getTween(),o=J("zoomEffect")&&n?we(e):void 0;if(t&&n&&o){const{x:e,y:i,scale:s}=t.getStartPosition();return void n.spring({tension:215,friction:25,restDelta:.001,restSpeed:.001,maxSpeed:1/0}).from(o).to({x:e,y:i,scale:s}).start()}const i=(null==t?void 0:t.getContent())||e.htmlEl;i&&R(i,J("showClass",e))}function be(){var e;return(null===(e=q.getInstance())||void 0===e?void 0:e.getId())===K}function Ee(){var e;return null===(e=null==B?void 0:B.getPage())||void 0===e?void 0:e.slides[0]}function xe(){const e=Ee();return e?e.triggerEl||J("triggerEl"):void 0}function we(e){var t,n;const o=e.thumbEl;if(!o||!(e=>{const t=e.getBoundingClientRect(),n=e.closest("[style]"),o=null==n?void 0:n.parentElement;if(n&&n.style.transform&&o){const e=o.getBoundingClientRect();if(t.left<e.left||t.left>e.left+e.width-t.width)return!1;if(t.top<e.top||t.top>e.top+e.height-t.height)return!1}const i=Math.max(document.documentElement.clientHeight,window.innerHeight),s=Math.max(document.documentElement.clientWidth,window.innerWidth);return!(t.bottom<0||t.top-i>=0||t.right<0||t.left-s>=0)})(o))return;const i=null===(n=null===(t=e.panzoomRef)||void 0===t?void 0:t.getWrapper())||void 0===n?void 0:n.getBoundingClientRect(),s=null==i?void 0:i.width,l=null==i?void 0:i.height;if(!s||!l)return;const r=o.getBoundingClientRect();let a=r.width,c=r.height,u=r.left,d=r.top;if(!r||!a||!c)return;if(o instanceof HTMLImageElement){const e=window.getComputedStyle(o).getPropertyValue("object-fit");if("contain"===e||"scale-down"===e){const{width:t,height:n}=((e,t,n,o,i="contain")=>{if("contain"===i||e>n||t>o){const i=n/e,s=o/t,l=Math.min(i,s);e*=l,t*=l}return{width:e,height:t}})(o.naturalWidth,o.naturalHeight,a,c,e);u+=.5*(a-t),d+=.5*(c-n),a=t,c=n}}if(Math.abs(s/l-a/c)>.1)return;return{x:u+.5*a-(i.left+.5*s),y:d+.5*c-(i.top+.5*l),scale:a/s}}function Le(){V&&clearTimeout(V),V=void 0,document.removeEventListener("mousemove",ge)}function je(){if(G)return;if(V)return;const e=J("idle");e&&(V=setTimeout(Pe,e))}function Pe(){T&&(Le(),addClass_s(T,"is-idle"),document.addEventListener("mousemove",ge),G=!0)}function Se(){G&&(Ce(),je())}function Ce(){Le(),null==T||T.classList.remove("is-idle"),G=!1}function Te(){if(J("placeFocusBack")){const t=xe();!t||(e=t.getBoundingClientRect()).bottom>0&&e.right>0&&e.left<(window.innerWidth||document.documentElement.clientWidth)&&e.top<(window.innerHeight||document.documentElement.clientHeight)||t.scrollIntoView({behavior:"instant",block:"center",inline:"center"})}var e}function Ae(e,t){var n,o,i,s,r;if(W===_.Closing||W===_.Destroyed)return;const a=new Event("shouldClose",{bubbles:!0,cancelable:!0});if(te("shouldClose",a,e),a.defaultPrevented)return;if(Le(),e){if(e.defaultPrevented)return;fancybox_k(e),e.stopPropagation(),e.stopImmediatePropagation()}if(W=_.Closing,null==F||F.pause(),null==N||N.destroy(),B){null===(n=B.getGestures())||void 0===n||n.destroy(),null===(o=B.getTween())||void 0===o||o.pause();for(const e of B.getSlides()){const t=e.panzoomRef;t&&(extend_r(t.getOptions(),{clickAction:!1,dblClickAction:!1,wheelAction:!1,bounds:!1,minScale:0,maxScale:1/0}),null===(i=t.getGestures())||void 0===i||i.destroy(),null===(s=t.getTween())||void 0===s||s.pause())}}const c=null==B?void 0:B.getPlugins();null===(r=null==c?void 0:c.Autoplay)||void 0===r||r.stop();const u=null==c?void 0:c.Fullscreen;u&&u.inFullscreen()?Promise.resolve(u.exit()).then((()=>{setTimeout((()=>{Me(e,t)}),150)})):Me(e,t)}function Me(e,t){var n,o;if(W!==_.Closing)return;te("close",e),Y=!1,document.body.removeEventListener("click",ve),document.body.removeEventListener("keydown",pe,{passive:!1,capture:!0}),Te(),J("fadeEffect")&&(null==T||T.classList.remove("is-ready"),null==T||T.classList.add("is-hiding")),null==T||T.classList.add("is-closing");const i=Ee(),s=null==i?void 0:i.el,l=null==i?void 0:i.panzoomRef,r=null===(n=null==i?void 0:i.panzoomRef)||void 0===n?void 0:n.getTween(),a=t||J("hideClass");let c=!1,u=!1;if(B&&i&&s&&l&&r){let e;if(J("zoomEffect")&&1===i.state&&(e=we(i)),e){c=!0;const t=()=>{e=we(i),e&&r.to(Object.assign(Object.assign({},y),e))};l.on("refresh",(()=>{t()})),r.easing(tween_c.Easings.EaseOut).duration(350).from(Object.assign({},l.getTransform())).to(Object.assign(Object.assign({},y),e)).start(),(null==s?void 0:s.getAnimations())&&(s.style.animationPlayState="paused",requestAnimationFrame((()=>{t()})))}}const d=(null==i?void 0:i.htmlEl)||(null===(o=null==i?void 0:i.panzoomRef)||void 0===o?void 0:o.getWrapper());d&&O(d),!c&&a&&d&&(u=!0,R(d,a,(()=>{ke()}))),c||u?setTimeout((()=>{ke()}),350):ke()}function ke(){var e,t,n,o,i;if(W===_.Destroyed)return;W=_.Destroyed;const l=xe();te("destroy"),null===(t=null===(e=J("sync"))||void 0===e?void 0:e.getPlugins().Autoplay)||void 0===t||t.resume(),null===(o=null===(n=J("sync"))||void 0===n?void 0:n.getPlugins().Autoscroll)||void 0===o||o.resume(),r instanceof HTMLDialogElement&&r.close(),null===(i=null==B?void 0:B.getContainer())||void 0===i||i.classList.remove("is-idle"),null==B||B.destroy();for(const e of Object.values(U))null==e||e.destroy();if(U={},null==r||r.remove(),r=void 0,T=void 0,B=void 0,H.delete(K),!H.size&&(scrollLock_t(!1),document.documentElement.classList.remove(D),J("placeFocusBack")))try{null==l||l.focus({preventScroll:!0})}catch(e){}}const Oe={close:Ae,destroy:ke,getCarousel:function(){return B},getContainer:function(){return T},getId:function(){return K},getOptions:function(){return $},getPlugins:function(){return U},getSlide:function(){return Ee()},getState:function(){return W},init:function(e=[],t={}){return ne(e,t),Oe},isCurrentSlide:function(e){const t=Ee();return!(!e||!t)&&t.index===e.index},isTopMost:function(){return be()},off:function(e,t){return ee.has(e)&&ee.set(e,ee.get(e).filter((e=>e!==t))),Oe},on:function(e,t){return ee.set(e,[...ee.get(e)||[],t]),Oe},toggleIdle(e){(G||!0===e)&&Pe(),G&&!1!==e||Ce()}};return Oe};const q={Plugins:{Hash:fancybox_hash_d},version:"6.1.0",openers:new Map,bind:function(e,n,o){if(!canUseDOM_e())return;let i=document.body,s="[data-fancybox]",l={};if(isString_t(e)?(i=document.body,s=e,"object"==typeof n&&(l=n||{})):e instanceof Element&&(i=e,isString_t(n)&&(s=n),"object"==typeof o&&(l=o||{})),!(i&&i instanceof Element&&s))return!1;const a=q.openers.get(i)||new Map;if(a.set(s,l),q.openers.set(i,a),1===a.size){i.addEventListener("click",q.fromEvent);for(const e of Object.values(q.Plugins)){const t=e.setup;"function"==typeof t&&t(q)}}return!0},close:function(e=!0,...t){if(e)for(const e of H.values())e.close(...t);else{const e=q.getInstance();e&&e.close(...t)}},destroy:function(){let e;for(;e=q.getInstance();)e.destroy();for(const e of q.openers.keys())e.removeEventListener("click",q.fromEvent);q.openers.clear()},fromEvent:function(e){var t,n,o;if(e.defaultPrevented)return;if(e.button&&0!==e.button)return;if(e.ctrlKey||e.metaKey||e.shiftKey)return;let i=e.composedPath()[0];if(i.closest(".fancybox__container.is-hiding"))return fancybox_k(e),void e.stopPropagation();const s=i.closest("[data-fancybox-delegate]")||void 0;if(s){const e=s.dataset.fancyboxDelegate||"",t=document.querySelectorAll(`[data-fancybox="${e}"]`);i=t[parseInt(s.dataset.fancyboxIndex||"",10)||0]||t[0]}if(!(i&&i instanceof Element))return;let r,a,c={};for(const[e,t]of q.openers)if(t&&e.contains(i))for(const[n,o]of t){let t=null;try{t=i.closest(n)}catch(e){}t&&(i=t,r=e,a=n,extend_r(c,o||{}))}if(!r||!a)return;fancybox_k(e);const u=extend_r({},I,{triggerEvent:e,triggerEl:i,delegateEl:s},c),d=u.groupAll,f=u.groupAttr,m=f&&i?i.getAttribute(`${f}`):"";let g=[];const p=null===(t=i.closest(".f-carousel"))||void 0===t?void 0:t.carousel;if(p){const e=[];for(const t of null==p?void 0:p.getSlides()){const n=t.el;n&&(n.matches(a)?e.push(n):e.push(...[].slice.call(n.querySelectorAll(a))))}e.length&&(g=[...e],null===(n=p.getPlugins().Autoplay)||void 0===n||n.pause(),null===(o=p.getPlugins().Autoscroll)||void 0===o||o.pause(),u.sync=p)}else(!i||m||d)&&(g=[].slice.call(r.querySelectorAll(a)));if(i&&!d&&(g=f&&m?g.filter((e=>e.getAttribute(`${f}`)===m)):[i]),!g.length)return;const v=q.getInstance();if(v){const e=v.getOptions().triggerEl;if(e&&g.indexOf(e)>-1)return}return Object.assign({},u.Carousel||{}).rtl&&(g=g.reverse()),i&&(u.startIndex=g.indexOf(i)),q.fromNodes(g,u)},fromNodes:function(e,t){t=extend_r({},I,t||{});const n=[],o=e=>e instanceof HTMLImageElement?e:e instanceof HTMLElement?e.querySelector("img:not([aria-hidden])"):void 0;for(const i of e){const s=i.dataset||{},l=t.delegateEl&&e.indexOf(i)===t.startIndex?t.delegateEl:void 0,r=o(l)||o(i)||void 0,a=s.src||i.getAttribute("href")||i.getAttribute("currentSrc")||i.getAttribute("src")||void 0,c=s.thumb||s.thumbSrc||(null==r?void 0:r.getAttribute("currentSrc"))||(null==r?void 0:r.getAttribute("src"))||(null==r?void 0:r.dataset.lazySrc)||void 0,u={src:a,alt:s.alt||(null==r?void 0:r.getAttribute("alt"))||void 0,thumbSrc:c,thumbEl:r,triggerEl:i,delegateEl:l};for(const e in s){let t=s[e]+"";t="false"!==t&&("true"===t||t),u[e]=t}n.push(u)}return q.show(n,t)},fromSelector:function(e,n,o){let i=document.body,s="",r={};if(isString_t(e)?s=e:e instanceof Element&&(i=e,isString_t(n)&&(s=n),"object"==typeof o&&(r=o||{})),!(i&&i instanceof Element&&s))return;const a=q.openers.get(i);return a?(r=extend_r({},a.get(s)||{},r),r?q.fromNodes(Array.from(i.querySelectorAll(s)),r):void 0):void 0},getCarousel:function(){var e;return(null===(e=q.getInstance())||void 0===e?void 0:e.getCarousel())||void 0},getDefaults:function(){return I},getInstance:function(e){if(e){const t=H.get(e);return t&&t.getState()!==_.Destroyed?t:void 0}return Array.from(H.values()).reverse().find((e=>{if(e.getState()!==_.Destroyed)return e}))||void 0},getSlide:function(){var e;return(null===(e=q.getInstance())||void 0===e?void 0:e.getSlide())||void 0},show:function(e=[],t={}){return B().init(e,t)},unbind:function(e,n){let o=document.body,i="";if(isString_t(e)?i=e:e instanceof Element&&(o=e,isString_t(n)&&(i=n)),o){const e=q.openers.get(o);e&&i&&e.delete(i),(null==e?void 0:e.size)&&i||q.openers.delete(o),o.removeEventListener("click",q.fromEvent)}}};

;// ./node_modules/@fancyapps/ui/dist/fancybox/index.js
/*! License details at fancyapps.com/license */


;// ./src/js/common.js







// Функции

// Единицы высоты (ширины) экрана
function updateVH() {
  var _ref = window.visualViewport || {},
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? window.innerHeight : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? window.innerWidth : _ref$width;
  document.documentElement.style.setProperty('--vh', "".concat(height * 0.01, "px"));
  ['resize', 'orientationchange'].forEach(function (event) {
    window.addEventListener(event, throttle(updateVH, 200), {
      passive: true
    });
  });
}

// Ширина скроллбара
var setScrollbarWidth = function setScrollbarWidth() {
  document.documentElement.style.setProperty('--sw', "".concat(window.innerWidth - document.documentElement.clientWidth, "px"));
};
var setHeader = function setHeader() {
  var header = document.querySelector('.header');
  if (!header) return;
  var headerList = header.querySelector('.header__list');
  var headerMenu = header.querySelector('.header__menu');
  var headerMainContainer = header.querySelector('.header__main-container');
  var headerBurger = header.querySelector('.header__burger');
  document.querySelectorAll(".header__list-item_sub-menu").forEach(function (item) {
    var btn = item.querySelector(".header__list-open");
    btn.addEventListener('click', function () {
      item.classList.toggle('is-open');
    });
  });
  if (window.matchMedia('(max-width: 960px)').matches) {
    headerMenu.appendChild(headerList);
  } else {
    headerMainContainer.appendChild(headerList);
    header.classList.remove('is-open');
  }
  window.addEventListener('scroll', {
    passive: true,
    handleEvent: function handleEvent() {
      if (window.scrollY > headerHeight) {
        header.classList.add('is-scroll');
      } else {
        header.classList.remove('is-scroll');
      }
    }
  });
  var headerHeight = header.offsetHeight;
  document.documentElement.style.setProperty('--header-height', "".concat(headerHeight, "px"));
  headerBurger.addEventListener('click', function () {
    header.classList.toggle('is-open');
  });
};
var setServicesTabs = function setServicesTabs() {
  var services = document.querySelector('.services');
  var tabsContainer = services.querySelector('.services__tabs-container');
  if (!services || !tabsContainer) return;
  var tabs = driveTabs({
    container: '.services__tabs-container',
    controls: '.services__tabs-btn',
    selects: '.services__tab',
    cls: 'active'
  });
};
var setAnswers = function setAnswers() {
  var answers = document.querySelector('.answers');
  if (!answers) return;
  var items = answers.querySelectorAll('.answers__item');
  items.forEach(function (item) {
    var title = item.querySelector('.answers__item-title');
    title.addEventListener('click', function () {
      items.forEach(function (item) {
        return item.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });
};
var setSwipers = function setSwipers() {
  var swiper = new Swiper('.gallery__swiper', {
    slidesPerView: 1.3,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2.3
      },
      768: {
        slidesPerView: 3.3
      },
      992: {
        slidesPerView: 4.3
      },
      1200: {
        slidesPerView: 5.3
      }
    }
  });
};
var setGallery = function setGallery() {
  q.bind('[data-fancybox="gallery"]', {});
};

// Запуск функций
updateVH();
setScrollbarWidth();
setServicesTabs();
setAnswers();
setSwipers();
setGallery();
setHeader();
window.addEventListener('resize', throttle(setHeader, 200), {
  passive: true
});
})();

/******/ })()
;