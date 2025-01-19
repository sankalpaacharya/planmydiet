import { pgTable } from "drizzle-orm/pg-core"
import {integer,text,uuid} from "drizzle-orm/pg-core"

export const usersTable = pgTable('users_table', {
    id: uuid().defaultRandom().primaryKey(),
    clerkUserId:text().notNull().unique(),
    name: text().notNull(),
    email: text().notNull().unique(),
  });


export const userMeasurement = pgTable("user_measurement",{
    userId:text().notNull(),
    height:integer().notNull(),
    age:integer().notNull(),
    bfp:integer().notNull(), // body fat percentage
})

// single challenge can have the multiple meal plan, it has to be according to user not everyone inside 
// challenge will have same plan 
// when user is joining the challange ask them if they want to copy the meal plan or wanna make their own new 
// goal has to be same but meal can be different
export const challenge = pgTable("challenge",{
    id: uuid().defaultRandom().primaryKey(),
    title:text().notNull(),
})








