import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import db from './config/mongo';
import cors from 'cors';

const app = express();

//CREATE EXPRESS APP
const PORT = process.env.PORT || 80;

app.use(
  cors({
    origin: `*`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//ROUTES WILL GO HERE
app.use(router);

const { DB_HOST, DB_USER, DB_PASS, DB_DATABASE } = process.env;

db().then(() => {
  console.log('Connection with DB is ready');
});
app.listen(PORT, () => {
  console.log(`Server listen on port: ${PORT}`);
});
