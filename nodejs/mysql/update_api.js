var express = require('express');
var mysql = require('mysql');
var connection = require('./connection');
var app = express();


app.put("/students/:name", function (request, response) {

     let name = request.params.name;
     console.log(`The value of name is ${name}`);

     var sql = `Update students set address = 'this is new address' where name = '${name}' `;
     connection.con.query(sql, function (error, result) {
          if (error) {
               response.json([{ 'error': error.message }]);
          }
          else {
               let data = [
                    { 'error': 'no' },
                    { 'success': 'yes' },
                    { 'message': 'Student Updated Successfully ' },
               ]
               response.json(data);
          }
     });
});

app.listen(5000);
console.log("Server ready ");