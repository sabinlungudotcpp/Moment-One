const Assessment = require('../../models/admin/assessmentModel');
const Question = require('../../models/admin/questionModel');
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
        const method = request.method;

        if(method === 'GET') {

        }
    } 
    
    catch(error) {

    }
}

exports.createAssessment = async (request, response, next) => { // Middleware controller function to create an assessment by an admin.
    try {
        const method = request.method;
        const {title, startingQuestion, nextQuestion, outcome} = request.body; // The data in the body of the request.

        if(!title || !startingQuestion || !nextQuestion || !outcome) {
            return response.status(notFound).json({
                message: 'You must fill out all of the necessary fields'
            })
        }

        if(method === 'POST') {
            const assessment = new Assessment(request.body);
            await assessment.save(); // Save the new assessment stored in the database
            
            return response.status(createdCode).json({
                assessment
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