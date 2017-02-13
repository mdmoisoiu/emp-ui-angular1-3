
(function(){
    'use strict';

    angular.module('employeeDirectory').factory('EmployeeModel', EmployeeModel);

    function EmployeeModel() {
        return {
            employees: null,
            invalidEmployees: true
        };
    }
    EmployeeModel.$inject = [];

})();

