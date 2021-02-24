const AppError = require('../../utils/appError');
const serverError = 500;

const handleCastError = (error, response) => {

};

const sendDevError = (request, response) => {

};

const sendProdError = (request, response) => {

};

module.exports = (error, request, response, next) => {
    error.statusCode = error.statusCode || serverError;
    error.status = error.status || 'error';

    if(process.env.NODE_ENV === 'development') {
        return sendDevError(error, response);
    }

    else if(process.env.NODE_ENV === 'production') {

        if(error.message === 'CastError') {
            error = handleCastError(error);
            sendProdError(error, response);
        }

    }
};