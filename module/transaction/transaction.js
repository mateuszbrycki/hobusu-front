hobusu.controller('TransactionController', function($scope, $http, $cookies) {

    $http.get(API_ADDRESS + "/transaction")
        .then(function(data, status, headers, config) {
            $scope.transactions = data.data;
        });

    $scope.orderByField = 'id';
    $scope.reverseSort = false;
});