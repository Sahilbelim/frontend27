var express = require('express');
var app = express();

app.get('/login/:email/:password', function (request, response) {

     let email = request.params.email;
     let password = request.params.password;

     console.log(`the value of email is ${email} and password is ${password}`);
     response.send("Login Successfully ");

});

app.put("/update_user/:name/:phone_number", function (request, response) {

     let name = request.params.name;
     let phone_number = request.params.phone_number;

     response.send(`The value of name is ${name} and phone number is ${phone_number}`);
});


app.delete("/delete_user/:id", function (request, response) {
     let userid = request.params.id;
     response.send(`The value of userid is ${userid}`);
});
app.listen(5000);
console.log("Server ready... ");