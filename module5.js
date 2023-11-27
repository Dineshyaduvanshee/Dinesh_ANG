var app = angular.module("MyMod",[]);
app.controller("myController",function($scope){
    $scope.name = ["Dinesh","mahesh","Ritesh","Nilesh","titu"];
    $scope.employees = [
        {Name:"Dinesh",City:"allahabad",Age:23},
        {Name:"Mahesh",City :"jaunpur",Age:19},
        {Name:"Ritesh",City:"allahabad",Age:17},
        {Name:"Nilesh",City:"bhadohi",Age:12},
        {Name:"Titu",City:"pune",Age:2}
    ];
    $scope.myFunction = function(x)
    {
        $scope.order = x;
    }
});