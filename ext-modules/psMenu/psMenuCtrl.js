(function() {

    "use strict";

    angular
      .module('psMenu')
      .controller('psMenuCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

        $scope.showMenu               = true;
        $scope.openMenuScope          = null;
        $scope.isVertical             = true;
        $scope.allowHorizontalToggle  = true;

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
          $scope.isVertical = data.isVertical;
          $scope.allowHorizontalToggle = data.allowHorizontalToggle;
        });

        $scope.toggleMenuOrientation = function() {

          // Close any open menu
          if ($scope.openMenuScope) {
            $scope.openMenuScope.closeMenu();
          }

          $scope.isVertical = !$scope.isVertical;
          $rootScope.$broadcast('ps-menu-orientation-changed-event',
            {
              isMenuVertical: $scope.isVertical
            }
          );
        };

        this.isVertical = function() {
          return $scope.isVertical;
        };

        this.setOpenMenuScope = function(scope) {
          $scope.openMenuScope = scope;
        };

        // Observe any click on the DOM
        // and see if there is a opened menu
        angular.element(document).bind('click', function(e) {
          if($scope.openMenuScope && !$scope.isVertical) {
            if($(e.target).parent().hasClass('ps-selectable-item')) {
              return;
            }
            $scope.$apply(function() {
              $scope.openMenuScope.closeMenu();
            });
            e.preventDefault();
            e.stopPropagation();
          }
        });

      }]);

}());
