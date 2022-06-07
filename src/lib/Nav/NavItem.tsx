/* eslint-disable import/first */
import React, { useEffect, useRef, useState } from 'react';
import { HTML } from '../packageDeps/Utilities';
import { useMediaQuery } from 'react-responsive';
import AnimateHeight from 'react-animate-height';
//@ts-ignore
import navItem from './types/navItemType';
import '../packageDeps/styles/app.css';
import '../packageDeps/styles/style.css';
//@ts-ignore
import dropDownSVG from '../packageDeps/media/dropdown.svg';

export default function NavItem(navItem: navItem) {
	const { text, className, icon, subNavItems } = navItem || {};

	const uniqueId = `nav-item-${Math.trunc(Math.random() * 100)}`;
	const desktopDropDownUniqueId = `nav-item-${Math.trunc(Math.random() * 1008)}`;
	const query = `#${uniqueId}`;
	const dropDownQuery = `#${desktopDropDownUniqueId}`;
	const isHovering = HTML.useIsHovering([query, dropDownQuery]);

	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

	const [extendMobileDropDown, setExtendMobileDropDown] = useState(false);
	const desktopDropedDown = useRef(false);

	const desktopDropDownProps = {
		subNavItems,
		isMobile,
		desktopDropDownUniqueId,
	};
	const MobileDropDownProps = {
		subNavItems,
		isMobile,
		extendMobileDropDown,
	};
	const dropDownProps = {
		...desktopDropDownProps,
		...MobileDropDownProps,
		toggleDesktopDropDown,
		toggleMobileDropDown,
	};

	useEffect(() => {
		if (!document) return;
		const navEle = document.querySelector(query);
		const dropdownEle = navEle ? navEle.querySelector('ul') : null;
		if (isHovering && subNavItems && subNavItems.length > 0) {
			HTML.addClassToEle(dropdownEle, 'extend-dropdown-menu');
			desktopDropedDown.current = true;
		} else {
			setTimeout(() => {
				HTML.removeClassFromEle(dropdownEle, 'extend-dropdown-menu');
				desktopDropedDown.current = false;
			}, 500);
		}
	}, [isHovering]);

	return (
		<>
			<li className={`retailer-ui-namespace nav-item-container nav-link ${className}`} id={uniqueId}>
				<a
					className='link-anchor'
					onClick={() => {
						onNavClick(navItem, dropDownProps);
					}}
				>
					{icon ? <img className='nav-icon' src={icon} alt='nav icon' /> : <></>}
					{text}
				</a>
				<DropDownToggler />
				<DesctopDropDown {...desktopDropDownProps} />
			</li>
			<MobileDropDown {...MobileDropDownProps} />
		</>
	);

	function DropDownToggler() {
		return subNavItems ? (
			<img
				onClick={isMobile ? toggleMobileDropDown : toggleDesktopDropDown}
				className='dropdown-icon'
				src={dropDownSVG}
			/>
		) : (
			<></>
		);
	}

	function toggleDesktopDropDown() {
		const navEle = document.querySelector(query);
		const dropdownEle = navEle ? navEle.querySelector('ul') : null;
		if (desktopDropedDown.current) {
			HTML.removeClassFromEle(dropdownEle, 'extend-dropdown-menu');
		} else HTML.addClassToEle(dropdownEle, 'extend-dropdown-menu');

		desktopDropedDown.current = !desktopDropedDown.current;
	}

	function toggleMobileDropDown() {
		setExtendMobileDropDown(!extendMobileDropDown);
	}
}

function onNavClick(navItem: navItem, deps: any) {
	if (!navItem)
		return (() => {
			console.error('A navItem object must be passed into the onNavClick function');
		})();
	const { onClick, slug, url, subNavItems } = navItem;
	const { isMobile, toggleMobileDropDown, toggleDesktopDropDown } = deps;
	if (onClick) onClick();
	else if (url) window.location.href = url;
	else if (slug) window.location.href = slug;
	else if (subNavItems && subNavItems.length > 0) isMobile ? toggleMobileDropDown() : toggleDesktopDropDown();
	else console.log('No url or slug or subNavItems. Nav click change dose nothing');
}

function DesctopDropDown(props: any) {
	const { subNavItems, isMobile, desktopDropDownUniqueId, toggleDesktopDropDown } = props || {};
	if (isMobile || !subNavItems) return <></>;
	return (
		<ul id={desktopDropDownUniqueId} className='dropdown-container'>
			{subNavItems.map((navItem: any, i: number) => {
				if (!(navItem && navItem.text)) return <></>;
				return (
					<li key={i} className='nav-link'>
						<a
							className='nav-link'
							onClick={() => {
								onNavClick(navItem, props);
							}}
						>
							{navItem.text}
						</a>
					</li>
				);
			})}
		</ul>
	);
}

function MobileDropDown(props: any) {
	const { subNavItems, extendMobileDropDown, isMobile, changeURL } = props;
	if (!(subNavItems && isMobile)) return <></>;
	return (
		<AnimateHeight className='animation-container' height={extendMobileDropDown ? 'auto' : 0}>
			{subNavItems.map((navItem: any, i: number) => {
				if (!(navItem && navItem.text)) return <></>;
				return (
					<li key={i} className='nav-item-container nav-link mobile-dropdown-link'>
						<a
							className='nav-link'
							onClick={() => {
								onNavClick(navItem, props);
							}}
						>
							{navItem.text}
						</a>
					</li>
				);
			})}
		</AnimateHeight>
	);
}
