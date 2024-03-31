import Joi from "joi";

export const loginSchema = Joi.object({
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
