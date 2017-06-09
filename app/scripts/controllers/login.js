/**
 * @ngdoc function
 * @name ojaUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the ojaUiApp
 */

(function() {
  'use strict';
  
  angular.module('ojaUiApp')
    .controller('LoginCtrl', function ($rootScope, $scope, $cookies) {
        $scope.loginFunction = function () {
          $cookies.put("loggedIn", true, []);
          $rootScope.loggedIn = true;
          $rootScope.go('/dashboard');
        }
    });

}());
