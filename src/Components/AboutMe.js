import React from 'react';
import MdCenterFocusStrong from 'react-icons/lib/md/center-focus-strong';
// import MdArrowDropDownCircle from 'react-icons/lib/md/arrow-drop-down-circle';
import GoBook from 'react-icons/lib/go/book'
import GoTools from 'react-icons/lib/go/tools';
import GoGitMerge from 'react-icons/lib/go/git-merge'
import { Col, Row, Container, 
  // Accordion, 
  // Card, 
  // Button 
} from 'react-bootstrap';


const AboutMe = () => {

return (
  <div id="aboutMe">
    <h2>{' '}</h2>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <MdCenterFocusStrong size={80} style={{ color: '#1CDBCE' }} />
              <h3 style={{ color: 'black' }}>Focused on Quality</h3>
            <p> A keen attention to detail and strong work ethic result in setting a high bar, and rising to meet it. </p>
          </Col>
          <Col xs={6} md={3}>
            <GoBook size={80} style={{ color: '#C96A19' }} />
              <h3 style={{ color: 'black' }}>Driven by learning</h3>
            <p>I enjoy figuring things out and sharing that knowledge! It’s fun!</p>
          </Col>
          <Col xs={6} md={3}>
           <GoTools size={80} style={{ color: 'red' }} />
             <h3 style={{ color: 'black' }}>Multi-faceted</h3>
            <p>As a Humanitarian and administration expert, I bring a unique perspective and depth of experience to my work.</p>
          </Col>
          <Col xs={6} md={3}>
            <GoGitMerge size={80} style={{ color: 'purple' }} />
            <h3 style={{ color: 'black' }}>Collaborative</h3>
            <p>A strong belief in collaboration to craft solid and creative code.</p>
          </Col>
        </Row>
      </Container>
      
    {/* <Container>
      <Accordion defaultActiveKey="1">
        <Card>
          <div>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <MdArrowDropDownCircle size={50} style={{ color: '#A031FF' }} />
            </Accordion.Toggle>
          </div>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>I'm a full-stack developer with an outstanding work ethic, focus, and knowledge base across computer languages. 
              Adept at explaining complex software development concepts and processes to audiences at all levels in a clear and accessible manner. 
              Critical thinker, thoughtful communicator and able to work well independently or as part of a multi-functional team.</p>
              <p>Experienced in React, Redux, JavaScript, Ruby on Rails, PostgreSQL, GitHub, HTML, CSS, Bootstrap, and Semantic U.I. </p>
              <p>Lover of bike racing, learning, and growth mindset.</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container><br/> */}
  </div>
 )
}
export default AboutMe;
