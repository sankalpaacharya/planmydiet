import { Request,Response } from "express"
import { getPlan } from "../utils/ai"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"
import { insertPlanSchema } from "../db/schema"
import { selectAllPlansById, selectParticularPlanById, selectUserMeasurementById } from "../db/queries/select"
import { promptData } from "../utils/ai"
import { DietPlanPromptType } from "utils/prompt"
import { insertPlan } from "../db/queries/insert"


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
        console.log(planData)
        await insertPlan(planData)
        res.send({data:["data added successfully"],error:null})
    }
    catch(error){ 
        if(error instanceof ZodError) {
            return res.send({data:[],error:zodErrorParser(error)})
        }
        res.send({data:[],error:error})
    }
}

export const getAllPlansController = async (req:Request,res:Response):Promise<any>=>{
    try{
		const userId = req.auth.userId
        res.send({data:(await selectAllPlansById(userId)), error: null})
    }catch(error){
        if(error instanceof ZodError ){
            return res.send({data:[],errors:zodErrorParser(error)})
        }
        res.send({data:[],error:error})
    }
}

export const getParticularPlanController = async (req:Request,res:Response):Promise<any>=>{
    try{
		const planId = req.body.planId
        res.send({data:(await selectParticularPlanById(planId)), error: null})
    }catch(error){
        if(error instanceof ZodError ){
            return res.send({data:[],errors:zodErrorParser(error)})
        }
        res.send({data:[],error:error})
    }
}