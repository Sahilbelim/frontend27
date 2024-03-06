var http = require("http");
var server = http.createServer(function (request, response) {
     console.log(request.url);
     response.writeHead(200, { 'content-type': 'text/html' });
     if (request.url == '/register') {
          response.write(`<h1>Register With Us</h1>`);
     }
     else if (request.url == '/contactus') {
          response.write(`<h1 align="center">Contact Us </h1>`);
     }
     else {
          response.write(`<h1>404 Page Not Found </h1>`);
     }
     response.end();
});
server.listen(5000);
console.log("Server ready ");