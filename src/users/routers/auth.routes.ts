import { Router } from 'express';

import { login } from '../controllers';
import { validatorHandler } from '../../core/middlewares';
import { loginUserSchema } from '../schemas';

const authRouter = Router();

authRouter.post('/login', [
  validatorHandler(loginUserSchema, 'body')
], login);

export default authRouter;