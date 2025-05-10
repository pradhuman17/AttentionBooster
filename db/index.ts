import "dotenv/config";
import { MongoClient } from "mongodb";

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/attentionbooster";
export const client = new MongoClient(uri);
export const db = client.db();

// Test connection on startup
(async () => {
  try {
    await client.connect();
    await db.command({ ping: 1 });
    console.log("✅ Connected to MongoDB successfully!");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
  }
})();

// Export collections for use in the app
export const users = db.collection("users");
export const contacts = db.collection("contacts");
export const caseStudies = db.collection("case_studies");
export const testimonials = db.collection("testimonials");