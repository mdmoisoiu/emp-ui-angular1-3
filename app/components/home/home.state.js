(function(){
    'use strict';

    angular.module('employeeDirectory')
        .config([ '$stateProvider', function($stateProvider){
            $stateProvider
                .state('home', {
                    url: "/home",
                    templateUrl: 'components/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm',
                    resolve: {
                        'positionsNumber': function (PositionService) {
                            return PositionService.getPositionsNumber();
                        },
                        'employeesNumber': function (EmployeeService) {
                            return EmployeeService.getEmployeesNumber();
                        }
                    }
                });
        }]);

})();