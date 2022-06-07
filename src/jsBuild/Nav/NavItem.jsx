var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* eslint-disable import/first */
import React, { useEffect, useRef, useState } from 'react';
import { HTML } from '../packageDeps/Utilities';
import { useMediaQuery } from 'react-responsive';
import AnimateHeight from 'react-animate-height';
import '../packageDeps/styles/app.css';
import '../packageDeps/styles/style.css';
//@ts-ignore
import dropDownSVG from '../packageDeps/media/dropdown.svg';
export default function NavItem(navItem) {
    var _a = navItem || {}, text = _a.text, className = _a.className, icon = _a.icon, subNavItems = _a.subNavItems;
    var uniqueId = "nav-item-".concat(Math.trunc(Math.random() * 100));
    var desktopDropDownUniqueId = "nav-item-".concat(Math.trunc(Math.random() * 1008));
    var query = "#".concat(uniqueId);
    var dropDownQuery = "#".concat(desktopDropDownUniqueId);
    var isHovering = HTML.useIsHovering([query, dropDownQuery]);
    var isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    var _b = useState(false), extendMobileDropDown = _b[0], setExtendMobileDropDown = _b[1];
    var desktopDropedDown = useRef(false);
    var desktopDropDownProps = {
        subNavItems: subNavItems,
        isMobile: isMobile,
        desktopDropDownUniqueId: desktopDropDownUniqueId,
    };
    var MobileDropDownProps = {
        subNavItems: subNavItems,
        isMobile: isMobile,
        extendMobileDropDown: extendMobileDropDown,
    };
    var dropDownProps = __assign(__assign(__assign({}, desktopDropDownProps), MobileDropDownProps), { toggleDesktopDropDown: toggleDesktopDropDown, toggleMobileDropDown: toggleMobileDropDown });
    useEffect(function () {
        if (!document)
            return;
        var navEle = document.querySelector(query);
        var dropdownEle = navEle ? navEle.querySelector('ul') : null;
        if (isHovering && subNavItems && subNavItems.length > 0) {
            HTML.addClassToEle(dropdownEle, 'extend-dropdown-menu');
            desktopDropedDown.current = true;
        }
        else {
            setTimeout(function () {
                HTML.removeClassFromEle(dropdownEle, 'extend-dropdown-menu');
                desktopDropedDown.current = false;
            }, 500);
        }
    }, [isHovering]);
    return (<>
			<li className={"retailer-ui-namespace nav-item-container nav-link ".concat(className)} id={uniqueId}>
				<a className='link-anchor' onClick={function () {
            onNavClick(navItem, dropDownProps);
        }}>
					{icon ? <img className='nav-icon' src={icon} alt='nav icon'/> : <></>}
					{text}
				</a>
				<DropDownToggler />
				<DesctopDropDown {...desktopDropDownProps}/>
			</li>
			<MobileDropDown {...MobileDropDownProps}/>
		</>);
    function DropDownToggler() {
        return subNavItems ? (<img onClick={isMobile ? toggleMobileDropDown : toggleDesktopDropDown} className='dropdown-icon' src={dropDownSVG}/>) : (<></>);
    }
    function toggleDesktopDropDown() {
        var navEle = document.querySelector(query);
        var dropdownEle = navEle ? navEle.querySelector('ul') : null;
        if (desktopDropedDown.current) {
            HTML.removeClassFromEle(dropdownEle, 'extend-dropdown-menu');
        }
        else
            HTML.addClassToEle(dropdownEle, 'extend-dropdown-menu');
        desktopDropedDown.current = !desktopDropedDown.current;
    }
    function toggleMobileDropDown() {
        setExtendMobileDropDown(!extendMobileDropDown);
    }
}
function onNavClick(navItem, deps) {
    if (!navItem)
        return (function () {
            console.error('A navItem object must be passed into the onNavClick function');
        })();
    var onClick = navItem.onClick, slug = navItem.slug, url = navItem.url, subNavItems = navItem.subNavItems;
    var isMobile = deps.isMobile, toggleMobileDropDown = deps.toggleMobileDropDown, toggleDesktopDropDown = deps.toggleDesktopDropDown;
    if (onClick)
        onClick();
    else if (url)
        window.location.href = url;
    else if (slug)
        window.location.href = slug;
    else if (subNavItems && subNavItems.length > 0)
        isMobile ? toggleMobileDropDown() : toggleDesktopDropDown();
    else
        console.log('No url or slug or subNavItems. Nav click change dose nothing');
}
function DesctopDropDown(props) {
    var _a = props || {}, subNavItems = _a.subNavItems, isMobile = _a.isMobile, desktopDropDownUniqueId = _a.desktopDropDownUniqueId, toggleDesktopDropDown = _a.toggleDesktopDropDown;
    if (isMobile || !subNavItems)
        return <></>;
    return (<ul id={desktopDropDownUniqueId} className='dropdown-container'>
			{subNavItems.map(function (navItem, i) {
            if (!(navItem && navItem.text))
                return <></>;
            return (<li key={i} className='nav-link'>
						<a className='nav-link' onClick={function () {
                    onNavClick(navItem, props);
                }}>
							{navItem.text}
						</a>
					</li>);
        })}
		</ul>);
}
function MobileDropDown(props) {
    var subNavItems = props.subNavItems, extendMobileDropDown = props.extendMobileDropDown, isMobile = props.isMobile, changeURL = props.changeURL;
    if (!(subNavItems && isMobile))
        return <></>;
    return (<AnimateHeight className='animation-container' height={extendMobileDropDown ? 'auto' : 0}>
			{subNavItems.map(function (navItem, i) {
            if (!(navItem && navItem.text))
                return <></>;
            return (<li key={i} className='nav-item-container nav-link mobile-dropdown-link'>
						<a className='nav-link' onClick={function () {
                    onNavClick(navItem, props);
                }}>
							{navItem.text}
						</a>
					</li>);
        })}
		</AnimateHeight>);
}
