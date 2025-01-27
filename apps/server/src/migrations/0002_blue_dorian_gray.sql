CREATE TYPE "public"."gender" AS ENUM('Male', 'Female');--> statement-breakpoint
ALTER TABLE "plan" ADD COLUMN "gender" "gender" NOT NULL;--> statement-breakpoint
ALTER TABLE "user_measurement" ADD COLUMN "gender" "gender" NOT NULL;