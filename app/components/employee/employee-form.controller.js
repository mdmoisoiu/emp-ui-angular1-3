(function(){
    'use strict';
    angular.module('employeeDirectory').controller('EmployeeFormController', EmployeeFormController);

    var inject = ['$scope', '$rootScope', 'EmployeeService', 'employee'];
    function EmployeeFormController($scope, $rootScope, EmployeeService, employee) {

        var vm = this;

        vm.employee = employee;
        vm.save = save;
        vm.uploadFile = uploadFile;
        vm.cancel = cancel;

        function save() {
            $scope.$broadcast('show-errors-check-validity');

            if($scope.employeeForm.$valid){
                EmployeeService.saveEmployee(vm.employee)
                    .then(function (success){
                        if(success){
                            $rootScope.back('employee', {refresh: true});
                        }
                    });
            }
        }

        function uploadFile(input) {
            EmployeeService.uploadEmployeeImage(input, vm.employee);
        }

        function cancel() {
            $rootScope.back('employee');
        }

    }
    EmployeeFormController.$inject = inject;

})();