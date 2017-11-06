'use strict';

angular.module('myApp.view', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'view/view.html',
            controller: 'ViewCtrl as vm'
        });
    }])

    .controller('ViewCtrl', ['$scope', '$http', '$q', 'dataService', function ($scope, $http, $q, dataService) {
        var vm = this;
        vm.loading = true;
        vm.fibonacciNumbers = [];
        vm.history = [];

        vm.selectedNumber;
        vm.request1 = function(){
            return dataService.getFibonacci();
        };
        vm.request2 = function(){
            return dataService.getTotal();
        };
        vm.request3 = function(){
            return dataService.getHistory();
        };

        vm.request1().then(function (result) {
            vm.fibonacciNumbers = result.data;
            console.log('result data: ' + result.data);
        }, function (error) {
            console.error('Could not fetch fibonacci numbers: ' + JSON.stringify(error));
        });

        vm.request2().then(function (result) {
                vm.currentTotal = parseInt(result.data);
            }, function (error) {
                console.error('Could not fetch total data: ' + JSON.stringify(error));
            });

        vm.request3().then(function (result) {
                vm.history = result.data;
            }, function (error) {
                console.error('Could not fetch history data: ' + JSON.stringify(error));
            });

        // Make vm.loading false when all 3 requests have resolved
        $q.all([vm.request1, vm.request2, vm.request3]).then(function () {
            vm.loading = false;
        });

        // Function to post selection and also track it

        vm.trackSelected = function () {
            var deferred = $q.defer();
            var selectedNo = parseInt(vm.selectedNumber);
            if (vm.fibonacciNumbers.indexOf(selectedNo) > -1) {
                console.log(vm.selectedNumber);
                var data = '{"number":' + selectedNo + '}';
                console.log(data);

                var config = {
                    headers: {
                        'Content-type': 'application/text'
                    }
                };

                dataService.doPost(data, config).then(function () {
                    console.log('posted data successfully');
                    vm.history.push(selectedNo);
                    vm.currentTotal += selectedNo;
                    deferred.resolve();
                }, function (error) {
                    console.error('Could not post data successfully: ' + JSON.stringify(error));
                    deferred.reject(error);
                });
            }
            return deferred.promise;

        }


    }]);