var fs = require('fs');
var buf = new Buffer.alloc(1024);
fs.open('colors.txt', 'r+', function (error, fileData) {
     if (error) {
          console.log(error);
     }
     else {
          console.log("File Opend Successfully ");
          fs.read(fileData, buf, 0, buf.length, 0, function (readError, count) {
               if (readError) {
                    console.log(readError);
               }
               else {
                    console.log("File readed successfully ");
                    console.log(count);
                    fs.close(fileData, function (closeError) {
                         if (closeError) {
                              console.log(closeError);
                         }
                         else {
                              console.log("File Closed Successfully ");
                         }
                    })
               }
          });
     }
});