const express = require("express");
const userRoutes= require("./router/user");
const productRoutes= require("./router/product");
const app = express();

app.use(express.json())

app.use("/api",userRoutes);
app.use("/product",productRoutes);


app.listen(3000,()=>{
    console.log("Server is running on 3000");
});
