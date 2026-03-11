import { Schema,model } from "mongoose";

const productSchema=new Schema({
    productId:{
        type:Number,
        required: [true, "product id is required."],
        //unique:[true,"Id already exists"]
    },
    productName:{
        type:String,
        required:[true,"Product name is required."]
    },
    price:{
        type:Number,
        required:[true,"Price is required."],
        min:[10000,"Price should atleast be 10000"],
        max:[50000,"Price can only be upto 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand Name is required."]
    }
},
{
    versionKey:false,
    timestamps:true
})

export const ProductModel=model("product",productSchema) 
