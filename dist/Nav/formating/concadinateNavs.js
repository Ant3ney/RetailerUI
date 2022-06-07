"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concadinateRawNavs;

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};

function concadinateRawNavs(nav) {
  if (!nav || !nav.rightNavMenu || !nav.leftNavMenu) return [];
  return __spreadArray(__spreadArray([], nav.rightNavMenu.navItems, true), nav.leftNavMenu.navItems, true);
}