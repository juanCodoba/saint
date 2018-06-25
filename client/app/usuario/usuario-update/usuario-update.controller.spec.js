'use strict';

describe('Component: UsuarioUpdateComponent', function () {

  // load the controller's module
  beforeEach(module('saintApp'));

  var UsuarioUpdateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsuarioUpdateComponent = $componentController('usuario-update', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
