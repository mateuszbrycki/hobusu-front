
hobusu.controller('RegistrationController', function($scope, $http, $cookies, $rootScope) {
    $scope.register = function(user) {
        $http.post(API_ADDRESS + "/register", user)
            .then(function(data, status, headers, config) {
                $rootScope.$broadcast("userAuthorizationAction");
                $scope.result = {
                    message : 'User registered successfully',
                    status: "success"
                };
                $('#register-account').trigger("reset");

            }, function(data, status, headers, config) {
                $scope.result = {
                    message : data.data,
                    status: "danger"
                };
            });
    };

});