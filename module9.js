var app = angular.module("MyMod",[])
app.controller("myController",function($scope,$location,$interval){
    $scope.url = $location.absUrl();
    $scope.protocol = $location.protocol();
    $scope.host = $location.host();
    $scope.port = $location.port();
    $scope.count = 0;
    $interval(function(){
        $scope.count++;
    },1000);
    $interval(function(){
        $scope.dateAndTime = new Date();
    },1000)
});