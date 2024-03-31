import { ObjectId } from "mongoose";
import { IUser } from "../interfaces/IUserSchema";
import { User } from "../repository/models";

export const createUser = async (userCredentials: IUser) => {
 try {
  const newUser = await User.create({ ...userCredentials });
  return newUser;
 } catch (error: any) {
  if (error.code === 11000) {
   return false;
  }
  return false;
 }
};
export const findByEmail = async (email: string) => {
 try {
  const user = await User.findOne({ email: email });
  if (!user) return false;
  return user;
 } catch (error) {
  return false;
 }
};
export const findById = async (id: ObjectId) => {
 try {
  const user = await User.findById(id);
  if (!user) return false;
  return user;
 } catch (error) {
  return false;
 }
};
