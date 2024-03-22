var http = require('http');
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'text/html' });
     if (request.url == '/contactus') {
          response.write('This is contact us page');
     }
     response.end();
});
server.listen(5000);
console.log("Server ready ");