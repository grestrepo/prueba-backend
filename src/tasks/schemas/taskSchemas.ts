import * as Joi from 'joi';

const id = Joi.string();
const description = Joi.string().min(3).max(100);
const priority = Joi.string().min(3).max(100);
const status = Joi.string().min(3).max(20);
// export const email = Joi.string().min(3).email();
// export const password = Joi.string().min(4).max(100);

export const createTaskSchema = Joi.object({
  description: description.required(),
  priority: priority.required(),
  status: status.required()
});

export const updateTaskSchema = Joi.object({
  description: description,
  priority: priority,
  status: status
});

export const getTaskSchema = Joi.object({
  id: id.required()
});