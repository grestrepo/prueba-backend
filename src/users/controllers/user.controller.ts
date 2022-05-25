import { Request, Response } from 'express';

import { UserService } from '../services/user.service';

const userService = new UserService(); 

export const createUser = async (req: Request, res: Response) => {
  const {name, email, password} = req.body;

  const newUser = await userService.createUser({name, email, password});

  res.status(200).json({
    ok: true,
    info: newUser
  });
};

export const login = (req: Request, res: Response) => {
  return res.status(200).json({
    ok: true,
    message: 'Login'
  });
};