var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.html",
        controller : "homeController"
    })
    .when("/about", {
        templateUrl : "about.html",
        controller : "aboutController"
    })
    .otherwise({
        template : "<h2>404 - Page Not Found</h2>"
    });
});

// Controllers
app.controller('homeController', function($scope) {
    $scope.message = "Welcome to Home Page!";
});

app.controller('aboutController', function($scope) {
    $scope.message = "Learn more about us on this page.";
});
