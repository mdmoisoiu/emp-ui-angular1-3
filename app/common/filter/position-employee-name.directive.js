
(function(){
    'use strict';
    angular.module('employeeDirectory').filter('PositionEmployeeName', PositionEmployeeName);

    var inject = ['$filter'];
    function PositionEmployeeName($filter) {
        return function(position) {
            return position.employeeName ? position.employeeName : $filter('translate')('VACANT');
        };
    }
    PositionEmployeeName.$inject = inject;

})();

