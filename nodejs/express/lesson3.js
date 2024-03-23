var express = require("express");
var app = express();

app.get("/home", function (request, response) {
     response.send("This is home page using get method ");
});

app.post("/home", function (request, response) {
     response.send("This is home page using post method ");
});

app.put("/home", function (request, response) {
     response.send("This is home page using  put method ");
});

app.delete("/home", function (request, response) {
     response.send("This is home page using delete method ");
});

app.listen(5000);
console.log("Server ready... ");