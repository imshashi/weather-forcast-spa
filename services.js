// SERVICES
weatherApp.service('cityService', function() {

  this.city = "Indore, MP";

});

weatherApp.service('weatherService', ['$resource', function($resource) {

  this.getWeather = function(city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

    return weatherAPI.get({ q: city, cnt: days, APPID: "7604a9f22b05b9e422a9386de8a5e3df" });
  }

}]);

