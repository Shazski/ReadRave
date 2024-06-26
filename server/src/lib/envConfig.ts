import { config } from "dotenv";
config();

export const PORT = process.env.PORT;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;
export const MONGO_URL = process.env.MONGO_URL;
export const NODE_ENV = process.env.NODE_ENV;
