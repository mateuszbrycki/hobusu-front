hobusu.controller('TransactionController', function ($scope, $http, transactionCategoryService) {

    $scope.orderByField = 'date';
    $scope.reverseSort = true;

    $scope.validateOptions = {
        rules: {
            category: {
                required:true
            },
            amount: {
                required: true,
                number: true
            },
            date: {
                required: true,
                date: true
            },
            description: {
                required: true,
                minlength: 3
            }
        }
    };

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
        /*$http.post(API_ADDRESS + "/transaction", transaction)
         .then(function (response) {
         $scope.$broadcast('transactionListUpdate');
         });*/
        console.log(transaction);
    };

});