angular.module('resumify')

.controller('home',['$scope','$http', function($scope, $http){
    $scope.resumes = function()
    {
      $http.get("/api/resumes")
      .success(function(response){
        $scope.data = response;
        console.log($scope.data);
      });
    };







}])
