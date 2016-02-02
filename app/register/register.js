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
	factory.currentUser = {};

	factory.test = {message: "factory test"};

	factory.addCustomer = function (info, callback) {
		console.log("Sending new customer data to the server...");
		console.log(info);
		factory.currentUser = {email: info.email, fName: info.fName};
		console.log("current user credentials:");
		console.log(factory.currentUser);
		$http.post('/addCustomer', info).success(function (result) {
			console.log("Customer successfully registered!");
			console.log(result);
			callback(result);
		});		
	};

	return factory;
})

.controller('registerCtrl', function ($scope, $location, registerFactory) {

	$scope.newCustomer = {};
	$scope.reg_err = {};

	$scope.createCustomer = function() {
		console.log("attempting to create a new customer...");
		if ($scope.newCustomer.pw != $scope.newCustomer.conf_pw ) {
			$scope.reg_err = {msg: "Passwords must match"};
			console.log($scope.reg_err);
		} 
		else {
			registerFactory.addCustomer($scope.newCustomer, function (data) {
				if (data.err_message) {			
					console.log(data.err_message);
					$scope.db_err = {msg: data.err_message};
				} else {
					$location.path("/dash");
				}
			})			
			$scope.newCustomer = {};			
		}
	}
});