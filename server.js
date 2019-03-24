
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
let PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
});