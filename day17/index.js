import express from 'express'
import cors from 'cors'
import authRouter from './routers/auth/auth.js'
import weatherRouter from './routers/weather/weather.js'
import mongoose from 'mongoose'

const app=express();
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Äpi is working')
})

app.use('/auth',authRouter);
app.use('/weather',weatherRouter);

try {
    mongoose.connect('mongodb+srv://dtanwer:123123123@cluster0.i2twba9.mongodb.net/myweather?retryWrites=true&w=majority');
    console.log("Connected to MongoDb")   
} catch (error) {
    console.log(error)
    throw error
}

app.listen(5000,()=>{
    console.log('server is Running at 5000');
})