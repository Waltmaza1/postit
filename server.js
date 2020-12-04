'use strict'

const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const router = require('./routes');
//End of imports
const app = express();

//use header middleware wrapper 
app.use(helmet());
//use express middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//End of middleware

app.use(router);

//connnect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/postit',
    {
        useNewUrlParser: true,
	    useUnifiedTopology: true,
	    useCreateIndex: true,
	    useFindAndModify: false
    }
);




const port = process.env.PORT || 8080;


//create http server and pass express as callback

//use listen method on port
app.listen(port, () => console.log(`HTTP SERVER on: ${port}`));