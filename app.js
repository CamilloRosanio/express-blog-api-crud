/****************************************************
| CONFIGURAZIONE DOTENV
****************************************************/
const dotEnv = require('dotenv').config();

// Dichiarzione variabili DOTENV
const port = process.env.PORT;
const host = process.env.HOST;



/****************************************************
| CONFIGURAZIONE EXPRESS JS
****************************************************/


// Dichiarazione EXPRESS JS
const express = require('express');
const app = express();

// Dichiarazione MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());

const errorsHandler = require('./middlewares/errorsHandler');
app.use(errorsHandler);
const notFound = require('./middlewares/notFound');
app.use(notFound);
const checkTime = require('./middlewares/checkTime');
app.use(checkTime);

// Dichiarazione ROUTERS
const postsRouter = require('./routers/posts');

// Utilizzo dei ROUTERS
app.use('/posts', postsRouter);


// ROUTE della Homepage
app.get('/', (req, res) => {
  res.send('Il mio Blog');
})

// Utilizzo dei MIDDLEWARES


// Dichiarazione LISTEN
app.listen(port, () => {
    console.log(`Listen attivo e in ascolto su ${host}:${port}`)
  })