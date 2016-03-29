(function(){

  "use strict";

  angular
    .module('psDashboard')
    .directive('psDashboard', function() {
      return {
        templateUrl: 'ext-modules/psDashboard/psDashboardTemplate.html',
        link: function(scope, el, attrs, ctrl) {
          scope.addNewWidget = function(widget) {
            var newWidget = angular.copy(widget.settings);
            scope.widgets.push(newWidget);
          }
        }
      };
    });

}());
