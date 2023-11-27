var app = angular.module("MyMod",[])
app.controller("myController",function($scope){
    $scope.name="Quantique meta data pvt ltd."
    $scope.amount =23000;
    $scope.myDate = new Date();
});