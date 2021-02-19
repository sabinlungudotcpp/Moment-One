const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const forbidden = 401;
const unprocessable = 422;

module.exports = async (request, response, next) => {
    try {
        const {authorization} = request.headers;

        if(!authorization) { // If user is not authorized
            return response.status(unprocessable).json({
                message: 'You must be logged in'
            });
        }
        const token = authorization.replace('Bearer ', '');

        jwt.verify(token, 'SECRET_KEY', async (error, payload) => { // Verify the JWT TOKEN
            if(error) {
                
                return response.status(forbidden).json({
                    error: error.message,
                    stack: error.stack,
                    sentAt: new Date().toISOString()
                })
            }
        })
    } 
    
    catch(error) {
        if(error) {
            return response.status(unprocessable).json({
                message: error.message
            })
        }
    }
};