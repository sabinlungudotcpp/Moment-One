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
        const {email, username, password} = request.body;

        if(!email || !username || !password) {
            return response.status(unprocessable).json({
                status: 'Fail',
                message: 'You must provide an e-mail, username or password when registering a Therapist'
            });
        }

        if(method === 'POST') {
            const therapist = new Therapist({email, username, password});
            await therapist.save();

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
