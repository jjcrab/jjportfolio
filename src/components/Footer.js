import React from 'react';
import { HashLink } from 'react-router-hash-link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<p className='copyright'>
					<HashLink to='/#home' className='links'>
						JINGJING LI
					</HashLink>{' '}
					&copy; {new Date().getFullYear()}{' '}
				</p>
				<a
					href='https://www.linkedin.com/in/jingjinglisoftware/ '
					target='_blank'
					rel='noreferrer'
					className='sociallink'>
					<LinkedInIcon fontSize='small' />
				</a>
				<a
					href='https://twitter.com/Jingjing_Codes'
					target='_blank'
					rel='noreferrer'
					className='sociallink'>
					<TwitterIcon fontSize='small' />
				</a>
				<a
					href='https://github.com/jjcrab'
					target='_blank'
					rel='noreferrer'
					className='sociallink'>
					<GitHubIcon fontSize='small' />
				</a>
			</div>
		</div>
	);
};

export default Footer;
