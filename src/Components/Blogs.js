import React from 'react';
import BlogPosts from '../Data/BlogPosts'
import { Card, CardGroup, Button } from 'react-bootstrap'

const Blogs = () => {

  return (
    <div>
      <h2> ARTICLES </h2>
      <CardGroup>
      {BlogPosts.map(blog => 
        <Card blog={blog} key={blog.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={blog.img_url} />
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>
              {blog.description}
              </Card.Text>
                <Button variant="info" href={blog.url} target="_blank">Read</Button>
                    </Card.Body>
                  </Card>
      )}
      </CardGroup>
    </div>
  )
}
export default Blogs;