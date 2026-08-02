let http = require('http');
let uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    /** User our upper-case module to upper case a string */
    res.write(uc.upperCase('Hello World!'));
    res.end();
}).listen(8080);