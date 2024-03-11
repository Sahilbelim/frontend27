// Example of Write File Function 
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'text/html' });
     if (request.url == '/register') {
          let data = 'Sunil Amit Param';
          fs.writeFile("friends.txt", data, function (error) {
               if (error) {
                    console.log("Error");
                    response.write("Oops something went wrong ");
               }
               else {
                    console.log("File is been written ");
                    response.write("File Written successfully ");
                    response.end();
               }
          });
     }
});
server.listen(5000);
console.log("Server ready ");