(function() {

  "use strict";

  angular
    .module('psFramework')
    .controller('psFrameworkController',
      ['$scope', '$window', '$timeout', '$rootScope', '$location',
        function($scope, $window, $timeout, $rootScope, $location) {

      $scope.isMenuButtonVisible  = true;
      $scope.isMenuVisible        = true;
      $scope.isMenuVertical       = true;
      $scope.isMenuButtonVisible  = false;

      // Listen to broadcast messages
      // subscribe to listen the 'ps-menu-item-selected-event'
      $scope.$on('ps-menu-item-selected-event', function(event, data) {
        $scope.routeString = data.route;
        $location.path(data.route);
        checkWidth();
        broadcastMenuState();
      });

      $scope.$on('ps-menu-orientation-changed-event', function(event, data) {
        $scope.isMenuVertical = data.isMenuVertical;
      });

      // Listen to screen resize
      $($window).on('resize.psFramework', function() {
        $scope.$apply(function() {
          checkWidth();
          broadcastMenuState();
        });
      });

      // Stop listenning resize event
      $scope.$on('$destroy', function() {
        $($window).off('resize.psFramework');
      });

      $scope.menuButtonClicked = function() {
        $scope.$apply(function() {
          $scope.isMenuVisible = !$scope.isMenuVisible;
          broadcastMenuState();
        });
      };

      var broadcastMenuState = function() {
        $rootScope.$broadcast('ps-menu-show',
          {
            show: $scope.isMenuVisible,
            isVertical: $scope.isMenuVertical,
            allowHorizontalToggle: !$scope.isMenuButtonVisible
          }
        );
      };

      $timeout(function() {
        checkWidth();
      }, 0);

      // Show/hide menu left and menu button
      // based on the window size
      var checkWidth = function() {
        var width = Math.max($($window).width(), $window.innerWidth);
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
      };

    }]);

}());
