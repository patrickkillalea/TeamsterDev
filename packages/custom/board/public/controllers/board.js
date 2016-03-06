'use strict';

/* jshint -W098 */
angular.module('mean.board').controller('BoardController', ['$scope', 'Global', 'Board',
  function($scope, Global, Board) {
    $scope.global = Global;
    $scope.package = {
      name: 'board'
    };
  }
]);
