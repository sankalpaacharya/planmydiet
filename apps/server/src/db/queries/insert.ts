import { InserMealLog, InserPlan, InsertChallenge,InsertChallengeParticipant,challenge, challengeParticipant, plan, mealLog } from "../schema";
import { db } from "../db";

export const insertChallenge = async (challengeData:InsertChallenge):Promise<{ challengeId: string}[]>=>{
  const result = await db.insert(challenge).values(challengeData).returning({challengeId:challenge.id})
  return result
}

export const insertChallengeParticipant = async (challengeParticipantData:InsertChallengeParticipant)=>{
    await db.insert(challengeParticipant).values(challengeParticipantData)
}

export const insertPlan = async (planData:InserPlan)=>{
  await db.insert(plan).values(planData)
}

export const insertMealLog = async (mealLogData: InserMealLog) => {
  await db.insert(mealLog).values(mealLogData);
}
