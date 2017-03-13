// accessing orm.js config file
var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.all("burgers", function(data) {
            cd(data);
        });
    },

    create: function(cb) {
        orm.create("burgers", [
            "burger_name", "devoured"
        ], [
            name, false
        ], cb);
    },

    update: function(id, cb) {
    	var status = "id=" + id;
    	orm.update("burgers", {
    		devoured: true
    	}, status, cb);
    };	
    	
   
};

module.exports = burger;
