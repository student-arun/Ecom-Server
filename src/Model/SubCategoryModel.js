require('../db/db')
const collection = require('../db/collection')
const mongoose = require('mongoose')
const SubCategorySchema = mongoose.Schema({
    SubCatName: {type: string},
    SubCatTitle: {type: string},
    CatId: {type: ObjectId} 
})

const SubCatModel = new mongoose.model(collection.subcategory,SubCategorySchema)
module.exports = SubCatModel;