(function(){
    'use strict';
    angular.module('saintApp')
    .factory('auModPlanAuditoriaService',auModPlanAuditoriaService);
    auModPlanAuditoriaService.inject =["resource","API"];
    
    function auModPlanAuditoriaService($resource,API){
        return $resource(API + "/api/plan_auditoria/:id",{
            id:'@id'
        });
    }
 })();