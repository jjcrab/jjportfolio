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
						<Nav.Link
							href='https://www.linkedin.com/in/jingjinglisoftware/'
							target='_blank'
							rel='noreferrer'
							className='sociallink'>
							<LinkedInIcon
								fontSize='large'
								style={{ color: 'rgb(24, 65, 119)' }}
							/>
						</Nav.Link>
						<Nav.Link
							href='https://twitter.com/Jingjing_Codes'
							target='_blank'
							rel='noreferrer'
							className='sociallink'>
							<TwitterIcon
								fontSize='large'
								style={{ color: 'rgb(24, 65, 119)' }}
							/>
						</Nav.Link>
						<Nav.Link
							href='https://github.com/jjcrab'
							target='_blank'
							rel='noreferrer'
							className='sociallink'>
							<GitHubIcon
								fontSize='large'
								style={{ color: 'rgb(24, 65, 119)' }}
							/>
						</Nav.Link>
					</Navbar.Brand>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navi;
