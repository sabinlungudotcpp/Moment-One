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
            return response.status(notFound).json({
                status: 'failf',
                error
            });
        }
    }
};

exports.createDiscussion = async (request, response) => {
    try {
        const {title, content, category} = request.body;
        const method = request.method; // Request method

        if(method === 'POST') {
            const newDiscussion = new Discussion({title, content, category});
            await newDiscussion.save();

            return response.status(created).json({
                status: 'Discussion created successfully',
                newDiscussion,
                createdAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {

        if(error) {
            return response.status(500).json({message: 'Unable to create discussion'})
        }
    }
}

exports.editDiscussion = async (request, response) => { // Controller to edit
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'PATCH') {
            const editedDiscussion = await Discussion.findByIdAndUpdate(id, request.body);
            await editedDiscussion.save();

            return response.status(okCode).json({
                message: 'Discussion Updated',
                updatedAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        if(error) {

        }
    }
};

exports.deleteDiscussions = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'DELETE') {
            await Discussion.deleteMany();

            return response.status(204).json({
                message: 'Discussions deleted',
                deletedAt: new Date().toISOString()
            })
        }
    } 
    
    catch(error) {

        if(error) {
            return response.status(404).json({
                message: 'Discussions could not be deleted',
                updatedAt: new Date().toISOString()
            });
        }
    }
};