var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
     if (request.url == '/deleteFriends') {
          fs.unlink("friends.txt", function (error) {
               if (error) {
                    console.log("Error : " + error);
               }
               else {
                    console.log("File deleted successfully ");
               }
          });
     }
     // rename function 
     else if (request.url == '/renameColor') {
          fs.rename("colors.txt", 'rangs.txt', function (error) {
               if (error) {
                    console.log("Error " + error);
               }
               else {
                    console.log("File renamed succesffully ");
               }
          })
     }
});
server.listen(5000);
console.log("server ready....");