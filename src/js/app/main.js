angular.module('app', ['ui.router', 'services', 'directives', 'controllers'])
    .config([
        '$urlRouterProvider', '$locationProvider', '$stateProvider',
        function ($urlRouterProvider, $locationProvider, $stateProvider) {

            // routes
            $stateProvider
                .state('main', {
                    'url': '/',
                    templateUrl: 'mainPage.html',
                    controller: 'MainCtrl'
                });

            // html5 routing without #
            $urlRouterProvider.otherwise('/');
            //$locationProvider.html5Mode(true);
        }
    ]);