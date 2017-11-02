'use strict';

/*TODO
* Change README.md
* Remove everything for view1 and view2
* */
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
    'myApp.view',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view'});
}]);
