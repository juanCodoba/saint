'use strict';

(function(){

class UsuarioUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('saintApp')
  .component('usuarioUpdate', {
    templateUrl: 'app/usuario-update/usuario-update.html',
    controller: UsuarioUpdateComponent,
    controllerAs: 'usuarioUpdateCtrl'
  });

})();
