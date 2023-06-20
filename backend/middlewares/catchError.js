module.exports = errorMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV !== 'PRODUCTION') {
        res.status(err.statusCode || 500).json({
            success: false,
            message: err.message || 'Internal Server Error'
        });
    }
}