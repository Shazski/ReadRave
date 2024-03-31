import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../../lib/envConfig";
import { IUserPayload } from "../../interfaces/IUserPayload";

//function to create jwt token
export const generateJwtToken = (payload: IUserPayload) => {
 return jwt.sign(payload, String(TOKEN_SECRET), { expiresIn: "10d" });
};
