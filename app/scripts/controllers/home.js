/**
 * @ngdoc function
 * @name ojaUiApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ojaUiApp
 */

(function() {
  'use strict';
  
  angular.module('ojaUiApp')
    .controller('HomeCtrl', function ($rootScope) {
      $rootScope.loggedIn = true;
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
}());

