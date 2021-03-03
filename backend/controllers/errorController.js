const AppError = require('../utils/appError');
const serverError = 500;

const sendDevError = (error, response) => {
        return response.status(error.statusCode).json({
            status: error.status,
            error: error,
            message: error.message,
            stack: error.stack
    });
}

module.exports = (error, request, response, next) => {
    error.statusCode = error.statusCode || serverError;
    error.status = error.status || 'error';

    if(process.env.NODE_ENV === 'development') {
        return sendDevError(error, response);    

    }
};