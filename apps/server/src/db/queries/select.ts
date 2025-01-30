import {db} from "../db"
import {SelectUser,userTable,SelectUserMeasurement,userMeasurement,SelectAllPlans,allPlans} from "../schema"
import {eq} from "drizzle-orm"



export async function selectUserById(clerkUserId:SelectUser['clerkUserId']):Promise<Array<{name:string}>>{
 return (await db.select().from(userTable).where(eq(userTable.clerkUserId,clerkUserId)))
}

export async function selectUserMeasurementById(clerkUserId:SelectUserMeasurement["userId"]){
 return db.select().from(userMeasurement).where(eq(userMeasurement.userId,clerkUserId))
}

export async function selectAllPlansById(clerkUserId: SelectAllPlans["user_id"]) {
  return db.select().from(allPlans).where(eq(allPlans.user_id, clerkUserId));
}
