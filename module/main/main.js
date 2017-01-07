hobusu.controller('MainController', function($scope, $http, $cookies) {

    var logged = ($cookies.get(AUTHORIZATION_TOKEN) != null) ? true : false;
    $scope.logged = logged;

    $scope.$on('userAuthorizationAction', function(){
        $scope.logged = logged;
    });
});