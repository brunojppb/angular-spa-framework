(function() {

    angular
      .module('psFramework')
      .directive('psFramework', function() {
        return {
          restrict: 'E',
          transclusion: true,
          templateUrl: 'ext-modules/psFramework/psFrameworkTemplate.html',
          scope: {

          },
          controller: "psFrameworkController"
        };
      });

}());
