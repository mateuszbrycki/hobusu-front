hobusu.controller('MainController', function($scope, $rootScope, SessionService) {
    $rootScope.logged = SessionService.isLogged();
});