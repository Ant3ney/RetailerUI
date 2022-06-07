"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDev;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDev() {
  return '_self' in /*#__PURE__*/_react.default.createElement('div');
}