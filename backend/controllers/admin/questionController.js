const Question = require('../../models/admin/questionModel');
const okCode = 200;
const createdCode = 201;
const deleted = 204;
const notFound = 404;

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @param {next}: Next is a function called that executes the next function in the middleware stack, if not called then requests made by clients to the server could hang.
 * @function: checkBody(request, response)
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: checkBody() is used to verify that there is valid data passed into the body and returns an error if not there is no body.
 */

exports.checkBody = (request, response, next) => {

    if(!request.body) {

        return response.status(notFound).json({
            message: 'Question body must have present data',
            sentAt: new Date().toISOString()
        });
    }

    return next();
};

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: The purpose of this middleware controller function is to retrieve all of the questions from the questions collections and it asynchronous because it will take some time to retrieve the data.
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: getAllQuestions() is used to retrieve all of the created questions from the MongoDB database.
 */

exports.getAllQuestions = async (request, response) => { 

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

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: The purpose of this middleware controller function is to retrieve all of the questions from the questions collections and it asynchronous because it will take some time to retrieve the data.
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: getAllQuestions() is used to retrieve all of the created questions from the MongoDB database.
 */

exports.getQuestionByID = async (request, response) => {
    try {

    } 
    
    catch(error) {

    }
}

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: The purpose of this middleware controller function is to retrieve all of the questions from the questions collections and it asynchronous because it will take some time to retrieve the data.
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: getAllQuestions() is used to retrieve all of the created questions from the MongoDB database.
 */

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

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: The purpose of this middleware controller function is to retrieve all of the questions from the questions collections and it asynchronous because it will take some time to retrieve the data.
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: getAllQuestions() is used to retrieve all of the created questions from the MongoDB database.
 */

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

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: The purpose of this middleware controller function is to retrieve all of the questions from the questions collections and it asynchronous because it will take some time to retrieve the data.
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: getAllQuestions() is used to retrieve all of the created questions from the MongoDB database.
 */

exports.deleteQuestions = async (request, response, next) => { // Middleware controller function that deletes all the questions
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

        if(error) {
            return response.status(notFound).json({
                message: error.toString()
        });
    }
}};