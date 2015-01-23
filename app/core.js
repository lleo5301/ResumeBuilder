var resumify = angular.module('resumify', ['ngRoute']);

resumify.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){

  $routeProvider.when("/", {
    controller:"home",
    templateUrl:'/views/home.html'
  });
  $routeProvider.when("/new",{
    controller:"resume",
    templateUrl:'/views/new.html'
  });



}]);
