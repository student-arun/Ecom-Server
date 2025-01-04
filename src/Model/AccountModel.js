require('../db/db');
const collection = require("../db/collection")
const mongoose = require('mongoose');


// Signup schema

const AccountSchema = mongoose.Schema({
    name: {type: String, required: [true, "name is required"]},
    email: {type: String, required: [true, "email is required"]},
    password: {type: String, min: [8, "password minimum 8 character is required!!3"]},
    phone: {type: String, reqired: [true, "User phone number required"]},
   // account_status: {type: Number,default:0}//
})
   
const AccountSchemaModel = new mongoose.model(collection.admin,AccountSchema);
module.exports = AccountSchemaModel;


