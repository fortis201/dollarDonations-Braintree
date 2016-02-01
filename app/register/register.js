'use strict';

angular.module('myApp.register', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'registerCtrl'
  });
}])

.factory('registerFactory', function ($http, $location) {
	var factory = {};

	factory.addCustomer = function (info, callback) {
		console.log("Sending new customer data to the server...");
		console.log(info);
		$http.post('/addCustomer', info).success(function (result) {
			console.log("Customer successfully registered!");
			callback(result);
		});		
	}

	// .showCustomers = function (callback) {
	// 	$http.get('/showCustomers').success(function (result) {
	// 		console.log("Fetching customer data...");
	// 		console.log(result);
	// 		callback(result);
	// 	})
	// }

	// .findCustomer = function (info, callback) {
	// 	$http.post('/findOneCust', info).success(function (result) {
	// 		console.log("user credentials verified");
	// 		console.log(result);
	// 		callback(result);
	// 	})
	// }

	return factory;
})

.controller('registerCtrl', function ($scope, $location, registerFactory) {

	$scope.newCustomer = {};
	$scope.reg_err = {};
	$scope.currentUser = {};

	$scope.createCustomer = function() {
		if ($scope.newCustomer.pw != $scope.newCustomer.conf_pw ) {
			$scope.reg_err = {msg: "Passwords must match"};
			console.log($scope.reg_err);
		} 
		else {
			registerFactory.addCustomer($scope.newCustomer, function (data) {
				console.log(data);
				if (data.err_message) {					
					$scope.db_err = {msg: data.err_message};
				} else {
					registerFactory.showCustomers(function (data) {
						$scope.currentUser = data;
					});
					$location.path("/dash");
				}
			})			
			$scope.newCustomer = {};			
		}
	}
});