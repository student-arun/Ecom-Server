const express = require('express');
const{signup,login} = require('../controller/AccountController');

const AccountRouter = express.Router();
AccountRouter.post("/signup",signup)
AccountRouter.post("/login",login)

module.exports = AccountRouter