const app = require('./app');
const { connectToDatabase } = require('./config/database');

require("dotenv").config();

process.on('uncaughtExpetion', err => {
    console.log(`ERROR: ${err.message}`);
    console.log('Shutting down due to uncaught exceptions')
    process.exit(1);
});


connectToDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.IDENTITY_SERVER_PORT} in ${process.env.NODE_ENV} mode.`);
});

process.on('unhandledRejection', err => {
    console.log(`ERROR: ${err.stack}`);
    console.log('Shutting down the server due to Unhandled Promise rejection');
    server.close(() => {
        process.exit(1)
    })
})