(function(){
    'use strict';

    angular.module('employeeDirectory')
        .config([ '$stateProvider', function($stateProvider){
            $stateProvider
                .state('login', {
                    url: "/login",
                    templateUrl: 'components/login/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                });
        }]);

})();