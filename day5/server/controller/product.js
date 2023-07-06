import { productModel } from "../model/Product.js";
export const addProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body)
        await newProduct.save();
        return res.status(200).send("Product Saved!!");
    } catch (error) {
        console.log(error)
        return res.status(400).json(error);
    }
}

export const updateProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const resp= await productModel.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
export const getProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const resp= await productModel.findById(id)
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
export const deleteProduct= async (req,res)=>{
    const id=req.params.id;
    try {
        const resp= await productModel.findByIdAndDelete(id)
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
export const getProducts= async (req,res)=>{
    try {
        const resp= await productModel.find({isDraft:false})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}
export const getProductsByOwner= async (req,res)=>{
    const ownerId=req.params.ownerId;
    try {
        const resp= await productModel.find({ownerId,isDraft:false})
        res.status(200).json(resp)
    } catch (error) {
        return res.status(400).json(error);
    }
}
export const getDraftProductsWithOwner= async (req,res)=>{
    const ownerId=req.params.ownerId;
    try {
        const resp= await productModel.find({ownerId,isDraft:true})
        res.status(200).json(resp)
    } catch (error) {
        console.log(error)
    }
}