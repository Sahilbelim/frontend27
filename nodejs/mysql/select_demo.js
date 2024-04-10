// CRUD create retrive update delete 
var connection = require('./connection');
var sql = "SELECT * from students ";
connection.con.query(sql, function (error, result) {
     if (error) {
          console.log(error);
     }
     else {
          console.log(result);
     }
})