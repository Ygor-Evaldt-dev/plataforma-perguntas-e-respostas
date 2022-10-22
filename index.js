// dependences
const express = require('express');
const bodyParser = require('body-parser'); 
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 80;

// configurations database
const connection = require('./database/connection');
connection
  .authenticate()
  .then(() => {
    console.log('Conexão bem sucessida com banco de dados.');
  })
  .catch((error) => {
    console.log(`Falha na conexão com banco de dados: ${error}`);
  })

// configurations
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const userRoute = require('./routers/userRouters');

// diretory static arquives
app.use(express.static('public'));

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