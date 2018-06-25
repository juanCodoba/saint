'use strict';

angular.module('saintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuario-list', {
        url: '/usuario-list',
        template: '<usuario-list></usuario-list>'
      });
  });
