(function(){
    'use strict';
    angular.module('employeeDirectory').factory('EmployeeService', EmployeeService);

    var inject = ['BackendGateway', 'EmployeeModel'];
    function EmployeeService(BackendGateway, EmployeeModel) {

        return {
            getEmployees: getEmployees,
            reserveEmployeeId: reserveEmployeeId,
            deleteEmployee: deleteEmployee,
            getEmployee: getEmployee,
            saveEmployee: saveEmployee,
            uploadEmployeeImage: uploadEmployeeImage,
            getEmployeesNumber: getEmployeesNumber
        };

        //--------------------------------------------------------------------------

        function getEmployees(){
            return BackendGateway.post("EmployeeService", "getEmployees", null)
                .then(function(result){
                    EmployeeModel.employees = result.data.employees;
                    return EmployeeModel.employees;
                }
            );
        }


        function reserveEmployeeId() {
            return BackendGateway.post("EmployeeService", "reserveEmployeeId", null)
                .then( function(result) {
                    return result.data.employeeId;
                }
            );
        }

        function deleteEmployee(employee) {
            return BackendGateway.post("EmployeeService", "deleteEmployee", [employee.id])
                .then( function (){
                    if(EmployeeModel.employees.indexOf(employee)!=-1){
                        EmployeeModel.employees.splice(EmployeeModel.employees.indexOf(employee), 1);
                    }
                });

        }

        function getEmployee(employeeId) {
            return BackendGateway.post("EmployeeService", "getEmployee", [employeeId])
                .then( function(result){
                    if(result.data && result.data.employee){
                        return result.data.employee;
                    } else {
                        return {
                            id: employeeId,
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: "",
                            imageId: 0,
                            imageUrl: ""
                        };
                    }
                }
            );
        }

        function saveEmployee(employee){
            return BackendGateway.post("EmployeeService", "saveEmployee", [employee])
                .then(function(result){
                    return result.data.result===1;
                });
        }

        function uploadEmployeeImage(imageInput, employee) {
            if (imageInput.files && imageInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {

                    var image = {
                        id: 0,
                        fileName: imageInput.files[0].name,
                        fileData: e.target.result.replace(/data:image\/jpeg;base64,/g, ''),
                        employeeId: employee.id
                    };

                    BackendGateway.post("EmployeeService", "saveEmployeePicture", [image],
                        function(data){
                            employee.imageId = data.image.id;
                            employee.imageUrl = data.imageUrl;
                        }
                    );
                };

                //Renders Image on Page
                reader.readAsDataURL(imageInput.files[0]);
            }
        }

        function getEmployeesNumber() {
            return BackendGateway.post("EmployeeService", "getEmployeesNumber", null)
                .then(function(result){
                    return result.data.employeesNumber;
                });
        }
    }
    EmployeeService.$inject = inject;

})();