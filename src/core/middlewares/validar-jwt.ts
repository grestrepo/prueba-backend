import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('token');
  if(!token){
    return res.status(400).json({
      ok: false,
      message: 'Falta token en los headers'
    });
  }

  return next();
};  