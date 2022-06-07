import { useEffect, useState } from 'react';
import * as HTML from './index';
export var useIsHovering = function (elementQuery) {
    var _a = useState(false), hovering = _a[0], setHovering = _a[1];
    useEffect(function () {
        var element = HTML.findElement(elementQuery);
        if (!element)
            return (function () {
                console.log('useIsHovering: element not found with given query:', elementQuery);
            })();
        HTML.updateEventListenersToElement(element, [
            { event: 'mouseenter', callback: expandContent },
            { event: 'mouseleave', callback: runHoverCheck },
        ], { add: true });
        function runHoverCheck() {
            if (!HTML.isHovering(element))
                shrinkContent();
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
            }
            else {
                setTimeout(updateHoverStatus, 500);
            }
        }
        return function () {
            HTML.updateEventListenersToElement(element, [
                { event: 'mouseenter', callback: expandContent },
                { event: 'mouseleave', callback: runHoverCheck },
            ], { remove: true });
        };
    }, [hovering, elementQuery]);
    return hovering;
};
