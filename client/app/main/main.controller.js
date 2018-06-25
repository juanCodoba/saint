'use strict';

(function() {

  class MainController {
    constructor(AuthService,$state) {
      this.message = 'Hello';
      this.$state = $state;
      this.AuthService = AuthService;
    }
    login(){
      console.log(this.user);
      this.AuthService.login(this.user);
      this.$state.go('auModAditoria-list');
    }
    logout(){
  			console.log();
        this.AuthService.logout(this.user);
        this.$state.go('main');
      }
  }

  angular.module('saintApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
