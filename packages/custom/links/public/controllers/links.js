'use strict';

/* jshint -W098 */
angular.module('mean.links').controller('LinksController', ['$scope', 'Global', 'Links',
  function($scope, Global, Links) {
    $scope.global = Global;
    $scope.package = {
      name: 'links'
    };
  }
]);
