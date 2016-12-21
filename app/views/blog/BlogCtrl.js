angular.module('grabs').controller('BlogCtrl', ['$route', '$scope', function ($route, $scope) {
    'use strict';

    $scope.page = $route.current.params.page;
}]);
