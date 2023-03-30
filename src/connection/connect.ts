import 'dotenv/config';

import { Sequelize } from 'sequelize-typescript';
import { Planet } from '../models/planet.model';

export const connection = new Sequelize({
  dialect: 'mysql',
  host: process.env['DB_HOST'],
  username: process.env['DB_USER'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_NAME'],
  logging: false,
  models: [Planet]
});

async function connectDB(): Promise<any> {
  try {
    return await connection.sync();
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export default connectDB;
