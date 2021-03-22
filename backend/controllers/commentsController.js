const Comments = require('../models/CommentsModel');
const PostModel = require('../models/PostsModel');

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
        const method = request.method;

        if(method === 'GET') {
            const id = request.id; 
            const commentId = await Comments.findById(id);
            return response.status(200).json({
                commentId
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

 exports.createComment = async (request, response) => {
    try {
        const method = request.method;
        const {title, description} = request.body;
        const postedOn = request.params.postId; //Getting _id for the post the comment is made on
        const createdBy = request.account.id; //Getting _id for the user creating the comment

        if(!title || !description) { // If there is no title or description
            return response.status(500).json({
                message: 'You must provide a post title and description'
            });
        }
        
        if(method === 'POST') {
            const newComment = new Comments({title, description, postedOn, createdBy});
            await newComment.save();
            
            //The new Goal also needs to be added to the user model 
            await PostModel.findOneAndUpdate(
                {_id: postedOn}, //Finding the user by _id
                {$push: {comments: newComment.id}} //Adding the new goals _id to the posts arrey in the user model
                );

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
                message: 'All comments deleted successfully',
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

exports.deleteCommentByID = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'DELETE') {
            await Comments.findByIdAndDelete(id);
            
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