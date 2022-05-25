import { string } from 'joi';
import { Schema, model, Model } from 'mongoose';

import { ITask } from '../../core/interfaces';

const taskSchema = new Schema({
  description: {
    type: string,
    required: true
  },
  priority: {
    type: string,
    enum: {
      values: ['alta', 'media', 'baja'],
      message: '{VALUE} no es una proridad aceptada'
    },
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
  }
});

taskSchema.methods.toJSON = function(){
  const { __v, _id, ...task } = this.toObject();

  return {
    ...task,
    id: _id
  };
};

const Task: Model<ITask> = model('Task', taskSchema);

export default Task;