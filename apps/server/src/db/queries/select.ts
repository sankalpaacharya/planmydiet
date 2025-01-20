import {db} from "../db"
import {SelectUser} from "../schema"
import { userTable } from "../schema"
import {eq} from "drizzle-orm"

export async function selectUserById(clerkUserId:SelectUser['clerkUserId']):Promise<Array<{name:string}>>{
 return db.select().from(userTable).where(eq(userTable.clerkUserId,clerkUserId))
}


