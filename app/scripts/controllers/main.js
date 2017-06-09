/**
 * @ngdoc function
 * @name ojaUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ojaUiApp
 */

(function() {
  'use strict';

  angular.module('ojaUiApp')
    .controller('MainCtrl', function ($scope) {
      $scope.items = [
        {
          title: 'HTML5 Boilerplate',
          content: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
        },
        {
          title: 'Angular',
          content: 'AngularJS is a toolset for building the framework most suited to your application development.'
        },
        {
          title: 'Karma',
          content: 'Spectacular Test Runner for JavaScript.'
        }
      ];
    });
}());

