var app=angular.module("MyMod",[]);
app.controller("MyController",function($scope){
    $scope.fruits=["apple","banana","grapes","Mango","pineapple"];
    $scope.student = {name:"Dinesh",gender:"male",age:16}
    $scope.employee = [
        {name:"diensh",city:"mumbai",age:22},
        {name:"pihu",city:"allahabad",age:15},
        {name:"mahesh",city:"allahabad",age:12},
        {name:"Ritesh",city:"allahabad",age:11},
        {name:"Nilesh",city:"jaunpur",age:10}
    ]
});