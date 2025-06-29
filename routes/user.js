import express from "express"
import { User } from "../models/user.js"; 
import mongoose from "mongoose"



export const userRoute = express.Router();

userRoute.get("/signin",(req,res)=>{
    return res.render("signin")
})


userRoute.get("/signup",(req,res)=>{
    return res.render("signup",{
        title:"xyz",
        currentPage:"signup",
        user :req.user
    })
})



userRoute.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    console.log("Received data:", req.body);

    const user = await User.create({ fullName, email, password });
    console.log("User created:", user);
    return res.redirect("/");
  } catch (err) {
    console.error("Error during signup:", err); // Full stack trace
    return res.status(500).send("Signup failed: " + err.message);
  }
});
