// Write a programe to findout wether login attempt is successfull or not 
// correct data
// email = admin@gmail.com  
// password = 987987 
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post("/login", function (request, response) {

     console.log(request.body);
     let email = request.body.email;
     let password = request.body.password;

     if (email == "admin@gmail.com" && password == "987987") {
          response.send("Login Successfully ");
     }
     else {
          response.send("Login Invalid ");
     }

});

app.listen(5000);
console.log('Server ready... ');