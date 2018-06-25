'use strict';

(function(){

class UsuarioCreateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('saintApp')
  .component('usuarioCreate', {
    templateUrl: 'app/usuario-create/usuario-create.html',
    controller: UsuarioCreateComponent,
    controllerAs: 'usuarioCreateCtrl'
  });

})();
