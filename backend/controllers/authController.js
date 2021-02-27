const mongoose = require('mongoose');
const catchAsync = require('../../utils/catchAsync');
const jwt = require('jsonwebtoken');
const AppError = require('../../utils/appError');
const User = mongoose.model('User');
const okCode = 200;
const unauthorized = 401;
const unprocessable = 422;

exports.registerUser = async (request, response) => { // Controller function to register a user
    try {
        const method = request.method;
        const {username, password} = request.body;

        if(!username || !password) { // If there is no username or password
            return response.status(unprocessable).json({ // Send back an unprocessable response
                message: 'You must provide an e-mail and password'
            })
        }

        if(method === 'POST') {
            const user = new User({username, password});
            await user.save();

            const token = jwt.sign({userId: user._id}, 'SECRET_KEY'); // Sign the JWT
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

exports.signIn = catchAsync(async (request, response, next) => { // Controller function to log in users
    try {
        const method = request.method; // The request method
        const {username, password} = request.body;

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

            const token = jwt.sign({userId: user._id}, 'SECRET_KEY'); // Sign the JWT with the user ID
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
