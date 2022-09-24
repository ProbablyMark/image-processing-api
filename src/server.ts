import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import body_parser from 'body-parser';
import morgan from 'morgan';
import { errorMiddleWare } from './Middlewares/errorMiddleware';

import cors from 'cors';
import imageRouter from './Routers/imageRouter';

const app = express();

//listening to port 8000
const port: number = 8000;

//use morgan
app.use(morgan(':method :url :status :http-version :response-time '));

//use cors
app.use(cors());
// body parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
//
http.createServer(app).listen(port, async () => {
  try {
    console.log(`server running on ${port}  `);
  } catch (error) {
    console.log(error);
  }
});
//routes
app.use(imageRouter);
//Not found MW
app.use((req: Request, res: Response) => {
  res.status(404).send('<h1>404<br>Page not found</h1>');
});
//error MW
app.use(errorMiddleWare);
