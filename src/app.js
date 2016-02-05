var app = angular.module("app", []);

app.controller("firstController", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});

angular.module("app")
    .controller("secondController", function () {
        var self = this;

        self.firstName = "John";
        self.lastName = "Doe";
    })
    .controller("thirdController", function () {
        var self = this;

        self.print = "This is working too";
    });


//// BEST OPTION
//app.controller("secondController", ['$scope', function($scope) {
//    $scope.firstName = "John";
//    $scope.lastName = "Doe";
//}]);



// BETTER OPTION IN secondController.js
