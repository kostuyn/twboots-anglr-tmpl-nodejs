angular.module('services', [])
    .factory('myService', [function () {
        return {
            hello: function (name) {
                console.log('Hello, ' + name + '!');
            }
        };
    }]);