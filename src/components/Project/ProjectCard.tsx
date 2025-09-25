import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <h3 className="project-card-title">{title}</h3>
      <p className="project-card-description">{description}</p>
    </div>
  );
};

export default ProjectCard;