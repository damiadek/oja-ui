'use strict';

/**
 * @ngdoc function
 * @name ojaUiApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the ojaUiApp
 */
angular.module('ojaUiApp')
  .controller('LogoutCtrl', function ($rootScope, $cookies) {
    $rootScope.loggedIn = false;
    $cookies.remove("loggedIn");
    $rootScope.go("/login");
  });
