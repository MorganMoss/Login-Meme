const sql = require('mssql');
const { config } = require('./database');
const bcrypt = require('bcrypt');

async function saveVerificationCode(email, verificationCode) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_email', sql.NVarChar, email)
            .input('input_code', sql.Int, verificationCode)
            .query('UPDATE user_details SET verificationCode = @input_code WHERE email = @input_email');

        return result.rowsAffected;
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

async function findUserByEmail(email) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_email', sql.NVarChar, email)
            .query('SELECT * FROM user_details WHERE email = @input_email');
            
        return { user: result.recordset[0], rowsAffected: result.rowsAffected };
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

async function saveUser(email, password) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_email', sql.NVarChar, email)
            .input('input_password', sql.VarChar, password)
            .query('INSERT INTO user_details (email, password) VALUES (@input_email, @input_password)');

        const { user } = await findUserByEmail(email);

        let r = await pool.request()
        .input('input_id', sql.Int, user.userID)
        .input('input_attempts', sql.Int, 0)
        .query('INSERT INTO login_counter (userID, attempts) VALUES (@input_id, @input_attempts)');

        return result.rowsAffected;
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

async function removeVerificationCode(email) {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
            .input('input_email', sql.NVarChar, email)
            .query('UPDATE user_details SET verificationCode = NULL WHERE email = @input_email');

        return result.rowsAffected;
    } catch (err) {
        console.log('err in sql statement: ', err);
    }

    return null;
}

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

async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword)
}

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

module.exports = {
    saveVerificationCode,
    findUserByEmail,
    findUserByID,
    saveUser,
    removeVerificationCode,
    comparePassword,
    hashPassword
}