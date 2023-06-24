module.exports = errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV !== 'PRODUCTION') {
        let error = { ...err };

        error.message = err.message;

        if(err.statusCode === 'JsonWebTokenError') {
            const message = 'JSON Web Token is invalid. Try Again!!'
            error = new ErrorHandler(message, 400);
        }

        //Handling expired JWT error
        if(err.statusCode === 'TokenExpired') {
            const message = 'JSON Web Token is expired. Try Again!!'
            error = new ErrorHandler(message, 400);
        }

        res.status(err.statusCode || 500).json({
            success: false,
            message: error.message || 'Internal Server Error'
        });
    }
}