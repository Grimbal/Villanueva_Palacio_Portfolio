import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

import makeItImage from '../../assets/project1.png'; 
import project2 from '../../assets/project2.png';
import { useAnimateOnScroll } from '../../hooks/useAnimateOnScroll.ts';

const projects = [
  {
    image: makeItImage,
    title: 'MakeIt! A Filipino Recipes Website',
    description: 'A static website containing recipes of Filipino cuisines with the main ingredients of chicken, pork and beef.',
  },
  {
    image: project2, 
    title: 'Grimoire! An Anime Library',
    description: 'A static website containing different genres of anime, it includes its synopsis, trailers, and the epsiodes for the user to watch.',
  },
];

const Projects: React.FC = () => {
     
    const { ref: projectsRef, isVisible: projectsVisible } = useAnimateOnScroll(0.1, false);

    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-heading">Projects</h2>
            <div 
                ref={projectsRef} 
                className={`projects-grid ${projectsVisible ? 'is-visible' : ''}`}
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index} 
                        image={project.image}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;