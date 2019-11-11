import React from 'react';
import ProjectCard from './ProjectCard'
import ProjectsData from '../Data/ProjectsData.js'



const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2>RECENT PROJECTS</h2>

      <div className="projects-container">
        {ProjectsData.map(project => <ProjectCard project={project} key={project.id} />)}
      </div>
    </div>
  )
}

export default Projects;
