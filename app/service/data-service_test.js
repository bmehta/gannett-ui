'use strict';

describe('dataService', function() {

    beforeEach(module('myApp.service'));
    var $httpBackend, dataService;
    beforeEach(inject(function(_$httpBackend_, _dataService_){
        $httpBackend = _$httpBackend_;
        dataService = _dataService_;
    }));

    // after each test, this ensure that every expected http calls have been realized and only them
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it ('calls http backend to get data', function() {
       var fibonacci = [0,1,1,2,3];
        $httpBackend
            .when('GET', 'http://localhost:3000/api/fibonacci')
            .respond(200, {data: fibonacci});

        dataService.getFibonacci().success(function(result) {
            expect(result.data).toEqual(fibonacci);
        });

        $httpBackend.flush();

    });

    /*
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
    */
});