const mongoose = require('mongoose');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken');
const Therapist = require('../models/therapistModel');
const okCode = 200;
const created = 201;
const unauthorized = 401;
const unprocessable = 422;

const signToken = (id) => {
    return jwt.sign({id}, 'MY_SECRET_KEY');
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

    } 
    
    catch(error) {
        return response.status(unprocessable).json({
            message: error.message,
            stack: error.stack
        });
    }
};