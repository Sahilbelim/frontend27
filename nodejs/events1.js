var http = require('http');
var events = require('events');
var em = new events.EventEmitter();
em.on('startLearning', (data) => {
     console.log("I have Started Learning " + data);
});
em.addListener('completeLearning', (data) => {
     console.log("I have Completed Learning " + data)
});
var server = http.createServer(function (request, response) {
     response.writeHead(200, { 'content-type': 'text/html' });
     if (request.url == "/start") {
          em.emit("startLearning", "javascript");
          response.write("Learning Started ");
     }
     else if (request.url == '/complete') {
          em.emit("completeLearning", "javascript");
          response.write("Learning Completed ");
     }
     response.end();
});
server.listen(5000);
console.log("Server ready ");