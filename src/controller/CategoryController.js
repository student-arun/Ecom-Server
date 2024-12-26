require("dotenv").config;
const CategoryModel = require("../Model/CategoryModel");
const { ObjectId } = require("mongodb");
exports.addItem = async (req, res, next) => {
  try {
    const itemdata = req.body;
    const addeditemdata = {
      CatName: itemdata.CatName,
      CatTitle: itemdata.CatTitle,
      // categoryIMG: req.imagePath,
    };
    console.log(addeditemdata);
    const catdata = await CategoryModel.create(addeditemdata);
    if (catdata) {
      res.json({
        status: "success",
        message: "Item added successfully",
      });
    } else {
      res.json({
        status: "failure",
        message: "unable to add data",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "something went wrong",
    });
  }
};

//Delete item

exports.deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.id;

    const deletedItem = await CategoryModel.deleteOne({ _id: new ObjectId(itemId) });

    if (deletedItem) {
      res.json({
        status: "success",
        message: "Items deleted successfully ",
      });
    } else {
      res.json({
        status: "failure",
        message: "Unable to delete item",
      });
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "something went wrong",
    });
  }
};

// Update item

exports.updateitem = async (req, res, next) => {
  try {
    const updatedata = { _id: req.params.id };
    const inputdata = {
      CatName: req.body.CatName,
      CatTitle: req.body.CatTitle,
    };
    console.log(inputdata);
    const Idata = await CategoryModel.updateOne(updatedata , inputdata);
    console.log(Idata)

    if (Idata) {
      res.json({
        status: "success",
        message: "Item data updated successfully",
      });
    } else {
      res.json({
        status: "failed",
        message: "unable to update item",
      });
    
    }
  } catch (err) {
    res.json({
      status: "failed",
      message: "Something went wrong",
      error: err,
      
    });
    console.log(err)
  }
};

// Search item

exports.searchitem = async (req, res, next) => {
  const {search} =  req.query;
  const find = {
    $or: [
      { CatName: { $regex: `^${search}`, $options: "i" } },
      { CatTitle: { $regex: `^${search}`, $options: "i" } },
    ],
  };
  const items = await CategoryModel.find(find);
  console.log(items)
  try {
    if (items) {
      res.json({
        status: "success",
        Message: "Here's the item you were searching for",
        data: items,
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

// exports.searchsubcat = async (req, res, next) => {
//   try {
//     const search = { item: req.query.search };
//     const find = {
//       $or: [
//         { sub_catName: { $regex: `^${search.item}`, $options: "i" } },
//         { sub_catTittle: { $regex: `^${search.item}`, $options: "i" } },
//       ],
//     };

//     const SubCat = await sub_cat.find(find);

//     if (SubCat) {
//       res.json({
//         status: "success",
//         Message: "Here's the item you were searching for",
//         data: SubCat,
//       });
//     } else {
//       res.json({
//         status: "failed",
//         Message: "Can't find the item you are searching for ",
//       });
//     }
//   } catch (err) {
//     res.json({
//       status: "failed",
//       Message: "something went wrong",
//       error: err,
//     });
//   }
// };

// Upload category image

exports.uploadcatimg = async (req, res, next) => {
  try {
    const uploadImg = {
      cat_id: req.body.catid,
      cat_img1: req.imagePath,
    };
    const uploadImage = await CategoryModel.create(uploadImg);
    console.log(uploadImage);

    if (uploadImage) {
      res.json({
        status: "success",
        message: "Image uploaded successfully",
      });
    } else {
      res.json({
        status: "failed",
        message: "Image not uploaded",
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: "something went wrong",
    });
  }
};
