(function() {

  "use strict";

  angular
    .module('psMenu')
    .directive('psMenu', ['$timeout', function($timeout) {
      return {
        transclude: true,
        scope: {

        },
        templateUrl: 'ext-modules/psMenu/psMenuTemplate.html',
        controller: 'psMenuCtrl',
        link: function(scope, el, attrs) {
          // Make sure that the first item on the menu will be selected
          var item = el.find('.ps-selectable-item').first();
          $timeout(function() {
            item.trigger('click');
          });
        }
      };
    }]);

}());
