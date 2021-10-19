import React from 'react'
import { Card } from 'react-bootstrap'

const Post = ({ post, setCurrentId }) => {
  console.log(post, "Current Post")
  return (
    <Card className='mt-3  shadow  bg-white rounded'>
      <div className='card-body'>
        <h5 className="card-title">{post.employee_name}</h5>
        <h6 className="card-text ">{post.employee_salary}</h6>
        <h6 className="card-text ">{post.employee_age}</h6>
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
