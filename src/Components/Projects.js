import React from 'react';
import ProjectsData from '../Data/ProjectsData';
// import Images from './Images';
import { Card, CardGroup, Button } from 'react-bootstrap';

const Projects = () => {

  return (
    <div className="projects">
      <h2> PROJECTS </h2>
      {console.log(ProjectsData)}
      <CardGroup>
        {ProjectsData.map(project =>
          <Card project={project} key={project.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.img_url} />
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <Button variant="secondary" href={project.url} target="_blank">Check it out</Button>
            </Card.Body>
          </Card>
        )}
      </CardGroup>
      <br />
    </div>
  )
  }
  export default Projects;