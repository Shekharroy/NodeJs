"use strict";

// creating a simple webserver
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hi Aarvi are you there! See this web server I am created for you...');
}).listen(8080);