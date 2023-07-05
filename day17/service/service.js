import axios from 'axios';
export const getNewsFromApi= (input='chandigarh')=>axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=55faf07d362df5164ac1305b7f6c31cb`);