var http = require('http');
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'application/json' })
     if (request.url == '/profile') {
          let data = JSON.stringify([{
               'name': "Param Patel ",
               "age": 20,
               "gender": "Male",
               "email": "iamparam102@gmail.com",
          }]);
          response.write(data);
     }
     response.end();
});
server.listen(5000);
console.log("Server ready...");