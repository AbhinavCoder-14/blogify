import express from "express"



export const blogRoute = express.Router()


blogRoute.get("/",(req,res)=>{
    res.render("addBlog.ejs",{
        currentPage:"add blogs",
        user:req.user,
    })
})


blogRoute.post("/",async (req,res)=>{
    const blog = await req.body
    console.log(blog)
    return res.redirect("/")  
})