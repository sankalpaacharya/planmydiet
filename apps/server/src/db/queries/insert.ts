import { InsertChallenge,InsertChallengeParticipant,challenge, challengeParticipant} from "../schema";
import { db } from "../db";

export const insertChallenge = async (challengeData:InsertChallenge):Promise<{ challengeId: string}[]>=>{
  const result = await db.insert(challenge).values(challengeData).returning({challengeId:challenge.id})
  return result
}

export const insertChallengeParticipant = async (challengeParticipantData:InsertChallengeParticipant)=>{
    await db.insert(challengeParticipant).values(challengeParticipantData)
}
