(function() {

    angular
      .module('psFramework')
      .directive('psFramework', function() {
        return {
          restrict: 'E',
          transclusion: false,
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
