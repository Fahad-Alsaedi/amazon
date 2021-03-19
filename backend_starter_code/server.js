// Require necessary NPM packages
const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');
const {mongoose}= require('./db/mongoose')


// Require Route Files
const indexRouter = require('./routes/index');
const articlesRouter = require('./routes/articles');

// Instantiate Express Application Object
const app = express();


app.get('/', (req, res) => {
  console.log('get /');
  res.json('result');
});

/*** Middleware ***/

// Add `bodyParser` middleware which will parse JSON requests
// into JS objects before they reach the route files.
//
// The method `.use` sets up middleware for the Express application
app.use(express.json());

const reactPort = 3000;
// Set CORS headers on response from this API using the `cors` NPM package.
app.use(
  cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${reactPort}` })
);

/*** Routes ***/

// Mount imported Routers
app.use(indexRouter);
app.use(articlesRouter);
// app.use('/',indexRouter);
// app.use('/articles',articlesRouter);

/*** Routes ***/
// Define PORT for the API to run on
const PORT = process.env.PORT || 5000;

// Start the server to listen for requests on a given port
app.listen(PORT, () => {
  console.log(`BLOGY => http://localhost:${PORT}`);
});

/*
  C.R.U.D - Actions Table

  Create          CREATE
  Read
    Read All      INDEX
    Read By ID    SHOW
  Update          UPDATE
  Delete          DESTROY
*/
