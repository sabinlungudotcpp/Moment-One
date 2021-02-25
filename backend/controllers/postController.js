const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const okCode = 200;
const serverError = 500;

exports.getAllPosts = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') { // If there's a GET request
            const allPosts = await Post.find(); // Retrieve all of the posts
            return response.json({
                data: {
                    numberOfPosts: allPosts.length,
                    allPosts
                }
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
                message: error.message,
                stack: error.stack,
                sentAt: new Date().toISOString()
            });
        }
    }
}

 exports.getPostByID = async (request, response) => {
    try {
        const method = request.method;
        
        if(method === 'GET') {
            const id = request.params.id;
            const postId = await Post.findById(id);

            return response.status(okCode).json({postId});
        }
    } 
    
    catch(error) {
        if(error) {
            return response.json({
                message: error.message
            });
        }
    }
}

 exports.createNewPost = async (request, response) => {
    try {
        const method = request.method;
        const {title, description} = request.body;

        if(!title || !description) { // If there is no title or description
            return response.status(500).json({
                message: 'You must provide a post title and description'
            });
        }
        
        if(method === 'POST') {
            const newPost = new Post({title, description});
            await newPost.save();

            return response.status(201).json({
                newPost,
                createdAt: Date.now()
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return console.error(error);
        }
    }
}

exports.editPost = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(!isNaN(id)) {
            return response.status(500).json({
                message: 'ID invalid'
            });
        }

        if(method === 'PATCH') {
            const updatedPost = await Post.findByIdAndUpdate(id, request.body);
            
            return response.json({
                updatedPost
            });
        }
    } 
    
    catch(error) {
        if(error) { // IF an error ocurred
            return response.status(422).json({
                error: error.message // Return that error message
            });
        }
    }
}

 exports.deleteAllPosts = async (request, response) => { // Route for DELETING all posts
    try {
        const method = request.method;

        if(method === 'DELETE') {
            await Post.deleteMany();
            
            return response.status(200).json({
                message: 'All posts deleted successfully',
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

 exports.deletePostByID = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'DELETE') {
            await Post.findByIdAndDelete(id, request.body);
            return response.status(200).json({
                message: 'Post deleted successfully'
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