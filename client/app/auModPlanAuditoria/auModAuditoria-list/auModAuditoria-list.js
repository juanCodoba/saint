'use strict';

angular.module('saintApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('auModAuditoria-list', {
        url: '/auModAuditoria-list',
        template: '<au-mod-auditoria-list></au-mod-auditoria-list>'
      });
  });
