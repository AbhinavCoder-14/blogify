import mongoose from "mongoose"
import {createHmac, randomBytes} from "node:crypto"


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    salt:{
        type:String
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    },
    profileImageURL:{
        type:String,
        default:"/images/userDefaultImg.png"
    }
},{timestamps :true});


userSchema.pre("save", function(next){

    const user = this;
    if(!user.isModified("password")) return next();

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256",salt).update(user.password).digest('hex')
    this.salt = salt;
    this.password = hashedPassword;
    return next();

})


export const User = mongoose.model("user",userSchema)