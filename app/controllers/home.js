angular.module('resumify')

.controller('home',['$scope', function($scope){
    $scope.resumes = function()
    {
      alert("Home Controller is working");
    };

    

}])
