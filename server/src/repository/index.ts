import mongoose from "mongoose";
import { MONGO_URL } from "../lib/envConfig";

export const connect = async () => {
 try {
  if (!MONGO_URL) {
   throw new Error("Mongodb connection url is required");
  }
  const conn = await mongoose.connect(`${MONGO_URL}`);
  console.log(`Connection established with mongodb `);
 } catch (error: any) {
  console.error(`Database Connection failed`);
  process.exit(1);
 }
};
