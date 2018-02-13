var express = require("express");
var bodyParser = require("body-parser")
var Client = require("pg")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./etl/aactMaster.js');
require("./helpers/match.js");

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});