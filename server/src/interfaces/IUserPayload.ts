import { ObjectId } from "mongoose";

export interface IUserPayload {
 _id: ObjectId;
 email: string;
}
