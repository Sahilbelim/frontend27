var express = require('express');
var app = express();
var path = require('path');
app.set("view engine", 'pug');
app.set('views', 'template');
app.use(express.static(path.join(__dirname,'assets')));
app.get('/friends', function (request, response) {

     let data = {
          // friends: ['param', 'kuldeep', 'sunil', 'harsh', 'amit', 'mitesh', 'naman']
          cars: { 'name': 'porsche 911', 'color': 'blue', 'door': 2, 'price': '3.5 crore' }
     }

     response.render('lesson5', data);

});

app.listen(5000);
console.log("Server ready ");