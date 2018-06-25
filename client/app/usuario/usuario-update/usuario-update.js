'use strict';

angular.module('saintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuario-update', {
        url: '/usuario-update',
        template: '<usuario-update></usuario-update>'
      });
  });
