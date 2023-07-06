import axios from "axios";
export const addProduct=  (data)=>axios.post('http://localhost:5000/product/add',data);
export const getProducts= (id)=>axios.get(`http://localhost:5000/product/owner/${id}`);
export const getProductsForUsers= (id)=>axios.get(`http://localhost:5000/product`);
export const getDraftProducts= (id)=>axios.get(`http://localhost:5000/product/ownerDraft/${id}`);
export const deleteProduct= (id)=>axios.delete(`http://localhost:5000/product/${id}`);