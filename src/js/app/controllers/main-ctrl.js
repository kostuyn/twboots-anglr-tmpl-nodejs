angular.module('ctrl.main', ['ui.router', 'services'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('main', {
                url: '/',
                templateUrl: 'main.html',
                controller: 'MainCtrl',
                resolve: {
                    items: ['itemService', function (itemService) {
                        return itemService.get();
                    }]
                }
            }
        );
    }])
    .controller('MainCtrl', ['$scope', 'items', function ($scope, items) {
        $scope.title = 'My title!';
        $scope.hello = function (name) {
            alert('Hello ' + name + '!');
        };

        $scope.items=items;
    }]);