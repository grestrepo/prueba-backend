import express, { Application } from 'express';
import cors from 'cors';

import { userRouter, authRouter } from './users/routers';
import { taskRouter } from './tasks/routers';

import { dbConnection } from './core/database';
import { IPath } from './core/interfaces';
import { config } from './core/config';

export class Server {

  app: Application;
  private path: IPath;
  private port: string;
  
  constructor(){
    this.app = express();
    this.path = {
      users: '/api/v1/users',
      auth: '/api/v1/auth',
      task: '/api/v1/task'
    };
    this.port = config.port;

    //conectar base de datos
    this.databaseConnect();

    //middlewares
    this.middlewares();

    //routes
    this.routes();
  }

  private middlewares(){
    this.app.use(express.json());
    this.app.use(cors({origin: true}));
  }

  private routes(){
    this.app.use(this.path.users, userRouter);
    this.app.use(this.path.auth, authRouter);
    this.app.use(this.path.task, taskRouter);
  }

  private async databaseConnect(){
    await dbConnection();
  }

  listen(){
    this.app.listen(this.port, () => {
      console.log(`Listen port ${this.port}`);
    });
  }

}