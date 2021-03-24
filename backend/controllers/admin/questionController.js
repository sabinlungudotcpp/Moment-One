const Question = require('../../models/admin/questionModel');
const okCode = 200;
const createdCode = 201;
const deleted = 204;
const notFound = 404;

exports.getAllQuestions = async (request, response, next) => { // Allows Admins to view all the assessments created
    try {
        const method = request.method;

        if(method === 'GET') {
            const questions = await Question.find();

            return response.status(okCode).json({
                questions
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

exports.getQuestionByID = async (request, response) => {
    try {

    } 
    
    catch(error) {

    }
}

exports.createQuestion = async (request, response, next) => {
   try {
        const method = request.method;

        if(method === 'POST') {
            const newQuestion = new Question(request.body);
            await newQuestion.save();

            return response.status(createdCode).json({
                newQuestion
            })
        }
   } 
   
   catch(error) {
        if(error) {
            return response.status(notFound).json({
                errorMessage: error.toString()
            })
        }
   }
}

exports.editQuestion = async (request, response, next) => { // Allows admins to edit an assessment
   try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'PATCH') {
            const updatedQuestion = await Question.findByIdAndUpdate(id, request.body);
            await updatedQuestion.save();

            return response.status(okCode).json({
                updatedQuestion
            })
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

exports.deleteQuestions = async (request, response, next) => {
    try {
        const method = request.method;

        if(method === 'DELETE') {
            await Question.deleteMany();

            return response.status(deleted).json({
                message: 'Questions Deleted Successfully',
                deletedAt: new Date().toISOString()
            })
        }
    } 
    
    catch(error) {

    }
};

exports.deleteQuestionByID = async (request, response, next) => {
    try {

    } 
    
    catch(error) {

    }
};