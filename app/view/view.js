'use strict';

angular.module('myApp.view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl as vm'
  });
}])

.controller('ViewCtrl', ['$scope', '$http', '$q', function($scope, $http, $q) {
  var vm=this;
  vm.loading = true;
  vm.fibonacciNumbers = [];
    vm.history = [];

  vm.selectedNumber;

  vm.request1 = $http.get('http://localhost:3000/api/fibonacci')
      .then(function(result){
        vm.fibonacciNumbers = result.data;
      }, function(error) {
        console.error('Could not fetch fibonacci numbers: ' + JSON.stringify(error));
      });

  vm.request2 = $http.get('http://localhost:3000/api/total')
      .then(function(result){
        vm.currentTotal= parseInt(result.data);
      }, function(error){

      });

    vm.request3 = $http.get('http://localhost:3000/api/history')
        .then(function(result){
            vm.history = result.data;
        }, function(error) {
            console.error('Could not fetch history data: ' + JSON.stringify(error));
        });

  $q.all([vm.request1, vm.request2], vm.request3).then(function(){
    vm.loading= false;
  });


  vm.trackSelected = function(){
    var selectedNo = parseInt(vm.selectedNumber);
    if (vm.fibonacciNumbers.indexOf(selectedNo) > -1) {
        console.log(vm.selectedNumber);
        var data = '{"number":' +  selectedNo + '}';
        console.log(data);

        var config = {headers: {
            'Content-type': 'application/text'
        }};

        $http.post('http://localhost:3000/api/post', data, config).then(function(){
            console.log('posted data successfully');
            vm.history.push(selectedNo);
            vm.currentTotal += selectedNo;
        }, function(error){
            console.error('Could not post data successfully: ' + JSON.stringify(error));
        });
    }

  }
  
  

}]);