angular.module('controllers', ['services'])
    .controller('MainCtrl', ['$scope', 'myService', function ($scope, myService) {
        $scope.title = 'kostuyn';
        $scope.hello=function(name){
            myService.hello(name);
        };
    }]);