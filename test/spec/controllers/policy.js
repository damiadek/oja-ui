'use strict';

describe('Controller: PolicyCtrl', function () {

  // load the controller's module
  beforeEach(module('ojaUiApp'));

  var PolicyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PolicyCtrl = $controller('PolicyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PolicyCtrl.awesomeThings.length).toBe(3);
  });
});
