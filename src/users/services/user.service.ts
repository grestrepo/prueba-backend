import bcrypt from 'bcryptjs';
import { User } from '../models';

import { createDto } from '../dtos';

export class UserService {

  async createUser(payload: createDto){
    
    const salt = bcrypt.genSaltSync();
    const password = bcrypt.hashSync(payload.password, salt);

    const newUser = new User({
      ...payload,
      password
    });
    await newUser.save();
    return newUser;
  }
  
}