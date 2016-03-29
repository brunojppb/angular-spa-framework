(function(){

  "use strict";

  angular
    .module('psDashboard')
    .directive('psWidgetBody', ['$compile', '$uibModal', function($compile, $uibModal) {
      return {
        templateUrl: 'ext-modules/psDashboard/psWidgetBodyTemplate.html',
        link: function(scope, el, attrs, ctrl) {
          var newElement = angular.element(scope.item.template);
          el.append(newElement);
          $compile(newElement)(scope);

          scope.settings = function() {
            console.log('Hello');
            var options = {
              templateUrl: scope.item.widgetSettings.templateUrl,
              controller: scope.item.widgetSettings.controller,
              scope: scope
            };
            $uibModal.open(options);
          };


          scope.close = function() {
            console.log('Hello');
            scope.widgets.splice(scope.widgets.indexOf(scope.item), 1);
          };
        }
      }
    }]);

}());
