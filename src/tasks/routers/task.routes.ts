import { Router } from 'express';
import { existsTaskById, validatorHandler } from '../../core/middlewares';

import { createTask, deleteTask, getTask, getTasks, updateTask } from '../controllers';
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
  validatorHandler(updateTaskSchema, 'body'),
  existsTaskById
], updateTask);

taskRouter.delete('/:id', [
  validatorHandler(getTaskSchema, 'params'),
  existsTaskById
], deleteTask);



export default taskRouter;