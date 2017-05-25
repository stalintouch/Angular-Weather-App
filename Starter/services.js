weatherApp.service('forecast', function(){
  var self = this;
  self.city = 'Toronto'
})

weatherApp.service('weatherService', ['$resource', function($resource){ 
  
  this.getWeatherAPI = function(city, days){
    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
      callback: "JSON_CALLBACK"},{get: { method: 'JSONP'} });

    return weatherAPI.get({ APPID: '894294019585b32a9a34427f5052f1ee', q: city, cnt: days })
  }
}])