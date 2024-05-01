var express = require("express");
var app = express();
app.set('view engine', 'pug');
app.set('views', 'template');

app.get("/lesson1", function (request, response) {

     response.render("lesson1");
});

app.get('/lesson2', function (request, response) {
     response.render("lesson2");
})

app.listen(5000);
console.log('server ready ');