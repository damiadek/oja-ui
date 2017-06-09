/**
 * @ngdoc function
 * @name ojaUiApp.controller:LocationCtrl
 * @description
 * # LocationCtrl
 * Controller of the ojaUiApp
 */
 
(function() {

  'use strict';
  
  angular.module('ojaUiApp')
    .controller('LocationCtrl', function ($scope, $location, $rootScope) {
        if ($rootScope.loggedIn) {
          $rootScope.go("/dashboard");
        }
    });
}());

