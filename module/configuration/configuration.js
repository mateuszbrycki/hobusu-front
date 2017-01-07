var API_ADDRESS = "http://localhost:9000";
var AUTHORIZATION_TOKEN = "token";

var hobusu = angular.module('hobusu',['ngRoute', 'ngCookies']);
hobusu.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/module/account/forms.html"
        })
        .when('/login', {
            templateUrl: "/module/account/forms.html"
        })
        .when('/register', {
            templateUrl: "/module/account/forms.html"
        })
        .when('/logout', {
            templateUrl: "/module/account/forms.html",
            controller: "LogoutController"
        })
        .when('/transactions', {
            templateUrl: "/module/transaction/list.html",
            controller: "TransactionController"
        })
        .otherwise({
            redirectTo: '/'
        })
    ;
});

hobusu.config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

hobusu.factory('httpRequestInterceptor', function ($cookies) {
    var token = $cookies.get(AUTHORIZATION_TOKEN);
    return {
        request: function (config) {

            config.headers['Authorization'] = token;

            return config;
        }
    };
});

hobusu.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});