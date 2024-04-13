var connection = require('./connection');
function getStudent(request, response) {

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
}


function insertStudent(request, response) {
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
}

function deleteStudent(request, response) {

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
}

function updateStudent(request, response) {

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
}

module.exports.deleteStudent = deleteStudent;
module.exports.insertStudent = insertStudent;
module.exports.getStudent = getStudent;
module.exports.updateStudent = updateStudent;