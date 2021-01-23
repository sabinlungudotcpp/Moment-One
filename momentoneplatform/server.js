const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = 3000;
const okCode = 200;
const notFound = 404;

app.use(morgan('dev'));
app.use(express.static('src'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
    try {
        const body = request.body;
        const method = request.method;

        if(method === 'GET') {
            return response.status(okCode).sendFile(__dirname, 'src/App.js');
        }
    } 
    
    catch(error) {

    }
});

app.listen(port, (error) => {
    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
})