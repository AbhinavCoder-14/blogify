import path from "path"
import express from "express"
import mongoose from "mongoose";


import {userRoute} from "./routes/user.js"
import {connectDB} from "./db/connect.js"
import cookieParser from "cookie-parser";
import { checkForAuthCookie } from "./middlewares/auth.js";

const app = express();
const PORT = 8000

connectDB("mongodb://127.0.0.1:27017/blogify")
.then(()=>{
    console.log('MongoDB connected')
})
.catch((error)=>console.log("connection error",error))





app.set("view engine","ejs")
app.set("views", path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.use(checkForAuthCookie("token"))

app.get("/",(req,res)=>{
    res.render("home.ejs",{
        currentPage:'home',
        user: req.user
    })
})


app.use("/user",userRoute)



app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})


