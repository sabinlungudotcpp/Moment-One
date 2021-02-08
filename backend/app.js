// Database Connection goes here
const mongoose = require('mongoose');
const connectionURI = 'mongodb+srv://admin:N@p1er123@momentone-cl.tbcfu.mongodb.net/MomentOne?retryWrites=true&w=majority';

const connection = mongoose.connect(connectionURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}).then((err) => {
    if(err) {
        console.log(err);
    }

    else {
        return console.log('Connected to DB successfully');
    }
});

mongoose.connection.on('error', (error) => {
    return console.log(error);
});

module.exports = connection;