hobusu.controller('CategoryMonthlySummary', function ($scope, $rootScope, $http) {

    //update monthly summry chart
    $rootScope.$on('transactionListUpdate', function () {
        $scope.get();
    });

    $scope.get = function() {
        $http.get(API_ADDRESS + "/statistic/category/monthly")
            .then(function (data, status, headers, config) {

                $scope.labels = [];
                $scope.data = [];

                for (var entry in data.data) {
                    $scope.labels.push(data.data[entry].category.name);
                    $scope.data.push(data.data[entry].amount);
                }
            });
    };

    $scope.get();

});