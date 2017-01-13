hobusu.controller('CategoryMonthlySummary', function ($scope, $http) {

    $http.get(API_ADDRESS + "/statistic/category/monthly")
        .then(function (data, status, headers, config) {

            /*data.forEach(function(entry) {
             console.log(entry.name)
             });*/

            $scope.labels = [];
            $scope.data = [];

            for (var property in data.data) {
                if (data.data.hasOwnProperty(property)) {
                    $scope.labels.push(property);
                    $scope.data.push(data.data[property]);
                }
            }


        });



});