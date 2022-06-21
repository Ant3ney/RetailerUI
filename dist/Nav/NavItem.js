"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavItem;

require("core-js/modules/es.object.assign.js");

var _react = _interopRequireWildcard(require("react"));

var _Utilities = require("../packageDeps/Utilities");

var _reactResponsive = require("react-responsive");

var _reactAnimateHeight = _interopRequireDefault(require("react-animate-height"));

var _dropdown = _interopRequireDefault(require("../packageDeps/media/dropdown.svg"));

require("../packageDeps/styles/nav.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
/* eslint-disable import/first */


function NavItem(navItem) {
  var _a = navItem || {},
      text = _a.text,
      className = _a.className,
      icon = _a.icon,
      subNavItems = _a.subNavItems;

  var uniqueId = "nav-item-".concat(Math.trunc(Math.random() * 100));
  var desktopDropDownUniqueId = "nav-item-".concat(Math.trunc(Math.random() * 1008));
  var query = "#".concat(uniqueId);
  var dropDownQuery = "#".concat(desktopDropDownUniqueId);

  var isHovering = _Utilities.HTML.useIsHovering([query, dropDownQuery]);

  var isMobile = (0, _reactResponsive.useMediaQuery)({
    query: '(max-width: 640px)'
  });

  var _b = (0, _react.useState)(false),
      extendMobileDropDown = _b[0],
      setExtendMobileDropDown = _b[1];

  var desktopDropedDown = (0, _react.useRef)(false);
  var desktopDropDownProps = {
    subNavItems: subNavItems,
    isMobile: isMobile,
    desktopDropDownUniqueId: desktopDropDownUniqueId
  };
  var MobileDropDownProps = {
    subNavItems: subNavItems,
    isMobile: isMobile,
    extendMobileDropDown: extendMobileDropDown
  };

  var dropDownProps = __assign(__assign(__assign({}, desktopDropDownProps), MobileDropDownProps), {
    toggleDesktopDropDown: toggleDesktopDropDown,
    toggleMobileDropDown: toggleMobileDropDown
  });

  (0, _react.useEffect)(function () {
    if (!document) return;
    var navEle = document.querySelector(query);
    var dropdownEle = navEle ? navEle.querySelector('ul') : null;

    if (isHovering && subNavItems && subNavItems.length > 0) {
      _Utilities.HTML.addClassToEle(dropdownEle, 'extend-dropdown-menu');

      desktopDropedDown.current = true;
    } else {
      setTimeout(function () {
        _Utilities.HTML.removeClassFromEle(dropdownEle, 'extend-dropdown-menu');

        desktopDropedDown.current = false;
      }, 500);
    }
  }, [isHovering]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("li", {
    className: "retailer-ui-namespace nav-item-container nav-link ".concat(className),
    id: uniqueId
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "link-anchor",
    onClick: function onClick() {
      onNavClick(navItem, dropDownProps);
    }
  }, icon ? /*#__PURE__*/_react.default.createElement("img", {
    className: "nav-icon",
    src: icon,
    alt: "nav icon"
  }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null), text), /*#__PURE__*/_react.default.createElement(DropDownToggler, null), /*#__PURE__*/_react.default.createElement(DesctopDropDown, desktopDropDownProps)), /*#__PURE__*/_react.default.createElement(MobileDropDown, MobileDropDownProps));

  function DropDownToggler() {
    return subNavItems ? /*#__PURE__*/_react.default.createElement("img", {
      onClick: isMobile ? toggleMobileDropDown : toggleDesktopDropDown,
      className: "dropdown-icon",
      src: _dropdown.default
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  function toggleDesktopDropDown() {
    var navEle = document.querySelector(query);
    var dropdownEle = navEle ? navEle.querySelector('ul') : null;

    if (desktopDropedDown.current) {
      _Utilities.HTML.removeClassFromEle(dropdownEle, 'extend-dropdown-menu');
    } else _Utilities.HTML.addClassToEle(dropdownEle, 'extend-dropdown-menu');

    desktopDropedDown.current = !desktopDropedDown.current;
  }

  function toggleMobileDropDown() {
    setExtendMobileDropDown(!extendMobileDropDown);
  }
}

function onNavClick(navItem, deps) {
  if (!navItem) return function () {
    console.error('A navItem object must be passed into the onNavClick function');
  }();
  var onClick = navItem.onClick,
      slug = navItem.slug,
      url = navItem.url,
      subNavItems = navItem.subNavItems;
  var isMobile = deps.isMobile,
      toggleMobileDropDown = deps.toggleMobileDropDown,
      toggleDesktopDropDown = deps.toggleDesktopDropDown;
  if (onClick) onClick();else if (url) window.location.href = url;else if (slug) window.location.href = slug;else if (subNavItems && subNavItems.length > 0) isMobile ? toggleMobileDropDown() : toggleDesktopDropDown();else console.log('No url or slug or subNavItems. Nav click change dose nothing');
}

function DesctopDropDown(props) {
  var _a = props || {},
      subNavItems = _a.subNavItems,
      isMobile = _a.isMobile,
      desktopDropDownUniqueId = _a.desktopDropDownUniqueId,
      toggleDesktopDropDown = _a.toggleDesktopDropDown;

  if (isMobile || !subNavItems) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  return /*#__PURE__*/_react.default.createElement("ul", {
    id: desktopDropDownUniqueId,
    className: "dropdown-container"
  }, subNavItems.map(function (navItem, i) {
    if (!(navItem && navItem.text)) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i,
      className: "nav-link"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      onClick: function onClick() {
        onNavClick(navItem, props);
      }
    }, navItem.text));
  }));
}

function MobileDropDown(props) {
  var subNavItems = props.subNavItems,
      extendMobileDropDown = props.extendMobileDropDown,
      isMobile = props.isMobile,
      changeURL = props.changeURL;
  if (!(subNavItems && isMobile)) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  return /*#__PURE__*/_react.default.createElement(_reactAnimateHeight.default, {
    className: "animation-container",
    height: extendMobileDropDown ? 'auto' : 0
  }, subNavItems.map(function (navItem, i) {
    if (!(navItem && navItem.text)) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    return /*#__PURE__*/_react.default.createElement("li", {
      key: i,
      className: "nav-item-container nav-link mobile-dropdown-link"
    }, /*#__PURE__*/_react.default.createElement("a", {
      className: "nav-link",
      onClick: function onClick() {
        onNavClick(navItem, props);
      }
    }, navItem.text));
  }));
}