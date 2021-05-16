import React from 'react';
import { HashLink } from 'react-router-hash-link';

const home = () => {
	return (
		<div className='home'>
			<div>
				<h1>Hello, my name is Jingjing Li.</h1>
				<h1>I am a full-stack Software Engineer.</h1>
				<button>
					<HashLink to='/#about'>Learn More</HashLink>
				</button>
			</div>
		</div>
	);
};

export default home;
