
(function(){
    'use strict';

     angular.module('employeeDirectory').directive('header', HeaderDirective);

     function HeaderDirective() {
        return {
            scope: {
                title: '=title'
            },
            bindToController: true,
            controller: 'HeaderController',
            controllerAs: 'vm',
            restrict: 'E',
            transclude: true,
            templateUrl: 'components/header/header.html'
        };
    }

})();

