require('dotenv').config
const sub_cat = require('../Model/Sub_CatModel')
const { ObjectId } = require('mongodb')

// add sub category controller

exports.addsubcat = async (req, res, next) => {
    try {
        
        const subcatdata = req.body;
        const addedsubcatdata = {

            sub_catName: subcatdata.sub_catName,
            sub_catTittle: subcatdata.sub_catTittle,
            cat_id: subcatdata.cat_id,
            sub_catimg: req.imagePath
        }
        console.log(addedsubcatdata);
        const sub_catdata = await sub_cat.create(addedsubcatdata)
        if (sub_catdata) {
            res.json({
                status: "success",
                Message: "Item added successfully"
            })

        }
        else {
            res.json({
                status: "failure",
                Message: " unable add item "
            })
        }
    }

    catch (err) {
        res.json({
            status: "failed",
            Message: "Something went wrong",
            error: err

        })
    }
}

// Delete sub category controller 

exports.deletesubcat = async (req, res, next) => {
    try {
        const subcatid = req.params.id
        const deletedsubcat = await sub_cat.deleteOne({ _id: new ObjectId(subcatid) });
        console.log(deletedsubcat, "bvibwei");

        if (deletedsubcat) {
            res.json({
                status: "success",
                Message: "Item deleted successfully"
            });
        } else {
            res.json({
                status: "failure",
                Message: "Unable to delete item, item not found"
            });
        }
    } catch (err) {
        res.json({
            status: "failed",
            Message: "Something went wrong",
            error: err
        });
    }
};


// update item 

exports.updatesubcat = async (req, res, next) => {
    try {
        const updatedata = { Id: req.params.id }
        const inputdata = {
            sub_catName: req.body.sub_catName,
            sub_catTittle: req.body.sub_catTittle,
            // cat_id: new ObjectId(req.body.cat_id)
        }

        console.log(inputdata)

        const Idata = await sub_cat.updateOne({_id:updatedata.Id},inputdata)
    
        if (Idata) {
            res.json(
                {
                    status: "success",
                    Message: " Item data updated successfully"
                }
            )
        }
        else {
            res.json({
                status: "failed",
                Message: "Unable to update item"
            })
        }

    }
    catch (err) {
        res.json({
            status: "failed",
            Message: "Something went wrong",
            error: err
        })
    }
}

//  search item 

exports.searchsubcat = async (req, res, next) => {
    try {
    const search = { item: req.query.search }
    const find = { $or: [{ sub_catName: { $regex: `^${search.item}`, $options: "i" } }, { sub_catTittle: { $regex: `^${search.item}`, $options: "i" } }] }

    const SubCat = await sub_cat.find(find)
 
        if (SubCat) {
            res.json({
                status: "success",
                Message: "Here's the item you were searching for",
                data: SubCat
            })
        }
        else {
            res.json({
                status: "failed",
                Message: "Can't find the item you are searching for "
            })
        }
    }
    catch (err) {
        res.json({
            status: "failed",
            Message: "something went wrong",
            error: err
        })
    }
}

