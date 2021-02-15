const mongoose = require('mongoose');
const Goals = mongoose.model('Goals');
const okCode = 200;

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
            return response.status(404).json({
                message: 'Please specify a goal ID'
            });
        }

        if(method === 'GET') {
            const goal = await Goals.findById(id);
            return response.status(okCode).json(goal);
        }
    } 
    
    catch(error) {

    }
};

exports.createGoal = async (request, response) => {
    try {

    } 
    
    catch(error) {
        if(error) {

        }
    }
}

exports.editGoal = async (request, response) => {
    try {

    } 
    
    catch(error) {

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