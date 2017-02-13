(function(){
    'use strict';

    angular.module('employeeDirectory')
        .config([ '$stateProvider', function($stateProvider){
            $stateProvider
                .state('employee', {
                    url: "/employee",
                    params: {
                        refresh: null
                    },
                    templateUrl: 'components/employee/employee.html',
                    controller: 'EmployeeController',
                    controllerAs: 'vm',
                    resolve: {
                        'employees': function ($stateParams, EmployeeModel, EmployeeService) {
                            var refreshEmployees = $stateParams.refresh;

                            if(EmployeeModel.employees && !refreshEmployees){
                                return EmployeeModel.employees;
                            } else {
                                return EmployeeService.getEmployees()
                                    .then(function(){
                                        return EmployeeModel.employees;
                                    });
                            }
                        }
                    }
                })
                .state('employee-form', {
                    url: "/employee-form/:employeeId",
                    templateUrl: 'components/employee/employee-form.html',
                    controller: 'EmployeeFormController',
                    controllerAs: 'vm',
                    resolve: {
                        'employee': function ($stateParams, EmployeeService) {
                            return EmployeeService.getEmployee($stateParams.employeeId)
                                .then(function(employee) {
                                    return employee;
                                });
                        }
                    }
                });
        }]);

})();