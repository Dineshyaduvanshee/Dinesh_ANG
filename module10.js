var app = angular.module("MyMod",[]);
app.controller("myController",function($scope,$interval,$location,$timeout){
    $scope.name = "Quantique meta data pvt ltd."
    $timeout(function(){
        $scope.name="Function si fired.."
    },4000)
});