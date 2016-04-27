(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:loginCtrl
	* @description
	* # loginCtrl
	* Controller of the app
	*/

  	angular
		.module('login')
		.controller('LoginCtrl', Login);

		Login.$inject = ['$rootScope', '$http', '$location'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Login($rootScope, $http, $location) {
			/*jshint validthis: true */
			var vm = this;



		}

})();
