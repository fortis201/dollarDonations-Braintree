'use strict';

angular.module('myApp.dash', ['ngRoute'])

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

.controller('dashCtrl', function ($scope, $location, dashFactory) {
	$scope.logout = function() {
		console.log("You have been logged out");
	}

});