const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const okCode = 200;
const notFound = 404;
const unprocessable = 422;

exports.registerUser = async (request, response) => { // Controller function to register a user
    try {
        const method = request.method;
        const {email, password} = request.body;

        if(!email || !password) { // If there is no username or password
            return response.status(unprocessable).json({ // Send back an unprocessable response
                message: 'You must provide an e-mail and password'
            })
        }

        if(method === 'POST') {
            const user = new User({email, password});
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

exports.signIn = async (request, response) => { // Controller function to log in users
    try {
        const method = request.method;
        const {email, password} = request.body;

        if(!email || !password) { // If there is no e-mail or password
            return response.status(unprocessable).json({
                message: 'You must providhge an e-mail and password',
                sentAt: new Date().toISOString()
            });
        }

        if(method === 'POST') {
            const user = await User.findOne({email});
           
            if(!user) {
                return response.status(notFound).json({
                    error: 'User not found'
                });
            }

            await user.comparePasswords(password); // Compare the passwords before signing the users in
            const token = jwt.sign({userId: user._id}, 'SECRET_KEY'); // Sign the JWT with the user ID
            return response.status(okCode).json({
                message: `You are logged in as ${email} with token ${token}`
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
}