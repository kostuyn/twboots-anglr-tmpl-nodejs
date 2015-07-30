angular.module('directives', [])
    .directive('myDirective', [function () {
        return {
            restrict: 'AE',
            scope: {
                value: '=value'
            },
            link: function (scope, element, attrs) {
                console.log('directive: ' + scope.value);
            },
            templateUrl: 'myDirective.html'
        };
    }]);