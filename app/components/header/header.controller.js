
(function(){
    'use strict';
    angular.module('employeeDirectory').controller('HeaderController', HeaderController);

    var inject = ['$rootScope', 'UserModel', 'SessionService'];
    function HeaderController($rootScope, userModel, SessionService) {
        var vm = this;

        vm.user = userModel.user;
        vm.logout = logout;
        vm.selectLanguage = $rootScope.selectLanguage;

        function logout(){
            SessionService.logout()
                .then(function(){
                    $rootScope.go('login');
                });
        }
    }
    HeaderController.$inject = inject;

})();

