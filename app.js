const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const notFound = 404;

// Imports the various routers from the routes folder
const accountRouter = require('./backend/routes/accountRoutes');
const commentRouter = require('./backend/routes/commentRoutes');
const postsRouter = require('./backend/routes/postRoutes');
const goalsRouter = require('./backend/routes/goalRoutes');
const userRouter = require('./backend/routes/UserRoutes');
const therapistRouter = require('./backend/routes/therapistRoutes');
const courseRouter = require('./backend/routes/courseRoutes');
const searchRouter = require('./backend/routes/searchRoutes');
const loginRouter = require('./backend/routes/loginRoutes');
const discussionRouter = require('./backend/routes/discussionRoutes');
const questionRouter = require('./backend/routes/admin/questionRoutes');
const assessmentRouter = require('./backend/routes/admin/assessmentRoutes');
const contactRouter = require('./backend/routes/contactRoutes');

// Middlewares used within the app.
app.use(bodyParser.json());
app.use(express.json({limit: '27mb'}));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev')); // Use logger
app.use(express.static('public'));
app.use('*', cors());

// Use Middleware Routes
app.use('/api/v1/momentone/account', accountRouter);
app.use('/api/v1/momentone/comments', commentRouter);
app.use('/api/v1/momentone/posts', postsRouter);
app.use('/api/v1/momentone/goals', goalsRouter);
app.use('/api/v1/momentone/users', userRouter);
app.use('/api/v1/momentone/therapist', therapistRouter);
app.use('/api/v1/momentone/courses', courseRouter);
app.use('/api/v1/momentone/search', searchRouter);
app.use('/api/v1/momentone/login', loginRouter);
app.use('/api/v1/momentone/discussions', discussionRouter);
//app.use('/api/v1/momentone/admin/questions', questionRouter);
app.use('/api/v1/momentone/admin/assessment', assessmentRouter);
app.use('/api/v1/momentone/contact', contactRouter);

/**
 * @author: Sabin Constantin Lungu
 * @function: Middleware function that handles unspecified routes on the server, for example if an invalid route is specified it will return the error message below. 
 * @param {request}: Stores the request data as a variable that enables clients to make a request to the server
 * @param {response}: Stores the response data sent back by the server
 */
app.all('*', (request, response, next) => {
    return response.status(notFound).json({
        message: `Could not find ${request.originalUrl} on this route`
    });
})

module.exports = app; // Export the app