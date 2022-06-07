"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsHovering = void 0;

var _react = require("react");

var HTML = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useIsHovering = function useIsHovering(elementQuery) {
  var _a = (0, _react.useState)(false),
      hovering = _a[0],
      setHovering = _a[1];

  (0, _react.useEffect)(function () {
    var element = HTML.findElement(elementQuery);
    if (!element) return function () {
      console.log('useIsHovering: element not found with given query:', elementQuery);
    }();
    HTML.updateEventListenersToElement(element, [{
      event: 'mouseenter',
      callback: expandContent
    }, {
      event: 'mouseleave',
      callback: runHoverCheck
    }], {
      add: true
    });

    function runHoverCheck() {
      if (!HTML.isHovering(element)) shrinkContent();
    }

    function expandContent() {
      setHovering(true);
      setTimeout(updateHoverStatus, 500);
    }

    function shrinkContent() {
      setHovering(false);
    }

    function updateHoverStatus() {
      if (!HTML.isHovering(element)) {
        shrinkContent();
      } else {
        setTimeout(updateHoverStatus, 500);
      }
    }

    return function () {
      HTML.updateEventListenersToElement(element, [{
        event: 'mouseenter',
        callback: expandContent
      }, {
        event: 'mouseleave',
        callback: runHoverCheck
      }], {
        remove: true
      });
    };
  }, [hovering, elementQuery]);
  return hovering;
};

exports.useIsHovering = useIsHovering;