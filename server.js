const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const okCode = 200;

app.use(express.static(path.join(__dirname, 'build')));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
    try {
        const method = request.method;

        if(method === 'GET') {
            return response.status(okCode).sendFile(path.join(__dirname, 'public', 'index.html'));
        }
    } 
    
    catch(error) {
        if(error) {
            return console.error(error);
        }
    }
});

app.listen(port, (error) => {
    if(!error) {
        return console.log(`Listening for requests on port ${port}`);
    }

    else {
        return console.error(error);
    }
});