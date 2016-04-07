(function () {
    'use strict';
    
    angular.module('carsApp', []).controller('ListControlles', ['$scope', '$http', function($scope, $http) {
        $http.get('data.json').success(function (data) {
        $scope.cars = data;
        myApp.alert(data[0]);
    });
    }])

})();