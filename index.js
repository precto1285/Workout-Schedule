//server setup for express
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

//server setup for body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.unsubscribe(bodyParser.json());

//server setup for express-handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//server setup for mysql
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "workoutSchedule_db"
});

connection.connect(function(err){
    if (err){
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

app.listen(PORT, function(req, res){
    console.log("Server listening on: http://localhost: " + PORT);
});