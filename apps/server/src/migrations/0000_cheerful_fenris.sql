CREATE TYPE "public"."meal_type" AS ENUM('breakfast', 'lunch', 'snacks', 'dinner');--> statement-breakpoint
CREATE TABLE "challenge" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"title" text NOT NULL,
	"goal" text NOT NULL,
	"creator_id" text NOT NULL,
	"end_date" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "participant" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"challenge_id" uuid NOT NULL,
	"user_id" text NOT NULL,
	"joined_at" timestamp DEFAULT now() NOT NULL,
	"has_custom_meal_plan" boolean DEFAULT false NOT NULL,
	"points" integer DEFAULT 0 NOT NULL,
	"plan_id" uuid NOT NULL,
	"streak" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meallog" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"challenge_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"kal" integer NOT NULL,
	"title" text NOT NULL,
	"user_id" text NOT NULL,
	"type" "meal_type" NOT NULL
);
--> statement-breakpoint
CREATE TABLE "plan" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"goal" text NOT NULL,
	"creator" text NOT NULL,
	"ai_plan" json NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_measurement" (
	"user_id" text PRIMARY KEY NOT NULL,
	"height" integer NOT NULL,
	"age" integer NOT NULL,
	"bfp" numeric NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"clerk_user_id" text NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"points" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "user_clerkUserId_unique" UNIQUE("clerk_user_id"),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "challenge" ADD CONSTRAINT "challenge_creator_id_user_clerk_user_id_fk" FOREIGN KEY ("creator_id") REFERENCES "public"."user"("clerk_user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participant" ADD CONSTRAINT "participant_challenge_id_challenge_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenge"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participant" ADD CONSTRAINT "participant_user_id_user_clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("clerk_user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "participant" ADD CONSTRAINT "participant_plan_id_plan_id_fk" FOREIGN KEY ("plan_id") REFERENCES "public"."plan"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meallog" ADD CONSTRAINT "meallog_challenge_id_challenge_id_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenge"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meallog" ADD CONSTRAINT "meallog_user_id_user_clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("clerk_user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "plan" ADD CONSTRAINT "plan_creator_user_clerk_user_id_fk" FOREIGN KEY ("creator") REFERENCES "public"."user"("clerk_user_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_measurement" ADD CONSTRAINT "user_measurement_user_id_user_clerk_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("clerk_user_id") ON DELETE no action ON UPDATE no action;