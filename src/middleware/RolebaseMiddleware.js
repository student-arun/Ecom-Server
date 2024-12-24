const RolebaseMiddleware = (...Roles)=> {
    return(req,res,next)=> {
        if(!Roles.includes(req.user.role)){
            res.json({
                status: "failed",
                message: "access denied"
            })
        }
        else{

            next()
        }
    }
}

module.exports = RolebaseMiddleware