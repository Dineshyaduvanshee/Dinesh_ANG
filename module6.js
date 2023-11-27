var app = angular.module("MyMod",[]);
app.controller("myController",function($scope){
    $scope.fruits = ["apple","banana","mango","Grapes","Strawberry","Aprocot","Gauaua"];
    $scope.students = [
        {name:"Dinesh",gender:"male",class:"MCA"},
        {name:"Mahesh",gender:"male",class:"B-forma"},
        {name:"Ritesh",gender:"male",class:"B-tech"},
        {name:"Nilesh",gender:"male",class:"7th"},
        {name:"Avanyan",gender:"female",class:"2th"}

    ];
});