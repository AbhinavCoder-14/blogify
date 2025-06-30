
import jwt from "jsonwebtoken"


const secret = "asdfghjkl@#"


export function createTokenForUser(user){
    return jwt.sign({
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.url

    },secret)

}


export function validateTokenForUser(token){
    if(!token) return null;
    try{
        return jwt.verify(token,secret)
    }
    catch{
        throw new Error('can verifty the token')
    }
}