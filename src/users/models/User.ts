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

userSchema.methods.toJSON = function(){
  const { __v, password, _id, ...user } = this.toObject();

  return {
    ...user,
    uid: _id
  };
};

const User: Model<IUser> = model('User', userSchema);

export default User;