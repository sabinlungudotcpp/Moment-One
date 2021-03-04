const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const okCode = 200;
const unauthorized = 401;
const unprocessable = 422;

const signToken = (id) => { // Signs the JWT token
    return jwt.sign({id}, 'SECRET_KEY');
}

exports.registerUser = async (request, response) => {
    try {
        const method = request.method;
        const {username, password} = request.body;

        if(!username || !password) {
            return response.status(unprocessable).json({ // Send back an unprocessable response
                message: 'You must provide an e-mail and password'
            })
        }

        if(method === 'POST') {
            const user = new User({username, password});
            await user.save();

            const token = signToken(user._id); // Sign the JWT token
            return response.status(okCode).json({token, user});
        }
    }
    
    catch(error) {
        
        if(error) {
            return response.status(unprocessable).json({
                message: error.message,
                stack: error.stack
            });
        }
    }
};

exports.login = catchAsync(async (request, response, next) => { // Controller function to log in users
    try {
        const method = request.method; // The request method
        const {username, password} = request.body; // The request body

        if(!username || !password) { // If there is no e-mail or password
            return response.status(unauthorized).json({
                message: 'You must provide an e-mail or password',
                sentAt: new Date().toISOString()
            });
        }

        if(method === 'POST') {
            const user = await User.findOne({username}); // Find a user
           
            if(!user || !(await user.comparePasswords(password, user.password))) {
                
                return response.status(unauthorized).json({
                    message: 'Incorrect e-mail or password',
                    sentAt: new Date().toISOString()
                })
            }

            const token = signToken(user._id);

            return response.status(okCode).json({
                message: `You are logged in as ${username} with token ${token}`
            });
        }
    } 
    
    catch(error) {

        if(error) {

            return response.status(unprocessable).json({
                errorMsg: error.message,
                stack: error.stack,
                sentAt: new Date().toISOString()
            });
        }
    }
});