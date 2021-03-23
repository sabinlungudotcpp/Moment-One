const Assessment = require('../../models/admin/assessmentModel');
const Question = require('../../models/admin/questionModel');
const express = require('express');
const okCode = 200;
const createdCode = 201;
const notFound = 404;

exports.getAllAssessments = async (request, response, next) => { // Allows Admins to view all the assessments created
    try {
        const method = request.method;

        if(method === 'GET') {
            const assessments = await Assessment.find();

            return response.status(okCode).json({
                assessments
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                message: error.toString()
            })
        }
    }
}

exports.getAssessmentByID = async (request, response) => {
    try {

    } 
    
    catch(error) {

    }
}

exports.createAssessment = async (request, response, next) => {
    try {
        const method = request.method;
        const {title, startingQuestion, nextQuestion, outcome} = request.body;

        if(!title || !startingQuestion || !nextQuestion || !outcome) {
            return response.status(notFound).json({
                message: 'You must fill out all of the necessary fields'
            })
        }

        if(method === 'POST') {
            const newAssessment = new Assessment(new Question({title, startingQuestion, nextQuestion, outcome}))

            return response.status(createdCode).json({
                assessment: {
                    newAssessment
                }
            })
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                errorMessage: error.toString()
            });
        }
    }
}

exports.editAssessment = async (request, response, next) => { // Allows admins to edit an assessment
    try {

    } 
    
    catch(error) {

    }
}

exports.deleteAssessments = async (request, response, next) => {
    try {

    } 
    
    catch(error) {

    }
};