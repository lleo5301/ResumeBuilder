var resumify = angular.module('resumify', ['ngRoute']);

resumify.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){

  $routeProvider.when("/", {
    controller:"home",
    templateUrl:'/views/index.html'
  });
  $routeProvider.when("/new",{
    controller:"home",
    templateUrl:'/views/new.html'
  } )



}]);
