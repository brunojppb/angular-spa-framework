(function() {

    "use strict";

    angular
      .module('psMenu')
      .controller('psMenuCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.showMenu = true;

        this.setActiveElement = function(el) {
          $scope.activeElement = el;
        };

        this.getActiveElement = function() {
          return $scope.activeElement;
        };

        this.setRoute = function(route) {
          // Broadcast this message to all subscribers
          $rootScope.$broadcast('ps-menu-item-selected-event', {route: route});
        };

        $scope.$on('ps-menu-show', function(event, data) {
          $scope.showMenu = data.show;
          console.log('Sow menu: ' + $scope.showMenu);
        });

      }]);

}());
