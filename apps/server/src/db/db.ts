import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path:'.env' });
console.log(process.env.DATABASE_URL!)
const sql = neon("postgresql://neondb_owner:NT9tw5WgYHdB@ep-hidden-sunset-a8oc1a6r.eastus2.azure.neon.tech/neondb?sslmode=require" );
export const db = drizzle({ client: sql,casing:"snake_case"});
