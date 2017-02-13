
(function(){
    'use strict';
    angular.module('employeeDirectory').factory('BackendGateway', BackendGateway);


    var inject = ['$http', '$log', 'Paths'];
    function BackendGateway($http, $log, Paths) {
        var gateway = {};

        var validateBackedEndpoint = function(service, method){
            var services = {
                'SessionService': [
                    'login',
                    'logout',
                    'getLoggedInUser'
                ],
                'CountryService': [
                    'getCountries'
                ],
                'ChatService': [
                    'getMessages',
                    'postMessage'
                ],
                'PositionService': [
                    'getPositions',
                    'getPosition',
                    'reservePositionId',
                    'savePosition',
                    'setPositionEmployee',
                    'deletePosition',
                    'getPositionsNumber'
                ],
                'EmployeeService': [
                    'getEmployees',
                    'getEmployee',
                    'deleteEmployee',
                    'saveEmployee',
                    'reserveEmployeeId',
                    'saveEmployeePicture',
                    'getEmployeesNumber'
                ]
            };

            return (services[service] && services[service].indexOf(method)!=-1);
        };


        gateway.post = function(service, method, params, success, error){
            if(!validateBackedEndpoint(service, method)){
                $log.error("Invalid backed endpoint  " + service + "." + method);
            }

            var callDataObj = {
                "serviceName": service,
                "methodName": method,
                "parameters": params
            };


            var req = {
                method: 'POST',
                dataType: 'json',
                url: Paths.backendUrl,
                headers: {'Content-Type':'application/json'},
                data: callDataObj
            };

            $log.debug("Call " + service + "." + method + " with params " + params);
            var resP = $http(req);
            if(success){
                resP.success(function(data){
                    if(success){
                        success(data);
                    }
                });
            }
            if(error){
                resP.error(function(){
                    $log.error("Error calling " + service + "." + method);
                    if(error){
                        error();
                    }
                });
            }

            return resP;
        };

        return gateway;
    }
    BackendGateway.$inject = inject;

})();

