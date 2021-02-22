class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode; // Status code of the error
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError; // Export the App Error class