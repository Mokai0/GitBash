'use strict';

var express = require('express');

var app = express();
var router = require('./api');
app.use('/', express.static('public'));



app.use('/api', router);

app.listen(3000, function() {
  console.log('running on server localhost:3000')
});
