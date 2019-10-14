import React from 'react';
import ProjectsData from '../Data/ProjectsData';
import { Card, CardDeck, Container } from 'react-bootstrap';

const Projects = () => {

  return (
    <div id="projects" className="projects">
      <Container fluid>
      <h2> PROJECTS </h2>
      <CardDeck>
        {ProjectsData.map(project =>
          <Card project={project} key={project.id} style={{ width: '10rem' }} >
            <Card.Img variant="top" src={project.img_url} className="projectImage"/>
            <Card.Body>
              <Card.Header as="h4"> 
                <Card.Link href={project.project_url}>{project.name}</Card.Link>
              </Card.Header><br/>
              <Card.Subtitle fluid>
                {project.description}
              </Card.Subtitle><br />
                <Card.Text fluid className="projtext">
                {project.framework}
                </Card.Text>
                {project.credentials ? <Card.Text className="projtext">{project.credentials}</Card.Text> : ""}
              {project.github_frontend ? <Card.Link href={project.github_frontend}>GitHub frontend </Card.Link> : ""}
              {project.github_backend ? <Card.Link href={project.github_backend}>GitHub backend </Card.Link> : ""}
              {/* <Button variant="secondary" href={project.url} target="_blank">Check it out</Button> */}
            </Card.Body>
          </Card>
        )}{' '}
      </CardDeck>
      <br />
      </Container>  
    </div>
  )
  }
  export default Projects;