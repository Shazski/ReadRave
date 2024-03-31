import Joi from "joi";

export const registerSchema = Joi.object({
 name: Joi.string().min(1).required().messages({
  "string.empty": "Name is required",
  "any.required": "Name is required",
 }),

 email: Joi.string().email().required().messages({
  "string.email": "Invalid email format",
  "any.required": "Email is required",
 }),

 password: Joi.string()
  .pattern(
   new RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
   )
  )
  .required()
  .messages({
   "string.pattern.base":
    "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long",
   "any.required": "Password is required",
  }),
});
