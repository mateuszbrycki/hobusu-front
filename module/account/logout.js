hobusu.controller('LogoutController', function($scope, SessionService, $http, $rootScope, $location) {

    $http.get(API_ADDRESS + "/logout")
        .then(function(data, status, headers, config) {
            SessionService.clearToken();
            $rootScope.logged = SessionService.isLogged();
            $location.path("/");
        });
});