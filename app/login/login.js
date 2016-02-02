'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.factory('loginFactory', function ($http, $location) {
	var factory = {};
	factory.currentUser = {};

	factory.test = {message: "login test"};

	factory.findOneCust = function (info, callback) {
		console.log("Brewing coffee with the following ingredients...");
		console.log(info);
		$http.post('/findOneCust', info).success(function (result) {
			console.log("user credentials verified");
			console.log(result);
			factory.currentUser.fName = result.fName;
			factory.currentUser.email = result.email;
			callback(result);
		})
	}

	return factory;
})

.controller('loginCtrl', function ($scope, $location, loginFactory) {

	$scope.login = function () {
		console.log("Attempting to log in...");
		loginFactory.findOneCust($scope.userLogin, function (data) {
			console.log("attempting to redirect with the following data:");
			console.log(data);
			$location.path('/dash');
		})
	}

});