import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import dbConnect from './config/mongo';
import cors from 'cors';

//CREATE EXPRESS APP

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES WILL GO HERE
app.use(router);

dbConnect();

app.listen(3000, () => console.log('Server started on port 3000'));
