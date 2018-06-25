'use strict';

(function () {

  class AuModAuditoriaCrearComponent {
    constructor(auModPlanAuditoriaService, auModPeriodoAuditoriaService, subprocesoService,usuarioService,procesoEvaluadoService, $state) {
      this.auModPlanAuditoriaService = auModPlanAuditoriaService;
      this.auModPeriodoAuditoriaService = auModPeriodoAuditoriaService;
      this.subprocesoService = subprocesoService;
      this.usuarioService = usuarioService;
      this.procesoEvaluadoService = procesoEvaluadoService;
      this.$state = $state;
    }
    $onInit() {
      this.auModPlanAuditoriaService.query().$promise
        .then(response => {
          this.planAuditoria = response;
          console.log("planes de auditoria", this.planAuditoria)
        })
      this.auModPeriodoAuditoriaService.query().$promise
        .then(response => {
          this.periodoAuditoria = response;
          console.log("periodos de auditoria", this.periodoAuditoria)
        })
        this.subprocesoService.query().$promise
        .then(response => {
          this.subproceso = response;
          console.log("periodos de auditoria", this.subproceso)
        })
        this.usuarioService.query().$promise
        .then(response => {
          this.usuario = response;
          console.log("users", this.usuario)
        })

    }

    createAud() {
      this.auModPlanAuditoriaService.save(this.planAuditoria).$promise
        .then(response => {
          this.planAuditoria = response;
          console.log('planAuditoria', response)
          alert('fue creado tu control De Auditoria')
        })
    }
    createAudSub() {
      this.procesoEvaluadoService.save(this.procesoEvaluado).$promise
        .then(response => {
          this.procesoEvaluado = response;
          console.log('planAuditoria', response)
          alert('fue creado tu subproceso De Auditoria')
        })
    }



  }
  AuModAuditoriaCrearComponent.inject = ['auModPlanAuditoriaService', 'auModPeriodoAuditoriaService','usuarioService','procesoEvaluadoService','$state']
  angular.module('saintApp')
    .component('auModAuditoriaCrear', {
      templateUrl: 'app/auModPlanAuditoria/auModAuditoria-crear/auModAuditoria-crear.html',
      controller: AuModAuditoriaCrearComponent,
      controllerAs: 'vm'
    });

})();
