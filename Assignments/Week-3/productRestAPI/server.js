import exp, { json } from 'express';
import {connect} from 'mongoose';
import { userApp } from './APIs/UserAPI.js'
import { productApp } from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser';
const app=exp()
//add body parser
app.use(exp.json())
//add cookie-parser middleware
app.use(cookieParser())
//forwarding to userApp when /user-api is countered
app.use('/user-api',userApp)
//forwarding to productApp when /product-api is countered
app.use('/product-api',productApp)
//crreating a port number
const port=6707

//connect to DB Server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/sample2");
        console.log("DB connection success.")

        //start server
        app.listen(port,()=>console.log("server on port 6707..."))
    } catch(err) {
        console.log("Error in DB connection :", err)
    }
}

connectDB();

//error handling middleware
app.use((err,req,res,next)=>{
   //basic error handler: res.json({message:"error occured",error:err.message})
   console.log(err.name)
   //validation error
   if(err.name==="ValidatonError")
    return res.status(400).json({message:"error occured.",error: err.message})
   //CastError
   if(err.name==="CastError")
    return res.status(400).json({message:"error occured.",error: err.message})
   res.status(500).json({message:"error occured.",error: err.message})
    })
