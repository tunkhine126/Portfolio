import React from 'react';
import MdCenterFocusStrong from 'react-icons/lib/md/center-focus-strong';
import Package from 'react-icons/lib/go/package'
import { Col, Row } from 'react-bootstrap';

const AboutMe = () => {

return (
  <div>
    <h2> ABOUT </h2>
    <Row>
    <Col xs={6} md={4}>
      <MdCenterFocusStrong size={80} style={{ color: 'grey' }} />
      <h3 style={{ color: 'teal' }}>Focused</h3>
    </Col>
    <Col xs={6} md={4}>
      <Package size={80} style={{ color: 'grey' }} />
      <h3 style={{ color: 'teal' }}>Total Package</h3>
    </Col>

    <Col xs={6} md={4}>

    </Col>
    </Row>
  </div>
  )
}
export default AboutMe;
