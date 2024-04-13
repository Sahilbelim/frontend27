var express = require('express');
var connection = require('./connection');
var mysql = require('mysql')
var app = express();
var functions = require('./function')
app.use(express.json());
app.get("/students", (request, response) => functions.getStudent(request, response));

app.post("/students", (request, response) => functions.insertStudent(request, response));

app.delete("/students/:age", (request, response) => functions.deleteStudent(request, response));

app.put("/students/:name", (request, response) => functions.updateStudent(request, response));

app.listen(5000);
console.log("Server ready ");