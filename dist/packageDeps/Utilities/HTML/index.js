"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addClassToEle = exports.addClassFromRef = void 0;
exports.findElement = findElement;
exports.removeClassFromRef = exports.removeClassFromEle = exports.isHovering = exports.isDarkRoute = void 0;
exports.updateEventListenersToElement = updateEventListenersToElement;
Object.defineProperty(exports, "useIsHovering", {
  enumerable: true,
  get: function get() {
    return _useIsHovering.useIsHovering;
  }
});

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/modules/es.array.includes.js");

var _useIsHovering = require("./useIsHovering");

var isHovering = function isHovering(e) {
  var hoverCheck = function hoverCheck(e) {
    if (!e || !e.parentElement) return false;
    return e.parentElement.querySelector(':hover') === e;
  };

  if (e instanceof Array) {
    var notHovering_1 = true;
    e.forEach(function (element) {
      if (hoverCheck(element)) {
        notHovering_1 = false;
      }
    });
    return !notHovering_1;
  } else {
    return hoverCheck(e);
  }
};

exports.isHovering = isHovering;

function updateEventListenersToElement(element, listener, settings) {
  if (element instanceof Array) {
    element.forEach(function (element) {
      addEventListenerToSingleElement(element, listener);
    });
  } else {
    addEventListenerToSingleElement(element, listener);
  }

  function addEventListenerToSingleElement(element, listener) {
    if (!element) return;

    if (listener instanceof Array) {
      listener.forEach(function (listener) {
        applySingleEventToSingleListener(element, listener);
      });
    } else {
      applySingleEventToSingleListener(element, listener);
    }
  }

  function applySingleEventToSingleListener(element, listener) {
    if (settings.add) element.addEventListener(listener.event, listener.callback);else if (settings.remove) element.removeEventListener(listener.event, listener.callback);
  }
}

function findElement(query) {
  if (!document) return;

  if (query instanceof Array) {
    var element_1 = [];
    query.forEach(function (query) {
      var newElement = document.querySelector(query);
      element_1.push(newElement);
    });
    return element_1;
  } else {
    return document.querySelector(query);
  }
}

var removeClassFromRef = function removeClassFromRef(ref, remove) {
  if (!ref || !ref.current) {
    console.error('Returned out of function early. Given ref is not defined enoughf');
  }

  var newClassNameArray = ref.current.className.split(' ').filter(function (className) {
    return className !== remove;
  });
  newClassNameArray = newClassNameArray.join(' ');
  ref.current.className = newClassNameArray;
};

exports.removeClassFromRef = removeClassFromRef;

var addClassFromRef = function addClassFromRef(ref, newClass) {
  if (!ref || !ref.current) {
    console.error('Returned out of function early. Given ref is not defined enoughf');
    return;
  }

  if (ref.current.className && ref.current.className.indexOf(newClass) >= 0) {
    return;
  }

  ref.current.className += " ".concat(newClass);
};

exports.addClassFromRef = addClassFromRef;

var addClassToEle = function addClassToEle(ele, className) {
  if (!ele) return;

  if (ele.classList.contains(className)) {
    return;
  }

  ele.classList.add(className);
};

exports.addClassToEle = addClassToEle;

var removeClassFromEle = function removeClassFromEle(ele, className) {
  if (!ele) return;

  while (ele.classList.contains(className)) {
    ele.classList.remove(className);
  }
};

exports.removeClassFromEle = removeClassFromEle;

var isDarkRoute = function isDarkRoute() {
  var routesWithDarkBG = [''];
  /* Imporve this check as it become nessisary */

  if (!routesWithDarkBG.includes(window.location.pathname.split('/')[1])) {
    return true;
  }

  return false;
};

exports.isDarkRoute = isDarkRoute;