'use strict';

/**
 * @ngdoc service
 * @name ojaUiApp.userInterface
 * @description
 * # userInterface
 * Service in the ojaUiApp.
 */
angular.module('ojaUiApp')
  .service('userInterface', function ($rootScope, $timeout, $location) {

    angular.element(".btn").click(function(){
      console.log("clicked");
    });
    // AngularJS will instantiate a singleton by calling "new" on this function

    $rootScope.blanket = false;

    /*search bar toggle*/
    $rootScope.search = false;
    
    /*result field toggle*/
    $rootScope.search = false;

    $rootScope.searchToggle = function () {
      $rootScope.search = !$rootScope.search;
    }



    $rootScope.showBlanket = function () {
      $rootScope.blanket = true;
    }

    $rootScope.hideBlanket = function () {
      $rootScope.blanket = false;
    }

    $rootScope.showLoading = function () {
      $rootScope.loading = true;
    }

    $rootScope.hideLoading = function () {
      $timeout(function () {
        $rootScope.loading = false;
      }, 2000);
    }

    // redirect pages on click
    $rootScope.go = function (x) {
      $location.url(x);
    }

  });

$("button").click(function () {
  console.log("hey");
});