var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	email: String,
	password: String,
	createdAt: Date,
})

mongoose.model('Customer', customerSchema);