'use strict';

angular.module('saintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuario-create', {
        url: '/usuario-create',
        template: '<usuario-create></usuario-create>'
      });
  });
