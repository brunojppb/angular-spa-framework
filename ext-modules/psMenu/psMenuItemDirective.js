(function() {

  "use strict";
  
    angular
      .module('psMenu')
      .directive('psMenuItem', function() {
        return {
          require: '^psMenu',
          scope: {
            label: '@',
            icon: '@',
            route: '@'
          },
          templateUrl:'ext-modules/psMenu/psMenuItemTemplate.html',
          link: function(scope, el, attrs, ctrl) {

            scope.isActive = function() {
              return el === ctrl.getActiveElement();
            };

            el.on('click', function(event) {
              event.stopPropagation();
              event.preventDefault();
              // Jquery events Angular does not watch
              // So we need to use scope.$apply
              scope.$apply(function() {
                ctrl.setActiveElement(el);
                ctrl.setRoute(scope.route);
              });
            })
          }
        };
      });

}());
