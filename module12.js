var app = angular.module("MyMod",['ngRoute'])
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/page1",{
        templateUrl:"views/page1.html",
        controller:'page1_ctr'
    }).
    when("/page2",{
        templateUrl:"views/page2.html",
        controller:'page2_ctr'
    }).
    when("/page3",{
        templateUrl:"views/page3.html",
        controller:'page3_ctr'
    }). 
    otherwise({
        redirectTo:"index19.html",
        controller:'myController'
    })
}]);
app.controller("myController",function(){

})

app.controller("page1_ctr",function($scope){
    $scope.user = [
        {name:'dinesh',email:'dineshyadav74950@gmil.com',password:'123'}
    ]
})
app.controller("page2_ctr",function(){

})
app.controller("page3_ctr",function(){

})