import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import JingjingLiResume2021 from './images/JingjingLiResume2021.pdf';
import logo from './images/logo.png';

const Navi = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand='md' bg='light'>
				<Navbar.Brand href='#home' className='logo'>
					<img src={logo} alt='logo' className='logo' />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					className='berger'
				/>
				<Navbar.Collapse id='responsive-navbar-nav' className='collaps'>
					<Nav className='mr-auto'>
						<Nav.Link href='/home' className='navlink'>
							Home
						</Nav.Link>
						<Nav.Link href='/#about' className='navlink'>
							About
						</Nav.Link>
						<Nav.Link href='/#projects' className='navlink'>
							Projects
						</Nav.Link>
						<Nav.Link href='/#contact' className='navlink'>
							Contact
						</Nav.Link>
						<Nav.Link
							href={JingjingLiResume2021}
							target='_blank'
							className='navlink'>
							Resume
						</Nav.Link>
					</Nav>
					<Navbar.Brand className='social d-flex justify-content-center'>
						<a
							href='https://www.linkedin.com/in/jingjinglisoftware/'
							target='_blank'
							rel='noreferrer'
							className='largesociallink'>
							<LinkedInIcon fontSize='large' />
						</a>

						<a
							href='https://twitter.com/Jingjing_Codes'
							target='_blank'
							rel='noreferrer'
							className='largesociallink'>
							<TwitterIcon fontSize='large' />
						</a>

						<a
							href='https://github.com/jjcrab'
							target='_blank'
							rel='noreferrer'
							className='largesociallink'>
							<GitHubIcon fontSize='large' />
						</a>
					</Navbar.Brand>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navi;
