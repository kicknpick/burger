// dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// server for either heroku or local
var PORT = process.env.PORT || 3000;

// enabling express through variable app
var app = express();

//allowing express to use all the files in /public folder 
app.use(express.static(__dirname + "/public"));

// enabling express to parse URL
app.use(bodyParser.urlencoded({ extended: false }));

// enabling method-override 
app.use(methodOverride("_method"));

// enabling express to use handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// access to the controller file and url routes
var routes = require("./controllers/burgersController.js");
app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});