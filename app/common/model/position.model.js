
(function(){
    'use strict';

    angular.module('employeeDirectory').factory('PositionModel', PositionModel);

    var inject = [];
    function PositionModel() {
        return {
            positions: null,
            invalidPositions: true
        };
    }

    PositionModel.$inject = inject;

})();

