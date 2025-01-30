import { db } from "../db"
import { SelectUser, userTable, SelectUserMeasurement, userMeasurement, SelectPlan, plan } from "../schema"
import { eq } from "drizzle-orm"

export async function selectUserById(clerkUserId: SelectUser['clerkUserId']): Promise<Array<{ name: string }>> {
	return (await db.select().from(userTable).where(eq(userTable.clerkUserId, clerkUserId)))
}

export async function selectUserMeasurementById(clerkUserId: SelectUserMeasurement["userId"]) {
	return db.select().from(userMeasurement).where(eq(userMeasurement.userId, clerkUserId))
}

export async function selectAllPlansById(clerkUserId: SelectPlan["userId"]) {
	return db.select({
		id: plan.id,
		goal: plan.goal,
		userId: plan.userId,
		dietPreference: plan.dietPreference,
		activityLevel: plan.activityLevel,
		height: plan.height,
		weight: plan.weight,
		gender: plan.gender,
		age: plan.age,
		calorieIntake: plan.calorieIntake,
		duration: plan.duration,
		foodAllergies: plan.foodAllergies,
		medicalConditions: plan.medicalConditions,
		budget: plan.budget
	}).from(plan).where(eq(plan.userId, clerkUserId));
}

export async function selectParticularPlanById(planId: SelectPlan["id"]) {
	return db.select({
		id: plan.id,
		aiPlan:plan.aiPlan
	}).from(plan).where(eq(plan.id, planId));
}
