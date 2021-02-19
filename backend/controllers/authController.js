const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/authentication');
const User = mongoose.model('User');
const okCode = 200;
const unprocessable = 422;

exports.registerUser = async (request, response) => { // Controller function to register a user
    try {
        const method = request.method;
        const url = request.url;
        const {email, password} = request.body;

        if(!email || !password) {
            return response.status(unprocessable).json({
                message: 'You must provide an e-mail and password'
            })
        }

        if(method === 'POST') {
            const user = new User({email, password});
            await user.save();

            const token = jwt.sign({userId: user._id}, 'SECRET_KEY'); // Sign the JWT
            return response.status(okCode).json({email});
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

exports.signIn = async (request, response) => { // Controller function to log in users
    try {
        const method = request.method;
        const {email, password} = request.body;

        if(!email || !password) {
            return response.status(unprocessable).json({
                message: 'You must provide an e-mail and password',
                sentAt: new Date().toISOString()
            });
        }

        if(method === 'POST') {
            const user = await User.findOne({email});
           
            if(!user) {
                return response.status(404).json({
                    error: 'User not found'
                });
            }

            await user.comparePassword(password);
            const token = jwt.sign({userId: user._id}, 'SECRET_KEY');
            return response.status(okCode).json(email);
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
}