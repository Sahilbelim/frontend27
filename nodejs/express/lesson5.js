var express = require('express');
var app = express();

app.use(function (request, response, next) {
     console.log("First middleware called... ");
     console.log(`request method is ${request.method} and url is ${request.url}`);
     next();
});

app.get("/login", function (request, response) {
     console.log("Login Page called...");
     response.send("Login Successfully ");
});

app.put("/profile", function (request, response) {
     console.log("profile page called... ");
     response.send("Profile Upadted Successfully ");
})

app.delete("/logout", function (request, response) {
     console.log("Logout page called... ");
     response.send("Logout Successfully ");
});

app.listen(5000);
console.log("Server ready...");