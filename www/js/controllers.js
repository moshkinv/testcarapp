function ListController($scope, $http) {

    $http.get('data.json').success(function (data) {
        $scope.cars = data;
        myApp.alert(data[0]);
    });
    
    $scope.test = $scope.cars[0];
}