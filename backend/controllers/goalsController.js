const mongoose = require('mongoose');
const Goals = mongoose.model('Goals');
const okCode = 200;
const createdCode = 201;
const notFound = 404;


exports.getAllGoals = async (request, response) => { // Function that GETS all the goals from the database
    try {
        const method = request.method; // Request method

        if(method === 'GET') { // If there is a GET request
            const goals = await Goals.find(); // Call .find() to get all the goals
            return response.status(okCode).json(goals);
        }
    } 
    
    catch(error) {

    }
};

exports.getGoalByID = async (request, response) => {
    try {
        const id = request.id;
        const method = request.method;

        if(!id) {
            return response.status(notFound).json({
                message: 'Please specify a goal ID'
            });
        }

        if(method === 'GET') {
            const goal = await Goals.findById(id);
            return response.status(okCode).json(goal);
        }
    } 
    
    catch(error) {
        const errorMsg = error.message;
    }
};

exports.createGoal = async (request, response) => { // Function export that creates a new goal
    try {
        let goalCreated = false;
        const method = request.method;
        const {goal, reason, length, reward} = request.body;

        if(method === 'POST') {
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
            return response.status(404).json({
                message: error.message
            });
        }
    }
}

exports.editGoal = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;
        const {goal, reason, length, reward} = request.body; // The data from the body.

        if(!goal || !reason || !length || !reward) {

            return response.status(404).json({
                message: 'Goal must have a goal, reason, length and reward',
                sentAt: new Date().toISOString()
            });
        }
        
        if(!isNaN(id)) {
            return response.status(500).json({
                message: 'ID invalid'
            });
        }

        if(method === 'PATCH') {
            const updatedGoal = await Goals.findByIdAndUpdate(id, request.body);
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

    }
}

exports.deleteGoalByID = async (request, response) => {
    try {

    } 
    
    catch(error) {

    }
}  