define(['angular'], function (angular) {
	'use strict';
	//Option 1
	//You can declare the controller module and chain the controllers to them and return
	var myController = angular.module('myController', []);
	myController.controller('MyCtrl1', ['$scope', function ($scope) {
			$scope.greeting = "hello world";
		}]).controller('MyCtrl2', ['$scope', function ($scope) {
			$scope.greeting = "hello world2";
		}]);
	return myController;
	
	//Option 2 
	//You can do return controller module along with the chained controllers without declaring
	/*return angular.module('MyApp.controllers', [])
		// Sample controller where service is being used
		.controller('MyCtrl1', ['$scope', function ($scope) {
			$scope.greeting = "hello world";
		}]);*/
});