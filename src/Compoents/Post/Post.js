import React from 'react'
import { Card } from 'react-bootstrap'

const Post = ({ post, setCurrentId }) => {
  return (
    <Card className='mt-3  shadow  bg-white rounded'>
      <div className='card-body'>
        <h5 className="card-title">{post.firstName}</h5>
        <h6 className="card-text ">{post.lastName}</h6>
        <h6 className="card-text ">{post.phoneNumber}</h6>
        <h6 className="card-text ">{post.email}</h6>
        <h6 className="card-text ">{post.company}</h6>
      </div>
      <button onClick={(e) => {
        console.log(post.id)
        e.stopPropagation();
        setCurrentId(post.id);
      }}>Update</button>
    </Card>
  )
}

export default Post
