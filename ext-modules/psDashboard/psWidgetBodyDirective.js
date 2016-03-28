(function(){

  "use strict";

  angular
    .module('psDashboard')
    .directive('psWidgetBody', ['$compile', function($compile) {
      return {
        templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
        link: function(scope, el, attrs, ctrl) {
          var newElement = angular.element(scope.item.template);
          el.append(newElement);
          $compile(newElement)(scope);
        }
      }
    }]);

}());
