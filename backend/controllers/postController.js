const postModel = require('../models/PostsModel');
const okCode = 200;
const createdCode = 201;
const serverError = 500;

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: getAllPosts()
 * @returns: Returns a response by the server with a status code of 200 OK if the request/response is successful, if an error occurs it returns a 404 not found status code
 * @description: The getAllPosts() controller function is responsible for retrieving all of the posts from the database
 */

exports.getAllPosts = async (request, response) => { // Controller function to get all the posts
    try {
        const method = request.method;

        if(method === 'GET') { // If there's a GET request

            const allPosts = await postModel.find();
            return response.json({
                data: {
                    numberOfPosts: allPosts.length, // Length of the posts
                    posts: allPosts
                }
            });
        }
    } 
    
    catch(error) {
        if(error) { // If there's an error
            return response.status(serverError).json({
                message: error.message,
                stack: error.stack,
                sentAt: new Date().toISOString()
            });
        }
    }
}

/**
 * @author: Sabin Constantin Lungu
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 * @function: getPostByID(request, response)
 * @returns: Returns a response by the server with a status code of 200 OK, if an error occurs it returns a 404 not found status code
 * @description: getPostByID() - this middleware function is used to retrieve a specific post by its ID.
 */

exports.getPostByID = async (request, response) => { // Retrieves a POST BY ITS ID
    try {
        const method = request.method;
        
        if(method === 'GET') {
            const id = request.params.id;
            const postId = await postModel.findById(id);

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

exports.createNewPost = async(request, response) => { // Controller function to create a new post
    try {
        const method = request.method;
        
        const {title, description, feeling, category, selfAware} = request.body;
        //const createdBy = request.User.id; //Getting user _id for the user creating the post

        if(!title || !description || !feeling || !category || !selfAware) { // If there is no title or description
            return response.status(serverError).json({
                message: 'You must provide more detail'
            });
        }
        
        if(method === 'POST') {
            const newPost = new postModel({title, description, feeling, category, selfAware});
            await newPost.save();

            return response.status(createdCode).json({newPost, createdAt: Date.now()});
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
            return response.status(serverError).json({
                message: 'ID invalid'
            });
        }

        if(method === 'PATCH') {
            const updatedPost = await postModel.findByIdAndUpdate(id, request.body);
            
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
            await postModel.deleteMany();
            
            return response.status(okCode).json({
                message: 'All posts deleted successfully',
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

exports.deletePostByID = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'DELETE') {
            await postModel.findByIdAndDelete(id, request.body);

            return response.status(okCode).json({
                message: 'Post deleted successfully'
            });
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(serverError).json({
                message: `Could not delete the post with id ${request.params.id} as it is not found`
            });
        }
    }
}