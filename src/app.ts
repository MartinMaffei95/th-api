import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import dbConnect from './config/mongo';
import cors from 'cors';

//CREATE EXPRESS APP
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES WILL GO HERE
app.use(router);

dbConnect().then(() => {
  console.log('Connection with DB is ready');
});
app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});
