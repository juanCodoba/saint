'use strict';

angular.module('saintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('procesoEvaluado-create', {
        url: '/procesoEvaluado-create',
        template: '<proceso-evaluado-create></proceso-evaluado-create>'
      });
  });
