import React, { useEffect, useState } from 'react'
import './index.css';
import bc from '../../SVG/background.svg'
import BannerTemp from '../../Components/BannerTemp'
import Temprature from '../../Components/Temprature';
import { getNewsFromApi } from '../../services/Post.service';
const Home = () => {
    const [cityInput,setCityInput]=useState("chandigarh");
    const [news, setNews] = useState({});
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