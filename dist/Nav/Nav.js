"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Nav;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _NavItem = _interopRequireDefault(require("./NavItem"));

var _reactResponsive = require("react-responsive");

var _Utilities = require("../packageDeps/Utilities");

var _close = _interopRequireDefault(require("../packageDeps/media/close.svg"));

var _hamburger = _interopRequireDefault(require("../packageDeps/media/hamburger.svg"));

var _extendedNavBgBackup = _interopRequireDefault(require("../packageDeps/media/extended-nav-bg-backup.png"));

require("../packageDeps/styles/app.css");

require("../packageDeps/styles/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable import/first */


function Nav(_a) {
  var leftNav = _a.leftNav,
      rightNav = _a.rightNav,
      logo = _a.logo,
      gizmo = _a.gizmo,
      className = _a.className,
      bgSrc = _a.bgSrc; //Only the left and right nav are required inorder to load the page

  var isLoading = !leftNav || !rightNav ? true : false;

  var allNaves = __spreadArray(__spreadArray([], leftNav ? leftNav : [], true), rightNav ? rightNav : [], true);

  var mobileExpand = (0, _react.useRef)(false);
  var isMobile = (0, _reactResponsive.useMediaQuery)({
    query: '(max-width: 640px)'
  });
  if (isLoading) return /*#__PURE__*/_react.default.createElement("div", null, "Loading");
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "retailer-ui-namespace nav-container ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wide-container"
  }, isMobile ? /*#__PURE__*/_react.default.createElement(MobileLayout, null) : /*#__PURE__*/_react.default.createElement(DesctopLayout, null)));

  function DesctopLayout() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(DesctopNavArray, {
      className: "left-nav",
      navArray: leftNav
    }), /*#__PURE__*/_react.default.createElement(LogoNav, null), /*#__PURE__*/_react.default.createElement(DesctopNavArray, {
      className: "right-nav",
      navArray: rightNav
    }, /*#__PURE__*/_react.default.createElement(Gizmo, null)));
  }

  function MobileLayout() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(LogoNav, null), /*#__PURE__*/_react.default.createElement("img", {
      onClick: toggleMobileNav,
      className: "toggler",
      src: _hamburger.default
    }), /*#__PURE__*/_react.default.createElement("ul", {
      className: "mobile-nav"
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: "".concat(bgSrc ? bgSrc : _extendedNavBgBackup.default),
      alt: "",
      className: "extended-nav-bg"
    }), /*#__PURE__*/_react.default.createElement("section", {
      className: "mobile-extended-nav-icon-container"
    }, /*#__PURE__*/_react.default.createElement(Gizmo, null), /*#__PURE__*/_react.default.createElement("img", {
      className: "close-extended-nav-icon",
      src: _close.default,
      alt: "close",
      onClick: toggleMobileNav
    })), /*#__PURE__*/_react.default.createElement(MapedNavArray, {
      navArray: allNaves
    })));
  }

  function MapedNavItem(_a) {
    var navItem = _a.navItem,
        rest = __rest(_a, ["navItem"]);

    return /*#__PURE__*/_react.default.createElement(_NavItem.default, _extends({}, navItem, rest));
  }

  function MapedNavArray(_a) {
    var navArray = _a.navArray;
    if (!navArray) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, navArray.map(function (navItem, i) {
      return /*#__PURE__*/_react.default.createElement(MapedNavItem, {
        navItem: navItem,
        key: i
      });
    }));
  }

  function DesctopNavArray(_a) {
    var navArray = _a.navArray,
        children = _a.children,
        rest = __rest(_a, ["navArray", "children"]);

    if (!navArray) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    return /*#__PURE__*/_react.default.createElement("ul", rest, children, /*#__PURE__*/_react.default.createElement(MapedNavArray, {
      navArray: navArray
    }));
  }

  function LogoNav() {
    return /*#__PURE__*/_react.default.createElement(MapedNavItem, {
      navItem: logo
    });
  }

  function Gizmo() {
    var uniqueKey = "nav-item-".concat(Math.trunc(Math.random() * 1008 + 100));
    return gizmo ? /*#__PURE__*/_react.default.createElement(MapedNavItem, {
      key: uniqueKey,
      className: "gizmo-container",
      navItem: gizmo
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  function toggleMobileNav() {
    mobileExpand.current = !mobileExpand.current;
    var mobileNavEle = document.querySelector('.nav-container .mobile-nav');
    if (mobileExpand && mobileExpand.current) _Utilities.HTML.addClassToEle(mobileNavEle, 'expand-mobile-nav');else if (!mobileExpand.current && mobileNavEle) _Utilities.HTML.removeClassFromEle(mobileNavEle, 'expand-mobile-nav');
  }
}