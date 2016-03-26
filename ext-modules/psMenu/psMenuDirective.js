(function() {

  "use strict";

  angular
    .module('psMenu')
    .directive('psMenu', function() {
      return {
        transclude: true,
        scope: {

        },
        templateUrl: 'ext-modules/psMenu/psMenutemplate.html',
        controller: 'psMenuCtrl',
        link: function(scope, el, attrs) {

        }
      };
    });

}());
