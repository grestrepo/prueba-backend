import { Router } from 'express';

import { createTask } from '../controllers';

const taskRouter = Router();

taskRouter.post('/', createTask);


export default taskRouter;