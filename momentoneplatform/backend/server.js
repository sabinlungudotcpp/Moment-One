const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const port = process.env.port || 3000;
const okCode = 200;
const notFound = 404;

app.use(morgan('dev'));
app.use(express.static('src'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (request, response) => {
    return response.sendFile(__dirname, 'public', 'index.html');
})

app.get('*', (request, response) => {
    try {
        return response.status(notFound).send('404 Page not found');
    }
    
    catch(error) {
        if(error) {
            return console.error(`${error}`);
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
})