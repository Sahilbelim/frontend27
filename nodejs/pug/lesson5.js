var connection = require('../mysql/connection');
var express = require('express');
var app = express();
app.set('view engine', 'pug')
app.set('views', 'template')
app.get('/students', function (request, response) {

     let sql = 'SELECT * from students';
     connection.con.query(sql, function (error, result) {
          if (error) {
               response.json([{ 'error': error }])
          }
          else {
               console.log(result);
               let data = JSON.parse(JSON.stringify(result));
               console.log(data);
               let output = {
                    data: data
               }
               response.render("lesson6", output)
          }
     });

});
app.listen(5000);
console.log("server ready ");