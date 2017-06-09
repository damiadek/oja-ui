/**
 * @ngdoc service
 * @name ojaUiApp.auth
 * @description
 * # auth
 * Service in the ojaUiApp.
 */

(function() {
  'use strict';

  angular.module('ojaUiApp')
    .service('auth', function () {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var logUserIn = function() {
        // Perform login function and save user details if login succeeds
      };

      var signUserUp = function() {
        // Perform signup function 
        // and redirect user to email confirmation page afterwards
      };

      var saveUserDetails = function() {
        // Save user Details in local storage
      };

      return {
        'isUserLoggedIn': true,
        'login': logUserIn,
        'signup': signUserUp,
        'saveUserDetails': saveUserDetails
      };
    });

}());

