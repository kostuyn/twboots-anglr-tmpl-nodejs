angular.module('ctrl.item', ['ui.router', 'services'])
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('main.item', {
            url: '/:itemId',
            templateUrl: 'main.item.html',
            controller: 'ItemCtrl',
            resolve: {
                item: ['$stateParams', 'itemService', function ($stateParams, itemService) {
                    return itemService.getById($stateParams.itemId);
                }]
            }
        });
    }])
    .controller('ItemCtrl', ['$scope', 'item', function ($scope, item) {
        $scope.item = item;
    }]);