import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('token');
  if(!token){
    return res.status(401).json({
      ok: false,
      message: 'No hay token en la petición'
    });
  }

  try {
    jwt.verify(token, config.SECRET_KEY);
    return next();
  } catch (error) {
    return res.status(401).json({
      ok: false,
      message: 'Token no válido'
    });
  }

  
};  