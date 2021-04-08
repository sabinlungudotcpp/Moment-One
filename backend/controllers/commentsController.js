const Comments = require('../models/CommentsModel');
const PostModel = require('../models/PostsModel');
const okCode = 200;
const serverError = 500;

exports.getAllComments = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') {
            const allComments = await Comments.find();
            return response.status(okCode).json({allComments});
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
                message: error.message
            });
        }
    }
}

 exports.getCommentByID = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') {
            const id = request.id; 
            const commentId = await Comments.findById(id);
            return response.status(okCode).json({
                commentId
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
                message: error.message
            });
        }
    }
}

 exports.createComment = async (request, response) => {
    try {
        const method = request.method;
        const {title, description} = request.body;

        const postedOn = request.params.postId; //Getting _id for the post the comment is made on
        const createdBy = request.account.id; //Getting _id for the user creating the comment

        if(!title || !description) { // If there is no title or description
            return response.status(serverError).json({
                message: 'You must provide a post title and description'
            });
        }
        
        if(method === 'POST') {
            const newComment = new Comments({title, description, postedOn, createdBy});

            await newComment.save();

            //Add reference to the post the comment is posted on 
            await PostModel.findOneAndUpdate({_id: postedOn}, {$push: {comments: newComment.id}});

            return response.status(okCode).json({
                message: 'Comment Created',
                sentAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
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
            return response.status(okCode).json({
               updatedComment,
               updatedAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
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

            //Remove all comment references on posts
            await PostModel.updateMany({},{$set: {comments: []}});

            return response.status(okCode).json({
                message: 'All comments deleted successfully',
                deletedAt: new Date().toISOString()
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
                message: error.message
            });
        }
    }
}

exports.deleteCommentByID = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'DELETE') {
            const comment = await Comments.findByIdAndDelete(id);

            //Remove comment reference from the post it was posted on
            await PostModel.updateOne(
                {_id: comment.postedOn},
                {$pull: {comments: comment.id}}
            );
            
            return response.status(200).json({
                message: 'Comment deleted successfully',
                deletedAt: new Date().toISOString()
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