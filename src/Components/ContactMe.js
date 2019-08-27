import React, { Component } from 'react';
import {Form, Button } from 'react-bootstrap';

import Mail from 'react-icons/lib/go/mail'

class ContactMe extends Component {
  state = {
    Name: [],
    Email:[],
    Message: [] 
  }

    handleContact = (e) => {
      e.preventDefault()
      console.log("hello", e.target.name.value, e.target.email.value, e.target.message.value)
    }

  render() {
    return (
      <div className="contact" id="contactMe">
        <h3 className="connect"><Mail size={40}/></h3>
          <Form className="contactForm" onSubmit={(e) => this.handleContact(e)}>
            <Form.Group controlId="Name">
              <Form.Control name="name" required={true} type="name" placeholder="Enter your name" />
                  <Form.Text className="text-muted">
                    I'll never share your email with anyone.
                  </Form.Text>
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Control name="email" required={true} type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="Message">
              <Form.Label></Form.Label>
              <Form.Control name="message" required={true} as="textarea" rows="2" placeholder="Your message"/>
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