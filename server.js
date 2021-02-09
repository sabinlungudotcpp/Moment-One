require('./backend/models/PostsModel');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8020;
const keys = require('./backend/keys/keys');
const Post = mongoose.model('Post');

const corsOptions = {
    "Access-Control-Allow-Origin": "*"
}

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev')); // Use logger
app.use(express.static('public'));
app.use(cors());

mongoose.connect(keys.mongoURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    return console.log('Connected to MongoDB instance');
});

mongoose.connection.on('error', (error) => {
    return console.error('Error connecting to MongoDB -> reason : ', error);
});


const getAllPosts = async (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') {
            const allPosts = await Post.find();
            return response.json(allPosts);
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            })
        }
    }
};

const getPostByID = async (request, response) => {
    try {
        const method = request.method;
        
        if(method === 'GET') {
            const id = request.params.id;
            const postId = await Post.findById(id);

            return response.status(200).json({postId});
        }
    } 
    
    catch(error) {
        if(error) {
            return response.json({
                message: error.message
            });
        }
    }
};

const createNewPost = async (request, response) => {
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
};

const editPost = async (request, response) => {
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
};

const deleteAllPosts = async (request, response) => { // Route for DELETING all posts
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
};

const deletePostByID = async (request, response) => {
    try {
        const method = request.method;
        const id = request.params.id;

        if(method === 'DELETE') {
            await Post.findByIdAndDelete(id, request.body);
            return response.status(200).json({
                message: 'Post deleted successfully'
            })
        }
    } 
    
    catch(error) {
        if(error) {
            return response.status(500).json({
                message: error.message
            });
        }
    }
};

app.route('/api/v1/momentone/posts').get(getAllPosts).post(createNewPost).delete(deleteAllPosts);
app.route('/api/v1/momentone/posts/:id').get(getPostByID).patch(editPost).delete(deletePostByID);

app.listen(port, (error) => {
    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
});