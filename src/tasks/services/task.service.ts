import { Task } from '../models';

import { ITask } from '../../core/interfaces';
import { createTaskDto, updateTaskDto } from '../dtos';

export class TaskService {

  async getTasks(): Promise<ITask[]>{
    const tasks = await Task.find();

    return tasks;
  }

  async getTask(id: string): Promise<ITask | null> {
    const task = await Task.findById(id);
    return task;
  }

  async createTask(payload: createTaskDto): Promise<ITask>{
    const createdAt = new Date();
    const updatedAt = new Date();
    const newTask = new Task({...payload, createdAt, updatedAt});

    await newTask.save();

    return newTask;
  }

  async updateTask(id: string, payload: updateTaskDto): Promise<ITask | null>{
    const updatedTask = await Task.findByIdAndUpdate(id, {
      ...payload,
      updatedAt: new Date()
    }, {
      new: true
    });

    return updatedTask;
  }
}