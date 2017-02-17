
(function(){
    'use strict';
    angular.module('employeeDirectory').controller('LoginController', LoginController);

    var inject = ['$scope', '$rootScope', '$uibModal', 'localStorageService', 'BackendGateway', 'SessionService'];
    function LoginController($scope, $rootScope, $uibModal, localStorageService, BackendGateway, SessionService) {

        var vm = this;

        vm.rememberMe = localStorageService.get("rememberMe") || false ;
        vm.username = localStorageService.get("username") || '';
        vm.password = localStorageService.get("password") || '';

        vm.login = login;

        function login(){
            $scope.$broadcast('show-errors-check-validity');

            if($scope.loginForm.$valid){

                var loginData = {
                    username: vm.username,
                    password: vm.password
                };

                SessionService.login(loginData)
                    .then(function(success){
                        if(success){
                            if(vm.rememberMe){
                                localStorageService.set("username", vm.username);
                                localStorageService.set("password", vm.password);
                                localStorageService.set("rememberMe", true);
                            } else {
                                localStorageService.remove("username", "password", "rememberMe");
                            }

                            $rootScope.go('home');
                        } else {
                            $uibModal.open({
                                animation: true,
                                template: '<div class="modal-body">Invalid username or password!</div>'
                            });
                        }
                    });
            }
        }

    }
    LoginController.$inject = inject;

})();

