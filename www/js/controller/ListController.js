/*jslint browser: true*/
/*global console, CarsApp*/

CarsApp.angular.controller('ListController', ['$scope', '$http', 'InitService', function ($scope, $http, InitService) {
  'use strict';
  
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
    
    $scope.cars = [];
    
      $http.get('data.json').success(function (data) {
        $scope.cars = data;
    });
      
    // You can access angular like this:
    // CarsApp.angular
    
    // And you can access Framework7 like this:
    // CarsApp.fw7.app
  });
  
}]);