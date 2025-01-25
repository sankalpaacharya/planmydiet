import { InsertChallenge } from "../schema";
import { db } from "../db";
import { challenge } from "../schema";

export const insertChallengeController = async (challengeData:InsertChallenge)=>{
    await db.insert(challenge).values(challengeData)
}