var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
module.exports = (function (app) {
	return {
		//CRUD

		read: function (req, res) {
			console.log("Fetching all Customers...");
			Customer.find({}, function (err, result) {
				if (err) {
					console.log(err);
				} else {
					console.log("Read customer result:");
					console.log(result);
					res.json(result);
				}
			})
		},

		read_one: function (req, res) {
			console.log("Brewing coffee using:")
			console.log(req.body);
			console.log("Pouring coffee beans...")
			Customer.find({email: req.body.email}, function (err, result) {
				if (err) {
					console.log(err);
				} else if (result.length == 0) {
					console.log("cannot find user");
					res.json({err_message: "You entered the wrong email or password."});

				} else if (result.length > 0) {
					if ( req.body.pw === result[0].password ) {
						console.log("Coffee brewing was a success!");
						console.log(result);
						res.json({fName: result[0].first_name, email : result[0].email});
					}
				}
			})
		},

		create: function (req, res) {
			console.log("Received the following credentials:");
			console.log(req.body);
			Customer.find({email: req.body.email}, function (err, result) {
				if (err) {
					console.log(err);
				} else if (result.length > 0) {
					console.log("found possible duplicate:");
					console.log(result);
					res.json({err_message: "Cannot register with an exisitng email"});
				} else {
					console.log("creating customer with the following credentials:");
					console.log(req.body);
					var customer = new Customer ({first_name: req.body.fName, last_name: req.body.lName, email: req.body.email, username: req.body.uName, password: req.body.pw, createdAt: new Date()});
					customer.save(function (err, result) {
						if (err) {
							console.log(err);
						} else {
							console.log("creation success!");
							console.log(result);
							res.json({fName : result.first_name, email : result.email});
						}
					})
				}
			})
		}
	}
})();