angular.module('myApp.service',[])
    .factory('dataService', ['$http', function($http) {

        var urlBase = 'http://localhost:3000/api';
        var dataService = {};

        dataService.getFibonacci = function() {
            return $http.get(urlBase + '/fibonacci');
        };

        dataService.getTotal = function() {
            return $http.get(urlBase + '/total');
        };

        dataService.getHistory = function() {
            return $http.get(urlBase + '/history');
        };

        dataService.doPost = function(data, config) {
            return $http.post(urlBase + '/post', data, config);
        };

        return dataService;
    }]);
