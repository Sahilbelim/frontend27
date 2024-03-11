var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'text/html' });
     if (request.url == "/register") {
          let data = 'kuldeep harsh'
          try
          {
               fs.writeFileSync('friends.txt', data);
               console.log("File Written Successfully ");
               response.write("File Written Successfully ");
          }
          catch
          {
               console.log("Oops something went wrong");
               response.write("Oops something went wrong");
          }
          finally
          {
               response.end();
          }
     }

});
server.listen(5000);
console.log("Server ready");