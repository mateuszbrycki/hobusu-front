hobusu.controller('MostExpensiveTransactionController', function ($scope, $rootScope, $http) {

    //update monthly summry chart
    $rootScope.$on('transactionListUpdate', function () {
        $scope.get();
    });

    $scope.get = function () {
        $http.get(API_ADDRESS + "/statistic/transaction/expensive")
            .then(function (data, status, headers, config) {
                $scope.mostExpensiveTransactions = data.data;
            });
    };

    $scope.get();

});