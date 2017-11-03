angular.module('myApp.service',[])
    .factory('dataService', ['$http', function($http) {

        var urlBase = 'http://localhost:3000/api';
        var dataService = {};

        dataService.getFibonacci = function() {
            return $http.get(urlBase + '/fibonacci');
        };

        dataService.getTotal = function() {
            return $http.get('http://localhost:3000/api/total');
        };

        dataService.getHistory = function() {
            return $http.get('http://localhost:3000/api/history');
        };

        dataService.doPost = function(data, config) {
            return $http.post('http://localhost:3000/api/post', data, config);
        };

        return dataService;
    }]);
