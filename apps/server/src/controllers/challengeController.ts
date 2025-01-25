import { Request,Response } from "express"
import { insertChallengeSchema } from "../db/schema"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"


export const createChallengeController = async (req:Request,res:Response):Promise<any>=>{
    try {
        const parse = insertChallengeSchema.parse(req.body)
        console.log(req.auth.userId)
        res.send({success:"data is parsed sucessfully"})
    } catch (error) {
        if(error instanceof ZodError){
            res.send({errors:zodErrorParser(error)})
        }
    }
    
}
