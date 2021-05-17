import React from 'react';
import profilepic from './images/profilepic.png';

const About = () => {
	return (
		<div id='about' className='about'>
			<div className='aboutdiv'></div>
			<h1>About Me</h1>
			<div className='aboutMe'>
				<div className='profilediv'>
					<img src={profilepic} alt='profile' />
				</div>
				<div className='introduction'>
					<h5>
						Hi friends! I am an enthusiastic full stack developer with an
						extensive background in Finance and Risk Management and an artist at
						heart. I've had exposure to a wide range of technologies and am
						passionate about utilizing my experience to design and build web
						applications that can touch people's lives. Outside of work, I am a
						foodie and outdoorsy girl who loves to travel and am constantly
						drawing inspiration from the world around me.
					</h5>

					<br></br>
					<h3>Skillset</h3>
					<div>
						<a href='https://getbootstrap.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
								alt='bootstrap'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://www.w3schools.com/css/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg'
								alt='css3'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://www.djangoproject.com/'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-original.svg'
								alt='django'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://expressjs.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg'
								alt='express'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://git-scm.com/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg'
								alt='git'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://heroku.com' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg'
								alt='heroku'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://www.w3.org/html/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg'
								alt='html5'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg'
								alt='javascript'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://mochajs.org' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg'
								alt='mocha'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://www.mongodb.com/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg'
								alt='mongodb'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://cdn.worldvectorlogo.com/logos/nextjs-3.svg'
								alt='nextjs'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://nodejs.org' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg'
								alt='nodejs'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a
							href='https://www.postgresql.org'
							target='_blank'
							rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg'
								alt='postgresql'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://www.python.org' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg'
								alt='python'
								width='40'
								height='40'
							/>{' '}
						</a>{' '}
						<a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
							{' '}
							<img
								src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg'
								alt='react'
								width='40'
								height='40'
							/>{' '}
						</a>
					</div>
					<br></br>
					<h3>Experience</h3>
					<p>2021 - present: Full-Stack Software Engineer</p>
					<p>2015 - 2021: Risk Management Analyst</p>
				</div>
			</div>
		</div>
	);
};

export default About;