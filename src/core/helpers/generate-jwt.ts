import jwt from 'jsonwebtoken';

import { config } from '../config';

export const generateJWT = (uid: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const payload = { uid };

    jwt.sign(payload, config.SECRET_KEY, {
      expiresIn: '4h'
    }, (err, token) => {
      if(err){
        console.log(err);
        reject('No se pudo generar el token');
      }else{
        resolve(token || '');
      }
    });
  });
};