'use strict';

describe('Controller: ConfirmPhoneCtrl', function () {

  // load the controller's module
  beforeEach(module('ojaUiApp'));

  var ConfirmPhoneCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmPhoneCtrl = $controller('ConfirmPhoneCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfirmPhoneCtrl.awesomeThings.length).toBe(3);
  });
});
