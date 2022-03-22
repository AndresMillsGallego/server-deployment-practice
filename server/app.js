'use strict';

const express = require('express');

const app = express();

app.get('/hello', (request, response, next) => {
  response.send('Hello there!  We are glad you are here.');
});

app.get('/', (request, response, next) => {
  response.send('King Snorlax approves and welcomes you to the server.');
});

module.exports = app;