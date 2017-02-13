(function(){
    'use strict';
    angular.module('employeeDirectory').controller('EmployeeController', EmployeeController);

    var inject = ['$rootScope', '$log', '$uibModal', 'EmployeeService', 'employees'];
    function EmployeeController($rootScope, $log, $uibModal, EmployeeService, employees) {

        var vm = this;

        vm.employees = employees;

        vm.addNewEmployee = addNewEmployee;
        vm.deleteEmployee = deleteEmployee;

        //--------------------------------------------------------------------------

        function addNewEmployee() {
            EmployeeService.reserveEmployeeId()
                .then(function(employeeId){
                    $rootScope.go('employee-form', { employeeId : employeeId });
                });
        }

        function deleteEmployee(employee) {
            $uibModal.open({
                animate: true,
                templateUrl: 'components/employee/delete-employee-modal.html',
                controller: function($scope, $uibModalInstance) {
                    $scope.ok = function() {
                        $uibModalInstance.close();
                    };
                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            }).result.then(function () {
                EmployeeService.deleteEmployee(employee);
            });
        }
    }
    EmployeeController.$inject = inject;

})();