export default function concadinateRawNavs(nav: any) {
	if (!nav || !nav.rightNavMenu || !nav.leftNavMenu) return [];
	return [...nav.rightNavMenu.navItems, ...nav.leftNavMenu.navItems];
}
