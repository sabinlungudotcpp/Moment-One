const AppError = require('../../utils/appError');
const serverError = 500;

const handleCastError = (error, response) => {

};

const handleDuplicateKeys = (error) => {
    const message = `Duplicate key. Please re-enter`;
    return message;
}

const sendDevError = (request, response, error) => {
    if(error.isOperational) {
        return response.status(404).json({
            errMsg: error.message,
            stack: error.stack
        })
    }
};

const sendProdError = (request, response, error) => {
    if(error.isOperational) {
        return response.status(404).json({
            errorMsg: error.message,
            stack: error.stack
        });
    }
};

module.exports = (error, request, response, next) => {
    error.statusCode = error.statusCode || serverError;
    error.status = error.status || 'error';

    if(process.env.NODE_ENV === 'development') {
        if(error.code === 'E11000') {
            error = handleDuplicateKeys(error);
        }

        return sendDevError(error, response);
    }

    else if(process.env.NODE_ENV === 'production') {

        if(error.message === 'CastError') {
            error = handleCastError(error);
        }

        return sendProdError(error, response);

    }
};