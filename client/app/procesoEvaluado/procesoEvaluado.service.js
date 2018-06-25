(function(){
    'use strict';
    angular.module('saintApp')
    .factory('procesoEvaluadoService',procesoEvaluadoService);
    procesoEvaluadoService.inject =["resource","API"];
    
    function procesoEvaluadoService($resource,API){
        return $resource(API + "/api/proceso_evaluado/:id",{
            id:'@id'
        });
    }
 })();