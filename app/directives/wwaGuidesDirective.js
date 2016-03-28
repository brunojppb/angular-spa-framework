(function(){

  "use strict";

  angular
    .module('app')
    .directive('wwaGuides', function() {
      return {
        restrict: 'E',
        scope: {

        },
        template: '<h1>Guides Page</h1>'
      };
    });

}());
