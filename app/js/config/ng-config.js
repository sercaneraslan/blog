// Defined Grabs Module
var grabs = angular.module('grabs', [
        'ngRoute',
        'ngHead',
        'ngPrism',
        'ngCodepen',
        'ngDisqus'
    ]);

// Grabs Routing Configuration
grabs.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
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
