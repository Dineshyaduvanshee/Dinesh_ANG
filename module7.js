var app = angular.module("MyMod",[])
app.controller("myController",function($scope){
    $scope.Employee = [
        {name:"Dinesh",designation:"Devoloper",age:23,salary:230000},
        {name:"Mahesh",designation:"Doctor",age:20,salary:340000000},
        {name:"Ritesh",designation:"pilot",age:18,salary:5000000000},
        {name:"Nilesh",designation:"polish",age:17,salary:340000000},
        {name:"Titu",designation:"Enginear",age:12,salary:450000000}
    ];
});