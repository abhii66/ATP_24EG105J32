//Create mini-express app(Separate route)
import exp from 'express'
export const productApp = exp.Router()

//Create product API with below operations
let products=[]

//create new products ({productId,name,brand,price})
    productApp.post('/products',(req,res)=>{
    const newProduct=req.body
    products.push(newProduct)
    //send res
    res.json({message:"Product Added."})
})
//read all products
    
    productApp.get('/products',(req,res)=>{
        res.json({message:"Products",payload:products})
    })

    //read all products by brand
    productApp.get('/products/:brand',(req,res)=>{
    let brandName=req.params.id
    let result=products.find(obj=>obj.brand===brandName.brand)
    if(result===undefined)
        return res.json({message:"Product not found"})
    res.json({message:"Products Details",payload:result})
})
    //update a product
    productApp.put('/products',(req,res)=>{
        let modifiedProduct=req.body
        let index=products.findIndex(obj=>obj.id===modifiedProduct.id)
        if(index===-1)
            return res.json({message:"Product not found."})
        products.splice(index,1,modifiedProduct)
        res.json({message:"Product Updated."})
    })

    //delete a product by id
    productApp.delete('/products/:id',(req,res)=>{
        let idOfProduct=Number(req.params.id)
        let index=products.findIndex(obj=>obj.id===idOfProduct)
        if(index===-1)
            return res.json({message:"Product with the given id is not available."})
        products.splice(index,1)
        res.json({message:"Product deleted."})
    })