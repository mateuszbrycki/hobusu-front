hobusu.controller('LogoutController', function($scope, $cookies, $http, $rootScope) {

    $http.get(API_ADDRESS + "/logout")
        .then(function(data, status, headers, config) {
            $cookies.remove(AUTHORIZATION_TOKEN);
            $rootScope.$broadcast("userAuthorizationAction");
        });
});