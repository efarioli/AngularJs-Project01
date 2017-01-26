angular.module('eventApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/add-event', {
  	templateUrl: 'views/add-event.html',
    controller : 'formCtrl'
  	
  })
  .otherwise({
    redirectTo: '/',
    controller : 'MainCtrl'
  });
  $locationProvider.html5Mode(true);
}]);



