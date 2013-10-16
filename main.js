require.config({
 
	// alias libraries paths
	paths: {
		'angular': 'js/vendor/angular.min',
	},
 
	// angular does not support AMD out of the box, put it in a shim
	shim: {
		'angular': {
			exports: 'angular'
		}
	}
});
require([
         'angular',
         'app'
         ],
		function(angular, app){
			'use strict';
			app.config(['$routeProvider',
	            function($routeProvider){
					
				}
		]);
})