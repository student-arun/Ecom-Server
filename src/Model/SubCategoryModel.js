require('../db/db')
const collection = require('../db/collection')
const mongoose = require('mongoose')
// const {ObjectId} = require('mongodb')
const SubCategorySchema = mongoose.Schema({
    SubCatName: {type:String},
    SubCatTitle: {type:String},
    // CatId: {type: ObjectId} 
})

const SubCatModel = new mongoose.model(collection.subcategory,SubCategorySchema)
module.exports = SubCatModel;