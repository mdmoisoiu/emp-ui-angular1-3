
(function(){
    'use strict';

    angular.module('employeeDirectory').factory('UserModel', UserModel);

    var inject = [];
    function UserModel() {
        return {
            user: {
                username: null
            }
        };
    }
    UserModel.$inject = inject;


})();

