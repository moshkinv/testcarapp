/*jslint browser: true*/
/*global console, CarsApp, angular, Framework7*/

// Init angular
var CarsApp = {};

CarsApp.config = {
};

CarsApp.angular = angular.module('CarsApp', []);

CarsApp.fw7 = {
  app : new Framework7({
    animateNavBackIcon: true
  }),
  options : {
    dynamicNavbar: true,
    domCache: true
  },
  views : []
};