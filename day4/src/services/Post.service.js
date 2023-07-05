import axios from "axios";

export const getNewsFromApi=  (city='chandigarh')=>axios.post('http://localhost:5000/weather',{city});