hobusu.service('transactionCategoryService', function ($http) {

   this.getList = function() {
       var promise = $http.get(API_ADDRESS + "/category")
           .then(function (data, status, headers, config) {
               return data.data;
           });

       return promise;
   };

});

hobusu.controller('TransactionCategoryController', function ($scope, $rootScope, $http) {

    $scope.add = function (transactionCategory) {

        $http.post(API_ADDRESS + "/category", transactionCategory)
            .then(function (response) {
                $rootScope.$broadcast('transactionCategoryListUpdate');

                //refresh form
                $("#add-transaction-category-form").trigger("reset");
                $("#add-transaction-category-form").validate().resetForm();
            });
    };


});