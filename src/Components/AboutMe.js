import React from 'react';
import MdCenterFocusStrong from 'react-icons/lib/md/center-focus-strong';
import Package from 'react-icons/lib/go/package'
import GoHeart from 'react-icons/lib/go/heart';
import { Col, Row } from 'react-bootstrap';

const AboutMe = () => {

return (
  <div id="aboutMe">
    <h2> ABOUT </h2>
    <Row>
    <Col xs={6} md={4}>
        <MdCenterFocusStrong size={80} style={{ color: '#1CDBCE' }} />
        <h3 style={{ color: 'black' }}>Focused on Quality</h3>
        <p> A keen attention to detail and strong work ethic result in setting a high bar, and rising to meet it. </p>
    </Col>
    <Col xs={6} md={4}>
        <Package size={80} style={{ color: '#C96A19' }} />
        <h3 style={{ color: 'black' }}>Total Package</h3>
        <p> Some text here about moi</p>
    </Col>

    <Col xs={6} md={4}>
        <GoHeart size={80} style={{ color: 'red' }} />
        <h3 style={{ color: 'black' }}>Passion</h3>
        <p> Some text here about moi </p>
    </Col>
    </Row>
  </div>
  )
}
export default AboutMe;
