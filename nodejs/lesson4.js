var http = require('http');

let server = http.createServer(function (request, response) {
     console.log("Server started ...");
     console.log(request);
});
server.listen(5000);