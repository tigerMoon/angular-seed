'use strict';
/* http://docs.angularjs.org/#!angular.service */
var myApp = angular.module('myApp',['ngRoute','demoControllers']);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/pages.html',
        controller: 'PaginationDemoCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
