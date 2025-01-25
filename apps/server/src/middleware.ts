import {Request,Response,NextFunction}  from 'express'


// changing the Request Type Globally
declare global {
    namespace Express {
        interface Request {
            auth: {
                userId:string
            }
        }
    }
}


export function checkUserAuth(req:Request,res:Response,next:NextFunction){ 
    req.auth.userId = "clerkid123"
    next()
}