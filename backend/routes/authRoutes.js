const express = require('express');
const authController = require('../controllers/authController');
const authenticate = require('../middlewares/authentication');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const okCode = 200;
const unprocessable = 422;
const User = mongoose
const authRouter = express.Router(); // The authentication router.

authRouter.route('/').post(authController.registerUser);

authRouter.post('/api/v1/momentone/signin', async (request, response) => {

    try {
        const method = request.method;
        const {email, password} = request.body;

        if(!email || !password) {
            return response.status(404).json({
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

})  // Controller function to log in users
    

module.exports = authRouter;