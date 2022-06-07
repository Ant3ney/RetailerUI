import navItem from './navItemType';

type nav = {
	leftNav: navItem[] | null;
	rightNav: navItem[] | null;
	logo?: navItem | null;
	gizmo?: navItem | null;
	className?: string;
	bgSrc?: string;
};

export default nav;
