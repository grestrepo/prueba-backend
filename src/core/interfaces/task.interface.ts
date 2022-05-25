type typePriority = 'alta' | 'media' | 'baja';

export interface ITask {
  id: string;
  description: string;
  priority: typePriority;
  
  createdAt: string | Date;
  updatedAt: string | Date;
}