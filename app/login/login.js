'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.factory('loginFactory', function ($hhtp, $location) {
	var factory = {};
})

.controller('loginCtrl', function ($scope, $location, loginFactory) {
	$scope.currentUser = {};

	$scope.login = function () {
		console.log("logging in with user:");
		console.log($scope.userLogin);
		mainFactory.findOneCust($scope.userLogin, function (data) {
			console.log("in front-end controller with data:");
			$scope.orderDetails.push({uId : data.uId});	
			$scope.currentUser = data;
			console.log($scope.currentUser);

			mainFactory.addOrder({uId : data.uId}, function (data) {
				console.log("order created..?");
				console.log(data);
				$scope.orderDetails[0].oId = data.oId;
				console.log($scope.orderDetails);
			})
		})
		$scope.userLogin = {};		
	}

});