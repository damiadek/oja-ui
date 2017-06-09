'use strict';

describe('Controller: ConfirmEmailCtrl', function () {

  // load the controller's module
  beforeEach(module('ojaUiApp'));

  var ConfirmEmailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ConfirmEmailCtrl = $controller('ConfirmEmailCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ConfirmEmailCtrl.awesomeThings.length).toBe(3);
  });
});
