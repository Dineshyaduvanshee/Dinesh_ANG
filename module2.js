var app = angular.module("MyMod",[])
app.controller("MyController",function($scope){
    $scope.number=0;
    $scope.myFunction = function(){
        $scope.number++;//number = number + 1;
    }
});