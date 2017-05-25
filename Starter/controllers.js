weatherApp.controller('homePageController',[ '$scope', '$location','forecast', function($scope, $location, forecast){
  $scope.name = 'pepe';
  $scope.city = forecast.city;
  $scope.$watch('city', function(){
    forecast.city = $scope.city
  })
  $scope.submit = function(){
    $location.path("/forecast")
  }
}])

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'weatherService', 'forecast', function($scope, $routeParams, weatherService, forecast){
  $scope.name = 'forecast';
  $scope.days = $routeParams.days || 2
  $scope.city = forecast.city;
  $scope.$watch('city', function(){
    forecast.city = $scope.city 
  })
  
  $scope.weatherResult = weatherService.getWeatherAPI($scope.city, $scope.days)
  $scope.convertToFahrenheit = function(degK){
    return Math.round((1.8 * (degK - 273)) + 32)
  }
}])