import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp=exp.Router()

productApp.post("/products",async(req,res)=>{
        //get new product obj from request
        const newProduct=req.body
        //Create newProductDocument
        const newProductDocument=new ProductModel(newProduct)
        //save
        const result= await newProductDocument.save()
        console.log("result: ", result)
        //send res
        res.status(201).json({message:"Product Added."})
    })

productApp.put("/products/:id",async(req,res)=>{
        //get modified product from the req
        const modifiedProduct= req.body
        const uid=req.params.id
        //find product by ID and update
        const updatedProduct= await ProductModel.findByIdAndUpdate(uid,{ $set:{ ...modifiedProduct}},{new: true,runValidators:true})
        //send res
        res.status(200).json({message:"Product Modified",payload:updatedProduct})
    })

productApp.get("/products",async(req,res)=>{
    let productList=await ProductModel.find();
    res.status(200).json({message:"products:",payload:productList})
})

productApp.get("/products/:id",async(req,res)=> {
        //read object id from req params
        const uid=req.params.id
        //find product by id
        const productObj=await ProductModel.findById(uid)  //use findOne() to readd a document with non object id fields.// use findById() to read document with object id.
        //send res
        res.status(200).json({message:'product:',payload:productObj})
    })

productApp.delete("/products/:id",async(req,res)=>{
    let uid=req.params.id
    const deletedProduct=await ProductModel.findByIdAndDelete(uid)
    if(!deletedProduct)
        return res.status(404).json({message:"Product not found."})
    res.status(200).json({message:"Product Deleted."})
})