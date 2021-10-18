import React from 'react';
import Post from './Post/Post';
const mockdata = [
  {
    id: "1 + s",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  },
  {
    id: "1 + s2",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  },
  {
    id: "1 + s3",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  },
  {
    id: "1 + s9",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  }
]

const Posts = ({ setCurrentId }) => {
  return (
    <div className='row d-flex'>
      {mockdata.map((e, index) => {
        return <div className='col-4' key={index + Math.random()} ><Post setCurrentId={setCurrentId} post={e} /></div>
      })}
    </div>
  )
}

export default Posts
