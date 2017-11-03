'use strict';

describe('myApp.view module', function() {

    var dataService;

    beforeEach(module('myApp.view'));

    describe('view controller', function(){

        it('should ....', inject(function($controller, $rootScope, $q) {
            //spec body
            dataService = {
                getTotal: function(){return $q.when([3])},
                getFibonacci: function(){return $q.when([0,1,1,2,3])},
                getHistory: function(){return $q.when([1,2])}
            };

            var $scope = $rootScope.$new();
            var viewCtrl = $controller('ViewCtrl', {$scope: $scope, dataService: dataService});
            expect(viewCtrl).toBeDefined();
            expect(viewCtrl.fibonacciNumbers).toBeDefined();
            expect(viewCtrl.history).toBeDefined();
            expect(viewCtrl.trackSelected).toBeDefined();
        }));

    });
});