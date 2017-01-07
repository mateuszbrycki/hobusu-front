hobusu.controller('LoginController', function($scope, $http, $cookies, $rootScope) {
    $scope.login = function(user) {
        $http.post(API_ADDRESS + "/login", user)
         .then(function(data, status, headers, config) {
             $cookies.put(AUTHORIZATION_TOKEN, data.data);
             $rootScope.$broadcast("userAuthorizationAction");
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


