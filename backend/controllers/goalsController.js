const mongoose = require('mongoose');
const Goals = mongoose.model('Goals');

exports.getAllGoals = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') {
            const goals = await Goals.find();
        }
    } 
    
    catch(error) {

    }
};

exports.getGoalByID = async (request, response) => {
    try {

    } 
    
    catch(error) {

    }
};

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