import mongoose, { Schema } from "mongoose";



const blogSchema = new mongoose.Schema({
    tittle :{
        type:String,
        required:true
    },

    body :{
        type:String,
        required:true
    },
    coverImg :{
        type:String,
    },
    createdBy :{
        type: mongoose.Schema.ObjectId,
        ref:"user",
    },
    
    
},{timestamps:true})

export const Blog = mongoose.model("Blog",blogSchema)
