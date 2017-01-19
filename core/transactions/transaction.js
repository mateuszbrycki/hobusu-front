hobusu.controller('TransactionController', function ($scope, $rootScope, $http, transactionCategoryService) {

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

    //update transactions list after adding new
    $rootScope.$on('transactionListUpdate', function () {
        $scope.get();
    });

    $scope.get = function () {
        $http.get(API_ADDRESS + "/transaction")
            .then(function (data, status, headers, config) {
                $rootScope.transactions = data.data;
            });
    };

    $scope.add = function (transaction) {
        $http.post(API_ADDRESS + "/transaction", transaction)
         .then(function (response) {
            $rootScope.$broadcast('transactionListUpdate');

             //refresh form
             $("#add-transaction-form").trigger("reset");
             $("#add-transaction-form").validate().resetForm();
         });
    };

    $scope.delete = function(id) {
        $http.delete(API_ADDRESS + "/transaction/" + id)
            .then(function(response) {
                $rootScope.$broadcast('transactionListUpdate');
            });
    }

});