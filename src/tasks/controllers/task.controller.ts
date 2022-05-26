import { Request, Response } from 'express';

import { TaskService } from '../services/task.service';

const taskService = new TaskService();

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await taskService.getTasks();
  res.status(200).json({
    ok: true,
    tasks
  });
};

export const getTask = async (req: Request, res: Response) => {
  const id = req.params.id;
  const task = await taskService.getTask(id);

  if(!task){
    return res.status(404).json({
      ok: false,
      message: `No se encontró ninguna tarea con el id ${id}`
    });
  }

  res.status(200).json({
    ok: true,
    task
  });
};

export const createTask = async (req: Request, res: Response) => {
  const {description, priority, status} = req.body;
  try {
    const newTask = await taskService.createTask({description, priority, status});
    return res.status(200).json({
      ok: true,
      message: 'Tarea creada Exitosamente',
      newTask
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: 'Error a la hora de crear tarea',
      err: error
    });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const id = req.params.id;
  const payload = req.body;
  const task = await taskService.updateTask(id, payload);

  res.status(200).json({
    ok: true,
    task
  });
};
