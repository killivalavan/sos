//Validation
import Joi from "joi";

export const FormSchema = Joi.object({
  name: Joi.string().max(10).min(3).required(),
  mail: Joi.string().max(20).min(5).email().required(),
  city: Joi.string().max(10).min(3).required(),
  locality: Joi.string().max(10).min(3).required(),
  country: Joi.string().max(7).min(2).required(),
  date: Joi.string(),
  category: Joi.string().required(),
  message: Joi.string().min(10).max(200).required(),
});
