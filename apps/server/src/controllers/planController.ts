import { Request,Response } from "express"
import { getPlan } from "../utils/ai"
import { DietPlanType } from "../utils/prompt"


export interface GetPlanRequestType extends DietPlanType {
    user_id:string
}


export const getPlanController = async (req:Request,res:Response)=>{
    
    const planData = await getPlan()
    res.send(JSON.parse(planData)) 
}