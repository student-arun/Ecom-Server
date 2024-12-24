const express = require("express");
const app = express();
app.use(express.json())

app.use(express.urlencoded({extended:true}))
const AccountRouter = require("./src/routers/AccountRouter");
const catrouter = require("./src/routers/categoryRouter");
app.use("/api/v1/auth", AccountRouter)
app.use("/api/v1/auth/category",catrouter)
module.exports = app;
