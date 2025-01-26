CREATE TABLE "daily_goal_completion" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"challenge_id" uuid NOT NULL,
	"completed_date" timestamp NOT NULL,
	"is_completed" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE "challenge" ADD COLUMN "ends_in" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "diet_preference" text NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "activity_level" text NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "height" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "weight" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "age" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "calorie_intake" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "duration" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "food_allergies" text;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "medical_conditions" text;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "existing_supplements" text;--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "budget" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_measurement" ADD COLUMN "weight" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "daily_goal_completion" ADD CONSTRAINT "daily_goal_completion_user_id_user_clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("clerk_user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "daily_goal_completion" ADD CONSTRAINT "daily_goal_completion_challenge_id_challenge_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenge"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "challenge" DROP COLUMN "end_date";--> statement-breakpoint
ALTER TABLE "participant" DROP COLUMN "streak";