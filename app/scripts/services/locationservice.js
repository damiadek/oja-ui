/**
 * @ngdoc service
 * @name ojaUiApp.locationService
 * @description
 * # locationService
 * Service in the ojaUiApp.
 */

(function() {
  'use strict';

  angular.module('ojaUiApp')
    .service('locationService', function () {
      // AngularJS will instantiate a singleton by calling "new" on this function

      return {
        'isUserLocationKnown': true
      };
    });

    
}());
