var http = require('http')
var fs = require('fs')
var server = http.createServer(function (request, response) {

     response.writeHead(200, { 'content-type': 'text/html' });
     var data = fs.readFileSync('colors.txt');
     response.write(data);
     response.end();
});
server.listen(5000)
console.log("Server ready...");