const mongoose = require('mongoose');
const keys = require('./backend/keys/keys');
const app = require('./app');
const port = process.env.PORT || 8001;
const dotenv = require('dotenv');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const socket = require('./socket');
dotenv.config(); //Allowing for environmental variables to be used anywhere

//calling the io socket
socket(io);

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

http.listen(port, (error) => { // Listen for requests on the specified port

    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
});