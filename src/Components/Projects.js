import React from 'react';
import ProjectsData from '../Data/ProjectsData';
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';

const Projects = () => {

  return (
    <div id="projects" className="projects">
      <Container fluid>
        <h2> PROJECTS </h2>
          <CardDeck>
            <Row>
              {ProjectsData.map(project =>
                <Col m="4">
                  <Card project={project} key={project.id} style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={project.img_url} className="projectImage"/>
                      <Card.Body>
                        <Card.Title as="h4"> 
                          <Card.Link href={project.project_url}>{project.name}</Card.Link>
                        </Card.Title>
                        <Card.Text fluid>
                          {project.description}
                        </Card.Text>
                          {project.credentials ? <Card.Text className="projtext">{project.credentials}</Card.Text> : ""}
                          {project.github_frontend ? <Card.Link href={project.github_frontend}>GitHub frontend </Card.Link> : ""}
                          {project.github_backend ? <Card.Link href={project.github_backend}>GitHub backend </Card.Link> : ""}
                      </Card.Body>
                    </Card>
                  <br />
                </Col>
              )}
            </Row>
          </CardDeck>
        <br />
      </Container>  
    </div>
  )
  }
  export default Projects;