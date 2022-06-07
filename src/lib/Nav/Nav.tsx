/* eslint-disable import/first */
import React, { useRef } from 'react';
import NavItem from './NavItem';
import { useMediaQuery } from 'react-responsive';
import { HTML } from '../packageDeps/Utilities';
import nav from './types/navType';
//@ts-ignore
import closeSVG from '../packageDeps/media/close.svg';
//@ts-ignore
import hamburgerSvg from '../packageDeps/media/hamburger.svg';
//@ts-ignore
import backupBGSrc from '../packageDeps/media/extended-nav-bg-backup.png';
import '../packageDeps/styles/app.css';
import '../packageDeps/styles/style.css';

export default function Nav({ leftNav, rightNav, logo, gizmo, className, bgSrc }: nav) {
	//Only the left and right nav are required inorder to load the page
	const isLoading = !leftNav || !rightNav ? true : false;

	const allNaves = [...(leftNav ? leftNav : []), ...(rightNav ? rightNav : [])];

	const mobileExpand = useRef(false);
	const isMobile = useMediaQuery({ query: '(max-width: 640px)' });

	if (isLoading) return <div>Loading</div>;

	return (
		<nav className={`retailer-ui-namespace nav-container ${className}`}>
			<div className='wide-container'>{isMobile ? <MobileLayout /> : <DesctopLayout />}</div>
		</nav>
	);

	function DesctopLayout() {
		return (
			<>
				<DesctopNavArray className='left-nav' navArray={leftNav} />
				<LogoNav />
				<DesctopNavArray className='right-nav' navArray={rightNav}>
					<Gizmo />
				</DesctopNavArray>
			</>
		);
	}

	function MobileLayout() {
		return (
			<>
				<LogoNav />
				<img onClick={toggleMobileNav} className='toggler' src={hamburgerSvg} />
				<ul className={`mobile-nav`}>
					<img src={`${bgSrc ? bgSrc : backupBGSrc}`} alt='' className='extended-nav-bg' />
					<section className='mobile-extended-nav-icon-container'>
						<Gizmo />
						<img className='close-extended-nav-icon' src={closeSVG} alt='close' onClick={toggleMobileNav} />
					</section>
					<MapedNavArray navArray={allNaves} />
				</ul>
			</>
		);
	}

	function MapedNavItem({ navItem, ...rest }: any) {
		return <NavItem {...navItem} {...rest} />;
	}

	function MapedNavArray({ navArray }: any) {
		if (!navArray) return <></>;
		return (
			<>
				{navArray.map((navItem: any, i: number) => {
					return <MapedNavItem navItem={navItem} key={i} />;
				})}
			</>
		);
	}

	function DesctopNavArray({ navArray, children, ...rest }: any) {
		if (!navArray) return <></>;
		return (
			<ul {...rest}>
				{children}
				<MapedNavArray navArray={navArray} />
			</ul>
		);
	}

	function LogoNav() {
		return <MapedNavItem navItem={logo} />;
	}

	function Gizmo() {
		const uniqueKey = `nav-item-${Math.trunc(Math.random() * 1008 + 100)}`;
		return gizmo ? <MapedNavItem key={uniqueKey} className='gizmo-container' navItem={gizmo} /> : <></>;
	}

	function toggleMobileNav() {
		mobileExpand.current = !mobileExpand.current;
		const mobileNavEle = document.querySelector('.nav-container .mobile-nav');
		if (mobileExpand && mobileExpand.current) HTML.addClassToEle(mobileNavEle, 'expand-mobile-nav');
		else if (!mobileExpand.current && mobileNavEle) HTML.removeClassFromEle(mobileNavEle, 'expand-mobile-nav');
	}
}
