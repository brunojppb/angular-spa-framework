(function() {

  "use strict";

  angular
    .module('psFramework')
    .controller('psFrameworkController',
      ['$scope', '$window', '$timeout', '$rootScope',
        function($scope, $window, $timeout, $rootScope) {

      $scope.isMenuButtonVisible  = true;
      $scope.isMenuVisible        = true;

      // Listen to broadcast messages
      // subscribe to listen the 'ps-menu-item-selected-event'
      $scope.$on('ps-menu-item-selected-event', function(event, data) {
        $scope.routeString = data.route;
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
        $scope.isMenuVisible = !$scope.isMenuVisible;
        broadcastMenuState();
        $scope.$apply();
      };

      var broadcastMenuState = function() {
        $rootScope.$broadcast('ps-menu-show', {show: $scope.isMenuVisible});
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
