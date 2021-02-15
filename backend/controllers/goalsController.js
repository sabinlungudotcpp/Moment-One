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
        const method = request.method;
        const {goal, reason, length, reward} = request.body;

        if(method === 'POST') {
            const newGoal = new Goals({goal, reason, length, reward});
            await newGoal.save(); // Save the goal

            return response.status(201).json(newGoal);
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
        
        if(!id) {
            return response.status(500).json({
                message: error.message
            });
        }

        if(method === 'PATCH') {
            const updatedGoal = await Goals.findByIdAndUpdate(id, request.body);
            return response.status(okCode).json(updatedGoal);
        }
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