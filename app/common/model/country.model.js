
(function(){
    'use strict';

    angular.module('employeeDirectory').factory('CountryModel', CountryModel);

    var inject = [];
    function CountryModel() {
        return {
            countries: null
        };
    }
    CountryModel.$inject = inject;

})();

