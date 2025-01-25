import { Request,Response } from "express"
import { getPlan } from "../utils/ai"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"


export const getPlanController = async (req:Request,res:Response):Promise<any>=>{
    try{
        const planData = await getPlan()
        res.send(JSON.parse(planData)) 
    }catch(error){
        if(error instanceof ZodError ){
            return {errors:zodErrorParser(error)}
        }
    }
}
