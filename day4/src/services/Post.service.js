import axios from "axios";

export const getNewsFromApi=  (input='chandigarh')=>axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=b3f08617ea95ee74d6b368cf78cf8a50`);