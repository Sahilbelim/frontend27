var connection = require('./connection');
var sql = "UPDATE students set dob = '2004-10-04' , address = 'this is new address' where id = 4 "
connection.con.query(sql, function (error, result) {

     if (error) {
          console.log(error);
     }
     else {
          console.log("Student Updated successfully ");
     }
});