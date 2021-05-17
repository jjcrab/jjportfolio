import React from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import { HashLink } from 'react-router-hash-link';
import Bounce from 'react-reveal/Bounce';

const Contact = () => {
	return (
		<div id='contact'>
			<div className='contactdiv'></div>
			<div className='contactInfo'>
				<h1>Get In Touch</h1>
				<div className='contactText'>
					<p>
						I am currently looking for new opportunities. Happy to connect with
						you.{' '}
					</p>
					<a
						target='_blank'
						rel='noreferrer'
						href='mailto:jingjingli714@hotmail.com'>
						<Bounce>Say Hello</Bounce>
					</a>
				</div>
				<div className='contactback'>
					<HashLink to='/#home' className='links'>
						<NavigationIcon fontSize='large' style={{ color: 'black' }} />
					</HashLink>
				</div>
			</div>
		</div>
	);
};

export default Contact;
