"use strict";

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hi Pooja!');
}).listen(8080);
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface'); // const os = require('os');
// console.log(os.platform());

console.log("V8 Version ".concat(process.version.v24));