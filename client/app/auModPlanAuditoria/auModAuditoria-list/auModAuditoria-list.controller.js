'use strict';

(function(){

class AuModAuditoriaListComponent {
  constructor(auModPlanAuditoriaService,$state) {
    this.auModPlanAuditoriaService = auModPlanAuditoriaService;
    this.$state = $state;
  }

  $onInit(){
    this.auModPlanAuditoriaService.query({tipoAuditoria :"Auditoria Control de Calidad"}).$promise
        .then(response =>{
        this.planAuditoria = response;
        console.log("planes de auditoria",this.planAuditoria)
    })
}
}
AuModAuditoriaListComponent.inject = ['auModPlanAuditoriaService', '$state']
angular.module('saintApp')
  .component('auModAuditoriaList', {
    templateUrl: 'app/auModPlanAuditoria/auModAuditoria-list/auModAuditoria-list.html',
    controller: AuModAuditoriaListComponent,
    controllerAs: 'vm'
  });

})();
