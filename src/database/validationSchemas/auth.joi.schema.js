const Joi = require('joi');

const schemaOptions = {
  abortEarly: false,
  stripUnknown: true,
};

const nameSchema = Joi.string().min(3).max(255).regex(/^[A-za-z\s]+$/)
  .required();
const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(8).max(255).required();

//  validator for login purpose.
const loginSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

const registerSchema = Joi.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

module.exports = {
  schemaOptions,
  loginSchema,
  registerSchema,
};
