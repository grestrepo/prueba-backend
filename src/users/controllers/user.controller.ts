import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';

import { User } from '../models';
import { UserService } from '../services/user.service';
import { generateJWT } from '../../core/helpers';


const userService = new UserService(); 

export const createUser = async (req: Request, res: Response) => {
  const {name, email, password} = req.body;

  const newUser = await userService.createUser({name, email, password});

  res.status(200).json({
    ok: true,
    info: newUser
  });
};

export const login = async (req: Request, res: Response) => {

  const {email, password } = req.body;
  
  const user = await User.findOne({email});

  if(!user){
    return res.status(400).json({
      ok: false,
      message: 'No se encontró ningún usuario'
    });
  }

  const validPassword = bcrypt.compareSync(password, user.password);
  if(!validPassword){
    return res.status(400).json({
      ok: false,
      message: 'La contraseña es inválida'
    });
  }

  const token = await generateJWT(user.uid);

  return res.status(200).json({
    ok: true,
    message: 'Login',
    user,
    token
  });
};