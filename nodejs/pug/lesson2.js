var express = require("express");
var app = express();
app.set('view engine', 'pug');
app.set('views', 'template');
app.get('/contact', function (request, response) {

     let data = {
          'name': "Param Patel ",
          "email": "iamparam102@gmail.com",
          "phone": "9016293308",
          "gender": 1
     }

     response.render('lesson3',data);
});
app.listen(5000);
console.log("Server ready ");