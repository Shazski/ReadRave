import { compare } from "bcrypt";

export const comparePassword = async (password: string, encrypted: string) => {
 try {
  const matchFound = await compare(password, encrypted);

  if (!matchFound) {
   return false;
  }

  return true;
 } catch (error: any) {
  throw new Error(error.message);
 }
};
