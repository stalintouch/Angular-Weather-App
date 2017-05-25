weatherApp.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../pages/homePage.html',
    controller: 'homePageController'
  })
  .when('/forecast',{
    templateUrl: '../pages/forecast.html',
    controller: 'forecastController'
  })
  .when('/forecast/:days',{
    templateUrl: '../pages/forecast.html',
    controller: 'forecastController'
  })
})