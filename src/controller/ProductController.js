require('dotenv').config;
const ProductModel = require('../Model/ProductModel'); 
const { ObjectId } = require("mongodb");


exports.addProduct = async (req , res , next) => {
    try{

        const productData = req.body;
        console.log(req.body,"dvnidnvdbnvdi ");
        
        const addedProductData = {
            ProductName: productData.productName,
            ProductTitle: productData.productTitle,
            // productPrice: productData.productPrice,c
            // productDescription: productData.productDescription,
            // productImg: req.imagePath,5
            // productCategory: productData.productCategory,
            // productSubCategory: productData.productSubCategory,
            // productStatus: productData.productStatus,
            // productQuantity: productData.productQuantity,
            // productRating: productData.productRating,
            // productReview: productData.productReview,
            // productInstock: productData.productInstock

        }
        console.log(addedProductData);
        const resData = await ProductModel.create(addedProductData)
        if (resData) {
            res.json({
                status: "success",
                Message: "Product added successfully"
            })

        }
        else {
            res.json({
                status: "failure",
                Message: " unable add product "
            })
        }
    }
    catch(err){
        res.json({
            status: "failed",
            Message: "something went wrong",
            error: err
        })
    }
}

// Delete product controller

exports.deleteProduct = async (req, res, next) =>{
   try{
     const productId = req.params.id;
     const deletedProduct = await ProductModel.deleteOne({_id: new ObjectId(productId) });

     if(deletedProduct){
        res.json({
            status: "success",
            Message: "Product deleted successfully"
        });
     }
     else{
        res.json({
            status: "failure",
            Message: "unable to delete product, product not found"
        });
     }
   } 
   catch(err) {
    res.json({
        status: "failed",
        Message: "something went wrong"
    });
    console.log(err)
   }
};

// Update product controller

exports.updateProduct = async (req, res, next) => {
    try{
        const updateProductData = {_id: req.params.id};
        const updatedProductData = {
            ProductName: req.body.productName,
            ProductTitle: req.body.productTitle,
        }
        console.log(updatedProductData)

        const resData = await ProductModel.updateOne(updateProductData, updatedProductData);
        console.log(resData)

        if(resData){
            res.json({
                status: "success",
                Message: "Product updated successfully",
            });
        }
        else{
            res.json({
                status: "failed",
                Message: "unable to update product",
            });
        }
    }
    catch(err){
        res.json({
            status: "failed",
            Message: "something went wrong",
            error: err,
        });
        console.log(err)
    }
}

// search product controller

exports.searchProduct = async (req, res, next) => {
    
    const {search} = req.query;
    const find = {
        $or: [
            {ProductName: {$regex: `^${search}`, $options: "i"}},
            {ProductTitle: {$regex: `^${search}`, $options: "i"}},
        ],
    };

    const productCat = await ProductModel.find(find);
    console.log(productCat)
    try{
        if(productCat){
            res.json({
                status: "success",
                Message: "Product found successfully",
                data: productCat,
            });
        }
        else{
            res.json({
                status: "failed",
                Message: "Product not found",
            });
        }
    } catch(err){
        res.json({
            status: "failed",
            Message: "something went wrong",
            error: err,
        });
    }

}