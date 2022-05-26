import { typePriority, typeStatus } from "../../core/interfaces";

export interface createTaskDto {
  description: string;
  priority: typePriority;
  status: typeStatus
}

export interface updateTaskDto {
  description?: string;
  priority?: typePriority;
  status?: typeStatus
}