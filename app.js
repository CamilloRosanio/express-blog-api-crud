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

// Dichiarazione risorse PUBLIC
app.use(express.static('public'));

// Configurazione per la lettura di richieste POST (store), PUT(update), PATCH(modify)
app.use(express.json());

// Dichiarazione ROUTERS
const postsRouter = require('./routers/posts');

// Utilizzo dei ROUTERS
app.use('/posts', postsRouter);


// ROUTE della Homepage
app.get('/', (req, res) => {
  res.send('Il mio Blog');
})

// Dichiarazione LISTEN
app.listen(port, () => {
    console.log(`Listen attivo e in ascolto su ${host}:${port}`)
  })