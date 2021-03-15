const Discussion = require('../models/discussionModel');
const okCode = 200;
const created = 201;
const notFound = 404;

exports.getAllDiscussions = async (request, response, next) => {
    try {
        const discussions = await Discussion.find(); // Find all discussions

        if(!discussions || discussions.length < 0) {
            return response.status(notFound).json({
                status: 'Fail',
                message: 'No discussions found',
                sentAt: new Date().toISOString()
            });
        }
    
        return response.status(okCode).json({
            status: 'Success',
            discussions: discussions.length,
            data: {
                discussions
            }
        });
    } 
    
    catch(error) {
        if(error) {

        }
    }
};

exports.createDiscussion = async (request, response, next) => {
    try {

    } 
    
    catch(error) {
        if(error) {

        }
    }
}

exports.editDiscussion = async (request, response, next) => { // Controller to edit
    try {

    } 
    
    catch(error) {
        if(error) {

        }
    }
};

exports.deleteDiscussions = async (request, response, next) => {
    try {

    } 
    
    catch(error) {
        if(error) {

        }
    }
};