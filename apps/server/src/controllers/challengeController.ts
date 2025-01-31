import { Request,Response } from "express"
import { insertChallengeSchema,insertChallengeParticipantSchema} from "../db/schema"
import { ZodError } from "zod"
import { zodErrorParser } from "../utils/zodErrorParser"
import { insertChallenge,insertChallengeParticipant } from "../db/queries/insert"


export const createChallengeController = async (req:Request,res:Response):Promise<any>=>{
    try {
        const userId = req.auth.userId; // way of getting the userID
        const challengeData = insertChallengeSchema.parse({...req.body,creatorId:userId})
        const {challengeId} = (await insertChallenge(challengeData))[0]
        const challengeParticipant = {
            ...req.body,
            userId,
            challengeId
        }
        const challengeParticipantData = insertChallengeParticipantSchema.parse(challengeParticipant)
        await insertChallengeParticipant(challengeParticipantData)
        res.send({success:"data is parsed sucessfully"})
    } catch (error) {
        if(error instanceof ZodError){
            return res.send({errors:zodErrorParser(error)})
        }
        res.send({error:"oops some error has occured"})
    }
}


export const getChallenges = (req:Request,res:Response)=>{

    

}