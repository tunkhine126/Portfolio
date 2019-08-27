import React from 'react';
import ProjectsData from '../Data/ProjectsData';
import { Card, CardDeck, ListGroup } from 'react-bootstrap';

const Projects = () => {

  return (
    <div className="projects" >
      <h2> PROJECTS </h2>
      <CardDeck>
        {ProjectsData.map(project =>
          <Card project={project} key={project.id} style={{ width: '10rem' }} >
            <Card.Img variant="top" src={project.img_url} className="projectImage"/>
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
                {project.credentials ? <ListGroup.Item className="projtext">{project.credentials}</ListGroup.Item> : ""}
              </ListGroup>
              {project.github_frontend ? <Card.Link href={project.github_frontend}>GitHub frontend repo</Card.Link> : ""}
              {project.github_backend ? <Card.Link href={project.github_backend}>GitHub backend repo</Card.Link> : ""}
              {/* <Button variant="secondary" href={project.url} target="_blank">Check it out</Button> */}
            </Card.Body>
          </Card>
        )}{' '}
      </CardDeck>
      <br />
    </div>
  )
  }
  export default Projects;