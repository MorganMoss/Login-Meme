const express = require('express');
const app = express();

const dotenv = require('dotenv');

const errorMiddleware = require('./middlewares/catchError');

dotenv.config({ path: './config/config.env' });

app.use(express.json());

const auth = require('./controllers/authController');
const google = require('./controllers/googleAuthController')

app.use('/api/v1/', auth);
app.use('api/v1/google', google);

app.use(errorMiddleware);

module.exports = app;