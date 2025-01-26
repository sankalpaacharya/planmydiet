import { pgEnum } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core"
import {integer,text,uuid,timestamp,boolean,decimal,json} from "drizzle-orm/pg-core"
import { createSelectSchema,createInsertSchema} from 'drizzle-zod';

export const userTable = pgTable('user', {
    id: uuid().defaultRandom().primaryKey(),
    createdAt:timestamp().notNull().defaultNow(),
    clerkUserId:text().notNull().unique(),
    name: text().notNull(),
    email: text().notNull().unique(),
    points:integer().notNull().default(0)
  });

export const gendertypeEnum = pgEnum("gender",["Male","Female"])
export const userMeasurement = pgTable("user_measurement",{
    userId:text().primaryKey().references(()=>userTable.clerkUserId),
    height:integer().notNull(),
    weight:integer().notNull(),
    age:integer().notNull(),
    gender:gendertypeEnum().notNull(),
    bfp:decimal().notNull(), // body fat percentage
})

export const plan = pgTable("plan", {
    id: uuid().primaryKey().defaultRandom(),
    goal: text().notNull(),
    userId: text().notNull().references(() => userTable.clerkUserId),
    dietPreference: text().notNull(),
    activityLevel: text().notNull(),
    height:integer().notNull(),
    weight:integer().notNull(),
    gender:gendertypeEnum().notNull(),
    age:integer().notNull(),
    calorieIntake: integer().notNull(),
    duration: integer().notNull(),
    foodAllergies: text(),
    medicalConditions: text(),
    existingSupplements: text(),
    budget: text().notNull(),
    aiPlan: json().notNull()
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
    userId:text().notNull().references(()=>userTable.clerkUserId),
    endsIn:integer().notNull(),
})

export const challengeParticipant = pgTable("participant", {
    id: uuid().defaultRandom().primaryKey(),
    challengeId: uuid().notNull().references(() => challenge.id),
    userId: text().notNull().references(() => userTable.clerkUserId),
    joinedAt: timestamp().notNull().defaultNow(),
    hasCustomMealPlan: boolean().notNull().default(false),
    points:integer().notNull().default(0),
    planId: uuid().notNull().references(()=>plan.id),
});

// for now we assume everyone has a same timezone and allow user to tick a daily goal at 9pm
export const mealTypeEnum = pgEnum("meal_type",["breakfast","lunch","snacks","dinner"])
export const mealLog = pgTable("meallog",{
    id: uuid().defaultRandom().primaryKey(),
    challengeId: uuid().notNull().references(() => challenge.id),
    created_at:timestamp().notNull().defaultNow(),
    kal:integer().notNull(),
    title:text().notNull(),
    userId: text().notNull().references(() => userTable.clerkUserId),
    type:mealTypeEnum().notNull()
})

export const dailyGoalCompletion = pgTable("daily_goal_completion", {
    id: uuid().defaultRandom().primaryKey(),
    userId: text().notNull().references(() => userTable.clerkUserId),
    challengeId: uuid().notNull().references(() => challenge.id),
    completedDate: timestamp().notNull(),
    isCompleted: boolean().notNull().default(false)
 });

export type SelectUser = typeof userTable.$inferSelect
export type InsertChallenge = typeof challenge.$inferInsert
export type InsertChallengeParticipant= typeof challengeParticipant.$inferInsert
export type SelectUserMeasurement = typeof userMeasurement.$inferSelect
export type InserPlan = typeof plan.$inferInsert


export const insertChallengeSchema = createInsertSchema(challenge)
export const selectPlanSchema = createSelectSchema(plan)
export const insertChallengeParticipantSchema = createInsertSchema(challengeParticipant)
export const insertPlanSchema = createInsertSchema(plan)