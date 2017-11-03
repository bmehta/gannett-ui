'use strict';

describe('myApp.view module', function() {

    beforeEach(module('myApp.view'));

    describe('view controller', function(){

        it('should ....', inject(function($controller, $rootScope) {
            //spec body
            var $scope = $rootScope.$new();
            var viewCtrl = $controller('ViewCtrl', {$scope: $scope});
            expect(viewCtrl).toBeDefined();
        }));

    });
});