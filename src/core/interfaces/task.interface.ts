export type typePriority = 'alta' | 'media' | 'baja';
export type typeStatus = 'pendiente' | 'en-progreso' | 'completada';

export interface ITask {
  id: string;
  description: string;
  priority: typePriority;
  status: typeStatus;
  
  createdAt: string | Date;
  updatedAt: string | Date;
}