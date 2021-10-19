import axios from 'axios';
export const fetchPosts = () => axios.get(`/employees`);
export const creatPost = (newPost) => axios.post(`/create`, newPost);
export const updatePost = (id, updatePost) => axios.patch(`/update/${id}`, updatePost);