'use strict';

describe('Component: UsuarioCreateComponent', function () {

  // load the controller's module
  beforeEach(module('saintApp'));

  var UsuarioCreateComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    UsuarioCreateComponent = $componentController('usuario-create', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
