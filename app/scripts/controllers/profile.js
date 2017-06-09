(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name ojaUiApp.controller:ProfileCtrl
   * @description
   * # ProfileCtrl
   * Controller of the ojaUiApp
   */
  angular.module('ojaUiApp')
    .controller('ProfileCtrl', function ($anchorScroll, $location) {
      $location.hash("profile");
      $anchorScroll();
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
}());
  
