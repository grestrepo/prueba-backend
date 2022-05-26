/* eslint-disable @typescript-eslint/no-explicit-any */
import { Task } from '../models';

import { ITask } from '../../core/interfaces';
import { createTaskDto, updateTaskDto } from '../dtos';

export class TaskService {

  async getTasks(query: any): Promise<ITask[]>{
    const tasks = await Task.find(query);

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

    try {
      await newTask.save();
    } catch (error) {
      throw new Error('Error a la hora de crear tarea');
    }

    return newTask;
  }

  async updateTask(id: string, payload: updateTaskDto): Promise<ITask | null>{
    const taskUpdated = await Task.findByIdAndUpdate(id, {
      ...payload,
      updatedAt: new Date()
    }, {
      new: true
    });

    return taskUpdated;
  }

  async deleteTask(id: string): Promise<any> {
    const taskDeleted = await Task.findByIdAndDelete(id);
    return taskDeleted;
  }
}