var API_ADDRESS = "http://localhost:9000";
var AUTHORIZATION_TOKEN = "token";

var hobusu = angular.module('hobusu', ['ngRoute', 'ngCookies', 'chart.js', 'ngValidate']);

hobusu.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/module/account/forms.html"
        })
        /*.when('/login', {
         templateUrl: "/module/account/forms.html"
         })
         .when('/register', {
         templateUrl: "/module/account/forms.html"
         })*/
        .when('/logout', {
            templateUrl: "/module/account/forms.html",
            controller: "LogoutController"
        })
        /*.when('/transactions', {
         templateUrl: "/module/transaction/list.html",
         controller: "TransactionController"
         })*/
        .otherwise({
            redirectTo: '/'
        })
    ;
});

hobusu.config(function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

hobusu.factory('authenticationFactory', function (SessionService) {
    return {
        request: function (config) {

            if (SessionService.isLogged()) {
                config.headers.authorization = SessionService.getToken();
            }

            return config;
        }
    };
});

hobusu.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authenticationFactory');
});

//TODO mbrycki refactor charts
hobusu.controller("LineCtrl", function ($scope) {

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
    $scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
    $scope.options = {
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                },
                {
                    id: 'y-axis-2',
                    type: 'linear',
                    display: true,
                    position: 'right'
                }
            ]
        }
    };
});
