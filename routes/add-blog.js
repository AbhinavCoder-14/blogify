import express, { response } from "express"
import path from "path"
import multer from "multer"

import { Blog } from "../models/blog.js"


export const blogRoute = express.Router()


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/uploads/"))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()} - ${file.originalname}`
    cb(null,uniqueSuffix)
  }
})

const upload = multer({storage:storage})


blogRoute.get("/",(req,res)=>{
    res.render("addBlog.ejs",{
        currentPage:"add blogs",
        user:req.user,
    })
})


blogRoute.post("/",upload.single("backgroundImage"),async (req,res)=>{
    const { title,content } = req.body
    const newBlog = await Blog.create({
        title,content,
        createdBy:req.user._id,
        backgroundImage:`uploads/${req.file.filename}`,
    })
    console.log(req.body)
    return res.redirect(`/blogs/${newBlog._id}`)
})


blogRoute.get("/:id",async(req,res)=>{
    console.log("Enterd in get req")
    const blogId = req.params.id;

    const getBlog = await Blog.findById(blogId);
    if(!getBlog) return res.end("Blog not found!")

    
    console.log(getBlog)
    res.render("showBlog.ejs",{
        title:getBlog.title,
        content:getBlog.content,
    })
    res.end("blog found on db")
    
})