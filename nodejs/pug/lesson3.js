var express = require('express');
var app = express();

app.set("view engine", 'pug');
app.set('views', 'template');

app.get('/while_loop', function (request, response) {
     response.render("lesson4");
});
app.listen(5000);
console.log("Server ready ");