// Write a programe to print 20 pallindrome number in file named pallindrome.txt
var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response) {
     if (request.url == '/pallindrome') {
          number = 121;
          let pallindrome_array = [];
          let string_number = ' ';
          let array_number = [];
          let length = ' ';

          for (number = 121; pallindrome_array.length < 20; number++) {
               string_number = number.toString()
               array_number = string_number.split('');
               // console.log(number);
               // console.log(array_number);
               length = array_number.length - 1;
               if (array_number[0] == array_number[length]) {
                    // console.log("it is pallindrome number : " + number);
                    pallindrome_array.push(number);
               }
          }
          // console.log(pallindrome_array);
          let data = ' ';
          pallindrome_array.forEach((value) => {
               data += value.toString()+ ' , '
          });
          fs.writeFile('pallindrome.txt', data, function (error) {
               if (error) {
                    console.log("Error " + error);
               }
               else {
                    console.log("File Written successfully ");
               }
          });
          //122
          // string_number = number.toString();
          // array_number = string_number.split('');
          // length = array_number.length - 1;
          // if (array_number[0] == array_number[length]) {
          //      console.log("it is pallindrome number : " + number);
          //      pallindrome_array.push(number);
          // }
          // number++;//123
          // string_number = number.toString();
          // array_number = string_number.split('');
          // length = array_number.length - 1;
          // if (array_number[0] == array_number[length]) {
          //      console.log("it is pallindrome number " + number);
          //      pallindrome_array.push(number);
          // }
          // number++;//124
          // console.log(pallindrome_array);
     }
});
server.listen(5000);
console.log("Server ready ");