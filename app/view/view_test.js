'use strict';

describe('myApp.view module', function() {

    var dataService;

    beforeEach(module('myApp.view'));

    //beforeEach(module('myApp.service'));

    /*
    beforeEach(inject(function() {
        var $injector = angular.injector(['myApp.service'])

        createService = function() {
            return $injector.get('dataService');
        }
    }));
    */

    describe('view controller', function(){

        it('should ....', inject(function($controller, $rootScope, $q) {
            //spec body
            dataService = {
                getTotal: function(){return $q.when([5])},
                getFibonacci: function(){return $q.when([1,2,3])},
                getHistory: function(){return $q.when([])}
            };

            var $scope = $rootScope.$new();
            var viewCtrl = $controller('ViewCtrl', {$scope: $scope, dataService: dataService});
            expect(viewCtrl).toBeDefined();
        }));

    });
});