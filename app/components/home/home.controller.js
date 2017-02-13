
(function(){
    'use strict';
    angular.module('employeeDirectory').controller('HomeController', HomeController);

    var inject = ['positionsNumber', 'employeesNumber'];
    function HomeController(positionsNumber, employeesNumber) {
        var vm = this;

        vm.positionsNumber = positionsNumber;
        vm.employeesNumber = employeesNumber;
    }
    HomeController.$inject = inject;

})();

