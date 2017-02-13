
(function(){
    'use strict';
    angular.module('employeeDirectory').directive('loader', LoaderDirective);

    function LoaderDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/loader/loader.html'
        };
    }

})();

