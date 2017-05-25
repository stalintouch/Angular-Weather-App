weatherApp.directive('showForecast', function(){
  return {
    templateUrl: '../directives/showForecast.html',
    replace:true,
    scope: {
      weatherApi: '=',
      convertToFar: '&',
      dateFormat: '@'
    }
  }
})
