(function(){

  "use strict";

  angular
    .module('app')
    .directive('wwaTemperature', ['dataService', function(dataService) {
      return {
        templateUrl: 'app/widgets/wwaTemperature/wwaTemperatureTemplate.html',
        link: function(scope, el, attrs) {
          // Load data
          dataService.getLocation(scope.item.widgetSettings.id)
            .then(function(data) {
              scope.selectedLocation = data;
            });
        }
      };
    }]);

}());
