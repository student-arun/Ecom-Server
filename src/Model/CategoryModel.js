require('../db/db')
const collection = require('../db/collection');
const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    CatName:{type: String},
    CatTitle:{type: String},
    // Status: {type: Boolean,default: 0}
})

const CategoryModel = new mongoose.model(collection.category,CategorySchema);
module.exports = CategoryModel;