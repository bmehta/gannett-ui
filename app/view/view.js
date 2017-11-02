'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl as vm'
  });
}])

.controller('ViewCtrl', ['$scope', '$http', function($scope, $http) {
  var vm=this;
  vm.fibonacciNumbers = [];
  $http.get('http://localhost:3000/api/fibonacci')
      .then(function(result){
        vm.fibonacciNumbers = result.data;
      }, function(error) {
        console.error('Could not fetch fibonacci numbers: ' + JSON.stringify(error));
      })
  
  

}]);