/**
 * Created by palych on 3/23/2016.
 */
var app = angular.module('app', []);

app.controller('mainController', ['$scope', function($scope){
    $scope.message1 = "Task 1.5 directive"
    $scope.message2 = "Task 1.5 component"
}])

app.controller('firstController', ['$scope', function($scope){
    $scope.header = 'Journal List';
    $scope.body = 'Journal Body';
    $scope.footer = 'footer @';
    $scope.handler = "journalModal";
    $scope.title = "title-test";

    $scope.myRightButton = function (bool) {
        alert('!!! first function call!');
    };
}]);

app.controller('secondController', ['$scope', function($scope){
    $scope.header = 'Movies';
    $scope.body = 'Movie body';
    $scope.footer = 'footer CC';
    $scope.handler = "movieModal";
    $scope.title = "title-test";

    $scope.myRightButton = function (bool) {
        alert('!!! first function call!');
    };
}]);

app.directive('modal', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            handler: '@',
            title: '=',
            header: '=modalHeader',
            body: '=modalBody',
            footer: '=modalFooter',
            callbackbuttonleft: '&ngClickLeftButton',
            callbackbuttonright: '&ngClickRightButton'
       },
        templateUrl: 'modal.html'
    };
});

var options = {
    restrict: 'E',
    transclude: true,
    bindings: {
        handler: '@',
        title: '=',
        header: '=modalHeader',
        body: '=modalBody',
        footer: '=modalFooter',
        callbackbuttonleft: '&ngClickLeftButton',
        callbackbuttonright: '&ngClickRightButton'
    },
    templateUrl: 'modal.html'
}

app.component('modalComponent', options);