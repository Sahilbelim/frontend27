var http = require('http');
var fs = require("fs");
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'text/html' });

     console.log(request.url);
     fs.readFile('colors.txt', function (error, data) {
          console.log(data);
          console.log("file readed successfully ");
          response.write(data)
          response.end();
     });
});
server.listen(5000);
console.log("Server ready ");