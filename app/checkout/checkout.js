'use strict';

angular.module('myApp.checkout', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/checkout', {
    templateUrl: 'checkout/checkout.html',
    controller: 'checkoutCtrl'
  });
}])

.factory('checkoutFactory', function ($hhtp, $location) {
	var factory = {};
	return factory;
})

.controller('checkoutCtrl', [function() {

}]);