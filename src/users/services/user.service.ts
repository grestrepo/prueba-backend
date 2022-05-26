import bcrypt from 'bcryptjs';
import { User } from '../models';

import { createUserDto } from '../dtos';

export class UserService {

  async createUser(payload: createUserDto){
    
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