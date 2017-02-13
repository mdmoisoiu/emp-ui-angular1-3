(function(){
    'use strict';

    angular.module('employeeDirectory')
        .config([ '$stateProvider', function($stateProvider){
            $stateProvider.state('chat', {
                url: "/chat",
                templateUrl: 'components/chat/chat.html',
                controller: 'ChatController',
                controllerAs: 'vm'
            });
        }]);

})();