const jwt = require('jsonwebtoken');
const { findUserByIDAndUpdateAttempt } = require('../config/dbHelper');

const incrementLoginAttempt = async (req, res, next) => {
    const token = req.headers['authorization'];

    if(!token) {
        return next(new ErrorHandler('Login with email and password first to access this resources.', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const result = await findUserByIDAndUpdateAttempt(decoded.id);

    if(result === 0) {
        return next(new ErrorHandler('Internal Server Error', 500));
    }

    res.status(200).json({
        success: true
    });
}

module.exports = {
    incrementLoginAttempt
}