#!/usr/bin/env node

var path = require('path');

var express = require('express');
var lessMiddleware = require('less-middleware');

var app = express();
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen('7890', function() {
  console.log('Listening on port %d', server.address().port);
});
