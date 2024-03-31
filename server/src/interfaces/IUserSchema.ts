import { ObjectId } from "mongoose";

export interface IUser extends Document {
 name: string;
 email: string;
 password: string;
 _id: ObjectId;
}
