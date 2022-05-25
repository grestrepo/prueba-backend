import mongoose from 'mongoose';

import { config } from '../config';

export const dbConnection = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
    console.log('Se conectó con exito');
  } catch (error) {
    console.log('Ocurrió un error al conectarse');
    throw new Error('Error a la hora de iniciar la base de datos');
  }
};