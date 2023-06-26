const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
require("dotenv").config();
const mime = require('mime');
mime.types['css'] = 'text/css';


const routes = require("./routes/user");

app.use("/", routes);

app.listen(8081, () => {
  console.log("Server started on port 8081");
});

const errorMiddleware = require('./middlewares/catchError');

app.use(express.json());

const user = require('./controllers/userController');

// app.use('/api/v1/', user);

app.use(errorMiddleware);

module.exports = app;