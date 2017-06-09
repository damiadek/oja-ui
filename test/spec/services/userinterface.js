'use strict';

describe('Service: userInterface', function () {

  // load the service's module
  beforeEach(module('ojaUiApp'));

  // instantiate service
  var userInterface;
  beforeEach(inject(function (_userInterface_) {
    userInterface = _userInterface_;
  }));

  it('should do something', function () {
    expect(!!userInterface).toBe(true);
  });

});
