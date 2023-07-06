import mongoose from 'mongoose'
const orderSchma=new mongoose.Schema({
    owner:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    clintId:{
        type:String,
        require:true
    },
    productId:{
        type:String,
        require:true
    },
    quantity:{
        type:String,
        required:true,
    }
})

export const orderModel=mongoose.model('orders',orderSchma)