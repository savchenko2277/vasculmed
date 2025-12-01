/******/ (() => { // webpackBootstrap
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */

var Swiper = function () {
  "use strict";

  function e(e) {
    return null !== e && "object" == _typeof(e) && "constructor" in e && e.constructor === Object;
  }
  function t(s, i) {
    void 0 === s && (s = {}), void 0 === i && (i = {});
    var r = ["__proto__", "constructor", "prototype"];
    Object.keys(i).filter(function (e) {
      return r.indexOf(e) < 0;
    }).forEach(function (r) {
      void 0 === s[r] ? s[r] = i[r] : e(i[r]) && e(s[r]) && Object.keys(i[r]).length > 0 && t(s[r], i[r]);
    });
  }
  var s = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function i() {
    var e = "undefined" != typeof document ? document : {};
    return t(e, s), e;
  }
  var r = {
    document: s,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(e) {
      return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    }
  };
  function n() {
    var e = "undefined" != typeof window ? window : {};
    return t(e, r), e;
  }
  function a(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function o() {
    return Date.now();
  }
  function l(e, t) {
    void 0 === t && (t = "x");
    var s = n();
    var i, r, a;
    var o = function (e) {
      var t = n();
      var s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    }(e);
    return s.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (e) {
      return e.replace(",", ".");
    }).join(", ")), a = new s.WebKitCSSMatrix("none" === r ? "" : r)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (r = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (r = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0;
  }
  function d(e) {
    return "object" == _typeof(e) && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
  }
  function c() {
    var e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ["__proto__", "constructor", "prototype"];
    for (var _i = 1; _i < arguments.length; _i += 1) {
      var _r = _i < 0 || arguments.length <= _i ? void 0 : arguments[_i];
      if (null != _r && (s = _r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
        var _s = Object.keys(Object(_r)).filter(function (e) {
          return t.indexOf(e) < 0;
        });
        for (var _t = 0, _i2 = _s.length; _t < _i2; _t += 1) {
          var _i3 = _s[_t],
            _n = Object.getOwnPropertyDescriptor(_r, _i3);
          void 0 !== _n && _n.enumerable && (d(e[_i3]) && d(_r[_i3]) ? _r[_i3].__swiper__ ? e[_i3] = _r[_i3] : c(e[_i3], _r[_i3]) : !d(e[_i3]) && d(_r[_i3]) ? (e[_i3] = {}, _r[_i3].__swiper__ ? e[_i3] = _r[_i3] : c(e[_i3], _r[_i3])) : e[_i3] = _r[_i3]);
        }
      }
    }
    var s;
    return e;
  }
  function p(e, t, s) {
    e.style.setProperty(t, s);
  }
  function u(e) {
    var t = e.swiper,
      s = e.targetPosition,
      i = e.side;
    var r = n(),
      a = -t.translate;
    var o,
      l = null;
    var d = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(t.cssModeFrameID);
    var c = s > a ? "next" : "prev",
      p = function p(e, t) {
        return "next" === c && e >= t || "prev" === c && e <= t;
      },
      _u = function u() {
        o = new Date().getTime(), null === l && (l = o);
        var e = Math.max(Math.min((o - l) / d, 1), 0),
          n = .5 - Math.cos(e * Math.PI) / 2;
        var c = a + n * (s - a);
        if (p(c, s) && (c = s), t.wrapperEl.scrollTo(_defineProperty({}, i, c)), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(function () {
          t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo(_defineProperty({}, i, c));
        }), void r.cancelAnimationFrame(t.cssModeFrameID);
        t.cssModeFrameID = r.requestAnimationFrame(_u);
      };
    _u();
  }
  function h(e, t) {
    void 0 === t && (t = "");
    var s = n(),
      i = _toConsumableArray(e.children);
    return s.HTMLSlotElement && e instanceof HTMLSlotElement && i.push.apply(i, _toConsumableArray(e.assignedElements())), t ? i.filter(function (e) {
      return e.matches(t);
    }) : i;
  }
  function f(e) {
    try {
      return void console.warn(e);
    } catch (e) {}
  }
  function m(e, t) {
    var _s$classList;
    void 0 === t && (t = []);
    var s = document.createElement(e);
    return (_s$classList = s.classList).add.apply(_s$classList, _toConsumableArray(Array.isArray(t) ? t : function (e) {
      return void 0 === e && (e = ""), e.trim().split(" ").filter(function (e) {
        return !!e.trim();
      });
    }(t))), s;
  }
  function v(e, t) {
    return n().getComputedStyle(e, null).getPropertyValue(t);
  }
  function g(e) {
    var t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function w(e, t, s) {
    var i = n();
    return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth;
  }
  var S, T, b;
  function x() {
    return S || (S = function () {
      var e = n(),
        t = i();
      return {
        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
      };
    }()), S;
  }
  function y(e) {
    return void 0 === e && (e = {}), T || (T = function (e) {
      var _ref = void 0 === e ? {} : e,
        t = _ref.userAgent;
      var s = x(),
        i = n(),
        r = i.navigator.platform,
        a = t || i.navigator.userAgent,
        o = {
          ios: !1,
          android: !1
        },
        l = i.screen.width,
        d = i.screen.height,
        c = a.match(/(Android);?[\s\/]+([\d.]+)?/);
      var p = a.match(/(iPad).*OS\s([\d_]+)/);
      var u = a.match(/(iPod)(.*OS\s([\d_]+))?/),
        h = !p && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        f = "Win32" === r;
      var m = "MacIntel" === r;
      return !p && m && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(d)) >= 0 && (p = a.match(/(Version)\/([\d.]+)/), p || (p = [0, 1, "13_0_0"]), m = !1), c && !f && (o.os = "android", o.android = !0), (p || h || u) && (o.os = "ios", o.ios = !0), o;
    }(e)), T;
  }
  function E() {
    return b || (b = function () {
      var e = n(),
        t = y();
      var s = !1;
      function i() {
        var t = e.navigator.userAgent.toLowerCase();
        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
      }
      if (i()) {
        var _t2 = String(e.navigator.userAgent);
        if (_t2.includes("Version/")) {
          var _t2$split$1$split$0$s = _t2.split("Version/")[1].split(" ")[0].split(".").map(function (e) {
              return Number(e);
            }),
            _t2$split$1$split$0$s2 = _slicedToArray(_t2$split$1$split$0$s, 2),
            _e = _t2$split$1$split$0$s2[0],
            _i4 = _t2$split$1$split$0$s2[1];
          s = _e < 16 || 16 === _e && _i4 < 2;
        }
      }
      var r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
        a = i();
      return {
        isSafari: s || a,
        needPerspectiveFix: s,
        need3dFix: a || r && t.ios,
        isWebView: r
      };
    }()), b;
  }
  var M = {
    on: function on(e, t, s) {
      var i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      var r = s ? "unshift" : "push";
      return e.split(" ").forEach(function (e) {
        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t);
      }), i;
    },
    once: function once(e, t, s) {
      var i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function r() {
        i.off(e, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
        t.apply(i, n);
      }
      return r.__emitterProxy = t, i.on(e, r, s);
    },
    onAny: function onAny(e, t) {
      var s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      var i = t ? "unshift" : "push";
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s;
    },
    offAny: function offAny(e) {
      var t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      var s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off: function off(e, t) {
      var s = this;
      return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach(function (e) {
        void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(function (i, r) {
          (i === t || i.__emitterProxy && i.__emitterProxy === t) && s.eventsListeners[e].splice(r, 1);
        });
      }), s) : s;
    },
    emit: function emit() {
      var e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      var t, s, i;
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
      "string" == typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), i = e) : (t = n[0].events, s = n[0].data, i = n[0].context || e), s.unshift(i);
      return (Array.isArray(t) ? t : t.split(" ")).forEach(function (t) {
        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(function (e) {
          e.apply(i, [t].concat(_toConsumableArray(s)));
        }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(function (e) {
          e.apply(i, s);
        });
      }), e;
    }
  };
  var P = function P(e, t, s) {
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  var C = function C(e, t, s) {
    t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s);
  };
  var I = function I(e, t) {
      if (!e || e.destroyed || !e.params) return;
      var s = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
      if (s) {
        var _t3 = s.querySelector(".".concat(e.params.lazyPreloaderClass));
        !_t3 && e.isElement && (s.shadowRoot ? _t3 = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame(function () {
          s.shadowRoot && (_t3 = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)), _t3 && _t3.remove());
        })), _t3 && _t3.remove();
      }
    },
    L = function L(e, t) {
      if (!e.slides[t]) return;
      var s = e.slides[t].querySelector('[loading="lazy"]');
      s && s.removeAttribute("loading");
    },
    k = function k(e) {
      if (!e || e.destroyed || !e.params) return;
      var t = e.params.lazyPreloadPrevNext;
      var s = e.slides.length;
      if (!s || !t || t < 0) return;
      t = Math.min(t, s);
      var i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
        r = e.activeIndex;
      if (e.params.grid && e.params.grid.rows > 1) {
        var _s2 = r,
          _n2 = [_s2 - t];
        return _n2.push.apply(_n2, _toConsumableArray(Array.from({
          length: t
        }).map(function (e, t) {
          return _s2 + i + t;
        }))), void e.slides.forEach(function (t, s) {
          _n2.includes(t.column) && L(e, s);
        });
      }
      var n = r + i - 1;
      if (e.params.rewind || e.params.loop) for (var _i5 = r - t; _i5 <= n + t; _i5 += 1) {
        var _t4 = (_i5 % s + s) % s;
        (_t4 < r || _t4 > n) && L(e, _t4);
      } else for (var _i6 = Math.max(r - t, 0); _i6 <= Math.min(n + t, s - 1); _i6 += 1) _i6 !== r && (_i6 > n || _i6 < r) && L(e, _i6);
    };
  var O = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var i = e.el;
      t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(v(i, "padding-left") || 0, 10) - parseInt(v(i, "padding-right") || 0, 10), s = s - parseInt(v(i, "padding-top") || 0, 10) - parseInt(v(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this;
      function t(t, s) {
        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0);
      }
      var s = e.params,
        i = e.wrapperEl,
        r = e.slidesEl,
        n = e.size,
        a = e.rtlTranslate,
        o = e.wrongRTL,
        l = e.virtual && s.virtual.enabled,
        d = l ? e.virtual.slides.length : e.slides.length,
        c = h(r, ".".concat(e.params.slideClass, ", swiper-slide")),
        u = l ? e.virtual.slides.length : c.length;
      var f = [];
      var m = [],
        g = [];
      var S = s.slidesOffsetBefore;
      "function" == typeof S && (S = s.slidesOffsetBefore.call(e));
      var T = s.slidesOffsetAfter;
      "function" == typeof T && (T = s.slidesOffsetAfter.call(e));
      var b = e.snapGrid.length,
        x = e.slidesGrid.length;
      var y = s.spaceBetween,
        E = -S,
        M = 0,
        P = 0;
      if (void 0 === n) return;
      "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * n : "string" == typeof y && (y = parseFloat(y)), e.virtualSize = -y, c.forEach(function (e) {
        a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = "";
      }), s.centeredSlides && s.cssMode && (p(i, "--swiper-centered-offset-before", ""), p(i, "--swiper-centered-offset-after", ""));
      var C = s.grid && s.grid.rows > 1 && e.grid;
      var I;
      C ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides();
      var L = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(function (e) {
        return void 0 !== s.breakpoints[e].slidesPerView;
      }).length > 0;
      for (var _i7 = 0; _i7 < u; _i7 += 1) {
        var _r2 = void 0;
        if (I = 0, c[_i7] && (_r2 = c[_i7]), C && e.grid.updateSlide(_i7, _r2, c), !c[_i7] || "none" !== v(_r2, "display")) {
          if ("auto" === s.slidesPerView) {
            L && (c[_i7].style[e.getDirectionLabel("width")] = "");
            var _n3 = getComputedStyle(_r2),
              _a = _r2.style.transform,
              _o = _r2.style.webkitTransform;
            if (_a && (_r2.style.transform = "none"), _o && (_r2.style.webkitTransform = "none"), s.roundLengths) I = e.isHorizontal() ? w(_r2, "width", !0) : w(_r2, "height", !0);else {
              var _e2 = t(_n3, "width"),
                _s3 = t(_n3, "padding-left"),
                _i8 = t(_n3, "padding-right"),
                _a2 = t(_n3, "margin-left"),
                _o2 = t(_n3, "margin-right"),
                _l = _n3.getPropertyValue("box-sizing");
              if (_l && "border-box" === _l) I = _e2 + _a2 + _o2;else {
                var _r3 = _r2,
                  _t5 = _r3.clientWidth,
                  _n4 = _r3.offsetWidth;
                I = _e2 + _s3 + _i8 + _a2 + _o2 + (_n4 - _t5);
              }
            }
            _a && (_r2.style.transform = _a), _o && (_r2.style.webkitTransform = _o), s.roundLengths && (I = Math.floor(I));
          } else I = (n - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (I = Math.floor(I)), c[_i7] && (c[_i7].style[e.getDirectionLabel("width")] = "".concat(I, "px"));
          c[_i7] && (c[_i7].swiperSlideSize = I), g.push(I), s.centeredSlides ? (E = E + I / 2 + M / 2 + y, 0 === M && 0 !== _i7 && (E = E - n / 2 - y), 0 === _i7 && (E = E - n / 2 - y), Math.abs(E) < .001 && (E = 0), s.roundLengths && (E = Math.floor(E)), P % s.slidesPerGroup == 0 && f.push(E), m.push(E)) : (s.roundLengths && (E = Math.floor(E)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup == 0 && f.push(E), m.push(E), E = E + I + y), e.virtualSize += I + y, M = I, P += 1;
        }
      }
      if (e.virtualSize = Math.max(e.virtualSize, n) + T, a && o && ("slide" === s.effect || "coverflow" === s.effect) && (i.style.width = "".concat(e.virtualSize + y, "px")), s.setWrapperSize && (i.style[e.getDirectionLabel("width")] = "".concat(e.virtualSize + y, "px")), C && e.grid.updateWrapperSize(I, f), !s.centeredSlides) {
        var _t6 = [];
        for (var _i9 = 0; _i9 < f.length; _i9 += 1) {
          var _r4 = f[_i9];
          s.roundLengths && (_r4 = Math.floor(_r4)), f[_i9] <= e.virtualSize - n && _t6.push(_r4);
        }
        f = _t6, Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - n);
      }
      if (l && s.loop) {
        var _t7 = g[0] + y;
        if (s.slidesPerGroup > 1) {
          var _i0 = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
            _r5 = _t7 * s.slidesPerGroup;
          for (var _e3 = 0; _e3 < _i0; _e3 += 1) f.push(f[f.length - 1] + _r5);
        }
        for (var _i1 = 0; _i1 < e.virtual.slidesBefore + e.virtual.slidesAfter; _i1 += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + _t7), m.push(m[m.length - 1] + _t7), e.virtualSize += _t7;
      }
      if (0 === f.length && (f = [0]), 0 !== y) {
        var _t8 = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
        c.filter(function (e, t) {
          return !(s.cssMode && !s.loop) || t !== c.length - 1;
        }).forEach(function (e) {
          e.style[_t8] = "".concat(y, "px");
        });
      }
      if (s.centeredSlides && s.centeredSlidesBounds) {
        var _e4 = 0;
        g.forEach(function (t) {
          _e4 += t + (y || 0);
        }), _e4 -= y;
        var _t9 = _e4 > n ? _e4 - n : 0;
        f = f.map(function (e) {
          return e <= 0 ? -S : e > _t9 ? _t9 + T : e;
        });
      }
      if (s.centerInsufficientSlides) {
        var _e5 = 0;
        g.forEach(function (t) {
          _e5 += t + (y || 0);
        }), _e5 -= y;
        var _t0 = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
        if (_e5 + _t0 < n) {
          var _s4 = (n - _e5 - _t0) / 2;
          f.forEach(function (e, t) {
            f[t] = e - _s4;
          }), m.forEach(function (e, t) {
            m[t] = e + _s4;
          });
        }
      }
      if (Object.assign(e, {
        slides: c,
        snapGrid: f,
        slidesGrid: m,
        slidesSizesGrid: g
      }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        p(i, "--swiper-centered-offset-before", -f[0] + "px"), p(i, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
        var _t1 = -e.snapGrid[0],
          _s5 = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(function (e) {
          return e + _t1;
        }), e.slidesGrid = e.slidesGrid.map(function (e) {
          return e + _s5;
        });
      }
      if (u !== d && e.emit("slidesLengthChange"), f.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== x && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(l || s.cssMode || "slide" !== s.effect && "fade" !== s.effect)) {
        var _t10 = "".concat(s.containerModifierClass, "backface-hidden"),
          _i10 = e.el.classList.contains(_t10);
        u <= s.maxBackfaceHiddenSlides ? _i10 || e.el.classList.add(_t10) : _i10 && e.el.classList.remove(_t10);
      }
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      var r,
        n = 0;
      "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      var a = function a(e) {
        return i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
      };
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
        if (t.params.centeredSlides) (t.visibleSlides || []).forEach(function (e) {
          s.push(e);
        });else for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
          var _e6 = t.activeIndex + r;
          if (_e6 > t.slides.length && !i) break;
          s.push(a(_e6));
        }
      } else s.push(a(t.activeIndex));
      for (r = 0; r < s.length; r += 1) if (void 0 !== s[r]) {
        var _e7 = s[r].offsetHeight;
        n = _e7 > n ? _e7 : n;
      }
      (n || 0 === n) && (t.wrapperEl.style.height = "".concat(n, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
        t = e.slides,
        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
      for (var _i11 = 0; _i11 < t.length; _i11 += 1) t[_i11].swiperSlideOffset = (e.isHorizontal() ? t[_i11].offsetLeft : t[_i11].offsetTop) - s - e.cssOverflowAdjustment();
    },
    updateSlidesProgress: function updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      var t = this,
        s = t.params,
        i = t.slides,
        r = t.rtlTranslate,
        n = t.snapGrid;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      var a = -e;
      r && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
      var o = s.spaceBetween;
      "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
      for (var _e8 = 0; _e8 < i.length; _e8 += 1) {
        var _l2 = i[_e8];
        var _d = _l2.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (_d -= i[0].swiperSlideOffset);
        var _c = (a + (s.centeredSlides ? t.minTranslate() : 0) - _d) / (_l2.swiperSlideSize + o),
          _p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - _d) / (_l2.swiperSlideSize + o),
          _u2 = -(a - _d),
          _h = _u2 + t.slidesSizesGrid[_e8],
          _f = _u2 >= 0 && _u2 <= t.size - t.slidesSizesGrid[_e8],
          _m = _u2 >= 0 && _u2 < t.size - 1 || _h > 1 && _h <= t.size || _u2 <= 0 && _h >= t.size;
        _m && (t.visibleSlides.push(_l2), t.visibleSlidesIndexes.push(_e8)), P(_l2, _m, s.slideVisibleClass), P(_l2, _f, s.slideFullyVisibleClass), _l2.progress = r ? -_c : _c, _l2.originalProgress = r ? -_p : _p;
      }
    },
    updateProgress: function updateProgress(e) {
      var t = this;
      if (void 0 === e) {
        var _s6 = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * _s6 || 0;
      }
      var s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      var r = t.progress,
        n = t.isBeginning,
        a = t.isEnd,
        o = t.progressLoop;
      var l = n,
        d = a;
      if (0 === i) r = 0, n = !0, a = !0;else {
        r = (e - t.minTranslate()) / i;
        var _s7 = Math.abs(e - t.minTranslate()) < 1,
          _o3 = Math.abs(e - t.maxTranslate()) < 1;
        n = _s7 || r <= 0, a = _o3 || r >= 1, _s7 && (r = 0), _o3 && (r = 1);
      }
      if (s.loop) {
        var _s8 = t.getSlideIndexByData(0),
          _i12 = t.getSlideIndexByData(t.slides.length - 1),
          _r6 = t.slidesGrid[_s8],
          _n5 = t.slidesGrid[_i12],
          _a3 = t.slidesGrid[t.slidesGrid.length - 1],
          _l3 = Math.abs(e);
        o = _l3 >= _r6 ? (_l3 - _r6) / _a3 : (_l3 + _a3 - _n5) / _a3, o > 1 && (o -= 1);
      }
      Object.assign(t, {
        progress: r,
        progressLoop: o,
        isBeginning: n,
        isEnd: a
      }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", r);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
        t = e.slides,
        s = e.params,
        i = e.slidesEl,
        r = e.activeIndex,
        n = e.virtual && s.virtual.enabled,
        a = e.grid && s.grid && s.grid.rows > 1,
        o = function o(e) {
          return h(i, ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e))[0];
        };
      var l, d, c;
      if (n) {
        if (s.loop) {
          var _t11 = r - e.virtual.slidesBefore;
          _t11 < 0 && (_t11 = e.virtual.slides.length + _t11), _t11 >= e.virtual.slides.length && (_t11 -= e.virtual.slides.length), l = o("[data-swiper-slide-index=\"".concat(_t11, "\"]"));
        } else l = o("[data-swiper-slide-index=\"".concat(r, "\"]"));
      } else a ? (l = t.find(function (e) {
        return e.column === r;
      }), c = t.find(function (e) {
        return e.column === r + 1;
      }), d = t.find(function (e) {
        return e.column === r - 1;
      })) : l = t[r];
      l && (a || (c = function (e, t) {
        var s = [];
        for (; e.nextElementSibling;) {
          var _i13 = e.nextElementSibling;
          t ? _i13.matches(t) && s.push(_i13) : s.push(_i13), e = _i13;
        }
        return s;
      }(l, ".".concat(s.slideClass, ", swiper-slide"))[0], s.loop && !c && (c = t[0]), d = function (e, t) {
        var s = [];
        for (; e.previousElementSibling;) {
          var _i14 = e.previousElementSibling;
          t ? _i14.matches(t) && s.push(_i14) : s.push(_i14), e = _i14;
        }
        return s;
      }(l, ".".concat(s.slideClass, ", swiper-slide"))[0], s.loop && 0 === !d && (d = t[t.length - 1]))), t.forEach(function (e) {
        C(e, e === l, s.slideActiveClass), C(e, e === c, s.slideNextClass), C(e, e === d, s.slidePrevClass);
      }), e.emitSlidesClasses();
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        i = t.snapGrid,
        r = t.params,
        n = t.activeIndex,
        a = t.realIndex,
        o = t.snapIndex;
      var l,
        d = e;
      var c = function c(e) {
        var s = e - t.virtual.slidesBefore;
        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s;
      };
      if (void 0 === d && (d = function (e) {
        var t = e.slidesGrid,
          s = e.params,
          i = e.rtlTranslate ? e.translate : -e.translate;
        var r;
        for (var _e9 = 0; _e9 < t.length; _e9 += 1) void 0 !== t[_e9 + 1] ? i >= t[_e9] && i < t[_e9 + 1] - (t[_e9 + 1] - t[_e9]) / 2 ? r = _e9 : i >= t[_e9] && i < t[_e9 + 1] && (r = _e9 + 1) : i >= t[_e9] && (r = _e9);
        return s.normalizeSlideIndex && (r < 0 || void 0 === r) && (r = 0), r;
      }(t)), i.indexOf(s) >= 0) l = i.indexOf(s);else {
        var _e0 = Math.min(r.slidesPerGroupSkip, d);
        l = _e0 + Math.floor((d - _e0) / r.slidesPerGroup);
      }
      if (l >= i.length && (l = i.length - 1), d === n && !t.params.loop) return void (l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
      if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void (t.realIndex = c(d));
      var p = t.grid && r.grid && r.grid.rows > 1;
      var u;
      if (t.virtual && r.virtual.enabled && r.loop) u = c(d);else if (p) {
        var _e1 = t.slides.find(function (e) {
          return e.column === d;
        });
        var _s9 = parseInt(_e1.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(_s9) && (_s9 = Math.max(t.slides.indexOf(_e1), 0)), u = Math.floor(_s9 / r.grid.rows);
      } else if (t.slides[d]) {
        var _e10 = t.slides[d].getAttribute("data-swiper-slide-index");
        u = _e10 ? parseInt(_e10, 10) : d;
      } else u = d;
      Object.assign(t, {
        previousSnapIndex: o,
        snapIndex: l,
        previousRealIndex: a,
        realIndex: u,
        previousIndex: n,
        activeIndex: d
      }), t.initialized && k(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"));
    },
    updateClickedSlide: function updateClickedSlide(e, t) {
      var s = this,
        i = s.params;
      var r = e.closest(".".concat(i.slideClass, ", swiper-slide"));
      !r && s.isElement && t && t.length > 1 && t.includes(e) && _toConsumableArray(t.slice(t.indexOf(e) + 1, t.length)).forEach(function (e) {
        !r && e.matches && e.matches(".".concat(i.slideClass, ", swiper-slide")) && (r = e);
      });
      var n,
        a = !1;
      if (r) for (var _e11 = 0; _e11 < s.slides.length; _e11 += 1) if (s.slides[_e11] === r) {
        a = !0, n = _e11;
        break;
      }
      if (!r || !a) return s.clickedSlide = void 0, void (s.clickedIndex = void 0);
      s.clickedSlide = r, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, i.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
    }
  };
  var A = {
    getTranslate: function getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        s = this.rtlTranslate,
        i = this.translate,
        r = this.wrapperEl;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      var n = l(r, e);
      return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
        i = s.rtlTranslate,
        r = s.params,
        n = s.wrapperEl,
        a = s.progress;
      var o,
        l = 0,
        d = 0;
      s.isHorizontal() ? l = i ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, r.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : r.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = "translate3d(".concat(l, "px, ").concat(d, "px, 0px)"));
      var c = s.maxTranslate() - s.minTranslate();
      o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function translateTo(e, t, s, i, r) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === i && (i = !0);
      var n = this,
        a = n.params,
        o = n.wrapperEl;
      if (n.animating && a.preventInteractionOnTransition) return !1;
      var l = n.minTranslate(),
        d = n.maxTranslate();
      var c;
      if (c = i && e > l ? l : i && e < d ? d : e, n.updateProgress(c), a.cssMode) {
        var _e12 = n.isHorizontal();
        if (0 === t) o[_e12 ? "scrollLeft" : "scrollTop"] = -c;else {
          if (!n.support.smoothScroll) return u({
            swiper: n,
            targetPosition: -c,
            side: _e12 ? "left" : "top"
          }), !0;
          o.scrollTo(_defineProperty(_defineProperty({}, _e12 ? "left" : "top", -c), "behavior", "smooth"));
        }
        return !0;
      }
      return 0 === t ? (n.setTransition(0), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(c), s && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"));
      }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
    }
  };
  function z(e) {
    var t = e.swiper,
      s = e.runCallbacks,
      i = e.direction,
      r = e.step;
    var n = t.activeIndex,
      a = t.previousIndex;
    var o = i;
    o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit("transition".concat(r)), s && "reset" === o ? t.emit("slideResetTransition".concat(r)) : s && n !== a && (t.emit("slideChangeTransition".concat(r)), "next" === o ? t.emit("slideNextTransition".concat(r)) : t.emit("slidePrevTransition".concat(r)));
  }
  var G = {
    slideTo: function slideTo(e, t, s, i, r) {
      void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e && (e = parseInt(e, 10));
      var n = this;
      var a = e;
      a < 0 && (a = 0);
      var o = n.params,
        l = n.snapGrid,
        d = n.slidesGrid,
        c = n.previousIndex,
        p = n.activeIndex,
        h = n.rtlTranslate,
        f = n.wrapperEl,
        m = n.enabled;
      if (!m && !i && !r || n.destroyed || n.animating && o.preventInteractionOnTransition) return !1;
      void 0 === t && (t = n.params.speed);
      var v = Math.min(n.params.slidesPerGroupSkip, a);
      var g = v + Math.floor((a - v) / n.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1);
      var w = -l[g];
      if (o.normalizeSlideIndex) for (var _e13 = 0; _e13 < d.length; _e13 += 1) {
        var _t12 = -Math.floor(100 * w),
          _s0 = Math.floor(100 * d[_e13]),
          _i15 = Math.floor(100 * d[_e13 + 1]);
        void 0 !== d[_e13 + 1] ? _t12 >= _s0 && _t12 < _i15 - (_i15 - _s0) / 2 ? a = _e13 : _t12 >= _s0 && _t12 < _i15 && (a = _e13 + 1) : _t12 >= _s0 && (a = _e13);
      }
      if (n.initialized && a !== p) {
        if (!n.allowSlideNext && (h ? w > n.translate && w > n.minTranslate() : w < n.translate && w < n.minTranslate())) return !1;
        if (!n.allowSlidePrev && w > n.translate && w > n.maxTranslate() && (p || 0) !== a) return !1;
      }
      var S;
      a !== (c || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(w), S = a > p ? "next" : a < p ? "prev" : "reset";
      var T = n.virtual && n.params.virtual.enabled;
      if (!(T && r) && (h && -w === n.translate || !h && w === n.translate)) return n.updateActiveIndex(a), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(w), "reset" !== S && (n.transitionStart(s, S), n.transitionEnd(s, S)), !1;
      if (o.cssMode) {
        var _e14 = n.isHorizontal(),
          _s1 = h ? w : -w;
        if (0 === t) T && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), T && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(function () {
          f[_e14 ? "scrollLeft" : "scrollTop"] = _s1;
        })) : f[_e14 ? "scrollLeft" : "scrollTop"] = _s1, T && requestAnimationFrame(function () {
          n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
        });else {
          if (!n.support.smoothScroll) return u({
            swiper: n,
            targetPosition: _s1,
            side: _e14 ? "left" : "top"
          }), !0;
          f.scrollTo(_defineProperty(_defineProperty({}, _e14 ? "left" : "top", _s1), "behavior", "smooth"));
        }
        return !0;
      }
      var b = E().isSafari;
      return T && !r && b && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(t), n.setTranslate(w), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, S), 0 === t ? n.transitionEnd(s, S) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (e) {
        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, S));
      }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
    },
    slideToLoop: function slideToLoop(e, t, s, i) {
      if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" == typeof e) {
        e = parseInt(e, 10);
      }
      var r = this;
      if (r.destroyed) return;
      void 0 === t && (t = r.params.speed);
      var n = r.grid && r.params.grid && r.params.grid.rows > 1;
      var a = e;
      if (r.params.loop) if (r.virtual && r.params.virtual.enabled) a += r.virtual.slidesBefore;else {
        var _e15;
        if (n) {
          var _t13 = a * r.params.grid.rows;
          _e15 = r.slides.find(function (e) {
            return 1 * e.getAttribute("data-swiper-slide-index") === _t13;
          }).column;
        } else _e15 = r.getSlideIndexByData(a);
        var _t14 = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
          _s10 = r.params.centeredSlides;
        var _o4 = r.params.slidesPerView;
        "auto" === _o4 ? _o4 = r.slidesPerViewDynamic() : (_o4 = Math.ceil(parseFloat(r.params.slidesPerView, 10)), _s10 && _o4 % 2 == 0 && (_o4 += 1));
        var _l4 = _t14 - _e15 < _o4;
        if (_s10 && (_l4 = _l4 || _e15 < Math.ceil(_o4 / 2)), i && _s10 && "auto" !== r.params.slidesPerView && !n && (_l4 = !1), _l4) {
          var _i16 = _s10 ? _e15 < r.activeIndex ? "prev" : "next" : _e15 - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
          r.loopFix({
            direction: _i16,
            slideTo: !0,
            activeSlideIndex: "next" === _i16 ? _e15 + 1 : _e15 - _t14 + 1,
            slideRealIndex: "next" === _i16 ? r.realIndex : void 0
          });
        }
        if (n) {
          var _e16 = a * r.params.grid.rows;
          a = r.slides.find(function (t) {
            return 1 * t.getAttribute("data-swiper-slide-index") === _e16;
          }).column;
        } else a = r.getSlideIndexByData(a);
      }
      return requestAnimationFrame(function () {
        r.slideTo(a, t, s, i);
      }), r;
    },
    slideNext: function slideNext(e, t, s) {
      void 0 === t && (t = !0);
      var i = this,
        r = i.enabled,
        n = i.params,
        a = i.animating;
      if (!r || i.destroyed) return i;
      void 0 === e && (e = i.params.speed);
      var o = n.slidesPerGroup;
      "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      var l = i.activeIndex < n.slidesPerGroupSkip ? 1 : o,
        d = i.virtual && n.virtual.enabled;
      if (n.loop) {
        if (a && !d && n.loopPreventsSliding) return !1;
        if (i.loopFix({
          direction: "next"
        }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode) return requestAnimationFrame(function () {
          i.slideTo(i.activeIndex + l, e, t, s);
        }), !0;
      }
      return n.rewind && i.isEnd ? i.slideTo(0, e, t, s) : i.slideTo(i.activeIndex + l, e, t, s);
    },
    slidePrev: function slidePrev(e, t, s) {
      void 0 === t && (t = !0);
      var i = this,
        r = i.params,
        n = i.snapGrid,
        a = i.slidesGrid,
        o = i.rtlTranslate,
        l = i.enabled,
        d = i.animating;
      if (!l || i.destroyed) return i;
      void 0 === e && (e = i.params.speed);
      var c = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (d && !c && r.loopPreventsSliding) return !1;
        i.loopFix({
          direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft;
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var u = p(o ? i.translate : -i.translate),
        h = n.map(function (e) {
          return p(e);
        }),
        f = r.freeMode && r.freeMode.enabled;
      var m = n[h.indexOf(u) - 1];
      if (void 0 === m && (r.cssMode || f)) {
        var _e17;
        n.forEach(function (t, s) {
          u >= t && (_e17 = s);
        }), void 0 !== _e17 && (m = f ? n[_e17] : n[_e17 > 0 ? _e17 - 1 : _e17]);
      }
      var v = 0;
      if (void 0 !== m && (v = a.indexOf(m), v < 0 && (v = i.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), r.rewind && i.isBeginning) {
        var _r7 = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(_r7, e, t, s);
      }
      return r.loop && 0 === i.activeIndex && r.cssMode ? (requestAnimationFrame(function () {
        i.slideTo(v, e, t, s);
      }), !0) : i.slideTo(v, e, t, s);
    },
    slideReset: function slideReset(e, t, s) {
      void 0 === t && (t = !0);
      var i = this;
      if (!i.destroyed) return void 0 === e && (e = i.params.speed), i.slideTo(i.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest(e, t, s, i) {
      void 0 === t && (t = !0), void 0 === i && (i = .5);
      var r = this;
      if (r.destroyed) return;
      void 0 === e && (e = r.params.speed);
      var n = r.activeIndex;
      var a = Math.min(r.params.slidesPerGroupSkip, n),
        o = a + Math.floor((n - a) / r.params.slidesPerGroup),
        l = r.rtlTranslate ? r.translate : -r.translate;
      if (l >= r.snapGrid[o]) {
        var _e18 = r.snapGrid[o];
        l - _e18 > (r.snapGrid[o + 1] - _e18) * i && (n += r.params.slidesPerGroup);
      } else {
        var _e19 = r.snapGrid[o - 1];
        l - _e19 <= (r.snapGrid[o] - _e19) * i && (n -= r.params.slidesPerGroup);
      }
      return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this;
      if (e.destroyed) return;
      var t = e.params,
        s = e.slidesEl,
        i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var r,
        n = e.getSlideIndexWhenGrid(e.clickedIndex);
      var o = e.isElement ? "swiper-slide" : ".".concat(t.slideClass),
        l = e.grid && e.params.grid && e.params.grid.rows > 1;
      if (t.loop) {
        if (e.animating) return;
        r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(r) : n > (l ? (e.slides.length - i) / 2 - (e.params.grid.rows - 1) : e.slides.length - i) ? (e.loopFix(), n = e.getSlideIndex(h(s, "".concat(o, "[data-swiper-slide-index=\"").concat(r, "\"]"))[0]), a(function () {
          e.slideTo(n);
        })) : e.slideTo(n);
      } else e.slideTo(n);
    }
  };
  var _ = {
    loopCreate: function loopCreate(e, t) {
      var s = this,
        i = s.params,
        r = s.slidesEl;
      if (!i.loop || s.virtual && s.params.virtual.enabled) return;
      var n = function n() {
          h(r, ".".concat(i.slideClass, ", swiper-slide")).forEach(function (e, t) {
            e.setAttribute("data-swiper-slide-index", t);
          });
        },
        a = s.grid && i.grid && i.grid.rows > 1;
      i.loopAddBlankSlides && (i.slidesPerGroup > 1 || a) && function () {
        var e = h(r, ".".concat(i.slideBlankClass));
        e.forEach(function (e) {
          e.remove();
        }), e.length > 0 && (s.recalcSlides(), s.updateSlides());
      }();
      var o = i.slidesPerGroup * (a ? i.grid.rows : 1),
        l = s.slides.length % o != 0,
        d = a && s.slides.length % i.grid.rows != 0,
        c = function c(e) {
          for (var _t15 = 0; _t15 < e; _t15 += 1) {
            var _e20 = s.isElement ? m("swiper-slide", [i.slideBlankClass]) : m("div", [i.slideClass, i.slideBlankClass]);
            s.slidesEl.append(_e20);
          }
        };
      if (l) {
        if (i.loopAddBlankSlides) {
          c(o - s.slides.length % o), s.recalcSlides(), s.updateSlides();
        } else f("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n();
      } else if (d) {
        if (i.loopAddBlankSlides) {
          c(i.grid.rows - s.slides.length % i.grid.rows), s.recalcSlides(), s.updateSlides();
        } else f("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        n();
      } else n();
      s.loopFix({
        slideRealIndex: e,
        direction: i.centeredSlides ? void 0 : "next",
        initial: t
      });
    },
    loopFix: function loopFix(e) {
      var _ref2 = void 0 === e ? {} : e,
        t = _ref2.slideRealIndex,
        _ref2$slideTo = _ref2.slideTo,
        s = _ref2$slideTo === void 0 ? !0 : _ref2$slideTo,
        i = _ref2.direction,
        r = _ref2.setTranslate,
        n = _ref2.activeSlideIndex,
        a = _ref2.initial,
        o = _ref2.byController,
        l = _ref2.byMousewheel;
      var d = this;
      if (!d.params.loop) return;
      d.emit("beforeLoopFix");
      var c = d.slides,
        p = d.allowSlidePrev,
        u = d.allowSlideNext,
        h = d.slidesEl,
        m = d.params,
        v = m.centeredSlides,
        g = m.initialSlide;
      if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && m.virtual.enabled) return s && (m.centeredSlides || 0 !== d.snapIndex ? m.centeredSlides && d.snapIndex < m.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0) : d.slideTo(d.virtual.slides.length, 0, !1, !0)), d.allowSlidePrev = p, d.allowSlideNext = u, void d.emit("loopFix");
      var w = m.slidesPerView;
      "auto" === w ? w = d.slidesPerViewDynamic() : (w = Math.ceil(parseFloat(m.slidesPerView, 10)), v && w % 2 == 0 && (w += 1));
      var S = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
      var T = v ? Math.max(S, Math.ceil(w / 2)) : S;
      T % S != 0 && (T += S - T % S), T += m.loopAdditionalSlides, d.loopedSlides = T;
      var b = d.grid && m.grid && m.grid.rows > 1;
      c.length < w + T || "cards" === d.params.effect && c.length < w + 2 * T ? f("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === m.grid.fill && f("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
      var x = [],
        y = [],
        E = b ? Math.ceil(c.length / m.grid.rows) : c.length,
        M = a && E - g < w && !v;
      var P = M ? g : d.activeIndex;
      void 0 === n ? n = d.getSlideIndex(c.find(function (e) {
        return e.classList.contains(m.slideActiveClass);
      })) : P = n;
      var C = "next" === i || !i,
        I = "prev" === i || !i;
      var L = 0,
        k = 0;
      var O = (b ? c[n].column : n) + (v && void 0 === r ? -w / 2 + .5 : 0);
      if (O < T) {
        L = Math.max(T - O, S);
        for (var _e21 = 0; _e21 < T - O; _e21 += 1) {
          var _t16 = _e21 - Math.floor(_e21 / E) * E;
          if (b) {
            var _e22 = E - _t16 - 1;
            for (var _t17 = c.length - 1; _t17 >= 0; _t17 -= 1) c[_t17].column === _e22 && x.push(_t17);
          } else x.push(E - _t16 - 1);
        }
      } else if (O + w > E - T) {
        k = Math.max(O - (E - 2 * T), S), M && (k = Math.max(k, w - E + g + 1));
        var _loop = function _loop() {
          var t = _e23 - Math.floor(_e23 / E) * E;
          b ? c.forEach(function (e, s) {
            e.column === t && y.push(s);
          }) : y.push(t);
        };
        for (var _e23 = 0; _e23 < k; _e23 += 1) {
          _loop();
        }
      }
      if (d.__preventObserver__ = !0, requestAnimationFrame(function () {
        d.__preventObserver__ = !1;
      }), "cards" === d.params.effect && c.length < w + 2 * T && (y.includes(n) && y.splice(y.indexOf(n), 1), x.includes(n) && x.splice(x.indexOf(n), 1)), I && x.forEach(function (e) {
        c[e].swiperLoopMoveDOM = !0, h.prepend(c[e]), c[e].swiperLoopMoveDOM = !1;
      }), C && y.forEach(function (e) {
        c[e].swiperLoopMoveDOM = !0, h.append(c[e]), c[e].swiperLoopMoveDOM = !1;
      }), d.recalcSlides(), "auto" === m.slidesPerView ? d.updateSlides() : b && (x.length > 0 && I || y.length > 0 && C) && d.slides.forEach(function (e, t) {
        d.grid.updateSlide(t, e, d.slides);
      }), m.watchSlidesProgress && d.updateSlidesOffset(), s) if (x.length > 0 && I) {
        if (void 0 === t) {
          var _e24 = d.slidesGrid[P],
            _t18 = d.slidesGrid[P + L] - _e24;
          l ? d.setTranslate(d.translate - _t18) : (d.slideTo(P + Math.ceil(L), 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - _t18, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - _t18));
        } else if (r) {
          var _e25 = b ? x.length / m.grid.rows : x.length;
          d.slideTo(d.activeIndex + _e25, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate;
        }
      } else if (y.length > 0 && C) if (void 0 === t) {
        var _e26 = d.slidesGrid[P],
          _t19 = d.slidesGrid[P - k] - _e26;
        l ? d.setTranslate(d.translate - _t19) : (d.slideTo(P - k, 0, !1, !0), r && (d.touchEventsData.startTranslate = d.touchEventsData.startTranslate - _t19, d.touchEventsData.currentTranslate = d.touchEventsData.currentTranslate - _t19));
      } else {
        var _e27 = b ? y.length / m.grid.rows : y.length;
        d.slideTo(d.activeIndex - _e27, 0, !1, !0);
      }
      if (d.allowSlidePrev = p, d.allowSlideNext = u, d.controller && d.controller.control && !o) {
        var _e28 = {
          slideRealIndex: t,
          direction: i,
          setTranslate: r,
          activeSlideIndex: n,
          byController: !0
        };
        Array.isArray(d.controller.control) ? d.controller.control.forEach(function (t) {
          !t.destroyed && t.params.loop && t.loopFix(_objectSpread(_objectSpread({}, _e28), {}, {
            slideTo: t.params.slidesPerView === m.slidesPerView && s
          }));
        }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix(_objectSpread(_objectSpread({}, _e28), {}, {
          slideTo: d.controller.control.params.slidesPerView === m.slidesPerView && s
        }));
      }
      d.emit("loopFix");
    },
    loopDestroy: function loopDestroy() {
      var e = this,
        t = e.params,
        s = e.slidesEl;
      if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
      e.recalcSlides();
      var i = [];
      e.slides.forEach(function (e) {
        var t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
        i[t] = e;
      }), e.slides.forEach(function (e) {
        e.removeAttribute("data-swiper-slide-index");
      }), i.forEach(function (e) {
        s.append(e);
      }), e.recalcSlides(), e.slideTo(e.realIndex, 0);
    }
  };
  function D(e, t, s) {
    var i = n(),
      r = e.params,
      a = r.edgeSwipeDetection,
      o = r.edgeSwipeThreshold;
    return !a || !(s <= o || s >= i.innerWidth - o) || "prevent" === a && (t.preventDefault(), !0);
  }
  function V(e) {
    var t = this,
      s = i();
    var r = e;
    r.originalEvent && (r = r.originalEvent);
    var a = t.touchEventsData;
    if ("pointerdown" === r.type) {
      if (null !== a.pointerId && a.pointerId !== r.pointerId) return;
      a.pointerId = r.pointerId;
    } else "touchstart" === r.type && 1 === r.targetTouches.length && (a.touchId = r.targetTouches[0].identifier);
    if ("touchstart" === r.type) return void D(t, r, r.targetTouches[0].pageX);
    var l = t.params,
      d = t.touches,
      c = t.enabled;
    if (!c) return;
    if (!l.simulateTouch && "mouse" === r.pointerType) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    var p = r.target;
    if ("wrapper" === l.touchEventsTarget && !function (e, t) {
      var s = n();
      var i = t.contains(e);
      !i && s.HTMLSlotElement && t instanceof HTMLSlotElement && (i = _toConsumableArray(t.assignedElements()).includes(e), i || (i = function (e, t) {
        var s = [t];
        for (; s.length > 0;) {
          var _t20 = s.shift();
          if (e === _t20) return !0;
          s.push.apply(s, _toConsumableArray(_t20.children).concat(_toConsumableArray(_t20.shadowRoot ? _t20.shadowRoot.children : []), _toConsumableArray(_t20.assignedElements ? _t20.assignedElements() : [])));
        }
      }(e, t)));
      return i;
    }(p, t.wrapperEl)) return;
    if ("which" in r && 3 === r.which) return;
    if ("button" in r && r.button > 0) return;
    if (a.isTouched && a.isMoved) return;
    var u = !!l.noSwipingClass && "" !== l.noSwipingClass,
      h = r.composedPath ? r.composedPath() : r.path;
    u && r.target && r.target.shadowRoot && h && (p = h[0]);
    var f = l.noSwipingSelector ? l.noSwipingSelector : ".".concat(l.noSwipingClass),
      m = !(!r.target || !r.target.shadowRoot);
    if (l.noSwiping && (m ? function (e, t) {
      return void 0 === t && (t = this), function t(s) {
        if (!s || s === i() || s === n()) return null;
        s.assignedSlot && (s = s.assignedSlot);
        var r = s.closest(e);
        return r || s.getRootNode ? r || t(s.getRootNode().host) : null;
      }(t);
    }(f, p) : p.closest(f))) return void (t.allowClick = !0);
    if (l.swipeHandler && !p.closest(l.swipeHandler)) return;
    d.currentX = r.pageX, d.currentY = r.pageY;
    var v = d.currentX,
      g = d.currentY;
    if (!D(t, r, v)) return;
    Object.assign(a, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0
    }), d.startX = v, d.startY = g, a.touchStartTime = o(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (a.allowThresholdMove = !1);
    var w = !0;
    p.matches(a.focusableElements) && (w = !1, "SELECT" === p.nodeName && (a.isTouched = !1)), s.activeElement && s.activeElement.matches(a.focusableElements) && s.activeElement !== p && ("mouse" === r.pointerType || "mouse" !== r.pointerType && !p.matches(a.focusableElements)) && s.activeElement.blur();
    var S = w && t.allowTouchMove && l.touchStartPreventDefault;
    !l.touchStartForcePreventDefault && !S || p.isContentEditable || r.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r);
  }
  function B(e) {
    var t = i(),
      s = this,
      r = s.touchEventsData,
      n = s.params,
      a = s.touches,
      l = s.rtlTranslate,
      d = s.enabled;
    if (!d) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    var c,
      p = e;
    if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
      if (null !== r.touchId) return;
      if (p.pointerId !== r.pointerId) return;
    }
    if ("touchmove" === p.type) {
      if (c = _toConsumableArray(p.changedTouches).find(function (e) {
        return e.identifier === r.touchId;
      }), !c || c.identifier !== r.touchId) return;
    } else c = p;
    if (!r.isTouched) return void (r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", p));
    var u = c.pageX,
      h = c.pageY;
    if (p.preventedByNestedSwiper) return a.startX = u, void (a.startY = h);
    if (!s.allowTouchMove) return p.target.matches(r.focusableElements) || (s.allowClick = !1), void (r.isTouched && (Object.assign(a, {
      startX: u,
      startY: h,
      currentX: u,
      currentY: h
    }), r.touchStartTime = o()));
    if (n.touchReleaseOnEdges && !n.loop) if (s.isVertical()) {
      if (h < a.startY && s.translate <= s.maxTranslate() || h > a.startY && s.translate >= s.minTranslate()) return r.isTouched = !1, void (r.isMoved = !1);
    } else {
      if (l && (u > a.startX && -s.translate <= s.maxTranslate() || u < a.startX && -s.translate >= s.minTranslate())) return;
      if (!l && (u < a.startX && s.translate <= s.maxTranslate() || u > a.startX && s.translate >= s.minTranslate())) return;
    }
    if (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(r.focusableElements)) return r.isMoved = !0, void (s.allowClick = !1);
    r.allowTouchCallbacks && s.emit("touchMove", p), a.previousX = a.currentX, a.previousY = a.currentY, a.currentX = u, a.currentY = h;
    var f = a.currentX - a.startX,
      m = a.currentY - a.startY;
    if (s.params.threshold && Math.sqrt(Math.pow(f, 2) + Math.pow(m, 2)) < s.params.threshold) return;
    if (void 0 === r.isScrolling) {
      var _e29;
      s.isHorizontal() && a.currentY === a.startY || s.isVertical() && a.currentX === a.startX ? r.isScrolling = !1 : f * f + m * m >= 25 && (_e29 = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, r.isScrolling = s.isHorizontal() ? _e29 > n.touchAngle : 90 - _e29 > n.touchAngle);
    }
    if (r.isScrolling && s.emit("touchMoveOpposite", p), void 0 === r.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (r.startMoving = !0)), r.isScrolling || "touchmove" === p.type && r.preventTouchMoveFromPointerMove) return void (r.isTouched = !1);
    if (!r.startMoving) return;
    s.allowClick = !1, !n.cssMode && p.cancelable && p.preventDefault(), n.touchMoveStopPropagation && !n.nested && p.stopPropagation();
    var v = s.isHorizontal() ? f : m,
      g = s.isHorizontal() ? a.currentX - a.previousX : a.currentY - a.previousY;
    n.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), a.diff = v, v *= n.touchRatio, l && (v = -v, g = -g);
    var w = s.touchesDirection;
    s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
    var S = s.params.loop && !n.cssMode,
      T = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
    if (!r.isMoved) {
      if (S && T && s.loopFix({
        direction: s.swipeDirection
      }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
        var _e30 = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: {
            bySwiperTouchMove: !0
          }
        });
        s.wrapperEl.dispatchEvent(_e30);
      }
      r.allowMomentumBounce = !1, !n.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p);
    }
    if (new Date().getTime(), !1 !== n._loopSwapReset && r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && S && T && Math.abs(v) >= 1) return Object.assign(a, {
      startX: u,
      startY: h,
      currentX: u,
      currentY: h,
      startTranslate: r.currentTranslate
    }), r.loopSwapReset = !0, void (r.startTranslate = r.currentTranslate);
    s.emit("sliderMove", p), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
    var b = !0,
      x = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (x = 0), v > 0 ? (S && T && r.allowThresholdMove && r.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== n.slidesPerView && s.slides.length - n.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
      direction: "prev",
      setTranslate: !0,
      activeSlideIndex: 0
    }), r.currentTranslate > s.minTranslate() && (b = !1, n.resistance && (r.currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + r.startTranslate + v, x)))) : v < 0 && (S && T && r.allowThresholdMove && r.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== n.slidesPerView && s.slides.length - n.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
      direction: "next",
      setTranslate: !0,
      activeSlideIndex: s.slides.length - ("auto" === n.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
    }), r.currentTranslate < s.maxTranslate() && (b = !1, n.resistance && (r.currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - r.startTranslate - v, x)))), b && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), n.threshold > 0) {
      if (!(Math.abs(v) > n.threshold || r.allowThresholdMove)) return void (r.currentTranslate = r.startTranslate);
      if (!r.allowThresholdMove) return r.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, r.currentTranslate = r.startTranslate, void (a.diff = s.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
    }
    n.followFinger && !n.cssMode && ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate));
  }
  function N(e) {
    var t = this,
      s = t.touchEventsData;
    var i,
      r = e;
    r.originalEvent && (r = r.originalEvent);
    if ("touchend" === r.type || "touchcancel" === r.type) {
      if (i = _toConsumableArray(r.changedTouches).find(function (e) {
        return e.identifier === s.touchId;
      }), !i || i.identifier !== s.touchId) return;
    } else {
      if (null !== s.touchId) return;
      if (r.pointerId !== s.pointerId) return;
      i = r;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type)) {
      if (!(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    }
    s.pointerId = null, s.touchId = null;
    var n = t.params,
      l = t.touches,
      d = t.rtlTranslate,
      c = t.slidesGrid,
      p = t.enabled;
    if (!p) return;
    if (!n.simulateTouch && "mouse" === r.pointerType) return;
    if (s.allowTouchCallbacks && t.emit("touchEnd", r), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var u = o(),
      h = u - s.touchStartTime;
    if (t.allowClick) {
      var _e31 = r.path || r.composedPath && r.composedPath();
      t.updateClickedSlide(_e31 && _e31[0] || r.target, _e31), t.emit("tap click", r), h < 300 && u - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
    }
    if (s.lastClickTime = o(), a(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === l.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var f;
    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = n.followFinger ? d ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
    if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
      currentPos: f
    });
    var m = f >= -t.maxTranslate() && !t.params.loop;
    var v = 0,
      g = t.slidesSizesGrid[0];
    for (var _e32 = 0; _e32 < c.length; _e32 += _e32 < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
      var _t21 = _e32 < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== c[_e32 + _t21] ? (m || f >= c[_e32] && f < c[_e32 + _t21]) && (v = _e32, g = c[_e32 + _t21] - c[_e32]) : (m || f >= c[_e32]) && (v = _e32, g = c[c.length - 1] - c[c.length - 2]);
    }
    var w = null,
      S = null;
    n.rewind && (t.isBeginning ? S = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (w = 0));
    var T = (f - c[v]) / g,
      b = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (h > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (T >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? w : v + b) : t.slideTo(v)), "prev" === t.swipeDirection && (T > 1 - n.longSwipesRatio ? t.slideTo(v + b) : null !== S && T < 0 && Math.abs(T) > n.longSwipesRatio ? t.slideTo(S) : t.slideTo(v));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl) ? r.target === t.navigation.nextEl ? t.slideTo(v + b) : t.slideTo(v) : ("next" === t.swipeDirection && t.slideTo(null !== w ? w : v + b), "prev" === t.swipeDirection && t.slideTo(null !== S ? S : v));
    }
  }
  function F() {
    var e = this,
      t = e.params,
      s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var i = e.allowSlideNext,
      r = e.allowSlidePrev,
      n = e.snapGrid,
      a = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    var o = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(function () {
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
    }, 500)), e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
  }
  function H(e) {
    var t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function $() {
    var e = this,
      t = e.wrapperEl,
      s = e.rtlTranslate,
      i = e.enabled;
    if (!i) return;
    var r;
    e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    var n = e.maxTranslate() - e.minTranslate();
    r = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, r !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
  }
  function R(e) {
    var t = this;
    I(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update();
  }
  function j() {
    var e = this;
    e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
  }
  var W = function W(e, t) {
    var s = i(),
      r = e.params,
      n = e.el,
      a = e.wrapperEl,
      o = e.device,
      l = !!r.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    n && "string" != typeof n && (s[d]("touchstart", e.onDocumentTouchStart, {
      passive: !1,
      capture: l
    }), n[d]("touchstart", e.onTouchStart, {
      passive: !1
    }), n[d]("pointerdown", e.onTouchStart, {
      passive: !1
    }), s[d]("touchmove", e.onTouchMove, {
      passive: !1,
      capture: l
    }), s[d]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: l
    }), s[d]("touchend", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerup", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointercancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("touchcancel", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerout", e.onTouchEnd, {
      passive: !0
    }), s[d]("pointerleave", e.onTouchEnd, {
      passive: !0
    }), s[d]("contextmenu", e.onTouchEnd, {
      passive: !0
    }), (r.preventClicks || r.preventClicksPropagation) && n[d]("click", e.onClick, !0), r.cssMode && a[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", F, !0) : e[c]("observerUpdate", F, !0), n[d]("load", e.onLoad, {
      capture: !0
    }));
  };
  var X = function X(e, t) {
    return e.grid && t.grid && t.grid.rows > 1;
  };
  var Y = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  function q(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      var i = Object.keys(s)[0],
        r = s[i];
      "object" == _typeof(r) && null !== r ? (!0 === e[i] && (e[i] = {
        enabled: !0
      }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in r ? ("object" != _typeof(e[i]) || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
        enabled: !1
      }), c(t, s)) : c(t, s)) : c(t, s);
    };
  }
  var U = {
      eventsEmitter: M,
      update: O,
      translate: A,
      transition: {
        setTransition: function setTransition(e, t) {
          var s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = "".concat(e, "ms"), s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t);
        },
        transitionStart: function transitionStart(e, t) {
          void 0 === e && (e = !0);
          var s = this,
            i = s.params;
          i.cssMode || (i.autoHeight && s.updateAutoHeight(), z({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "Start"
          }));
        },
        transitionEnd: function transitionEnd(e, t) {
          void 0 === e && (e = !0);
          var s = this,
            i = s.params;
          s.animating = !1, i.cssMode || (s.setTransition(0), z({
            swiper: s,
            runCallbacks: e,
            direction: t,
            step: "End"
          }));
        }
      },
      slide: G,
      loop: _,
      grabCursor: {
        setGrabCursor: function setGrabCursor(e) {
          var t = this;
          if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
          var s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(function () {
            t.__preventObserver__ = !1;
          });
        },
        unsetGrabCursor: function unsetGrabCursor() {
          var e = this;
          e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(function () {
            e.__preventObserver__ = !1;
          }));
        }
      },
      events: {
        attachEvents: function attachEvents() {
          var e = this,
            t = e.params;
          e.onTouchStart = V.bind(e), e.onTouchMove = B.bind(e), e.onTouchEnd = N.bind(e), e.onDocumentTouchStart = j.bind(e), t.cssMode && (e.onScroll = $.bind(e)), e.onClick = H.bind(e), e.onLoad = R.bind(e), W(e, "on");
        },
        detachEvents: function detachEvents() {
          W(this, "off");
        }
      },
      breakpoints: {
        setBreakpoint: function setBreakpoint() {
          var e = this,
            t = e.realIndex,
            s = e.initialized,
            r = e.params,
            n = e.el,
            a = r.breakpoints;
          if (!a || a && 0 === Object.keys(a).length) return;
          var o = i(),
            l = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
            d = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : o.querySelector(r.breakpointsBase),
            p = e.getBreakpoint(a, l, d);
          if (!p || e.currentBreakpoint === p) return;
          var u = (p in a ? a[p] : void 0) || e.originalParams,
            h = X(e, r),
            f = X(e, u),
            m = e.params.grabCursor,
            v = u.grabCursor,
            g = r.enabled;
          h && !f ? (n.classList.remove("".concat(r.containerModifierClass, "grid"), "".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !h && f && (n.classList.add("".concat(r.containerModifierClass, "grid")), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === r.grid.fill) && n.classList.add("".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()), m && !v ? e.unsetGrabCursor() : !m && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(function (t) {
            if (void 0 === u[t]) return;
            var s = r[t] && r[t].enabled,
              i = u[t] && u[t].enabled;
            s && !i && e[t].disable(), !s && i && e[t].enable();
          });
          var w = u.direction && u.direction !== r.direction,
            S = r.loop && (u.slidesPerView !== r.slidesPerView || w),
            T = r.loop;
          w && s && e.changeDirection(), c(e.params, u);
          var b = e.params.enabled,
            x = e.params.loop;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), g && !b ? e.disable() : !g && b && e.enable(), e.currentBreakpoint = p, e.emit("_beforeBreakpoint", u), s && (S ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !T && x ? (e.loopCreate(t), e.updateSlides()) : T && !x && e.loopDestroy()), e.emit("breakpoint", u);
        },
        getBreakpoint: function getBreakpoint(e, t, s) {
          if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
          var i = !1;
          var r = n(),
            a = "window" === t ? r.innerHeight : s.clientHeight,
            o = Object.keys(e).map(function (e) {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                var _t22 = parseFloat(e.substr(1));
                return {
                  value: a * _t22,
                  point: e
                };
              }
              return {
                value: e,
                point: e
              };
            });
          o.sort(function (e, t) {
            return parseInt(e.value, 10) - parseInt(t.value, 10);
          });
          for (var _e33 = 0; _e33 < o.length; _e33 += 1) {
            var _o$_e = o[_e33],
              _n6 = _o$_e.point,
              _a4 = _o$_e.value;
            "window" === t ? r.matchMedia("(min-width: ".concat(_a4, "px)")).matches && (i = _n6) : _a4 <= s.clientWidth && (i = _n6);
          }
          return i || "max";
        }
      },
      checkOverflow: {
        checkOverflow: function checkOverflow() {
          var e = this,
            t = e.isLocked,
            s = e.params,
            i = s.slidesOffsetBefore;
          if (i) {
            var _t23 = e.slides.length - 1,
              _s11 = e.slidesGrid[_t23] + e.slidesSizesGrid[_t23] + 2 * i;
            e.isLocked = e.size > _s11;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        }
      },
      classes: {
        addClasses: function addClasses() {
          var _r$classList;
          var e = this,
            t = e.classNames,
            s = e.params,
            i = e.rtl,
            r = e.el,
            n = e.device,
            a = function (e, t) {
              var s = [];
              return e.forEach(function (e) {
                "object" == _typeof(e) ? Object.keys(e).forEach(function (i) {
                  e[i] && s.push(t + i);
                }) : "string" == typeof e && s.push(t + e);
              }), s;
            }(["initialized", s.direction, {
              "free-mode": e.params.freeMode && s.freeMode.enabled
            }, {
              autoheight: s.autoHeight
            }, {
              rtl: i
            }, {
              grid: s.grid && s.grid.rows > 1
            }, {
              "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
            }, {
              android: n.android
            }, {
              ios: n.ios
            }, {
              "css-mode": s.cssMode
            }, {
              centered: s.cssMode && s.centeredSlides
            }, {
              "watch-progress": s.watchSlidesProgress
            }], s.containerModifierClass);
          t.push.apply(t, _toConsumableArray(a)), (_r$classList = r.classList).add.apply(_r$classList, _toConsumableArray(t)), e.emitContainerClasses();
        },
        removeClasses: function removeClasses() {
          var _e$classList;
          var e = this.el,
            t = this.classNames;
          e && "string" != typeof e && ((_e$classList = e.classList).remove.apply(_e$classList, _toConsumableArray(t)), this.emitContainerClasses());
        }
      }
    },
    K = {};
  var J = /*#__PURE__*/function () {
    function J() {
      var _r8, _r9, _o$modules;
      _classCallCheck(this, J);
      var e, t;
      for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
      1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : (_r8 = r, _r9 = _slicedToArray(_r8, 2), e = _r9[0], t = _r9[1], _r8), t || (t = {}), t = c({}, t), e && !t.el && (t.el = e);
      var a = i();
      if (t.el && "string" == typeof t.el && a.querySelectorAll(t.el).length > 1) {
        var _e34 = [];
        return a.querySelectorAll(t.el).forEach(function (s) {
          var i = c({}, t, {
            el: s
          });
          _e34.push(new J(i));
        }), _e34;
      }
      var o = this;
      o.__swiper__ = !0, o.support = x(), o.device = y({
        userAgent: t.userAgent
      }), o.browser = E(), o.eventsListeners = {}, o.eventsAnyListeners = [], o.modules = _toConsumableArray(o.__modules__), t.modules && Array.isArray(t.modules) && (_o$modules = o.modules).push.apply(_o$modules, _toConsumableArray(t.modules));
      var l = {};
      o.modules.forEach(function (e) {
        e({
          params: t,
          swiper: o,
          extendParams: q(t, l),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o)
        });
      });
      var d = c({}, Y, l);
      return o.params = c({}, d, K, t), o.originalParams = c({}, o.params), o.passedParams = c({}, t), o.params && o.params.on && Object.keys(o.params.on).forEach(function (e) {
        o.on(e, o.params.on[e]);
      }), o.params && o.params.onAny && o.onAny(o.params.onAny), Object.assign(o, {
        enabled: o.params.enabled,
        el: e,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === o.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === o.params.direction;
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment: function cssOverflowAdjustment() {
          return Math.trunc(this.translate / Math.pow(2, 23)) * Math.pow(2, 23);
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), o.emit("_swiper"), o.params.init && o.init(), o;
    }
    return _createClass(J, [{
      key: "getDirectionLabel",
      value: function getDirectionLabel(e) {
        return this.isHorizontal() ? e : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom"
        }[e];
      }
    }, {
      key: "getSlideIndex",
      value: function getSlideIndex(e) {
        var t = this.slidesEl,
          s = this.params,
          i = g(h(t, ".".concat(s.slideClass, ", swiper-slide"))[0]);
        return g(e) - i;
      }
    }, {
      key: "getSlideIndexByData",
      value: function getSlideIndexByData(e) {
        return this.getSlideIndex(this.slides.find(function (t) {
          return 1 * t.getAttribute("data-swiper-slide-index") === e;
        }));
      }
    }, {
      key: "getSlideIndexWhenGrid",
      value: function getSlideIndexWhenGrid(e) {
        return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e;
      }
    }, {
      key: "recalcSlides",
      value: function recalcSlides() {
        var e = this.slidesEl,
          t = this.params;
        this.slides = h(e, ".".concat(t.slideClass, ", swiper-slide"));
      }
    }, {
      key: "enable",
      value: function enable() {
        var e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
      }
    }, {
      key: "disable",
      value: function disable() {
        var e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
      }
    }, {
      key: "setProgress",
      value: function setProgress(e, t) {
        var s = this;
        e = Math.min(Math.max(e, 0), 1);
        var i = s.minTranslate(),
          r = (s.maxTranslate() - i) * e + i;
        s.translateTo(r, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = e.el.className.split(" ").filter(function (t) {
          return 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass);
        });
        e.emit("_containerClasses", t.join(" "));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(e) {
        var t = this;
        return t.destroyed ? "" : e.className.split(" ").filter(function (e) {
          return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass);
        }).join(" ");
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var e = this;
        if (!e.params._emitClasses || !e.el) return;
        var t = [];
        e.slides.forEach(function (s) {
          var i = e.getSlideClasses(s);
          t.push({
            slideEl: s,
            classNames: i
          }), e.emit("_slideClass", s, i);
        }), e.emit("_slideClasses", t);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        var s = this.params,
          i = this.slides,
          r = this.slidesGrid,
          n = this.slidesSizesGrid,
          a = this.size,
          o = this.activeIndex;
        var l = 1;
        if ("number" == typeof s.slidesPerView) return s.slidesPerView;
        if (s.centeredSlides) {
          var _e35,
            _t24 = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
          for (var _s12 = o + 1; _s12 < i.length; _s12 += 1) i[_s12] && !_e35 && (_t24 += Math.ceil(i[_s12].swiperSlideSize), l += 1, _t24 > a && (_e35 = !0));
          for (var _s13 = o - 1; _s13 >= 0; _s13 -= 1) i[_s13] && !_e35 && (_t24 += i[_s13].swiperSlideSize, l += 1, _t24 > a && (_e35 = !0));
        } else if ("current" === e) for (var _e36 = o + 1; _e36 < i.length; _e36 += 1) {
          (t ? r[_e36] + n[_e36] - r[o] < a : r[_e36] - r[o] < a) && (l += 1);
        } else for (var _e37 = o - 1; _e37 >= 0; _e37 -= 1) {
          r[o] - r[_e37] < a && (l += 1);
        }
        return l;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
          s = e.params;
        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        var r;
        if (s.breakpoints && e.setBreakpoint(), _toConsumableArray(e.el.querySelectorAll('[loading="lazy"]')).forEach(function (t) {
          t.complete && I(e, t);
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) i(), s.autoHeight && e.updateAutoHeight();else {
          if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
            var _t25 = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
            r = e.slideTo(_t25.length - 1, 0, !1, !0);
          } else r = e.slideTo(e.activeIndex, 0, !1, !0);
          r || i();
        }
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e, t) {
        void 0 === t && (t = !0);
        var s = this,
          i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove("".concat(s.params.containerModifierClass).concat(i)), s.el.classList.add("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach(function (t) {
          "vertical" === e ? t.style.width = "" : t.style.height = "";
        }), s.emit("changeDirection"), t && s.update()), s;
      }
    }, {
      key: "changeLanguageDirection",
      value: function changeLanguageDirection(e) {
        var t = this;
        t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update());
      }
    }, {
      key: "mount",
      value: function mount(e) {
        var t = this;
        if (t.mounted) return !0;
        var s = e || t.params.el;
        if ("string" == typeof s && (s = document.querySelector(s)), !s) return !1;
        s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
        var i = function i() {
          return ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
        };
        var r = function () {
          if (s && s.shadowRoot && s.shadowRoot.querySelector) {
            return s.shadowRoot.querySelector(i());
          }
          return h(s, i())[0];
        }();
        return !r && t.params.createElements && (r = m("div", t.params.wrapperClass), s.append(r), h(s, ".".concat(t.params.slideClass)).forEach(function (e) {
          r.append(e);
        })), Object.assign(t, {
          el: s,
          wrapperEl: r,
          slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : r,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction"),
          rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === v(s, "direction")),
          wrongRTL: "-webkit-box" === v(r, "display")
        }), !0;
      }
    }, {
      key: "init",
      value: function init(e) {
        var t = this;
        if (t.initialized) return t;
        if (!1 === t.mount(e)) return t;
        t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
        var s = _toConsumableArray(t.el.querySelectorAll('[loading="lazy"]'));
        return t.isElement && s.push.apply(s, _toConsumableArray(t.hostEl.querySelectorAll('[loading="lazy"]'))), s.forEach(function (e) {
          e.complete ? I(t, e) : e.addEventListener("load", function (e) {
            I(t, e.target);
          });
        }), k(t), t.initialized = !0, k(t), t.emit("init"), t.emit("afterInit"), t;
      }
    }, {
      key: "destroy",
      value: function destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        var s = this,
          i = s.params,
          r = s.el,
          n = s.wrapperEl,
          a = s.slides;
        return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach(function (e) {
          e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index");
        })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.el && "string" != typeof s.el && (s.el.swiper = null), function (e) {
          var t = e;
          Object.keys(t).forEach(function (e) {
            try {
              t[e] = null;
            } catch (e) {}
            try {
              delete t[e];
            } catch (e) {}
          });
        }(s)), s.destroyed = !0), null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        c(K, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return K;
      }
    }, {
      key: "defaults",
      get: function get() {
        return Y;
      }
    }, {
      key: "installModule",
      value: function installModule(e) {
        J.prototype.__modules__ || (J.prototype.__modules__ = []);
        var t = J.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
    }, {
      key: "use",
      value: function use(e) {
        return Array.isArray(e) ? (e.forEach(function (e) {
          return J.installModule(e);
        }), J) : (J.installModule(e), J);
      }
    }]);
  }();
  return Object.keys(U).forEach(function (e) {
    Object.keys(U[e]).forEach(function (t) {
      J.prototype[t] = U[e][t];
    });
  }), J.use([function (e) {
    var t = e.swiper,
      s = e.on,
      i = e.emit;
    var r = n();
    var a = null,
      o = null;
    var l = function l() {
        t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"));
      },
      d = function d() {
        t && !t.destroyed && t.initialized && i("orientationchange");
      };
    s("init", function () {
      t.params.resizeObserver && void 0 !== r.ResizeObserver ? t && !t.destroyed && t.initialized && (a = new ResizeObserver(function (e) {
        o = r.requestAnimationFrame(function () {
          var s = t.width,
            i = t.height;
          var r = s,
            n = i;
          e.forEach(function (e) {
            var s = e.contentBoxSize,
              i = e.contentRect,
              a = e.target;
            a && a !== t.el || (r = i ? i.width : (s[0] || s).inlineSize, n = i ? i.height : (s[0] || s).blockSize);
          }), r === s && n === i || l();
        });
      }), a.observe(t.el)) : (r.addEventListener("resize", l), r.addEventListener("orientationchange", d));
    }), s("destroy", function () {
      o && r.cancelAnimationFrame(o), a && a.unobserve && t.el && (a.unobserve(t.el), a = null), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d);
    });
  }, function (e) {
    var t = e.swiper,
      s = e.extendParams,
      i = e.on,
      r = e.emit;
    var a = [],
      o = n(),
      l = function l(e, s) {
        void 0 === s && (s = {});
        var i = new (o.MutationObserver || o.WebkitMutationObserver)(function (e) {
          if (t.__preventObserver__) return;
          if (1 === e.length) return void r("observerUpdate", e[0]);
          var s = function s() {
            r("observerUpdate", e[0]);
          };
          o.requestAnimationFrame ? o.requestAnimationFrame(s) : o.setTimeout(s, 0);
        });
        i.observe(e, {
          attributes: void 0 === s.attributes || s.attributes,
          childList: t.isElement || (void 0 === s.childList || s).childList,
          characterData: void 0 === s.characterData || s.characterData
        }), a.push(i);
      };
    s({
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    }), i("init", function () {
      if (t.params.observer) {
        if (t.params.observeParents) {
          var _e38 = function (e, t) {
            var s = [];
            var i = e.parentElement;
            for (; i;) t ? i.matches(t) && s.push(i) : s.push(i), i = i.parentElement;
            return s;
          }(t.hostEl);
          for (var _t26 = 0; _t26 < _e38.length; _t26 += 1) l(_e38[_t26]);
        }
        l(t.hostEl, {
          childList: t.params.observeSlideChildren
        }), l(t.wrapperEl, {
          attributes: !1
        });
      }
    }), i("destroy", function () {
      a.forEach(function (e) {
        e.disconnect();
      }), a.splice(0, a.length);
    });
  }]), J;
}();
/******/ })()
;