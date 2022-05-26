export type typePriority = 'alta' | 'media' | 'baja';
export type typeStatus = 'pending' | 'in-progress' | 'finished';

export interface ITask {
  id: string;
  description: string;
  priority: typePriority;
  status: typeStatus;
  
  createdAt: string | Date;
  updatedAt: string | Date;
}