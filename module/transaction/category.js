hobusu.service('transactionCategoryService', function ($http) {

   this.getList = function() {
       var promise = $http.get(API_ADDRESS + "/category")
           .then(function (data, status, headers, config) {
               return data.data;
           });

       return promise;
   };

});