'use strict';

(function(){

class UsuarioListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('saintApp')
  .component('usuarioList', {
    templateUrl: 'app/usuario-list/usuario-list.html',
    controller: UsuarioListComponent,
    controllerAs: 'usuarioListCtrl'
  });

})();
