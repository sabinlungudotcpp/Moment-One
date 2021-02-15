const mongoose = require('mongoose');
const Goals = mongoose.model('Goals');
const okCode = 200;
const createdCode = 201;
const unprocessable = 400;
const notFound = 404;
const root = '/';

exports.getAllGoals = async (request, response) => { // Function that GETS all the goals from the database
    try {
        const method = request.method; // Request method
        const url = request.url;

        if(method === 'GET' && url.startsWith(root)) { // If there is a GET request
            const goals = await Goals.find(); // Call .find() to get all the goals
            return response.status(okCode).json(goals); // Send back the goals
        }
    } 
    
    catch(error) {
        const errorMsg = error.message;

        if(error) { // If there is an error
            return response.status(unprocessable).json({
                errorMsg,
                sentAt: new Date().toISOString()
            });
        }
    }
};

exports.getGoalByID = async (request, response) => {
    try {
        const id = request.params.id;
        const url = request.url;
        const method = request.method;

        if(!id || !isNaN(id)) {
            return response.status(notFound).json({
                message: 'Invalid ID entry'
            });
        }

        if(method === 'GET' && url.startsWith(root)) {
            const goal = await Goals.findById(id);
            return response.status(okCode).json(goal);
        }
    } 
    
    catch(error) {
        const errorMsg = error.message;

        if(error) {
            return response.status(unprocessable).json(errorMsg);
        }
    }
};

exports.createGoal = async (request, response) => { // Function export that creates a new goal
    try {
        let goalCreated = false;
        const method = request.method; // The request method
        const url = request.url;
        const {goal, reason, length, reward} = request.body; // Body of the request

        if(!goal || !reason || !length || reward) {
            return response.status(unprocessable).json({
                message: 'Goal must have a goal, reason, length and reward',
                sentAt: new Date().toISOString()
            });
        }

        if(method === 'POST' && url.startsWith(root)) {
            const newGoal = new Goals({goal, reason, length, reward});
            await newGoal.save(); // Save the goal
            goalCreated = true;

            if(goalCreated) {
                return response.status(createdCode).json(newGoal);
            }
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(notFound).json({
                message: error.message
            });
        }
    }
}

exports.editGoal = async (request, response) => {
    try {
        let goalEdited = false;
        const method = request.method;
        const url = request.url;
        const id = request.params.id;
        const {goal, reason, length, reward} = request.body; // The data from the body.

        if(!goal || !reason || !length || !reward) {

            return response.status(unprocessable).json({
                message: 'Goal must have a goal, reason, length and reward',
                sentAt: new Date().toISOString()
            });
        }
        
        if(!isNaN(id) || !id) { // If there is no ID or if it's not a number
            return response.status(unprocessable).json({
                message: 'ID invalid',
                sentAt: new Date().toISOString()
            });
        }

        if(method === 'PATCH' && url.startsWith(root)) {
            goalEdited = true;
            const updatedGoal = await Goals.findByIdAndUpdate(id, request.body); // Update the goal by finding its id and updating the body
            return response.status(okCode).json(updatedGoal);
        }
    } 
    
    catch(error) {
        const msg = error.message;

        if(error) {
            return response.status(404).json(msg);
        }
    }
}

exports.deleteGoals = async (request, response) => {
    try {

    } 
    
    catch(error) {
        const errorMsg = error.message;

        if(error) { // If there is an error
            return response.status(unprocessable).json(errorMsg);
        }
    }
}

exports.deleteGoalByID = async (request, response) => {
    try {
        let goalDeleted = false;
        const id = request.params.id;
        const url = request.url;
        const method = request.method;

        if(!id || !isNaN(id)) {
            return response.status(unprocessable).json({
                message: 'ID invalid'
            });
        }

        if(method === 'DELETE' && url.startsWith(root)) {
            await Goals.deleteOne(id);
            goalDeleted = true;

            return response.status(okCode).json({
                message: 'Goal Deleted',
                sentAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        const errorMsg = error.message;

        if(error) {
            return response.status(notFound).json(errorMsg);
        }
    }
}  