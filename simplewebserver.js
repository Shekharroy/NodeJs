// creating a simple webserver

const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hi Aarvi are you there! See this web server I am created for you...')
}).listen(8080);