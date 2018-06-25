'use strict';

describe('Component: UsuarioListComponent', function () {

  // load the controller's module
  beforeEach(module('saintApp'));

  var UsuarioListComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsuarioListComponent = $componentController('usuario-list', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
