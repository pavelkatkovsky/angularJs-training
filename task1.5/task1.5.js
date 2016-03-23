/**
 * Created by palych on 3/23/2016.
 */
var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){
    $scope.message = "Task 1.5"
}])

app.controller('firstController', ['$scope', function($scope){
    $scope.header = 'Journal List';
    $scope.body = 'Journal Body';
    $scope.footer = 'footer @';

    $scope.myRightButton = function (bool) {
        alert('!!! first function call!');
    };
}]);

app.controller('secondController', ['$scope', function($scope){
    $scope.header = 'Movies';
    $scope.body = 'Movie body';
    $scope.footer = 'footer CC';

    $scope.myRightButton = function (bool) {
        alert('!!! first function call!');
    };
}]);

app.directive('modal', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            title: '=modalTitle',
            header: '=modalHeader',
            body: '=modalBody',
            footer: '=modalFooter',
            callbackbuttonleft: '&ngClickLeftButton',
            callbackbuttonright: '&ngClickRightButton',
            handler: '=lolo'
        },
        templateUrl: 'modal.html',
        controller: function ($scope) {
            $scope.handler = 'pop';
        },
    };
});