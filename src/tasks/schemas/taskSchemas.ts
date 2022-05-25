import * as Joi from 'joi';

export const id = Joi.string();
export const name = Joi.string().min(3).max(100);
export const email = Joi.string().min(3).email();
export const password = Joi.string().min(4).max(100);

export const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
});

export const loginUserSchema = Joi.object({
  email: email.required(),
  password: password.required()
});

export const updateUserSchema = Joi.object({
  name: name,
  email: email,
  password: password,
});

export const getUserSchema = Joi.object({
  id: id.required()
});