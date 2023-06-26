const express = require('express');
const app = express();
require("dotenv").config();

const errorMiddleware = require('./middlewares/catchError');

app.use(express.json());

const user = require('./controllers/userController');

app.use('/api/v1/', user);

app.use(errorMiddleware);

module.exports = app;