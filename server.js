require('./backend/models/postsModel');
require('./backend/models/commentsModel');
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 8010;
const keys = require('./backend/keys/keys');
const commentRouter = require('./backend/routes/commentRoutes');
const postsRouter = require('./backend/routes/postRoutes');

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev')); // Use logger
app.use(express.static('public'));
app.use(cors());
app.use('/api/v1/momentone/comments', commentRouter);
app.use('/api/v1/momentone/posts', postsRouter);

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

app.listen(port, (error) => {
    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
});