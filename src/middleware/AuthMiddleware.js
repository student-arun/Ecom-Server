const jwt = require('jsonwebtoken');
require('dotenv').config({})
exports.authMiddleware = async (req,res,next)=>{
    try{
        const token = req.headers["authorization"].split(" ")[1]
        const isValid = jwt.verify(token,process.env.SECRET_KEY)
        if(isValid){
            req.user_id = isValid.user_id;
            req.name = isValid.name;
            next();
        }
        else{
            res.status(403).json({
                status: "failed",
                message: "unauthorized user!!"
            })
        }
    }
    catch(err){
        res.status(403).json({
            status: "failed",
            message: "error unauthorized user!!"
        })
    }
}