// dependencies
var express = require("express");

// use Router method for controlling routes
var router = express.Router();
// allow access to burger.js ORM
var burger = require("../models/burger.js");

// get routes
router.get("/", function(req, res) {
    res.redirect("/burgers");
});
// get all burgers from mysql database
router.get("/burgers", function(req, res){
	// from burgers.js ORM
	burger.all(function(allBurgers) {
		res.render("index", {burger_data: allBurgers});
	});
});

// new burger post route
router.post("/burgers/post", function(req, res){
	// from burgers.js ORM
	burger.create(req.body.burger_name, function(data){
		console.log(data);
		res.redirect("/");
	});
});

// updating current burger post put route
router.put("/burgers/update", function(req, res) {
	// from burgers.js ORM
	burger.update(req.body.burger_id, function(data){
		console.log(data);
		res.redirect("/");
	})
});

module.exports = router;
