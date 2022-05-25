import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || '3000',
  MONGO_URL: process.env.MONGO_URL || ''
};