// Defined Grabs Module
window.grabs = angular.module('grabs', [
        'ngRoute',
        'ngHead',
        'ngPrism',
        'ngCodepen',
        'ngDisqus'
    ]);

// Grabs Routing Configuration
angular.module('grabs').config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    'use strict';

    /* Blog */
    $routeProvider.when('/', {
        templateUrl: '/views/homepage/homepage.html'
    }).
    when('/:page', {
        templateUrl: '/views/blog/blog.html',
        controller: 'BlogCtrl'
    }).

    /* Other */
    otherwise({
        redirectTo: '/'
    });

    // HTML5 Push State
    $locationProvider.html5Mode(true);
}]);
