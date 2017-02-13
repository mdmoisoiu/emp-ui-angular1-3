(function(){
    'use strict';
    angular.module('employeeDirectory').factory('SessionService', SessionService);

    var inject = ['BackendGateway', 'UserModel'];
    function SessionService(BackendGateway, UserModel) {

        return {
            logout: logout,
            login: login,
            getLoggedInUser: getLoggedInUser
        };

        //--------------------------------------------------------------------------

        function logout(){
            return BackendGateway.post("SessionService", "logout", null)
                .then(function(result){
                    if(result.data.result===1){
                        UserModel.username = null;
                    }
                });
        }

        function login(loginData) {
            return BackendGateway.post("SessionService", "login", [loginData])
                .then( function(response){
                    if(response.data.result===1){
                        UserModel.user.username = loginData.username;
                        return true;
                    }
                    return false;
                }
            );
        }

        function getLoggedInUser() {
            return BackendGateway.post("SessionService", "getLoggedInUser", [])
                .then(function(response){
                    if(response.data.result){
                        UserModel.user.username = response.data.user.username;
                        return UserModel.user.username;
                    }
                    return null;
                }).catch(function(){
                    return null;
                });
        }
    }
    SessionService.$inject = inject;

})();