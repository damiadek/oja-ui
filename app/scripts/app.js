/**
   * @ngdoc overview
   * @name ojaUiApp
   * @description
   * # ojaUiApp
   *
   * Main module of the application.
   */
(function() {
  'use strict';

  angular
    .module('ojaUiApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .run(function($rootScope, auth, locationService, $location, $log, userInterface, $cookies) {
      $rootScope.loggedIn = $cookies.get("loggedIn");

      /*default view path*/
      $rootScope.path = "app/views";

      $rootScope.$on('$routeChangeStart', function(evt, next, current) {
          $rootScope.showLoading();

          if (current){
            $log.info(current.templateUrl);
          } 
          if (!locationService.isUserLocationKnown){
            if (next.$$route.templateUrl === 'views/location.html'){
              // already heading to location page, so free the nigga
            }else{
              $location.path('/location');
            }
          }
          if (!auth.isUserLoggedIn){
            if (next.$$route.templateUrl === 'views/login.html'){
              // already heading to login, so free the nigga
            }else{
              $location.path('/login');
            }
          }
      });
      $rootScope.$on('$routeChangeSuccess', function (evt, next, current) {
        $rootScope.hideLoading();
      });
      
    })
    .config(function ($routeProvider) {
      $routeProvider
        // .when('/', {
        //   templateUrl: 'views/main.html',
        //   controller: 'MainCtrl',
        //   controllerAs: 'main'
        // })
        .when('/location', {
          templateUrl: 'views/location.html',
          controller: 'LocationCtrl',
          controllerAs: 'location'
        })
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'login'
        })
        .when('/reset-password', {
          templateUrl: 'views/reset-password.html',
          controller: 'ResetPasswordCtrl',
          controllerAs: 'reset_password'
        })
        .when('/signup', {
          templateUrl: 'views/signup.html',
          controller: 'SignupCtrl',
          controllerAs: 'signup'
        })
        .when('/profile', {
          templateUrl: 'views/profile/view.html',
          controller: 'ProfileCtrl',
          controllerAs: 'profile'
        })
        .when('/dashboard', {
          templateUrl: 'views/home/view.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        })
        .when('/product/view', {
          templateUrl: 'views/product/view.html',
          controller: 'ProductCtrl',
          controllerAs: 'product'
        })
        .when('/cart', {
          templateUrl: 'views/cart/view.html',
          controller: 'CartCtrl',
          controllerAs: 'cart'
        })
        .when('/confirm-email', {
          templateUrl: 'views/confirm/email.html',
          controller: 'ConfirmEmailCtrl',
          controllerAs: 'confirmEmail'
        })
        .when('/confirm-phone', {
          templateUrl: 'views/confirm/phone.html',
          controller: 'ConfirmPhoneCtrl',
          controllerAs: 'confirmPhone'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/terms', {
          templateUrl: 'views/terms.html',
          controller: 'TermsCtrl',
          controllerAs: 'terms'
        })
        .when('/privacy-policy', {
          templateUrl: 'views/policy.html',
          controller: 'PolicyCtrl',
          controllerAs: 'policy'
        })
        .when('/404', {
          templateUrl: '404.html'
        })
        .when('/logout', {
          templateUrl: 'views/logout.html',
          controller: 'LogoutCtrl'
        })
        .otherwise({
          redirectTo: '/location'
        });
    });
}());
