/*jslint browser: true*/
/*global console, CarsApp*/

CarsApp.angular.controller('DetailPageController', ['$scope', '$http', 'InitService', function ($scope, $http, InitService) {
  'use strict';
  
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('DetailPageController: ok, DOM ready');

    // You can access angular like this:
    // CarsApp.angular
    
    // And you can access Framework7 like this:
    // CarsApp.fw7.app
  });
  
}]);