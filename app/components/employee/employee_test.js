(function(){
    'use strict';

    describe('employeeDirectory module', function() {

        beforeEach(module('employeeDirectory'));

        var employeeController;

        beforeEach(inject(function(_$controller_){
            var $scope = {};
            employeeController = _$controller_('EmployeeController', { $scope: $scope });
        }));

      describe('view1 controller', function(){

        it('should ....', inject(function() {
          //spec body
          expect(employeeController).toBeDefined();
        }));

      });
    });
})();