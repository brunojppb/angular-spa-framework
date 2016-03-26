(function() {

  angular
    .module('psFramework')
    .controller('psFrameworkController', ['$scope', '$window', function($scope, $window) {

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
        });
      });

      // Stop listenning resize event
      $scope.$on('$destroy', function() {
        $($window).off('resize.psFramework');
      });

      // Show/hide menu left and menu button
      // based on the window size
      var checkWidth = function() {
        var width = $($window).innerWidth();
        $scope.isMenuVisible = (width > 768);
        $scope.isMenuButtonVisible = !$scope.isMenuVisible;
        console.log('Menu: ' + $scope.isMenuVisible);
        console.log('Button: ' + $scope.isMenuButtonVisible);
      };

    }]);

}());
