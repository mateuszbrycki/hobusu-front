hobusu.controller('TransactionController', function ($scope, $http, transactionCategoryService) {

    $scope.orderByField = 'id';
    $scope.reverseSort = false;
    $scope.format = 'yyyy-MM-dd';

    transactionCategoryService.getList().then(function (data) {
        $scope.categories = data;
    });

    $scope.$on('transactionListUpdate', function () {
        $scope.get();
    });

    $scope.get = function () {
        $http.get(API_ADDRESS + "/transaction")
            .then(function (data, status, headers, config) {
                $scope.transactions = data.data;
            });
    };

    $scope.add = function (transaction) {
        $http.post(API_ADDRESS + "/transaction", transaction)
            .then(function (response) {
                $scope.$broadcast('transactionListUpdate');
            });
    };

});