import React from 'react';
import profilepic from './images/profilepic.png';

const About = () => {
	return (
		<div id='about'>
			<h1>About Me</h1>
			<div className='aboutMe'>
				<div>
					<img src={profilepic} alt='profile' />
				</div>
				<div>
					<h3>Brief Introduction</h3>
					<h3>Skillset</h3>
					<h3>Experience</h3>
				</div>
			</div>
		</div>
	);
};

export default About;
