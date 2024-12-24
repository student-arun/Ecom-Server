const express = require("express");
const app = express();
const AccountRouter = require("./src/routers/AccountRouter");
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/auth", AccountRouter)

module.exports = app;
