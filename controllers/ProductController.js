const productSchema = require('../model/ProductModel');

const createProduct = async (req,res)=>{

    try{
        const product = await productSchema.create(req.body);
        res.status(201).json({
            data:product
        })
    }
    catch(err){
        res.status(500).json({
            message:"server error"
        })
    }
}
const getProduct = async (req,res)=>{
    try{
        const product = await productSchema.find();
        res.status(200).json({
            data:product,
            message:"success"
        })
    }
    catch(err){
        res.status(500).json({
            message:"server error"
        })
    }
}
module.exports = {createProduct,getProduct};