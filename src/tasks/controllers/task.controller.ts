import { Request, Response } from 'express';

export const createTask = async (req: Request, res: Response) => {
  res.status(200).json({
    ok: true,
    message: 'Tarea creada Exitosamente'
  });
};