import React, { useEffect, useState } from 'react'
import './index.css';
import bc from '../../SVG/background.svg'
import BannerTemp from '../../Components/BannerTemp'
import Temprature from '../../Components/Temprature';
import { getNewsFromApi } from '../../services/Post.service';
const Home = () => {
    const [cityInput,setCityInput]=useState("chandigarh");
    const [news, setNews] = useState({
        "coord": {
          "lon": 76.7933,
          "lat": 30.7343
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 311.61,
          "feels_like": 310.91,
          "temp_min": 311.61,
          "temp_max": 311.61,
          "pressure": 998,
          "humidity": 22,
          "sea_level": 998,
          "grnd_level": 961
        },
        "visibility": 10000,
        "wind": {
          "speed": 5.9,
          "deg": 300,
          "gust": 7.04
        },
        "clouds": {
          "all": 36
        },
        "dt": 1686825483,
        "sys": {
          "country": "IN",
          "sunrise": 1686786574,
          "sunset": 1686837414
        },
        "timezone": 19800,
        "id": 1274746,
        "name": "Chandigarh",
        "cod": 200
      });
    useEffect(() => {

        const getNews = async () => {
            try {
                const res= await getNewsFromApi(cityInput);
                setNews(res.data);
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getNews();
        console.log(cityInput);

    }, [cityInput])
  
    return (
        <div className='Home'>
            <div className="Cards">
                <BannerTemp data={news} />
                <Temprature data={news} setCityInput={setCityInput} />
            </div>
        </div>

    )
}

export default Home