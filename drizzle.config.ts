import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL, ensure the database is provisioned");
}

export default defineConfig({
  out: "./db/migrations",
  schema: "./shared/schema.ts",
  dialect: "mongodb",
  dbCredentials: {
    url: process.env.DATABASE_URL, // e.g. mongodb://localhost:27017/your-db
  },
  verbose: true,
});
