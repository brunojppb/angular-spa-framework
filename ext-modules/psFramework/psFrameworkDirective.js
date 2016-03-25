(function() {

    angular
      .module('psFramework')
      .directive('psFramework', function() {
        return {
          restrict: 'E',
          transclude: true,
          templateUrl: 'ext-modules/psFramework/psFrameworkTemplate.html',
          scope: {
            title: "@",
            subtitle: "@",
            iconFile: "@"
          },
          controller: "psFrameworkController"
        };
      });

}());
