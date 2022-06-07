import { useEffect, useState } from 'react';
import * as HTML from './index';

export const useIsHovering = (elementQuery: any) => {
	const [hovering, setHovering] = useState(false);
	useEffect(() => {
		let element: any = HTML.findElement(elementQuery);
		if (!element)
			return (() => {
				console.log('useIsHovering: element not found with given query:', elementQuery);
			})();

		HTML.updateEventListenersToElement(
			element,
			[
				{ event: 'mouseenter', callback: expandContent },
				{ event: 'mouseleave', callback: runHoverCheck },
			],
			{ add: true }
		);

		function runHoverCheck() {
			if (!HTML.isHovering(element)) shrinkContent();
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
			} else {
				setTimeout(updateHoverStatus, 500);
			}
		}
		return () => {
			HTML.updateEventListenersToElement(
				element,
				[
					{ event: 'mouseenter', callback: expandContent },
					{ event: 'mouseleave', callback: runHoverCheck },
				],
				{ remove: true }
			);
		};
	}, [hovering, elementQuery]);
	return hovering;
};
