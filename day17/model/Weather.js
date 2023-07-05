import mongoose from 'mongoose'
const WeatherSchma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    temp:{
        type:String,
        required:true,
    },
    pressure:{
        type:String,
        required:true,
    },
    humidity:{
        type:String,
        required:true,
    },
    wind:{
        type:String,
        required:true,
    },
    cod:{
        type:String,
        required:true,
    },
    weather:{
        type:String,
        required:true,
    }   
})

export const weatherModel=mongoose.model('weather',WeatherSchma)
