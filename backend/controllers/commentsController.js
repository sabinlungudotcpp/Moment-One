const mongoose = require('mongoose');
const Comments = mongoose.model('Comments');

exports.getAllComments = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') {
            const allComments = await Comments.find();
            return response.status(200).json({allComments});
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

 exports.getCommentByID = async (request, response) => {
    try {

    } 
    
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

 exports.createComment = async (request, response) => {
    try {
        const method = request.method;
        const body = request.body;

        if(method === 'POST') {
            const newPost = new Comments(body);
            await newPost.save();

            return response.status(200).json({
                message: 'Comment Created',
                sentAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

 exports.editComment = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'PATCH') {
            
            const updatedComment = await Comments.findByIdAndUpdate(id, request.body);
            return response.status(200).json({
               updatedComment,
               updatedAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
}

exports.deleteAllComments = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'DELETE') {
            await Comments.deleteMany();

            return response.status(200).json({
                message: 'All posts deleted successfully',
                deletedAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {

    }
}

exports.deleteCommentByID = async (request, response) => {

}