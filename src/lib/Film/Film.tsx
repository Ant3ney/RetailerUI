import '../packageDeps/styles/film.css';
import film from './filmType';

export default function FilmView({ backgroundColor, opacity, zIndex }: film) {
	const formatedOpacity = (() => {
		switch (opacity) {
			case null:
				return '0.3';
			case undefined:
				return '0.3';
			case 0:
				return '0';
			default:
				return opacity / 100 + '';
		}
	})();
	return (
		<div
			className='film-container'
			style={{
				backgroundColor: backgroundColor ? backgroundColor : 'black',
				opacity: formatedOpacity,
				zIndex: zIndex ? zIndex : -5,
			}}
		></div>
	);
}
