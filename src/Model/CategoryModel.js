const collection = require('../db/collection');
const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    CatName: {type: string},
    CatTitle: {type: string},
    Status: {type: Boolean,default: 0}
})

const CategoryModel = new mongoose.model(collection.Category,CategorySchema);
 module.exports = CategoryModel;