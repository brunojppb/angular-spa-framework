(function() {

    angular
      .module('psMenu')
      .controller('psMenuCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        this.setActiveElement = function(el) {
          $scope.activeElement = el;
        };

        this.setRoute = function(route) {
          // Broadcast this message to all subscribers
          $rootScope.$broadcast('ps-menu-item-selected-event', {route: route});
        };

        this.getActiveElement = function() {
          return $scope.activeElement;
        }

      }]);

}());
