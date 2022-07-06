const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
require("dotenv").config()

const connect = require("./config/db")

const mensController = require("./controllers/ProductsController/mensController")
const womensController = require("./controllers/ProductsController/Women-Controller")

app.use("/mens" , mensController)
app.use("/womens" , womensController)
const {register,login} = require("./controllers/userController");

app.post("/register",register)
app.post("/login",login)

app.listen( process.env.PORT||5000, async()=>{
    try {
        await connect();
        console.log('Server Connected Success')
    } catch (error) {
        console.log(error)
    }
})
