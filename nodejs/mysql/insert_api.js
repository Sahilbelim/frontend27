var mysql = require('mysql')
var connection = require('./connection')
var express = require('express')
var app = express();

app.use(express.json());

app.post("/students", function (request, response) {
     console.log("Insert Student called ");
     console.log(request.body);
     let name = request.body.name;
     let mobile = request.body.mobile;
     let age = request.body.age;
     let gender = request.body.gender;
     let dob = request.body.dob;
     let address = request.body.address;

     if (name === undefined || mobile === undefined || age === undefined || gender === undefined || dob === undefined || address === undefined) {
          response.json([{ 'erorr': 'Input is missing ' }]);
     }
     else {
          console.log(`The value of name is ${name} , mobile is ${mobile} , age is ${age} , gender is ${gender} , dob is ${dob} , address is ${address}`);

          var sql = `INSERT into students ( name , age , gender , mobile , dob , address ) values ( '${name}' , ${age} , ${gender} , '${mobile}' , '${dob}' , '${address}')`;
          connection.con.query(sql, function (error, result) {
               if (error) {
                    console.log(error);
                    response.json([{ 'error': error.message }])
               }
               else {
                    let data = [
                         { 'error': 'no' },
                         { 'success': 'yes' },
                         { 'message': 'Student inserted successfully ' },
                    ]
                    response.json(data);
               }
          });
     }

});

app.listen(5000);
console.log("Server ready ");