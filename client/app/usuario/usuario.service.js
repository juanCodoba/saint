(function(){
  'use strict';
  angular.module('saintApp')
  .factory('usuarioService',usuarioService);
  usuarioService.inject =["resource","API"];
  
  function usuarioService($resource,API){
      return $resource(API + "/api/usuarios/:id",{
          id:'@id'
      });
  }
})();
