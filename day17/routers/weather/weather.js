import express from 'express';
import axios from 'axios';
import { weatherModel } from '../../model/Weather.js';
import { getNewsFromApi } from '../../service/service.js';
import e from 'express';

const router = express.Router()
router.post('/', async (req, res) => {
    try {
        const city = req.body.city
        const resp = await getNewsFromApi(city);
        const name = resp.data?.name.toLowerCase()
        const cod = resp?.data?.weather[0]?.icon
        const weather = resp?.data?.weather[0]?.main
        const temp = resp?.data?.main?.temp
        const humidity = resp?.data?.main?.humidity
        const pressure = resp?.data?.main?.pressure
        const wind = resp?.data?.wind?.speed
        try {
            const data = await weatherModel.find({name:city});
            if(data.length===0)
            {
                const news=new  weatherModel({name,cod,weather,temp,humidity,pressure,wind});
                await news.save();
                return res.json(news);
            }
            else
            {
                const news = await weatherModel.findByIdAndUpdate(data[0].id, {name,cod,weather,temp,humidity,pressure,wind},{ new: true });
                return res.json(news);
            }

        }
        catch (err) {
            console.log(err)
        }
    }
    catch (error) {
        const data = await weatherModel.find({name:req.body.city});
        if(data.length===0)
        {
            return res.status(404).send('No data In data Base And newapi is not working');
        }
        else{
            return res.json(data[0]);
        }

    }
})
export default router