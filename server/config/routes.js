var customers = require('../controllers/customers.js');

module.exports = function (app) {
	// =====================//
	// --=== Customers ===-- //
	// =====================//
	app.get('/showCustomers', function (req, res) {
		customers.read(req, res);
	});

	app.post('/findOneCust', function (req, res) {
		customers.read_one(req, res);
	})

	app.post('/addCustomer', function (req, res) {
		customers.create(req, res);
	})
}