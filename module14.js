var app = angular.module("MyMod",[])
app.run(function($rootscope){
    $rootscope.name = "Root Scope";
});
app.controller("ctrl",function($scope){
    $scope.name="Quantitue meta data pvt ltd."
});
app.controller("ctrl2",function($scope){
    $scope.name="Dinesh yadav"
});