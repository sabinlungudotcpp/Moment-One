const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authenticate = require('../middlewares/authentication');
const express = require('express');
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

exports.signIn = async (request, response) => { // Controller function to log in users
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
            return response.json({
                message: 'ok'
            })
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