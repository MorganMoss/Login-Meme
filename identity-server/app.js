const express = require('express');
const app = express();
require("dotenv").config();

const errorMiddleware = require('./middlewares/catchError');

app.use(express.json());

const auth = require('./controllers/authController');

app.use('/api/v1/', auth);

app.use(errorMiddleware);

module.exports = app;