import { NextFunction, Request, Response } from "express";
import { IUserPayload } from "../interfaces/IUserPayload";
import { TOKEN_SECRET } from "../lib/envConfig";
import { generateJwtToken, verifyJwtToken } from "../utils/jwt";

declare global {
 namespace Express {
  interface Request {
   user?: IUserPayload;
  }
 }
}

export const CurrentUser = async (
 req: Request,
 res: Response,
 next: NextFunction
) => {
 let user;

 try {
  const { auth_token } = req.cookies;

  if (!auth_token) {
   return next("Token is available");
  }

  if (auth_token) {
   user = await verifyJwtToken(auth_token, String(TOKEN_SECRET));
  }
  if (user) {
   const jwtToken = generateJwtToken({
    _id: user._id,
    email: user.email,
   });
   res.cookie("auth_token", jwtToken, {
    httpOnly: true,
   });
  }

  req.user = user!;
  next();
 } catch (error) {
  next();
 }
};
