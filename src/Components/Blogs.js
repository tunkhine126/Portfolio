import React from 'react';
import BlogPosts from '../Data/BlogPosts'
import { Card, CardDeck, Button } from 'react-bootstrap'

const Blogs = () => {

  return (
    <div id="articles">
      <h2> ARTICLES </h2>
      <CardDeck>
      {BlogPosts.map(blog => 
        <Card blog={blog} key={blog.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog.img_url} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
              {blog.description}
              </Card.Text>
                <Button variant="dark" href={blog.url} target="_blank">Read</Button>
                    </Card.Body>
                  </Card>
      )}
      </CardDeck>
    </div>
  )
}
export default Blogs;