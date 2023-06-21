import axios from "axios";
export const fetchUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}
export const fetchPostComments = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
}
export const fetchUserPost = (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
}
