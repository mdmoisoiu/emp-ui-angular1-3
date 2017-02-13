(function(){
    'use strict';
    angular.module('employeeDirectory').factory('PositionService', PositionService);

    var inject = ['BackendGateway', 'PositionModel'];
    function PositionService(BackendGateway, PositionModel) {

        return {
            getPositionsNumber: getPositionsNumber,
            getPositions: getPositions,
            reservePositionId: reservePositionId,
            deletePosition: deletePosition,
            savePosition: savePosition,
            getLineManagerPositions: getLineManagerPositions,
            getPosition: getPosition
        };

        //--------------------------------------------------------------------------

        function getPositionsNumber() {
            return BackendGateway.post("PositionService", "getPositionsNumber", null)
                .then(function(result){
                    return result.data.positionsNumber;
                });
        }

        function getPositions(){
            return BackendGateway.post("PositionService", "getPositions", null)
                .then(function (response){
                        PositionModel.positions = response.data.positions;
                        return PositionModel.positions;
                    }
                );
        }

        function reservePositionId(){
            return BackendGateway.post("PositionService", "reservePositionId", null)
                .then( function(response){
                    return response.data.positionId;
                });
        }

        function deletePosition(position){
            return BackendGateway.post("PositionService", "deletePosition", [position.id])
                .then(function(response){
                        if(response && response.data && response.data.result===1){
                            if(PositionModel.positions.indexOf(position)!=-1){
                                PositionModel.positions.splice(PositionModel.positions.indexOf(position), 1);
                            }
                        }
                    }
                );
        }

        function savePosition(position){
            return BackendGateway.post("PositionService", "savePosition", [position])
                .then( function(response){
                    return response.data.result===1;
                }
            );
        }

        function getPosition(positionId){
            return BackendGateway.post("PositionService", "getPosition", [positionId])
                .then( function(response){
                    if(response.data && response.data.position){
                        return response.data.position;
                    } else {
                        return {
                            id: positionId,
                            countryId: "",
                            lineManagerId: null,
                            employeeId: "",
                            name: ""

                        };
                    }
                }
            );
        }

        function getLineManagerPositions(positions, currentPositionId){
            var excludedPositionIds = [];
            var position = null;

            var positionChildrenIdById = [];
            for(var i=0;i<positions.length;i++){
                position = positions[i];
                if(!positionChildrenIdById[position.lineManagerId]){
                    positionChildrenIdById[position.lineManagerId] = [];
                }
                positionChildrenIdById[position.lineManagerId].push(position.id);
            }

            var markExcludedPositions = function(positionId) {
                excludedPositionIds[positionId] = 1;
                if(positionChildrenIdById[positionId]){
                    for(var i=0;i<positionChildrenIdById[positionId].length;i++){
                        markExcludedPositions(positionChildrenIdById[positionId][i]);
                    }
                }
            };
            markExcludedPositions(currentPositionId);

            var lineManagerPositions = [];
            for(var j=0;j<positions.length;j++){
                position = positions[j];
                if(excludedPositionIds[position.id]!=1){
                    lineManagerPositions.push(position);
                }
            }
            return lineManagerPositions;
        }
    }
    PositionService.$inject = inject;

})();