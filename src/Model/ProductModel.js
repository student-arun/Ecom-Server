require('../db/db')
const collection = require('../db/collection')
const mongoose = require('mongoose')

// Productschema

 const Productschema = mongoose.schema({
    
    ProductName:{type: String},
    ProductTitle:{type: String},
    ProductDescription:{type: String},
    ProductPrice:{type: Number},
    ProductImage:{type: String, default: ".jpg"},
    ProductCategory:{type: ObjectId},
    ProductSubCategory:{type: ObjectId},
    ProductStatus:{type: Boolean,default: 0},
    ProductQuantity:{type: Number},
    ProductRating:{type: Number},
    ProductReview:{type: String},
    ProductInstock:{type: Boolean, }
    
 },

{timestamps: true})


const ProductModel = new mongoose.model(collection.product,Productschema)
module.exports = ProductModel;


