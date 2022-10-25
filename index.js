// dependences
const express = require('express');
const bodyParser = require('body-parser'); 
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 80;

// configurations database
const connection = require('./database/connection');

// configurations
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// diretory static arquives
app.use(express.static('public'));

// controllers
const UserController = require('./user/UserController');
const QuestionsController = require('./questions/QuestionsController');
const ResponsesController = require('./responses/ResponsesController');
// Models
const QuestionsModel = require('./questions/QuestionsModel');
const ResponsesModel = require('./responses/ResponsesModel');

// get routers
app.use('/', UserController);
app.use('/', QuestionsController);
app.use('/', ResponsesController);


// server testing
app.listen(port, () => {
  console.log("Servidor rodando no endereço http://localhost");
});