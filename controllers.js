// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$filter', '$routeParams', 'cityService', function($scope, $resource, $filter, $routeParams, cityService) {

  $scope.city = cityService.city;
  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days, APPID: "7604a9f22b05b9e422a9386de8a5e3df" });

  $scope.convertToCelcius = function(degK) {
    return degK - 273.15;
  }

}]);
