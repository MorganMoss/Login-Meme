const jwt = require('jsonwebtoken');
const ErrorHandler = require("../utils/ErrorHandler");
const { findUserByID } = require('../config/dbHelper');

exports.isAuthenticatedUser = async (req, res, next) => {
    
    const token = req.headers['authorization'];

    if(!token) {
        return next(new ErrorHandler('Login with email and password first to access this resources.', 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const result = await findUserByID(decoded.id);
        req.user = result.user;
    } catch(err) {
        res.status(500).json({
            success: false,
            message: 'Invalid Web token'
        });
    }


    next();
};