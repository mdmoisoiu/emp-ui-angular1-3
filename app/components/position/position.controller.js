(function(){
    'use strict';
    angular.module('employeeDirectory').controller('PositionController', PositionController);

    var inject = ['$scope', '$uibModal', 'PositionService', 'positions'];
    function PositionController($scope, $uibModal, PositionService, positions) {

        var vm = this;

        vm.positions = positions;

        vm.deletePosition = deletePosition;
        vm.addNewPosition = addNewPosition;

        function addNewPosition() {
            PositionService.reservePositionId()
                .then(function(positionId){
                    $scope.go('position-form', { positionId : positionId });
                });
        }


        function deletePosition(position) {
            $uibModal.open({
                animation: true,
                templateUrl: 'components/position/delete-position-modal.html',
                controller: function($scope, $uibModalInstance) {
                    $scope.ok = function() {
                        $uibModalInstance.close();
                    };
                    $scope.cancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            }).result.then(function () {
                PositionService.deletePosition(position);
            });
        }


    }
    PositionController.$inject = inject;

})();