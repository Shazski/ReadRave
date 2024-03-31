import { NextFunction, Request, Response } from "express";
import { loginSchema, registerSchema } from "../utils/validation";
import { createUser, findByEmail } from "../services/user.service";
import { generateJwtToken } from "../utils/jwt";
import { IUser } from "../interfaces/IUserSchema";
import { comparePassword } from "../utils/bcrypt";

//Register user
//
export const register = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const userCredentials = req.body;
 try {
  const { value, error } = registerSchema.validate(userCredentials);

  if (error) return next(error);

  const newUser = await createUser(userCredentials);

  if (!newUser) return next("Email is already taken!");

  const jwtToken = generateJwtToken({
   _id: newUser._id,
   email: String(newUser.email),
  });

  res.cookie("auth_token", jwtToken);

  res
   .status(201)
   .json({
    success: true,
    data: newUser,
    message: "User registered Successfully",
   });
 } catch (error) {
  next(error);
 }
};

export const login = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 const loginCredentials: IUser = req.body;
 try {
  const { value, error } = loginSchema.validate(loginCredentials);

  if (error) return next(error);

  const userExists = await findByEmail(loginCredentials.email);

  if (!userExists) return next("User is not Existing");

  const passwordMatch = await comparePassword(
   loginCredentials.password,
   userExists.password
  );

  if (!passwordMatch) return next("Invalid password or Email");

  const jwtToken = generateJwtToken({
   _id: userExists._id,
   email: userExists.email,
  });

  res.cookie("auth_token", jwtToken);

  res
   .status(200)
   .json({
    success: true,
    data: userExists,
    message: "User logined successfully",
   });
 } catch (error) {
  next(error);
 }
};
