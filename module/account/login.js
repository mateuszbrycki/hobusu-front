hobusu.controller('LoginController', function($scope, $http, $rootScope, SessionService) {
    $scope.login = function(user) {
        $http.post(API_ADDRESS + "/login", user)
         .then(function(data, status, headers, config) {

             SessionService.saveToken(data.data);
             $rootScope.logged = SessionService.isLogged();

             $scope.result = {
                 message : 'User logged successfully',
                 status: "success"
             };

             $('#login-account').trigger("reset");

         }, function(data, status, headers, config) {
             $scope.result = {
                 message : 'Check passed data',
                 status: "danger"
             };
         });
    };

});


