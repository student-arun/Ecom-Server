const express = require('express');
const productrouter = express.Router();
const { addProduct, deleteProduct, updateProduct, searchProduct } = require('../controller/ProductController');

productrouter.post("/addProduct", addProduct);
productrouter.delete("/deleteProduct/:id", deleteProduct);
productrouter.put("/updateProduct/:id", updateProduct);
productrouter.get("/searchProduct", searchProduct);

module.exports = productrouter;
