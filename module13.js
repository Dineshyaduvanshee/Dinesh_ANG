var app = angular.module("MyMod",['ngRoute'])
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.
    when("/teacher",{
        templateUrl:'views/teacher.html',
        controller:'student_ctr'
    }). 
    when("/student",{
        templateUrl:'views/student.html',
        controller:'student_ctr'
    }). 
    when("/course",{
        templateUrl:'views/course.html',
        controller:'course_ctr'
    }). 
    when("/gallery",{
        templateUrl:'views/gallery.html',
        controller:'gallery_ctr'
    }). 
    otherwise({
        redirectTo:"index20.html",
        controller:'myController'
    })
}])
app.controller("teacher_ctr",function($scope){
    $scope.teachers=[
        {name:"Dinesh",age:23,qualification:"MCA"},
        {name:"Mahesh",age:22,qualification:"B-pharma"}
    ];
})
app.controller("student_ctr",function($scope){
    $scope.students=[
        {name:"Dinesh",age:23,qualification:"MCA"},
        {name:"Mahesh",age:22,qualification:"B-pharma"}
    ];
})
app.controller("course_ctr",function($scope){
    $scope.courses = [
        {course:"java",duration:23,qualification:"MCA"},
        {course:"python",duration:22,qualification:"B-pharma"}
    ];
})
app.controller("gallery_ctr",function($scope){
    $scope.images = [
        { imageid:1,image_url:"abc",img_name:"pic.jpg"},
        {imageid:2,image_url:"abc",img_name:"pic.png"}
    ];
})

