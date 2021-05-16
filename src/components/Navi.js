import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navi = () => {
	return (
		<div>
			<Navbar bg='light' expand='lg'>
				<Navbar.Brand href='#home'>Jingjing Li</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/#about'>About</Nav.Link>
						<Nav.Link href='/#projects'>Projects</Nav.Link>
						<Nav.Link href='/#contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Navi;
