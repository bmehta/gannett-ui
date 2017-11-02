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
  vm.selectedNumber;
  $http.get('http://localhost:3000/api/fibonacci')
      .then(function(result){
        vm.fibonacciNumbers = result.data;
      }, function(error) {
        console.error('Could not fetch fibonacci numbers: ' + JSON.stringify(error));
      })

  vm.trackSelected = function(){
    console.log(typeof vm.selectedNumber);
    if (vm.fibonacciNumbers.indexOf(parseInt(vm.selectedNumber)) > -1) {
        console.log(vm.selectedNumber);
    }

  }
  
  

}]);