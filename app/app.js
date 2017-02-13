(function(){
    'use strict';
    // Declare app level module which depends on views, and components
    angular.module('employeeDirectory', [
            'ngRoute',
            'ngTouch',
            'ngRoute',
            'ngAnimate',
            'ui.router',
            'ui.bootstrap.showErrors',
            'ui.bootstrap',
            'LocalStorageModule',
            'pascalprecht.translate'
        ]).
        config([ '$urlRouterProvider', 'localStorageServiceProvider', '$translateProvider', function($urlRouterProvider, localStorageServiceProvider, $translateProvider) {

            localStorageServiceProvider.setPrefix('EmployeeDirectory');

            $urlRouterProvider.otherwise("/login");

            $translateProvider.useStaticFilesLoader({
                'prefix': 'resources/locale-',
                'suffix': '.json'
            });
            $translateProvider.preferredLanguage('en_US');

            // which language to use?
            $translateProvider.preferredLanguage('ro_RO');
        }
    ]);

})();

