import 'dotenv/config';
import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import connectDB from './connection/connect';

const app = express();

// config

// middlware
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

// connection db
connectDB()
  .then(() => {
    console.log('Connect success 👍');
  })
  .catch((err) => {
    console.log('Something went wrong 😥 👉 :', err);
  });

export default app;
// https://www.youtube.com/watch?v=u2tNR-VAKYE
