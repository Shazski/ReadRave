import mongoose from "mongoose";
import { MONGO_URL } from "../lib/envConfig";

export const connect = async () => {
 try {
  if (!MONGO_URL) {
   throw new Error("Mongodb connection url is required");
  }
  const conn = await mongoose.connect(
   `${MONGO_URL}`
  );
  console.log(`🍃 Database Established connection with MongoDB`);
  console.log(`@-${conn.connection.host}`);
 } catch (error: any) {
  console.error(`❌ Database Connection failed`);
  console.error(error.message);
  process.exit(1);
 }
};
