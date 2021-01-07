const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const app = express();


const { mongoose } = require('./db');
var employeeController = require('./controllers/employeeController');


// CORS Policies
var app = express();
app.use(bodyParser.json());
app.use(cors());


app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3001, () => console.log('Server is started at 3000 port'));


// Get Employees
app.use('/employees', employeeController);

app.use('/employees/save', employeeController);