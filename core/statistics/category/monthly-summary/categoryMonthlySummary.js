hobusu.controller('CategoryMonthlySummary', function ($scope, $http) {

    $http.get(API_ADDRESS + "/statistic/category/monthly")
        .then(function (data, status, headers, config) {

            /*data.forEach(function(entry) {
             console.log(entry.name)
             });*/

            $scope.labels = [];
            $scope.data = [];

            for (var entry in data.data) {
                $scope.labels.push(data.data[entry].category.name);
                $scope.data.push(data.data[entry].amount);
            }
        });



});