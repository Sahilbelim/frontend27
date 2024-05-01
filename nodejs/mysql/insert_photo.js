var mysql = require("mysql");
var connection = require("./connection");
var express = require("express");
var cors = require("cors")
var app = express();
var bodyParser = require("body-parser");
var multer = require('multer');
var path = require("path");
app.use(cors());
app.use(express.json());
var storage = multer.diskStorage({
     destination: function (req, file, cb) {
          cb(null, "images");
     },
     filename: function (req, file, cb) {
          cb(null, file.fieldname + "-" + Date.now() + ".jpg");
     },
});
const maxSize = 3 * 1000 * 1000;
var upload = multer({
     storage: storage,
     limits: { fileSize: maxSize },
     fileFilter: function (req, file, cb) {
          var filetypes = /jpeg|jpg|png/;
          var mimetype = filetypes.test(file.mimetype);
          var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

          if (mimetype && extname) {
               return cb(null, true);
          }

          cb("Error: File upload only supports the " + "following filetypes - " + filetypes);
     },
});
app.use(cors({
     origin: '*'
}));
// app.use(bodyParser.json());
// app.use(express.urlencoded({ 'extended': false }));
// app.use(bodyParser.urlencoded({ 'extended': true }));
app.post("/insert_employee", upload.single("image"), function (request, response) {
     let name = request.body.name;
     let age = request.body.age;
     let mobile = request.body.mobile;
     // let image = request.file.image ;
     console.log(request.body);
     // console.log(request.file);
     if (name === undefined || age === undefined || mobile === undefined || request.file === undefined) {
          response.json([{ 'error': "Input is missing " }])
     } else {
          let sql = `Insert into employee ( name , age , mobile , photo ) VAlues ( '${name}' , '${age}' , '${mobile}' , '${request.file.filename}' )`;
          connection.con.query(sql, function (error, result) {
               if (error) {
                    console.log(error);
                    response.json([{ 'error': "Oops something went wrong " }]);
               }
               else {
                    let data = [
                         { 'error': 'no' },
                         { 'success': 'yes' },
                         { 'message': 'Employee Added Successfully ' },
                    ]
                    response.json(data);
               }
          });
     }
});

app.listen(5000);