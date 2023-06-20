const jwt = require('jsonwebtoken');
const ErrorHandler = require("../utils/errorHandler");

exports.isAuthenticatedUser = async (req, res, next) => {
    
    const token = req.headers['authorization'];

    if(!token) {
        return next(new ErrorHandler('Login Normally first to access this resources.', 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // logic change
    req.user = await User.findById(decoded.id);

    next();
};