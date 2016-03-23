var app = angular.module('test1', []);

app.controller('test1Controller', function($scope) {
   $scope.sharedObject = {};
    $scope.sharedObject.value = 'Test 1';
});

app.controller('parentCtrl1', function($scope) {
    $scope.parent1 = 'Parent1';
});

app.controller('parentCtrl2', function($scope) {
    $scope.parent2 = 'Parent2';
});

app.controller('childCtrl1', function($scope) {
    $scope.child = 'Child1';
});

app.controller('childCtrl2', function($scope) {
    $scope.child = 'Child2';
});