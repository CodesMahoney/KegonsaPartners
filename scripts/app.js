var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "main.html"
        })
        .when("/InvestmentStrategy", {
            templateUrl: "strategy.html"
        })
        .when("/Benchmarks", {
            templateUrl: "benchmarks.html"
        })
        .when("/Portfolio", {
            templateUrl: "portfolio.html"
        });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});