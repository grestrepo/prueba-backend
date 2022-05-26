import {Request, Response, NextFunction} from 'express';
import { ObjectSchema } from 'joi';

import { User } from '../../users/models';
import { Task } from '../../tasks/models';

import { typeProperty } from '../interfaces';

export const validatorHandler = (schema: ObjectSchema, property: typeProperty) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const {error} = schema.validate(data);
    if(error){
      return res.status(500).json({
        ok: false,
        error: error.details,
        message: error.message
      });
    }

    return next();
  };
};

export const validateEmailExists = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body; 
  const user = await User.findOne({ email });

  if(!user){
    return next();
  }

  return res.status(400).json({
    ok: false,
    message: `El correo ${email} ya está en uso`
  });
};

export const existsTaskById = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if(!task){
    return res.status(404).json({
      ok: false,
      message: `No se encontró la tarea con id ${id}`
    });
  }

  return next();

};