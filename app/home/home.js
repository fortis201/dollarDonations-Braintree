'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.factory('homeFactory', function ($http, $location) {
	var factory = {}
	return factory;
})

.controller('homeCtrl', function ($scope, $location, homeFactory) {

});