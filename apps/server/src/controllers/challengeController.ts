import { InsertChallenge } from "../db/schema";
import { db } from "../db/db";
import { challenge } from "../db/schema";

export const createChallengeController = async (challengeData:InsertChallenge)=>{
    await db.insert(challenge).values(challengeData)
}
