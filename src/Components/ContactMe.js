import React, { Component } from 'react';
import {Form, Button, Container, Col, Row } from 'react-bootstrap';

import Mail from 'react-icons/lib/go/mail'

class ContactMe extends Component {
  state = {
    Name: '',
    Email:'',
    Message: '' 
  }

    handleContact = (e) => {
      e.preventDefault()
      console.log("hello", e)
    }

  render() {
    return (
      <div className="contact" id="contactMe">
        <h3 className="connect"><Mail size={40}/></h3>
          <Form className="contactForm" onSubmit={(e) => this.handleContact(e)}>
            <Form.Group controlId="Name">
                <Form.Control type="name" placeholder="Enter your name" />
                  <Form.Text className="text-muted">
                    I'll never share your email with anyone.
                  </Form.Text>
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="Message">
              <Form.Label></Form.Label>
                <Form.Control as="textarea" rows="2" placeholder="Your message"/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form><br />
        </div>
      )
    }
  }
  export default ContactMe;