// productRoutes.js - Product Management API
import exp from 'express';
import { ProductModel } from '../models/ProductModel.js';

export const productApp = exp.Router();

// Create - Add new product
productApp.post("/products", async (req, res) => {
    // Get new product obj from request
    const newProduct = req.body;

    // Create newProductDocument
    const newProductDocument = new ProductModel(newProduct);

    // Save to database
    const result = await newProductDocument.save();
    console.log("result: ", result);

    // Send response
    res.status(201).json({ 
        message: "Product Added.", 
        payload: result 
    });
});

// Read All - Get all products
productApp.get("/products", async (req, res) => {
    // Find all documents
    const productList = await ProductModel.find();

    // Send response
    res.status(200).json({ 
        message: "products:", 
        payload: productList 
    });
});

// Read One - Get product by ID
productApp.get("/products/:id", async (req, res) => {
    // Read object id from req params
    const uid = req.params.id;

    // Find product by id
    // Use findOne() for non-object id fields; use findById() for ObjectIds
    const productObj = await ProductModel.findById(uid);

    // Send response
    res.status(200).json({ 
        message: 'product:', 
        payload: productObj 
    });
});

// Update - Modify product by ID
productApp.put("/products/:id", async (req, res) => {
    // Get modified product from the req
    const modifiedProduct = req.body;
    const uid = req.params.id;

    // Find product by ID and update
    const updatedProduct = await ProductModel.findByIdAndUpdate(
        uid, 
        { $set: { ...modifiedProduct } }, 
        { new: true, runValidators: true }
    );

    // Send res
    res.status(200).json({ 
        message: "Product Modified", 
        payload: updatedProduct 
    });
});

// Delete - Remove product by ID
productApp.delete("/products/:id", async (req, res) => {
    const uid = req.params.id;

    // Find and delete
    const deletedProduct = await ProductModel.findByIdAndDelete(uid);

    // Check if product existed
    if (!deletedProduct) {
        return res.status(404).json({ message: "Product not found." });
    }

    // Send res
    res.status(200).json({ message: "Product Deleted." });
});
