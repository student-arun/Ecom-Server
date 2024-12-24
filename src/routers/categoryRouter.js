const express = require('express');
const catrouter = express.Router();


const { uploadcatimg, addItem, deleteItem, updateitem, searchitem } = require("../controller/CategoryController");
const upload = require("../middleware/UploadImageMiddleware");


catrouter.post("/uploadcatimg",uploadcatimg)
catrouter.post("/additem",upload.fields([{name:"cat_img1"}]),addItem)
catrouter.delete("/deleteItem/:id",deleteItem)
catrouter.put("/updateitem/:id",updateitem)
catrouter.get("/searchitem",searchitem)

module.exports = catrouter; 