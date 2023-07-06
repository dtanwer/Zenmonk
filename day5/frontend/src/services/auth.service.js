import axios from "axios";
export const loginUser=  (data)=>axios.post('http://localhost:5000/auth/login',data);
export const signUpUser=  (data)=>axios.post('http://localhost:5000/auth/signup',data);