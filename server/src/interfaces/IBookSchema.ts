import { ObjectId } from "mongoose";

export interface IBooks extends Document {
 _id: ObjectId;
 title: string;
 author: string;
 coverimage: string | null;
 reviews: {
  userId: ObjectId | null;
  comment: string | null;
  rating: number | null;
 }[];
 description: string | null;
}
