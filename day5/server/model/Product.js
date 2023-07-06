import mongoose from 'mongoose'
const productSchma=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    quantity:{
        type:String,
    },
    ownerId:{
        type:String,
        required:true,
    },
    isDraft:{
        type:Boolean,
        required:true,
    },
})

export const productModel=mongoose.model('products',productSchma)