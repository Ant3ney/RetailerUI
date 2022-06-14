//@ts-ignore
import logo from './logo.svg';
import './App.css';
//@ts-ignore
import { Nav } from 'retailer-ui';

function App() {
	return (
		/* @ts-ignore */
		<div className='App'>
			<Nav
				leftNav={[
					{
						text: 'Women',
						icon: null,
						subNavItems: [
							{
								text: 'Two Pice',
								slug: 'twopice',
								icon: null,
							},
							{
								text: 'One Pice',
								slug: 'onepice',
								icon: null,
							},
							{
								text: 'Lingerie',
								slug: 'lingerie',
								icon: null,
							},
							{
								text: 'Corsets',
								slug: 'corsets',
								icon: null,
							},
						],
						onClick: null,
					},
					{
						text: 'Men',
						slug: 'airplanes',
						icon: null,
						subNavItems: null,
					},
				]}
				rightNav={[
					{
						text: 'Sign Up',
						slug: 'airplanes',
						icon: null,
						subNavItems: null,
					},
				]}
			/>
			<h1>Testing the component</h1>
		</div>
	);
}

export default App;
