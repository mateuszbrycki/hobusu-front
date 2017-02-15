hobusu.controller("AccountDailySummary", function ($scope, $rootScope, $http) {

    $scope.get = function() {
        $http.get(API_ADDRESS + "/statistic/account/balance")
            .then(function (data, status, headers, config) {

                $scope.labels = [];
                $scope.data = [[]];

                for (var entry in data.data) {
                    $scope.labels.push(data.data[entry].day);
                    $scope.data[0].push(data.data[entry].amount);
                }

            });
    };

    $scope.get();

    //update transactions list after adding new
    $rootScope.$on('transactionListUpdate', function () {
        $scope.get();
    });

});
