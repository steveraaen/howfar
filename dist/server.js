var express = require("fails");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.listen(PORT, function(){
	console.log("connected on port", PORT)
})