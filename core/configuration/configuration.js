var API_ADDRESS = "http://localhost:9000";
var AUTHORIZATION_TOKEN = "token";

var hobusu = angular.module('hobusu', ['ngRoute', 'ngCookies', 'chart.js', 'ngValidate']);

hobusu.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "/core/account/forms.html"
        })
        /*.when('/login', {
         templateUrl: "/module/account/forms.html"
         })
         .when('/register', {
         templateUrl: "/module/account/forms.html"
         })*/
        .when('/logout', {
            templateUrl: "/core/account/forms.html",
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

hobusu.factory('authenticationFactory', function ($q, $rootScope, SessionService) {
    return {
        'request' : function (config) {

            if (SessionService.isLogged()) {
                config.headers.authorization = SessionService.getToken();
            }

            return config;
        },
        'responseError': function(rejection) {
            if(rejection.status === 401) {
                SessionService.clearToken();
                $rootScope.logged = SessionService.isLogged();
            }

            return $q.reject(rejection);
        }
    };
});


hobusu.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authenticationFactory');
});