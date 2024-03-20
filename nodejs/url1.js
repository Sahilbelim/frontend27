var http = require('http');
var url = require('url')
var server = http.createServer(function (request, response) {

     let queryString = url.parse(request.url, true);
     console.log(queryString);

});
server.listen(5000);
console.log("Server ready ");