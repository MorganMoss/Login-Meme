const express = require('express');
const app = express();

const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/catchError');

dotenv.config({ path: './config/config.env' });

app.use(express.json());

const user = require('./controllers/userController');

app.use('/api/v1/', user);

app.use(errorMiddleware);

module.exports = app;