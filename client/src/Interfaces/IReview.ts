import { IUser } from "./Iuser";

export interface IReview {
 userId: IUser;
 rating: number;
 comment: string;
}
