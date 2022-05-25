import { Schema, model, Model } from 'mongoose';

import { IUser } from '../../core/interfaces';

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// TODO: Crear Indice

const User: Model<IUser> = model('User', userSchema);

export default User;