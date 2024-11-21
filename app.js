// Dichiaro il REQUIRE del DOTENV
const dotEnv = require('dotenv').config();
const port = process.env.PORT;
const host = process.env.HOST;



// Dichiarazione EXPRESS JS

const express = require('express');
const app = express();

app.use(express.static('public'));


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