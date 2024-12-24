const express = require("express");
const upload = require("../middleware/UploadImageMiddleware");
const { addItem, searchsubcat } = require("../controller/CategoryController");
const { addsubcat, deletesubcat, updatesubcat } = require("../controller/SubCategoryController");
const catrouter = express.Router();


catrouter.post("/addsubcat",upload.fields([{name: "subcat_img1"}]),addsubcat);
catrouter.delete("/deletesubcat/:id",deletesubcat);
catrouter.put("/updatesubcat/:id",updatesubcat);
catrouter.get("/searchsubcat",searchsubcat)

module.exports = cartrouter;