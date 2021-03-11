const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Therapist = require('../models/therapistModel');
const okCode = 200;
const created = 201;
const unauthorized = 401;
const unprocessable = 422;
const serverError = 500;

const signToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {expiresIn:'28d'});
};

exports.registerTherapist = async (request, response, next) => { // Middleware function to register a therapist
    try {
        const method = request.method;
        const { firstName, lastName, username, password, passwordConfirm, email, telephone, city, country} = request.body; // The data coming from the body

        if(method === 'POST') {
            const therapist = new Therapist({firstName, lastName, username, password, passwordConfirm, email, telephone, city, country});
            await therapist.save(); // Save the details to the database

            const token = signToken(therapist._id);

            return response.status(created).json({
                status: 'Success',
                data: {
                    therapist,
                    token,
                    createdAt: new Date().toISOString()
                }
            });
        }
    } 
    
    catch(error) {
        return response.status(unprocessable).json({
            message: error.message,
            stack: error.stack
        });
    }
};

exports.loginTherapists = async (request, response, next) => {
    try {
        // Logs in the therapist
        const { username, password } = request.body;
        const method = request.method;

        if(!username || !password) {
            return response.status(serverError).json({
                status: 'Login Failed',
                message: 'You must provide a username and password'
            });
        }

        if(method === 'POST') {
            const therapist = await Therapist.findOne({username});

            if(!therapist || !(await therapist.comparePasswords(password, therapist.password))) { // If there is no password or the passwords don't match.

                return response.status(unauthorized).json({
                    message: 'Incorrect e-mail or password',
                    sentAt: new Date().toISOString()
                });
            }

            const token = signToken(therapist._id);

            return response.status(okCode).json({
                status: 'Logged In Success',
                message: `You are logged in as ${username} with the token ${token}`,
                loggedInAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        return response.status(unprocessable).json({
            message: error.message,
            stack: error.stack
        });
    }
};