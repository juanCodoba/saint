'use strict';

(function () {

  class ProcesoEvaluadoCreateComponent {
    constructor(subprocesoService) {
      this.subprocesoService = subprocesoService;
    }
    $onInit() {
      this.subprocesoService.query().$promise
        .then(response => {
          this.subproceso = response;
          console.log("planes de auditoria", this.subproceso)
        })

      }
      createProce() {
        this.procesoEvaluadoService.save(this.procesoEvaluado).$promise
          .then(response => {
            this.procesoEvaluado = response;
            console.log('planAuditoria', response)
            alert('fue creado tu control De Auditoria')
          })
      }
  }

  ProcesoEvaluadoCreateComponent.inject = ['procesoEvaluadoService','usuarioService', '$state']

    angular.module('saintApp')
  .component('procesoEvaluadoCreate', {
      templateUrl: 'app/procesoEvaluado/procesoEvaluado-create/procesoEvaluado-create.html',
      controller: ProcesoEvaluadoCreateComponent,
      controllerAs: 'procesoEvaluadoCreateCtrl'
  });

  }) ();
