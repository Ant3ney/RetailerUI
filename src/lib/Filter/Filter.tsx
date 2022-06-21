import React, { useState, useEffect } from 'react';
import '../packageDeps/styles/filter.css';
import filter from './FilterType';
import AnimateHeight from 'react-animate-height';
import { useMediaQuery } from 'react-responsive';
//@ts-ignore
import dropDownSVG from '../packageDeps/media/dropdown.svg';
//@ts-ignore
import lessSVG from '../packageDeps/media/less.svg';

export default function Filter({ showFilterByPrice, showFilterByStyle, showFilterByColor }: filter) {
	const [extend, setExtend] = useState(true);
	const [extendFilterByPrice, setExtendFilterByPrice] = useState(false);
	const [extendFilterByColor, setExtendFilterByColor] = useState(false);
	const [extendFilterByStyle, setExtendFilterByStyle] = useState(false);
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const activeFilter = useActiveFilter({ extendFilterByPrice, extendFilterByColor, extendFilterByStyle });

	useEffect(() => {
		setExtend(extendFilterByPrice || extendFilterByColor || extendFilterByStyle);
	}, [extendFilterByPrice, extendFilterByColor, extendFilterByStyle]);

	return (
		<div className='retailer-ui-namespace retailer-ui-container filter-container'>
			<div className='inner-filter-container'>
				<button
					className='filter-button'
					onClick={() => {
						setExtendFilterByPrice(false);
						setExtendFilterByStyle(false);
						setExtendFilterByColor(!extendFilterByColor);
					}}
				>
					<p className='nav-link'>Filter By Color</p>
					<img
						className='filter-category-toggler'
						src={filterCategoryActionIcon({ desiminator: extendFilterByColor })}
					/>
				</button>

				<button
					className='filter-button'
					onClick={() => {
						setExtendFilterByColor(false);
						setExtendFilterByStyle(false);
						setExtendFilterByPrice(!extendFilterByPrice);
					}}
				>
					<p className='nav-link'>Filter By Price</p>
					<img
						className='filter-category-toggler'
						src={filterCategoryActionIcon({ desiminator: extendFilterByPrice })}
					/>
				</button>
				<AnimateHeight height={extend && isMobile && extendFilterByPrice ? '5rem' : 0}>
					<div className='extended-filter-container'>
						<PriceFilter />
					</div>
				</AnimateHeight>

				<button
					className='filter-button'
					onClick={() => {
						setExtendFilterByColor(false);
						setExtendFilterByPrice(false);
						setExtendFilterByStyle(!extendFilterByStyle);
					}}
				>
					<p className='nav-link'>Filter By Style</p>
					<img
						className='filter-category-toggler'
						src={filterCategoryActionIcon({ desiminator: extendFilterByStyle })}
					/>
				</button>
			</div>
			<AnimateHeight height={extend && !isMobile ? '5rem' : 0}>
				<div className='extended-filter-container'>
					{activeFilter === 'price' ? (
						<PriceFilter />
					) : activeFilter === 'color' ? (
						<>
							<section className='input-container flex-row'>
								{/* @ts-ignore */}
								<label red className='input-label color-label nav-link red' htmlFor='red-filter-input'>
									Red
								</label>
								<input className='input-field' type='checkbox'></input>
							</section>
							<section className='input-container flex-row'>
								<label className='input-label nav-link color-label blue' htmlFor='Blue-filter-input'>
									Blue
								</label>
								<input className='input-field' type='checkbox' id='Blue-filter-input'></input>
							</section>
							<section className='input-container flex-row'>
								<label className='input-label nav-link color-label green' htmlFor='green-filter-input'>
									Green
								</label>
								<input className='input-field' type='checkbox' id='green-filter-input'></input>
							</section>
							<section className='input-container flex-row'>
								<label
									className='input-label nav-link color-label orange'
									htmlFor='orange-filter-input'
								>
									Orange
								</label>
								<input className='input-field' type='checkbox' id='orange-filter-input'></input>
							</section>
							<button className='input-container button-outline'>Submit</button>
						</>
					) : activeFilter === 'style' ? (
						<>
							<section className='input-container flex-row'>
								{/* @ts-ignore */}
								<label red className='input-label nav-link' htmlFor='red-filter-input'>
									S
								</label>
								<input className='input-field' type='checkbox'></input>
							</section>
							<section className='input-container flex-row'>
								<label className='input-label nav-link' htmlFor='Blue-filter-input'>
									M
								</label>
								<input className='input-field' type='checkbox' id='Blue-filter-input'></input>
							</section>
							<section className='input-container flex-row'>
								<label className='input-label nav-link' htmlFor='green-filter-input'>
									L
								</label>
								<input className='input-field' type='checkbox' id='green-filter-input'></input>
							</section>
							<button className='input-container button-outline'>Submit</button>
						</>
					) : (
						'No filter selected'
					)}
				</div>
			</AnimateHeight>
		</div>
	);

	function PriceFilter() {
		return (
			<>
				<section className='input-container'>
					<label className='input-label nav-link' htmlFor='min-price-input'>
						Min Price
					</label>
					<input className='input-field' type='number' id='min-price-input' />
				</section>
				<section className='input-container'>
					<label className='input-label nav-link' htmlFor='min-price-input'>
						Max Price
					</label>
					<input className='input-field' type='number' id='min-price-input' />
				</section>
				<button className='input-container button-outline'>Submit</button>
			</>
		);
	}

	function filterCategoryActionIcon({ desiminator }: any) {
		return desiminator ? lessSVG : dropDownSVG;
	}
}

const useActiveFilter = (filterMap: any) => {
	const [activeFilter, setActiveFilter] = useState('none');
	useEffect(() => {
		setActiveFilter(
			(() => {
				let changeTo = 'none2';
				console.log('filterMap', filterMap);
				if (filterMap.extendFilterByPrice) {
					changeTo = 'price';
				} else if (filterMap.extendFilterByColor) {
					console.log('color is tru');
					changeTo = 'color';
				} else if (filterMap.extendFilterByStyle) {
					changeTo = 'style';
				}
				console.log(changeTo, 'changeTo');
				return changeTo;
			})()
		);
	}, [filterMap]);
	console.log(activeFilter);
	return activeFilter;
};
