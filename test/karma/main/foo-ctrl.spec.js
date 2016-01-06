'use strict';

describe('module: main, controller: FooCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var FooCtrl;
  beforeEach(inject(function ($controller) {
    FooCtrl = $controller('FooCtrl');
  }));

  it('should do something', function () {
    expect(!!FooCtrl).toBe(true);
  });

});
