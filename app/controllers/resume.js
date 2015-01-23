angular.module('resumify')

.controller('resume',['$scope','$http', function($scope, $http){
  $scope.resumes = function()
{
  $http.get("/api/resumes")
  .success(function(response){
    $scope.data = response;
    console.log($scope.data);
  });
};

  $scope.skills=[];

  $scope.addSkill=function(){
    if(event.keyCode == 13 && $scope.skill){
      $scope.skills.push($scope.skill);
      $scope.skill = "";
    }
  };


}])
