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
        const {username, email, password} = request.body;

        if(method === 'POST' && url.startsWith('/')) {
            const user = new User({username, email, password});
            await user.save();

            const token = jwt.sign({userId: user._id}, 'SECRET_KEY'); // Sign the JWT
            return response.status(okCode).json({token});
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