const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8020;
const mongoose = require('mongoose');
const keys = require('./backend/keys/keys');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/api/v1/momentone/posts', (request, response) => {
    return response.json({
        message: 'hi'
    })
});

app.get('/api/v1/momentone/posts/:id', (request, response) => {
    try {

    } 
    
    catch(error) {

    }
});

app.post('/api/v1/momentone/posts/:id', (request, response) => {
    try {

    } 
    
    catch(error) {

    }
});

app.patch('/api/v1/momentone/posts/:id', (request, response) => {

})

app.listen(port, (error) => {
    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
});