import React from 'react';
import ProjectsData from '../Data/ProjectsData';
import { Card, Row, Col } from 'react-bootstrap';

const Projects = () => {

  return (
    <div id="projects" className="projects">
      <container className="container" fluid>
        <h2> PROJECTS </h2>
            <Row>
              {ProjectsData.map(project =>
                <Col>
                  <Card className="projectCard" border="none" project={project} key={project.id} style={{ width: '20rem', height: '25rem'}}>
                    <div className="face face1">
                      <div className="content">
                        <Card.Img variant="top" src={project.img_url} className="projectImage"/>
                      </div>
                    </div>
                    <div className="face face2">
                      <h4>
                        <Card.Title as='h4'>
                          <Card.Link href={project.project_url}>{project.name}</Card.Link>
                        </Card.Title>
                      </h4>
                      <Card.Body>
                        <p>
                          {project.description}
                        </p>
                          {project.credentials ? <Card.Text className="projtext">{project.credentials}</Card.Text> : ""}
                          {project.github_frontend ? <Card.Link href={project.github_frontend}>GitHub frontend </Card.Link> : ""}
                          {project.github_backend ? <Card.Link href={project.github_backend}>GitHub backend </Card.Link> : ""}
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
              )}
            </Row>
        <br />
      </container>  
    </div>
  )
}
  export default Projects;