import React from 'react';
import BlogPosts from '../Data/BlogPosts'
import { Card, CardDeck, Button, Container, Row, Col } from 'react-bootstrap'

const Blogs = () => {

  return (
    <div id="articles" className="articles" class="mx-auto">
      <Container fluid>
        <h2> ARTICLES </h2>
          <CardDeck>
            <Row>
              {BlogPosts.map(blog => 
                <Col m="4">
                  <Card blog={blog} key={blog.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={blog.img_url} />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <Button variant="dark" href={blog.url} target="_blank">Read</Button>
                    </Card.Body>
                  </Card>
                  <br />
                </Col>
              )}
            </Row>
          </CardDeck>
          <br/>
      </Container>
    </div>
  )
}
export default Blogs;