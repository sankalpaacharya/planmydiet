import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: './../../.env' });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  casing:"snake_case",
  dbCredentials: {
    url:"postgresql://neondb_owner:NT9tw5WgYHdB@ep-hidden-sunset-a8oc1a6r.eastus2.azure.neon.tech/neondb?sslmode=require" ,
  },
});
