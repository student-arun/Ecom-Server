const express = require("express");
const Sub_catrouter = express.Router();
const upload = require("../middleware/UploadImageMiddleware");
const { addsubcat, searchsubcat,deletesubcat,updatesubcat } = require("../controller/SubCategoryController");

Sub_catrouter.post("/addsubcat",upload.fields([{name: "subcat_img1"}]),addsubcat);
 Sub_catrouter.delete("/deletesubcat/:id",deletesubcat);
 Sub_catrouter.put("/updatesubcat/:id",updatesubcat);
 Sub_catrouter.get("/searchsubcat",searchsubcat)

module.exports = Sub_catrouter;