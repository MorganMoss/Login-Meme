const express = require('express');
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require('body-parser');

app.listen(8080, () => {
  console.log("Server started on port 8080");
});

const errorMiddleware = require('./middlewares/catchError');

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

const auth = require('./controllers/authController');

app.use('/api/v1/', auth);

app.use(errorMiddleware);

module.exports = app;