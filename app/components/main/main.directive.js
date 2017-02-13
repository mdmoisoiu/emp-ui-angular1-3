(function(){
    'use strict';
    angular.module('employeeDirectory').directive('main', MainDirective);

    function MainDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/main/main.html'
        };
    }

})();

