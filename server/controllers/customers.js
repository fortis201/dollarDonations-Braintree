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
			console.log(req.body);
			console.log("Fetching one customer...")
			Customer.find({username: req.body.uName}, function (err, result) {
				if (err) {
					console.log(err);
				} else if (result.length == 0) {
					console.log("cannot find user");

					// *** enter response here... *** //

				} else if (result.length > 0) {
					if ( req.body.pw === result[0].password ) {
						console.log("login success!");
						console.log(result);
						res.json({uId : result[0]._id, uName : result[0].username});
					}
				}
			})
		},

		create: function (req, res) {
			Customer.find({email: req.body.email}, function (err, result) {
				if (err) {
					console.log(err);
				} else if (result.length > 0) {
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
							res.json({uId : result._id, uName : result.username});
						}
					})
				}
			})
		}
	}
})();