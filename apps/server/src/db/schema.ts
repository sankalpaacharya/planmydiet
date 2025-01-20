import { pgEnum } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core"
import {integer,text,uuid,timestamp,boolean,decimal,json} from "drizzle-orm/pg-core"

export const usersTable = pgTable('user', {
    id: uuid().defaultRandom().primaryKey(),
    createdAt:timestamp().notNull().defaultNow(),
    clerkUserId:text().notNull().unique(),
    name: text().notNull(),
    email: text().notNull().unique(),
    points:integer().notNull().default(0)
  });


export const userMeasurement = pgTable("user_measurement",{
    userId:text().primaryKey().references(()=>usersTable.clerkUserId),
    height:integer().notNull(),
    age:integer().notNull(),
    bfp:decimal().notNull(), // body fat percentage
})

export const plan = pgTable("plan",{
    id:uuid().primaryKey().defaultRandom(),
    goal:text().notNull(),
    creator:text().notNull().references(()=>usersTable.clerkUserId),
    aiPlan:json().notNull()
})

// single challenge can have the multiple meal plan, it has to be according to user not everyone inside 
// challenge will have same plan 
// when user is joining the challange ask them if they want to copy the meal plan or wanna make their own new 
// goal has to be same but meal can be different

export const challenge = pgTable("challenge",{
    id: uuid().defaultRandom().primaryKey(),
    createdAt:timestamp().notNull().defaultNow(),
    title:text().notNull(),
    goal:text().notNull(),
    creatorId:text().notNull().references(()=>usersTable.clerkUserId),
    endDate:timestamp().notNull(),
})


export const challengeParticipants = pgTable("participant", {
    id: uuid().defaultRandom().primaryKey(),
    challengeId: uuid().notNull().references(() => challenge.id),
    userId: text().notNull().references(() => usersTable.clerkUserId),
    joinedAt: timestamp().notNull().defaultNow(),
    hasCustomMealPlan: boolean().notNull().default(false),
    points:integer().notNull().default(0),
    planId: uuid().notNull().references(()=>plan.id),
    streak:integer().notNull().default(0)
});

// for now we assume everyone has a same timezone and allow user to tick a daily goal at 9pm
export const mealTypeEnum = pgEnum("meal_type",["breakfast","lunch","snacks","dinner"])
export const mealLog = pgTable("meallog",{
    id: uuid().defaultRandom().primaryKey(),
    challengeId: uuid().notNull().references(() => challenge.id),
    created_at:timestamp().notNull().defaultNow(),
    kal:integer().notNull(),
    title:text().notNull(),
    userId: text().notNull().references(() => usersTable.clerkUserId),
    type:mealTypeEnum().notNull()
})
