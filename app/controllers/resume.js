angular.module('resumify')

.controller('resume',['$scope','$http', function($scope, $http){

  //empty resume
  $scope.resume = {};
  //empty address
  $scope.Address={};
  $scope.skills=[];
  $scope.experience=[];
  $scope.resumeHtml = angular.element(document.getElementById('resume-preview'));

  $scope.resumes = function(){
    $http.get("/api/resumes")
    .success(function(response){
      $scope.data = response;
      console.log($scope.data);
    });
  };



  $scope.addSkill=function(){
    if(event.keyCode == 13 && $scope.skill){
      $scope.skills.push($scope.skill);
      $scope.skill = "";
      $scope.resume.Skills=$scope.skills;
    }
  };


  $scope.save=function(){
      //add address to resume
      $scope.resume.Address = $scope.Address;
      $scope.resume.Skills = $scope.skills;
      $http.post('/api/resumes', $scope.resume)
      .success(function(data){
        console.log(data);
        $scope.resume=data;
        console.log($scope.resumeHtml)
      })
      .error(function(data){
        console.log('Error:' + data);
      });
  };

  //pdf
  $scope.pdf=function(){
    var html={data:$scope.resumeHtml[0].innerHTML};
    console.log(html)

    $http.post('/api/topdf', html)
    .success(function(data){
      console.log(data);

    })
    .error(function(data){
      console.log("Error: " + data);
    });
  };

}])
