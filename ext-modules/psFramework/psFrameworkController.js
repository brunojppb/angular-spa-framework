(function() {

  angular
    .module('psFramework')
    .controller('psFrameworkController', ['$scope', function($scope) {

      // Listen to broadcast messages
      // subscribe to listen the 'ps-menu-item-selected-event'
      $scope.$on('ps-menu-item-selected-event', function(event, data) {
        $scope.routeString = data.route;
      });

    }]);

}());
