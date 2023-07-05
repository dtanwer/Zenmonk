import mongoose from 'mongoose'

const UserSchma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

export const userModel=mongoose.model('users',UserSchma)
