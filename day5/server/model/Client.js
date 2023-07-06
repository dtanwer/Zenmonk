import mongoose from 'mongoose'
const ClientSchma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true,
    },
    address:{
        type:String
    },
    password:{
        type:String,
        required:true,
    }
})

export const clientModel=mongoose.model('clients',ClientSchma)