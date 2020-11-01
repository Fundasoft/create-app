/**
 * Babel register
 */
require('@babel/register')({
  ignore: ['node_modules'],
});

/**
 * Module dependencies
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

/**
 * Global middlewares
 */
app.use(bodyParser.json());

/**
 * Routers
 */
const api = require('./api');
const server = require('./app/server');

/**
 * Static files
 */
app.use(express.static('build'));

/**
 * Expose server instance
 */

app.use('/api', api);
app.use('/', server);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
