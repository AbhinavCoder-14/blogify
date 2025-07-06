import 'dotenv/config'; 
import path from "path"
import express from "express"
import mongoose from "mongoose";


import {userRoute} from "./routes/user.js"
import {connectDB} from "./db/connect.js"
import cookieParser from "cookie-parser";
import { checkForAuthCookie,restrictTo } from "./middlewares/auth.js";
import { blogRoute } from "./routes/add-blog.js";

import { Blog } from "./models/blog.js";
import { allowedNodeEnvironmentFlags } from "process";
import { create } from "domain";


const app = express();
const PORT = process.env.PORT || 8000

connectDB(process.env.MONGO_URL) //mongodb://127.0.0.1:27017/blogify for local machine
.then(()=>{
    console.log('MongoDB connected')
})
.catch((error)=>console.log("connection error",error))





app.set("view engine","ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser())
app.use(express.static(path.resolve("./public")))


app.use(checkForAuthCookie("token"))

app.get("/",restrictTo(['USER','ADMIN']),async (req,res)=>{
    const allBlogs = await Blog.find({}).sort({createdAt:-1}) // decrement -1   
    console.log(allBlogs)
    res.render("home.ejs",{
        currentPage:'home',
        user: req.user,
        allBlogs:allBlogs
    })
})


app.get("/categories",(req,res)=>{
    res.render("4O4.ejs",{        currentPage:'home',
        user: req.user})
})


app.get("/about",(req,res)=>{
    res.render("4O4.ejs",{
                currentPage:'home',
        user: req.user
    })
})



app.use("/user",userRoute)
app.use("/blogs",blogRoute)


app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})


