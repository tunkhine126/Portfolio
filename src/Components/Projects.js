import React from 'react';
import ProjectsData from '../Data/ProjectsData';
import { Card, CardGroup, ListGroup } from 'react-bootstrap';

const Projects = () => {

  return (
    <div className="projects" id="projects">
      <h2> PROJECTS </h2>
      <CardGroup>
        {ProjectsData.map(project =>
          <Card project={project} key={project.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.img_url} />
            <Card.Body>
              <Card.Header as="h4"> 
                <Card.Link href={project.project_url}>{project.name}</Card.Link>
              </Card.Header><br/>
              <Card.Subtitle>
                {project.description}
              </Card.Subtitle><br />
              <ListGroup>
                <ListGroup.Item className="projtext">
                {project.framework}
                </ListGroup.Item>
                <ListGroup.Item className="projtext">
                {project.credentials}
                </ListGroup.Item>
              </ListGroup>
              {project.github_frontend ? <Card.Link href={project.github_frontend}>Frontend Repository</Card.Link> : ""}
              <Card.Link href={project.github_backend}>Backend Repository</Card.Link>
              {/* <Button variant="secondary" href={project.url} target="_blank">Check it out</Button> */}
            </Card.Body>
          </Card>
        )}{' '}
      </CardGroup>
      <br />
    </div>
  )
  }
  export default Projects;