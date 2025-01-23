import { Request,Response } from "express"
import { getPlan } from "../utils/ai"

export const getPlanController = async (req:Request,res:Response)=>{
    const planData = await getPlan()
    res.send(JSON.parse(planData)) 
}