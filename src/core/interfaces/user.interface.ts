
export interface IUser {
  uid: string;
  name: string;
  email: string;
  password: string;
  status: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}