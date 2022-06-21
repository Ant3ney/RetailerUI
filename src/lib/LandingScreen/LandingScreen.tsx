import React from 'react';
import Film from '../Film';
import landingScreen from './landingScreenType';
import '../packageDeps/styles/landingScreen.css';

export default function View({
	onAction,
	videoURL,
	actionSlug,
	url,
	actionText,
	textColor,
	className,
	BGOpacity,
	BGColor,
	title,
	subtitle,
}: landingScreen) {
	const LandingActionButton = () => {
		return actionText && (onAction || url || actionSlug) ? (
			<button
				onClick={
					onAction
						? () => {
								onAction();
						  }
						: () => {
								//TODO: Make this this funtion generic
								window.localStorage.href = actionSlug ? actionSlug : url;
						  }
				}
			>
				{actionText}
			</button>
		) : (
			<></>
		);
	};

	return (
		<div className={`retailer-ui-namespace landing-screen-container ${className}`}>
			<video autoPlay playsInline muted loop className='video-BG' src={videoURL ? videoURL : ''} />
			{(BGOpacity || BGOpacity === 0) && BGColor ? (
				<Film backgroundColor={BGColor} opacity={BGOpacity} zIndex={-9} />
			) : (
				<></>
			)}
			<div className='landing-screen-content retailer-ui-container'>
				<div className='landing-content'>
					<h3 style={{ color: textColor ? textColor : 'initial' }}>{title}</h3>
					<p style={{ color: textColor ? textColor : 'initial' }}>{subtitle}</p>
					<LandingActionButton />
				</div>
			</div>
		</div>
	);
}
