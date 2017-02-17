hobusu.controller('TransactionMonthController', function ($scope, $rootScope, $http, transactionCategoryService) {

    $scope.availableMonths = function() {
        $http.get(API_ADDRESS + "/transaction-date")
            .then(function (data, status, headers, config) {
                $scope.availableMonthsData = data.data;
            });
    };

    $scope.list = function () {
        var today = new Date();
        var month = today.getMonth() + 1,
            year = today.getFullYear();

        $http.get(prepareRequestAddress(year, month))
            .then(function (data, status, headers, config) {
                $scope.transactions = data.data;
            });

    };

    $scope.update = function () {

        var selectedMonthSplit = $scope.selectedMonth.toString().split("-");
        var year = selectedMonthSplit[0],
            month = selectedMonthSplit[1];

        $http.get(prepareRequestAddress(year, month))
            .then(function (data, status, headers, config) {
                $scope.transactions = data.data;
            });

    };

    function prepareRequestAddress(year, month) {
        return API_ADDRESS + "/transaction/" + year + "/" + month;
    }
});