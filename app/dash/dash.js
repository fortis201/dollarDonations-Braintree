'use strict';

angular.module('myApp.dash', ['ngRoute', 'myApp.register', 'myApp.login'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dash', {
    templateUrl: 'dash/dash.html',
    controller: 'dashCtrl'
  });
}])

.factory('dashFactory', function ($http, $location) {
	var factory = {}
	return factory;
})

.controller('dashCtrl', function ($scope, $location, dashFactory, registerFactory, loginFactory) {
	if (registerFactory.test) {
		console.log(registerFactory.test);		
	}
	if (loginFactory.test) {
		console.log(loginFactory.test);		
	}

	if (registerFactory.currentUser.email) {
		console.log("Brought coffee from registration desk to user dashboard");
		$scope.currentUser = registerFactory.currentUser;
		console.log($scope.currentUser);
	} else if (loginFactory.currentUser.email) {
		console.log("Coffee was delivered through the front door.");
		$scope.currentUser = loginFactory.currentUser;
		console.log($scope.currentUser);
		
	} else {
		$location.path('/home');		
	}

	$scope.logout = function() {
		console.log("You have been logged out");
	}

});