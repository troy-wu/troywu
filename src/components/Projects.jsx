import React from 'react';
import './Projects.css';

const Project = ({ title, description, imageUrl, repoUrl }) => (
  <div className="project">
    <div className="project-image">
      <img src={imageUrl} alt={`${title}`} />
    </div>
    <div className="project-details">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <button className="project-button">View on GitHub</button>
      </a>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <Project 
      title="Project 1" 
      description="Description of project 1." 
      imageUrl="https://via.placeholder.com/150" 
      repoUrl="https://github.com/your-username/project1" 
    />
    <Project 
      title="Project 2" 
      description="Description of project 2." 
      imageUrl="https://via.placeholder.com/150" 
      repoUrl="https://github.com/your-username/project2" 
    />
    <Project 
      title="Project 3" 
      description="Description of project 3." 
      imageUrl="https://via.placeholder.com/150" 
      repoUrl="https://github.com/your-username/project3" 
    />
  </section>
);

export default Projects;
