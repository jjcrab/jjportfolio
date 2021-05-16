import React from 'react';
import projectdata from '../projectdata.json';
import Projectcard from './Projectcard';

const url = process.env.PUBLIC_URL + `/projectimages/`;

const Projects = () => {
	return (
		<div id='projects'>
			<div className='projectdiv'></div>
			<h1>Projects</h1>
			<div>
				{projectdata.map((project) => (
					<div className='eachProject'>
						{project.id % 2 === 0 ? (
							<img
								src={url + project.img}
								alt='project'
								className='projectImg'
							/>
						) : (
							''
						)}
						<Projectcard>
							<h3>{project.title}</h3>
							<p>{project.info}</p>
							<p>{project.tech}</p>
							<a target='_blank' rel='noreferrer' href={project.frontendurl}>
								live{' '}
							</a>
							{project.backendurl ? (
								<a target='_blank' rel='noreferrer' href={project.backendurl}>
									backendurl
								</a>
							) : (
								''
							)}
							<a target='_blank' rel='noreferrer' href={project.frontendrepo}>
								frontrepo
							</a>
							{project.backendrepo ? (
								<a target='_blank' rel='noreferrer' href={project.backendrepo}>
									backendrepo
								</a>
							) : (
								''
							)}
						</Projectcard>
						{project.id % 2 !== 0 ? (
							<img
								src={url + project.img}
								alt='project'
								className='projectImg'
							/>
						) : (
							''
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
