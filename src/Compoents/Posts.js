import React, { useEffect } from 'react';
import Post from './Post/Post';
import { getPosts } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
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
  const { posts, isLoading } = useSelector(state => state.posts);
  console.log(posts.data)
  const dispatch = useDispatch();
  useEffect(() => {
    return dispatch(getPosts())
  }, [])

  // const { posts, isLoading } = useSelector((state) => state.posts);
  return (
    <div className='row d-flex'>
      {
        posts?.data?.map((e, index) => {
          return <div className='col-4' key={index + Math.random()} ><Post setCurrentId={setCurrentId} post={e} /></div>
        })
      }
    </div>
  )
}

export default Posts
