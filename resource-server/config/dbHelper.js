const sql = require('mssql');
const { config } = require('./database');

async function findUserByID(id) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_id', sql.Int, id)
            .query('SELECT * FROM user_details WHERE userID = @input_id')
            
        return { user: result.recordset[0], rowsAffected: result.rowsAffected };
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

async function findUserByIDAndUpdateAttempt(id) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_id', sql.Int, id)
            .query('SELECT * FROM login_counter WHERE userID = @input_id');
            
        const counter = result.recordset[0].attempts + 1;

        let updatedCounter = await pool.request()
            .input('input_counter', sql.Int, counter)
            .input('input_id', sql.Int, id)
            .query('UPDATE login_counter SET attempts = @input_counter WHERE userID = @input_id');   

        return result.rowsAffected;
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

async function getLoginCounterValue(id) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_id', sql.Int, id)
            .query('SELECT * FROM login_counter WHERE userID = @input_id');

        return { loginCounter: result.recordset[0], rowsAffected: result.rowsAffected };
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

module.exports = {
    findUserByIDAndUpdateAttempt,
    findUserByID,
    getLoginCounterValue
}