var connection = require('./connection');
var sql = "INSERT into students ( name , age ,gender , mobile ,dob , address  ) VALUES ( 'Jhon doe' , 24 , 1 , '9874563210' , '2024-01-10' , 'this is address2' )";
connection.con.query(sql, function (error, result) {
     if (error) {
          console.log(error);
     }
     else {
          console.log("Student added successfully ");
     }
});