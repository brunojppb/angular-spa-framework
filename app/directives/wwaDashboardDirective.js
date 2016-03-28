(function(){

  "use strict";

  angular
    .module('app')
    .directive('wwaDashboard', function() {
      return {
        restrict: 'E',
        scope: {

        },
        template: '<h1>Dashboard Page</h1>'
      };
    });

}());
