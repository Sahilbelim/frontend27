var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.post("/profile", function (request, response) {
     console.log(request.body);
     let name = request.body.name;
     let age = request.body.age;
     let gender = request.body.gender;
     console.log("Profile page called ");
     console.log(`The value of name is ${name} age is ${age} gender is ${gender}`);
     response.send("Profile posted successfully ");
});

app.listen(5000);
console.log("server ready... ");