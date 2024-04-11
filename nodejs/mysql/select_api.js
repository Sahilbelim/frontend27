var express = require('express');
var mysql = require('mysql');
var connection = require('./connection');
var app = express();

app.get("/students", function (request, response) {

     var sql = "Select * from students ";
     connection.con.query(sql, function (error, result) {

          if (error) {
               response.json([{ 'error': error.message }]);
          }
          else {

               // [{'param'}]
               var output = JSON.parse(JSON.stringify(result));
               let data = [
                    { 'error': 'no' },
                    { 'total': result.length },
                    { 'data': output }
               ];
               response.json(data);
          }
     });
});

app.get("/students/:id", function (request, response) {

     var id = request.params.id;
     var sql = `SELECT * from students where id = '${id}' `;
     connection.con.query(sql, function (error, result) {
          if (error) {
               response.json([{ 'error': error.message }]);
          }
          else {
               var output = JSON.parse(JSON.stringify(result));
               let data = [
                    { 'error': 'no' },
                    { 'total': result.length },
                    { 'data': output },
               ]
               response.json(data);
          }
     });
});

app.listen(5000);
console.log("Server ready ");