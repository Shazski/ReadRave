import { NextFunction, Request, Response } from "express";
import { registerSchema } from "../utils/validation";

export const register = (req: Request, res: Response, next: NextFunction) => {
 const userCredentials = req.body;
 try {
  const { value, error } = registerSchema.validate(userCredentials);

  if (error) return next(error);

  console.log(userCredentials, "user data==>>>");
 } catch (error) {
  next(error);
 }
};
