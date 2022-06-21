import React from 'react';
import './App.css';
import { Nav, LandingScreen, Filter } from './jsBuild';

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
			<LandingScreen
				title='Would you like to buy our girlscout guns?'
				subtitle='Or else.'
				actionText='Buy Our Stuff'
				onAction={() => {
					alert('Orloo!');
				}}
			/>
			<Filter showFilterByPrice={true} showFilterByColor={true} showFilterByStyle={true} />
		</div>
	);
}

export default App;
