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
// routers
const userRoute = require('./routers/userRouters');

// get routers
app.use('/', userRoute);
app.use('/questions', userRoute);
app.use('/questions/:id', userRoute);
app.use('/delete', userRoute);
app.use('delete/:id', userRoute);
// post routers
app.use('/save_question', userRoute);
app.use('/answer', userRoute);

// server testing
app.listen(port, () => {
  console.log("Servidor rodando no endereço http://localhost");
});