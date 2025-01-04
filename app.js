const express = require("express");
const app = express();
app.use(express.json())

app.use(express.urlencoded({extended:true}))
const AccountRouter = require("./src/routers/AccountRouter");
const catrouter = require("./src/routers/categoryRouter");
const subcatrouter = require("./src/routers/sub_categoryRouter");
const productrouter = require("./src/routers/ProductRouter");
app.use("/api/v1/auth/admin", AccountRouter)
app.use("/api/v1/auth/category",catrouter)
app.use("/api/v1/auth/subcategory",subcatrouter)
app.use("/api/v1/auth/product",productrouter)
module.exports = app;
