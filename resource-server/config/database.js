const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
}

async function connectToDatabase() {
    try {
        await sql.connect(config)
        console.log('connected successful');
       } catch (err) {
        console.log('err', err)
       }
}

module.exports = {
  config,
  connectToDatabase
}