var app= angular.module("MyMod",[])
app.controller("myController",function($scope,$interval,$location,$timeout,$window){
    $scope.Hellow = function(message){
        $window.alert("your messsage is :"+message)
    }
    $scope.DisplayAlert = function(name){
        $window.alert("your name is :"+name)
    }
    $scope.DisplayPrompt = function(){
        var fname = $window.prompt("Enter First Name")
        var lname = $window.prompt("Enter Last Name")
        $window.alert("Your Full name is "+fname+" "+lname);
    }
    $scope.Add = function(){
        var num1 = parseInt($window.prompt("Enter the first Number"))
        var num2 = parseInt($window.prompt("Enter the second Number"))
        $window.alert("Addition result is :"+(num1+num2));
    }
});