const express = require('express');
const app = express();
require("dotenv").config();
app.use(express.static('public'));
const mime = require('mime');
mime.types['css'] = 'text/css';



// Import your routes
const routes = require("./routes/user");

// Use the routes
app.use("/", routes);

// Start the server
app.listen(8081, () => {
  console.log("Server started on port 8081");
});


const errorMiddleware = require('./middlewares/catchError');

app.use(express.json());

const user = require('./controllers/userController');

// app.use('/api/v1/', user);

app.use(errorMiddleware);

module.exports = app;