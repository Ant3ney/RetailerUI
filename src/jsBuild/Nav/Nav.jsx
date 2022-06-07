var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/* eslint-disable import/first */
import React, { useRef } from 'react';
import NavItem from './NavItem';
import { useMediaQuery } from 'react-responsive';
import { HTML } from '../packageDeps/Utilities';
//@ts-ignore
import closeSVG from '../packageDeps/media/close.svg';
//@ts-ignore
import hamburgerSvg from '../packageDeps/media/hamburger.svg';
//@ts-ignore
import backupBGSrc from '../packageDeps/media/extended-nav-bg-backup.png';
import '../packageDeps/styles/app.css';
import '../packageDeps/styles/style.css';
export default function Nav(_a) {
    var leftNav = _a.leftNav, rightNav = _a.rightNav, logo = _a.logo, gizmo = _a.gizmo, className = _a.className, bgSrc = _a.bgSrc;
    //Only the left and right nav are required inorder to load the page
    var isLoading = !leftNav || !rightNav ? true : false;
    var allNaves = __spreadArray(__spreadArray([], (leftNav ? leftNav : []), true), (rightNav ? rightNav : []), true);
    var mobileExpand = useRef(false);
    var isMobile = useMediaQuery({ query: '(max-width: 640px)' });
    if (isLoading)
        return <div>Loading</div>;
    return (<nav className={"retailer-ui-namespace nav-container ".concat(className)}>
			<div className='wide-container'>{isMobile ? <MobileLayout /> : <DesctopLayout />}</div>
		</nav>);
    function DesctopLayout() {
        return (<>
				<DesctopNavArray className='left-nav' navArray={leftNav}/>
				<LogoNav />
				<DesctopNavArray className='right-nav' navArray={rightNav}>
					<Gizmo />
				</DesctopNavArray>
			</>);
    }
    function MobileLayout() {
        return (<>
				<LogoNav />
				<img onClick={toggleMobileNav} className='toggler' src={hamburgerSvg}/>
				<ul className={"mobile-nav"}>
					<img src={"".concat(bgSrc ? bgSrc : backupBGSrc)} alt='' className='extended-nav-bg'/>
					<section className='mobile-extended-nav-icon-container'>
						<Gizmo />
						<img className='close-extended-nav-icon' src={closeSVG} alt='close' onClick={toggleMobileNav}/>
					</section>
					<MapedNavArray navArray={allNaves}/>
				</ul>
			</>);
    }
    function MapedNavItem(_a) {
        var navItem = _a.navItem, rest = __rest(_a, ["navItem"]);
        return <NavItem {...navItem} {...rest}/>;
    }
    function MapedNavArray(_a) {
        var navArray = _a.navArray;
        if (!navArray)
            return <></>;
        return (<>
				{navArray.map(function (navItem, i) {
                return <MapedNavItem navItem={navItem} key={i}/>;
            })}
			</>);
    }
    function DesctopNavArray(_a) {
        var navArray = _a.navArray, children = _a.children, rest = __rest(_a, ["navArray", "children"]);
        if (!navArray)
            return <></>;
        return (<ul {...rest}>
				{children}
				<MapedNavArray navArray={navArray}/>
			</ul>);
    }
    function LogoNav() {
        return <MapedNavItem navItem={logo}/>;
    }
    function Gizmo() {
        var uniqueKey = "nav-item-".concat(Math.trunc(Math.random() * 1008 + 100));
        return gizmo ? <MapedNavItem key={uniqueKey} className='gizmo-container' navItem={gizmo}/> : <></>;
    }
    function toggleMobileNav() {
        mobileExpand.current = !mobileExpand.current;
        var mobileNavEle = document.querySelector('.nav-container .mobile-nav');
        if (mobileExpand && mobileExpand.current)
            HTML.addClassToEle(mobileNavEle, 'expand-mobile-nav');
        else if (!mobileExpand.current && mobileNavEle)
            HTML.removeClassFromEle(mobileNavEle, 'expand-mobile-nav');
    }
}
