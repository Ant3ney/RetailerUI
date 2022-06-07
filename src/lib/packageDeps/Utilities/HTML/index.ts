export { useIsHovering } from './useIsHovering';

export const isHovering = (e: any) => {
	const hoverCheck = (e: any) => {
		if (!e || !e.parentElement) return false;
		return e.parentElement.querySelector(':hover') === e;
	};

	if (e instanceof Array) {
		let notHovering = true;
		e.forEach((element: any) => {
			if (hoverCheck(element)) {
				notHovering = false;
			}
		});
		return !notHovering;
	} else {
		return hoverCheck(e);
	}
};
export function updateEventListenersToElement(element: any, listener: any, settings: any) {
	if (element instanceof Array) {
		element.forEach((element: any) => {
			addEventListenerToSingleElement(element, listener);
		});
	} else {
		addEventListenerToSingleElement(element, listener);
	}
	function addEventListenerToSingleElement(element: any, listener: any) {
		if (!element) return;
		if (listener instanceof Array) {
			listener.forEach((listener: any) => {
				applySingleEventToSingleListener(element, listener);
			});
		} else {
			applySingleEventToSingleListener(element, listener);
		}
	}
	function applySingleEventToSingleListener(element: any, listener: any) {
		if (settings.add) element.addEventListener(listener.event, listener.callback);
		else if (settings.remove) element.removeEventListener(listener.event, listener.callback);
	}
}
export function findElement(query: any) {
	if (!document) return;
	if (query instanceof Array) {
		const element: any = [];
		query.forEach((query: any) => {
			const newElement = document.querySelector(query);
			element.push(newElement);
		});
		return element;
	} else {
		return document.querySelector(query);
	}
}

export const removeClassFromRef = (ref: any, remove: any) => {
	if (!ref || !ref.current) {
		console.error('Returned out of function early. Given ref is not defined enoughf');
	}

	let newClassNameArray = ref.current.className.split(' ').filter((className: string) => {
		return className !== remove;
	});
	newClassNameArray = newClassNameArray.join(' ');

	ref.current.className = newClassNameArray;
};
export const addClassFromRef = (ref: any, newClass: any) => {
	if (!ref || !ref.current) {
		console.error('Returned out of function early. Given ref is not defined enoughf');
		return;
	}
	if (ref.current.className && ref.current.className.indexOf(newClass) >= 0) {
		return;
	}
	ref.current.className += ` ${newClass}`;
};
export const addClassToEle = (ele: any, className: any) => {
	if (!ele) return;

	if (ele.classList.contains(className)) {
		return;
	}
	ele.classList.add(className);
};
export const removeClassFromEle = (ele: any, className: any) => {
	if (!ele) return;
	while (ele.classList.contains(className)) {
		ele.classList.remove(className);
	}
};
export const isDarkRoute = () => {
	let routesWithDarkBG = [''];

	/* Imporve this check as it become nessisary */
	if (!routesWithDarkBG.includes(window.location.pathname.split('/')[1])) {
		return true;
	}
	return false;
};
