import React from 'react';
import './App.css';
/* import { Landing } from './lib'; */
import { Nav } from './jsBuild';

function App() {
	return (
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
		</div>
	);
}

export default App;
