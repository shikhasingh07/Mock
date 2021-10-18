import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/index";
const mockdata = [
  {
    id: "1 + s",
    firstName: "Shikha",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  },
  {
    id: "1 + s",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  },
  {
    id: "1 + s",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  },
  {
    id: "1 + s",
    firstName: "John",
    lastName: "Doe",
    phoneNumber: 123345,
    email: "abc@email",
    company: "Abc Compamy"
  }
]
const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    company: ""
  });
  const post = useSelector(() =>
    currentId
      ? mockdata.find((message) => message.id === currentId)
      : null
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      console.log("postdata")
    } else {
      console.log("Upadte Post")
    }
  }
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  return (
    <>
      <form className='p-4 shadow m-4 bg-white rounded'
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <p> {currentId ? `Editing` : "Creating a Post"}</p>
        <div className="form-group">
          <label className='form-group'>First Name </label>
          <input name="firstName" value={postData.firstName} className="form-control " onChange={(e) => setPostData({ ...postData, firstName: e.target.value })} type="text" placeholder='John' />
        </div>
        <div className="form-group mt-2">
          <label>Last Name </label>
          <input className="form-control " name="lastName" value={postData.lastName} onChange={(e) => setPostData({ ...postData, lastName: e.target.value })} type="text" placeholder='Doe' />
        </div>
        <div className="form-group mt-2">
          <label>Phone Number</label>
          <input className="form-control " name="phoneNumber" value={postData.phoneNumber} onChange={(e) => setPostData({ ...postData, phoneNumber: e.target.value })} type="tel" pattern="[0-9]" placeholder='123' />
        </div>
        <div className="form-group mt-2">
          <label>Email</label>
          <input className="form-control " name="email" value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} type='email' placeholder='abc@gmail.com' />
        </div>
        <div className="form-group mt-2">
          <label>Company Name</label>
          <input className="form-control " name="Company" value={postData.company} onChange={(e) => setPostData({ ...postData, company: e.target.value })} type="text" placeholder='Abc' />
        </div>
        <button
          className="form-control mt-4 btn btn-info text-secondary "
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Form;
