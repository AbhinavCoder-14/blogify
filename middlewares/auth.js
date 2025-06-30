import { validateTokenForUser } from "../services/auth.js"
import cookieParser from "cookie-parser"


export function checkForAuthCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookievalue = req.cookies[cookieName]

        if(!tokenCookievalue) return next()
        try{
            const userPayload = validateTokenForUser(tokenCookievalue)
            req.user = userPayload
        }catch(error){}
            
        return next()
    }
    }
   