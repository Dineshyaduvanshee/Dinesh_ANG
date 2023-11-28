var app = angular.module("MyMod",[])
app.controller("myController",function($scope){
    $scope.students = [
        {name:"Dinesh",gender:"male",class:"MCA"},
        {name:"Mahesh",gender:"male",class:"B-pharma"},
        {name:"Ritesh",gender:"male",class:"B-tech"},
        {name:"Nilesh",gender:"male",class:"upsc"},
        {name:"Titu",gender:"male",class:"engineer"}
    ];
    $scope.EmpView = "empTable.html"
});