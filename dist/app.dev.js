"use strict";

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  return res.send('Hi Aarush Mumma calling you!');
});
app.listen(8080);