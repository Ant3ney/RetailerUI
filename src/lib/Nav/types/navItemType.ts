type navItem = {
	text?: string | null;
	slug?: string | null;
	url?: string | null;
	className?: string | null;
	icon?: string | null;
	onClick?: Function | null;
	subNavItems?: navItem[] | null;
};

export default navItem;
