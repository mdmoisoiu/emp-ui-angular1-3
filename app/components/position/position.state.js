(function(){
    'use strict';

    angular.module('employeeDirectory')
        .config([ '$stateProvider', function($stateProvider){
            $stateProvider
                .state('position', {
                    url: "/position",
                    params: {
                        refresh: null
                    },
                    templateUrl: 'components/position/position.html',
                    controller: 'PositionController',
                    controllerAs: 'vm',
                    resolve: {
                        'positions': function ($stateParams, PositionService, PositionModel) {
                            var refreshPositions = $stateParams.refresh;
                            if(PositionModel.positions && !refreshPositions){
                                return PositionModel.positions;
                            } else {
                                return PositionService.getPositions()
                                    .then(function (response){
                                        return PositionModel.positions;
                                    });
                            }
                        }
                    }
                })
                .state('position-form', {
                    url: "/position-form/:positionId",
                    templateUrl: 'components/position/position-form.html',
                    controller: 'PositionFormController',
                    controllerAs: 'vm',
                    resolve: {
                        'positions': function ($stateParams, PositionService, PositionModel) {
                            var refreshPositions = $stateParams.refresh;
                            if(PositionModel.positions && !refreshPositions){
                                return PositionModel.positions;
                            } else {
                                return PositionService.getPositions()
                                    .then(function (response){
                                        return PositionModel.positions;
                                    });
                            }
                        },
                        'position': function ($stateParams, PositionService, PositionModel) {
                            return PositionService.getPosition($stateParams.positionId);
                        },
                        'countries': function (CountryModel, BackendGateway) {
                            if(CountryModel.countries){
                                return CountryModel.countries;
                            } else {
                                return BackendGateway.post("CountryService", "getCountries", null)
                                    .then( function(response){
                                        return CountryModel.countries = response.data.countries;
                                    });
                            }
                        },
                        'employees': function ($stateParams, EmployeeModel, EmployeeService) {
                            if(EmployeeModel.employees){
                                return EmployeeModel.employees;
                            } else {
                                return EmployeeService.getEmployees()
                                    .then(function(){
                                        return EmployeeModel.employees;
                                    });
                            }
                        }
                    }
                });

        }]);

})();