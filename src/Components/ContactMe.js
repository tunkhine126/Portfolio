import React, { Component } from 'react';
import {Form, Button, Container, Col, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
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
        <h3 className="connect">Lets Connect <Mail size={35}/></h3>
          <Container> 
            <Row>
              <Col>
                <Col>
                  <SocialIcon className="github" url="https://github.com/tunkhine126" target="_blank"/> GitHub {''}
                  <SocialIcon className="medium"url="https://medium.com/@tunkhine126" target="_blank" /> Medium 
                </Col><br/>
                <Col>
                  <SocialIcon className="twitter" url="https://twitter.com/TunTheCoder" target="_blank" /> Twitter {''}
                  <SocialIcon className="instagram"url="https://www.instagram.com/tkhine126/" target="_blank" /> Instagram 
                </Col>
              </Col>
              <Col>
              <Form onSubmit={(e) => this.handleContact(e)}>
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
                    Submit
                  </Button>
                </Form>
              <br />
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
  }
  export default ContactMe;