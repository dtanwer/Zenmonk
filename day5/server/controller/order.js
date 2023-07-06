import {orderModel} from '../model/Order.js'

export const getOrders=async (req,res)=>{
    const id=req.params.id;
    try {
        const resp=await  orderModel.find({owner:id})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }

}
export const addOrder=async (req,res)=>{
    try {
        const order=new  orderModel(req.body);
        await order.save();
        res.status(200).send("oder Saved");
    } catch (error) {
        console.log(error)
    }

}