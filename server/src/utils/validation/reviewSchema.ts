import Joi from "joi";

export const reviewSchema = Joi.object({
 rating: Joi.string().email().required(),

 comment: Joi.string().min(10).required(),
});
