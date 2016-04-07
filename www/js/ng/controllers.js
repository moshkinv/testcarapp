function ListCtrl($scope, $http) {
    
    $scope.cars = [];
    $http.get('data.json').success(function (data) {
        $scope.cars = data;
    });
    
    $scope.test = 1;
};