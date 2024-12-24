//signup Api
require('dotenv').config()
const jwt = require('jsonwebtoken')
const AccountModel = require('../Model/AccountModel');
const { comparePassword, encryptPassword } = require('../Utils/utils');
exports.signup = async (req, res) => {
  try {
    const bodyData = req.body;
    console.log(bodyData)
    const insertData = {
      name: bodyData.name,
      email: bodyData.email,
      phone: bodyData.phone,
      password: encryptPassword(bodyData.password),
      accountStatus: bodyData.account_status,
    };
    console.log(insertData)

    const resData = await AccountModel.create(insertData);
    if (resData) {
      res.json({
        status: "success",
        message: "Signup Successfully",
        name: resData.name,
        email: resData.email,
      });
    } else {
      console.log(error)
      res.json({
        status: "failed",
        message: "invalid sigup",
      });
    }
  } catch (err) {
    console.log(error)
    res.json({
      status: "failed",
      message: "something went wrong",
      error: err,
    });
  }
};

//login Api

exports.login = async function (req, res, next) {
    try {
        const loginData = req.body;
        console.log(loginData)
        const query = {email:loginData.email}
        
        
        const resData = await AccountModel.findOne(query)
        const SecretKey = process.env.SECRET_KEY;
        if (resData) {
            if (comparePassword(loginData.password ,resData.password )) {
              
                const payload ={
                    name:resData.name,
                    email:resData.email,
                    userId:resData._id
                }
                const userToken = await jwt.sign(payload,SecretKey,{expiresIn:"10d"})
                res.json({
                    status: "success",
                    message: "login successfull",
                   token:userToken
                })
            } else {
                res.json({
                    status: "failed",
                    message: 'unable to login'
                })
            }
        }

    } catch (err) {
        res.json({
            status: "failed",
            message: "something went wrong",
            error:err
        })
    }
}
