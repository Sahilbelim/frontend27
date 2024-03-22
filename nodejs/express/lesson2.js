var express = require('express');
var app = express();


app.get("/contactus", function (request, response) {
     response.send("This is contact us page ");
});


app.listen(5000);
console.log("Server ready ");