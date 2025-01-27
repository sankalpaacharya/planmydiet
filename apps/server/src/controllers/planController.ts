import { Request,Response } from "express"
import { getPlan } from "../utils/ai"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"
import { insertPlanSchema } from "../db/schema"
import { selectUserMeasurementById } from "../db/queries/select"
import { promptData } from "../utils/ai"
import { DietPlanPromptType } from "utils/prompt"
import { insertPlan } from "../db/queries/insert"


export const getPlanController = async (req:Request,res:Response):Promise<any>=>{
    try{
        const planData = await getPlan(promptData)
        res.send(JSON.parse(planData)) 
    }catch(error){
        if(error instanceof ZodError ){
            return {errors:zodErrorParser(error)}
        }
    }
}

/*  
req.body =
{
  "goal": "Lose weight",
  "dietPreference": "Vegetarian",
  "activityLevel": "Moderate",
  "calorieIntake": 2000,
  "duration": 90,
  "budget": "Medium",
  "foodAllergies": "none",
  "medicalConditions": "none",
  "existingSupplements": "none"
}
*/
export const createPlanController = async (req:Request,res:Response):Promise<any>=>{
    try{
        const userId = req.auth.userId
        const {height,weight,age,gender} = (await selectUserMeasurementById(userId))[0]
        const promptData:DietPlanPromptType = {height,weight,age,gender,...req.body}
        const aiPlan = JSON.parse(await getPlan(promptData))
        const planData = insertPlanSchema.parse({userId,...promptData,aiPlan})
        await insertPlan(planData)
        res.send({status:"data added successfully",error:null})
    }
    catch(error){ 
        if(error instanceof ZodError) {
            return res.send({status:null,error:zodErrorParser(error)})
        }
        res.send({status:null,error:error})
    }
}
