'use strict';

    angular.module("saintApp")
    .factory('AuthService',AuthService);

    AuthService.$injet = ['$auth','$state'];

    function AuthService($auth,$state){
        var Auth = {
            login: login,
            logout: logout,
            isAdmin: isAdmin,
            isAdminCdad:isAdminCdad,
            isAdminCalidoso:isAdminCalidoso,
            isUser: isUser,
            isAud: isAud,
            isAuxman:isAuxman,
            isCalidad:isCalidad,
            isConfe:isConfe,
            isDocente:isDocente,
            isFt:isFt,
            isFtdesa:isFtdesa,
            isFtprint:isFtprint,
            isFtscam:isFtscam,
            isFtvali1:isFtvali1,
            isFtvali2:isFtvali2,
            isMante:isMante,
            isOcu:isOcu,
            datosUsuario: datosUsuario,
            idUsuario: idUsuario,
            isAuthenticated: isAuthenticated,
            getRoles: getRoles
        }
        function login(user, collback) {
            $auth.login(user)
                .then(response => {
                    console.log("Login ok", response);
                    console.log(Auth.isAdmin());
                    $state.go('auModAditoria-list');
                })
                .catch(err => {
                  if(err.data=="El usuario esta inactivo"){
                    toastr["error"]("Usuario Bloqueado Comunicate con el Administrador!.");
                     $state.go('login');
                  }
                  if(err.data=="El Usuario no existe"){
                    toastr["error"]("El Usuario no existe!.");
                     $state.go('login');
                  }
                  if(err.data=="Usuario y/o password, no coinciden"){
                    toastr["error"]("Usuario y/o password, no coinciden!.");
                     $state.go('login');
                  }
    
                })
        }
        function logout() {
            if ($auth.isAuthenticated()) {
                $auth.logout()
                    .then(response => {
                        console.log("Logout ok", response);
                        $state.go('main');
                    })
            }
    
        }
        function isAdmin() {
            if (Auth.isAuthenticated()) {
                //console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("ADMIN") !== -1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
    
        }
        function isUser() {
            if (Auth.isAuthenticated()) {
                //console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("USER") !== -1) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
    
        }
        function isAdminCdad() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("ADMINCDAD") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isAdminCalidoso() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("ADMINCDOSO") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isAud() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("AUD") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isAuxman() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("AUXMAN") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isCalidad() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("CALIDAD") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isConfe() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("CONFE") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isDocente() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("DOCENTE") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isFt() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("FT") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isFtscam() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("FTSCAM") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isFtdesa() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("FTDESA") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isFtprint() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("FTPRINT") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isFtvali1() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("FTVALI1") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isFtvali2() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("FTVALI2") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isMante() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("MANTE") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function isOcu() {
            if (Auth.isAuthenticated()) {
                // console.log("ROLES",$auth.getPayload().roles);
                if ($auth.getPayload().roles.indexOf("OCU") !== -1) {
                    return true;
                } else {
                }
            } else {
                return false;
            }
    
        }
        function datosUsuario() {
            if ($auth.isAuthenticated()) {
                return $auth.getPayload().user;
            } else {
                return false;
            }
        }
    
        function idUsuario() {
            if ($auth.isAuthenticated()) {
                return $auth.getPayload().sub;
            } else {
                return false;
            }
    
        }
    
        function isAuthenticated() {
            if ($auth.isAuthenticated()) {
                return true;
            } else {
                return false;
            }
        }
    
        function getRoles() {
            if ($auth.isAuthenticated()) {
                return $auth.getPayload().roles;
            } else {
                return false;
            }
    
        }
    
        return Auth;
    
        
    
    }
