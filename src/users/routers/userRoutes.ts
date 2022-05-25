import { Router } from 'express';
import { validatorHandler, validateEmailExists } from '../../core/middlewares';

import { createUser } from '../controllers';
import { createUserSchema } from '../schemas';

const userRouter = Router();

userRouter.post('/', [
  validatorHandler(createUserSchema, 'body'),
  validateEmailExists
],createUser);


export default userRouter;