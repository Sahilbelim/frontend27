var express = require('express');
var mysql = require('mysql');
var connection = require('./connection');
var app = express();

app.delete('/students/:age', function (request, response) {

     let age = request.params.age;
     console.log(`the value of age is ${age}`);

     let sql = `Delete from students where age  <= ${age}`;
     connection.con.query(sql, function (error, result) {
          if (error) {
               response.json([{ 'error': error.message }]);
          }
          else {

               let data = [
                    { 'error': 'no' },
                    { 'success': 'yes' },
                    { 'message': 'Student Deleted Successfully ' },
               ]
               response.json(data);
          }
     });
});
app.listen(5000);
console.log("Server ready ");