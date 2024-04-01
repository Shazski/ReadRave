import { IUser } from "./Iuser";

export interface IBook {
 _id: string;
 author: string;
 title: string;
 coverimage?: string;
 description: string;
 reviews?: {
  userId: IUser;
  rating: number;
  comment: string;
 }[];
}
