(function(){

  "use strict";

  angular
    .module('app')
    .controller('wwaSelectEmployeeController',
    ['$scope', 'dataService',
    function($scope, dataService){
      $scope.isLoaded = false;
      dataService.getEmployees()
        .then(function(data) {
          console.log(data);
          $scope.employees = data;
          $scope.isLoaded = true;

          for(var i = 0; i < data.length; i++) {
            if(data[i].id == $scope.item.widgetSettings.id) {
              $scope.selectedemployee = data[i];
            }
          }
      });

      $scope.saveSettings = function() {
        $scope.item.widgetSettings.id = $scope.selectedemployee.id;
        $scope.$parent.selectedEmployee = $scope.selectedEmployee;
        $scope.$close();
      };
    }]);

}());
