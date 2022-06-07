"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTML = void 0;
Object.defineProperty(exports, "createMarginPaddingStyles", {
  enumerable: true,
  get: function get() {
    return _createMarginAndPaddingObj.default;
  }
});
Object.defineProperty(exports, "getURLFromSanityRefrence", {
  enumerable: true,
  get: function get() {
    return _getURLFromSanityRefrence.default;
  }
});
Object.defineProperty(exports, "isDev", {
  enumerable: true,
  get: function get() {
    return _isDev.default;
  }
});

var _getURLFromSanityRefrence = _interopRequireDefault(require("./getURLFromSanityRefrence"));

var _isDev = _interopRequireDefault(require("./isDev"));

var _createMarginAndPaddingObj = _interopRequireDefault(require("./createMarginAndPaddingObj"));

var _HTML = _interopRequireWildcard(require("./HTML"));

exports.HTML = _HTML;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }