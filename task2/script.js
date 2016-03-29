var app = angular.module('task2', []);

app.controller('mainController', ['$scope', function($scope){
    $scope.rate = 3.14;
}])

app.component('tabControl', {
    transclude: true,
    controller: function() {
        var panes = this.panes = [];
        this.select = function(pane) {
            angular.forEach(panes, function(pane) {
                pane.selected = false;
            });
            pane.selected = true;
        };
        this.addPane = function(pane) {
            if (panes.length === 0) {
                this.select(pane);
            }
            panes.push(pane);
        };
    },
    templateUrl: 'tabs.html'
});

app.component('paneControl', {
    transclude: true,
    require: {
        tabsCtrl: '^tabControl'
    },
    bindings: {
        title: '@'
    },
    controller: function() {
        this.$onInit = function() {
            this.tabsCtrl.addPane(this);
            console.log(this);
        };
    },
    templateUrl: 'pane.html'
});