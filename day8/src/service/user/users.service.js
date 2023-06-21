import axios from "axios";
export const fetchUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');
export const fetchPostComments = (id) => axios.get(`https://jsonplaceholder.typicode.cocomments?postId=${id}`);
export const fetchUserPost = (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

