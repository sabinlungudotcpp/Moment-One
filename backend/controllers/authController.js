const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const User = mongoose.model('User');

exports.registerUser = async (request, response) => {
    try {
        const method = request.method;
    } 
    
    catch(error) {
        if(error) {
            return response.status(422).json({
                message: error.message
            });
        }
    }
};

exports.signIn = async (request, response) => {

};