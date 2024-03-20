var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (request, response) {

     let queryString = url.parse(request.url, true);
     console.log(queryString);
     let filename = "." + queryString.pathname + ".html";
     console.log("This is filename " + filename);
     fs.readFile(filename, function (error, data) {
          if (error) {
               console.log(error);
               response.writeHead(404, { 'content-type': 'text/html' });
               response.end("Page not found");
          }
          else {
               response.writeHead(200, { 'content-type': 'text/html' });
               response.write(data);
          }
          response.end();
     });
});
server.listen(5000);
console.log("Server ready.. ");