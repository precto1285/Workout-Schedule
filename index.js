//server setup
var express = require("express");
var bodyParser = require("body=parser");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(bodyParser.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "",
    database: "workout-Schedule_db"
});

connection.connect(function(err){
    if (err){
        console.log()
    }
});

app.listen(PORT, function(req, res){
    console.log("Server listening on: http://localhost: " + PORT);
});