export { useIsHovering } from './useIsHovering';
export var isHovering = function (e) {
    var hoverCheck = function (e) {
        if (!e || !e.parentElement)
            return false;
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
    }
    else {
        return hoverCheck(e);
    }
};
export function updateEventListenersToElement(element, listener, settings) {
    if (element instanceof Array) {
        element.forEach(function (element) {
            addEventListenerToSingleElement(element, listener);
        });
    }
    else {
        addEventListenerToSingleElement(element, listener);
    }
    function addEventListenerToSingleElement(element, listener) {
        if (!element)
            return;
        if (listener instanceof Array) {
            listener.forEach(function (listener) {
                applySingleEventToSingleListener(element, listener);
            });
        }
        else {
            applySingleEventToSingleListener(element, listener);
        }
    }
    function applySingleEventToSingleListener(element, listener) {
        if (settings.add)
            element.addEventListener(listener.event, listener.callback);
        else if (settings.remove)
            element.removeEventListener(listener.event, listener.callback);
    }
}
export function findElement(query) {
    if (!document)
        return;
    if (query instanceof Array) {
        var element_1 = [];
        query.forEach(function (query) {
            var newElement = document.querySelector(query);
            element_1.push(newElement);
        });
        return element_1;
    }
    else {
        return document.querySelector(query);
    }
}
export var removeClassFromRef = function (ref, remove) {
    if (!ref || !ref.current) {
        console.error('Returned out of function early. Given ref is not defined enoughf');
    }
    var newClassNameArray = ref.current.className.split(' ').filter(function (className) {
        return className !== remove;
    });
    newClassNameArray = newClassNameArray.join(' ');
    ref.current.className = newClassNameArray;
};
export var addClassFromRef = function (ref, newClass) {
    if (!ref || !ref.current) {
        console.error('Returned out of function early. Given ref is not defined enoughf');
        return;
    }
    if (ref.current.className && ref.current.className.indexOf(newClass) >= 0) {
        return;
    }
    ref.current.className += " ".concat(newClass);
};
export var addClassToEle = function (ele, className) {
    if (!ele)
        return;
    if (ele.classList.contains(className)) {
        return;
    }
    ele.classList.add(className);
};
export var removeClassFromEle = function (ele, className) {
    if (!ele)
        return;
    while (ele.classList.contains(className)) {
        ele.classList.remove(className);
    }
};
export var isDarkRoute = function () {
    var routesWithDarkBG = [''];
    /* Imporve this check as it become nessisary */
    if (!routesWithDarkBG.includes(window.location.pathname.split('/')[1])) {
        return true;
    }
    return false;
};
