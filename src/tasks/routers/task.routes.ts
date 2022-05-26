import { Router } from 'express';
import { validatorHandler } from '../../core/middlewares';

import { createTask, getTask, getTasks, updateTask } from '../controllers';
import { createTaskSchema, getTaskSchema, updateTaskSchema } from '../schemas';

const taskRouter = Router();

taskRouter.get('/', getTasks);

taskRouter.get('/:id', [
  validatorHandler(getTaskSchema, 'params')
], getTask);

taskRouter.post('/', [
  validatorHandler(createTaskSchema, 'body')
], createTask);

taskRouter.put('/:id', [
  validatorHandler(getTaskSchema, 'params'),
  validatorHandler(updateTaskSchema, 'body')
], updateTask);

export default taskRouter;