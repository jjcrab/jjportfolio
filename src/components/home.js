import React from 'react';
import { HashLink } from 'react-router-hash-link';

const home = () => {
	return (
		<div className='home' id='home'>
			<div>
				<h1>
					Hello, my name is <span>Jingjing Li.</span>
				</h1>

				<h1>I am a full-stack Software Engineer.</h1>

				<div className='homelink'>
					<HashLink to='/#about' className='links'>
						<h3>Learn More</h3>
					</HashLink>
				</div>
			</div>
		</div>
	);
};

export default home;
