(function(){
    'use strict';
    angular.module('employeeDirectory').controller('PositionFormController', PositionFormController);

    var inject = ['$scope', '$rootScope', '$stateParams', 'PositionService', 'positions', 'position', 'countries', 'employees'];
    function PositionFormController($scope, $rootScope, $stateParams, PositionService, positions, position, countries, employees) {

        var vm = this;

        vm.position = position;
        vm.countries = countries;
        vm.employees = employees;
        vm.lineManagerPositions = PositionService.getLineManagerPositions(positions, $stateParams.positionId);

        vm.save = save;
        vm.cancel = cancel;

        function save() {
            $scope.$broadcast('show-errors-check-validity');

            if($scope.positionForm.$valid){
                PositionService.savePosition(vm.position)
                    .then(function(success){
                        if(success){
                            $rootScope.back('position', {refresh: true});
                        }
                    });
            }
        }

        function cancel() {
            $rootScope.back('position');
        }
    }
    PositionFormController.$inject = inject;

})();