const express = require('express');
const app = require('./app');
const notFound = 404;
const port = process.env.PORT || 8001;
const localhost = '127.0.0.1';

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

app.listen(port, (error) => { // Listen for requests on the specified port

    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
});