var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, './app')));

app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


// Braintree API
var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "8mzgzs4th8ddkks8",
  publicKey: "8b68q5s6f6tt96yb",
  privateKey: "7ef636e41c78248848b9c6e4b492d38a"
});

app.get("/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, res) {
    res.send(response.clientToken);
  });
});

nonceFromTheClient = "fake-valid-nonce";

gateway.transaction.sale({
	amount: '10.00',
	paymentMethodNonce: nonceFromTheClient,
	}, 
	function (err, res) {
		if (err) {
			console.log(err);
		}
	}
);

// End Braintree API

var server = app.listen(1232, function () {
	console.log('Established connection to 1232.');
})

