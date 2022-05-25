import * as Joi from 'joi';

export const id = Joi.string();
export const description = Joi.string().min(3).max(100);
// export const email = Joi.string().min(3).email();
// export const password = Joi.string().min(4).max(100);

export const createTaskSchema = Joi.object({
  description: description.required(),
});

export const updateTaskSchema = Joi.object({
  description: description
});

export const getTaskSchema = Joi.object({
  id: id.required()
});