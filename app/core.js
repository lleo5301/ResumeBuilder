var resumify = angular.module('resumify', ['ngRoute']);

resumify.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){

  $routeProvider.when("/", {
    controller:"home",
    });



}]);
