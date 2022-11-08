// dependences
const express = require('express');
const bodyParser = require('body-parser'); 
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// configurations database
const connection = require('./database/connection');
const router = require('./routers');

// configurations
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// diretory static arquives
app.use(express.static('public'));

// routers
app.use('/', router);

// server testing
app.listen(port, () => {
  console.log(`Servidor rodando no endereço http://localhost:${port}`);
});