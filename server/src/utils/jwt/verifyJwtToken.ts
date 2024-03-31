import jwt from "jsonwebtoken";
import { IUserPayload } from "../../interfaces/IUserPayload";

export const verifyJwtToken = (
 token: string,
 secret: string
): Promise<IUserPayload | null> => {
 return new Promise((resolve, reject) => {
  jwt.verify(token, secret, (err, decoded) => {
   if (err) {
    reject(err);
   } else {
    resolve(decoded as IUserPayload);
   }
  });
 });
};
