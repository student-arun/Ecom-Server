
const ProductModel = require('../Model/ProductModel');
require('dotenv').config;

exports.addProduct = async (req , res , next) => {
    try{

        const productData = req.body;
        const addedProductData = {
            productName: productData.productName,
            productTitle: productData.productTitle,
            productPrice: productData.productPrice,
            productDescription: productData.productDescription,
            productImg: req.imagePath,
            productCategory: productData.productCategory,
            productSubCategory: productData.productSubCategory,
            productStatus: productData.productStatus,
            productQuantity: productData.productQuantity,
            productRating: productData.productRating,
            productReview: productData.productReview,
            productInstock: productData.productInstock

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