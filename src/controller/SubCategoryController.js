require("dotenv").config;
const SubCatModel = require("../Model/SubCategoryModel");
const { ObjectId } = require("mongodb");

// add sub category controller

exports.addsubcat = async (req, res, next) => {
  try {
    const subcatdata = req.body;
    const addedsubcatdata = {
      SubCatName: subcatdata.SubCatName,
      SubCatTitle: subcatdata.SubCatTitle,
      CatId: subcatdata.CatId,
      // sub_catimg: req.imagePath
    };
    console.log(addedsubcatdata);
    const sub_catdata = await SubCatModel.create(addedsubcatdata);
    if (sub_catdata) {
      res.json({
        status: "success",
        Message: "Item added successfully",
      });
    } else {
      res.json({
        status: "failure",
        Message: " unable add item ",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      Message: "Something went wrong",
      error: err,
    });
  }
};

// Delete sub category controller

exports.deletesubcat = async (req, res, next) => {
  try {
    const subcatid = req.params.id;
    const deletedsubcat = await SubCatModel.deleteOne({
      _id: new ObjectId(subcatid),
    });
    console.log(deletedsubcat, "fdfdjkgj");

    if (deletedsubcat) {
      res.json({
        status: "success",
        Message: "Item deleted successfully",
      });
    } else {
      res.json({
        status: "failure",
        Message: "Unable to delete item, item not found",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      Message: "Something went wrong",
      error: err,
    });
  }
};

// update item

exports.updatesubcat = async (req, res, next) => {
  try {
    const updatedata = { Id: req.params.id };
    const inputdata = {
      SubCatName: req.body. SubCatName,
      SubCatTitle: req.body.SubCatTitle,
      // cat_id: new ObjectId(req.body.cat_id)
    };

    console.log(inputdata);

    const resData = await SubCatModel.updateOne({ _id: updatedata.Id }, inputdata);

    if (resData) {
      res.json({
        status: "success",
        Message: " Item data updated successfully",
      });
    } else {
      res.json({
        status: "failed",
        Message: "Unable to update item",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      Message: "Something went wrong",
      error: err,
    });
  }
};

//  search item

exports.searchsubcat = async (req, res, next) => {
  
    const { search } = req.query;
    const find = {
      $or: [
        { SubCatName: { $regex: `^${search}`, $options: "i" } },
        { SubCatTitle: { $regex: `^${search}`, $options: "i" } },
      ],
    };

    const SubCat = await SubCatModel.find(find);
    try{
    if (SubCat) {
      res.json({
        status: "success",
        Message: "Here's the item you were searching for",
        data: SubCat,
      });
    } else {
      res.json({
        status: "failed",
        Message: "Can't find the item you are searching for ",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      Message: "something went wrong",
      error: err,
    });
  }
};
