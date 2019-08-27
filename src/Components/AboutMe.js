import React from 'react';
import MdCenterFocusStrong from 'react-icons/lib/md/center-focus-strong';
import GoBook from 'react-icons/lib/go/book'
import GoTools from 'react-icons/lib/go/tools';
import { Col, Row } from 'react-bootstrap';

const AboutMe = () => {

return (
  <div id="aboutMe">
    {/* <h2> ABOUT </h2> */}
    <Row>
    <Col xs={6} md={4}>
        <MdCenterFocusStrong size={80} style={{ color: '#1CDBCE' }} />
        <h3 style={{ color: 'black' }}>Focused on Quality</h3>
        <p> A keen attention to detail and strong work ethic result in setting a high bar, and rising to meet it. </p>
    </Col>
    <Col xs={6} md={4}>
        <GoBook size={80} style={{ color: '#C96A19' }} />
        <h3 style={{ color: 'black' }}>Driven by learning</h3>
        <p>Powered by the opportunity to figure things out. It’s fun!</p>
    </Col>

    <Col xs={6} md={4}>
        <GoTools size={80} style={{ color: 'red' }} />
        <h3 style={{ color: 'black' }}>Multi-faceted</h3>
        <p>As a Humanitarian and administration expert, I bring a unique perspective and depth of experience to my work.</p>
    </Col>
    </Row>
  </div>
  )
}
export default AboutMe;
