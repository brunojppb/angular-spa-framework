(function(){

  "use strict";

  angular
    .module('app')
    .directive('wwaLocations', function() {
      return {
        restrict: 'E',
        scope: {

        },
        template: '<h1>Locations Page</h1>'
      };
    });

}());
