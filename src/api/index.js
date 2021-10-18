import axios from 'axios';
export const fetchPosts = () => axios.get(``);
export const creatPost = (newPost) => axios.post("/posts", newPost);
export const updatePost = (id, updatePost) => axios.patch(`/posts/${id}`, updatePost);