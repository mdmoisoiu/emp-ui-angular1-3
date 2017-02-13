
(function(){
    'use strict';
    angular.module('employeeDirectory').controller('MainController', MainController);

    var inject = ['$scope', '$rootScope', '$window', '$location', '$state', '$translate', 'SessionService', 'UserModel'];
    function MainController($scope, $rootScope, $window, $location, $state, $translate, SessionService, UserModel) {

        var vm = this;

        vm.slide = '';
        vm.showLoading = false;

        $rootScope.back = back;
        $rootScope.go = go;
        $rootScope.selectLanguage = selectLanguage;

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);

        function back(state, params) {
            $scope.slide = 'slide-right';
            $state.go(state, params);
        }

        function go(state, params){
            $scope.slide = 'slide-left';
            $state.go(state, params);
        }

        function selectLanguage(countryCode){
            $translate.use(countryCode);
        }

        function stateChangeStart(event, nextState, currentState) {
            if (nextState.name!='login' && !UserModel.user.username) {
                SessionService.getLoggedInUser()
                    .then(function(username){
                        if(!username){
                            rejectLogin(event);
                        }
                    }).catch(function(){
                    rejectLogin(event);
                });
            }

            if (nextState.resolve) {
                vm.showLoading = true;
            }
        }

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams) {
            if (toState.resolve) {
                vm.showLoading = false;
            }
        }

        function rejectLogin(event){
            $rootScope.$broadcast('$stateChangeError');
            event.preventDefault();
            $state.go('login');
        }

    }
    MainController.$inject = inject;


})();

